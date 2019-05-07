class BaseApi {
    async get (url) {
        const response = await fetch(url)
        const { data, errors } = await response.json()
        if (!errors) {
            return data
        }
    }
}
export { BaseApi }
