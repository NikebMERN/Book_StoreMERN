const db = require('./database');

const createTables = () => {
  let user = `CREATE TABLE IF NOT EXISTS users (
    id int auto_increment PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  )`;

  let book = `CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    description TEXT,
    filepath VARCHAR(255) NOT NULL
  )`;

  db.query(user, (err) => {
    if (err) console.log(err.message) ;
    console.log("Users table created successfully.");
  });
  db.query(book, (err) => {
    if (err) console.log(err.message) ;
    console.log("Books table created successfully.");
  });
};

module.exports = createTables;
