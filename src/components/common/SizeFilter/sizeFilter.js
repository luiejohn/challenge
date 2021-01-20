import React, { Fragment, useState } from "react";
import "./sizeFilter.scss";

const SizeFilter = () => {
  let [size, setSize] = useState("");
  let [color, setColor] = useState(1);

  return (
    <Fragment>
      <div className="filter__range__size">
        <h3 className="filter__range__size-text">Size</h3>

        <div className="filter__range__size-ops">
          <div
            onClick={() => setSize("XS")}
            className={
              size === "XS"
                ? "filter__range__size-ops size-selected"
                : "filter__range__size-ops"
            }
          >
            XS
          </div>
          <div
            onClick={() => setSize("S")}
            className={
              size === "S"
                ? "filter__range__size-ops size-selected"
                : "filter__range__size-ops"
            }
          >
            S
          </div>
          <div
            onClick={() => setSize("M")}
            className={
              size === "M"
                ? "filter__range__size-ops size-selected"
                : "filter__range__size-ops"
            }
          >
            M
          </div>
          <div
            onClick={() => setSize("L")}
            className={
              size === "L"
                ? "filter__range__size-ops size-selected"
                : "filter__range__size-ops"
            }
          >
            L
          </div>
          <div
            onClick={() => setSize("XL")}
            className={
              size === "XL"
                ? "filter__range__size-ops size-selected"
                : "filter__range__size-ops"
            }
          >
            XL
          </div>
          <div
            onClick={() => setSize("XXL")}
            className={
              size === "XXL"
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
