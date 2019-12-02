import "../styles/pages/analytics.css";
import {
  dayWeekArray,
  getFormattedDateYMD,
  currMonth,
} from './modules/dates';
import {
  Chart,
} from './modules/chart';


const title = document.querySelector('.statistics-news__keyword');
const totalNews = document.querySelector('.statistics-news__total');
const mentions = document.querySelector('.statistics-news__mentions');
const container = document.querySelector('.chart')

function countMentionsTitle(title, keyword) {
  const reg = new RegExp(`${keyword}`, 'gi');
  const mentions = title.match(reg);
  return mentions ? mentions.length : 0;
}

function countMentionsWeek(storage, keyword) {
  const mentionsWeek = {
    total: 0
  };
  storage.forEach(news => {
    const dayWeek = dayWeekArray[getFormattedDateYMD(new Date(news.publishedAt))];
    const mentionsTitle = countMentionsTitle(news.title, keyword);
    if (mentionsWeek[dayWeek]) {
      mentionsWeek[dayWeek] += mentionsTitle;
    } else {
      mentionsWeek[dayWeek] = mentionsTitle;
    }
    mentionsWeek[dayWeek] += mentionsTitle;
    mentionsWeek.total += mentionsTitle;
  })
  return mentionsWeek;
}

if (localStorage.getItem('news')) {
  const keyword = localStorage.getItem('keyword');
  const dataNews = JSON.parse(localStorage.getItem('news'));
  const storage = dataNews.articles;
  const mentionsWeek = countMentionsWeek(storage, keyword);
  const chart = new Chart(container, dayWeekArray, mentionsWeek, currMonth);

  title.textContent = keyword;
  totalNews.textContent = dataNews.totalResults;
  mentions.textContent = mentionsWeek.total;
  chart.createChart();
}
