import { NotFound } from "./NotFound";
import { lazy } from "react";
const Home = lazy(() => import("./Home"));
const App = lazy(() => import("./App"));
const Bar = lazy(() => import("./Bar"));
const Foo = lazy(() => import("./Foo"));
const routes = [
    {
        component: Home,

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
