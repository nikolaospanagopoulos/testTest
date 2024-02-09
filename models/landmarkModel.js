const mongoose = require("mongoose");

const landmarkSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "A landmark must be landmark or museum"],
  },
  name: String,
  description: String,
  ratingsAverage: Number,
  ratingsQuantity: Number,
});

const Landmark = mongoose.model("Landmark", landmarkSchema);

module.exports = Landmark;

