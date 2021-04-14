/* 封装axios */
import axios from 'axios'

// export default axios.create({
//     baseURL: "http://157.122.54.189:9083"
// })

axios.defaults.baseURL = 'http://157.122.54.189:9083'
export default axios