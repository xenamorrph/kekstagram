const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadPreview = uploadOverlay.querySelector('.img-upload__preview img');
const uploadScale = uploadOverlay.querySelector('.img-upload__scale');
const scaleSmallerElement = uploadScale.querySelector('.scale__control--smaller');
const scaleBiggerElement = uploadScale.querySelector('.scale__control--bigger');
const scaleInputElement = uploadScale.querySelector('.scale__control--value');

const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
};

let scaleValueCurrent = Scale.MAX;

// Функция рендера значения шкалы масштаба
const createFullValue = () => {
  let scaleValueTransform = scaleValueCurrent / 100;
  uploadPreview.style.transform = 'scale' + '(' + scaleValueTransform + ')';
  
  let fullScaleValue = scaleValueCurrent + '%';
  return fullScaleValue
}

scaleInputElement.value = createFullValue();

// Изменение масштаба по клику
scaleSmallerElement.addEventListener('click', () => {
  if (scaleValueCurrent >= Scale.MIN + Scale.STEP) {
    scaleValueCurrent -= Scale.STEP;
    scaleInputElement.value = createFullValue();
  }
})

scaleBiggerElement.addEventListener('click', () => {
  if (scaleValueCurrent < Scale.MAX) {
    scaleValueCurrent += Scale.STEP;
    scaleInputElement.value = createFullValue();
  }
})

export {scaleInputElement};