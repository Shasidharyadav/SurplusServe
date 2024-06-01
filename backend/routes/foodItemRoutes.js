const express = require('express');
const router = express.Router();
const { addFoodItem, getFoodItems } = require('../controllers/foodItemController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, addFoodItem).get(getFoodItems);

module.exports = router;
