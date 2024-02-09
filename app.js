const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/landmarkRoutes");
require("dotenv").config();

//first we create our app
const app = express();

// we connect to db-> has to be first thing we do
mongoose
  .connect(
    "mongodb+srv://tddimitra:l0Jtw2X5fW9IB873@cluster0.mh03ndg.mongodb.net/?retryWrites=true&w=majority",
    {}
  )
  //then, catch=> try catch => study
  .then(() => console.log("DB connection succesful!"))
  .catch((error) => console.error("Error connecting to DB:", error.message));

//middleware=> request goes through and it changes it or uses it
app.use(express.json());

//we use the routes we import from routes/landmarkRoutes.js
app.use("/api/v1/landmarks", routes);
//app.use("/api/v1/users", userRouter);

//export app to use in server.js
module.exports = app;

