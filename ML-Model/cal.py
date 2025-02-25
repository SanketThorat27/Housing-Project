from sklearn.datasets import fetch_california_housing
import pandas as pd

# Load dataset
data = fetch_california_housing(as_frame=True)

# Create DataFrame
df = data.frame
df["Target"] = data.target  # Add target column (median house value)

# Save as CSV
csv_filename = "california_housing.csv"
df.to_csv(csv_filename, index=False)

print(f"Dataset saved as {csv_filename}")
