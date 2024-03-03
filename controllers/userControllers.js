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
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).json({ message: "user doesnt exist" });
    } else {
      return res.status(200).json({ status: "success", name: foundUser.name });
    }
  } catch (err) {
    const errormessage = err.message ? err.message : "something went wrong";
    res.send(errormessage);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();

    res.status(200).json({ status: "success", allUsers });
  } catch (err) {
    const errormessage = err.message ? err.message : "something went wrong";
    res.send(errormessage);
  }
};

exports.deleteUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).json({ message: "user doesnt exist" });
    }
    await User.deleteOne(foundUser);
    res.status(203).json({ message: "user deleted" });
  } catch (err) {
    const errormessage = err.message ? err.message : "something went wrong";
    res.send(errormessage);
  }
};
exports.updateUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const foundUser = await User.findOneAndUpdate({ email }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!foundUser) {
      return res.status(400).json({ message: "user doesnt exist" });
    }
    res.status(200).json({ message: "user updated", foundUser });
  } catch (err) {
    const errormessage = err.message ? err.message : "something went wrong";
    res.send(errormessage);
  }
};

module.exports = exports;
