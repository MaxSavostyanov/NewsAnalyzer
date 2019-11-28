export class GithubApi {
  constructor(url, username, repo, token, count) {
    this.url = url;
    this.username = username;
    this.repo = repo;
    this.token = token;
    this.countCommits = count;

  }

  getCommits() {
    return fetch(`${this.url}/repos/${this.username}/${this.repo}/commits?per_page=${this.countCommits}`, {
      headers: {
        authorization: `token ${this.token}`,
      }
    })
  }
}
