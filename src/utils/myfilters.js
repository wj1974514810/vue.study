
// import Vue from 'vue'

//创建一个过滤器
// Vue.filter('dataFrom', function (data, spe = '-') {
//     data = new Date(data);
//     let year = data.getFullYear();
//     let month = data.getMonth() + 1;
//     let day = data.getDate();
//     return `${year}${spe}${month < 10 ? "0" + month : month}${spe}${day < 10 ? "0" + day : day
//         }`;
// })


//引入 moment包
import moment from 'moment'
//封装过滤器
export const dataForm = function (data, spe = '-') {
    // data = new Date(data);
    // let year = data.getFullYear();
    // let month = data.getMonth() + 1;
    // let day = data.getDate();
    // return `${year}${spe}${month < 10 ? "0" + month : month}${spe}${day < 10 ? "0" + day : day
    //     }`;


    // locale('zh-cn') 变成中文
    return moment(data).locale('zh-cn').fromNow();
}