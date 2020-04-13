import {createTripMainTripInfoTemplate} from './components/info.js';
import {createTriInfoCostTemplate} from './components/info-cost.js';
import {createTripControlsTripTabsTemplate} from './components/tabs.js';
import {createTripFiltersTemplate} from './components/filters.js';
import {createTripEventsTemplate} from './components/events.js';
import {createTripDaysTemplate} from './components/days.js';
import {createTripDaysItemTemplate} from './components/days-item.js';
import {createTripEventsItemFormTemplate} from './components/events-item-form.js';
import {createTripEventsItemTemplate} from './components/events-item.js';

import {generateFilters} from "./mock/filter.js";
import {CITY_NAMES} from "./const";
import {getRandomIntegerNumber} from "./utils.js";

const render = (container, template, place) => {
  // debugger
  container.insertAdjacentHTML(place, template);
};

const trip = {
  countries: [`Amsterdam`, `Chamonix`, `Geneva`],
  time: {
    startDate: new Date(),
    endDate: new Date().getDate() + 5,
  },
  total: 1250,
  events: [
    {
      date: new Date(),
      list: [
        {
          tripTypes: `Taxi`,
          location: `Amsterdam`,
          time: {
            startTime: `10:30`,
            endTime: `11:00`,
          },
          takeTime: `30M`,
          cost: 20,
          order: [
            {
              title: `Order Uber`,
              cost: 20,
            },
          ],
        },
        {
          tripTypes: `Flight`,
          location: `Chamonix`,
          time: {
            startTime: `12:25`,
            endTime: `13:35`,
          },
          takeTime: `1H 10M`,
          cost: 160,
          order: [
            {
              title: `Add luggage`,
              cost: 50,
            },
            {
              title: `Switch to comfort`,
              cost: 80,
            },
          ],
        },
        {
          tripTypes: `Drive`,
          location: `Chamonix`,
          time: {
            startTime: `14:30`,
            endTime: `16:06`,
          },
          takeTime: `1H 35M`,
          cost: 160,
          order: [
            {
              title: `Rent a car`,
              cost: 200,
            },
          ],
        },
      ]
    },
  ],
};
const TRIP_EVENTS_ITEM_COUNT = 3;

const tripMainElement = document.querySelector(`.trip-main`);
const tripMainTripControlsElement = document.querySelector(`.trip-main__trip-controls`);

const countryList = [];
for (const index in CITY_NAMES) {
  if (index <= 2) {
    countryList.push(CITY_NAMES[getRandomIntegerNumber(0, CITY_NAMES.length)]);
  } else {
    break;
  }
}
render(tripMainElement, createTripMainTripInfoTemplate(trip.countries, trip.time), `afterbegin`);

const tripMainTripInfoElement = tripMainElement.querySelector(`.trip-main__trip-info`);
render(tripMainTripInfoElement, createTriInfoCostTemplate(trip.total), `beforeend`);

const filters = generateFilters();

render(tripMainTripControlsElement, createTripControlsTripTabsTemplate(), `beforeend`);
render(tripMainTripControlsElement, createTripFiltersTemplate(filters), `beforeend`);

const tripEventsContainer = document.querySelector(`.trip-events`);
render(tripEventsContainer, createTripEventsTemplate(), `beforeend`);
render(tripEventsContainer, createTripDaysTemplate(), `beforeend`);

const tripDaisContainer = tripEventsContainer.querySelector(`.trip-days`);
render(tripDaisContainer, createTripDaysItemTemplate(trip.events), `beforeend`);

const tripDaisItemContainer = tripDaisContainer.querySelector(`.trip-days__item`);
const tripEventsListContainer = tripDaisItemContainer.querySelector(`.trip-events__list`);

render(tripEventsListContainer, createTripEventsItemFormTemplate(), `beforeend`);


for (const events of trip.events) {
  for (const event of events.list) {
    render(tripEventsListContainer, createTripEventsItemTemplate(event), `beforeend`);
  }
}
