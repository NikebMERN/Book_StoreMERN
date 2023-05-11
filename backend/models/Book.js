const { param } = require('express-validator');
const db = require('../config/database');
const Book = {
  find: async () => {
    const result = await db.query('SELECT * FROM books');
    return result;
  },
  
  createBook: async (title, author, category, description, filePath) => {
    const result = await db.query('INSERT INTO books(title,author,category,description,filepath)VALUES(?,?,?,?,?)', [title, author, category, description, filePath]);
    return result[0];
  },
 
deleteBookById : async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query(`DELETE FROM books WHERE id = ?`, [id]);
    res.status(200).send(`Book with id ${id} deleted`);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while deleting the book');
  }
},

}

module.exports = Book;
