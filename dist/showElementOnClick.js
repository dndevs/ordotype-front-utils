function o(){document.querySelectorAll('[x-ordo-utils="showElementOnClick"]').forEach(t=>{t.addEventListener("click",s=>{const e=t.getAttribute("data-element-to-show");if(!e){console.error("Missing data-element-to-show id attribute");return}const n=$(e);n?n.fadeIn():console.error(`Element ID "${e}" not found on the page`)})})}o();
