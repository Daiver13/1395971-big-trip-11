import {convertDateToHoursMinutes, getDifferenceBetweenTimeInHours, createElement} from '../utils.js';

const createOfferMarkup = ({title, cost}) => {

  return (
    `<li class="event__offer">
      <span class="event__offer-title">${title}</span>
      &plus;
      &euro;&nbsp;<span class="event__offer-price">${cost}</span>
    </li>`
  );
};

const createTripEventsItemTemplate = (event) => {
  const {tripTypes, location, time, cost, order} = event;
  const offerMarkup = order.map((it) => createOfferMarkup(it)).join(`\n`);

  return (
    `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${tripTypes.toLowerCase()}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${tripTypes} to ${location}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T10:30">${convertDateToHoursMinutes(time.start)}</time>
            &mdash;
            <time class="event__end-time" datetime="2019-03-18T11:00">${convertDateToHoursMinutes(time.end)}</time>
          </p>
          <p class="event__duration">${getDifferenceBetweenTimeInHours(time.start, time.end)}</p>
        </div>

        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${cost}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${offerMarkup}
        </ul>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
};

export default class EventsItem {
  constructor(event) {
    this._element = null;
    this._event = event;
  }

  getTemplate() {
    return createTripEventsItemTemplate(this._event);
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
