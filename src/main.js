import InfoComponent from './components/info.js';
import InfoCostComponent from './components/info-cost.js';
import TabsComponent from './components/tabs.js';
import FiltersComponent from './components/filters.js';
import EventsComponent from './components/events.js';
import DaysComponent from './components/days.js';
import DaysItemComponent from './components/days-item.js';
import EventsItemFormComponent from './components/events-item-form.js';
import EventsItemComponent from './components/events-item.js';

import {render, RenderPosition} from './utils.js';

import {generateFilters} from './mock/filter.js';
import {generateEvents} from './mock/event.js';

const EVENT_COUNT = 4;
const SHOWING_EVENTS_COUNT_ON_START = 4;

const events = generateEvents(EVENT_COUNT);

const tripMainElement = document.querySelector(`.trip-main`);
const tripMainTripControlsElement = document.querySelector(`.trip-main__trip-controls`);

render(tripMainElement, new InfoComponent(events).getElement(), RenderPosition.AFTERBEGIN);

const tripMainTripInfoElement = tripMainElement.querySelector(`.trip-main__trip-info`);
render(tripMainTripInfoElement, new InfoCostComponent(1250).getElement(), RenderPosition.BEFOREEND);

const filters = generateFilters();

render(tripMainTripControlsElement, new TabsComponent().getElement(), RenderPosition.BEFOREEND);
render(tripMainTripControlsElement, new FiltersComponent(filters).getElement(), RenderPosition.BEFOREEND);

const tripEventsContainer = document.querySelector(`.trip-events`);
render(tripEventsContainer, new EventsComponent().getElement(), RenderPosition.BEFOREEND);
render(tripEventsContainer, new DaysComponent().getElement(), RenderPosition.BEFOREEND);

const tripDaisContainer = tripEventsContainer.querySelector(`.trip-days`);
render(tripDaisContainer, new DaysItemComponent(events[0].time.start, 1).getElement(), RenderPosition.BEFOREEND);

const tripDaisItemContainer = tripDaisContainer.querySelector(`.trip-days__item`);
const tripEventsListContainer = tripDaisItemContainer.querySelector(`.trip-events__list`);

render(tripEventsListContainer, new EventsItemFormComponent(events[0]).getElement(), RenderPosition.BEFOREEND);

let showingEventsCount = SHOWING_EVENTS_COUNT_ON_START;

events.slice(1, showingEventsCount)
  .forEach((event) => render(tripEventsListContainer, new EventsItemComponent(event).getElement(), RenderPosition.BEFOREEND));
