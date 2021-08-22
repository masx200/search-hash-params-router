import r from "@masx200/event-emitter-target";

import e from "lodash/debounce";

import t from "lodash/isEqual";

function n(r, e) {
    var t = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(r);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable;
        }))), t.push.apply(t, n);
    }
    return t;
}

function o(r) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {};
        e % 2 ? n(Object(t), !0).forEach((function(e) {
            i(r, e, t[e]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : n(Object(t)).forEach((function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
        }));
    }
    return r;
}

function a(r) {
    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
        return typeof r;
    } : function(r) {
        return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    })(r);
}

function i(r, e, t) {
    return e in r ? Object.defineProperty(r, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[e] = t, r;
}

function u(r, e) {
    if (null == r) return {};
    var t, n, o = function(r, e) {
        if (null == r) return {};
        var t, n, o = {}, a = Object.keys(r);
        for (n = 0; n < a.length; n++) t = a[n], e.indexOf(t) >= 0 || (o[t] = r[t]);
        return o;
    }(r, e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(r);
        for (n = 0; n < a.length; n++) t = a[n], e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(r, t) && (o[t] = r[t]);
    }
    return o;
}

function c(r, e) {
    return function(r) {
        if (Array.isArray(r)) return r;
    }(r) || function(r, e) {
        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null == t) return;
        var n, o, a = [], i = !0, u = !1;
        try {
            for (t = t.call(r); !(i = (n = t.next()).done) && (a.push(n.value), !e || a.length !== e); i = !0) ;
        } catch (r) {
            u = !0, o = r;
        } finally {
            try {
                i || null == t.return || t.return();
            } finally {
                if (u) throw o;
            }
        }
        return a;
    }(r, e) || f(r, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function f(r, e) {
    if (r) {
        if ("string" == typeof r) return s(r, e);
        var t = Object.prototype.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? s(r, e) : void 0;
    }
}

function s(r, e) {
    (null == e || e > r.length) && (e = r.length);
    for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
    return n;
}

function l() {
    return location.hash && Object.fromEntries(new URLSearchParams(location.hash.slice(1))) || {};
}

function p(r) {
    if (!r) throw new TypeError("object,function");
    var e = l(), t = new URL(location.href);
    if ("function" == typeof r) return e = r(e), t.hash = String(new URLSearchParams(o({}, e))), 
    t.href;
    if ("object" === a(r)) return e = r, t.hash = String(new URLSearchParams(o({}, e))), 
    t.href;
    throw new TypeError("object,function");
}

function h(r) {
    var e = location.hash, t = new URL(location.href);
    t.hash = String(new URLSearchParams(o({}, r))), e !== t.hash && (history.pushState({}, "", t.href), 
    window.dispatchEvent(new Event("hashchange")));
}

function m(r) {
    h(r(l()));
}

function y() {
    return location.search && Object.fromEntries(new URL(location.href).searchParams) || {};
}

function v(r) {
    if (!r) throw new TypeError("object,function");
    var e = y(), t = new URL(location.href);
    if ("function" == typeof r) return e = r(e), t.search = String(new URLSearchParams(o({}, e))), 
    t.href;
    if ("object" === a(r)) return e = r, t.search = String(new URLSearchParams(o({}, e))), 
    t.href;
    throw new TypeError("object,function");
}

function b(r) {
    var e = location.search, t = new URL(location.href);
    t.search = String(new URLSearchParams(o({}, r))), e !== t.search && (history.pushState({}, "", t.href), 
    window.dispatchEvent(new Event("popstate")));
}

function d(r) {
    b(r(y()));
}

function w(t) {
    var n = 0, a = "search" === t ? "popstate" : "hashchange", u = r(), c = e((function() {
        var r = "hash" === t ? l() : y();
        s.emit("params", r);
    }));
    var f = i({
        mount: function() {
            window.addEventListener(a, c), c(), n++;
        },
        unmount: function() {
            --n <= 0 && (window.removeEventListener(a, c), c.cancel(), s.removeAllListeners("params"));
        },
        paramshref: "hash" === t ? p : v,
        setparams: "hash" === t ? h : b,
        getparams: "hash" === t ? l : y,
        transformparams: "hash" === t ? m : d
    }, Symbol.toStringTag, "search" === t ? "SearchRouter" : "HashRouter"), s = o(o({}, u), f);
    return s;
}

function g() {
    return w("hash");
}

function S() {
    return w("search");
}

function j(r) {
    var e = r.onClick, t = r.target, n = r.router, o = r.to;
    return function(r) {
        if (r) {
            try {
                "function" == typeof e && e(r);
            } catch (e) {
                throw r.preventDefault(), e;
            }
            r.defaultPrevented || 0 !== r.button || t && "_self" !== t || function(r) {
                return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
            }(r) || (r.preventDefault(), n.setparams(o));
        } else n.setparams(o);
    };
}

function E(r) {
    var t = r.router, n = r.useState, o = r.useEffect;
    return function() {
        var r = c(n(t.getparams()), 2), a = r[0], i = r[1];
        return o((function() {
            var r = e((function(r) {
                i(r);
            }));
            return t.mount(), t.on("params", r), function() {
                t.unmount(), t.off("params", r), r.cancel();
            };
        }), []), a;
    };
}

var O = [ "component", "target", "to", "onClick", "innerRef", "children" ], R = [ "innerRef", "target", "children", "href", "isActive", "navigate" ];

function A(r) {
    var e = r.router, n = r.useState, i = r.useEffect, c = r.createElement, f = E({
        router: e,
        useState: n,
        useEffect: i
    });
    return function(r) {
        var n = r.component, i = void 0 === n ? s : n, l = r.target, p = r.to, h = r.onClick, m = r.innerRef, y = r.children, v = u(r, O), b = f();
        if (!p || "object" !== a(p)) throw new TypeError("object");
        var d = e.paramshref(p), w = t(b, p), g = j({
            onClick: h,
            target: l,
            router: e,
            to: p
        });
        return c(i, o({
            innerRef: m,
            target: l,
            href: d,
            isActive: w,
            navigate: g
        }, v), y);
    };
    function s(r) {
        var e = r.innerRef, t = r.target, n = r.children, a = r.href, i = r.isActive, f = r.navigate, s = u(r, R);
        return c("a", o({
            ref: e,
            target: t,
            href: a,
            onClick: f,
            "aria-current": i ? "page" : "false"
        }, s), n);
    }
}

function P(r, e) {
    var t, n = function(r, e) {
        var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (!t) {
            if (Array.isArray(r) || (t = f(r)) || e && r && "number" == typeof r.length) {
                t && (r = t);
                var n = 0, o = function() {};
                return {
                    s: o,
                    n: function() {
                        return n >= r.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: r[n++]
                        };
                    },
                    e: function(r) {
                        throw r;
                    },
                    f: o
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var a, i = !0, u = !1;
        return {
            s: function() {
                t = t.call(r);
            },
            n: function() {
                var r = t.next();
                return i = r.done, r;
            },
            e: function(r) {
                u = !0, a = r;
            },
            f: function() {
                try {
                    i || null == t.return || t.return();
                } finally {
                    if (u) throw a;
                }
            }
        };
    }(r);
    try {
        for (n.s(); !(t = n.n()).done; ) {
            var o = t.value;
            if (o.params(e)) return o;
        }
    } catch (r) {
        n.e(r);
    } finally {
        n.f();
    }
}

function U(r) {
    return !(!r || "object" !== a(r) || "function" != typeof r.params);
}

function L(r, e) {
    if (!e) throw new TypeError("object,function");
    if ("function" != typeof e) {
        if ("object" !== a(e)) throw new TypeError("object,function");
        r.setparams(e);
    } else r.transformparams(e);
}

function T(r) {
    return !("function" != typeof (null == r ? void 0 : r.params) || null == r || !r.redirect);
}

function C(r) {
    return !("function" != typeof (null == r ? void 0 : r.params) || null == r || !r.component);
}

function k(r) {
    var e = r.router, t = r.createElement, n = r.useState, a = r.useEffect, i = E({
        router: e,
        useState: n,
        useEffect: a
    });
    function u(r) {
        var e = r.component, n = r.params;
        return t(e, {
            params: n
        });
    }
    return function(r) {
        var n = r.routes, a = r.render, c = void 0 === a ? u : a;
        if (!Array.isArray(n)) throw new TypeError("array");
        if (!n.every((function(r) {
            return U(r);
        }))) throw new TypeError('{params:"function"}');
        var f = i(), s = P(n, f);
        if (T(s)) {
            var l = s.redirect;
            return L(e, l), null;
        }
        if (C(s)) {
            var p = {
                component: s.component
            }, h = Object.assign({}, p, {
                params: f
            });
            return t(c, o({}, h));
        }
        return null;
    };
}

function x(r) {
    var t = r.router, n = r.ref, o = r.onMounted, a = r.onUnmounted, i = r.readonly;
    return function() {
        var r = n(t.getparams()), u = e((function(e) {
            r.value = e;
        }));
        return o((function() {
            t.mount(), t.on("params", u);
        })), a((function() {
            t.unmount(), t.off("params", u), u.cancel();
        })), i(r);
    };
}

function D(r) {
    var e = r.router, n = r.resolveComponent, o = r.defineComponent, i = r.h, u = r.ref, c = r.onMounted, f = r.onUnmounted, s = r.readonly, l = x({
        router: e,
        ref: u,
        onMounted: c,
        onUnmounted: f,
        readonly: s
    });
    function p(r, e) {
        var t = r.innerRef, n = r.target, o = r.href, a = r.navigate, u = r.isActive, c = e.slots;
        return i("a", {
            ref: t,
            target: n,
            href: o,
            onClick: a,
            "aria-current": u ? "page" : "false"
        }, c);
    }
    return p.inheritAttrs = !0, p.props = [ "innerRef", "target", "href", "isActive", "navigate" ], 
    o({
        inheritAttrs: !0,
        props: [ "component", "to", "target", "onClick", "innerRef" ],
        setup: function(r, o) {
            var u = o.slots, c = l();
            return function() {
                var o = r.component, f = void 0 === o ? p : o, s = r.to, l = r.onClick, h = r.target, m = r.innerRef;
                if (!s || "object" !== a(s)) throw new TypeError("object");
                var y = e.paramshref(s), v = j({
                    onClick: l,
                    target: h,
                    router: e,
                    to: s
                }), b = t(c.value, s), d = "function" == typeof m ? m : m && "object" === a(m) ? function(r) {
                    Reflect.set(m, "value", r);
                } : void 0, w = "string" == typeof f ? n(f) : f;
                return i(w, {
                    isActive: b,
                    innerRef: d,
                    href: y,
                    navigate: v,
                    target: h
                }, u);
            };
        }
    });
}

function I(r) {
    var e = r.readonly, t = r.onMounted, n = r.onUnmounted, a = r.router, i = r.resolveComponent, u = r.defineComponent, c = r.h, f = r.ref, s = x({
        router: a,
        ref: f,
        onMounted: t,
        onUnmounted: n,
        readonly: e
    });
    function l(r) {
        var e = r.component, t = r.params;
        return c(e, {
            params: t
        });
    }
    return l.props = [ "params", "component" ], l.inheritAttrs = !1, u({
        props: [ "routes", "render" ],
        inheritAttrs: !1,
        setup: function(r) {
            var e = s();
            return function() {
                var t = r.routes, n = r.render, u = void 0 === n ? l : n;
                if (!Array.isArray(t)) throw new TypeError("array");
                if (!t.every((function(r) {
                    return U(r);
                }))) throw new TypeError('{params:"function"}');
                var f = P(t, e.value);
                if (T(f)) {
                    var s = f.redirect;
                    return L(a, s), null;
                }
                if (C(f)) {
                    var p = f.component, h = {
                        component: "string" == typeof p ? i(p) : p
                    }, m = Object.assign({}, h, {
                        params: e.value
                    }), y = "string" == typeof u ? i(u) : u;
                    return c(y, o({}, m));
                }
                return null;
            };
        }
    });
}

export { g as createHashRouter, A as createReactLink, E as createReactParamsHook, k as createReactView, S as createSearchRouter, D as createVueLink, x as createVueParamsHook, I as createVueView };
//# sourceMappingURL=index.js.map
