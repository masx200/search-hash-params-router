# search-hash-params-router

使用 `location.search` 和 `location.hash` 中查询参数的前端路由器,

支持在 `react`17 和 `vue`3 中使用.

不需要"Path-to-RegExp"了

为路由器添加查询参数模式。基于历史记录模式。使用查询参数匹配而不是动态路由匹配。

### 此功能解决了什么问题？

使用查询参数模式不需要服务器设置路由回退。

我们可以使用路由的 `history` 模式，充分利用 `history.pushState` API，无需重新加载页面即可完成 URL 跳转。

当您使用历史模式时，该 URL 就像一个普通的 url。

我在使用历史模式时遇到了以下问题。

但是，要使用此模式，您需要配置后台支持。

如果后台没有配置好，当用户直接在浏览器中访问时，会返回 404。

我个人不喜欢动态路由匹配模式，我喜欢查询参数匹配模式。

例如:

```txt
https://nodejs.org/en/?foo=bar&baz=123

https://translate.google.cn/#view=home&op=translate&sl=zh-CN&tl=en
```

## 安装

```shell
pnpm  add @masx200/search-hash-params-router
```

### 提议的 API 是什么样的？

Typescript 类型声明文件:

https://github.com/masx200/search-hash-params-router/blob/master/dist/index.d.ts

查询参数可以从`location.search` 或`location.hash` 中获取。

可以通过以下方式修改查询参数。

路由匹配方法示例如下：

## 通用例子:

#### 创建路由器：

```js
const hashrouter = createHashRouter();

const searchrouter = createSearchRouter();
```

#### 编程式导航:

```ts
searchrouter.setparams({ qqqqq: Math.random().toString() });
searchrouter.transformparams((o) => {
    return {
        ...o,
        qqqqq: Math.random().toString(),
    };
});
```

#### 获取当前路由参数对象

```js
console.log(searchrouter.getparams());
```

#### 如果没有使用`createVueView`或`createReactView`,

##### 那么需要在使用前使用挂载

```js
searchrouter.mount();
```

##### 需要在不使用时使用卸载

```js
searchrouter.unmount();
```

#### 监听路由参数的变化事件，监听路由匹配切换的变化：

```js
searchrouter.on("params", (p) => {
    console.log(p);
});
```

#### 根据参数获取新链接路径

```js
let newhref = searchrouter.paramshref((o) => {
    return { ...o, qqqqq: Math.random().toString() };
});
```

#### 创建路由条目：

```ts
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
```

## 例子:在 Vue 中使用

https://github.com/masx200/search-hash-params-router/tree/master/example/vue/my-vue-app

#### 导入模块：

```js
import {
    createVueParamsHook,
    createHashRouter,
    createSearchRouter,
    createVueView,
    createVueLink,
} from "@masx200/search-hash-params-router";
```

#### 创建路由视图组件：

```js
const View = createVueView({
    readonly,
    onMounted,
    onUnmounted,
    router: hashrouter,
    resolveComponent,
    defineComponent,
    h,
    ref,
});
```

#### 创建路由链接组件：

```js
const Link = createVueLink({
    router: hashrouter,
    ref,
    onMounted,
    onUnmounted,
    readonly,
    resolveComponent,
    defineComponent,
    h,
});
```

#### 创建路由参数 Hook:

```js
const useParams = createVueParamsHook({
    router: hashrouter,
    ref,
    readonly,
    onMounted,
    onUnmounted,
});
```

#### 在任意组件中获取当前的路由参数:

```vue
<template>
    <div>params:{{ JSON.stringify(params) }}</div>
</template>
<script lang="ts">
export default defineComponent({
    setup() {
        const params = useParams();
        watch(
            () => params.value,
            (params) => {
                console.log(params);
            }
        );
        return { params };
    },
});
</script>
```

#### 使用路由视图和路由链接的例子：

```vue
<template>
    <div>
        <div style="text-align: center">
            <Programmaticnavigation />
            <br />
            <Link :to="{}">start</Link>
            <br />
            <Link :to="{ p: 'home' }">home</Link>
            <br />
            <Link :to="{ p: 'app' }">app</Link>
            <br />
            <Link :to="{ p: 'redirect' }">redirect</Link>
            <br />
            <Link :to="{ foo: 'foo1' }">foo</Link>
            <br />
            <Link :to="{ bar: 'bar1', other: Math.random().toString() }">
                bar
            </Link>
            <br />
            <Link :to="{ 404: 'not' }">404</Link>
        </div>
        <hr />
        <div style="text-align: center">
            <suspense timeout="0">
                <template #fallback>
                    <Loading />
                </template>
                <View :routes="routes" />
            </suspense>
        </div>
    </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
    components: { Loading, Link, Programmaticnavigation, View },
    data: () => {
        return { routes };
    },
});
</script>
```

#### 接受路由参数：

```vue
<template>
    <div>
        <h1>bar</h1>
        <div>{{ msg }}</div>
        <div>{{ JSON.stringify(params) }}</div>
    </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
    props: ["msg", "params"],
});
</script>
```

### 自定义路由链接组件

```vue
<template>
    <Link :to="to" :component="Customlinkcomponent"><slot /></Link>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
inheritAttrs:true,
    components: { Link },
    data: () => ({ Customlinkcomponent }),
    props: ["to"],
});
</script>
```

```ts
declare const Customlinkcomponent: Component<{
    innerRef?:
        | {
              value: any;
          }
        | ((value: any) => void);
    target?: string;
    href: string;
    isActive: boolean;
    navigate: (event?: MouseEvent) => void;
}>;
```

## 例子:在 React 中使用

https://github.com/masx200/search-hash-params-router/tree/master/example/react/vite-project

#### 导入模块：

```js
import {
    createReactParamsHook,
    createHashRouter,
    createSearchRouter,
    createReactView,
    createReactLink,
} from "@masx200/search-hash-params-router";
```

#### 创建路由参数 Hook:

```js
const useParams = createReactParamsHook({
    router: searchrouter,
    useEffect,
    useState,
});
```

#### 在任意组件中获取当前的路由参数:

```jsx
function Hooktest() {
    const params = useParams();
    useEffect(() => {
        console.log(params);
    }, [params]);
    return <div>params:{JSON.stringify(params)}</div>;
}
```

#### 接受路由参数：

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

#### 创建路由视图组件：

```js
const View = createReactView({
    router: searchrouter,
    createElement,

    useEffect,
    useState,
});
```

#### 创建路由链接组件：

```js
const Link = createReactLink({
    router: searchrouter,
    useEffect,
    useState,
    createElement,
});
```

#### 使用路由视图和路由链接的例子：

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

### 自定义路由链接组件

```jsx
function YourCustomlink({ to, children ,...rest}) {
    return (
        <Link to={to} component={Customlinkcomponent} {...rest}>
            {children}
        </Link>
    );
}
```

```ts
declare const Customlinkcomponent: ComponentType<{
    innerRef?: { current: any } | ((current: any) => void);
    target?: string;
    href: string;
    isActive: boolean;
    navigate: (event?: MouseEvent) => void;
}>;
```
