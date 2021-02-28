import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import "./cart.scss";
import Item from "./item/item";
import svg from "../../../assets/Icon/sprite.svg";
import Empty from "../empty/empty";
import Button from "../../common/button/button";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

const Cart = ({
  setCart,
  cartItems,
  cartItemCount,
  setCheckout,
  isCheckout,
  totalPrice,
  currentUser,
}) => {
  console.log(cartItems);
  const stripe = useStripe();
  const elements = useElements();
  // const options = useOptions();

  return (
    <div style={{ height: "550px" }}>
      {!isCheckout ? (
        <div>
          <div className="padding-3" style={{ position: "relative" }}>
            <svg className="cart__close" onClick={() => setCart(false)}>
              <use xlinkHref={`${svg}#icon-cross`}></use>
            </svg>
            <div className="cart__countheader">
              <h2 className="cart__topheader">
                {cartItemCount === 0
                  ? "No Item in your cart yet"
                  : `${cartItemCount} Items In Your Cart`}
              </h2>
            </div>

            <div className="cart__header">
              <div style={{ textAlign: "left" }}>Item</div>
              <div>Size</div>
              <div>Quantity</div>
              <div>Price</div>
            </div>

            <div
              className={
                cartItems.length === 0
                  ? "cart__tableCont"
                  : "cart__tableContScroll"
              }
            >
              {!cartItems || cartItems.length === 0 ? (
                <Empty />
              ) : (
                <div className="cart__list">
                  {cartItems.map((item) => {
                    return <Item itemList={cartItems} itemDetails={item} />;
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="cart__options">
            <Button click={() => setCart(false)}>Back to Shop</Button>

            <Button
              primary
              disabled={cartItemCount === 0 ? true : false}
              click={() => setCheckout(true)}
            >
              Checkout
            </Button>
          </div>
        </div>
      ) : (
        <div className="checkout__infoCont">
          <div className="padding-3 checkout__infoSecCont">
            <svg className="cart__close" onClick={() => setCart(false)}>
              <use xlinkHref={`${svg}#icon-cross`}></use>
            </svg>
            <div className="cart__countheader">
              <h2 className="cart__topheader">Checkout</h2>
            </div>
            {/* <div className="checkout__header">
              <div>Summary</div>
              <div>User Info</div>
            </div> */}
            <div className="checkout__info">
              <div style={{ paddingTop: "2rem" }}>
                <div
                  style={{
                    borderRight: "1px solid #ccc",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="checkout__summaryHeader">
                    <div className="checkout__itemsInfo_title">Title</div>
                    <div>Price Each</div>
                    <div>Quantity</div>
                    <div>Price Total</div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flex: "1",
                    }}
                  >
                    <div style={{ flex: "1", padding: "10px" }}>
                      {cartItems.map((item) => {
                        return (
                          <div className="checkout__itemsInfo ">
                            <div className="checkout__itemsInfo_title">
                              {item.title}
                            </div>
                            <div>${item.priceEach}</div>
                            <div>x{item.quantity}</div>
                            <div>${item.priceTotal}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="checkout__itemTotal">
                      Total: ${totalPrice}
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ paddingTop: "2rem" }}>
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="checkout__userHeader">
                    <div>User Info</div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flex: "1",
                    }}
                  >
                    <div className="checkout__userDetails">
                      <div>User Name: {currentUser.displayName}</div>
                      <div>Email Address: {currentUser.email}</div>
                      <div>Voucher if Any</div>
                      <div>
                        <CardNumberElement
                          // options={options}
                          onReady={() => {
                            console.log("CardNumberElement [ready]");
                          }}
                          onChange={(event) => {
                            console.log("CardNumberElement [change]", event);
                          }}
                          onBlur={() => {
                            console.log("CardNumberElement [blur]");
                          }}
                          onFocus={() => {
                            console.log("CardNumberElement [focus]");
                          }}
                        />

                        <CardExpiryElement
                          // options={options}
                          onReady={() => {
                            console.log("CardNumberElement [ready]");
                          }}
                          onChange={(event) => {
                            console.log("CardNumberElement [change]", event);
                          }}
                          onBlur={() => {
                            console.log("CardNumberElement [blur]");
                          }}
                          onFocus={() => {
                            console.log("CardNumberElement [focus]");
                          }}
                        />

                        <CardCvcElement
                          // options={options}
                          onReady={() => {
                            console.log("CardNumberElement [ready]");
                          }}
                          onChange={(event) => {
                            console.log("CardNumberElement [change]", event);
                          }}
                          onBlur={() => {
                            console.log("CardNumberElement [blur]");
                          }}
                          onFocus={() => {
                            console.log("CardNumberElement [focus]");
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart__options">
            <Button click={() => setCheckout(false)}>Back to Cart</Button>

            <Button primary click={() => setCheckout(true)}>
              Place Order
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
  cartItemCount: state.cart.totalItemCount,
  totalPrice: state.cart.totalCartPrice,
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Cart);
