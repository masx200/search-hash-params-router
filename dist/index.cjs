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
}, v = f.Symbol, w = v, d = Object.prototype, b = d.hasOwnProperty, g = d.toString, E = w ? w.toStringTag : void 0;

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

var O = function(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : L && L in Object(t) ? j(t) : R(t);
}, x = function(t) {
    return null != t && "object" == typeof t;
};

var P = y, U = a, A = function(t) {
    return "symbol" == typeof t || x(t) && "[object Symbol]" == O(t);
}, N = /^[-+]0x[0-9a-f]+$/i, C = /^0b[01]+$/i, k = /^0o[0-7]+$/i, M = parseInt;

var V = a, D = l, K = function(t) {
    if ("number" == typeof t) return t;
    if (A(t)) return NaN;
    if (U(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = U(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = P(t);
    var n = C.test(t);
    return n || k.test(t) ? M(t.slice(2), n ? 2 : 8) : N.test(t) ? NaN : +t;
}, _ = Math.max, W = Math.min;

var $ = function(t, e, n) {
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
        var t = D();
        if (y(t)) return w(t);
        c = setTimeout(v, function(t) {
            var n = e - (t - u);
            return l ? W(n, i - (t - f)) : n;
        }(t));
    }
    function w(t) {
        return c = void 0, h && r ? p(t) : (r = o = void 0, a);
    }
    function d() {
        var t = D(), n = y(t);
        if (r = arguments, o = this, u = t, n) {
            if (void 0 === c) return m(u);
            if (l) return clearTimeout(c), c = setTimeout(v, e), p(u);
        }
        return void 0 === c && (c = setTimeout(v, e)), a;
    }
    return e = K(e) || 0, V(n) && (s = !!n.leading, i = (l = "maxWait" in n) ? _(K(n.maxWait) || 0, e) : i, 
    h = "trailing" in n ? !!n.trailing : h), d.cancel = function() {
        void 0 !== c && clearTimeout(c), f = 0, r = u = o = c = void 0;
    }, d.flush = function() {
        return void 0 === c ? a : w(D());
    }, d;
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
    if (!e) throw new TypeError("object,function");
    if ("function" != typeof e) {
        if ("object" != typeof e) throw new TypeError("object,function");
        t.setparams(e);
    } else t.transformparams(e);
}

function Y(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}

function Z(t, e) {
    for (let n of t) if (n.params(e)) return n;
}

function tt(t) {
    return !(!t || "object" != typeof t || "function" != typeof t.params);
}

function et(t) {
    return !("function" != typeof (null == t ? void 0 : t.params) || null == t || !t.redirect);
}

function nt(t) {
    return !("function" != typeof (null == t ? void 0 : t.params) || null == t || !t.component);
}

exports.createHashRouter = function() {
    return Q("hash");
}, exports.createReactLink = function({router: t, forwardRef: e, createElement: n}) {
    return e((({component: e = "a", to: r, onClick: o, children: i, target: a}, c) => {
        if (!r) throw new TypeError("object,function");
        const u = t.paramshref(r);
        return n(e, {
            ...{
                ref: c,
                href: u,
                onClick: e => {
                    try {
                        "function" == typeof o && o(e);
                    } catch (t) {
                        throw e.preventDefault(), t;
                    }
                    e.defaultPrevented || 0 !== e.button || a && "_self" !== a || Y(e) || (e.preventDefault(), 
                    X(t, r));
                },
                target: a
            }
        }, i);
    }));
}, exports.createReactView = function({router: t, createElement: e, useState: n, useEffect: r}) {
    return ({routes: o}) => {
        if (!Array.isArray(o)) throw new TypeError("array");
        if (!o.every((t => tt(t)))) throw new TypeError('{params:"function"}');
        const [i, a] = n(t.getparams()), [c, u] = n(Z(o, i));
        if (r((() => {
            u(Z(o, i));
        }), [ o, i ]), r((() => {
            if (et(c)) {
                const e = c.redirect;
                X(t, e);
            }
        }), [ c ]), r((() => {
            const e = $((t => {
                a(t);
            }));
            return t.mount(), t.on("params", e), function() {
                t.unmount(), t.off("params", e);
            };
        }), []), et(c)) return null;
        if (nt(c)) {
            const t = c.component, n = c.children, r = c.props || {};
            let o = Object.assign({}, r, {
                params: i
            });
            return e(t, {
                ...o
            }, n);
        }
        return null;
    };
}, exports.createSearchRouter = function() {
    return Q("search");
}, exports.createVueLink = function({router: t, resolveComponent: e, defineComponent: n, h: r}) {
    return n({
        inheritAttrs: !1,
        setup: (n, {slots: o, attrs: i}) => () => {
            const {component: n = "a", to: a, onClick: c, target: u, innerRef: f} = i;
            if (!a) throw new TypeError("object,function");
            const s = {
                ref: f,
                href: t.paramshref(a),
                onClick: e => {
                    try {
                        "function" == typeof c && c(e);
                    } catch (t) {
                        throw e.preventDefault(), t;
                    }
                    e.defaultPrevented || 0 !== e.button || u && "_self" !== u || Y(e) || (e.preventDefault(), 
                    X(t, a));
                },
                target: u
            }, l = "string" == typeof n ? e(n) : n;
            return r(l, {
                ...s
            }, o);
        }
    });
}, exports.createVueView = function({onMounted: t, onUnmounted: e, router: n, resolveComponent: r, defineComponent: o, h: i, ref: a}) {
    return o({
        inheritAttrs: !1,
        setup(o, {attrs: c}) {
            const {routes: u} = c;
            if (!Array.isArray(u)) throw new TypeError("array");
            const f = a(n.getparams()), s = $((t => {
                f.value = t;
            }));
            return t((function() {
                n.mount(), n.on("params", s);
            })), e((function() {
                n.unmount(), n.off("params", s);
            })), () => {
                const {routes: t} = c;
                if (!Array.isArray(t)) throw new TypeError("array");
                if (!t.every((t => tt(t)))) throw new TypeError('{params:"function"}');
                const e = Z(t, f.value);
                if (et(e)) {
                    const t = e.redirect;
                    X(n, t);
                }
                if (et(e)) return null;
                if (nt(e)) {
                    const t = e.component, n = e.children;
                    let o = e.props || {}, a = Object.assign({}, o, {
                        params: f.value
                    }), c = "string" == typeof t ? r(t) : t;
                    return i(c, {
                        ...a
                    }, n);
                }
                return null;
            };
        }
    });
};
//# sourceMappingURL=index.cjs.map
