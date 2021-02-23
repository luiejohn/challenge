import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "../Modal/modal";
import { setSignUpModal } from "../../../store/user/user.actions";

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

      createUserProfileDocument(user, { displayName }).then((res) => {
        this.props.setSignUp(false);
      });

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

// const SignUpModal = ({ show, handleChange, setSignUp }) => {
//   const [displayName, setDisplayName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   console.log(displayName);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Password does not match");
//       return;
//     }

//     try {
//       auth.createUserWithEmailAndPassword(email, password).then(({ user }) => {
//         createUserProfileDocument(user, { displayName }).then((res) => {});
//       });

//       setSignUp(false);
//       setDisplayName("");
//       setEmail("");
//       setPassword("");
//       setConfirmPassword("");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Modal show={show} handleChange={handleChange}>
//       <div className="signUp-cont">
//         <button
//           onClick={() => handleChange(!show)}
//           className="signUp__btn-close"
//         >
//           &times;
//         </button>
//         <h3>Register</h3>
//         <div>Please fill up the details</div>
//         <div className="signUp_inputCont">
//           <form onSubmit={handleFormSubmit} id="signUpForm">
//             <input
//               type="text"
//               name="displayName"
//               value={displayName}
//               placeholder="Display Name"
//               required
//               className="signUp__input"
//               onChange={(e) => setDisplayName(e.target.value)}
//             />
//             <input
//               type="email"
//               name="email"
//               value={email}
//               placeholder="Email"
//               required
//               className="signUp__input"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               name="password"
//               value={password}
//               placeholder="Password"
//               required
//               className="signUp__input"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <input
//               type="password"
//               name="confirmPassword"
//               value={confirmPassword}
//               required
//               placeholder="Confirm Password"
//               className="signUp__input"
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </form>
//         </div>

//         <div className="login-btn-cont">
//           <button
//             className="btn-md btn-primary"
//             type="submit"
//             form="signUpForm"
//             value="Submit"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </Modal>
//   );
// };

const mapDispatchToProps = (dispatch) => ({
  setSignUp: (val) => dispatch(setSignUpModal(val)),
});

export default connect(null, mapDispatchToProps)(SignUpModal);
