import React from "react";

import "../Game.css";

const handleClick = (id) => {
  alert("your ID :" + id);
};

const GameCircle = ({ children, id }) => {
  return (
    <div
      className="gameCircle"
      style={
        id % 2 === 0 ? { backgroundColor: "red" } : { backgroundColor: "blue" }
      }
      onClick={() => handleClick(id)}
    >
      {children}
    </div>
  );
};

export default GameCircle;
