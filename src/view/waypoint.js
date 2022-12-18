import { createElement } from '../render.js';
import { humanizeTaskDueDate } from '../utils.js';

/*const dash = /_/gi;

function setDash(current, setting) {
  return current.replace(setting, '-');
}
*/

function createWaypointTemplate(point) {
  const { date_from, date_to, destination, offers } = point;
  const dateFrom = humanizeTaskDueDate(date_from);
  const dateTo = humanizeTaskDueDate(date_to);

  return `<div class="event">
    <time class="event__date" datetime="${dateFrom}">${dateFrom}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/flight.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${destination[0]['name']}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${dateFrom}">${dateFrom}</time>
        &mdash;
        <time class="event__end-time" datetime="${dateTo}">${dateTo}</time>
      </p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${offers[0]['price']}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      <li class="event__offer">
        <span class="event__offer-title">${offers[0]['title']}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offers[0]['price']}</span>
      </li>
      <li class="event__offer">
        <span class="event__offer-title">${offers[1]['title']}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offers[1]['price']}</span>
      </li>
    </ul>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>`;
}

export default class NewWaypointView {
  constructor({ point }) {
    this.point = point;
  }

  getTemplate() {
    return createWaypointTemplate(this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
