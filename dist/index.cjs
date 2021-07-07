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
    function c(t, n) {
        e(t), r.has(t) && a(t).forEach((t => {
            Promise.resolve().then((() => {
                t(n);
            }));
        }));
    }
    function u(t, r) {
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
        on: u,
        addListener: u,
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
            f(t, r), u(t, i);
        },
        emit: c,
        dispatch: c,
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
}, c = "object" == typeof a && a && a.Object === Object && a, u = "object" == typeof self && self && self.Object === Object && self, f = c || u || Function("return this")(), s = f, l = function() {
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

var P = y, U = i, A = function(t) {
    return "symbol" == typeof t || x(t) && "[object Symbol]" == O(t);
}, C = /^[-+]0x[0-9a-f]+$/i, N = /^0b[01]+$/i, k = /^0o[0-7]+$/i, M = parseInt;

var V = i, D = l, F = function(t) {
    if ("number" == typeof t) return t;
    if (A(t)) return NaN;
    if (U(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = U(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = P(t);
    var n = N.test(t);
    return n || k.test(t) ? M(t.slice(2), n ? 2 : 8) : C.test(t) ? NaN : +t;
}, K = Math.max, _ = Math.min;

var W = function(t, e, n) {
    var r, o, a, i, c, u, f = 0, s = !1, l = !1, h = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");
    function p(e) {
        var n = r, a = o;
        return r = o = void 0, f = e, i = t.apply(a, n);
    }
    function m(t) {
        return f = t, c = setTimeout(v, e), s ? p(t) : i;
    }
    function y(t) {
        var n = t - u;
        return void 0 === u || n >= e || n < 0 || l && t - f >= a;
    }
    function v() {
        var t = D();
        if (y(t)) return w(t);
        c = setTimeout(v, function(t) {
            var n = e - (t - u);
            return l ? _(n, a - (t - f)) : n;
        }(t));
    }
    function w(t) {
        return c = void 0, h && r ? p(t) : (r = o = void 0, i);
    }
    function d() {
        var t = D(), n = y(t);
        if (r = arguments, o = this, u = t, n) {
            if (void 0 === c) return m(u);
            if (l) return clearTimeout(c), c = setTimeout(v, e), p(u);
        }
        return void 0 === c && (c = setTimeout(v, e)), i;
    }
    return e = F(e) || 0, V(n) && (s = !!n.leading, a = (l = "maxWait" in n) ? K(F(n.maxWait) || 0, e) : a, 
    h = "trailing" in n ? !!n.trailing : h), d.cancel = function() {
        void 0 !== c && clearTimeout(c), f = 0, r = u = o = c = void 0;
    }, d.flush = function() {
        return void 0 === c ? i : w(D());
    }, d;
};

function $() {
    return location.hash && Object.fromEntries(new URLSearchParams(location.hash.slice(1))) || {};
}

function H(t) {
    if (!t) throw new TypeError(t);
    let e = $(), n = new URL(location.href);
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
    I(t($()));
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
    const n = "search" === t ? "popstate" : "hashchange", r = o(), a = W((() => {
        const e = "hash" === t ? $() : q();
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
            getparams: "hash" === t ? $ : q,
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
    return e((({component: e = "a", to: r, onClick: o, children: a, target: i}, c) => {
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
                    e.defaultPrevented || 0 !== e.button || i && "_self" !== i || Z(e) || (e.preventDefault(), 
                    Y(t, r));
                },
                target: i
            }
        }, a);
    }));
}, exports.createReactView = function({router: t, useCallback: e, createElement: n, useState: r, useEffect: o}) {
    return ({routes: a}) => {
        if (!Array.isArray(a)) throw new TypeError("array");
        if (!a.every((t => tt(t)))) throw new TypeError('{params:"function"}');
        const [i, c] = r(t.getparams()), [u, f] = r(X(a, i)), s = e(W((t => {
            c(t);
        })), []);
        function l() {
            t.unmount(), t.off("params", s);
        }
        if (o((() => {
            f(X(a, i));
        }), [ a, i ]), o((() => {
            if (et(u)) {
                const e = u.redirect;
                Y(t, e);
            }
        }), [ u ]), o((() => (t.mount(), t.on("params", s), l)), []), et(u)) return null;
        if (nt(u)) {
            const t = u.component, e = u.children, r = u.props || {};
            return Object.assign(r, {
                params: i
            }), n(t, {
                ...r
            }, e);
        }
        return null;
    };
}, exports.createSearchRouter = function() {
    return Q("search");
}, exports.createVueLink = function({router: t, resolveComponent: e, defineComponent: n, h: r, Fragment: o}) {
    return n({
        inheritAttrs: !1,
        setup: (n, {slots: a, attrs: i}) => () => {
            const {component: n = "a", to: c, onClick: u, target: f, innerRef: s} = i;
            if (!c) throw new TypeError("object,function");
            const l = {
                ref: s,
                href: t.paramshref(c),
                onClick: e => {
                    try {
                        "function" == typeof u && u(e);
                    } catch (t) {
                        throw e.preventDefault(), t;
                    }
                    e.defaultPrevented || 0 !== e.button || f && "_self" !== f || Z(e) || (e.preventDefault(), 
                    Y(t, c));
                },
                target: f
            }, h = "string" == typeof n ? e(n) : n;
            return r(o, {}, r(h, {
                ...l
            }, a));
        }
    });
}, exports.createVueView = function({onMounted: t, onUnmounted: e, router: n, resolveComponent: r, defineComponent: o, h: a, ref: i, watch: c, Fragment: u}) {
    return o({
        inheritAttrs: !1,
        setup(o, {attrs: f}) {
            const {routes: s} = f;
            if (!Array.isArray(s)) throw new TypeError("array");
            const l = i(n.getparams()), h = i(X(s, l.value)), p = W((t => {
                l.value = t;
            }));
            return c([ () => f.routes, () => l.value ], (([t, e]) => {
                if (!Array.isArray(t)) throw new TypeError("array");
                h.value = X(t, e);
            })), c([ () => h.value ], (([t]) => {
                if (et(t)) {
                    const e = t.redirect;
                    Y(n, e);
                }
            })), t((function() {
                n.mount(), n.on("params", p);
            })), e((function() {
                n.unmount(), n.off("params", p);
            })), () => {
                const {routes: t} = f;
                if (!Array.isArray(t)) throw new TypeError("array");
                if (!t.every((t => tt(t)))) throw new TypeError('{params:"function"}');
                if (et(h.value)) return null;
                if (nt(h.value)) {
                    const t = h.value.component, e = h.value.children, n = h.value.props || {};
                    Object.assign(n, {
                        params: l.value
                    });
                    const o = "string" == typeof t ? r(t) : t;
                    return a(u, {}, a(o, {
                        ...n
                    }, e));
                }
                return null;
            };
        }
    });
}, exports.matchRoute = X;
//# sourceMappingURL=index.cjs.map
