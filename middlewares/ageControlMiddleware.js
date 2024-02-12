const User = require("../models/usersModel");

async function checkAgeMiddleware(req, res, next) {
  try {
    //destructuring js object
    //const {age} = req.body
    const age = req.body.age;
    if (age < 18) {
      return res.status(403).json({ message: "user must be 18 or older" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }

  next();
}

module.exports = checkAgeMiddleware;
