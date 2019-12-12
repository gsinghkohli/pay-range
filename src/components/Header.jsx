import React from "react";

import "./header.scss";

const Header = props => {
  return (
    <div className="header">
      <div>{props.title}</div>
    </div>
  );
};

export default Header;
