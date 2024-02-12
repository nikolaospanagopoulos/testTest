const express = require("express");
const {
  createUser,
  getUserByEmail,
  deleteUserByEmail,
  getAllUsers,
} = require("../controllers/userControllers");
const checkAgeMiddleware = require("../middlewares/ageControlMiddleware");

const routes = express.Router();

routes.post("/", checkAgeMiddleware, createUser);
routes.get("/:email", getUserByEmail);
routes.get("/", getAllUsers);

routes.delete("/:email", deleteUserByEmail);

module.exports = routes;
