const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get all users
router.get('/', userController.getAllUsers);

// Get a specific user by ID
router.get('/:id', userController.getUserById);

// Create a new user
// router.post('/', userController.createUser);

// Update a user by ID
// router.put('/:id', userController.updateUserById);

// Delete a user by ID
router.delete('/:id', userController.deleteUserById);

module.exports = router;
