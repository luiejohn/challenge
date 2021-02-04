import React from "react";

import styles from "./empty.scss";

import svg from "../../../assets/Icon/sprite.svg";

const Empty = () => {
  console.log(styles);
  return (
    <div className="emp__container">
      <svg className="emp__icon">
        <use xlinkHref={`${svg}#icon-inbox`}></use>
      </svg>
      Your cart is empty
    </div>
  );
};

export default Empty;
