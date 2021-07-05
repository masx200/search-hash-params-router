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
    function u(t, r) {
        e(t), n(r), i(t).add(r);
    }
    function f(t, e) {
        i(t).delete(e);
    }
    function s(t, r) {
        e(t), n(r), f(t, r), function(t, e) {
            const n = i(t);
            let r = o.get(e);
            r && n.delete(r);
        }(t, r);
    }
    function l() {
        return [ ...r ].map((([t, e]) => [ t, [ ...e ] ]))[Symbol.iterator]();
    }
    return {
        [Symbol.toPrimitive]: t,
        [Symbol.toStringTag]: "EventEmitterTarget",
        [Symbol.iterator]: l,
        entries: l,
        listenerCount: function(t) {
            return e(t), r.has(t) ? i(t).size : 0;
        },
        clear: a,
        removeAllListeners: a,
        on: u,
        addListener: u,
        off: s,
        removeListener: s,
        once: function(t, r) {
            e(t), n(r);
            let i = !1, a = o.get(r);
            if (!a) {
                const e = n => {
                    f(t, e), f(t, r), i || (i = !0, r(n));
                };
                a = e, o.set(r, a);
            }
            f(t, r), u(t, a);
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

var i = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

var a = function(t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e);
}, c = "object" == typeof i && i && i.Object === Object && i, u = "object" == typeof self && self && self.Object === Object && self, f = c || u || Function("return this")(), s = f, l = function() {
    return s.Date.now();
}, h = /\s/;

var p = function(t) {
    for (var e = t.length; e-- && h.test(t.charAt(e)); ) ;
    return e;
}, m = /^\s+/;

var y = function(t) {
    return t ? t.slice(0, p(t) + 1).replace(m, "") : t;
}, v = f.Symbol, d = v, w = Object.prototype, b = w.hasOwnProperty, g = w.toString, S = d ? d.toStringTag : void 0;

var E = function(t) {
    var e = b.call(t, S), n = t[S];
    try {
        t[S] = void 0;
        var r = !0;
    } catch (t) {}
    var o = g.call(t);
    return r && (e ? t[S] = n : delete t[S]), o;
}, T = Object.prototype.toString;

var j = E, R = function(t) {
    return T.call(t);
}, L = v ? v.toStringTag : void 0;

var O = function(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : L && L in Object(t) ? j(t) : R(t);
}, x = function(t) {
    return null != t && "object" == typeof t;
};

var P = y, U = a, N = function(t) {
    return "symbol" == typeof t || x(t) && "[object Symbol]" == O(t);
}, k = /^[-+]0x[0-9a-f]+$/i, M = /^0b[01]+$/i, V = /^0o[0-7]+$/i, A = parseInt;

var C = a, K = l, D = function(t) {
    if ("number" == typeof t) return t;
    if (N(t)) return NaN;
    if (U(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = U(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = P(t);
    var n = M.test(t);
    return n || V.test(t) ? A(t.slice(2), n ? 2 : 8) : k.test(t) ? NaN : +t;
}, W = Math.max, $ = Math.min;

var _ = function(t, e, n) {
    var r, o, i, a, c, u, f = 0, s = !1, l = !1, h = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");
    function p(e) {
        var n = r, i = o;
        return r = o = void 0, f = e, a = t.apply(i, n);
    }
    function m(t) {
        return f = t, c = setTimeout(v, e), s ? p(t) : a;
    }
    function y(t) {
        var n = t - u;
        return void 0 === u || n >= e || n < 0 || l && t - f >= i;
    }
    function v() {
        var t = K();
        if (y(t)) return d(t);
        c = setTimeout(v, function(t) {
            var n = e - (t - u);
            return l ? $(n, i - (t - f)) : n;
        }(t));
    }
    function d(t) {
        return c = void 0, h && r ? p(t) : (r = o = void 0, a);
    }
    function w() {
        var t = K(), n = y(t);
        if (r = arguments, o = this, u = t, n) {
            if (void 0 === c) return m(u);
            if (l) return clearTimeout(c), c = setTimeout(v, e), p(u);
        }
        return void 0 === c && (c = setTimeout(v, e)), a;
    }
    return e = D(e) || 0, C(n) && (s = !!n.leading, i = (l = "maxWait" in n) ? W(D(n.maxWait) || 0, e) : i, 
    h = "trailing" in n ? !!n.trailing : h), w.cancel = function() {
        void 0 !== c && clearTimeout(c), f = 0, r = u = o = c = void 0;
    }, w.flush = function() {
        return void 0 === c ? a : d(K());
    }, w;
};

function F() {
    return location.hash && Object.fromEntries(new URLSearchParams(location.hash.slice(1))) || {};
}

function H(t) {
    if (!t) throw new TypeError(t);
    let e = F(), n = new URL(location.href);
    if ("function" == typeof t) return e = t(e), n.hash = String(new URLSearchParams({
        ...t
    })), n.href;
    if ("object" == typeof t) return e = t, n.hash = String(new URLSearchParams({
        ...t
    })), n.href;
    throw new TypeError(t);
}

function I(t) {
    const e = location.hash;
    let n = new URL(location.href);
    n.hash = String(new URLSearchParams({
        ...t
    })), e !== n.hash && (history.pushState({}, "", n.href), window.dispatchEvent(new Event("hashchange")));
}

function z(t) {
    I(t(F()));
}

function q() {
    return location.search && Object.fromEntries(new URL(location.href).searchParams) || {};
}

function B(t) {
    if (!t) throw new TypeError(t);
    let e = q(), n = new URL(location.href);
    if ("function" == typeof t) return e = t(e), n.search = String(new URLSearchParams({
        ...t
    })), n.href;
    if ("object" == typeof t) return e = t, n.search = String(new URLSearchParams({
        ...t
    })), n.href;
    throw new TypeError(t);
}

function G(t) {
    const e = location.search;
    let n = new URL(location.href);
    n.search = String(new URLSearchParams({
        ...t
    })), e !== n.search && (history.pushState({}, "", n.href), window.dispatchEvent(new Event("popstate")));
}

function J(t) {
    G(t(q()));
}

function Q(t) {
    let e = 0;
    const n = "search" === t ? "popstate" : "hashchange", r = o(), i = _((() => {
        const e = "hash" === t ? F() : q();
        a.emit("params", e);
    }));
    const a = {
        ...r,
        ...{
            mount: function() {
                window.addEventListener(n, i), i(), e++;
            },
            unmount: function() {
                e--, e <= 0 && window.removeEventListener(n, i);
            },
            paramshref: "hash" === t ? H : B,
            setparams: "hash" === t ? I : G,
            getparams: "hash" === t ? F : q,
            transformparams: "hash" === t ? z : J,
            [Symbol.toStringTag]: "search" === t ? "SearchRouter" : "HashRouter"
        }
    };
    return a;
}

function X(t, e) {
    if (!e) throw new TypeError("object,function");
    if ("function" != typeof e) {
        if ("object" != typeof e) throw new TypeError("object,function");
        t.setparams(e);
    } else t.transformparams(e);
}

function Y(t, e) {
    for (let n of t) if (n.params(e)) return n;
}

function Z(t) {
    return "function" == typeof (null == t ? void 0 : t.params) && (null == t ? void 0 : t.redirect);
}

exports.createHashRouter = function() {
    return Q("hash");
}, exports.createReactLink = function({router: t, forwardRef: e, createElement: n}) {
    return e((({component: e = "a", to: r, onClick: o, children: i, target: a, ...c}, u) => {
        if (!r) throw new TypeError("object,function");
        const f = {
            ...c,
            ref: u,
            href: t.paramshref(r),
            onClick: e => {
                try {
                    o && o(e);
                } catch (t) {
                    throw e.preventDefault(), t;
                }
                e.defaultPrevented || 0 !== e.button || a && "_self" !== a || function(t) {
                    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
                }(e) || (e.preventDefault(), X(t, r));
            },
            target: a
        };
        return n(e, f, i);
    }));
}, exports.createReactView = function({router: t, useCallback: e, createElement: n, useState: r, useEffect: o}) {
    return ({routes: i}) => {
        if (!Array.isArray(i)) throw new TypeError("array");
        if (!i.every((t => function(t) {
            return !(!t || "object" != typeof t || "function" != typeof t.params);
        }(t)))) throw new TypeError('{params:"function"}');
        const [a, c] = r(t.getparams()), [u, f] = r(Y(i, a)), s = e(_((t => {
            c(t);
        })), []);
        function l() {
            t.unmount(), t.off("params", s);
        }
        if (o((() => {
            f(Y(i, a));
        }), [ i, a ]), o((() => {
            if (Z(u)) {
                const e = u.redirect;
                X(t, e);
            }
        }), [ u ]), o((() => (t.mount(), t.on("params", s), l)), []), Z(u)) return null;
        if ("function" == typeof (null == (h = u) ? void 0 : h.params) && (null == h ? void 0 : h.component)) {
            const t = u.component, e = u.children, r = u.props || {};
            return Object.assign(r, {
                params: a
            }), n(t, r, e);
        }
        return null;
        var h;
    };
}, exports.createSearchRouter = function() {
    return Q("search");
}, exports.createVueLink = function() {}, exports.createVueView = function() {};
//# sourceMappingURL=index.cjs.map
