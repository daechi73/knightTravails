import chessBoard from "../Logic/board";

const renderBoard = (aChessBoard) => {
  const board = document.createElement("div");
  board.classList.add("chessBoard");
  document.querySelector(".container-main").appendChild(board);
  aChessBoard.board.forEach((row) => {
    const rows = document.createElement("div");
    rows.classList.add("row");
    row.forEach((column) => {
      const c = document.createElement("div");
      c.classList.add("column");
      c.textContent = column.code;
      rows.appendChild(c);
    });
    board.appendChild(rows);
  });
};

export default renderBoard;
