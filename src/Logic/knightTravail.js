import chessBoard from "./board.js";
import knight from "./knight.js";
import { startPositionListener } from "./utility.js";
import renderBoard from "../Render/renderBoard.js";
import { messageBox, msgBoxEventListener } from "../Render/messageBox.js";

const knightTravail = () => {
  const startUp = () => {
    const newKnight = knight();
    const newBoard = chessBoard();
    renderBoard(newBoard);

    messageBox().addBox(`Place your Knight on the board`);
    msgBoxEventListener();
    startPositionListener(newKnight, newBoard);
  };
  return { startUp };
};

export default knightTravail;
