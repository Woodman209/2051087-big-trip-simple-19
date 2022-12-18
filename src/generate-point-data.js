import { POINTS_TYPES, DESTINATIONS, OFFERS } from './const.js';
import { getRandomArrayElement, getRandomId, getRandomPrice, getRandomTitle } from './utils.js';

const POINTS = [
  {
    'base_price': 34,
    'date_from': '2019-07-10T22:55:56.845Z',
    'date_to': '2019-07-11T11:22:13.375Z',
    'destination': getRandomArrayElement(getRandomId(DESTINATIONS)),
    'id': '0',
    'offers': getOffersArray(),
    'type': getRandomArrayElement(POINTS_TYPES)
  },
  {
    'base_price': 673,
    'date_from': '2019-07-10T22:55:56.845Z',
    'date_to': '2019-07-11T11:22:13.375Z',
    'destination': getRandomArrayElement(getRandomId(DESTINATIONS)),
    'id': '0',
    'offers': getOffersArray(),
    'type': getRandomArrayElement(POINTS_TYPES)
  },
  {
    'base_price': 1100,
    'date_from': '2019-07-10T22:55:56.845Z',
    'date_to': '2019-07-11T11:22:13.375Z',
    'destination': getRandomArrayElement(getRandomId(DESTINATIONS)),
    'id': '0',
    'offers': getOffersArray(),
    'type': getRandomArrayElement(POINTS_TYPES)
  }
];

function getOffersArray() {
  return Array.from({ length: getRandomArrayElement(getRandomId(OFFERS)) }, () => ({
    'id': getRandomArrayElement(getRandomId(OFFERS)),
    'title': getRandomArrayElement(getRandomTitle(OFFERS)),
    'price': getRandomArrayElement(getRandomPrice(OFFERS))
  })
  );
}

function getRandomPoint() {
  return getRandomArrayElement(POINTS);
}

export { getRandomPoint };
