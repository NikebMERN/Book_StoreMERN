console.clear();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');

const authenticationRoutes = require('./routes/authenticationRoutes');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const createTables = require('./config/config');

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
createTables();

// Authentication Routes
app.use('/api/auth', authenticationRoutes);

// Book Routes
app.use('/api/books', bookRoutes);

// User Routes
app.use('/api/users', userRoutes);

// Serve the uploaded books as static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));
