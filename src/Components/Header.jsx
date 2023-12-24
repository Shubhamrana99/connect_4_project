import React from "react";
import "../Game.css";

const Header = ({ currentPlayer }) => {
  return (
    <div className="header-container header">
      <div className="header-text">Player {currentPlayer} Turn</div>
    </div>
  );
};

export default Header;
