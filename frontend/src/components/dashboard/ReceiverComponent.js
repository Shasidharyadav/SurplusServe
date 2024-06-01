import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
