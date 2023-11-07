// Fonction pour initialiser la gestion du lien actif lors du défilement
export function initScrollActiveLink() {
    // On sélectionne tous les liens du menu
    const menuLinks = document.querySelectorAll('.nav_menu a');
  
    // Fonction pour gérer le défilement en cours
    const scrollActive = () => {
      // on récupère la position actuelle de la fenêtre par rapport au défilement
      const scrollY = window.pageYOffset;
  
      // on parcours tous les liens du menu
      menuLinks.forEach((menuLink) => {
        // Pour chaque lien on obtient l'ID de la section ciblée
        const targetId = menuLink.getAttribute('href').substring(1); 
  
        // on sélectionne la section correspondante
        const section = document.getElementById(targetId);
  
        if (section) {
          // on récupère la position de la section par rapport au haut de la page (avec un décalage de 60 pixels)
          const sectionTop = section.offsetTop - 60;
  
          // on vérifie si la fenêtre est dans la plage de la section actuelle
          if (scrollY >= sectionTop && scrollY < sectionTop + section.offsetHeight) {
            // Si oui, ajoute la classe "active_link" au lien de menu
            menuLink.classList.add('active_link');
          } else {
            // Sinon, on supprime la classe "active_link" du lien de menu
            menuLink.classList.remove('active_link');
          }
        }
      });
    };
  
    // Appelle scrollActive au chargement de la page et lors du défilement
    window.addEventListener('scroll', scrollActive);
    scrollActive();
  }
  