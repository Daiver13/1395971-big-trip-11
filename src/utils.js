import {MONTH_NAMES} from './const.js';

export const convertDate = (date) => {
  return `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}`;
};

export const convertDateToHoursMinutes = (date) => {
  const toDate = new Date(date);

  function convertTime(value) {
    return value < 10 ? `0${value}` : value;
  }

  return `${convertTime(toDate.getHours())}:${convertTime(toDate.getMinutes())}`;
};

export const getDifferenceBetweenTimeInHours = (start, end) => {
  const differenceInMiliseconds = Date.parse(end) - Date.parse(start);

  let h = null;
  let m = null;

  h = Math.floor(differenceInMiliseconds / 1000 / 60 / 60);
  m = Math.floor((differenceInMiliseconds / 1000 / 60 / 60 - h) * 60);

  return `${h ? `${h}H ` : ``}${m < 10 ? `0${m}` : m}M`;
};
