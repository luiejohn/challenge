import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";

import { categories } from "./../../../store/dummy";
import "./categoryList.scss";

const Category = (props) => {
  // const [subCat, setSubCat] = useState([]);

  // useEffect(() => {
  //     setSubCat(categories.filter( category => {
  //         return category.name === props.currentCategory
  //         }
  //     ))

  //     // return () => {
  //     //     cleanup
  //     // };
  // }, [])

  const matchCategory = () => {
    let newCategory = categories.filter((category) => {
      return category.name === props.currentCategory;
    });

    return newCategory;
  };

  const renderCat = () => {
    const subCat = matchCategory();
    let component = subCat[0].subcat.map((category) => {
      return <div key={category.id}>{category.name}</div>;
    });

    return component;
  };

  return (
    <Fragment>
      <div className="category">
        <h1 className="category__header">{props.currentCategory} Wear</h1>

        <div className="category__list">{renderCat()}</div>

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
  );
};

const mapStateToProps = (state) => {
  return {
    currentCategory: state.currentCategory,
  };
};

export default connect(mapStateToProps)(Category);
