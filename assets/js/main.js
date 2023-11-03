

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

/************************* SLIDER SWIPER PROJECTS ***************************/

// AFFICHAGE DES PROJET DYNAMIQUEMENT DEPUIS JSON

// On récupère les données depuis le fichier JSON
async function fetchProjectsData() {
  try {
    const response = await fetch('assets/data/projects.json');
    const data = await response.json();
    return data.projects;
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    return [];
    }
}
  
  // Fonction pour créer l'article HTML à partir des données JSON
  function createProjectElement(project) {
    const projectElement = document.createElement('article');
    projectElement.classList.add('projects_card', 'swiper-slide');
  
    projectElement.innerHTML = `
      <img class="projects_img" src="${project.imageSrc}" alt="${project.altText}">
      <div class="projects_card_text">
        <span class="projects_subtitle">${project.subtitle}</span>
        <h3 class="projects__title">${project.title}</h3>
        <div class="projects_evaluation">
          <div class="competance">
            <h3>Skills developed</h3>
            <span>${project.skillsDeveloped}</span>
          </div>
          <div class="difficulties">
            <h3>Difficulties</h3>
            <span>${project.difficulties}</span>
          </div>
        </div>
        <div class="projects_link_container">
          <a href="${project.githubRepo}" class="projects_link">
            Repo on GitHub <i class="ri-github-line"></i>
          </a>
          <a href="${project.onlineSite}" class="projects_link">
            Online site <i class="ri-window-line"></i>
          </a>
        </div>
      </div>
    `;
  
    return projectElement;
  }
  
  // Fonction pour créer et afficher les projets dans la section Projects
async function displayProjectsSection() {
    const projectList = document.getElementById('projectList');
    const projectsData = await fetchProjectsData();
  
    if (projectsData.length > 0) {
      projectsData.forEach((project) => {
        const projectElement = createProjectElement(project);
        projectList.appendChild(projectElement);
      });
      // Propriétés swiper pour le slide
      const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        },
        autoplay: { delay: 5000 },
        // mousewheel: true,
        keyboard:true,
        loop: true,
      });
    }
}

/*********************** EMAIL JS *******************************/
// récupération des données et element du form
const contactForm = document.getElementById('contact_form');
const contactNameInput = document.getElementById('contact_form_name');
const contactEmailInput = document.getElementById('contact_form_email');
const contactMessage = document.getElementById('contact_form_textarea');
const validateMessage = document.getElementById('validate_message');

// function pour envoyer l'email avec emailJS lors du submit
const sendEmail = (e) => {
  e.preventDefault();
  // On vérifie la valeur des inputs
  if (contactNameInput.value === '' || contactEmailInput.value === '' || contactMessage.value === '') {
    // si les inputs ne sont pas tous remplis on affiche un message à l'utilisateur
    validateMessage.classList.remove('validate_message');
    validateMessage.classList.add('error_message');
    validateMessage.textContent = '❌ Please complete all fields';
  }
  else{
    emailjs.sendForm('service_b81vh3s', 'template_ziny2rv', '#contact_form','qosgqokJ8UJJhQQqw')
    .then(()=>{
      // Après la réussite de l'envoi un affiche un message de validation à l'utilisateur
      console.log("SUCCESS");
      validateMessage.classList.add('validate_message');
      validateMessage.classList.remove('error_message');
      validateMessage.textContent = `✔ You're message have been send successfuly`
      
      // On met un timeout pour la disparition du message de validation 
      setTimeout( () => {
        validateMessage.textContent =''}, 5000)
    },
    (error) =>{
      alert('Something failed...', error)
    })
    // on vide champs input
    contactNameInput.value='';
    contactEmailInput.value='';
    contactMessage.value='';
  }
}
contactForm.addEventListener('submit', sendEmail);

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

/******************* SHOW SCROLL UP ************************/ 
const arrowUp = () =>{
  // on récupère l'élément arrowUp
  const showScrollUpBtn = document.getElementById("arrowUp");
  // si le déilement est sup ou = à 350 on affiche arrowUp 
  if(this.scrollY >= 350){
    showScrollUpBtn.classList.add('showArrowUp');
    }else{
      showScrollUpBtn.classList.remove('showArrowUp');
      }
}
window.addEventListener('scroll', arrowUp);

/************************ DARK LIGHT THEME ****************************/ 
// on sélectionne le btn et le body pour switch de theme
const themeBtn = document.getElementById('theme_btn');
const body = document.body;

// Fonction pour switch du dark/light mode
function switchTheme() {
  // on switch la classe CSS "dark-mode" sur le body
  body.classList.toggle('dark-mode');
  
  // on vérifie quel est le theme en cour et on le save
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');

    // on change l'icône en darkMode (sunIcon)
    themeBtn.classList.remove('ri-moon-line');
    themeBtn.classList.add('ri-sun-line');
  } else {
    localStorage.setItem('theme', 'light');

    // on change l'icône en lightMode  (moonIcon))
    themeBtn.classList.remove('ri-sun-line');
    themeBtn.classList.add('ri-moon-line');
  }
}
// evenlistener sur le theme_btn aevc la function pour changer le mode
themeBtn.addEventListener('click', switchTheme);

// Vérifiez le thème précédemment save (dark / light) et affecte de base au body
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');

  // Changez l'icône si le darkmode était save et remplacé par (sunIcon)
  themeBtn.classList.remove('ri-moon-line');
  themeBtn.classList.add('ri-sun-line');
}


/*********************** ADD BACKGROUND SHADOW ***************************/
const headerShadow = () =>{
  const header = document.getElementById("header");
  if(this.scrollY >= 50){
    header.classList.add('header_shadow');
    }else{
      header.classList.remove('header_shadow');
      }
}
window.addEventListener('scroll', headerShadow);


/********** SCROLL REVEAL ANIMATION **********/

ScrollReveal({ origin: 'top', distance: '60px', duration: 700, delay: 100, reset: true }).reveal(`.home_title, .home_picture, .home_social_link`);
ScrollReveal({ origin: 'bottom', distance: '60px', duration: 700, delay:200, reset: true }).reveal(`.home_description`);

ScrollReveal({ origin: 'right', distance: '60px', duration: 700, delay:100, reset: true, }).reveal('.skills_title, .skills_subtitle');
ScrollReveal({ origin: 'left', distance: '60px', duration: 700, delay:200, reset: true, }).reveal('.skills_list');

ScrollReveal({ origin: 'left', distance: '60px', duration: 700, delay:100, reset: true, }).reveal('.projects_title, .projects_subtitle');
ScrollReveal({ origin: 'right', distance: '60px', duration: 700, delay:200, reset: true, }).reveal('.projects_container');

ScrollReveal({ origin: 'right', distance: '60px', duration: 700, delay:100, reset: false, }).reveal('.contact_title, .contact_subtitle');
ScrollReveal({ origin: 'left', distance: '60px', duration: 700, delay:200, reset: true, }).reveal('.contact_container');

ScrollReveal({ origin: 'bottom', distance: '60px', duration: 700, delay:200, reset: true, }).reveal('.footer');

  // Appel de la fonction d'affichage final
  displayProjectsSection();