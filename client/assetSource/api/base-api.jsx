function getOptions(options, method) {
  return {
    ...options,
    method: method,
  }
}
class BaseApi {
    static get (url) {
        return fetch(url).then((response) => {
          return response.json();
        });
    }
    static post (url, options) {
      console.log(getOptions(options, 'post'))
      return fetch(url, ).then((response) => {
        console.log(response)
        return response.json();
      });
    }
}
export { BaseApi };
