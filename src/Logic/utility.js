import { messageBox } from "../Render/messageBox";
import knight from "./knight";
import {
  renderKnight,
  removeKnight,
  renderMoves,
} from "../Render/renderPieces.js";
import chessBoard from "./board.js";
import find from "./find.js";

//Game Utility
const placeKnight = (position, chessBox, knight, board) => {
  knight.currentPosition = codeToCoordinate(position, board);
  renderKnight(chessBox);
};

const showPath = (movesMade, board) => {
  console.log(movesMade);
  movesMade.steps.forEach((position, i) => {
    if (i > 0) {
      if (i === movesMade.steps.length - 1) {
        const endDiv = getChessCellDiv(
          coordinateToCode(position, board)
        ).firstElementChild;

        renderMoves(endDiv, i);
      } else {
        renderMoves(getChessCellDiv(coordinateToCode(position, board)), i);
      }
    }
  });
};

const getChessCellDiv = (cellCode) => {
  const cellDivs = document.querySelectorAll(".column");
  for (const div of cellDivs) {
    const divCode = div.textContent.split("E");
    if (divCode[0] === cellCode) {
      return div;
    }
  }
};

const coordinateToCode = (coord, board) => {
  const [x, y] = coord;
  for (const row of board.board) {
    for (const column of row) {
      if (column.column == x && column.row == y) {
        return column.code;
      }
    }
  }
};

const codeToCoordinate = (code, board) => {
  for (const row of board.board) {
    for (const column of row) {
      if (column.code === code) {
        //console.log(`[${column.column},${column.row}]`);
        const coord = [];
        coord.push(column.column);
        coord.push(column.row);
        return coord;
      }
    }
  }
};

const moveKnight = () => {
  const knight = document.querySelector(".knight");
  knight.style.transform = "translateY(20px)";
};

const pickDestinationListener = (knight, board) => {
  const boardUI = document.querySelector(".chessBoard");
  messageBox().addBox("Pick an end destination");
  boardUI.addEventListener(
    "click",
    function (e) {
      knight.endPosition = codeToCoordinate(e.target.textContent, board);
      e.target.innerHTML += `<div class="endContainer"><div class="destination">E</div></div>`;
      knight.movesMade = find(
        knight.endPosition,
        knight.currentPosition,
        knight.moves()
      );

      showPath(knight.movesMade, board, knight);
    },
    { once: true }
  );
};

const startPositionListener = (knight, board) => {
  const boardUI = document.querySelector(".chessBoard");
  boardUI.addEventListener(
    "click",
    (e) => {
      placeKnight(e.target.textContent, e.target, knight, board);
      messageBox().addBox("Pick an end destination");
      //console.log(e.target.textContent);
      pickDestinationListener(knight, board);
    },
    { once: true }
  );
};

export { startPositionListener, moveKnight };
