import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { useCart } from "../contextAPI/CartContext";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false); 

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      await addToCart(product); 
    } catch (error) {
      toast.error("Failed to add item");
    }
    setLoading(false);
  };

  return (
    <Card style={{ width: "18rem" }} className="mt-10">
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: "280px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
          <p className="fw-bolder mt-2">₹{product.price}</p>
        </Card.Text>
        <button
          className={`mx-auto px-4 py-2 rounded border-2 border-[#5b3d81] text-[#5b3d81] hover:bg-[#5b3d81] hover:text-white transition-all ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleAddToCart}
          disabled={loading}
        >
          <i className="fas fa-shopping-cart text-xl mr-3 fa-sm"></i>
          {loading ? "Adding..." : "Add to Cart"}
        </button>
    </Card.Body>
  </Card>
  );
}

export default ProductCard;
