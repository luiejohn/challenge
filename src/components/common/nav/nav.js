import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import './nav.scss'

import svg from '../../../assets/Icon/sprite.svg';
import Cart from './../cart/cart';

const Navigation = () => {

    const [isCart, setCart] = useState(false);


    return (
        <Fragment>
            <div className="navigation">

                <div className="container-center">
                    <div className="navigation__cart">
                        <div className="navigation__cart__greet">
                            Hi! <span>Sign in</span> or <span>Register</span>
                        </div>

                        <div className="navigation__cart__deals">
                                <div>
                                    Daily Deals
                                </div>
                                <div>
                                    Sell
                                </div>
                                <div>
                                    Help &amp; Contact
                                </div>
                        </div>

                        <div className="navigation__cart__bag">
                            <div>
                                flag
                            </div>
                            <div className="navigation__cart__bag-sum">
                                <div className="navigation__cart__bag-icon-container"
                                    onClick={()=>setCart(!isCart)}
                                >
                                    <svg className="navigation__cart__bag-icon">
                                        <use xlinkHref={`${svg}#icon-shopping-cart`}></use>
                                    </svg>
                                    <span className="navigation__cart__bag-count">
                                        6
                                    </span>
                                </div>

                                <div>
                                    Your Bag: $6.99
                                </div>
                                
                            </div>
                        </div>
                    </div>                    
                </div>


                <div className="navigation__nav-cont">
                    <div className="container-center">
                        <div className="navigation__nav">
                            <div className="navigation__nav__logo">
                                <Link to="/">
                                    SHOPMATE                                
                                </Link>
                            </div>
                            
                            <nav className="navigation__nav__navlist">
                                <Link to="/category">
                                    Women
                                </Link>
                                <Link to="/category">
                                    Men
                                </Link>
                                <Link to="/category">
                                    Kids
                                </Link>
                                <Link to="/category">
                                    Shoes
                                </Link>
                                <Link to="/category">
                                    Brands
                                </Link>
                            </nav>

                            <div className="navigation__nav__search">
                                <input type="text" placeholder="Search Anything" className="navigation__nav__search-input"/>
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
                    
                    <div className="container-center" style={{position: 'relative', margin: '0 auto'}}>
                        <Cart className={ isCart ? "cart cart__show" : "cart cart__hide" } setCart={setCart} />
                    </div>
                </div>

                
            </div>
        </Fragment>
    )
}

export default Navigation;