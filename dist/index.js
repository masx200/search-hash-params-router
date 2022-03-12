import t from "@masx200/event-emitter-target";

import r from "lodash/debounce.js";

import e from "lodash/isEqual.js";

function n(t, r) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        r && (n = n.filter((function(r) {
            return Object.getOwnPropertyDescriptor(t, r).enumerable;
        }))), e.push.apply(e, n);
    }
    return e;
}

function o(t) {
    for (var r = 1; r < arguments.length; r++) {
        var e = null != arguments[r] ? arguments[r] : {};
        r % 2 ? n(Object(e), !0).forEach((function(r) {
            i(t, r, e[r]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : n(Object(e)).forEach((function(r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
        }));
    }
    return t;
}

function a(t) {
    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

function i(t, r, e) {
    return r in t ? Object.defineProperty(t, r, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[r] = e, t;
}

function u(t, r) {
    if (null == t) return {};
    var e, n, o = function(t, r) {
        if (null == t) return {};
        var e, n, o = {}, a = Object.keys(t);
        for (n = 0; n < a.length; n++) e = a[n], r.indexOf(e) >= 0 || (o[e] = t[e]);
        return o;
    }(t, r);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (n = 0; n < a.length; n++) e = a[n], r.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(t, e) && (o[e] = t[e]);
    }
    return o;
}

function f(t, r) {
    return function(t) {
        if (Array.isArray(t)) return t;
    }(t) || function(t, r) {
        var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null == e) return;
        var n, o, a = [], i = !0, u = !1;
        try {
            for (e = e.call(t); !(i = (n = e.next()).done) && (a.push(n.value), !r || a.length !== r); i = !0) ;
        } catch (t) {
            u = !0, o = t;
        } finally {
            try {
                i || null == e.return || e.return();
            } finally {
                if (u) throw o;
            }
        }
        return a;
    }(t, r) || c(t, r) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function c(t, r) {
    if (t) {
        if ("string" == typeof t) return s(t, r);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? s(t, r) : void 0;
    }
}

function s(t, r) {
    (null == r || r > t.length) && (r = t.length);
    for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
    return n;
}

function l(t) {
    return btoa(String(new URLSearchParams(Object.entries(t).sort((function(t, r) {
        return f(t, 1)[0] > f(r, 1)[0] ? 1 : -1;
    })))));
}

var p = l;

function m(t) {
    try {
        return Object.fromEntries(Array.from(new URLSearchParams(atob(t))));
    } catch (t) {
        return {};
    }
}

function h(e) {
    var n = e.toStringTag, a = e.eventname, u = e.gethref, f = e.setparams, c = e.getparams, s = e.transformparams, l = 0, p = t(), m = r((function() {
        var t = c();
        v.emit("params", t);
    }));
    var h = i({
        mount: function() {
            window.addEventListener(a, m), m(), l++;
        },
        unmount: function() {
            --l <= 0 && (window.removeEventListener(a, m), m.cancel(), v.removeAllListeners("params"));
        },
        gethref: u,
        setparams: f,
        getparams: c,
        transformparams: s
    }, Symbol.toStringTag, n), v = o(o(o({}, p), h), {}, {
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
    return location.hash && m(location.hash.slice(1)) || {};
}

function y(t) {
    var r = new URL(location.href);
    return r.hash = l(o({}, t)), r;
}

function g(t) {
    if (!t) throw new TypeError("object,function");
    if ("function" == typeof t) {
        var r = v();
        return y(r = t(r)).href;
    }
    if ("object" === a(t)) return y(t).href;
    throw new TypeError("object,function");
}

function b(t) {
    var r = location.hash, e = y(t);
    r !== e.hash && (history.pushState({}, "", e.href), window.dispatchEvent(new Event("hashchange")));
}

function d(t) {
    b(t(v()));
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

function j() {
    var t = location.pathname, r = t.split("/"), e = t.endsWith("/") ? r[r.length - 2] : r[r.length - 1];
    return e && m(e) || {};
}

function E(t) {
    if (0 === Object.keys(t).length) return new URL("./", location.href);
    var r = location.pathname, e = j();
    return r.endsWith("/") && Object.keys(e).length > 0 ? new URL("../" + l(o({}, t)), location.href) : new URL(l(o({}, t)), location.href);
}

function S(t) {
    var r = location.pathname, e = E(t);
    r !== e.pathname && (history.pushState({}, "", e.href), window.dispatchEvent(new Event("popstate")));
}

function O() {
    return h({
        toStringTag: "PathRouter",
        eventname: "popstate",
        gethref: A,
        setparams: S,
        getparams: j,
        transformparams: T
    });
}

function A(t) {
    if (!t) throw new TypeError("object,function");
    if ("function" == typeof t) {
        var r = j();
        return E(r = t(r)).href;
    }
    if ("object" === a(t)) return E(t).href;
    throw new TypeError("object,function");
}

function T(t) {
    S(t(j()));
}

function R() {
    return location.search && m(location.search.slice(1)) || {};
}

function P(t) {
    var r = new URL(location.href);
    return r.search = l(o({}, t)), r;
}

function C(t) {
    if (!t) throw new TypeError("object,function");
    if ("function" == typeof t) {
        var r = R();
        return P(r = t(r)).href;
    }
    if ("object" === a(t)) return P(t).href;
    throw new TypeError("object,function");
}

function k(t) {
    var r = location.search, e = P(t);
    r !== e.search && (history.pushState({}, "", e.href), window.dispatchEvent(new Event("popstate")));
}

function U(t) {
    k(t(R()));
}

function L() {
    return h({
        toStringTag: "SearchRouter",
        eventname: "popstate",
        gethref: C,
        setparams: k,
        getparams: R,
        transformparams: U
    });
}

function x(t) {
    var r = t.onClick, e = t.target, n = t.router, o = t.to;
    return function(t) {
        if (t) {
            try {
                "function" == typeof r && r(t);
            } catch (r) {
                throw t.preventDefault(), r;
            }
            t.defaultPrevented || 0 !== t.button || e && "_self" !== e || function(t) {
                return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
            }(t) || (t.preventDefault(), n.setparams(o));
        } else n.setparams(o);
    };
}

function D(t) {
    var e = t.router, n = t.useState, o = t.useEffect;
    return function() {
        var t = f(n(e.getparams()), 2), a = t[0], i = t[1];
        return o((function() {
            var t = r((function(t) {
                i(t);
            }));
            return e.mount(), e.on("params", t), function() {
                e.unmount(), e.off("params", t), t.cancel();
            };
        }), []), a;
    };
}

var I = [ "component", "target", "to", "onClick", "innerRef", "children" ], M = [ "innerRef", "target", "children", "href", "isActive", "navigate" ];

function K(t) {
    var r = t.router, n = t.useState, i = t.useEffect, f = t.createElement, c = D({
        router: r,
        useState: n,
        useEffect: i
    });
    return function(t) {
        var n = t.component, i = void 0 === n ? s : n, l = t.target, p = t.to, m = t.onClick, h = t.innerRef, v = t.children, y = u(t, I), g = c();
        if (!p || "object" !== a(p)) throw new TypeError("object");
        var b = r.gethref(p), d = e(g, p), w = x({
            onClick: m,
            target: l,
            router: r,
            to: p
        });
        return f(i, o({
            innerRef: h,
            target: l,
            href: b,
            isActive: d,
            navigate: w
        }, y), v);
    };
    function s(t) {
        var r = t.innerRef, e = t.target, n = t.children, a = t.href, i = t.isActive, c = t.navigate, s = u(t, M);
        return f("a", o({
            ref: r,
            target: e,
            href: a,
            onClick: c,
            "aria-current": i ? "page" : "false"
        }, s), n);
    }
}

function W(t, r) {
    var e, n = function(t, r) {
        var e = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!e) {
            if (Array.isArray(t) || (e = c(t)) || r && t && "number" == typeof t.length) {
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
        var a, i = !0, u = !1;
        return {
            s: function() {
                e = e.call(t);
            },
            n: function() {
                var t = e.next();
                return i = t.done, t;
            },
            e: function(t) {
                u = !0, a = t;
            },
            f: function() {
                try {
                    i || null == e.return || e.return();
                } finally {
                    if (u) throw a;
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

function q(t) {
    return !(!t || "object" !== a(t) || "function" != typeof t.params);
}

function H(t, r) {
    if (!r) throw new TypeError("object,function");
    if ("function" != typeof r) {
        if ("object" !== a(r)) throw new TypeError("object,function");
        t.setparams(r);
    } else t.transformparams(r);
}

function $(t) {
    return !("function" != typeof (null == t ? void 0 : t.params) || null == t || !t.redirect);
}

function _(t) {
    return !("function" != typeof (null == t ? void 0 : t.params) || null == t || !t.component);
}

function z(t) {
    var r = t.router, e = t.createElement, n = t.useState, a = t.useEffect, i = D({
        router: r,
        useState: n,
        useEffect: a
    });
    function u(t) {
        var r = t.component, n = t.params;
        return e(r, {
            params: n
        });
    }
    return function(t) {
        var n = t.routes, a = t.render, f = void 0 === a ? u : a;
        if (!Array.isArray(n)) throw new TypeError("array");
        if (!n.every((function(t) {
            return q(t);
        }))) throw new TypeError('{params:"function"}');
        var c = i(), s = W(n, c);
        if ($(s)) {
            var l = s.redirect;
            return H(r, l), null;
        }
        if (_(s)) {
            var p = {
                component: s.component
            }, m = Object.assign({}, p, {
                params: c
            });
            return e(f, o({}, m));
        }
        return null;
    };
}

function B(t) {
    var e = t.router, n = t.ref, o = t.onMounted, a = t.onUnmounted, i = t.readonly;
    return function() {
        var t = n(e.getparams()), u = r((function(r) {
            t.value = r;
        }));
        return o((function() {
            e.mount(), e.on("params", u);
        })), a((function() {
            e.unmount(), e.off("params", u), u.cancel();
        })), i(t);
    };
}

function F(t) {
    var r = t.router, n = t.resolveComponent, o = t.defineComponent, i = t.h, u = t.ref, f = t.onMounted, c = t.onUnmounted, s = t.readonly, l = B({
        router: r,
        ref: u,
        onMounted: f,
        onUnmounted: c,
        readonly: s
    });
    function p(t, r) {
        var e = t.innerRef, n = t.target, o = t.href, a = t.navigate, u = t.isActive, f = r.slots;
        return i("a", {
            ref: e,
            target: n,
            href: o,
            onClick: a,
            "aria-current": u ? "page" : "false"
        }, f);
    }
    return p.inheritAttrs = !0, p.props = [ "innerRef", "target", "href", "isActive", "navigate" ], 
    o({
        inheritAttrs: !0,
        props: [ "component", "to", "target", "onClick", "innerRef" ],
        setup: function(t, o) {
            var u = o.slots, f = l();
            return function() {
                var o = t.component, c = void 0 === o ? p : o, s = t.to, l = t.onClick, m = t.target, h = t.innerRef;
                if (!s || "object" !== a(s)) throw new TypeError("object");
                var v = r.gethref(s), y = x({
                    onClick: l,
                    target: m,
                    router: r,
                    to: s
                }), g = e(f.value, s), b = "function" == typeof h ? h : h && "object" === a(h) ? function(t) {
                    Reflect.set(h, "value", t);
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

function G(t) {
    var r = t.readonly, e = t.onMounted, n = t.onUnmounted, a = t.router, i = t.resolveComponent, u = t.defineComponent, f = t.h, c = t.ref, s = B({
        router: a,
        ref: c,
        onMounted: e,
        onUnmounted: n,
        readonly: r
    });
    function l(t) {
        var r = t.component, e = t.params;
        return f(r, {
            params: e
        });
    }
    return l.props = [ "params", "component" ], l.inheritAttrs = !1, u({
        props: [ "routes", "render" ],
        inheritAttrs: !1,
        setup: function(t) {
            var r = s();
            return function() {
                var e = t.routes, n = t.render, u = void 0 === n ? l : n;
                if (!Array.isArray(e)) throw new TypeError("array");
                if (!e.every((function(t) {
                    return q(t);
                }))) throw new TypeError('{params:"function"}');
                var c = W(e, r.value);
                if ($(c)) {
                    var s = c.redirect;
                    return H(a, s), null;
                }
                if (_(c)) {
                    var p = c.component, m = {
                        component: "string" == typeof p ? i(p) : p
                    }, h = Object.assign({}, m, {
                        params: r.value
                    }), v = "string" == typeof u ? i(u) : u;
                    return f(v, o({}, h));
                }
                return null;
            };
        }
    });
}

export { h as createBaseRouter, w as createHashRouter, O as createPathRouter, K as createReactLink, D as createReactParamsHook, z as createReactView, L as createSearchRouter, F as createVueLink, B as createVueParamsHook, G as createVueView, m as deserializeParams, p as serializeParams };
//# sourceMappingURL=index.js.map
