function fetchPost(url, headers, body) {
    return new Promise((res, rej) => {
        var status
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                ...headers
            },
            body: JSON.stringify(body)
        }).then(response => {
            status = response.status
            return response.json()
        }).then(responsJson => {
            res({ status: status, data: responsJson })
        }).catch((e) => {
            res({ status: 500, data: [] })
        })
    })
}
export { fetchPost }