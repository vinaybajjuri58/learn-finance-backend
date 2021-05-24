const express = require("express");
const likesRouter = express.Router();
const {
  addLikedVideo,
  getLikedVideos,
  removeFromLiked,
} = require("../controllers/liked.controller");
likesRouter
  .route("/liked")
  .get(getLikedVideos)
  .post(addLikedVideo)
  .delete(removeFromLiked);
module.exports = {
  likesRouter,
};
