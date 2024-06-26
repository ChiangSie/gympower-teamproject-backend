import './assets/sass/style.scss'

import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import 'view-ui-plus/dist/styles/viewuiplus.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ViewUIPlus)
app.mount('#app')
