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
import { auth } from "../../../firebase/firebase.utils";

import { setCurrentCategory } from "../../../store/category/category.actions";

const Navigation = ({
  currentUser,
  currentCategory,
  // setCategory,
  // match,
  cartTotalItems,
  cartTotalPrice,
}) => {
  const [isCart, setCart] = useState(false);
  const [isSignInModal, setSignInModal] = useState(false);
  const [isSignUpModal, setSignUpModal] = useState(false);

  useEffect(() => {
    // setSignInModal(currentUser ? false : true);
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
              <div>flag</div>
              <div className="navigation__cart__bag-sum">
                <div
                  className="navigation__cart__bag-icon-container"
                  onClick={() => setCart(!isCart)}
                >
                  <svg className="navigation__cart__bag-icon">
                    <use xlinkHref={`${svg}#icon-shopping-cart`}></use>
                  </svg>
                  <span className="navigation__cart__bag-count">
                    {cartTotalItems}
                  </span>
                </div>

                <div>Your Bag: ${cartTotalPrice}</div>
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

          <div
            className="container-center"
            style={{ position: "relative", margin: "0 auto" }}
          >
            <Cart
              className={isCart ? "cart cart__show" : "cart cart__hide"}
              setCart={setCart}
            />
          </div>
        </div>
      </div>

      <SignInModal show={isSignInModal} handleChange={setSignInModal} />
      <SignUpModal show={isSignUpModal} handleChange={setSignUpModal} />
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCategory: (cat) => dispatch(setCurrentCategory(cat)),
});

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  currentCategory: state.category.currentCategory,
  cartTotalItems: state.cart.totalItemCount,
  cartTotalPrice: state.cart.totalCartPrice,
  cartItemList: state.cart.items,
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Navigation);
