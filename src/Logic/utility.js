import messageBox from "../Render/messageBox.js";
import knight from "./knight";
import renderKnight from "../Render/renderKnight.js";
import chessBoard from "./board.js";

//find utility
const node = (value) => {
  return { value, preNode: null, nextMoves: null };
};

const treeOfAllTheMoves = (root) => {
  return { root };
};

const movesToNode = (possibleMove, preNode) => {
  const newNode = node(possibleMove);
  if (preNode) newNode.preNode = preNode;
  return newNode;
};
//x cant be < 0, > 7 ; y cant be < 0 , > 7
const possibleMoves = (node, moves) => {
  const possibleMoves = [];
  const [x, y] = node.value;
  moves.forEach((move) => {
    const updatedMove = [];
    const updatedX = x + move[0];
    const updatedY = y + move[1];
    if (updatedX >= 0 && updatedX <= 7) updatedMove.push(updatedX);
    if (updatedY >= 0 && updatedY <= 7) updatedMove.push(updatedY);
    if (updatedMove[1]) {
      possibleMoves.push(movesToNode(updatedMove, node));
    }
  });
  return possibleMoves;
};

const checkBatch = (destination, possibleMoves) => {
  for (let i = 0; i < possibleMoves.length; i++) {
    if (
      JSON.stringify(possibleMoves[i].value) === JSON.stringify(destination)
    ) {
      return { found: true, destinationFound: possibleMoves[i] };
    }
  }
  return false;
};
const preMoves = (node) => {
  const steps = [node.value];
  while (node.preNode != null) {
    steps.unshift(node.preNode.value);
    node = node.preNode;
  }
  return { steps, numberOfMoves: steps.length - 1 };
};
const find = (destination, position, moves) => {
  let queue = [];
  const treeOfAll = treeOfAllTheMoves(node(position));
  queue.push(treeOfAll.root);
  let temp = queue[0];
  while (JSON.stringify(destination) != JSON.stringify(temp.value)) {
    temp.nextMoves = possibleMoves(temp, moves);
    queue = queue.concat(temp.nextMoves);
    const checked = checkBatch(destination, temp.nextMoves);
    if (checked) return preMoves(checked.destinationFound); // checks nextmoves if match destinationpossibleMovesHolder
    queue.shift();
    temp = queue[0];
  }
  return preMoves(temp);
};

//Game Utility
const placeKnight = (position, chessBox, knight, board) => {
  knight.currentPosition = codeToCoordinate(position, board);
  //console.log(knight.currentPosition);
  //console.log(newKnight.currentPosition);
  //console.log(find([5, 5], newKnight.currentPosition, newKnight.moves()));
  renderKnight(chessBox);
};

const startPosition = (knight, board) => {
  const boardUI = document.querySelector(".chessBoard");
  let position;
  boardUI.addEventListener(
    "click",
    (e) => {
      //console.log(e);
      e.stopPropagation();
      placeKnight(e.target.textContent, e.target, knight, board);
      pickDestination(knight, board);
    },
    { once: true }
  );
};
const pickDestination = (knight, board) => {
  const boardUI = document.querySelector(".chessBoard");
  boardUI.addEventListener(
    "click",
    function (e) {
      knight.endPosition = codeToCoordinate(e.target.textContent, board);
      e.target.innerHTML += `<div class="destination">E</div>`;
    },
    { once: true }
  );
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
//render utility
const msgBoxEventListner = () => {
  const msgBox = document.querySelector(".messageBox");
  if (msgBox) {
    window.addEventListener(
      "click",
      (e) => {
        messageBox().deleteBox();
        //console.log(e);
      },
      { once: true }
    );
  }
};

export { msgBoxEventListner, find, startPosition, pickDestination };
