const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { initialiseDBConnection } = require("./db/db.connect");
const { categoryRouter } = require("./routes/category.routes");
const { videoRouter } = require("./routes/video.routes");
const { playlistRouter } = require("./routes/playlist.routes");
const {
  pathNotFoundHandler,
  errorHandler,
} = require("./middleware/errorHandlers");
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the backend of learn-finance app.",
  });
});
app.use("/api/categories", categoryRouter);
app.use("/api/videos", videoRouter);
app.use("/api/playlists", playlistRouter);

// error Handler
app.use(errorHandler);

// Do not move pathnotfound handler
app.use(pathNotFoundHandler);
initialiseDBConnection();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
