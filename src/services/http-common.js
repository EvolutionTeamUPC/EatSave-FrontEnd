import axios from 'axios'
import Cookies from 'js-cookie'

const buildHeader = () => {
    const token = Cookies.get('token')
    if (token) {
        return {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    return {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
}
export default axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: buildHeader()
});
