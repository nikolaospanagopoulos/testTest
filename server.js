const app = require("./app.js");

//console.log(app)
//we define port to use
const port = process.env.PORT || 2000;
//app starts waiting for our requests
app.listen(port, () => {
  console.log("app runing on port: " + port);
});

