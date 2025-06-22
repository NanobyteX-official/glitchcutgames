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

//who we are logic
const coreData = {
    innovation: {
        image: 'assets/glitchut-images/finding-your-passion.png',
        title: 'WE ARE INNOVATIVE',
        description: 'We constantly explore new ideas, redefine standards, push boundaries to shape the future of gaming.'
    },

    integrity: {
        image: 'assets/glitchcut-images/the-future-of-ai-in-tech.png',
        title: 'WE PROCEED WITH <span class="value-info">INTEGRITY</span>',
        description: 'We do what is right, always. Trust and honesty define who we really are.'
    },

    collaboration: {
        image: 'assets/glitchcut-images/the-future-of-ai-in-tech2.png',
        title: 'WE <span class="value-info">COLLABORATE</span> WITH EASE',
        description: 'We work together, win together, and grow together.'
    },

    excellence: {
        image: 'assets/glitchcut-images/finding-your-passion.png',
        title: 'WE TARGET <span class="value-info">EXCELLENCE</span> IN EVERYTHING',
        description: 'Mediocrity is our nemesis. We strive for greatness in every pixel.'
    },

    community: {
        image: 'assets/glitchcut-images/why-responsive-design-matters.png',
        title: 'WE LOVE OUR <span class="value-info">COMMUNITY</span>',
        description: 'Players are at the heart of what we do. We listen, connect, and build for them.'
    }
};

function animateFadeIn(element, newHTML, isHTML = true) {
    element.classList.remove('fade-in');
    element.style.opacity = '0';

    setTimeout(() => {
        if(isHTML){
            element.innerHTML = newHTML;
        }
        else {
            element.textContent = newHTML;
        }
        element.classList.add('fade-in');
    }, 10);
}

const tabs = document.querySelectorAll('.core-tab');
const image = document.getElementById('coreValueImage');
const title = document.getElementById('coreValueTitle');
const description = document.getElementById('coreValueDescription');
const label = document.getElementById('coreLabel');

document.querySelectorAll('.core-tab').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if(value === 'innovation') {
            window.location.reload();
            return;
        }

        image.classList.remove('fade-in');
        image.style.opacity = '0';
        setTimeout(() => {
            image.src = coreData[value].image;
            image.classList.add('fade-in');
        }, 10);

        animateFadeIn(title, coreData[value].title, true);
        animateFadeIn(description, coreData[value].description, false);
        animateFadeIn(label, 'CORE VALUES', false);

        tabs.forEach(tab => {
            tab.classList.remove('active');
            button.classList.add('active');
        });

        document.getElementById('coreValueImage').src = coreData[value].image;
        document.getElementById('coreValueTitle').innerHTML = coreData[value].title;
        document.getElementById('coreValueDescription').textContent = coreData[value].description;

        document.querySelectorAll('.core-tab').forEach(tab => tab.classList.remove('active'));
        button.classList.add('active');
   });
});

const tabWrapper = document.querySelector('.core-values-tabs-wrapper');
let isDown = false;
let startX;
let scrollLeft;

tabWrapper.addEventListener('mousedown', (e) => {
    isDown = true;
    tabWrapper.classList.add('dragging');
    startX = e.pageX - tabWrapper.offsetLeft;
    scrollLeft = tabWrapper.scrollLeft;
});

tabWrapper.addEventListener('mouseleave', () => {
    isDown = false;
    tabWrapper.classList.remove('dragging');
});

tabWrapper.addEventListener('mouseup', () => {
    isDown = false;
    tabWrapper.classList.remove('dragging');
});

tabWrapper.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - tabWrapper.offsetLeft;
    const walk = (x - startX) * 2;
    tabWrapper.scrollLeft = scrollLeft - walk;
});

document.getElementById('scrollRight').addEventListener('click', () => {
    tabWrapper.scrollBy({ left: 150, behavior: 'smooth' });
});

document.getElementById('scrollLeft').addEventListener('click', () => {
    tabWrapper.scrollBy({ left: -150, behavior: 'smooth' });
});