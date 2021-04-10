import React from "react";
import { connect } from "react-redux";
import QuantityCounter from "../../quantityCounter/quantityCounter";
import {
  removeCartItem,
  setTotalItemCount,
  updateCartItem,
  setTotalPrice,
} from "../../../../store/cart/cart.actions";

import "./item.scss";

const Item = ({
  itemList,
  itemDetails,
  updateItem,
  removeItem,
  setItemCount,
  cartItemCount,
  setTotPrice,
  totalCartPrice,
}) => {
  const increase = () => {
    let totalPrice = 0;
    const updatedItemList = itemList.map((item) => {
      if (item.id === itemDetails.id) {
        item.quantity = itemDetails.quantity + 1;
        item.priceTotal = itemDetails.priceTotal + itemDetails.priceEach;
      }
      totalPrice = totalPrice + item.priceTotal;
      return item;
    });

    setTotPrice(totalPrice);
    updateItem(updatedItemList);
  };

  const decrease = () => {
    let totalPrice = 0;
    if (itemDetails.quantity > 1) {
      const updatedItemList = itemList.map((item) => {
        if (item.id === itemDetails.id) {
          item.quantity = itemDetails.quantity - 1;
          item.priceTotal = itemDetails.priceTotal - itemDetails.priceEach;
        }
        totalPrice = item.priceTotal - totalPrice;
        return item;
      });

      setTotPrice(totalPrice);
      updateItem(updatedItemList);
    }
  };

  const removeItemFromCart = () => {
    const newItemList = itemList.filter((item) => item.id !== itemDetails.id);

    setTotPrice(totalCartPrice - itemDetails.priceTotal);
    setItemCount(newItemList.length);
    removeItem(newItemList);
  };

  return (
    <div className="cart__items">
      <div className="cart__items__item">
        <div className="cart__items__item-image">
          <img src={itemDetails.imageUrl} />
        </div>
        <div className="cart__items__item-title">{itemDetails.title}</div>
        <div className="cart__items__item-id">{itemDetails.id}</div>
        <div className="cart__items__item-remove" onClick={removeItemFromCart}>
          Remove from cart
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
  setTotPrice: (number) => dispatch(setTotalPrice(number)),
});

const mapStateToProps = (state) => ({
  cartItemCount: state.cart.totalItemCount,
  totalCartPrice: state.cart.totalCartPrice,
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
