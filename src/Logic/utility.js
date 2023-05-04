import messageBox from "../Render/messageBox";

//Game Utility
const placeKnight = () => {
  const board = document.querySelector(".chessBoard");
  board.addEventListener(
    "click",
    (e) => {
      console.log(e.target);
      e.target.innerHTML += `<div class="knight">k</div>`;
    },
    { once: true }
  );
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

export { msgBoxEventListner, placeKnight };
