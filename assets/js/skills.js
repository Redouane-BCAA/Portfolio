
// Function pour récupérer et créer les items skills dynamiquement
export function initSkills(){
    async function fetchSkillsData() {
        try {
          const response = await fetch('assets/data/skills.json');
          const data = await response.json();
          return data.skills;
        } catch (error) {
          console.error('Erreur lors de la récupération des données :', error);
          return [];
        }
    }

    async function displaySkills() {
          const skillsList = document.getElementById("skillsList");
          const skills = await fetchSkillsData();
        
          skills.forEach(skill => {
            const skillItem = document.createElement("div");
            skillItem.classList.add("skills_item");
        
            const skillIcon = document.createElement("div");
            skillIcon.classList.add("skills_icon");
            const img = document.createElement("img");
            img.setAttribute("src", skill.image);
            img.setAttribute("alt", skill.name + " logo");
            skillIcon.appendChild(img);
        
            const skillName = document.createElement("h3");
            skillName.classList.add("skills_name");
            skillName.textContent = skill.name;
        
            skillItem.appendChild(skillIcon);
            skillItem.appendChild(skillName);
            skillsList.appendChild(skillItem);
          });
        }
       
        displaySkills();
}

  