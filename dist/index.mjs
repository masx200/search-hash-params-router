function t(t) {
    const e = location.hash;
    let n = new URL(location.href);
    n.hash = String(new URLSearchParams({
        ...t
    })), e !== n.hash && (history.pushState({}, "", n.href), window.dispatchEvent(new Event("hashchange")));
}

function e() {
    return location.hash && Object.fromEntries(new URLSearchParams(location.hash.slice(1))) || {};
}

function n(n) {
    t(n(e()));
}

function r(t) {
    if (!t) throw new TypeError(t);
    let n = e(), r = new URL(location.href);
    if ("function" == typeof t) return n = t(n), r.hash = String(new URLSearchParams({
        ...t
    })), r.href;
    if ("object" == typeof t) return n = t, r.hash = String(new URLSearchParams({
        ...t
    })), r.href;
    throw new TypeError(t);
}

function o() {
    return {}.toString.call({
        [Symbol.toStringTag]: "EventEmitterTarget"
    });
}

function c(t) {
    if ("string" != typeof t && "symbol" != typeof t) throw new TypeError(" EVENTNAME expected: string | symbol;but invalid :" + t);
}

function i(t) {
    if ("function" != typeof t) throw new TypeError(" EVENTLISTENER expected: (event?: any) => void;but invalid:" + t);
}

function a() {
    const t = new Map, e = new WeakMap;
    function n(e) {
        let n = t.get(e);
        return n || (n = new Set, t.set(e, n)), n;
    }
    function r(e) {
        c(e), t.has(e) && n(e).clear();
    }
    function a(e, r) {
        c(e), t.has(e) && n(e).forEach((t => {
            Promise.resolve().then((() => {
                t(r);
            }));
        }));
    }
    function s(t, e) {
        c(t), i(e), n(t).add(e);
    }
    function f(t, e) {
        n(t).delete(e);
    }
    function h(t, r) {
        c(t), i(r), f(t, r), function(t, r) {
            const o = n(t);
            let c = e.get(r);
            c && o.delete(c);
        }(t, r);
    }
    function u() {
        return [ ...t ].map((([t, e]) => [ t, [ ...e ] ]))[Symbol.iterator]();
    }
    return {
        [Symbol.toPrimitive]: o,
        [Symbol.toStringTag]: "EventEmitterTarget",
        [Symbol.iterator]: u,
        entries: u,
        listenerCount: function(e) {
            return c(e), t.has(e) ? n(e).size : 0;
        },
        clear: r,
        removeAllListeners: r,
        on: s,
        addListener: s,
        off: h,
        removeListener: h,
        once: function(t, n) {
            c(t), i(n);
            let r = !1, o = e.get(n);
            if (!o) {
                const c = e => {
                    f(t, c), f(t, n), r || (r = !0, n(e));
                };
                o = c, e.set(n, o);
            }
            f(t, n), s(t, o);
        },
        emit: a,
        dispatch: a,
        eventNames: function() {
            return [ ...t.keys() ];
        },
        listeners: function(e) {
            return c(e), t.has(e) ? [ ...n(e) ] : [];
        }
    };
}

const s = (t => {
    var e = Symbol(), n = new Function("return async()=>{}")()();
    function r() {
        const t = a();
        return this && this instanceof r ? (Object.assign(this, t), this) : Reflect.construct(r, []);
    }
    return Reflect.set(r, e, n), r;
})();

function f({routes: o = []}) {
    const c = s();
    window.addEventListener("hashchange", (() => {
        const t = e();
        a.emit("param", t);
    }));
    const i = {
        href: r,
        set: t,
        get: e,
        transform: n,
        [Symbol.toStringTag]: "HashRouter",
        routes: o
    }, a = (() => {
        const t = {};
        return [ c, i ].forEach((e => {
            Reflect.ownKeys(e).forEach((n => {
                Reflect.set(t, n, Reflect.get(e, n));
            }));
        })), t;
    })();
    return a;
}

function h() {
    return location.search && Object.fromEntries(new URL(location.href).searchParams) || {};
}

function u(t) {
    if (!t) throw new TypeError(t);
    let e = h(), n = new URL(location.href);
    if ("function" == typeof t) return e = t(e), n.search = String(new URLSearchParams({
        ...t
    })), n.href;
    if ("object" == typeof t) return e = t, n.search = String(new URLSearchParams({
        ...t
    })), n.href;
    throw new TypeError(t);
}

function l(t) {
    const e = location.search;
    let n = new URL(location.href);
    n.search = String(new URLSearchParams({
        ...t
    })), e !== n.search && (history.pushState({}, "", n.href), window.dispatchEvent(new Event("popstate")));
}

function w(t) {
    l(t(h()));
}

function m({routes: t = []}) {
    const e = s();
    window.addEventListener("popstate", (() => {
        const t = h();
        r.emit("param", t);
    }));
    const n = {
        href: u,
        set: l,
        get: h,
        transform: w,
        [Symbol.toStringTag]: "SearchRouter",
        routes: t
    }, r = (() => {
        const t = {};
        return [ e, n ].forEach((e => {
            Reflect.ownKeys(e).forEach((n => {
                Reflect.set(t, n, Reflect.get(e, n));
            }));
        })), t;
    })();
    return r;
}

function y({router: t, forwardRef: e, createElement: n}) {
    return e((({component: e = "a", to: r, onClick: o, children: c, target: i, ...a}, s) => {
        const f = {
            ...a,
            ref: s,
            href: t.href(r),
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
                    if ("function" == typeof e) return void t.transform(e);
                    if ("object" == typeof e) return void t.set(e);
                    throw new TypeError(e);
                }(t, r));
            },
            target: i
        };
        return n(e, f, c);
    }));
}

export { f as createHashRouter, y as createReactLink, m as createSearchRouter };
//# sourceMappingURL=index.mjs.map
