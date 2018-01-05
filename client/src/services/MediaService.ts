// Models
// import { File } from '../models/File';

let url = 'http://localhost:3001/api/v1/media';

export default {
  getMedias(options: any) {
    console.log('getting media')
    // if (options) {
    //   url += '?';
    //   Object.keys(options).forEach((key: any) => {
    //     url += `${key}=${options[key]}&`;
    //   });
    // }

    // const reqParams = {
    //   method: 'GET',
    // };

    // return fetch(url, reqParams).then((response: any) => {
    //   switch (response.status) {
    //     case 500:
    //       throw new Error("Oops, the server broke...");

    //     default:
    //       return response.json();
    //   }
    // });
  },

  addMedia(file: any, metaData?: any) {
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

  deleteMedia(id: number) {
    console.log('deleting media')
    // const request = new Request(`${url}/${id}`, {
    //   method: 'DELETE'
    // });

    // return fetch(request).then((response: any) => {
    //   switch (response.status) {
    //     case 500:
    //       throw new Error("Oops, the server broke...");

    //     default:
    //       console.log(response);
    //       return response.json();
    //   }
    // });
  }
}
