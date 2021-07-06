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
<script lang="ts" src="./routertest.ts"></script>
