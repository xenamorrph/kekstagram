const textElement = document.querySelector('.img-upload__text');
const hashtagsElement = textElement.querySelector('.text__hashtags');
const commentElement = textElement.querySelector('.text__description');

const  HashtagsLength = {
  MAX: 20,
  MIN: 2,
};

const CommmentLength = {
  MAX: 140,
}

// Валидация длины комментария 
commentElement.addEventListener('input', () => {
  let commentText = commentElement.value;
  if (commentText.length > CommmentLength.MAX) {
    commentElement.setCustomValidity('Максимум 140 символов');
  }
  else {commentElement.setCustomValidity('');}
  commentElement.reportValidity();
})

// Валидация хэш-тегов
const allowedCharacter = /[^A-Z a-z # а-я А-Я ё Ё 0-9]/

hashtagsElement.addEventListener('input', () => {
  let hashtagsArray = hashtagsElement.value.toLowerCase().trim().split(/\s+/);
  if (hashtagsArray.length > 5) {
    hashtagsElement.setCustomValidity('Нельзя указать больше пяти хэш-тегов;');
  } else if (hashtagsArray.some((val, i) => hashtagsArray.indexOf(val) !== i)) {
    hashtagsElement.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
  } else {
    for (let i = 0; i < hashtagsArray.length; i++) {
      let hashtag = hashtagsArray[i];
      if (hashtag[0] !== '#') {
        hashtagsElement.setCustomValidity('Хэш-тег должен начинается с символа # (решётка)');
      } else if (hashtag.length > HashtagsLength.MAX) {
        hashtagsElement.setCustomValidity('Максимальная длина одного хэш-тега 20 символов, включая решётку');
      } else if (hashtag.length < HashtagsLength.MIN) { 
        hashtagsElement.setCustomValidity('Минимальная длина одного хэш-тега 2 символов, включая решётку');
      } else if (hashtag.indexOf('#', 1) >= 1) {
        hashtagsElement.setCustomValidity('Хэш-теги разделяются пробелами');
      } else if (allowedCharacter.test(hashtag)) {
        hashtagsElement.setCustomValidity('Текст хэш-тега может состоять только из букв и чисел и не может содержать пробелы, спецсимволы, эмодзи и т.д.');
      } else { hashtagsElement.setCustomValidity('')}
    }
  }
  hashtagsElement.reportValidity();
});

// Отмена закрытия окна при нажатии ESC в фокусе 

const onEscapeDown = (evt) => {
  if (evt.key === ('Escape' || 'Esc')) {
    evt.preventDefault();
    evt.stopPropagation();
  }
}

hashtagsElement.addEventListener('keydown', onEscapeDown)
commentElement.addEventListener('keydown', onEscapeDown)

export {hashtagsElement, commentElement};