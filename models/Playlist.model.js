const mongoose = require("mongoose");
const { Schema } = mongoose;
const playlistSchema = new Schema({
  name: {
    type: String,
    required: "Please Add name for playlist",
  },
  videos: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Video",
    },
  ],
});
const Playlist = mongoose.model("Playlist", playlistSchema);
module.exports = {
  Playlist,
};
