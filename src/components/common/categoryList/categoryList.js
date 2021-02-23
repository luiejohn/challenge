import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import "./categoryList.scss";

import {
  setCurrentCategory,
  setSubCatFilter,
} from "../../../store/category/category.actions";

const Category = ({
  currentCategory,
  subCategories,
  setSubCategory,
  currentSubCat,
  applyFilter,
  setSelectedSize,
  setPriceValue,
}) => {
  const getFilteredData = (subCat) => {
    setSelectedSize("");
    setPriceValue([0, 100]);
    setSubCategory(subCat);
    applyFilter(subCat);
    // setFilter(subCat);
  };

  const renderCat = () => {
    if (subCategories) {
      let component = subCategories.map((subCat, index) => {
        return (
          <div
            key={`cat-${index}`}
            onClick={() => getFilteredData(subCat)}
            style={
              currentSubCat.subCategory === subCat ? { color: "#f62f5e" } : null
            }
          >
            {subCat}
          </div>
        );
      });

      return component;
    }
  };

  return (
    <Fragment>
      <div className="category">
        <h1 className="category__header">
          {currentCategory ? currentCategory : "Loading ..."}
        </h1>

        <div className="category__list">
          {subCategories ? renderCat() : "Loading ..."}
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
  currentSubCat: state.category.filter,
  props: ownProps,
});

const mapDispatchToProps = (dispatch) => ({
  setCategory: (cat) => dispatch(setCurrentCategory(cat)),
  setSubCategory: (cat) => dispatch(setSubCatFilter(cat)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
