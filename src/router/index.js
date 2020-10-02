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
                import ("../views/fenLei/index.vue")
        },
        {
            path: '/cart',
            component: () =>
                import ("../views/cart/index.vue")
        },

        {
            path: '/login',
            component: () =>
                import ("../views/login/index.vue")
        }
    ],
    linkActiveClass: 'active'
})
export default router