/**
 * Fonctions de travail
 */
function form_valid(evenement){
     if(email.validity.valueMissing) {
         evenement.preventDefault();
         email_manquant.textContent ='Email Maquant';
         email_manquant.style.color ='red';

     }else if (email_v.test(email.value) === false){
         event.preventDefault();
         email_manquant.textContent = 'Format incorrect'
         email_manquant.style.color = 'red'

     }
}
