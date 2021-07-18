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

Object.defineProperty(exports, "__esModule", {
    value: !0
});

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

var x = function(t) {
    return t ? t.slice(0, T(t) + 1).replace(P, "") : t;
}, R = S.Symbol, k = R, L = Object.prototype, z = L.hasOwnProperty, U = L.toString, M = k ? k.toStringTag : void 0;

var I = function(t) {
    var r = z.call(t, M), e = t[M];
    try {
        t[M] = void 0;
        var n = !0;
    } catch (t) {}
    var o = U.call(t);
    return n && (r ? t[M] = e : delete t[M]), o;
}, C = Object.prototype.toString;

var D = I, N = function(t) {
    return C.call(t);
}, V = R ? R.toStringTag : void 0;

var $ = function(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : V && V in Object(t) ? D(t) : N(t);
};

var F = function(t) {
    return null != t && "object" == e(t);
}, B = $, W = F;

var H = x, K = g, q = function(t) {
    return "symbol" == e(t) || W(t) && "[object Symbol]" == B(t);
}, G = /^[-+]0x[0-9a-f]+$/i, J = /^0b[01]+$/i, Q = /^0o[0-7]+$/i, X = parseInt;

var Y = g, Z = A, tt = function(t) {
    if ("number" == typeof t) return t;
    if (q(t)) return NaN;
    if (K(t)) {
        var r = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = K(r) ? r + "" : r;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = H(t);
    var e = J.test(t);
    return e || Q.test(t) ? X(t.slice(2), e ? 2 : 8) : G.test(t) ? NaN : +t;
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

var vt = function() {
    this.__data__ = [], this.size = 0;
};

var ht = function(t, r) {
    return t === r || t != t && r != r;
}, yt = ht;

var bt = function(t, r) {
    for (var e = t.length; e--; ) if (yt(t[e][0], r)) return e;
    return -1;
}, dt = bt, mt = Array.prototype.splice;

var gt = bt;

var jt = bt;

var _t = bt;

var wt = vt, St = function(t) {
    var r = this.__data__, e = dt(r, t);
    return !(e < 0) && (e == r.length - 1 ? r.pop() : mt.call(r, e, 1), --this.size, 
    !0);
}, Ot = function(t) {
    var r = this.__data__, e = gt(r, t);
    return e < 0 ? void 0 : r[e][1];
}, At = function(t) {
    return jt(this.__data__, t) > -1;
}, Et = function(t, r) {
    var e = this.__data__, n = _t(e, t);
    return n < 0 ? (++this.size, e.push([ t, r ])) : e[n][1] = r, this;
};

function Tt(t) {
    var r = -1, e = null == t ? 0 : t.length;
    for (this.clear(); ++r < e; ) {
        var n = t[r];
        this.set(n[0], n[1]);
    }
}

Tt.prototype.clear = wt, Tt.prototype.delete = St, Tt.prototype.get = Ot, Tt.prototype.has = At, 
Tt.prototype.set = Et;

var Pt = Tt, xt = Pt;

var Rt = function() {
    this.__data__ = new xt, this.size = 0;
};

var kt = function(t) {
    var r = this.__data__, e = r.delete(t);
    return this.size = r.size, e;
};

var Lt = function(t) {
    return this.__data__.get(t);
};

var zt = function(t) {
    return this.__data__.has(t);
}, Ut = $, Mt = g;

var It, Ct = function(t) {
    if (!Mt(t)) return !1;
    var r = Ut(t);
    return "[object Function]" == r || "[object GeneratorFunction]" == r || "[object AsyncFunction]" == r || "[object Proxy]" == r;
}, Dt = S["__core-js_shared__"], Nt = (It = /[^.]+$/.exec(Dt && Dt.keys && Dt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + It : "";

var Vt = function(t) {
    return !!Nt && Nt in t;
}, $t = Function.prototype.toString;

var Ft = function(t) {
    if (null != t) {
        try {
            return $t.call(t);
        } catch (t) {}
        try {
            return t + "";
        } catch (t) {}
    }
    return "";
}, Bt = Ct, Wt = Vt, Ht = g, Kt = Ft, qt = /^\[object .+?Constructor\]$/, Gt = Function.prototype, Jt = Object.prototype, Qt = Gt.toString, Xt = Jt.hasOwnProperty, Yt = RegExp("^" + Qt.call(Xt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

var Zt = function(t) {
    return !(!Ht(t) || Wt(t)) && (Bt(t) ? Yt : qt).test(Kt(t));
}, tr = function(t, r) {
    return null == t ? void 0 : t[r];
};

var rr = function(t, r) {
    var e = tr(t, r);
    return Zt(e) ? e : void 0;
}, er = rr(S, "Map"), nr = rr(Object, "create"), or = nr;

var ar = function() {
    this.__data__ = or ? or(null) : {}, this.size = 0;
};

var ir = function(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
}, ur = nr, cr = Object.prototype.hasOwnProperty;

var fr = function(t) {
    var r = this.__data__;
    if (ur) {
        var e = r[t];
        return "__lodash_hash_undefined__" === e ? void 0 : e;
    }
    return cr.call(r, t) ? r[t] : void 0;
}, sr = nr, lr = Object.prototype.hasOwnProperty;

var pr = nr;

var vr = ar, hr = ir, yr = fr, br = function(t) {
    var r = this.__data__;
    return sr ? void 0 !== r[t] : lr.call(r, t);
}, dr = function(t, r) {
    var e = this.__data__;
    return this.size += this.has(t) ? 0 : 1, e[t] = pr && void 0 === r ? "__lodash_hash_undefined__" : r, 
    this;
};

function mr(t) {
    var r = -1, e = null == t ? 0 : t.length;
    for (this.clear(); ++r < e; ) {
        var n = t[r];
        this.set(n[0], n[1]);
    }
}

mr.prototype.clear = vr, mr.prototype.delete = hr, mr.prototype.get = yr, mr.prototype.has = br, 
mr.prototype.set = dr;

var gr = mr, jr = Pt, _r = er;

var wr = function(t) {
    var r = e(t);
    return "string" == r || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t;
};

var Sr = function(t, r) {
    var e = t.__data__;
    return wr(r) ? e["string" == typeof r ? "string" : "hash"] : e.map;
}, Or = Sr;

var Ar = Sr;

var Er = Sr;

var Tr = Sr;

var Pr = function() {
    this.size = 0, this.__data__ = {
        hash: new gr,
        map: new (_r || jr),
        string: new gr
    };
}, xr = function(t) {
    var r = Or(this, t).delete(t);
    return this.size -= r ? 1 : 0, r;
}, Rr = function(t) {
    return Ar(this, t).get(t);
}, kr = function(t) {
    return Er(this, t).has(t);
}, Lr = function(t, r) {
    var e = Tr(this, t), n = e.size;
    return e.set(t, r), this.size += e.size == n ? 0 : 1, this;
};

function zr(t) {
    var r = -1, e = null == t ? 0 : t.length;
    for (this.clear(); ++r < e; ) {
        var n = t[r];
        this.set(n[0], n[1]);
    }
}

zr.prototype.clear = Pr, zr.prototype.delete = xr, zr.prototype.get = Rr, zr.prototype.has = kr, 
zr.prototype.set = Lr;

var Ur = zr, Mr = Pt, Ir = er, Cr = Ur;

var Dr = Pt, Nr = Rt, Vr = kt, $r = Lt, Fr = zt, Br = function(t, r) {
    var e = this.__data__;
    if (e instanceof Mr) {
        var n = e.__data__;
        if (!Ir || n.length < 199) return n.push([ t, r ]), this.size = ++e.size, this;
        e = this.__data__ = new Cr(n);
    }
    return e.set(t, r), this.size = e.size, this;
};

function Wr(t) {
    var r = this.__data__ = new Dr(t);
    this.size = r.size;
}

Wr.prototype.clear = Nr, Wr.prototype.delete = Vr, Wr.prototype.get = $r, Wr.prototype.has = Fr, 
Wr.prototype.set = Br;

var Hr = Wr;

var Kr = Ur, qr = function(t) {
    return this.__data__.set(t, "__lodash_hash_undefined__"), this;
}, Gr = function(t) {
    return this.__data__.has(t);
};

function Jr(t) {
    var r = -1, e = null == t ? 0 : t.length;
    for (this.__data__ = new Kr; ++r < e; ) this.add(t[r]);
}

Jr.prototype.add = Jr.prototype.push = qr, Jr.prototype.has = Gr;

var Qr = Jr, Xr = function(t, r) {
    for (var e = -1, n = null == t ? 0 : t.length; ++e < n; ) if (r(t[e], e, t)) return !0;
    return !1;
}, Yr = function(t, r) {
    return t.has(r);
};

var Zr = function(t, r, e, n, o, a) {
    var i = 1 & e, u = t.length, c = r.length;
    if (u != c && !(i && c > u)) return !1;
    var f = a.get(t), s = a.get(r);
    if (f && s) return f == r && s == t;
    var l = -1, p = !0, v = 2 & e ? new Qr : void 0;
    for (a.set(t, r), a.set(r, t); ++l < u; ) {
        var h = t[l], y = r[l];
        if (n) var b = i ? n(y, h, l, r, t, a) : n(h, y, l, t, r, a);
        if (void 0 !== b) {
            if (b) continue;
            p = !1;
            break;
        }
        if (v) {
            if (!Xr(r, (function(t, r) {
                if (!Yr(v, r) && (h === t || o(h, t, e, n, a))) return v.push(r);
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

var te = S.Uint8Array, re = ht, ee = Zr, ne = function(t) {
    var r = -1, e = Array(t.size);
    return t.forEach((function(t, n) {
        e[++r] = [ n, t ];
    })), e;
}, oe = function(t) {
    var r = -1, e = Array(t.size);
    return t.forEach((function(t) {
        e[++r] = t;
    })), e;
}, ae = R ? R.prototype : void 0, ie = ae ? ae.valueOf : void 0;

var ue = function(t, r, e, n, o, a, i) {
    switch (e) {
      case "[object DataView]":
        if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset) return !1;
        t = t.buffer, r = r.buffer;

      case "[object ArrayBuffer]":
        return !(t.byteLength != r.byteLength || !a(new te(t), new te(r)));

      case "[object Boolean]":
      case "[object Date]":
      case "[object Number]":
        return re(+t, +r);

      case "[object Error]":
        return t.name == r.name && t.message == r.message;

      case "[object RegExp]":
      case "[object String]":
        return t == r + "";

      case "[object Map]":
        var u = ne;

      case "[object Set]":
        var c = 1 & n;
        if (u || (u = oe), t.size != r.size && !c) return !1;
        var f = i.get(t);
        if (f) return f == r;
        n |= 2, i.set(t, r);
        var s = ee(u(t), u(r), n, o, a, i);
        return i.delete(t), s;

      case "[object Symbol]":
        if (ie) return ie.call(t) == ie.call(r);
    }
    return !1;
};

var ce = function(t, r) {
    for (var e = -1, n = r.length, o = t.length; ++e < n; ) t[o + e] = r[e];
    return t;
}, fe = Array.isArray, se = ce, le = fe;

var pe = function(t, r, e) {
    var n = r(t);
    return le(t) ? n : se(n, e(t));
};

var ve = function(t, r) {
    for (var e = -1, n = null == t ? 0 : t.length, o = 0, a = []; ++e < n; ) {
        var i = t[e];
        r(i, e, t) && (a[o++] = i);
    }
    return a;
}, he = function() {
    return [];
}, ye = Object.prototype.propertyIsEnumerable, be = Object.getOwnPropertySymbols, de = be ? function(t) {
    return null == t ? [] : (t = Object(t), ve(be(t), (function(r) {
        return ye.call(t, r);
    })));
} : he;

var me = function(t, r) {
    for (var e = -1, n = Array(t); ++e < t; ) n[e] = r(e);
    return n;
}, ge = $, je = F;

var _e = function(t) {
    return je(t) && "[object Arguments]" == ge(t);
}, we = F, Se = Object.prototype, Oe = Se.hasOwnProperty, Ae = Se.propertyIsEnumerable, Ee = _e(function() {
    return arguments;
}()) ? _e : function(t) {
    return we(t) && Oe.call(t, "callee") && !Ae.call(t, "callee");
}, Te = {
    exports: {}
};

var Pe = function() {
    return !1;
};

!function(t, r) {
    var e = S, n = Pe, o = r && !r.nodeType && r, a = o && t && !t.nodeType && t, i = a && a.exports === o ? e.Buffer : void 0, u = (i ? i.isBuffer : void 0) || n;
    t.exports = u;
}(Te, Te.exports);

var xe = /^(?:0|[1-9]\d*)$/;

var Re = function(t, r) {
    var n = e(t);
    return !!(r = null == r ? 9007199254740991 : r) && ("number" == n || "symbol" != n && xe.test(t)) && t > -1 && t % 1 == 0 && t < r;
};

var ke = function(t) {
    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
}, Le = $, ze = ke, Ue = F, Me = {};

Me["[object Float32Array]"] = Me["[object Float64Array]"] = Me["[object Int8Array]"] = Me["[object Int16Array]"] = Me["[object Int32Array]"] = Me["[object Uint8Array]"] = Me["[object Uint8ClampedArray]"] = Me["[object Uint16Array]"] = Me["[object Uint32Array]"] = !0, 
Me["[object Arguments]"] = Me["[object Array]"] = Me["[object ArrayBuffer]"] = Me["[object Boolean]"] = Me["[object DataView]"] = Me["[object Date]"] = Me["[object Error]"] = Me["[object Function]"] = Me["[object Map]"] = Me["[object Number]"] = Me["[object Object]"] = Me["[object RegExp]"] = Me["[object Set]"] = Me["[object String]"] = Me["[object WeakMap]"] = !1;

var Ie = function(t) {
    return Ue(t) && ze(t.length) && !!Me[Le(t)];
};

var Ce = function(t) {
    return function(r) {
        return t(r);
    };
}, De = {
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
}(De, De.exports);

var Ne = Ie, Ve = Ce, $e = De.exports, Fe = $e && $e.isTypedArray, Be = Fe ? Ve(Fe) : Ne, We = me, He = Ee, Ke = fe, qe = Te.exports, Ge = Re, Je = Be, Qe = Object.prototype.hasOwnProperty;

var Xe = function(t, r) {
    var e = Ke(t), n = !e && He(t), o = !e && !n && qe(t), a = !e && !n && !o && Je(t), i = e || n || o || a, u = i ? We(t.length, String) : [], c = u.length;
    for (var f in t) !r && !Qe.call(t, f) || i && ("length" == f || o && ("offset" == f || "parent" == f) || a && ("buffer" == f || "byteLength" == f || "byteOffset" == f) || Ge(f, c)) || u.push(f);
    return u;
}, Ye = Object.prototype;

var Ze = function(t) {
    var r = t && t.constructor;
    return t === ("function" == typeof r && r.prototype || Ye);
};

var tn = function(t, r) {
    return function(e) {
        return t(r(e));
    };
}(Object.keys, Object), rn = Ze, en = tn, nn = Object.prototype.hasOwnProperty;

var on = Ct, an = ke;

var un = Xe, cn = function(t) {
    if (!rn(t)) return en(t);
    var r = [];
    for (var e in Object(t)) nn.call(t, e) && "constructor" != e && r.push(e);
    return r;
}, fn = function(t) {
    return null != t && an(t.length) && !on(t);
};

var sn = pe, ln = de, pn = function(t) {
    return fn(t) ? un(t) : cn(t);
};

var vn = function(t) {
    return sn(t, pn, ln);
}, hn = Object.prototype.hasOwnProperty;

var yn = function(t, r, e, n, o, a) {
    var i = 1 & e, u = vn(t), c = u.length;
    if (c != vn(r).length && !i) return !1;
    for (var f = c; f--; ) {
        var s = u[f];
        if (!(i ? s in r : hn.call(r, s))) return !1;
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
}, bn = rr(S, "DataView"), dn = er, mn = rr(S, "Promise"), gn = rr(S, "Set"), jn = rr(S, "WeakMap"), _n = $, wn = Ft, Sn = wn(bn), On = wn(dn), An = wn(mn), En = wn(gn), Tn = wn(jn), Pn = _n;

(bn && "[object DataView]" != Pn(new bn(new ArrayBuffer(1))) || dn && "[object Map]" != Pn(new dn) || mn && "[object Promise]" != Pn(mn.resolve()) || gn && "[object Set]" != Pn(new gn) || jn && "[object WeakMap]" != Pn(new jn)) && (Pn = function(t) {
    var r = _n(t), e = "[object Object]" == r ? t.constructor : void 0, n = e ? wn(e) : "";
    if (n) switch (n) {
      case Sn:
        return "[object DataView]";

      case On:
        return "[object Map]";

      case An:
        return "[object Promise]";

      case En:
        return "[object Set]";

      case Tn:
        return "[object WeakMap]";
    }
    return r;
});

var xn = Hr, Rn = Zr, kn = ue, Ln = yn, zn = Pn, Un = fe, Mn = Te.exports, In = Be, Cn = "[object Object]", Dn = Object.prototype.hasOwnProperty;

var Nn = function(t, r, e, n, o, a) {
    var i = Un(t), u = Un(r), c = i ? "[object Array]" : zn(t), f = u ? "[object Array]" : zn(r), s = (c = "[object Arguments]" == c ? Cn : c) == Cn, l = (f = "[object Arguments]" == f ? Cn : f) == Cn, p = c == f;
    if (p && Mn(t)) {
        if (!Mn(r)) return !1;
        i = !0, s = !1;
    }
    if (p && !s) return a || (a = new xn), i || In(t) ? Rn(t, r, e, n, o, a) : kn(t, r, c, e, n, o, a);
    if (!(1 & e)) {
        var v = s && Dn.call(t, "__wrapped__"), h = l && Dn.call(r, "__wrapped__");
        if (v || h) {
            var y = v ? t.value() : t, b = h ? r.value() : r;
            return a || (a = new xn), o(y, b, e, n, a);
        }
    }
    return !!p && (a || (a = new xn), Ln(t, r, e, n, o, a));
}, Vn = F;

var $n = function t(r, e, n, o, a) {
    return r === e || (null == r || null == e || !Vn(r) && !Vn(e) ? r != r && e != e : Nn(r, e, n, o, t, a));
};

var Fn = function(t, r) {
    return $n(t, r);
};

function Bn(t) {
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

function Wn(t) {
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

function Kn(t) {
    return !(!t || "object" !== e(t) || "function" != typeof t.params);
}

function qn(t, r) {
    if (!r) throw new TypeError("object,function");
    if ("function" != typeof r) {
        if ("object" !== e(r)) throw new TypeError("object,function");
        t.setparams(r);
    } else t.transformparams(r);
}

function Gn(t) {
    return !("function" != typeof (null == t ? void 0 : t.params) || null == t || !t.redirect);
}

function Jn(t) {
    return !("function" != typeof (null == t ? void 0 : t.params) || null == t || !t.component);
}

function Qn(t) {
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

exports.createHashRouter = function() {
    return pt("hash");
}, exports.createReactLink = function(t) {
    var r = t.router, n = t.useState, o = t.useEffect, a = t.createElement, i = Wn({
        router: r,
        useState: n,
        useEffect: o
    });
    return function(t) {
        var n = t.component, o = void 0 === n ? u : n, c = t.target, f = t.to, s = t.onClick, l = t.innerRef, p = t.children, v = i();
        if (!f || "object" !== e(f)) throw new TypeError("object");
        var h = r.paramshref(f), y = Fn(v, f), b = Bn({
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
}, exports.createReactParamsHook = Wn, exports.createReactView = function(t) {
    var e = t.router, n = t.createElement, o = t.useState, a = t.useEffect, i = Wn({
        router: e,
        useState: o,
        useEffect: a
    });
    return function(t) {
        var o = t.routes;
        if (!Array.isArray(o)) throw new TypeError("array");
        if (!o.every((function(t) {
            return Kn(t);
        }))) throw new TypeError('{params:"function"}');
        var a = i(), u = Hn(o, a);
        if (Gn(u)) {
            var c = u.redirect;
            qn(e, c);
        }
        if (Gn(u)) return null;
        if (Jn(u)) {
            var f = u.component, s = Object.assign({}, {}, {
                params: a
            });
            return n(f, r({}, s));
        }
        return null;
    };
}, exports.createSearchRouter = function() {
    return pt("search");
}, exports.createVueLink = function(t) {
    var r = t.router, n = t.resolveComponent, o = t.defineComponent, a = t.h, i = t.ref, u = t.onMounted, c = t.onUnmounted, f = t.readonly, s = Qn({
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
                var h = r.paramshref(f), y = Bn({
                    onClick: s,
                    target: p,
                    router: r,
                    to: f
                }), b = Fn(u.value, f), d = "function" == typeof v ? v : v && "object" === e(v) ? function(t) {
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
}, exports.createVueParamsHook = Qn, exports.createVueView = function(t) {
    var e = t.readonly, n = t.onMounted, o = t.onUnmounted, a = t.router, i = t.resolveComponent, u = t.defineComponent, c = t.h, f = t.ref, s = Qn({
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
                    return Kn(t);
                }))) throw new TypeError('{params:"function"}');
                var e = Hn(t, u.value);
                if (Gn(e)) {
                    var o = e.redirect;
                    qn(a, o);
                }
                if (Gn(e)) return null;
                if (Jn(e)) {
                    var f = e.component, s = Object.assign({}, {}, {
                        params: u.value
                    }), l = "string" == typeof f ? i(f) : f;
                    return c(l, r({}, s));
                }
                return null;
            };
        }
    });
};
//# sourceMappingURL=index.cjs.map
