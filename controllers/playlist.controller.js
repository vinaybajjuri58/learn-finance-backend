const { extend } = require("lodash");
const { Playlist } = require("../models/Playlist.model");
const getAllPlaylists = async (req, res) => {
  try {
    const allPlaylists = await Playlist.find({}).populate("videos");
    res.status(200).json({
      success: true,
      playlists: allPlaylists,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error in getting playlists",
      errMessage: err.errMessage,
    });
  }
};
const addAPlaylist = async (req, res) => {
  const playlistData = req.body;
  const newPlaylist = new Playlist({ ...playlistData, videos: [] });
  try {
    const savedPlaylist = await newPlaylist.save();
    res.status(201).json({
      success: true,
      playlist: savedPlaylist,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error in adding a playlist",
      errMessage: err.errMessage,
    });
  }
};
const getPlaylistDetails = (req, res) => {
  const playlist = req.playlist;
  res.status(200).json({
    success: true,
    playlist,
  });
};
const updatePlaylist = async (req, res) => {
  const updatePlaylistDetails = req.body;
  let playlist = req.playlist;
  playlist = extend(playlist, updatePlaylistDetails);
  try {
    const updatedPlaylist = playlist.save();
    res.status(201).json({
      success: true,
      message: "Updated playlist",
      playlist: updatedPlaylist,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "error in updating playlist details",
      errMessage: err.errMessage,
    });
  }
};
const removePlaylist = async (req, res) => {
  try {
    const playlist = req.playlist;
    const deletedPlaylist = await playlist.remove();
    res.status(200).json({
      success: true,
      message: "deleted playlist",
      playlist: deletedPlaylist,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error in deleting playlist",
      playlist,
    });
  }
};
const getPlaylistVideos = async (req, res) => {
  const playlistId = req.playlist._id;
  try {
    const playlistVideosData = await Playlist.findById(playlistId)
      .populate("videos")
      .select("__v");
    res.status(200).json({
      success: true,
      videos: playlistVideosData.videos,
    });
  } catch (err) {
    req.status(400).json({
      success: false,
      message: "Error in getting playlist videos",
      errMessage: err.errMessage,
    });
  }
};
const addVideoToPlaylist = async (req, res) => {
  const videoId = req.body.video;
  let playlist = req.playlist;
  try {
    playlist.videos.push(videoId);
    const updatedPlaylist = await playlist.save();
    res.status(201).json({
      success: true,
      message: "Added video to playlist",
      playlist: updatedPlaylist,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error in adding video to playlist",
      errMessage: err.errMessage,
    });
  }
};
const removeVideoFromPlaylist = async (req, res) => {
  const videoId = req.params.videoId;
  let playlist = req.playlist;
  try {
    playlist.videos.pull(videoId);
    const updatedPlaylist = await playlist.save();
    res.status(204).json({
      success: true,
      message: "removed video from playlist",
      playlist: updatedPlaylist,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error in removimg video from playlist",
      errMessage: err.errMessage,
    });
  }
};

module.exports = {
  getAllPlaylists,
  addAPlaylist,
  removePlaylist,
  getPlaylistDetails,
  updatePlaylist,
  getPlaylistVideos,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
};
