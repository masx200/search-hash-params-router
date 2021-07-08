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
}, v = u.Symbol, w = v, d = Object.prototype, b = d.hasOwnProperty, g = d.toString, E = w ? w.toStringTag : void 0;

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
}, U = function(t) {
    return null != t && "object" == typeof t;
};

var P = y, A = a, N = function(t) {
    return "symbol" == typeof t || U(t) && "[object Symbol]" == O(t);
}, C = /^[-+]0x[0-9a-f]+$/i, x = /^0b[01]+$/i, k = /^0o[0-7]+$/i, M = parseInt;

var D = a, K = l, W = function(t) {
    if ("number" == typeof t) return t;
    if (N(t)) return NaN;
    if (A(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = A(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = P(t);
    var n = x.test(t);
    return n || k.test(t) ? M(t.slice(2), n ? 2 : 8) : C.test(t) ? NaN : +t;
}, $ = Math.max, F = Math.min;

var I = function(t, e, n) {
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
        var t = K();
        if (y(t)) return w(t);
        c = setTimeout(v, function(t) {
            var n = e - (t - f);
            return l ? F(n, i - (t - u)) : n;
        }(t));
    }
    function w(t) {
        return c = void 0, h && r ? p(t) : (r = o = void 0, a);
    }
    function d() {
        var t = K(), n = y(t);
        if (r = arguments, o = this, f = t, n) {
            if (void 0 === c) return m(f);
            if (l) return clearTimeout(c), c = setTimeout(v, e), p(f);
        }
        return void 0 === c && (c = setTimeout(v, e)), a;
    }
    return e = W(e) || 0, D(n) && (s = !!n.leading, i = (l = "maxWait" in n) ? $(W(n.maxWait) || 0, e) : i, 
    h = "trailing" in n ? !!n.trailing : h), d.cancel = function() {
        void 0 !== c && clearTimeout(c), u = 0, r = f = o = c = void 0;
    }, d.flush = function() {
        return void 0 === c ? a : w(K());
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
    return e((({component: e = "a", to: r, onClick: o, children: i, target: a}, c) => {
        if (!r) throw new TypeError("object,function");
        const f = t.paramshref(r);
        return n(e, {
            ...{
                ref: c,
                href: f,
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
        const [i, a] = n(t.getparams()), [c, f] = n(nt(o, i));
        if (r((() => {
            f(nt(o, i));
        }), [ o, i ]), r((() => {
            if (ot(c)) {
                const e = c.redirect;
                Z(t, e);
            }
        }), [ c ]), r((() => {
            const e = I((t => {
                a(t);
            }));
            return t.mount(), t.on("params", e), function() {
                t.unmount(), t.off("params", e);
            };
        }), []), ot(c)) return null;
        if (it(c)) {
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
}

function ct({router: t, resolveComponent: e, defineComponent: n, h: r}) {
    return n({
        inheritAttrs: !1,
        setup: (n, {slots: o, attrs: i}) => () => {
            const {component: n = "a", to: a, onClick: c, target: f, innerRef: u} = i;
            if (!a) throw new TypeError("object,function");
            const s = {
                ref: u,
                href: t.paramshref(a),
                onClick: e => {
                    try {
                        "function" == typeof c && c(e);
                    } catch (t) {
                        throw e.preventDefault(), t;
                    }
                    e.defaultPrevented || 0 !== e.button || f && "_self" !== f || tt(e) || (e.preventDefault(), 
                    Z(t, a));
                },
                target: f
            }, l = "string" == typeof n ? e(n) : n;
            return r(l, {
                ...s
            }, o);
        }
    });
}

function ft({onMounted: t, onUnmounted: e, router: n, resolveComponent: r, defineComponent: o, h: i, ref: a}) {
    return o({
        inheritAttrs: !1,
        setup(o, {attrs: c}) {
            const {routes: f} = c;
            if (!Array.isArray(f)) throw new TypeError("array");
            const u = a(n.getparams()), s = I((t => {
                u.value = t;
            }));
            return t((function() {
                n.mount(), n.on("params", s);
            })), e((function() {
                n.unmount(), n.off("params", s);
            })), () => {
                const {routes: t} = c;
                if (!Array.isArray(t)) throw new TypeError("array");
                if (!t.every((t => rt(t)))) throw new TypeError('{params:"function"}');
                const e = nt(t, u.value);
                if (ot(e)) {
                    const t = e.redirect;
                    Z(n, t);
                }
                if (ot(e)) return null;
                if (it(e)) {
                    const t = e.component, n = e.children;
                    let o = e.props || {}, a = Object.assign({}, o, {
                        params: u.value
                    }), c = "string" == typeof t ? r(t) : t;
                    return i(c, {
                        ...a
                    }, n);
                }
                return null;
            };
        }
    });
}

export { X as createHashRouter, et as createReactLink, at as createReactView, Y as createSearchRouter, ct as createVueLink, ft as createVueView };
//# sourceMappingURL=index.mjs.map
