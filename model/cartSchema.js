const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
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
  quantity: {
    type: Number,
    default: 1, // default quantity 1
  },
});

module.exports = mongoose.model("carts", CartSchema);
