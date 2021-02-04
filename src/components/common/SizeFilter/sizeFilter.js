import React, { Fragment, useState, useEffect } from "react";
import "./sizeFilter.scss";

const SizeFilter = ({ selectedSize, setSelectedSize }) => {
  return (
    <Fragment>
      <div className="filter__range__size">
        <h3 className="filter__range__size-text">Size</h3>

        <div className="filter__range__size-ops">
          <div
            onClick={() => setSelectedSize("XS")}
            className={
              selectedSize === "XS"
                ? "filter__range__size-ops size-selected"
                : "filter__range__size-ops"
            }
          >
            XS
          </div>
          <div
            onClick={() => setSelectedSize("S")}
            className={
              selectedSize === "S"
                ? "filter__range__size-ops size-selected"
                : "filter__range__size-ops"
            }
          >
            S
          </div>
          <div
            onClick={() => setSelectedSize("M")}
            className={
              selectedSize === "M"
                ? "filter__range__size-ops size-selected"
                : "filter__range__size-ops"
            }
          >
            M
          </div>
          <div
            onClick={() => setSelectedSize("L")}
            className={
              selectedSize === "L"
                ? "filter__range__size-ops size-selected"
                : "filter__range__size-ops"
            }
          >
            L
          </div>
          <div
            onClick={() => setSelectedSize("XL")}
            className={
              selectedSize === "XL"
                ? "filter__range__size-ops size-selected"
                : "filter__range__size-ops"
            }
          >
            XL
          </div>
          <div
            onClick={() => setSelectedSize("XXL")}
            className={
              selectedSize === "XXL"
                ? "filter__range__size-ops size-selected"
                : "filter__range__size-ops"
            }
          >
            XXL
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default SizeFilter;
