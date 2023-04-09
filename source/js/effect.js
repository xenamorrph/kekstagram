import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const previewImg = document.querySelector('.img-upload__overlay .img-upload__preview img');
const effectRadioElements = document.querySelectorAll('.effects__radio');
const effectLevelElement = document.querySelector('.img-upload__effect-level');
const effectValueElement = effectLevelElement.querySelector('.effect-level__value');
const effectSliderElement = effectLevelElement.querySelector('.effect-level__slider');

// Создание слайдера
noUiSlider.create(effectSliderElement, {
  range: {
    'min': 0,
    'max': 100, 
  },
  start: 50,
  step: 1,
  connect: 'lower',
});

let effectStyleName = '';
let effectStyleMark = '';

// Функция регулировки силы эффекта 
const changeLevelEffect = () => {
  effectSliderElement.noUiSlider.on('update', (values, handle) => {
    effectValueElement.value = values[handle];
    effectLevelElement.classList.remove('hidden');
    previewImg.style.filter = effectStyleName + '(' + effectValueElement.value + effectStyleMark + ')';
  })}

// Наложение фильтра по клику
effectRadioElements.forEach((element) => {
  element.addEventListener('change', (evt) => {
    previewImg.className = '';
    previewImg.classList.add('effects__preview--' + evt.target.value);
    
    if (previewImg.matches('.effects__preview--none')) {
      effectLevelElement.classList.add('hidden');
      previewImg.style.filter = '';
    }

    if (previewImg.matches('.effects__preview--chrome')) {
      effectSliderElement.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 1,
        },
        start: 1,
        step: 0.1,
      });
      effectStyleName = 'grayscale';
      effectStyleMark = '';
      changeLevelEffect();
    }

    if (previewImg.matches('.effects__preview--sepia')) {
      effectSliderElement.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 1,
        },
        start: 1,
        step: 0.1,
      });
      effectStyleName = 'sepia';
      effectStyleMark = '';
      changeLevelEffect();
    }

    if (previewImg.matches('.effects__preview--marvin')) {
      effectSliderElement.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 100,
        },
        start: 100,
        step: 1,
      });
      effectStyleName = 'invert';
      effectStyleMark = '%';
      changeLevelEffect();
    }

    if (previewImg.matches('.effects__preview--phobos')) {
      effectSliderElement.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 3,
        },
        start: 3,
        step: 0.1,
      });
      effectStyleName = 'blur';
      effectStyleMark = 'px';
      changeLevelEffect();
    }

    if (previewImg.matches('.effects__preview--heat')) {
      effectSliderElement.noUiSlider.updateOptions({
        range: {
          'min': 1,
          'max': 3,
        },
        start: 3,
        step: 0.1,
      });
      effectStyleName = 'brightness';
      effectStyleMark = '';
      changeLevelEffect();
    }
  })
})

export {previewImg, effectLevelElement};