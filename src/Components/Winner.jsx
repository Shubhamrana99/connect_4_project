export const IsWinner = (gameBoard, circleID, currentPlayer) => {
  const board = [...gameBoard];
  board[circleID] = currentPlayer;

  const winnerLines = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12],
  ];

  for (let i = 0; i < winnerLines.length; i++) {
    const [p1, p2, p3, p4] = winnerLines[i];
    if (
      board[p1] > 0 &&
      board[p1] === board[p2] &&
      board[p2] === board[p3] &&
      board[p3] === board[p4]
    ) {
      return true;
    }
  }
  return false;
};

export const isDraw = (gameBoard, circleID, currentPlayer) => {
  const board = [...gameBoard];
  board[circleID] = currentPlayer;

  let count = board.reduce((acc, curr) => acc + (curr === 0), 0);

  console.log(`count${count}`);
  return count === 0;
};
