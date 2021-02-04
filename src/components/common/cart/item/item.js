import React, { useState } from "react";
import { connect } from "react-redux";
import QuantityCounter from "../../quantityCounter/quantityCounter";
import {
  removeCartItem,
  setTotalItemCount,
  updateCartItem,
} from "../../../../store/cart/cart.actions";

import "./item.scss";

const Item = ({
  itemList,
  itemDetails,
  updateItem,
  removeItem,
  setItemCount,
  cartItemCount,
}) => {
  console.log(cartItemCount);
  const increase = () => {
    const updatedItemList = itemList.map((item) => {
      if (item.id === itemDetails.id) {
        item.quantity = itemDetails.quantity + 1;
        item.priceTotal = itemDetails.priceTotal + itemDetails.priceEach;
      }
      return item;
    });

    console.log(updatedItemList);
    updateItem(updatedItemList);
  };

  const decrease = () => {
    if (itemDetails.quantity > 1) {
      const updatedItemList = itemList.map((item) => {
        if (item.id === itemDetails.id) {
          item.quantity = itemDetails.quantity - 1;
          item.priceTotal = itemDetails.priceTotal - itemDetails.priceEach;
        }
        return item;
      });

      console.log(updatedItemList);
      updateItem(updatedItemList);
    }
  };

  const removeItemFromCart = () => {
    const newItemList = itemList.filter((item) => item.id !== itemDetails.id);

    setItemCount(newItemList.length);
    removeItem(newItemList);
  };

  return (
    <div className="cart__items">
      <div className="cart__items__item">
        <div className="cart__items__item-image">image</div>
        <div className="cart__items__item-title">{itemDetails.title}</div>
        <div className="cart__items__item-id">{itemDetails.id}</div>
        <div className="cart__items__item-remove" onClick={removeItemFromCart}>
          xremove
        </div>
      </div>

      <div className="cart__items__size">
        <div>{itemDetails.size}</div>
        {/* <div>X</div> */}
      </div>

      <QuantityCounter
        centered
        increase={increase}
        decrease={decrease}
        quantity={itemDetails.quantity}
      />
      <div className="cart__items__price">${itemDetails.priceTotal}</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateItem: (items) => dispatch(updateCartItem(items)),
  removeItem: (items) => dispatch(removeCartItem(items)),
  setItemCount: (number) => dispatch(setTotalItemCount(number)),
});

const mapStateToProps = (state) => ({
  cartItemCount: state.cart.totalItemCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
