const db = require('../config/database');

const Book = {
  find: async () => {
    const result = await db.query('SELECT * FROM books');
    return result;
  },
  findById: async (id) => {
    const result = await db.query('SELECT * FROM books WHERE id = ?', [id]);
    return result;
  },
  createBook: async (title, author, category, description, filePath) => {
    const result = await db.query('INSERT INTO books(title,author,category,description,filepath)VALUES(?,?,?,?,?)', [title, author, category, description, filePath]);
    return result[0];
  },
  findByIdAndDelete: async (id) => {
    const result = await db.query('DELETE FROM books WHERE id = ?', [id]);
    return result;
  }
};

module.exports = Book;
