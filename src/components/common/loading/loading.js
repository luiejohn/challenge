import React from "react";

import Spinner from "../spinner/spinner";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="loading__container">
      <Spinner />
    </div>
  );
};

export default Loading;
