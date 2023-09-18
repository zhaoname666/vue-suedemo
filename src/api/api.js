const axios = require('axios');

axios.defaults.baseURL = 'http://47.94.4.201/'
export function apiGet(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,

        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err)
        })
    });
}
export function apiGetList(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    });
}
export function apiPost(url, params) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: url,
            headers: {
                "strheader": "abcz",
            },
            data: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => { reject(err.data) })
    });
}