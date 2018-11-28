import request from './request'

export function getList() {
    return request.get('/tags')
}

export function getAll() {
    return request.get('/tags-all')
}