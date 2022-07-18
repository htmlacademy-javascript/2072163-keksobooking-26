const TYPES_OF_HOUSING = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель'
};

//добавит фичи
const addFeatureList = function (features, featuresTemplate) {
  const addClassFeature = features.map((featureName) => `popup__feature--${featureName}`);

  featuresTemplate.forEach((featureTemplate) => {
    const modifierTemplate = featureTemplate.classList[1];
    //удалит из коллекции шаблона элементы, которые отсутствуют в коллекции генератора чич
    if (!addClassFeature.includes(modifierTemplate)) {
      featureTemplate.remove();
    }
  });

};

//добавит фото
const addPhotoList = function (photosGenerate, photoTemplate, photosTempalte) {
  photosGenerate.forEach((photoGenerate) => {
    photoTemplate.remove();
    photoTemplate.src = photoGenerate;
    photosTempalte.append(photoTemplate.cloneNode(true));
  });

  if (photosGenerate.length === 0) {
    photoTemplate.remove();
  }
};

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const createOffer = function ({author, offer}) {

  const cardElement = cardTemplate.cloneNode(true);
  const feature = cardElement.querySelectorAll('.popup__feature');
  const photos = cardElement.querySelector('.popup__photos');
  const photo = photos.querySelector('.popup__photo');

  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = TYPES_OF_HOUSING[offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cardElement.querySelector('.popup__description').textContent = offer.description;
  cardElement.querySelector('.popup__avatar').src = author.avatar;

  addFeatureList(offer.features, feature);
  addPhotoList(offer.photos, photo, photos);

  return cardElement;
};

export {createOffer};
