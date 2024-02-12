const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
  },
  age: {
    type: Number,
    required: [true, "A user must have an age"],
  },
  email: {
    type: String,
    required: [true, "A user must have an email"],
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
