const express = require("express");
const videoRouter = express.Router();
const { getAllVideos, getAVideo } = require("../controllers/video.controller");
videoRouter.route("/").get(getAllVideos);
videoRouter.route("/:videoId").get(getAVideo);
module.exports = { videoRouter };
