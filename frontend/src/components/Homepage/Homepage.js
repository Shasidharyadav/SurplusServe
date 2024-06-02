import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Importing LinkedIn icon from brands
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Correcting the import for the envelope icon
import Hero from '../images/home2.png'; // Adjust the path to where your logo image is stored
import dono from '../images/dono.png'; // Adjust the path to where your logo image is stored
import rec from '../images/rec.png'; // Adjust the path to where your logo image is stored
import noti from '../images/noti.png'; // Adjust the path to where your logo image is stored

import './Homepage.css';

const Homepage = () => {
  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0, x: '100vw' },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', delay: 0.3, duration: 1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 0.5 }
    }
  };

  const hoverEffect = {
    hover: { scale: 1.05, transition: { type: 'spring', stiffness: 300 } }
  };

  return (
    <motion.div className="homepage"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header className="hero"
        variants={itemVariants}
      >
      <motion.img src={Hero} alt="Hero Image" className="hero-image"/>
        <div className='hey'>
        <h1>Welcome to Food Waste Management Platform</h1>
        <p>Connecting donors with recipients to reduce food waste and hunger.</p>
        <div className="cta-buttons">
          <Link to="/signup" className="cta-button">Sign Up</Link>
          <Link to="/login" className="cta-button">Log In</Link>
          </div>
        </div>
        
      </motion.header>
      
      <section className="features">
        <h2>Our Features</h2>
        <motion.div className="feature" variants={hoverEffect} whileHover="hover">
          <h3>For Donors</h3>
          <p>Have surplus food? Donate it easily through our platform and help those in need.</p>
          <motion.img src={dono} alt="Donors Image" className="feature-image" />

        </motion.div>
        <motion.div className="feature" variants={hoverEffect} whileHover="hover">
          <h3>For Recipients</h3>
          <p>Looking for food? Find food donations nearby and contact donors directly.</p>
          <motion.img src={rec} alt="Recipients Image" className="feature-image" />

        </motion.div>
        <motion.div className="feature" variants={hoverEffect} whileHover="hover">
          <h3>Real-time Notifications</h3>
          <p>Get instant notifications when new food donations are available in your area.</p>
          <motion.img src={noti} alt="Notifications Image" className="feature-image" />

        </motion.div>
      </section>
      
      <section className="about-us">
        <h2>About Us</h2>
        <p>Our mission is to reduce food waste by connecting those with surplus food to those in need. Join us in making a difference!</p>
        
        <div className="person">
          <h3>Shashidhar</h3>
          <a href="https://www.linkedin.com/in/shasidharyadavr/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="mailto:shashidharyadavr@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>

        <div className="person">
          <h3>Phonicia</h3>
          <a href="https://www.linkedin.com/in/phoniciaanne/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="mailto:phoniciaanne@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Homepage;
