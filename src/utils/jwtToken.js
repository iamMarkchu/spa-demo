export default {
    setToken(token) {
        window.localStorage.setItem('jwt_token', token)
    },
    getToken() {
        return window.localStorage.getItem('jwt_token')
    },
    delToken() {
        window.localStorage.removeItem('jwt_token')
        console.log('delete jwt token')
    }
}