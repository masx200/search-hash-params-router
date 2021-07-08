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
    function c(t) {
        e(t), r.has(t) && i(t).clear();
    }
    function a(t, n) {
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
        clear: c,
        removeAllListeners: c,
        on: u,
        addListener: u,
        off: s,
        removeListener: s,
        once: function(t, r) {
            e(t), n(r);
            let i = !1, c = o.get(r);
            if (!c) {
                const e = n => {
                    f(t, e), f(t, r), i || (i = !0, r(n));
                };
                c = e, o.set(r, c);
            }
            f(t, r), u(t, c);
        },
        emit: a,
        dispatch: a,
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

var c = function(t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e);
}, a = "object" == typeof i && i && i.Object === Object && i, u = "object" == typeof self && self && self.Object === Object && self, f = a || u || Function("return this")(), s = f, l = function() {
    return s.Date.now();
}, h = /\s/;

var p = function(t) {
    for (var e = t.length; e-- && h.test(t.charAt(e)); ) ;
    return e;
}, y = /^\s+/;

var m = function(t) {
    return t ? t.slice(0, p(t) + 1).replace(y, "") : t;
}, d = f.Symbol, v = d, w = Object.prototype, b = w.hasOwnProperty, g = w.toString, E = v ? v.toStringTag : void 0;

var S = function(t) {
    var e = b.call(t, E), n = t[E];
    try {
        t[E] = void 0;
        var r = !0;
    } catch (t) {}
    var o = g.call(t);
    return r && (e ? t[E] = n : delete t[E]), o;
}, j = Object.prototype.toString;

var T = S, R = function(t) {
    return j.call(t);
}, L = d ? d.toStringTag : void 0;

var U = function(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : L && L in Object(t) ? T(t) : R(t);
}, O = function(t) {
    return null != t && "object" == typeof t;
};

var C = m, P = c, A = function(t) {
    return "symbol" == typeof t || O(t) && "[object Symbol]" == U(t);
}, N = /^[-+]0x[0-9a-f]+$/i, k = /^0b[01]+$/i, x = /^0o[0-7]+$/i, M = parseInt;

var K = c, D = l, W = function(t) {
    if ("number" == typeof t) return t;
    if (A(t)) return NaN;
    if (P(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = P(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = C(t);
    var n = k.test(t);
    return n || x.test(t) ? M(t.slice(2), n ? 2 : 8) : N.test(t) ? NaN : +t;
}, $ = Math.max, F = Math.min;

var I = function(t, e, n) {
    var r, o, i, c, a, u, f = 0, s = !1, l = !1, h = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");
    function p(e) {
        var n = r, i = o;
        return r = o = void 0, f = e, c = t.apply(i, n);
    }
    function y(t) {
        return f = t, a = setTimeout(d, e), s ? p(t) : c;
    }
    function m(t) {
        var n = t - u;
        return void 0 === u || n >= e || n < 0 || l && t - f >= i;
    }
    function d() {
        var t = D();
        if (m(t)) return v(t);
        a = setTimeout(d, function(t) {
            var n = e - (t - u);
            return l ? F(n, i - (t - f)) : n;
        }(t));
    }
    function v(t) {
        return a = void 0, h && r ? p(t) : (r = o = void 0, c);
    }
    function w() {
        var t = D(), n = m(t);
        if (r = arguments, o = this, u = t, n) {
            if (void 0 === a) return y(u);
            if (l) return clearTimeout(a), a = setTimeout(d, e), p(u);
        }
        return void 0 === a && (a = setTimeout(d, e)), c;
    }
    return e = W(e) || 0, K(n) && (s = !!n.leading, i = (l = "maxWait" in n) ? $(W(n.maxWait) || 0, e) : i, 
    h = "trailing" in n ? !!n.trailing : h), w.cancel = function() {
        void 0 !== a && clearTimeout(a), f = 0, r = u = o = a = void 0;
    }, w.flush = function() {
        return void 0 === a ? c : v(D());
    }, w;
};

function V() {
    return location.hash && Object.fromEntries(new URLSearchParams(location.hash.slice(1))) || {};
}

function z(t) {
    if (!t) throw new TypeError("object,function");
    let e = V(), n = new URL(location.href);
    if ("function" == typeof t) return e = t(e), n.hash = String(new URLSearchParams({
        ...t
    })), n.href;
    if ("object" == typeof t) return e = t, n.hash = String(new URLSearchParams({
        ...t
    })), n.href;
    throw new TypeError("object,function");
}

function H(t) {
    const e = location.hash;
    let n = new URL(location.href);
    n.hash = String(new URLSearchParams({
        ...t
    })), e !== n.hash && (history.pushState({}, "", n.href), window.dispatchEvent(new Event("hashchange")));
}

function _(t) {
    H(t(V()));
}

function q() {
    return location.search && Object.fromEntries(new URL(location.href).searchParams) || {};
}

function B(t) {
    if (!t) throw new TypeError("object,function");
    let e = q(), n = new URL(location.href);
    if ("function" == typeof t) return e = t(e), n.search = String(new URLSearchParams({
        ...t
    })), n.href;
    if ("object" == typeof t) return e = t, n.search = String(new URLSearchParams({
        ...t
    })), n.href;
    throw new TypeError("object,function");
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
        c.emit("params", e);
    }));
    const c = {
        ...r,
        ...{
            mount: function() {
                window.addEventListener(n, i), i(), e++;
            },
            unmount: function() {
                e--, e <= 0 && (window.removeEventListener(n, i), i.cancel());
            },
            paramshref: "hash" === t ? z : B,
            setparams: "hash" === t ? H : G,
            getparams: "hash" === t ? V : q,
            transformparams: "hash" === t ? _ : J,
            [Symbol.toStringTag]: "search" === t ? "SearchRouter" : "HashRouter"
        }
    };
    return c;
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

function tt({onClick: t, target: e, router: n, to: r}) {
    return o => {
        try {
            "function" == typeof t && t(o);
        } catch (t) {
            throw o.preventDefault(), t;
        }
        o.defaultPrevented || 0 !== o.button || e && "_self" !== e || function(t) {
            return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
        }(o) || (o.preventDefault(), Z(n, r));
    };
}

function et({router: t, forwardRef: e, createElement: n}) {
    return e((({component: e = "a", to: r, onClick: o, children: i, target: c}, a) => {
        if (!r) throw new TypeError("object,function");
        if ("function" != typeof r && "object" != typeof r) throw new TypeError("object,function");
        const u = t.paramshref(r), f = tt({
            onClick: o,
            target: c,
            router: t,
            to: r
        });
        return n(e, {
            ...{
                ref: a,
                href: u,
                onClick: f,
                target: c
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

function ct({router: t, useState: e, useEffect: n}) {
    return function() {
        const [r, o] = e(t.getparams());
        return n((() => {
            const e = I((t => {
                o(t);
            }));
            return t.mount(), t.on("params", e), function() {
                t.unmount(), t.off("params", e), e.cancel();
            };
        }), []), r;
    };
}

function at({router: t, createElement: e, useState: n, useEffect: r}) {
    const o = ct({
        router: t,
        useState: n,
        useEffect: r
    });
    return ({routes: n}) => {
        if (!Array.isArray(n)) throw new TypeError("array");
        if (!n.every((t => rt(t)))) throw new TypeError('{params:"function"}');
        const r = o(), i = nt(n, r);
        if (ot(i)) {
            const e = i.redirect;
            Z(t, e);
        }
        if (ot(i)) return null;
        if (it(i)) {
            const t = i.component, n = i.children, o = i.props || {};
            let c = Object.assign({}, o, {
                params: r
            });
            return e(t, {
                ...c
            }, n);
        }
        return null;
    };
}

function ut({router: t, resolveComponent: e, defineComponent: n, h: r}) {
    return n({
        inheritAttrs: !1,
        setup: (n, {slots: o, attrs: i}) => () => {
            const {component: n = "a", to: c, onClick: a, target: u, innerRef: f} = i;
            if (!c) throw new TypeError("object,function");
            if ("function" != typeof c && "object" != typeof c) throw new TypeError("object,function");
            const s = t.paramshref(c), l = tt({
                onClick: a,
                target: u,
                router: t,
                to: c
            }), h = {
                ref: "function" == typeof f ? f : f && "object" == typeof f ? t => {
                    Reflect.set(f, "value", t);
                } : void 0,
                href: s,
                onClick: l,
                target: u
            }, p = "string" == typeof n ? e(n) : n;
            return r(p, {
                ...h
            }, o);
        }
    });
}

function ft({router: t, ref: e, onMounted: n, onUnmounted: r, readonly: o}) {
    return function() {
        const i = e(t.getparams()), c = I((t => {
            i.value = t;
        }));
        return n((function() {
            t.mount(), t.on("params", c);
        })), r((function() {
            t.unmount(), t.off("params", c), c.cancel();
        })), o(i);
    };
}

function st({readonly: t, onMounted: e, onUnmounted: n, router: r, resolveComponent: o, defineComponent: i, h: c, ref: a}) {
    const u = ft({
        router: r,
        ref: a,
        onMounted: e,
        onUnmounted: n,
        readonly: t
    });
    return i({
        inheritAttrs: !1,
        setup(t, {attrs: e}) {
            const {routes: n} = e;
            if (!Array.isArray(n)) throw new TypeError("array");
            const i = u();
            return () => {
                const {routes: t} = e;
                if (!Array.isArray(t)) throw new TypeError("array");
                if (!t.every((t => rt(t)))) throw new TypeError('{params:"function"}');
                const n = nt(t, i.value);
                if (ot(n)) {
                    const t = n.redirect;
                    Z(r, t);
                }
                if (ot(n)) return null;
                if (it(n)) {
                    const t = n.component, e = n.children;
                    let r = n.props || {}, a = Object.assign({}, r, {
                        params: i.value
                    }), u = "string" == typeof t ? o(t) : t;
                    return c(u, {
                        ...a
                    }, e);
                }
                return null;
            };
        }
    });
}

export { X as createHashRouter, et as createReactLink, ct as createReactParamsHook, at as createReactView, Y as createSearchRouter, ut as createVueLink, ft as createVueParamsHook, st as createVueView };
//# sourceMappingURL=index.mjs.map
