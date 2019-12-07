import {
  getFormattedDateRU,
  getFormattedDateYMDhm,
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
    
    const description = document.createElement('div');
    description.classList.add('news__description');
    template.appendChild(description);

    const date = document.createElement('time');
    date.classList.add('news__date');
    //добавить аттрибут datetime в формате YYYY-MM-DD hh:mm
    date.textContent = getFormattedDateRU(newsData.publishedAt);
    date.dateTime = getFormattedDateYMDhm(newsData.publishedAt);
    description.appendChild(date);

    const heading = document.createElement('h3');
    heading.classList.add('news__heading');
    heading.textContent = newsData.title;
    description.appendChild(heading);

    const resume = document.createElement('p');
    resume.classList.add('news__resume');
    resume.textContent = newsData.description;
    description.appendChild(resume);

    const agency = document.createElement('p');
    agency.classList.add('news__agency');
    agency.textContent = newsData.source.name;
    description.appendChild(agency);

    return template;
  }
}