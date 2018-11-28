import request from './request'

export function getList() {
    return request.get('/articles')
}

export function store(data) {
    return request.post('/articles', data)
}

export function update(data, id) {
    return request.put('/articles/' + id, data)
}

export function del(id) {
    return request.delete('/articles/'+id)
}

export function publish(id) {
    return request.put('/articles/'+id + '/publish')
}

export function revoke(id) {
    return request.put('/articles/'+id + '/revoke')
}

export function show(id) {
    return request.get('/articles/' + id)
}

export function publicShow(id) {
    return request.get('/public/articles/' + id)
}

export function publicGetList(params) {
    return request.get('/public/articles', {
        params
    })
}