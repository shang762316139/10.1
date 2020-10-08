//初始化数据
const state = {
    //商品列表
    shop_list: [{
            id: 100,
            imgurl: "/assets/hongmi5.jpg",
            title: "小米手机1",
            brief: "年轻人的酷玩具",
            price: 1999,
        },
        {
            id: 101,
            imgurl: "/assets/hongmi5.jpg",
            title: "小米手机2",
            brief: "年轻人的酷玩具",
            price: 2999,
        },
        {
            id: 102,
            imgurl: "/assets/hongmi5.jpg",
            title: "小米手机3",
            brief: "年轻人的酷玩具",
            price: 2999,
        },
        {
            id: 103,
            imgurl: "/assets/hongmi5.jpg",
            title: "小米手机4",
            brief: "年轻人的酷玩具",
            price: 2999,
        },
        {
            id: 104,
            imgurl: "/assets/hongmi5.jpg",
            title: "小米手机5",
            brief: "年轻人的酷玩具",
            price: 2999,
        },
        {
            id: 105,
            imgurl: "/assets/hongmi5.jpg",
            title: "小米手机6",
            brief: "年轻人的酷玩具",
            price: 2999,
        },
    ],

    //添加到购物车的商品
    added: []
}

//getter 抛出去的数据
const getters = {
    //商品列表
    shoplist: state => state.shop_list,
    //购物车的列表
    cartProducts: state => {
        return state.added.map(({ id, num }) => {
            let product = state.shop_list.find(n => n.id == id)
                // console.info('product',product)
            return {
                ...product,
                num
            }
        })
    },
    //计算总价
    totalPrice: (state, getters) => {
        let total = 0;
        getters.cartProducts.forEach(n => {
            total += n.price * n.num
        })
        return total;
    },
    //计算总数量
    totalNum: (state, getters) => {
        let total = 0;
        getters.cartProducts.forEach(n => {
            total += n.num
        })
        return total;
    },


}

//action 异步的操作
const actions = {
    //添加到购物车操作
    addToCart({ commit }, product) {
        commit('add', {
            id: product.id
        })
    },
    //清除购物车
    clearAllCart({ commit }) {
        commit('clearAll')
    },
    //删除购物车的指定的商品
    delProduct({ commit }, product) {
        commit('del', product)
    },
}

//mutation
const mutations = {
    //添加到购物车操作
    add(state, { id }) {
        let record = state.added.find(n => n.id == id);
        if (!record) {
            state.added.push({
                id,
                num: 1
            })
        } else {
            record.num++
        }
        // console.info(record)

    },
    //清除购物车
    clearAll(state) {
        state.added = []
    },
    //删除购物车的指定的商品
    del(state, product) {
        //console.info(state,product)
        state.added.forEach((n, i) => {
            if (n.id == product.id) {
                //console.info(11,n)
                //找到index的下标值
                state.added.splice(i, 1)
            }
        })
    },
}


export default {
    state,
    mutations,
    actions,
    getters,
};