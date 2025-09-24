import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import Header from "../common/Header";
import { displayProduct } from "../services/allAPI";
import { useCart } from "../contextAPI/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchTerm, loadingCart } = useCart();

  const getProductList = async () => {
    setLoading(true);
    try {
      const result = await displayProduct();
      setProducts(result.data.productList);
    } catch (error) {
      console.error("Error fetching data");
    }
    setLoading(false);
  };

  useEffect(() => {
    getProductList();
  }, []);

  // filter products by search
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <ToastContainer position="top-left" />
      <div className="d-flex justify-content-center align-items-center flex-column mt-5 pt-20 text-center px-3">
        <h2 style={{ color: "#5b3d81" }}>Online Shopping</h2>
        <p className="w-75 w-md-50">
          You can explore our Products, and you can buy your favorite pieces.
        </p>
      </div>

      <div className="p-5">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : filteredProducts?.length > 0 ? (
          <Row>
            {filteredProducts.map((item) => (
              <Col
                key={item._id}
                lg={4}
                sm={12}
                md={6}
                className="d-flex justify-content-center mb-4"
              >
                <ProductCard product={item} loadingCart={loadingCart} />
              </Col>
            ))}
          </Row>
        ) : (
          <p className="text-center">Nothing to display</p>
        )}
      </div>
    </>
  );
}

export default ProductListPage;
