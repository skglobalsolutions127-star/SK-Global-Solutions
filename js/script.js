// ==========================
// SK Global Solutions
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    console.log("SK Global Solutions Loaded");

    // Smooth animation on page load
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "1";
    }, 100);

});

// Button hover effect
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });

});
