const express = require("express");
const videoRouter = express.Router();
const { getAllVideos } = require("../controllers/video.controller");
videoRouter.route("/").get(getAllVideos);
module.exports = { videoRouter };
