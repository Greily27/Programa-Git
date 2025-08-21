const modal = document.getElementById("referencias-modal");
const btn = document.getElementById("floating-button");
const closeBtn = document.querySelector(".close-button");

btn.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
