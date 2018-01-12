// Models
// import { File } from '../models/File';


export default {
  getMedia(options?: any) {
    let url = 'http://localhost:3001/api/v1/media';

    if (options) {
      url += '?';
      Object.keys(options).forEach((key: any) => {
        url += `${key}=${options[key]}&`;
      });
    }

    return fetch(url).then((response: any) => {
      switch (response.status) {
        case 500:
          throw new Error("Oops, the server broke...");

        default:
          return response.json();
      }
    });
  },

  addMedia(file: any, metaData?: any) {
    let url = 'http://localhost:3001/api/v1/media';

    // Create a multipart form and add the data.
    const data = new FormData();
    data.append("file", file);
    if (metaData) {
      Object.keys(metaData).forEach((key: any) => {
        data.append(key, metaData[key]);
      });
    }

    const reqParams = {
      method: 'POST',
      body: data
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

  deleteMedia(id?: number) {
    let url = 'http://localhost:3001/api/v1/media';

    if (!id) {
      throw new Error('Missing ID parameter');
    }

    url += `?id=${id}`;

    const reqParams = {
      method: 'DELETE',
    }

    return fetch(url, reqParams).then((response: any) => {
      switch (response.status) {
        case 500:
          throw new Error("Oops, the server broke...");

        default:
          return response.json();
      }
    });
  }
}
