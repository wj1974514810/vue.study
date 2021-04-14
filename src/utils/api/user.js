import axios from '../request.js'


export const login = function (data) {
    return axios({
        method: 'post',
        url: '/login',
        data
    })
}