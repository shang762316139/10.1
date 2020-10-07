import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    num: 1
};
const mutations = {
    //事件
    add() {
        state.num++
    },
    reduce() {

        if (state.num < 1) {
            state.num == 1
        }
        state.num--
    }
};
const getters = {

};
const actions = {
    //分发事件
};
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})