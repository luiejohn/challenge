import React, { Fragment } from 'react';


import Category from './../../components/common/categoryList/categoryList';
import ItemList from './../../components/common/itemsList/itemList';
import ItemList2 from './../../components/common/itemList2/itemList2';

const Home = () => {

    return(
        <Fragment>
            <Category />
            <ItemList />
            <ItemList2 />
        </Fragment>
    )

}

export default Home;