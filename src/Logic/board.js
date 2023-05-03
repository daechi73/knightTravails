const square = (row, column) => {
  return {
    code: String.fromCharCode(column + 97) + `${8 - row}`,
    knight: false,
    row,
    column,
  };
};
const chessBoard = () => {
  const board = [];

  const createBoard = () => {
    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        row.push(square(i, j));
      }
      board.push(row);
    }
  };

  const printBoard = () => {
    board.forEach((row) => {
      let print = "";
      row.forEach((column) => {
        print += `${column.code} `;
      });
      console.log(print);
    });
  };
  createBoard();
  return { printBoard, board };
};
export default chessBoard;
