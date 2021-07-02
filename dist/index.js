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

function a(e) {
    r(e(o()));
}

function i() {
    var e = "hashchange", t = new Set;
    var i = function() {
        var e = o();
        t.forEach((function(t) {
            return Promise.resolve().then((function() {
                return t(e);
            }));
        }));
    };
    return window.addEventListener(e, i), n({
        watch: function(n) {
            t.add(n), t.size > 0 && window.addEventListener(e, i);
        },
        unwatch: function(n) {
            t.delete(n), 0 === t.size && window.removeEventListener(e, i);
        },
        set: r,
        get: o,
        transform: a
    }, Symbol.toStringTag, "HashRouter");
}

function c(e) {
    var n = location.search, r = new URL(location.href);
    r.search = String(new URLSearchParams(t({}, e))), n !== r.search && (history.pushState({}, "", r.href), 
    window.dispatchEvent(new Event("popstate")));
}

function s() {
    return location.search && Object.fromEntries(new URL(location.href).searchParams) || {};
}

function h(e) {
    c(e(s()));
}

function u() {
    var e = "popstate", t = new Set;
    var r = function() {
        var e = s();
        t.forEach((function(t) {
            return Promise.resolve().then((function() {
                return t(e);
            }));
        }));
    };
    return window.addEventListener(e, r), n({
        watch: function(n) {
            t.add(n), t.size > 0 && window.addEventListener(e, r);
        },
        unwatch: function(n) {
            t.delete(n), 0 === t.size && window.removeEventListener(e, r);
        },
        set: c,
        get: s,
        transform: h
    }, Symbol.toStringTag, "SearchRouter");
}

export { i as createHashRouter, u as createSearchRouter };
