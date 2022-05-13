import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import router from "./routers";
import { createPinia } from "pinia";

createApp(App).use(createPinia({})).use(router).mount("#app");
