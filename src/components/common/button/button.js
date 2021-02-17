import React, { useState } from "react";
import svg from "../../../assets/Icon/sprite.svg";
import "./button.scss";

const Button = ({ primary, children, click, disabled }) => {
  const [isWishList, wishList] = useState(false);

  let heartIcon = isWishList ? "#icon-heart" : "#icon-heart-outlined";

  return primary ? (
    <div
      className={
        disabled ? "btn-md btn-primary disabled" : "btn-md btn-primary"
      }
      onClick={disabled ? () => {} : click}
    >
      {children}
    </div>
  ) : (
    <div
      className={
        disabled ? "btn-md btn-secondary disabled" : "btn-md btn-secondary"
      }
      onClick={disabled ? () => {} : click}
    >
      {children}
    </div>
  );
};

export default Button;
