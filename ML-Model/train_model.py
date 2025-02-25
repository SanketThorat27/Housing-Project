import pandas as pd
import numpy as np
import xgboost as xgb
import pickle
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import RobustScaler
from sklearn.metrics import mean_absolute_error

# 🔹 1️⃣ Load Dataset
dataset_path = r"E:\Housing Project\Housing-Project\ML-Model\Data\Merged_Housing.csv"
df = pd.read_csv(dataset_path)

# 🔹 2️⃣ Preprocessing

# Define base features
features = ["latitude", "longitude", "households", "housing_median_age", "population", "median_income"]

# Check if 'total_rooms' exists to create `rooms_per_household`
if "total_rooms" in df.columns:
    df["rooms_per_household"] = df["total_rooms"] / df["households"]
    features.append("rooms_per_household")  # Add new feature

target = "median_house_value"

# Ensure required columns exist
missing_cols = [col for col in features + [target] if col not in df.columns]
if missing_cols:
    raise ValueError(f"Missing columns in dataset: {missing_cols}")

X = df[features]
y = df[target] / 1_000_000  # Scale target to millions

# Handle missing values
X = X.copy()  # Avoid SettingWithCopyWarning
X.fillna(X.median(), inplace=True)  # Use median instead of mean for better robustness

# Normalize using RobustScaler (better for outliers)
scaler = RobustScaler()
X_scaled = scaler.fit_transform(X)

# 🔹 3️⃣ Train-Test Split
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# Further refined XGBoost model
model = xgb.XGBRegressor(
    n_estimators=950,      # Increased from 900 → 950 for better learning
    learning_rate=0.015,   # Reduced from 0.02 → 0.015 for smoother convergence
    max_depth=9,           # Slightly deeper trees for complex interactions
    subsample=0.9,         # Keeping high sample usage
    colsample_bytree=0.9,  # More feature coverage per tree
    early_stopping_rounds=15,  # Avoids overfitting by stopping early
    eval_metric="rmse"
)




# Fit model and monitor performance on validation set
model.fit(X_train, y_train, eval_set=[(X_test, y_test)], verbose=True)

# 🔹 5️⃣ Evaluate Performance
y_pred = model.predict(X_test) * 1_000_000  # Convert predictions back to original scale
mae = mean_absolute_error(y_test * 1_000_000, y_pred)
print(f"✅ Mean Absolute Error: {mae:.2f}")

# 🔹 6️⃣ Save Model & Scaler
with open("global_housing_model.pkl", "wb") as f:
    pickle.dump(model, f)

with open("scaler.pkl", "wb") as f:
    pickle.dump(scaler, f)  # Save the scaler for consistent future preprocessing

# Print feature importance after training
feature_importance = model.feature_importances_
for feature, importance in zip(features, feature_importance):
    print(f"{feature}: {importance:.4f}")

print("🎯 Global model trained and saved as 'global_housing_model.pkl'.")










# import numpy as np
# import pandas as pd
# from sklearn.model_selection import train_test_split
# from sklearn.preprocessing import StandardScaler
# from xgboost import XGBRegressor
# from sklearn.metrics import mean_absolute_error
# import joblib
# from sklearn.datasets import fetch_california_housing

# # Load the California Housing dataset
# data = fetch_california_housing()
# X = pd.DataFrame(data.data, columns=data.feature_names)
# y = data.target  # Target variable (house price)

# # Split data into training & testing sets
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# # Standardize features
# scaler = StandardScaler()
# X_train_scaled = scaler.fit_transform(X_train)
# X_test_scaled = scaler.transform(X_test)

# # Train an XGBoost regression model
# model = XGBRegressor(n_estimators=100, learning_rate=0.1, random_state=42)
# model.fit(X_train_scaled, y_train)

# # Evaluate model performance
# y_pred = model.predict(X_test_scaled)
# mae = mean_absolute_error(y_test, y_pred)
# print(f"Mean Absolute Error: {mae}")

# # Save the trained model & scaler
# joblib.dump(model, "xgboost_housing_model.pkl")
# joblib.dump(scaler, "scaler.pkl")

# print("Model training complete. Model saved as 'xgboost_housing_model.pkl'.")
