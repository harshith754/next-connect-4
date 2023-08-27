export const isWinner = (board, player) => {
  // Check horizontally
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col <= board[row].length - 4; col++) {
      if (
        board[row][col] === player &&
        board[row][col + 1] === player &&
        board[row][col + 2] === player &&
        board[row][col + 3] === player
      ) {
        return true;
      }
    }
  }

  // Check vertically
  for (let row = 0; row <= board.length - 4; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (
        board[row][col] === player &&
        board[row + 1][col] === player &&
        board[row + 2][col] === player &&
        board[row + 3][col] === player
      ) {
        return true;
      }
    }
  }

  // Check diagonally (top-left to bottom-right)
  for (let row = 0; row <= board.length - 4; row++) {
    for (let col = 0; col <= board[row].length - 4; col++) {
      if (
        board[row][col] === player &&
        board[row + 1][col + 1] === player &&
        board[row + 2][col + 2] === player &&
        board[row + 3][col + 3] === player
      ) {
        return true;
      }
    }
  }

  // Check diagonally (bottom-left to top-right)
  for (let row = 3; row < board.length; row++) {
    for (let col = 0; col <= board[row].length - 4; col++) {
      if (
        board[row][col] === player &&
        board[row - 1][col + 1] === player &&
        board[row - 2][col + 2] === player &&
        board[row - 3][col + 3] === player
      ) {
        return true;
      }
    }
  }

  return false;
};
