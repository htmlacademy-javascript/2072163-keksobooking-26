// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInteger = function (min, max) {
  //Использование деструктуризации
  if (max < min) {
    [min, max] = [max, min];
  }
  if (min < 0 || max < 0) {
    return 'Задан неверный параметр! Укажите другие данные.';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

getRandomInteger(4, 9);

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
const getRandomFloat = function (min, max, signPoint) {
  //Использование деструктуризации
  if (max < min) {
    [min, max] = [max, min];
  }
  if (min < 0 || max < 0) {
    return 'Задан неверный параметр! Укажите другие данные.';
  }
  return (Math.random() * (max - min + 1) + min).toFixed(signPoint);
};


getRandomFloat(1, 3, 2);
