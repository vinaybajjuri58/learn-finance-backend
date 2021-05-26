const express = require("express");
const {
  userLogin,
  userSignUp,
  getUserData,
} = require("../controllers/user.controller");
const userRouter = express.Router();
userRouter.route("/signup").post(userSignUp);
userRouter.route("/login").post(userLogin);
userRouter.router("/userdata").get(getUserData);
module.exports = {
  userRouter,
};
