import NotFound from "./NotFound.vue";
import { defineAsyncComponent } from "vue";
const Home = defineAsyncComponent(() => import("./Home.vue"));
const App = defineAsyncComponent(() => import("./App.vue"));
const Bar = defineAsyncComponent(() => import("./Bar.vue"));
const Foo = defineAsyncComponent(() => import("./Foo.vue"));
console.log(Bar);
const routes = [
    {
        redirect: { p: "app" },

        params(o: any) {
            return Object.keys(o).length === 0;
        },
    },
    {
        component: Home,

        params(o: any) {
            return o.p === "home";
        },
    },
    {
        component: App,

        params(o: any) {
            return o.p === "app";
        },
    },
    {
        component: Foo,

        params(o: any) {
            return o.foo === "foo1";
        },
    },
    {
        component: Bar,

        params(o: any) {
            return o.bar === "bar1";
        },
    },
    {
        params(o: any) {
            return "redirect" == o.p;
        },
        redirect: { p: "home" },
    },
    {
        component: NotFound,

        params() {
            return true;
        },
    },
];
export { routes };
