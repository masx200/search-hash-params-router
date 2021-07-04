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
    function s(e) {
        t(e), r.has(e) && a(e).clear();
    }
    function i(e, n) {
        t(e), r.has(e) && a(e).forEach((e => {
            Promise.resolve().then((() => {
                e(n);
            }));
        }));
    }
    function c(e, r) {
        t(e), n(r), a(e).add(r);
    }
    function f(e, t) {
        a(e).delete(t);
    }
    function h(e, r) {
        t(e), n(r), f(e, r), function(e, t) {
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
        clear: s,
        removeAllListeners: s,
        on: c,
        addListener: c,
        off: h,
        removeListener: h,
        once: function(e, r) {
            t(e), n(r);
            let a = !1, s = o.get(r);
            if (!s) {
                const t = n => {
                    f(e, t), f(e, r), a || (a = !0, r(n));
                };
                s = t, o.set(r, s);
            }
            f(e, r), c(e, s);
        },
        emit: i,
        dispatch: i,
        eventNames: function() {
            return [ ...r.keys() ];
        },
        listeners: function(e) {
            return t(e), r.has(e) ? [ ...a(e) ] : [];
        }
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

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

function s(e) {
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

function i(e) {
    const t = location.hash;
    let n = new URL(location.href);
    n.hash = String(new URLSearchParams({
        ...e
    })), t !== n.hash && (history.pushState({}, "", n.href), window.dispatchEvent(new Event("hashchange")));
}

function c(e) {
    i(e(a()));
}

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

function p({routes: e = [], type: t}) {
    const n = "search" === t ? "popstate" : "hashchange", r = o();
    let p, m;
    const w = () => {
        const e = "hash" === t ? a() : f();
        S.emit("params", e);
    }, y = t => {
        m = function(e, t) {
            for (let n of e) if (n.params(t)) return n;
        }(e, t), p !== m && S.emit("route"), p = m;
    };
    const S = {
        ...r,
        ...{
            getcurrentroute: function() {
                const e = S.getparams();
                return y(e), m;
            },
            mount: function() {
                window.addEventListener(n, w), S.on("params", y), w();
            },
            unmount: function() {
                window.removeEventListener(n, w), S.off("params", y);
            },
            paramshref: "hash" === t ? s : h,
            setparams: "hash" === t ? i : u,
            getparams: "hash" === t ? a : f,
            transformparams: "hash" === t ? c : l,
            [Symbol.toStringTag]: "search" === t ? "SearchRouter" : "HashRouter",
            routes: e
        }
    };
    return S;
}

exports.createHashRouter = function({routes: e = []} = {}) {
    return p({
        routes: e,
        type: "hash"
    });
}, exports.createReactLink = function({router: e, forwardRef: t, createElement: n}) {
    return t((({component: t = "a", to: r, onClick: o, children: a, target: s, ...i}, c) => {
        const f = {
            ...i,
            ref: c,
            href: e.paramshref(r),
            onClick: t => {
                try {
                    o && o(t);
                } catch (e) {
                    throw t.preventDefault(), e;
                }
                t.defaultPrevented || 0 !== t.button || s && "_self" !== s || function(e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                }(t) || (t.preventDefault(), function(e, t) {
                    if (!t) throw new TypeError(t);
                    if ("function" != typeof t) {
                        if ("object" != typeof t) throw new TypeError(t);
                        e.setparams(t);
                    } else e.transformparams(t);
                }(e, r));
            },
            target: s
        };
        return n(t, f, a);
    }));
}, exports.createSearchRouter = function({routes: e = []} = {}) {
    return p({
        routes: e,
        type: "search"
    });
};
//# sourceMappingURL=index.cjs.map
