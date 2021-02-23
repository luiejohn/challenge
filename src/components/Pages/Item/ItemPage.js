import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import "./ItemPage.scss";
import SizeFilter from "../../common/SizeFilter/sizeFilter";
import QuantityCounter from "../../common/quantityCounter/quantityCounter";
import ColorSelector from "../../common/colorSelector/colorSelector";
import Button from "../../common/button/button";
import svg from "../../../assets/Icon/sprite.svg";
import Loading from "../../common/loading/loading";
import Alert from "../../common/alert/alert";
import Modal from "../../common/Modal/modal";

import {
  addCartItem,
  setTotalItemCount,
  setTotalPrice,
} from "../../../store/cart/cart.actions";

import { getUserWishList } from "../../../store/user/user.actions";

import {
  getSingleItemData,
  checkWishList,
  addItemOnWishlist,
  removeIemOnWishList,
  getWishList,
} from "../../../firebase/firebase.utils";
import { setCurrentItem } from "../../../store/category/category.actions";

import { Carousel } from "react-responsive-carousel";
import shirt1 from "../../../assets/images/images-shirt11.png";

const ItemPage = ({
  match,
  cartItems,
  setTotalPrice,
  setItemCount,
  addToCart,
  setItemPage,
  currentItem,
  currentUser,
  refreshWishList,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(1);
  const [isAlreadyInCart, setAlreadyInCart] = useState(false);
  const [selectedSize, setSelectedSize] = useState("XS");
  const [isWishListed, setWishListed] = useState(false);
  const [isModal, setModal] = useState(false);
  console.log("reading");
  useEffect(() => {
    console.log("read");
    getSingleItemData(match.params.category, match.params.id).then((res) => {
      setItemPage(res);
      setSelectedSize(res.sizes[0]);
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [match.params.id]);

  useEffect(() => {
    if (currentItem) {
      const result = cartItems.find((el) => {
        return el.id === currentItem.id;
      });

      if (result) {
        setAlreadyInCart(true);
      } else {
        setAlreadyInCart(false);
      }
    }
  }, [currentItem, cartItems.length]);

  useEffect(() => {
    return function cleanup() {
      setItemPage(null);
    };
  }, []);

  useEffect(() => {
    if (currentUser) {
      checkWishList(currentUser.id, match.params.id).then((res) => {
        setWishListed(res);
      });
    } else {
      setWishListed(false);
    }
  }, [currentUser]);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addItemToCart = () => {
    const addItem = {
      id: match.params.id,
      title: currentItem.itemName,
      size: selectedSize,
      imageUrl: currentItem.imageUrl,
      quantity: quantity,
      priceEach: currentItem.price,
      priceTotal: currentItem.price * quantity,
    };
    const updatedItemList = [...cartItems, addItem];

    const totalPrice = updatedItemList.reduce(
      (accumulatedValue, item) => accumulatedValue + item.priceTotal,
      0
    );

    setAlreadyInCart(true);
    setTotalPrice(totalPrice);
    setItemCount(updatedItemList.length);
    addToCart(updatedItemList);
  };

  const checkWishListParams = () => {
    if (currentUser) {
      if (isWishListed) {
        return removeToWishList(match.params.id);
      } else {
        addToWishList(match.params.id);
      }
    } else {
      return setModal(true);
    }
  };

  const addToWishList = () => {
    addItemOnWishlist(currentUser.id, currentItem);
    checkWishList(currentUser.id, match.params.id).then((res) => {
      setWishListed(true);
    });
    getWishList(currentUser.id).then((data) => {
      refreshWishList(data.wishList);
    });
  };

  const removeToWishList = () => {
    removeIemOnWishList(currentUser.id, currentItem);
    checkWishList(currentUser.id, match.params.id).then((res) => {
      setWishListed(false);
    });
    getWishList(currentUser.id).then((data) => {
      refreshWishList(data.wishList);
    });
  };

  return (
    <div style={{ backgroundColor: "#f7f7f7", padding: "2rem" }}>
      {!currentItem ? (
        <Loading />
      ) : (
        <div className="container-center">
          <div className="item">
            <div className="item__image">
              {/* <Carousel autoPlay showArrows={false} showStatus={false} infiniteLoop showThumbs={true} interval={5000}>
                            <div >
                                <img src={shirt1} alt="banner1"/>
                                <p className="legend">Legend 1</p>
                            </div>
                            <div >
                                <img src={shirt2} alt="banner2"/>
                                <p className="legend">Legend 2</p>
                            </div>
                        </Carousel> */}
              <div className="item__image-preview">
                <img src={currentItem.imageUrl}></img>
              </div>
              <div className="item__image-list">
                <div>
                  <img src={currentItem.imageUrl}></img>
                </div>
              </div>
            </div>

            <div className="item__details">
              <div className="item__details__location">
                Home - All Categories - Men's Clothing &amp; Accessories
              </div>
              <div className="item__details__stars">
                <svg className="btn__icon" style={{ fill: "#ffd27d" }}>
                  <use xlinkHref={`${svg}#icon-star`}></use>
                </svg>
                <svg className="btn__icon" style={{ fill: "#ffd27d" }}>
                  <use xlinkHref={`${svg}#icon-star`}></use>
                </svg>
                <svg className="btn__icon" style={{ fill: "#ffd27d" }}>
                  <use xlinkHref={`${svg}#icon-star`}></use>
                </svg>
                <svg className="btn__icon" style={{ fill: "#ffd27d" }}>
                  <use xlinkHref={`${svg}#icon-star`}></use>
                </svg>
                <svg className="btn__icon" style={{ fill: "#ffd27d" }}>
                  <use xlinkHref={`${svg}#icon-star`}></use>
                </svg>
              </div>

              <div className="item__details__title">
                <h2>{currentItem.itemName}</h2>
              </div>
              <div className="item__details__price">${currentItem.price}</div>

              <ColorSelector color={color} setColor={setColor} />

              <SizeFilter
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                sizes={currentItem.sizes}
              />
              <div>
                <QuantityCounter
                  title
                  increase={increase}
                  decrease={decrease}
                  quantity={quantity}
                />
              </div>

              <div className="item__details__btn">
                <Button
                  primary
                  click={addItemToCart}
                  disabled={isAlreadyInCart}
                >
                  {isAlreadyInCart ? "Added to Cart" : "Add to Cart"}
                </Button>
                <Button click={checkWishListParams}>
                  <span>
                    <svg className="btn__icon">
                      <use
                        xlinkHref={
                          isWishListed
                            ? `${svg}${"#icon-heart"}`
                            : `${svg}${"#icon-heart-outlined"}`
                        }
                      ></use>
                    </svg>
                  </span>
                  {isWishListed ? "Added to Wishlist" : "Add To Wishlist"}
                </Button>
                {/* <button className="btn-md btn-primary">Add to Cart</button> */}
                {/* <button className="btn-md btn-secondary">Add to Wishlist</button> */}
              </div>
            </div>
          </div>
          <div className="prodrev">
            <div className="prodrev__review">
              <h2>Product reviews</h2>

              <div className="prodrev__review_cont">
                <div className="prodrev__review__user">
                  <div
                    className="item__details__stars"
                    style={{ marginTop: 0 }}
                  >
                    <svg className="btn__icon" style={{ fill: "#ffd27d" }}>
                      <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                    <svg className="btn__icon" style={{ fill: "#ffd27d" }}>
                      <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                    <svg className="btn__icon" style={{ fill: "#ffd27d" }}>
                      <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                    <svg className="btn__icon" style={{ fill: "#ffd27d" }}>
                      <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                  </div>
                  <div>Paolo Permins</div>
                  <div>2 weeks ago</div>
                </div>

                <div className="prodrev__review__comment">
                  <div className="prodrev__review__comment-review">
                    Got this. Amazing product. Good Quality. What you see is
                    what you get.
                  </div>
                  <div className="prodrev__review__comments-react">
                    <div className="prodrev__review__comments-item">
                      <div className="prodrev__review__comments-icon">
                        <svg className="btn__icon">
                          <use xlinkHref={`${svg}#icon-heart-outlined`}></use>
                        </svg>
                      </div>
                      <div>113</div>
                    </div>
                    <div className="prodrev__review__comments-item">
                      <div className="prodrev__review__comments-icon">
                        <svg className="btn__icon">
                          <use xlinkHref={`${svg}#icon-chat`}></use>
                        </svg>
                      </div>
                      <div>6</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prodrev__review_cont">
                <div className="prodrev__review__user">
                  <div
                    className="item__details__stars"
                    style={{ marginTop: 0 }}
                  >
                    <svg className="btn__icon" style={{ fill: "#ffd27d" }}>
                      <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                    <svg className="btn__icon" style={{ fill: "#ffd27d" }}>
                      <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                    <svg className="btn__icon" style={{ fill: "#ffd27d" }}>
                      <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                    <svg className="btn__icon" style={{ fill: "#ffd27d" }}>
                      <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                  </div>
                  <div>Paolo Permins</div>
                  <div>2 weeks ago</div>
                </div>

                <div className="prodrev__review__comment">
                  <div className="prodrev__review__comment-review">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                  <div className="prodrev__review__comments-react">
                    <div className="prodrev__review__comments-item">
                      <div className="prodrev__review__comments-icon">
                        <svg className="btn__icon">
                          <use xlinkHref={`${svg}#icon-heart-outlined`}></use>
                        </svg>
                      </div>
                      <div>113</div>
                    </div>
                    <div className="prodrev__review__comments-item">
                      <div className="prodrev__review__comments-icon">
                        <svg className="btn__icon">
                          <use xlinkHref={`${svg}#icon-chat`}></use>
                        </svg>
                      </div>
                      <div>6</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="addrev">
              <h2>Add a Review</h2>
              <div className="addrev__form">
                <div className="addrev__form_title">Choose a nickname</div>
                <div>
                  <input placeholder="" className="addrev__form_name" />
                </div>
                <div className="addrev__form_title">Your Review</div>
                <div>
                  <textarea
                    className="addrev__form_review"
                    rows={10}
                  ></textarea>
                </div>
                <div className="addrev__form_title">Overall Rating</div>
                <div>
                  <div
                    className="item__details__stars"
                    style={{ marginTop: 0 }}
                  >
                    <svg className="btn__icon" style={{ fill: "#ffd27d" }}>
                      <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                    <svg className="btn__icon" style={{ fill: "#ffd27d" }}>
                      <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                    <svg className="btn__icon" style={{ fill: "#ffd27d" }}>
                      <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                    <svg className="btn__icon" style={{ fill: "#ffd27d" }}>
                      <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="itemsuggest">
            <h2>You may also like</h2>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
  currentItem: state.category.currentItem,
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addCartItem(item)),
  setItemCount: (number) => dispatch(setTotalItemCount(number)),
  setTotalPrice: (number) => dispatch(setTotalPrice(number)),
  setItemPage: (item) => dispatch(setCurrentItem(item)),
  refreshWishList: (items) => dispatch(getUserWishList(items)),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ItemPage);
