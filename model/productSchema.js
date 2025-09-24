const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("productsitems", ProductSchema);
