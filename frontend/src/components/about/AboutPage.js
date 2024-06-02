import React from 'react';
import { motion } from 'framer-motion';
import './AboutPage.css'; // Assuming you have separate CSS for this page

const AboutPage = () => {
  // Variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  // Variants for each item
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring', duration: 0.5,
      },
    },
  };

  return (
    <motion.div className="about-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants}>Welcome to the Food Waste Management Platform!</motion.h1>
      <motion.p variants={itemVariants}>
        Our mission is to connect food donors with recipients to reduce food waste and hunger.
      </motion.p>
      
      <motion.div variants={itemVariants}>
        <h2>Features</h2>
        <ul>
          <li>🥗 <strong>For Donors:</strong> Easily donate surplus food and help those in need.</li>
          <li>🍽️ <strong>For Recipients:</strong> Find nearby food donations and contact donors directly.</li>
          <li>🔔 <strong>Real-time Notifications:</strong> Receive instant notifications for new food donations.</li>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2>Tech Stack</h2>
        <ul>
          <li><strong>Frontend:</strong> React, Material-UI, TailwindCSS</li>
          <li><strong>Backend:</strong> Node.js, Express, MongoDB</li>
          <li><strong>Authentication:</strong> JWT</li>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2>Prerequisites</h2>
        <ul>
          <li>Node.js</li>
          <li>MongoDB</li>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2>Usage</h2>
        <ol>
          <li>Sign Up: Create an account as either a donor or recipient.</li>
          <li>Log In: Access your dashboard.</li>
          <li>Donate Food: If you are a donor, add food items you wish to donate.</li>
          <li>Find Food: If you are a recipient, browse available food donations and contact donors.</li>
        </ol>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2>Contact</h2>
        <p>If you have any questions or need support, please email us at 
        <a href="mailto:shashidharyadvr@gmail.com">shashidharyadvr@gmail.com</a> or 
        <a href="mailto:Phoniciaanne@gmail.com">Phoniciaanne@gmail.com</a>.
        </p>
      </motion.div>
<h1>
      <motion.footer variants={itemVariants}>
        “Together, we can make a difference in reducing food waste, feed the need.”
      </motion.footer></h1>
    </motion.div>
  );
};

export default AboutPage;
