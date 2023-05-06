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
  //console.log(movesMade);
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
const getSteps = (knightCoord, nextMoveCoord, axis) => {
  let stepsTaken = [];
  if (axis === "x") {
    stepsTaken.push(nextMoveCoord[0] - knightCoord[0]);
    stepsTaken.push(0);
    nextMoveCoord.push(knightCoord[1]);
    console.log("nextMoveCoord " + nextMoveCoord);

    console.log("next x " + nextMoveCoord[0]);
  }
  if (axis === "y") {
    stepsTaken.push(0);
    stepsTaken.push(nextMoveCoord[1] - knightCoord[1]);
    console.log("next y " + nextMoveCoord[1]);
  }
  return stepsTaken;
};

//moves Knight to each individual axis point from each movement coordination
const moveKnight = (coord, board, axis) => {
  const knight = document.querySelector(".knight");
  let [x, y] = coord;
  let temp;
  let stepsTaken;
  let newPosition;
  if (axis === "x") {
    temp = [x];
    stepsTaken = getSteps(
      codeToCoordinate(knight.parentElement.id, board),
      temp,
      axis
    );
    newPosition = temp;
  } else {
    temp = [0, y];
    stepsTaken = getSteps(
      codeToCoordinate(knight.parentElement.id, board),
      temp,
      axis
    );
    newPosition = coord;
  }
  console.log(stepsTaken);
  [x, y] = stepsTaken;
  const xLength = x * 51.3;
  const yLength = y * 51.3;

  knight.style.transform = `translateX(${xLength}px) translateY(${yLength}px)`;

  const deleteTimer = timer(() => {
    removeKnight(knight.parentElement);
  }, 331);
  deleteTimer.start();

  const renderTimer = timer(() => {
    renderKnight(getSquareUI(coordinateToCode(newPosition, board)));
  }, 331);
  renderTimer.start();
};

//moves knight to starting point to finishing destination.
const startToFinish = (knight, board) => {
  let count = 0;
  //console.log(knight.movesMade);
  // ************ make sure to change this to knight.movesMade.moves after**********
  //console.log(knight.movesMade.moves);
  knight.movesMade.moves.forEach((move, i) => {
    //moveKnight(move, board, "x");

    //skips starting position
    if (i === 0) {
      return console.log("starting Position:" + move);
    }
    console.log("next Move  " + move);
    move.forEach((axis, innerI) => {
      if (innerI === 0) setTimeout(() => moveKnight(move, board, "x"), count);
      count += 331;
      if (innerI === 1) setTimeout(() => moveKnight(move, board, "y"), count);
      count += 351;
    });
  });
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
      startToFinish(knight, board);
    },
    { once: true }
  );
};
export { startPositionListener, moveKnight, startToFinish };
