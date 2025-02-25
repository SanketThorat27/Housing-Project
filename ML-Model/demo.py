import joblib
import numpy as np

model = joblib.load("global_housing_model.pkl")
test_features = np.array([[19.107588, 72.943567, 513, 44, 117467, 11.68]])
prediction = model.predict(test_features)
print("Predicted Price:", prediction[0])
