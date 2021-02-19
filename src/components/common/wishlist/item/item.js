import React from "react";
import { connect } from "react-redux";
import {
  checkWishList,
  removeIemOnWishList,
  getWishList,
} from "../../../../firebase/firebase.utils";
import { getUserWishList } from "../../../../store/user/user.actions";
import "./item.scss";

const Item = ({ itemDetails, currentUser, refreshWishList }) => {
  const removeToWishList = () => {
    removeIemOnWishList(currentUser.id, itemDetails);
    checkWishList(currentUser.id, itemDetails.id).then((res) => {
      // TO DO
    });
    getWishList(currentUser.id).then((data) => {
      refreshWishList(data.wishList);
    });
  };

  return (
    <div className="wishList__items">
      <div className="wishList__items__item">
        <div className="wishList__items__item-image">
          <img src={itemDetails.imageUrl} />
        </div>
        <div className="wishList__items__item-title">
          {itemDetails.itemName}
        </div>
        <div className="wishList__items__item-id">{itemDetails.id}</div>
        <div
          className="wishList__items__item-remove"
          onClick={removeToWishList}
        >
          Remove from Wish List
        </div>
      </div>

      <div className="wishList__items__price">
        <div>${itemDetails.price}</div>
      </div>

      <div className="wishList__items__size">Visit Page</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  refreshWishList: (items) => dispatch(getUserWishList(items)),
});

const mapStateToProps = (state) => ({
  cartItemCount: state.cart.totalItemCount,
  totalCartPrice: state.cart.totalCartPrice,
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
