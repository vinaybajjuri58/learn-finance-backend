const mongoose = require("mongoose");
require("mongoose-type-url");
const { Schema } = mongoose;
const videoSchema = new Schema({
  videoId: {
    type: String,
    required: "Add the video Id",
  },
  imageUrl: {
    type: mongoose.SchemaTypes.Url,
    required: "Add image Url",
  },
  description: {
    type: String,
    required: "Add Description to the video",
  },
  uploadedBy: {
    type: String,
    required: "Add creator name",
  },
  avatarSrc: {
    type: mongoose.SchemaTypes.Url,
    required: "Add avatar url of creator",
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
});
module.exports = mongoose.model("Video", videoSchema);
