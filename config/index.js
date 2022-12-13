module.exports = {
  PORT: process.env.PORT || 5000,
  MONGODB_URL:
    process.env.MONGODB_URL || "mongodb://localhost/node-react-hotel-booking",
  JWT_SECRET: process.env.JWT_SECRET || "thisisjwtsecret",
  JWT_EXPIRY: process.env.JWT_EXPIRY || "30d",
};
