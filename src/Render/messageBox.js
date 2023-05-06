const messageBox = () => {
  const msgBoxContainer = document.createElement("div");
  const box = document.createElement("div");
  msgBoxContainer.classList.add("msgBoxContainer");
  box.classList.add("messageBox");
  msgBoxContainer.appendChild(box);

  const addBox = (message) => {
    document.body.appendChild(msgBoxContainer);
    box.textContent = message;
    //document.querySelector(".container-main").style.backgroundColor =
    //("rgba(0, 0, 0, 0.7)");
  };

  const deleteBox = () => {
    const msgBoxContainer = document.querySelector(".msgBoxContainer");
    if (msgBoxContainer) {
      msgBoxContainer.remove();
      document.querySelector(".container-main").style.backgroundColor =
        "rgba(0, 0, 0, 0)";
    }
  };
  return { addBox, deleteBox };
};

const msgBoxEventListener = () => {
  const msgBox = document.querySelector(".messageBox");
  if (msgBox) {
    window.addEventListener("click", (e) => {
      messageBox().deleteBox();
      //console.log(e);
    });
  }
};

export { messageBox, msgBoxEventListener };
