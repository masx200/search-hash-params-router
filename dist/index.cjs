function t(t, r) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        r && (n = n.filter((function(r) {
            return Object.getOwnPropertyDescriptor(t, r).enumerable;
        }))), e.push.apply(e, n);
    }
    return e;
}

function r(r) {
    for (var e = 1; e < arguments.length; e++) {
        var o = null != arguments[e] ? arguments[e] : {};
        e % 2 ? t(Object(o), !0).forEach((function(t) {
            n(r, t, o[t]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach((function(t) {
            Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(o, t));
        }));
    }
    return r;
}

function e(t) {
    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

function n(t, r, e) {
    return r in t ? Object.defineProperty(t, r, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[r] = e, t;
}

function o(t, r) {
    return function(t) {
        if (Array.isArray(t)) return t;
    }(t) || function(t, r) {
        var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null == e) return;
        var n, o, i = [], a = !0, u = !1;
        try {
            for (e = e.call(t); !(a = (n = e.next()).done) && (i.push(n.value), !r || i.length !== r); a = !0) ;
        } catch (t) {
            u = !0, o = t;
        } finally {
            try {
                a || null == e.return || e.return();
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
        var e = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? a(t, r) : void 0;
    }
}

function a(t, r) {
    (null == r || r > t.length) && (r = t.length);
    for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
    return n;
}

function u(t) {
    return (u = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
        return e(t);
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
    })(t);
}

function c(t, r, e) {
    return r in t ? Object.defineProperty(t, r, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[r] = e, t;
}

function f(t, r) {
    return function(t) {
        if (Array.isArray(t)) return t;
    }(t) || function(t, r) {
        var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != e) {
            var n, o, i = [], a = !0, u = !1;
            try {
                for (e = e.call(t); !(a = (n = e.next()).done) && (i.push(n.value), !r || i.length !== r); a = !0) ;
            } catch (t) {
                u = !0, o = t;
            } finally {
                try {
                    a || null == e.return || e.return();
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
        var e = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? y(t, r) : void 0;
    }
}

function y(t, r) {
    (null == r || r > t.length) && (r = t.length);
    for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
    return n;
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
    var t, r = new Map, e = new WeakMap;
    function n(t) {
        var e = r.get(t);
        return e || (e = new Set, r.set(t, e)), e;
    }
    function o(t) {
        h(t), r.has(t) && n(t).clear();
    }
    function i(t, e) {
        h(t), r.has(t) && n(t).forEach((function(t) {
            Promise.resolve().then((function() {
                t(e);
            }));
        }));
    }
    function a(t, r) {
        h(t), v(r), n(t).add(r);
    }
    function u(t, r) {
        n(t).delete(r);
    }
    function s(t, r) {
        h(t), v(r), u(t, r), function(t, r) {
            var o = n(t), i = e.get(r);
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
        return h(t), r.has(t) ? n(t).size : 0;
    })), c(t, "clear", o), c(t, "removeAllListeners", o), c(t, "on", a), c(t, "addListener", a), 
    c(t, "off", s), c(t, "removeListener", s), c(t, "once", (function(t, r) {
        h(t), v(r);
        var n = !1, o = e.get(r);
        o || (o = function e(o) {
            u(t, e), u(t, r), n || (n = !0, r(o));
        }, e.set(r, o)), u(t, r), a(t, o);
    })), c(t, "emit", i), c(t, "dispatch", i), c(t, "eventNames", (function() {
        return l(r.keys());
    })), c(t, "listeners", (function(t) {
        return h(t), r.has(t) ? l(n(t)) : [];
    })), t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var b = function(t) {
    var r = Symbol();
    try {
        var e = new Function("return async()=>{}")()();
    } catch (t) {}
    function n() {
        var t = m();
        return this && this instanceof n ? (Object.assign(this, t), this) : Reflect.construct(n, []);
    }
    return Reflect.set(n, r, e), n;
}(), d = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

var w = function(t) {
    var r = e(t);
    return null != t && ("object" == r || "function" == r);
}, g = "object" == e(d) && d && d.Object === Object && d, S = "object" == ("undefined" == typeof self ? "undefined" : e(self)) && self && self.Object === Object && self, j = g || S || Function("return this")(), E = j, T = function() {
    return E.Date.now();
}, O = /\s/;

var A = function(t) {
    for (var r = t.length; r-- && O.test(t.charAt(r)); ) ;
    return r;
}, P = /^\s+/;

var R = function(t) {
    return t ? t.slice(0, A(t) + 1).replace(P, "") : t;
}, L = j.Symbol, x = L, U = Object.prototype, k = U.hasOwnProperty, C = U.toString, I = x ? x.toStringTag : void 0;

var M = function(t) {
    var r = k.call(t, I), e = t[I];
    try {
        t[I] = void 0;
        var n = !0;
    } catch (t) {}
    var o = C.call(t);
    return n && (r ? t[I] = e : delete t[I]), o;
}, N = Object.prototype.toString;

var D = M, V = function(t) {
    return N.call(t);
}, $ = L ? L.toStringTag : void 0;

var H = function(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : $ && $ in Object(t) ? D(t) : V(t);
}, K = function(t) {
    return null != t && "object" == e(t);
};

var W = R, _ = w, F = function(t) {
    return "symbol" == e(t) || K(t) && "[object Symbol]" == H(t);
}, z = /^[-+]0x[0-9a-f]+$/i, q = /^0b[01]+$/i, B = /^0o[0-7]+$/i, G = parseInt;

var J = w, Q = T, X = function(t) {
    if ("number" == typeof t) return t;
    if (F(t)) return NaN;
    if (_(t)) {
        var r = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = _(r) ? r + "" : r;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = W(t);
    var e = q.test(t);
    return e || B.test(t) ? G(t.slice(2), e ? 2 : 8) : z.test(t) ? NaN : +t;
}, Y = Math.max, Z = Math.min;

var tt = function(t, r, e) {
    var n, o, i, a, u, c, f = 0, l = !1, s = !1, y = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");
    function p(r) {
        var e = n, i = o;
        return n = o = void 0, f = r, a = t.apply(i, e);
    }
    function h(t) {
        return f = t, u = setTimeout(m, r), l ? p(t) : a;
    }
    function v(t) {
        var e = t - c;
        return void 0 === c || e >= r || e < 0 || s && t - f >= i;
    }
    function m() {
        var t = Q();
        if (v(t)) return b(t);
        u = setTimeout(m, function(t) {
            var e = r - (t - c);
            return s ? Z(e, i - (t - f)) : e;
        }(t));
    }
    function b(t) {
        return u = void 0, y && n ? p(t) : (n = o = void 0, a);
    }
    function d() {
        var t = Q(), e = v(t);
        if (n = arguments, o = this, c = t, e) {
            if (void 0 === u) return h(c);
            if (s) return clearTimeout(u), u = setTimeout(m, r), p(c);
        }
        return void 0 === u && (u = setTimeout(m, r)), a;
    }
    return r = X(r) || 0, J(e) && (l = !!e.leading, i = (s = "maxWait" in e) ? Y(X(e.maxWait) || 0, r) : i, 
    y = "trailing" in e ? !!e.trailing : y), d.cancel = function() {
        void 0 !== u && clearTimeout(u), f = 0, n = c = o = u = void 0;
    }, d.flush = function() {
        return void 0 === u ? a : b(Q());
    }, d;
};

function rt() {
    return location.hash && Object.fromEntries(new URLSearchParams(location.hash.slice(1))) || {};
}

function et(t) {
    if (!t) throw new TypeError("object,function");
    var n = rt(), o = new URL(location.href);
    if ("function" == typeof t) return n = t(n), o.hash = String(new URLSearchParams(r({}, n))), 
    o.href;
    if ("object" === e(t)) return n = t, o.hash = String(new URLSearchParams(r({}, n))), 
    o.href;
    throw new TypeError("object,function");
}

function nt(t) {
    var e = location.hash, n = new URL(location.href);
    n.hash = String(new URLSearchParams(r({}, t))), e !== n.hash && (history.pushState({}, "", n.href), 
    window.dispatchEvent(new Event("hashchange")));
}

function ot(t) {
    nt(t(rt()));
}

function it() {
    return location.search && Object.fromEntries(new URL(location.href).searchParams) || {};
}

function at(t) {
    if (!t) throw new TypeError("object,function");
    var n = it(), o = new URL(location.href);
    if ("function" == typeof t) return n = t(n), o.search = String(new URLSearchParams(r({}, n))), 
    o.href;
    if ("object" === e(t)) return n = t, o.search = String(new URLSearchParams(r({}, n))), 
    o.href;
    throw new TypeError("object,function");
}

function ut(t) {
    var e = location.search, n = new URL(location.href);
    n.search = String(new URLSearchParams(r({}, t))), e !== n.search && (history.pushState({}, "", n.href), 
    window.dispatchEvent(new Event("popstate")));
}

function ct(t) {
    ut(t(it()));
}

function ft(t) {
    var e = 0, o = "search" === t ? "popstate" : "hashchange", i = b(), a = tt((function() {
        var r = "hash" === t ? rt() : it();
        c.emit("params", r);
    }));
    var u = n({
        mount: function() {
            window.addEventListener(o, a), a(), e++;
        },
        unmount: function() {
            --e <= 0 && (window.removeEventListener(o, a), a.cancel(), c.removeAllListeners("params"));
        },
        paramshref: "hash" === t ? et : at,
        setparams: "hash" === t ? nt : ut,
        getparams: "hash" === t ? rt : it,
        transformparams: "hash" === t ? ot : ct
    }, Symbol.toStringTag, "search" === t ? "SearchRouter" : "HashRouter"), c = r(r({}, i), u);
    return c;
}

function lt(t, r) {
    if (!r) throw new TypeError("object,function");
    if ("function" != typeof r) {
        if ("object" !== e(r)) throw new TypeError("object,function");
        t.setparams(r);
    } else t.transformparams(r);
}

function st(t) {
    var r = t.onClick, e = t.target, n = t.router, o = t.to;
    return function(t) {
        try {
            "function" == typeof r && r(t);
        } catch (r) {
            throw t.preventDefault(), r;
        }
        t.defaultPrevented || 0 !== t.button || e && "_self" !== e || function(t) {
            return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
        }(t) || (t.preventDefault(), lt(n, o));
    };
}

function yt(t, r) {
    var e, n = function(t, r) {
        var e = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!e) {
            if (Array.isArray(t) || (e = i(t)) || r && t && "number" == typeof t.length) {
                e && (t = e);
                var n = 0, o = function() {};
                return {
                    s: o,
                    n: function() {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
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
                e = e.call(t);
            },
            n: function() {
                var t = e.next();
                return u = t.done, t;
            },
            e: function(t) {
                c = !0, a = t;
            },
            f: function() {
                try {
                    u || null == e.return || e.return();
                } finally {
                    if (c) throw a;
                }
            }
        };
    }(t);
    try {
        for (n.s(); !(e = n.n()).done; ) {
            var o = e.value;
            if (o.params(r)) return o;
        }
    } catch (t) {
        n.e(t);
    } finally {
        n.f();
    }
}

function pt(t) {
    return !(!t || "object" !== e(t) || "function" != typeof t.params);
}

function ht(t) {
    return !("function" != typeof (null == t ? void 0 : t.params) || null == t || !t.redirect);
}

function vt(t) {
    return !("function" != typeof (null == t ? void 0 : t.params) || null == t || !t.component);
}

function mt(t) {
    var r = t.router, e = t.useState, n = t.useEffect;
    return function() {
        var t = o(e(r.getparams()), 2), i = t[0], a = t[1];
        return n((function() {
            var t = tt((function(t) {
                a(t);
            }));
            return r.mount(), r.on("params", t), function() {
                r.unmount(), r.off("params", t), t.cancel();
            };
        }), []), i;
    };
}

function bt(t) {
    var r = t.router, e = t.ref, n = t.onMounted, o = t.onUnmounted, i = t.readonly;
    return function() {
        var t = e(r.getparams()), a = tt((function(r) {
            t.value = r;
        }));
        return n((function() {
            r.mount(), r.on("params", a);
        })), o((function() {
            r.unmount(), r.off("params", a), a.cancel();
        })), i(t);
    };
}

exports.createHashRouter = function() {
    return ft("hash");
}, exports.createReactLink = function(t) {
    var n = t.router, o = t.forwardRef, i = t.createElement;
    return o((function(t, o) {
        var a = t.component, u = void 0 === a ? "a" : a, c = t.to, f = t.onClick, l = t.children, s = t.target;
        if (!c) throw new TypeError("object,function");
        if ("function" != typeof c && "object" !== e(c)) throw new TypeError("object,function");
        var y = n.paramshref(c), p = st({
            onClick: f,
            target: s,
            router: n,
            to: c
        });
        return i(u, r({}, {
            ref: o,
            href: y,
            onClick: p,
            target: s
        }), l);
    }));
}, exports.createReactParamsHook = mt, exports.createReactView = function(t) {
    var e = t.router, n = t.createElement, o = t.useState, i = t.useEffect, a = mt({
        router: e,
        useState: o,
        useEffect: i
    });
    return function(t) {
        var o = t.routes;
        if (!Array.isArray(o)) throw new TypeError("array");
        if (!o.every((function(t) {
            return pt(t);
        }))) throw new TypeError('{params:"function"}');
        var i = a(), u = yt(o, i);
        if (ht(u)) {
            var c = u.redirect;
            lt(e, c);
        }
        if (ht(u)) return null;
        if (vt(u)) {
            var f = u.component, l = u.children, s = u.props || {}, y = Object.assign({}, s, {
                params: i
            });
            return n(f, r({}, y), l);
        }
        return null;
    };
}, exports.createSearchRouter = function() {
    return ft("search");
}, exports.createVueLink = function(t) {
    var n = t.router, o = t.resolveComponent, i = t.defineComponent, a = t.h;
    return i({
        inheritAttrs: !1,
        setup: function(t, i) {
            var u = i.slots, c = i.attrs;
            return function() {
                var t = c.component, i = void 0 === t ? "a" : t, f = c.to, l = c.onClick, s = c.target, y = c.innerRef;
                if (!f) throw new TypeError("object,function");
                if ("function" != typeof f && "object" !== e(f)) throw new TypeError("object,function");
                var p = n.paramshref(f), h = st({
                    onClick: l,
                    target: s,
                    router: n,
                    to: f
                }), v = {
                    ref: "function" == typeof y ? y : y && "object" === e(y) ? function(t) {
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
}, exports.createVueParamsHook = bt, exports.createVueView = function(t) {
    var e = t.readonly, n = t.onMounted, o = t.onUnmounted, i = t.router, a = t.resolveComponent, u = t.defineComponent, c = t.h, f = t.ref, l = bt({
        router: i,
        ref: f,
        onMounted: n,
        onUnmounted: o,
        readonly: e
    });
    return u({
        inheritAttrs: !1,
        setup: function(t, e) {
            var n = e.attrs, o = n.routes;
            if (!Array.isArray(o)) throw new TypeError("array");
            var u = l();
            return function() {
                var t = n.routes;
                if (!Array.isArray(t)) throw new TypeError("array");
                if (!t.every((function(t) {
                    return pt(t);
                }))) throw new TypeError('{params:"function"}');
                var e = yt(t, u.value);
                if (ht(e)) {
                    var o = e.redirect;
                    lt(i, o);
                }
                if (ht(e)) return null;
                if (vt(e)) {
                    var f = e.component, l = e.children, s = e.props || {}, y = Object.assign({}, s, {
                        params: u.value
                    }), p = "string" == typeof f ? a(f) : f;
                    return c(p, r({}, y), l);
                }
                return null;
            };
        }
    });
};
//# sourceMappingURL=index.cjs.map
