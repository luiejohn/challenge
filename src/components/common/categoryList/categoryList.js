import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import { categories } from "./../../../store/dummy";
import "./categoryList.scss";

import { setCurrentCategory } from "../../../store/category/category.actions";

const Category = (props) => {
  console.log(props);
  // useEffect(()=> {
  //   setCurrentCategory
  // }, [])

  const matchCategory = () => {
    let newCategory = categories.filter((category) => {
      return category.name === props.currentCategory;
    });
    console.log(newCategory);
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
        <h1 className="category__header">
          {props.currentCategory ? props.currentCategory : "Loading ..."}
        </h1>

        <div className="category__list">
          {props.currentCategory ? renderCat() : "Loading ..."}
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
  );
};

const mapStateToProps = (state, ownProps) => ({
  currentCategory: state.category.currentCategory,
  props: ownProps,
});

const mapDispatchToProps = (dispatch) => ({
  setCategory: (cat) => dispatch(setCurrentCategory(cat)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
