import {createElement} from '../render.js';

function createFilterTemplate() {
  return '<button class="control__button">+ ADD NEW TASK</button>';
}

export default class NewSortView {
  getTemplate() {
    return createFilterTemplate();
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
