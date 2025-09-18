require("express-async-errors");
require("dotenv").config();
const express = require("express");
const router = require("./routes/cars.routes");
const app = express();
const notFound = require("./middlewares/notFound.mw");
const connectDB = require("./connect");

app.use("/api/v1/cars", router);
app.use(notFound);

const port = process.env.PORT || 3000;

(async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    console.log("Database connected...");
    app.listen(port, () => {
      console.log("Server started...");
    });
  } catch (err) {
    console.log(err);
  }
})();

