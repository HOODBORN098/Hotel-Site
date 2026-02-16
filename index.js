// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                menuBtnIcon.setAttribute('class', 'ri-menu-line');
            }
        }
    });
});

// Navbar scroll effect
let scrollTimeout;
window.addEventListener('scroll', function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, 50);
});

// Scroll to top functionality
const topButton = document.getElementById('to-top');

topButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide scroll to top button
function showScroll() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.classList.add('show');
    } else {
        topButton.classList.remove('show');
    }
}

window.addEventListener('scroll', showScroll);

// Mobile menu toggle
const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav_links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Product Modal Logic
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("productModal");
    const closeBtn = document.getElementById("closeModal");
    const productCards = document.querySelectorAll(".menu-items .box");

    if (modal && productCards.length > 0) {
        productCards.forEach(card => {
            card.addEventListener("click", (e) => {
                // Prevent trigger if they click the order button directly
                if (e.target.classList.contains('btn')) return;

                const title = card.querySelector("h4").innerText;
                const price = card.querySelector(".btn").innerText.split("- ")[1] || "Price on Request";
                const img = card.querySelector("img").src;
                const desc = card.getAttribute("data-description") || "No description available.";
                const ingredients = card.getAttribute("data-ingredients") ? card.getAttribute("data-ingredients").split(",") : [];
                const waLink = card.querySelector("a.btn").href;

                document.getElementById("modalTitle").innerText = title;
                document.getElementById("modalPrice").innerText = price;
                document.getElementById("modalImg").src = img;
                document.getElementById("modalImg").alt = title;
                document.getElementById("modalDesc").innerText = desc;
                document.getElementById("modalOrderBtn").href = waLink;

                const ingredientsList = document.getElementById("modalIngredients");
                ingredientsList.innerHTML = "";
                ingredients.forEach(item => {
                    const li = document.createElement("li");
                    li.innerText = item.trim();
                    ingredientsList.appendChild(li);
                });

                modal.classList.add("active");
                document.body.style.overflow = "hidden"; // Prevent background scroll
            });
        });

        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
            document.body.style.overflow = "";
        });

        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
                document.body.style.overflow = "";
            }
        });
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        menuBtnIcon.setAttribute('class', 'ri-menu-line');
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showScroll();
});