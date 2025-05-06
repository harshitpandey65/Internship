
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }
});

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            let name = document.querySelector("#name").value.trim();
            let email = document.querySelector("#email").value.trim();
            let message = document.querySelector("#message").value.trim();
            let errorBox = document.querySelector(".error-message");

            if (name === "" || email === "" || message === "") {
                errorBox.innerText = "All fields are required!";
                errorBox.style.display = "block";
            } else {
                alert("Message Sent Successfully!");
                form.reset();
                errorBox.style.display = "none";
            }
        });
    }
});

// Image Slider (if homepage has a slider)
let slideIndex = 0;
function showSlides() {
    let slides = document.querySelectorAll(".slide");
    if (slides.length > 0) {
        slides.forEach(slide => slide.style.display = "none");
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }
}
showSlides();