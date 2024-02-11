import React, { useContext, useEffect, useState } from "react";
import "../styles/shop.scss";

import CommonSection from "../components/UI/common-section";
import Helmet from "../components/Helmet/Helmet";

import { Col, Container, Row } from "reactstrap";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";
import ScrollUp from "../components/scrollUp/ScrollUp";
import { CategoryContext } from "../context/category.context";

const Shop = () => {
  const { categoryValue, setCategoryValue } = useContext(CategoryContext);

  const [productsData, setProductsData] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleFilter = (event) => {
    const filterValue = event.target.value;

    if (filterValue === "") {
      setSelectedCategory("");
      setProductsData(products);
    } else {
      setSelectedCategory(filterValue);
      const filteredProducts = products.filter(
        (item) => item.category === filterValue
      );
      setProductsData(filteredProducts);
    }

    // Handle sorting based on sortOption
    if (sortOption === "ascending") {
      setProductsData([...productsData].sort((a, b) => a.price - b.price));
    } else if (sortOption === "descending") {
      setProductsData([...productsData].sort((a, b) => b.price - a.price));
    }
  };

  const handleSearch = (event) => {
    const searchTextInput = event.target.value;

    if (searchTextInput === "") {
      if (selectedCategory !== "") {
        handleFilter({ target: { value: selectedCategory } });
      } else {
        handleFilter({ target: { value: "" } });
      }
    } else {
      const searchProductsWithFilter = productsData.filter((item) =>
        item.productName.toLowerCase().includes(searchTextInput.toLowerCase())
      );

      setProductsData(searchProductsWithFilter);
    }
  };

  const handleSort = (event) => {
    const sortValue = event.target.value;
    setSortOption(sortValue);

    // Reapply filtering with the new sorting option
    handleFilter({ target: { value: selectedCategory } });
  };

  useEffect(() => {
    window.scroll(0, 0);

    if (categoryValue !== "" && categoryValue !== null) {
      handleFilter({ target: { value: categoryValue } });
      setCategoryValue(null);
    }
  }, [products, categoryValue]);

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />
      <section className="shop__container">
        <Container>
          <Row>
            <Col lg="3" md="6" sm="6">
              <div className="filter__widget">
                <select onChange={handleFilter} id="select">
                  <option value="">Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                  <option value="chair">Chair</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" sm="6">
              <div className="filter__widget">
                <select onChange={handleSort}>
                  <option value="">Filter By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
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

      <section className="products__container">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center">No Products were found !</h1>
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
