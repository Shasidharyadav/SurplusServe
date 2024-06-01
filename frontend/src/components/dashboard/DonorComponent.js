import React, { useState } from 'react';
import axios from 'axios';

const DonorComponent = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post('/api/fooditems', { name, quantity, donorId: userInfo._id }, config);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="donor-container">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Food Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
};

export default DonorComponent;
