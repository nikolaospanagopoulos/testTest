const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/landmarkRoutes");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

//first we create our app
const app = express();

// we connect to db-> has to be first thing we do
console.log(process.env.DATABASE);
mongoose
  .connect(
    `mongodb+srv://tddimitra:${process.env.DATABASE_PASSWORD}@cluster0.mh03ndg.mongodb.net/?retryWrites=true&w=majority`,
    {}
  )
  //then, catch=> try catch => study
  .then(() => console.log("DB connection succesful!"))
  .catch((error) => console.error("Error connecting to DB:", error.message));

//middleware=> request goes through and it changes it or uses it
app.use(express.json());

//we use the routes we import from routes/landmarkRoutes.js
app.use("/api/v1/landmarks", routes);
app.use("/api/v1/users", userRoutes);
//app.use("/api/v1/users", userRouter);

//export app to use in server.js
module.exports = app;
