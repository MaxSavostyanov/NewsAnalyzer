import "../styles/pages/index.css";
import {
  SearchString
} from "./modules/searchString";
import {
  NewsApi
} from "./modules/NewsApi";
import {
  NEWS_API_KEY,
  NEWS_API_BASE_URL,
  COUNT_ARTICLES,
  STEP_SHOW,
} from "./modules/variables";
import {
  dateFrom,
  dateTo,
} from "./modules/dates";
import {
  NewsCard
} from "./modules/newsCard"
import {
  NewsCardsList
} from "./modules/newsCardsList"

const input = document.querySelector(".search__input");
const btnSubmit = document.querySelector(".search__button");
const errorInput = document.querySelector(".search__error");
const container = document.querySelector('.results__news');
const errorNotFound = document.querySelector('#not_found');
const errorServer = document.querySelector('#error_server');
const blockResults = document.querySelector('.results__search-results');
const preloader = document.querySelector('.preloader');
const btnMoreNews = document.querySelector('.results__btn-more');

const searchString = new SearchString(input, btnSubmit, errorInput);
const newsApi = new NewsApi(NEWS_API_BASE_URL, NEWS_API_KEY);
const newsCard = new NewsCard();
const newsCardsList = new NewsCardsList(container);
let storage;


function showBtnMoreNews() {
  btnMoreNews.classList.remove('results__btn-more_hidden');
  btnMoreNews.addEventListener('click', render);
}

function hideBtnMoreNews() {
  btnMoreNews.classList.add('results__btn-more_hidden');
  btnMoreNews.removeEventListener('click', render);
}

function render() {
  const data = storage.splice(-STEP_SHOW, STEP_SHOW);
  data.forEach(news => newsCardsList.addCard(newsCard.createCard(news)));
  if (storage.length) {
    showBtnMoreNews();
  } else {
    hideBtnMoreNews();
  }
}

function searchNews() {
  searchString.deactivateBtnSubmit();
  searchString.deactivateInput();
  preloader.classList.remove('preloader_is-hidden');
  if (searchString.input.value) {
    newsCardsList.removeChilds();
    errorServer.classList.add('error_is-hidden');
    errorNotFound.classList.add('error_is-hidden');
    blockResults.classList.add('results__search-results_is-hidden');
    hideBtnMoreNews();
    localStorage.clear();
    newsApi.getNews(searchString.input.value, dateFrom, dateTo, COUNT_ARTICLES)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then(newsArray => {
        localStorage.setItem('news', JSON.stringify(newsArray));
        localStorage.setItem('keyword', searchString.input.value.trim());
        storage = newsArray.articles;
        if (storage.length > 0) {
          render();
          blockResults.classList.remove('results__search-results_is-hidden');
        } else {
          errorNotFound.classList.remove('error_is-hidden');
        }
      })
      .catch(() => {
        errorServer.classList.remove('error_is-hidden');
      })
      .finally(() => {
        preloader.classList.add('preloader_is-hidden');
        searchString.activateBtnSubmit();
        searchString.activateInput();
      })
  }
}

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  searchNews();
});

if(localStorage.getItem('news')){
  storage = JSON.parse(localStorage.getItem('news')).articles;
  searchString.input.value = localStorage.getItem('keyword');
  searchString.activateBtnSubmit();
  render();
  blockResults.classList.remove('results__search-results_is-hidden');
}