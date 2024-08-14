'use strict';

function showOnScroll() {
    const element = document.querySelector('[x-ordo-utils="showOnScroll"]')
    const offset = element.dataset.scrollOffset ?? 0
    const elementPos = element.getBoundingClientRect()

    function handleScroll() {
        const currentScrollPos = window.scrollY || document.documentElement.scrollTop;
        if (currentScrollPos < elementPos.top - offset) {
            element.style.visibility = 'hidden'
        } else {
            element.style.visibility = 'visible'
        }
    }

    document.addEventListener('scroll', handleScroll);
}

showOnScroll()