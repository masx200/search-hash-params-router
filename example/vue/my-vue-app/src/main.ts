import { createApp } from "vue";
import "./index.css";
import "./myfontandtextalign.css";
import routertest from "./routertest.vue";

const app = createApp(routertest);

app.mount(document.querySelector("#app") || "#app");
import { registerSW } from "virtual:pwa-register";

registerSW({});
