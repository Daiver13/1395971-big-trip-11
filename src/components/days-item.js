import {convertDate} from '../utils.js';

const createTripDaysItemMarkup = (day, item) => {
  const {date = day.date} = item;

  return (
    `<div class="day__info">
      <span class="day__counter">${day}</span>
      <time class="day__date" datetime="2019-03-18">${convertDate(date)}</time>
    </div>`
  );
};

export const createTripDaysItemTemplate = (item) => {
  const tripDaysItemMarkup = item.map((it, i) => createTripDaysItemMarkup(i + 1, it)).join(`\n`);

  return (
    `<li class="trip-days__item day">
      ${tripDaysItemMarkup}

      <ul class="trip-events__list"></ul>
    </li>`
  );
};
