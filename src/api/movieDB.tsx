import axios from 'axios';


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '1865f43a0549ca50d341dd9ab8b29f49',
        language: 'es-ES'
    }
});


export default movieDB;


