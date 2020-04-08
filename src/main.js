import {createTripMainTripInfoTemplate} from './components/info.js';
import {createTriInfoCostTemplate} from './components/info-cost.js';
import {createTripControlsTripTabsTemplate} from './components/tabs.js';
import {createTripFiltersTemplate} from './components/filters.js';
import {createTripEventsTemplate} from './components/events.js';
import {createTripDaysTemplate} from './components/days.js';
import {createTripDaysItemTemplate} from './components/days-item.js';
import {createTripEventsItemFormTemplate} from './components/events-item-form.js';
import {createTripEventsItemTemplate} from './components/events-item.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const TRIP_EVENTS_ITEM_COUNT = 3;

const tripMainElement = document.querySelector(`.trip-main`);
const tripMainTripControlsElement = document.querySelector(`.trip-main__trip-controls`);

render(tripMainElement, createTripMainTripInfoTemplate(), `afterbegin`);

const tripMainTripInfoElement = tripMainElement.querySelector(`.trip-main__trip-info`);
render(tripMainTripInfoElement, createTriInfoCostTemplate(), `beforeend`);

render(tripMainTripControlsElement, createTripControlsTripTabsTemplate(), `beforeend`);
render(tripMainTripControlsElement, createTripFiltersTemplate(), `beforeend`);

const tripEventsContainer = document.querySelector(`.trip-events`);
render(tripEventsContainer, createTripEventsTemplate(), `beforeend`);
render(tripEventsContainer, createTripDaysTemplate(), `beforeend`);

const tripDaisContainer = tripEventsContainer.querySelector(`.trip-days`);
render(tripDaisContainer, createTripDaysItemTemplate(), `beforeend`);

const tripDaisItemContainer = tripDaisContainer.querySelector(`.trip-days__item`);
const tripEventsListContainer = tripDaisItemContainer.querySelector(`.trip-events__list`);
render(tripEventsListContainer, createTripEventsItemFormTemplate(), `beforeend`);

for (let i = 0; i < TRIP_EVENTS_ITEM_COUNT; i++) {
  render(tripEventsListContainer, createTripEventsItemTemplate(), `beforeend`);
}
