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
    function u(t, n) {
        e(t), r.has(t) && i(t).forEach((t => {
            Promise.resolve().then((() => {
                t(n);
            }));
        }));
    }
    function c(t, r) {
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
        on: c,
        addListener: c,
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
            f(t, r), c(t, a);
        },
        emit: u,
        dispatch: u,
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

var i = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

var a = function(t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e);
}, u = "object" == typeof i && i && i.Object === Object && i, c = "object" == typeof self && self && self.Object === Object && self, f = u || c || Function("return this")(), s = f, l = function() {
    return s.Date.now();
}, h = /\s/;

var p = function(t) {
    for (var e = t.length; e-- && h.test(t.charAt(e)); ) ;
    return e;
}, m = /^\s+/;

var y = function(t) {
    return t ? t.slice(0, p(t) + 1).replace(m, "") : t;
}, v = f.Symbol, w = v, d = Object.prototype, g = d.hasOwnProperty, b = d.toString, E = w ? w.toStringTag : void 0;

var S = function(t) {
    var e = g.call(t, E), n = t[E];
    try {
        t[E] = void 0;
        var r = !0;
    } catch (t) {}
    var o = b.call(t);
    return r && (e ? t[E] = n : delete t[E]), o;
}, T = Object.prototype.toString;

var j = S, R = function(t) {
    return T.call(t);
}, L = v ? v.toStringTag : void 0;

var O = function(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : L && L in Object(t) ? j(t) : R(t);
}, U = function(t) {
    return null != t && "object" == typeof t;
};

var A = y, P = a, N = function(t) {
    return "symbol" == typeof t || U(t) && "[object Symbol]" == O(t);
}, C = /^[-+]0x[0-9a-f]+$/i, x = /^0b[01]+$/i, k = /^0o[0-7]+$/i, M = parseInt;

var D = a, K = l, F = function(t) {
    if ("number" == typeof t) return t;
    if (N(t)) return NaN;
    if (P(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = P(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = A(t);
    var n = x.test(t);
    return n || k.test(t) ? M(t.slice(2), n ? 2 : 8) : C.test(t) ? NaN : +t;
}, W = Math.max, $ = Math.min;

var I = function(t, e, n) {
    var r, o, i, a, u, c, f = 0, s = !1, l = !1, h = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");
    function p(e) {
        var n = r, i = o;
        return r = o = void 0, f = e, a = t.apply(i, n);
    }
    function m(t) {
        return f = t, u = setTimeout(v, e), s ? p(t) : a;
    }
    function y(t) {
        var n = t - c;
        return void 0 === c || n >= e || n < 0 || l && t - f >= i;
    }
    function v() {
        var t = K();
        if (y(t)) return w(t);
        u = setTimeout(v, function(t) {
            var n = e - (t - c);
            return l ? $(n, i - (t - f)) : n;
        }(t));
    }
    function w(t) {
        return u = void 0, h && r ? p(t) : (r = o = void 0, a);
    }
    function d() {
        var t = K(), n = y(t);
        if (r = arguments, o = this, c = t, n) {
            if (void 0 === u) return m(c);
            if (l) return clearTimeout(u), u = setTimeout(v, e), p(c);
        }
        return void 0 === u && (u = setTimeout(v, e)), a;
    }
    return e = F(e) || 0, D(n) && (s = !!n.leading, i = (l = "maxWait" in n) ? W(F(n.maxWait) || 0, e) : i, 
    h = "trailing" in n ? !!n.trailing : h), d.cancel = function() {
        void 0 !== u && clearTimeout(u), f = 0, r = c = o = u = void 0;
    }, d.flush = function() {
        return void 0 === u ? a : w(K());
    }, d;
};

function V() {
    return location.hash && Object.fromEntries(new URLSearchParams(location.hash.slice(1))) || {};
}

function _(t) {
    if (!t) throw new TypeError(t);
    let e = V(), n = new URL(location.href);
    if ("function" == typeof t) return e = t(e), n.hash = String(new URLSearchParams({
        ...t
    })), n.href;
    if ("object" == typeof t) return e = t, n.hash = String(new URLSearchParams({
        ...t
    })), n.href;
    throw new TypeError(t);
}

function z(t) {
    const e = location.hash;
    let n = new URL(location.href);
    n.hash = String(new URLSearchParams({
        ...t
    })), e !== n.hash && (history.pushState({}, "", n.href), window.dispatchEvent(new Event("hashchange")));
}

function H(t) {
    z(t(V()));
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
    const n = "search" === t ? "popstate" : "hashchange", r = o(), i = I((() => {
        const e = "hash" === t ? V() : q();
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
            paramshref: "hash" === t ? _ : B,
            setparams: "hash" === t ? z : G,
            getparams: "hash" === t ? V : q,
            transformparams: "hash" === t ? H : J,
            [Symbol.toStringTag]: "search" === t ? "SearchRouter" : "HashRouter"
        }
    };
    return a;
}

function X() {
    return Q("hash");
}

function Y() {
    return Q("search");
}

function Z(t, e) {
    if (!e) throw new TypeError("object,function");
    if ("function" != typeof e) {
        if ("object" != typeof e) throw new TypeError("object,function");
        t.setparams(e);
    } else t.transformparams(e);
}

function tt(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}

function et({router: t, forwardRef: e, createElement: n}) {
    return e((({component: e = "a", to: r, onClick: o, children: i, target: a}, u) => {
        if (!r) throw new TypeError("object,function");
        const c = t.paramshref(r);
        return n(e, {
            ...{
                ref: u,
                href: c,
                onClick: e => {
                    try {
                        "function" == typeof o && o(e);
                    } catch (t) {
                        throw e.preventDefault(), t;
                    }
                    e.defaultPrevented || 0 !== e.button || a && "_self" !== a || tt(e) || (e.preventDefault(), 
                    Z(t, r));
                },
                target: a
            }
        }, i);
    }));
}

function nt(t, e) {
    for (let n of t) if (n.params(e)) return n;
}

function rt(t) {
    return !(!t || "object" != typeof t || "function" != typeof t.params);
}

function ot(t) {
    return !("function" != typeof (null == t ? void 0 : t.params) || null == t || !t.redirect);
}

function it(t) {
    return !("function" != typeof (null == t ? void 0 : t.params) || null == t || !t.component);
}

function at({router: t, createElement: e, useState: n, useEffect: r}) {
    return ({routes: o}) => {
        if (!Array.isArray(o)) throw new TypeError("array");
        if (!o.every((t => rt(t)))) throw new TypeError('{params:"function"}');
        const [i, a] = n(t.getparams()), [u, c] = n(nt(o, i));
        if (r((() => {
            c(nt(o, i));
        }), [ o, i ]), r((() => {
            if (ot(u)) {
                const e = u.redirect;
                Z(t, e);
            }
        }), [ u ]), r((() => {
            const e = I((t => {
                a(t);
            }));
            return t.mount(), t.on("params", e), function() {
                t.unmount(), t.off("params", e);
            };
        }), []), ot(u)) return null;
        if (it(u)) {
            const t = u.component, n = u.children, r = u.props || {};
            return Object.assign(r, {
                params: i
            }), e(t, {
                ...r
            }, n);
        }
        return null;
    };
}

function ut({router: t, resolveComponent: e, defineComponent: n, h: r}) {
    return n({
        inheritAttrs: !1,
        setup: (n, {slots: o, attrs: i}) => () => {
            const {component: n = "a", to: a, onClick: u, target: c, innerRef: f} = i;
            if (!a) throw new TypeError("object,function");
            const s = {
                ref: f,
                href: t.paramshref(a),
                onClick: e => {
                    try {
                        "function" == typeof u && u(e);
                    } catch (t) {
                        throw e.preventDefault(), t;
                    }
                    e.defaultPrevented || 0 !== e.button || c && "_self" !== c || tt(e) || (e.preventDefault(), 
                    Z(t, a));
                },
                target: c
            }, l = "string" == typeof n ? e(n) : n;
            return r(l, {
                ...s
            }, o);
        }
    });
}

function ct({onMounted: t, onUnmounted: e, router: n, resolveComponent: r, defineComponent: o, h: i, ref: a, watch: u, Fragment: c}) {
    return o({
        inheritAttrs: !1,
        setup(o, {attrs: f}) {
            const {routes: s} = f;
            if (!Array.isArray(s)) throw new TypeError("array");
            const l = a(n.getparams()), h = a(nt(s, l.value)), p = I((t => {
                l.value = t;
            }));
            return u([ () => l.value ], (([t]) => {
                const {routes: e} = f;
                if (!Array.isArray(e)) throw new TypeError("array");
                h.value = nt(e, t);
            })), u([ () => h.value ], (([t]) => {
                if (ot(t)) {
                    const e = t.redirect;
                    Z(n, e);
                }
            })), t((function() {
                n.mount(), n.on("params", p);
            })), e((function() {
                n.unmount(), n.off("params", p);
            })), () => {
                const {routes: t} = f;
                if (!Array.isArray(t)) throw new TypeError("array");
                if (!t.every((t => rt(t)))) throw new TypeError('{params:"function"}');
                if (h.value = nt(t, l.value), ot(h.value)) return null;
                if (it(h.value)) {
                    const t = h.value.component, e = h.value.children, n = h.value.props || {};
                    Object.assign(n, {
                        params: l.value
                    });
                    const o = "string" == typeof t ? r(t) : t;
                    return i(c, {}, i(o, {
                        ...n
                    }, e));
                }
                return null;
            };
        }
    });
}

export { X as createHashRouter, et as createReactLink, at as createReactView, Y as createSearchRouter, ut as createVueLink, ct as createVueView };
//# sourceMappingURL=index.mjs.map
