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

const renderEvents = (eventListElement, event) => {
  const replaceEventItemForm = () => {
    eventListElement.replaceChild(eventsItemFormComponent.getElement(), eventsItemComponent.getElement());
  };

  const replaceEventItem = () => {
    eventListElement.replaceChild(eventsItemComponent.getElement(), eventsItemFormComponent.getElement());
  };

  const eventsItemFormComponent = new EventsItemFormComponent(events[0]);
  const submitForm = eventsItemFormComponent.getElement().querySelector(`.event--edit`);
  submitForm.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    replaceEventItem();
  });

  const eventsItemComponent = new EventsItemComponent(event);
  const editItemButton = eventsItemComponent.getElement().querySelector(`.event__rollup-btn`);
  editItemButton.addEventListener(`click`, () => {
    replaceEventItemForm();
  });

  render(eventListElement, eventsItemComponent.getElement(), RenderPosition.BEFOREEND);
};

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

let showingEventsCount = SHOWING_EVENTS_COUNT_ON_START;

events.slice(0, showingEventsCount)
  .forEach((event) => {
    renderEvents(tripEventsListContainer, event);
  });
