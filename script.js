// =========================================================
// PORTFOLIO JAVASCRIPT
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    // ---------------------------------------------------------
    // Smooth Scrolling
    // ---------------------------------------------------------
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                e.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // ---------------------------------------------------------
    // Active Navigation Link on Scroll
    // ---------------------------------------------------------
    const sections = document.querySelectorAll("section[id]");
    const menuLinks = document.querySelectorAll("nav a[href^='#']");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        menuLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });
    });


    // ---------------------------------------------------------
    // Navbar Background on Scroll
    // ---------------------------------------------------------
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    // ---------------------------------------------------------
    // Resume Buttons
    // ---------------------------------------------------------
    const resumeButtons = document.querySelectorAll(".resume-btn");

    resumeButtons.forEach(button => {

        button.addEventListener("click", () => {

            // Change this file name to your actual resume file
            window.open("resume.pdf", "_blank");

        });

    });


    // ---------------------------------------------------------
    // View Projects Button
    // ---------------------------------------------------------
    const projectButton = document.querySelector(".view-projects");

    if (projectButton) {

        projectButton.addEventListener("click", () => {

            const projects = document.querySelector("#projects");

            if (projects) {
                projects.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    }


    // ---------------------------------------------------------
    // Contact Form
    // ---------------------------------------------------------
    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            // Basic email validation
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert(
                "Thank you, " +
                name +
                "! Your message has been received."
            );

            contactForm.reset();

        });

    }


    // ---------------------------------------------------------
    // Current Year
    // ---------------------------------------------------------
    const yearElement = document.querySelector("#currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // ---------------------------------------------------------
    // Mobile Menu
    // ---------------------------------------------------------
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("show");

            menuToggle.classList.toggle("active");

        });


        // Close mobile menu after clicking a link
        const mobileLinks = navMenu.querySelectorAll("a");

        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("show");
                menuToggle.classList.remove("active");

            });

        });

    }


    // ---------------------------------------------------------
    // Scroll Reveal Animation
    // ---------------------------------------------------------
    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    // ---------------------------------------------------------
    // Back To Top Button
    // ---------------------------------------------------------
    const backToTop =
        document.querySelector("#backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });


        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});