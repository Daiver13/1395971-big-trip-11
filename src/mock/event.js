import {CITY_NAMES, TRIP_TYPES, TRIP_DESTINATION} from "../const.js";

const getRandomCityName = () => {
  return CITY_NAMES[getRandomIntegerNumber(0, CITY_NAMES.length)];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 8);

  targetDate.setDate(targetDate.getDate() + diffValue);
  targetDate.setHours(targetDate.getHours() + diffValue);
  targetDate.setMinutes(targetDate.getMinutes() + diffValue);

  const start = targetDate;
  const end = new Date(Date.parse(targetDate) + getRandomIntegerNumber(10000, 10000000));

  return [start, end];
};

const getRandomImages = () => {
  const arr = [];

  for (let i = 0; i <= getRandomIntegerNumber(0, 10); ++i) {
    arr.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }

  return arr;
};

const generateEvent = () => {
  const dates = getRandomDate();

  return {
    tripTypes: TRIP_TYPES[getRandomIntegerNumber(0, TRIP_TYPES.length)],
    location: getRandomCityName(),
    time: {
      start: dates[0],
      end: dates[1],
    },
    cost: getRandomIntegerNumber(10, 200),
    order: [
      {
        title: `Order Uber`,
        cost: getRandomIntegerNumber(10, 200),
      },
    ],
    destination: TRIP_DESTINATION[getRandomIntegerNumber(0, TRIP_DESTINATION.length)],
    images: getRandomImages(),
  };
};

const generateEvents = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateEvent)
    .sort((a, b) => {
      return Date.parse(a.time.start) - Date.parse(b.time.start);
    });
};

export {generateEvent, generateEvents};
