const knight = (currentPosition) => {
  const moves = () => {
    return [
      [-2, 1],
      [-1, 2],
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, -2],
      [-2, -1],
    ];
  };

  return {
    name: "k",
    currentPosition,
    endPosition: null,
    moves,
  };
};

export default knight;
// const newKnight = knight([0, 0]);
//console.log(newKnight.possibleMoves())
// newKnight.find([2, 1]);
//console.log(newKnight.currentPosition);
//console.log(newKnight.possibleMoves(newKnight.currentPosition));
