const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
const authValidator = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Token doesnt exists",
      });
    }
    const { userId } = jwt.verify(token, process.env.KEY);
    const user = await User.findById(userId)
      .select("-password -__v")
      .populate("playlists history likedVideos");
    req.user = user;
    next();
  } catch (err) {
    return res.json(400).json({
      success: false,
      message: "Invalid Token",
      errMessage: err.errMessage,
    });
  }
};
module.exports = { authValidator };
