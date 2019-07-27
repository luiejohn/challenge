import React, { Fragment } from 'react';

import './nav.scss'

import svg from '../../../assets/Icon/sprite.svg';

const navigation = () => {

    return (
        <Fragment>
            <div className="navigation">
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
                            <div className="navigation__cart__bag-icon-container">
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


                <div className="navigation__nav">
                    <div className="navigation__nav__logo">
                        SHOPMATE
                    </div>
                    
                    <nav className="navigation__nav__navlist">
                        <div>Women</div>
                        <div>Men</div>
                        <div>Kids</div>
                        <div>Shoes</div>
                        <div>Brands</div>
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

                    <div className="navigation__nav__bag-icon">
                        <div className="navigation__cart__bag-icon-container">
                                <svg className="navigation__cart__bag-icon">
                                    <use xlinkHref={`${svg}#icon-shopping-cart`}></use>
                                </svg>
                                <span className="navigation__cart__bag-count">
                                    6
                                </span>
                            </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default navigation;