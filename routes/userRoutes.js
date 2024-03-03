const express = require("express");
const {
  createUser,
  getUserByEmail,
  deleteUserByEmail,
  getAllUsers,
  updateUserByEmail,
} = require("../controllers/userControllers");
const checkAgeMiddleware = require("../middlewares/ageControlMiddleware");

const routes = express.Router();

routes.post("/", checkAgeMiddleware, createUser);
routes.get("/:email", getUserByEmail);
routes.delete("/:email", deleteUserByEmail);
routes.put("/:email", updateUserByEmail);
routes.get("/", getAllUsers);

routes.delete("/:email", deleteUserByEmail);

module.exports = routes;
