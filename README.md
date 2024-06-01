# 🍽️ Food Waste Management Platform

Welcome to the Food Waste Management Platform! Our mission is to connect food donors with recipients to reduce food waste and hunger. 🌍✨

## 🚀 Features

- 🥗 **For Donors**: Easily donate surplus food and help those in need.
- 🍽️ **For Recipients**: Find nearby food donations and contact donors directly.
- 🔔 **Real-time Notifications**: Receive instant notifications for new food donations.

## 🛠️ Tech Stack

- **Frontend**: React, Material-UI, TailwindCSS
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT

## 📸 Screenshots

![Homepage](./screenshots/homepage.png)
![Signup](./screenshots/signup.png)
![Login](./screenshots/login.png)

## 📦 Installation

### Prerequisites

- Node.js
- MongoDB

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/food-waste-management-platform.git
   cd food-waste-management-platform

	2.	Install dependencies for both frontend and backend:

cd frontend
npm install
cd ../backend
npm install


	3.	Create a .env file in the backend directory with the following content:

MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000


	4.	Create a .env file in the frontend directory with the following content:

REACT_APP_API_URL=http://localhost:5000/api


	5.	Start the backend server:

cd backend
npm start


	6.	Start the frontend server:

cd frontend
npm start



📚 Usage

	1.	Sign Up: Create an account as either a donor or recipient.
	2.	Log In: Access your dashboard.
	3.	Donate Food: If you are a donor, add food items you wish to donate.
	4.	Find Food: If you are a recipient, browse available food donations and contact donors.

🗂️ Project Structure

Backend

backend/
│
├── config/
│   ├── db.js               # Database connection setup
│   └── auth.js             # Authentication configuration
│
├── controllers/
│   ├── userController.js   # User related logic
│   ├── foodItemController.js # Food item related logic
│   └── notificationController.js # Notifications logic
│
├── middleware/
│   ├── authMiddleware.js   # Authentication middleware
│   └── errorMiddleware.js  # Error handling middleware
│
├── models/
│   ├── User.js             # User model
│   ├── FoodItem.js         # Food item model
│   └── Notification.js     # Notification model
│
├── routes/
│   ├── userRoutes.js       # Routes for user operations
│   ├── foodItemRoutes.js   # Routes for food item operations
│   └── notificationRoutes.js # Routes for notifications
│
├── utils/
│   └── tokenGenerator.js   # Utility to generate tokens
│
└── server.js               # Server setup and initialization

Frontend

frontend/
│
├── public/
│   ├── index.html          # The main HTML file
│   └── favicon.ico         # Favicon for the app
│
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── Login.js    # Login component
│   │   │   └── Signup.js   # Signup component
│   │   ├── common/
│   │   │   ├── Header.js   # Header component
│   │   │   └── Footer.js   # Footer component
│   │   ├── dashboard/
│   │   │   ├── DonorComponent.js     # Donor functionalities
│   │   │   └── ReceiverComponent.js  # Receiver functionalities
│   │   └── NotificationComponent.js  # Notifications display
│   │
│   ├── context/
│   │   ├── UserContext.js  # User context for global state
│   │   └── FoodContext.js  # Food item context
│   │
│   ├── hooks/
│   │   ├── useAuth.js      # Custom hook for authentication
│   │   └── useFetch.js     # Custom hook for fetching data
│   │
│   ├── styles/
│   │   └── app.css         # Main stylesheet for the app
│   │
│   ├── utils/
│   │   └── api.js          # API utility functions
│   │
│   ├── App.js              # Main React application component
│   └── index.js            # Entry point that renders React to DOM
│
└── package.json            # Manages dependencies and scripts

🤝 Contributing

We welcome contributions! Please fork the repository and submit a pull request for any improvements or bug fixes.

📧 Contact

For any inquiries or support, please email us at support@foodwasteplatform.com.

📜 License

This project is licensed under the MIT License. See the LICENSE file for details.

⭐ Acknowledgements

	•	Thanks to Material-UI and TailwindCSS for the awesome UI components and styles.
	•	Inspired by the need to reduce food waste and hunger.

	“Together, we can make a difference in reducing food waste and feeding those in need.”