const { Category } = require("../models/Category.model");
const { Video } = require("../models/Video.model");
const categoryParamHandler = async (req, res, next, categoryId) => {
  try {
    const category = await Category.findById(categoryId).populate("videos");
    req.category = category;
    next();
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error in getting category Details",
      errMessage: err.errMessage,
    });
  }
};
module.exports = {
  categoryParamHandler,
};
