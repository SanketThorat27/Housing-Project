import React, { useState } from "react";

const PredictPrice = () => {
  const [formData, setFormData] = useState({
    location: "",
    rooms: "",
    age: "",
    area: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`House Details:\nLocation: ${formData.location}\nRooms: ${formData.rooms}\nAge: ${formData.age} years\nArea: ${formData.area} sq ft`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">House Details Form</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
        <label className="block mb-2">
          Location:
          <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
        </label>

        <label className="block mb-2">
          Number of Rooms:
          <input type="number" name="rooms" value={formData.rooms} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
        </label>

        <label className="block mb-2">
          Age of Building (years):
          <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
        </label>

        <label className="block mb-4">
          Area of House (sq ft):
          <input type="number" name="area" value={formData.area} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
        </label>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default PredictPrice;
