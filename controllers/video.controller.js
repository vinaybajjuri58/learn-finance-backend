const Video = require("../models/Video.model");
const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.status(200).json({
      success: true,
      message: "All video data",
      videos,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in getting video details",
      errMessage: err.errMessage,
    });
  }
};
module.exports = { getAllVideos };
