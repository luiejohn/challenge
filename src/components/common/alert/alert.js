import React, { useState, useEffect } from "react";

import "./alert.scss";

const Alert = () => {
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    timedTransition();
  }, []);

  const timedTransition = () => {
    setTimeout(() => {
      setShow(true);
    }, 2000);

    setTimeout(() => {
      setShow(false);
    }, 4000);
  };

  return (
    <div
      className={
        isShow ? "alert_container alert_show" : "alert_container alert_hide"
      }
    >
      <div className="alert_content">I'm an alert</div>
    </div>
  );
};

export default Alert;
