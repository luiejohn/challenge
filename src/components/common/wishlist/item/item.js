import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  checkWishList,
  removeIemOnWishList,
  getWishList,
} from "../../../../firebase/firebase.utils";
import { getUserWishList } from "../../../../store/user/user.actions";
import "./item.scss";

const Item = ({
  itemDetails,
  currentUser,
  refreshWishList,
  currentCategory,
  setCart,
}) => {
  const removeToWishList = () => {
    removeIemOnWishList(currentUser.id, itemDetails)
      .then((res) => {
        checkWishList(currentUser.id, itemDetails.id).then((res) => {
          // TO DO
        });
      })
      .then((res) => {
        getWishList(currentUser.id).then((data) => {
          refreshWishList(data.wishList);
        });
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

      <div className="wishList__items__link">
        <Link
          to={`/category/${itemDetails.categories[0]}/item/${itemDetails.id}`}
          onClick={() => setCart(false)}
        >
          Visit Page
        </Link>
      </div>
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
  currentCategory: state.category.currentCategory,
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
