// --- Add your images here ---
const images = [
    "img/00.png",
    "img/01.png",
    "img/02.png",
    "img/03.png",
    "img/04.png",
    "img/05.png",
    "img/06.png",
    "img/07.png",
    "img/08.png",
    "img/09.png",
    "img/10.png",
];

// Render gallery
const gallery = document.getElementById("gallery");

images.forEach(src => {
    const item = document.createElement("div");
    item.className = "masonry-item";

    const img = document.createElement("img");
    img.src = src;

    img.onload = () => item.classList.add("loaded");

    // Clicking an image → open modal
    img.addEventListener("click", () => openModal(src));

    item.appendChild(img);
    gallery.appendChild(item);
});

// Modal controls
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeModal");

// Open modal
function openModal(src) {
    modal.style.display = "flex";
    modalImg.src = src;
    document.body.style.overflow = "hidden"; // Prevent scroll behind modal
}

// Close modal (button or background click)
function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

closeBtn.onclick = closeModal;

// Close when clicking outside the image
modal.onclick = (event) => {
    if (event.target === modal) closeModal();
};

// Close with ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});
