import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from './api'; // Adjust the import path if necessary

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('recipient');
  const [contact, setContact] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const requestData = { name, email, password, role, contact };
    console.log('Signup form submitted with data:', requestData);
    try {
      const data = await signup(requestData); // Use the signup function from api.js
      console.log('Signup successful, received data:', data);
      localStorage.setItem('userInfo', JSON.stringify(data));
      if (role === 'donor') {
        navigate('/donor');
      } else {
        navigate('/receiver');
      }
    } catch (error) {
      console.error('Error during signup:', error.message);
      if (error.response) {
        console.log('Error response:', error.response.data); // Log the full error response
      }
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="recipient">Recipient</option>
          <option value="donor">Donor</option>
        </select>
        <input
          type="text"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
