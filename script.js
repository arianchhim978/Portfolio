
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var header = document.querySelector("header");
        
        if (window.scrollY > 0) {
            header.style.backgroundColor = "#555"; // Change background color on scroll
        } else {
            header.style.backgroundColor = "#333"; // Change back to original color when at the top
        }
    });
});
