function e() {
    return {}.toString.call({
        [Symbol.toStringTag]: "EventEmitterTarget",
    });
}

function t(e) {
    if ("string" != typeof e && "symbol" != typeof e)
        throw new TypeError(
            " EVENTNAME expected: string | symbol;but invalid :" + e
        );
}

function n(e) {
    if ("function" != typeof e)
        throw new TypeError(
            " EVENTLISTENER expected: (event?: any) => void;but invalid:" + e
        );
}

function r() {
    const r = new Map(),
        o = new WeakMap();
    function a(e) {
        let t = r.get(e);
        return t || ((t = new Set()), r.set(e, t)), t;
    }
    function c(e) {
        t(e), r.has(e) && a(e).clear();
    }
    function i(e, n) {
        t(e),
            r.has(e) &&
                a(e).forEach((e) => {
                    Promise.resolve().then(() => {
                        e(n);
                    });
                });
    }
    function s(e, r) {
        t(e), n(r), a(e).add(r);
    }
    function h(e, t) {
        a(e).delete(t);
    }
    function f(e, r) {
        t(e),
            n(r),
            h(e, r),
            (function (e, t) {
                const n = a(e);
                let r = o.get(t);
                r && n.delete(r);
            })(e, r);
    }
    function u() {
        return [...r].map(([e, t]) => [e, [...t]])[Symbol.iterator]();
    }
    return {
        [Symbol.toPrimitive]: e,
        [Symbol.toStringTag]: "EventEmitterTarget",
        [Symbol.iterator]: u,
        entries: u,
        listenerCount: function (e) {
            return t(e), r.has(e) ? a(e).size : 0;
        },
        clear: c,
        removeAllListeners: c,
        on: s,
        addListener: s,
        off: f,
        removeListener: f,
        once: function (e, r) {
            t(e), n(r);
            let a = !1,
                c = o.get(r);
            if (!c) {
                const t = (n) => {
                    h(e, t), h(e, r), a || ((a = !0), r(n));
                };
                (c = t), o.set(r, c);
            }
            h(e, r), s(e, c);
        },
        emit: i,
        dispatch: i,
        eventNames: function () {
            return [...r.keys()];
        },
        listeners: function (e) {
            return t(e), r.has(e) ? [...a(e)] : [];
        },
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0,
});

const o = ((e) => {
    var t = Symbol(),
        n = new Function("return async()=>{}")()();
    function o() {
        const e = r();
        return this && this instanceof o
            ? (Object.assign(this, e), this)
            : Reflect.construct(o, []);
    }
    return Reflect.set(o, t, n), o;
})();

function a() {
    return (
        (location.hash &&
            Object.fromEntries(new URLSearchParams(location.hash.slice(1)))) ||
        {}
    );
}

function c(e) {
    if (!e) throw new TypeError(e);
    let t = a(),
        n = new URL(location.href);
    if ("function" == typeof e)
        return (
            (t = e(t)),
            (n.hash = String(
                new URLSearchParams({
                    ...e,
                })
            )),
            n.href
        );
    if ("object" == typeof e)
        return (
            (t = e),
            (n.hash = String(
                new URLSearchParams({
                    ...e,
                })
            )),
            n.href
        );
    throw new TypeError(e);
}

function i(e) {
    const t = location.hash;
    let n = new URL(location.href);
    (n.hash = String(
        new URLSearchParams({
            ...e,
        })
    )),
        t !== n.hash &&
            (history.pushState({}, "", n.href),
            window.dispatchEvent(new Event("hashchange")));
}

function s(e) {
    i(e(a()));
}

function h() {
    return (
        (location.search &&
            Object.fromEntries(new URL(location.href).searchParams)) ||
        {}
    );
}

function f(e) {
    if (!e) throw new TypeError(e);
    let t = h(),
        n = new URL(location.href);
    if ("function" == typeof e)
        return (
            (t = e(t)),
            (n.search = String(
                new URLSearchParams({
                    ...e,
                })
            )),
            n.href
        );
    if ("object" == typeof e)
        return (
            (t = e),
            (n.search = String(
                new URLSearchParams({
                    ...e,
                })
            )),
            n.href
        );
    throw new TypeError(e);
}

function u(e) {
    const t = location.search;
    let n = new URL(location.href);
    (n.search = String(
        new URLSearchParams({
            ...e,
        })
    )),
        t !== n.search &&
            (history.pushState({}, "", n.href),
            window.dispatchEvent(new Event("popstate")));
}

function l(e) {
    u(e(h()));
}

function p({ routes: e = [], type: t }) {
    const n = "search" === t ? "popstate" : "hashchange",
        r = o();
    window.addEventListener(n, () => {
        const e = "hash" === t ? a() : h();
        w.emit("param", e);
    });
    const p = {
            href: "hash" === t ? c : f,
            set: "hash" === t ? i : u,
            get: "hash" === t ? a : h,
            transform: "hash" === t ? s : l,
            [Symbol.toStringTag]:
                "search" === t ? "SearchRouter" : "HashRouter",
            routes: e,
        },
        w = (() => {
            const e = {};
            return (
                [r, p].forEach((t) => {
                    Reflect.ownKeys(t).forEach((n) => {
                        Reflect.set(e, n, Reflect.get(t, n));
                    });
                }),
                e
            );
        })();
    return w;
}

(exports.createHashRouter = function ({ routes: e = [] } = {}) {
    return p({
        routes: e,
        type: "hash",
    });
}),
    (exports.createReactLink = function ({
        router: e,
        forwardRef: t,
        createElement: n,
    }) {
        return t(
            (
                {
                    component: t = "a",
                    to: r,
                    onClick: o,
                    children: a,
                    target: c,
                    ...i
                },
                s
            ) => {
                const h = {
                    ...i,
                    ref: s,
                    href: e.href(r),
                    onClick: (t) => {
                        try {
                            o && o(t);
                        } catch (e) {
                            throw (t.preventDefault(), e);
                        }
                        t.defaultPrevented ||
                            0 !== t.button ||
                            (c && "_self" !== c) ||
                            (function (e) {
                                return !!(
                                    e.metaKey ||
                                    e.altKey ||
                                    e.ctrlKey ||
                                    e.shiftKey
                                );
                            })(t) ||
                            (t.preventDefault(),
                            (function (e, t) {
                                if (!t) throw new TypeError(t);
                                if ("function" == typeof t)
                                    return void e.transform(t);
                                if ("object" == typeof t) return void e.set(t);
                                throw new TypeError(t);
                            })(e, r));
                    },
                    target: c,
                };
                return n(t, h, a);
            }
        );
    }),
    (exports.createSearchRouter = function ({ routes: e = [] } = {}) {
        return p({
            routes: e,
            type: "search",
        });
    });
//# sourceMappingURL=index.cjs.map
