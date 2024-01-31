import { createApp } from 'vue'
import './style.css'
import VueCesium from 'vue-cesium'
import App from './App.vue'
import 'vue-cesium/dist/index.css'
const app=createApp(App)
app.use(VueCesium,{
    cesiumPath:"/Cesium@1.113.0/Cesium.js"
})
app.mount('#app')
