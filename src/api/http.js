import { apiGet, apiPost, } from "./api";
export function getCode(sun) {
    return new Promise((resolve, reject) => {
        apiGet("index.php/index/cal]center/getheaders", sun).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}

export function getLogin(sun) {
    return new Promise((resolve, reject) => {
        apiPost("index.php/index/callcenter/getheaders", sun).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}
export function getImges(sun) {
    return new Promise((resolve, reject) => {
        apiPost("index.php/index/upload/uploadimg", {
            imgurl: sun
        }).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}
export function getForm(sun) {
    return new Promise((resolve, reject) => {
        apiPost("index.php/index/index/mycenter", sun).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}