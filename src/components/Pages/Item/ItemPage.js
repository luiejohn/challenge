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

import {
  addCartItem,
  setTotalItemCount,
  setTotalPrice,
} from "../../../store/cart/cart.actions";

import { Carousel } from "react-responsive-carousel";
import shirt1 from "../../../assets/images/images-shirt11.png";
import shirt2 from "../../../assets/images/images-shirt12.png";
import shirt3 from "../../../assets/images/images-shirt13.png";
import { items } from "../../../store/dummy";

const ItemPage = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(1);

  const [selectedSize, setSelectedSize] = useState("XS");

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addItemToCart = () => {
    const ItemId = props.match.params.id;
    const itemToAdd = items.filter((item) => item.id == ItemId);
    const addItem = {
      id: itemToAdd[0].id,
      title: itemToAdd[0].itemName,
      size: selectedSize,
      quantity: quantity,
      priceEach: itemToAdd[0].price,
      priceTotal: itemToAdd[0].price * quantity,
    };
    const updatedItemList = [...props.cartItems, addItem];

    const totalPrice = updatedItemList.reduce(
      (accumulatedValue, item) => accumulatedValue + item.priceTotal,
      0
    );

    props.setTotalPrice(totalPrice);
    props.setItemCount(updatedItemList.length);
    props.addToCart(updatedItemList);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // return () => {
    //     cleanup
    // };
  }, []);

  return (
    <div style={{ backgroundColor: "#f7f7f7", padding: "2rem" }}>
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
              <img src={shirt1}></img>
            </div>
            <div className="item__image-list">
              <div>
                <img src={shirt1}></img>
                <img src={shirt1}></img>
                <img src={shirt1}></img>
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
              <h2>Super Oversized T-shirt With Raw Sleeves In Brown</h2>
            </div>
            <div className="item__details__price">$13.99</div>

            <ColorSelector color={color} setColor={setColor} />

            <SizeFilter
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
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
              <Button primary click={addItemToCart}>
                Add to Cart
              </Button>
              <Button icon>Add to Wishlist</Button>
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
                <div className="item__details__stars" style={{ marginTop: 0 }}>
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
                  Got this. Amazing product. Good Quality. What you see is what
                  you get.
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
                <div className="item__details__stars" style={{ marginTop: 0 }}>
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
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                <textarea className="addrev__form_review" rows={10}></textarea>
              </div>
              <div className="addrev__form_title">Overall Rating</div>
              <div>
                <div className="item__details__stars" style={{ marginTop: 0 }}>
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addCartItem(item)),
  setItemCount: (number) => dispatch(setTotalItemCount(number)),
  setTotalPrice: (number) => dispatch(setTotalPrice(number)),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ItemPage);
