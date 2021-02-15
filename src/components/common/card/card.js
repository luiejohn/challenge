import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "../button/button";

import "./card.scss";

// import Shirt from '../../../assets/images/shirt.png'
import Shirt from "../../../assets/images/christmas-seal.gif";
import svg from "../../../assets/Icon/sprite.svg";

const Card = ({ match, key, item }) => {
  // console.log(props);
  const [isWishList, wishList] = useState(false);

  let heartIcon = isWishList ? "#icon-heart" : "#icon-heart-outlined";

  return (
    <div key={key} className="item-card">
      <div className="item-card__image">
        <img src={item.imageUrl} alt="shirt" />
      </div>

      <div className="item-card__desc">
        <div className="item-card__title">{item.itemName}</div>

        <div className="item-card__price">${item.price}</div>
      </div>

      <div className="item-card__quickview">
        <svg
          onMouseEnter={() => wishList(!isWishList)}
          onMouseLeave={() => wishList(!isWishList)}
          className="item-card__quickview__icon"
        >
          <use xlinkHref={`${svg}${heartIcon}`}></use>
        </svg>

        <Link
          to={{
            pathname: match.url + "/item/" + item.id,
          }}
          style={{ textDecoration: "none" }}
        >
          <Button primary>Quick View</Button>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Card);
