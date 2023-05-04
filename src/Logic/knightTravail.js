import chessBoard from "./board.js";
import knight from "./knight.js";
import { find, msgBoxEventListner, start, getChessCellDiv } from "./utility.js";
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
    start(newKnight, newBoard);
    getChessCellDiv("a1");
  };
  return { startUp };
};

export default knightTravail;
