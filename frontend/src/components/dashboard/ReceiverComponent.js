import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ReceiverComponent.css'
const ReceiverComponent = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const { data } = await axios.get('/api/fooditems');
        setFoodItems(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchFoodItems();
  }, []);

  return (
    <div className="receiver-container">
                <div className="receiver-dashboard">
      <h1>Browse Available Food Items</h1>
      <p>Welcome to your dashboard! Here you can find and claim food donations that match your needs. Start by choosing a category below:</p>

      <h2>Food Categories</h2>
      <div className="categories">
        <div className="category">
          <h3>Fruits and Vegetables</h3>
          <p>Includes fresh fruits and vegetables available in your area.</p>
        </div>
        <div className="category">
          <h3>Baked Goods</h3>
          <p>Freshly baked breads, pastries, and other baked items.</p>
        </div>
        <div className="category">
          <h3>Prepared Meals</h3>
          <p>Ready-to-eat meals, perfect for immediate consumption.</p>
        </div>
        <div className="category">
          <h3>Non-perishables</h3>
          <p>Long shelf-life items like canned goods, cereals, and snacks.</p>
        </div>
        <div className="category">
          <h3>Dairy and Eggs</h3>
          <p>Fresh dairy products and eggs available for pick-up.</p>
        </div>
      </div>

      <p>Select a category to view the available items, learn more about each donation, and contact the donor for more details or to arrange a pick-up.</p>

      <h2>How to Claim Food</h2>
      <ol>
        <li><strong>Choose a Category:</strong> Start by selecting a category that interests you to see what’s available.</li>
        <li><strong>View Item Details:</strong> Click on any food item to see detailed information including donor details, location, and availability.</li>
        <li><strong>Contact Donor:</strong> Use our platform to securely contact the donor and arrange for pick-up or ask further questions.</li>
      </ol>

      <p>By using this platform, you are helping to reduce food waste and ensuring that surplus food serves a valuable purpose. We appreciate your active participation in our community!</p>
    </div>

      {foodItems.map((item) => (
        <div key={item._id} className="food-item">
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Donor: {item.donor.name}</p>
          <p>Contact: {item.donor.contact}</p>
        </div>
        
      ))}
    </div>
  );
};

export default ReceiverComponent;


