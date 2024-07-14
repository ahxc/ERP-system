import { initGlobalState } from 'qiankun'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

// 为 store state 声明类型
export interface State {
  locale?: string, // 当前语言
  title?: string,
  languageList?: object[], // 可选语言列表
  drawer?: boolean,
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

const initState = () => {
  return {
    locale: 'zhCn', // 当前语言，命名规则以element语言库为标准
    title: '作家助手', // 页面标题
    languageList: [
      { code: 'zhCn', label: "简体中文" },
      { code: 'en', label: "English" },
    ],
    drawer: false,
  }
}

export function useStore() {
  return baseUseStore(key)
}

export const store = createStore<State>({
  state: initState,
  mutations: {
    setState(state: State, payload: State) {
      Object.assign(state, payload)
    },
  },
  getters: {
  },
  actions: {
    setGlobalState(state: object) {
      return initGlobalState(state)
    },
  },
  modules: {
  }
})
