const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Get all books
router.get('/', bookController.getAllBooks);

// Get a specific book by ID
router.get('/:id', bookController.getBookById);

// Upload a new book
router.post('/', bookController.uploadBook);

// Delete a book by ID
router.delete('/:id', bookController.deleteBookById);

module.exports = router;
