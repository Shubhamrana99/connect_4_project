import React, { useState } from "react";
import GameCircle from "./GameCircle";
import "../Game.css";
import Header from "./Header";
import Footer from "./Footer";
import { IsWinner } from "./Winner";

const No_Play = 0;
const Player_1 = 1;
const Player_2 = 2;

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(No_Play));

  const [currentPlayer, setCurrentPlayer] = useState(Player_1);

  const initialBoard = () => {
    const board = [];
    for (let i = 0; i < 16; i++) {
      board.push(renderPlayers(i));
    }
    return board;
  };

  const onCircleClicked = (id) => {
    // const board = [...gameBoard];
    // board[id] = currentPlayer;
    // setGameBoard(board);

    if (IsWinner(gameBoard, id, currentPlayer)) {
      console.log("winner is :", currentPlayer);
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
      <Header currentPlayer={currentPlayer} />
      <div className="gameBoard">{initialBoard()}</div>
      <Footer />
    </>
  );
};

export default GameBoard;
