import React from "react";
import Header from "../common/Header";
import Button from "react-bootstrap/Button";
import { useCart } from "../contextAPI/CartContext";

function CartPage() {
  const { cart, removeFromCart, totalItems } = useCart();

  return (
    <>
      <Header />
      <div className="row w-100 pt-20">
        {cart.length > 0 ? (
          <>
            <div className="container my-5">
              <div className="row">
                {/* Cart Items Column */}
                <div className="col-lg-6 col-12">
                  <table className="table shadow border">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>
                            <img
                              style={{ width: "100px", height: "100px" }}
                              src={item.image || ""}
                              alt="product"
                            />
                          </td>
                          <td>{item.quantity}</td>
                          <td>₹ {item.price}</td>
                          <td>
                            <Button
                              variant="outline-danger"
                              onClick={() => removeFromCart(item._id)}
                            >
                              <i className="fa-solid fa-trash"></i>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Cart Summary Column */}
                <div className="col-lg-6 col-12">
                  <div className="shadow p-4 rounded">
                    <h2 className="mb-3" style={{ color: "#5b3d81" }}>
                      Cart Summary
                    </h2>
                    <h5>Total Number of Items: {totalItems}</h5>
                    <h3>
                      Price: ₹{" "}
                      {cart.reduce((sum, item) => sum + (item.price || 0), 0)}
                    </h3>
                    <button
                      type="button"
                      className="btn rounded mt-3"
                      style={{ backgroundColor: "#5b3d81", color: "white" }}
                    >
                      Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div
            style={{ height: "100vh" }}
            className="d-flex justify-content-center align-items-center flex-column"
          >
            <img
              src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif"
              alt="empty cart"
              height={"100px"}
            />
            <h3 className="fw-bolder" style={{color:'#5b3d81'}}>Your Cart is empty</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default CartPage;
