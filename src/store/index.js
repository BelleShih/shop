import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 購物車內的東西
    items: []
  },
  mutations: {
    // state 代表上面的 state
    // data 代表傳入的吃資料
    // 一定要呼叫 function 去改變上面 items 的狀態
    addCart (state, data) {
      state.items.push(data)
    },
    delCart (state, index) {
      state.items.splice(index, 1)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    items (state) {
      return state.items
    }
  }
})
