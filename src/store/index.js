import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 定义一个容器

let store = new Vuex.Store({
  state: {
    count: 100
  },
  mutations: {
    add (state, payload) {
      state.count += payload.n
    },
    sub (state, payload) {
      state.count -= payload.de
    },
    mo (state) {
      state.count += 100
    }
  },
  getters: {
    count: state => (state.count += 50)
  }
})

export default store
