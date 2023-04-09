import {isEscEvent} from './util.js';

const body = document.querySelector('body');
const bigPicture =  document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCounter = bigPicture.querySelector('.social__comment-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsList = bigPicture.querySelector('.social__comments');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentsTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsDescription = bigPicture.querySelector('.social__caption');
const buttonCloseBigPicture = bigPicture.querySelector('.big-picture__cancel');

// Обработчик клика по миниатюрам
const onThumbnailClick = (posts) => {
  let thumbnailElements = document.querySelectorAll('.picture');
  for (let i = 0; i <  thumbnailElements.length; i++) {
    thumbnailElements[i].addEventListener('click', () => 
      openBigPicture(posts[i]))
  }
}

// Функция открытия большого фото
const openBigPicture = (post) => {
  bigPicture.classList.remove('hidden');
  commentsCounter.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
  renderBigPicture(post);

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
      commentsList.innerHTML = '';
    }
  });
}

// Функция рендера большой фотографии в DOM 
const renderBigPicture = (post) => {
  bigPictureImg.src =  post.url;
  bigPictureImg.alt = 'Фотография пользователя в крупном размере';
  likesCount.textContent = post.likes;
  commentsCount.textContent = post.comments.length;
  commentsDescription.textContent = post.description;
  renderComments(post);
};
// const DISPLAYED_COMMENTS_STEP = 5;
    
// Функция рендера комментариев к большому фото
const renderComments = (post) => {
  const postsCommentsArray = post.comments;
  const commentsListFragment = document.createDocumentFragment();
  for (let i = 0; i < postsCommentsArray.length; i++) {
    const commentsItem = commentsTemplate.cloneNode(true);
    commentsItem.querySelector('.social__picture').src = postsCommentsArray[i].avatar;
    commentsItem.querySelector('.social__picture').alt = postsCommentsArray[i].name;
    commentsItem.querySelector('.social__text').textContent = postsCommentsArray[i].message;
    commentsListFragment.appendChild(commentsItem);
  }
  //console.log(commentsListFragment.querySelector('#comment').content)
  commentsList.appendChild(commentsListFragment);
};

// Функция закрытия большого фото
const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  commentsList.innerHTML = '';

  document.removeEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
      commentsList.innerHTML = '';
    }
  });
}

// Обработчик клика по кнопке закрытия
buttonCloseBigPicture.addEventListener('click', () => {
  closeBigPicture();
})

export {onThumbnailClick};