// Models
import { ApiOptions } from '../models/ApiOptions';
import { Article } from '../models/Article';

export default {
  getArticles(options: ApiOptions) {
    let url;
    url = 'https://jsonplaceholder.typicode.com/posts';
    // url = 'https://httpstat.us/500'; // Server error
    url = 'http://localhost:3001/api/v1/articles';
    const headers: Headers = new Headers();

    let myInit = {
      method: 'GET',
      headers,
      // mode: 'cors',
      // cache: 'default'
    };

    return fetch(url, myInit).then((response: any) => {
      switch (response.status) {
        case 500:
          throw new Error("Oops, the server broke...");

        default:
          return response.json();
      }
    });
  },

  addArticle(article: Article) {
    const url = 'http://localhost:3001/api/v1/articles';

    return fetch(url, { method: 'POST' }).then((response: any) => {
      switch (response.status) {
        case 500:
          throw new Error("Oops, the server broke...");

        default:
          return response.json();
      }
    })
  }
}
