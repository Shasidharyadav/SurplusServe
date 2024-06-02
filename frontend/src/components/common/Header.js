import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo1.png'; // Adjust the path to where your logo image is stored
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <nav>
        <img src={logoImage} alt="Logo" className="header-logo" />
        <ul>
          <li>
            <Link to="/"><b> Home</b></Link>
          </li>
          <li>
            <Link to="/about"><b>About Us</b></Link>
          </li>
          <li>
            <Link to="/login"><b>Login</b></Link>
          </li>
          <li>
            <Link to="/signup"><b>Sign Up</b></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
