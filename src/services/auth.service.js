const User = require("../schema/user.schema");

const findUserDB = async (username) => {
  return await User.findOne({ username });
};

const loginDB = async ({ username, password }) => {
  const user = await findUserDB(username);

  if (!user) {
    return {
      success: false,
      message: "User not found!",
    };
  }

  if (user.password !== password) {
    return {
      success: false,
      message: "Invalid password!",
    };
  }

  return {
    success: true,
    message: "User logged in successfully",
    data: user,
  };
};

const registerDB = async ({ name, username, password }) => {
  const user = await findUserDB(username);

  if (user) {
    return {
      success: false,
      message: "User already exists with this username!",
    };
  }

  const newUser = new User({ name, username, password });
  await newUser.save();

  return {
    success: true,
    message: "User registered successfully",
    data: newUser,
  };
};

module.exports = {
  findUserDB,
  loginDB,
  registerDB,
};
