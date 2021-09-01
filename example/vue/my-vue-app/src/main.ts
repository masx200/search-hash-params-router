import { createApp } from "vue";
import "./index.css";
import "./myfontandtextalign.css";
import routertest from "./routertest.vue";

const app = createApp(routertest);

app.mount(document.querySelector("#app") || "#app");
!(
async()=>{
if (process.env.NODE_ENV === "production") {
    //@ts-ignore
    const { registerSW } = await import("virtual:pwa-register");

    registerSW({});
}
})()