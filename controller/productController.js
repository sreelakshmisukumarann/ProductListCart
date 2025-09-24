const Product = require('../model/productSchema')

// get product lisf
exports.getProductItems = async (req, res) => {
  try {
    // console.log('Fetching product list...');
    const productList = await Product.find(); // fetch all products
    res.status(200).json({
      success: true,
      productList: productList
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};