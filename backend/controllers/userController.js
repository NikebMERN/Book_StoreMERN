const User = require('../models/User');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a specific user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findByEmail(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new user
// const createUser = async (req, res) => {
//   try {
//     const newUser = await User.create(req.body);
//     res.status(201).json(newUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// Update a user by ID
// const updateUserById = async (req, res) => {
//   try {
//     const user = await User.findByPk(req.params.id);
//     if (user) {
//       await user.update(req.body);
//       res.status(200).json(user);
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// Delete a user by ID
const deleteUserById = async (req, res) => {
    try {
        const book = await User.findById(req.params.id);
        if (!book) {
          return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

module.exports = {
  getAllUsers,
  getUserById,
  // createUser,
//   updateUserById,
  deleteUserById,
};
