const { extend } = require("lodash");
const mongoose = require("mongoose");
const Category = require("../models/Category.model");
const Video = require("../models/Video.model");
const getAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.find({});
    res.status(200).json({
      success: true,
      message: "All Categories",
      categories: allCategories,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error in getting categories",
      errMessage: err.errMessage,
    });
  }
};

const addACategory = async (req, res) => {
  const categoryDetails = req.body;
  const newCategory = new Category(categoryDetails);
  try {
    const savedCategory = await newCategory.save();
    res.status(201).json({
      success: true,
      message: "Added new category",
      category: savedCategory,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in adding category",
      errMessage: err,
    });
  }
};

const updateCategory = async (req, res) => {
  let category = req.category;
  const updateCategory = req.body;
  category = extend(category, updateCategory);
  try {
    const updatedCategory = await category.save();
    res.status(204).json({
      success: true,
      message: "Category updated successfully",
      category: updatedCategory,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Error in updating category",
      errMessage: err.errMessage,
    });
  }
};

const getACategory = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Category details",
    category: req.category,
  });
};

const addAVideo = async (req, res) => {
  const category = req.category;
  const videoDetails = { ...req.body, category: category._id };
  const newVideo = new Video(videoDetails);
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    const savedVideo = await newVideo.save({ session: session });
    category.videos.push(savedVideo._id);
    await category.save({ session: session });
    session.commitTransaction();
    res.status(201).json({
      success: true,
      message: "Added a video",
      video: savedVideo,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in adding a video",
      errMessage: err.errMessage,
    });
  }
};
module.exports = {
  getAllCategories,
  addACategory,
  updateCategory,
  getACategory,
  addAVideo,
};
