import React, { Fragment } from 'react';

import './nav.scss'

const navigation = () => {

    return (
        <Fragment>
            <div className="navigation">
                <div className="navigation__cart">
                    <div className="navigation__cart__greet">
                        Hi! Sign in or Register
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
                            <div>icon</div>
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
                        search
                    </div>

                    <div className="navigation__nav__bag-icon">
                        bag
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default navigation;