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

### What does the proposed API look like?


The query parameters can be obtained from location.search or location.hash.


The query parameters can be modified in the following ways.



examples


examples:



The route matching method example is as follows:

```js
const routes = [
    {
        component: Home,

        params(o) {
            return o.p="home";
        },
    },
    {
        component: Foo,

        params(o) {
            return o.foo === "foo1";
        },
    },
    {
        component: Bar,

        params(o) {
            return o.bar === "bar1";
        },
    },
{params(){},redirect:{p:"home"}},
    {
        component: NotFound,

        params() {
            return true;
        },
    },
];

const hashrouter = createHashRouter();

const searchrouter=createSearchRouter()
```
