import React from "react";
import App from "./App";

const routes = [
    {
        component: Home,
        children: ["hello home"],
        params(o: any) {
            return Object.keys(o).length === 0;
        },
    },
    {
        component: Home,
        children: ["hello world"],
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
        props: { msg: "test props" },
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
function Home({ children }: React.PropsWithChildren<{}>) {
    return (
        <div>
            <h1>home</h1>
            <div>{children}</div>
        </div>
    );
}
function NotFound() {
    return <h1>not found</h1>;
}
function Foo() {
    return <h1>foo</h1>;
}
function Bar({ msg }: React.PropsWithChildren<{ msg: string }>) {
    return (
        <div>
            <h1>bar</h1>
            <div>{msg}</div>
        </div>
    );
}
