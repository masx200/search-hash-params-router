function t(t, r) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        r && (e = e.filter((function(r) {
            return Object.getOwnPropertyDescriptor(t, r).enumerable;
        }))), n.push.apply(n, e);
    }
    return n;
}

function r(r) {
    for (var n = 1; n < arguments.length; n++) {
        var o = null != arguments[n] ? arguments[n] : {};
        n % 2 ? t(Object(o), !0).forEach((function(t) {
            e(r, t, o[t]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach((function(t) {
            Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(o, t));
        }));
    }
    return r;
}

function n(t) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

function e(t, r, n) {
    return r in t ? Object.defineProperty(t, r, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[r] = n, t;
}

function o(t, r) {
    return function(t) {
        if (Array.isArray(t)) return t;
    }(t) || function(t, r) {
        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null == n) return;
        var e, o, i = [], a = !0, u = !1;
        try {
            for (n = n.call(t); !(a = (e = n.next()).done) && (i.push(e.value), !r || i.length !== r); a = !0) ;
        } catch (t) {
            u = !0, o = t;
        } finally {
            try {
                a || null == n.return || n.return();
            } finally {
                if (u) throw o;
            }
        }
        return i;
    }(t, r) || i(t, r) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function i(t, r) {
    if (t) {
        if ("string" == typeof t) return a(t, r);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, r) : void 0;
    }
}

function a(t, r) {
    (null == r || r > t.length) && (r = t.length);
    for (var n = 0, e = new Array(r); n < r; n++) e[n] = t[n];
    return e;
}

function u(t) {
    return (u = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(t) {
        return n(t);
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t);
    })(t);
}

function c(t, r, n) {
    return r in t ? Object.defineProperty(t, r, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[r] = n, t;
}

function f(t, r) {
    return function(t) {
        if (Array.isArray(t)) return t;
    }(t) || function(t, r) {
        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != n) {
            var e, o, i = [], a = !0, u = !1;
            try {
                for (n = n.call(t); !(a = (e = n.next()).done) && (i.push(e.value), !r || i.length !== r); a = !0) ;
            } catch (t) {
                u = !0, o = t;
            } finally {
                try {
                    a || null == n.return || n.return();
                } finally {
                    if (u) throw o;
                }
            }
            return i;
        }
    }(t, r) || s(t, r) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function l(t) {
    return function(t) {
        if (Array.isArray(t)) return y(t);
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }(t) || s(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function s(t, r) {
    if (t) {
        if ("string" == typeof t) return y(t, r);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, r) : void 0;
    }
}

function y(t, r) {
    (null == r || r > t.length) && (r = t.length);
    for (var n = 0, e = new Array(r); n < r; n++) e[n] = t[n];
    return e;
}

function p() {
    return {}.toString.call(c({}, Symbol.toStringTag, "EventEmitterTarget"));
}

function h(t) {
    if ("string" != typeof t && "symbol" !== u(t)) throw new TypeError(" EVENTNAME expected: string | symbol;but invalid :" + t);
}

function v(t) {
    if ("function" != typeof t) throw new TypeError(" EVENTLISTENER expected: (event?: any) => void;but invalid:" + t);
}

function m() {
    var t, r = new Map, n = new WeakMap;
    function e(t) {
        var n = r.get(t);
        return n || (n = new Set, r.set(t, n)), n;
    }
    function o(t) {
        h(t), r.has(t) && e(t).clear();
    }
    function i(t, n) {
        h(t), r.has(t) && e(t).forEach((function(t) {
            Promise.resolve().then((function() {
                t(n);
            }));
        }));
    }
    function a(t, r) {
        h(t), v(r), e(t).add(r);
    }
    function u(t, r) {
        e(t).delete(r);
    }
    function s(t, r) {
        h(t), v(r), u(t, r), function(t, r) {
            var o = e(t), i = n.get(r);
            i && o.delete(i);
        }(t, r);
    }
    function y() {
        return l(r).map((function(t) {
            var r = f(t, 2);
            return [ r[0], l(r[1]) ];
        }))[Symbol.iterator]();
    }
    return c(t = {}, Symbol.toPrimitive, p), c(t, Symbol.toStringTag, "EventEmitterTarget"), 
    c(t, Symbol.iterator, y), c(t, "entries", y), c(t, "listenerCount", (function(t) {
        return h(t), r.has(t) ? e(t).size : 0;
    })), c(t, "clear", o), c(t, "removeAllListeners", o), c(t, "on", a), c(t, "addListener", a), 
    c(t, "off", s), c(t, "removeListener", s), c(t, "once", (function(t, r) {
        h(t), v(r);
        var e = !1, o = n.get(r);
        o || (o = function n(o) {
            u(t, n), u(t, r), e || (e = !0, r(o));
        }, n.set(r, o)), u(t, r), a(t, o);
    })), c(t, "emit", i), c(t, "dispatch", i), c(t, "eventNames", (function() {
        return l(r.keys());
    })), c(t, "listeners", (function(t) {
        return h(t), r.has(t) ? l(e(t)) : [];
    })), t;
}

var b = function(t) {
    var r = Symbol();
    try {
        var n = new Function("return async()=>{}")()();
    } catch (t) {}
    function e() {
        var t = m();
        return this && this instanceof e ? (Object.assign(this, t), this) : Reflect.construct(e, []);
    }
    return Reflect.set(e, r, n), e;
}(), d = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

var w = function(t) {
    var r = n(t);
    return null != t && ("object" == r || "function" == r);
}, g = "object" == n(d) && d && d.Object === Object && d, S = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self, j = g || S || Function("return this")(), E = j, T = function() {
    return E.Date.now();
}, O = /\s/;

var A = function(t) {
    for (var r = t.length; r-- && O.test(t.charAt(r)); ) ;
    return r;
}, P = /^\s+/;

var R = function(t) {
    return t ? t.slice(0, A(t) + 1).replace(P, "") : t;
}, L = j.Symbol, U = L, C = Object.prototype, I = C.hasOwnProperty, x = C.toString, k = U ? U.toStringTag : void 0;

var M = function(t) {
    var r = I.call(t, k), n = t[k];
    try {
        t[k] = void 0;
        var e = !0;
    } catch (t) {}
    var o = x.call(t);
    return e && (r ? t[k] = n : delete t[k]), o;
}, N = Object.prototype.toString;

var D = M, $ = function(t) {
    return N.call(t);
}, K = L ? L.toStringTag : void 0;

var W = function(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : K && K in Object(t) ? D(t) : $(t);
}, F = function(t) {
    return null != t && "object" == n(t);
};

var V = R, z = w, H = function(t) {
    return "symbol" == n(t) || F(t) && "[object Symbol]" == W(t);
}, _ = /^[-+]0x[0-9a-f]+$/i, q = /^0b[01]+$/i, B = /^0o[0-7]+$/i, G = parseInt;

var J = w, Q = T, X = function(t) {
    if ("number" == typeof t) return t;
    if (H(t)) return NaN;
    if (z(t)) {
        var r = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = z(r) ? r + "" : r;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = V(t);
    var n = q.test(t);
    return n || B.test(t) ? G(t.slice(2), n ? 2 : 8) : _.test(t) ? NaN : +t;
}, Y = Math.max, Z = Math.min;

var tt = function(t, r, n) {
    var e, o, i, a, u, c, f = 0, l = !1, s = !1, y = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");
    function p(r) {
        var n = e, i = o;
        return e = o = void 0, f = r, a = t.apply(i, n);
    }
    function h(t) {
        return f = t, u = setTimeout(m, r), l ? p(t) : a;
    }
    function v(t) {
        var n = t - c;
        return void 0 === c || n >= r || n < 0 || s && t - f >= i;
    }
    function m() {
        var t = Q();
        if (v(t)) return b(t);
        u = setTimeout(m, function(t) {
            var n = r - (t - c);
            return s ? Z(n, i - (t - f)) : n;
        }(t));
    }
    function b(t) {
        return u = void 0, y && e ? p(t) : (e = o = void 0, a);
    }
    function d() {
        var t = Q(), n = v(t);
        if (e = arguments, o = this, c = t, n) {
            if (void 0 === u) return h(c);
            if (s) return clearTimeout(u), u = setTimeout(m, r), p(c);
        }
        return void 0 === u && (u = setTimeout(m, r)), a;
    }
    return r = X(r) || 0, J(n) && (l = !!n.leading, i = (s = "maxWait" in n) ? Y(X(n.maxWait) || 0, r) : i, 
    y = "trailing" in n ? !!n.trailing : y), d.cancel = function() {
        void 0 !== u && clearTimeout(u), f = 0, e = c = o = u = void 0;
    }, d.flush = function() {
        return void 0 === u ? a : b(Q());
    }, d;
};

function rt() {
    return location.hash && Object.fromEntries(new URLSearchParams(location.hash.slice(1))) || {};
}

function nt(t) {
    if (!t) throw new TypeError("object,function");
    var e = rt(), o = new URL(location.href);
    if ("function" == typeof t) return e = t(e), o.hash = String(new URLSearchParams(r({}, e))), 
    o.href;
    if ("object" === n(t)) return e = t, o.hash = String(new URLSearchParams(r({}, e))), 
    o.href;
    throw new TypeError("object,function");
}

function et(t) {
    var n = location.hash, e = new URL(location.href);
    e.hash = String(new URLSearchParams(r({}, t))), n !== e.hash && (history.pushState({}, "", e.href), 
    window.dispatchEvent(new Event("hashchange")));
}

function ot(t) {
    et(t(rt()));
}

function it() {
    return location.search && Object.fromEntries(new URL(location.href).searchParams) || {};
}

function at(t) {
    if (!t) throw new TypeError("object,function");
    var e = it(), o = new URL(location.href);
    if ("function" == typeof t) return e = t(e), o.search = String(new URLSearchParams(r({}, e))), 
    o.href;
    if ("object" === n(t)) return e = t, o.search = String(new URLSearchParams(r({}, e))), 
    o.href;
    throw new TypeError("object,function");
}

function ut(t) {
    var n = location.search, e = new URL(location.href);
    e.search = String(new URLSearchParams(r({}, t))), n !== e.search && (history.pushState({}, "", e.href), 
    window.dispatchEvent(new Event("popstate")));
}

function ct(t) {
    ut(t(it()));
}

function ft(t) {
    var n = 0, o = "search" === t ? "popstate" : "hashchange", i = b(), a = tt((function() {
        var r = "hash" === t ? rt() : it();
        c.emit("params", r);
    }));
    var u = e({
        mount: function() {
            window.addEventListener(o, a), a(), n++;
        },
        unmount: function() {
            --n <= 0 && (window.removeEventListener(o, a), a.cancel(), c.removeAllListeners("params"));
        },
        paramshref: "hash" === t ? nt : at,
        setparams: "hash" === t ? et : ut,
        getparams: "hash" === t ? rt : it,
        transformparams: "hash" === t ? ot : ct
    }, Symbol.toStringTag, "search" === t ? "SearchRouter" : "HashRouter"), c = r(r({}, i), u);
    return c;
}

function lt() {
    return ft("hash");
}

function st() {
    return ft("search");
}

function yt(t, r) {
    if (!r) throw new TypeError("object,function");
    if ("function" != typeof r) {
        if ("object" !== n(r)) throw new TypeError("object,function");
        t.setparams(r);
    } else t.transformparams(r);
}

function pt(t) {
    var r = t.onClick, n = t.target, e = t.router, o = t.to;
    return function(t) {
        try {
            "function" == typeof r && r(t);
        } catch (r) {
            throw t.preventDefault(), r;
        }
        t.defaultPrevented || 0 !== t.button || n && "_self" !== n || function(t) {
            return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
        }(t) || (t.preventDefault(), yt(e, o));
    };
}

function ht(t) {
    var e = t.router, o = t.forwardRef, i = t.createElement;
    return o((function(t, o) {
        var a = t.component, u = void 0 === a ? "a" : a, c = t.to, f = t.onClick, l = t.children, s = t.target;
        if (!c) throw new TypeError("object,function");
        if ("function" != typeof c && "object" !== n(c)) throw new TypeError("object,function");
        var y = e.paramshref(c), p = pt({
            onClick: f,
            target: s,
            router: e,
            to: c
        });
        return i(u, r({}, {
            ref: o,
            href: y,
            onClick: p,
            target: s
        }), l);
    }));
}

function vt(t, r) {
    var n, e = function(t, r) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = i(t)) || r && t && "number" == typeof t.length) {
                n && (t = n);
                var e = 0, o = function() {};
                return {
                    s: o,
                    n: function() {
                        return e >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[e++]
                        };
                    },
                    e: function(t) {
                        throw t;
                    },
                    f: o
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var a, u = !0, c = !1;
        return {
            s: function() {
                n = n.call(t);
            },
            n: function() {
                var t = n.next();
                return u = t.done, t;
            },
            e: function(t) {
                c = !0, a = t;
            },
            f: function() {
                try {
                    u || null == n.return || n.return();
                } finally {
                    if (c) throw a;
                }
            }
        };
    }(t);
    try {
        for (e.s(); !(n = e.n()).done; ) {
            var o = n.value;
            if (o.params(r)) return o;
        }
    } catch (t) {
        e.e(t);
    } finally {
        e.f();
    }
}

function mt(t) {
    return !(!t || "object" !== n(t) || "function" != typeof t.params);
}

function bt(t) {
    return !("function" != typeof (null == t ? void 0 : t.params) || null == t || !t.redirect);
}

function dt(t) {
    return !("function" != typeof (null == t ? void 0 : t.params) || null == t || !t.component);
}

function wt(t) {
    var r = t.router, n = t.useState, e = t.useEffect;
    return function() {
        var t = o(n(r.getparams()), 2), i = t[0], a = t[1];
        return e((function() {
            var t = tt((function(t) {
                a(t);
            }));
            return r.mount(), r.on("params", t), function() {
                r.unmount(), r.off("params", t), t.cancel();
            };
        }), []), i;
    };
}

function gt(t) {
    var n = t.router, e = t.createElement, o = t.useState, i = t.useEffect, a = wt({
        router: n,
        useState: o,
        useEffect: i
    });
    return function(t) {
        var o = t.routes;
        if (!Array.isArray(o)) throw new TypeError("array");
        if (!o.every((function(t) {
            return mt(t);
        }))) throw new TypeError('{params:"function"}');
        var i = a(), u = vt(o, i);
        if (bt(u)) {
            var c = u.redirect;
            yt(n, c);
        }
        if (bt(u)) return null;
        if (dt(u)) {
            var f = u.component, l = u.children, s = u.props || {}, y = Object.assign({}, s, {
                params: i
            });
            return e(f, r({}, y), l);
        }
        return null;
    };
}

function St(t) {
    var e = t.router, o = t.resolveComponent, i = t.defineComponent, a = t.h;
    return i({
        inheritAttrs: !1,
        setup: function(t, i) {
            var u = i.slots, c = i.attrs;
            return function() {
                var t = c.component, i = void 0 === t ? "a" : t, f = c.to, l = c.onClick, s = c.target, y = c.innerRef;
                if (!f) throw new TypeError("object,function");
                if ("function" != typeof f && "object" !== n(f)) throw new TypeError("object,function");
                var p = e.paramshref(f), h = pt({
                    onClick: l,
                    target: s,
                    router: e,
                    to: f
                }), v = {
                    ref: "function" == typeof y ? y : y && "object" === n(y) ? function(t) {
                        Reflect.set(y, "value", t);
                    } : void 0,
                    href: p,
                    onClick: h,
                    target: s
                }, m = "string" == typeof i ? o(i) : i;
                return a(m, r({}, v), u);
            };
        }
    });
}

function jt(t) {
    var r = t.router, n = t.ref, e = t.onMounted, o = t.onUnmounted, i = t.readonly;
    return function() {
        var t = n(r.getparams()), a = tt((function(r) {
            t.value = r;
        }));
        return e((function() {
            r.mount(), r.on("params", a);
        })), o((function() {
            r.unmount(), r.off("params", a), a.cancel();
        })), i(t);
    };
}

function Et(t) {
    var n = t.readonly, e = t.onMounted, o = t.onUnmounted, i = t.router, a = t.resolveComponent, u = t.defineComponent, c = t.h, f = t.ref, l = jt({
        router: i,
        ref: f,
        onMounted: e,
        onUnmounted: o,
        readonly: n
    });
    return u({
        inheritAttrs: !1,
        setup: function(t, n) {
            var e = n.attrs, o = e.routes;
            if (!Array.isArray(o)) throw new TypeError("array");
            var u = l();
            return function() {
                var t = e.routes;
                if (!Array.isArray(t)) throw new TypeError("array");
                if (!t.every((function(t) {
                    return mt(t);
                }))) throw new TypeError('{params:"function"}');
                var n = vt(t, u.value);
                if (bt(n)) {
                    var o = n.redirect;
                    yt(i, o);
                }
                if (bt(n)) return null;
                if (dt(n)) {
                    var f = n.component, l = n.children, s = n.props || {}, y = Object.assign({}, s, {
                        params: u.value
                    }), p = "string" == typeof f ? a(f) : f;
                    return c(p, r({}, y), l);
                }
                return null;
            };
        }
    });
}

export { lt as createHashRouter, ht as createReactLink, wt as createReactParamsHook, gt as createReactView, st as createSearchRouter, St as createVueLink, jt as createVueParamsHook, Et as createVueView };
//# sourceMappingURL=index.js.map
