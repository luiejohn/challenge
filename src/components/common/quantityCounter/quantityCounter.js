import React from "react";
import "./quantityCounter.scss";

const QuantityCounter = ({ increase, decrease, quantity, centered, title }) => {
  return (
    <>
      {title ? <h3 className="quantityCounter__title">Quantity</h3> : null}

      <div
        className={!centered ? "quantityCounter" : "quantityCounter_centered"}
      >
        <div
          className={
            quantity <= 1
              ? "quantityCounter-control quantityCounter-disabled"
              : "quantityCounter-control"
          }
          onClick={() => decrease()}
        >
          {" "}
          -{" "}
        </div>
        <div className="quantityCounter-content"> {quantity} </div>
        <div className="quantityCounter-control" onClick={() => increase()}>
          {" "}
          +{" "}
        </div>
      </div>
    </>
  );
};

export default QuantityCounter;
