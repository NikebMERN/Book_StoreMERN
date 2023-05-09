const db = require('../config/database');

const User = {
  getUserByEmail: (email, callback) => {
    db.query(`SELECT * FROM users WHERE email = ?`, [email], (err, result) => {
        if (err) {
            return callback(err);
        }
        return callback(null, result[0]);
    })
  },
  findAll: async () => {
    const result = await db.query('SELECT * FROM users ORDER BY title ASC');
    return result[0];
  },
  create: async (firstName, lastName, email, password) => {
    const result = await db.query('INSERT INTO users(firstName,lastName,email,password)VALUES(?,?,?,?)', [firstName, lastName, email, password]);
    return result[0];
  },
  findById: async (id) => {
    const idget = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    const result = await db.query(`DELETE FROM users WHERE users.user_id = ${idget}`)
    return result[0];
  }
};

module.exports = User;
