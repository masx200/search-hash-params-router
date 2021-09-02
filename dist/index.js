import r from "@masx200/event-emitter-target";

import t from "lodash/debounce.js";

import e from "lodash/isEqual.js";

function n(r, t) {
    var e = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(r);
        t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable;
        }))), e.push.apply(e, n);
    }
    return e;
}

function o(r) {
    for (var t = 1; t < arguments.length; t++) {
        var e = null != arguments[t] ? arguments[t] : {};
        t % 2 ? n(Object(e), !0).forEach((function(t) {
            i(r, t, e[t]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : n(Object(e)).forEach((function(t) {
            Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t));
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

function i(r, t, e) {
    return t in r ? Object.defineProperty(r, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[t] = e, r;
}

function u(r, t) {
    if (null == r) return {};
    var e, n, o = function(r, t) {
        if (null == r) return {};
        var e, n, o = {}, a = Object.keys(r);
        for (n = 0; n < a.length; n++) e = a[n], t.indexOf(e) >= 0 || (o[e] = r[e]);
        return o;
    }(r, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(r);
        for (n = 0; n < a.length; n++) e = a[n], t.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(r, e) && (o[e] = r[e]);
    }
    return o;
}

function f(r, t) {
    return function(r) {
        if (Array.isArray(r)) return r;
    }(r) || function(r, t) {
        var e = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null == e) return;
        var n, o, a = [], i = !0, u = !1;
        try {
            for (e = e.call(r); !(i = (n = e.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0) ;
        } catch (r) {
            u = !0, o = r;
        } finally {
            try {
                i || null == e.return || e.return();
            } finally {
                if (u) throw o;
            }
        }
        return a;
    }(r, t) || c(r, t) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function c(r, t) {
    if (r) {
        if ("string" == typeof r) return s(r, t);
        var e = Object.prototype.toString.call(r).slice(8, -1);
        return "Object" === e && r.constructor && (e = r.constructor.name), "Map" === e || "Set" === e ? Array.from(r) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? s(r, t) : void 0;
    }
}

function s(r, t) {
    (null == t || t > r.length) && (t = r.length);
    for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
    return n;
}

function p(r) {
    return String(new URLSearchParams(Object.entries(r).sort((function(r, t) {
        return f(r, 1)[0] > f(t, 1)[0] ? 1 : -1;
    }))));
}

var l = p;

function m(r) {
    return Object.fromEntries(new URLSearchParams(r));
}

function h(e) {
    var n = e.toStringTag, a = e.eventname, u = e.gethref, f = e.setparams, c = e.getparams, s = e.transformparams, p = 0, l = r(), m = t((function() {
        var r = c();
        v.emit("params", r);
    }));
    var h = i({
        mount: function() {
            window.addEventListener(a, m), m(), p++;
        },
        unmount: function() {
            --p <= 0 && (window.removeEventListener(a, m), m.cancel(), v.removeAllListeners("params"));
        },
        gethref: u,
        setparams: f,
        getparams: c,
        transformparams: s
    }, Symbol.toStringTag, n), v = o(o(o({}, l), h), {}, {
        toStringTag: n,
        eventname: a,
        gethref: u,
        setparams: f,
        getparams: c,
        transformparams: s
    });
    return v;
}

function v() {
    return location.hash && Object.fromEntries(new URLSearchParams(location.hash.slice(1))) || {};
}

function y(r) {
    var t = new URL(location.href);
    return t.hash = p(o({}, r)), t;
}

function g(r) {
    if (!r) throw new TypeError("object,function");
    if ("function" == typeof r) {
        var t = v();
        return y(t = r(t)).href;
    }
    if ("object" === a(r)) return y(r).href;
    throw new TypeError("object,function");
}

function b(r) {
    var t = location.hash, e = y(r);
    t !== e.hash && (history.pushState({}, "", e.href), window.dispatchEvent(new Event("hashchange")));
}

function d(r) {
    b(r(v()));
}

function w() {
    return h({
        toStringTag: "HashRouter",
        eventname: "hashchange",
        gethref: g,
        setparams: b,
        getparams: v,
        transformparams: d
    });
}

function j(r) {
    return 0 === Object.keys(r).length ? new URL("./", location.href) : new URL(p(o({}, r)), location.href);
}

function E() {
    return h({
        toStringTag: "PathRouter",
        eventname: "popstate",
        gethref: S,
        setparams: A,
        getparams: O,
        transformparams: R
    });
}

function S(r) {
    if (!r) throw new TypeError("object,function");
    if ("function" == typeof r) {
        var t = O();
        return j(t = r(t)).href;
    }
    if ("object" === a(r)) return j(r).href;
    throw new TypeError("object,function");
}

function O() {
    var r = location.pathname.split("/"), t = r[r.length - 1];
    return t && Object.fromEntries(new URLSearchParams(t)) || {};
}

function A(r) {
    var t = location.pathname, e = j(r);
    t !== e.pathname && (history.pushState({}, "", e.href), window.dispatchEvent(new Event("popstate")));
}

function R(r) {
    A(r(O()));
}

function T() {
    return location.search && Object.fromEntries(new URL(location.href).searchParams) || {};
}

function P(r) {
    var t = new URL(location.href);
    return t.search = p(o({}, r)), t;
}

function U(r) {
    if (!r) throw new TypeError("object,function");
    if ("function" == typeof r) {
        var t = T();
        return P(t = r(t)).href;
    }
    if ("object" === a(r)) return P(r).href;
    throw new TypeError("object,function");
}

function C(r) {
    var t = location.search, e = P(r);
    t !== e.search && (history.pushState({}, "", e.href), window.dispatchEvent(new Event("popstate")));
}

function k(r) {
    C(r(T()));
}

function L() {
    return h({
        toStringTag: "SearchRouter",
        eventname: "popstate",
        gethref: U,
        setparams: C,
        getparams: T,
        transformparams: k
    });
}

function x(r) {
    var t = r.onClick, e = r.target, n = r.router, o = r.to;
    return function(r) {
        if (r) {
            try {
                "function" == typeof t && t(r);
            } catch (t) {
                throw r.preventDefault(), t;
            }
            r.defaultPrevented || 0 !== r.button || e && "_self" !== e || function(r) {
                return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
            }(r) || (r.preventDefault(), n.setparams(o));
        } else n.setparams(o);
    };
}

function D(r) {
    var e = r.router, n = r.useState, o = r.useEffect;
    return function() {
        var r = f(n(e.getparams()), 2), a = r[0], i = r[1];
        return o((function() {
            var r = t((function(r) {
                i(r);
            }));
            return e.mount(), e.on("params", r), function() {
                e.unmount(), e.off("params", r), r.cancel();
            };
        }), []), a;
    };
}

var I = [ "component", "target", "to", "onClick", "innerRef", "children" ], M = [ "innerRef", "target", "children", "href", "isActive", "navigate" ];

function K(r) {
    var t = r.router, n = r.useState, i = r.useEffect, f = r.createElement, c = D({
        router: t,
        useState: n,
        useEffect: i
    });
    return function(r) {
        var n = r.component, i = void 0 === n ? s : n, p = r.target, l = r.to, m = r.onClick, h = r.innerRef, v = r.children, y = u(r, I), g = c();
        if (!l || "object" !== a(l)) throw new TypeError("object");
        var b = t.gethref(l), d = e(g, l), w = x({
            onClick: m,
            target: p,
            router: t,
            to: l
        });
        return f(i, o({
            innerRef: h,
            target: p,
            href: b,
            isActive: d,
            navigate: w
        }, y), v);
    };
    function s(r) {
        var t = r.innerRef, e = r.target, n = r.children, a = r.href, i = r.isActive, c = r.navigate, s = u(r, M);
        return f("a", o({
            ref: t,
            target: e,
            href: a,
            onClick: c,
            "aria-current": i ? "page" : "false"
        }, s), n);
    }
}

function q(r, t) {
    var e, n = function(r, t) {
        var e = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (!e) {
            if (Array.isArray(r) || (e = c(r)) || t && r && "number" == typeof r.length) {
                e && (r = e);
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
                e = e.call(r);
            },
            n: function() {
                var r = e.next();
                return i = r.done, r;
            },
            e: function(r) {
                u = !0, a = r;
            },
            f: function() {
                try {
                    i || null == e.return || e.return();
                } finally {
                    if (u) throw a;
                }
            }
        };
    }(r);
    try {
        for (n.s(); !(e = n.n()).done; ) {
            var o = e.value;
            if (o.params(t)) return o;
        }
    } catch (r) {
        n.e(r);
    } finally {
        n.f();
    }
}

function H(r) {
    return !(!r || "object" !== a(r) || "function" != typeof r.params);
}

function $(r, t) {
    if (!t) throw new TypeError("object,function");
    if ("function" != typeof t) {
        if ("object" !== a(t)) throw new TypeError("object,function");
        r.setparams(t);
    } else r.transformparams(t);
}

function _(r) {
    return !("function" != typeof (null == r ? void 0 : r.params) || null == r || !r.redirect);
}

function z(r) {
    return !("function" != typeof (null == r ? void 0 : r.params) || null == r || !r.component);
}

function B(r) {
    var t = r.router, e = r.createElement, n = r.useState, a = r.useEffect, i = D({
        router: t,
        useState: n,
        useEffect: a
    });
    function u(r) {
        var t = r.component, n = r.params;
        return e(t, {
            params: n
        });
    }
    return function(r) {
        var n = r.routes, a = r.render, f = void 0 === a ? u : a;
        if (!Array.isArray(n)) throw new TypeError("array");
        if (!n.every((function(r) {
            return H(r);
        }))) throw new TypeError('{params:"function"}');
        var c = i(), s = q(n, c);
        if (_(s)) {
            var p = s.redirect;
            return $(t, p), null;
        }
        if (z(s)) {
            var l = {
                component: s.component
            }, m = Object.assign({}, l, {
                params: c
            });
            return e(f, o({}, m));
        }
        return null;
    };
}

function F(r) {
    var e = r.router, n = r.ref, o = r.onMounted, a = r.onUnmounted, i = r.readonly;
    return function() {
        var r = n(e.getparams()), u = t((function(t) {
            r.value = t;
        }));
        return o((function() {
            e.mount(), e.on("params", u);
        })), a((function() {
            e.unmount(), e.off("params", u), u.cancel();
        })), i(r);
    };
}

function G(r) {
    var t = r.router, n = r.resolveComponent, o = r.defineComponent, i = r.h, u = r.ref, f = r.onMounted, c = r.onUnmounted, s = r.readonly, p = F({
        router: t,
        ref: u,
        onMounted: f,
        onUnmounted: c,
        readonly: s
    });
    function l(r, t) {
        var e = r.innerRef, n = r.target, o = r.href, a = r.navigate, u = r.isActive, f = t.slots;
        return i("a", {
            ref: e,
            target: n,
            href: o,
            onClick: a,
            "aria-current": u ? "page" : "false"
        }, f);
    }
    return l.inheritAttrs = !0, l.props = [ "innerRef", "target", "href", "isActive", "navigate" ], 
    o({
        inheritAttrs: !0,
        props: [ "component", "to", "target", "onClick", "innerRef" ],
        setup: function(r, o) {
            var u = o.slots, f = p();
            return function() {
                var o = r.component, c = void 0 === o ? l : o, s = r.to, p = r.onClick, m = r.target, h = r.innerRef;
                if (!s || "object" !== a(s)) throw new TypeError("object");
                var v = t.gethref(s), y = x({
                    onClick: p,
                    target: m,
                    router: t,
                    to: s
                }), g = e(f.value, s), b = "function" == typeof h ? h : h && "object" === a(h) ? function(r) {
                    Reflect.set(h, "value", r);
                } : void 0, d = "string" == typeof c ? n(c) : c;
                return i(d, {
                    isActive: g,
                    innerRef: b,
                    href: v,
                    navigate: y,
                    target: m
                }, u);
            };
        }
    });
}

function J(r) {
    var t = r.readonly, e = r.onMounted, n = r.onUnmounted, a = r.router, i = r.resolveComponent, u = r.defineComponent, f = r.h, c = r.ref, s = F({
        router: a,
        ref: c,
        onMounted: e,
        onUnmounted: n,
        readonly: t
    });
    function p(r) {
        var t = r.component, e = r.params;
        return f(t, {
            params: e
        });
    }
    return p.props = [ "params", "component" ], p.inheritAttrs = !1, u({
        props: [ "routes", "render" ],
        inheritAttrs: !1,
        setup: function(r) {
            var t = s();
            return function() {
                var e = r.routes, n = r.render, u = void 0 === n ? p : n;
                if (!Array.isArray(e)) throw new TypeError("array");
                if (!e.every((function(r) {
                    return H(r);
                }))) throw new TypeError('{params:"function"}');
                var c = q(e, t.value);
                if (_(c)) {
                    var s = c.redirect;
                    return $(a, s), null;
                }
                if (z(c)) {
                    var l = c.component, m = {
                        component: "string" == typeof l ? i(l) : l
                    }, h = Object.assign({}, m, {
                        params: t.value
                    }), v = "string" == typeof u ? i(u) : u;
                    return f(v, o({}, h));
                }
                return null;
            };
        }
    });
}

export { h as createBaseRouter, w as createHashRouter, E as createPathRouter, K as createReactLink, D as createReactParamsHook, B as createReactView, L as createSearchRouter, G as createVueLink, F as createVueParamsHook, J as createVueView, m as deserilizeparams, l as serilizeparams };
//# sourceMappingURL=index.js.map
