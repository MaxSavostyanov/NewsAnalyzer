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
  return  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export function getDatesArray(inteval) {
  const datesArr = [];
  for(let i = inteval; i >= 0; i--){
    datesArr.push(getDate(i));
  }
  return datesArr;
}

export const dateFrom = getDate(SEARCH_TIME_INTERVAL);
export const dateTo = getDate();