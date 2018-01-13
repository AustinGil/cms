import fetch from 'isomorphic-fetch'

export default {
  getContents (options) {
    let url = 'http://localhost:3001/api/v1/contents'

    if (options) {
      url += '?'
      Object.keys(options).forEach(key => {
        url += `${key}=${options[key]}&`
      })
    }

    const reqParams = {
      method: 'GET'
    }

    return fetch(url, reqParams).then(response => {
      switch (response.status) {
        case 500:
          throw new Error('Oops, the server broke...')

        default:
          return response.json()
      }
    })
  }
}
