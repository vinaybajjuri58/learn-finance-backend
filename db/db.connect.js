const mongoose = require("mongoose");
const dbUrl = process.env.DB_URL;
const initialiseDBConnection = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected with DB successfully");
  } catch (err) {
    console.log("Error in establishing DB connection");
    console.log(err);
  }
};
module.exports = {
  initialiseDBConnection,
};
