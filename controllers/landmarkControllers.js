const Landmark = require("../models/landmarkModel");

exports.getAllLandmarks = async (req, res) => {
  try {
    const allLandmarks = await Landmark.find({});
    res.status(200).json({
      status: "success",
      allLandmarks,
    });
  } catch (err) {
    const errormessage = err.message ? err.message : "something went wrong";
    res.send(errormessage);
  }
};

exports.updateLandmarkById = async (req, res) => {
  try {
    var _id = req.params.id;
    const toUpdate = await Landmark.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!toUpdate) {
      res.json({
        status: "failed",
        message: "landmark doesnt exist",
      });
    } else {
      res.json({
        success: true,
        toUpdate,
      });
    }
  } catch (error) {
    const errormessage = err.message ? err.message : "something went wrong";
    res.send(errormessage);
  }
};

exports.createLandmark = async (req, res) => {
  try {
    const newLandmark = new Landmark(req.body);
    await newLandmark.save();
    res.send({ success: true, newLandmark });
  } catch (err) {
    const errormessage = err.message ? err.message : "something went wrong";
    res.send(errormessage);
  }
};

exports.getLandmarkByName = async (req, res) => {
  try {
    var name = req.params.name;
    const foundLandmark = await Landmark.findOne({ name });
    if (foundLandmark) {
      res.status(200).json({
        status: "success",
        foundLandmark,
      });
    } else {
      res.status(200).json({
        status: "failed",
        message: "landmark doesnt exist",
      });
    }
  } catch (err) {
    const errormessage = err.message ? err.message : "something went wrong";
    res.send(errormessage);
  }
};
exports.deleteLandmarkById = async (req, res) => {
  try {
    var _id = req.params.id;
    const foundLandmark = await Landmark.findOne({ _id });
    if (!foundLandmark) {
      res.json({
        status: "failed",
        message: "landmark doesnt exist",
      });
    } else {
      await Landmark.findByIdAndDelete(_id);
      res.json({
        status: "success",
        message: "landmark deleted",
      });
    }
  } catch (error) {
    const errormessage = err.message ? err.message : "something went wrong";
    res.send(errormessage);
  }
};

module.exports = exports;
