export class NewsCardsList {
  constructor(container){
    this._container = container;
  }

  addCard(newsCard) {
    this._container.appendChild(newsCard);
  }

  removeChilds() {
    [...this._container.children].forEach(newsCard => newsCard.remove());
  }
}