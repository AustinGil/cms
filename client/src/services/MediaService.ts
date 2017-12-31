// Models

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

  addMedia(content: any) {
    const headers = new Headers({
      'Content-Type': 'multipart/form-data'
    });

    let formData: any = new FormData();

    Object.keys(content).forEach((key: any) => {
      formData.append(key, content[key]);
    });

    console.log(formData.entries());

    const reqParams = {
      method: 'POST',
      headers,
      body: formData
    }
    return fetch(url, reqParams).then((response: any) => {
      console.log(response);
      // switch (response.status) {
      //   case 500:
      //     throw new Error("Oops, the server broke...");

      //   default:
      //     return response.json();
      // }
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
