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
}, p = /\s/;

var h = function(t) {
    for (var e = t.length; e-- && p.test(t.charAt(e)); ) ;
    return e;
}, y = /^\s+/;

var m = function(t) {
    return t ? t.slice(0, h(t) + 1).replace(y, "") : t;
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

var x = function(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : L && L in Object(t) ? T(t) : R(t);
}, O = function(t) {
    return null != t && "object" == typeof t;
};

var U = m, P = a, k = function(t) {
    return "symbol" == typeof t || O(t) && "[object Symbol]" == x(t);
}, A = /^[-+]0x[0-9a-f]+$/i, C = /^0b[01]+$/i, N = /^0o[0-7]+$/i, M = parseInt;

var V = a, H = l, K = function(t) {
    if ("number" == typeof t) return t;
    if (k(t)) return NaN;
    if (P(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = P(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = U(t);
    var n = C.test(t);
    return n || N.test(t) ? M(t.slice(2), n ? 2 : 8) : A.test(t) ? NaN : +t;
}, D = Math.max, W = Math.min;

var $ = function(t, e, n) {
    var r, o, i, a, c, u, f = 0, s = !1, l = !1, p = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");
    function h(e) {
        var n = r, i = o;
        return r = o = void 0, f = e, a = t.apply(i, n);
    }
    function y(t) {
        return f = t, c = setTimeout(d, e), s ? h(t) : a;
    }
    function m(t) {
        var n = t - u;
        return void 0 === u || n >= e || n < 0 || l && t - f >= i;
    }
    function d() {
        var t = H();
        if (m(t)) return v(t);
        c = setTimeout(d, function(t) {
            var n = e - (t - u);
            return l ? W(n, i - (t - f)) : n;
        }(t));
    }
    function v(t) {
        return c = void 0, p && r ? h(t) : (r = o = void 0, a);
    }
    function w() {
        var t = H(), n = m(t);
        if (r = arguments, o = this, u = t, n) {
            if (void 0 === c) return y(u);
            if (l) return clearTimeout(c), c = setTimeout(d, e), h(u);
        }
        return void 0 === c && (c = setTimeout(d, e)), a;
    }
    return e = K(e) || 0, V(n) && (s = !!n.leading, i = (l = "maxWait" in n) ? D(K(n.maxWait) || 0, e) : i, 
    p = "trailing" in n ? !!n.trailing : p), w.cancel = function() {
        void 0 !== c && clearTimeout(c), f = 0, r = u = o = c = void 0;
    }, w.flush = function() {
        return void 0 === c ? a : v(H());
    }, w;
};

function _() {
    return location.hash && Object.fromEntries(new URLSearchParams(location.hash.slice(1))) || {};
}

function F(t) {
    if (!t) throw new TypeError("object,function");
    let e = _(), n = new URL(location.href);
    if ("function" == typeof t) return e = t(e), n.hash = String(new URLSearchParams({
        ...t
    })), n.href;
    if ("object" == typeof t) return e = t, n.hash = String(new URLSearchParams({
        ...t
    })), n.href;
    throw new TypeError("object,function");
}

function I(t) {
    const e = location.hash;
    let n = new URL(location.href);
    n.hash = String(new URLSearchParams({
        ...t
    })), e !== n.hash && (history.pushState({}, "", n.href), window.dispatchEvent(new Event("hashchange")));
}

function z(t) {
    I(t(_()));
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
    const n = "search" === t ? "popstate" : "hashchange", r = o(), i = $((() => {
        const e = "hash" === t ? _() : q();
        a.emit("params", e);
    }));
    const a = {
        ...r,
        ...{
            mount: function() {
                window.addEventListener(n, i), i(), e++;
            },
            unmount: function() {
                e--, e <= 0 && (window.removeEventListener(n, i), i.cancel(), a.removeAllListeners("params"));
            },
            paramshref: "hash" === t ? F : B,
            setparams: "hash" === t ? I : G,
            getparams: "hash" === t ? _ : q,
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

function Y({onClick: t, target: e, router: n, to: r}) {
    return o => {
        try {
            "function" == typeof t && t(o);
        } catch (t) {
            throw o.preventDefault(), t;
        }
        o.defaultPrevented || 0 !== o.button || e && "_self" !== e || function(t) {
            return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
        }(o) || (o.preventDefault(), X(n, r));
    };
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

function rt({router: t, useState: e, useEffect: n}) {
    return function() {
        const [r, o] = e(t.getparams());
        return n((() => {
            const e = $((t => {
                o(t);
            }));
            return t.mount(), t.on("params", e), function() {
                t.unmount(), t.off("params", e), e.cancel();
            };
        }), []), r;
    };
}

function ot({router: t, ref: e, onMounted: n, onUnmounted: r, readonly: o}) {
    return function() {
        const i = e(t.getparams()), a = $((t => {
            i.value = t;
        }));
        return n((function() {
            t.mount(), t.on("params", a);
        })), r((function() {
            t.unmount(), t.off("params", a), a.cancel();
        })), o(i);
    };
}

exports.createHashRouter = function() {
    return Q("hash");
}, exports.createReactLink = function({router: t, forwardRef: e, createElement: n}) {
    return e((({component: e = "a", to: r, onClick: o, children: i, target: a}, c) => {
        if (!r) throw new TypeError("object,function");
        if ("function" != typeof r && "object" != typeof r) throw new TypeError("object,function");
        const u = t.paramshref(r), f = Y({
            onClick: o,
            target: a,
            router: t,
            to: r
        });
        return n(e, {
            ...{
                ref: c,
                href: u,
                onClick: f,
                target: a
            }
        }, i);
    }));
}, exports.createReactParamsHook = rt, exports.createReactView = function({router: t, createElement: e, useState: n, useEffect: r}) {
    const o = rt({
        router: t,
        useState: n,
        useEffect: r
    });
    return ({routes: n}) => {
        if (!Array.isArray(n)) throw new TypeError("array");
        if (!n.every((t => tt(t)))) throw new TypeError('{params:"function"}');
        const r = o(), i = Z(n, r);
        if (et(i)) {
            const e = i.redirect;
            X(t, e);
        }
        if (et(i)) return null;
        if (nt(i)) {
            const t = i.component, n = i.children, o = i.props || {};
            let a = Object.assign({}, o, {
                params: r
            });
            return e(t, {
                ...a
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
            if ("function" != typeof a && "object" != typeof a) throw new TypeError("object,function");
            const s = t.paramshref(a), l = Y({
                onClick: c,
                target: u,
                router: t,
                to: a
            }), p = {
                ref: "function" == typeof f ? f : f && "object" == typeof f ? t => {
                    Reflect.set(f, "value", t);
                } : void 0,
                href: s,
                onClick: l,
                target: u
            }, h = "string" == typeof n ? e(n) : n;
            return r(h, {
                ...p
            }, o);
        }
    });
}, exports.createVueParamsHook = ot, exports.createVueView = function({readonly: t, onMounted: e, onUnmounted: n, router: r, resolveComponent: o, defineComponent: i, h: a, ref: c}) {
    const u = ot({
        router: r,
        ref: c,
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
                if (!t.every((t => tt(t)))) throw new TypeError('{params:"function"}');
                const n = Z(t, i.value);
                if (et(n)) {
                    const t = n.redirect;
                    X(r, t);
                }
                if (et(n)) return null;
                if (nt(n)) {
                    const t = n.component, e = n.children;
                    let r = n.props || {}, c = Object.assign({}, r, {
                        params: i.value
                    }), u = "string" == typeof t ? o(t) : t;
                    return a(u, {
                        ...c
                    }, e);
                }
                return null;
            };
        }
    });
};
//# sourceMappingURL=index.cjs.map
