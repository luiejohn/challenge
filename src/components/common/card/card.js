import React from 'react'

import './card.scss'

import Shirt from '../../../assets/images/shirt.png'
import svg from '../../../assets/Icon/sprite.svg'


const card = () => {
    return (
        <div className="item-card">
            <div className="item-card__image">
                <img src={Shirt} alt="shirt" />
            </div>
            <div className="item-card__title">
                Men's T-shirt
            </div>

            <div className="item-card__price">
                $14.99
            </div>


            {/* <div className="item-card__btn">
                <button className="btn-sm btn-primary"> Buy Now </button>
            </div> */}

            <div className="item-card__quickview">
                <svg className="item-card__quickview__icon">
                    <use xlinkHref={`${svg}#icon-heart-outlined`}></use>
                </svg>
                <button className="btn-sm btn-primary"> Quick View </button>
            </div>

        </div>
    )
}

export default card
