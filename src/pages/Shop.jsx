import React from "react";
import "../styles/shop.scss";

import CommonSection from "../components/UI/common-section";
import Helmet from "../components/Helmet/Helmet";

import {
  Col,
  Container,
  Row,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

const Shop = () => {
  return (
    <Helmet title="Shop">
      <CommonSection />
      <section className="shop__container">
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <UncontrolledDropdown>
                  <DropdownToggle caret color="dark" className="select">
                    Filter By Category
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Select a Filter</DropdownItem>
                    <DropdownItem value="sofa">Sofa</DropdownItem>
                    <DropdownItem value="mobile">Mobile</DropdownItem>
                    <DropdownItem value="watch">Watch</DropdownItem>
                    <DropdownItem value="wireless">Wireless</DropdownItem>
                    <DropdownItem value="chair">Chair</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <UncontrolledDropdown>
                  <DropdownToggle caret color="dark" className="select">
                    Filter By Category {"  "}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Select a Filter</DropdownItem>
                    <DropdownItem value="assending">Assending</DropdownItem>
                    <DropdownItem value="descending">Descending</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line" />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
