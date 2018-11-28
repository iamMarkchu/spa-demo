import request from './request'

export function getList() {
    return request.get('/categories')
}

export function getAll() {
    return request.get('/categories-all')
}