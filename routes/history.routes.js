const express = require("express");
const historyRouter = express.Router();
const {
  getHistory,
  addToHistory,
  removeFromHistory,
  clearHistory,
} = require("../controllers/history.controller");
historyRouter
  .route("/history")
  .get(getHistory)
  .post(addToHistory)
  .delete(removeFromHistory);
historyRouter.route("/clearhistory").post(clearHistory);
module.exports = {
  historyRouter,
};
