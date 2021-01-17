import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./card.scss";

// import Shirt from '../../../assets/images/shirt.png'
import Shirt from "../../../assets/images/christmas-seal.gif";
import svg from "../../../assets/Icon/sprite.svg";

const Card = (props) => {
  console.log(props);
  return (
    <div className="item-card">
      <div className="item-card__image">
        <img src={Shirt} alt="shirt" />
      </div>

      <div className="item-card__desc">
        <div className="item-card__title">Men's T-shirt</div>

        <div className="item-card__price">$14.99</div>
      </div>

      {/* <div className="item-card__btn">
                <button className="btn-sm btn-primary"> Buy Now </button>
            </div> */}

      <div className="item-card__quickview">
        <svg className="item-card__quickview__icon">
          <use xlinkHref={`${svg}#icon-heart-outlined`}></use>
        </svg>

        <Link
          to={{
            pathname: props.match.url + "/item/" + props.item.id,
          }}
        >
          <button className="btn-md btn-primary">Quick View</button>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Card);
