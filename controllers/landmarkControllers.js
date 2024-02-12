const Landmark = require("../models/landmarkModel");

exports.getAllLandmarks = async (req, res) => {
  console.log("123");
  try {
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    console.error(err);
  }
};

exports.getLandmarkById = (req, res) => {
  console.log(req.params);

  var id = req.params.id * l;
  res.status(200).json({
    status: "success",
    data: {
      landmark,
    },
  });
};

module.exports = exports;

