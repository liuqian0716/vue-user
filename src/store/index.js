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
    mo (state, n) {
      state.count += n
    },
    reduce (state) {
      state.count --
    }
  },
  getters: {
    count: state => (state.count += 50)
  },
  actions: {
    addAction (context) {
      context.commit('mo', 10)
    },
    reduceAction ({commit}) {
      commit('reduce')
    }
  }
})

export default store
