import axios from 'axios'
import JwtToken from './../utils/jwtToken'

const service = axios.create({
    baseURL: 'http://api.spa.test',
    timeout: 5000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json'
    }
})

service.interceptors.request.use(config => {
    if (JwtToken.getToken()) {
        config.headers['Authorization'] = 'Bearer ' + JwtToken.getToken()
    }
    return config
})

export default service