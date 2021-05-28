const Category = require("../models/Category.model");
const Playlist = require("../models/Playlist.model");
const User = require("../models/User.model");

const categoryParamHandler = async (req, res, next, categoryId) => {
  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(400).json({
        success: false,
        message: "Category doesnt exits",
      });
    }
    req.category = category;
    next();
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error in getting category Details",
      errMessage: err.errMessage,
    });
  }
};

const playlistParamHandler = async (req, res, next, playlistId) => {
  try {
    const playlistData = await Playlist.findById(playlistId);
    if (!playlistData) {
      return res.status(400).json({
        success: false,
        message: "Playlist doesnt exits",
      });
    }
    req.playlist = playlistData;
    next();
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error in getting playlist data",
      errMessage: err.errMessage,
    });
  }
};

const userParamHandler = async (req, res, next, userId) => {
  try {
    const userData = await User.findById(userId);
    if (!userData) {
      return res.status(400).json({
        success: false,
        message: "User doesnt exists",
      });
    }
    req.user = userData;
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error while getting user data",
      errMessage: err.errMessage,
    });
  }
};

module.exports = {
  categoryParamHandler,
  playlistParamHandler,
  userParamHandler,
};
