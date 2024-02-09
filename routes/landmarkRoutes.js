const express = require("express");
//const {landmarkController}=require('../controllers/landmarkController.js');
const {
  getAllLandmarks,
  getLandmarkById,
} = require("../controllers/landmarkControllers");

//we create the router object to export
const routes = express.Router();



routes.get("/", getAllLandmarks);

//	.post(getLandmarkById);

//routes.route("/:id").get(getLandmarkById);

//.patch(updateLandmarkById)
//.delete(deleteLandmarkById);

module.exports = routes;
