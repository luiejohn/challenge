import React, { Fragment, useState } from "react";

import "./Filter.scss";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import svg from "../../../assets/Icon/sprite.svg";
import SizeFilter from "../SizeFilter/sizeFilter";
import ColorSelector from "../colorSelector/colorSelector";
import Button from "../button/button";

const Filter = ({ className }) => {
  let [size, setSize] = useState("");
  let [color, setColor] = useState(1);
  let [value, setRange] = useState({ min: 1, max: 18 });

  return (
    <Fragment>
      <div className={className}>
        <div className="filter__header">
          <h3 className="filter__header-text">Filter 486 items</h3>

          <div className="filter__header-gender">
            <svg className="filter__header-icon">
              <use xlinkHref={`${svg}#icon-cross`} />
            </svg>
            <div>
              <span>Gender: </span>
              Woman
            </div>
          </div>
          <div className="filter__header-cat">
            <svg className="filter__header-icon">
              <use xlinkHref={`${svg}#icon-cross`} />
            </svg>
            <div>
              <span>Category:</span>
              Dresses
            </div>
          </div>
        </div>

        <div className="filter__range">
          <ColorSelector color={color} setColor={setColor} />
          {/* <div className="filter__range__colors">
            <h3 className="filter__range__colors-text">Color</h3>

            <div className="filter__range__colors-ops">
              <div
                className={
                  color === 1
                    ? "filter__range__colors-ops-outer color-selected"
                    : "filter__range__colors-ops-outer"
                }
                onClick={() => setColor(1)}
              >
                <div
                  style={{ backgroundColor: "#6eb2fb" }}
                  className="filter__range__colors-ops-inner"
                ></div>
              </div>
              <div
                className={
                  color === 2
                    ? "filter__range__colors-ops-outer color-selected"
                    : "filter__range__colors-ops-outer"
                }
                onClick={() => setColor(2)}
              >
                <div
                  style={{ backgroundColor: "#00d3ca" }}
                  className="filter__range__colors-ops-inner"
                ></div>
              </div>
              <div
                className={
                  color === 3
                    ? "filter__range__colors-ops-outer color-selected"
                    : "filter__range__colors-ops-outer"
                }
                onClick={() => setColor(3)}
              >
                <div
                  style={{ backgroundColor: "#f62f5e" }}
                  className="filter__range__colors-ops-inner"
                ></div>
              </div>
              <div
                className={
                  color === 4
                    ? "filter__range__colors-ops-outer color-selected"
                    : "filter__range__colors-ops-outer"
                }
                onClick={() => setColor(4)}
              >
                <div
                  style={{ backgroundColor: "#f1ad3d" }}
                  className="filter__range__colors-ops-inner"
                ></div>
              </div>
              <div
                className={
                  color === 5
                    ? "filter__range__colors-ops-outer color-selected"
                    : "filter__range__colors-ops-outer"
                }
                onClick={() => setColor(5)}
              >
                <div
                  style={{ backgroundColor: "#effc90" }}
                  className="filter__range__colors-ops-inner"
                ></div>
              </div>
              <div
                className={
                  color === 6
                    ? "filter__range__colors-ops-outer color-selected"
                    : "filter__range__colors-ops-outer"
                }
                onClick={() => setColor(6)}
              >
                <div
                  style={{ backgroundColor: "green" }}
                  className="filter__range__colors-ops-inner"
                ></div>
              </div>
              <div
                className={
                  color === 7
                    ? "filter__range__colors-ops-outer color-selected"
                    : "filter__range__colors-ops-outer"
                }
                onClick={() => setColor(7)}
              >
                <div
                  style={{ backgroundColor: "purple" }}
                  className="filter__range__colors-ops-inner"
                ></div>
              </div>
            </div>
          </div> */}

          <SizeFilter />

          {/* <div className="filter__range__size">
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
          </div> */}

          <div className="filter__range__pr-range">
            <h3 className="filter__range__pr-range-text">Price Range</h3>

            <div className="filter__range__pr-range-ops">
              <InputRange
                maxValue={20}
                minValue={0}
                value={value}
                onChange={(value) => setRange({ value })}
              />
            </div>
          </div>

          <div className="filter__range__brand">
            <h3 className="filter__range__brand-text">Brands</h3>

            <div className="filter__range__brand-ops">
              <div>
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
              </div>
            </div>
          </div>
        </div>

        <div className="filter__apply">
          {/* <button className="btn-md btn-primary"> Apply </button> */}
          <Button primary>Apply</Button>
          <div>Clear All</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Filter;
