const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../models/User');
const db = require('../config/database');

const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { firstName, lastName, email, password } = req.body;

  if(!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: 'All fileds must be provided' });
  }else if(password.length < 8) {
    return res.status(400).json({ message: 'Password must be 8 characters and above' })
  } else {

  try {
    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      (err, results) => {
        if (err) {
          return res.status(err).json({ msg: "database connection err" });
        }
        if (results.length > 0) {
          return res
            .status(400)
            .json({ msg: "An account with this email already exists!" });
        } else {
          //password encryption
          const salt = bcrypt.genSaltSync();

          //changing the value of password from req.body with the encrypted password
          const pass = bcrypt.hashSync(password, salt);
          // console.log(pass);

          //sending data to register
          const uuusss = User.create(firstName, lastName, email, pass);

          if(uuusss){
            return res.status(200).json({
              msg: "New user added successfully",
              data: results
             })
          }
        }
         })
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
 }
};

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  if(!email || !password) {
    return res.status(400).json({ message: 'All fileds must be provided' });
  }else{
  try {
    User.getUserByEmail(email, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json({ msg: "database connection err" });
      }
      if (!results) {
        return res
          .status(404)
          .json({ msg: "No account with this email has been registered" });
      }

      //check provided password by the user with the encrypted password from database
      const isMatch = bcrypt.compareSync(password, results?.password);
      if (!isMatch) return res.status(404).json({ msg: "Invalid Credentials" });

      //creating token for the signed user that expires in 1 hour and using our secret key for creation
      const token = jwt.sign({ id: results.user_id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return res.status(200).json({
        token,
        user: {
          id: results.user_id,
          display_name: results.user_name,
        }
      })
    });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
 }
};

module.exports = { register, login };
