require("dotenv").config();

const express = require("express");
const connectDB = require("./src/db");

const app = express();
const port = 3000;

connectDB();

app.use(express.json());

app.use("", require("./src/routes"));

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
