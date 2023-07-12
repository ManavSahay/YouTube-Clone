var sidebar = document.querySelector('.sidebar')
var menuIcon = document.querySelector('.menu-icon')


let hider = function() {
    sidebar.classList.toggle('sidebar-go')
}

menuIcon.addEventListener('click', hider)

