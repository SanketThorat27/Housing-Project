import pickle
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler

# Load trained model
with open("global_housing_model.pkl", "rb") as f:
    model = pickle.load(f)

# Define sample test cases (Real-world like data)
test_data = pd.DataFrame([
    {"latitude": 34.05, "longitude": -118.25, "households": 1200, "housing_median_age": 30, "population": 4000, "median_income": 4.5},  # Los Angeles-like area
    {"latitude": 37.77, "longitude": -122.42, "households": 850, "housing_median_age": 50, "population": 3000, "median_income": 6.2},   # San Francisco-like area
    {"latitude": 40.73, "longitude": -73.93, "households": 1000, "housing_median_age": 40, "population": 5000, "median_income": 5.1},   # New York-like area
])

# Load the same scaler used during training
scaler = StandardScaler()
scaler.fit(test_data)  # Assuming similar distribution as training data

# Scale input features
test_data_scaled = scaler.transform(test_data)

# Make predictions
predictions = model.predict(test_data_scaled) * 1_000_000  # Convert back to original scale

# Print results
for i, pred in enumerate(predictions):
    print(f"🏠 Test Case {i+1}: Predicted Price: ${pred:,.2f}")
