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

function r(e) {
    if (!e) throw new TypeError(e);
    let n = t(), r = new URL(location.href);
    if ("function" == typeof e) return n = e(n), r.hash = String(new URLSearchParams({
        ...e
    })), r.href;
    if ("object" == typeof e) return n = e, r.hash = String(new URLSearchParams({
        ...e
    })), r.href;
    throw new TypeError(e);
}

function o() {
    const o = "hashchange", a = new Set;
    const i = () => {
        let e = t();
        a.forEach((t => Promise.resolve().then((() => t(e)))));
    };
    window.addEventListener(o, i);
    return {
        href: r,
        watch: function(e) {
            a.add(e), a.size > 0 && window.addEventListener(o, i);
        },
        unwatch: function(e) {
            a.delete(e), 0 === a.size && window.removeEventListener(o, i);
        },
        set: e,
        get: t,
        transform: n,
        [Symbol.toStringTag]: "HashRouter"
    };
}

function a() {
    return location.search && Object.fromEntries(new URL(location.href).searchParams) || {};
}

function i(e) {
    if (!e) throw new TypeError(e);
    let t = a(), n = new URL(location.href);
    if ("function" == typeof e) return t = e(t), n.search = String(new URLSearchParams({
        ...e
    })), n.href;
    if ("object" == typeof e) return t = e, n.search = String(new URLSearchParams({
        ...e
    })), n.href;
    throw new TypeError(e);
}

function c(e) {
    const t = location.search;
    let n = new URL(location.href);
    n.search = String(new URLSearchParams({
        ...e
    })), t !== n.search && (history.pushState({}, "", n.href), window.dispatchEvent(new Event("popstate")));
}

function h(e) {
    c(e(a()));
}

function s() {
    const e = "popstate", t = new Set;
    const n = () => {
        let e = a();
        t.forEach((t => Promise.resolve().then((() => t(e)))));
    };
    window.addEventListener(e, n);
    return {
        href: i,
        watch: function(r) {
            t.add(r), t.size > 0 && window.addEventListener(e, n);
        },
        unwatch: function(r) {
            t.delete(r), 0 === t.size && window.removeEventListener(e, n);
        },
        set: c,
        get: a,
        transform: h,
        [Symbol.toStringTag]: "SearchRouter"
    };
}

function f({router: e, forwardRef: t, createElement: n}) {
    return t((({to: t, onClick: r, children: o, target: a, ...i}, c) => {
        const h = {
            ...i,
            ref: c,
            href: e.href(t),
            onClick: n => {
                try {
                    r && r(n);
                } catch (e) {
                    throw n.preventDefault(), e;
                }
                n.defaultPrevented || 0 !== n.button || a && "_self" !== a || function(e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                }(n) || (n.preventDefault(), function(t) {
                    if (!t) throw new TypeError(t);
                    if ("function" != typeof t) {
                        if ("object" != typeof t) throw new TypeError(t);
                        e.set(t);
                    } else e.transform(t);
                }(t));
            },
            target: a
        };
        return n("a", h, o);
    }));
}

export { o as createHashRouter, f as createReactLink, s as createSearchRouter };
