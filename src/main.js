import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui'

Vue.use(ElementUI)

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
