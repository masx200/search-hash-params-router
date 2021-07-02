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
    var t = location.hash, r = new URL(location.href);
    r.hash = String(new URLSearchParams(n({}, e))), t !== r.hash && (history.pushState({}, "", r.href), 
    window.dispatchEvent(new Event("hashchange")));
}

function o() {
    return location.hash && Object.fromEntries(new URLSearchParams(location.hash.slice(1))) || {};
}

function i(e) {
    r(e(o()));
}

function a() {
    var e = "hashchange", n = new Set;
    var t = function() {
        var e = o();
        n.forEach((function(n) {
            return Promise.resolve().then((function() {
                return n(e);
            }));
        }));
    };
    return window.addEventListener(e, t), {
        watch: function(r) {
            n.add(r), n.size > 0 && window.addEventListener(e, t);
        },
        unwatch: function(r) {
            n.delete(r), 0 === n.size && window.removeEventListener(e, t);
        },
        set: r,
        get: o,
        transform: i
    };
}

function c(e) {
    var t = location.search, r = new URL(location.href);
    r.search = String(new URLSearchParams(n({}, e))), t !== r.search && (history.pushState({}, "", r.href), 
    window.dispatchEvent(new Event("popstate")));
}

function s() {
    return location.search && Object.fromEntries(new URL(location.href).searchParams) || {};
}

function h(e) {
    c(e(s()));
}

function u() {
    var e = "popstate", n = new Set;
    var t = function() {
        var e = s();
        n.forEach((function(n) {
            return Promise.resolve().then((function() {
                return n(e);
            }));
        }));
    };
    return window.addEventListener(e, t), {
        watch: function(r) {
            n.add(r), n.size > 0 && window.addEventListener(e, t);
        },
        unwatch: function(r) {
            n.delete(r), 0 === n.size && window.removeEventListener(e, t);
        },
        set: c,
        get: s,
        transform: h
    };
}

export { a as createHashRouter, u as createSearchRouter };
