const mongoose = require("mongoose");
const { Schema } = mongoose;
const opts = { toJSON: { virtuals: true } };
const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: "Add a name for the category",
    },
    description: {
      type: String,
      required: "Add description to the category",
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
module.exports = mongoose.model("Category", categorySchema);
