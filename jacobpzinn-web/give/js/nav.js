const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle')

console.log("working");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('data-visible', true);
    } else {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('data-visible', false)
    }
});