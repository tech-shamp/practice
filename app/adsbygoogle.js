(function (sttc) {
  /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
  var n;
  function aa(a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }
  var ba =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };
  function ca(a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var da = ca(this),
    ea = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
    p = {},
    fa = {};
  function r(a, b) {
    var c = fa[b];
    if (null == c) return a[b];
    c = a[c];
    return void 0 !== c ? c : a[b];
  }
  function ha(a, b, c) {
    if (b)
      a: {
        var d = a.split(".");
        a = 1 === d.length;
        var e = d[0],
          f;
        !a && e in p ? (f = p) : (f = da);
        for (e = 0; e < d.length - 1; e++) {
          var g = d[e];
          if (!(g in f)) break a;
          f = f[g];
        }
        d = d[d.length - 1];
        c = ea && "es6" === c ? f[d] : null;
        b = b(c);
        null != b &&
          (a
            ? ba(p, d, { configurable: !0, writable: !0, value: b })
            : b !== c &&
              (void 0 === fa[d] &&
                ((a = (1e9 * Math.random()) >>> 0),
                (fa[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d)),
              ba(f, fa[d], { configurable: !0, writable: !0, value: b })));
      }
  }
  ha(
    "Symbol",
    function (a) {
      function b(f) {
        if (this instanceof b)
          throw new TypeError("Symbol is not a constructor");
        return new c(d + (f || "") + "_" + e++, f);
      }
      function c(f, g) {
        this.h = f;
        ba(this, "description", { configurable: !0, writable: !0, value: g });
      }
      if (a) return a;
      c.prototype.toString = function () {
        return this.h;
      };
      var d = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
        e = 0;
      return b;
    },
    "es6"
  );
  ha(
    "Symbol.iterator",
    function (a) {
      if (a) return a;
      a = (0, p.Symbol)("Symbol.iterator");
      for (
        var b =
            "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
              " "
            ),
          c = 0;
        c < b.length;
        c++
      ) {
        var d = da[b[c]];
        "function" === typeof d &&
          "function" != typeof d.prototype[a] &&
          ba(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
              return ia(aa(this));
            },
          });
      }
      return a;
    },
    "es6"
  );
  function ia(a) {
    a = { next: a };
    a[r(p.Symbol, "iterator")] = function () {
      return this;
    };
    return a;
  }
  function ja(a) {
    return (a.raw = a);
  }
  function u(a) {
    var b =
      "undefined" != typeof p.Symbol &&
      r(p.Symbol, "iterator") &&
      a[r(p.Symbol, "iterator")];
    return b ? b.call(a) : { next: aa(a) };
  }
  function ka(a) {
    if (!(a instanceof Array)) {
      a = u(a);
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
  }
  function la(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  var ma =
    ea && "function" == typeof r(Object, "assign")
      ? r(Object, "assign")
      : function (a, b) {
          for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) la(d, e) && (a[e] = d[e]);
          }
          return a;
        };
  ha(
    "Object.assign",
    function (a) {
      return a || ma;
    },
    "es6"
  );
  var na =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    oa;
  if (ea && "function" == typeof Object.setPrototypeOf)
    oa = Object.setPrototypeOf;
  else {
    var pa;
    a: {
      var qa = { a: !0 },
        ra = {};
      try {
        ra.__proto__ = qa;
        pa = ra.a;
        break a;
      } catch (a) {}
      pa = !1;
    }
    oa = pa
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var sa = oa;
  function v(a, b) {
    a.prototype = na(b.prototype);
    a.prototype.constructor = a;
    if (sa) sa(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.Ub = b.prototype;
  }
  function ta() {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
      b[c - a] = arguments[c];
    return b;
  }
  ha(
    "Promise",
    function (a) {
      function b(g) {
        this.h = 0;
        this.j = void 0;
        this.i = [];
        this.G = !1;
        var h = this.l();
        try {
          g(h.resolve, h.reject);
        } catch (k) {
          h.reject(k);
        }
      }
      function c() {
        this.h = null;
      }
      function d(g) {
        return g instanceof b
          ? g
          : new b(function (h) {
              h(g);
            });
      }
      if (a) return a;
      c.prototype.i = function (g) {
        if (null == this.h) {
          this.h = [];
          var h = this;
          this.j(function () {
            h.m();
          });
        }
        this.h.push(g);
      };
      var e = da.setTimeout;
      c.prototype.j = function (g) {
        e(g, 0);
      };
      c.prototype.m = function () {
        for (; this.h && this.h.length; ) {
          var g = this.h;
          this.h = [];
          for (var h = 0; h < g.length; ++h) {
            var k = g[h];
            g[h] = null;
            try {
              k();
            } catch (l) {
              this.l(l);
            }
          }
        }
        this.h = null;
      };
      c.prototype.l = function (g) {
        this.j(function () {
          throw g;
        });
      };
      b.prototype.l = function () {
        function g(l) {
          return function (m) {
            k || ((k = !0), l.call(h, m));
          };
        }
        var h = this,
          k = !1;
        return { resolve: g(this.P), reject: g(this.m) };
      };
      b.prototype.P = function (g) {
        if (g === this)
          this.m(new TypeError("A Promise cannot resolve to itself"));
        else if (g instanceof b) this.U(g);
        else {
          a: switch (typeof g) {
            case "object":
              var h = null != g;
              break a;
            case "function":
              h = !0;
              break a;
            default:
              h = !1;
          }
          h ? this.O(g) : this.A(g);
        }
      };
      b.prototype.O = function (g) {
        var h = void 0;
        try {
          h = g.then;
        } catch (k) {
          this.m(k);
          return;
        }
        "function" == typeof h ? this.ga(h, g) : this.A(g);
      };
      b.prototype.m = function (g) {
        this.C(2, g);
      };
      b.prototype.A = function (g) {
        this.C(1, g);
      };
      b.prototype.C = function (g, h) {
        if (0 != this.h)
          throw Error(
            "Cannot settle(" +
              g +
              ", " +
              h +
              "): Promise already settled in state" +
              this.h
          );
        this.h = g;
        this.j = h;
        2 === this.h && this.R();
        this.H();
      };
      b.prototype.R = function () {
        var g = this;
        e(function () {
          if (g.N()) {
            var h = da.console;
            "undefined" !== typeof h && h.error(g.j);
          }
        }, 1);
      };
      b.prototype.N = function () {
        if (this.G) return !1;
        var g = da.CustomEvent,
          h = da.Event,
          k = da.dispatchEvent;
        if ("undefined" === typeof k) return !0;
        "function" === typeof g
          ? (g = new g("unhandledrejection", { cancelable: !0 }))
          : "function" === typeof h
          ? (g = new h("unhandledrejection", { cancelable: !0 }))
          : ((g = da.document.createEvent("CustomEvent")),
            g.initCustomEvent("unhandledrejection", !1, !0, g));
        g.promise = this;
        g.reason = this.j;
        return k(g);
      };
      b.prototype.H = function () {
        if (null != this.i) {
          for (var g = 0; g < this.i.length; ++g) f.i(this.i[g]);
          this.i = null;
        }
      };
      var f = new c();
      b.prototype.U = function (g) {
        var h = this.l();
        g.ia(h.resolve, h.reject);
      };
      b.prototype.ga = function (g, h) {
        var k = this.l();
        try {
          g.call(h, k.resolve, k.reject);
        } catch (l) {
          k.reject(l);
        }
      };
      b.prototype.then = function (g, h) {
        function k(t, y) {
          return "function" == typeof t
            ? function (F) {
                try {
                  l(t(F));
                } catch (z) {
                  m(z);
                }
              }
            : y;
        }
        var l,
          m,
          q = new b(function (t, y) {
            l = t;
            m = y;
          });
        this.ia(k(g, l), k(h, m));
        return q;
      };
      b.prototype.catch = function (g) {
        return this.then(void 0, g);
      };
      b.prototype.ia = function (g, h) {
        function k() {
          switch (l.h) {
            case 1:
              g(l.j);
              break;
            case 2:
              h(l.j);
              break;
            default:
              throw Error("Unexpected state: " + l.h);
          }
        }
        var l = this;
        null == this.i ? f.i(k) : this.i.push(k);
        this.G = !0;
      };
      b.resolve = d;
      b.reject = function (g) {
        return new b(function (h, k) {
          k(g);
        });
      };
      b.race = function (g) {
        return new b(function (h, k) {
          for (var l = u(g), m = l.next(); !m.done; m = l.next())
            d(m.value).ia(h, k);
        });
      };
      b.all = function (g) {
        var h = u(g),
          k = h.next();
        return k.done
          ? d([])
          : new b(function (l, m) {
              function q(F) {
                return function (z) {
                  t[F] = z;
                  y--;
                  0 == y && l(t);
                };
              }
              var t = [],
                y = 0;
              do
                t.push(void 0),
                  y++,
                  d(k.value).ia(q(t.length - 1), m),
                  (k = h.next());
              while (!k.done);
            });
      };
      return b;
    },
    "es6"
  );
  ha(
    "Array.prototype.find",
    function (a) {
      return a
        ? a
        : function (b, c) {
            a: {
              var d = this;
              d instanceof String && (d = String(d));
              for (var e = d.length, f = 0; f < e; f++) {
                var g = d[f];
                if (b.call(c, g, f, d)) {
                  b = g;
                  break a;
                }
              }
              b = void 0;
            }
            return b;
          };
    },
    "es6"
  );
  ha(
    "WeakMap",
    function (a) {
      function b(g) {
        this.h = (f += Math.random() + 1).toString();
        if (g) {
          g = u(g);
          for (var h; !(h = g.next()).done; )
            (h = h.value), this.set(h[0], h[1]);
        }
      }
      function c() {}
      function d(g) {
        var h = typeof g;
        return ("object" === h && null !== g) || "function" === h;
      }
      if (
        (function () {
          if (!a || !Object.seal) return !1;
          try {
            var g = Object.seal({}),
              h = Object.seal({}),
              k = new a([
                [g, 2],
                [h, 3],
              ]);
            if (2 != k.get(g) || 3 != k.get(h)) return !1;
            k.delete(g);
            k.set(h, 4);
            return !k.has(g) && 4 == k.get(h);
          } catch (l) {
            return !1;
          }
        })()
      )
        return a;
      var e = "$jscomp_hidden_" + Math.random(),
        f = 0;
      b.prototype.set = function (g, h) {
        if (!d(g)) throw Error("Invalid WeakMap key");
        if (!la(g, e)) {
          var k = new c();
          ba(g, e, { value: k });
        }
        if (!la(g, e)) throw Error("WeakMap key fail: " + g);
        g[e][this.h] = h;
        return this;
      };
      b.prototype.get = function (g) {
        return d(g) && la(g, e) ? g[e][this.h] : void 0;
      };
      b.prototype.has = function (g) {
        return d(g) && la(g, e) && la(g[e], this.h);
      };
      b.prototype.delete = function (g) {
        return d(g) && la(g, e) && la(g[e], this.h) ? delete g[e][this.h] : !1;
      };
      return b;
    },
    "es6"
  );
  ha(
    "Map",
    function (a) {
      function b() {
        var h = {};
        return (h.L = h.next = h.head = h);
      }
      function c(h, k) {
        var l = h.h;
        return ia(function () {
          if (l) {
            for (; l.head != h.h; ) l = l.L;
            for (; l.next != l.head; )
              return (l = l.next), { done: !1, value: k(l) };
            l = null;
          }
          return { done: !0, value: void 0 };
        });
      }
      function d(h, k) {
        var l = k && typeof k;
        "object" == l || "function" == l
          ? f.has(k)
            ? (l = f.get(k))
            : ((l = "" + ++g), f.set(k, l))
          : (l = "p_" + k);
        var m = h.i[l];
        if (m && la(h.i, l))
          for (h = 0; h < m.length; h++) {
            var q = m[h];
            if ((k !== k && q.key !== q.key) || k === q.key)
              return { id: l, list: m, index: h, B: q };
          }
        return { id: l, list: m, index: -1, B: void 0 };
      }
      function e(h) {
        this.i = {};
        this.h = b();
        this.size = 0;
        if (h) {
          h = u(h);
          for (var k; !(k = h.next()).done; )
            (k = k.value), this.set(k[0], k[1]);
        }
      }
      if (
        (function () {
          if (
            !a ||
            "function" != typeof a ||
            !a.prototype.entries ||
            "function" != typeof Object.seal
          )
            return !1;
          try {
            var h = Object.seal({ x: 4 }),
              k = new a(u([[h, "s"]]));
            if (
              "s" != k.get(h) ||
              1 != k.size ||
              k.get({ x: 4 }) ||
              k.set({ x: 4 }, "t") != k ||
              2 != k.size
            )
              return !1;
            var l = k.entries(),
              m = l.next();
            if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
            m = l.next();
            return m.done ||
              4 != m.value[0].x ||
              "t" != m.value[1] ||
              !l.next().done
              ? !1
              : !0;
          } catch (q) {
            return !1;
          }
        })()
      )
        return a;
      var f = new p.WeakMap();
      e.prototype.set = function (h, k) {
        h = 0 === h ? 0 : h;
        var l = d(this, h);
        l.list || (l.list = this.i[l.id] = []);
        l.B
          ? (l.B.value = k)
          : ((l.B = {
              next: this.h,
              L: this.h.L,
              head: this.h,
              key: h,
              value: k,
            }),
            l.list.push(l.B),
            (this.h.L.next = l.B),
            (this.h.L = l.B),
            this.size++);
        return this;
      };
      e.prototype.delete = function (h) {
        h = d(this, h);
        return h.B && h.list
          ? (h.list.splice(h.index, 1),
            h.list.length || delete this.i[h.id],
            (h.B.L.next = h.B.next),
            (h.B.next.L = h.B.L),
            (h.B.head = null),
            this.size--,
            !0)
          : !1;
      };
      e.prototype.clear = function () {
        this.i = {};
        this.h = this.h.L = b();
        this.size = 0;
      };
      e.prototype.has = function (h) {
        return !!d(this, h).B;
      };
      e.prototype.get = function (h) {
        return (h = d(this, h).B) && h.value;
      };
      e.prototype.entries = function () {
        return c(this, function (h) {
          return [h.key, h.value];
        });
      };
      e.prototype.keys = function () {
        return c(this, function (h) {
          return h.key;
        });
      };
      e.prototype.values = function () {
        return c(this, function (h) {
          return h.value;
        });
      };
      e.prototype.forEach = function (h, k) {
        for (var l = this.entries(), m; !(m = l.next()).done; )
          (m = m.value), h.call(k, m[1], m[0], this);
      };
      e.prototype[r(p.Symbol, "iterator")] = e.prototype.entries;
      var g = 0;
      return e;
    },
    "es6"
  );
  function ua(a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return { value: b(f, a[f]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[r(p.Symbol, "iterator")] = function () {
      return e;
    };
    return e;
  }
  ha(
    "Number.isNaN",
    function (a) {
      return a
        ? a
        : function (b) {
            return "number" === typeof b && isNaN(b);
          };
    },
    "es6"
  );
  ha(
    "String.prototype.startsWith",
    function (a) {
      return a
        ? a
        : function (b, c) {
            if (null == this)
              throw new TypeError(
                "The 'this' value for String.prototype.startsWith must not be null or undefined"
              );
            if (b instanceof RegExp)
              throw new TypeError(
                "First argument to String.prototype.startsWith must not be a regular expression"
              );
            var d = this.length,
              e = b.length;
            c = Math.max(0, Math.min(c | 0, this.length));
            for (var f = 0; f < e && c < d; )
              if (this[c++] != b[f++]) return !1;
            return f >= e;
          };
    },
    "es6"
  );
  ha(
    "globalThis",
    function (a) {
      return a || da;
    },
    "es_2020"
  );
  ha(
    "Set",
    function (a) {
      function b(c) {
        this.h = new p.Map();
        if (c) {
          c = u(c);
          for (var d; !(d = c.next()).done; ) this.add(d.value);
        }
        this.size = this.h.size;
      }
      if (
        (function () {
          if (
            !a ||
            "function" != typeof a ||
            !a.prototype.entries ||
            "function" != typeof Object.seal
          )
            return !1;
          try {
            var c = Object.seal({ x: 4 }),
              d = new a(u([c]));
            if (
              !d.has(c) ||
              1 != d.size ||
              d.add(c) != d ||
              1 != d.size ||
              d.add({ x: 4 }) != d ||
              2 != d.size
            )
              return !1;
            var e = d.entries(),
              f = e.next();
            if (f.done || f.value[0] != c || f.value[1] != c) return !1;
            f = e.next();
            return f.done ||
              f.value[0] == c ||
              4 != f.value[0].x ||
              f.value[1] != f.value[0]
              ? !1
              : e.next().done;
          } catch (g) {
            return !1;
          }
        })()
      )
        return a;
      b.prototype.add = function (c) {
        c = 0 === c ? 0 : c;
        this.h.set(c, c);
        this.size = this.h.size;
        return this;
      };
      b.prototype.delete = function (c) {
        c = this.h.delete(c);
        this.size = this.h.size;
        return c;
      };
      b.prototype.clear = function () {
        this.h.clear();
        this.size = 0;
      };
      b.prototype.has = function (c) {
        return this.h.has(c);
      };
      b.prototype.entries = function () {
        return this.h.entries();
      };
      b.prototype.values = function () {
        return r(this.h, "values").call(this.h);
      };
      b.prototype.keys = r(b.prototype, "values");
      b.prototype[r(p.Symbol, "iterator")] = r(b.prototype, "values");
      b.prototype.forEach = function (c, d) {
        var e = this;
        this.h.forEach(function (f) {
          return c.call(d, f, f, e);
        });
      };
      return b;
    },
    "es6"
  );
  ha(
    "Array.prototype.keys",
    function (a) {
      return a
        ? a
        : function () {
            return ua(this, function (b) {
              return b;
            });
          };
    },
    "es6"
  );
  ha(
    "Array.prototype.values",
    function (a) {
      return a
        ? a
        : function () {
            return ua(this, function (b, c) {
              return c;
            });
          };
    },
    "es8"
  );
  ha(
    "Promise.prototype.finally",
    function (a) {
      return a
        ? a
        : function (b) {
            return this.then(
              function (c) {
                return p.Promise.resolve(b()).then(function () {
                  return c;
                });
              },
              function (c) {
                return p.Promise.resolve(b()).then(function () {
                  throw c;
                });
              }
            );
          };
    },
    "es9"
  );
  var w = this || self;
  function va(a) {
    a = a.split(".");
    for (var b = w, c = 0; c < a.length; c++)
      if (((b = b[a[c]]), null == b)) return null;
    return b;
  }
  function wa(a) {
    var b = typeof a;
    return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  }
  function xa(a) {
    var b = wa(a);
    return "array" == b || ("object" == b && "number" == typeof a.length);
  }
  function ya(a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  }
  function za(a) {
    return (
      (Object.prototype.hasOwnProperty.call(a, Aa) && a[Aa]) || (a[Aa] = ++Ba)
    );
  }
  var Aa = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    Ba = 0;
  function Ca(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function Da(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }
  function Ea(a, b, c) {
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf("native code")
      ? (Ea = Ca)
      : (Ea = Da);
    return Ea.apply(null, arguments);
  }
  function Fa(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  function Ga(a) {
    var b = ["__uspapi"],
      c = w;
    b[0] in c ||
      "undefined" == typeof c.execScript ||
      c.execScript("var " + b[0]);
    for (var d; b.length && (d = b.shift()); )
      b.length || void 0 === a
        ? c[d] && c[d] !== Object.prototype[d]
          ? (c = c[d])
          : (c = c[d] = {})
        : (c[d] = a);
  }
  function Ha(a) {
    return a;
  }
  var Ia = new Date().getTime();
  function Ja(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  }
  function Ka(a, b) {
    var c = 0;
    a = Ja(String(a)).split(".");
    b = Ja(String(b)).split(".");
    for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
      var f = a[e] || "",
        g = b[e] || "";
      do {
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
        if (0 == f[0].length && 0 == g[0].length) break;
        c =
          La(
            0 == f[1].length ? 0 : parseInt(f[1], 10),
            0 == g[1].length ? 0 : parseInt(g[1], 10)
          ) ||
          La(0 == f[2].length, 0 == g[2].length) ||
          La(f[2], g[2]);
        f = f[3];
        g = g[3];
      } while (0 == c);
    }
    return c;
  }
  function La(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function Ma() {
    var a = w.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  function x(a) {
    return -1 != Ma().indexOf(a);
  }
  function Na() {
    return x("Trident") || x("MSIE");
  }
  function Oa() {
    return ((x("Chrome") || x("CriOS")) && !x("Edge")) || x("Silk");
  }
  function Pa(a) {
    var b = {};
    a.forEach(function (c) {
      b[c[0]] = c[1];
    });
    return function (c) {
      return (
        b[
          r(c, "find").call(c, function (d) {
            return d in b;
          })
        ] || ""
      );
    };
  }
  function Qa() {
    var a = Ma();
    if (Na()) {
      var b = /rv: *([\d\.]*)/.exec(a);
      if (b && b[1]) a = b[1];
      else {
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
          if (((a = /Trident\/(\d.\d)/.exec(a)), "7.0" == c[1]))
            if (a && a[1])
              switch (a[1]) {
                case "4.0":
                  b = "8.0";
                  break;
                case "5.0":
                  b = "9.0";
                  break;
                case "6.0":
                  b = "10.0";
                  break;
                case "7.0":
                  b = "11.0";
              }
            else b = "7.0";
          else b = c[1];
        a = b;
      }
      return a;
    }
    c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
    b = [];
    for (var d; (d = c.exec(a)); ) b.push([d[1], d[2], d[3] || void 0]);
    a = Pa(b);
    return x("Opera")
      ? a(["Version", "Opera"])
      : x("Edge")
      ? a(["Edge"])
      : x("Edg/")
      ? a(["Edg"])
      : x("Silk")
      ? a(["Silk"])
      : Oa()
      ? a(["Chrome", "CriOS", "HeadlessChrome"])
      : ((a = b[2]) && a[1]) || "";
  }
  function Ra(a, b) {
    if ("string" === typeof a)
      return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  }
  function Sa(a, b) {
    for (
      var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0;
      e < c;
      e++
    )
      e in d && b.call(void 0, d[e], e, a);
  }
  function Ta(a, b) {
    for (
      var c = a.length,
        d = [],
        e = 0,
        f = "string" === typeof a ? a.split("") : a,
        g = 0;
      g < c;
      g++
    )
      if (g in f) {
        var h = f[g];
        b.call(void 0, h, g, a) && (d[e++] = h);
      }
    return d;
  }
  function Ua(a, b) {
    for (
      var c = a.length,
        d = Array(c),
        e = "string" === typeof a ? a.split("") : a,
        f = 0;
      f < c;
      f++
    )
      f in e && (d[f] = b.call(void 0, e[f], f, a));
    return d;
  }
  function Va(a, b) {
    for (
      var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0;
      e < c;
      e++
    )
      if (e in d && b.call(void 0, d[e], e, a)) return !0;
    return !1;
  }
  function Wa(a, b) {
    a: {
      for (
        var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0;
        e < c;
        e++
      )
        if (e in d && b.call(void 0, d[e], e, a)) {
          b = e;
          break a;
        }
      b = -1;
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }
  function Xa(a, b) {
    a: {
      for (
        var c = "string" === typeof a ? a.split("") : a, d = a.length - 1;
        0 <= d;
        d--
      )
        if (d in c && b.call(void 0, c[d], d, a)) {
          b = d;
          break a;
        }
      b = -1;
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }
  function Ya(a, b) {
    return 0 <= Ra(a, b);
  }
  function Za(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function $a(a) {
    $a[" "](a);
    return a;
  }
  $a[" "] = function () {};
  var ab = Na();
  !x("Android") || Oa();
  Oa();
  !x("Safari") || Oa();
  var bb = {},
    cb = null;
  var db = "undefined" !== typeof Uint8Array;
  var eb =
    "function" === typeof p.Symbol && "symbol" === typeof (0, p.Symbol)()
      ? (0, p.Symbol)(void 0)
      : void 0;
  function fb(a, b) {
    Object.isFrozen(a) ||
      (eb
        ? (a[eb] |= b)
        : void 0 !== a.ma
        ? (a.ma |= b)
        : Object.defineProperties(a, {
            ma: { value: b, configurable: !0, writable: !0, enumerable: !1 },
          }));
  }
  function gb(a) {
    var b;
    eb ? (b = a[eb]) : (b = a.ma);
    return null == b ? 0 : b;
  }
  function hb(a) {
    fb(a, 1);
    return a;
  }
  function ib(a) {
    return Array.isArray(a) ? !!(gb(a) & 2) : !1;
  }
  function jb(a) {
    if (!Array.isArray(a)) throw Error("cannot mark non-array as immutable");
    fb(a, 2);
  }
  function kb(a) {
    return (
      null !== a &&
      "object" === typeof a &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  var lb,
    mb = Object.freeze(hb([]));
  function nb(a) {
    if (ib(a.v)) throw Error("Cannot mutate an immutable Message");
  }
  var ob =
    "undefined" != typeof p.Symbol &&
    "undefined" != typeof p.Symbol.hasInstance;
  function pb(a) {
    return { value: a, configurable: !1, writable: !1, enumerable: !1 };
  }
  function qb(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "object":
        if (
          a &&
          !Array.isArray(a) &&
          db &&
          null != a &&
          a instanceof Uint8Array
        ) {
          var b;
          void 0 === b && (b = 0);
          if (!cb) {
            cb = {};
            for (
              var c =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                    ""
                  ),
                d = ["+/=", "+/", "-_=", "-_.", "-_"],
                e = 0;
              5 > e;
              e++
            ) {
              var f = c.concat(d[e].split(""));
              bb[e] = f;
              for (var g = 0; g < f.length; g++) {
                var h = f[g];
                void 0 === cb[h] && (cb[h] = g);
              }
            }
          }
          b = bb[b];
          c = Array(Math.floor(a.length / 3));
          d = b[64] || "";
          for (e = f = 0; f < a.length - 2; f += 3) {
            var k = a[f],
              l = a[f + 1];
            h = a[f + 2];
            g = b[k >> 2];
            k = b[((k & 3) << 4) | (l >> 4)];
            l = b[((l & 15) << 2) | (h >> 6)];
            h = b[h & 63];
            c[e++] = g + k + l + h;
          }
          g = 0;
          h = d;
          switch (a.length - f) {
            case 2:
              (g = a[f + 1]), (h = b[(g & 15) << 2] || d);
            case 1:
              (a = a[f]),
                (c[e] = b[a >> 2] + b[((a & 3) << 4) | (g >> 4)] + h + d);
          }
          return c.join("");
        }
    }
    return a;
  }
  function rb(a) {
    var b = tb;
    b = void 0 === b ? ub : b;
    return vb(a, b);
  }
  function wb(a, b) {
    if (null != a) {
      if (Array.isArray(a)) a = vb(a, b);
      else if (kb(a)) {
        var c = {},
          d;
        for (d in a)
          Object.prototype.hasOwnProperty.call(a, d) && (c[d] = wb(a[d], b));
        a = c;
      } else a = b(a);
      return a;
    }
  }
  function vb(a, b) {
    for (var c = a.slice(), d = 0; d < c.length; d++) c[d] = wb(c[d], b);
    Array.isArray(a) && gb(a) & 1 && hb(c);
    return c;
  }
  function tb(a) {
    if (a && "object" == typeof a && a.toJSON) return a.toJSON();
    a = qb(a);
    return Array.isArray(a) ? rb(a) : a;
  }
  function ub(a) {
    return db && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a;
  }
  function A(a, b, c) {
    return -1 === b
      ? null
      : b >= a.l
      ? a.i
        ? a.i[b]
        : void 0
      : (void 0 === c ? 0 : c) && a.i && ((c = a.i[b]), null != c)
      ? c
      : a.v[b + a.j];
  }
  function B(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    (void 0 === e ? 0 : e) || nb(a);
    b < a.l && !d
      ? (a.v[b + a.j] = c)
      : ((a.i || (a.i = a.v[a.l + a.j] = {}))[b] = c);
    return a;
  }
  function xb(a, b, c, d) {
    c = void 0 === c ? !0 : c;
    d = void 0 === d ? !1 : d;
    var e = A(a, b, d);
    null == e && (e = mb);
    if (ib(a.v)) c && (jb(e), Object.freeze(e));
    else if (e === mb || ib(e)) (e = hb(e.slice())), B(a, b, e, d);
    return e;
  }
  function yb(a, b) {
    a = A(a, b);
    return null == a ? a : !!a;
  }
  function C(a, b, c) {
    a = A(a, b);
    return null == a ? c : a;
  }
  function D(a, b, c) {
    a = yb(a, b);
    return null == a ? (void 0 === c ? !1 : c) : a;
  }
  function zb(a, b) {
    a = A(a, b);
    a = null == a ? a : +a;
    return null == a ? 0 : a;
  }
  function Ab(a, b, c) {
    var d = void 0 === d ? !1 : d;
    return B(a, b, null == c ? hb([]) : Array.isArray(c) ? hb(c) : c, d);
  }
  function Bb(a, b, c) {
    nb(a);
    0 !== c ? B(a, b, c) : B(a, b, void 0, !1, !1);
    return a;
  }
  function Cb(a, b, c, d) {
    nb(a);
    (c = Db(a, c)) &&
      c !== b &&
      null != d &&
      (a.h && c in a.h && (a.h[c] = void 0), B(a, c));
    return B(a, b, d);
  }
  function Eb(a, b, c) {
    return Db(a, b) === c ? c : -1;
  }
  function Db(a, b) {
    for (var c = 0, d = 0; d < b.length; d++) {
      var e = b[d];
      null != A(a, e) && (0 !== c && B(a, c, void 0, !1, !0), (c = e));
    }
    return c;
  }
  function G(a, b, c) {
    if (-1 === c) return null;
    a.h || (a.h = {});
    var d = a.h[c];
    if (d) return d;
    var e = A(a, c, !1);
    if (null == e) return d;
    b = new b(e);
    ib(a.v) && jb(b.v);
    return (a.h[c] = b);
  }
  function H(a, b, c) {
    a.h || (a.h = {});
    var d = ib(a.v),
      e = a.h[c];
    if (!e) {
      var f = xb(a, c, !0, !1);
      e = [];
      d = d || ib(f);
      for (var g = 0; g < f.length; g++) (e[g] = new b(f[g])), d && jb(e[g].v);
      d && (jb(e), Object.freeze(e));
      a.h[c] = e;
    }
    return e;
  }
  function Fb(a, b, c) {
    var d = void 0 === d ? !1 : d;
    nb(a);
    a.h || (a.h = {});
    var e = c ? c.v : c;
    a.h[b] = c;
    return B(a, b, e, d);
  }
  function Gb(a, b, c, d) {
    nb(a);
    a.h || (a.h = {});
    var e = d ? d.v : d;
    a.h[b] = d;
    return Cb(a, b, c, e);
  }
  function Hb(a, b, c) {
    var d = void 0 === d ? !1 : d;
    nb(a);
    if (c) {
      var e = hb([]);
      for (var f = 0; f < c.length; f++) e[f] = c[f].v;
      a.h || (a.h = {});
      a.h[b] = c;
    } else a.h && (a.h[b] = void 0), (e = mb);
    return B(a, b, e, d);
  }
  function I(a, b) {
    return C(a, b, "");
  }
  function Ib(a, b, c) {
    return C(a, Eb(a, c, b), 0);
  }
  function Jb(a, b, c, d) {
    return G(a, b, Eb(a, d, c));
  }
  function Kb(a, b, c) {
    a || (a = Lb);
    Lb = null;
    var d = this.constructor.messageId;
    a || (a = d ? [d] : []);
    this.j = (d ? 0 : -1) - (this.constructor.h || 0);
    this.h = void 0;
    this.v = a;
    a: {
      d = this.v.length;
      a = d - 1;
      if (d && ((d = this.v[a]), kb(d))) {
        this.l = a - this.j;
        this.i = d;
        break a;
      }
      void 0 !== b && -1 < b
        ? ((this.l = Math.max(b, a + 1 - this.j)), (this.i = void 0))
        : (this.l = Number.MAX_VALUE);
    }
    if (c)
      for (b = 0; b < c.length; b++)
        if (((a = c[b]), a < this.l))
          (a += this.j),
            (d = this.v[a]) ? Array.isArray(d) && hb(d) : (this.v[a] = mb);
        else {
          d = this.i || (this.i = this.v[this.l + this.j] = {});
          var e = d[a];
          e ? Array.isArray(e) && hb(e) : (d[a] = mb);
        }
  }
  Kb.prototype.toJSON = function () {
    var a = this.v;
    return lb ? a : rb(a);
  };
  function Mb(a) {
    lb = !0;
    try {
      return JSON.stringify(a.toJSON(), Nb);
    } finally {
      lb = !1;
    }
  }
  function Ob(a, b) {
    if (null == b || "" == b) return new a();
    b = JSON.parse(b);
    if (!Array.isArray(b))
      throw Error(
        "Expected to deserialize an Array but got " + wa(b) + ": " + b
      );
    Lb = b;
    a = new a(b);
    Lb = null;
    return a;
  }
  function Nb(a, b) {
    return qb(b);
  }
  var Lb;
  function Pb() {
    Kb.apply(this, arguments);
  }
  v(Pb, Kb);
  if (ob) {
    var Qb = {};
    Object.defineProperties(
      Pb,
      ((Qb[p.Symbol.hasInstance] = pb(function () {
        throw Error("Cannot perform instanceof checks for MutableMessage");
      })),
      Qb)
    );
  }
  function J() {
    Pb.apply(this, arguments);
  }
  v(J, Pb);
  if (ob) {
    var Rb = {};
    Object.defineProperties(
      J,
      ((Rb[p.Symbol.hasInstance] = pb(Object[p.Symbol.hasInstance])), Rb)
    );
  }
  function Sb(a) {
    J.call(this, a, -1, Tb);
  }
  v(Sb, J);
  function Ub(a) {
    J.call(this, a);
  }
  v(Ub, J);
  var Tb = [2, 3];
  function Vb(a, b) {
    this.i = (a === Wb && b) || "";
    this.h = Xb;
  }
  var Xb = {},
    Wb = {};
  function Yb(a, b) {
    var c = {},
      d;
    for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c;
  }
  function Zb(a, b) {
    for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
    return !1;
  }
  function $b(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  }
  function ac(a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b;
  }
  var bc;
  function cc() {
    if (void 0 === bc) {
      var a = null,
        b = w.trustedTypes;
      if (b && b.createPolicy) {
        try {
          a = b.createPolicy("goog#html", {
            createHTML: Ha,
            createScript: Ha,
            createScriptURL: Ha,
          });
        } catch (c) {
          w.console && w.console.error(c.message);
        }
        bc = a;
      } else bc = a;
    }
    return bc;
  }
  function dc(a, b) {
    this.h = b === ec ? a : "";
  }
  function fc(a, b) {
    a = gc.exec(hc(a).toString());
    var c = a[3] || "";
    return ic(a[1] + jc("?", a[2] || "", b) + jc("#", c));
  }
  dc.prototype.toString = function () {
    return this.h + "";
  };
  function hc(a) {
    return a instanceof dc && a.constructor === dc
      ? a.h
      : "type_error:TrustedResourceUrl";
  }
  var gc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    ec = {};
  function ic(a) {
    var b = cc();
    a = b ? b.createScriptURL(a) : a;
    return new dc(a, ec);
  }
  function jc(a, b, c) {
    if (null == c) return b;
    if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
    for (var d in c)
      if (Object.prototype.hasOwnProperty.call(c, d)) {
        var e = c[d];
        e = Array.isArray(e) ? e : [e];
        for (var f = 0; f < e.length; f++) {
          var g = e[f];
          null != g &&
            (b || (b = a),
            (b +=
              (b.length > a.length ? "&" : "") +
              encodeURIComponent(d) +
              "=" +
              encodeURIComponent(String(g))));
        }
      }
    return b;
  }
  function kc(a, b) {
    this.h = b === lc ? a : "";
  }
  kc.prototype.toString = function () {
    return this.h.toString();
  };
  var lc = {}; /* 
 
 SPDX-License-Identifier: Apache-2.0 
*/
  var mc = {};
  function nc() {}
  function oc(a) {
    this.h = a;
  }
  v(oc, nc);
  oc.prototype.toString = function () {
    return this.h.toString();
  };
  function pc(a) {
    var b,
      c = null == (b = cc()) ? void 0 : b.createScriptURL(a);
    return new oc(null != c ? c : a, mc);
  }
  function qc(a) {
    if (a instanceof oc) return a.h;
    throw Error("");
  }
  function rc(a) {
    return a instanceof nc ? qc(a) : hc(a);
  }
  function sc(a) {
    return a instanceof kc && a.constructor === kc ? a.h : "type_error:SafeUrl";
  }
  function tc(a) {
    return a instanceof nc ? qc(a).toString() : hc(a).toString();
  }
  var uc =
    "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(
      " "
    );
  function vc(a) {
    return function () {
      return !a.apply(this, arguments);
    };
  }
  function wc(a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  }
  function xc(a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = null;
        c();
      }
    };
  }
  function yc(a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  }
  function zc(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  }
  function Ac(a) {
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }
  function Bc(a, b, c) {
    function d(h) {
      h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
    }
    for (var e = 1; e < c.length; e++) {
      var f = c[e];
      if (!xa(f) || (ya(f) && 0 < f.nodeType)) d(f);
      else {
        a: {
          if (f && "number" == typeof f.length) {
            if (ya(f)) {
              var g = "function" == typeof f.item || "string" == typeof f.item;
              break a;
            }
            if ("function" === typeof f) {
              g = "function" == typeof f.item;
              break a;
            }
          }
          g = !1;
        }
        Sa(g ? Za(f) : f, d);
      }
    }
  }
  function Cc(a) {
    this.h = a || w.document || document;
  }
  n = Cc.prototype;
  n.getElementsByTagName = function (a, b) {
    return (b || this.h).getElementsByTagName(String(a));
  };
  n.createElement = function (a) {
    var b = this.h;
    a = String(a);
    "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
    return b.createElement(a);
  };
  n.createTextNode = function (a) {
    return this.h.createTextNode(String(a));
  };
  n.append = function (a, b) {
    Bc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments);
  };
  n.contains = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
      return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  };
  function Dc() {
    return !Ec() && (x("iPod") || x("iPhone") || x("Android") || x("IEMobile"));
  }
  function Ec() {
    return x("iPad") || (x("Android") && !x("Mobile")) || x("Silk");
  }
  var Fc = RegExp(
      "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
    ),
    Gc = /#|$/;
  function Hc(a) {
    var b = a.search(Gc),
      c;
    a: {
      for (c = 0; 0 <= (c = a.indexOf("client", c)) && c < b; ) {
        var d = a.charCodeAt(c - 1);
        if (38 == d || 63 == d)
          if (((d = a.charCodeAt(c + 6)), !d || 61 == d || 38 == d || 35 == d))
            break a;
        c += 7;
      }
      c = -1;
    }
    if (0 > c) return null;
    d = a.indexOf("&", c);
    if (0 > d || d > b) d = b;
    return decodeURIComponent(
      a.slice(c + 7, -1 !== d ? d : 0).replace(/\+/g, " ")
    );
  }
  function Ic(a) {
    try {
      var b;
      if ((b = !!a && null != a.location.href))
        a: {
          try {
            $a(a.foo);
            b = !0;
            break a;
          } catch (c) {}
          b = !1;
        }
      return b;
    } catch (c) {
      return !1;
    }
  }
  function Jc(a) {
    return Ic(a.top) ? a.top : null;
  }
  function Mc(a, b) {
    var c = Nc("SCRIPT", a);
    c.src = rc(b);
    var d, e;
    (d = (b =
      null ==
      (e = (d = ((c.ownerDocument && c.ownerDocument.defaultView) || window)
        .document).querySelector)
        ? void 0
        : e.call(d, "script[nonce]"))
      ? b.nonce || b.getAttribute("nonce") || ""
      : "") && c.setAttribute("nonce", d);
    return (a = a.getElementsByTagName("script")[0]) && a.parentNode
      ? (a.parentNode.insertBefore(c, a), c)
      : null;
  }
  function Oc(a, b) {
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
  }
  function Pc(a, b) {
    if (!Qc() && !Rc()) {
      var c = Math.random();
      if (c < b) return (c = Sc()), a[Math.floor(c * a.length)];
    }
    return null;
  }
  function Sc() {
    if (!p.globalThis.crypto) return Math.random();
    try {
      var a = new Uint32Array(1);
      p.globalThis.crypto.getRandomValues(a);
      return a[0] / 65536 / 65536;
    } catch (b) {
      return Math.random();
    }
  }
  function Tc(a, b) {
    if (a)
      for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  }
  function Uc(a) {
    var b = a.length;
    if (0 == b) return 0;
    for (var c = 305419896, d = 0; d < b; d++)
      c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
    return 0 < c ? c : 4294967296 + c;
  }
  var Rc = wc(function () {
    return (
      Va(
        [
          "Google Web Preview",
          "Mediapartners-Google",
          "Google-Read-Aloud",
          "Google-Adwords",
        ],
        Vc
      ) || 1e-4 > Math.random()
    );
  });
  function Wc(a, b) {
    var c = -1;
    try {
      a && (c = parseInt(a.getItem(b), 10));
    } catch (d) {
      return null;
    }
    return 0 <= c && 1e3 > c ? c : null;
  }
  function Xc(a, b) {
    var c = Rc() ? null : Math.floor(1e3 * Sc());
    var d;
    if ((d = null != c && a))
      a: {
        var e = String(c);
        try {
          if (a) {
            a.setItem(b, e);
            d = e;
            break a;
          }
        } catch (f) {}
        d = null;
      }
    return d ? c : null;
  }
  var Qc = wc(function () {
    return Vc("MSIE");
  });
  function Vc(a) {
    return -1 != Ma().indexOf(a);
  }
  var Yc = /^([0-9.]+)px$/,
    Zc = /^(-?[0-9.]{1,30})$/;
  function $c(a) {
    var b = void 0 === b ? null : b;
    if (!Zc.test(a)) return b;
    a = Number(a);
    return isNaN(a) ? b : a;
  }
  function K(a) {
    return (a = Yc.exec(a)) ? +a[1] : null;
  }
  function ad(a, b) {
    for (var c = 0; 50 > c; ++c) {
      try {
        var d = !(!a.frames || !a.frames[b]);
      } catch (g) {
        d = !1;
      }
      if (d) return a;
      a: {
        try {
          var e = a.parent;
          if (e && e != a) {
            var f = e;
            break a;
          }
        } catch (g) {}
        f = null;
      }
      if (!(a = f)) break;
    }
    return null;
  }
  var bd = wc(function () {
    return Dc() ? 2 : Ec() ? 1 : 0;
  });
  function cd(a) {
    Tc({ display: "none" }, function (b, c) {
      a.style.setProperty(c, b, "important");
    });
  }
  var dd = [];
  function ed() {
    var a = dd;
    dd = [];
    a = u(a);
    for (var b = a.next(); !b.done; b = a.next()) {
      b = b.value;
      try {
        b();
      } catch (c) {}
    }
  }
  function fd(a, b) {
    0 != a.length &&
      b.head &&
      a.forEach(function (c) {
        if (c && c && b.head) {
          var d = Nc("META");
          b.head.appendChild(d);
          d.httpEquiv = "origin-trial";
          d.content = c;
        }
      });
  }
  function gd(a) {
    if ("number" !== typeof a.goog_pvsid)
      try {
        Object.defineProperty(a, "goog_pvsid", {
          value: Math.floor(Math.random() * Math.pow(2, 52)),
          configurable: !1,
        });
      } catch (b) {}
    return Number(a.goog_pvsid) || -1;
  }
  function hd(a) {
    var b = id;
    "complete" === b.readyState || "interactive" === b.readyState
      ? (dd.push(a),
        1 == dd.length &&
          (p.Promise
            ? p.Promise.resolve().then(ed)
            : window.setImmediate
            ? setImmediate(ed)
            : setTimeout(ed, 0)))
      : b.addEventListener("DOMContentLoaded", a);
  }
  function Nc(a, b) {
    b = void 0 === b ? document : b;
    return b.createElement(String(a).toLowerCase());
  }
  var jd = null;
  var id = document,
    L = window;
  var kd = null;
  function ld(a, b) {
    b = void 0 === b ? [] : b;
    var c = !1;
    w.google_logging_queue || ((c = !0), (w.google_logging_queue = []));
    w.google_logging_queue.push([a, b]);
    if ((a = c)) {
      if (null == kd) {
        kd = !1;
        try {
          var d = Jc(w);
          d && -1 !== d.location.hash.indexOf("google_logging") && (kd = !0);
          w.localStorage.getItem("google_logging") && (kd = !0);
        } catch (e) {}
      }
      a = kd;
    }
    a &&
      ((d = w.document),
      (a = new Vb(
        Wb,
        "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"
      )),
      (a = ic(
        a instanceof Vb && a.constructor === Vb && a.h === Xb
          ? a.i
          : "type_error:Const"
      )),
      Mc(d, a));
  }
  function md(a) {
    a = void 0 === a ? w : a;
    var b = a.context || a.AMP_CONTEXT_DATA;
    if (!b)
      try {
        b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
      } catch (c) {}
    try {
      if (b && b.pageViewId && b.canonicalUrl) return b;
    } catch (c) {}
    return null;
  }
  function nd(a) {
    return (a = a || md()) ? (Ic(a.master) ? a.master : null) : null;
  }
  function od(a) {
    var b = ta.apply(1, arguments);
    if (0 === b.length) return pc(a[0]);
    for (var c = [a[0]], d = 0; d < b.length; d++)
      c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
    return pc(c.join(""));
  }
  function pd(a) {
    var b = void 0 === b ? 1 : b;
    a = nd(md(a)) || a;
    a.google_unique_id = (a.google_unique_id || 0) + b;
    return a.google_unique_id;
  }
  function qd(a) {
    a = a.google_unique_id;
    return "number" === typeof a ? a : 0;
  }
  function rd() {
    var a = void 0 === a ? L : a;
    if (!a) return !1;
    try {
      return !(!a.navigator.standalone && !a.top.navigator.standalone);
    } catch (b) {
      return !1;
    }
  }
  function sd(a) {
    if (!a) return "";
    a = a.toLowerCase();
    "ca-" != a.substring(0, 3) && (a = "ca-" + a);
    return a;
  }
  function td() {
    this.i = new ud(this);
    this.h = 0;
  }
  td.prototype.resolve = function (a) {
    vd(this);
    this.h = 1;
    this.l = a;
    wd(this.i);
  };
  td.prototype.reject = function (a) {
    vd(this);
    this.h = 2;
    this.j = a;
    wd(this.i);
  };
  function vd(a) {
    if (0 != a.h) throw Error("Already resolved/rejected.");
  }
  function ud(a) {
    this.h = a;
  }
  ud.prototype.then = function (a, b) {
    if (this.i) throw Error("Then functions already set.");
    this.i = a;
    this.j = b;
    wd(this);
  };
  function wd(a) {
    switch (a.h.h) {
      case 0:
        break;
      case 1:
        a.i && a.i(a.h.l);
        break;
      case 2:
        a.j && a.j(a.h.j);
        break;
      default:
        throw Error("Unhandled deferred state.");
    }
  }
  function xd(a) {
    this.h = a.slice(0);
  }
  n = xd.prototype;
  n.forEach = function (a) {
    var b = this;
    this.h.forEach(function (c, d) {
      return void a(c, d, b);
    });
  };
  n.filter = function (a) {
    return new xd(Ta(this.h, a));
  };
  n.apply = function (a) {
    return new xd(a(this.h.slice(0)));
  };
  n.sort = function (a) {
    return new xd(this.h.slice(0).sort(a));
  };
  n.get = function (a) {
    return this.h[a];
  };
  n.add = function (a) {
    var b = this.h.slice(0);
    b.push(a);
    return new xd(b);
  };
  function yd(a, b) {
    for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
    c.forEach(b, void 0);
  }
  function zd() {
    this.h = {};
    this.i = {};
  }
  zd.prototype.set = function (a, b) {
    var c = Ad(a);
    this.h[c] = b;
    this.i[c] = a;
  };
  zd.prototype.get = function (a, b) {
    a = Ad(a);
    return void 0 !== this.h[a] ? this.h[a] : b;
  };
  zd.prototype.clear = function () {
    this.h = {};
    this.i = {};
  };
  function Ad(a) {
    return a instanceof Object ? String(za(a)) : a + "";
  }
  function Bd(a, b) {
    this.h = a;
    this.i = b;
  }
  function Cd(a) {
    return null != a.h ? a.h.value : null;
  }
  function Dd(a, b) {
    null != a.h && b(a.h.value);
    return a;
  }
  Bd.prototype.map = function (a) {
    return null != this.h
      ? ((a = a(this.h.value)), a instanceof Bd ? a : Ed(a))
      : this;
  };
  function Fd(a, b) {
    null != a.h || b(a.i);
    return a;
  }
  function Ed(a) {
    return new Bd({ value: a }, null);
  }
  function Gd(a) {
    return new Bd(null, a);
  }
  function Hd(a) {
    try {
      return Ed(a());
    } catch (b) {
      return Gd(b);
    }
  }
  function Id(a) {
    this.h = new zd();
    if (a) for (var b = 0; b < a.length; ++b) this.add(a[b]);
  }
  Id.prototype.add = function (a) {
    this.h.set(a, !0);
  };
  Id.prototype.contains = function (a) {
    return void 0 !== this.h.h[Ad(a)];
  };
  function Jd() {
    this.h = new zd();
  }
  Jd.prototype.set = function (a, b) {
    var c = this.h.get(a);
    c || ((c = new Id()), this.h.set(a, c));
    c.add(b);
  };
  function Kd(a) {
    J.call(this, a, -1, Ld);
  }
  v(Kd, J);
  Kd.prototype.getId = function () {
    return A(this, 3);
  };
  var Ld = [4];
  function Md(a) {
    var b = void 0 === a.Ga ? void 0 : a.Ga,
      c = void 0 === a.gb ? void 0 : a.gb,
      d = void 0 === a.Ra ? void 0 : a.Ra;
    this.h = void 0 === a.bb ? void 0 : a.bb;
    this.l = new xd(b || []);
    this.j = d;
    this.i = c;
  }
  function Nd(a) {
    var b = [],
      c = a.l;
    c && c.h.length && b.push({ X: "a", ca: Od(c) });
    null != a.h && b.push({ X: "as", ca: a.h });
    null != a.i && b.push({ X: "i", ca: String(a.i) });
    null != a.j && b.push({ X: "rp", ca: String(a.j) });
    b.sort(function (d, e) {
      return d.X.localeCompare(e.X);
    });
    b.unshift({ X: "t", ca: "aa" });
    return b;
  }
  function Od(a) {
    a = a.h.slice(0).map(Pd);
    a = JSON.stringify(a);
    return Uc(a);
  }
  function Pd(a) {
    var b = {};
    null != A(a, 7) && (b.q = A(a, 7));
    null != A(a, 2) && (b.o = A(a, 2));
    null != A(a, 5) && (b.p = A(a, 5));
    return b;
  }
  function Qd(a) {
    J.call(this, a);
  }
  v(Qd, J);
  Qd.prototype.setLocation = function (a) {
    return B(this, 1, a);
  };
  function Rd(a, b) {
    this.Ja = a;
    this.Qa = b;
  }
  function Sd(a) {
    var b = [].slice.call(arguments).filter(
      vc(function (e) {
        return null === e;
      })
    );
    if (!b.length) return null;
    var c = [],
      d = {};
    b.forEach(function (e) {
      c = c.concat(e.Ja || []);
      d = r(Object, "assign").call(Object, d, e.Qa);
    });
    return new Rd(c, d);
  }
  function Td(a) {
    switch (a) {
      case 1:
        return new Rd(null, { google_ad_semantic_area: "mc" });
      case 2:
        return new Rd(null, { google_ad_semantic_area: "h" });
      case 3:
        return new Rd(null, { google_ad_semantic_area: "f" });
      case 4:
        return new Rd(null, { google_ad_semantic_area: "s" });
      default:
        return null;
    }
  }
  function Ud(a) {
    if (null == a) a = null;
    else {
      var b = Nd(a);
      a = [];
      b = u(b);
      for (var c = b.next(); !c.done; c = b.next()) {
        c = c.value;
        var d = String(c.ca);
        a.push(c.X + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"));
      }
      a = new Rd(null, { google_placement_id: a.join("~") });
    }
    return a;
  }
  var Vd = {},
    Wd = new Rd(
      ["google-auto-placed"],
      ((Vd.google_reactive_ad_format = 40), (Vd.google_tag_origin = "qs"), Vd)
    );
  function Xd(a) {
    J.call(this, a);
  }
  v(Xd, J);
  function Yd(a) {
    J.call(this, a);
  }
  v(Yd, J);
  Yd.prototype.getName = function () {
    return A(this, 4);
  };
  function Zd(a) {
    J.call(this, a);
  }
  v(Zd, J);
  function $d(a) {
    J.call(this, a);
  }
  v($d, J);
  function ae(a) {
    J.call(this, a);
  }
  v(ae, J);
  var be = [1, 2, 3];
  function ce(a) {
    J.call(this, a);
  }
  v(ce, J);
  function de(a) {
    J.call(this, a, -1, ee);
  }
  v(de, J);
  var ee = [6, 7, 9, 10, 11];
  function fe(a) {
    J.call(this, a, -1, ge);
  }
  v(fe, J);
  function he(a) {
    J.call(this, a);
  }
  v(he, J);
  function ie(a) {
    J.call(this, a);
  }
  v(ie, J);
  var ge = [1],
    je = [1, 2];
  function ke(a) {
    J.call(this, a, -1, le);
  }
  v(ke, J);
  function me(a) {
    J.call(this, a);
  }
  v(me, J);
  function ne(a) {
    J.call(this, a, -1, oe);
  }
  v(ne, J);
  function pe(a) {
    J.call(this, a);
  }
  v(pe, J);
  function qe(a) {
    J.call(this, a);
  }
  v(qe, J);
  function re(a) {
    J.call(this, a);
  }
  v(re, J);
  function se(a) {
    J.call(this, a);
  }
  v(se, J);
  var le = [1, 2, 5, 7],
    oe = [2, 5, 6, 11];
  function te(a) {
    J.call(this, a);
  }
  v(te, J);
  function ue(a) {
    if (1 != a.nodeType) var b = !1;
    else if ((b = "INS" == a.tagName))
      a: {
        b = ["adsbygoogle-placeholder"];
        a = a.className ? a.className.split(/\s+/) : [];
        for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
        for (d = 0; d < b.length; ++d)
          if (!c[b[d]]) {
            b = !1;
            break a;
          }
        b = !0;
      }
    return b;
  }
  function ve(a, b, c) {
    switch (c) {
      case 0:
        b.parentNode && b.parentNode.insertBefore(a, b);
        break;
      case 3:
        if ((c = b.parentNode)) {
          var d = b.nextSibling;
          if (d && d.parentNode != c)
            for (; d && 8 == d.nodeType; ) d = d.nextSibling;
          c.insertBefore(a, d);
        }
        break;
      case 1:
        b.insertBefore(a, b.firstChild);
        break;
      case 2:
        b.appendChild(a);
    }
    ue(b) &&
      (b.setAttribute("data-init-display", b.style.display),
      (b.style.display = "block"));
  }
  function M(a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  }
  function N(a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? 0 : b;
  }
  function we(a, b) {
    b = void 0 === b ? [] : b;
    this.h = a;
    this.defaultValue = b;
  }
  var xe = new M(1084),
    ye = new M(1082, !0),
    ze = new N(62, 0.001),
    Ae = new N(1130, 100),
    Be = new (function (a, b) {
      this.h = a;
      this.defaultValue = void 0 === b ? "" : b;
    })(14),
    Ce = new N(1114, 1),
    De = new N(1110),
    Ee = new N(1111),
    Fe = new N(1112),
    Ge = new N(1113),
    He = new N(1104),
    Ie = new N(1108),
    Je = new N(1106),
    Ke = new N(1107),
    Le = new N(1105),
    Me = new N(1115, 1),
    Ne = new M(1121),
    Oe = new M(1144),
    Pe = new M(1143),
    Qe = new M(316),
    Re = new M(313),
    Se = new M(369),
    Te = new M(1093),
    Ue = new N(1098),
    Ve = new M(1129),
    We = new M(1128),
    Xe = new M(1026),
    Ye = new M(1090),
    Ze = new M(1053, !0),
    $e = new M(1162),
    af = new M(1120),
    bf = new M(1100, !0),
    cf = new N(1046),
    df = new M(1102, !0),
    ef = new M(218),
    ff = new M(217),
    gf = new M(227),
    hf = new M(208),
    jf = new M(282),
    kf = new M(1086),
    lf = new N(1079, 5),
    mf = new M(1141),
    nf = new we(1939),
    of = new we(1934, [
      "A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
      "A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
      "A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
    ]),
    pf = new M(203),
    qf = new M(434462125, !0),
    rf = new M(84),
    sf = new M(1928),
    tf = new M(1941),
    uf = new M(370946349),
    vf = new M(392736476, !0),
    wf = new N(406149835),
    xf = new we(1932, [
      "AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=",
      "Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
      "A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
      "AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
      "A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
    ]),
    yf = new N(1935);
  function O(a) {
    var b = "sa";
    if (a.sa && a.hasOwnProperty(b)) return a.sa;
    b = new a();
    return (a.sa = b);
  }
  function zf() {
    var a = {};
    this.i = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.j = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.l = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.h = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.m = function () {};
  }
  function P(a) {
    return O(zf).i(a.h, a.defaultValue);
  }
  function Q(a) {
    return O(zf).j(a.h, a.defaultValue);
  }
  function Af() {
    return O(zf).l(Be.h, Be.defaultValue);
  }
  function Bf(a, b, c) {
    function d(f) {
      f = Cf(f);
      return null == f ? !1 : c > f;
    }
    function e(f) {
      f = Cf(f);
      return null == f ? !1 : c < f;
    }
    switch (b) {
      case 0:
        return {
          init: Df(a.previousSibling, e),
          ja: function (f) {
            return Df(f.previousSibling, e);
          },
          na: 0,
        };
      case 2:
        return {
          init: Df(a.lastChild, e),
          ja: function (f) {
            return Df(f.previousSibling, e);
          },
          na: 0,
        };
      case 3:
        return {
          init: Df(a.nextSibling, d),
          ja: function (f) {
            return Df(f.nextSibling, d);
          },
          na: 3,
        };
      case 1:
        return {
          init: Df(a.firstChild, d),
          ja: function (f) {
            return Df(f.nextSibling, d);
          },
          na: 3,
        };
    }
    throw Error("Un-handled RelativePosition: " + b);
  }
  function Cf(a) {
    return a.hasOwnProperty("google-ama-order-assurance")
      ? a["google-ama-order-assurance"]
      : null;
  }
  function Df(a, b) {
    return a && b(a) ? a : null;
  }
  var Ef = { rectangle: 1, horizontal: 2, vertical: 4 };
  function Ff(a, b, c) {
    a.google_image_requests || (a.google_image_requests = []);
    var d = Nc("IMG", a.document);
    if (c) {
      var e = function () {
        if (c) {
          var f = a.google_image_requests,
            g = Ra(f, d);
          0 <= g && Array.prototype.splice.call(f, g, 1);
        }
        zc(d, "load", e);
        zc(d, "error", e);
      };
      yc(d, "load", e);
      yc(d, "error", e);
    }
    d.src = b;
    a.google_image_requests.push(d);
  }
  function Gf(a) {
    var b = void 0 === b ? !1 : b;
    var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=dtt_err";
    Tc(a, function (d, e) {
      d && (c += "&" + e + "=" + encodeURIComponent(d));
    });
    Hf(c, b);
  }
  function Hf(a, b) {
    var c = window;
    b = void 0 === b ? !1 : b;
    c.fetch
      ? c.fetch(a, {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        })
      : Ff(c, a, void 0 === b ? !1 : b);
  }
  function If() {
    this.j = "&";
    this.i = {};
    this.l = 0;
    this.h = [];
  }
  function Jf(a, b) {
    var c = {};
    c[a] = b;
    return [c];
  }
  function Kf(a, b, c, d, e) {
    var f = [];
    Tc(a, function (g, h) {
      (g = Lf(g, b, c, d, e)) && f.push(h + "=" + g);
    });
    return f.join(b);
  }
  function Lf(a, b, c, d, e) {
    if (null == a) return "";
    b = b || "&";
    c = c || ",$";
    "string" == typeof c && (c = c.split(""));
    if (a instanceof Array) {
      if (((d = d || 0), d < c.length)) {
        for (var f = [], g = 0; g < a.length; g++)
          f.push(Lf(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if ("object" == typeof a)
      return (
        (e = e || 0), 2 > e ? encodeURIComponent(Kf(a, b, c, d, e + 1)) : "..."
      );
    return encodeURIComponent(String(a));
  }
  function Mf(a, b) {
    var c = "https://pagead2.googlesyndication.com" + b,
      d = Nf(a) - b.length;
    if (0 > d) return "";
    a.h.sort(function (m, q) {
      return m - q;
    });
    b = null;
    for (var e = "", f = 0; f < a.h.length; f++)
      for (var g = a.h[f], h = a.i[g], k = 0; k < h.length; k++) {
        if (!d) {
          b = null == b ? g : b;
          break;
        }
        var l = Kf(h[k], a.j, ",$");
        if (l) {
          l = e + l;
          if (d >= l.length) {
            d -= l.length;
            c += l;
            e = a.j;
            break;
          }
          b = null == b ? g : b;
        }
      }
    a = "";
    null != b && (a = e + "trn=" + b);
    return c + a;
  }
  function Nf(a) {
    var b = 1,
      c;
    for (c in a.i) b = c.length > b ? c.length : b;
    return 3997 - b - a.j.length - 1;
  }
  function Of() {
    this.h = Math.random();
  }
  function Pf() {
    var a = Qf,
      b = w.google_srt;
    0 <= b && 1 >= b && (a.h = b);
  }
  function Rf(a, b, c, d, e) {
    if ((d ? a.h : Math.random()) < (e || 0.01))
      try {
        if (c instanceof If) var f = c;
        else
          (f = new If()),
            Tc(c, function (h, k) {
              var l = f,
                m = l.l++;
              h = Jf(k, h);
              l.h.push(m);
              l.i[m] = h;
            });
        var g = Mf(f, "/pagead/gen_204?id=" + b + "&");
        g && Ff(w, g, !1);
      } catch (h) {}
  }
  var Sf = {
    overlays: 1,
    interstitials: 2,
    vignettes: 2,
    inserts: 3,
    immersives: 4,
    list_view: 5,
  };
  function Tf() {
    this.wasPlaTagProcessed = !1;
    this.wasReactiveAdConfigReceived = {};
    this.adCount = {};
    this.wasReactiveAdVisible = {};
    this.stateForType = {};
    this.reactiveTypeEnabledInAsfe = {};
    this.wasReactiveTagRequestSent = !1;
    this.reactiveTypeDisabledByPublisher = {};
    this.tagSpecificState = {};
    this.messageValidationEnabled = !1;
    this.floatingAdsStacking = new Uf();
    this.sideRailProcessedFixedElements = new p.Set();
    this.sideRailAvailableSpace = new p.Map();
  }
  function Vf(a) {
    a.google_reactive_ads_global_state
      ? (null ==
          a.google_reactive_ads_global_state.sideRailProcessedFixedElements &&
          (a.google_reactive_ads_global_state.sideRailProcessedFixedElements =
            new p.Set()),
        null == a.google_reactive_ads_global_state.sideRailAvailableSpace &&
          (a.google_reactive_ads_global_state.sideRailAvailableSpace =
            new p.Map()))
      : (a.google_reactive_ads_global_state = new Tf());
    return a.google_reactive_ads_global_state;
  }
  function Uf() {
    this.maxZIndexRestrictions = {};
    this.nextRestrictionId = 0;
    this.maxZIndexListeners = [];
  }
  function Wf(a) {
    a = a.document;
    var b = {};
    a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
    return b || {};
  }
  function Xf(a) {
    return Wf(a).clientWidth;
  }
  function Yf(a) {
    return null !== a && void 0 !== a;
  }
  function Zf(a, b) {
    if (!b(a)) throw Error(String(a));
  }
  function $f(a) {
    return "string" === typeof a;
  }
  function ag(a) {
    return void 0 === a;
  }
  function bg(a) {
    J.call(this, a, -1, cg);
  }
  v(bg, J);
  var cg = [2, 8],
    dg = [3, 4, 5],
    eg = [6, 7];
  var fg;
  fg = { Kb: 0, Ya: 3, Za: 4, $a: 5 };
  var gg = fg.Ya,
    hg = fg.Za,
    ig = fg.$a;
  function jg(a) {
    return null != a ? !a : a;
  }
  function kg(a, b) {
    for (var c = !1, d = 0; d < a.length; d++) {
      var e = a[d]();
      if (e === b) return e;
      null == e && (c = !0);
    }
    if (!c) return !b;
  }
  function lg(a, b) {
    var c = H(a, bg, 2);
    if (!c.length) return mg(a, b);
    a = C(a, 1, 0);
    if (1 === a) return jg(lg(c[0], b));
    c = Ua(c, function (d) {
      return function () {
        return lg(d, b);
      };
    });
    switch (a) {
      case 2:
        return kg(c, !1);
      case 3:
        return kg(c, !0);
    }
  }
  function mg(a, b) {
    var c = Db(a, dg);
    a: {
      switch (c) {
        case gg:
          var d = Ib(a, 3, dg);
          break a;
        case hg:
          d = Ib(a, 4, dg);
          break a;
        case ig:
          d = Ib(a, 5, dg);
          break a;
      }
      d = void 0;
    }
    if (d && (b = (b = b[c]) && b[d])) {
      try {
        var e = b.apply(null, ka(xb(a, 8)));
      } catch (f) {
        return;
      }
      b = C(a, 1, 0);
      if (4 === b) return !!e;
      d = null != e;
      if (5 === b) return d;
      if (12 === b) a = I(a, Eb(a, eg, 7));
      else
        a: {
          switch (c) {
            case hg:
              a = zb(a, Eb(a, eg, 6));
              break a;
            case ig:
              a = I(a, Eb(a, eg, 7));
              break a;
          }
          a = void 0;
        }
      if (null != a) {
        if (6 === b) return e === a;
        if (9 === b) return null != e && 0 === Ka(String(e), a);
        if (d)
          switch (b) {
            case 7:
              return e < a;
            case 8:
              return e > a;
            case 12:
              return $f(a) && $f(e) && new RegExp(a).test(e);
            case 10:
              return null != e && -1 === Ka(String(e), a);
            case 11:
              return null != e && 1 === Ka(String(e), a);
          }
      }
    }
  }
  function ng(a, b) {
    return !a || !(!b || !lg(a, b));
  }
  function og(a) {
    J.call(this, a, -1, pg);
  }
  v(og, J);
  var pg = [4];
  function qg(a) {
    J.call(this, a);
  }
  v(qg, J);
  function rg(a) {
    J.call(this, a, -1, sg);
  }
  v(rg, J);
  var sg = [5],
    tg = [1, 2, 3, 6, 7];
  function ug(a) {
    a.Sa.apply(
      a,
      ka(
        ta.apply(1, arguments).map(function (b) {
          return { Xa: 4, message: b };
        })
      )
    );
  }
  function vg(a) {
    a.Sa.apply(
      a,
      ka(
        ta.apply(1, arguments).map(function (b) {
          return { Xa: 7, message: b };
        })
      )
    );
  }
  function wg(a) {
    return function () {
      var b = ta.apply(0, arguments);
      try {
        return a.apply(this, b);
      } catch (c) {}
    };
  }
  var xg = wg(function (a) {
    var b = [],
      c = {};
    a = u(a);
    for (var d = a.next(); !d.done; c = { ea: c.ea }, d = a.next())
      (c.ea = d.value),
        wg(
          (function (e) {
            return function () {
              b.push('[{"' + e.ea.Xa + '":' + Mb(e.ea.message) + "}]");
            };
          })(c)
        )();
    return "[[" + b.join(",") + "]]";
  });
  function yg(a, b) {
    if (p.globalThis.fetch)
      p.globalThis.fetch(a, {
        method: "POST",
        body: b,
        keepalive: 65536 > b.length,
        credentials: "omit",
        mode: "no-cors",
        redirect: "follow",
      });
    else {
      var c = new XMLHttpRequest();
      c.open("POST", a, !0);
      c.send(b);
    }
  }
  function zg(a) {
    var b = void 0 === b ? yg : b;
    this.l = void 0 === a ? 1e3 : a;
    this.j = b;
    this.i = [];
    this.h = null;
  }
  zg.prototype.Sa = function () {
    var a = ta.apply(0, arguments),
      b = this;
    wg(function () {
      b.i.push.apply(b.i, ka(a));
      var c = wg(function () {
        var d = xg(b.i);
        b.j("https://pagead2.googlesyndication.com/pagead/ping?e=1", d);
        b.i = [];
        b.h = null;
      });
      100 <= b.i.length
        ? (null !== b.h && clearTimeout(b.h), (b.h = setTimeout(c, 0)))
        : null === b.h && (b.h = setTimeout(c, b.l));
    })();
  };
  function Ag(a) {
    J.call(this, a, -1, Bg);
  }
  v(Ag, J);
  function Cg(a, b) {
    return Fb(a, 1, b);
  }
  function Dg(a, b) {
    return Hb(a, 2, b);
  }
  function Eg(a, b) {
    return Ab(a, 4, b);
  }
  function Fg(a, b) {
    return Hb(a, 5, b);
  }
  function Gg(a, b) {
    return Bb(a, 6, b);
  }
  function Hg(a) {
    J.call(this, a);
  }
  v(Hg, J);
  Hg.prototype.V = function () {
    return C(this, 1, 0);
  };
  function Ig(a, b) {
    return Bb(a, 1, b);
  }
  function Jg(a, b) {
    return Bb(a, 2, b);
  }
  function Kg(a) {
    J.call(this, a);
  }
  v(Kg, J);
  var Bg = [2, 4, 5],
    Lg = [1, 2];
  function Mg(a) {
    J.call(this, a, -1, Ng);
  }
  v(Mg, J);
  function Og(a) {
    J.call(this, a, -1, Pg);
  }
  v(Og, J);
  var Ng = [2, 3],
    Pg = [5],
    Qg = [1, 2, 3, 4];
  function Rg(a) {
    J.call(this, a);
  }
  v(Rg, J);
  Rg.prototype.getTagSessionCorrelator = function () {
    return C(this, 2, 0);
  };
  function Sg(a) {
    var b = new Rg();
    return Gb(b, 4, Tg, a);
  }
  var Tg = [4, 5, 7];
  function Ug(a, b, c) {
    var d = void 0 === d ? new zg(b) : d;
    this.i = a;
    this.m = c;
    this.j = d;
    this.h = [];
    this.l = 0 < this.i && Sc() < 1 / this.i;
  }
  function Vg(a, b, c, d, e, f) {
    var g = Jg(Ig(new Hg(), b), c);
    b = Gg(Dg(Cg(Fg(Eg(new Ag(), d), e), g), a.h), f);
    b = Sg(b);
    a.l && ug(a.j, $g(a, b));
    if (
      1 === f ||
      3 === f ||
      (4 === f &&
        !a.h.some(function (h) {
          return h.V() === g.V() && C(h, 2, 0) === c;
        }))
    )
      a.h.push(g), 100 < a.h.length && a.h.shift();
  }
  function ah(a, b, c, d) {
    if (a.m) {
      var e = new Mg();
      b = Hb(e, 2, b);
      c = Hb(b, 3, c);
      d && Bb(c, 1, d);
      d = new Rg();
      d = Gb(d, 7, Tg, c);
      a.l && ug(a.j, $g(a, d));
    }
  }
  function $g(a, b) {
    b = Bb(b, 1, Date.now());
    var c = gd(window);
    b = Bb(b, 2, c);
    return Bb(b, 6, a.i);
  }
  function bh() {
    var a = {};
    this.h = ((a[gg] = {}), (a[hg] = {}), (a[ig] = {}), a);
  }
  var ch = /^true$/.test("false");
  function dh(a, b) {
    switch (b) {
      case 1:
        return Ib(a, 1, tg);
      case 2:
        return Ib(a, 2, tg);
      case 3:
        return Ib(a, 3, tg);
      case 6:
        return Ib(a, 6, tg);
      default:
        return null;
    }
  }
  function eh(a, b) {
    if (!a) return null;
    switch (b) {
      case 1:
        return D(a, 1);
      case 7:
        return I(a, 3);
      case 2:
        return zb(a, 2);
      case 3:
        return I(a, 3);
      case 6:
        return xb(a, 4);
      default:
        return null;
    }
  }
  var fh = wc(function () {
    if (!ch) return {};
    try {
      var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
      if (a) return JSON.parse(a);
    } catch (b) {}
    return {};
  });
  function gh(a, b, c, d) {
    var e = (d = void 0 === d ? 0 : d),
      f,
      g;
    O(hh).j[e] =
      null != (g = null == (f = O(hh).j[e]) ? void 0 : f.add(b))
        ? g
        : new p.Set().add(b);
    e = fh();
    if (null != e[b]) return e[b];
    b = ih(d)[b];
    if (!b) return c;
    b = new rg(b);
    b = jh(b);
    a = eh(b, a);
    return null != a ? a : c;
  }
  function jh(a) {
    var b = O(bh).h;
    if (b) {
      var c = Xa(H(a, qg, 5), function (d) {
        return ng(G(d, bg, 1), b);
      });
      if (c) return G(c, og, 2);
    }
    return G(a, og, 4);
  }
  function hh() {
    this.i = {};
    this.l = [];
    this.j = {};
    this.h = new p.Map();
  }
  function kh(a, b, c) {
    return !!gh(1, a, void 0 === b ? !1 : b, c);
  }
  function lh(a, b, c) {
    b = void 0 === b ? 0 : b;
    a = Number(gh(2, a, b, c));
    return isNaN(a) ? b : a;
  }
  function mh(a, b, c) {
    return gh(3, a, void 0 === b ? "" : b, c);
  }
  function nh(a, b, c) {
    b = void 0 === b ? [] : b;
    return gh(6, a, b, c);
  }
  function ih(a) {
    return O(hh).i[a] || (O(hh).i[a] = {});
  }
  function oh(a, b) {
    var c = ih(b);
    Tc(a, function (d, e) {
      return (c[e] = d);
    });
  }
  function ph(a, b, c, d, e) {
    e = void 0 === e ? !1 : e;
    var f = [],
      g = [];
    Sa(b, function (h) {
      var k = ih(h);
      Sa(a, function (l) {
        var m = Db(l, tg),
          q = dh(l, m);
        if (q) {
          var t, y, F;
          var z =
            null !=
            (F =
              null == (t = O(hh).h.get(h))
                ? void 0
                : null == (y = t.get(q))
                ? void 0
                : y.slice(0))
              ? F
              : [];
          a: {
            t = new Og();
            switch (m) {
              case 1:
                Cb(t, 1, Qg, q);
                break;
              case 2:
                Cb(t, 2, Qg, q);
                break;
              case 3:
                Cb(t, 3, Qg, q);
                break;
              case 6:
                Cb(t, 4, Qg, q);
                break;
              default:
                m = void 0;
                break a;
            }
            Ab(t, 5, z);
            m = t;
          }
          if ((z = m)) {
            var E;
            z = !(null == (E = O(hh).j[h]) || !E.has(q));
          }
          z && f.push(m);
          if ((E = m)) {
            var S;
            E = !(null == (S = O(hh).h.get(h)) || !S.has(q));
          }
          E && g.push(m);
          e ||
            ((S = O(hh)),
            S.h.has(h) || S.h.set(h, new p.Map()),
            S.h.get(h).has(q) || S.h.get(h).set(q, []),
            d && S.h.get(h).get(q).push(d));
          k[q] = l.toJSON();
        }
      });
    });
    (f.length || g.length) && ah(c, f, g, null != d ? d : void 0);
  }
  function qh(a, b) {
    var c = ih(b);
    Sa(a, function (d) {
      var e = new rg(d),
        f = Db(e, tg);
      (e = dh(e, f)) && (c[e] || (c[e] = d));
    });
  }
  function rh() {
    return Ua(r(Object, "keys").call(Object, O(hh).i), function (a) {
      return Number(a);
    });
  }
  function sh(a) {
    Ya(O(hh).l, a) || oh(ih(4), a);
  }
  function th(a) {
    this.methodName = a;
  }
  var uh = new th(1),
    vh = new th(16),
    wh = new th(15),
    xh = new th(2),
    yh = new th(3),
    zh = new th(4),
    Ah = new th(5),
    Bh = new th(6),
    Ch = new th(7),
    Dh = new th(8),
    Eh = new th(9),
    Fh = new th(10),
    Gh = new th(11),
    Hh = new th(12),
    Ih = new th(13),
    Jh = new th(14);
  function Kh(a, b, c) {
    c.hasOwnProperty(a.methodName) ||
      Object.defineProperty(c, String(a.methodName), { value: b });
  }
  function Lh(a, b, c) {
    return b[a.methodName] || c || function () {};
  }
  function Mh(a) {
    Kh(Ah, kh, a);
    Kh(Bh, lh, a);
    Kh(Ch, mh, a);
    Kh(Dh, nh, a);
    Kh(Ih, qh, a);
    Kh(wh, sh, a);
  }
  function Nh(a) {
    Kh(
      zh,
      function (b) {
        O(bh).h = b;
      },
      a
    );
    Kh(
      Eh,
      function (b, c) {
        var d = O(bh);
        d.h[gg][b] || (d.h[gg][b] = c);
      },
      a
    );
    Kh(
      Fh,
      function (b, c) {
        var d = O(bh);
        d.h[hg][b] || (d.h[hg][b] = c);
      },
      a
    );
    Kh(
      Gh,
      function (b, c) {
        var d = O(bh);
        d.h[ig][b] || (d.h[ig][b] = c);
      },
      a
    );
    Kh(
      Jh,
      function (b) {
        for (
          var c = O(bh), d = u([gg, hg, ig]), e = d.next();
          !e.done;
          e = d.next()
        )
          (e = e.value), r(Object, "assign").call(Object, c.h[e], b[e]);
      },
      a
    );
  }
  function Oh(a) {
    a.hasOwnProperty("init-done") ||
      Object.defineProperty(a, "init-done", { value: !0 });
  }
  function Ph() {
    this.l = function () {};
    this.j = function () {};
    this.i = function () {};
    this.h = function () {
      return [];
    };
  }
  function Qh(a, b, c) {
    a.l = Lh(uh, b, function () {});
    a.i = function (d) {
      Lh(xh, b, function () {
        return [];
      })(d, c);
    };
    a.h = function () {
      return Lh(yh, b, function () {
        return [];
      })(c);
    };
    a.j = function (d) {
      Lh(vh, b, function () {})(d, c);
    };
  }
  function Rh(a, b) {
    var c = void 0 === c ? {} : c;
    this.error = a;
    this.context = b.context;
    this.msg = b.message || "";
    this.id = b.id || "jserror";
    this.meta = c;
  }
  function Sh(a) {
    return !!(a.error && a.meta && a.id);
  }
  var Th = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
  function Uh(a, b) {
    this.h = a;
    this.i = b;
  }
  function Vh(a, b, c) {
    this.url = a;
    this.u = b;
    this.La = !!c;
    this.depth = null;
  }
  var Wh = null;
  function Xh() {
    if (null === Wh) {
      Wh = "";
      try {
        var a = "";
        try {
          a = w.top.location.hash;
        } catch (c) {
          a = w.location.hash;
        }
        if (a) {
          var b = a.match(/\bdeid=([\d,]+)/);
          Wh = b ? b[1] : "";
        }
      } catch (c) {}
    }
    return Wh;
  }
  function Yh() {
    var a = void 0 === a ? w : a;
    return (a = a.performance) && a.now && a.timing
      ? Math.floor(a.now() + a.timing.navigationStart)
      : Date.now();
  }
  function Zh() {
    var a = void 0 === a ? w : a;
    return (a = a.performance) && a.now ? a.now() : null;
  }
  function $h(a, b) {
    var c = Zh() || Yh();
    this.label = a;
    this.type = b;
    this.value = c;
    this.duration = 0;
    this.uniqueId = Math.random();
    this.slotId = void 0;
  }
  var ai = w.performance,
    bi = !!(ai && ai.mark && ai.measure && ai.clearMarks),
    ci = wc(function () {
      var a;
      if ((a = bi)) (a = Xh()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
      return a;
    });
  function di() {
    this.i = [];
    this.j = w || w;
    var a = null;
    w &&
      ((w.google_js_reporting_queue = w.google_js_reporting_queue || []),
      (this.i = w.google_js_reporting_queue),
      (a = w.google_measure_js_timing));
    this.h = ci() || (null != a ? a : 1 > Math.random());
  }
  function ei(a) {
    a &&
      ai &&
      ci() &&
      (ai.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
      ai.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"));
  }
  di.prototype.start = function (a, b) {
    if (!this.h) return null;
    a = new $h(a, b);
    b = "goog_" + a.label + "_" + a.uniqueId + "_start";
    ai && ci() && ai.mark(b);
    return a;
  };
  di.prototype.end = function (a) {
    if (this.h && "number" === typeof a.value) {
      a.duration = (Zh() || Yh()) - a.value;
      var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
      ai && ci() && ai.mark(b);
      !this.h || 2048 < this.i.length || this.i.push(a);
    }
  };
  function fi() {
    var a = gi;
    this.m = Qf;
    this.i = null;
    this.l = this.I;
    this.h = void 0 === a ? null : a;
    this.j = !1;
  }
  n = fi.prototype;
  n.Ua = function (a) {
    this.l = a;
  };
  n.Ta = function (a) {
    this.i = a;
  };
  n.Va = function (a) {
    this.j = a;
  };
  n.oa = function (a, b, c) {
    try {
      if (this.h && this.h.h) {
        var d = this.h.start(a.toString(), 3);
        var e = b();
        this.h.end(d);
      } else e = b();
    } catch (h) {
      b = !0;
      try {
        ei(d), (b = this.l(a, new Rh(h, { message: hi(h) }), void 0, c));
      } catch (k) {
        this.I(217, k);
      }
      if (b) {
        var f, g;
        null == (f = window.console) || null == (g = f.error) || g.call(f, h);
      } else throw h;
    }
    return e;
  };
  n.Oa = function (a, b) {
    var c = this;
    return function () {
      var d = ta.apply(0, arguments);
      return c.oa(a, function () {
        return b.apply(void 0, d);
      });
    };
  };
  n.I = function (a, b, c, d, e) {
    e = e || "jserror";
    try {
      var f = new If();
      f.h.push(1);
      f.i[1] = Jf("context", a);
      Sh(b) || (b = new Rh(b, { message: hi(b) }));
      if (b.msg) {
        var g = b.msg.substring(0, 512);
        f.h.push(2);
        f.i[2] = Jf("msg", g);
      }
      var h = b.meta || {};
      if (this.i)
        try {
          this.i(h);
        } catch (Kc) {}
      if (d)
        try {
          d(h);
        } catch (Kc) {}
      b = [h];
      f.h.push(3);
      f.i[3] = b;
      d = w;
      b = [];
      g = null;
      do {
        var k = d;
        if (Ic(k)) {
          var l = k.location.href;
          g = (k.document && k.document.referrer) || null;
        } else (l = g), (g = null);
        b.push(new Vh(l || "", k));
        try {
          d = k.parent;
        } catch (Kc) {
          d = null;
        }
      } while (d && k != d);
      l = 0;
      for (var m = b.length - 1; l <= m; ++l) b[l].depth = m - l;
      k = w;
      if (
        k.location &&
        k.location.ancestorOrigins &&
        k.location.ancestorOrigins.length == b.length - 1
      )
        for (m = 1; m < b.length; ++m) {
          var q = b[m];
          q.url ||
            ((q.url = k.location.ancestorOrigins[m - 1] || ""), (q.La = !0));
        }
      var t = new Vh(w.location.href, w, !1);
      k = null;
      var y = b.length - 1;
      for (q = y; 0 <= q; --q) {
        var F = b[q];
        !k && Th.test(F.url) && (k = F);
        if (F.url && !F.La) {
          t = F;
          break;
        }
      }
      F = null;
      var z = b.length && b[y].url;
      0 != t.depth && z && (F = b[y]);
      var E = new Uh(t, F);
      if (E.i) {
        var S = E.i.url || "";
        f.h.push(4);
        f.i[4] = Jf("top", S);
      }
      var sb = { url: E.h.url || "" };
      if (E.h.url) {
        var Lc = E.h.url.match(Fc),
          Wg = Lc[1],
          Xg = Lc[3],
          Yg = Lc[4];
        t = "";
        Wg && (t += Wg + ":");
        Xg && ((t += "//"), (t += Xg), Yg && (t += ":" + Yg));
        var Zg = t;
      } else Zg = "";
      sb = [sb, { url: Zg }];
      f.h.push(5);
      f.i[5] = sb;
      Rf(this.m, e, f, this.j, c);
    } catch (Kc) {
      try {
        Rf(
          this.m,
          e,
          { context: "ecmserr", rctx: a, msg: hi(Kc), url: E && E.h.url },
          this.j,
          c
        );
      } catch (Fp) {}
    }
    return !0;
  };
  n.Pa = function (a, b) {
    var c = this;
    b.catch(function (d) {
      d = d ? d : "unknown rejection";
      c.I(a, d instanceof Error ? d : Error(d));
    });
  };
  function hi(a) {
    var b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
    if (a.stack) {
      a = a.stack;
      try {
        -1 == a.indexOf(b) && (a = b + "\n" + a);
        for (var c; a != c; )
          (c = a),
            (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"));
        b = a.replace(/\n */g, "\n");
      } catch (d) {}
    }
    return b;
  }
  var ii = ja(["https://www.googletagservices.com/console/host/host.js"]),
    ji = ja(["https://www.googletagservices.com/console/panel/index.html"]),
    ki = ja(["https://www.googletagservices.com/console/overlay/index.html"]);
  od(ii);
  od(ji);
  od(ki);
  function li(a, b) {
    do {
      var c = Oc(a, b);
      if (c && "fixed" == c.position) return !1;
    } while ((a = a.parentElement));
    return !0;
  }
  function mi(a, b) {
    for (var c = ["width", "height"], d = 0; d < c.length; d++) {
      var e = "google_ad_" + c[d];
      if (!b.hasOwnProperty(e)) {
        var f = K(a[c[d]]);
        f = null === f ? null : Math.round(f);
        null != f && (b[e] = f);
      }
    }
  }
  function ni(a, b) {
    return !(
      (Zc.test(b.google_ad_width) || Yc.test(a.style.width)) &&
      (Zc.test(b.google_ad_height) || Yc.test(a.style.height))
    );
  }
  function oi(a, b) {
    return (a = pi(a, b)) ? a.y : 0;
  }
  function pi(a, b) {
    try {
      var c = b.document.documentElement.getBoundingClientRect(),
        d = a.getBoundingClientRect();
      return { x: d.left - c.left, y: d.top - c.top };
    } catch (e) {
      return null;
    }
  }
  function qi(a) {
    var b = 0,
      c;
    for (c in Ef) -1 != a.indexOf(c) && (b |= Ef[c]);
    return b;
  }
  function ri(a, b, c, d, e) {
    if (a !== a.top) return Jc(a) ? 3 : 16;
    if (!(488 > Xf(a))) return 4;
    if (!(a.innerHeight >= a.innerWidth)) return 5;
    var f = Xf(a);
    if (!f || (f - c) / f > d) a = 6;
    else {
      if ((c = "true" != e.google_full_width_responsive))
        a: {
          c = Xf(a);
          for (b = b.parentElement; b; b = b.parentElement)
            if (
              (d = Oc(b, a)) &&
              (e = K(d.width)) &&
              !(e >= c) &&
              "visible" != d.overflow
            ) {
              c = !0;
              break a;
            }
          c = !1;
        }
      a = c ? 7 : !0;
    }
    return a;
  }
  function si(a, b, c, d) {
    var e = ri(b, c, a, 0.3, d);
    !0 !== e
      ? (a = e)
      : "true" == d.google_full_width_responsive || li(c, b)
      ? ((b = Xf(b)),
        (a = b - a),
        (a = b && 0 <= a ? !0 : b ? (-10 > a ? 11 : 0 > a ? 14 : 12) : 10))
      : (a = 9);
    return a;
  }
  function ti(a, b, c) {
    a = a.style;
    "rtl" == b ? (a.marginRight = c) : (a.marginLeft = c);
  }
  function ui(a, b) {
    if (3 == b.nodeType) return /\S/.test(b.data);
    if (1 == b.nodeType) {
      if (/^(script|style)$/i.test(b.nodeName)) return !1;
      try {
        var c = Oc(b, a);
      } catch (d) {}
      return (
        !c ||
        ("none" != c.display &&
          !(
            "absolute" == c.position &&
            ("hidden" == c.visibility || "collapse" == c.visibility)
          ))
      );
    }
    return !1;
  }
  function vi(a, b, c) {
    a = pi(b, a);
    return "rtl" == c ? -a.x : a.x;
  }
  function wi(a, b) {
    var c;
    c = (c = b.parentElement) ? ((c = Oc(c, a)) ? c.direction : "") : "";
    if (c) {
      b.style.border =
        b.style.borderStyle =
        b.style.outline =
        b.style.outlineStyle =
        b.style.transition =
          "none";
      b.style.borderSpacing = b.style.padding = "0";
      ti(b, c, "0px");
      b.style.width = Xf(a) + "px";
      if (0 !== vi(a, b, c)) {
        ti(b, c, "0px");
        var d = vi(a, b, c);
        ti(b, c, -1 * d + "px");
        a = vi(a, b, c);
        0 !== a && a !== d && ti(b, c, (d / (a - d)) * d + "px");
      }
      b.style.zIndex = 30;
    }
  }
  function xi(a, b) {
    this.l = a;
    this.j = b;
  }
  xi.prototype.minWidth = function () {
    return this.l;
  };
  xi.prototype.height = function () {
    return this.j;
  };
  xi.prototype.h = function (a) {
    return 300 < a && 300 < this.j ? this.l : Math.min(1200, Math.round(a));
  };
  xi.prototype.i = function () {};
  function yi(a, b, c, d) {
    d =
      void 0 === d
        ? function (f) {
            return f;
          }
        : d;
    var e;
    return (
      (a.style && a.style[c] && d(a.style[c])) ||
      ((e = Oc(a, b)) && e[c] && d(e[c])) ||
      null
    );
  }
  function zi(a) {
    return function (b) {
      return b.minWidth() <= a;
    };
  }
  function Ai(a, b, c, d) {
    var e = a && Bi(c, b),
      f = Ci(b, d);
    return function (g) {
      return !(e && g.height() >= f);
    };
  }
  function Di(a) {
    return function (b) {
      return b.height() <= a;
    };
  }
  function Bi(a, b) {
    return oi(a, b) < Wf(b).clientHeight - 100;
  }
  function Ei(a, b) {
    var c = yi(b, a, "height", K);
    if (c) return c;
    var d = b.style.height;
    b.style.height = "inherit";
    c = yi(b, a, "height", K);
    b.style.height = d;
    if (c) return c;
    c = Infinity;
    do
      (d = b.style && K(b.style.height)) && (c = Math.min(c, d)),
        (d = yi(b, a, "maxHeight", K)) && (c = Math.min(c, d));
    while ((b = b.parentElement) && "HTML" != b.tagName);
    return c;
  }
  function Ci(a, b) {
    var c = 0 == qd(a);
    return b && c ? Math.max(250, (2 * Wf(a).clientHeight) / 3) : 250;
  }
  var R = {},
    Fi =
      ((R.google_ad_channel = !0),
      (R.google_ad_client = !0),
      (R.google_ad_host = !0),
      (R.google_ad_host_channel = !0),
      (R.google_adtest = !0),
      (R.google_tag_for_child_directed_treatment = !0),
      (R.google_tag_for_under_age_of_consent = !0),
      (R.google_tag_partner = !0),
      (R.google_restrict_data_processing = !0),
      (R.google_page_url = !0),
      (R.google_debug_params = !0),
      (R.google_adbreak_test = !0),
      (R.google_ad_frequency_hint = !0),
      (R.google_admob_interstitial_slot = !0),
      (R.google_admob_rewarded_slot = !0),
      (R.google_max_ad_content_rating = !0),
      (R.google_traffic_source = !0),
      R),
    Gi = RegExp("(^| )adsbygoogle($| )");
  function Hi(a, b) {
    for (var c = 0; c < b.length; c++) {
      var d = b[c],
        e = Ac(d.Rb);
      a[e] = d.value;
    }
  }
  function Ii(a, b, c, d) {
    this.l = a;
    this.i = b;
    this.j = c;
    this.h = d;
  }
  function Ji(a, b) {
    var c = [];
    try {
      c = b.querySelectorAll(a.l);
    } catch (g) {}
    if (!c.length) return [];
    b = Za(c);
    b = Ki(a, b);
    "number" === typeof a.i &&
      ((c = a.i),
      0 > c && (c += b.length),
      (b = 0 <= c && c < b.length ? [b[c]] : []));
    if ("number" === typeof a.j) {
      c = [];
      for (var d = 0; d < b.length; d++) {
        var e = Li(b[d]),
          f = a.j;
        0 > f && (f += e.length);
        0 <= f && f < e.length && c.push(e[f]);
      }
      b = c;
    }
    return b;
  }
  Ii.prototype.toString = function () {
    return JSON.stringify({
      nativeQuery: this.l,
      occurrenceIndex: this.i,
      paragraphIndex: this.j,
      ignoreMode: this.h,
    });
  };
  function Ki(a, b) {
    if (null == a.h) return b;
    switch (a.h) {
      case 1:
        return b.slice(1);
      case 2:
        return b.slice(0, b.length - 1);
      case 3:
        return b.slice(1, b.length - 1);
      case 0:
        return b;
      default:
        throw Error("Unknown ignore mode: " + a.h);
    }
  }
  function Li(a) {
    var b = [];
    yd(a.getElementsByTagName("p"), function (c) {
      100 <= Mi(c) && b.push(c);
    });
    return b;
  }
  function Mi(a) {
    if (3 == a.nodeType) return a.length;
    if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
    var b = 0;
    yd(a.childNodes, function (c) {
      b += Mi(c);
    });
    return b;
  }
  function Ni(a) {
    return 0 == a.length || isNaN(a[0])
      ? a
      : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1);
  }
  function Oi(a) {
    if (!a) return null;
    var b = A(a, 7);
    if (A(a, 1) || a.getId() || 0 < xb(a, 4).length) {
      var c = a.getId();
      b = xb(a, 4);
      var d = A(a, 1),
        e = "";
      d && (e += d);
      c && (e += "#" + Ni(c));
      if (b) for (c = 0; c < b.length; c++) e += "." + Ni(b[c]);
      a = (b = e) ? new Ii(b, A(a, 2), A(a, 5), Pi(A(a, 6))) : null;
    } else a = b ? new Ii(b, A(a, 2), A(a, 5), Pi(A(a, 6))) : null;
    return a;
  }
  var Qi = { 1: 1, 2: 2, 3: 3, 0: 0 };
  function Pi(a) {
    return null == a ? a : Qi[a];
  }
  var Ri = { 1: 0, 2: 1, 3: 2, 4: 3 };
  function Si(a) {
    return (a.google_ama_state = a.google_ama_state || {});
  }
  function Ti(a) {
    a = Si(a);
    return (a.optimization = a.optimization || {});
  }
  function Ui(a) {
    switch (A(a, 8)) {
      case 1:
      case 2:
        if (null == a) var b = null;
        else
          (b = G(a, Kd, 1)),
            null == b
              ? (b = null)
              : ((a = A(a, 2)),
                (b = null == a ? null : new Md({ Ga: [b], Ra: a })));
        return null != b
          ? Ed(b)
          : Gd(Error("Missing dimension when creating placement id"));
      case 3:
        return Gd(Error("Missing dimension when creating placement id"));
      default:
        return Gd(Error("Invalid type: " + A(a, 8)));
    }
  }
  function T(a) {
    a = void 0 === a ? "" : a;
    var b = Error.call(this);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
    this.name = "TagError";
    this.message = a ? "adsbygoogle.push() error: " + a : "";
    Error.captureStackTrace
      ? Error.captureStackTrace(this, T)
      : (this.stack = Error().stack || "");
  }
  v(T, Error);
  var Qf,
    Vi,
    gi = new di();
  function Wi(a) {
    null != a && (w.google_measure_js_timing = a);
    w.google_measure_js_timing ||
      ((a = gi),
      (a.h = !1),
      a.i != a.j.google_js_reporting_queue &&
        (ci() && Sa(a.i, ei), (a.i.length = 0)));
  }
  (function (a) {
    Qf = a || new Of();
    "number" !== typeof w.google_srt && (w.google_srt = Math.random());
    Pf();
    Vi = new fi();
    Vi.Va(!0);
    "complete" == w.document.readyState
      ? Wi()
      : gi.h &&
        yc(w, "load", function () {
          Wi();
        });
  })();
  function Xi(a, b, c) {
    return Vi.oa(a, b, c);
  }
  function Yi(a, b) {
    return Vi.Oa(a, b);
  }
  function Zi(a, b, c) {
    var d = O(Ph).h();
    !b.eid && d.length && (b.eid = d.toString());
    Rf(Qf, a, b, !0, c);
  }
  function $i(a, b) {
    Vi.Pa(a, b);
  }
  function aj(a, b, c, d) {
    var e;
    Sh(b) ? (e = b.msg || hi(b.error)) : (e = hi(b));
    return 0 == e.indexOf("TagError")
      ? ((c = b instanceof Rh ? b.error : b),
        c.pbr || ((c.pbr = !0), Vi.I(a, b, 0.1, d, "puberror")),
        !1)
      : Vi.I(a, b, c, d);
  }
  function bj(a) {
    a = void 0 === a ? window : a;
    a = a.googletag;
    return (null == a ? 0 : a.apiReady) ? a : void 0;
  }
  function cj(a) {
    var b = bj(a);
    return b
      ? Ta(
          Ua(b.pubads().getSlots(), function (c) {
            return a.document.getElementById(c.getSlotElementId());
          }),
          function (c) {
            return null != c;
          }
        )
      : null;
  }
  function dj(a, b) {
    return Za(a.document.querySelectorAll(b));
  }
  function ej(a) {
    var b = [];
    a = u(a);
    for (var c = a.next(); !c.done; c = a.next()) {
      c = c.value;
      for (var d = !0, e = 0; e < b.length; e++) {
        var f = b[e];
        if (f.contains(c)) {
          d = !1;
          break;
        }
        if (c.contains(f)) {
          d = !1;
          b[e] = c;
          break;
        }
      }
      d && b.push(c);
    }
    return b;
  }
  function fj(a, b) {
    function c() {
      d.push({ anchor: e.anchor, position: e.position });
      return e.anchor == b.anchor && e.position == b.position;
    }
    for (var d = [], e = a; e; ) {
      switch (e.position) {
        case 1:
          if (c()) return d;
          e.position = 2;
        case 2:
          if (c()) return d;
          if (e.anchor.firstChild) {
            e = { anchor: e.anchor.firstChild, position: 1 };
            continue;
          } else e.position = 3;
        case 3:
          if (c()) return d;
          e.position = 4;
        case 4:
          if (c()) return d;
      }
      for (
        ;
        e &&
        !e.anchor.nextSibling &&
        e.anchor.parentNode != e.anchor.ownerDocument.body;

      ) {
        e = { anchor: e.anchor.parentNode, position: 3 };
        if (c()) return d;
        e.position = 4;
        if (c()) return d;
      }
      e && e.anchor.nextSibling
        ? (e = { anchor: e.anchor.nextSibling, position: 1 })
        : (e = null);
    }
    return d;
  }
  function gj(a, b) {
    this.i = a;
    this.h = b;
  }
  function hj(a, b) {
    var c = new Jd(),
      d = new Id();
    b.forEach(function (e) {
      if (Jb(e, Zd, 1, be)) {
        e = Jb(e, Zd, 1, be);
        if (
          G(e, Xd, 1) &&
          G(G(e, Xd, 1), Kd, 1) &&
          G(e, Xd, 2) &&
          G(G(e, Xd, 2), Kd, 1)
        ) {
          var f = ij(a, G(G(e, Xd, 1), Kd, 1)),
            g = ij(a, G(G(e, Xd, 2), Kd, 1));
          if (f && g)
            for (
              f = u(
                fj(
                  { anchor: f, position: A(G(e, Xd, 1), 2) },
                  { anchor: g, position: A(G(e, Xd, 2), 2) }
                )
              ),
                g = f.next();
              !g.done;
              g = f.next()
            )
              (g = g.value), c.set(za(g.anchor), g.position);
        }
        G(e, Xd, 3) &&
          G(G(e, Xd, 3), Kd, 1) &&
          (f = ij(a, G(G(e, Xd, 3), Kd, 1))) &&
          c.set(za(f), A(G(e, Xd, 3), 2));
      } else Jb(e, $d, 2, be) ? jj(a, Jb(e, $d, 2, be), c) : Jb(e, ae, 3, be) && kj(a, Jb(e, ae, 3, be), d);
    });
    return new gj(c, d);
  }
  function jj(a, b, c) {
    G(b, Kd, 1) &&
      (a = lj(a, G(b, Kd, 1))) &&
      a.forEach(function (d) {
        d = za(d);
        c.set(d, 1);
        c.set(d, 4);
        c.set(d, 2);
        c.set(d, 3);
      });
  }
  function kj(a, b, c) {
    G(b, Kd, 1) &&
      (a = lj(a, G(b, Kd, 1))) &&
      a.forEach(function (d) {
        c.add(za(d));
      });
  }
  function ij(a, b) {
    return (a = lj(a, b)) && 0 < a.length ? a[0] : null;
  }
  function lj(a, b) {
    return (b = Oi(b)) ? Ji(b, a) : null;
  }
  function mj() {
    this.h = new p.Set();
  }
  function nj(a) {
    a = oj(a);
    return a.has("all") || a.has("after");
  }
  function pj(a) {
    a = oj(a);
    return a.has("all") || a.has("before");
  }
  function qj(a, b, c) {
    switch (c) {
      case 2:
      case 3:
        break;
      case 1:
      case 4:
        b = b.parentElement;
        break;
      default:
        throw Error("Unknown RelativePosition: " + c);
    }
    for (c = []; b; ) {
      if (rj(b)) return !0;
      if (a.h.has(b)) break;
      c.push(b);
      b = b.parentElement;
    }
    c.forEach(function (d) {
      return a.h.add(d);
    });
    return !1;
  }
  function rj(a) {
    var b = oj(a);
    return (
      a &&
      ("AUTO-ADS-EXCLUSION-AREA" === a.tagName ||
        b.has("inside") ||
        b.has("all"))
    );
  }
  function oj(a) {
    return (a = a && a.getAttribute("data-no-auto-ads"))
      ? new p.Set(a.split("|"))
      : new p.Set();
  }
  function sj(a, b) {
    if (!a) return !1;
    a = Oc(a, b);
    if (!a) return !1;
    a = a.cssFloat || a.styleFloat;
    return "left" == a || "right" == a;
  }
  function tj(a) {
    for (a = a.previousSibling; a && 1 != a.nodeType; ) a = a.previousSibling;
    return a ? a : null;
  }
  function uj(a) {
    return !!a.nextSibling || (!!a.parentNode && uj(a.parentNode));
  }
  function vj(a) {
    var b = {};
    a &&
      xb(a, 6).forEach(function (c) {
        b[c] = !0;
      });
    return b;
  }
  function wj(a, b, c, d, e) {
    this.h = a;
    this.H = b;
    this.j = c;
    this.m = e || null;
    this.A = (this.C = d) ? hj(a.document, H(d, Yd, 5)) : hj(a.document, []);
    this.G = new mj();
    this.i = 0;
    this.l = !1;
  }
  function xj(a, b) {
    if (a.l) return !0;
    a.l = !0;
    var c = H(a.j, de, 1);
    a.i = 0;
    var d = vj(a.C);
    var e = a.h;
    try {
      var f = e.localStorage.getItem("google_ama_settings");
      var g = f ? Ob(te, f) : null;
    } catch (S) {
      g = null;
    }
    var h = null !== g && D(g, 2, !1);
    g = Si(e);
    h && ((g.eatf = !0), ld(7, [!0, 0, !1]));
    var k = P(We) || P(Ve);
    f = P(Ve);
    if (k) {
      b: {
        var l = { fb: !1 },
          m = dj(e, ".google-auto-placed"),
          q = dj(e, 'ins.adsbygoogle[data-anchor-shown="true"]'),
          t = dj(e, "ins.adsbygoogle[data-ad-format=autorelaxed]");
        var y = (cj(e) || dj(e, "div[id^=div-gpt-ad]")).concat(
          dj(e, "iframe[id^=google_ads_iframe]")
        );
        var F = dj(
            e,
            "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"
          ),
          z = dj(e, "ins.adsbygoogle-ablated-ad-slot"),
          E = dj(e, "div.googlepublisherpluginad");
        k = [].concat(
          dj(e, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"),
          dj(e, "ins.adsbygoogle")
        );
        h = [];
        l = u([
          [l.Mb, m],
          [l.fb, q],
          [l.Pb, t],
          [l.Nb, y],
          [l.Qb, F],
          [l.Lb, z],
          [l.Ob, E],
        ]);
        for (m = l.next(); !m.done; m = l.next())
          (q = u(m.value)),
            (m = q.next().value),
            (q = q.next().value),
            !1 === m ? (h = h.concat(q)) : (k = k.concat(q));
        k = ej(k);
        l = ej(h);
        h = k.slice(0);
        k = u(l);
        for (l = k.next(); !l.done; l = k.next())
          for (l = l.value, m = 0; m < h.length; m++)
            (l.contains(h[m]) || h[m].contains(l)) && h.splice(m, 1);
        e = Wf(e).clientHeight;
        for (k = 0; k < h.length; k++)
          if (
            ((l = h[k].getBoundingClientRect()),
            !((0 === l.height && !f) || l.top > e))
          ) {
            e = !0;
            break b;
          }
        e = !1;
      }
      g = e ? (g.eatfAbg = !0) : !1;
    } else g = h;
    if (g) return !0;
    g = new Id([2]);
    for (e = 0; e < c.length; e++) {
      f = a;
      k = c[e];
      h = e;
      l = b;
      if (
        !G(k, Qd, 4) ||
        !g.contains(A(G(k, Qd, 4), 1)) ||
        1 !== A(k, 8) ||
        (k && null != A(k, 4) && d[A(G(k, Qd, 4), 2)])
      )
        f = null;
      else {
        f.i++;
        if ((k = yj(f, k, l, d)))
          (l = Si(f.h)),
            l.numAutoAdsPlaced || (l.numAutoAdsPlaced = 0),
            null == l.placed && (l.placed = []),
            l.numAutoAdsPlaced++,
            l.placed.push({ index: h, element: k.ha }),
            ld(7, [!1, f.i, !0]);
        f = k;
      }
      if (f) return !0;
    }
    ld(7, [!1, a.i, !1]);
    return !1;
  }
  function yj(a, b, c, d) {
    if ((b && null != A(b, 4) && d[A(G(b, Qd, 4), 2)]) || 1 != A(b, 8))
      return null;
    d = G(b, Kd, 1);
    if (!d) return null;
    d = Oi(d);
    if (!d) return null;
    d = Ji(d, a.h.document);
    if (0 == d.length) return null;
    d = d[0];
    var e = Ri[A(b, 2)];
    e = void 0 === e ? null : e;
    var f;
    if (!(f = null == e)) {
      a: {
        f = a.h;
        switch (e) {
          case 0:
            f = sj(tj(d), f);
            break a;
          case 3:
            f = sj(d, f);
            break a;
          case 2:
            var g = d.lastChild;
            f = sj(g ? (1 == g.nodeType ? g : tj(g)) : null, f);
            break a;
        }
        f = !1;
      }
      if ((c = !f && !(!c && 2 == e && !uj(d))))
        (c = 1 == e || 2 == e ? d : d.parentNode),
          (c = !(c && !ue(c) && 0 >= c.offsetWidth));
      f = !c;
    }
    if (!(c = f)) {
      c = a.A;
      f = A(b, 2);
      g = za(d);
      g = c.i.h.get(g);
      if (!(g = g ? g.contains(f) : !1))
        a: {
          if (c.h.contains(za(d)))
            switch (f) {
              case 2:
              case 3:
                g = !0;
                break a;
              default:
                g = !1;
                break a;
            }
          for (f = d.parentElement; f; ) {
            if (c.h.contains(za(f))) {
              g = !0;
              break a;
            }
            f = f.parentElement;
          }
          g = !1;
        }
      c = g;
    }
    if (!c) {
      c = a.G;
      f = A(b, 2);
      a: switch (f) {
        case 1:
          g = nj(d.previousElementSibling) || pj(d);
          break a;
        case 4:
          g = nj(d) || pj(d.nextElementSibling);
          break a;
        case 2:
          g = pj(d.firstElementChild);
          break a;
        case 3:
          g = nj(d.lastElementChild);
          break a;
        default:
          throw Error("Unknown RelativePosition: " + f);
      }
      c = g || qj(c, d, f);
    }
    if (c) return null;
    c = G(b, ce, 3);
    f = {};
    c && ((f.Wa = A(c, 1)), (f.Ha = A(c, 2)), (f.cb = !!yb(c, 3)));
    c = G(b, Qd, 4) && A(G(b, Qd, 4), 2) ? A(G(b, Qd, 4), 2) : null;
    c = Td(c);
    g = null != A(b, 12) ? A(b, 12) : null;
    g = null == g ? null : new Rd(null, { google_ml_rank: g });
    b = zj(a, b);
    b = Sd(a.m, c, g, b);
    c = a.h;
    a = a.H;
    var h = c.document,
      k = f.cb || !1;
    g = new Cc(h).createElement("DIV");
    var l = g.style;
    l.width = "100%";
    l.height = "auto";
    l.clear = k ? "both" : "none";
    k = g.style;
    k.textAlign = "center";
    f.lb && Hi(k, f.lb);
    h = new Cc(h).createElement("INS");
    k = h.style;
    k.display = "block";
    k.margin = "auto";
    k.backgroundColor = "transparent";
    f.Wa && (k.marginTop = f.Wa);
    f.Ha && (k.marginBottom = f.Ha);
    f.ab && Hi(k, f.ab);
    g.appendChild(h);
    f = { ra: g, ha: h };
    f.ha.setAttribute("data-ad-format", "auto");
    g = [];
    if ((h = b && b.Ja)) f.ra.className = h.join(" ");
    h = f.ha;
    h.className = "adsbygoogle";
    h.setAttribute("data-ad-client", a);
    g.length && h.setAttribute("data-ad-channel", g.join("+"));
    a: {
      try {
        var m = f.ra;
        var q = void 0 === q ? 0 : q;
        if (P(Re)) {
          q = void 0 === q ? 0 : q;
          var t = Bf(d, e, q);
          if (t.init) {
            var y = t.init;
            for (d = y; (d = t.ja(d)); ) y = d;
            var F = { anchor: y, position: t.na };
          } else F = { anchor: d, position: e };
          m["google-ama-order-assurance"] = q;
          ve(m, F.anchor, F.position);
        } else ve(m, d, e);
        b: {
          var z = f.ha;
          z.dataset.adsbygoogleStatus = "reserved";
          z.className += " adsbygoogle-noablate";
          m = { element: z };
          var E = b && b.Qa;
          if (z.hasAttribute("data-pub-vars")) {
            try {
              E = JSON.parse(z.getAttribute("data-pub-vars"));
            } catch (S) {
              break b;
            }
            z.removeAttribute("data-pub-vars");
          }
          E && (m.params = E);
          (c.adsbygoogle = c.adsbygoogle || []).push(m);
        }
      } catch (S) {
        (z = f.ra) &&
          z.parentNode &&
          ((E = z.parentNode),
          E.removeChild(z),
          ue(E) &&
            (E.style.display = E.getAttribute("data-init-display") || "none"));
        z = !1;
        break a;
      }
      z = !0;
    }
    return z ? f : null;
  }
  function zj(a, b) {
    return Cd(
      Fd(Ui(b).map(Ud), function (c) {
        Si(a.h).exception = c;
      })
    );
  }
  function Aj(a) {
    if (P(Qe)) var b = null;
    else
      try {
        b = a.getItem("google_ama_config");
      } catch (d) {
        b = null;
      }
    try {
      var c = b ? Ob(ke, b) : null;
    } catch (d) {
      c = null;
    }
    return c;
  }
  function Bj(a) {
    J.call(this, a);
  }
  v(Bj, J);
  function Cj(a) {
    try {
      var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null;
    } catch (d) {
      b = null;
    }
    var c = b;
    return c
      ? Hd(function () {
          return Ob(Bj, c);
        })
      : Ed(null);
  }
  function Dj() {
    this.S = {};
  }
  function Ej() {
    if (Fj) return Fj;
    var a = nd() || window,
      b = a.google_persistent_state_async;
    return null != b &&
      "object" == typeof b &&
      null != b.S &&
      "object" == typeof b.S
      ? (Fj = b)
      : (a.google_persistent_state_async = Fj = new Dj());
  }
  function Gj(a) {
    return Hj[a] || "google_ps_" + a;
  }
  function Ij(a, b, c) {
    b = Gj(b);
    a = a.S;
    var d = a[b];
    return void 0 === d ? (a[b] = c) : d;
  }
  var Fj = null,
    Jj = {},
    Hj =
      ((Jj[8] = "google_prev_ad_formats_by_region"),
      (Jj[9] = "google_prev_ad_slotnames_by_region"),
      Jj);
  function Kj(a) {
    this.h = a || { cookie: "" };
  }
  Kj.prototype.set = function (a, b, c) {
    var d = !1;
    if ("object" === typeof c) {
      var e = c.Sb;
      d = c.Tb || !1;
      var f = c.domain || void 0;
      var g = c.path || void 0;
      var h = c.jb;
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === h && (h = -1);
    this.h.cookie =
      a +
      "=" +
      b +
      (f ? ";domain=" + f : "") +
      (g ? ";path=" + g : "") +
      (0 > h
        ? ""
        : 0 == h
        ? ";expires=" + new Date(1970, 1, 1).toUTCString()
        : ";expires=" + new Date(Date.now() + 1e3 * h).toUTCString()) +
      (d ? ";secure" : "") +
      (null != e ? ";samesite=" + e : "");
  };
  Kj.prototype.get = function (a, b) {
    for (
      var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f;
      e < d.length;
      e++
    ) {
      f = Ja(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  };
  Kj.prototype.isEmpty = function () {
    return !this.h.cookie;
  };
  Kj.prototype.clear = function () {
    for (
      var a = (this.h.cookie || "").split(";"), b = [], c = [], d, e, f = 0;
      f < a.length;
      f++
    )
      (e = Ja(a[f])),
        (d = e.indexOf("=")),
        -1 == d
          ? (b.push(""), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--)
      (c = b[a]),
        this.get(c),
        this.set(c, "", { jb: 0, path: void 0, domain: void 0 });
  };
  function Lj(a) {
    J.call(this, a);
  }
  v(Lj, J);
  function Mj(a) {
    var b = new Lj();
    return B(b, 5, a);
  }
  function Nj() {
    this.A = this.A;
    this.G = this.G;
  }
  Nj.prototype.A = !1;
  Nj.prototype.j = function () {
    if (this.G) for (; this.G.length; ) this.G.shift()();
  };
  function Oj(a) {
    void 0 !== a.addtlConsent &&
      "string" !== typeof a.addtlConsent &&
      (a.addtlConsent = void 0);
    void 0 !== a.gdprApplies &&
      "boolean" !== typeof a.gdprApplies &&
      (a.gdprApplies = void 0);
    return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
      (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
      ? 2
      : a.cmpStatus && "error" !== a.cmpStatus
      ? 0
      : 3;
  }
  function Pj(a, b) {
    b = void 0 === b ? 500 : b;
    Nj.call(this);
    this.h = a;
    this.i = null;
    this.m = {};
    this.H = 0;
    this.C = b;
    this.l = null;
  }
  v(Pj, Nj);
  Pj.prototype.j = function () {
    this.m = {};
    this.l && (zc(this.h, "message", this.l), delete this.l);
    delete this.m;
    delete this.h;
    delete this.i;
    Nj.prototype.j.call(this);
  };
  function Qj(a) {
    return "function" === typeof a.h.__tcfapi || null != Rj(a);
  }
  Pj.prototype.addEventListener = function (a) {
    function b(f, g) {
      clearTimeout(e);
      f
        ? ((c = f),
          (c.internalErrorState = Oj(c)),
          (g && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), g || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    }
    var c = {},
      d = xc(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.C &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.C));
    try {
      Sj(this, "addEventListener", b);
    } catch (f) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Pj.prototype.removeEventListener = function (a) {
    a && a.listenerId && Sj(this, "removeEventListener", null, a.listenerId);
  };
  function Sj(a, b, c, d) {
    c || (c = function () {});
    if ("function" === typeof a.h.__tcfapi) (a = a.h.__tcfapi), a(b, 2, c, d);
    else if (Rj(a)) {
      Tj(a);
      var e = ++a.H;
      a.m[e] = c;
      a.i &&
        ((c = {}),
        a.i.postMessage(
          ((c.__tcfapiCall = {
            command: b,
            version: 2,
            callId: e,
            parameter: d,
          }),
          c),
          "*"
        ));
    } else c({}, !1);
  }
  function Rj(a) {
    if (a.i) return a.i;
    a.i = ad(a.h, "__tcfapiLocator");
    return a.i;
  }
  function Tj(a) {
    a.l ||
      ((a.l = function (b) {
        try {
          var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
            .__tcfapiReturn;
          a.m[c.callId](c.returnValue, c.success);
        } catch (d) {}
      }),
      yc(a.h, "message", a.l));
  }
  function Uj(a) {
    var b = a.u,
      c = a.ta,
      d = a.Ia;
    a = Vj({
      u: b,
      Z: a.Z,
      ka: void 0 === a.ka ? !1 : a.ka,
      la: void 0 === a.la ? !1 : a.la,
    });
    null != a.h || "tcunav" != a.i.message
      ? d(a)
      : Wj(b, c)
          .then(function (e) {
            return e.map(Xj);
          })
          .then(function (e) {
            return e.map(function (f) {
              return Yj(b, f);
            });
          })
          .then(d);
  }
  function Vj(a) {
    var b = a.u,
      c = a.Z,
      d = void 0 === a.ka ? !1 : a.ka;
    if ((a = (void 0 === a.la ? 0 : a.la) || !Qj(new Pj(b)))) {
      if (!d) {
        if (!(c = !c))
          if (((c = Cj(b)), null == c.h))
            Vi.I(806, c.i, void 0, void 0), (c = !1);
          else if ((c = c.h.value) && null != A(c, 1))
            b: switch (((c = A(c, 1)), c)) {
              case 1:
                c = !0;
                break b;
              default:
                throw Error("Unhandled AutoGdprFeatureStatus: " + c);
            }
          else c = !1;
        d = c;
      }
      a = d;
    }
    if (a) return Yj(b, Mj(!0));
    c = Ej();
    return (c = Ij(c, 24)) ? Yj(b, Xj(c)) : Gd(Error("tcunav"));
  }
  function Wj(a, b) {
    return p.Promise.race([Zj(), ak(a, b)]);
  }
  function Zj() {
    return new p.Promise(function (a) {
      var b = Ej();
      a = { resolve: a };
      var c = Ij(b, 25, []);
      c.push(a);
      b.S[Gj(25)] = c;
    }).then(bk);
  }
  function ak(a, b) {
    return new p.Promise(function (c) {
      a.setTimeout(c, b, Gd(Error("tcto")));
    });
  }
  function bk(a) {
    return a ? Ed(a) : Gd(Error("tcnull"));
  }
  function Xj(a) {
    var b = void 0 === b ? !1 : b;
    if (!1 === a.gdprApplies) var c = !0;
    else
      void 0 === a.internalErrorState && (a.internalErrorState = Oj(a)),
        (c =
          "error" === a.cmpStatus ||
          0 !== a.internalErrorState ||
          ("loaded" === a.cmpStatus &&
            ("tcloaded" === a.eventStatus ||
              "useractioncomplete" === a.eventStatus))
            ? !0
            : !1);
    if (c)
      if (
        !1 === a.gdprApplies ||
        "tcunavailable" === a.tcString ||
        (void 0 === a.gdprApplies && !b) ||
        "string" !== typeof a.tcString ||
        !a.tcString.length
      )
        a = !0;
      else {
        var d = void 0 === d ? "755" : d;
        b: {
          if (
            a.publisher &&
            a.publisher.restrictions &&
            ((b = a.publisher.restrictions["1"]), void 0 !== b)
          ) {
            b = b[void 0 === d ? "755" : d];
            break b;
          }
          b = void 0;
        }
        0 === b
          ? (a = !1)
          : a.purpose && a.vendor
          ? ((b = a.vendor.consents),
            (d = !(!b || !b[void 0 === d ? "755" : d])) &&
            a.purposeOneTreatment &&
            "CH" === a.publisherCC
              ? (a = !0)
              : (d && ((a = a.purpose.consents), (d = !(!a || !a["1"]))),
                (a = d)))
          : (a = !0);
      }
    else a = !1;
    return Mj(a);
  }
  function Yj(a, b) {
    a: {
      a = void 0 === a ? window : a;
      if (yb(b, 5))
        try {
          var c = a.localStorage;
          break a;
        } catch (d) {}
      c = null;
    }
    return (b = c) ? Ed(b) : Gd(Error("unav"));
  }
  function ck(a) {
    J.call(this, a);
  }
  v(ck, J);
  function dk(a) {
    J.call(this, a, -1, ek);
  }
  v(dk, J);
  var ek = [1, 2];
  function fk(a) {
    this.exception = a;
  }
  function gk(a, b, c) {
    this.j = a;
    this.h = b;
    this.i = c;
  }
  gk.prototype.start = function () {
    this.l();
  };
  gk.prototype.l = function () {
    try {
      switch (this.j.document.readyState) {
        case "complete":
        case "interactive":
          xj(this.h, !0);
          hk(this);
          break;
        default:
          xj(this.h, !1) ? hk(this) : this.j.setTimeout(Ea(this.l, this), 100);
      }
    } catch (a) {
      hk(this, a);
    }
  };
  function hk(a, b) {
    try {
      var c = a.i,
        d = c.resolve,
        e = a.h;
      Si(e.h);
      H(e.j, de, 1);
      d.call(c, new fk(b));
    } catch (f) {
      a.i.reject(f);
    }
  }
  function ik() {
    this.h = {};
  }
  function jk() {
    kk || (kk = new lk());
    var a = mk,
      b = kk.h[a.key];
    if ("proto" === a.valueType) {
      try {
        var c = JSON.parse(b);
        if (Array.isArray(c)) return c;
      } catch (d) {}
      return a.defaultValue;
    }
    return typeof b === typeof a.defaultValue ? b : a.defaultValue;
  }
  function nk(a) {
    J.call(this, a, -1, ok);
  }
  v(nk, J);
  function pk(a) {
    J.call(this, a);
  }
  v(pk, J);
  function qk(a) {
    J.call(this, a);
  }
  v(qk, J);
  var ok = [7];
  var mk = new (function (a, b) {
    this.key = a;
    this.defaultValue = void 0 === b ? !1 : b;
    this.valueType = "boolean";
  })("45368529");
  function lk() {
    this.h = {};
    var a = w.__fcexpdef || "";
    try {
      var b = JSON.parse(a)[0];
      a = "";
      for (var c = 0; c < b.length; c++)
        a += String.fromCharCode(
          b.charCodeAt(c) ^
            "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(
              c % 10
            )
        );
      this.h = JSON.parse(a);
    } catch (d) {}
  }
  var kk;
  v(lk, ik);
  function rk(a) {
    if ((a = new Kj(a).get("FCCDCF", "")))
      if (jk())
        if (r(a, "startsWith").call(a, "%"))
          try {
            var b = decodeURIComponent(a);
          } catch (c) {
            b = null;
          }
        else b = a;
      else b = a;
    else b = null;
    try {
      return b ? Ob(nk, b) : null;
    } catch (c) {
      return null;
    }
  }
  $b({
    Gb: 0,
    Fb: 1,
    Cb: 2,
    xb: 3,
    Db: 4,
    yb: 5,
    Eb: 6,
    Ab: 7,
    Bb: 8,
    wb: 9,
    zb: 10,
  }).map(function (a) {
    return Number(a);
  });
  $b({ Ib: 0, Jb: 1, Hb: 2 }).map(function (a) {
    return Number(a);
  });
  function sk(a) {
    function b() {
      if (!a.frames.__uspapiLocator)
        if (c.body) {
          var d = Nc("IFRAME", c);
          d.style.display = "none";
          d.style.width = "0px";
          d.style.height = "0px";
          d.style.border = "none";
          d.style.zIndex = "-1000";
          d.style.left = "-1000px";
          d.style.top = "-1000px";
          d.name = "__uspapiLocator";
          c.body.appendChild(d);
        } else a.setTimeout(b, 5);
    }
    var c = a.document;
    b();
  }
  function tk(a) {
    this.h = a;
    this.i = a.document;
    this.j = (a = (a = rk(this.i)) ? G(a, qk, 5) || null : null)
      ? A(a, 2)
      : null;
    (a = rk(this.i)) && G(a, pk, 4);
    (a = rk(this.i)) && G(a, pk, 4);
  }
  function uk() {
    var a = window;
    a.__uspapi || a.frames.__uspapiLocator || ((a = new tk(a)), vk(a));
  }
  function vk(a) {
    !a.j ||
      a.h.__uspapi ||
      a.h.frames.__uspapiLocator ||
      ((a.h.__uspapiManager = "fc"),
      sk(a.h),
      Ga(function () {
        return a.l.apply(a, ka(ta.apply(0, arguments)));
      }));
  }
  tk.prototype.l = function (a, b, c) {
    "function" === typeof c &&
      "getUSPData" === a &&
      c({ version: 1, uspString: this.j }, !0);
  };
  function wk(a) {
    J.call(this, a);
  }
  v(wk, J);
  wk.prototype.getWidth = function () {
    return C(this, 1, 0);
  };
  wk.prototype.getHeight = function () {
    return C(this, 2, 0);
  };
  function xk(a) {
    J.call(this, a);
  }
  v(xk, J);
  function yk(a) {
    J.call(this, a);
  }
  v(yk, J);
  var zk = [4, 5];
  function Ak(a) {
    var b = /[a-zA-Z0-9._~-]/,
      c = /%[89a-zA-Z]./;
    return a.replace(/(%[a-zA-Z0-9]{2})/g, function (d) {
      if (!d.match(c)) {
        var e = decodeURIComponent(d);
        if (e.match(b)) return e;
      }
      return d.toUpperCase();
    });
  }
  function Bk(a) {
    for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
      var e = a[d];
      b = e.match(c) ? b + e : b + encodeURIComponent(e);
    }
    return b;
  }
  function Ck(a, b) {
    a = Bk(Ak(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
    var c = Uc(a),
      d = Dk(a);
    return (
      r(b, "find").call(b, function (e) {
        var f = null != A(e, 7) ? A(G(e, pe, 7), 1) : A(e, 1);
        e = null != A(e, 7) ? A(G(e, pe, 7), 2) : 2;
        if ("number" !== typeof f) return !1;
        switch (e) {
          case 1:
            return f == c;
          case 2:
            return d[f] || !1;
        }
        return !1;
      }) || null
    );
  }
  function Dk(a) {
    for (var b = {}; ; ) {
      b[Uc(a)] = !0;
      if (!a) return b;
      a = a.substring(0, a.lastIndexOf("/"));
    }
  }
  var Ek = {},
    Fk = ((Ek.google_ad_channel = !0), (Ek.google_ad_host = !0), Ek);
  function Gk(a, b) {
    a.location.href &&
      a.location.href.substring &&
      (b.url = a.location.href.substring(0, 200));
    Zi("ama", b, 0.01);
  }
  function Hk(a) {
    var b = {};
    Tc(Fk, function (c, d) {
      d in a && (b[d] = a[d]);
    });
    return b;
  }
  function Ik(a) {
    a = G(a, me, 3);
    return !a || A(a, 1) <= Date.now() ? !1 : !0;
  }
  function Jk(a) {
    return (a = Aj(a)) ? (Ik(a) ? a : null) : null;
  }
  function Kk(a, b) {
    try {
      b.removeItem("google_ama_config");
    } catch (c) {
      Gk(a, { lserr: 1 });
    }
  }
  function Lk(a) {
    J.call(this, a);
  }
  v(Lk, J);
  function Mk(a) {
    J.call(this, a, -1, Nk);
  }
  v(Mk, J);
  var Nk = [1];
  function Ok(a) {
    J.call(this, a, -1, Pk);
  }
  v(Ok, J);
  Ok.prototype.getId = function () {
    return C(this, 1, 0);
  };
  Ok.prototype.V = function () {
    return C(this, 7, 0);
  };
  var Pk = [2];
  function Qk(a) {
    J.call(this, a, -1, Rk);
  }
  v(Qk, J);
  Qk.prototype.V = function () {
    return C(this, 5, 0);
  };
  var Rk = [2];
  function Sk(a) {
    J.call(this, a, -1, Tk);
  }
  v(Sk, J);
  function Uk(a) {
    J.call(this, a, -1, Vk);
  }
  v(Uk, J);
  Uk.prototype.V = function () {
    return C(this, 1, 0);
  };
  function Wk(a) {
    J.call(this, a);
  }
  v(Wk, J);
  var Tk = [1, 4, 2, 3],
    Vk = [2];
  function Xk(a) {
    J.call(this, a, -1, Yk);
  }
  v(Xk, J);
  function Zk(a) {
    return Jb(a, Mk, 14, $k);
  }
  var Yk = [19],
    $k = [13, 14];
  var al = void 0;
  function bl() {
    Zf(al, Yf);
    return al;
  }
  function cl(a) {
    Zf(al, ag);
    al = a;
  }
  function dl(a, b, c, d) {
    c = void 0 === c ? "" : c;
    return 1 === b && el(c, void 0 === d ? null : d)
      ? !0
      : fl(a, c, function (e) {
          return Va(H(e, Ub, 2), function (f) {
            return A(f, 1) === b;
          });
        });
  }
  function el(a, b) {
    return b
      ? 13 === Db(b, $k)
        ? D(Jb(b, Lk, 13, $k), 1)
        : 14 === Db(b, $k) &&
          "" !== a &&
          1 === xb(Zk(b), 1).length &&
          xb(Zk(b), 1)[0] === a
        ? D(G(Zk(b), Lk, 2), 1)
        : !1
      : !1;
  }
  function gl(a, b) {
    b = C(b, 18, 0);
    -1 !== b && (a.tmod = b);
  }
  function hl(a) {
    var b = void 0 === b ? "" : b;
    var c = Jc(L) || L;
    return il(c, a)
      ? !0
      : fl(L, b, function (d) {
          return Va(xb(d, 3), function (e) {
            return e === a;
          });
        });
  }
  function jl(a) {
    return fl(w, void 0 === a ? "" : a, function () {
      return !0;
    });
  }
  function il(a, b) {
    a =
      (a =
        (a = a.location && a.location.hash) &&
        a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
    return !!a && Ya(a.split(","), b.toString());
  }
  function fl(a, b, c) {
    a = Jc(a) || a;
    var d = kl(a);
    b && (b = sd(String(b)));
    return Zb(d, function (e, f) {
      return (
        Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
      );
    });
  }
  function kl(a) {
    a = ll(a);
    var b = {};
    Tc(a, function (c, d) {
      try {
        var e = new Sb(c);
        b[d] = e;
      } catch (f) {}
    });
    return b;
  }
  function ll(a) {
    return P(ye)
      ? ((a = Vj({ u: a, Z: bl() })),
        null != a.h
          ? (ml("ok"), (a = nl(a.h.value)))
          : (ml(a.i.message), (a = {})),
        a)
      : nl(a.localStorage);
  }
  function nl(a) {
    try {
      var b = a.getItem("google_adsense_settings");
      if (!b) return {};
      var c = JSON.parse(b);
      return c !== Object(c)
        ? {}
        : Yb(c, function (d, e) {
            return (
              Object.prototype.hasOwnProperty.call(c, e) &&
              "string" === typeof e &&
              Array.isArray(d)
            );
          });
    } catch (d) {
      return {};
    }
  }
  function ml(a) {
    P(xe) &&
      Zi(
        "abg_adsensesettings_lserr",
        { s: a, g: P(ye), c: bl(), r: 0.01 },
        0.01
      );
  }
  function ol(a, b, c, d) {
    pl(new ql(a, b, c, d));
  }
  function ql(a, b, c, d) {
    this.u = a;
    this.i = b;
    this.j = c;
    this.h = d;
  }
  function pl(a) {
    Fd(
      Dd(Vj({ u: a.u, Z: D(a.i, 6) }), function (b) {
        rl(a, b, !0);
      }),
      function () {
        sl(a);
      }
    );
  }
  function rl(a, b, c) {
    Fd(
      Dd(tl(b), function (d) {
        ul("ok");
        a.h(d);
      }),
      function () {
        Kk(a.u, b);
        c ? sl(a) : a.h(null);
      }
    );
  }
  function sl(a) {
    Fd(Dd(vl(a), a.h), function () {
      wl(a);
    });
  }
  function wl(a) {
    Uj({
      u: a.u,
      Z: D(a.i, 6),
      ta: 50,
      Ia: function (b) {
        xl(a, b);
      },
    });
  }
  function tl(a) {
    return (a = Jk(a)) ? Ed(a) : Gd(Error("invlocst"));
  }
  function vl(a) {
    a: {
      var b = a.u;
      var c = a.j;
      a = a.i;
      if (13 === Db(a, $k))
        b =
          (b = G(G(Jb(a, Lk, 13, $k), ck, 2), dk, 2)) && 0 < H(b, de, 1).length
            ? b
            : null;
      else {
        if (14 === Db(a, $k)) {
          var d = xb(Zk(a), 1),
            e = G(G(G(Zk(a), Lk, 2), ck, 2), dk, 2);
          if (
            1 === d.length &&
            d[0] === c &&
            e &&
            0 < H(e, de, 1).length &&
            I(a, 17) === b.location.host
          ) {
            b = e;
            break a;
          }
        }
        b = null;
      }
    }
    b
      ? ((c = new ke()),
        (a = H(b, de, 1)),
        (c = Hb(c, 1, a)),
        (b = H(b, ne, 2)),
        (b = Hb(c, 7, b)),
        (b = Ed(b)))
      : (b = Gd(Error("invtag")));
    return b;
  }
  function xl(a, b) {
    Fd(
      Dd(b, function (c) {
        rl(a, c, !1);
      }),
      function (c) {
        ul(c.message);
        a.h(null);
      }
    );
  }
  function ul(a) {
    Zi(
      "abg::amalserr",
      { status: a, guarding: "true", timeout: 50, rate: 0.01 },
      0.01
    );
  }
  function yl(a) {
    Gk(a, { atf: 1 });
  }
  function zl(a, b) {
    (a.google_ama_state = a.google_ama_state || {}).exception = b;
    Gk(a, { atf: 0 });
  }
  function U(a) {
    a.google_ad_modifications || (a.google_ad_modifications = {});
    return a.google_ad_modifications;
  }
  function Al(a) {
    a = U(a);
    var b = a.space_collapsing || "none";
    return a.remove_ads_by_default
      ? { Fa: !0, tb: b, qa: a.ablation_viewport_offset }
      : null;
  }
  function Bl(a, b) {
    a = U(a);
    a.had_ads_ablation = !0;
    a.remove_ads_by_default = !0;
    a.space_collapsing = "slot";
    a.ablation_viewport_offset = b;
  }
  function Cl(a) {
    U(L).allow_second_reactive_tag = a;
  }
  function Dl() {
    var a = U(window);
    a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
    return a.afg_slotcar_vars;
  }
  function El(a, b) {
    if (!a) return !1;
    a = a.hash;
    if (!a || !a.indexOf) return !1;
    if (-1 != a.indexOf(b)) return !0;
    b = Fl(b);
    return "go" != b && -1 != a.indexOf(b) ? !0 : !1;
  }
  function Fl(a) {
    var b = "";
    Tc(a.split("_"), function (c) {
      b += c.substr(0, 2);
    });
    return b;
  }
  ab || !x("Safari") || Oa();
  function Gl() {
    var a = this;
    this.promise = new p.Promise(function (b, c) {
      a.resolve = b;
      a.reject = c;
    });
  }
  function Hl() {
    var a = new Gl();
    return { promise: a.promise, resolve: a.resolve };
  }
  function Il(a) {
    a = void 0 === a ? function () {} : a;
    w.google_llp || (w.google_llp = {});
    var b = w.google_llp,
      c = b[7];
    if (c) return c;
    c = Hl();
    b[7] = c;
    a();
    return c;
  }
  function Jl(a) {
    return Il(function () {
      Mc(w.document, a);
    }).promise;
  }
  function Kl(a) {
    var b = {};
    return { enable_page_level_ads: ((b.pltais = !0), b), google_ad_client: a };
  }
  function Ll(a) {
    if (w.google_apltlad || w !== w.top || !a.google_ad_client) return null;
    w.google_apltlad = !0;
    var b = Kl(a.google_ad_client),
      c = b.enable_page_level_ads;
    Tc(a, function (d, e) {
      Fi[e] && "google_ad_client" !== e && (c[e] = d);
    });
    c.google_pgb_reactive = 7;
    if ("google_ad_section" in a || "google_ad_region" in a)
      c.google_ad_section = a.google_ad_section || a.google_ad_region;
    return b;
  }
  function Ml(a) {
    return (
      ya(a.enable_page_level_ads) &&
      7 === a.enable_page_level_ads.google_pgb_reactive
    );
  }
  function Nl(a, b) {
    this.h = w;
    this.i = a;
    this.j = b;
  }
  function Ol(a) {
    P(mf)
      ? ol(a.h, a.j, a.i.google_ad_client || "", function (b) {
          var c = a.h,
            d = a.i;
          U(L).ama_ran_on_page || (b && Pl(c, d, b));
        })
      : Uj({
          u: a.h,
          Z: D(a.j, 6),
          ta: 50,
          Ia: function (b) {
            return Ql(a, b);
          },
        });
  }
  function Ql(a, b) {
    Fd(
      Dd(b, function (c) {
        Rl("ok");
        var d = a.h,
          e = a.i;
        if (!U(L).ama_ran_on_page) {
          var f = Jk(c);
          f ? Pl(d, e, f) : Kk(d, c);
        }
      }),
      function (c) {
        return Rl(c.message);
      }
    );
  }
  function Rl(a) {
    Zi(
      "abg::amalserr",
      { status: a, guarding: !0, timeout: 50, rate: 0.01 },
      0.01
    );
  }
  function Pl(a, b, c) {
    if (null != A(c, 24)) {
      var d = Ti(a);
      d.availableAbg = !0;
      var e, f;
      d.ablationFromStorage = !!(null == (e = G(c, fe, 24))
        ? 0
        : null == (f = G(e, he, 3))
        ? 0
        : Jb(f, ie, 2, je));
    }
    if (Ml(b) && ((d = Ck(a, H(c, ne, 7))), !d || !yb(d, 8))) return;
    U(L).ama_ran_on_page = !0;
    var g;
    if (null == (g = G(c, se, 15)) ? 0 : yb(g, 23))
      U(a).enable_overlap_observer = !0;
    if ((g = G(c, qe, 13)) && 1 === A(g, 1)) {
      var h = 0,
        k = G(g, re, 6);
      k && A(k, 3) && (h = A(k, 3) || 0);
      Bl(a, h);
    } else if (
      null == (h = G(c, fe, 24))
        ? 0
        : null == (k = G(h, he, 3))
        ? 0
        : Jb(k, ie, 2, je)
    )
      (Ti(a).ablatingThisPageview = !0), Bl(a, 1);
    ld(3, [c.toJSON()]);
    var l = b.google_ad_client || "";
    b = Hk(ya(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
    var m = Sd(Wd, new Rd(null, b));
    Xi(782, function () {
      var q = m;
      try {
        var t = Ck(a, H(c, ne, 7)),
          y;
        if ((y = t))
          a: {
            var F = xb(t, 2);
            if (F)
              for (var z = 0; z < F.length; z++)
                if (1 == F[z]) {
                  y = !0;
                  break a;
                }
            y = !1;
          }
        if (y) {
          if (A(t, 4)) {
            y = {};
            var E = new Rd(null, ((y.google_package = A(t, 4)), y));
            q = Sd(q, E);
          }
          var S = new wj(a, l, c, t, q),
            sb = new td();
          new gk(a, S, sb).start();
          sb.i.then(Fa(yl, a), Fa(zl, a));
        }
      } catch (Lc) {
        Gk(a, { atf: -1 });
      }
    });
  } /* 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
  var Sl = ja([
    "https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700",
  ]);
  function Tl(a, b) {
    return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1;
  }
  function Ul(a) {
    var b = L.document;
    if (b.currentScript) return Tl(b.currentScript, a);
    b = u(b.scripts);
    for (var c = b.next(); !c.done; c = b.next())
      if (0 === Tl(c.value, a)) return 0;
    return 1;
  }
  function Vl(a, b) {
    var c = {},
      d = {},
      e = {},
      f = {};
    return (
      (f[gg] =
        ((c[55] = function () {
          return 0 === a;
        }),
        (c[23] = function (g) {
          return dl(L, Number(g));
        }),
        (c[24] = function (g) {
          return hl(Number(g));
        }),
        (c[61] = function () {
          return D(b, 6);
        }),
        (c[63] = function () {
          return D(b, 6) || ".google.ch" === I(b, 8);
        }),
        c)),
      (f[hg] =
        ((d[7] = function (g) {
          try {
            var h = window.localStorage;
          } catch (l) {
            h = null;
          }
          g = Number(g);
          g = void 0 === g ? 0 : g;
          g = 0 !== g ? "google_experiment_mod" + g : "google_experiment_mod";
          var k = Wc(h, g);
          h = null === k ? Xc(h, g) : k;
          return null != h ? h : void 0;
        }),
        d)),
      (f[ig] =
        ((e[6] = function () {
          return I(b, 15);
        }),
        e)),
      f
    );
  }
  function Wl(a) {
    a = void 0 === a ? w : a;
    return a.ggeac || (a.ggeac = {});
  }
  function Xl(a, b) {
    try {
      var c = a.split(".");
      a = w;
      for (var d = 0, e; null != a && d < c.length; d++)
        (e = a), (a = a[c[d]]), "function" === typeof a && (a = e[c[d]]());
      var f = a;
      if (typeof f === b) return f;
    } catch (g) {}
  }
  function Yl() {
    var a = {};
    this[gg] =
      ((a[8] = function (b) {
        try {
          return null != va(b);
        } catch (c) {}
      }),
      (a[9] = function (b) {
        try {
          var c = va(b);
        } catch (d) {
          return;
        }
        if ((b = "function" === typeof c))
          (c = c && c.toString && c.toString()),
            (b = "string" === typeof c && -1 != c.indexOf("[native code]"));
        return b;
      }),
      (a[10] = function () {
        return window == window.top;
      }),
      (a[6] = function (b) {
        return Ya(O(Ph).h(), parseInt(b, 10));
      }),
      (a[27] = function (b) {
        b = Xl(b, "boolean");
        return void 0 !== b ? b : void 0;
      }),
      (a[60] = function (b) {
        try {
          return !!w.document.querySelector(b);
        } catch (c) {}
      }),
      a);
    a = {};
    this[hg] =
      ((a[3] = function () {
        return bd();
      }),
      (a[6] = function (b) {
        b = Xl(b, "number");
        return void 0 !== b ? b : void 0;
      }),
      (a[11] = function (b) {
        b = void 0 === b ? "" : b;
        var c = w;
        b = void 0 === b ? "" : b;
        c = void 0 === c ? window : c;
        b = (c = (c = c.location.href.match(Fc)[3] || null) ? decodeURI(c) : c)
          ? Uc(c + b)
          : null;
        return null == b ? void 0 : b % 1e3;
      }),
      a);
    a = {};
    this[ig] =
      ((a[2] = function () {
        return window.location.href;
      }),
      (a[3] = function () {
        try {
          return window.top.location.hash;
        } catch (b) {
          return "";
        }
      }),
      (a[4] = function (b) {
        b = Xl(b, "string");
        return void 0 !== b ? b : void 0;
      }),
      (a[10] = function () {
        try {
          var b = w.document;
          return (
            b.visibilityState ||
            b.webkitVisibilityState ||
            b.mozVisibilityState ||
            ""
          );
        } catch (c) {
          return "";
        }
      }),
      (a[11] = function () {
        try {
          var b, c, d, e, f;
          return null !=
            (f =
              null ==
              (d =
                null == (b = va("google_tag_data"))
                  ? void 0
                  : null == (c = b.uach)
                  ? void 0
                  : c.fullVersionList)
                ? void 0
                : null ==
                  (e = r(d, "find").call(d, function (g) {
                    return "Google Chrome" === g.brand;
                  }))
                ? void 0
                : e.version)
            ? f
            : "";
        } catch (g) {
          return "";
        }
      }),
      a);
  }
  var Zl = [12, 13, 20];
  function $l() {}
  $l.prototype.init = function (a, b, c, d) {
    var e = this;
    d = void 0 === d ? {} : d;
    var f = void 0 === d.Ka ? !1 : d.Ka,
      g = void 0 === d.kb ? {} : d.kb;
    d = void 0 === d.mb ? [] : d.mb;
    this.l = a;
    this.A = {};
    this.G = f;
    this.m = g;
    a = {};
    this.i = ((a[b] = []), (a[4] = []), a);
    this.j = {};
    (b = Xh()) &&
      Sa(b.split(",") || [], function (h) {
        (h = parseInt(h, 10)) && (e.j[h] = !0);
      });
    Sa(d, function (h) {
      e.j[h] = !0;
    });
    this.h = c;
    return this;
  };
  function am(a, b, c) {
    var d = [],
      e = bm(a.l, b),
      f;
    if ((f = 9 !== b)) a.A[b] ? (f = !0) : ((a.A[b] = !0), (f = !1));
    if (f) {
      var g;
      null == (g = a.h) || Vg(g, b, c, d, [], 4);
      return d;
    }
    if (!e.length) {
      var h;
      null == (h = a.h) || Vg(h, b, c, d, [], 3);
      return d;
    }
    var k = Ya(Zl, b),
      l = [];
    Sa(e, function (q) {
      var t = new Kg();
      if ((q = cm(a, q, c, t)))
        0 !== Db(t, Lg) && l.push(t),
          (t = q.getId()),
          d.push(t),
          dm(a, t, k ? 4 : c),
          (q = H(q, rg, 2)) && (k ? ph(q, rh(), a.h, t) : ph(q, [c], a.h, t));
    });
    var m;
    null == (m = a.h) || Vg(m, b, c, d, l, 1);
    return d;
  }
  function dm(a, b, c) {
    a.i[c] || (a.i[c] = []);
    a = a.i[c];
    Ya(a, b) || a.push(b);
  }
  function em(a, b) {
    a.l.push.apply(
      a.l,
      ka(
        Ta(
          Ua(b, function (c) {
            return new Uk(c);
          }),
          function (c) {
            return !Ya(Zl, c.V());
          }
        )
      )
    );
  }
  function cm(a, b, c, d) {
    var e = O(bh).h;
    if (!ng(G(b, bg, 3), e)) return null;
    var f = H(b, Ok, 2),
      g = C(b, 6, 0);
    if (g) {
      Cb(d, 1, Lg, g);
      f = e[hg];
      switch (c) {
        case 2:
          var h = f[8];
          break;
        case 1:
          h = f[7];
      }
      c = void 0;
      if (h)
        try {
          (c = h(g)), Bb(d, 3, c);
        } catch (k) {}
      return (b = fm(b, c)) ? gm(a, [b], 1) : null;
    }
    if ((g = C(b, 10, 0))) {
      Cb(d, 2, Lg, g);
      h = null;
      switch (c) {
        case 1:
          h = e[hg][9];
          break;
        case 2:
          h = e[hg][10];
          break;
        default:
          return null;
      }
      c = h ? h(String(g)) : void 0;
      if (void 0 === c && 1 === C(b, 11, 0)) return null;
      void 0 !== c && Bb(d, 3, c);
      return (b = fm(b, c)) ? gm(a, [b], 1) : null;
    }
    d = e
      ? Ta(f, function (k) {
          return ng(G(k, bg, 3), e);
        })
      : f;
    if (!d.length) return null;
    c = d.length * C(b, 1, 0);
    return (b = C(b, 4, 0)) ? hm(a, b, c, d) : gm(a, d, c / 1e3);
  }
  function hm(a, b, c, d) {
    var e = null != a.m[b] ? a.m[b] : 1e3;
    if (0 >= e) return null;
    d = gm(a, d, c / e);
    a.m[b] = d ? 0 : e - c;
    return d;
  }
  function gm(a, b, c) {
    var d = a.j,
      e = Wa(b, function (f) {
        return !!d[f.getId()];
      });
    return e ? e : a.G ? null : Pc(b, c);
  }
  function im(a, b) {
    Kh(
      uh,
      function (c) {
        a.j[c] = !0;
      },
      b
    );
    Kh(
      xh,
      function (c, d) {
        return am(a, c, d);
      },
      b
    );
    Kh(
      yh,
      function (c) {
        return (a.i[c] || []).concat(a.i[4]);
      },
      b
    );
    Kh(
      Hh,
      function (c) {
        return em(a, c);
      },
      b
    );
    Kh(
      vh,
      function (c, d) {
        return dm(a, c, d);
      },
      b
    );
  }
  function bm(a, b) {
    return (
      ((a = Wa(a, function (c) {
        return c.V() == b;
      })) &&
        H(a, Qk, 2)) ||
      []
    );
  }
  function fm(a, b) {
    var c = H(a, Ok, 2),
      d = c.length,
      e = C(a, 8, 0);
    a = d * C(a, 1, 0) - 1;
    b = void 0 !== b ? b : Math.floor(1e3 * Sc());
    d = (b - e) % d;
    if (b < e || b - e - d >= a) return null;
    c = c[d];
    e = O(bh).h;
    return !c || (e && !ng(G(c, bg, 3), e)) ? null : c;
  }
  function jm() {
    this.h = function () {};
  }
  function km(a) {
    O(jm).h(a);
  }
  var lm, mm, nm, om, pm, qm;
  function rm(a, b, c, d) {
    var e = 1;
    d = void 0 === d ? Wl() : d;
    e = void 0 === e ? 0 : e;
    var f =
      void 0 === f
        ? new Ug(
            null != (om = null == (lm = G(a, Wk, 5)) ? void 0 : C(lm, 2, 0))
              ? om
              : 0,
            null != (pm = null == (mm = G(a, Wk, 5)) ? void 0 : C(mm, 4, 0))
              ? pm
              : 0,
            null != (qm = null == (nm = G(a, Wk, 5)) ? void 0 : D(nm, 3))
              ? qm
              : !1
          )
        : f;
    d.hasOwnProperty("init-done")
      ? (Lh(
          Hh,
          d
        )(
          Ua(H(a, Uk, 2), function (g) {
            return g.toJSON();
          })
        ),
        Lh(Ih, d)(
          Ua(H(a, rg, 1), function (g) {
            return g.toJSON();
          }),
          e
        ),
        b && Lh(Jh, d)(b),
        sm(d, e))
      : (im(O($l).init(H(a, Uk, 2), e, f, c), d),
        Mh(d),
        Nh(d),
        Oh(d),
        sm(d, e),
        ph(H(a, rg, 1), [e], f, void 0, !0),
        (ch = ch || !(!c || !c.hb)),
        km(O(Yl)),
        b && km(b));
  }
  function sm(a, b) {
    a = void 0 === a ? Wl() : a;
    b = void 0 === b ? 0 : b;
    var c = a,
      d = b;
    d = void 0 === d ? 0 : d;
    Qh(O(Ph), c, d);
    tm(a, b);
    O(jm).h = Lh(Jh, a);
    O(zf).m();
  }
  function tm(a, b) {
    var c = O(zf);
    c.i = function (d, e) {
      return Lh(Ah, a, function () {
        return !1;
      })(d, e, b);
    };
    c.j = function (d, e) {
      return Lh(Bh, a, function () {
        return 0;
      })(d, e, b);
    };
    c.l = function (d, e) {
      return Lh(Ch, a, function () {
        return "";
      })(d, e, b);
    };
    c.h = function (d, e) {
      return Lh(Dh, a, function () {
        return [];
      })(d, e, b);
    };
    c.m = function () {
      Lh(wh, a)(b);
    };
  }
  function um(a, b, c) {
    var d = U(a);
    if (d.plle) sm(Wl(a), 1);
    else {
      d.plle = !0;
      try {
        var e = a.localStorage;
      } catch (f) {
        e = null;
      }
      d = e;
      null == Wc(d, "goog_pem_mod") && Xc(d, "goog_pem_mod");
      d = G(b, Sk, 12);
      e = D(b, 9);
      rm(
        d,
        Vl(c, b),
        { Ka: e && !!a.google_disable_experiments, hb: e },
        Wl(a)
      );
      if ((c = I(b, 15))) (c = Number(c)), O(Ph).l(c);
      b = u(xb(b, 19));
      for (c = b.next(); !c.done; c = b.next()) (c = c.value), O(Ph).j(c);
      O(Ph).i(12);
      O(Ph).i(10);
      a = Jc(a) || a;
      El(a.location, "google_mc_lab") && O(Ph).j(44738307);
    }
  }
  function vm(a, b, c) {
    a = a.style;
    a.border = "none";
    a.height = c + "px";
    a.width = b + "px";
    a.margin = 0;
    a.padding = 0;
    a.position = "relative";
    a.visibility = "visible";
    a.backgroundColor = "transparent";
  }
  var wm = {
    "120x90": !0,
    "160x90": !0,
    "180x90": !0,
    "200x90": !0,
    "468x15": !0,
    "728x15": !0,
  };
  function xm(a, b) {
    if (15 == b) {
      if (728 <= a) return 728;
      if (468 <= a) return 468;
    } else if (90 == b) {
      if (200 <= a) return 200;
      if (180 <= a) return 180;
      if (160 <= a) return 160;
      if (120 <= a) return 120;
    }
    return null;
  }
  function V(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    xi.call(this, a, b);
    this.da = c;
    this.ib = d;
  }
  v(V, xi);
  V.prototype.pa = function () {
    return this.da;
  };
  V.prototype.i = function (a, b, c) {
    b.google_ad_resize ||
      ((c.style.height = this.height() + "px"), (b.rpe = !0));
  };
  function ym(a) {
    return function (b) {
      return !!(b.da & a);
    };
  }
  var zm = {},
    Am =
      ((zm.image_stacked = 1 / 1.91),
      (zm.image_sidebyside = 1 / 3.82),
      (zm.mobile_banner_image_sidebyside = 1 / 3.82),
      (zm.pub_control_image_stacked = 1 / 1.91),
      (zm.pub_control_image_sidebyside = 1 / 3.82),
      (zm.pub_control_image_card_stacked = 1 / 1.91),
      (zm.pub_control_image_card_sidebyside = 1 / 3.74),
      (zm.pub_control_text = 0),
      (zm.pub_control_text_card = 0),
      zm),
    Bm = {},
    Cm =
      ((Bm.image_stacked = 80),
      (Bm.image_sidebyside = 0),
      (Bm.mobile_banner_image_sidebyside = 0),
      (Bm.pub_control_image_stacked = 80),
      (Bm.pub_control_image_sidebyside = 0),
      (Bm.pub_control_image_card_stacked = 85),
      (Bm.pub_control_image_card_sidebyside = 0),
      (Bm.pub_control_text = 80),
      (Bm.pub_control_text_card = 80),
      Bm),
    Dm = {},
    Em =
      ((Dm.pub_control_image_stacked = 100),
      (Dm.pub_control_image_sidebyside = 200),
      (Dm.pub_control_image_card_stacked = 150),
      (Dm.pub_control_image_card_sidebyside = 250),
      (Dm.pub_control_text = 100),
      (Dm.pub_control_text_card = 150),
      Dm);
  function Fm(a) {
    var b = 0;
    a.T && b++;
    a.J && b++;
    a.K && b++;
    if (3 > b)
      return {
        M: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.",
      };
    b = a.T.split(",");
    var c = a.K.split(",");
    a = a.J.split(",");
    if (b.length !== c.length || b.length !== a.length)
      return {
        M: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"',
      };
    if (2 < b.length)
      return {
        M:
          "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " +
          (b.length +
            ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".'),
      };
    for (var d = [], e = [], f = 0; f < b.length; f++) {
      var g = Number(c[f]);
      if (r(Number, "isNaN").call(Number, g) || 0 === g)
        return {
          M: "Wrong value '" + c[f] + "' for data-matched-content-rows-num.",
        };
      d.push(g);
      g = Number(a[f]);
      if (r(Number, "isNaN").call(Number, g) || 0 === g)
        return {
          M: "Wrong value '" + a[f] + "' for data-matched-content-columns-num.",
        };
      e.push(g);
    }
    return { K: d, J: e, Na: b };
  }
  function Gm(a) {
    return 1200 <= a
      ? { width: 1200, height: 600 }
      : 850 <= a
      ? { width: a, height: Math.floor(0.5 * a) }
      : 550 <= a
      ? { width: a, height: Math.floor(0.6 * a) }
      : 468 <= a
      ? { width: a, height: Math.floor(0.7 * a) }
      : { width: a, height: Math.floor(3.44 * a) };
  }
  var Hm = $a("script");
  function Im(a, b, c, d, e, f, g, h, k, l, m, q) {
    this.A = a;
    this.U = b;
    this.da = void 0 === c ? null : c;
    this.h = void 0 === d ? null : d;
    this.P = void 0 === e ? null : e;
    this.i = void 0 === f ? null : f;
    this.j = void 0 === g ? null : g;
    this.H = void 0 === h ? null : h;
    this.N = void 0 === k ? null : k;
    this.l = void 0 === l ? null : l;
    this.m = void 0 === m ? null : m;
    this.O = void 0 === q ? null : q;
    this.R = this.C = this.G = null;
  }
  Im.prototype.size = function () {
    return this.U;
  };
  function Jm(a, b, c) {
    null != a.da && (c.google_responsive_formats = a.da);
    null != a.P && (c.google_safe_for_responsive_override = a.P);
    null != a.i &&
      (!0 === a.i
        ? (c.google_full_width_responsive_allowed = !0)
        : ((c.google_full_width_responsive_allowed = !1), (c.gfwrnwer = a.i)));
    null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
    var d = a.m || c.google_ad_width;
    null != d && (c.google_resizing_width = d);
    d = a.l || c.google_ad_height;
    null != d && (c.google_resizing_height = d);
    d = a.size().h(b);
    var e = a.size().height();
    if (!c.google_ad_resize) {
      c.google_ad_width = d;
      c.google_ad_height = e;
      var f = a.size();
      b = f.h(b) + "x" + f.height();
      c.google_ad_format = b;
      c.google_responsive_auto_format = a.A;
      null != a.h && (c.armr = a.h);
      c.google_ad_resizable = !0;
      c.google_override_format = 1;
      c.google_loader_features_used = 128;
      !0 === a.i && (c.gfwrnh = a.size().height() + "px");
    }
    null != a.H && (c.gfwroml = a.H);
    null != a.N && (c.gfwromr = a.N);
    null != a.l && (c.gfwroh = a.l);
    null != a.m && (c.gfwrow = a.m);
    null != a.O && (c.gfwroz = a.O);
    null != a.G && (c.gml = a.G);
    null != a.C && (c.gmr = a.C);
    null != a.R && (c.gzi = a.R);
    b = Jc(window) || window;
    El(b.location, "google_responsive_dummy_ad") &&
      (Ya([1, 2, 3, 4, 5, 6, 7, 8], a.A) || 1 === a.h) &&
      2 !== a.h &&
      ((a = JSON.stringify({
        googMsgType: "adpnt",
        key_value: [{ key: "qid", value: "DUMMY_AD" }],
      })),
      (c.dash =
        "<" +
        Hm +
        ">window.top.postMessage('" +
        a +
        "', '*');\n          </" +
        Hm +
        '>\n          <div id="dummyAd" style="width:' +
        d +
        "px;height:" +
        e +
        'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' +
        d +
        "x" +
        e +
        "</p>\n            <p>Rendered size:" +
        d +
        "x" +
        e +
        "</p>\n          </div>"));
  }
  var Km = [
    "google_content_recommendation_ui_type",
    "google_content_recommendation_columns_num",
    "google_content_recommendation_rows_num",
  ];
  function Lm(a, b) {
    xi.call(this, a, b);
  }
  v(Lm, xi);
  Lm.prototype.h = function (a) {
    return Math.min(1200, Math.max(this.minWidth(), Math.round(a)));
  };
  function Mm(a, b) {
    Nm(a, b);
    if ("pedestal" == b.google_content_recommendation_ui_type)
      return new Im(9, new Lm(a, Math.floor(a * b.google_phwr)));
    var c = Dc();
    468 > a
      ? c
        ? ((c = a - 8 - 8),
          (c =
            Math.floor(c / 1.91 + 70) +
            Math.floor(
              11 *
                (c * Am.mobile_banner_image_sidebyside +
                  Cm.mobile_banner_image_sidebyside) +
                96
            )),
          (a = {
            aa: a,
            $: c,
            J: 1,
            K: 12,
            T: "mobile_banner_image_sidebyside",
          }))
        : ((a = Gm(a)),
          (a = {
            aa: a.width,
            $: a.height,
            J: 1,
            K: 13,
            T: "image_sidebyside",
          }))
      : ((a = Gm(a)),
        (a = { aa: a.width, $: a.height, J: 4, K: 2, T: "image_stacked" }));
    Om(b, a);
    return new Im(9, new Lm(a.aa, a.$));
  }
  function Pm(a, b) {
    Nm(a, b);
    var c = Fm({
      K: b.google_content_recommendation_rows_num,
      J: b.google_content_recommendation_columns_num,
      T: b.google_content_recommendation_ui_type,
    });
    if (c.M) a = { aa: 0, $: 0, J: 0, K: 0, T: "image_stacked", M: c.M };
    else {
      var d = 2 === c.Na.length && 468 <= a ? 1 : 0;
      var e = c.Na[d];
      e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
      var f = Em[e];
      for (var g = c.J[d]; a / g < f && 1 < g; ) g--;
      f = g;
      c = c.K[d];
      d = Math.floor((((a - 8 * f - 8) / f) * Am[e] + Cm[e]) * c + 8 * c + 8);
      a =
        1500 < a
          ? {
              width: 0,
              height: 0,
              rb: "Calculated slot width is too large: " + a,
            }
          : 1500 < d
          ? {
              width: 0,
              height: 0,
              rb: "Calculated slot height is too large: " + d,
            }
          : { width: a, height: d };
      a = { aa: a.width, $: a.height, J: f, K: c, T: e };
    }
    if (a.M) throw new T(a.M);
    Om(b, a);
    return new Im(9, new Lm(a.aa, a.$));
  }
  function Nm(a, b) {
    if (0 >= a)
      throw new T(
        "Invalid responsive width from Matched Content slot " +
          b.google_ad_slot +
          ": " +
          a +
          ". Please ensure to put this Matched Content slot into a non-zero width div container."
      );
  }
  function Om(a, b) {
    a.google_content_recommendation_ui_type = b.T;
    a.google_content_recommendation_columns_num = b.J;
    a.google_content_recommendation_rows_num = b.K;
  }
  function Qm(a, b) {
    xi.call(this, a, b);
  }
  v(Qm, xi);
  Qm.prototype.h = function () {
    return this.minWidth();
  };
  Qm.prototype.i = function (a, b, c) {
    wi(a, c);
    b.google_ad_resize ||
      ((c.style.height = this.height() + "px"), (b.rpe = !0));
  };
  var Rm = {
    "image-top": function (a) {
      return 600 >= a ? 284 + 0.414 * (a - 250) : 429;
    },
    "image-middle": function (a) {
      return 500 >= a ? 196 - 0.13 * (a - 250) : 164 + 0.2 * (a - 500);
    },
    "image-side": function (a) {
      return 500 >= a ? 205 - 0.28 * (a - 250) : 134 + 0.21 * (a - 500);
    },
    "text-only": function (a) {
      return 500 >= a ? 187 - 0.228 * (a - 250) : 130;
    },
    "in-article": function (a) {
      return 420 >= a
        ? a / 1.2
        : 460 >= a
        ? a / 1.91 + 130
        : 800 >= a
        ? a / 4
        : 200;
    },
  };
  function Sm(a, b) {
    xi.call(this, a, b);
  }
  v(Sm, xi);
  Sm.prototype.h = function () {
    return Math.min(1200, this.minWidth());
  };
  function Tm(a, b, c, d, e) {
    var f = e.google_ad_layout || "image-top";
    if ("in-article" == f) {
      var g = a;
      if ("false" == e.google_full_width_responsive) a = g;
      else if (((a = ri(b, c, g, 0.2, e)), !0 !== a)) (e.gfwrnwer = a), (a = g);
      else if ((a = Xf(b)))
        if (((e.google_full_width_responsive_allowed = !0), c.parentElement)) {
          b: {
            g = c;
            for (var h = 0; 100 > h && g.parentElement; ++h) {
              for (
                var k = g.parentElement.childNodes, l = 0;
                l < k.length;
                ++l
              ) {
                var m = k[l];
                if (m != g && ui(b, m)) break b;
              }
              g = g.parentElement;
              g.style.width = "100%";
              g.style.height = "auto";
            }
          }
          wi(b, c);
        } else a = g;
      else a = g;
    }
    if (250 > a)
      throw new T(
        "Fluid responsive ads must be at least 250px wide: availableWidth=" + a
      );
    a = Math.min(1200, Math.floor(a));
    if (d && "in-article" != f) {
      f = Math.ceil(d);
      if (50 > f)
        throw new T(
          "Fluid responsive ads must be at least 50px tall: height=" + f
        );
      return new Im(11, new xi(a, f));
    }
    if ("in-article" != f && (d = e.google_ad_layout_key)) {
      f = "" + d;
      b = Math.pow(10, 3);
      if ((d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length)) {
        e = [];
        for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
        b = e;
      } else b = null;
      if (!b) throw new T("Invalid data-ad-layout-key value: " + f);
      f = (a + -725) / 1e3;
      c = 0;
      d = 1;
      e = b.length;
      for (g = 0; g < e; g++) (c += b[g] * d), (d *= f);
      f = Math.ceil(1e3 * c - -725 + 10);
      if (isNaN(f)) throw new T("Invalid height: height=" + f);
      if (50 > f)
        throw new T(
          "Fluid responsive ads must be at least 50px tall: height=" + f
        );
      if (1200 < f)
        throw new T(
          "Fluid responsive ads must be at most 1200px tall: height=" + f
        );
      return new Im(11, new xi(a, f));
    }
    d = Rm[f];
    if (!d) throw new T("Invalid data-ad-layout value: " + f);
    c = Bi(c, b);
    b = Xf(b);
    b =
      "in-article" !== f || c || a !== b
        ? Math.ceil(d(a))
        : Math.ceil(1.25 * d(a));
    return new Im(11, "in-article" == f ? new Sm(a, b) : new xi(a, b));
  }
  function Um(a) {
    return function (b) {
      for (var c = a.length - 1; 0 <= c; --c) if (!a[c](b)) return !1;
      return !0;
    };
  }
  function Vm(a, b) {
    for (var c = Wm.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
      var g = c[f];
      if (a(g)) {
        if (!b || b(g)) return g;
        null === e && (e = g);
      }
    }
    return e;
  }
  var W = [
      new V(970, 90, 2),
      new V(728, 90, 2),
      new V(468, 60, 2),
      new V(336, 280, 1),
      new V(320, 100, 2),
      new V(320, 50, 2),
      new V(300, 600, 4),
      new V(300, 250, 1),
      new V(250, 250, 1),
      new V(234, 60, 2),
      new V(200, 200, 1),
      new V(180, 150, 1),
      new V(160, 600, 4),
      new V(125, 125, 1),
      new V(120, 600, 4),
      new V(120, 240, 4),
      new V(120, 120, 1, !0),
    ],
    Wm = [
      W[6],
      W[12],
      W[3],
      W[0],
      W[7],
      W[14],
      W[1],
      W[8],
      W[10],
      W[4],
      W[15],
      W[2],
      W[11],
      W[5],
      W[13],
      W[9],
      W[16],
    ];
  function Xm(a, b, c, d, e) {
    "false" == e.google_full_width_responsive
      ? (c = { D: a, F: 1 })
      : ("autorelaxed" == b && e.google_full_width_responsive) ||
        Ym(b) ||
        e.google_ad_resize
      ? ((b = si(a, c, d, e)),
        (c = !0 !== b ? { D: a, F: b } : { D: Xf(c) || a, F: !0 }))
      : (c = { D: a, F: 2 });
    b = c.F;
    return !0 !== b
      ? { D: a, F: b }
      : d.parentElement
      ? { D: c.D, F: b }
      : { D: a, F: b };
  }
  function Zm(a, b, c, d, e) {
    var f = Xi(247, function () {
        return Xm(a, b, c, d, e);
      }),
      g = f.D;
    f = f.F;
    var h = !0 === f,
      k = K(d.style.width),
      l = K(d.style.height),
      m = $m(g, b, c, d, e, h);
    g = m.Y;
    h = m.W;
    var q = m.pa;
    m = m.Ma;
    var t = an(b, q),
      y,
      F = (y = yi(d, c, "marginLeft", K)) ? y + "px" : "",
      z = (y = yi(d, c, "marginRight", K)) ? y + "px" : "";
    y = yi(d, c, "zIndex") || "";
    return new Im(t, g, q, null, m, f, h, F, z, l, k, y);
  }
  function Ym(a) {
    return (
      "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    );
  }
  function $m(a, b, c, d, e, f) {
    b = "auto" == b ? (0.25 >= a / Math.min(1200, Xf(c)) ? 4 : 3) : qi(b);
    var g = !1,
      h = !1;
    if (488 > Xf(c)) {
      var k = li(d, c);
      var l = Bi(d, c);
      g = !l && k;
      h = l && k;
    }
    l = [zi(a), ym(b)];
    l.push(Ai(488 > Xf(c), c, d, h));
    null != e.google_max_responsive_height &&
      l.push(Di(e.google_max_responsive_height));
    var m = [
      function (t) {
        return !t.ib;
      },
    ];
    if (g || h) (g = Ei(c, d)), m.push(Di(g));
    var q = Vm(Um(l), Um(m));
    if (!q) throw new T("No slot size for availableWidth=" + a);
    l = Xi(248, function () {
      var t;
      a: if (f) {
        if (e.gfwrnh && (t = K(e.gfwrnh))) {
          t = { Y: new Qm(a, t), W: !0 };
          break a;
        }
        t = a / 1.2;
        var y = Math;
        var F = y.min;
        if (
          e.google_resizing_allowed ||
          "true" == e.google_full_width_responsive
        )
          var z = Infinity;
        else {
          z = d;
          var E = Infinity;
          do {
            var S = yi(z, c, "height", K);
            S && (E = Math.min(E, S));
            (S = yi(z, c, "maxHeight", K)) && (E = Math.min(E, S));
          } while ((z = z.parentElement) && "HTML" != z.tagName);
          z = E;
        }
        y = F.call(y, t, z);
        if (y < 0.5 * t || 100 > y) y = t;
        P(jf) && !Bi(d, c) && (y = Math.max(y, 0.5 * Wf(c).clientHeight));
        t = { Y: new Qm(a, Math.floor(y)), W: y < t ? 102 : !0 };
      } else t = { Y: q, W: 100 };
      return t;
    });
    g = l.Y;
    l = l.W;
    return "in-article" === e.google_ad_layout && bn(c)
      ? { Y: cn(a, c, d, g, e), W: !1, pa: b, Ma: k }
      : { Y: g, W: l, pa: b, Ma: k };
  }
  function an(a, b) {
    if ("auto" == a) return 1;
    switch (b) {
      case 2:
        return 2;
      case 1:
        return 3;
      case 4:
        return 4;
      case 3:
        return 5;
      case 6:
        return 6;
      case 5:
        return 7;
      case 7:
        return 8;
    }
    throw Error("bad mask");
  }
  function cn(a, b, c, d, e) {
    var f = e.google_ad_height || yi(c, b, "height", K);
    b = Tm(a, b, c, f, e).size();
    return b.minWidth() * b.height() > a * d.height()
      ? new V(b.minWidth(), b.height(), 1)
      : d;
  }
  function bn(a) {
    return P(gf) || (a.location && "#hffwroe2etoq" == a.location.hash);
  }
  function dn(a, b, c, d, e) {
    var f;
    (f = Xf(b))
      ? 488 > Xf(b)
        ? b.innerHeight >= b.innerWidth
          ? ((e.google_full_width_responsive_allowed = !0),
            wi(b, c),
            (f = { D: f, F: !0 }))
          : (f = { D: a, F: 5 })
        : (f = { D: a, F: 4 })
      : (f = { D: a, F: 10 });
    var g = f;
    f = g.D;
    g = g.F;
    if (!0 !== g || a == f)
      return new Im(12, new xi(a, d), null, null, !0, g, 100);
    a = $m(f, "auto", b, c, e, !0);
    return new Im(1, a.Y, a.pa, 2, !0, g, a.W);
  }
  function en(a, b) {
    var c = b.google_ad_format;
    if ("autorelaxed" == c) {
      a: {
        if ("pedestal" != b.google_content_recommendation_ui_type)
          for (a = u(Km), c = a.next(); !c.done; c = a.next())
            if (null != b[c.value]) {
              b = !0;
              break a;
            }
        b = !1;
      }
      return b ? 9 : 5;
    }
    if (Ym(c)) return 1;
    if ("link" === c) return 4;
    if ("fluid" == c) {
      if ((c = "in-article" === b.google_ad_layout))
        c =
          P(hf) ||
          P(gf) ||
          (a.location &&
            ("#hffwroe2etop" == a.location.hash ||
              "#hffwroe2etoq" == a.location.hash));
      return c ? (fn(b), 1) : 8;
    }
    if (27 === b.google_reactive_ad_format) return fn(b), 1;
  }
  function gn(a, b, c, d, e) {
    e =
      b.offsetWidth ||
      ((c.google_ad_resize || (void 0 === e ? !1 : e)) &&
        yi(b, d, "width", K)) ||
      c.google_ad_width ||
      0;
    4 === a && ((c.google_ad_format = "auto"), (a = 1));
    var f = (f = hn(a, e, b, c, d)) ? f : Zm(e, c.google_ad_format, d, b, c);
    f.size().i(d, c, b);
    Jm(f, e, c);
    1 != a && ((a = f.size().height()), (b.style.height = a + "px"));
  }
  function hn(a, b, c, d, e) {
    var f = d.google_ad_height || yi(c, e, "height", K);
    switch (a) {
      case 5:
        return (
          (f = Xi(247, function () {
            return Xm(b, d.google_ad_format, e, c, d);
          })),
          (a = f.D),
          (f = f.F),
          !0 === f && b != a && wi(e, c),
          !0 === f
            ? (d.google_full_width_responsive_allowed = !0)
            : ((d.google_full_width_responsive_allowed = !1), (d.gfwrnwer = f)),
          Mm(a, d)
        );
      case 9:
        return Pm(b, d);
      case 8:
        return Tm(b, e, c, f, d);
      case 10:
        return dn(b, e, c, f, d);
    }
  }
  function fn(a) {
    a.google_ad_format = "auto";
    a.armr = 3;
  }
  function jn(a, b) {
    var c = Jc(b);
    if (c) {
      c = Xf(c);
      var d = Oc(a, b) || {},
        e = d.direction;
      if ("0px" === d.width && "none" !== d.cssFloat) return -1;
      if ("ltr" === e && c)
        return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
      if ("rtl" === e && c)
        return (
          (a =
            b.document.body.getBoundingClientRect().right -
            a.getBoundingClientRect().right),
          Math.floor(
            Math.min(
              1200,
              c - a - Math.floor((c - b.document.body.clientWidth) / 2)
            )
          )
        );
    }
    return -1;
  }
  var kn = ja([
      "https://pagead2.googlesyndication.com/pagead/managed/js/adsense/",
      "/slotcar_library",
      ".js",
    ]),
    ln = ja([
      "https://googleads.g.doubleclick.net/pagead/html/",
      "/",
      "/zrt_lookup.html",
    ]),
    mn = ja([
      "https://pagead2.googlesyndication.com/pagead/managed/js/adsense/",
      "/show_ads_impl",
      ".js",
    ]),
    nn = ja([
      "https://pagead2.googlesyndication.com/pagead/managed/js/adsense/",
      "/show_ads_impl_with_ama",
      ".js",
    ]),
    on = ja([
      "https://pagead2.googlesyndication.com/pagead/managed/js/adsense/",
      "/show_ads_impl_instrumented",
      ".js",
    ]);
  function pn(a) {
    Vi.Ta(function (b) {
      b.shv = String(a);
      b.mjsv = "m202204130101";
      var c = O(Ph).h(),
        d = U(w);
      d.eids || (d.eids = []);
      b.eid = c.concat(d.eids).join(",");
    });
  }
  function qn(a) {
    var b = a.nb;
    return a.eb || ("dev" === b ? "dev" : "");
  }
  var rn = {},
    sn =
      ((rn.google_ad_modifications = !0),
      (rn.google_analytics_domain_name = !0),
      (rn.google_analytics_uacct = !0),
      (rn.google_pause_ad_requests = !0),
      (rn.google_user_agent_client_hint = !0),
      rn);
  function tn(a) {
    return (a = a.innerText || a.innerHTML) &&
      (a = a
        .replace(/^\s+/, "")
        .split(/\r?\n/, 1)[0]
        .match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) &&
      RegExp("google_ad_client").test(a[1])
      ? a[1]
      : null;
  }
  function un(a) {
    if ((a = a.innerText || a.innerHTML))
      if (
        ((a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";")),
        (a =
          a.match(/^\x3c!--+(.*?)(?:--+>)?$/) ||
          a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) &&
          RegExp("google_ad_client").test(a[1]))
      )
        return a[1];
    return null;
  }
  function vn(a) {
    switch (a) {
      case "true":
        return !0;
      case "false":
        return !1;
      case "null":
        return null;
      case "undefined":
        break;
      default:
        try {
          var b = a.match(/^(?:'(.*)'|"(.*)")$/);
          if (b) return b[1] || b[2] || "";
          if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
            var c = parseFloat(a);
            return c === c ? c : void 0;
          }
        } catch (d) {}
    }
  }
  function wn(a) {
    if (a.google_ad_client) return String(a.google_ad_client);
    var b, c, d, e, f;
    if (
      null !=
      (e =
        null !=
        (d =
          null == (b = U(a).head_tag_slot_vars) ? void 0 : b.google_ad_client)
          ? d
          : null ==
            (c = a.document.querySelector(".adsbygoogle[data-ad-client]"))
          ? void 0
          : c.getAttribute("data-ad-client"))
    )
      b = e;
    else {
      b: {
        b = a.document.getElementsByTagName("script");
        a = (a.navigator && a.navigator.userAgent) || "";
        a =
          RegExp(
            "appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
            "i"
          ).test(a) ||
          (/i(phone|pad|pod)/i.test(a) &&
            /applewebkit/i.test(a) &&
            !/version|safari/i.test(a) &&
            !rd())
            ? tn
            : un;
        for (c = b.length - 1; 0 <= c; c--)
          if (
            ((d = b[c]),
            !d.google_parsed_script_for_pub_code &&
              ((d.google_parsed_script_for_pub_code = !0), (d = a(d))))
          ) {
            b = d;
            break b;
          }
        b = null;
      }
      if (b) {
        a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
        for (c = {}; (d = a.exec(b)); ) c[d[1]] = vn(d[2]);
        b = c.google_ad_client ? c.google_ad_client : "";
      } else b = "";
    }
    return null != (f = b) ? f : "";
  }
  var xn = "undefined" === typeof sttc ? void 0 : sttc;
  function yn(a) {
    var b = Vi;
    try {
      return Zf(a, $f), new Xk(JSON.parse(a));
    } catch (c) {
      b.I(838, c instanceof Error ? c : Error(String(c)), void 0, function (d) {
        d.jspb = String(a);
      });
    }
    return new Xk();
  }
  var zn = O(zf).h(nf.h, nf.defaultValue);
  function An() {
    var a = L.document;
    a = void 0 === a ? window.document : a;
    fd(zn, a);
  }
  var Bn = O(zf).h(of.h, of.defaultValue);
  function Cn() {
    var a = L.document;
    a = void 0 === a ? window.document : a;
    fd(Bn, a);
  }
  var Dn = ja(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);
  function En() {
    this.h = null;
    this.j = !1;
    this.l = Math.random();
    this.i = this.I;
    this.m = null;
  }
  n = En.prototype;
  n.Ta = function (a) {
    this.h = a;
  };
  n.Va = function (a) {
    this.j = a;
  };
  n.Ua = function (a) {
    this.i = a;
  };
  n.I = function (a, b, c, d, e) {
    if ((this.j ? this.l : Math.random()) > (void 0 === c ? 0.01 : c))
      return !1;
    Sh(b) || (b = new Rh(b, { context: a, id: void 0 === e ? "jserror" : e }));
    if (d || this.h) (b.meta = {}), this.h && this.h(b.meta), d && d(b.meta);
    w.google_js_errors = w.google_js_errors || [];
    w.google_js_errors.push(b);
    if (!w.error_rep_loaded) {
      a = od(Dn);
      var f;
      Mc(w.document, null != (f = this.m) ? f : ic(rc(a).toString()));
      w.error_rep_loaded = !0;
    }
    return !1;
  };
  n.oa = function (a, b, c) {
    try {
      return b();
    } catch (d) {
      if (!this.i(a, d, 0.01, c, "jserror")) throw d;
    }
  };
  n.Oa = function (a, b) {
    var c = this;
    return function () {
      var d = ta.apply(0, arguments);
      return c.oa(a, function () {
        return b.apply(void 0, d);
      });
    };
  };
  n.Pa = function (a, b) {
    var c = this;
    b.catch(function (d) {
      d = d ? d : "unknown rejection";
      c.I(a, d instanceof Error ? d : Error(d));
    });
  };
  function Fn(a, b, c) {
    var d = window;
    return function () {
      var e = Zh(),
        f = 3;
      try {
        var g = b.apply(this, arguments);
      } catch (h) {
        f = 13;
        if (c) return c(a, h), g;
        throw h;
      } finally {
        d.google_measure_js_timing &&
          e &&
          ((e = {
            label: a.toString(),
            value: e,
            duration: (Zh() || 0) - e,
            type: f,
          }),
          (f = d.google_js_reporting_queue = d.google_js_reporting_queue || []),
          2048 > f.length && f.push(e));
      }
      return g;
    };
  }
  function Gn(a, b) {
    return Fn(a, b, function (c, d) {
      new En().I(c, d);
    });
  }
  function Hn(a, b) {
    return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b);
  }
  function In(a, b) {
    return "&" + a + "=" + b.toFixed(3);
  }
  function Jn() {
    var a = new p.Set(),
      b = bj();
    try {
      if (!b) return a;
      for (
        var c = b.pubads(), d = u(c.getSlots()), e = d.next();
        !e.done;
        e = d.next()
      )
        a.add(e.value.getSlotId().getDomId());
    } catch (f) {}
    return a;
  }
  function Kn(a) {
    a = a.id;
    return (
      null != a &&
      (Jn().has(a) ||
        r(a, "startsWith").call(a, "google_ads_iframe_") ||
        r(a, "startsWith").call(a, "aswift"))
    );
  }
  function Ln(a, b, c) {
    if (!a.sources) return !1;
    switch (Mn(a)) {
      case 2:
        var d = Nn(a);
        if (d)
          return c.some(function (f) {
            return On(d, f);
          });
      case 1:
        var e = Pn(a);
        if (e)
          return b.some(function (f) {
            return On(e, f);
          });
    }
    return !1;
  }
  function Mn(a) {
    if (!a.sources) return 0;
    a = a.sources.filter(function (b) {
      return b.previousRect && b.currentRect;
    });
    if (1 <= a.length) {
      a = a[0];
      if (a.previousRect.top < a.currentRect.top) return 2;
      if (a.previousRect.top > a.currentRect.top) return 1;
    }
    return 0;
  }
  function Pn(a) {
    return Qn(a, function (b) {
      return b.currentRect;
    });
  }
  function Nn(a) {
    return Qn(a, function (b) {
      return b.previousRect;
    });
  }
  function Qn(a, b) {
    return a.sources.reduce(function (c, d) {
      d = b(d);
      return c
        ? d && 0 !== d.width * d.height
          ? d.top < c.top
            ? d
            : c
          : c
        : d;
    }, null);
  }
  function Rn() {
    Nj.call(this);
    this.i = this.h = this.P = this.O = this.H = 0;
    this.Ba = this.ya = Number.NEGATIVE_INFINITY;
    this.ua =
      this.wa =
      this.xa =
      this.za =
      this.Ea =
      this.m =
      this.Da =
      this.U =
        0;
    this.va = !1;
    this.R = this.N = this.C = 0;
    var a = document.querySelector("[data-google-query-id]");
    this.Ca = a ? a.getAttribute("data-google-query-id") : null;
    this.l = null;
    this.Aa = !1;
    this.ga = function () {};
  }
  v(Rn, Nj);
  function Sn() {
    var a = new Rn();
    if (P(pf)) {
      var b = window;
      if (!b.google_plmetrics && window.PerformanceObserver) {
        b.google_plmetrics = !0;
        b = u([
          "layout-shift",
          "largest-contentful-paint",
          "first-input",
          "longtask",
        ]);
        for (var c = b.next(); !c.done; c = b.next())
          (c = c.value), Tn(a).observe({ type: c, buffered: !0 });
        Un(a);
      }
    }
  }
  function Tn(a) {
    a.l ||
      (a.l = new PerformanceObserver(
        Gn(640, function (b) {
          var c = Vn !== window.scrollX || Wn !== window.scrollY ? [] : Xn,
            d = Yn();
          b = u(b.getEntries());
          for (var e = b.next(); !e.done; e = b.next())
            switch (((e = e.value), e.entryType)) {
              case "layout-shift":
                var f = a;
                if (!e.hadRecentInput) {
                  f.H += Number(e.value);
                  Number(e.value) > f.O && (f.O = Number(e.value));
                  f.P += 1;
                  var g = Ln(e, c, d);
                  g && ((f.m += e.value), f.za++);
                  if (5e3 < e.startTime - f.ya || 1e3 < e.startTime - f.Ba)
                    (f.ya = e.startTime), (f.h = 0), (f.i = 0);
                  f.Ba = e.startTime;
                  f.h += e.value;
                  g && (f.i += e.value);
                  f.h > f.U &&
                    ((f.U = f.h),
                    (f.Ea = f.i),
                    (f.Da = e.startTime + e.duration));
                }
                break;
              case "largest-contentful-paint":
                a.xa = Math.floor(e.renderTime || e.loadTime);
                a.wa = e.size;
                break;
              case "first-input":
                a.ua = Number((e.processingStart - e.startTime).toFixed(3));
                a.va = !0;
                break;
              case "longtask":
                (e = Math.max(0, e.duration - 50)),
                  (a.C += e),
                  (a.N = Math.max(a.N, e)),
                  (a.R += 1);
            }
        })
      ));
    return a.l;
  }
  function Un(a) {
    var b = Gn(641, function () {
        var d = document;
        2 ==
          (d.prerendering
            ? 3
            : { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
                d.visibilityState ||
                  d.webkitVisibilityState ||
                  d.mozVisibilityState ||
                  ""
              ] || 0) && Zn(a);
      }),
      c = Gn(641, function () {
        return void Zn(a);
      });
    document.addEventListener("visibilitychange", b);
    document.addEventListener("unload", c);
    a.ga = function () {
      document.removeEventListener("visibilitychange", b);
      document.removeEventListener("unload", c);
      Tn(a).disconnect();
    };
  }
  Rn.prototype.j = function () {
    Nj.prototype.j.call(this);
    this.ga();
  };
  function Zn(a) {
    if (!a.Aa) {
      a.Aa = !0;
      Tn(a).takeRecords();
      var b =
        "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
      window.LayoutShift &&
        ((b += In("cls", a.H)),
        (b += In("mls", a.O)),
        (b += Hn("nls", a.P)),
        window.LayoutShiftAttribution &&
          ((b += In("cas", a.m)), (b += Hn("nas", a.za))),
        (b += In("wls", a.U)),
        (b += In("tls", a.Da)),
        window.LayoutShiftAttribution && (b += In("was", a.Ea)));
      window.LargestContentfulPaint &&
        ((b += Hn("lcp", a.xa)), (b += Hn("lcps", a.wa)));
      window.PerformanceEventTiming && a.va && (b += Hn("fid", a.ua));
      window.PerformanceLongTaskTiming &&
        ((b += Hn("cbt", a.C)), (b += Hn("mbt", a.N)), (b += Hn("nlt", a.R)));
      for (
        var c = 0, d = u(document.getElementsByTagName("iframe")), e = d.next();
        !e.done;
        e = d.next()
      )
        Kn(e.value) && c++;
      b += Hn("nif", c);
      b += Hn("ifi", qd(window));
      c = O(Ph).h();
      b += "&eid=" + encodeURIComponent(c.join());
      b += "&top=" + (w === w.top ? 1 : 0);
      b += a.Ca ? "&qqid=" + encodeURIComponent(a.Ca) : Hn("pvsid", gd(w));
      window.googletag && (b += "&gpt=1");
      window.fetch(b, {
        keepalive: !0,
        credentials: "include",
        redirect: "follow",
        method: "get",
        mode: "no-cors",
      });
      a.A || ((a.A = !0), a.j());
    }
  }
  function On(a, b) {
    var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    return 0 >= c || 0 >= a
      ? !1
      : 50 <= (100 * c * a) / ((b.right - b.left) * (b.bottom - b.top));
  }
  function Yn() {
    var a = [].concat(ka(document.getElementsByTagName("iframe"))).filter(Kn),
      b = []
        .concat(ka(Jn()))
        .map(function (c) {
          return document.getElementById(c);
        })
        .filter(function (c) {
          return null !== c;
        });
    Vn = window.scrollX;
    Wn = window.scrollY;
    return (Xn = [].concat(ka(a), ka(b)).map(function (c) {
      return c.getBoundingClientRect();
    }));
  }
  var Vn = void 0,
    Wn = void 0,
    Xn = [];
  var X = {
      issuerOrigin: "https://attestation.android.com",
      issuancePath: "/att/i",
      redemptionPath: "/att/r",
    },
    Y = {
      issuerOrigin: "https://pagead2.googlesyndication.com",
      issuancePath: "/dtt/i",
      redemptionPath: "/dtt/r",
      getStatePath: "/dtt/s",
    };
  var $n = O(zf).h(xf.h, xf.defaultValue);
  function ao(a, b, c) {
    Nj.call(this);
    var d = this;
    this.i = a;
    this.h = [];
    b && bo() && this.h.push(X);
    c && this.h.push(Y);
    if (document.hasTrustToken && !P(uf)) {
      var e = new p.Map();
      this.h.forEach(function (f) {
        e.set(f.issuerOrigin, {
          issuerOrigin: f.issuerOrigin,
          state: d.i ? 1 : 12,
          hasRedemptionRecord: !1,
        });
      });
      window.goog_tt_state_map =
        window.goog_tt_state_map && window.goog_tt_state_map instanceof p.Map
          ? new p.Map([].concat(ka(e), ka(window.goog_tt_state_map)))
          : e;
      (window.goog_tt_promise_map &&
        window.goog_tt_promise_map instanceof p.Map) ||
        (window.goog_tt_promise_map = new p.Map());
    }
  }
  v(ao, Nj);
  function bo() {
    var a = void 0 === a ? window : a;
    a = a.navigator.userAgent;
    var b = /Chrome/.test(a);
    return /Android/.test(a) && b;
  }
  function co() {
    var a = void 0 === a ? window.document : a;
    fd($n, a);
  }
  function eo(a, b) {
    return a || ".google.ch" === b || "function" === typeof L.__tcfapi;
  }
  function Z(a, b, c) {
    var d,
      e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
    e && ((e.state = b), void 0 != c && (e.hasRedemptionRecord = c));
  }
  function fo() {
    var a = X.issuerOrigin + X.redemptionPath,
      b = {
        keepalive: !0,
        trustToken: {
          type: "token-redemption",
          issuer: X.issuerOrigin,
          refreshPolicy: "none",
        },
      };
    Z(X.issuerOrigin, 2);
    return window
      .fetch(a, b)
      .then(function (c) {
        if (!c.ok) throw Error(c.status + ": Network response was not ok!");
        Z(X.issuerOrigin, 6, !0);
      })
      .catch(function (c) {
        c && "NoModificationAllowedError" === c.name
          ? Z(X.issuerOrigin, 6, !0)
          : Z(X.issuerOrigin, 5);
      });
  }
  function go() {
    var a = X.issuerOrigin + X.issuancePath;
    Z(X.issuerOrigin, 8);
    return window
      .fetch(a, { keepalive: !0, trustToken: { type: "token-request" } })
      .then(function (b) {
        if (!b.ok) throw Error(b.status + ": Network response was not ok!");
        Z(X.issuerOrigin, 10);
        return fo();
      })
      .catch(function (b) {
        if (b && "NoModificationAllowedError" === b.name)
          return Z(X.issuerOrigin, 10), fo();
        Z(X.issuerOrigin, 9);
      });
  }
  function ho() {
    Z(X.issuerOrigin, 13);
    return document.hasTrustToken(X.issuerOrigin).then(function (a) {
      return a ? fo() : go();
    });
  }
  function io() {
    Z(Y.issuerOrigin, 13);
    if (p.Promise) {
      var a = document
          .hasTrustToken(Y.issuerOrigin)
          .then(function (e) {
            return e;
          })
          .catch(function (e) {
            return p.Promise.reject({ state: 19, error: e });
          }),
        b = Y.issuerOrigin + Y.redemptionPath,
        c = {
          keepalive: !0,
          trustToken: { type: "token-redemption", refreshPolicy: "none" },
        };
      Z(Y.issuerOrigin, 16);
      a = a
        .then(function (e) {
          return window
            .fetch(b, c)
            .then(function (f) {
              if (!f.ok)
                throw Error(f.status + ": Network response was not ok!");
              Z(Y.issuerOrigin, 18, !0);
            })
            .catch(function (f) {
              if (f && "NoModificationAllowedError" === f.name)
                Z(Y.issuerOrigin, 18, !0);
              else {
                if (e) return p.Promise.reject({ state: 17, error: f });
                Z(Y.issuerOrigin, 17);
              }
            });
        })
        .then(function () {
          return document
            .hasTrustToken(Y.issuerOrigin)
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return p.Promise.reject({ state: 19, error: e });
            });
        })
        .then(function (e) {
          var f = Y.issuerOrigin + Y.getStatePath;
          Z(Y.issuerOrigin, 20);
          return window
            .fetch(f + "?ht=" + e, {
              trustToken: {
                type: "send-redemption-record",
                issuers: [Y.issuerOrigin],
              },
            })
            .then(function (g) {
              if (!g.ok)
                throw Error(g.status + ": Network response was not ok!");
              Z(Y.issuerOrigin, 22);
              return g.text().then(function (h) {
                return JSON.parse(h);
              });
            })
            .catch(function (g) {
              return p.Promise.reject({ state: 21, error: g });
            });
        });
      var d = gd(window);
      return a
        .then(function (e) {
          var f = Y.issuerOrigin + Y.issuancePath;
          return e && e.srqt && e.cs
            ? (Z(Y.issuerOrigin, 23),
              window
                .fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                  keepalive: !0,
                  trustToken: { type: "token-request" },
                })
                .then(function (g) {
                  if (!g.ok)
                    throw Error(g.status + ": Network response was not ok!");
                  Z(Y.issuerOrigin, 25);
                  return e;
                })
                .catch(function (g) {
                  return p.Promise.reject({ state: 24, error: g });
                }))
            : e;
        })
        .then(function (e) {
          if (e && e.srdt && e.cs)
            return (
              Z(Y.issuerOrigin, 26),
              window
                .fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                  keepalive: !0,
                  trustToken: {
                    type: "token-redemption",
                    refreshPolicy: "refresh",
                  },
                })
                .then(function (f) {
                  if (!f.ok)
                    throw Error(f.status + ": Network response was not ok!");
                  Z(Y.issuerOrigin, 28, !0);
                })
                .catch(function (f) {
                  return p.Promise.reject({ state: 27, error: f });
                })
            );
        })
        .then(function () {
          Z(Y.issuerOrigin, 29);
        })
        .catch(function (e) {
          if (
            e instanceof Object &&
            e.hasOwnProperty("state") &&
            e.hasOwnProperty("error")
          )
            if ("number" === typeof e.state && e.error instanceof Error) {
              Z(Y.issuerOrigin, e.state);
              var f = Q(wf);
              Math.random() <= f &&
                Gf({ state: e.state, err: e.error.toString() });
            } else throw Error(e);
          else throw e;
        });
    }
  }
  function jo(a) {
    if (document.hasTrustToken && !P(uf) && a.i) {
      var b = window.goog_tt_promise_map;
      if (b && b instanceof p.Map) {
        var c = [];
        if (
          a.h.some(function (e) {
            return e.issuerOrigin === X.issuerOrigin;
          })
        ) {
          var d = b.get(X.issuerOrigin);
          d || ((d = ho()), b.set(X.issuerOrigin, d));
          c.push(d);
        }
        a.h.some(function (e) {
          return e.issuerOrigin === Y.issuerOrigin;
        }) &&
          ((a = b.get(Y.issuerOrigin)),
          a || ((a = io()), b.set(Y.issuerOrigin, a)),
          c.push(a));
        if (0 < c.length && p.Promise && p.Promise.all) return p.Promise.all(c);
      }
    }
  }
  function ko(a) {
    J.call(this, a, -1, lo);
  }
  v(ko, J);
  function mo(a, b) {
    return B(a, 2, b);
  }
  function no(a, b) {
    return B(a, 3, b);
  }
  function oo(a, b) {
    return B(a, 4, b);
  }
  function po(a, b) {
    return B(a, 5, b);
  }
  function qo(a, b) {
    return B(a, 9, b);
  }
  function ro(a, b) {
    return Hb(a, 10, b);
  }
  function so(a, b) {
    return B(a, 11, b);
  }
  function to(a, b) {
    return B(a, 1, b);
  }
  function uo(a) {
    J.call(this, a);
  }
  v(uo, J);
  uo.prototype.getVersion = function () {
    return I(this, 2);
  };
  var lo = [10, 6];
  var vo =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function wo() {
    var a;
    return null != (a = L.google_tag_data) ? a : (L.google_tag_data = {});
  }
  function xo() {
    var a, b;
    if (
      "function" !==
      typeof (null == (a = L.navigator)
        ? void 0
        : null == (b = a.userAgentData)
        ? void 0
        : b.getHighEntropyValues)
    )
      return null;
    var c = wo();
    if (c.uach_promise) return c.uach_promise;
    a = L.navigator.userAgentData.getHighEntropyValues(vo).then(function (d) {
      null != c.uach || (c.uach = d);
      return d;
    });
    return (c.uach_promise = a);
  }
  function yo(a) {
    var b;
    return so(
      ro(
        qo(
          po(
            oo(
              no(
                mo(to(new ko(), a.platform || ""), a.platformVersion || ""),
                a.architecture || ""
              ),
              a.model || ""
            ),
            a.uaFullVersion || ""
          ),
          a.bitness || ""
        ),
        (null == (b = a.fullVersionList)
          ? void 0
          : b.map(function (c) {
              var d = new uo();
              d = B(d, 1, c.brand);
              return B(d, 2, c.version);
            })) || []
      ),
      a.wow64 || !1
    );
  }
  function zo() {
    if (P(qf)) {
      var a, b;
      return null !=
        (b =
          null == (a = xo())
            ? void 0
            : a.then(function (f) {
                return yo(f);
              }))
        ? b
        : null;
    }
    var c, d;
    if (
      "function" !==
      typeof (null == (c = L.navigator)
        ? void 0
        : null == (d = c.userAgentData)
        ? void 0
        : d.getHighEntropyValues)
    )
      return null;
    var e;
    return null !=
      (e = L.navigator.userAgentData
        .getHighEntropyValues(vo)
        .then(function (f) {
          return yo(f);
        }))
      ? e
      : null;
  }
  function Ao(a, b) {
    b.google_ad_host || ((a = Bo(a)) && (b.google_ad_host = a));
  }
  function Co(a, b, c) {
    c = void 0 === c ? "" : c;
    L.google_sa_impl &&
      !L.document.getElementById("google_shimpl") &&
      (delete L.google_sa_queue, delete L.google_sa_impl);
    L.google_sa_queue ||
      ((L.google_sa_queue = []),
      (L.google_process_slots = Yi(215, function () {
        return Do(L.google_sa_queue);
      })),
      (a = Eo(c, a, b)),
      (Mc(L.document, a).id = "google_shimpl"));
  }
  function Do(a) {
    var b = a.shift();
    "function" === typeof b && Xi(216, b);
    a.length &&
      w.setTimeout(
        Yi(215, function () {
          return Do(a);
        }),
        0
      );
  }
  function Fo(a, b, c) {
    a.google_sa_queue = a.google_sa_queue || [];
    a.google_sa_impl ? c(b) : a.google_sa_queue.push(b);
  }
  function Eo(a, b, c) {
    var d = Math.random() < Q(cf) ? ic(rc(b.pb).toString()) : null;
    b = D(c, 4) ? b.ob : b.qb;
    d = d ? d : ic(rc(b).toString());
    b = {};
    a: {
      if (D(c, 4)) {
        if ((c = a || wn(L))) {
          var e = {};
          c = ((e.client = c), (e.plah = L.location.host), e);
          break a;
        }
        throw Error("PublisherCodeNotFoundForAma");
      }
      c = {};
    }
    Go(c, b);
    a: {
      if (P(af) || P(Pe)) {
        a = a || wn(L);
        var f;
        var g = (c =
          null == (g = U(L))
            ? void 0
            : null == (f = g.head_tag_slot_vars)
            ? void 0
            : f.google_ad_host)
          ? c
          : Bo(L);
        if (a) {
          f = {};
          g =
            ((f.client = a),
            (f.plah = L.location.host),
            (f.ama_t = "adsense"),
            (f.asntp = Q(He)),
            (f.asntpv = Q(Le)),
            (f.asntpl = Q(Je)),
            (f.asntpm = Q(Ke)),
            (f.asntpc = Q(Ie)),
            (f.asna = Q(De)),
            (f.asnd = Q(Ee)),
            (f.asnp = Q(Fe)),
            (f.asns = Q(Ge)),
            (f.asmat = Q(Ce)),
            (f.asptt = Q(Me)),
            (f.easpi = P(af)),
            (f.asro = P(Ne)),
            (f.host = g),
            (f.easai = P($e)),
            f);
          break a;
        }
      }
      g = {};
    }
    Go(g, b);
    Go(Af() ? { bust: Af() } : {}, b);
    return fc(d, b);
  }
  function Go(a, b) {
    Tc(a, function (c, d) {
      void 0 === b[d] && (b[d] = c);
    });
  }
  function Bo(a) {
    if (
      (a = a.document.querySelector(
        'meta[name="google-adsense-platform-account"]'
      ))
    )
      return a.getAttribute("content");
  }
  function Ho(a) {
    a: {
      var b = void 0 === b ? !1 : b;
      var c = void 0 === c ? 1024 : c;
      for (var d = [w.top], e = [], f = 0, g; (g = d[f++]); ) {
        (b && !Ic(g)) || e.push(g);
        try {
          if (g.frames)
            for (var h = 0; h < g.frames.length && d.length < c; ++h)
              d.push(g.frames[h]);
        } catch (l) {}
      }
      for (b = 0; b < e.length; b++)
        try {
          var k = e[b].frames.google_esf;
          if (k) {
            jd = k;
            break a;
          }
        } catch (l) {}
      jd = null;
    }
    if (jd) return null;
    e = Nc("IFRAME");
    e.id = "google_esf";
    e.name = "google_esf";
    e.src = tc(a.vb);
    e.style.display = "none";
    return e;
  }
  function Io(a, b, c, d) {
    Jo(a, b, c, d, function (e, f) {
      e = e.document;
      for (var g = void 0, h = 0; !g || e.getElementById(g + "_anchor"); )
        g = "aswift_" + h++;
      e = g;
      g = Number(f.google_ad_width || 0);
      f = Number(f.google_ad_height || 0);
      h = Nc("INS");
      h.id = e + "_anchor";
      vm(h, g, f);
      h.style.display = "block";
      var k = Nc("INS");
      k.id = e + "_expand";
      vm(k, g, f);
      k.style.display = "inline-table";
      k.appendChild(h);
      c.appendChild(k);
      return e;
    });
  }
  function Jo(a, b, c, d, e) {
    e = e(a, b);
    Ko(a, c, b);
    c = Ia;
    var f = new Date().getTime();
    b.google_lrv = I(d, 2);
    b.google_async_iframe_id = e;
    b.google_start_time = c;
    b.google_bpp = f > c ? f - c : 1;
    a.google_sv_map = a.google_sv_map || {};
    a.google_sv_map[e] = b;
    d = a.document.getElementById(e + "_anchor")
      ? function (h) {
          return h();
        }
      : function (h) {
          return window.setTimeout(h, 0);
        };
    var g = { pubWin: a, vars: b };
    Fo(
      a,
      function () {
        var h = a.google_sa_impl(g);
        h && h.catch && $i(911, h);
      },
      d
    );
  }
  function Ko(a, b, c) {
    var d = c.google_ad_output,
      e = c.google_ad_format,
      f = c.google_ad_width || 0,
      g = c.google_ad_height || 0;
    e || ("html" != d && null != d) || (e = f + "x" + g);
    d =
      !c.google_ad_slot ||
      c.google_override_format ||
      (!wm[c.google_ad_width + "x" + c.google_ad_height] &&
        "aa" == c.google_loader_used);
    e && d ? (e = e.toLowerCase()) : (e = "");
    c.google_ad_format = e;
    if (
      "number" !== typeof c.google_reactive_sra_index ||
      !c.google_ad_unit_key
    ) {
      e = [
        c.google_ad_slot,
        c.google_orig_ad_format || c.google_ad_format,
        c.google_ad_type,
        c.google_orig_ad_width || c.google_ad_width,
        c.google_orig_ad_height || c.google_ad_height,
      ];
      d = [];
      f = 0;
      for (g = b; g && 25 > f; g = g.parentNode, ++f)
        9 === g.nodeType ? d.push("") : d.push(g.id);
      (d = d.join()) && e.push(d);
      c.google_ad_unit_key = Uc(e.join(":")).toString();
      var h = void 0 === h ? !1 : h;
      e = [];
      for (d = 0; b && 25 > d; ++d) {
        f = "";
        (void 0 !== h && h) ||
          (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
        a: {
          if (b && b.nodeName && b.parentElement) {
            g = b.nodeName.toString().toLowerCase();
            for (
              var k = b.parentElement.childNodes, l = 0, m = 0;
              m < k.length;
              ++m
            ) {
              var q = k[m];
              if (q.nodeName && q.nodeName.toString().toLowerCase() === g) {
                if (b === q) {
                  g = "." + l;
                  break a;
                }
                ++l;
              }
            }
          }
          g = "";
        }
        e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
        b = b.parentElement;
      }
      h = e.join() + ":";
      b = [];
      if (a)
        try {
          var t = a.parent;
          for (e = 0; t && t !== a && 25 > e; ++e) {
            var y = t.frames;
            for (d = 0; d < y.length; ++d)
              if (a === y[d]) {
                b.push(d);
                break;
              }
            a = t;
            t = a.parent;
          }
        } catch (F) {}
      c.google_ad_dom_fingerprint = Uc(h + b.join()).toString();
    }
  }
  function Lo() {
    var a = Jc(w);
    a &&
      ((a = Vf(a)),
      a.tagSpecificState[1] ||
        (a.tagSpecificState[1] = { debugCard: null, debugCardRequested: !1 }));
  }
  function Mo(a) {
    co();
    eo(bl(), I(a, 8)) ||
      Yi(779, function () {
        var b = window;
        b = void 0 === b ? window : b;
        b = P(b.PeriodicSyncManager ? sf : tf);
        var c = P(vf);
        b = new ao(!0, b, c);
        0 < Q(yf) ? (L.google_trust_token_operation_promise = jo(b)) : jo(b);
      })();
    a = zo();
    null != a &&
      a.then(function (b) {
        L.google_user_agent_client_hint = Mb(b);
      });
    Cn();
    An();
  }
  function No(a, b) {
    switch (a) {
      case "google_reactive_ad_format":
        return (a = parseInt(b, 10)), isNaN(a) ? 0 : a;
      case "google_allow_expandable_ads":
        return /^true$/.test(b);
      default:
        return b;
    }
  }
  function Oo(a, b) {
    if (a.getAttribute("src")) {
      var c = a.getAttribute("src") || "";
      (c = Hc(c)) && (b.google_ad_client = No("google_ad_client", c));
    }
    a = a.attributes;
    c = a.length;
    for (var d = 0; d < c; d++) {
      var e = a[d];
      if (/data-/.test(e.name)) {
        var f = Ja(
          e.name
            .replace("data-matched-content", "google_content_recommendation")
            .replace("data", "google")
            .replace(/-/g, "_")
        );
        b.hasOwnProperty(f) || ((e = No(f, e.value)), null !== e && (b[f] = e));
      }
    }
  }
  function Po(a) {
    if ((a = md(a)))
      switch (a.data && a.data.autoFormat) {
        case "rspv":
          return 13;
        case "mcrspv":
          return 15;
        default:
          return 14;
      }
    else return 12;
  }
  function Qo(a, b, c, d) {
    Oo(a, b);
    if (
      c.document &&
      c.document.body &&
      !en(c, b) &&
      !b.google_reactive_ad_format
    ) {
      var e = parseInt(a.style.width, 10),
        f = jn(a, c);
      if (0 < f && e > f) {
        var g = parseInt(a.style.height, 10);
        e = !!wm[e + "x" + g];
        var h = f;
        if (e) {
          var k = xm(f, g);
          if (k) (h = k), (b.google_ad_format = k + "x" + g + "_0ads_al");
          else throw new T("No slot size for availableWidth=" + f);
        }
        b.google_ad_resize = !0;
        b.google_ad_width = h;
        e || ((b.google_ad_format = null), (b.google_override_format = !0));
        f = h;
        a.style.width = f + "px";
        g = Zm(f, "auto", c, a, b);
        h = f;
        g.size().i(c, b, a);
        Jm(g, h, b);
        g = g.size();
        b.google_responsive_formats = null;
        g.minWidth() > f &&
          !e &&
          ((b.google_ad_width = g.minWidth()),
          (a.style.width = g.minWidth() + "px"));
      }
    }
    e = a.offsetWidth || yi(a, c, "width", K) || b.google_ad_width || 0;
    f = Fa(Zm, e, "auto", c, a, b, !1, !0);
    if (!P(Ye) && 488 > Xf(c)) {
      g = Jc(c) || c;
      h = b.google_ad_client;
      d =
        g.location && "#ftptohbh" === g.location.hash
          ? 2
          : El(g.location, "google_responsive_slot_preview") || P(ff)
          ? 1
          : P(ef)
          ? 2
          : dl(g, 1, h, d)
          ? 1
          : 0;
      if ((g = 0 !== d))
        b: if (b.google_reactive_ad_format || en(c, b) || ni(a, b)) g = !1;
        else {
          for (g = a; g; g = g.parentElement) {
            h = Oc(g, c);
            if (!h) {
              b.gfwrnwer = 18;
              g = !1;
              break b;
            }
            if (!Ya(["static", "relative"], h.position)) {
              b.gfwrnwer = 17;
              g = !1;
              break b;
            }
          }
          g = ri(c, a, e, 0.3, b);
          !0 !== g ? ((b.gfwrnwer = g), (g = !1)) : (g = c === c.top ? !0 : !1);
        }
      g
        ? ((b.google_resizing_allowed = !0),
          (b.ovlp = !0),
          2 === d
            ? ((d = {}),
              Jm(f(), e, d),
              (b.google_resizing_width = d.google_ad_width),
              (b.google_resizing_height = d.google_ad_height),
              (b.iaaso = !1))
            : ((b.google_ad_format = "auto"), (b.iaaso = !0), (b.armr = 1)),
          (d = !0))
        : (d = !1);
    } else d = !1;
    if ((e = en(c, b))) gn(e, a, b, c, d);
    else {
      if (ni(a, b)) {
        if ((d = Oc(a, c)))
          (a.style.width = d.width), (a.style.height = d.height), mi(d, b);
        b.google_ad_width || (b.google_ad_width = a.offsetWidth);
        b.google_ad_height || (b.google_ad_height = a.offsetHeight);
        b.google_loader_features_used = 256;
        b.google_responsive_auto_format = Po(c);
      } else mi(a.style, b);
      (c.location && "#gfwmrp" == c.location.hash) ||
      (12 == b.google_responsive_auto_format &&
        "true" == b.google_full_width_responsive)
        ? gn(10, a, b, c, !1)
        : 0.01 > Math.random() &&
          12 === b.google_responsive_auto_format &&
          ((a = si(
            a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width,
            c,
            a,
            b
          )),
          !0 !== a ? ((b.efwr = !1), (b.gfwrnwer = a)) : (b.efwr = !0));
    }
  }
  function Ro(a) {
    this.j = new p.Set();
    this.u = nd() || window;
    this.h = Q(Ae);
    var b = 0 < this.h && Sc() < 1 / this.h;
    this.A = (this.i = !!Ij(Ej(), 30, b)) ? gd(this.u) : 0;
    this.m = this.i ? wn(this.u) : "";
    this.l = null != a ? a : new zg(100);
  }
  function So() {
    var a = O(Ro);
    var b = new wk();
    b = B(b, 1, Wf(a.u).scrollWidth);
    b = B(b, 2, Wf(a.u).scrollHeight);
    var c = new wk();
    c = B(c, 1, Xf(a.u));
    c = B(c, 2, Wf(a.u).clientHeight);
    var d = new yk();
    d = B(d, 1, a.A);
    d = B(d, 2, a.m);
    d = B(d, 3, a.h);
    var e = new xk();
    b = Fb(e, 2, b);
    b = Fb(b, 1, c);
    b = Gb(d, 4, zk, b);
    a.i && !a.j.has(1) && (a.j.add(1), vg(a.l, b));
  }
  function To(a) {
    var b = window;
    var c = void 0 === c ? null : c;
    yc(b, "message", function (d) {
      try {
        var e = JSON.parse(d.data);
      } catch (f) {
        return;
      }
      !e ||
        "sc-cnf" !== e.googMsgType ||
        (c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d)) ||
        a(e, d);
    });
  }
  function Uo(a, b) {
    b = void 0 === b ? 500 : b;
    Nj.call(this);
    this.i = a;
    this.ta = b;
    this.h = null;
    this.m = {};
    this.l = null;
  }
  v(Uo, Nj);
  Uo.prototype.j = function () {
    this.m = {};
    this.l && (zc(this.i, "message", this.l), delete this.l);
    delete this.m;
    delete this.i;
    delete this.h;
    Nj.prototype.j.call(this);
  };
  function Vo(a) {
    Nj.call(this);
    this.h = a;
    this.i = null;
    this.l = !1;
  }
  v(Vo, Nj);
  var Wo = null,
    Xo = [],
    Yo = new p.Map(),
    Zo = -1;
  function $o(a) {
    return Gi.test(a.className) && "done" != a.dataset.adsbygoogleStatus;
  }
  function ap(a, b, c) {
    a.dataset.adsbygoogleStatus = "done";
    bp(a, b, c);
  }
  function bp(a, b, c) {
    var d = window;
    d.google_spfd || (d.google_spfd = Qo);
    var e = b.google_reactive_ads_config;
    e || Qo(a, b, d, c);
    Ao(d, b);
    if (!cp(a, b, d)) {
      e || (d.google_lpabyc = oi(a, d) + yi(a, d, "height", K));
      if (e) {
        e = e.page_level_pubvars || {};
        if (
          U(L).page_contains_reactive_tag &&
          !U(L).allow_second_reactive_tag
        ) {
          if (e.pltais) {
            Cl(!1);
            return;
          }
          throw new T("Only one 'enable_page_level_ads' allowed per page.");
        }
        U(L).page_contains_reactive_tag = !0;
        Cl(7 === e.google_pgb_reactive);
      }
      b.google_unique_id = pd(d);
      Tc(sn, function (f, g) {
        b[g] = b[g] || d[g];
      });
      b.google_loader_used = "aa";
      b.google_reactive_tag_first = 1 === (U(L).first_tag_on_page || 0);
      Xi(164, function () {
        Io(d, b, a, c);
      });
    }
  }
  function cp(a, b, c) {
    var d = b.google_reactive_ads_config,
      e =
        "string" === typeof a.className &&
        RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
      f = Al(c);
    if (f && f.Fa && "on" != b.google_adtest && !e) {
      e = oi(a, c);
      var g = Wf(c).clientHeight;
      if (!f.qa || (f.qa && ((0 == g ? null : e / g) || 0) >= f.qa))
        return (
          (a.className += " adsbygoogle-ablated-ad-slot"),
          (c = c.google_sv_map = c.google_sv_map || {}),
          (d = za(a)),
          (b.google_element_uid = d),
          (c[b.google_element_uid] = b),
          a.setAttribute("google_element_uid", d),
          "slot" == f.tb &&
            (null !== $c(a.getAttribute("width")) && a.setAttribute("width", 0),
            null !== $c(a.getAttribute("height")) &&
              a.setAttribute("height", 0),
            (a.style.width = "0px"),
            (a.style.height = "0px")),
          !0
        );
    }
    if (
      (f = Oc(a, c)) &&
      "none" == f.display &&
      !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)
    )
      return (
        c.document.createComment &&
          a.appendChild(
            c.document.createComment(
              "No ad requested because of display:none on the adsbygoogle tag"
            )
          ),
        !0
      );
    a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
    return (1 !== b.google_reactive_ad_format &&
      8 !== b.google_reactive_ad_format) ||
      !a
      ? !1
      : (w.console &&
          w.console.warn(
            "Adsbygoogle tag with data-reactive-ad-format=" +
              b.google_reactive_ad_format +
              " is deprecated. Check out page-level ads at https://www.google.com/adsense"
          ),
        !0);
  }
  function dp(a) {
    var b = document.getElementsByTagName("INS");
    for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
      var e = d;
      if (
        $o(e) &&
        "reserved" != e.dataset.adsbygoogleStatus &&
        (!a || d.id == a)
      )
        return d;
    }
    return null;
  }
  function ep(a, b, c) {
    if (a && a.shift)
      for (var d = 20; 0 < a.length && 0 < d; ) {
        try {
          fp(a.shift(), b, c);
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
        --d;
      }
  }
  function gp() {
    var a = Nc("INS");
    a.className = "adsbygoogle";
    a.className += " adsbygoogle-noablate";
    cd(a);
    return a;
  }
  function hp(a, b) {
    var c = {};
    Tc(Sf, function (f, g) {
      !1 === a.enable_page_level_ads
        ? (c[g] = !1)
        : a.hasOwnProperty(g) && (c[g] = a[g]);
    });
    ya(a.enable_page_level_ads) &&
      (c.page_level_pubvars = a.enable_page_level_ads);
    var d = gp();
    id.body.appendChild(d);
    var e = {};
    e =
      ((e.google_reactive_ads_config = c),
      (e.google_ad_client = a.google_ad_client),
      e);
    e.google_pause_ad_requests = !!U(L).pause_ad_requests;
    ap(d, e, b);
  }
  function ip(a, b) {
    function c() {
      return hp(a, b);
    }
    Vf(w).wasPlaTagProcessed = !0;
    var d = w.document;
    if (d.body || "complete" == d.readyState || "interactive" == d.readyState)
      c();
    else {
      var e = xc(Yi(191, c));
      yc(d, "DOMContentLoaded", e);
      new w.MutationObserver(function (f, g) {
        d.body && (e(), g.disconnect());
      }).observe(d, { childList: !0, subtree: !0 });
    }
  }
  function fp(a, b, c) {
    var d = {};
    Xi(
      165,
      function () {
        jp(a, d, b, c);
      },
      function (e) {
        e.client = e.client || d.google_ad_client || a.google_ad_client;
        e.slotname = e.slotname || d.google_ad_slot;
        e.tag_origin = e.tag_origin || d.google_tag_origin;
      }
    );
  }
  function kp(a) {
    delete a.google_checked_head;
    Tc(a, function (b, c) {
      Fi[c] ||
        (delete a[c],
        w.console.warn(
          "AdSense head tag doesn't support " +
            c.replace("google", "data").replace(/_/g, "-") +
            " attribute."
        ));
    });
  }
  function lp(a, b) {
    var c =
      L.document.querySelector(
        'script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])'
      ) ||
      L.document.querySelector(
        'script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])'
      );
    if (c) {
      c.setAttribute("data-checked-head", "true");
      var d = U(window);
      if (d.head_tag_slot_vars) mp(c);
      else {
        var e = {};
        Oo(c, e);
        kp(e);
        var f = ac(e);
        d.head_tag_slot_vars = f;
        c = { google_ad_client: e.google_ad_client, enable_page_level_ads: e };
        L.adsbygoogle || (L.adsbygoogle = []);
        d = L.adsbygoogle;
        d.loaded ? d.push(c) : d.splice(0, 0, c);
        var g;
        e.google_adbreak_test ||
        ((null == (g = Jb(b, Lk, 13, $k)) ? 0 : D(g, 3)) && P(kf))
          ? np(f, a)
          : To(function () {
              np(f, a);
            });
      }
    }
  }
  function mp(a) {
    var b = U(window).head_tag_slot_vars,
      c = a.getAttribute("src") || "";
    if (
      (a = Hc(c) || a.getAttribute("data-ad-client") || "") &&
      a !== b.google_ad_client
    )
      throw new T(
        "Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " +
          a +
          ", " +
          b.google_ad_client
      );
  }
  function op(a) {
    if ("object" === typeof a && null != a) {
      if ("string" === typeof a.type) return 2;
      if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks)
        return 3;
    }
    return 0;
  }
  function jp(a, b, c, d) {
    if (null == a) throw new T("push() called with no parameters.");
    14 === Db(d, $k) && pp(a, xb(Zk(d), 1), I(d, 2));
    var e = op(a);
    if (0 !== e)
      P(bf) &&
        ((d = Dl()),
        d.first_slotcar_request_processing_time ||
          ((d.first_slotcar_request_processing_time = Date.now()),
          (d.adsbygoogle_execution_start_time = Ia))),
        null == Wo
          ? (qp(a), Xo.push(a))
          : 3 === e
          ? Xi(787, function () {
              Wo.handleAdConfig(a);
            })
          : $i(730, Wo.handleAdBreak(a));
    else {
      Ia = new Date().getTime();
      Co(c, d, rp(a));
      sp();
      a: {
        if (void 0 != a.enable_page_level_ads) {
          if ("string" === typeof a.google_ad_client) {
            e = !0;
            break a;
          }
          throw new T("'google_ad_client' is missing from the tag config.");
        }
        e = !1;
      }
      if (e) tp(a, d);
      else if (
        ((e = a.params) &&
          Tc(e, function (g, h) {
            b[h] = g;
          }),
        "js" === b.google_ad_output)
      )
        console.warn(
          "Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads."
        );
      else {
        e = up(a.element);
        Oo(e, b);
        c = U(w).head_tag_slot_vars || {};
        Tc(c, function (g, h) {
          b.hasOwnProperty(h) || (b[h] = g);
        });
        if (e.hasAttribute("data-require-head") && !U(w).head_tag_slot_vars)
          throw new T(
            "AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com."
          );
        if (!b.google_ad_client)
          throw new T("Ad client is missing from the slot.");
        b.google_apsail = jl(b.google_ad_client);
        var f = (c = 0 === (U(L).first_tag_on_page || 0) && Ll(b)) && Ml(c);
        c && !f && (tp(c, d), (U(L).skip_next_reactive_tag = !0));
        0 === (U(L).first_tag_on_page || 0) && (U(L).first_tag_on_page = 2);
        b.google_pause_ad_requests = !!U(L).pause_ad_requests;
        ap(e, b, d);
        c && f && vp(c);
      }
    }
  }
  var wp = !1;
  function pp(a, b, c) {
    P(Ze) &&
      !wp &&
      ((wp = !0),
      (a = rp(a) || wn(L)),
      Zi("predictive_abg", { a_c: a, p_c: b, b_v: c }, 0.01));
  }
  function rp(a) {
    return a.google_ad_client
      ? a.google_ad_client
      : (a = a.params) && a.google_ad_client
      ? a.google_ad_client
      : "";
  }
  function sp() {
    if (P(Se)) {
      var a = Al(L);
      if (!(a = a && a.Fa)) {
        try {
          var b = L.localStorage;
        } catch (c) {
          b = null;
        }
        b = b ? Aj(b) : null;
        a = !(b && Ik(b) && b);
      }
      a || Bl(L, 1);
    }
  }
  function vp(a) {
    hd(function () {
      Vf(w).wasPlaTagProcessed || (w.adsbygoogle && w.adsbygoogle.push(a));
    });
  }
  function tp(a, b) {
    if (U(L).skip_next_reactive_tag) U(L).skip_next_reactive_tag = !1;
    else {
      0 === (U(L).first_tag_on_page || 0) && (U(L).first_tag_on_page = 1);
      if (a.tag_partner) {
        var c = a.tag_partner,
          d = U(w);
        d.tag_partners = d.tag_partners || [];
        d.tag_partners.push(c);
      }
      U(L).ama_ran_on_page || Ol(new Nl(a, b));
      ip(a, b);
    }
  }
  function up(a) {
    if (a) {
      if (!$o(a) && (a.id ? (a = dp(a.id)) : (a = null), !a))
        throw new T("'element' has already been filled.");
      if (!("innerHTML" in a))
        throw new T("'element' is not a good DOM element.");
    } else if (((a = dp()), !a))
      throw new T(
        "All ins elements in the DOM with class=adsbygoogle already have ads in them."
      );
    return a;
  }
  function xp() {
    var a = new Pj(L),
      b = new Uo(L),
      c = new Vo(L),
      d = L.__cmp ? 1 : 0;
    a = Qj(a) ? 1 : 0;
    var e, f;
    (f = "function" === typeof (null == (e = b.i) ? void 0 : e.__uspapi)) ||
      (b.h ? (b = b.h) : ((b.h = ad(b.i, "__uspapiLocator")), (b = b.h)),
      (f = null != b));
    c.l ||
      (c.i || (c.i = c.h.googlefc ? c.h : ad(c.h, "googlefcPresent")),
      (c.l = !0));
    Zi(
      "cmpMet",
      { tcfv1: d, tcfv2: a, usp: f ? 1 : 0, fc: c.i ? 1 : 0, ptt: 9 },
      Q(ze)
    );
  }
  function yp(a) {
    a = { value: D(a, 16) };
    var b = 0.01;
    Q(Ue) && ((a.eid = Q(Ue)), (b = 1));
    a.frequency = b;
    Zi("new_abg_tag", a, b);
  }
  function zp(a) {
    Ej().S[Gj(26)] = !!Number(a);
  }
  function Ap(a) {
    Number(a)
      ? (U(L).pause_ad_requests = !0)
      : ((U(L).pause_ad_requests = !1),
        (a = function () {
          if (!U(L).pause_ad_requests) {
            var b = void 0 === b ? {} : b;
            if ("function" === typeof window.CustomEvent)
              var c = new CustomEvent(
                "adsbygoogle-pub-unpause-ad-requests-event",
                b
              );
            else
              (c = document.createEvent("CustomEvent")),
                c.initCustomEvent(
                  "adsbygoogle-pub-unpause-ad-requests-event",
                  !!b.bubbles,
                  !!b.cancelable,
                  b.detail
                );
            L.dispatchEvent(c);
          }
        }),
        w.setTimeout(a, 0),
        w.setTimeout(a, 1e3));
  }
  function Bp(a) {
    Zi("adsenseGfpKnob", { value: a, ptt: 9 }, 0.1);
    switch (a) {
      case 0:
      case 2:
        a = !0;
        break;
      case 1:
        a = !1;
        break;
      default:
        throw Error("Illegal value of cookieOptions: " + a);
    }
    L._gfp_a_ = a;
  }
  function Cp(a) {
    a && a.call && "function" === typeof a && window.setTimeout(a, 0);
  }
  function np(a, b) {
    b = Jl(fc(ic(rc(b.sb).toString()), Af() ? { bust: Af() } : {})).then(
      function (c) {
        null == Wo && (c.init(a), (Wo = c), Dp());
      }
    );
    $i(723, b);
    r(b, "finally").call(b, function () {
      Xo.length = 0;
      Zi("slotcar", {
        event: "api_ld",
        time: Date.now() - Ia,
        time_pr: Date.now() - Zo,
      });
    });
  }
  function Dp() {
    for (
      var a = u(r(Yo, "keys").call(Yo)), b = a.next();
      !b.done;
      b = a.next()
    ) {
      b = b.value;
      var c = Yo.get(b);
      -1 !== c && (w.clearTimeout(c), Yo.delete(b));
    }
    a = {};
    for (b = 0; b < Xo.length; a = { fa: a.fa, ba: a.ba }, b++)
      Yo.has(b) ||
        ((a.ba = Xo[b]),
        (a.fa = op(a.ba)),
        Xi(
          723,
          (function (d) {
            return function () {
              3 === d.fa
                ? Wo.handleAdConfig(d.ba)
                : 2 === d.fa && $i(730, Wo.handleAdBreakBeforeReady(d.ba));
            };
          })(a)
        ));
  }
  function qp(a) {
    var b = Xo.length;
    if (2 === op(a) && "preroll" === a.type && null != a.adBreakDone) {
      -1 === Zo && (Zo = Date.now());
      var c = w.setTimeout(function () {
        try {
          (0, a.adBreakDone)({
            breakType: "preroll",
            breakName: a.name,
            breakFormat: "preroll",
            breakStatus: "timeout",
          }),
            Yo.set(b, -1),
            Zi("slotcar", { event: "pr_to", source: "adsbygoogle" });
        } catch (d) {
          console.error(
            "[Ad Placement API] adBreakDone callback threw an error:",
            d instanceof Error ? d : Error(String(d))
          );
        }
      }, 1e3 * Q(lf));
      Yo.set(b, c);
    }
  }
  function Ep() {
    if (P(Oe) && !P(Ne)) {
      var a = L.document,
        b = a.createElement("LINK"),
        c = od(Sl);
      if (c instanceof dc || c instanceof nc) b.href = tc(c);
      else {
        if (-1 === uc.indexOf("stylesheet"))
          throw Error(
            'TrustedResourceUrl href attribute required with rel="stylesheet"'
          );
        b.href = sc(c);
      }
      b.rel = "stylesheet";
      a.head.appendChild(b);
    }
  }
  (function (a, b, c, d) {
    d = void 0 === d ? function () {} : d;
    Vi.Ua(aj);
    Xi(166, function () {
      var e = yn(b);
      pn(I(e, 2));
      cl(D(e, 6));
      d();
      ld(16, [1, e.toJSON()]);
      var f = nd(md(L)) || L,
        g = c(qn({ eb: a, nb: I(e, 2) }), e);
      P(df) && gl(f, e);
      um(f, e, null === L.document.currentScript ? 1 : Ul(g.ub));
      So();
      if (
        (!Na() || 0 <= Ka(Qa(), 11)) &&
        (null == (L.Prototype || {}).Version || !P(Xe))
      ) {
        Wi(P(rf));
        Mo(e);
        uk();
        try {
          Sn();
        } catch (q) {}
        Lo();
        lp(g, e);
        f = window;
        var h = f.adsbygoogle;
        if (!h || !h.loaded) {
          if (P(Te) && !D(e, 16))
            try {
              if (
                L.document.querySelector(
                  'script[src*="/pagead/js/adsbygoogle.js?client="]'
                )
              )
                return;
            } catch (q) {}
          Ep();
          yp(e);
          Q(ze) && xp();
          var k = {
            push: function (q) {
              fp(q, g, e);
            },
            loaded: !0,
          };
          try {
            Object.defineProperty(k, "requestNonPersonalizedAds", { set: zp }),
              Object.defineProperty(k, "pauseAdRequests", { set: Ap }),
              Object.defineProperty(k, "cookieOptions", { set: Bp }),
              Object.defineProperty(k, "onload", { set: Cp });
          } catch (q) {}
          if (h)
            for (
              var l = u([
                  "requestNonPersonalizedAds",
                  "pauseAdRequests",
                  "cookieOptions",
                ]),
                m = l.next();
              !m.done;
              m = l.next()
            )
              (m = m.value), void 0 !== h[m] && (k[m] = h[m]);
          "_gfp_a_" in window || (window._gfp_a_ = !0);
          ep(h, g, e);
          f.adsbygoogle = k;
          h && (k.onload = h.onload);
          (f = Ho(g)) && document.documentElement.appendChild(f);
        }
      }
    });
  })("m202204130101", xn, function (a, b) {
    var c = 2012 < C(b, 1, 0) ? "_fy" + C(b, 1, 0) : "",
      d = I(b, 3),
      e = I(b, 2);
    b = od(kn, a, c);
    d = od(ln, e, d);
    return {
      sb: b,
      qb: od(mn, a, c),
      ob: od(nn, a, c),
      pb: od(on, a, c),
      vb: d,
      ub: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/,
    };
  });
}.call(
  this,
  '[2019,"r20220413","r20190131",null,null,null,null,".google.com.pk",null,null,null,[[[1082,null,null,[1]],[null,62,null,[null,0.001]],[383,null,null,[1]],[null,1130,null,[null,100]],[null,1126,null,[null,5000]],[1132,null,null,[1]],[1131,null,null,[1]],[null,1142,null,[null,2]],[null,1165,null,[null,1000]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1115,null,[null,1]],[null,1159,null,[null,500]],[null,1119,null,[]],[null,1138,null,[]],[1145,null,null,[1]],[1021,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1087,null,null,[1]],[1053,null,null,[1]],[1100,null,null,[1]],[1102,null,null,[1]],[1149,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[1036,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1034,null,[]],[null,1080,null,[null,5]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[381914117,null,null,[1]],[null,null,null,[],null,1939],[null,null,null,[null,null,null,["A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9","A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9","A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"]],null,1934],[1953,null,null,[1]],[1947,null,null,[1]],[434462125,null,null,[1]],[1938,null,null,[1]],[1948,null,null,[1]],[392736476,null,null,[1]],[null,null,null,[null,null,null,["AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=","Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9","A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]],null,1932],[null,397907552,null,[null,500]],[432938498,null,null,[1]]],[[10,[[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[1,[[42531496],[42531497,[[1161,null,null,[1]]]]]],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[null,[[44760474],[44760475,[[1129,null,null,[1]]]]]],[20,[[44760911],[44760912,[[1160,null,null,[1]]]]]],[100,[[44761043],[44761044]]],[1,[[44752536,[[1122,null,null,[1]],[1033,null,null,[1]]]],[44753656]]],[null,[[44755592],[44755593,[[1122,null,null,[1]],[1033,null,null,[1]]]],[44755594,[[1122,null,null,[1]],[1033,null,null,[1]]]],[44755653,[[1122,null,null,[1]],[1033,null,null,[1]]]]]],[10,[[44762453],[44762454,[[1122,null,null,[1]],[1033,null,null,[1]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]],[182982300,null,[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,["1"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,["1"]]]],null,null,null,36,10,101],[10,[[182984200,null,[4,null,23,null,null,null,null,["1"]]],[182984300,null,[4,null,23,null,null,null,null,["1"]]]],null,null,null,36,10,101],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[10,[[31065342],[31065343,[[1147,null,null,[1]]]]]],[50,[[31065544],[31065545,[[1154,null,null,[1]]]]]],[50,[[31065741],[31065742,[[1134,null,null,[1]]]]]],[1,[[31065944,[[null,1103,null,[null,31065944]],[1121,null,null,[1]],[null,1119,null,[null,300]]]],[31065945,[[null,1103,null,[null,31065945]],[1121,null,null,[1]],[1143,null,null,[1]],[null,1119,null,[null,300]]]],[31065946,[[null,1103,null,[null,31065946]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[31065950,[[null,1103,null,[null,31065950]],[null,1114,null,[null,0.9]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[31065951,[[null,1103,null,[null,31065951]],[null,1114,null,[null,0.9]],[null,1110,null,[null,1]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[31065952,[[null,1103,null,[null,31065952]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[31065953,[[null,1103,null,[null,31065953]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44762492,[[null,1103,null,[null,44762492]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]]],[6,null,null,3,null,2],49],[1,[[31066496,[[null,1103,null,[null,31066496]],[1121,null,null,[1]],[null,1119,null,[null,300]]]],[31066497,[[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,31066497]],[null,1114,null,[null,-1]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1162,null,null,[1]],[1155,null,null,[1]],[1120,null,null,[1]]]]],null,49],[1000,[[31067063,[[null,null,14,[null,null,"31067063"]]],[6,null,null,null,6,null,"31067063"]],[31067064,[[null,null,14,[null,null,"31067064"]]],[6,null,null,null,6,null,"31067064"]]],[4,null,55]],[100,[[31067067],[31067068,[[1148,null,null,[1]]]]]],[1000,[[31067083,[[null,null,14,[null,null,"31067083"]]],[6,null,null,null,6,null,"31067083"]],[31067084,[[null,null,14,[null,null,"31067084"]]],[6,null,null,null,6,null,"31067084"]]],[4,null,55]],[1000,[[31067098,[[null,null,14,[null,null,"31067098"]]],[6,null,null,null,6,null,"31067098"]],[31067099,[[null,null,14,[null,null,"31067099"]]],[6,null,null,null,6,null,"31067099"]]],[4,null,55]],[1000,[[31067130,[[null,null,14,[null,null,"31067130"]]],[6,null,null,null,6,null,"31067130"]],[31067131,[[null,null,14,[null,null,"31067131"]]],[6,null,null,null,6,null,"31067131"]]],[4,null,55]],[1000,[[31067163,[[null,null,14,[null,null,"31067163"]]],[6,null,null,null,6,null,"31067163"]],[31067164,[[null,null,14,[null,null,"31067164"]]],[6,null,null,null,6,null,"31067164"]]],[4,null,55]],[1,[[44736076],[44736077,[[null,1046,null,[null,0.1]]]]]],[1,[[44761631,[[null,1103,null,[null,44761631]]]],[44761632,[[null,1103,null,[null,44761632]],[1143,null,null,[1]]]],[44761633,[[null,1142,null,[null,2]],[null,1103,null,[null,44761633]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44761634,[[null,1142,null,[null,2]],[null,1103,null,[null,44761634]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44761635,[[null,1142,null,[null,2]],[null,1103,null,[null,44761635]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44761636,[[null,1142,null,[null,2]],[null,1103,null,[null,44761636]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44761637,[[null,1142,null,[null,2]],[null,1103,null,[null,44761637]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44762110,[[null,1142,null,[null,2]],[null,1103,null,[null,44762110]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]]],[6,null,null,3,null,2],49],[500,[[44761838,[[null,1142,null,[null,2]],[null,1103,null,[null,44761838]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]]],[2,[[6,null,null,3,null,2],[12,null,null,null,2,null,"smitmehta\\\\.com/"]]],49],[null,[[44762338],[44762339,[[380254521,null,null,[1]]]]],[1,[[4,null,63]]],null,null,56],[150,[[31061760],[31063913,[[null,1126,null,[null,5000],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,5500]]]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[31065341,[[1150,null,null,[1]],[null,1126,null,[null,5000],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,5500]]]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],15],[50,[[31061761,[[null,1126,null,[null,5000],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,5500]]]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[31062202,[[null,1126,null,[null,5000],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,5500]]]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]],[31063912],[44756455,[[null,1126,null,[null,5000],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,5500]]]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],15],[null,[[31063202,[[null,1126,null,[null,5000],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,5500]]]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],15],[null,[[44753753,[[null,1126,null,[null,5000],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,5500]]]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],15]]],[20,[[50,[[31062930],[31062931,[[380025941,null,null,[1]]]]],null,null,null,null,null,101,null,102]]],[13,[[10,[[44759847],[44759848,[[1947,null,null,[]]]]]],[10,[[44759849],[44759850]]],[1,[[31065824],[31065825,[[424117738,null,null,[1]]]]]],[50,[[31066184],[31066185,[[436251930,null,null,[1]]]]]],[1000,[[21067496]],[4,null,9,null,null,null,null,["document.hasTrustToken"]]],[1000,[[31060475,null,[2,[[1,[[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]],[12,null,null,null,4,null,"Android",["navigator.userAgent"]]]]]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["31061691"]]],[1,[[31062890],[31062891,[[397841828,null,null,[1]]]]]],[1,[[31062946]],[4,null,27,null,null,null,null,["document.prerendering"]]],[1,[[31062947]],[1,[[4,null,27,null,null,null,null,["document.prerendering"]]]]],[50,[[31064018],[31064019,[[1961,null,null,[1]]]]]],[1,[[31065981,null,[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,"Chrome/(9[23456789]|\\\\d{3,})",["navigator.userAgent"]],[4,null,27,null,null,null,null,["crossOriginIsolated"]]]]]]]]],[11,[[10,[[44760494],[44760495,[[1957,null,null,[1]]]]],null,48],[1,[[44760496],[44760497,[[1957,null,null,[1]]]],[44760498,[[1957,null,null,[1]]]]],null,48],[2,[[44761535],[44761536,[[1957,null,null,[1]],[1963,null,null,[1]]]],[44761537,[[1957,null,null,[1]],[1964,null,null,[1]]]],[44761538,[[1957,null,null,[1]],[1965,null,null,[1]]]],[44761539,[[1957,null,null,[1]]]]],null,48]]],[17,[[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]]]],[12,[[50,[[31061828],[31061829,[[null,1126,null,[null,5000],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,5500]]]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]],[360245597,null,null,[1]],[null,494,null,[null,5000],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,5500]]]]]],[31065659,[[1150,null,null,[1]],[null,1126,null,[null,5000],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,5500]]]],[null,1032,null,[null,10000]],[427841102,null,null,[1]],[360245597,null,null,[1]],[null,494,null,[null,5000],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,5500]]]]]],[31065787]],null,15],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]]],[50,[[31060006,null,[2,[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[12,null,null,null,4,null,"Chrome/(89|9\\\\d|\\\\d{3,})",["navigator.userAgent"]],[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]]],[31060007,[[1928,null,null,[1]]],[2,[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[12,null,null,null,4,null,"Chrome/(89|9\\\\d|\\\\d{3,})",["navigator.userAgent"]],[4,null,9,null,null,null,null,["window.PeriodicSyncManager"]]]]]],null,21],[10,[[31060032],[31060033,[[1928,null,null,[1]]]]],null,21],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]]],[1,[[31065721],[31065722,[[432946749,null,null,[1]]]]]],[100,[[31067149],[31067150,[[1966,null,null,[1]]]]]]]]],null,null,[0.001,"1000",1,"1000"]],[null,[]],null,"31067130",null,null,187277448,[44759875,44759926,44759842]]'
));
