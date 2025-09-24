import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCart } from "../contextAPI/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <>
      <Card style={{ width: "18rem" }} className="mt-10">
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "280px" }}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
            <p className="fw-bolder mt-2">₹{product.price}</p>
          </Card.Text>
          <button
            className="mx-auto px-4 py-2 rounded border-2 border-[#5b3d81] text-[#5b3d81] hover:bg-[#5b3d81] hover:text-white transition-all"
            onClick={() => addToCart(product)}
          >
            <i className="fas fa-shopping-cart text-xl mr-3 fa-sm"></i>
            Add to Cart
          </button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductCard;
