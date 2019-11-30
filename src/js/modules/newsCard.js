import {
  getFormattedDateRU,
} from "./dates";

export class NewsCard {
  createCard(newsData) {
    const template = document.createElement('a');
    template.classList.add('news');
    template.href = newsData.url;
    template.target = '_blank';
    template.title = newsData.title;

    const img = document.createElement('img');
    img.classList.add('news__img');
    img.src = newsData.urlToImage;
    img.alt = 'Изображение по теме новости';
    template.appendChild(img);

    const description = `
  <div class="news__description">
    <time class="news__date" datetime="2019-08-02 00:00">${getFormattedDateRU(newsData.publishedAt)}</time>
    <h3 class="news__heading">${newsData.title}</h3>
    <p class="news__resume">${newsData.description}</p>
    <p class="news__agency">${newsData.source.name}</p>
  </div>`.trim();
    template.insertAdjacentHTML('beforeend', description);
    return template;
  }
}