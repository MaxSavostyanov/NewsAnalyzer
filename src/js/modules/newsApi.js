export class NewsApi {
  constructor(url, key){
    this._key = key;
    this._url = url;
  }

  getNews(keyword, from, to, size){
    return fetch(`${this._url}/everything?
		q=${keyword}&
		from=${from}&
		to=${to}&
		language=ru
		&pageSize=${size}&
		apiKey=${this._key}`)
	}
}
