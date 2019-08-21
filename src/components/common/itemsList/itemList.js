import React, { Fragment } from 'react';

import './itemList.scss';
import Filter from './../Filter/Filter';
import Card from './../card/card';

const ItemList = () => {

    return(
        <Fragment>
            <div className="itemList">
                <Filter className="itemList__filter"/>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </Fragment>
    )
}

export default ItemList;