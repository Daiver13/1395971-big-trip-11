import {createElement} from '../utils.js';

const createTriInfoCostTemplate = (cost) => {
  return (
    `<p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
    </p>`
  );
};

export default class InfoCost {
  constructor(cost) {
    this._element = null;
    this._cost = cost;
  }

  getTemplate() {
    return createTriInfoCostTemplate(this._cost);
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
