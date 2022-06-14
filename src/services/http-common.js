import axios from 'axios'

export default axios.create({
    baseURL: 'https://eatsavewebapplication.azurewebsites.net/api',
    headers: {
        'Content-type': 'application/json'
    }
});
