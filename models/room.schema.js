const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    title: {
      type: String,
    },
    titleHeader: {
      type: String,
    },
    description: {
      type: String,
    },
    header: {
      type: String,
    },
    subHeader: {
      type: String,
    },
    view: {
      type: String,
    },
    size: {
      type: String,
    },
    adults: {
      type: String,
    },
    children: {
      type: String,
    },
    bedding: {
      type: String,
    },
    amenities: [
      {
        type: String,
      },
    ],
    paragraph: {
      type: String,
    },
    subImage: {
      type: String,
    },
    rooms: {
      type: String,
    },
    price: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", roomSchema);
