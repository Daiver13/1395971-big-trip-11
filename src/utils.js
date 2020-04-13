import {MONTH_NAMES} from "./const.js";

export const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

export const convertDate = (date) => {
  return `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}`;
};
