import React from "react";

import Spinner from "../spinner/spinner";
import style from "./loading.module.scss";

const Loading = ({ height }) => {
  return (
    <div className={height ? style.container : style.container_full}>
      <Spinner />
    </div>
  );
};

export default Loading;
