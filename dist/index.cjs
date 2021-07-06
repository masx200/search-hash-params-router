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

var i = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

var a = function(t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e);
}, c = "object" == typeof i && i && i.Object === Object && i, f = "object" == typeof self && self && self.Object === Object && self, u = c || f || Function("return this")(), s = u, l = function() {
    return s.Date.now();
}, h = /\s/;

var p = function(t) {
    for (var e = t.length; e-- && h.test(t.charAt(e)); ) ;
    return e;
}, m = /^\s+/;

var y = function(t) {
    return t ? t.slice(0, p(t) + 1).replace(m, "") : t;
}, v = u.Symbol, d = v, w = Object.prototype, b = w.hasOwnProperty, g = w.toString, E = d ? d.toStringTag : void 0;

var S = function(t) {
    var e = b.call(t, E), n = t[E];
    try {
        t[E] = void 0;
        var r = !0;
    } catch (t) {}
    var o = g.call(t);
    return r && (e ? t[E] = n : delete t[E]), o;
}, T = Object.prototype.toString;

var j = S, R = function(t) {
    return T.call(t);
}, L = v ? v.toStringTag : void 0;

var x = function(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : L && L in Object(t) ? j(t) : R(t);
}, O = function(t) {
    return null != t && "object" == typeof t;
};

var P = y, U = a, N = function(t) {
    return "symbol" == typeof t || O(t) && "[object Symbol]" == x(t);
}, k = /^[-+]0x[0-9a-f]+$/i, C = /^0b[01]+$/i, M = /^0o[0-7]+$/i, V = parseInt;

var A = a, D = l, K = function(t) {
    if ("number" == typeof t) return t;
    if (N(t)) return NaN;
    if (U(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = U(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = P(t);
    var n = C.test(t);
    return n || M.test(t) ? V(t.slice(2), n ? 2 : 8) : k.test(t) ? NaN : +t;
}, _ = Math.max, W = Math.min;

var $ = function(t, e, n) {
    var r, o, i, a, c, f, u = 0, s = !1, l = !1, h = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");
    function p(e) {
        var n = r, i = o;
        return r = o = void 0, u = e, a = t.apply(i, n);
    }
    function m(t) {
        return u = t, c = setTimeout(v, e), s ? p(t) : a;
    }
    function y(t) {
        var n = t - f;
        return void 0 === f || n >= e || n < 0 || l && t - u >= i;
    }
    function v() {
        var t = D();
        if (y(t)) return d(t);
        c = setTimeout(v, function(t) {
            var n = e - (t - f);
            return l ? W(n, i - (t - u)) : n;
        }(t));
    }
    function d(t) {
        return c = void 0, h && r ? p(t) : (r = o = void 0, a);
    }
    function w() {
        var t = D(), n = y(t);
        if (r = arguments, o = this, f = t, n) {
            if (void 0 === c) return m(f);
            if (l) return clearTimeout(c), c = setTimeout(v, e), p(f);
        }
        return void 0 === c && (c = setTimeout(v, e)), a;
    }
    return e = K(e) || 0, A(n) && (s = !!n.leading, i = (l = "maxWait" in n) ? _(K(n.maxWait) || 0, e) : i, 
    h = "trailing" in n ? !!n.trailing : h), w.cancel = function() {
        void 0 !== c && clearTimeout(c), u = 0, r = f = o = c = void 0;
    }, w.flush = function() {
        return void 0 === c ? a : d(D());
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
    const n = "search" === t ? "popstate" : "hashchange", r = o(), i = $((() => {
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
    for (let n of t) if (n.params(e)) return n;
}

function Y(t, e) {
    if (!e) throw new TypeError("object,function");
    if ("function" != typeof e) {
        if ("object" != typeof e) throw new TypeError("object,function");
        t.setparams(e);
    } else t.transformparams(e);
}

function Z(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}

function tt(t) {
    return "function" == typeof (null == t ? void 0 : t.params) && (null == t ? void 0 : t.redirect);
}

exports.createHashRouter = function() {
    return Q("hash");
}, exports.createReactLink = function({router: t, forwardRef: e, createElement: n}) {
    return e((({component: e = "a", to: r, onClick: o, children: i, target: a}, c) => {
        if (!r) throw new TypeError("object,function");
        const f = t.paramshref(r);
        return n(e, {
            ref: c,
            href: f,
            onClick: e => {
                try {
                    o && o(e);
                } catch (t) {
                    throw e.preventDefault(), t;
                }
                e.defaultPrevented || 0 !== e.button || a && "_self" !== a || Z(e) || (e.preventDefault(), 
                Y(t, r));
            },
            target: a
        }, i);
    }));
}, exports.createReactView = function({router: t, useCallback: e, createElement: n, useState: r, useEffect: o}) {
    return ({routes: i}) => {
        if (!Array.isArray(i)) throw new TypeError("array");
        if (!i.every((t => function(t) {
            return !(!t || "object" != typeof t || "function" != typeof t.params);
        }(t)))) throw new TypeError('{params:"function"}');
        const [a, c] = r(t.getparams()), [f, u] = r(X(i, a)), s = e($((t => {
            c(t);
        })), []);
        function l() {
            t.unmount(), t.off("params", s);
        }
        if (o((() => {
            u(X(i, a));
        }), [ i, a ]), o((() => {
            if (tt(f)) {
                const e = f.redirect;
                Y(t, e);
            }
        }), [ f ]), o((() => (t.mount(), t.on("params", s), l)), []), tt(f)) return null;
        if ("function" == typeof (null == (h = f) ? void 0 : h.params) && (null == h ? void 0 : h.component)) {
            const t = f.component, e = f.children, r = f.props || {};
            return Object.assign(r, {
                params: a
            }), n(t, r, e);
        }
        return null;
        var h;
    };
}, exports.createSearchRouter = function() {
    return Q("search");
}, exports.createVueLink = function({router: t, resolveComponent: e, defineComponent: n, h: r}) {
    return n({
        setup: (n, {slots: o}) => () => {
            const {component: i = "a", to: a, onClick: c, target: f, innerRef: u} = n;
            if (!a) throw new TypeError("object,function");
            const s = {
                ref: u,
                href: t.paramshref(a),
                onClick: e => {
                    try {
                        c && c(e);
                    } catch (t) {
                        throw e.preventDefault(), t;
                    }
                    e.defaultPrevented || 0 !== e.button || f && "_self" !== f || Z(e) || (e.preventDefault(), 
                    Y(t, a));
                },
                target: f
            }, l = "string" == typeof i ? e(i) : i;
            return r(l, s, o);
        }
    });
}, exports.createVueView = function() {}, exports.matchroute = X;
//# sourceMappingURL=index.cjs.map
