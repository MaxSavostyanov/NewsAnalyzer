import "../styles/pages/about.css";
import "../vendor/swiper/swiper.min.js";
import {
  initializationSwiper,
} from "./modules/mySwiper.js";
import {
  GithubApi,
} from "./modules/githubApi";
import {
  GITHUB_BASE_URL,
  GITHUB_USERNAME,
  GITHUB_REPO,
  GITHUB_COUNT,
  GITHUB_TOKEN,
} from "./modules/variables";
import {
  CommitCard
} from "./modules/commitCard";

const container = document.querySelector(".swiper-wrapper");
const preloader = document.querySelector(".preloader");
const sectionCommits = document.querySelector(".commits");
const errorServer = document.querySelector("#error_server");


const githubApi = new GithubApi(GITHUB_BASE_URL, GITHUB_USERNAME, GITHUB_REPO, GITHUB_TOKEN, GITHUB_COUNT);
const commitCard = new CommitCard();
let storage;

preloader.classList.remove("preloader_is-hidden");
githubApi.getCommits().then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  })
  .then(commits => {
    storage = commits;
    console.log(storage);
  })
  .catch(() => {
    preloader.classList.add("preloader_is-hidden");
    errorServer.classList.remove('error_is-hidden');
  })
  .finally(() => {
    storage.forEach(commit => container.appendChild(commitCard.createCard(commit)));
    preloader.classList.add("preloader_is-hidden");
    sectionCommits.classList.remove("commits_is-hidden");
    initializationSwiper();
  });
  

