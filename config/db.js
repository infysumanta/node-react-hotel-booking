const mongoose = require("mongoose");
const config = require(".");

const connectDB = () => {
  mongoose
    .connect(config.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log(error.message));
};

module.exports = { connectDB };
