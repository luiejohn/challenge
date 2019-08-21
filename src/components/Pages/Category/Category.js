import React, { Fragment } from 'react';

import './Category.scss'

import Category from '../../../components/common/categoryList/categoryList';
import ItemList from '../../../components/common/itemsList/itemList';
import ItemList2 from '../../../components/common/itemList2/itemList2';
import BrandHeader from '../../../components/common/brandHeader/brandHeader';

const CategoryPage = () => {

    return(
        <Fragment>
            <div className="container-center">
                <Category />
                <ItemList />
                <ItemList2 />
                <BrandHeader />
            </div>
        </Fragment>
    )

}

export default CategoryPage;