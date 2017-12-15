// Models
// import { ApiOptions } from '../models/ApiOptions';

export default {
  getArticles(options: any) {
    let url;
    url = 'https://jsonplaceholder.typicode.com/posts';
    // url = 'https://httpstat.us/500'; // Server error
    // url = 'http://localhost:3001/api/v1/articles';
    const myHeaders: Headers = new Headers();

    let myInit = {
      method: 'GET',
      headers: myHeaders,
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
    })
  }
}
