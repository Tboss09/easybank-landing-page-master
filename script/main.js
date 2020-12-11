(function () {


    // HTML SELECTORS
    const burgerMenu = document.querySelector(".burgerMenu .material-icons"),
        navMenu = document.querySelector(".navMenu"),
        darkOverlayBg = document.querySelector(".jsBodyOverlay"), phoneImage = document.querySelector(".main__article--img img");


    // Click Event Listener
    burgerMenu.addEventListener("click", menuOpen)

    // Function
    function menuOpen() {
        phoneImage.style.opacity = 0;
        phoneImage.style.transition = "0.3s ease-in-out opacity";
        console.log(phoneImage);
        navMenu.classList.toggle("active");
        if (navMenu.classList.contains("active")) {
            this.innerHTML = "close";
            darkOverlayBg.classList.add("active")
            return
        }
        phoneImage.style.opacity = 1;
        phoneImage.style.transition = "0.4s ease-out opacity";
        this.innerHTML = "menu"
        darkOverlayBg.classList.remove("active")
        return;
    }
})();