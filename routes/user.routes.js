const express = require("express");
const { userLogin, userSignUp } = require("../controllers/user.controller");
const userRouter = express.Router();
userRouter.route("/signup").post(userSignUp);
userRouter.route("/login").post(userLogin);
module.exports = {
  userRouter,
};
