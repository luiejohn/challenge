import React, { useState } from "react";
import svg from "../../../assets/Icon/sprite.svg";
import "./button.scss";

const Button = ({ primary, icon, children }) => {
  const [isWishList, wishList] = useState(false);

  let heartIcon = isWishList ? "#icon-heart" : "#icon-heart-outlined";

  return primary ? (
    <div className="btn-md btn-primary">{children}</div>
  ) : (
    <div
      className="btn-md btn-secondary"
      onMouseEnter={() => wishList(!isWishList)}
      onMouseLeave={() => wishList(!isWishList)}
    >
      {icon ? (
        <span>
          <svg className="btn__icon">
            <use xlinkHref={`${svg}${heartIcon}`}></use>
          </svg>
        </span>
      ) : null}
      {children}
    </div>
  );
};

export default Button;
