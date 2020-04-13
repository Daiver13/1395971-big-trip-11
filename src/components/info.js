import {convertDate} from '../utils.js';

export const createTripMainTripInfoTemplate = (trip, tripDays) => {
  const {startDate, endDate} = tripDays;

  const tripMarkup = trip.reduce((acc, el, index) => {
    return `${acc}${el}${trip.length - 2 >= index ? ` &mdash; ` : ``}`;
  }, ``);

  return (
    `<section class="trip-main__trip-info trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${tripMarkup}</h1>

        <p class="trip-info__dates">${convertDate(startDate)}&nbsp;&mdash;&nbsp;${endDate}</p>
      </div>
    </section>`
  );
};
