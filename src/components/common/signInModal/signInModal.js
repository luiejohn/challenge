import React from "react";

import Modal from "../Modal/modal";
import { signInWithGoogle } from "../../../firebase/firebase.utils";
import svg from "../../../assets/Icon/sprite.svg";

import { auth } from "../../../firebase/firebase.utils";

import "./signInModal.scss";

class SignInModal extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleOnchange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }

    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    const { email, password } = this.state;
    const { show, handleChange } = this.props;

    return (
      <Modal show={show} handleChange={handleChange}>
        <div className="modal-content">
          <button onClick={() => handleChange(!show)} className="btn-close">
            &times;
          </button>

          <span className="login-with">Sign in with</span>
          <div className="social-cont">
            <button className="btn-media" onClick={signInWithGoogle}>
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
            <form onSubmit={this.handleFormSubmit} id="signInForm">
              <input
                name="email"
                type="text"
                value={email}
                placeholder="Email"
                className="login__input"
                onChange={this.handleOnchange}
                required
              />
              <input
                name="password"
                type="password"
                value={password}
                placeholder="Password"
                className="login__input"
                onChange={this.handleOnchange}
                required
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
  }
}

export default SignInModal;
