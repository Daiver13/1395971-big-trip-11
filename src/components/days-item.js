import {convertDate} from '../utils.js';

const createTripDaysItemMarkup = (day, count) => {
  return (
    `<div class="day__info">
      <span class="day__counter">${count}</span>
      <time class="day__date" datetime="2019-03-18">${convertDate(day)}</time>
    </div>`
  );
};

export const createTripDaysItemTemplate = (date, count) => {
  const tripDaysItemMarkup = createTripDaysItemMarkup(date, count);

  return (
    `<li class="trip-days__item day">
      ${tripDaysItemMarkup}

      <ul class="trip-events__list"></ul>
    </li>`
  );
};
