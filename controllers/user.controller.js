const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignUp = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(500).json({
        success: false,
        message: "Email is already registered",
      });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ email, name: name, password: hashPassword });
    const savedUser = await newUser.save();
    return res.status(201).json({
      success: true,
      message: "User succesfully registered",
      user: { name: savedUser.email, id: savedUser.id, email: savedUser.email },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error in registering new User",
      errMessage: err.errMessage,
    });
  }
};
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await User.findOne({ email: email });
    if (!userExists) {
      return res.status(500).json({
        success: false,
        message: "User doesnt exists with this emailId",
      });
    }
    const isValidPassword = await bcrypt.compare(password, userExists.password);
    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
    const token = jwt.sign({ userId: userExists._id }, process.env.KEY, {
      expiresIn: "24h",
    });
    res.status(200).json({
      success: true,
      message: "User logged in succesfully",
      token,
      userId: userExists.id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error occured in signin process",
      errMessage: err.errMessage,
    });
  }
};
module.exports = {
  userSignUp,
  userLogin,
};
