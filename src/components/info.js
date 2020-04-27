import {convertDate, createElement} from '../utils.js';

const createTripMainTripInfoTemplate = (events) => {
  const cityNamesSet = new Set();
  const allDate = events.map((el) => Date.parse(el.time.start));

  events.forEach((el) => {
    cityNamesSet.add(el.location);
  });

  const cityNames = [...cityNamesSet];

  const tripMarkup = cityNames.reduce((acc, el, index) => {
    return `${acc}${el}${cityNames.length - 2 >= index ? ` &mdash; ` : ``}`;
  }, ``);

  return (
    `<section class="trip-main__trip-info trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${tripMarkup}</h1>

        <p class="trip-info__dates">${convertDate(new Date(Math.min(...allDate)))}&nbsp;&mdash;&nbsp;${convertDate(new Date())}</p>
      </div>
    </section>`
  );
};

export default class Info {
  constructor(events) {
    this._element = null;
    this._events = events;
  }

  getTemplate() {
    return createTripMainTripInfoTemplate(this._events);
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
