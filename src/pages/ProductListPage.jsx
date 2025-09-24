import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import Header from "../common/Header";
import { displayProduct } from "../services/allAPI";
import { useCart } from "../contextAPI/CartContext";

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const { searchTerm } = useCart();

  const getProductList = async () => {
    try {
      const result = await displayProduct();
      setProducts(result.data.productList);
    } catch (error) {
      console.error("error fetching data");
    }
  };

  useEffect(() => {
    getProductList();
  }, []);
  console.log("data", products);

  //  filtering product
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center flex-column mt-5 pt-20 text-center px-3">
  <h2 className="" style={{ color: "#5b3d81" }}>
    Online Shopping
  </h2>
  <p className="w-75 w-md-50">
    You can explore our Products, and you can buy your favorite pieces.
  </p>
</div>

      <div>
        <Row className="p-5">
          {filteredProducts?.length > 0 ? (
            filteredProducts.map((item) => (
              <Col
                key={item._id}
                lg={4}
                sm={12}
                md={6}
                className="d-flex justify-content-center"
              >
                <ProductCard product={item} />
              </Col>
            ))
          ) : (
            <p>Nothing to display</p>
          )}
        </Row>
      </div>
    </>
  );
}

export default ProductListPage;
