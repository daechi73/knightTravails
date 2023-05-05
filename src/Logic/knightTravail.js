import chessBoard from "./board.js";
import knight from "./knight.js";
import { startPositionListener, moveKnight } from "./utility.js";
import renderBoard from "../Render/renderBoard.js";
import { messageBox, msgBoxEventListener } from "../Render/messageBox.js";
import { renderKnight } from "../Render/renderPieces.js";

const knightTravail = () => {
  // const newKnight = knight([2, 1]);
  // const newBoard = chessBoard();
  // chessBoard().printBoard();
  //console.log(find([5, 5], newKnight.currentPosition, newKnight.moves()));
  //renderBoard();

  const startUp = () => {
    const newKnight = knight();
    const newBoard = chessBoard();
    renderBoard(newBoard);

    // messageBox().addBox(`Place your Knight on the board`);
    // msgBoxEventListener();
    // startPositionListener(newKnight, newBoard);

    const cell = document.querySelector(".a8");
    renderKnight(cell);
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", () => {
      console.log("working");
      moveKnight();
    });
  };
  return { startUp };
};

export default knightTravail;