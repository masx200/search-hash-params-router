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

function a(t, r) {
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
    }(t, r) || i(t, r) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function i(t, r) {
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

function c(t) {
    return (c = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
        return e(t);
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
    })(t);
}

function f(t, r, e) {
    return r in t ? Object.defineProperty(t, r, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[r] = e, t;
}

function s(t, r) {
    return function(t) {
        if (Array.isArray(t)) return t;
    }(t) || function(t, r) {
        var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != e) {
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
        }
    }(t, r) || p(t, r) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function l(t) {
    return function(t) {
        if (Array.isArray(t)) return v(t);
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }(t) || p(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function p(t, r) {
    if (t) {
        if ("string" == typeof t) return v(t, r);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? v(t, r) : void 0;
    }
}

function v(t, r) {
    (null == r || r > t.length) && (r = t.length);
    for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
    return n;
}

function h() {
    return {}.toString.call(f({}, Symbol.toStringTag, "EventEmitterTarget"));
}

function y(t) {
    if ("string" != typeof t && "symbol" !== c(t)) throw new TypeError(" EVENTNAME expected: string | symbol;but invalid :" + t);
}

function b(t) {
    if ("function" != typeof t) throw new TypeError(" EVENTLISTENER expected: (event?: any) => void;but invalid:" + t);
}

function d() {
    var t, r = new Map, e = new WeakMap;
    function n(t) {
        var e = r.get(t);
        return e || (e = new Set, r.set(t, e)), e;
    }
    function o(t) {
        y(t), r.has(t) && n(t).clear();
    }
    function a(t, e) {
        y(t), r.has(t) && n(t).forEach((function(t) {
            Promise.resolve().then((function() {
                t(e);
            }));
        }));
    }
    function i(t, r) {
        y(t), b(r), n(t).add(r);
    }
    function u(t, r) {
        n(t).delete(r);
    }
    function c(t, r) {
        y(t), b(r), u(t, r), function(t, r) {
            var o = n(t), a = e.get(r);
            a && o.delete(a);
        }(t, r);
    }
    function p() {
        return l(r).map((function(t) {
            var r = s(t, 2);
            return [ r[0], l(r[1]) ];
        }))[Symbol.iterator]();
    }
    return f(t = {}, Symbol.toPrimitive, h), f(t, Symbol.toStringTag, "EventEmitterTarget"), 
    f(t, Symbol.iterator, p), f(t, "entries", p), f(t, "listenerCount", (function(t) {
        return y(t), r.has(t) ? n(t).size : 0;
    })), f(t, "clear", o), f(t, "removeAllListeners", o), f(t, "on", i), f(t, "addListener", i), 
    f(t, "off", c), f(t, "removeListener", c), f(t, "once", (function(t, r) {
        y(t), b(r);
        var n = !1, o = e.get(r);
        o || (o = function e(o) {
            u(t, e), u(t, r), n || (n = !0, r(o));
        }, e.set(r, o)), u(t, r), i(t, o);
    })), f(t, "emit", a), f(t, "dispatch", a), f(t, "eventNames", (function() {
        return l(r.keys());
    })), f(t, "listeners", (function(t) {
        return y(t), r.has(t) ? l(n(t)) : [];
    })), t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var m = function(t) {
    var r = Symbol();
    try {
        var e = new Function("return async()=>{}")()();
    } catch (t) {}
    function n() {
        var t = d();
        return this && this instanceof n ? (Object.assign(this, t), this) : Reflect.construct(n, []);
    }
    return Reflect.set(n, r, e), n;
}(), g = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

var j = function(t) {
    var r = e(t);
    return null != t && ("object" == r || "function" == r);
}, _ = "object" == e(g) && g && g.Object === Object && g, w = _, S = "object" == ("undefined" == typeof self ? "undefined" : e(self)) && self && self.Object === Object && self, O = w || S || Function("return this")(), A = O, E = function() {
    return A.Date.now();
}, T = /\s/;

var P = function(t) {
    for (var r = t.length; r-- && T.test(t.charAt(r)); ) ;
    return r;
}, x = /^\s+/;

var R = function(t) {
    return t ? t.slice(0, P(t) + 1).replace(x, "") : t;
}, k = O.Symbol, L = k, z = Object.prototype, U = z.hasOwnProperty, M = z.toString, I = L ? L.toStringTag : void 0;

var C = function(t) {
    var r = U.call(t, I), e = t[I];
    try {
        t[I] = void 0;
        var n = !0;
    } catch (t) {}
    var o = M.call(t);
    return n && (r ? t[I] = e : delete t[I]), o;
}, D = Object.prototype.toString;

var N = C, V = function(t) {
    return D.call(t);
}, $ = k ? k.toStringTag : void 0;

var F = function(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : $ && $ in Object(t) ? N(t) : V(t);
};

var B = function(t) {
    return null != t && "object" == e(t);
}, W = F, H = B;

var K = R, q = j, G = function(t) {
    return "symbol" == e(t) || H(t) && "[object Symbol]" == W(t);
}, J = /^[-+]0x[0-9a-f]+$/i, Q = /^0b[01]+$/i, X = /^0o[0-7]+$/i, Y = parseInt;

var Z = j, tt = E, rt = function(t) {
    if ("number" == typeof t) return t;
    if (G(t)) return NaN;
    if (q(t)) {
        var r = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = q(r) ? r + "" : r;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = K(t);
    var e = Q.test(t);
    return e || X.test(t) ? Y(t.slice(2), e ? 2 : 8) : J.test(t) ? NaN : +t;
}, et = Math.max, nt = Math.min;

var ot = function(t, r, e) {
    var n, o, a, i, u, c, f = 0, s = !1, l = !1, p = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");
    function v(r) {
        var e = n, a = o;
        return n = o = void 0, f = r, i = t.apply(a, e);
    }
    function h(t) {
        return f = t, u = setTimeout(b, r), s ? v(t) : i;
    }
    function y(t) {
        var e = t - c;
        return void 0 === c || e >= r || e < 0 || l && t - f >= a;
    }
    function b() {
        var t = tt();
        if (y(t)) return d(t);
        u = setTimeout(b, function(t) {
            var e = r - (t - c);
            return l ? nt(e, a - (t - f)) : e;
        }(t));
    }
    function d(t) {
        return u = void 0, p && n ? v(t) : (n = o = void 0, i);
    }
    function m() {
        var t = tt(), e = y(t);
        if (n = arguments, o = this, c = t, e) {
            if (void 0 === u) return h(c);
            if (l) return clearTimeout(u), u = setTimeout(b, r), v(c);
        }
        return void 0 === u && (u = setTimeout(b, r)), i;
    }
    return r = rt(r) || 0, Z(e) && (s = !!e.leading, a = (l = "maxWait" in e) ? et(rt(e.maxWait) || 0, r) : a, 
    p = "trailing" in e ? !!e.trailing : p), m.cancel = function() {
        void 0 !== u && clearTimeout(u), f = 0, n = c = o = u = void 0;
    }, m.flush = function() {
        return void 0 === u ? i : d(tt());
    }, m;
};

function at() {
    return location.hash && Object.fromEntries(new URLSearchParams(location.hash.slice(1))) || {};
}

function it(t) {
    if (!t) throw new TypeError("object,function");
    var n = at(), o = new URL(location.href);
    if ("function" == typeof t) return n = t(n), o.hash = String(new URLSearchParams(r({}, n))), 
    o.href;
    if ("object" === e(t)) return n = t, o.hash = String(new URLSearchParams(r({}, n))), 
    o.href;
    throw new TypeError("object,function");
}

function ut(t) {
    var e = location.hash, n = new URL(location.href);
    n.hash = String(new URLSearchParams(r({}, t))), e !== n.hash && (history.pushState({}, "", n.href), 
    window.dispatchEvent(new Event("hashchange")));
}

function ct(t) {
    ut(t(at()));
}

function ft() {
    return location.search && Object.fromEntries(new URL(location.href).searchParams) || {};
}

function st(t) {
    if (!t) throw new TypeError("object,function");
    var n = ft(), o = new URL(location.href);
    if ("function" == typeof t) return n = t(n), o.search = String(new URLSearchParams(r({}, n))), 
    o.href;
    if ("object" === e(t)) return n = t, o.search = String(new URLSearchParams(r({}, n))), 
    o.href;
    throw new TypeError("object,function");
}

function lt(t) {
    var e = location.search, n = new URL(location.href);
    n.search = String(new URLSearchParams(r({}, t))), e !== n.search && (history.pushState({}, "", n.href), 
    window.dispatchEvent(new Event("popstate")));
}

function pt(t) {
    lt(t(ft()));
}

function vt(t) {
    var e = 0, o = "search" === t ? "popstate" : "hashchange", a = m(), i = ot((function() {
        var r = "hash" === t ? at() : ft();
        c.emit("params", r);
    }));
    var u = n({
        mount: function() {
            window.addEventListener(o, i), i(), e++;
        },
        unmount: function() {
            --e <= 0 && (window.removeEventListener(o, i), i.cancel(), c.removeAllListeners("params"));
        },
        paramshref: "hash" === t ? it : st,
        setparams: "hash" === t ? ut : lt,
        getparams: "hash" === t ? at : ft,
        transformparams: "hash" === t ? ct : pt
    }, Symbol.toStringTag, "search" === t ? "SearchRouter" : "HashRouter"), c = r(r({}, a), u);
    return c;
}

var ht = function() {
    this.__data__ = [], this.size = 0;
};

var yt = function(t, r) {
    return t === r || t != t && r != r;
}, bt = yt;

var dt = function(t, r) {
    for (var e = t.length; e--; ) if (bt(t[e][0], r)) return e;
    return -1;
}, mt = dt, gt = Array.prototype.splice;

var jt = dt;

var _t = dt;

var wt = dt;

var St = ht, Ot = function(t) {
    var r = this.__data__, e = mt(r, t);
    return !(e < 0) && (e == r.length - 1 ? r.pop() : gt.call(r, e, 1), --this.size, 
    !0);
}, At = function(t) {
    var r = this.__data__, e = jt(r, t);
    return e < 0 ? void 0 : r[e][1];
}, Et = function(t) {
    return _t(this.__data__, t) > -1;
}, Tt = function(t, r) {
    var e = this.__data__, n = wt(e, t);
    return n < 0 ? (++this.size, e.push([ t, r ])) : e[n][1] = r, this;
};

function Pt(t) {
    var r = -1, e = null == t ? 0 : t.length;
    for (this.clear(); ++r < e; ) {
        var n = t[r];
        this.set(n[0], n[1]);
    }
}

Pt.prototype.clear = St, Pt.prototype.delete = Ot, Pt.prototype.get = At, Pt.prototype.has = Et, 
Pt.prototype.set = Tt;

var xt = Pt, Rt = xt;

var kt = function() {
    this.__data__ = new Rt, this.size = 0;
};

var Lt = function(t) {
    var r = this.__data__, e = r.delete(t);
    return this.size = r.size, e;
};

var zt = function(t) {
    return this.__data__.get(t);
};

var Ut = function(t) {
    return this.__data__.has(t);
}, Mt = F, It = j;

var Ct, Dt = function(t) {
    if (!It(t)) return !1;
    var r = Mt(t);
    return "[object Function]" == r || "[object GeneratorFunction]" == r || "[object AsyncFunction]" == r || "[object Proxy]" == r;
}, Nt = O["__core-js_shared__"], Vt = (Ct = /[^.]+$/.exec(Nt && Nt.keys && Nt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Ct : "";

var $t = function(t) {
    return !!Vt && Vt in t;
}, Ft = Function.prototype.toString;

var Bt = function(t) {
    if (null != t) {
        try {
            return Ft.call(t);
        } catch (t) {}
        try {
            return t + "";
        } catch (t) {}
    }
    return "";
}, Wt = Dt, Ht = $t, Kt = j, qt = Bt, Gt = /^\[object .+?Constructor\]$/, Jt = Function.prototype, Qt = Object.prototype, Xt = Jt.toString, Yt = Qt.hasOwnProperty, Zt = RegExp("^" + Xt.call(Yt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

var tr = function(t) {
    return !(!Kt(t) || Ht(t)) && (Wt(t) ? Zt : Gt).test(qt(t));
}, rr = function(t, r) {
    return null == t ? void 0 : t[r];
};

var er = function(t, r) {
    var e = rr(t, r);
    return tr(e) ? e : void 0;
}, nr = er(O, "Map"), or = er(Object, "create"), ar = or;

var ir = function() {
    this.__data__ = ar ? ar(null) : {}, this.size = 0;
};

var ur = function(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
}, cr = or, fr = Object.prototype.hasOwnProperty;

var sr = function(t) {
    var r = this.__data__;
    if (cr) {
        var e = r[t];
        return "__lodash_hash_undefined__" === e ? void 0 : e;
    }
    return fr.call(r, t) ? r[t] : void 0;
}, lr = or, pr = Object.prototype.hasOwnProperty;

var vr = or;

var hr = ir, yr = ur, br = sr, dr = function(t) {
    var r = this.__data__;
    return lr ? void 0 !== r[t] : pr.call(r, t);
}, mr = function(t, r) {
    var e = this.__data__;
    return this.size += this.has(t) ? 0 : 1, e[t] = vr && void 0 === r ? "__lodash_hash_undefined__" : r, 
    this;
};

function gr(t) {
    var r = -1, e = null == t ? 0 : t.length;
    for (this.clear(); ++r < e; ) {
        var n = t[r];
        this.set(n[0], n[1]);
    }
}

gr.prototype.clear = hr, gr.prototype.delete = yr, gr.prototype.get = br, gr.prototype.has = dr, 
gr.prototype.set = mr;

var jr = gr, _r = xt, wr = nr;

var Sr = function(t) {
    var r = e(t);
    return "string" == r || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t;
};

var Or = function(t, r) {
    var e = t.__data__;
    return Sr(r) ? e["string" == typeof r ? "string" : "hash"] : e.map;
}, Ar = Or;

var Er = Or;

var Tr = Or;

var Pr = Or;

var xr = function() {
    this.size = 0, this.__data__ = {
        hash: new jr,
        map: new (wr || _r),
        string: new jr
    };
}, Rr = function(t) {
    var r = Ar(this, t).delete(t);
    return this.size -= r ? 1 : 0, r;
}, kr = function(t) {
    return Er(this, t).get(t);
}, Lr = function(t) {
    return Tr(this, t).has(t);
}, zr = function(t, r) {
    var e = Pr(this, t), n = e.size;
    return e.set(t, r), this.size += e.size == n ? 0 : 1, this;
};

function Ur(t) {
    var r = -1, e = null == t ? 0 : t.length;
    for (this.clear(); ++r < e; ) {
        var n = t[r];
        this.set(n[0], n[1]);
    }
}

Ur.prototype.clear = xr, Ur.prototype.delete = Rr, Ur.prototype.get = kr, Ur.prototype.has = Lr, 
Ur.prototype.set = zr;

var Mr = Ur, Ir = xt, Cr = nr, Dr = Mr;

var Nr = xt, Vr = kt, $r = Lt, Fr = zt, Br = Ut, Wr = function(t, r) {
    var e = this.__data__;
    if (e instanceof Ir) {
        var n = e.__data__;
        if (!Cr || n.length < 199) return n.push([ t, r ]), this.size = ++e.size, this;
        e = this.__data__ = new Dr(n);
    }
    return e.set(t, r), this.size = e.size, this;
};

function Hr(t) {
    var r = this.__data__ = new Nr(t);
    this.size = r.size;
}

Hr.prototype.clear = Vr, Hr.prototype.delete = $r, Hr.prototype.get = Fr, Hr.prototype.has = Br, 
Hr.prototype.set = Wr;

var Kr = Hr;

var qr = Mr, Gr = function(t) {
    return this.__data__.set(t, "__lodash_hash_undefined__"), this;
}, Jr = function(t) {
    return this.__data__.has(t);
};

function Qr(t) {
    var r = -1, e = null == t ? 0 : t.length;
    for (this.__data__ = new qr; ++r < e; ) this.add(t[r]);
}

Qr.prototype.add = Qr.prototype.push = Gr, Qr.prototype.has = Jr;

var Xr = Qr, Yr = function(t, r) {
    for (var e = -1, n = null == t ? 0 : t.length; ++e < n; ) if (r(t[e], e, t)) return !0;
    return !1;
}, Zr = function(t, r) {
    return t.has(r);
};

var te = function(t, r, e, n, o, a) {
    var i = 1 & e, u = t.length, c = r.length;
    if (u != c && !(i && c > u)) return !1;
    var f = a.get(t), s = a.get(r);
    if (f && s) return f == r && s == t;
    var l = -1, p = !0, v = 2 & e ? new Xr : void 0;
    for (a.set(t, r), a.set(r, t); ++l < u; ) {
        var h = t[l], y = r[l];
        if (n) var b = i ? n(y, h, l, r, t, a) : n(h, y, l, t, r, a);
        if (void 0 !== b) {
            if (b) continue;
            p = !1;
            break;
        }
        if (v) {
            if (!Yr(r, (function(t, r) {
                if (!Zr(v, r) && (h === t || o(h, t, e, n, a))) return v.push(r);
            }))) {
                p = !1;
                break;
            }
        } else if (h !== y && !o(h, y, e, n, a)) {
            p = !1;
            break;
        }
    }
    return a.delete(t), a.delete(r), p;
};

var re = O.Uint8Array, ee = yt, ne = te, oe = function(t) {
    var r = -1, e = Array(t.size);
    return t.forEach((function(t, n) {
        e[++r] = [ n, t ];
    })), e;
}, ae = function(t) {
    var r = -1, e = Array(t.size);
    return t.forEach((function(t) {
        e[++r] = t;
    })), e;
}, ie = k ? k.prototype : void 0, ue = ie ? ie.valueOf : void 0;

var ce = function(t, r, e, n, o, a, i) {
    switch (e) {
      case "[object DataView]":
        if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset) return !1;
        t = t.buffer, r = r.buffer;

      case "[object ArrayBuffer]":
        return !(t.byteLength != r.byteLength || !a(new re(t), new re(r)));

      case "[object Boolean]":
      case "[object Date]":
      case "[object Number]":
        return ee(+t, +r);

      case "[object Error]":
        return t.name == r.name && t.message == r.message;

      case "[object RegExp]":
      case "[object String]":
        return t == r + "";

      case "[object Map]":
        var u = oe;

      case "[object Set]":
        var c = 1 & n;
        if (u || (u = ae), t.size != r.size && !c) return !1;
        var f = i.get(t);
        if (f) return f == r;
        n |= 2, i.set(t, r);
        var s = ne(u(t), u(r), n, o, a, i);
        return i.delete(t), s;

      case "[object Symbol]":
        if (ue) return ue.call(t) == ue.call(r);
    }
    return !1;
};

var fe = function(t, r) {
    for (var e = -1, n = r.length, o = t.length; ++e < n; ) t[o + e] = r[e];
    return t;
}, se = Array.isArray, le = fe, pe = se;

var ve = function(t, r, e) {
    var n = r(t);
    return pe(t) ? n : le(n, e(t));
};

var he = function(t, r) {
    for (var e = -1, n = null == t ? 0 : t.length, o = 0, a = []; ++e < n; ) {
        var i = t[e];
        r(i, e, t) && (a[o++] = i);
    }
    return a;
}, ye = function() {
    return [];
}, be = Object.prototype.propertyIsEnumerable, de = Object.getOwnPropertySymbols, me = de ? function(t) {
    return null == t ? [] : (t = Object(t), he(de(t), (function(r) {
        return be.call(t, r);
    })));
} : ye;

var ge = function(t, r) {
    for (var e = -1, n = Array(t); ++e < t; ) n[e] = r(e);
    return n;
}, je = F, _e = B;

var we = function(t) {
    return _e(t) && "[object Arguments]" == je(t);
}, Se = B, Oe = Object.prototype, Ae = Oe.hasOwnProperty, Ee = Oe.propertyIsEnumerable, Te = we(function() {
    return arguments;
}()) ? we : function(t) {
    return Se(t) && Ae.call(t, "callee") && !Ee.call(t, "callee");
}, Pe = {
    exports: {}
};

var xe = function() {
    return !1;
};

!function(t, r) {
    var e = O, n = xe, o = r && !r.nodeType && r, a = o && t && !t.nodeType && t, i = a && a.exports === o ? e.Buffer : void 0, u = (i ? i.isBuffer : void 0) || n;
    t.exports = u;
}(Pe, Pe.exports);

var Re = /^(?:0|[1-9]\d*)$/;

var ke = function(t, r) {
    var n = e(t);
    return !!(r = null == r ? 9007199254740991 : r) && ("number" == n || "symbol" != n && Re.test(t)) && t > -1 && t % 1 == 0 && t < r;
};

var Le = function(t) {
    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
}, ze = F, Ue = Le, Me = B, Ie = {};

Ie["[object Float32Array]"] = Ie["[object Float64Array]"] = Ie["[object Int8Array]"] = Ie["[object Int16Array]"] = Ie["[object Int32Array]"] = Ie["[object Uint8Array]"] = Ie["[object Uint8ClampedArray]"] = Ie["[object Uint16Array]"] = Ie["[object Uint32Array]"] = !0, 
Ie["[object Arguments]"] = Ie["[object Array]"] = Ie["[object ArrayBuffer]"] = Ie["[object Boolean]"] = Ie["[object DataView]"] = Ie["[object Date]"] = Ie["[object Error]"] = Ie["[object Function]"] = Ie["[object Map]"] = Ie["[object Number]"] = Ie["[object Object]"] = Ie["[object RegExp]"] = Ie["[object Set]"] = Ie["[object String]"] = Ie["[object WeakMap]"] = !1;

var Ce = function(t) {
    return Me(t) && Ue(t.length) && !!Ie[ze(t)];
};

var De = function(t) {
    return function(r) {
        return t(r);
    };
}, Ne = {
    exports: {}
};

!function(t, r) {
    var e = _, n = r && !r.nodeType && r, o = n && t && !t.nodeType && t, a = o && o.exports === n && e.process, i = function() {
        try {
            var t = o && o.require && o.require("util").types;
            return t || a && a.binding && a.binding("util");
        } catch (t) {}
    }();
    t.exports = i;
}(Ne, Ne.exports);

var Ve = Ce, $e = De, Fe = Ne.exports, Be = Fe && Fe.isTypedArray, We = Be ? $e(Be) : Ve, He = ge, Ke = Te, qe = se, Ge = Pe.exports, Je = ke, Qe = We, Xe = Object.prototype.hasOwnProperty;

var Ye = function(t, r) {
    var e = qe(t), n = !e && Ke(t), o = !e && !n && Ge(t), a = !e && !n && !o && Qe(t), i = e || n || o || a, u = i ? He(t.length, String) : [], c = u.length;
    for (var f in t) !r && !Xe.call(t, f) || i && ("length" == f || o && ("offset" == f || "parent" == f) || a && ("buffer" == f || "byteLength" == f || "byteOffset" == f) || Je(f, c)) || u.push(f);
    return u;
}, Ze = Object.prototype;

var tn = function(t) {
    var r = t && t.constructor;
    return t === ("function" == typeof r && r.prototype || Ze);
};

var rn = function(t, r) {
    return function(e) {
        return t(r(e));
    };
}(Object.keys, Object), en = tn, nn = rn, on = Object.prototype.hasOwnProperty;

var an = Dt, un = Le;

var cn = Ye, fn = function(t) {
    if (!en(t)) return nn(t);
    var r = [];
    for (var e in Object(t)) on.call(t, e) && "constructor" != e && r.push(e);
    return r;
}, sn = function(t) {
    return null != t && un(t.length) && !an(t);
};

var ln = ve, pn = me, vn = function(t) {
    return sn(t) ? cn(t) : fn(t);
};

var hn = function(t) {
    return ln(t, vn, pn);
}, yn = Object.prototype.hasOwnProperty;

var bn = function(t, r, e, n, o, a) {
    var i = 1 & e, u = hn(t), c = u.length;
    if (c != hn(r).length && !i) return !1;
    for (var f = c; f--; ) {
        var s = u[f];
        if (!(i ? s in r : yn.call(r, s))) return !1;
    }
    var l = a.get(t), p = a.get(r);
    if (l && p) return l == r && p == t;
    var v = !0;
    a.set(t, r), a.set(r, t);
    for (var h = i; ++f < c; ) {
        var y = t[s = u[f]], b = r[s];
        if (n) var d = i ? n(b, y, s, r, t, a) : n(y, b, s, t, r, a);
        if (!(void 0 === d ? y === b || o(y, b, e, n, a) : d)) {
            v = !1;
            break;
        }
        h || (h = "constructor" == s);
    }
    if (v && !h) {
        var m = t.constructor, g = r.constructor;
        m == g || !("constructor" in t) || !("constructor" in r) || "function" == typeof m && m instanceof m && "function" == typeof g && g instanceof g || (v = !1);
    }
    return a.delete(t), a.delete(r), v;
}, dn = er(O, "DataView"), mn = nr, gn = er(O, "Promise"), jn = er(O, "Set"), _n = er(O, "WeakMap"), wn = F, Sn = Bt, On = Sn(dn), An = Sn(mn), En = Sn(gn), Tn = Sn(jn), Pn = Sn(_n), xn = wn;

(dn && "[object DataView]" != xn(new dn(new ArrayBuffer(1))) || mn && "[object Map]" != xn(new mn) || gn && "[object Promise]" != xn(gn.resolve()) || jn && "[object Set]" != xn(new jn) || _n && "[object WeakMap]" != xn(new _n)) && (xn = function(t) {
    var r = wn(t), e = "[object Object]" == r ? t.constructor : void 0, n = e ? Sn(e) : "";
    if (n) switch (n) {
      case On:
        return "[object DataView]";

      case An:
        return "[object Map]";

      case En:
        return "[object Promise]";

      case Tn:
        return "[object Set]";

      case Pn:
        return "[object WeakMap]";
    }
    return r;
});

var Rn = Kr, kn = te, Ln = ce, zn = bn, Un = xn, Mn = se, In = Pe.exports, Cn = We, Dn = "[object Object]", Nn = Object.prototype.hasOwnProperty;

var Vn = function(t, r, e, n, o, a) {
    var i = Mn(t), u = Mn(r), c = i ? "[object Array]" : Un(t), f = u ? "[object Array]" : Un(r), s = (c = "[object Arguments]" == c ? Dn : c) == Dn, l = (f = "[object Arguments]" == f ? Dn : f) == Dn, p = c == f;
    if (p && In(t)) {
        if (!In(r)) return !1;
        i = !0, s = !1;
    }
    if (p && !s) return a || (a = new Rn), i || Cn(t) ? kn(t, r, e, n, o, a) : Ln(t, r, c, e, n, o, a);
    if (!(1 & e)) {
        var v = s && Nn.call(t, "__wrapped__"), h = l && Nn.call(r, "__wrapped__");
        if (v || h) {
            var y = v ? t.value() : t, b = h ? r.value() : r;
            return a || (a = new Rn), o(y, b, e, n, a);
        }
    }
    return !!p && (a || (a = new Rn), zn(t, r, e, n, o, a));
}, $n = B;

var Fn = function t(r, e, n, o, a) {
    return r === e || (null == r || null == e || !$n(r) && !$n(e) ? r != r && e != e : Vn(r, e, n, o, t, a));
};

var Bn = function(t, r) {
    return Fn(t, r);
};

function Wn(t) {
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

function Hn(t) {
    var r = t.router, e = t.useState, n = t.useEffect;
    return function() {
        var t = a(e(r.getparams()), 2), o = t[0], i = t[1];
        return n((function() {
            var t = ot((function(t) {
                i(t);
            }));
            return r.mount(), r.on("params", t), function() {
                r.unmount(), r.off("params", t), t.cancel();
            };
        }), []), o;
    };
}

var Kn = [ "component", "target", "to", "onClick", "innerRef", "children" ], qn = [ "innerRef", "target", "children", "href", "isActive", "navigate" ];

function Gn(t, r) {
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

function Jn(t) {
    return !(!t || "object" !== e(t) || "function" != typeof t.params);
}

function Qn(t, r) {
    if (!r) throw new TypeError("object,function");
    if ("function" != typeof r) {
        if ("object" !== e(r)) throw new TypeError("object,function");
        t.setparams(r);
    } else t.transformparams(r);
}

function Xn(t) {
    return !("function" != typeof (null == t ? void 0 : t.params) || null == t || !t.redirect);
}

function Yn(t) {
    return !("function" != typeof (null == t ? void 0 : t.params) || null == t || !t.component);
}

function Zn(t) {
    var r = t.router, e = t.ref, n = t.onMounted, o = t.onUnmounted, a = t.readonly;
    return function() {
        var t = e(r.getparams()), i = ot((function(r) {
            t.value = r;
        }));
        return n((function() {
            r.mount(), r.on("params", i);
        })), o((function() {
            r.unmount(), r.off("params", i), i.cancel();
        })), a(t);
    };
}

exports.createHashRouter = function() {
    return vt("hash");
}, exports.createReactLink = function(t) {
    var n = t.router, a = t.useState, i = t.useEffect, u = t.createElement, c = Hn({
        router: n,
        useState: a,
        useEffect: i
    });
    return function(t) {
        var a = t.component, i = void 0 === a ? f : a, s = t.target, l = t.to, p = t.onClick, v = t.innerRef, h = t.children, y = o(t, Kn), b = c();
        if (!l || "object" !== e(l)) throw new TypeError("object");
        var d = n.paramshref(l), m = Bn(b, l), g = Wn({
            onClick: p,
            target: s,
            router: n,
            to: l
        });
        return u(i, r({
            innerRef: v,
            target: s,
            href: d,
            isActive: m,
            navigate: g
        }, y), h);
    };
    function f(t) {
        var e = t.innerRef, n = t.target, a = t.children, i = t.href, c = t.isActive, f = t.navigate, s = o(t, qn);
        return u("a", r({
            ref: e,
            target: n,
            href: i,
            onClick: f,
            "aria-current": c ? "page" : "false"
        }, s), a);
    }
}, exports.createReactParamsHook = Hn, exports.createReactView = function(t) {
    var e = t.router, n = t.createElement, o = t.useState, a = t.useEffect, i = Hn({
        router: e,
        useState: o,
        useEffect: a
    });
    return function(t) {
        var o = t.routes;
        if (!Array.isArray(o)) throw new TypeError("array");
        if (!o.every((function(t) {
            return Jn(t);
        }))) throw new TypeError('{params:"function"}');
        var a = i(), u = Gn(o, a);
        if (Xn(u)) {
            var c = u.redirect;
            Qn(e, c);
        }
        if (Xn(u)) return null;
        if (Yn(u)) {
            var f = u.component, s = Object.assign({}, {}, {
                params: a
            });
            return n(f, r({}, s));
        }
        return null;
    };
}, exports.createSearchRouter = function() {
    return vt("search");
}, exports.createVueLink = function(t) {
    var r = t.router, n = t.resolveComponent, o = t.defineComponent, a = t.h, i = t.ref, u = t.onMounted, c = t.onUnmounted, f = t.readonly, s = Zn({
        router: r,
        ref: i,
        onMounted: u,
        onUnmounted: c,
        readonly: f
    }), l = o({
        inheritAttrs: !0,
        props: [ "innerRef", "target", "href", "isActive", "navigate" ],
        setup: function(t, r) {
            var e = r.slots;
            return function() {
                var r = t.innerRef, n = t.target, o = t.href, i = t.navigate, u = t.isActive;
                return a("a", {
                    ref: r,
                    target: n,
                    href: o,
                    onClick: i,
                    "aria-current": u ? "page" : "false"
                }, e);
            };
        }
    });
    return o({
        inheritAttrs: !0,
        props: [ "component", "to", "target", "onClick", "innerRef" ],
        setup: function(t, o) {
            var i = o.slots, u = s();
            return function() {
                var o = t.component, c = void 0 === o ? l : o, f = t.to, s = t.onClick, p = t.target, v = t.innerRef;
                if (!f || "object" !== e(f)) throw new TypeError("object");
                var h = r.paramshref(f), y = Wn({
                    onClick: s,
                    target: p,
                    router: r,
                    to: f
                }), b = Bn(u.value, f), d = "function" == typeof v ? v : v && "object" === e(v) ? function(t) {
                    Reflect.set(v, "value", t);
                } : void 0, m = "string" == typeof c ? n(c) : c;
                return a(m, {
                    isActive: b,
                    innerRef: d,
                    href: h,
                    navigate: y,
                    target: p
                }, i);
            };
        }
    });
}, exports.createVueParamsHook = Zn, exports.createVueView = function(t) {
    var e = t.readonly, n = t.onMounted, o = t.onUnmounted, a = t.router, i = t.resolveComponent, u = t.defineComponent, c = t.h, f = t.ref, s = Zn({
        router: a,
        ref: f,
        onMounted: n,
        onUnmounted: o,
        readonly: e
    });
    return u({
        props: [ "routes" ],
        inheritAttrs: !1,
        setup: function(t) {
            var e = s();
            return function() {
                var n = t.routes;
                if (!Array.isArray(n)) throw new TypeError("array");
                if (!n.every((function(t) {
                    return Jn(t);
                }))) throw new TypeError('{params:"function"}');
                var o = Gn(n, e.value);
                if (Xn(o)) {
                    var u = o.redirect;
                    Qn(a, u);
                }
                if (Xn(o)) return null;
                if (Yn(o)) {
                    var f = o.component, s = Object.assign({}, {}, {
                        params: e.value
                    }), l = "string" == typeof f ? i(f) : f;
                    return c(l, r({}, s));
                }
                return null;
            };
        }
    });
};
//# sourceMappingURL=index.cjs.map
