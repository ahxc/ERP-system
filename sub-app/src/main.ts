import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

let app: any = null;

function render(props: any) {
  const { container } = props;
  props.onGlobalStateChange((state: any) => {
    console.log(state)
  })

  app = createApp(App).use(store).use(router)
    // .use(ElementPlus, { // 全局引入太大
    //   locale: zhCn,
    // })
    .mount(container ? container.querySelector('#app') : '#app')
}

export async function bootstrap() {
}

export async function mount(props: any) {
  render(props);
}

export async function unmount() {
  app.unmount();
  app = null;
}

// 独立运行时
if (!(window as any).__POWERED_BY_QIANKUN__) {
  app = createApp(App).use(store).use(router)
    .mount('#app')
}