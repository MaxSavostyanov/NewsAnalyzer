import {
  getFormattedDateRU,
  getFormattedDateYMDhm,
} from "./dates";

export class CommitCard {
  createCard(data) {
    const template = document.createElement('div');
    template.classList.add('swiper-slide');

    const commitCard = document.createElement('div');
    commitCard.classList.add('commit-card');
    template.appendChild(commitCard);

    const date = document.createElement('time');
    date.classList.add('commit-card__date');
    date.textContent = getFormattedDateRU(data.commit.author.date);
    date.dateTime = getFormattedDateYMDhm(data.commit.author.date);
    //добавить аттрибут datime в формате YYYY-MM-DD hh:mm
    commitCard.appendChild(date);

    const author = document.createElement('div');
    author.classList.add('commit-card__author');
    commitCard.appendChild(author);

    const text = document.createElement('p');
    text.classList.add('commit-text');
    text.textContent = data.commit.message;
    commitCard.appendChild(text);

    const avatar = document.createElement('img');
    avatar.classList.add('commit-card__avatar');
    avatar.src = data.author.avatar_url;
    avatar.alt = `аватар ${data.commit.author.name}`;
    author.appendChild(avatar);

    const authorInfo = document.createElement('div');
    authorInfo.classList.add('commit-card__author-info');
    author.appendChild(authorInfo);

    const name = document.createElement('h3');
    name.classList.add('commit-card__name');
    name.textContent = data.commit.author.name;
    authorInfo.appendChild(name);

    const mail = document.createElement('a');
    mail.classList.add('commit-card__mail');
    mail.href = `mailto:${data.commit.author.email}`;
    mail.textContent = data.commit.author.email;
    authorInfo.appendChild(mail);

    return template;
  }
}