import request from './request'

export function getList() {
    return request.get('/configs')
}

export function getAll() {
    return request.get('/configs-all')
}

export function update(data, id) {
    return request.put('/configs/' +id, data)
}

export function store(data) {
    return request.post('/configs', data)
}

export function del(id) {
    return request.delete('/configs/' + id)
}