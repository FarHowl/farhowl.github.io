document.getElementById("menu-hamburger").addEventListener("click", () => {
    let element = document.getElementById("m-menu");
    let bg_blur = document.getElementById("bg-blur")
    if (isMobileMenuOpen === false) {
        isMobileMenuOpen = true;
        bg_blur.classList.add("blur-sm")
        bg_blur.classList.add("pointer-events-none")
        element.classList.add("opened-hamburger-menu")
        element.classList.remove("closed-hamburger-menu")
    } else {
        bg_blur.classList.remove("blur-sm")
        bg_blur.classList.remove("pointer-events-none")
        element.classList.add("closed-hamburger-menu")
        element.classList.remove("opened-hamburger-menu")
        isMobileMenuOpen = false;
    }
});
let isMobileMenuOpen = false;