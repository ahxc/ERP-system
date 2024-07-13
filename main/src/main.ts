import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun';
import { createI18n } from 'vue-i18n'

// 准备翻译的语言环境信息
const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

const i18n = createI18n({
  globalInjection: true, //全局生效$t
  locale: 'en',
  messages,
  legacy: false,
})

// 微应用配置
const apps = [
  {
    // 应用的名字 必填 唯一
    name: 'sub-app',
    // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    entry: '//localhost:8081/',
    // 挂载具体容器 ID
    container: '#subapp-container',
    // 根据路由匹配，激活的子应用
    activeRule: '/apms',
  }
]

// 注册微应用
registerMicroApps(apps);

// 启动微服务
start()

createApp(App).use(store).use(router).use(i18n).mount('#app')