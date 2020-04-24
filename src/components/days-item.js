import {convertDate, createElement} from '../utils.js';

const createTripDaysItemMarkup = (day, count) => {
  return (
    `<div class="day__info">
      <span class="day__counter">${count}</span>
      <time class="day__date" datetime="2019-03-18">${convertDate(day)}</time>
    </div>`
  );
};

const createTripDaysItemTemplate = (date, count) => {
  const tripDaysItemMarkup = createTripDaysItemMarkup(date, count);

  return (
    `<li class="trip-days__item day">
      ${tripDaysItemMarkup}

      <ul class="trip-events__list"></ul>
    </li>`
  );
};

export default class DaysItem {
  constructor(date, count) {
    this._element = null;
    this._date = date;
    this._count = count;
  }

  getTemplate() {
    return createTripDaysItemTemplate(this._date, this._count);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
