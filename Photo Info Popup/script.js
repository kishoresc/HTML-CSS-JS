const toggleModal = document.querySelector(".modal-toggle");
const modalElement = document.querySelector(".modal");
const closeButton = document.querySelector(".close");

toggleModal.addEventListener("click", () => {
  modalElement.style.display = "block";
});

closeButton.addEventListener("click", () => {
  modalElement.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modalElement) {
    modalElement.style.display = "none";
  }
});
