import React, { Fragment } from 'react';

import './itemList.scss';
import Filter from './../Filter/Filter';

const ItemList = () => {

    return(
        <Fragment>
            <div className="itemList">
                <Filter className="itemList__filter"/>
                <div>asd</div>
                <div>asd</div>
                <div>asd</div>
                <div>asd</div>
            </div>
        </Fragment>
    )
}

export default ItemList;