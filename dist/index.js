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
    }(t, r) || a(t, r) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function a(t, r) {
    if (t) {
        if ("string" == typeof t) return i(t, r);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? i(t, r) : void 0;
    }
}

function i(t, r) {
    (null == r || r > t.length) && (r = t.length);
    for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
    return n;
}

function u(t) {
    return (u = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
        return e(t);
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
    })(t);
}

function c(t, r, e) {
    return r in t ? Object.defineProperty(t, r, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[r] = e, t;
}

function f(t, r) {
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
    }(t, r) || l(t, r) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function s(t) {
    return function(t) {
        if (Array.isArray(t)) return p(t);
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }(t) || l(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function l(t, r) {
    if (t) {
        if ("string" == typeof t) return p(t, r);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? p(t, r) : void 0;
    }
}

function p(t, r) {
    (null == r || r > t.length) && (r = t.length);
    for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
    return n;
}

function v() {
    return {}.toString.call(c({}, Symbol.toStringTag, "EventEmitterTarget"));
}

function h(t) {
    if ("string" != typeof t && "symbol" !== u(t)) throw new TypeError(" EVENTNAME expected: string | symbol;but invalid :" + t);
}

function y(t) {
    if ("function" != typeof t) throw new TypeError(" EVENTLISTENER expected: (event?: any) => void;but invalid:" + t);
}

function b() {
    var t, r = new Map, e = new WeakMap;
    function n(t) {
        var e = r.get(t);
        return e || (e = new Set, r.set(t, e)), e;
    }
    function o(t) {
        h(t), r.has(t) && n(t).clear();
    }
    function a(t, e) {
        h(t), r.has(t) && n(t).forEach((function(t) {
            Promise.resolve().then((function() {
                t(e);
            }));
        }));
    }
    function i(t, r) {
        h(t), y(r), n(t).add(r);
    }
    function u(t, r) {
        n(t).delete(r);
    }
    function l(t, r) {
        h(t), y(r), u(t, r), function(t, r) {
            var o = n(t), a = e.get(r);
            a && o.delete(a);
        }(t, r);
    }
    function p() {
        return s(r).map((function(t) {
            var r = f(t, 2);
            return [ r[0], s(r[1]) ];
        }))[Symbol.iterator]();
    }
    return c(t = {}, Symbol.toPrimitive, v), c(t, Symbol.toStringTag, "EventEmitterTarget"), 
    c(t, Symbol.iterator, p), c(t, "entries", p), c(t, "listenerCount", (function(t) {
        return h(t), r.has(t) ? n(t).size : 0;
    })), c(t, "clear", o), c(t, "removeAllListeners", o), c(t, "on", i), c(t, "addListener", i), 
    c(t, "off", l), c(t, "removeListener", l), c(t, "once", (function(t, r) {
        h(t), y(r);
        var n = !1, o = e.get(r);
        o || (o = function e(o) {
            u(t, e), u(t, r), n || (n = !0, r(o));
        }, e.set(r, o)), u(t, r), i(t, o);
    })), c(t, "emit", a), c(t, "dispatch", a), c(t, "eventNames", (function() {
        return s(r.keys());
    })), c(t, "listeners", (function(t) {
        return h(t), r.has(t) ? s(n(t)) : [];
    })), t;
}

var d = function(t) {
    var r = Symbol();
    try {
        var e = new Function("return async()=>{}")()();
    } catch (t) {}
    function n() {
        var t = b();
        return this && this instanceof n ? (Object.assign(this, t), this) : Reflect.construct(n, []);
    }
    return Reflect.set(n, r, e), n;
}(), m = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

var g = function(t) {
    var r = e(t);
    return null != t && ("object" == r || "function" == r);
}, j = "object" == e(m) && m && m.Object === Object && m, _ = j, w = "object" == ("undefined" == typeof self ? "undefined" : e(self)) && self && self.Object === Object && self, S = _ || w || Function("return this")(), O = S, A = function() {
    return O.Date.now();
}, E = /\s/;

var T = function(t) {
    for (var r = t.length; r-- && E.test(t.charAt(r)); ) ;
    return r;
}, P = /^\s+/;

var R = function(t) {
    return t ? t.slice(0, T(t) + 1).replace(P, "") : t;
}, x = S.Symbol, z = x, U = Object.prototype, L = U.hasOwnProperty, k = U.toString, M = z ? z.toStringTag : void 0;

var I = function(t) {
    var r = L.call(t, M), e = t[M];
    try {
        t[M] = void 0;
        var n = !0;
    } catch (t) {}
    var o = k.call(t);
    return n && (r ? t[M] = e : delete t[M]), o;
}, C = Object.prototype.toString;

var D = I, N = function(t) {
    return C.call(t);
}, $ = x ? x.toStringTag : void 0;

var F = function(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : $ && $ in Object(t) ? D(t) : N(t);
};

var B = function(t) {
    return null != t && "object" == e(t);
}, V = F, W = B;

var K = R, q = g, G = function(t) {
    return "symbol" == e(t) || W(t) && "[object Symbol]" == V(t);
}, H = /^[-+]0x[0-9a-f]+$/i, J = /^0b[01]+$/i, Q = /^0o[0-7]+$/i, X = parseInt;

var Y = g, Z = A, tt = function(t) {
    if ("number" == typeof t) return t;
    if (G(t)) return NaN;
    if (q(t)) {
        var r = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = q(r) ? r + "" : r;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = K(t);
    var e = J.test(t);
    return e || Q.test(t) ? X(t.slice(2), e ? 2 : 8) : H.test(t) ? NaN : +t;
}, rt = Math.max, et = Math.min;

var nt = function(t, r, e) {
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
        var t = Z();
        if (y(t)) return d(t);
        u = setTimeout(b, function(t) {
            var e = r - (t - c);
            return l ? et(e, a - (t - f)) : e;
        }(t));
    }
    function d(t) {
        return u = void 0, p && n ? v(t) : (n = o = void 0, i);
    }
    function m() {
        var t = Z(), e = y(t);
        if (n = arguments, o = this, c = t, e) {
            if (void 0 === u) return h(c);
            if (l) return clearTimeout(u), u = setTimeout(b, r), v(c);
        }
        return void 0 === u && (u = setTimeout(b, r)), i;
    }
    return r = tt(r) || 0, Y(e) && (s = !!e.leading, a = (l = "maxWait" in e) ? rt(tt(e.maxWait) || 0, r) : a, 
    p = "trailing" in e ? !!e.trailing : p), m.cancel = function() {
        void 0 !== u && clearTimeout(u), f = 0, n = c = o = u = void 0;
    }, m.flush = function() {
        return void 0 === u ? i : d(Z());
    }, m;
};

function ot() {
    return location.hash && Object.fromEntries(new URLSearchParams(location.hash.slice(1))) || {};
}

function at(t) {
    if (!t) throw new TypeError("object,function");
    var n = ot(), o = new URL(location.href);
    if ("function" == typeof t) return n = t(n), o.hash = String(new URLSearchParams(r({}, n))), 
    o.href;
    if ("object" === e(t)) return n = t, o.hash = String(new URLSearchParams(r({}, n))), 
    o.href;
    throw new TypeError("object,function");
}

function it(t) {
    var e = location.hash, n = new URL(location.href);
    n.hash = String(new URLSearchParams(r({}, t))), e !== n.hash && (history.pushState({}, "", n.href), 
    window.dispatchEvent(new Event("hashchange")));
}

function ut(t) {
    it(t(ot()));
}

function ct() {
    return location.search && Object.fromEntries(new URL(location.href).searchParams) || {};
}

function ft(t) {
    if (!t) throw new TypeError("object,function");
    var n = ct(), o = new URL(location.href);
    if ("function" == typeof t) return n = t(n), o.search = String(new URLSearchParams(r({}, n))), 
    o.href;
    if ("object" === e(t)) return n = t, o.search = String(new URLSearchParams(r({}, n))), 
    o.href;
    throw new TypeError("object,function");
}

function st(t) {
    var e = location.search, n = new URL(location.href);
    n.search = String(new URLSearchParams(r({}, t))), e !== n.search && (history.pushState({}, "", n.href), 
    window.dispatchEvent(new Event("popstate")));
}

function lt(t) {
    st(t(ct()));
}

function pt(t) {
    var e = 0, o = "search" === t ? "popstate" : "hashchange", a = d(), i = nt((function() {
        var r = "hash" === t ? ot() : ct();
        c.emit("params", r);
    }));
    var u = n({
        mount: function() {
            window.addEventListener(o, i), i(), e++;
        },
        unmount: function() {
            --e <= 0 && (window.removeEventListener(o, i), i.cancel(), c.removeAllListeners("params"));
        },
        paramshref: "hash" === t ? at : ft,
        setparams: "hash" === t ? it : st,
        getparams: "hash" === t ? ot : ct,
        transformparams: "hash" === t ? ut : lt
    }, Symbol.toStringTag, "search" === t ? "SearchRouter" : "HashRouter"), c = r(r({}, a), u);
    return c;
}

function vt() {
    return pt("hash");
}

function ht() {
    return pt("search");
}

var yt = function() {
    this.__data__ = [], this.size = 0;
};

var bt = function(t, r) {
    return t === r || t != t && r != r;
}, dt = bt;

var mt = function(t, r) {
    for (var e = t.length; e--; ) if (dt(t[e][0], r)) return e;
    return -1;
}, gt = mt, jt = Array.prototype.splice;

var _t = mt;

var wt = mt;

var St = mt;

var Ot = yt, At = function(t) {
    var r = this.__data__, e = gt(r, t);
    return !(e < 0) && (e == r.length - 1 ? r.pop() : jt.call(r, e, 1), --this.size, 
    !0);
}, Et = function(t) {
    var r = this.__data__, e = _t(r, t);
    return e < 0 ? void 0 : r[e][1];
}, Tt = function(t) {
    return wt(this.__data__, t) > -1;
}, Pt = function(t, r) {
    var e = this.__data__, n = St(e, t);
    return n < 0 ? (++this.size, e.push([ t, r ])) : e[n][1] = r, this;
};

function Rt(t) {
    var r = -1, e = null == t ? 0 : t.length;
    for (this.clear(); ++r < e; ) {
        var n = t[r];
        this.set(n[0], n[1]);
    }
}

Rt.prototype.clear = Ot, Rt.prototype.delete = At, Rt.prototype.get = Et, Rt.prototype.has = Tt, 
Rt.prototype.set = Pt;

var xt = Rt, zt = xt;

var Ut = function() {
    this.__data__ = new zt, this.size = 0;
};

var Lt = function(t) {
    var r = this.__data__, e = r.delete(t);
    return this.size = r.size, e;
};

var kt = function(t) {
    return this.__data__.get(t);
};

var Mt = function(t) {
    return this.__data__.has(t);
}, It = F, Ct = g;

var Dt, Nt = function(t) {
    if (!Ct(t)) return !1;
    var r = It(t);
    return "[object Function]" == r || "[object GeneratorFunction]" == r || "[object AsyncFunction]" == r || "[object Proxy]" == r;
}, $t = S["__core-js_shared__"], Ft = (Dt = /[^.]+$/.exec($t && $t.keys && $t.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Dt : "";

var Bt = function(t) {
    return !!Ft && Ft in t;
}, Vt = Function.prototype.toString;

var Wt = function(t) {
    if (null != t) {
        try {
            return Vt.call(t);
        } catch (t) {}
        try {
            return t + "";
        } catch (t) {}
    }
    return "";
}, Kt = Nt, qt = Bt, Gt = g, Ht = Wt, Jt = /^\[object .+?Constructor\]$/, Qt = Function.prototype, Xt = Object.prototype, Yt = Qt.toString, Zt = Xt.hasOwnProperty, tr = RegExp("^" + Yt.call(Zt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

var rr = function(t) {
    return !(!Gt(t) || qt(t)) && (Kt(t) ? tr : Jt).test(Ht(t));
}, er = function(t, r) {
    return null == t ? void 0 : t[r];
};

var nr = function(t, r) {
    var e = er(t, r);
    return rr(e) ? e : void 0;
}, or = nr(S, "Map"), ar = nr(Object, "create"), ir = ar;

var ur = function() {
    this.__data__ = ir ? ir(null) : {}, this.size = 0;
};

var cr = function(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
}, fr = ar, sr = Object.prototype.hasOwnProperty;

var lr = function(t) {
    var r = this.__data__;
    if (fr) {
        var e = r[t];
        return "__lodash_hash_undefined__" === e ? void 0 : e;
    }
    return sr.call(r, t) ? r[t] : void 0;
}, pr = ar, vr = Object.prototype.hasOwnProperty;

var hr = ar;

var yr = ur, br = cr, dr = lr, mr = function(t) {
    var r = this.__data__;
    return pr ? void 0 !== r[t] : vr.call(r, t);
}, gr = function(t, r) {
    var e = this.__data__;
    return this.size += this.has(t) ? 0 : 1, e[t] = hr && void 0 === r ? "__lodash_hash_undefined__" : r, 
    this;
};

function jr(t) {
    var r = -1, e = null == t ? 0 : t.length;
    for (this.clear(); ++r < e; ) {
        var n = t[r];
        this.set(n[0], n[1]);
    }
}

jr.prototype.clear = yr, jr.prototype.delete = br, jr.prototype.get = dr, jr.prototype.has = mr, 
jr.prototype.set = gr;

var _r = jr, wr = xt, Sr = or;

var Or = function(t) {
    var r = e(t);
    return "string" == r || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t;
};

var Ar = function(t, r) {
    var e = t.__data__;
    return Or(r) ? e["string" == typeof r ? "string" : "hash"] : e.map;
}, Er = Ar;

var Tr = Ar;

var Pr = Ar;

var Rr = Ar;

var xr = function() {
    this.size = 0, this.__data__ = {
        hash: new _r,
        map: new (Sr || wr),
        string: new _r
    };
}, zr = function(t) {
    var r = Er(this, t).delete(t);
    return this.size -= r ? 1 : 0, r;
}, Ur = function(t) {
    return Tr(this, t).get(t);
}, Lr = function(t) {
    return Pr(this, t).has(t);
}, kr = function(t, r) {
    var e = Rr(this, t), n = e.size;
    return e.set(t, r), this.size += e.size == n ? 0 : 1, this;
};

function Mr(t) {
    var r = -1, e = null == t ? 0 : t.length;
    for (this.clear(); ++r < e; ) {
        var n = t[r];
        this.set(n[0], n[1]);
    }
}

Mr.prototype.clear = xr, Mr.prototype.delete = zr, Mr.prototype.get = Ur, Mr.prototype.has = Lr, 
Mr.prototype.set = kr;

var Ir = Mr, Cr = xt, Dr = or, Nr = Ir;

var $r = xt, Fr = Ut, Br = Lt, Vr = kt, Wr = Mt, Kr = function(t, r) {
    var e = this.__data__;
    if (e instanceof Cr) {
        var n = e.__data__;
        if (!Dr || n.length < 199) return n.push([ t, r ]), this.size = ++e.size, this;
        e = this.__data__ = new Nr(n);
    }
    return e.set(t, r), this.size = e.size, this;
};

function qr(t) {
    var r = this.__data__ = new $r(t);
    this.size = r.size;
}

qr.prototype.clear = Fr, qr.prototype.delete = Br, qr.prototype.get = Vr, qr.prototype.has = Wr, 
qr.prototype.set = Kr;

var Gr = qr;

var Hr = Ir, Jr = function(t) {
    return this.__data__.set(t, "__lodash_hash_undefined__"), this;
}, Qr = function(t) {
    return this.__data__.has(t);
};

function Xr(t) {
    var r = -1, e = null == t ? 0 : t.length;
    for (this.__data__ = new Hr; ++r < e; ) this.add(t[r]);
}

Xr.prototype.add = Xr.prototype.push = Jr, Xr.prototype.has = Qr;

var Yr = Xr, Zr = function(t, r) {
    for (var e = -1, n = null == t ? 0 : t.length; ++e < n; ) if (r(t[e], e, t)) return !0;
    return !1;
}, te = function(t, r) {
    return t.has(r);
};

var re = function(t, r, e, n, o, a) {
    var i = 1 & e, u = t.length, c = r.length;
    if (u != c && !(i && c > u)) return !1;
    var f = a.get(t), s = a.get(r);
    if (f && s) return f == r && s == t;
    var l = -1, p = !0, v = 2 & e ? new Yr : void 0;
    for (a.set(t, r), a.set(r, t); ++l < u; ) {
        var h = t[l], y = r[l];
        if (n) var b = i ? n(y, h, l, r, t, a) : n(h, y, l, t, r, a);
        if (void 0 !== b) {
            if (b) continue;
            p = !1;
            break;
        }
        if (v) {
            if (!Zr(r, (function(t, r) {
                if (!te(v, r) && (h === t || o(h, t, e, n, a))) return v.push(r);
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

var ee = S.Uint8Array, ne = bt, oe = re, ae = function(t) {
    var r = -1, e = Array(t.size);
    return t.forEach((function(t, n) {
        e[++r] = [ n, t ];
    })), e;
}, ie = function(t) {
    var r = -1, e = Array(t.size);
    return t.forEach((function(t) {
        e[++r] = t;
    })), e;
}, ue = x ? x.prototype : void 0, ce = ue ? ue.valueOf : void 0;

var fe = function(t, r, e, n, o, a, i) {
    switch (e) {
      case "[object DataView]":
        if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset) return !1;
        t = t.buffer, r = r.buffer;

      case "[object ArrayBuffer]":
        return !(t.byteLength != r.byteLength || !a(new ee(t), new ee(r)));

      case "[object Boolean]":
      case "[object Date]":
      case "[object Number]":
        return ne(+t, +r);

      case "[object Error]":
        return t.name == r.name && t.message == r.message;

      case "[object RegExp]":
      case "[object String]":
        return t == r + "";

      case "[object Map]":
        var u = ae;

      case "[object Set]":
        var c = 1 & n;
        if (u || (u = ie), t.size != r.size && !c) return !1;
        var f = i.get(t);
        if (f) return f == r;
        n |= 2, i.set(t, r);
        var s = oe(u(t), u(r), n, o, a, i);
        return i.delete(t), s;

      case "[object Symbol]":
        if (ce) return ce.call(t) == ce.call(r);
    }
    return !1;
};

var se = function(t, r) {
    for (var e = -1, n = r.length, o = t.length; ++e < n; ) t[o + e] = r[e];
    return t;
}, le = Array.isArray, pe = se, ve = le;

var he = function(t, r, e) {
    var n = r(t);
    return ve(t) ? n : pe(n, e(t));
};

var ye = function(t, r) {
    for (var e = -1, n = null == t ? 0 : t.length, o = 0, a = []; ++e < n; ) {
        var i = t[e];
        r(i, e, t) && (a[o++] = i);
    }
    return a;
}, be = function() {
    return [];
}, de = Object.prototype.propertyIsEnumerable, me = Object.getOwnPropertySymbols, ge = me ? function(t) {
    return null == t ? [] : (t = Object(t), ye(me(t), (function(r) {
        return de.call(t, r);
    })));
} : be;

var je = function(t, r) {
    for (var e = -1, n = Array(t); ++e < t; ) n[e] = r(e);
    return n;
}, _e = F, we = B;

var Se = function(t) {
    return we(t) && "[object Arguments]" == _e(t);
}, Oe = B, Ae = Object.prototype, Ee = Ae.hasOwnProperty, Te = Ae.propertyIsEnumerable, Pe = Se(function() {
    return arguments;
}()) ? Se : function(t) {
    return Oe(t) && Ee.call(t, "callee") && !Te.call(t, "callee");
}, Re = {
    exports: {}
};

var xe = function() {
    return !1;
};

!function(t, r) {
    var e = S, n = xe, o = r && !r.nodeType && r, a = o && t && !t.nodeType && t, i = a && a.exports === o ? e.Buffer : void 0, u = (i ? i.isBuffer : void 0) || n;
    t.exports = u;
}(Re, Re.exports);

var ze = /^(?:0|[1-9]\d*)$/;

var Ue = function(t, r) {
    var n = e(t);
    return !!(r = null == r ? 9007199254740991 : r) && ("number" == n || "symbol" != n && ze.test(t)) && t > -1 && t % 1 == 0 && t < r;
};

var Le = function(t) {
    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
}, ke = F, Me = Le, Ie = B, Ce = {};

Ce["[object Float32Array]"] = Ce["[object Float64Array]"] = Ce["[object Int8Array]"] = Ce["[object Int16Array]"] = Ce["[object Int32Array]"] = Ce["[object Uint8Array]"] = Ce["[object Uint8ClampedArray]"] = Ce["[object Uint16Array]"] = Ce["[object Uint32Array]"] = !0, 
Ce["[object Arguments]"] = Ce["[object Array]"] = Ce["[object ArrayBuffer]"] = Ce["[object Boolean]"] = Ce["[object DataView]"] = Ce["[object Date]"] = Ce["[object Error]"] = Ce["[object Function]"] = Ce["[object Map]"] = Ce["[object Number]"] = Ce["[object Object]"] = Ce["[object RegExp]"] = Ce["[object Set]"] = Ce["[object String]"] = Ce["[object WeakMap]"] = !1;

var De = function(t) {
    return Ie(t) && Me(t.length) && !!Ce[ke(t)];
};

var Ne = function(t) {
    return function(r) {
        return t(r);
    };
}, $e = {
    exports: {}
};

!function(t, r) {
    var e = j, n = r && !r.nodeType && r, o = n && t && !t.nodeType && t, a = o && o.exports === n && e.process, i = function() {
        try {
            var t = o && o.require && o.require("util").types;
            return t || a && a.binding && a.binding("util");
        } catch (t) {}
    }();
    t.exports = i;
}($e, $e.exports);

var Fe = De, Be = Ne, Ve = $e.exports, We = Ve && Ve.isTypedArray, Ke = We ? Be(We) : Fe, qe = je, Ge = Pe, He = le, Je = Re.exports, Qe = Ue, Xe = Ke, Ye = Object.prototype.hasOwnProperty;

var Ze = function(t, r) {
    var e = He(t), n = !e && Ge(t), o = !e && !n && Je(t), a = !e && !n && !o && Xe(t), i = e || n || o || a, u = i ? qe(t.length, String) : [], c = u.length;
    for (var f in t) !r && !Ye.call(t, f) || i && ("length" == f || o && ("offset" == f || "parent" == f) || a && ("buffer" == f || "byteLength" == f || "byteOffset" == f) || Qe(f, c)) || u.push(f);
    return u;
}, tn = Object.prototype;

var rn = function(t) {
    var r = t && t.constructor;
    return t === ("function" == typeof r && r.prototype || tn);
};

var en = function(t, r) {
    return function(e) {
        return t(r(e));
    };
}(Object.keys, Object), nn = rn, on = en, an = Object.prototype.hasOwnProperty;

var un = Nt, cn = Le;

var fn = Ze, sn = function(t) {
    if (!nn(t)) return on(t);
    var r = [];
    for (var e in Object(t)) an.call(t, e) && "constructor" != e && r.push(e);
    return r;
}, ln = function(t) {
    return null != t && cn(t.length) && !un(t);
};

var pn = he, vn = ge, hn = function(t) {
    return ln(t) ? fn(t) : sn(t);
};

var yn = function(t) {
    return pn(t, hn, vn);
}, bn = Object.prototype.hasOwnProperty;

var dn = function(t, r, e, n, o, a) {
    var i = 1 & e, u = yn(t), c = u.length;
    if (c != yn(r).length && !i) return !1;
    for (var f = c; f--; ) {
        var s = u[f];
        if (!(i ? s in r : bn.call(r, s))) return !1;
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
}, mn = nr(S, "DataView"), gn = or, jn = nr(S, "Promise"), _n = nr(S, "Set"), wn = nr(S, "WeakMap"), Sn = F, On = Wt, An = On(mn), En = On(gn), Tn = On(jn), Pn = On(_n), Rn = On(wn), xn = Sn;

(mn && "[object DataView]" != xn(new mn(new ArrayBuffer(1))) || gn && "[object Map]" != xn(new gn) || jn && "[object Promise]" != xn(jn.resolve()) || _n && "[object Set]" != xn(new _n) || wn && "[object WeakMap]" != xn(new wn)) && (xn = function(t) {
    var r = Sn(t), e = "[object Object]" == r ? t.constructor : void 0, n = e ? On(e) : "";
    if (n) switch (n) {
      case An:
        return "[object DataView]";

      case En:
        return "[object Map]";

      case Tn:
        return "[object Promise]";

      case Pn:
        return "[object Set]";

      case Rn:
        return "[object WeakMap]";
    }
    return r;
});

var zn = Gr, Un = re, Ln = fe, kn = dn, Mn = xn, In = le, Cn = Re.exports, Dn = Ke, Nn = "[object Object]", $n = Object.prototype.hasOwnProperty;

var Fn = function(t, r, e, n, o, a) {
    var i = In(t), u = In(r), c = i ? "[object Array]" : Mn(t), f = u ? "[object Array]" : Mn(r), s = (c = "[object Arguments]" == c ? Nn : c) == Nn, l = (f = "[object Arguments]" == f ? Nn : f) == Nn, p = c == f;
    if (p && Cn(t)) {
        if (!Cn(r)) return !1;
        i = !0, s = !1;
    }
    if (p && !s) return a || (a = new zn), i || Dn(t) ? Un(t, r, e, n, o, a) : Ln(t, r, c, e, n, o, a);
    if (!(1 & e)) {
        var v = s && $n.call(t, "__wrapped__"), h = l && $n.call(r, "__wrapped__");
        if (v || h) {
            var y = v ? t.value() : t, b = h ? r.value() : r;
            return a || (a = new zn), o(y, b, e, n, a);
        }
    }
    return !!p && (a || (a = new zn), kn(t, r, e, n, o, a));
}, Bn = B;

var Vn = function t(r, e, n, o, a) {
    return r === e || (null == r || null == e || !Bn(r) && !Bn(e) ? r != r && e != e : Fn(r, e, n, o, t, a));
};

var Wn = function(t, r) {
    return Vn(t, r);
};

function Kn(t) {
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

function qn(t) {
    var r = t.router, e = t.useState, n = t.useEffect;
    return function() {
        var t = o(e(r.getparams()), 2), a = t[0], i = t[1];
        return n((function() {
            var t = nt((function(t) {
                i(t);
            }));
            return r.mount(), r.on("params", t), function() {
                r.unmount(), r.off("params", t), t.cancel();
            };
        }), []), a;
    };
}

function Gn(t) {
    var r = t.router, n = t.useState, o = t.useEffect, a = t.createElement, i = qn({
        router: r,
        useState: n,
        useEffect: o
    });
    return function(t) {
        var n = t.component, o = void 0 === n ? u : n, c = t.target, f = t.to, s = t.onClick, l = t.innerRef, p = t.children, v = i();
        if (!f || "object" !== e(f)) throw new TypeError("object");
        var h = r.paramshref(f), y = Wn(v, f), b = Kn({
            onClick: s,
            target: c,
            router: r,
            to: f
        });
        return a(o, {
            innerRef: l,
            target: c,
            href: h,
            isActive: y,
            navigate: b
        }, p);
    };
    function u(t) {
        var r = t.innerRef, e = t.target, n = t.children, o = t.href, i = t.isActive, u = t.navigate;
        return a("a", {
            ref: r,
            target: e,
            href: o,
            onClick: u,
            "aria-current": i ? "page" : "false"
        }, n);
    }
}

function Hn(t, r) {
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
    var e = t.router, n = t.createElement, o = t.useState, a = t.useEffect, i = qn({
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
        var a = i(), u = Hn(o, a);
        if (Xn(u)) {
            var c = u.redirect;
            Qn(e, c);
        }
        if (Xn(u)) return null;
        if (Yn(u)) {
            var f = u.component, s = u.children, l = u.props || {}, p = Object.assign({}, l, {
                params: a
            });
            return n(f, r({}, p), s);
        }
        return null;
    };
}

function to(t) {
    var r = t.router, e = t.ref, n = t.onMounted, o = t.onUnmounted, a = t.readonly;
    return function() {
        var t = e(r.getparams()), i = nt((function(r) {
            t.value = r;
        }));
        return n((function() {
            r.mount(), r.on("params", i);
        })), o((function() {
            r.unmount(), r.off("params", i), i.cancel();
        })), a(t);
    };
}

function ro(t) {
    var r = t.router, n = t.resolveComponent, o = t.defineComponent, a = t.h, i = t.ref, u = t.onMounted, c = t.onUnmounted, f = t.readonly, s = to({
        router: r,
        ref: i,
        onMounted: u,
        onUnmounted: c,
        readonly: f
    }), l = o({
        inheritAttrs: !1,
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
        inheritAttrs: !1,
        props: [ "component", "to", "target", "onClick", "innerRef" ],
        setup: function(t, o) {
            var i = o.slots, u = s();
            return function() {
                var o = t.component, c = void 0 === o ? l : o, f = t.to, s = t.onClick, p = t.target, v = t.innerRef;
                if (!f || "object" !== e(f)) throw new TypeError("object");
                var h = r.paramshref(f), y = Kn({
                    onClick: s,
                    target: p,
                    router: r,
                    to: f
                }), b = Wn(u.value, f), d = "function" == typeof v ? v : v && "object" === e(v) ? function(t) {
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
}

function eo(t) {
    var e = t.readonly, n = t.onMounted, o = t.onUnmounted, a = t.router, i = t.resolveComponent, u = t.defineComponent, c = t.h, f = t.ref, s = to({
        router: a,
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
                    return Jn(t);
                }))) throw new TypeError('{params:"function"}');
                var e = Hn(t, u.value);
                if (Xn(e)) {
                    var o = e.redirect;
                    Qn(a, o);
                }
                if (Xn(e)) return null;
                if (Yn(e)) {
                    var f = e.component, s = e.children, l = e.props || {}, p = Object.assign({}, l, {
                        params: u.value
                    }), v = "string" == typeof f ? i(f) : f;
                    return c(v, r({}, p), s);
                }
                return null;
            };
        }
    });
}

export { vt as createHashRouter, Gn as createReactLink, qn as createReactParamsHook, Zn as createReactView, ht as createSearchRouter, ro as createVueLink, to as createVueParamsHook, eo as createVueView };
//# sourceMappingURL=index.js.map
