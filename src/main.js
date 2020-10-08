import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入第三方组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(MintUI)
    // import Vuex from './views/datails/index'

import Vuex from './components/vuex.vue'


import store from './store/index'
//引入第三方组件
// import Vant from 'vant'
// import 'vant/lib/index.css'

// Vue.use(Vant)

// Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store,
    template: '<Vuex/>',
    components: { Vuex }
}).$mount('#app')