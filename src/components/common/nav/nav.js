import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import Modal from "../Modal/modal";

import "./nav.scss";

import svg from "../../../assets/Icon/sprite.svg";
import Cart from "./../cart/cart";

const Navigation = (props) => {
  const [isCart, setCart] = useState(false);
  const [isSignInModal, setSignInModal] = useState(false);

  return (
    <Fragment>
      <div className="navigation">
        <div className="container-center">
          <div className="navigation__cart">
            <div className="navigation__cart__greet">
              Hi!{" "}
              <span onClick={() => setSignInModal(!isSignInModal)}>
                Sign in
              </span>{" "}
              or{" "}
              <span onClick={() => setSignInModal(!isSignInModal)}>
                Register
              </span>
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
                  <span className="navigation__cart__bag-count">6</span>
                </div>

                <div>Your Bag: $6.99</div>
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
                <Link
                  to={"/category/" + props.currentCategory}
                  onClick={() => props.setCurrentCategory("Women")}
                >
                  Women
                </Link>
                <Link
                  to={"/category/" + props.currentCategory}
                  onClick={() => props.setCurrentCategory("Men")}
                >
                  Men
                </Link>
                <Link
                  to={"/category/" + props.currentCategory}
                  onClick={() => props.setCurrentCategory("Kids")}
                >
                  Kids
                </Link>
                <Link
                  to={"/category/" + props.currentCategory}
                  onClick={() => props.setCurrentCategory("Shoes")}
                >
                  Shoes
                </Link>
                <Link
                  to={{
                    pathname:
                      props.match.url + "/category/" + props.currentCategory,
                  }}
                  onClick={() => props.setCurrentCategory("Brands")}
                >
                  Brands
                </Link>
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

      <Modal show={isSignInModal} handleChange={setSignInModal}>
        Example
      </Modal>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentCategory: (newCat) => dispatch({ type: "SET_CATEGORY", newCat }),
  };
};

const mapStateToProps = (state) => {
  return {
    currentCategory: state.currentCategory,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Navigation);
