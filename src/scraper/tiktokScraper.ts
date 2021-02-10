import axios from 'axios';
import jsdom from 'jsdom';

export const tiktokScraper = async (username: string) => {
  const url = `https://www.tiktok.com/@${username}`;

  const { JSDOM } = jsdom;

  const body = await axios.get(url);
  const dom = new JSDOM(body.data);

  const usernameUrl = dom.window.document.querySelector('h2.jsx-2568837260');
  const nameUrl = dom.window.document.querySelector('h1.share-sub-title');
  const followingUrl = dom.window.document.querySelector("div.number strong[title = 'Following']");
  const followersUrl = dom.window.document.querySelector("div.number strong[title = 'Followers']");
  const likesUrl = dom.window.document.querySelector("div.number strong[title = 'Likes']");

  const imageUrl = dom.window.document.querySelector('span.tiktok-avatar img');
  const descriptionUrl = dom.window.document.querySelector('h2.share-desc');

  return {
    username: usernameUrl.textContent.trim(),
    name: nameUrl.textContent,
    following: followingUrl.textContent,
    followers: followersUrl.textContent,
    likes: likesUrl.textContent,
    imageUrl: imageUrl.getAttribute('src'),
    description: descriptionUrl.textContent,
  }
};
