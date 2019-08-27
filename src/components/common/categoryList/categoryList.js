import React, { Fragment } from 'react';
import { categories } from './../../../store/dummy';
import './categoryList.scss';

const Category = () => {
    return(
        <Fragment>
            <div className="category">
                <h1 className="category__header">Mens Wear</h1>

                <div className="category__list">
                    {
                        categories.map( category => {
                            return (
                                <div key={category.id}>{ category.name}</div>
                            )
                        })
                    }

                </div>

                    {/* <div> Accessories </div>
                    <div> ASOS Basic Tops </div>
                    <div> Bags </div>
                    <div> Caps &amp; Hats </div>
                    <div> Gifts </div>
                    <div> Grooming </div>
                    <div> Hoodies &amp; Sweatshirts </div>
                    <div> Jackets &amp; Coats </div>
                    <div> Jeans </div>
                    <div> Jewelry </div>
                    <div> Joggers </div>
                    <div> Jumpers &amp; Cardigan </div>
                    <div> Leather Jackets </div>
                    <div> Long Sleeves T-Shirts </div>
                    <div> Loungewear </div>
                    <div> Oversize &amp; Longline </div>
                    <div> Polo Shirts </div>
                    <div> Shirts </div> */}
            </div>
        </Fragment>
    )
}

export default Category;