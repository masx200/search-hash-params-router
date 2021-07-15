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
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, r) : void 0;
    }
}

function u(t, r) {
    (null == r || r > t.length) && (r = t.length);
    for (var n = 0, e = new Array(r); n < r; n++) e[n] = t[n];
    return e;
}

function f() {
    return {}.toString.call(e({}, Symbol.toStringTag, "EventEmitterTarget"));
}

function c(t) {
    if ("string" != typeof t && "symbol" != n(t)) throw new TypeError(" EVENTNAME expected: string | symbol;but invalid :" + t);
}

function s(t) {
    if ("function" != typeof t) throw new TypeError(" EVENTLISTENER expected: (event?: any) => void;but invalid:" + t);
}

function l() {
    var t, r = new Map, n = new WeakMap;
    function a(t) {
        var n = r.get(t);
        return n || (n = new Set, r.set(t, n)), n;
    }
    function u(t) {
        c(t), r.has(t) && a(t).clear();
    }
    function l(t, n) {
        c(t), r.has(t) && a(t).forEach((function(t) {
            Promise.resolve().then((function() {
                t(n);
            }));
        }));
    }
    function h(t, r) {
        c(t), s(r), a(t).add(r);
    }
    function p(t, r) {
        a(t).delete(r);
    }
    function y(t, r) {
        c(t), s(r), p(t, r), function(t, r) {
            var e = a(t), o = n.get(r);
            o && e.delete(o);
        }(t, r);
    }
    function v() {
        return i(r).map((function(t) {
            var r = o(t, 2);
            return [ r[0], i(r[1]) ];
        }))[Symbol.iterator]();
    }
    return e(t = {}, Symbol.toPrimitive, f), e(t, Symbol.toStringTag, "EventEmitterTarget"), 
    e(t, Symbol.iterator, v), e(t, "entries", v), e(t, "listenerCount", (function(t) {
        return c(t), r.has(t) ? a(t).size : 0;
    })), e(t, "clear", u), e(t, "removeAllListeners", u), e(t, "on", h), e(t, "addListener", h), 
    e(t, "off", y), e(t, "removeListener", y), e(t, "once", (function(t, r) {
        c(t), s(r);
        var e = !1, o = n.get(r);
        if (!o) {
            o = function n(o) {
                p(t, n), p(t, r), e || (e = !0, r(o));
            }, n.set(r, o);
        }
        p(t, r), h(t, o);
    })), e(t, "emit", l), e(t, "dispatch", l), e(t, "eventNames", (function() {
        return i(r.keys());
    })), e(t, "listeners", (function(t) {
        return c(t), r.has(t) ? i(a(t)) : [];
    })), t;
}

var h = function(t) {
    var r = Symbol(), n = new Function("return async()=>{}")()();
    function e() {
        var t = l();
        return this && this instanceof e ? (Object.assign(this, t), this) : Reflect.construct(e, []);
    }
    return Reflect.set(e, r, n), e;
}(), p = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

var y = function(t) {
    var r = n(t);
    return null != t && ("object" == r || "function" == r);
}, v = "object" == n(p) && p && p.Object === Object && p, m = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self, b = v || m || Function("return this")(), d = b, w = function() {
    return d.Date.now();
}, g = /\s/;

var S = function(t) {
    for (var r = t.length; r-- && g.test(t.charAt(r)); ) ;
    return r;
}, j = /^\s+/;

var E = function(t) {
    return t ? t.slice(0, S(t) + 1).replace(j, "") : t;
}, T = b.Symbol, O = T, A = Object.prototype, P = A.hasOwnProperty, R = A.toString, L = O ? O.toStringTag : void 0;

var U = function(t) {
    var r = P.call(t, L), n = t[L];
    try {
        t[L] = void 0;
        var e = !0;
    } catch (t) {}
    var o = R.call(t);
    return e && (r ? t[L] = n : delete t[L]), o;
}, C = Object.prototype.toString;

var k = U, x = function(t) {
    return C.call(t);
}, N = T ? T.toStringTag : void 0;

var I = function(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : N && N in Object(t) ? k(t) : x(t);
}, M = function(t) {
    return null != t && "object" == n(t);
};

var D = E, K = y, $ = function(t) {
    return "symbol" == n(t) || M(t) && "[object Symbol]" == I(t);
}, W = /^[-+]0x[0-9a-f]+$/i, F = /^0b[01]+$/i, V = /^0o[0-7]+$/i, z = parseInt;

var H = y, _ = w, q = function(t) {
    if ("number" == typeof t) return t;
    if ($(t)) return NaN;
    if (K(t)) {
        var r = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = K(r) ? r + "" : r;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = D(t);
    var n = F.test(t);
    return n || V.test(t) ? z(t.slice(2), n ? 2 : 8) : W.test(t) ? NaN : +t;
}, B = Math.max, G = Math.min;

var J = function(t, r, n) {
    var e, o, i, a, u, f, c = 0, s = !1, l = !1, h = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");
    function p(r) {
        var n = e, i = o;
        return e = o = void 0, c = r, a = t.apply(i, n);
    }
    function y(t) {
        return c = t, u = setTimeout(m, r), s ? p(t) : a;
    }
    function v(t) {
        var n = t - f;
        return void 0 === f || n >= r || n < 0 || l && t - c >= i;
    }
    function m() {
        var t = _();
        if (v(t)) return b(t);
        u = setTimeout(m, function(t) {
            var n = r - (t - f);
            return l ? G(n, i - (t - c)) : n;
        }(t));
    }
    function b(t) {
        return u = void 0, h && e ? p(t) : (e = o = void 0, a);
    }
    function d() {
        var t = _(), n = v(t);
        if (e = arguments, o = this, f = t, n) {
            if (void 0 === u) return y(f);
            if (l) return clearTimeout(u), u = setTimeout(m, r), p(f);
        }
        return void 0 === u && (u = setTimeout(m, r)), a;
    }
    return r = q(r) || 0, H(n) && (s = !!n.leading, i = (l = "maxWait" in n) ? B(q(n.maxWait) || 0, r) : i, 
    h = "trailing" in n ? !!n.trailing : h), d.cancel = function() {
        void 0 !== u && clearTimeout(u), c = 0, e = f = o = u = void 0;
    }, d.flush = function() {
        return void 0 === u ? a : b(_());
    }, d;
};

function Q() {
    return location.hash && Object.fromEntries(new URLSearchParams(location.hash.slice(1))) || {};
}

function X(t) {
    if (!t) throw new TypeError("object,function");
    var e = Q(), o = new URL(location.href);
    if ("function" == typeof t) return e = t(e), o.hash = String(new URLSearchParams(r({}, t))), 
    o.href;
    if ("object" === n(t)) return e = t, o.hash = String(new URLSearchParams(r({}, t))), 
    o.href;
    throw new TypeError("object,function");
}

function Y(t) {
    var n = location.hash, e = new URL(location.href);
    e.hash = String(new URLSearchParams(r({}, t))), n !== e.hash && (history.pushState({}, "", e.href), 
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
    var e = tt(), o = new URL(location.href);
    if ("function" == typeof t) return e = t(e), o.search = String(new URLSearchParams(r({}, t))), 
    o.href;
    if ("object" === n(t)) return e = t, o.search = String(new URLSearchParams(r({}, t))), 
    o.href;
    throw new TypeError("object,function");
}

function nt(t) {
    var n = location.search, e = new URL(location.href);
    e.search = String(new URLSearchParams(r({}, t))), n !== e.search && (history.pushState({}, "", e.href), 
    window.dispatchEvent(new Event("popstate")));
}

function et(t) {
    nt(t(tt()));
}

function ot(t) {
    var n = 0, o = "search" === t ? "popstate" : "hashchange", i = h(), a = J((function() {
        var r = "hash" === t ? Q() : tt();
        f.emit("params", r);
    }));
    var u = e({
        mount: function() {
            window.addEventListener(o, a), a(), n++;
        },
        unmount: function() {
            --n <= 0 && (window.removeEventListener(o, a), a.cancel(), f.removeAllListeners("params"));
        },
        paramshref: "hash" === t ? X : rt,
        setparams: "hash" === t ? Y : nt,
        getparams: "hash" === t ? Q : tt,
        transformparams: "hash" === t ? Z : et
    }, Symbol.toStringTag, "search" === t ? "SearchRouter" : "HashRouter"), f = r(r({}, i), u);
    return f;
}

function it() {
    return ot("hash");
}

function at() {
    return ot("search");
}

function ut(t, r) {
    if (!r) throw new TypeError("object,function");
    if ("function" != typeof r) {
        if ("object" !== n(r)) throw new TypeError("object,function");
        t.setparams(r);
    } else t.transformparams(r);
}

function ft(t) {
    var r = t.onClick, n = t.target, e = t.router, o = t.to;
    return function(t) {
        try {
            "function" == typeof r && r(t);
        } catch (r) {
            throw t.preventDefault(), r;
        }
        t.defaultPrevented || 0 !== t.button || n && "_self" !== n || function(t) {
            return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
        }(t) || (t.preventDefault(), ut(e, o));
    };
}

function ct(t) {
    var e = t.router, o = t.forwardRef, i = t.createElement;
    return o((function(t, o) {
        var a = t.component, u = void 0 === a ? "a" : a, f = t.to, c = t.onClick, s = t.children, l = t.target;
        if (!f) throw new TypeError("object,function");
        if ("function" != typeof f && "object" !== n(f)) throw new TypeError("object,function");
        var h = e.paramshref(f), p = ft({
            onClick: c,
            target: l,
            router: e,
            to: f
        });
        return i(u, r({}, {
            ref: o,
            href: h,
            onClick: p,
            target: l
        }), s);
    }));
}

function st(t, r) {
    var n, e = function(t, r) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = a(t)) || r && t && "number" == typeof t.length) {
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
        var i, u = !0, f = !1;
        return {
            s: function() {
                n = n.call(t);
            },
            n: function() {
                var t = n.next();
                return u = t.done, t;
            },
            e: function(t) {
                f = !0, i = t;
            },
            f: function() {
                try {
                    u || null == n.return || n.return();
                } finally {
                    if (f) throw i;
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

function lt(t) {
    return !(!t || "object" !== n(t) || "function" != typeof t.params);
}

function ht(t) {
    return !("function" != typeof (null == t ? void 0 : t.params) || null == t || !t.redirect);
}

function pt(t) {
    return !("function" != typeof (null == t ? void 0 : t.params) || null == t || !t.component);
}

function yt(t) {
    var r = t.router, n = t.useState, e = t.useEffect;
    return function() {
        var t = o(n(r.getparams()), 2), i = t[0], a = t[1];
        return e((function() {
            var t = J((function(t) {
                a(t);
            }));
            return r.mount(), r.on("params", t), function() {
                r.unmount(), r.off("params", t), t.cancel();
            };
        }), []), i;
    };
}

function vt(t) {
    var n = t.router, e = t.createElement, o = t.useState, i = t.useEffect, a = yt({
        router: n,
        useState: o,
        useEffect: i
    });
    return function(t) {
        var o = t.routes;
        if (!Array.isArray(o)) throw new TypeError("array");
        if (!o.every((function(t) {
            return lt(t);
        }))) throw new TypeError('{params:"function"}');
        var i = a(), u = st(o, i);
        if (ht(u)) {
            var f = u.redirect;
            ut(n, f);
        }
        if (ht(u)) return null;
        if (pt(u)) {
            var c = u.component, s = u.children, l = u.props || {}, h = Object.assign({}, l, {
                params: i
            });
            return e(c, r({}, h), s);
        }
        return null;
    };
}

function mt(t) {
    var e = t.router, o = t.resolveComponent, i = t.defineComponent, a = t.h;
    return i({
        inheritAttrs: !1,
        setup: function(t, i) {
            var u = i.slots, f = i.attrs;
            return function() {
                var t = f.component, i = void 0 === t ? "a" : t, c = f.to, s = f.onClick, l = f.target, h = f.innerRef;
                if (!c) throw new TypeError("object,function");
                if ("function" != typeof c && "object" !== n(c)) throw new TypeError("object,function");
                var p = e.paramshref(c), y = ft({
                    onClick: s,
                    target: l,
                    router: e,
                    to: c
                }), v = {
                    ref: "function" == typeof h ? h : h && "object" === n(h) ? function(t) {
                        Reflect.set(h, "value", t);
                    } : void 0,
                    href: p,
                    onClick: y,
                    target: l
                }, m = "string" == typeof i ? o(i) : i;
                return a(m, r({}, v), u);
            };
        }
    });
}

function bt(t) {
    var r = t.router, n = t.ref, e = t.onMounted, o = t.onUnmounted, i = t.readonly;
    return function() {
        var t = n(r.getparams()), a = J((function(r) {
            t.value = r;
        }));
        return e((function() {
            r.mount(), r.on("params", a);
        })), o((function() {
            r.unmount(), r.off("params", a), a.cancel();
        })), i(t);
    };
}

function dt(t) {
    var n = t.readonly, e = t.onMounted, o = t.onUnmounted, i = t.router, a = t.resolveComponent, u = t.defineComponent, f = t.h, c = t.ref, s = bt({
        router: i,
        ref: c,
        onMounted: e,
        onUnmounted: o,
        readonly: n
    });
    return u({
        inheritAttrs: !1,
        setup: function(t, n) {
            var e = n.attrs, o = e.routes;
            if (!Array.isArray(o)) throw new TypeError("array");
            var u = s();
            return function() {
                var t = e.routes;
                if (!Array.isArray(t)) throw new TypeError("array");
                if (!t.every((function(t) {
                    return lt(t);
                }))) throw new TypeError('{params:"function"}');
                var n = st(t, u.value);
                if (ht(n)) {
                    var o = n.redirect;
                    ut(i, o);
                }
                if (ht(n)) return null;
                if (pt(n)) {
                    var c = n.component, s = n.children, l = n.props || {}, h = Object.assign({}, l, {
                        params: u.value
                    }), p = "string" == typeof c ? a(c) : c;
                    return f(p, r({}, h), s);
                }
                return null;
            };
        }
    });
}

export { it as createHashRouter, ct as createReactLink, yt as createReactParamsHook, vt as createReactView, at as createSearchRouter, mt as createVueLink, bt as createVueParamsHook, dt as createVueView };
//# sourceMappingURL=index.js.map
