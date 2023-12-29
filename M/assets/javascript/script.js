

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.icone');
    const closeIcon = document.querySelector('.close_icone');
    const sidebarMenu = document.querySelector('.sidebar-menu');

    // Toggle sidebar 
    menuIcon.addEventListener('click', function() {
        sidebarMenu.classList.toggle('active');
    });

    // Quit sidebar 
    closeIcon.addEventListener('click', function() {
        sidebarMenu.classList.remove('active');
    }); 
    
});

//  // Bloquear scroll para cima
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll < lastScrollTop) {
    window.scrollTo(0, lastScrollTop);
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
}, false);



