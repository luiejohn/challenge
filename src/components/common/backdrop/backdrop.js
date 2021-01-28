import React from "react";

import "./backdrop.scss";

const BackDrop = ({ className, onClick }) => {
  return <div className={className} onClick={onClick}></div>;
};

export default BackDrop;
