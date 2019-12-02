export class GithubApi {
  constructor(url, username, repo, token, count) {
    this._url = url;
    this._username = username;
    this._repo = repo;
    this._token = token;
    this._countCommits = count;
  }

  getCommits() {
    return fetch(`${this._url}/repos/${this._username}/${this._repo}/commits?per_page=${this._countCommits}`, {
      headers: {
        authorization: `token ${this._token}`,
      }
    })
  }
}
