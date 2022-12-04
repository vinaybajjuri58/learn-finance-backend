const mongoose = require("mongoose");
const { Schema } = mongoose;
const opts = { toJSON: { virtuals: true } };
const playlistSchema = new Schema(
  {
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
  },
  opts
);
module.exports = mongoose.model("Playlist", playlistSchema);
