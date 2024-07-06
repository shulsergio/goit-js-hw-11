// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import { onGetPhotoByText } from './js/pixabay-api';

const formElements = document.querySelector('.form-input');

onGetPhotoByText('black+car')
  .then(data => console.log(data))
  .catch(err => console.error('err', err));
