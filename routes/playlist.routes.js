const express = require("express");
const { playlistParamHandler } = require("../controllers/paramHandlers");
const {
  getAllPlaylists,
  addAPlaylist,
  removePlaylist,
  getPlaylistDetails,
  updatePlaylist,
  getPlaylistVideos,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
} = require("../controllers/playlist.controller");
const playlistRouter = express.Router();
playlistRouter.route("/").get(getAllPlaylists).post(addAPlaylist);
playlistRouter.param("playlistId", playlistParamHandler);

playlistRouter
  .route("/:playlistId")
  .get(getPlaylistDetails)
  .post(updatePlaylist)
  .delete(removePlaylist);
playlistRouter
  .route("/:playlistId/videos")
  .get(getPlaylistVideos)
  .post(addVideoToPlaylist);
playlistRouter
  .route("/:playlistId/videos/:videoId")
  .delete(removeVideoFromPlaylist);
module.exports = {
  playlistRouter,
};
