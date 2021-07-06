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

var v = function(t) {
    return t ? t.slice(0, p(t) + 1).replace(m, "") : t;
}, y = f.Symbol, w = y, d = Object.prototype, b = d.hasOwnProperty, g = d.toString, E = w ? w.toStringTag : void 0;

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
}, L = y ? y.toStringTag : void 0;

var O = function(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : L && L in Object(t) ? j(t) : R(t);
}, U = function(t) {
    return null != t && "object" == typeof t;
};

var P = v, C = a, N = function(t) {
    return "symbol" == typeof t || U(t) && "[object Symbol]" == O(t);
}, x = /^[-+]0x[0-9a-f]+$/i, k = /^0b[01]+$/i, A = /^0o[0-7]+$/i, M = parseInt;

var D = a, K = l, W = function(t) {
    if ("number" == typeof t) return t;
    if (N(t)) return NaN;
    if (C(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = C(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = P(t);
    var n = k.test(t);
    return n || A.test(t) ? M(t.slice(2), n ? 2 : 8) : x.test(t) ? NaN : +t;
}, $ = Math.max, F = Math.min;

var I = function(t, e, n) {
    var r, o, i, a, u, c, f = 0, s = !1, l = !1, h = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");
    function p(e) {
        var n = r, i = o;
        return r = o = void 0, f = e, a = t.apply(i, n);
    }
    function m(t) {
        return f = t, u = setTimeout(y, e), s ? p(t) : a;
    }
    function v(t) {
        var n = t - c;
        return void 0 === c || n >= e || n < 0 || l && t - f >= i;
    }
    function y() {
        var t = K();
        if (v(t)) return w(t);
        u = setTimeout(y, function(t) {
            var n = e - (t - c);
            return l ? F(n, i - (t - f)) : n;
        }(t));
    }
    function w(t) {
        return u = void 0, h && r ? p(t) : (r = o = void 0, a);
    }
    function d() {
        var t = K(), n = v(t);
        if (r = arguments, o = this, c = t, n) {
            if (void 0 === u) return m(c);
            if (l) return clearTimeout(u), u = setTimeout(y, e), p(c);
        }
        return void 0 === u && (u = setTimeout(y, e)), a;
    }
    return e = W(e) || 0, D(n) && (s = !!n.leading, i = (l = "maxWait" in n) ? $(W(n.maxWait) || 0, e) : i, 
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
    for (let n of t) if (n.params(e)) return n;
}

function tt(t, e) {
    if (!e) throw new TypeError("object,function");
    if ("function" != typeof e) {
        if ("object" != typeof e) throw new TypeError("object,function");
        t.setparams(e);
    } else t.transformparams(e);
}

function et(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}

function nt({router: t, forwardRef: e, createElement: n}) {
    return e((({component: e = "a", to: r, onClick: o, children: i, target: a}, u) => {
        if (!r) throw new TypeError("object,function");
        const c = t.paramshref(r);
        return n(e, {
            ref: u,
            href: c,
            onClick: e => {
                try {
                    o && o(e);
                } catch (t) {
                    throw e.preventDefault(), t;
                }
                e.defaultPrevented || 0 !== e.button || a && "_self" !== a || et(e) || (e.preventDefault(), 
                tt(t, r));
            },
            target: a
        }, i);
    }));
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

function at({router: t, useCallback: e, createElement: n, useState: r, useEffect: o}) {
    return ({routes: i}) => {
        if (!Array.isArray(i)) throw new TypeError("array");
        if (!i.every((t => rt(t)))) throw new TypeError('{params:"function"}');
        const [a, u] = r(t.getparams()), [c, f] = r(Z(i, a)), s = e(I((t => {
            u(t);
        })), []);
        function l() {
            t.unmount(), t.off("params", s);
        }
        if (o((() => {
            f(Z(i, a));
        }), [ i, a ]), o((() => {
            if (ot(c)) {
                const e = c.redirect;
                tt(t, e);
            }
        }), [ c ]), o((() => (t.mount(), t.on("params", s), l)), []), ot(c)) return null;
        if (it(c)) {
            const t = c.component, e = c.children, r = c.props || {};
            return Object.assign(r, {
                params: a
            }), n(t, r, e);
        }
        return null;
    };
}

function ut({router: t, resolveComponent: e, defineComponent: n, h: r}) {
    return n({
        setup: (n, {slots: o}) => () => {
            const {component: i = "a", to: a, onClick: u, target: c, innerRef: f} = n;
            if (!a) throw new TypeError("object,function");
            const s = {
                ref: f,
                href: t.paramshref(a),
                onClick: e => {
                    try {
                        u && u(e);
                    } catch (t) {
                        throw e.preventDefault(), t;
                    }
                    e.defaultPrevented || 0 !== e.button || c && "_self" !== c || et(e) || (e.preventDefault(), 
                    tt(t, a));
                },
                target: c
            }, l = "string" == typeof i ? e(i) : i;
            return r(l, s, o);
        }
    });
}

function ct({onMounted: t, onUnmounted: e, router: n, resolveComponent: r, defineComponent: o, h: i, ref: a, watch: u}) {
    return o({
        setup(o) {
            const c = a(n.getparams()), f = a(Z(o.routes, c.value)), s = I((t => {
                c.value = t;
            }));
            return u([ () => o.routes, () => c.value ], (([t, e]) => {
                f.value = Z(t, e);
            })), u([ () => f.value ], (([t]) => {
                if (ot(t)) {
                    const e = t.redirect;
                    tt(n, e);
                }
            })), t((function() {
                n.mount(), n.on("params", s);
            })), e((function() {
                n.unmount(), n.off("params", s);
            })), () => {
                const {routes: t} = o;
                if (!Array.isArray(t)) throw new TypeError("array");
                if (!t.every((t => rt(t)))) throw new TypeError('{params:"function"}');
                if (ot(f.value)) return null;
                if (it(f.value)) {
                    const t = f.value.component, e = f.value.children, n = f.value.props || {};
                    Object.assign(n, {
                        params: c.value
                    });
                    const o = "string" == typeof t ? r(t) : t;
                    return i(o, n, e);
                }
                return null;
            };
        }
    });
}

export { X as createHashRouter, nt as createReactLink, at as createReactView, Y as createSearchRouter, ut as createVueLink, ct as createVueView, Z as matchroute };
//# sourceMappingURL=index.mjs.map
