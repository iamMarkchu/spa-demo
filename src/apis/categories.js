import request from './request'

export function getList() {
    return request.get('/categories')
}