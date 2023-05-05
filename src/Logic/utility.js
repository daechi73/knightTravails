import { messageBox } from "../Render/messageBox";
import knight from "./knight";
import {
  renderKnight,
  removeKnight,
  renderMoves,
} from "../Render/renderPieces.js";
import chessBoard from "./board.js";
import find from "./find.js";
import timer from "./timer";

//Game Utility
const placeKnight = (position, chessBox, knight, board) => {
  knight.currentPosition = codeToCoordinate(position, board);
  renderKnight(chessBox);
};

//takes in knights.movesMade & chessboard;
//renders each moves[position] to UI chessBoard
const showPath = (movesMade, board) => {
  console.log(movesMade);
  movesMade.moves.forEach((position, i) => {
    if (i > 0) {
      if (i === movesMade.moves.length - 1) {
        //special rendering to destination square
        const endDiv = getSquareUI(
          coordinateToCode(position, board)
        ).firstElementChild;
        renderMoves(endDiv, i);
      } else {
        //renders to divs that are not starting and end destination
        renderMoves(getSquareUI(coordinateToCode(position, board)), i);
      }
    }
  });
};

const getSquareUI = (squareCode) => {
  const squareUI = document.querySelector(`.${squareCode}`);
  return squareUI;
};

//ui uses squareCodes; backside uses coordination
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

//ui uses squareCodes; backside uses coordination
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
//gets new coordination [initial coordination + transition coordination]
const newCoordinate = (knightCoord, moveCoord) => {
  const newCoord = [];
  knightCoord.forEach((axis, i) => {
    newCoord.push(axis + moveCoord[i]);
  });
  return newCoord;
};

//moves Knight to each individual axis point from each movement coordination
const moveKnight = (coord, board, axis) => {
  //console.log(coord + " " + axis);
  console.log(coord);
  let [x, y] = coord;
  let temp;
  if (axis === "x") {
    temp = [x, 0];
  } else {
    temp = [0, y];
  }
  [x, y] = temp;
  const xLength = x * 51.3;
  const yLength = y * 51.3;
  const knight = document.querySelector(".knight");
  const newPosition = newCoordinate(
    codeToCoordinate(knight.parentElement.id, board),
    temp
  );
  knight.style.transform = `translateX(${xLength}px) translateY(${yLength}px)`;

  // removeKnight(knight.parentElement);
  // renderKnight(getSquareUI(coordinateToCode(newPosition, board)));

  const deleteTimer = timer(() => {
    console.log("parent " + knight.parentElement);
    console.log("knight " + knight);
    removeKnight(knight.parentElement);
    console.log("working");
  }, 331);

  deleteTimer.start();

  const renderTimer = timer(() => {
    renderKnight(getSquareUI(coordinateToCode(newPosition, board)));
    console.log("working2");
  }, 331);
  renderTimer.start();
};

//moves knight to starting point to finishing destination.
const startToFinish = (knight, board) => {
  let count = 0;
  //console.log(knight.movesMade);
  // ************ make sure to change this to knight.movesMade.moves after**********
  knight.movesMade.forEach((move) => {
    //moveKnight(move, board, "x");
    move.forEach((axis, i) => {
      if (i === 0) setTimeout(() => moveKnight(move, board, "x"), count);
      count += 331;
      if (i === 1) setTimeout(() => moveKnight(move, board, "y"), count);
      count += 351;
    });
  });
};

//eventlistener that fires the starting of the simulations
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

export { startPositionListener, moveKnight, startToFinish };
