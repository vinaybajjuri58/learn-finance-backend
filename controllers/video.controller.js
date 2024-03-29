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
const getAVideo = async (req, res) => {
  const { videoId } = req.params;
  try {
    const video = await Video.findById(videoId);
    res.status(200).json({
      success: true,
      video,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in ggeting video Data",
    });
  }
};
module.exports = { getAllVideos, getAVideo };
