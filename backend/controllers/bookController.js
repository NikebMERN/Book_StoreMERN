// const Book = require('../models/Book');

// // Get all books
// exports.getAllBooks = async (req, res) => {
//   try {
//     const books = await Book.find();
//     res.status(200).json(books);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get a single book
// exports.getBookById = async (req, res) => {
//   try {
//     const book = await Book.findById(req.params.id);
//     if (!book) {
//       return res.status(404).json({ message: 'Book not found' });
//     }
//     res.status(200).json(book);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Create a new book
// exports.uploadBook = async (req, res) => {
//   const { title, author, description, category, pdfUrl } = req.body;
//   if(!title || !author || !description || !category || !pdfUrl) {
//     return res.status(400).json({ message: 'All fields must be provided' });
//   }else{
//   try {
//     const book = await Book.createBook(
//       title,
//       author,
//       category,
//       description,
//       pdfUrl,
//     );
//     res.status(201).json({msg: "New Book has been added", data: book});
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }
// };

// // Update a book
// // exports.updateBook = async (req, res) => {
// //   try {
// //     const { title, author, description, category, pdfUrl } = req.body;
// //     const book = await Book.findByIdAndUpdate(
// //       req.params.id,
// //       { title, author, description, category, pdfUrl },
// //       { new: true }
// //     );
// //     if (!book) {
// //       return res.status(404).json({ message: 'Book not found' });
// //     }
// //     res.status(200).json(book);
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };

// // Delete a book
// exports.deleteBookById = async (req, res) => {
//   try {
//     const book = await Book.findById(req.params.id);
//     if (!book) {
//       return res.status(404).json({ message: 'Book not found' });
//     }
//     res.status(200).json({ message: 'Book deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


const db = require('../config/database');

const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query(`DELETE FROM books WHERE id = ?`, [id]);
    res.status(200).send(`Book with id ${id} deleted`);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while deleting the book');
  }
};

module.exports = { deleteBook };
