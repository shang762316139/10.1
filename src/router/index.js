import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/home'
        }, {
            path: '/home',
            redirect: "/home/tuijian",
            component: () =>
                import ("../views/home/index.vue"),
            children: [{
                    path: "tuijian",
                    name: "Tuijian",
                    component: () =>
                        import ("../views/home/tuijian")
                },
                {
                    path: "xiaomishouji",
                    name: "Xiaomishouji",
                    component: () =>
                        import ("../views/home/xiaomishouji"),
                },
                {
                    path: "hongmi",
                    name: "Hongmi",
                    component: () =>
                        import ("../views/home/hongmi"),
                }
            ]
        },
        {
            path: '/fenLei',
            component: () =>
                import ("../views/fenLei/index.vue"),
            redirect: '/fenLei/all',
            children: [

                {
                    path: 'all',
                    name: 'All',
                    component: () =>
                        import ('../views/fenLei/all/index.vue')
                },
                {
                    path: 'iphone',
                    name: 'Iphone',
                    component: () =>
                        import ('../views/fenLei/iphone/index.vue')
                },
                {
                    path: 'ai',
                    name: 'Ai',
                    component: () =>
                        import ('../views/fenLei/ai/index.vue')
                },
                {
                    path: 'tv',
                    name: 'Tv',
                    component: () =>
                        import ('../views/fenLei/tv/index.vue')
                },
            ],
        },
        {
            path: '/cart',
            component: () =>
                import ("../views/cart/index.vue"),
            //进行二级路由跳转
        },
        {
            path: '/mine',
            component: () =>
                import ("../views/mine/index.vue")
        },
        {
            path: '/login',
            component: () =>
                import ("../views/login/index.vue")
        },
        {
            path: '/register',
            component: () =>
                import ("../views/register/index.vue")
        },
        {
            path: '/myOrder',
            component: () =>
                import ("../views/myOrder/index.vue")
        },
        {
            path: '/about',
            component: () =>
                import ("../views/about/index.vue")
        }
    ],
    linkActiveClass: 'active'
})
export default router