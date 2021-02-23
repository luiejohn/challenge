import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "../button/button";
import { connect } from "react-redux";
import { compose } from "redux";

import "./card.scss";
import { getUserWishList } from "../../../store/user/user.actions";

import svg from "../../../assets/Icon/sprite.svg";
import {
  addItemOnWishlist,
  checkWishList,
  removeIemOnWishList,
  getWishList,
} from "../../../firebase/firebase.utils";

const Card = ({ match, key, item, currentUser, setModal, refreshWishList }) => {
  const [isWishListed, setWishListed] = useState(false);

  const addToWishList = (itemId) => {
    addItemOnWishlist(currentUser.id, itemId);
    checkWishList(currentUser.id, item.id).then((res) => {
      setWishListed(true);
    });
    getWishList(currentUser.id).then((data) => {
      refreshWishList(data.wishList);
    });
  };

  const removeToWishList = (itemId) => {
    removeIemOnWishList(currentUser.id, itemId);
    checkWishList(currentUser.id, item.id).then((res) => {
      setWishListed(false);
    });
    getWishList(currentUser.id).then((data) => {
      refreshWishList(data.wishList);
    });
  };

  useEffect(() => {
    if (currentUser) {
      checkWishList(currentUser.id, item.id).then((res) => {
        setWishListed(res);
      });
    } else {
      setWishListed(false);
    }
  }, [currentUser]);

  const checkWishListParams = () => {
    if (currentUser) {
      if (isWishListed) {
        return removeToWishList(item);
      } else {
        addToWishList(item);
      }
    } else {
      return setModal(true);
    }
  };

  return (
    <>
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
            className="item-card__quickview__icon"
            onClick={() => checkWishListParams()}
          >
            <use
              xlinkHref={
                isWishListed
                  ? `${svg}${"#icon-heart"}`
                  : `${svg}${"#icon-heart-outlined"}`
              }
            ></use>
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
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  refreshWishList: (items) => dispatch(getUserWishList(items)),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Card);
