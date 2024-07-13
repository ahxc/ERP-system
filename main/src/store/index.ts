import { createStore } from 'vuex'
import { initGlobalState } from 'qiankun'

export default createStore({
  state: {
    local: 'zh'
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    setGlobalState(state: object) {
      return initGlobalState(state)
    },
  },
  modules: {
  }
})
