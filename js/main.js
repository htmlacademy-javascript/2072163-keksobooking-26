//сообщение об ошибке
const ERROR_MESSAGE = 'Задан неверный параметр! Укажите другие данные.';

//проверка переданных параметров
const validateArgs = function (min, max) {
  return !(typeof min !== 'number' || typeof max !== 'number' || min < 0 || max < 0);
};

//деструктиризация значений, если переданные значения max меньше min
const makeValid = function (min, max) {
  return max < min ? [min, max] = [max, min] : [min, max];
};

//функция возвращающая случайное значение
const getRandomNumber = function (min, max) {
  return Math.random() * (max - min + 1) + min;
};

//функция возвращающая случайное целое значение в заданном диапазоне
const getRandomInteger = function (min, max) {
  if (!validateArgs(min, max)) { return ERROR_MESSAGE; }
  return Math.floor(getRandomNumber(...makeValid(min, max)));
};

//функция возвращающая случайное значение в заданном диапазоне с плавающей точкой
const getRandomFloat = function (min, max, signPoint) {
  if (!validateArgs(min, max)) { return ERROR_MESSAGE; }
  return getRandomNumber(...makeValid(min, max)).toFixed(signPoint);
};

//функция возвращающая случайный элемент из массива
const getRandomElementArray = function (arr) {
  let key = getRandomInteger(0, arr.length - 1);
  return arr[key];
};

//Функция возвращает массив случайной длины
const getArrayRandomLength = function (arr) {
  let rundomIndex = getRandomInteger(0, arr.length - 1);
  let copyArr = arr.slice();
  let result = [];

  for (let i = rundomIndex; i >= 0; i--) {
    let indexOfElement = getRandomInteger(0, copyArr.length - 1);
    let splicedElement = copyArr.splice(indexOfElement, 1);
    result.push(splicedElement[0]);
  }
  return result;
}

//Функция возвращает строку с неповторяющимся значением
let PhotoId = 0;
const getAvatarNumber = function (numberPhoto) {

  for (let i = 1; i <= numberPhoto; i++) {
    PhotoId += 1;
    if (PhotoId < 10) {
      return `img/avatars/user0${PhotoId}.png`;
    }
    return `img/avatars/user${PhotoId}.png`;
  }
};

//количество изображений
const MAX_PICTURE = 10;

//количество объявлений
const NUMBER_AD = 10;

//географические координаты
const locationLat = {
  min: 35.65000,
  max: 35.70000,
  signPoint: 5,
}

//географические координаты
const locationLng = {
  min: 139.70000,
  max: 139.80000,
  signPoint: 5,
}
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
      address: `${getRandomFloat(locationLat.min, locationLat.max, locationLat.signPoint)}, ${getRandomFloat(locationLng.min, locationLng.max, locationLng.signPoint)}`,
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
      lat: getRandomFloat(locationLat.min, locationLat.max, locationLat.signPoint),
      lng: getRandomFloat(locationLng.min, locationLng.max, locationLng.signPoint),
    },
  };
};

//функция возвращающая n объектов
const MultiCreateAd = Array.from({ length: NUMBER_AD }, createAd);
