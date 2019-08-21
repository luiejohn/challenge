import React, { useState } from 'react'

import './item.scss'

const Item = () => {

    let [quantity, setQuantity] = useState(1);

    const increase = () => {
        setQuantity(quantity+1)
    }

    const decrease = () => {
        if(quantity>1){
            setQuantity(quantity-1)
        }
        
    }

    return (
        <div className="cart__items">
            <div className="cart__items__item">
                <div className="cart__items__item-image">
                    image
                </div>
                <div className="cart__items__item-title">
                    Green T-shirt for Men
                </div>
                <div className="cart__items__item-id">
                    Men BK3569
                </div>
                <div className="cart__items__item-remove">
                    xremove
                </div>
            </div>

            <div className="cart__items__size">
                <div>
                    L
                </div>
                <div>
                    X
                </div>
            </div>
            <div className="cart__items__quantity">
                <div className="cart__items__quantity-control" onClick={() => decrease()}> - </div>
                <div className="cart__items__quantity-content"> {quantity} </div>
                <div className="cart__items__quantity-control" onClick={() => increase()}> + </div>
            </div>
            <div className="cart__items__price">
                $13.25
            </div>
        </div>
    )
}

export default Item
