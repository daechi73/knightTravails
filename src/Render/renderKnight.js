const renderKnight = (chessBox) => {
  chessBox.innerHTML += `<div class="knight">k</div>`;
};
const removeKnight = (chessBox) => {
  chessBox.removeChild(chessBox.firstElementChild);
};
const renderMoves = (chessBox, i) => {
  chessBox.innerHTML += `<div class="moves">${i}</div>`;
  chessBox.style.backgroundColor = "rgb(196, 154, 40)";
};
export { renderKnight, removeKnight, renderMoves };
