import {createTripMainTripInfoTemplate} from './components/info.js';
import {createTriInfoCostTemplate} from './components/info-cost.js';
import {createTripControlsTripTabsTemplate} from './components/tabs.js';
import {createTripFiltersTemplate} from './components/filters.js';
import {createTripEventsTemplate} from './components/events.js';
import {createTripDaysTemplate} from './components/days.js';
import {createTripDaysItemTemplate} from './components/days-item.js';
import {createTripEventsItemFormTemplate} from './components/events-item-form.js';
import {createTripEventsItemTemplate} from './components/events-item.js';

import {generateFilters} from './mock/filter.js';
import {generateEvents} from './mock/event.js';

const EVENT_COUNT = 4;
const SHOWING_EVENTS_COUNT_ON_START = 4;

const events = generateEvents(EVENT_COUNT);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector(`.trip-main`);
const tripMainTripControlsElement = document.querySelector(`.trip-main__trip-controls`);

render(tripMainElement, createTripMainTripInfoTemplate(events), `afterbegin`);

const tripMainTripInfoElement = tripMainElement.querySelector(`.trip-main__trip-info`);
render(tripMainTripInfoElement, createTriInfoCostTemplate(1250), `beforeend`);

const filters = generateFilters();

render(tripMainTripControlsElement, createTripControlsTripTabsTemplate(), `beforeend`);
render(tripMainTripControlsElement, createTripFiltersTemplate(filters), `beforeend`);

const tripEventsContainer = document.querySelector(`.trip-events`);
render(tripEventsContainer, createTripEventsTemplate(), `beforeend`);
render(tripEventsContainer, createTripDaysTemplate(), `beforeend`);

const tripDaisContainer = tripEventsContainer.querySelector(`.trip-days`);
render(tripDaisContainer, createTripDaysItemTemplate(events[0].time.start, 1), `beforeend`);

const tripDaisItemContainer = tripDaisContainer.querySelector(`.trip-days__item`);
const tripEventsListContainer = tripDaisItemContainer.querySelector(`.trip-events__list`);

render(tripEventsListContainer, createTripEventsItemFormTemplate(events[0]), `beforeend`);

let showingEventsCount = SHOWING_EVENTS_COUNT_ON_START;

events.slice(1, showingEventsCount)
  .forEach((event) => render(tripEventsListContainer, createTripEventsItemTemplate(event), `beforeend`));
