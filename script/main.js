(function () {


    // HTML SELECTORS
    const burgerMenu = document.querySelector(".burgerMenu .material-icons"),
        navMenu = document.querySelector(".navMenu"),
        darkOverlayBg = document.querySelector(".jsBodyOverlay"),
        phoneImage = document.querySelector(".main__article--img img");


    // Click Event Listener
    burgerMenu.addEventListener("click", menuOpen)

    // Function
    function menuOpen() {
        // When it is clicked at first
        phoneImage.style.opacity = 0;
        phoneImage.style.transition = "0.3s ease-in-out opacity";
        navMenu.classList.toggle("active");


        if (navMenu.classList.contains("active")) {
            //If nav is open,change the burger to x
            this.innerHTML = "close";
            darkOverlayBg.classList.add("active")
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
            return
        }
        //else,change it back to burger
        // When the modal is hidden...
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        phoneImage.style.opacity = 1;
        phoneImage.style.transition = "0.4s ease-out opacity";
        this.innerHTML = "menu"
        darkOverlayBg.classList.remove("active")
        return;
    }
})();
const allLinkk = document.querySelectorAll("a");

const body = document.querySelector("body");