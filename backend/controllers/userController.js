const User = require('../models/user');
const { generateToken } = require('../utils/tokenGenerator');

// User login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        contact: user.contact,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(400).json({ message: error.message });
  }
};

// User signup
const signup = async (req, res) => {
  const { name, email, password, role, contact } = req.body;
  console.log('Received signup request with data:', { name, email, password, role, contact });

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      console.log('User already exists');
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({ name, email, password, role, contact });
    await user.save();

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      contact: user.contact,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(400).json({ message: error.message });
  }
};

module.exports = { login, signup };
