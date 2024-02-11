import React, { useState } from "react";
import "../styles/login.scss";

import Helmet from "../components/Helmet/Helmet";

import { Col, Container, Row, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Helmet title="Login">
      <section className="login__container">
        <Container>
          <Row className="row">
            <Col lg="6" className="m-auto text-center ">
              <h3 className="fw-bold fs-4 mb-4">Login</h3>

              <Form className="auth__form  ">
                <FormGroup className="form__group">
                  <input
                    required
                    type="email"
                    placeholder="Enter you Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    required
                    type="password"
                    placeholder="Enter you Password"
                    value={email}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>

                <button className="buy__btn" type="submit">
                  Login
                </button>
                <p>
                  Don't have an account?
                  <Link to="/signup"> Create an account</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
