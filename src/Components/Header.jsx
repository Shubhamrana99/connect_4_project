import React from "react";
import "../Game.css";
import { Game_State_Draw, Game_State_Play, Game_State_Win } from "../Constants";

const Header = ({ currentPlayer, gameState, winPlayer }) => {
  const renderLabel = () => {
    switch (gameState) {
      case Game_State_Play:
        return <div>Player {currentPlayer} Turn</div>;

      case Game_State_Win:
        return <div>Player {winPlayer} Wins</div>;

      case Game_State_Draw:
        return <div>Game is a Draw !</div>;

      default:
        break;
    }
  };

  return (
    <div className="header-container header">
      <div className="header-text">{renderLabel()}</div>
    </div>
  );
};

export default Header;
