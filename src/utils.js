import dayjs from "dayjs";

const DATE_FORMAT = 'D MMMM';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomId(items) {
  const result = items.map((item) => item['id']);
  return result;
}

function getRandomPrice(items) {
  const result = items.map((item) => item['price']);
  return result;
}

function getRandomTitle(items) {
  const result = items.map((item) => item['title']);
  return result;
}

function humanizeTaskDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

export { getRandomArrayElement, getRandomId, getRandomPrice, getRandomTitle, humanizeTaskDueDate };
