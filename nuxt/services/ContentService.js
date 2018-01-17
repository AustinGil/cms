import fetch from "isomorphic-fetch";

export default {
  getContents(options) {
    let url = "http://localhost:3001/api/v1/contents";

    if (options) {
      url += "?";
      Object.keys(options).forEach(key => {
        url += `${key}=${options[key]}&`;
      });
    }

    const reqParams = {
      method: "GET"
    };

    return fetch(url, reqParams).then(response => {
      console.log(response);
      switch (response.status) {
        case 500:
          throw new Error("Oops, the server broke...");

        default:
          return response.json();
      }
    });
  },

  addContent(content) {
    let url = "http://localhost:3001/api/v1/contents";
    const headers = new Headers({
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    });
    // TODO: Add backend validation
    const reqParams = {
      method: "POST",
      headers,
      body: JSON.stringify(content)
    };
    return fetch(url, reqParams).then(response => {
      switch (response.status) {
        case 500:
          throw new Error("Oops, the server broke...");

        default:
          return response.json();
      }
    });
  },

  deleteContent(contentId) {
    let url = "http://localhost:3001/api/v1/contents";
    const request = new Request(`${url}/${contentId}`, {
      method: "DELETE"
    });

    return fetch(request).then(response => {
      switch (response.status) {
        case 500:
          throw new Error("Oops, the server broke...");

        default:
          console.log(response);
          return response.json();
      }
    });
  }
};
