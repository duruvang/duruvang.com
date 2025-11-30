// Smooth scrolling for menu links
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Fade-in when sections appear
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section, .service-category").forEach(sec => {
    sec.classList.add("hidden");
    observer.observe(sec);
});

// Ripple effect on buttons
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
        let ripple = document.createElement("span");
        ripple.classList.add("ripple");

        const rect = this.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});


