import {convertDate} from '../utils.js';

export const createTripMainTripInfoTemplate = (events) => {
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
