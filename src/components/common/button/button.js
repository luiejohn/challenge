import React, { useState } from "react";
import svg from "../../../assets/Icon/sprite.svg";
import "./button.scss";

const Button = ({ primary, icon, children, click }) => {
  const [isWishList, wishList] = useState(false);

  let heartIcon = isWishList ? "#icon-heart" : "#icon-heart-outlined";

  return primary ? (
    <div className="btn-md btn-primary" onClick={click}>
      {children}
    </div>
  ) : (
    <div
      className="btn-md btn-secondary"
      onClick={click}
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
