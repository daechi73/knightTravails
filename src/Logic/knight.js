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
    movesMade: null,
  };
};

export default knight;
