function e(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable;
        }))), t.push.apply(t, r);
    }
    return t;
}

function n(n) {
    for (var r = 1; r < arguments.length; r++) {
        var o = null != arguments[r] ? arguments[r] : {};
        r % 2 ? e(Object(o), !0).forEach((function(e) {
            t(n, e, o[e]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : e(Object(o)).forEach((function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
        }));
    }
    return n;
}

function t(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e;
}

function r(e) {
    var t = location.href, r = new URL(location.href);
    r.hash = String(new URLSearchParams(n({}, e))), t !== r.hash && (history.pushState(null, null, r.href), 
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
        o(), e.forEach((function(e) {
            return Promise.resolve().then((function() {
                return e(searchparams);
            }));
        }));
    })), {
        watch: function(n) {
            e.add(n);
        },
        unwatch: function(n) {
            e.delete(n);
        },
        set: r,
        get: o,
        transform: c
    };
}

function i(e) {
    var t = location.search, r = new URL(location.href);
    r.search = String(new URLSearchParams(n({}, e))), t !== r.search && (history.pushState(null, null, r.href), 
    window.dispatchEvent(new Event("popstate")));
}

function u() {
    return location.search && Object.fromEntries(new URL(location.href).searchParams) || {};
}

function s(e) {
    i(e(u()));
}

function h() {
    var e = new Set;
    return window.addEventListener("popstate", (function() {
        var n = u();
        e.forEach((function(e) {
            return Promise.resolve().then((function() {
                return e(n);
            }));
        }));
    })), {
        watch: function(n) {
            e.add(n);
        },
        unwatch: function(n) {
            e.delete(n);
        },
        set: i,
        get: u,
        transform: s
    };
}

export { a as createHashRouter, h as createSearchRouter };
