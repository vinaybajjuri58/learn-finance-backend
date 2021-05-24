const getLikedVideos = async (req, res) => {
  const user = req.user;
  res.json({
    success: true,
    likedVideos: user.likedVideos,
  });
};

const addLikedVideo = async (req, res) => {
  const user = req.user;
  const { videoId } = req.body;
  try {
    user.likedVideos.push(videoId);
    await user.save();
    res.status(201).json({
      success: true,
      message: "Added to likedvideos",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "error in adding video to liked videos",
      errMessage: err.errMessage,
    });
  }
};

const removeFromLiked = async (req, res) => {
  const user = req.user;
  const { videoId } = req.body;
  try {
    user.likedVideos.pull(videoId);
    await user.save();
    res.status(201).json({
      success: true,
      message: "Added to likedvideos",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "error in adding video to liked videos",
      errMessage: err.errMessage,
    });
  }
};
module.exports = {
  addLikedVideo,
  getLikedVideos,
  removeFromLiked,
};
