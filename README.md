# search-hash-params-router
使用 location.search 和 location.hash中查询参数的前端路由器


Add query parameter mode for routers. Based on history mode. Use query parameter matching instead of dynamic route matching.

### What problem does this feature solve?

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



https://nodejs.org/en/?qqq=1&www=111

https://translate.google.cn/#view=home&op=translate&sl=zh-CN&tl=en

```

### What does the proposed API look like?

```js
const changelistener = () => {
  let hashparams = gethashparams();
  let searchparams = getsearchparams();
  console.log("hash params", hashparams);
  console.log("search params", searchparams);
};

window.addEventListener("popstate", changelistener);

window.addEventListener("hashchange", changelistener);

function assign(opt) {
  let params = getsearchparams();
  setsearchparams(Object.assign(params,opt));
}

function replace(opt) {
  setsearchparams(opt);
}

replace({ qqq: 1 });

assign({ www: 111 });

assign({ foo: "bar" });
```

The query parameters can be obtained from location.search or location.hash.

```js
function gethashparams() {
  return location.hash&& Object.fromEntries(new URLSearchParams(location.hash.slice(1)));
}
function getsearchparams() {
  return location.search&& Object.fromEntries(new URL(location.href).searchParams);
}
```

The query parameters can be modified in the following ways.

```js
function setsearchparams(opt) {
  let url = new URL(location.href);

  url.search = String(new URLSearchParams({ ...opt }));
  history.pushState(null, null, url.href);

  window.dispatchEvent(new Event("popstate"));
}

function sethashparams(opt) {
  let url = new URL(location.href);

  url.hash = String(new URLSearchParams({ ...opt }));
  history.pushState(null, null, url.href);

  window.dispatchEvent(new Event("hashchange"));
}
```

examples

```txt

location.href

"https://jspang.com/detailed?id=54"

getsearchparams()

{id: "54"}


```

examples:

```txt

location.href

"https://translate.google.cn/#view=home&op=translate&sl=zh-CN&tl=en"


gethashparams()

{view: "home", op: "translate", sl: "zh-CN", tl: "en"}

```

The route matching method example is as follows:

```js

const routes = [
  {
    component: Home,

    filter({ hash, search }) {
      return hash ==='' &&search===''
    },
  },
  {
    component: Foo,

    filter({ hash, search }) {
      return search.foo === "foo1";
    },
  },
  {
    component: Bar,

    filter({ hash, search }) {
      return hash.bar === "bar1";
    },
  },

  {
    component: NotFound,

    filter() {
      return true;
    },
  },
];

const router = new ParamsRouter({
  routes,
});
```
