const { loginDB, registerDB } = require("../services/auth.service");

const login = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Request body is required!",
    });
  }

  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Username and password are required!",
    });
  }

  const result = await loginDB({ username, password });
  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.message,
    });
  }

  res.status(200).json({
    success: true,
    message: result.message,
    data: result.data,
  });
};

const register = async (req, res) => {
  const { name, username, password } = req.body;
  if (!name || !username || !password) {
    return res.status(400).send("All fields are required!");
  }

  const result = await registerDB({ name, username, password });
  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.message,
    });
  }

  res.status(201).json({
    success: true,
    message: result.message,
    data: result.data,
  });
};

module.exports = {
  login,
  register,
};
