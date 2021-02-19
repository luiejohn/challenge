import React, { Fragment, useEffect, useState } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import Modal from "../Modal/modal";
import SignUpModal from "../signUpModal/signUp";
import SignInModal from "../signInModal/signInModal";

import "./nav.scss";

import svg from "../../../assets/Icon/sprite.svg";
import Cart from "./../cart/cart";
import WishList from "../wishlist/wishlist";
import { auth } from "../../../firebase/firebase.utils";

import { setCurrentCategory } from "../../../store/category/category.actions";
import { getUserWishList } from "../../../store/user/user.actions";
import { getWishList } from "../../../firebase/firebase.utils";

const Navigation = ({
  currentUser,
  currentCategory,
  // setCategory,
  // match,
  cartTotalItems,
  cartTotalPrice,
  setWishList,
  userWishList,
}) => {
  const [isCart, setCart] = useState(false);
  const [isSignInModal, setSignInModal] = useState(false);
  const [isSignUpModal, setSignUpModal] = useState(false);
  const [isWishListModal, setWishListModal] = useState(false);

  useEffect(() => {
    if (currentUser) {
      getWishList(currentUser.id).then((data) => {
        // console.log(data.wishList);
        setWishList(data.wishList);
      });
    }
  }, [currentUser]);

  useEffect(() => {
    window.addEventListener("keydown", closeModal, false);

    return () => {
      window.removeEventListener("keydown", closeModal, false);
    };
  }, []);

  const closeModal = (event) => {
    if (event.keyCode === 27) {
      setSignInModal(false);
      setSignUpModal(false);
    }
  };

  const onWishListClick = () => {
    setWishListModal(false);
  };

  return (
    <Fragment>
      <div className="navigation">
        <div className="container-center">
          <div className="navigation__cart">
            <div className="navigation__cart__greet">
              Hi!{" "}
              {currentUser ? (
                <span>
                  <span className="navigation__cart__greet-name">
                    {currentUser.displayName}
                  </span>
                  &nbsp;
                  <span
                    className="navigation__cart__greet-signOut"
                    onClick={() => auth.signOut()}
                  >
                    Sign Out?
                  </span>
                </span>
              ) : (
                <span className="navigation__cart__greet-highlight">
                  <span onClick={() => setSignInModal(!isSignInModal)}>
                    Sign in
                  </span>{" "}
                  or{" "}
                  <span onClick={() => setSignUpModal(!isSignUpModal)}>
                    Register
                  </span>
                </span>
              )}
            </div>

            <div className="navigation__cart__deals">
              <div>Daily Deals</div>
              <div>Sell</div>
              <div>Help &amp; Contact</div>
            </div>

            <div className="navigation__cart__bag">
              {currentUser ? (
                <div
                  className="navigation__cart__bag-wishlist"
                  onClick={() => setWishListModal(!isWishListModal)}
                >
                  <svg className="navigation__cart__bag-icon">
                    <use xlinkHref={`${svg}#icon-heart`}></use>
                  </svg>
                  {userWishList.length > 0 ? (
                    <span className="navigation__cart__bag-count">
                      {userWishList.length}
                    </span>
                  ) : null}
                </div>
              ) : null}

              <div className="navigation__cart__bag-sum">
                <div
                  className="navigation__cart__bag-icon-container"
                  onClick={() => setCart(!isCart)}
                >
                  <svg className="navigation__cart__bag-icon">
                    <use xlinkHref={`${svg}#icon-shopping-cart`}></use>
                  </svg>
                  {cartTotalItems > 0 ? (
                    <span className="navigation__cart__bag-count">
                      {cartTotalItems}
                    </span>
                  ) : null}
                </div>

                <div className="navigation__cart__bag-totalPrice">
                  Your Bag: <div>${cartTotalPrice}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation__nav-cont">
          <div className="container-center">
            <div className="navigation__nav">
              <div className="navigation__nav__logo">
                <Link to="/">SHOPMATE</Link>
              </div>

              <nav className="navigation__nav__navlist">
                <NavLink
                  to={"/category/Women"}
                  activeClassName={
                    currentCategory ? "navigation__nav__navlist_active" : null
                  }
                  // onClick={() => setCategory("Women")}
                >
                  Women
                </NavLink>
                <NavLink
                  to={{ pathname: "/category/Men", state: { category: "Men" } }}
                  activeClassName={
                    currentCategory ? "navigation__nav__navlist_active" : null
                  }
                  // onClick={() => setCategory("Men")}
                >
                  Men
                </NavLink>
                <NavLink
                  to={"/category/" + "Kids"}
                  activeClassName={
                    currentCategory ? "navigation__nav__navlist_active" : null
                  }
                  // onClick={() => setCategory("Kids")}
                >
                  Kids
                </NavLink>
                <NavLink
                  to={"/category/" + "Shoes"}
                  activeClassName={
                    currentCategory ? "navigation__nav__navlist_active" : null
                  }
                  // onClick={() => setCategory("Shoes")}
                >
                  Shoes
                </NavLink>
                <NavLink
                  to={"/category/" + "Brands"}
                  activeClassName={
                    currentCategory ? "navigation__nav__navlist_active" : null
                  }
                  // onClick={() => setCategory("Brands")}
                >
                  Brands
                </NavLink>
              </nav>

              <div className="navigation__nav__search">
                <input
                  type="text"
                  placeholder="Search Anything"
                  className="navigation__nav__search-input"
                />
                <svg className="navigation__nav__search-iconx">
                  <use xlinkHref={`${svg}#icon-cross`} />
                </svg>
                <svg className="navigation__nav__search-icon">
                  <use xlinkHref={`${svg}#icon-magnifying-glass`} />
                </svg>
              </div>

              {/* <div className="navigation__nav__bag-icon">
                                <div className="navigation__nav__bag-icon-container">
                                        <svg className="navigation__nav__bag-icon">
                                            <use xlinkHref={`${svg}#icon-shopping-cart`}></use>
                                        </svg>
                                        <span className="navigation__nav__bag-count">
                                            6
                                        </span>
                                    </div>
                            </div> */}
            </div>
          </div>

          {/* <div
            className="container-center"
            style={{ position: "relative", margin: "0 auto" }}
          >
            <Cart
              className={isCart ? "cart cart__show" : "cart cart__hide"}
              setCart={setCart}
            />
          </div> */}

          <Modal show={isCart} handleChange={setCart} width="80%">
            <Cart
              className={isCart ? "cart cart__show" : "cart cart__hide"}
              setCart={setCart}
            />
          </Modal>

          <Modal
            show={isWishListModal}
            handleChange={setWishListModal}
            width="80%"
          >
            <WishList setCart={setWishListModal} />
          </Modal>
        </div>
      </div>

      <SignInModal show={isSignInModal} handleChange={setSignInModal} />
      <SignUpModal show={isSignUpModal} handleChange={setSignUpModal} />

      {/* <Modal
        show={isWishListModal}
        handleChange={setWishListModal}
        width="800px"
      >
        <h3>My Wish List</h3>

        <div className="viewWishList__container">
          {userWishList.map((item) => (
            <div className="viewWishList__item">
              <div className="viewWishList__item-image">
                <img src={item.imageUrl} />
              </div>
              <div className="viewWishList__item-name">
                <span>{item.itemName}</span>
              </div>
              <div className="viewWishList__item-price">{item.price}</div>
            </div>
          ))}
        </div>
      </Modal> */}
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCategory: (cat) => dispatch(setCurrentCategory(cat)),
  setWishList: (items) => dispatch(getUserWishList(items)),
});

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  currentCategory: state.category.currentCategory,
  cartTotalItems: state.cart.totalItemCount,
  cartTotalPrice: state.cart.totalCartPrice,
  cartItemList: state.cart.items,
  userWishList: state.user.wishList,
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Navigation);
