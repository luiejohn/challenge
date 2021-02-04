import React, { Fragment } from "react";
import { connect } from "react-redux";

import "./cart.scss";
import Item from "./item/item";
import svg from "../../../assets/Icon/sprite.svg";

const Cart = ({ className, setCart, cartItems }) => {
  console.log(cartItems);
  return (
    <Fragment>
      <div className={className}>
        <div className="padding-3">
          <div className="cart__countheader">
            <h2 className="cart__topheader">6 Items In Your Cart</h2>
            <svg className="cart__close" onClick={() => setCart(false)}>
              <use xlinkHref={`${svg}#icon-cross`}></use>
            </svg>
          </div>

          <div className="cart__header">
            <div style={{ textAlign: "left" }}>Item</div>
            <div>Size</div>
            <div>Quantity</div>
            <div>Price</div>
          </div>

          <div className="cart__list">
            {cartItems.map((item) => {
              return <Item itemList={cartItems} itemDetails={item} />;
            })}
          </div>
        </div>
        <div className="cart__options">
          <button
            className="btn-md btn-secondary"
            onClick={() => setCart(false)}
          >
            Back to Shop
          </button>

          <button className="btn-md btn-primary">Checkout</button>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

export default connect(mapStateToProps)(Cart);
