// Models
import { ApiOptions } from '../models/ApiOptions';
import { Article } from '../models/Article';

const url = 'http://localhost:3001/api/v1/articles';
// const headers = {
//   'Accept': 'application/json, text/plain, */*',
//   'Content-Type': 'application/json'
// };
const headers = new Headers({
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
});

export default {
  getArticles(options: ApiOptions) {
    // url = 'https://jsonplaceholder.typicode.com/posts';
    // url = 'https://httpstat.us/500'; // Server error
    // const headers: Headers = new Headers();
    let reqParams = {
      method: 'GET',
      // headers,
      // mode: 'cors',
      // cache: 'default'
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

  deleteArticles(articleIds: number | number[]) {
    // const reqParams = {
    //   method: 'DELETE',
    //   headers,
    //   body: JSON.stringify(articleIds)
    // }
    // return fetch(url, reqParams).then((response: any) => {
    //   console.log(response.json())
    //   // switch (response.status) {
    //   //   case 500:
    //   //     throw new Error("Oops, the server broke...");

    //   //   default:
    //   //     return response.json();
    //   // }
    // });


    const request = new Request(url, {
      method: 'DELETE',
      mode: 'cors',
      headers,
      body: JSON.stringify(articleIds)
    });

    console.log(request);

    return fetch(request).then((response: any) => {
      console.log(response);
      // switch (response.status) {
      //   case 500:
      //     throw new Error("Oops, the server broke...");

      //   default:
      //     return response.json();
      // }
    });
  }
}
