import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// bootstrap-vue for bootstrap4 and vue2
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// import bootstrap css for bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JavaScript. needs @types/bootsrap
import 'bootstrap';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
