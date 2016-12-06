/**
 * Created by jiangyukun on 2016/11/26.
 */

function preHandle(url, option) {
    if (process.env.NODE_ENV == 'dev_2' || process.env.NODE_ENV == 'production') {
        url = '/backend' + url
    }
    option = option || {}

    let param = option.body
    if (param && param.length) {
        param.limit = param.length
    }
    option = {
        ...option,
        credentials: 'include',
        headers: {
            'Accept': 'application/json;charset=utf-8',
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(option.body),
    }

    return {url, option}
}

function method(type) {
    return function (url, option) {
        option = option || {}
        option.method = type
        let handleArg = preHandle(url, option)

        return new Promise((resolve, reject) => {
            fetch(handleArg.url, handleArg.option).then(response => response.json()).then(result => {
                try {
                    if (result.status == 0) {
                        resolve(result['data'])
                    } else {
                        reject(result['errMsg'])
                    }
                } catch (err) {
                    throw err
                }
            }).catch(err => reject(err))
        })
    }
}

export let GET = method('get')
export let POST = method('post')
export let PUT = method('put')

export default function http(url, option) {
    //http://admin.vongihealth.com:85
    let handleArg = preHandle(url, option)

    return fetch(handleArg.url, handleArg.option)
}
