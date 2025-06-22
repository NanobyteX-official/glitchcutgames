document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger-button");
    const mobileNav = document.querySelector(".mobile-nav");
    const closeBtn = document.querySelector(".close-button");

    hamburger.addEventListener("click", () => {
        mobileNav.classList.add("show");
    });

    closeBtn.addEventListener("click", () => {
        mobileNav.classList.remove("show");
    });
});

//dropdown
document.addEventListener("DOMContentLoaded", () => {
    const gamesButton = document.querySelector(".games-button");
    const gamesDropdown = document.getElementById("gamesDropdownMenu");
    const arrow = document.querySelector(".arrow-down");
    const previewImage = document.getElementById("previewImage");

    let isOpen = false;

    gamesButton.addEventListener("click", () => {
        isOpen = !isOpen;
        gamesDropdown.classList.toggle("show", isOpen);
        arrow.innerHTML = isOpen ? "&#9652;" : "&#9662;";
        gamesButton.setAttribute("aria-expanded", isOpen);
    });

    const gameLinks = document.querySelectorAll(".game-link");
    gameLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            const imgSrc = link.getAttribute("data-image");
            previewImage.src = imgSrc;
            previewImage.style.opacity = 1;
        });

        link.addEventListener("mouseleave", () => {
            previewImage.src = "";
            previewImage.style.opacity = 0;
        });
    });

    document.addEventListener("click", (e) => {
        if(!gamesButton.contains(e.target) && !gamesDropdown.contains(e.target)) {
            gamesDropdown.classList.remove("show");
            arrow.innerHTML = "&#9662";
            gamesButton.setAttribute("aria-expanded", false);
            isOpen = false;
        }
    });
});

//scroll logic
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");

    window.addEventListener("scroll", () => {
        if(window.scrollY > 10) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cookieBtnOk = document.getElementById("cookieBtnOk");
    const cookieBtnCancel = document.getElementById("cookieBtnCancel");

    cookieBtnOk.addEventListener("click", () => {
        alert("Cookies have been enabled!");
    });

    cookieBtnCancel.addEventListener("click", () => {
        alert("Cookies have been cancelled!");
    });
});