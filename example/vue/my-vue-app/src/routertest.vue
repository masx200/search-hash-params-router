<template>
    <div>
        <div style="text-align: center">
            <Hooktest></Hooktest>
            <Programmaticnavigation />
            <br />
            <Link :to="{}" :innerRef="refelement1">start</Link>
            <br />
            <Link :to="{ p: 'home' }" :innerRef="refele2">home</Link>
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
    <hr />
    <footer>
        <a href="https://gitee.com/masx200/search-hash-params-router"
            >https://gitee.com/masx200/search-hash-params-router</a
        >
    </footer>
</template>
<script lang="ts" src="./routertest.ts"></script>
