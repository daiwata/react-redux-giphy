import axios from 'axios'

const giphyApi = word => {
    const search = word
    const key = 'fjkFSdzcC0ZSKJ26mGAn5uuDgSQhxthQ'
    const limit = 3
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`

    return axios.get(url)
}
export default giphyApi