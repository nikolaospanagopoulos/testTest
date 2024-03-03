const express = require("express");
//const {landmarkController}=require('../controllers/landmarkController.js');
const {
  getAllLandmarks,
  createLandmark,
  getLandmarkByName,
  deleteLandmarkById,
  updateLandmarkById,
} = require("../controllers/landmarkControllers");

//we create the router object to export
const routes = express.Router();

routes.get("/", getAllLandmarks);
routes.get("/:name", getLandmarkByName);
routes.put("/:id", updateLandmarkById);
routes.delete("/:id", deleteLandmarkById);
routes.post("/", createLandmark);

//	.post(getLandmarkById);

//routes.route("/:id").get(getLandmarkById);

//.patch(updateLandmarkById)
//.delete(deleteLandmarkById);

module.exports = routes;
