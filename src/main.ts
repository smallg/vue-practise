import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "~/styles/index.scss";
import 'uno.css'
import "element-plus/theme-chalk/src/message.scss"

const app = createApp(App)

const pinia = createPinia()
// Fix can not reset store in view
pinia.use(({ store }) => {
  const initialState = JSON.parse(JSON.stringify(store.$state));
  store.$reset = () => {
    store.$state = JSON.parse(JSON.stringify(initialState));
  }
});
app.use(pinia)
app.use(router)

app.mount('#app')
