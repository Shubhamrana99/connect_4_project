import React from "react";
import "../Game.css";

const Footer = ({ onClickEvent }) => {
  return (
    <div className="footer-container">
      <button className="footer-btn" onClick={onClickEvent}>
        {" "}
        New Game
      </button>
    </div>
  );
};

export default Footer;
