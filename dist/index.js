function e(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), n.push.apply(n, r);
    }
    return n;
}

function t(t) {
    for (var r = 1; r < arguments.length; r++) {
        var o = null != arguments[r] ? arguments[r] : {};
        r % 2 ? e(Object(o), !0).forEach((function(e) {
            n(t, e, o[e]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : e(Object(o)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
        }));
    }
    return t;
}

function n(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

function r(e) {
    var n = location.hash, r = new URL(location.href);
    r.hash = String(new URLSearchParams(t({}, e))), n !== r.hash && (history.pushState({}, "", r.href), 
    window.dispatchEvent(new Event("hashchange")));
}

function o() {
    return location.hash && Object.fromEntries(new URLSearchParams(location.hash.slice(1))) || {};
}

function c(e) {
    r(e(o()));
}

function a() {
    var e = new Set;
    return window.addEventListener("hashchange", (function() {
        var t = o();
        e.forEach((function(e) {
            return Promise.resolve().then((function() {
                return e(t);
            }));
        }));
    })), {
        watch: function(t) {
            e.add(t);
        },
        unwatch: function(t) {
            e.delete(t);
        },
        set: r,
        get: o,
        transform: c
    };
}

function i(e) {
    var n = location.search, r = new URL(location.href);
    r.search = String(new URLSearchParams(t({}, e))), n !== r.search && (history.pushState({}, "", r.href), 
    window.dispatchEvent(new Event("popstate")));
}

function s() {
    return location.search && Object.fromEntries(new URL(location.href).searchParams) || {};
}

function h(e) {
    i(e(s()));
}

function u() {
    var e = new Set;
    return window.addEventListener("popstate", (function() {
        var t = s();
        e.forEach((function(e) {
            return Promise.resolve().then((function() {
                return e(t);
            }));
        }));
    })), {
        watch: function(t) {
            e.add(t);
        },
        unwatch: function(t) {
            e.delete(t);
        },
        set: i,
        get: s,
        transform: h
    };
}

export { a as createHashRouter, u as createSearchRouter };
