import { createApp, defineAsyncComponent } from "vue";
import routertest from "./routertest.vue";
const Home = defineAsyncComponent(() => import("./Home.vue"));
const app = createApp(routertest);
app.component("Home", Home);
app.mount(document.querySelector("#app") || "#app");
import "./index.css";
