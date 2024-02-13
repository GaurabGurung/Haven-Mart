import React, { useEffect, useState } from "react";
import "../styles/signup.scss";
import Spinner from "../components/UI/spinner";

import Helmet from "../components/Helmet/Helmet";

import { Col, Container, Row, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  storage,
  db,
} from "../firebase.config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    setLoading(true);

    try {
      const userCredential = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;
      const storageRef = ref(storage, `images/${Date.now() + userName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          alert(error.message);
          setLoading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
            //update user profile
            await updateProfile(user, {
              displayName: userName,
              photoURL: downloadUrl,
            });
            // Save user data in Firestore
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: userName,
              email,
              photoURL: downloadUrl,
            });
          });
        }
      );

      setLoading(false);
      toast.success("Account created successfully");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Email address is already in use");
          break;
        default:
          console.error(error);
          alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <Helmet title="SignUp">
      <section className="signup__container">
        <Container>
          <Row className="justify-content-center">
            {loading ? (
              <Spinner />
            ) : (
              <Col lg="6" className="m-auto text-center ">
                <h3 className="fw-bold fs-4 mb-4">Sign Up</h3>

                <Form className="auth__form " onSubmit={handleSignUp}>
                  <FormGroup className="form__group">
                    <input
                      required
                      type="text"
                      placeholder="Enter you Full Name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </FormGroup>
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
                      placeholder="Create a Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      required
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="uploadPic">
                    <span>Profile Picture (Optional)</span>

                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </FormGroup>

                  <button className="buy__btn" type="submit">
                    Sign Up
                  </button>
                  <p>
                    Already have an account?
                    <Link to="/login"> Sign In here</Link>
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

export default SignUp;
