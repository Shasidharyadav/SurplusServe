import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from './api'; // Adjust the import path if necessary

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    console.log('Login form submitted with data:', credentials);
    try {
      const data = await login(credentials);
      console.log('Login successful, received data:', data);
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate('/dashboard'); // Adjust the navigation as necessary
    } catch (error) {
      console.error('Error during login:', error.message);
      if (error.response) {
        console.log('Error response:', error.response.data); // Log the full error response
      }
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={submitHandler}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
