const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
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
  playlists: [
    {
      type: Schema.Types.ObjectId,
      ref: "Playlist",
    },
  ],
});
const User = mongoose.model("User", userSchema);
module.exports = {
  User,
};
