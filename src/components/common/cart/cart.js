import React, { Fragment } from 'react'

import './cart.scss'
import Item from './item/item';

const Cart = ({className, setCart}) => {


    return (
        <Fragment>
                <div className={className}>
                    <div className="padding-3">
                        <h3>6 Items In Your Cart</h3>

                        <div className="cart__header">
                                <div>Item</div>
                                <div>Size</div>
                                <div>Quantity</div>
                                <div>Price</div>
                        </div>

                        <div className="cart__list">
                                <Item />
                                <Item />
                        </div>
                    </div>
                    <div className="cart__options">
                        <button className="btn-md btn-secondary">Back to Shop</button>

                        <button className="btn-md btn-primary">Checkout</button>
                    </div>
                </div>



        </Fragment>
    )
}

export default Cart
