const express = require('express');
const router = express.Router();
const authenticationController = require('../controllers/authenticationController');

// Register a new user
router.post('/register', authenticationController.register);

// Login a user
router.post('/login', authenticationController.login);

module.exports = router;
