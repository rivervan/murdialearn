
import './client/styles/resets.scss'
import './client/styles/base.scss'
import './client/styles/footer.scss'
import './client/styles/form.scss'
import './client/styles/header.scss'

import { handleSubmit } from './client/js/formHandler'





const btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', handleSubmit, false);
btnSubmit.addEventListener( 'submit', handleSubmit, false);

