const express = require("express");
const {
  userLogin,
  userSignUp,
  getUserData,
} = require("../controllers/user.controller");
const { authValidator } = require("../middleware/authHandlers");
const userRouter = express.Router();
userRouter.route("/signup").post(userSignUp);
userRouter.route("/login").post(userLogin);
userRouter.use(authValidator);
userRouter.route("/userdata").get(getUserData);
module.exports = {
  userRouter,
};
