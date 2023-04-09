const ALERT_SHOW_TIME = 5000;

// Функция вызова случайного числа
const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min >= max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция вызова случайного уникального числа
const makeUniqueRandomIntegerGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = _.random(min, max);
    if (previousValues.length >= (max - min + 1)) {
      throw new Error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = _.random(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

// Проверка длины комментария
const getCommentLength = (comment, maxLength) => {
  return comment.length <= maxLength;
};

// Проверка нажатой клавиши
const Keys = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
}

const isEscEvent = (evt) => {
  return (evt.key === Keys.ESC || evt.key === Keys.ESCAPE)
};

// Окно с ошибкой
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

export {makeUniqueRandomIntegerGenerator, getRandomIntInclusive, getCommentLength, isEscEvent, showAlert};