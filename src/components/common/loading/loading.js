import React from "react";

import Spinner from "../spinner/spinner";
import "./loading.scss";

const Loading = ({ height }) => {
  console.log(height);
  return (
    <div className={height ? "loading__container" : "loading__container_full"}>
      <Spinner />
    </div>
  );
};

export default Loading;
