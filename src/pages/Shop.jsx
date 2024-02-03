import React, { useEffect, useState } from "react";
import "../styles/shop.scss";

import CommonSection from "../components/UI/common-section";
import Helmet from "../components/Helmet/Helmet";

import { Col, Container, Row } from "reactstrap";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";
import ScrollUp from "../components/scrollUp/ScrollUp";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const [searchField, setSearchField] = useState("");

  const handleFilter = (event) => {
    const filterValue = event.target.value;

    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filteredProducts);
    } else if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filteredProducts);
    } else if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filteredProducts);
    } else if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filteredProducts);
    } else if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (event) => {
    const searchTextInput = event.target.value;
    const searchProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchField.toLowerCase())
    );
    setSearchField(searchTextInput);
    setProductsData(searchProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection />
      <section className="shop__container">
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                  <option value="chair">Chair</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select>
                  <option>Filter By</option>
                  <option value="assending">Assending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search"
                  id="search"
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line" />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1>No Products were found !</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
      <ScrollUp />
    </Helmet>
  );
};

export default Shop;
