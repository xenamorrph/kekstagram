import {isEscEvent} from './util.js';

const body = document.querySelector('body');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successElement = successTemplate.cloneNode(true);
const successCloseButton = successElement.querySelector('.success__button')

// Функция отправки данных формы на сервер
const setUserForm = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
        addSuccessElement();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз')
    });
}

// Функция добавления сообщения в DOM об успешной отправке формы
const addSuccessElement = () => {
  body.insertAdjacentElement('beforeend', successElement);
}

// Функция закрытия сообщения об успешной отправке формы
const removeSuccessElement = () => {
  successElement.remove();
  
  window.removeEventListener('click', (evt) => {
    const target = evt.target
    if (!target.closest('.success__inner')) {
      removeSuccessElement();
    }
  })

  document.removeEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      removeSuccessElement();
    }
  });
}

successCloseButton.addEventListener('click', () => {
  removeSuccessElement();
}) 

// Обработчики событий

window.addEventListener('click', (evt) => {
  const target = evt.target
  if (!target.closest('.success__inner')) {
    removeSuccessElement();
  }
})

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    removeSuccessElement();
  }
});

export {setUserForm};