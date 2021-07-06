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
    function a(t) {
        let e = r.get(t);
        return e || (e = new Set, r.set(t, e)), e;
    }
    function i(t) {
        e(t), r.has(t) && a(t).clear();
    }
    function u(t, n) {
        e(t), r.has(t) && a(t).forEach((t => {
            Promise.resolve().then((() => {
                t(n);
            }));
        }));
    }
    function c(t, r) {
        e(t), n(r), a(t).add(r);
    }
    function f(t, e) {
        a(t).delete(e);
    }
    function s(t, r) {
        e(t), n(r), f(t, r), function(t, e) {
            const n = a(t);
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
            return e(t), r.has(t) ? a(t).size : 0;
        },
        clear: i,
        removeAllListeners: i,
        on: c,
        addListener: c,
        off: s,
        removeListener: s,
        once: function(t, r) {
            e(t), n(r);
            let a = !1, i = o.get(r);
            if (!i) {
                const e = n => {
                    f(t, e), f(t, r), a || (a = !0, r(n));
                };
                i = e, o.set(r, i);
            }
            f(t, r), c(t, i);
        },
        emit: u,
        dispatch: u,
        eventNames: function() {
            return [ ...r.keys() ];
        },
        listeners: function(t) {
            return e(t), r.has(t) ? [ ...a(t) ] : [];
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

var a = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

var i = function(t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e);
}, u = "object" == typeof a && a && a.Object === Object && a, c = "object" == typeof self && self && self.Object === Object && self, f = u || c || Function("return this")(), s = f, l = function() {
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
}, x = function(t) {
    return null != t && "object" == typeof t;
};

var P = v, U = i, C = function(t) {
    return "symbol" == typeof t || x(t) && "[object Symbol]" == O(t);
}, N = /^[-+]0x[0-9a-f]+$/i, k = /^0b[01]+$/i, A = /^0o[0-7]+$/i, M = parseInt;

var V = i, D = l, K = function(t) {
    if ("number" == typeof t) return t;
    if (C(t)) return NaN;
    if (U(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = U(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = P(t);
    var n = k.test(t);
    return n || A.test(t) ? M(t.slice(2), n ? 2 : 8) : N.test(t) ? NaN : +t;
}, _ = Math.max, W = Math.min;

var $ = function(t, e, n) {
    var r, o, a, i, u, c, f = 0, s = !1, l = !1, h = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");
    function p(e) {
        var n = r, a = o;
        return r = o = void 0, f = e, i = t.apply(a, n);
    }
    function m(t) {
        return f = t, u = setTimeout(y, e), s ? p(t) : i;
    }
    function v(t) {
        var n = t - c;
        return void 0 === c || n >= e || n < 0 || l && t - f >= a;
    }
    function y() {
        var t = D();
        if (v(t)) return w(t);
        u = setTimeout(y, function(t) {
            var n = e - (t - c);
            return l ? W(n, a - (t - f)) : n;
        }(t));
    }
    function w(t) {
        return u = void 0, h && r ? p(t) : (r = o = void 0, i);
    }
    function d() {
        var t = D(), n = v(t);
        if (r = arguments, o = this, c = t, n) {
            if (void 0 === u) return m(c);
            if (l) return clearTimeout(u), u = setTimeout(y, e), p(c);
        }
        return void 0 === u && (u = setTimeout(y, e)), i;
    }
    return e = K(e) || 0, V(n) && (s = !!n.leading, a = (l = "maxWait" in n) ? _(K(n.maxWait) || 0, e) : a, 
    h = "trailing" in n ? !!n.trailing : h), d.cancel = function() {
        void 0 !== u && clearTimeout(u), f = 0, r = c = o = u = void 0;
    }, d.flush = function() {
        return void 0 === u ? i : w(D());
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
    const n = "search" === t ? "popstate" : "hashchange", r = o(), a = $((() => {
        const e = "hash" === t ? F() : q();
        i.emit("params", e);
    }));
    const i = {
        ...r,
        ...{
            mount: function() {
                window.addEventListener(n, a), a(), e++;
            },
            unmount: function() {
                e--, e <= 0 && window.removeEventListener(n, a);
            },
            paramshref: "hash" === t ? H : B,
            setparams: "hash" === t ? I : G,
            getparams: "hash" === t ? F : q,
            transformparams: "hash" === t ? z : J,
            [Symbol.toStringTag]: "search" === t ? "SearchRouter" : "HashRouter"
        }
    };
    return i;
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
    return e((({component: e = "a", to: r, onClick: o, children: a, target: i}, u) => {
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
                e.defaultPrevented || 0 !== e.button || i && "_self" !== i || Z(e) || (e.preventDefault(), 
                Y(t, r));
            },
            target: i
        }, a);
    }));
}, exports.createReactView = function({router: t, useCallback: e, createElement: n, useState: r, useEffect: o}) {
    return ({routes: a}) => {
        if (!Array.isArray(a)) throw new TypeError("array");
        if (!a.every((t => tt(t)))) throw new TypeError('{params:"function"}');
        const [i, u] = r(t.getparams()), [c, f] = r(X(a, i)), s = e($((t => {
            u(t);
        })), []);
        function l() {
            t.unmount(), t.off("params", s);
        }
        if (o((() => {
            f(X(a, i));
        }), [ a, i ]), o((() => {
            if (et(c)) {
                const e = c.redirect;
                Y(t, e);
            }
        }), [ c ]), o((() => (t.mount(), t.on("params", s), l)), []), et(c)) return null;
        if (nt(c)) {
            const t = c.component, e = c.children, r = c.props || {};
            return Object.assign(r, {
                params: i
            }), n(t, r, e);
        }
        return null;
    };
}, exports.createSearchRouter = function() {
    return Q("search");
}, exports.createVueLink = function({router: t, resolveComponent: e, defineComponent: n, h: r}) {
    return n({
        setup: (n, {slots: o}) => () => {
            const {component: a = "a", to: i, onClick: u, target: c, innerRef: f} = n;
            if (!i) throw new TypeError("object,function");
            const s = {
                ref: f,
                href: t.paramshref(i),
                onClick: e => {
                    try {
                        u && u(e);
                    } catch (t) {
                        throw e.preventDefault(), t;
                    }
                    e.defaultPrevented || 0 !== e.button || c && "_self" !== c || Z(e) || (e.preventDefault(), 
                    Y(t, i));
                },
                target: c
            }, l = "string" == typeof a ? e(a) : a;
            return r(l, s, o);
        }
    });
}, exports.createVueView = function({onMounted: t, onUnmounted: e, router: n, resolveComponent: r, defineComponent: o, h: a, ref: i, watch: u}) {
    return o({
        setup(o) {
            const c = i(n.getparams()), f = i(X(o.routes, c.value)), s = $((t => {
                c.value = t;
            }));
            return u([ () => o.routes, () => c.value ], (([t, e]) => {
                f.value = X(t, e);
            })), u([ () => f.value ], (([t]) => {
                if (et(t)) {
                    const e = t.redirect;
                    Y(n, e);
                }
            })), t((function() {
                n.mount(), n.on("params", s);
            })), e((function() {
                n.unmount(), n.off("params", s);
            })), () => {
                const {routes: t} = o;
                if (!Array.isArray(t)) throw new TypeError("array");
                if (!t.every((t => tt(t)))) throw new TypeError('{params:"function"}');
                if (et(f.value)) return null;
                if (nt(f.value)) {
                    const t = f.value.component, e = f.value.children, n = f.value.props || {};
                    Object.assign(n, {
                        params: c.value
                    });
                    const o = "string" == typeof t ? r(t) : t;
                    return a(o, n, e);
                }
                return null;
            };
        }
    });
}, exports.matchroute = X;
//# sourceMappingURL=index.cjs.map
