// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const formElements = document.querySelector('.form-input');

const API_KEY = '36975970-2726c7257b1c2078714098d3d';

export function onGetPhotoByText(query) {
  return fetch(`https://pixabay.com/api?key=${API_KEY}&q=${query}`).then(
    res => {
      console.log('res ', res);
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    }
  );
}

onGetPhotoByText('black+car')
  .then(data => console.log(data))
  .catch(err => console.error('err', err));
