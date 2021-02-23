import React, { Fragment } from "react";
import { connect } from "react-redux";

import "./wishlist.scss";
import Item from "./item/item";
import svg from "../../../assets/Icon/sprite.svg";
import Empty from "../empty/empty";

const WishList = ({ setCart, userWishList, userWishListCount }) => {
  return (
    <Fragment>
      <div>
        <div className="padding-3" style={{ marginBottom: "15px" }}>
          <div className="wishList__countheader">
            <h2 className="wishList__topheader">
              {userWishListCount === 0
                ? "No Items in your wish list yet"
                : `${userWishListCount} Items In Your Wish List`}
            </h2>
            <svg className="wishList__close" onClick={() => setCart(false)}>
              <use xlinkHref={`${svg}#icon-cross`}></use>
            </svg>
          </div>

          <div
            className={
              userWishListCount === 0
                ? "wishList__tableCont"
                : "wishList__tableContScroll"
            }
          >
            {!userWishList || userWishListCount === 0 ? (
              <Empty />
            ) : (
              <div className="wishList__list">
                {userWishList.map((item) => {
                  return (
                    <Item
                      itemList={userWishList}
                      itemDetails={item}
                      key={`wishList-${item.id}`}
                      setCart={setCart}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="wishList__options">
          <button
            className="btn-md btn-secondary"
            onClick={() => setCart(false)}
          >
            Back to Shop
          </button>

          {/* <button className="btn-md btn-primary">Checkout</button> */}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  userWishList: state.user.wishList,
  userWishListCount: state.user.wishList.length,
});

export default connect(mapStateToProps)(WishList);
