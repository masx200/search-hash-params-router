function e(e) {
    const t = location.hash;
    let n = new URL(location.href);
    n.hash = String(new URLSearchParams({
        ...e
    })), t !== n.hash && (history.pushState({}, "", n.href), window.dispatchEvent(new Event("hashchange")));
}

function t() {
    return location.hash && Object.fromEntries(new URLSearchParams(location.hash.slice(1))) || {};
}

function n(n) {
    e(n(t()));
}

function o() {
    const o = "hashchange", a = new Set;
    const r = () => {
        let e = t();
        a.forEach((t => Promise.resolve().then((() => t(e)))));
    };
    return window.addEventListener(o, r), {
        watch: function(e) {
            a.add(e), a.size > 0 && window.addEventListener(o, r);
        },
        unwatch: function(e) {
            a.delete(e), 0 === a.size && window.removeEventListener(o, r);
        },
        set: e,
        get: t,
        transform: n,
        [Symbol.toStringTag]: "HashRouter"
    };
}

function a(e) {
    const t = location.search;
    let n = new URL(location.href);
    n.search = String(new URLSearchParams({
        ...e
    })), t !== n.search && (history.pushState({}, "", n.href), window.dispatchEvent(new Event("popstate")));
}

function r() {
    return location.search && Object.fromEntries(new URL(location.href).searchParams) || {};
}

function s(e) {
    a(e(r()));
}

function i() {
    const e = "popstate", t = new Set;
    const n = () => {
        let e = r();
        t.forEach((t => Promise.resolve().then((() => t(e)))));
    };
    return window.addEventListener(e, n), {
        watch: function(o) {
            t.add(o), t.size > 0 && window.addEventListener(e, n);
        },
        unwatch: function(o) {
            t.delete(o), 0 === t.size && window.removeEventListener(e, n);
        },
        set: a,
        get: r,
        transform: s,
        [Symbol.toStringTag]: "SearchRouter"
    };
}

export { o as createHashRouter, i as createSearchRouter };
