import React, { Fragment } from 'react';

import './itemList2.scss';

import Card from './../card/card';

const ItemList2 = () => {

    return (
        <Fragment>
            <div className="itemList2">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </Fragment>
    )
} 

export default ItemList2;