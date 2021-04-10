// es6语法
// import Vue from 'vue';

// // 全局指令
// Vue.directive('mycolor', {
//     inserted(el, binding) {
//         el.style.color = binding.value
//     }
// })


//封装指令的主体
export const mycolor = {
    inserted(el, binding) {
        el.style.color = binding.value
    }
}

export const myfocus = {
    inserted(el) {
        el.focus()
    }
}

