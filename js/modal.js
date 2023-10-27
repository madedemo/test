// Get references to the modal elements
const modal = document.querySelector("[data-modal]");
const modalOpenButton = document.querySelector("[data-modal-open]");
const modalCloseButton = document.querySelector("[data-modal-close]");

// Function to open the modal
function openModal() {
  modal.classList.remove("is-hidden");
}

// Function to close the modal
function closeModal() {
  modal.classList.add("is-hidden");
}

// Event listener to open the modal
modalOpenButton.addEventListener("click", openModal);

// Event listener to close the modal
modalCloseButton.addEventListener("click", closeModal);
