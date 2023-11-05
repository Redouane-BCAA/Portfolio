export function initEmailJs () {
    /*********************** EMAIL JS *******************************/
    // récupération des données et element du form
    const contactForm = document.getElementById('contact_form');
    const contactNameInput = document.getElementById('contact_form_name');
    const contactEmailInput = document.getElementById('contact_form_email');
    const contactMessage = document.getElementById('contact_form_textarea');
    const validateMessage = document.getElementById('validate_message');
    
    // function pour envoyer l'email avec emailJS lors du submit
    function sendEmail (e) {
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
}