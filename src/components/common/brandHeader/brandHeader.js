import React, { Fragment } from "react";

import "./brandHeader.scss";

const BrandHeader = () => {
  return (
    <Fragment>
      <div className="brand-header">
        <h1>Converse</h1>
        <h2>
          Explore styles tough enough to <br />
          handle all your workouts
        </h2>

        <button className="btn-md btn-secondary">Shop Brand</button>
      </div>
    </Fragment>
  );
};

export default BrandHeader;
