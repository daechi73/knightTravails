import chessBoard from "./board.js";
import knight from "./knight.js";
import { msgBoxEventListner, startPosition } from "./utility.js";
import renderBoard from "../Render/renderBoard.js";
import messageBox from "../Render/messageBox.js";

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
    messageBox().addBox(`Place your Knight on the board`);
    msgBoxEventListner();
    startPosition(newKnight, newBoard);
  };
  return { startUp };
};

export default knightTravail;
