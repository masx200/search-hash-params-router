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
    function i(t) {
        let e = r.get(t);
        return e || (e = new Set, r.set(t, e)), e;
    }
    function a(t) {
        e(t), r.has(t) && i(t).clear();
    }
    function c(t, n) {
        e(t), r.has(t) && i(t).forEach((t => {
            Promise.resolve().then((() => {
                t(n);
            }));
        }));
    }
    function f(t, r) {
        e(t), n(r), i(t).add(r);
    }
    function u(t, e) {
        i(t).delete(e);
    }
    function s(t, r) {
        e(t), n(r), u(t, r), function(t, e) {
            const n = i(t);
            let r = o.get(e);
            r && n.delete(r);
        }(t, r);
    }
    function h() {
        return [ ...r ].map((([t, e]) => [ t, [ ...e ] ]))[Symbol.iterator]();
    }
    return {
        [Symbol.toPrimitive]: t,
        [Symbol.toStringTag]: "EventEmitterTarget",
        [Symbol.iterator]: h,
        entries: h,
        listenerCount: function(t) {
            return e(t), r.has(t) ? i(t).size : 0;
        },
        clear: a,
        removeAllListeners: a,
        on: f,
        addListener: f,
        off: s,
        removeListener: s,
        once: function(t, r) {
            e(t), n(r);
            let i = !1, a = o.get(r);
            if (!a) {
                const e = n => {
                    u(t, e), u(t, r), i || (i = !0, r(n));
                };
                a = e, o.set(r, a);
            }
            u(t, r), f(t, a);
        },
        emit: c,
        dispatch: c,
        eventNames: function() {
            return [ ...r.keys() ];
        },
        listeners: function(t) {
            return e(t), r.has(t) ? [ ...i(t) ] : [];
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

function i() {
    return location.hash && Object.fromEntries(new URLSearchParams(location.hash.slice(1))) || {};
}

function a(t) {
    if (!t) throw new TypeError(t);
    let e = i(), n = new URL(location.href);
    if ("function" == typeof t) return e = t(e), n.hash = String(new URLSearchParams({
        ...t
    })), n.href;
    if ("object" == typeof t) return e = t, n.hash = String(new URLSearchParams({
        ...t
    })), n.href;
    throw new TypeError(t);
}

function c(t) {
    const e = location.hash;
    let n = new URL(location.href);
    n.hash = String(new URLSearchParams({
        ...t
    })), e !== n.hash && (history.pushState({}, "", n.href), window.dispatchEvent(new Event("hashchange")));
}

function f(t) {
    c(t(i()));
}

function u() {
    return location.search && Object.fromEntries(new URL(location.href).searchParams) || {};
}

function s(t) {
    if (!t) throw new TypeError(t);
    let e = u(), n = new URL(location.href);
    if ("function" == typeof t) return e = t(e), n.search = String(new URLSearchParams({
        ...t
    })), n.href;
    if ("object" == typeof t) return e = t, n.search = String(new URLSearchParams({
        ...t
    })), n.href;
    throw new TypeError(t);
}

function h(t) {
    const e = location.search;
    let n = new URL(location.href);
    n.search = String(new URLSearchParams({
        ...t
    })), e !== n.search && (history.pushState({}, "", n.href), window.dispatchEvent(new Event("popstate")));
}

function l(t) {
    h(t(u()));
}

var p = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

var m = function(t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e);
}, v = "object" == typeof p && p && p.Object === Object && p, y = "object" == typeof self && self && self.Object === Object && self, d = v || y || Function("return this")(), w = d, g = function() {
    return w.Date.now();
}, b = /\s/;

var S = function(t) {
    for (var e = t.length; e-- && b.test(t.charAt(e)); ) ;
    return e;
}, E = /^\s+/;

var T = function(t) {
    return t ? t.slice(0, S(t) + 1).replace(E, "") : t;
}, j = d.Symbol, L = j, R = Object.prototype, O = R.hasOwnProperty, U = R.toString, P = L ? L.toStringTag : void 0;

var N = function(t) {
    var e = O.call(t, P), n = t[P];
    try {
        t[P] = void 0;
        var r = !0;
    } catch (t) {}
    var o = U.call(t);
    return r && (e ? t[P] = n : delete t[P]), o;
}, x = Object.prototype.toString;

var M = N, k = function(t) {
    return x.call(t);
}, K = j ? j.toStringTag : void 0;

var A = function(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : K && K in Object(t) ? M(t) : k(t);
}, C = function(t) {
    return null != t && "object" == typeof t;
};

var D = T, W = m, $ = function(t) {
    return "symbol" == typeof t || C(t) && "[object Symbol]" == A(t);
}, F = /^[-+]0x[0-9a-f]+$/i, I = /^0b[01]+$/i, V = /^0o[0-7]+$/i, z = parseInt;

var H = m, _ = g, q = function(t) {
    if ("number" == typeof t) return t;
    if ($(t)) return NaN;
    if (W(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = W(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = D(t);
    var n = I.test(t);
    return n || V.test(t) ? z(t.slice(2), n ? 2 : 8) : F.test(t) ? NaN : +t;
}, B = Math.max, G = Math.min;

var J = function(t, e, n) {
    var r, o, i, a, c, f, u = 0, s = !1, h = !1, l = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");
    function p(e) {
        var n = r, i = o;
        return r = o = void 0, u = e, a = t.apply(i, n);
    }
    function m(t) {
        return u = t, c = setTimeout(y, e), s ? p(t) : a;
    }
    function v(t) {
        var n = t - f;
        return void 0 === f || n >= e || n < 0 || h && t - u >= i;
    }
    function y() {
        var t = _();
        if (v(t)) return d(t);
        c = setTimeout(y, function(t) {
            var n = e - (t - f);
            return h ? G(n, i - (t - u)) : n;
        }(t));
    }
    function d(t) {
        return c = void 0, l && r ? p(t) : (r = o = void 0, a);
    }
    function w() {
        var t = _(), n = v(t);
        if (r = arguments, o = this, f = t, n) {
            if (void 0 === c) return m(f);
            if (h) return clearTimeout(c), c = setTimeout(y, e), p(f);
        }
        return void 0 === c && (c = setTimeout(y, e)), a;
    }
    return e = q(e) || 0, H(n) && (s = !!n.leading, i = (h = "maxWait" in n) ? B(q(n.maxWait) || 0, e) : i, 
    l = "trailing" in n ? !!n.trailing : l), w.cancel = function() {
        void 0 !== c && clearTimeout(c), u = 0, r = f = o = c = void 0;
    }, w.flush = function() {
        return void 0 === c ? a : d(_());
    }, w;
};

function Q(t, e) {
    const n = "function" == typeof t ? t : () => t, r = "search" === e ? "popstate" : "hashchange", p = o();
    let m, v;
    const y = J((() => {
        const t = "hash" === e ? i() : u();
        w.emit("params", t);
    })), d = J((t => {
        v = function(t, e) {
            for (let n of t) if (n.params(e)) return n;
        }(n(), t), v && (m !== v && w.emit("route", v), m = v);
    }));
    const w = {
        ...p,
        ...{
            getcurrentroute: function() {
                const t = w.getparams();
                return d(t), v;
            },
            mount: function() {
                window.addEventListener(r, y), w.on("params", d), y();
            },
            unmount: function() {
                window.removeEventListener(r, y), w.off("params", d);
            },
            paramshref: "hash" === e ? a : s,
            setparams: "hash" === e ? c : h,
            getparams: "hash" === e ? i : u,
            transformparams: "hash" === e ? f : l,
            [Symbol.toStringTag]: "search" === e ? "SearchRouter" : "HashRouter",
            getroutes: n
        }
    };
    return w;
}

function X({routes: t = []} = {}) {
    return Q(t, "hash");
}

function Y({routes: t = []} = {}) {
    return Q(t, "search");
}

function Z({router: t, forwardRef: e, createElement: n}) {
    return e((({component: e = "a", to: r, onClick: o, children: i, target: a, ...c}, f) => {
        const u = {
            ...c,
            ref: f,
            href: t.paramshref(r),
            onClick: e => {
                try {
                    o && o(e);
                } catch (t) {
                    throw e.preventDefault(), t;
                }
                e.defaultPrevented || 0 !== e.button || a && "_self" !== a || function(t) {
                    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
                }(e) || (e.preventDefault(), function(t, e) {
                    if (!e) throw new TypeError(e);
                    if ("function" != typeof e) {
                        if ("object" != typeof e) throw new TypeError(e);
                        t.setparams(e);
                    } else t.transformparams(e);
                }(t, r));
            },
            target: a
        };
        return n(e, u, i);
    }));
}

export { X as createHashRouter, Z as createReactLink, Y as createSearchRouter };
//# sourceMappingURL=index.mjs.map