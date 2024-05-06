import './add-thumbnails.js';
import './effect.js';
import './filter.js';
import './on-thumbnail-click.js';
import './scale.js';
import './set-user-form.js';
import './upload-user-picture.js';
import './util.js';
import './validity.js';
import './load-image.js';


import { showAlert } from './util.js';
import { addThumbnailsDefault, addThumbnailsRandom, addThumbnailsDiscussed } from './add-thumbnails.js';
import { displayFilter, onfilterDefaultClick, onfilterRandomClick, onfilterDiscussedClick } from './filter.js';

// Получение данных с сервера https://28.javascript.htmlacademy.pro/kekstagram/data

const RERENDER_DELAY = 500;

fetch('https://28.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((posts) => {
    addThumbnailsDefault(posts);
    displayFilter();
    onfilterDefaultClick(_.debounce(() => addThumbnailsDefault(posts), RERENDER_DELAY));
    onfilterRandomClick(_.debounce(() => addThumbnailsRandom(posts), RERENDER_DELAY));
    onfilterDiscussedClick(_.debounce(() => addThumbnailsDiscussed(posts), RERENDER_DELAY));
  })
  .catch(() => {
    showAlert('Не удалось получить данные публикаций')
  })





// Код на случай, если сервер https://28.javascript.htmlacademy.pro/kekstagram/data не работает

// import {posts} from './create-posts.js';

// addThumbnailsDefault(posts);
// displayFilter();
// onfilterDefaultClick(_.debounce(() => addThumbnailsDefault(posts), RERENDER_DELAY));
// onfilterRandomClick(_.debounce(() => addThumbnailsRandom(posts), RERENDER_DELAY));
// onfilterDiscussedClick(_.debounce(() => addThumbnailsDiscussed(posts), RERENDER_DELAY));