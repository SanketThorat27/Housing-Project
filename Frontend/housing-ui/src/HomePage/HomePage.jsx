import React, { useState } from "react";
import axios from "axios";
import "./HomePage.css"

const HomePage = () => {
  const [formData, setFormData] = useState({
    size: "",
    bedrooms: "",
    location: "",
  });

  const [predictedPrice, setPredictedPrice] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/predict", formData);
      setPredictedPrice(response.data.predicted_price);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className="container">
      <h2>Housing Price Prediction</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>Size (sq ft):</label>
        <input type="number" name="size" value={formData.size} onChange={handleChange} required />

        <label>Bedrooms:</label>
        <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} required />

        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />

        <button type="submit">Predict Price</button>
      </form>

      {predictedPrice && <h3>Estimated Price: ${predictedPrice}</h3>}
    </div>
  );
};

export default HomePage;
