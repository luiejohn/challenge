import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import "./Filter.scss";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import svg from "../../../assets/Icon/sprite.svg";
import SizeFilterComponent from "../SizeFilter/sizeFilter";
import ColorSelector from "../colorSelector/colorSelector";
import Button from "../button/button";
import { Range, getTrackBackground } from "react-range";

const STEP = 0.1;
const MIN = 0;
const MAX = 100;

const Filter = ({
  className,
  currentCat,
  itemsCount,
  filterInfo,
  applyFilter,
  priceFilter,
  sizeFilter,
  clearFilter,
}) => {
  return (
    <Fragment>
      <div className={className}>
        <div className="filter__header">
          <h3 className="filter__header-text">Filter {itemsCount} items</h3>

          <div className="filter__header-gender">
            <svg className="filter__header-icon">
              <use xlinkHref={`${svg}#icon-cross`} />
            </svg>
            <div>
              <span>Category: </span>
              {currentCat}
            </div>
          </div>
          <div className="filter__header-cat">
            <svg className="filter__header-icon">
              <use xlinkHref={`${svg}#icon-cross`} />
            </svg>
            <div>
              <span>Sub Category:</span>
              {filterInfo.subCategory ? filterInfo.subCategory : "All"}
            </div>
          </div>
        </div>

        <div className="filter__range">
          {/* <ColorSelector color={color} setColor={setColor} /> */}

          <SizeFilterComponent
            selectedSize={sizeFilter.selectedSize}
            setSelectedSize={sizeFilter.setSelectedSize}
            sizes={["XS", "S", "M", "L", "XL"]}
          />

          <div className="filter__range__pr-range">
            <h3 className="filter__range__pr-range-text">Price Range</h3>

            <div className="filter__range__pr-range-ops">
              <div
                style={{
                  margin: "30px 17px 0 17px",
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Range
                  values={priceFilter.values}
                  step={STEP}
                  min={MIN}
                  max={MAX}
                  rtl={false}
                  onChange={(values) => priceFilter.setValues(values)}
                  renderTrack={({ props, children }) => (
                    <div
                      onMouseDown={props.onMouseDown}
                      onTouchStart={props.onTouchStart}
                      style={{
                        ...props.style,
                        height: "36px",
                        display: "flex",
                        width: "100%",
                      }}
                    >
                      <div
                        ref={props.ref}
                        style={{
                          height: "5px",
                          width: "100%",
                          borderRadius: "4px",
                          background: getTrackBackground({
                            values: priceFilter.values,
                            colors: ["#ccc", "#548BF4", "#ccc"],
                            min: MIN,
                            max: MAX,
                            rtl: false,
                          }),
                          alignSelf: "center",
                        }}
                      >
                        {children}
                      </div>
                    </div>
                  )}
                  renderThumb={({ index, props, isDragged }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "-28px",
                          color: "#fff",
                          fontWeight: "bold",
                          fontSize: "14px",
                          fontFamily:
                            "Arial,Helvetica Neue,Helvetica,sans-serif",
                          padding: "4px",
                          borderRadius: "4px",
                          backgroundColor: "#f62f5e",
                        }}
                      >
                        ${priceFilter.values[index].toFixed(1)}
                      </div>
                      <div
                        style={{
                          height: "18px",
                          width: "5px",
                          backgroundColor: isDragged ? "#548BF4" : "#f62f5e",
                        }}
                      />
                    </div>
                  )}
                />
              </div>
            </div>
          </div>

          <div className="filter__range__brand">
            <h3 className="filter__range__brand-text">Deals</h3>

            <div className="filter__range__brand-ops">
              <div>No deals at the moment</div>
              {/* <div>
                <div>
                  <input type="checkbox" id="1" />
                </div>
                <label htmlFor="1">Abecrombie &amp; Fitch</label>
              </div>
              <div>
                <label>
                  <Checkbox checked />
                  Addidas Originals
                </label>
              </div>
              <div>
                <div>
                  <input type="checkbox" />
                </div>
                <div>ASOS</div>
              </div>
              <div>
                <div>
                  <input type="checkbox" />
                </div>
                <div>Cheap Monday</div>
              </div>

              <div>
                <div>
                  <input type="checkbox" />
                </div>
                <div>Brand 1</div>
              </div>

              <div>
                <div>
                  <input type="checkbox" />
                </div>
                <div>Brand 1</div>
              </div>
              <div>
                <div>
                  <input type="checkbox" />
                </div>
                <div>Brand 1</div>
              </div>
              <div>
                <div>
                  <input type="checkbox" />
                </div>
                <div>Brand 1</div>
              </div>
              <div>
                <div>
                  <input type="checkbox" />
                </div>
                <div>Brand 1</div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="filter__apply">
          {/* <button className="btn-md btn-primary"> Apply </button> */}
          <Button
            primary
            click={() =>
              applyFilter(
                filterInfo.subCategory,
                sizeFilter.selectedSize,
                priceFilter.values
              )
            }
          >
            Apply
          </Button>
          <Button click={clearFilter}>Clear Filter</Button>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  currentCat: state.category.currentCategory,
  itemsCount: state.category.items.length,
  filterInfo: state.category.filter,
});

export default connect(mapStateToProps)(Filter);
