import {
  SEARCH_TIME_INTERVAL
} from "./variables.js";

const namesMonthsRu = ['январь', 'февраль', 'марть', 'апрель', 'май', 'июнь',
  'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
];
const namesMonthsRuGenitive = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
];
const abbreviatedNamesDaysWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
const dayInMs = 24 * 60 * 60 * 1000;

function getDate(interval = 0) {
  const date = new Date(Date.now() - interval * dayInMs);
  return  getFormattedDateYMD(date);
};

function getCurrMonth() {
  const date = new Date(Date.now());
  return  date.getMonth();
};

function getDatesArray(inteval) {
  const datesArr = [];
  for(let i = inteval; i >= 0; i--){
    datesArr.push(new Date(Date.now() - i * dayInMs));
  }
  return datesArr;
}

function getDaysWeekArray() {
  const dayWeekArr = {};
  datesArray.forEach(date => {
    dayWeekArr[getFormattedDateYMD(date)] = `${date.getDate()}, ${abbreviatedNamesDaysWeek[date.getDay()]}`
  })
  return dayWeekArr;
}

export function getFormattedDateRU(date) {
  date = new Date(date);
  return `${date.getDate()} ${namesMonthsRuGenitive[date.getMonth()]}, ${date.getFullYear()}`; 
}

export function getFormattedDateYMD(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`; 
}

export function getFormattedDateYMDhm(date) {
  date = new Date(date);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`; 
}

export const dateFrom = getDate(SEARCH_TIME_INTERVAL);
export const dateTo = getDate();
export const datesArray = getDatesArray(SEARCH_TIME_INTERVAL);
export const dayWeekArray = getDaysWeekArray(SEARCH_TIME_INTERVAL);
export const currMonth = namesMonthsRu[getCurrMonth()];
