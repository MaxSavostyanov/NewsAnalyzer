import {
  getFormattedDateRU,
} from "./dates";

export class CommitCard {
  constructor() {
  }

  createCard(data) {
    const stringHTML = `<div class="commit-card">
    <time class="commit-card__date" datetime="2019-08-14 00:00">
      ${getFormattedDateRU(data.commit.author.date)};
    </time>
    <div class="commit-card__author">
      <img src="${data.author.avatar_url}" alt="аватар ${data.commit.author.name}" class="commit-card__avatar">
      <h3 class="commit-card__name">${data.commit.author.name}</h3>
      <a href="mailto:${data.commit.author.email}" class="commit-card__mail">
      ${data.commit.author.email}
      </a>
    </div>
    <p class="commit-card__text">${data.commit.message}</p>
  </div>`.trim();
    const template = document.createElement('div');
    template.classList.add('swiper-slide');
    template.insertAdjacentHTML('afterbegin', stringHTML);
    return template;
  }
}