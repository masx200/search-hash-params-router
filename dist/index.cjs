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
    return {}.toString.call({
        [Symbol.toStringTag]: "EventEmitterTarget"
    });
}

function c(e) {
    if ("string" != typeof e && "symbol" != typeof e) throw new TypeError(" EVENTNAME expected: string | symbol;but invalid :" + e);
}

function a(e) {
    if ("function" != typeof e) throw new TypeError(" EVENTLISTENER expected: (event?: any) => void;but invalid:" + e);
}

function i() {
    const e = new Map, t = new WeakMap;
    function n(t) {
        let n = e.get(t);
        return n || (n = new Set, e.set(t, n)), n;
    }
    function r(t) {
        c(t), e.has(t) && n(t).clear();
    }
    function i(t, r) {
        c(t), e.has(t) && n(t).forEach((e => {
            Promise.resolve().then((() => {
                e(r);
            }));
        }));
    }
    function s(e, t) {
        c(e), a(t), n(e).add(t);
    }
    function f(e, t) {
        n(e).delete(t);
    }
    function h(e, r) {
        c(e), a(r), f(e, r), function(e, r) {
            const o = n(e);
            let c = t.get(r);
            c && o.delete(c);
        }(e, r);
    }
    function u() {
        return [ ...e ].map((([e, t]) => [ e, [ ...t ] ]))[Symbol.iterator]();
    }
    return {
        [Symbol.toPrimitive]: o,
        [Symbol.toStringTag]: "EventEmitterTarget",
        [Symbol.iterator]: u,
        entries: u,
        listenerCount: function(t) {
            return c(t), e.has(t) ? n(t).size : 0;
        },
        clear: r,
        removeAllListeners: r,
        on: s,
        addListener: s,
        off: h,
        removeListener: h,
        once: function(e, n) {
            c(e), a(n);
            let r = !1, o = t.get(n);
            if (!o) {
                const c = t => {
                    f(e, c), f(e, n), r || (r = !0, n(t));
                };
                o = c, t.set(n, o);
            }
            f(e, n), s(e, o);
        },
        emit: i,
        dispatch: i,
        eventNames: function() {
            return [ ...e.keys() ];
        },
        listeners: function(t) {
            return c(t), e.has(t) ? [ ...n(t) ] : [];
        }
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

const s = (e => {
    var t = Symbol(), n = new Function("return async()=>{}")()();
    function r() {
        const e = i();
        return this && this instanceof r ? (Object.assign(this, e), this) : Reflect.construct(r, []);
    }
    return Reflect.set(r, t, n), r;
})();

function f() {
    return location.search && Object.fromEntries(new URL(location.href).searchParams) || {};
}

function h(e) {
    if (!e) throw new TypeError(e);
    let t = f(), n = new URL(location.href);
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
    u(e(f()));
}

exports.createHashRouter = function({routes: o = []}) {
    const c = s();
    window.addEventListener("hashchange", (() => {
        const e = t();
        i.emit("param", e);
    }));
    const a = {
        href: r,
        set: e,
        get: t,
        transform: n,
        [Symbol.toStringTag]: "HashRouter",
        routes: o
    }, i = (() => {
        const e = {};
        return [ c, a ].forEach((t => {
            Reflect.ownKeys(t).forEach((n => {
                Reflect.set(e, n, Reflect.get(t, n));
            }));
        })), e;
    })();
    return i;
}, exports.createReactLink = function({router: e, forwardRef: t, createElement: n}) {
    return t((({component: t = "a", to: r, onClick: o, children: c, target: a, ...i}, s) => {
        const f = {
            ...i,
            ref: s,
            href: e.href(r),
            onClick: t => {
                try {
                    o && o(t);
                } catch (e) {
                    throw t.preventDefault(), e;
                }
                t.defaultPrevented || 0 !== t.button || a && "_self" !== a || function(e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                }(t) || (t.preventDefault(), function(e, t) {
                    if (!t) throw new TypeError(t);
                    if ("function" == typeof t) return void e.transform(t);
                    if ("object" == typeof t) return void e.set(t);
                    throw new TypeError(t);
                }(e, r));
            },
            target: a
        };
        return n(t, f, c);
    }));
}, exports.createSearchRouter = function({routes: e = []}) {
    const t = s();
    window.addEventListener("popstate", (() => {
        const e = f();
        r.emit("param", e);
    }));
    const n = {
        href: h,
        set: u,
        get: f,
        transform: l,
        [Symbol.toStringTag]: "SearchRouter",
        routes: e
    }, r = (() => {
        const e = {};
        return [ t, n ].forEach((t => {
            Reflect.ownKeys(t).forEach((n => {
                Reflect.set(e, n, Reflect.get(t, n));
            }));
        })), e;
    })();
    return r;
};
//# sourceMappingURL=index.cjs.map
