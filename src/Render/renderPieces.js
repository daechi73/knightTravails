const renderKnight = (chessBox) => {
  chessBox.innerHTML += `<div class="knight">k</div>`;
};
const removeKnight = (chessBox) => {
  const knight = document.querySelector(".column>.knight");
  chessBox.removeChild(knight);
};
const renderMoves = (chessBox, i) => {
  chessBox.innerHTML += `<div class="moves">${i}</div>`;
  chessBox.style.backgroundColor = "rgba(77, 76, 76, 0.462)";
};

const renderDestination = (chessBox) => {
  chessBox.innerHTML += `<div class="endContainer"><div class="destination">E</div></div>`;
  chessBox.style.backgroundColor = "rgba(31, 16, 106, 0.80)";
};
export { renderKnight, removeKnight, renderMoves, renderDestination };
