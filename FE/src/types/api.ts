import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:7151/api/',
});

export default instance;