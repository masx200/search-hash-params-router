function e() {
    return {}.toString.call({
        [Symbol.toStringTag]: "EventEmitterTarget"
    });
}

function t(e) {
    if ("string" != typeof e && "symbol" != typeof e) throw new TypeError(" EVENTNAME expected: string | symbol;but invalid :" + e);
}

function n(e) {
    if ("function" != typeof e) throw new TypeError(" EVENTLISTENER expected: (event?: any) => void;but invalid:" + e);
}

function r() {
    const r = new Map, o = new WeakMap;
    function a(e) {
        let t = r.get(e);
        return t || (t = new Set, r.set(e, t)), t;
    }
    function i(e) {
        t(e), r.has(e) && a(e).clear();
    }
    function c(e, n) {
        t(e), r.has(e) && a(e).forEach((e => {
            Promise.resolve().then((() => {
                e(n);
            }));
        }));
    }
    function s(e, r) {
        t(e), n(r), a(e).add(r);
    }
    function h(e, t) {
        a(e).delete(t);
    }
    function f(e, r) {
        t(e), n(r), h(e, r), function(e, t) {
            const n = a(e);
            let r = o.get(t);
            r && n.delete(r);
        }(e, r);
    }
    function u() {
        return [ ...r ].map((([e, t]) => [ e, [ ...t ] ]))[Symbol.iterator]();
    }
    return {
        [Symbol.toPrimitive]: e,
        [Symbol.toStringTag]: "EventEmitterTarget",
        [Symbol.iterator]: u,
        entries: u,
        listenerCount: function(e) {
            return t(e), r.has(e) ? a(e).size : 0;
        },
        clear: i,
        removeAllListeners: i,
        on: s,
        addListener: s,
        off: f,
        removeListener: f,
        once: function(e, r) {
            t(e), n(r);
            let a = !1, i = o.get(r);
            if (!i) {
                const t = n => {
                    h(e, t), h(e, r), a || (a = !0, r(n));
                };
                i = t, o.set(r, i);
            }
            h(e, r), s(e, i);
        },
        emit: c,
        dispatch: c,
        eventNames: function() {
            return [ ...r.keys() ];
        },
        listeners: function(e) {
            return t(e), r.has(e) ? [ ...a(e) ] : [];
        }
    };
}

const o = (e => {
    var t = Symbol(), n = new Function("return async()=>{}")()();
    function o() {
        const e = r();
        return this && this instanceof o ? (Object.assign(this, e), this) : Reflect.construct(o, []);
    }
    return Reflect.set(o, t, n), o;
})();

function a() {
    return location.hash && Object.fromEntries(new URLSearchParams(location.hash.slice(1))) || {};
}

function i(e) {
    if (!e) throw new TypeError(e);
    let t = a(), n = new URL(location.href);
    if ("function" == typeof e) return t = e(t), n.hash = String(new URLSearchParams({
        ...e
    })), n.href;
    if ("object" == typeof e) return t = e, n.hash = String(new URLSearchParams({
        ...e
    })), n.href;
    throw new TypeError(e);
}

function c(e) {
    const t = location.hash;
    let n = new URL(location.href);
    n.hash = String(new URLSearchParams({
        ...e
    })), t !== n.hash && (history.pushState({}, "", n.href), window.dispatchEvent(new Event("hashchange")));
}

function s(e) {
    c(e(a()));
}

function h() {
    return location.search && Object.fromEntries(new URL(location.href).searchParams) || {};
}

function f(e) {
    if (!e) throw new TypeError(e);
    let t = h(), n = new URL(location.href);
    if ("function" == typeof e) return t = e(t), n.search = String(new URLSearchParams({
        ...e
    })), n.href;
    if ("object" == typeof e) return t = e, n.search = String(new URLSearchParams({
        ...e
    })), n.href;
    throw new TypeError(e);
}

function u(e) {
    const t = location.search;
    let n = new URL(location.href);
    n.search = String(new URLSearchParams({
        ...e
    })), t !== n.search && (history.pushState({}, "", n.href), window.dispatchEvent(new Event("popstate")));
}

function l(e) {
    u(e(h()));
}

function w({routes: e = [], type: t}) {
    const n = "search" === t ? "popstate" : "hashchange", r = o();
    window.addEventListener(n, (() => {
        const e = "hash" === t ? a() : h();
        y.emit("param", e);
    }));
    const w = {
        href: "hash" === t ? i : f,
        set: "hash" === t ? c : u,
        get: "hash" === t ? a : h,
        transform: "hash" === t ? s : l,
        [Symbol.toStringTag]: "search" === t ? "SearchRouter" : "HashRouter",
        routes: e
    }, y = (() => {
        const e = {};
        return [ r, w ].forEach((t => {
            Reflect.ownKeys(t).forEach((n => {
                Reflect.set(e, n, Reflect.get(t, n));
            }));
        })), e;
    })();
    return y;
}

function y({routes: e = []}) {
    return w({
        routes: e,
        type: "hash"
    });
}

function p({routes: e = []}) {
    return w({
        routes: e,
        type: "search"
    });
}

function m({router: e, forwardRef: t, createElement: n}) {
    return t((({component: t = "a", to: r, onClick: o, children: a, target: i, ...c}, s) => {
        const h = {
            ...c,
            ref: s,
            href: e.href(r),
            onClick: t => {
                try {
                    o && o(t);
                } catch (e) {
                    throw t.preventDefault(), e;
                }
                t.defaultPrevented || 0 !== t.button || i && "_self" !== i || function(e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                }(t) || (t.preventDefault(), function(e, t) {
                    if (!t) throw new TypeError(t);
                    if ("function" == typeof t) return void e.transform(t);
                    if ("object" == typeof t) return void e.set(t);
                    throw new TypeError(t);
                }(e, r));
            },
            target: i
        };
        return n(t, h, a);
    }));
}

export { y as createHashRouter, m as createReactLink, p as createSearchRouter };
//# sourceMappingURL=index.mjs.map
