const express = require("express");
const categoryRouter = express.Router();
const {
  getAllCategories,
  addACategory,
  updateCategory,
  getACategory,
  addAVideo,
} = require("../controllers/category.controller");
const { categoryParamHandler } = require("../controllers/paramHandlers");
categoryRouter.route("/").get(getAllCategories).post(addACategory);
categoryRouter.param("categoryId", categoryParamHandler);
categoryRouter.route("/:categoryId").get(getACategory).post(updateCategory);
categoryRouter.route("/:categoryId/videos").post(addAVideo);
module.exports = {
  categoryRouter,
};
