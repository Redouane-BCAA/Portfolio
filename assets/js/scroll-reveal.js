export function initScrollReveal (){
    /********** SCROLL REVEAL ANIMATION **********/

    ScrollReveal({ origin: 'top', distance: '60px', duration: 700, delay: 100, reset: false }).reveal(`.home_title, .home_picture, .home_social_link`);
    ScrollReveal({ origin: 'bottom', distance: '60px', duration: 700, delay:200, reset: false }).reveal(`.home_description`);

    ScrollReveal({ origin: 'right', distance: '60px', duration: 700, delay:100, reset: false, }).reveal('.skills_title, .skills_subtitle');
    ScrollReveal({ origin: 'left', distance: '60px', duration: 700, delay:200, reset: false, }).reveal('.skills_list');

    ScrollReveal({ origin: 'left', distance: '60px', duration: 1000, delay:100, reset: false, }).reveal('.projects_title, .projects_subtitle');
    ScrollReveal({ origin: 'right', distance: '60px', duration: 1000, delay:200, reset: false, }).reveal('.projects_container');

    ScrollReveal({ origin: 'right', distance: '60px', duration: 700, delay:100, reset: false, }).reveal('.contact_title, .contact_subtitle');
    ScrollReveal({ origin: 'left', distance: '60px', duration: 700, delay:200, reset: false, }).reveal('.contact_container');

    ScrollReveal({ origin: 'bottom', distance: '60px', duration: 700, delay:200, reset: false, }).reveal('.footer');
}