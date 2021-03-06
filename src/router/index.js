import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import welcome from "../components/welcome.vue"
import User from "../components/user/User.vue"

Vue.use(Router)
const router=new Router ({
    routes:[
        {path:'/', redirect:'/login'},
        {path:'/login', component:Login},
        {path:'/home',
            component:Home,
            redirect:'/welcome',
            children:[{
                path:'/welcome',component:welcome
            },
                {
                    path:'/users',component: User
                }

            ]
        },
        ]
})
//挂载路由导航守卫
router.beforeEach((to, from, next) => {
    //to将要跳转的路径
    //from代表从那个路径跳转而来
    //next是一个函数，表示放行
    //next（）放行 next（‘、login’）强制跳转
    if(to.path==='/login')return next();
    //获取token，
    window.sessionStorage.getItem('token');
    //获取token
    const tokenStr=window.sessionStorage.getItem('token');
    if(!tokenStr)return next('/login');
    next()
})
export default router
