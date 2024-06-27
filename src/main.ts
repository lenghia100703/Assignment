import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import App from './App.vue'
import './assets/base.css'

const app = createApp(App)

app.use(ElementPlus)

app.mount('#app')
