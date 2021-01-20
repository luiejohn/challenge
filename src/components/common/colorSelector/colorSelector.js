import React from "react";
import "./colorSelector.scss";

const colorSelector = ({ color, setColor }) => {
  return (
    <div>
      <div className="filter__range__colors">
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
      </div>
    </div>
  );
};

export default colorSelector;
