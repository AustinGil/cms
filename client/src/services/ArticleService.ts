// Models
import { ApiOptions } from '../models/ApiOptions';
import { Article } from '../models/Article';

let url = 'http://localhost:3001/api/v1/articles';

const headers = new Headers({
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
});

export default {
  getArticles(options: ApiOptions) {
    // url = 'https://jsonplaceholder.typicode.com/posts';
    // url = 'https://httpstat.us/500'; // Server error
    let reqParams = {
      method: 'GET',
      // headers
    };
    return fetch(url, reqParams).then((response: any) => {
      switch (response.status) {
        case 500:
          throw new Error("Oops, the server broke...");

        default:
          return response.json();
      }
    });
  },

  addArticle(article: Article) {
    // TODO: Add backend validation
    const reqParams = {
      method: 'POST',
      headers,
      body: JSON.stringify(article)
    }
    return fetch(url, reqParams).then((response: any) => {
      switch (response.status) {
        case 500:
          throw new Error("Oops, the server broke...");

        default:
          return response.json();
      }
    });
  },

  deleteArticle(articleId: number) {

    const request = new Request(`${url}/${articleId}`, {
      method: 'DELETE'
    });

    return fetch(request).then((response: any) => {
      switch (response.status) {
        case 500:
          throw new Error("Oops, the server broke...");

        default:
          console.log(response);
          return response.json();
      }
    });
  }
}
