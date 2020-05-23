/**
 * Code de gestion du formulaire
 */
let valider = document.getElementById('valider')
let email = document.getElementById('email');
let email_manquant = document.getElementById('email_manquant');
valider.addEventlistener('click', form_valid);
let email_v = /^ [a-zA-Z] [a-z]+[@]+[.com]/