export class NewsCardsList {
  constructor(container){
    this.container = container;
  }

  addCard(newsCard) {
    this.container.appendChild(newsCard);
  }

  removeChilds() {
    [...this.container.children].forEach(newsCard => newsCard.remove());
  }
}