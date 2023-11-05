export function initScrollActiveLink () {
    /****************** SCROLL SECTIONS ACTIVE LINK ******************/

    // On sélectionne toutes les sections avec un attribut "id"
    const sections = document.querySelectorAll('.section[id]');

    // Fonction pour gérer le défilement en cours
    const scrollActive = () => {
    // récupère la position actuelle de la fenêtre par rapport au défilement
    const scrollY = window.pageYOffset;

    // pour chaque section
    sections.forEach((currentSection) => {
        // on récupère la hauteur de la section
        const sectionHeight = currentSection.offsetHeight;

        // on récupère l'ID de la section
        const sectionId = currentSection.getAttribute('id');

        // on récupère la position de la section par rapport au haut de la page (avec un décalage de 60 pixels)
        const sectionTop = currentSection.offsetTop - 60;

        // on sélectionne le lien de menu correspondant à la section en cours de traitement
        const sectionClass = document.querySelector('.nav_menu a[href="#' + sectionId + '"]');

        // on vérifie si la fenêtre est dans la plage de la section actuelle
        if (scrollY > sectionTop && scrollY <+ sectionTop + sectionHeight) {
        // Si oui, on ajoute la classe "active" au lien de menu
        sectionClass.classList.add('active_link');
        } else {
        // Sinon,on supprime la classe "active" du lien de menu
        sectionClass.classList.remove('active_link');
        }
    });
    };

    // addevenlistener sur la fenêtre et on appel scrollActive
    window.addEventListener('scroll', scrollActive);
}