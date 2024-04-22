import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router"; // Corrected import name
import App from "./App.vue";
 
 
import "./assets/main.css";

const app = createApp(App);
app.use(createPinia());
app.use(router); // Corrected usage of router
app.mount("#app");

