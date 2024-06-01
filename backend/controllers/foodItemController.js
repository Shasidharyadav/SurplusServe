const FoodItem = require('../models/FoodItem');

// Add food item
const addFoodItem = async (req, res) => {
  const { name, quantity, donorId } = req.body;

  try {
    const foodItem = new FoodItem({ name, quantity, donor: donorId });
    await foodItem.save();

    res.status(201).json(foodItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all food items
const getFoodItems = async (req, res) => {
  try {
    const foodItems = await FoodItem.find().populate('donor', 'name contact');
    res.json(foodItems);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addFoodItem, getFoodItems };
