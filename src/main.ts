import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import 'vant/lib/index.css'
import { NavBar } from 'vant'

createApp(App)
.use(router)
.use(ElementPlus)
.use(NavBar)
.mount('#app')
