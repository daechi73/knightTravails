const renderKnight = (chessBox) => {
  chessBox.innerHTML += `<div class="knight">k</div>`;
};
const removeKnight = (chessBox) => {
  const knight = document.querySelector(".column>.knight");
  console.log(knight);
  chessBox.removeChild(knight);
};
const renderMoves = (chessBox, i) => {
  chessBox.innerHTML += `<div class="moves">${i}</div>`;
  chessBox.style.backgroundColor = "rgb(196, 154, 40)";
};
const renderDestination = (chessBox) => {
  chessBox.innerHTML += `<div class="endContainer"><div class="destination">E</div></div>`;
};
export { renderKnight, removeKnight, renderMoves, renderDestination };
