// Функция переключения фильтра

const filterElement = document.querySelector('.img-filters');
const filterButtons = filterElement.querySelectorAll('.img-filters__button');

const filterButtonDefault = filterElement.querySelector('#filter-default');
const filterButtonRandom = filterElement.querySelector('#filter-random');
const filterButtonDiscussed = filterElement.querySelector('#filter-discussed');

// Функция отображения фильтра
const displayFilter = () => {
  filterElement.classList.remove('img-filters--inactive');
}

// Функция удаления класса
const activeClassRemove = () => {
  filterButtons.forEach((element) => {
    element.classList.remove('img-filters__button--active');
  })
}


// export {displayFilter, toggleFilter}
export {displayFilter, onfilterDefaultClick, onfilterRandomClick, onfilterDiscussedClick}

const onfilterDefaultClick = (cb) => {
  filterButtonDefault.addEventListener('click', (evt) => {
    activeClassRemove();
    evt.target.classList.add('img-filters__button--active');
    cb();
  })
}

const onfilterRandomClick = (cb) => {
  filterButtonRandom.addEventListener('click', (evt) => {
    activeClassRemove();
    evt.target.classList.add('img-filters__button--active');
    cb();
  })
}

const onfilterDiscussedClick = (cb) => {
  filterButtonDiscussed.addEventListener('click', (evt) => {
    activeClassRemove();
    evt.target.classList.add('img-filters__button--active');
    cb();
  })
}
