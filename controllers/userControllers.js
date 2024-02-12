const User = require("../models/usersModel.js");
//common JS

exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);

    const { age } = req.body;

    const email = req.body.email.toLowerCase();
    const name = req.body.name.toLowerCase();

    if (!email) {
      return res.status(400).json({ message: "email parameter is required" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(404).json({ message: "user already exists" });
    }
    await newUser.save();

    res.status(201).json({
      status: "user created",
      user: {
        name,
        email,
        age,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};

exports.getUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    //try to find user by email in db
    //if email doesnt exist show appropriate response 404
    //use method User.findOne

    return res.status(200).json({ message: "user exists" });
  } catch (error) {
    //something went wrong error
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    res.status(200).json({ message: "all users" });
    //find all users in db
    //return json array with users objects {name, email, age}
    // User.find()
  } catch (error) {}
};

exports.deleteUserByEmail = async (req, res) => {
  res.status(203).json({ message: "user deleted" });
  try {
    //find user by email, same logic as above
    //if user doesnt exist return message
    //if user exists delete -> User.deleteOne(user)
  } catch (error) {
    //something went wrong error
  }
};

module.exports = exports;
