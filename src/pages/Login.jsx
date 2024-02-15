import React, { useEffect, useState } from "react";
import "../styles/login.scss";

import Helmet from "../components/Helmet/Helmet";

import { Col, Container, Row, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/UI/spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const { user } = userCredential;
      console.log(user);

      setLoading(false);

      toast.success("Logged in Successfully");
      navigate("/check-out");
    } catch (error) {
      setLoading(false);
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Incorrect Email or Password");
          break;
        case "auth/too-many-requests":
          alert(
            "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
          );
          break;
        default:
          console.error(error);
          alert("An error occurred. Please try again.");
      }
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Helmet title="Login">
      <section className="login__container">
        <Container>
          <Row className="row">
            {loading ? (
              <Col lg="12">
                <Spinner />
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center ">
                <h3 className="fw-bold fs-4 mb-4">Login</h3>

                <Form className="auth__form  " onSubmit={handleSignIn}>
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
                      value={password}
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
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
