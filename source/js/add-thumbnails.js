import {onThumbnailClick} from './on-thumbnail-click.js';

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailsListFragment = document.createDocumentFragment();
const thumbnailsList =  document.querySelector('.pictures');

// Функция создания элемента миниатюры на основе шаблона
const renderThumbnail = (post) => {
  const thumbnailItem = thumbnailTemplate.cloneNode(true);
  thumbnailItem.querySelector('.picture__img').src = post.url;
  thumbnailItem.querySelector('.picture__likes').textContent = post.likes;
  thumbnailItem.querySelector('.picture__comments').textContent = post.comments.length;
  thumbnailsListFragment.appendChild(thumbnailItem);
}

// Функция очистки миниатюр из DOM
const removeThumbnailsList = () => {
  let thumbnailElements = thumbnailsList.querySelectorAll('.picture');
  for (let i = thumbnailElements.length; i--;) {
    thumbnailElements[i].parentNode.removeChild(thumbnailElements[i]);
  }
};

// Функция добавления миниатюр в DOM "По умолчанию"
const addThumbnailsDefault = (postsDefaultArr) => {
  removeThumbnailsList();
  for (let i = 0; i < postsDefaultArr.length; i++) {
    renderThumbnail(postsDefaultArr[i]);
  }
  thumbnailsList.appendChild(thumbnailsListFragment);
  onThumbnailClick(postsDefaultArr);
}

// Функция добавления миниатюр в DOM "Случайно"
const getShuffleArr = (postsDefaultArr)  => {
  removeThumbnailsList();
  for (let i = postsDefaultArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [postsDefaultArr[i], postsDefaultArr[j]] = [postsDefaultArr[j], postsDefaultArr[i]];
  }
  return postsDefaultArr;
}

const addThumbnailsRandom = (postsDefaultArr) => {
  removeThumbnailsList();
  const postsRandomArr =  getShuffleArr(postsDefaultArr.slice());
  for (let i = 0; i < postsRandomArr.length; i++) {
    renderThumbnail(postsRandomArr[i]);
  }
  thumbnailsList.appendChild(thumbnailsListFragment);
  onThumbnailClick(postsRandomArr);
}

// Функция добавления миниатюр в DOM "Обсуждаемые"
const addThumbnailsDiscussed = (postsDefaultArr) => {
  removeThumbnailsList();
  const postsSortArr = postsDefaultArr.slice().sort((a, b) => b.comments.length - a.comments.length);
  for (let i = 0; i < postsSortArr.length; i++) {
    renderThumbnail(postsSortArr[i]);
  }
  thumbnailsList.appendChild(thumbnailsListFragment);
  onThumbnailClick(postsSortArr);
}

export {addThumbnailsDefault, addThumbnailsRandom, addThumbnailsDiscussed};