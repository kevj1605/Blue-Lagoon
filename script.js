// Show/hide navbar on scroll
let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById("navbar");
    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = `-${navbar.offsetHeight}px`;
    }
    prevScrollPos = currentScrollPos;

    // Show/hide scroll-up button
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.body.classList.add("scroll-up");
    } else {
        document.body.classList.remove("scroll-up");
    }
};

// Scroll to top function
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}