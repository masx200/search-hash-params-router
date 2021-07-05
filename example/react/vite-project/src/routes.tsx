import React from "react";

const routes = [
    {
        component: Home,
        children: ["hello world"],
        params(o: { p: string }) {
            return o.p === "home";
        },
    },
    {
        component: Foo,

        params(o: { foo: string }) {
            return o.foo === "foo1";
        },
    },
    {
        component: Bar,
        props: { msg: "test props" },
        params(o: { bar: string }) {
            return o.bar === "bar1";
        },
    },
    {
        params(o: { p: any }) {
            return !o.p;
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
