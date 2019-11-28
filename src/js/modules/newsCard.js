export class NewsCard {
  constructor() {
  }

  createCard(newsData) {
    const stringHTML = `
  <img src="${newsData.urlToImage}" alt="Изображение по теме новости" class="news__img">
  <div class="news__description">
    <time class="news__date" datetime="2019-08-02 00:00">${newsData.publishedAt}</time>
    <h3 class="news__heading">${newsData.title}</h3>
    <p class="news__resume">${newsData.description}</p>
    <p class="news__agency">${newsData.source.name}</p>
  </div>`.trim();
    const template = document.createElement('a');
    template.classList.add('news');
    template.href = newsData.url;
    template.target = '_blank';
    template.insertAdjacentHTML('afterbegin', stringHTML);
    return template;
  }
}