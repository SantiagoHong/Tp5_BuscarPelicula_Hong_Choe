import axios from "axios";

const api = axios.create({
    baseURL: 'http://www.omdbapi.com/?apikey=e26944ed',
})

export default api