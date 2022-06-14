const ERROR_MESSAGE = 'Задан неверный параметр! Укажите другие данные.';

const validateArgs = function (min, max) {
  return !(typeof min !== 'number' || typeof max !== 'number' || min < 0 || max < 0);
};

const getRandomNumber = function (min, max) {
  return Math.random() * (max - min + 1) + min;
};

const makeValid = function (min, max) {
  return max < min ? [min, max] = [max, min] : [min, max];
};
const getRandomInteger = function (min, max) {
  if (!validateArgs(min, max)) { return ERROR_MESSAGE; }
  return Math.floor(getRandomNumber(...makeValid(min, max)));
};
getRandomInteger(1, 10);


const getRandomFloat = function (min, max, signPoint) {
  if (!validateArgs(min, max)) { return ERROR_MESSAGE; }
  return getRandomNumber(...makeValid(min, max)).toFixed(signPoint);
};
getRandomFloat(1, 2, 3);


const TITLES = ['Заголовок 1', 'Заголовок 2', 'заголвок 3', 'Заголовок 4'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKTIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner',];
const DESCRIPTIONS = ['Описание 1', 'Описание 2', 'Описание 3', 'Описание 4',];
const PHOTOS = [
  https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg,
  https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg,
  https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg,
];
const lat = getRandomFloat(35.65, 35.7, 5);
const lng = getRandomFloat(139.7, 139.8, 5);
const NUMBER_OF_OFFERS = 10;


//возвращает случайный элемент массива
const getRandomArrayElement = function (arr) {
  const element = Math.floor(Math.random() * arr.length);
  return arr[element]
}
//возвращает адрес изображения
const getAvatar = function (sn) {
  return sn < NUMBER_OF_OFFERS ? `0${sn}` : `${sn}`
}
// возвращает массив строк
const getStringArray = function (arr) {
  const count = getRandomInteger(1, arr.length);
  const copyArr = arr.slice();
  const result = [];

  for (let i = count; i > 0; i--) {
    const indexOfElement = getRandomInteger(0, copyArr.length - 1);
    const splicedElement = copyArr.splice(indexOfElement, 1);
    result.push(splicedElement[0]);
  }

  return result;
}

// генерируем одно объявление
const createAd = function () {
  return {
    author: {
      avatar: getAvatar(),
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${lat}, ${lng}`,
      price: getRandomInteger(10, 100),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInteger(1, 20),
      guests: getRandomInteger(1, 10),
      checkin: getRandomArrayElement(CHECKTIMES),
      checkout: getRandomArrayElement(CHECKTIMES),
      features: getStringArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getStringArray(PHOTOS),
    }
    location: {
      lat: lat,
      lng: lng,
    }

  }
}

//генерация 10-ти случайных объявлений
const offerArray = new Array(NUMBER_OF_OFFERS).fill(null).map(() => createAd());
