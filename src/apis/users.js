import request from './request'

export function login(data) {
    return request({
        method: 'POST',
        url: '/login',
        data
    })
}


export function register(data) {
    return request({
        method: 'POST',
        url: '/register',
        data
    })
}

export function get() {
    return request({
        method: 'get',
        url: '/user'
    })
}