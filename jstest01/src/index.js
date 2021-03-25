
import { handleSubmit } from './client/js/formHandler'


const btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', handleSubmit, false);
btnSubmit.addEventListener( 'submit', handleSubmit, false);

