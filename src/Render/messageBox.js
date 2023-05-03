const messageBox = () => {
  const box = document.createElement("div");
  box.classList.add("messageBox");
  const addBox = (message) => {
    document.body.appendChild(box);
    box.textContent = message;
    document.querySelector(".container-main").style.backgroundColor =
      "rgba(0, 0, 0, 0.7)";
  };
  const deleteBox = () => {
    const msgBox = document.querySelector(".messageBox");
    if (msgBox) {
      msgBox.remove();
      document.querySelector(".container-main").style.backgroundColor =
        "rgba(0, 0, 0, 0)";
    }
  };
  return { addBox, deleteBox };
};

export default messageBox;
