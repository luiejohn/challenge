import React from "react";

import BackDrop from "../backdrop/backdrop";

import "./modal.scss";

const signIn = (props) => {
  return (
    <div>
      <BackDrop
        className={props.show ? "backdrop" : null}
        show={props.show}
        onClick={() => props.handleChange(!props.show)}
      />
      <div
        className={
          props.show ? "signInModal modal-show" : "signInModal modal-hide"
        }
      >
        {props.children}
      </div>
    </div>
  );
};

export default signIn;
