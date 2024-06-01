import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; // Import the CSS file for styling

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="hero">
        <h1>Welcome to Food Waste Management Platform</h1>
        <p>Connecting donors with recipients to reduce food waste and hunger.</p>
        <div className="cta-buttons">
          <Link to="/signup" className="cta-button">Sign Up</Link>
          <Link to="/login" className="cta-button">Log In</Link>
        </div>
      </header>
      
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature">
          <h3>For Donors</h3>
          <p>Have surplus food? Donate it easily through our platform and help those in need.</p>
        </div>
        <div className="feature">
          <h3>For Recipients</h3>
          <p>Looking for food? Find food donations nearby and contact donors directly.</p>
        </div>
        <div className="feature">
          <h3>Real-time Notifications</h3>
          <p>Get instant notifications when new food donations are available in your area.</p>
        </div>
      </section>
      
      <section className="about-us">
        <h2>About Us</h2>
        <p>Our mission is to reduce food waste by connecting those with surplus food to those in need. Join us in making a difference!</p>
      </section>
    </div>
  );
};

export default Homepage;
