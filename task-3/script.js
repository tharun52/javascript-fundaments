document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".gallery");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    for (let i = 1; i <= 9; i++) {
        let card = document.createElement("div");
        card.classList.add("card");

        let img = document.createElement("img");
        img.src = `../images/bcs${i}.jpg`;
        img.classList.add("thumbnail");
        img.alt = `Image ${i}`;

        card.appendChild(img);
        gallery.appendChild(card);

        img.addEventListener("click", () => {
            lightbox.classList.add("show");
            lightboxImg.src = img.src;
        });
    }

    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("show");
    });
});
