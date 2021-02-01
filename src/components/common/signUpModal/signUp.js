import React, { useState } from "react";

import Modal from "../Modal/modal";
import Button from "../button/button";

import "./signUp.scss";

import {
  auth,
  createUserProfileDocument,
} from "../../../firebase/firebase.utils";

class SignUpModal extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name + " " + value);
    this.setState({ [name]: value });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    const { show, handleChange } = this.props;

    console.log(displayName);

    return (
      <Modal show={show} handleChange={handleChange}>
        <div className="signUp-cont">
          <button
            onClick={() => handleChange(!show)}
            className="signUp__btn-close"
          >
            &times;
          </button>
          <h3>Register</h3>
          <div>Please fill up the details</div>
          <div className="signUp_inputCont">
            <form onSubmit={this.handleFormSubmit} id="signUpForm">
              <input
                type="text"
                name="displayName"
                value={displayName}
                placeholder="Display Name"
                required
                className="signUp__input"
                onChange={this.handleInputChange}
              />
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                required
                className="signUp__input"
                onChange={this.handleInputChange}
              />
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                required
                className="signUp__input"
                onChange={this.handleInputChange}
              />
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                required
                placeholder="Confirm Password"
                className="signUp__input"
                onChange={this.handleInputChange}
              />
            </form>
          </div>

          <div className="login-btn-cont">
            <button
              className="btn-md btn-primary"
              type="submit"
              form="signUpForm"
              value="Submit"
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default SignUpModal;
