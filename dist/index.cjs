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

Object.defineProperty(exports, "__esModule", {
    value: !0
});

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

var v = function(t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e);
}, m = "object" == typeof p && p && p.Object === Object && p, y = "object" == typeof self && self && self.Object === Object && self, d = m || y || Function("return this")(), w = d, b = function() {
    return w.Date.now();
}, g = /\s/;

var S = function(t) {
    for (var e = t.length; e-- && g.test(t.charAt(e)); ) ;
    return e;
}, E = /^\s+/;

var T = function(t) {
    return t ? t.slice(0, S(t) + 1).replace(E, "") : t;
}, j = d.Symbol, R = j, L = Object.prototype, O = L.hasOwnProperty, P = L.toString, U = R ? R.toStringTag : void 0;

var x = function(t) {
    var e = O.call(t, U), n = t[U];
    try {
        t[U] = void 0;
        var r = !0;
    } catch (t) {}
    var o = P.call(t);
    return r && (e ? t[U] = n : delete t[U]), o;
}, N = Object.prototype.toString;

var M = x, k = function(t) {
    return N.call(t);
}, K = j ? j.toStringTag : void 0;

var A = function(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : K && K in Object(t) ? M(t) : k(t);
}, C = function(t) {
    return null != t && "object" == typeof t;
};

var D = T, W = v, $ = function(t) {
    return "symbol" == typeof t || C(t) && "[object Symbol]" == A(t);
}, _ = /^[-+]0x[0-9a-f]+$/i, F = /^0b[01]+$/i, H = /^0o[0-7]+$/i, I = parseInt;

var V = v, z = b, q = function(t) {
    if ("number" == typeof t) return t;
    if ($(t)) return NaN;
    if (W(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = W(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = D(t);
    var n = F.test(t);
    return n || H.test(t) ? I(t.slice(2), n ? 2 : 8) : _.test(t) ? NaN : +t;
}, B = Math.max, G = Math.min;

var J = function(t, e, n) {
    var r, o, i, a, c, f, u = 0, s = !1, h = !1, l = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");
    function p(e) {
        var n = r, i = o;
        return r = o = void 0, u = e, a = t.apply(i, n);
    }
    function v(t) {
        return u = t, c = setTimeout(y, e), s ? p(t) : a;
    }
    function m(t) {
        var n = t - f;
        return void 0 === f || n >= e || n < 0 || h && t - u >= i;
    }
    function y() {
        var t = z();
        if (m(t)) return d(t);
        c = setTimeout(y, function(t) {
            var n = e - (t - f);
            return h ? G(n, i - (t - u)) : n;
        }(t));
    }
    function d(t) {
        return c = void 0, l && r ? p(t) : (r = o = void 0, a);
    }
    function w() {
        var t = z(), n = m(t);
        if (r = arguments, o = this, f = t, n) {
            if (void 0 === c) return v(f);
            if (h) return clearTimeout(c), c = setTimeout(y, e), p(f);
        }
        return void 0 === c && (c = setTimeout(y, e)), a;
    }
    return e = q(e) || 0, V(n) && (s = !!n.leading, i = (h = "maxWait" in n) ? B(q(n.maxWait) || 0, e) : i, 
    l = "trailing" in n ? !!n.trailing : l), w.cancel = function() {
        void 0 !== c && clearTimeout(c), u = 0, r = f = o = c = void 0;
    }, w.flush = function() {
        return void 0 === c ? a : d(z());
    }, w;
};

function Q(t) {
    const e = "search" === t ? "popstate" : "hashchange", n = o(), r = J((() => {
        const e = "hash" === t ? i() : u();
        p.emit("params", e);
    }));
    const p = {
        ...n,
        ...{
            mount: function() {
                window.addEventListener(e, r), r();
            },
            unmount: function() {
                window.removeEventListener(e, r);
            },
            paramshref: "hash" === t ? a : s,
            setparams: "hash" === t ? c : h,
            getparams: "hash" === t ? i : u,
            transformparams: "hash" === t ? f : l,
            [Symbol.toStringTag]: "search" === t ? "SearchRouter" : "HashRouter"
        }
    };
    return p;
}

exports.createHashRouter = function() {
    return Q("hash");
}, exports.createReactLink = function({router: t, forwardRef: e, createElement: n}) {
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
}, exports.createSearchRouter = function() {
    return Q("search");
};
//# sourceMappingURL=index.cjs.map
