// Models
import { ApiOptions } from '../models/ApiOptions';
import { Content } from '../models/Content';

let url = 'http://localhost:3001/api/v1/contents';

const headers = new Headers({
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
});

export default {
  getContents(options: any) {
    if (options) {
      url += '?';
      Object.keys(options).forEach((key: any) => {
        url += `${key}=${options[key]}&`;
      });
    }

    // url = 'https://jsonplaceholder.typicode.com/posts';
    // url = 'https://httpstat.us/500'; // Server error
    const reqParams = {
      method: 'GET',
      // headers,
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

  addContent(content: Content) {
    // TODO: Add backend validation
    const reqParams = {
      method: 'POST',
      headers,
      body: JSON.stringify(content)
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

  deleteContent(contentId: number) {

    const request = new Request(`${url}/${contentId}`, {
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
