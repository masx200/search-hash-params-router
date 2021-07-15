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
    }(t, r) || a(t, r) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function i(t) {
    return function(t) {
        if (Array.isArray(t)) return u(t);
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }(t) || a(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function a(t, r) {
    if (t) {
        if ("string" == typeof t) return u(t, r);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? u(t, r) : void 0;
    }
}

function u(t, r) {
    (null == r || r > t.length) && (r = t.length);
    for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
    return n;
}

function c() {
    return {}.toString.call(n({}, Symbol.toStringTag, "EventEmitterTarget"));
}

function f(t) {
    if ("string" != typeof t && "symbol" != e(t)) throw new TypeError(" EVENTNAME expected: string | symbol;but invalid :" + t);
}

function s(t) {
    if ("function" != typeof t) throw new TypeError(" EVENTLISTENER expected: (event?: any) => void;but invalid:" + t);
}

function l() {
    var t, r = new Map, e = new WeakMap;
    function a(t) {
        var e = r.get(t);
        return e || (e = new Set, r.set(t, e)), e;
    }
    function u(t) {
        f(t), r.has(t) && a(t).clear();
    }
    function l(t, e) {
        f(t), r.has(t) && a(t).forEach((function(t) {
            Promise.resolve().then((function() {
                t(e);
            }));
        }));
    }
    function p(t, r) {
        f(t), s(r), a(t).add(r);
    }
    function h(t, r) {
        a(t).delete(r);
    }
    function y(t, r) {
        f(t), s(r), h(t, r), function(t, r) {
            var n = a(t), o = e.get(r);
            o && n.delete(o);
        }(t, r);
    }
    function v() {
        return i(r).map((function(t) {
            var r = o(t, 2);
            return [ r[0], i(r[1]) ];
        }))[Symbol.iterator]();
    }
    return n(t = {}, Symbol.toPrimitive, c), n(t, Symbol.toStringTag, "EventEmitterTarget"), 
    n(t, Symbol.iterator, v), n(t, "entries", v), n(t, "listenerCount", (function(t) {
        return f(t), r.has(t) ? a(t).size : 0;
    })), n(t, "clear", u), n(t, "removeAllListeners", u), n(t, "on", p), n(t, "addListener", p), 
    n(t, "off", y), n(t, "removeListener", y), n(t, "once", (function(t, r) {
        f(t), s(r);
        var n = !1, o = e.get(r);
        if (!o) {
            o = function e(o) {
                h(t, e), h(t, r), n || (n = !0, r(o));
            }, e.set(r, o);
        }
        h(t, r), p(t, o);
    })), n(t, "emit", l), n(t, "dispatch", l), n(t, "eventNames", (function() {
        return i(r.keys());
    })), n(t, "listeners", (function(t) {
        return f(t), r.has(t) ? i(a(t)) : [];
    })), t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var p = function(t) {
    var r = Symbol(), e = new Function("return async()=>{}")()();
    function n() {
        var t = l();
        return this && this instanceof n ? (Object.assign(this, t), this) : Reflect.construct(n, []);
    }
    return Reflect.set(n, r, e), n;
}(), h = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

var y = function(t) {
    var r = e(t);
    return null != t && ("object" == r || "function" == r);
}, v = "object" == e(h) && h && h.Object === Object && h, m = "object" == ("undefined" == typeof self ? "undefined" : e(self)) && self && self.Object === Object && self, b = v || m || Function("return this")(), d = b, w = function() {
    return d.Date.now();
}, g = /\s/;

var S = function(t) {
    for (var r = t.length; r-- && g.test(t.charAt(r)); ) ;
    return r;
}, j = /^\s+/;

var E = function(t) {
    return t ? t.slice(0, S(t) + 1).replace(j, "") : t;
}, T = b.Symbol, O = T, R = Object.prototype, P = R.hasOwnProperty, A = R.toString, L = O ? O.toStringTag : void 0;

var x = function(t) {
    var r = P.call(t, L), e = t[L];
    try {
        t[L] = void 0;
        var n = !0;
    } catch (t) {}
    var o = A.call(t);
    return n && (r ? t[L] = e : delete t[L]), o;
}, U = Object.prototype.toString;

var k = x, C = function(t) {
    return U.call(t);
}, M = T ? T.toStringTag : void 0;

var N = function(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : M && M in Object(t) ? k(t) : C(t);
}, I = function(t) {
    return null != t && "object" == e(t);
};

var D = E, V = y, H = function(t) {
    return "symbol" == e(t) || I(t) && "[object Symbol]" == N(t);
}, K = /^[-+]0x[0-9a-f]+$/i, $ = /^0b[01]+$/i, W = /^0o[0-7]+$/i, _ = parseInt;

var F = y, z = w, q = function(t) {
    if ("number" == typeof t) return t;
    if (H(t)) return NaN;
    if (V(t)) {
        var r = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = V(r) ? r + "" : r;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = D(t);
    var e = $.test(t);
    return e || W.test(t) ? _(t.slice(2), e ? 2 : 8) : K.test(t) ? NaN : +t;
}, B = Math.max, G = Math.min;

var J = function(t, r, e) {
    var n, o, i, a, u, c, f = 0, s = !1, l = !1, p = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");
    function h(r) {
        var e = n, i = o;
        return n = o = void 0, f = r, a = t.apply(i, e);
    }
    function y(t) {
        return f = t, u = setTimeout(m, r), s ? h(t) : a;
    }
    function v(t) {
        var e = t - c;
        return void 0 === c || e >= r || e < 0 || l && t - f >= i;
    }
    function m() {
        var t = z();
        if (v(t)) return b(t);
        u = setTimeout(m, function(t) {
            var e = r - (t - c);
            return l ? G(e, i - (t - f)) : e;
        }(t));
    }
    function b(t) {
        return u = void 0, p && n ? h(t) : (n = o = void 0, a);
    }
    function d() {
        var t = z(), e = v(t);
        if (n = arguments, o = this, c = t, e) {
            if (void 0 === u) return y(c);
            if (l) return clearTimeout(u), u = setTimeout(m, r), h(c);
        }
        return void 0 === u && (u = setTimeout(m, r)), a;
    }
    return r = q(r) || 0, F(e) && (s = !!e.leading, i = (l = "maxWait" in e) ? B(q(e.maxWait) || 0, r) : i, 
    p = "trailing" in e ? !!e.trailing : p), d.cancel = function() {
        void 0 !== u && clearTimeout(u), f = 0, n = c = o = u = void 0;
    }, d.flush = function() {
        return void 0 === u ? a : b(z());
    }, d;
};

function Q() {
    return location.hash && Object.fromEntries(new URLSearchParams(location.hash.slice(1))) || {};
}

function X(t) {
    if (!t) throw new TypeError("object,function");
    var n = Q(), o = new URL(location.href);
    if ("function" == typeof t) return n = t(n), o.hash = String(new URLSearchParams(r({}, n))), 
    o.href;
    if ("object" === e(t)) return n = t, o.hash = String(new URLSearchParams(r({}, n))), 
    o.href;
    throw new TypeError("object,function");
}

function Y(t) {
    var e = location.hash, n = new URL(location.href);
    n.hash = String(new URLSearchParams(r({}, t))), e !== n.hash && (history.pushState({}, "", n.href), 
    window.dispatchEvent(new Event("hashchange")));
}

function Z(t) {
    Y(t(Q()));
}

function tt() {
    return location.search && Object.fromEntries(new URL(location.href).searchParams) || {};
}

function rt(t) {
    if (!t) throw new TypeError("object,function");
    var n = tt(), o = new URL(location.href);
    if ("function" == typeof t) return n = t(n), o.search = String(new URLSearchParams(r({}, n))), 
    o.href;
    if ("object" === e(t)) return n = t, o.search = String(new URLSearchParams(r({}, n))), 
    o.href;
    throw new TypeError("object,function");
}

function et(t) {
    var e = location.search, n = new URL(location.href);
    n.search = String(new URLSearchParams(r({}, t))), e !== n.search && (history.pushState({}, "", n.href), 
    window.dispatchEvent(new Event("popstate")));
}

function nt(t) {
    et(t(tt()));
}

function ot(t) {
    var e = 0, o = "search" === t ? "popstate" : "hashchange", i = p(), a = J((function() {
        var r = "hash" === t ? Q() : tt();
        c.emit("params", r);
    }));
    var u = n({
        mount: function() {
            window.addEventListener(o, a), a(), e++;
        },
        unmount: function() {
            --e <= 0 && (window.removeEventListener(o, a), a.cancel(), c.removeAllListeners("params"));
        },
        paramshref: "hash" === t ? X : rt,
        setparams: "hash" === t ? Y : et,
        getparams: "hash" === t ? Q : tt,
        transformparams: "hash" === t ? Z : nt
    }, Symbol.toStringTag, "search" === t ? "SearchRouter" : "HashRouter"), c = r(r({}, i), u);
    return c;
}

function it(t, r) {
    if (!r) throw new TypeError("object,function");
    if ("function" != typeof r) {
        if ("object" !== e(r)) throw new TypeError("object,function");
        t.setparams(r);
    } else t.transformparams(r);
}

function at(t) {
    var r = t.onClick, e = t.target, n = t.router, o = t.to;
    return function(t) {
        try {
            "function" == typeof r && r(t);
        } catch (r) {
            throw t.preventDefault(), r;
        }
        t.defaultPrevented || 0 !== t.button || e && "_self" !== e || function(t) {
            return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
        }(t) || (t.preventDefault(), it(n, o));
    };
}

function ut(t, r) {
    var e, n = function(t, r) {
        var e = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!e) {
            if (Array.isArray(t) || (e = a(t)) || r && t && "number" == typeof t.length) {
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
        var i, u = !0, c = !1;
        return {
            s: function() {
                e = e.call(t);
            },
            n: function() {
                var t = e.next();
                return u = t.done, t;
            },
            e: function(t) {
                c = !0, i = t;
            },
            f: function() {
                try {
                    u || null == e.return || e.return();
                } finally {
                    if (c) throw i;
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

function ct(t) {
    return !(!t || "object" !== e(t) || "function" != typeof t.params);
}

function ft(t) {
    return !("function" != typeof (null == t ? void 0 : t.params) || null == t || !t.redirect);
}

function st(t) {
    return !("function" != typeof (null == t ? void 0 : t.params) || null == t || !t.component);
}

function lt(t) {
    var r = t.router, e = t.useState, n = t.useEffect;
    return function() {
        var t = o(e(r.getparams()), 2), i = t[0], a = t[1];
        return n((function() {
            var t = J((function(t) {
                a(t);
            }));
            return r.mount(), r.on("params", t), function() {
                r.unmount(), r.off("params", t), t.cancel();
            };
        }), []), i;
    };
}

function pt(t) {
    var r = t.router, e = t.ref, n = t.onMounted, o = t.onUnmounted, i = t.readonly;
    return function() {
        var t = e(r.getparams()), a = J((function(r) {
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
    return ot("hash");
}, exports.createReactLink = function(t) {
    var n = t.router, o = t.forwardRef, i = t.createElement;
    return o((function(t, o) {
        var a = t.component, u = void 0 === a ? "a" : a, c = t.to, f = t.onClick, s = t.children, l = t.target;
        if (!c) throw new TypeError("object,function");
        if ("function" != typeof c && "object" !== e(c)) throw new TypeError("object,function");
        var p = n.paramshref(c), h = at({
            onClick: f,
            target: l,
            router: n,
            to: c
        });
        return i(u, r({}, {
            ref: o,
            href: p,
            onClick: h,
            target: l
        }), s);
    }));
}, exports.createReactParamsHook = lt, exports.createReactView = function(t) {
    var e = t.router, n = t.createElement, o = t.useState, i = t.useEffect, a = lt({
        router: e,
        useState: o,
        useEffect: i
    });
    return function(t) {
        var o = t.routes;
        if (!Array.isArray(o)) throw new TypeError("array");
        if (!o.every((function(t) {
            return ct(t);
        }))) throw new TypeError('{params:"function"}');
        var i = a(), u = ut(o, i);
        if (ft(u)) {
            var c = u.redirect;
            it(e, c);
        }
        if (ft(u)) return null;
        if (st(u)) {
            var f = u.component, s = u.children, l = u.props || {}, p = Object.assign({}, l, {
                params: i
            });
            return n(f, r({}, p), s);
        }
        return null;
    };
}, exports.createSearchRouter = function() {
    return ot("search");
}, exports.createVueLink = function(t) {
    var n = t.router, o = t.resolveComponent, i = t.defineComponent, a = t.h;
    return i({
        inheritAttrs: !1,
        setup: function(t, i) {
            var u = i.slots, c = i.attrs;
            return function() {
                var t = c.component, i = void 0 === t ? "a" : t, f = c.to, s = c.onClick, l = c.target, p = c.innerRef;
                if (!f) throw new TypeError("object,function");
                if ("function" != typeof f && "object" !== e(f)) throw new TypeError("object,function");
                var h = n.paramshref(f), y = at({
                    onClick: s,
                    target: l,
                    router: n,
                    to: f
                }), v = {
                    ref: "function" == typeof p ? p : p && "object" === e(p) ? function(t) {
                        Reflect.set(p, "value", t);
                    } : void 0,
                    href: h,
                    onClick: y,
                    target: l
                }, m = "string" == typeof i ? o(i) : i;
                return a(m, r({}, v), u);
            };
        }
    });
}, exports.createVueParamsHook = pt, exports.createVueView = function(t) {
    var e = t.readonly, n = t.onMounted, o = t.onUnmounted, i = t.router, a = t.resolveComponent, u = t.defineComponent, c = t.h, f = t.ref, s = pt({
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
            var u = s();
            return function() {
                var t = n.routes;
                if (!Array.isArray(t)) throw new TypeError("array");
                if (!t.every((function(t) {
                    return ct(t);
                }))) throw new TypeError('{params:"function"}');
                var e = ut(t, u.value);
                if (ft(e)) {
                    var o = e.redirect;
                    it(i, o);
                }
                if (ft(e)) return null;
                if (st(e)) {
                    var f = e.component, s = e.children, l = e.props || {}, p = Object.assign({}, l, {
                        params: u.value
                    }), h = "string" == typeof f ? a(f) : f;
                    return c(h, r({}, p), s);
                }
                return null;
            };
        }
    });
};
//# sourceMappingURL=index.cjs.map
