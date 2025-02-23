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
        
            const projectImg = document.createElement("img");
            projectImg.classList.add("projects_img", "shadow");
            projectImg.src = project.imgSrc;
            projectImg.alt = `Image du projet ${project.title}`;
        
            const cardText = document.createElement("div");
            cardText.classList.add("projects_card_text");
        
            const title = document.createElement("h3");
            title.classList.add("projects__title");
            title.textContent = project.title;
        
            const technoContainer = document.createElement("div");
            technoContainer.classList.add("techno_container");
            for (const techno of project.technologies) {
                const span = document.createElement("span");
                span.classList.add("projects_subtitle");
                span.textContent = techno;
                technoContainer.appendChild(span);
            }
        
            const descriptionContainer = document.createElement("div");
            descriptionContainer.classList.add("projects_evaluation");
        
            const description = document.createElement("div");
            description.classList.add("projects_description");
            const descTitle = document.createElement("h3");
            descTitle.textContent = "Description";
            const descText = document.createElement("p");
            descText.textContent = project.description;
            description.appendChild(descTitle);
            description.appendChild(descText);
        
            const skillsContainer = document.createElement("div");
            skillsContainer.classList.add("projects_competences");
            const skillsTitle = document.createElement("h3");
            skillsTitle.textContent = "Acquired skills";
            const skillsList = document.createElement("ul");
            for (const competence of project.competences) {
                const li = document.createElement("li");
                li.textContent = competence;
                skillsList.appendChild(li);
            }
            skillsContainer.appendChild(skillsTitle);
            skillsContainer.appendChild(skillsList);
        
            descriptionContainer.appendChild(description);
            descriptionContainer.appendChild(skillsContainer);
        
            const linksContainer = document.createElement("div");
            linksContainer.classList.add("projects_link_container");
        
            // Lien GitHub
            const githubLink = document.createElement("a");
            githubLink.href = project.githubLink;
            githubLink.classList.add("projects_link");
            githubLink.innerHTML = '➡ Repo on GitHub <i class="ri-github-line"></i>';
            linksContainer.appendChild(githubLink);
        
            // Lien vers la démo (uniquement s’il existe)
            if (project.demoLink) {
                const demoLink = document.createElement("a");
                demoLink.href = project.demoLink;
                demoLink.classList.add("projects_link");
                demoLink.innerHTML = '➡ Demo <i class="ri-external-link-line"></i>';
                linksContainer.appendChild(demoLink);
            }
        
            cardText.appendChild(title);
            cardText.appendChild(technoContainer);
            cardText.appendChild(descriptionContainer);
            cardText.appendChild(linksContainer);
        
            projectElement.appendChild(projectImg);
            projectElement.appendChild(cardText);
        
            return projectElement;
        }
        
        
        // Fonction pour créer et afficher les projets dans la section Projects +(propriété swipperJS)
    async function displayProjectsSection() {
        const projectList = document.getElementById('projectList');
        const projectsData = await fetchProjectsData();
    
        if (projectsData.length > 0) {
        for (const project of projectsData) {
            const projectElement = createProjectElement(project);
            projectList.appendChild(projectElement);
        }
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
    }}
    displayProjectsSection();

}