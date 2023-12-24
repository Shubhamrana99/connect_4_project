import React, { useEffect, useState } from "react";
import GameCircle from "./GameCircle";
import "../Game.css";
import Header from "./Header";
import Footer from "./Footer";
import { IsWinner, isDraw } from "./Winner";
import {
  Player_1,
  No_Play,
  Player_2,
  Game_State_Play,
  Game_State_Win,
  Game_State_Draw,
} from "../Constants";

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(No_Play));
  const [currentPlayer, setCurrentPlayer] = useState(Player_1);
  const [gameState, setGameState] = useState(Game_State_Play);
  const [winPlayer, setWinPlayer] = useState(No_Play);

  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    setGameBoard(Array(16).fill(No_Play));
    setCurrentPlayer(Player_1);
    setGameState(Game_State_Play);
  };

  const initialBoard = () => {
    const board = [];
    for (let i = 0; i < 16; i++) {
      board.push(renderPlayers(i));
    }
    return board;
  };

  const onCircleClicked = (id) => {
    if (gameBoard[id] !== No_Play) return;

    if (gameState !== Game_State_Play) return;

    if (IsWinner(gameBoard, id, currentPlayer)) {
      setGameState(Game_State_Win);
      setWinPlayer(currentPlayer);
    }

    if (isDraw(gameBoard, id, currentPlayer)) {
      setGameState(Game_State_Draw);
      setWinPlayer(No_Play);
    }

    setGameBoard((pre) =>
      pre.map((circle, position) => {
        if (position === id) {
          return currentPlayer;
        }
        return circle;
      })
    );

    setCurrentPlayer(currentPlayer === Player_1 ? Player_2 : Player_1);

    console.log(currentPlayer);
    console.log(gameBoard);
  };

  const renderPlayers = (id) => {
    return (
      <GameCircle
        key={id}
        id={id}
        className={`player_${gameBoard[id]}`}
        onCircleClicked={onCircleClicked}
      ></GameCircle>
    );
  };

  return (
    <>
      <Header
        currentPlayer={currentPlayer}
        gameState={gameState}
        winPlayer={winPlayer}
      />
      <div className="gameBoard">{initialBoard()}</div>
      <Footer onClickEvent={initGame} />
    </>
  );
};

export default GameBoard;
