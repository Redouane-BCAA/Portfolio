export function initScrollUp () {
    /******************* SHOW SCROLL UP ************************/ 
    const arrowUp = () =>{
        // on récupère l'élément arrowUp
        const showScrollUpBtn = document.getElementById("arrowUp");
        // si le déilement est sup ou = à 350 on affiche arrowUp 
        if(window.scrollY >= 350){
        showScrollUpBtn.classList.add('showArrowUp');
        }else{
            showScrollUpBtn.classList.remove('showArrowUp');
            }
    }
    window.addEventListener('scroll', arrowUp);
}