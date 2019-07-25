import React, { Fragment } from 'react';

import './footer.scss';
import svg from '../../../assets/Icon/sprite.svg';

const footer = () => {

    return(
        <Fragment>
            <footer className="footer">
                <div className="footer__navlist">
                    <div>Women</div>
                    <div>Men</div>
                    <div>Kids</div>
                    <div>Shoes</div>
                    <div>Brands</div>
                </div>

                <div className="footer__icons">
                    <div>
                        <svg className="footer__icons-icon">
                            <use xlinkHref={`${svg}#icon-instagram`} />
                        </svg>
                    </div>
                    <div>
                        <svg className="footer__icons-icon">
                            <use xlinkHref={`${svg}#icon-instagram`} />
                        </svg>
                    </div>
                    <div>
                        <svg className="footer__icons-icon">
                            <use xlinkHref={`${svg}#icon-instagram`} />
                        </svg>
                    </div>
                    <div>
                        <svg className="footer__icons-icon">
                            <use xlinkHref={`${svg}#icon-twitter`} />
                        </svg>
                    </div>
                </div>

                <div className="footer__copyright">
                    2016&copy; Shopmate Ltd - Contact - Privacy Policy
                </div>

            </footer>
        </Fragment>
    )
}

export default footer;