// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import { onGetPhotoByText } from './js/pixabay-api';

const InputQuery = document.querySelector('.input-query');
const btnSbm = document.querySelector('#btn-submit');

btnSbm.addEventListener('click', onCreateMarckup);

function onCreateMarckup(evt) {
  evt.preventDefault();
  console.log('InputQuery.value- ', InputQuery.value.replace(/\s+/g, '+'));
  onGetPhotoByText('InputQuery.value')
    .then(data => console.log(data))
    .catch(err => console.log(console.error(err)));
}
