document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
      "class",
      isOpen ? "ri-close-line" : "ri-menu-line"
    );
  });

  navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });

  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-image");
  const closeModal = document.getElementById("close-modal");

  const projectCards = document.querySelectorAll(".project__card img");

  projectCards.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex"; // Show the modal
      modalImg.src = img.src; // Set the modal image source
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none"; // Hide the modal
  });

  // Close modal when clicking anywhere outside of the image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none"; // Hide the modal
    }
  });
});
