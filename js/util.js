//сообщение об ошибке
const ERROR_MESSAGE = 'Задан неверный параметр! Укажите другие данные.';

//проверка переданных параметров
const validateArgs = function (min, max) {
  return !(typeof min !== 'number' || typeof max !== 'number' || min < 0 || max < 0);
};

//деструктиризация значений, если переданные значения max меньше min
const makeValid = function (min, max) {
  const valid = max < min ? [min, max] = [max, min] : [min, max];
  return valid;
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
  const keyIndex = getRandomInteger(0, arr.length - 1);
  return arr[keyIndex];
};

//Функция возвращает массив случайной длины
const getArrayRandomLength = function (arr) {
  const rundomIndex = getRandomInteger(0, arr.length - 1);
  const copyArr = arr.slice();
  const result = [];

  for (let i = rundomIndex; i >= 0; i--) {
    const indexOfElement = getRandomInteger(0, copyArr.length - 1);
    const splicedElement = copyArr.splice(indexOfElement, 1);
    result.push(splicedElement[0]);
  }
  return result;
};

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

export {getRandomInteger, getRandomFloat, getRandomElementArray, getArrayRandomLength, getAvatarNumber};
