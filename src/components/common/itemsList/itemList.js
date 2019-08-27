import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import './itemList.scss';
import Filter from './../Filter/Filter';
import Card from './../card/card';
import {items} from '../../../store/dummy';


const ItemList = () => {

    return(
        <Fragment>
            <div className="itemList">
                <Filter className="itemList__filter"/>
                {
                    items.map(item => {
                        return (
                            <Card key={item.id} item={item}/>
                        )
                    })
                }
            </div>
        </Fragment>
    )
}

export default withRouter(ItemList);