export function initTheme () {
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

}