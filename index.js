const express = require("express");

const app = express();
const port = 3000;

app.use(express.json()); // middleware to parse JSON bodies

app.get("/", (req, res) => {
  res.send("Hello Server!");
});

app.post("/register", (req, res) => {
  const { name, username, password } = req.body;
  if (!name || !username || !password) {
    return res.status(400).send("All fields are required!");
  }
  // save to db

  res.status(201).send("User registered successfully!");
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
