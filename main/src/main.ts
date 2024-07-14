import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import { registerMicroApps, start } from 'qiankun';
import { createI18n } from 'vue-i18n'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 准备翻译的语言环境信息
const messages = {
  en: {
    header: {
      languages: 'Languages',
      title: 'hello world',
    },
  },
  zhCn: {
    header: {
      languages: '选择语言',
      title: '你好，世界',
    },
  }
}

export const i18n = createI18n({
  globalInjection: true, //全局生效$t
  locale: 'zhCn',
  messages,
  legacy: false,
})

// 微应用配置
const apps = [
  {
    // 应用的名字 必填 唯一
    name: 'writing-assistant',
    // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    entry: '//localhost:8081/',
    // 挂载具体容器 ID
    container: '#subapp-container',
    // 根据路由匹配，激活的子应用
    activeRule: '/writing-assistant',
  }
]

// 注册微应用
registerMicroApps(apps);

// 启动微服务
start()

const app = createApp(App)

// 图标icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store, key).use(router).use(i18n).mount('#app')