from flask import Flask, request, jsonify
import numpy as np
import joblib
import pickle

# Initialize Flask app
app = Flask(__name__)

# Load the trained model and scaler
with open("global_housing_model.pkl", "rb") as f:
    model = pickle.load(f)

with open("scaler.pkl", "rb") as f:
    scaler = pickle.load(f)

@app.route("/", methods=["GET"])
def home():
    return "🏡 Welcome to the Housing Price Prediction API! Use /predict to get predictions."

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get JSON data from request
        data = request.get_json()

        # Extract features and reshape for prediction
        features = np.array(data["features"]).reshape(1, -1)

        # Apply the same scaling as training
        features_scaled = scaler.transform(features)  

        # Make prediction
        scaled_prediction = model.predict(features_scaled)  

        # Convert prediction back to original scale & ensure it's a Python float
        predicted_price = float(scaled_prediction[0] * 1_000_000)  

        # Return predicted house price
        return jsonify({"predicted_price": predicted_price})

    except Exception as e:
        return jsonify({"error": str(e)})

# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)
