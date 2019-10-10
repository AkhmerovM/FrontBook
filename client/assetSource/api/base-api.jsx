function getOptions(options, method) {
  return {
    body: JSON.stringify({...options}),
    method: method,
    headers: {
      "Content-Type": "application/json"
    }
  }
}
class BaseApi {
    static get (url) {
      return fetch(url).then(response => response.json());
    }

    static post (url, options) {
      return fetch(url, getOptions(options, 'post')).then(response => response.json());
    }
}
export { BaseApi };
