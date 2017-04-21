const mongoose = require('mongoose');

const users = {};
// Define the shcema.
const userSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  address: String,
  department: String,
  position: String,
  city: String,
  state: String,
  postalCode: String
});

// Define model with a pre-exist collection 'users'.
let User = mongoose.model('User', userSchema, 'app_users');


users.post = (req, res) => {
  User.create({
      title: req.body.title,
      completed: false,

      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      department: req.body.department,
      position: req.body.position,
      city: req.body.city,
      state: req.body.state,
      postalCode: req.body.postalCode
    },
    err => {
      if (err) {
        res.send(err);
      }

      // Get and return all the todos after create.
      User.find((err, users) => {
        if (err) {
          res.send(err);
        }
        res.json(users);
      });
    });
};

users.get = (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.send(err);
    }
    console.log(users);
    res.json(users);
  });
};

module.exports = users;