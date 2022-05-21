import youtubeHelper from "../../assets/javascripts/helpers/youtube/youtube.js";
import twitterHelper from "../../assets/javascripts/helpers/twitter.js";
import redditHelper from "../../assets/javascripts/helpers/reddit.js";
import searchHelper from "../../assets/javascripts/helpers/search.js";
import translateHelper from "../../assets/javascripts/helpers/translate/translate.js";
import wikipediaHelper from "../../assets/javascripts/helpers/wikipedia.js";
import tiktokHelper from "../../assets/javascripts/helpers/tiktok.js";

window.browser = window.browser || window.chrome;

await youtubeHelper.setInvidiousCookies();
await translateHelper.setSimplyTranslateCookies();
await twitterHelper.setNitterCookies();
await wikipediaHelper.setWikilessCookies();
await searchHelper.setSearxCookies();
await searchHelper.setSearxngCookies();
await redditHelper.setLibredditCookies();
await redditHelper.setTedditCookies();
await tiktokHelper.setProxiTokCookies();

window.close()