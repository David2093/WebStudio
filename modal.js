    const openModal = document.getElementById("openModal");
    const closeModal = document.getElementById("closeModal");
    const modalOverlay = document.getElementById("modalOverlay");
    openModal.addEventListener("click", () => {
      modalOverlay.style.display = "flex";
    });
    closeModal.addEventListener("click", () => {
      modalOverlay.style.display = "none";
    });
    window.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.style.display = "none";
      }
    });