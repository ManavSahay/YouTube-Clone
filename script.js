var menuIcon = document.querySelector('.menu-icon');
var sidebar = document.querySelector('.sidebar');
var container = document.querySelector('.container');

let hider = function() {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}

menuIcon.addEventListener('click', hider);
