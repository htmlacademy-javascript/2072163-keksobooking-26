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
  if (!validateArgs(min, max)) {return ERROR_MESSAGE;}
  return Math.floor(getRandomNumber(...makeValid(min, max)));
};
getRandomInteger(1, 10);


const getRandomFloat = function(min, max, signPoint) {
  if (!validateArgs(min, max)) {return ERROR_MESSAGE;}
  return getRandomNumber(...makeValid(min, max)).toFixed(signPoint);
};
getRandomFloat (1, 2, 3);


