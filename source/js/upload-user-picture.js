import {isEscEvent, showAlert} from './util.js';
import {scaleInputElement} from './scale.js';
import {previewImg, effectLevelElement} from './effect.js';
import {hashtagsElement, commentElement} from './validity.js';
import {setUserForm} from './set-user-form.js';

const body = document.querySelector('body');
const uploadForm = body.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadButtonCancel = uploadForm.querySelector('.img-upload__cancel');
const uploadEffects = uploadForm.querySelector('.img-upload__effects');

// Сбрасываение настроек
const resetSettings = () => {
  uploadEffects.querySelector('#effect-none').checked = true;
  previewImg.className = '';
  previewImg.style.filter = '';
  previewImg.style = 'transform: scale(1.00)';
  scaleInputElement.value = '100%';
  effectLevelElement.classList.add('hidden');
  hashtagsElement.value = '';
  commentElement.value = '';
};

// Функции открытия и закрытия формы
const closeUploadOverlay = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadInput.value = '';
  document.removeEventListener('keydown', onOverlayEscKeydown);
} 

const onOverlayEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeUploadOverlay();
  }
};

const openUploadOverlay = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onOverlayEscKeydown);
}

uploadInput.addEventListener('click', () => {
  resetSettings();
  openUploadOverlay();
}) 

uploadButtonCancel.addEventListener('click', () => {
  closeUploadOverlay();
});

// Отправка данных формы на сервер
const setUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    setUserForm (
      () => onSuccess(),
      () => showAlert('Не удалось отправить форму. Попробуйте ещё раз'),
      new FormData(evt.target),
    )
  })
}

setUserFormSubmit(closeUploadOverlay);