// Создание временных данных постов. По умолчанию данные используются с сервера, но если он не работает - для демонстрации используется код из этого модуля

import {makeUniqueRandomIntegerGenerator, getRandomIntInclusive} from './util.js';

const PHOTO_COUNT = 25;

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const descriptions = [
  'Без фотошопа',
  'Без фильтров',
  'Сделано на тапок',
  'Помогите убрать лишнее',
  'Милота',
  'Люблю поесть',
  'Хочу стать артистом',
  'Не дано',
  'Жду ваши лайки',
  'Новая камера',
  'Зацените фотку!',
  'Хороший ракурс',
  'Из архива',
];

const getRandomUniqueId = makeUniqueRandomIntegerGenerator(1, 999);

const createComments = () => {
  const comments = [];
  for (let i = 0; i < getRandomIntInclusive(1, 6); i++) {
    comments.push({
      id: getRandomUniqueId(),
      avatar: 'img/avatar-' + (i + 1) + '.svg',
      message: messages[getRandomIntInclusive(0, messages.length - 1)],
      name: names[getRandomIntInclusive(0, names.length - 1)],
    })
  }
  return comments;
};

const posts = [];
const createPost = () => {
  for (let i = 1; i <= PHOTO_COUNT; i++) {
    posts.push({ 
      id: i,
      url: 'photos/' + i + '.jpg',
      description: descriptions[getRandomIntInclusive(0, descriptions.length - 1)],
      likes: getRandomIntInclusive(15, 200),
      comments: createComments(),
    })
  }
  return
};

createPost();

export {posts};