const mongoose = require("mongoose");
const { Schema } = mongoose;
const opts = { toJSON: { virtuals: true } };
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: "Please add name",
    },
    email: {
      type: String,
      required: "Please add email",
    },
    password: {
      type: String,
      required: "Please add password",
    },
    likedVideos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    history: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    playlists: [
      {
        type: Schema.Types.ObjectId,
        ref: "Playlist",
      },
    ],
  },
  opts
);
module.exports = mongoose.model("User", userSchema);
