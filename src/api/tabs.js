import axios from '../utils/tabsAxios'

export const getGoodsList = () => {
    return axios({
        url: '/api/goods',

    })
}