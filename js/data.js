import {getRandomInteger, getRandomFloat, getRandomElementArray, getArrayRandomLength, getAvatarNumber} from './util.js';
//количество изображений
const MAX_PICTURE = 10;

//количество объявлений
const NUMBER_AD = 10;

//географические координаты
const LOCATION_LAT = {
  min: 35.65000,
  max: 35.70000,
  signPoint: 5,
};

//географические координаты
const LOCATION_LNG = {
  min: 139.70000,
  max: 139.80000,
  signPoint: 5,
};
const TITLES = ['Заголовок 1', 'Заголовок 2', 'Заголовок 3', 'Заголовок 4'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner',];
const DESCRIPTIONS = ['Описание 1', 'Описание 2', 'Описание 3', 'Описание 4',];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

//функция возвращающая один объект
const createAd = function () {
  return {
    author: {
      avatar: getAvatarNumber(MAX_PICTURE),
    },
    offer: {
      title: getRandomElementArray(TITLES),
      address: `${getRandomFloat(LOCATION_LAT.min, LOCATION_LAT.max, LOCATION_LAT.signPoint)}, ${getRandomFloat(LOCATION_LNG.min, LOCATION_LNG.max, LOCATION_LNG.signPoint)}`,
      price: getRandomInteger(42, 424242),
      type: getRandomElementArray(TYPES),
      rooms: getRandomInteger(1, 42),
      guests: getRandomInteger(1, 42),
      checkin: getRandomElementArray(CHECK_TIMES),
      checkout: getRandomElementArray(CHECK_TIMES),
      features: getArrayRandomLength(FEATURES),
      description: getRandomElementArray(DESCRIPTIONS),
      photos: getArrayRandomLength(PHOTOS),
    },
    location: {
      lat: getRandomFloat(LOCATION_LAT.min, LOCATION_LAT.max, LOCATION_LAT.signPoint),
      lng: getRandomFloat(LOCATION_LNG.min, LOCATION_LNG.max, LOCATION_LNG.signPoint),
    },
  };
};

//функция возвращающая n объектов
const MultiCreateAd = function () {
  return Array.from({ length: NUMBER_AD }, createAd);
};


export {MultiCreateAd};
