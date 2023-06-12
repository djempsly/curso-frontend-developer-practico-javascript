const navBar = document.querySelector('.navbar-email')
const deskMenu = document.querySelector('.desktop-menu')


navBar.addEventListener('click', menuPequeño)

function menuPequeño(){
    
     deskMenu.classList.toggle('inactive')
}






