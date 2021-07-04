function t() {
    return {}.toString.call({
        [Symbol.toStringTag]: "EventEmitterTarget"
    });
}

function e(t) {
    if ("string" != typeof t && "symbol" != typeof t) throw new TypeError(" EVENTNAME expected: string | symbol;but invalid :" + t);
}

function n(t) {
    if ("function" != typeof t) throw new TypeError(" EVENTLISTENER expected: (event?: any) => void;but invalid:" + t);
}

function r() {
    const r = new Map, o = new WeakMap;
    function a(t) {
        let e = r.get(t);
        return e || (e = new Set, r.set(t, e)), e;
    }
    function i(t) {
        e(t), r.has(t) && a(t).clear();
    }
    function s(t, n) {
        e(t), r.has(t) && a(t).forEach((t => {
            Promise.resolve().then((() => {
                t(n);
            }));
        }));
    }
    function c(t, r) {
        e(t), n(r), a(t).add(r);
    }
    function f(t, e) {
        a(t).delete(e);
    }
    function h(t, r) {
        e(t), n(r), f(t, r), function(t, e) {
            const n = a(t);
            let r = o.get(e);
            r && n.delete(r);
        }(t, r);
    }
    function u() {
        return [ ...r ].map((([t, e]) => [ t, [ ...e ] ]))[Symbol.iterator]();
    }
    return {
        [Symbol.toPrimitive]: t,
        [Symbol.toStringTag]: "EventEmitterTarget",
        [Symbol.iterator]: u,
        entries: u,
        listenerCount: function(t) {
            return e(t), r.has(t) ? a(t).size : 0;
        },
        clear: i,
        removeAllListeners: i,
        on: c,
        addListener: c,
        off: h,
        removeListener: h,
        once: function(t, r) {
            e(t), n(r);
            let a = !1, i = o.get(r);
            if (!i) {
                const e = n => {
                    f(t, e), f(t, r), a || (a = !0, r(n));
                };
                i = e, o.set(r, i);
            }
            f(t, r), c(t, i);
        },
        emit: s,
        dispatch: s,
        eventNames: function() {
            return [ ...r.keys() ];
        },
        listeners: function(t) {
            return e(t), r.has(t) ? [ ...a(t) ] : [];
        }
    };
}

const o = (t => {
    var e = Symbol(), n = new Function("return async()=>{}")()();
    function o() {
        const t = r();
        return this && this instanceof o ? (Object.assign(this, t), this) : Reflect.construct(o, []);
    }
    return Reflect.set(o, e, n), o;
})();

function a() {
    return location.hash && Object.fromEntries(new URLSearchParams(location.hash.slice(1))) || {};
}

function i(t) {
    if (!t) throw new TypeError(t);
    let e = a(), n = new URL(location.href);
    if ("function" == typeof t) return e = t(e), n.hash = String(new URLSearchParams({
        ...t
    })), n.href;
    if ("object" == typeof t) return e = t, n.hash = String(new URLSearchParams({
        ...t
    })), n.href;
    throw new TypeError(t);
}

function s(t) {
    const e = location.hash;
    let n = new URL(location.href);
    n.hash = String(new URLSearchParams({
        ...t
    })), e !== n.hash && (history.pushState({}, "", n.href), window.dispatchEvent(new Event("hashchange")));
}

function c(t) {
    s(t(a()));
}

function f() {
    return location.search && Object.fromEntries(new URL(location.href).searchParams) || {};
}

function h(t) {
    if (!t) throw new TypeError(t);
    let e = f(), n = new URL(location.href);
    if ("function" == typeof t) return e = t(e), n.search = String(new URLSearchParams({
        ...t
    })), n.href;
    if ("object" == typeof t) return e = t, n.search = String(new URLSearchParams({
        ...t
    })), n.href;
    throw new TypeError(t);
}

function u(t) {
    const e = location.search;
    let n = new URL(location.href);
    n.search = String(new URLSearchParams({
        ...t
    })), e !== n.search && (history.pushState({}, "", n.href), window.dispatchEvent(new Event("popstate")));
}

function l(t) {
    u(t(f()));
}

function m(t, e) {
    const n = "search" === e ? "popstate" : "hashchange", r = o();
    let m, p;
    const w = () => {
        const t = "hash" === e ? a() : f();
        E.emit("params", t);
    }, y = e => {
        p = function(t, e) {
            for (let n of t) if (n.params(e)) return n;
        }(t, e), m !== p && E.emit("route"), m = p;
    };
    const E = {
        ...r,
        ...{
            getcurrentroute: function() {
                const t = E.getparams();
                return y(t), p;
            },
            mount: function() {
                window.addEventListener(n, w), E.on("params", y), w();
            },
            unmount: function() {
                window.removeEventListener(n, w), E.off("params", y);
            },
            paramshref: "hash" === e ? i : h,
            setparams: "hash" === e ? s : u,
            getparams: "hash" === e ? a : f,
            transformparams: "hash" === e ? c : l,
            [Symbol.toStringTag]: "search" === e ? "SearchRouter" : "HashRouter",
            routes: t
        }
    };
    return E;
}

function p({routes: t = []} = {}) {
    return m(t, "hash");
}

function w({routes: t = []} = {}) {
    return m(t, "search");
}

function y({router: t, forwardRef: e, createElement: n}) {
    return e((({component: e = "a", to: r, onClick: o, children: a, target: i, ...s}, c) => {
        const f = {
            ...s,
            ref: c,
            href: t.paramshref(r),
            onClick: e => {
                try {
                    o && o(e);
                } catch (t) {
                    throw e.preventDefault(), t;
                }
                e.defaultPrevented || 0 !== e.button || i && "_self" !== i || function(t) {
                    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
                }(e) || (e.preventDefault(), function(t, e) {
                    if (!e) throw new TypeError(e);
                    if ("function" != typeof e) {
                        if ("object" != typeof e) throw new TypeError(e);
                        t.setparams(e);
                    } else t.transformparams(e);
                }(t, r));
            },
            target: i
        };
        return n(e, f, a);
    }));
}

export { p as createHashRouter, y as createReactLink, w as createSearchRouter };
//# sourceMappingURL=index.mjs.map
