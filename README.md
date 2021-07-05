# search-hash-params-router

使用 location.search 和 location.hash 中查询参数的前端路由器

不需要"Path-to-RegExp"了

为路由器添加查询参数模式。基于历史记录模式。使用查询参数匹配而不是动态路由匹配。

Add query parameter mode for routers. Based on history mode. Use query parameter matching instead of dynamic route matching.

### What problem does this feature solve?

使用查询参数模式不需要服务器设置路由回退。

The use of query parameter mode does not require the server to set up route fallback.

If you don't want a very ugly hash, we can use the history mode of routing, which makes full use of the history.pushState API to complete the URL jump without reloading the page.

When you use the history mode, the URL is like a normal url.

I encountered the following problem using history mode.

However, to use this mode, you need to configure the background support.
If the background is not properly configured, when the user directly accesses in the browser, it will return 404.

I personally don't like the dynamic route matching mode, I like the query parameter matching mode.

E.g

```txt
https://nodejs.org/en/?foo=bar&baz=123

https://translate.google.cn/#view=home&op=translate&sl=zh-CN&tl=en
```

## install

```shell
pnpm  add @masx200/search-hash-params-router
```

### What does the proposed API look like?

Typescript declaration:

https://github.com/masx200/search-hash-params-router/blob/master/dist/index.d.ts

The query parameters can be obtained from location.search or location.hash.

The query parameters can be modified in the following ways.

The route matching method example is as follows:

examples

https://github.com/masx200/search-hash-params-router/tree/master/example/react/vite-project

## examples:

导入模块：

```js
import {
    createHashRouter,
    createSearchRouter,
    createReactView,
    createReactLink,
    matchroute,
} from "@masx200/search-hash-params-router";
```

创建路由条目：

```ts
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
```

接受路由参数：

```tsx
function Bar({
    msg,
    params,
}: React.PropsWithChildren<{ msg: string; params: any }>) {
    return (
        <div>
            <h1>bar</h1>
            <div>{msg}</div>
            <div>{JSON.stringify(params)}</div>
        </div>
    );
}
```

创建路由器：

```js
const hashrouter = createHashRouter();

const searchrouter = createSearchRouter();
```

监听路由参数的变化事件，监听路由匹配切换的变化：

```js
searchrouter.on("params", (p) => {
    console.log(p);

    console.log(matchroute(routes, p));
});
```

创建路由视图组件：

```js
const View = createReactView({
    router: searchrouter,
    createElement,
    useCallback,
    useEffect,
    useState,
});
```

创建路由链接组件：

```js
const Link = createReactLink({
    router: searchrouter,
    forwardRef,
    createElement,
});
```

使用路由视图和路由链接的例子：

```jsx
function RouterTest() {
    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <Link to={{}}>start</Link>
                <br />
                <Link to={{ p: "home" }}>home</Link>
                <br />
                <Link to={{ p: "app" }}>app</Link>
                <br />
                <Link to={{ p: "redirect" }}>redirect</Link>
                <br />
                <Link to={{ foo: "foo1" }}>foo</Link>
                <br />
                <Link to={{ bar: "bar1" }}>bar</Link>
                <br />
                <Link to={{ 404: "not" }}>404</Link>
            </div>
            <div style={{ textAlign: "center" }}>
                <View routes={routes} />
            </div>
        </div>
    );
}
```

挂载组件渲染：

```jsx
ReactDOM.render(
    <React.StrictMode>
        <RouterTest />
    </React.StrictMode>,
    document.getElementById("root")
);
```

编程式导航:

```tsx
function Programmaticnavigation() {
    function onclick() {
        searchrouter.setparams({ qqqqq: Math.random().toString() });
    }
    return <button onClick={onclick}>navigate </button>;
}
```
