const mongoose = require('mongoose');

const foodItemSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    donor: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  },
  { timestamps: true }
);

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

module.exports = FoodItem;
