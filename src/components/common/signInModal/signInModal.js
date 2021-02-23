import React, { useState } from "react";
import { connect } from "react-redux";

import Modal from "../Modal/modal";
import { signInWithGoogle } from "../../../firebase/firebase.utils";
import svg from "../../../assets/Icon/sprite.svg";

import { auth } from "../../../firebase/firebase.utils";
import { setSignInModal } from "../../../store/user/user.actions";

import "./signInModal.scss";

const SignInModal = ({ show, handleChange, setLoginModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setLoginModal(false);
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        setLoginModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal show={show} handleChange={handleChange}>
      <div className="modal-content">
        <button onClick={() => handleChange(!show)} className="btn-close">
          &times;
        </button>

        <span className="login-with">Sign in with</span>
        <div className="social-cont">
          <button className="btn-media" onClick={handleGoogleSignIn}>
            <svg className="google-icon">
              <use xlinkHref={`${svg}#icon-google2`}></use>
            </svg>
            <span>Google</span>
          </button>
          {/* <button className="btn-media">
            <svg className="fb-icon">
              <use xlinkHref={`${svg}#icon-facebook2`}></use>
            </svg>
            <span>Facebook</span>
          </button> */}
        </div>

        <div className="login-cont">
          <span className="login-with">or sign in with credentials</span>
          <form onSubmit={handleFormSubmit} id="signInForm">
            <input
              name="email"
              type="email"
              value={email}
              placeholder="Email"
              className="login__input"
              onChange={(e) => setEmail(e.target.value)}
              // required
            />
            <input
              name="password"
              type="password"
              value={password}
              placeholder="Password"
              className="login__input"
              onChange={(e) => setPassword(e.target.value)}
              // required
            />
          </form>
          <div className="remember-me">
            <input type="checkbox" id="check1" />{" "}
            <label htmlFor="check1">Remember Me</label>
          </div>

          <div className="login-btn-cont">
            <button
              className="btn-md btn-primary"
              type="submit"
              form="signInForm"
              value="Submit"
            >
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setLoginModal: (val) => dispatch(setSignInModal(val)),
});

export default connect(null, mapDispatchToProps)(SignInModal);
