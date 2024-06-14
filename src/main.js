import { createApp } from 'vue'
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons"

UIkit.use(Icons)

import './assets/styles/app.scss'
import './assets/styles/app.css'
import App from './App.vue'
import router from "./routes/index";

const app = createApp(App)
app.use(router)
app.mount('#app')
