import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isgoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isgoogleSignIn ? "google-sign-in" : ""} custom-button `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
