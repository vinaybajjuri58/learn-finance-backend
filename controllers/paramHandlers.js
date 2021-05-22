const { Category } = require("../models/Category.model");
const { Video } = require("../models/Video.model");
const { Playlist } = require("../models/Playlist.model");
const categoryParamHandler = async (req, res, next, categoryId) => {
  try {
    const category = await Category.findById(categoryId);
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
    if (playlistData === null) {
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
module.exports = {
  categoryParamHandler,
  playlistParamHandler,
};
