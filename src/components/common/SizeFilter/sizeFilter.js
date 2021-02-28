import React, { Fragment } from "react";
import "./sizeFilter.scss";

const SizeFilter = ({ selectedSize, setSelectedSize, sizes }) => {
  console.log(sizes);
  return (
    <Fragment>
      <div className="filter__range__size">
        <h3 className="filter__range__size-text">Size</h3>

        <div className="filter__range__size-ops">
          {sizes.map((item) => {
            return (
              <div
                onClick={() => setSelectedSize(item)}
                className={
                  selectedSize === item
                    ? "filter__range__size-ops size-selected"
                    : "filter__range__size-ops"
                }
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default SizeFilter;
