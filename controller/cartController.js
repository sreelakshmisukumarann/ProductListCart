const Cart = require("../model/cartSchema");
const Product = require("../model/productSchema");

// Add to cart

exports.addToCart = async (req, res) => {
  // console.log('inside addcart logic');

  try {
    const { productId } = req.body;

    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // check  product is already in cart
    let cartItem = await Cart.findOne({ productId });

    if (cartItem) {
      // if exists, increase quantity
      cartItem.quantity += 1;
      await cartItem.save();
      return res
        .status(200)
        .json({ success: true, cartItem, message: "Quantity updated" });
    } else {
      // if not exists, create new cart item
      const newCartItem = new Cart({
        productId: product._id,
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        image: product.image,
        quantity: 1,
      });

      await newCartItem.save();
      return res.status(201).json({
        success: true,
        cartItem: newCartItem,
        message: "Product added to cart",
      });
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
// Get all cart items
exports.getCartItems = async (req, res) => {
  // console.log('inside getcart logic');

  try {
    const cartItems = await Cart.find();
    res.status(200).json({ success: true, cartItems: cartItems });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// remove item
exports.removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Item removed" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
