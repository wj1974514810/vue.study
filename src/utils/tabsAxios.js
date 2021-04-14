/* 封装axios */
import axios from 'axios'

// export default axios.create({
//     baseURL: "https://www.escook.cn"
// })

axios.defaults.baseURL = 'https://www.escook.cn'
export default axios