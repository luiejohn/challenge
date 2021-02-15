import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import "./categoryList.scss";

import { setCurrentCategory } from "../../../store/category/category.actions";

const Category = (props) => {
  const renderCat = () => {
    let component = props.subCategories.map((category, index) => {
      return <div key={`cat-${index}`}>{category}</div>;
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
          {props.subCategories ? renderCat() : "Loading ..."}
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
