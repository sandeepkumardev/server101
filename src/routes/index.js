const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/auth.controller");

router.get("/", (req, res) => {
  res.send("Hello Server!");
});

router.post("/login", login);
router.post("/register", register);

module.exports = router;
