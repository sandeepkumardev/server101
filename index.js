require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./src/db");

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

connectDB();

app.use(express.json());

app.use("", require("./src/routes"));

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
