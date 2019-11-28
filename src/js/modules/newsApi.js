export class NewsApi {
  constructor(url, key){
    this.key = key;
    this.url = url;
  }

  getNews(keyword, from, to, size){
    return fetch(`${this.url}/everything?
		q=${keyword}&
		from=${from}&
		to=${to}&
		language=ru
		&pageSize=${size}&
		apiKey=${this.key}`)
	}
}
