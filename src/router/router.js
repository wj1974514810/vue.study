import Vue from 'vue'
import VueRouter from 'vue-router'

// 明确的安装路由功能
Vue.use(VueRouter)

// 引入路由映射所需要的组件
// import index from '../components/day06/myrouter/index.vue'
// import first from '../components/day06/myrouter/first.vue'

// 创建路由模块对象
const router = new VueRouter({
    //    添加路由配置，通过routes可以添加  是一个数组
    routes: [
        // 添加一个具体的路由配置，主要是实现，url地址(路由)和组件的映射关系
        // 它是一个对象 
        //  path: 路由路径 如/login
        //component:所映射的组件对象 --- 不是字符串
        {
            // name: 'index',
            path: '/index',
            component: () => import('../components/day06/myrouter/index.vue')
        },
        {
            path: '/first',
            component: () => import('../components/day06/myrouter/first.vue')
        }
        // 动态路由  ‘:’是标识符 
        // 如果没有传参数（id） 无法匹配路由
        // {
        //     path: '/first/:id',
        //     component: () => import('../components/day06/myrouter/first.vue')
        // }
    ]
})


export default router