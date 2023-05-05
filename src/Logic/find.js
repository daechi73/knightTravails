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
const movesMade = (node) => {
  const moves = [node.value];
  while (node.preNode != null) {
    moves.unshift(node.preNode.value);
    node = node.preNode;
  }
  return { moves, numberOfMoves: moves.length - 1 };
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
    if (checked) return movesMade(checked.destinationFound); // checks nextmoves if match destinationpossibleMovesHolder
    queue.shift();
    temp = queue[0];
  }
  return movesMade(temp);
};

export default find;
