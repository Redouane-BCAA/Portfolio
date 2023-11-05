export function initNavMenu () {

    /***************************  NAV MENU ******************************/
    
    /********** dislay/hide menu mobile screen **********/
    const navMenu = document.getElementById('nav_menu')
    const navBurgerBtn = document.getElementById('nav_burger')
    const navCloseBtn = document.getElementById('nav_close')
    
    // on vérifie la présence du button pour l'affichage
    if(navBurgerBtn){
        navBurgerBtn.addEventListener('click', () => {
            navMenu.classList.add('display_menu')
        })
    }
    // on vérifie la présence du buttonClose pour fermer le menu
    if (navCloseBtn) {
        navCloseBtn.addEventListener('click', () => {
            navMenu.classList.remove('display_menu')
        })
    }
    
    // Deuxième cas de fermeture du menu au click sur les liens
    
    const navLink = document.querySelectorAll('.nav_link')
    
    navLink.forEach(btn => btn.addEventListener('click', () =>{
        navMenu.classList.remove('display_menu')
    }))

    const headerShadow = () =>{
        const header = document.getElementById("header");
        if(window.scrollY >= 50){
          header.classList.add('shadow');
          }else{
            header.classList.remove('shadow');
            }
      
      }
      window.addEventListener('scroll', headerShadow);
}
initNavMenu()