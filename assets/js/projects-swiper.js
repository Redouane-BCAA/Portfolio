export function initProjects () {
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
    const projectElement = document.createElement("article");
    projectElement.classList.add("projects_card", "swiper-slide");
    
    projectElement.innerHTML = `
        <img class="projects_img shadow" src="${project.imgSrc}" alt="projet 1">
        <div class="projects_card_text">
            <h3 class="projects__title">${project.title}</h3>
            <div class="techno_container">
                ${project.technologies.map(techno => `<span class="projects_subtitle" id="span_techno">${techno}</span>`).join('')}
            </div>
            <div class="projects_evaluation">
                <div class="projects_description">
                    <h3>Description</h3>
                    <p>${project.description}</p>
                </div>
                <div class="projects_competences">
                    <h3>Acquired skills</h3>
                    <ul>
                        ${project.competences.map(competence => `<li>${competence}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="projects_link_container">
                <a href="${project.githubLink}" class="projects_link">
                    ➡ Repo on GitHub <i class="ri-github-line"></i>
                </a>
            </div>
        </div>
    `;
    
    return projectElement;
    }
        
        // Fonction pour créer et afficher les projets dans la section Projects +(propriété swipperJS)
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
                spaceBetween: 100,
            },
            },
            autoplay: { delay: 8000 },
            mousewheel: false,
            keyboard:true,
            loop: true,
        });
        }
    }
    displayProjectsSection();

}