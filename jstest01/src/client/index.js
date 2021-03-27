
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

import { handleSubmit } from './js/formHandler'





const btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', handleSubmit, false);
btnSubmit.addEventListener( 'submit', handleSubmit, false);

