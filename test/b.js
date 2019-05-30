var H5PlayerVideoLib = function (e) {
  var t = window.webpackJsonpH5PlayerVideoLib;
  window.webpackJsonpH5PlayerVideoLib = function (i, n, o) {
    for (var a, s, d = 0, u = []; d < i.length; d++)
      s = i[d],
      r[s] && u.push(r[s][0]),
        r[s] = 0;
    for (a in n)
      Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    for (t && t(i, n, o); u.length;)
      u.shift()();
  }
  ;
  var i = {}
    , r = {
    6: 0
  };

  function n(t) {
    if (i[t])
      return i[t].exports;
    var r = i[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(r.exports, r, r.exports, n),
      r.l = !0,
      r.exports;
  }

  return n.e = function (e) {
    var t = r[e];
    if (0 === t)
      return new Promise(function (e) {
          e();
        }
      );
    if (t)
      return t[2];
    var i = new Promise(function (i, n) {
        t = r[e] = [i, n];
      }
    );
    t[2] = i;
    var o = document.getElementsByTagName('head')[0]
      , a = document.createElement('script');
    a.type = 'text/javascript',
      a.charset = 'utf-8',
      a.async = !0,
      a.timeout = 12e4,
    n.nc && a.setAttribute('nonce', n.nc),
      a.src = n.p + 'js/' + ({}[e] || e) + '_' + {
        0: 'c35c55b',
        1: '4c6b148',
        2: 'fe7d03a',
        3: '4090e71',
        4: 'e83595d',
        5: '946b668'
      }[e] + '.js';
    var s = setTimeout(d, 12e4);

    function d() {
      a.onerror = a.onload = null,
        clearTimeout(s);
      var t = r[e];
      0 !== t && (t && t[1](new Error('Loading chunk ' + e + ' failed.')),
        r[e] = void 0);
    }

    return a.onerror = a.onload = d,
      o.appendChild(a),
      i;
  }
    ,
    n.m = e,
    n.c = i,
    n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, {
        configurable: !1,
        enumerable: !0,
        get: i
      });
    }
    ,
    n.n = function (e) {
      var t = e && e.__esModule ? function () {
          return e.default;
        }
        : function () {
          return e;
        }
      ;
      return n.d(t, 'a', t),
        t;
    }
    ,
    n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    ,
    n.p = 'https://sta-op.douyucdn.cn/front-publish/live_player_first-master/',
    n.oe = function (e) {
      throw console.error(e),
        e;
    }
    ,
    n(n.s = 6);
}([
  function (e, t, i) {
    e.exports = i(5)('e55c4');
  }
  , function (e, t, i) {
    e.exports = i(12);
  }
  , function (e, t) {
    function i() {
      this._events = this._events || {},
        this._maxListeners = this._maxListeners || void 0;
    }

    function r(e) {
      return 'function' == typeof e;
    }

    function n(e) {
      return 'object' == typeof e && null !== e;
    }

    function o(e) {
      return void 0 === e;
    }

    e.exports = i,
      i.EventEmitter = i,
      i.prototype._events = void 0,
      i.prototype._maxListeners = void 0,
      i.defaultMaxListeners = 10,
      i.prototype.setMaxListeners = function (e) {
        if (!function (e) {
          return 'number' == typeof e;
        }(e) || e < 0 || isNaN(e))
          throw TypeError('n must be a positive number');
        return this._maxListeners = e,
          this;
      }
      ,
      i.prototype.emit = function (e) {
        var t, i, a, s, d, u;
        if (this._events || (this._events = {}),
        'error' === e && (!this._events.error || n(this._events.error) && !this._events.error.length)) {
          if ((t = arguments[1]) instanceof Error)
            throw t;
          var l = new Error('Uncaught, unspecified "error" event. (' + t + ')');
          throw l.context = t,
            l;
        }
        if (o(i = this._events[e]))
          return !1;
        if (r(i))
          switch (arguments.length) {
            case 1:
              i.call(this);
              break;
            case 2:
              i.call(this, arguments[1]);
              break;
            case 3:
              i.call(this, arguments[1], arguments[2]);
              break;
            default:
              s = Array.prototype.slice.call(arguments, 1),
                i.apply(this, s);
          }
        else if (n(i))
          for (s = Array.prototype.slice.call(arguments, 1),
                 a = (u = i.slice()).length,
                 d = 0; d < a; d++)
            u[d].apply(this, s);
        return !0;
      }
      ,
      i.prototype.addListener = function (e, t) {
        var a;
        if (!r(t))
          throw TypeError('listener must be a function');
        return this._events || (this._events = {}),
        this._events.newListener && this.emit('newListener', e, r(t.listener) ? t.listener : t),
          this._events[e]
            ? n(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t]
            : this._events[e] = t,
        n(this._events[e]) && !this._events[e].warned &&
        (a = o(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners) && a > 0 && this._events[e].length >
        a && (this._events[e].warned = !0,
          console.error(
            '(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.',
            this._events[e].length),
        'function' == typeof console.trace && console.trace()),
          this;
      }
      ,
      i.prototype.on = i.prototype.addListener,
      i.prototype.once = function (e, t) {
        if (!r(t))
          throw TypeError('listener must be a function');
        var i = !1;

        function n() {
          this.removeListener(e, n),
          i || (i = !0,
            t.apply(this, arguments));
        }

        return n.listener = t,
          this.on(e, n),
          this;
      }
      ,
      i.prototype.removeListener = function (e, t) {
        var i, o, a, s;
        if (!r(t))
          throw TypeError('listener must be a function');
        if (!this._events || !this._events[e])
          return this;
        if (a = (i = this._events[e]).length,
          o = -1,
        i === t || r(i.listener) && i.listener === t)
          delete this._events[e],
          this._events.removeListener && this.emit('removeListener', e, t);
        else if (n(i)) {
          for (s = a; s-- > 0;)
            if (i[s] === t || i[s].listener && i[s].listener === t) {
              o = s;
              break;
            }
          if (o < 0)
            return this;
          1 === i.length ? (i.length = 0,
            delete this._events[e]) : i.splice(o, 1),
          this._events.removeListener && this.emit('removeListener', e, t);
        }
        return this;
      }
      ,
      i.prototype.removeAllListeners = function (e) {
        var t, i;
        if (!this._events)
          return this;
        if (!this._events.removeListener)
          return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e],
            this;
        if (0 === arguments.length) {
          for (t in this._events)
            'removeListener' !== t && this.removeAllListeners(t);
          return this.removeAllListeners('removeListener'),
            this._events = {},
            this;
        }
        if (r(i = this._events[e]))
          this.removeListener(e, i);
        else if (i)
          for (; i.length;)
            this.removeListener(e, i[i.length - 1]);
        return delete this._events[e],
          this;
      }
      ,
      i.prototype.listeners = function (e) {
        return this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : [];
      }
      ,
      i.prototype.listenerCount = function (e) {
        if (this._events) {
          var t = this._events[e];
          if (r(t))
            return 1;
          if (t)
            return t.length;
        }
        return 0;
      }
      ,
      i.listenerCount = function (e, t) {
        return e.listenerCount(t);
      };
  }
  , function (e, t) {
    e.exports = function (e) {
      var t = [];
      return t.toString = function () {
        return this.map(function (t) {
          var i = function (e, t) {
            var i = e[1] || ''
              , r = e[3];
            if (!r)
              return i;
            if (t && 'function' == typeof btoa) {
              var n = function (e) {
                return '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + ' */';
              }(r)
                , o = r.sources.map(function (e) {
                return '/*# sourceURL=' + r.sourceRoot + e + ' */';
              });
              return [i].concat(o).concat([n]).join('\n');
            }
            return [i].join('\n');
          }(t, e);
          return t[2] ? '@media ' + t[2] + '{' + i + '}' : i;
        }).join('');
      }
        ,
        t.i = function (e, i) {
          'string' == typeof e && (e = [[null, e, '']]);
          for (var r = {}, n = 0; n < this.length; n++) {
            var o = this[n][0];
            'number' == typeof o && (r[o] = !0);
          }
          for (n = 0; n < e.length; n++) {
            var a = e[n];
            'number' == typeof a[0] && r[a[0]] ||
            (i && !a[2] ? a[2] = i : i && (a[2] = '(' + a[2] + ') and (' + i + ')'),
              t.push(a));
          }
        }
        ,
        t;
    };
  }
  , function (e, t, i) {
    var r = {}
      , n = function (e) {
      var t;
      return function () {
        return void 0 === t && (t = e.apply(this, arguments)),
          t;
      };
    }(function () {
      return window && document && document.all && !window.atob;
    })
      , o = function (e) {
      var t = {};
      return function (e) {
        return void 0 === t[e] && (t[e] = function (e) {
          return document.querySelector(e);
        }.call(this, e)),
          t[e];
      };
    }()
      , a = null
      , s = 0
      , d = []
      , u = i(9);

    function l(e, t) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i]
          , o = r[n.id];
        if (o) {
          o.refs++;
          for (var a = 0; a < o.parts.length; a++)
            o.parts[a](n.parts[a]);
          for (; a < n.parts.length; a++)
            o.parts.push(m(n.parts[a], t));
        } else {
          var s = [];
          for (a = 0; a < n.parts.length; a++)
            s.push(m(n.parts[a], t));
          r[n.id] = {
            id: n.id,
            refs: 1,
            parts: s
          };
        }
      }
    }

    function p(e, t) {
      for (var i = [], r = {}, n = 0; n < e.length; n++) {
        var o = e[n]
          , a = t.base ? o[0] + t.base : o[0]
          , s = {
          css: o[1],
          media: o[2],
          sourceMap: o[3]
        };
        r[a] ? r[a].parts.push(s) : i.push(r[a] = {
          id: a,
          parts: [s]
        });
      }
      return i;
    }

    function c(e, t) {
      var i = o(e.insertInto);
      if (!i)
        throw new Error(
          'Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.');
      var r = d[d.length - 1];
      if ('top' === e.insertAt)
        r ? r.nextSibling ? i.insertBefore(t, r.nextSibling) : i.appendChild(t) : i.insertBefore(t, i.firstChild),
          d.push(t);
      else {
        if ('bottom' !== e.insertAt)
          throw new Error('Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.');
        i.appendChild(t);
      }
    }

    function h(e) {
      e.parentNode.removeChild(e);
      var t = d.indexOf(e);
      t >= 0 && d.splice(t, 1);
    }

    function f(e) {
      var t = document.createElement('style');
      return e.attrs.type = 'text/css',
        y(t, e.attrs),
        c(e, t),
        t;
    }

    function y(e, t) {
      Object.keys(t).forEach(function (i) {
        e.setAttribute(i, t[i]);
      });
    }

    function m(e, t) {
      var i, r, n, o;
      if (t.transform && e.css) {
        if (!(o = t.transform(e.css)))
          return function () {}
            ;
        e.css = o;
      }
      if (t.singleton) {
        var d = s++;
        i = a || (a = f(t)),
          r = v.bind(null, i, d, !1),
          n = v.bind(null, i, d, !0);
      } else
        e.sourceMap && 'function' == typeof URL && 'function' == typeof URL.createObjectURL && 'function' ==
        typeof URL.revokeObjectURL && 'function' == typeof Blob && 'function' == typeof btoa ? (i = function (e) {
            var t = document.createElement('link');
            return e.attrs.type = 'text/css',
              e.attrs.rel = 'stylesheet',
              y(t, e.attrs),
              c(e, t),
              t;
          }(t),
            r = function (e, t, i) {
              var r = i.css
                , n = i.sourceMap
                , o = void 0 === t.convertToAbsoluteUrls && n;
              (t.convertToAbsoluteUrls || o) && (r = u(r));
              n && (r += '\n/*# sourceMappingURL=data:application/json;base64,' +
                btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + ' */');
              var a = new Blob([r], {
                type: 'text/css'
              })
                , s = e.href;
              e.href = URL.createObjectURL(a),
              s && URL.revokeObjectURL(s);
            }.bind(null, i, t),
            n = function () {
              h(i),
              i.href && URL.revokeObjectURL(i.href);
            }
        ) : (i = f(t),
            r = function (e, t) {
              var i = t.css
                , r = t.media;
              r && e.setAttribute('media', r);
              if (e.styleSheet)
                e.styleSheet.cssText = i;
              else {
                for (; e.firstChild;)
                  e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(i));
              }
            }.bind(null, i),
            n = function () {
              h(i);
            }
        );
      return r(e),
        function (t) {
          if (t) {
            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
              return;
            r(e = t);
          } else
            n();
        };
    }

    e.exports = function (e, t) {
      if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
        throw new Error('The style-loader cannot be used in a non-browser environment');
      (t = t || {}).attrs = 'object' == typeof t.attrs ? t.attrs : {},
      void 0 === t.singleton && (t.singleton = n()),
      void 0 === t.insertInto && (t.insertInto = 'head'),
      void 0 === t.insertAt && (t.insertAt = 'bottom');
      var i = p(e, t);
      return l(i, t),
        function (e) {
          for (var n = [], o = 0; o < i.length; o++) {
            var a = i[o];
            (s = r[a.id]).refs--,
              n.push(s);
          }
          e && l(p(e, t), t);
          for (o = 0; o < n.length; o++) {
            var s;
            if (0 === (s = n[o]).refs) {
              for (var d = 0; d < s.parts.length; d++)
                s.parts[d]();
              delete r[s.id];
            }
          }
        };
    }
    ;
    var _ = function () {
      var e = [];
      return function (t, i) {
        return e[t] = i,
          e.filter(Boolean).join('\n');
      };
    }();

    function v(e, t, i, r) {
      var n = i ? '' : r.css;
      if (e.styleSheet)
        e.styleSheet.cssText = _(t, n);
      else {
        var o = document.createTextNode(n)
          , a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
      }
    }
  }
  , function (e, t) {
    e.exports = playerSDKb59f0f1856febc46f39e;
  }
  , function (e, t, i) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0
    });
    var r = {};
    i.d(r, 'getData', function () {
      return Xe;
    }),
      i.d(r, 'setEnterPlay', function () {
        return Ze;
      }),
      i.d(r, 'changeVolumeByKeyboard', function () {
        return et;
      }),
      i.d(r, 'setVideoReady', function () {
        return tt;
      }),
      i.d(r, 'P2PRollback', function () {
        return it;
      }),
      i.d(r, 'udpateVidoReal', function () {
        return rt;
      }),
      i.d(r, 'setByteCount', function () {
        return nt;
      }),
      i.d(r, 'changeVolume', function () {
        return ot;
      }),
      i.d(r, 'setPlay', function () {
        return at;
      }),
      i.d(r, 'refeshplayerStreamNameAndStatus', function () {
        return st;
      }),
      i.d(r, 'refeshplayerSrc', function () {
        return dt;
      }),
      i.d(r, 'refeshplayerisPlay', function () {
        return ut;
      }),
      i.d(r, 'refeshplayerisRollback', function () {
        return lt;
      }),
      i.d(r, 'refeshplayerP2p', function () {
        return pt;
      }),
      i.d(r, 'refeshplayerP2pData', function () {
        return ct;
      }),
      i.d(r, 'changeHaveShowVideoState', function () {
        return ht;
      }),
      i.d(r, 'setPlayerError', function () {
        return ft;
      }),
      i.d(r, 'upView', function () {
        return yt;
      }),
      i.d(r, 'initData', function () {
        return mt;
      });
    var n = {};
    i.d(n, 'getData', function () {
      return ni;
    }),
      i.d(n, 'loadVideo', function () {
        return ai;
      }),
      i.d(n, 'loadStream', function () {
        return di;
      }),
      i.d(n, 'streamDataHandle', function () {
        return oi;
      }),
      i.d(n, 'playStream', function () {
        return si;
      }),
      i.d(n, 'reloadVideo', function () {
        return pi;
      }),
      i.d(n, 'loadTicketStream', function () {
        return li;
      }),
      i.d(n, 'initData', function () {
        return ci;
      });
    var o = i(0)
      , a = i(2)
      , s = i(7)
      , d = i.n(s)
      , u = !1;

    function l(e) {
      for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        i[r - 1] = arguments[r];
      var n = ['[html5 player]'].concat(i.map(function (e) {
        return '[' + e + ']';
      }));
      return function () {
        for (var t = arguments.length, i = Array(t), r = 0; r < t; r++)
          i[r] = arguments[r];
        u && e.call.apply(e, [console].concat(n, i));
      };
    }

    function p() {
      for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      return {
        log: l.apply(void 0, [console.log].concat(t)),
        debug: l.apply(void 0, [console.debug].concat(t)),
        info: l.apply(void 0, [console.info].concat(t)),
        warn: l.apply(void 0, [console.warn].concat(t)),
        error: l.apply(void 0, [console.error].concat(t))
      };
    }

    var c = p('first');

    function h(e) {
      return e + '_h5p_room';
    }

    var f = function (e) {
      return o.DataCenter.localStorage.get(e);
    }
      , y = function (e, t, i) {
      return o.DataCenter.localStorage.set(e, t, i);
    };

    function m(e, t) {
      var i = f(h(e));
      return void 0 === i || null === i ? t : i;
    }

    function _(e, t) {
      try {
        y(h(e), t);
      } catch (t) {
        c.warn('set localStorage:' + e + ' error.');
      }
    }

    var v, g, b, w, S, T, E, k, O, P = {
        player_storage_volume: 'player_storage_volume',
        player_storage_cdn: 'player_storage_cdn',
        GaoRateTimestamp: 'GaoRateTimestamp',
        RateRecordTime: 'rateRecordTime'
      }, R = 'Douyu_219053045', A = '__video2', x = 0, M = '/gapi/live/ticket/getH5Play', D = {
        QQ: 'tct-h5',
        WS: 'ws-h5',
        YC: 'yc-h5',
        XY: 'xy-h5',
        BABA: 'ali-h5'
      }, I = 'errlog_encrypt_error',
      L = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
          return typeof e;
        }
        : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        }
    ;

    function C(e, t, i, r) {
      i && Object.defineProperty(e, t, {
        enumerable: i.enumerable,
        configurable: i.configurable,
        writable: i.writable,
        value: i.initializer ? i.initializer.call(r) : void 0
      });
    }

    function B(e, t, i, r, n) {
      var o = {};
      return Object.keys(r).forEach(function (e) {
        o[e] = r[e];
      }),
        o.enumerable = !!o.enumerable,
        o.configurable = !!o.configurable,
      ('value' in o || o.initializer) && (o.writable = !0),
        o = i.slice().reverse().reduce(function (i, r) {
          return r(e, t, i) || i;
        }, o),
      n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0,
        o.initializer = void 0),
      void 0 === o.initializer && (Object.defineProperty(e, t, o),
        o = null),
        o;
    }

    var j = function (e) {
      return function (t, i) {
        var r = void 0 === e ? 'undefined' : L(e);
        return 'object' === r ? t[i] = e : 'Service' === Object.getPrototypeOf(e).name || -1 !==
        e.name.toLowerCase().indexOf('service') || e.prototype.type && -1 !== e.prototype.type.indexOf('service')
          ? (void 0 === e.instance && (e.instance = new e),
            t[i] = e.instance)
          : 'function' === r && (t[i] = e()),
          t;
      };
    }
      , U = (v = j(o.DataCenter.acj),
      g = j(o.DataCenter.global),
      b = j(o.DataCenter.sessionStorage),
      w = j(o.DataCenter.cookie),
      S = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e),
            C(this, 'acj', T, this),
            C(this, 'global', E, this),
            C(this, 'sessionStorage', k, this),
            C(this, 'cookie', O, this);
        }

        return e.prototype.pushData = function (e, t) {
          this.acj.push(e, t, 0);
        }
          ,
          e.prototype.MonitorData = function (e, t) {
            this.acj.get(e).subscribe(function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              t(e);
            });
          }
          ,
          e.prototype.getDid = function () {
            return this.cookie.get('did') || '10000000000000000000000000001501';
          }
          ,
          e.prototype.setSessionStorage = function (e, t) {
            this.sessionStorage.set(e, t);
          }
          ,
          e.prototype.getCookie = function (e) {
            return this.cookie.get(e) || '';
          }
          ,
          e;
      }(),
      T = B(S.prototype, 'acj', [v], {
        enumerable: !0,
        initializer: null
      }),
      E = B(S.prototype, 'global', [g], {
        enumerable: !0,
        initializer: null
      }),
      k = B(S.prototype, 'sessionStorage', [b], {
        enumerable: !0,
        initializer: null
      }),
      O = B(S.prototype, 'cookie', [w], {
        enumerable: !0,
        initializer: null
      }),
      S)
      , F = 'room_data_idle'
      , V = 'room_bus_checksevertime'
      , N = 'video_play_business'
      , H = 'business_to_video_ready'
      , G = 'js_to_business_action'
      , W = 'js_to_business_action_list'
      , z = 'js_to_business_point'
      , q = 'js_to_business_point_list'
      , Y = 'js_to_business_acj'
      , $ = 'js_to_business_acj_list'
      , K = 'js_to_business_asstion_list'
      , J = 'js_to_business_asstion_point'
      , Q = 'js_to_keeplive_point'
      , X = 'js_to_keeplive_point_list'
      , Z = 'GET_SDK_SUS'
      , ee = 'BEGIN_START_LOADER'
      , te = 'room_ticket_status'
      , ie = 'room_bus_isVrRoom'
      , re = []
      , ne = !1
      , oe = []
      , ae = []
      , se = []
      , de = []
      , ue = [];

    function le(e) {
      for (var t = 0; t < re.length; t++) {
        var i = re[t];
        if (i.id === e)
          return i;
      }
      return null;
    }

    function pe(e) {
      var t = e.id
        , i = e.action
        , r = e.data
        , n = le(t);
      n && n.actionHandle({
        action: i,
        data: r
      }),
      'LoadVideoNet' !== t && (ne ? we(G, {
        id: t,
        action: i,
        data: r
      }) : oe.push({
        id: t,
        action: i,
        data: r
      }));
    }

    function ce(e, t) {
      ne ? we(Y, {
        type: e,
        data: t
      }) : de.push({
        type: e,
        data: t
      });
    }

    function he(e, t, i) {
      ne ? we(z, {
        type: e,
        data: t,
        av: i
      }) : ae.push({
        type: e,
        data: t,
        av: i
      });
    }

    function fe(e, t, i) {
      ne ? we(J, {
        modu: e,
        mid: t,
        det: i
      }) : se.push({
        modu: e,
        mid: t,
        det: i
      });
    }

    function ye(e) {
      var t = e[0]
        , i = le(t)
        , r = 0;
      try {
        r = i ? i.getMoudleDate() : Pe()[t];
        for (var n = 1; n < e.length; n++)
          r = r[e[n]];
      } catch (e) {
        r = 0;
      }
      return r;
    }

    function me(e, t, i) {
      if ('controller' === e)
        switch (t) {
          case 'setShowHeight':
            (function (e) {
                Pe().controller.showHeight = e,
                le('videoBg') && le('videoBg').updateScale();
              }
            ).apply(void 0, i);
        }
      else if ('xvideoModule' === e)
        switch (t) {
          case 'setOpenWichVideo':
            (function (e) {
                Pe().xvideoModule.xplayer.openWichVideo = e,
                le('videoModule') && le('videoModule').refreshPlayer(),
                le('videoModule') && le('videoModule').viewFresh();
              }
            ).apply(void 0, i);
            break;
          case 'openshowXc':
            (function (e) {
                Pe().xvideoModule.xplayer.showXc = e,
                le('videoModule') && le('videoModule').viewFresh();
              }
            ).apply(void 0, i);
            break;
          case 'showmusicIconfun':
            (function (e) {
                Pe().xvideoModule.xplayer.showmusicicon = e;
              }
            ).apply(void 0, i);
        }
      else if ('ticket' === e)
        'userTickStream' === t && function (e) {
          Pe().ticket.rtmp_url = e.rtmp_url,
            Pe().ticket.rtmp_live = e.rtmp_live;
        }.apply(void 0, i);
      else if ('app' === e)
        switch (t) {
          case 'playBigModel':
            (function (e) {
                Pe().app.playbModel = e,
                le('videoModule') && le('videoModule').viewFresh();
              }
            ).apply(void 0, i);
            break;
          case 'initDelayRoomInfo':
            (function (e) {
                Pe().app.roomInfo.isVertical = e.roomInfo.isVertical,
                  Pe().app.roomInfo.roomSrc = e.roomInfo.roomSrc,
                le('videoBg') && le('videoBg').updateURL();
              }
            ).apply(void 0, i);
            break;
          case 'setAutoPlay':
            (function (e) {
                Pe().app.canAutoPlay = e,
                le('videoModule') && le('videoModule').refreshPlayer();
              }
            ).apply(void 0, i);
            break;
          case 'setPagescreen':
            (function (e) {
                Pe().app.isWebFullscreen = e,
                le('videoModule') && le('videoModule').viewFresh();
              }
            ).apply(void 0, i);
            break;
          case 'setFullScreen':
            (function (e) {
                Pe().app.isFullscreen = e,
                le('videoModule') && le('videoModule').viewFresh();
              }
            ).apply(void 0, i);
            break;
          case 'resize':
            (function (e, t) {
                Pe().app.width = e,
                  Pe().app.height = t,
                le('videoModule') && le('videoModule').viewFresh(),
                le('videoBg') && le('videoBg').updateScale();
              }
            ).apply(void 0, i);
            break;
          case 'refeshStreamInfo':
            (function (e) {
                Pe().app.streamInfo = e;
              }
            ).apply(void 0, i);
            break;
          case 'refreshRidAndCdn':
            (function (e, t) {
                Pe().app.rid = e,
                  Pe().app.cdn = t;
              }
            ).apply(void 0, i);
            break;
          case 'refreshAppinfo':
          case 'initRoomInfo':
            (function (e, t, i) {
                for (var r in e)
                  Pe().app.roomInfo[r] = e[r];
                Pe().app.rateSwitch = t.rateSwitch,
                  Pe().app.rate = i.rate,
                le('videoBg') && le('videoBg').updateURL();
              }
            ).apply(void 0, i);
            break;
          case 'changePageRateSwitch':
            (function (e) {
                Pe().app.pageRateSwitch = e;
              }
            ).apply(void 0, i);
            break;
          case 'changeRateSwitch':
            (function (e) {
                Pe().app.rateSwitch = e;
              }
            ).apply(void 0, i);
            break;
          case 'manualLoadVideo':
            (function (e) {
                Pe().app.manualLoadVideo = e.manualLoadVideo;
              }
            ).apply(void 0, i);
            break;
          case 'freshUip':
            (function (e) {
                Pe().app.uip = e;
              }
            ).apply(void 0, i);
            break;
          case 'freshRate':
            (function (e) {
                Pe().app.rate = e;
              }
            ).apply(void 0, i);
            break;
          case 'freshCdn':
            (function (e) {
                Pe().app.cdn = e;
              }
            ).apply(void 0, i);
            break;
          case 'closeRoom':
            !function () {
              var e = Te('groupid')
                , t = Fe('$ROOM.owner_uid')
                , i = Te('uid') || '0';
              !(1 == !(!t || t !== Number(i)) || '5' == e) && window.destroyFirstVideo && window.destroyFirstVideo(),
              le('videoBg') && le('videoBg').destroy();
            }();
        }
    }

    var _e = void 0;

    function ve(e) {
      var t = e.action
        , i = e.id
        , r = e.data;
      le(i) ? le(i).actionHandle({
        action: t,
        data: r
      }) : me(i, t, r);
    }

    function ge() {
      c.warn('aaaaaaaa+收到第二梯队业务ok'),
        ne = !0,
        we(W, oe),
        we(q, ae),
        we(K, se),
        we($, de),
        we(X, ue);
    }

    var be = void 0;

    function we(e, t) {
      _e || (_e = new U),
        _e.pushData(e, t);
    }

    function Se() {
      return _e || (_e = new U),
        _e.getDid();
    }

    function Te(e) {
      return _e || (_e = new U),
        _e.getCookie(e);
    }

    var Ee = {
      $ROOM: {}
    }
      , ke = {
      app: {
        Status: !0,
        usergroupid: '',
        rid: 0,
        isLogin: !1,
        haveChangeMultirates: 1,
        definitionConfig: '',
        rate: m('realRateModel', '-1'),
        isYuanHua: !1,
        cdn: m(P.player_storage_cdn, ''),
        isYuanhua: !1,
        pageRateSwitch: 0,
        streamInfo: {},
        roomInfo: {},
        width: 1217,
        height: 726,
        isFullscreen: !1,
        isWebFullscreen: !1,
        rateSwitch: 0,
        ct: 0,
        uip: '',
        manualLoadVideo: !1,
        canAutoPlay: !0,
        playbModel: !0,
        isHostlive: !1,
        isPhone: !1,
        p2p: ''
      },
      videoModule: {
        haveShowVideo: !1
      },
      tcp: {
        loginres: {
          userid: 0
        }
      },
      LoadVideoNet: {
        requestRoomInfoTimePoint: -1,
        requestStreamUrlTimePoint: 0,
        starPlayStreamTimePoint: 0,
        loadNum: 0
      },
      xvideoModule: {
        xplayer: {
          showXc: !1,
          showmusicicon: !1,
          openWichVideo: !1
        }
      },
      ticket: {
        isTicketNeed: !1,
        rtmp_url: void 0,
        rtmp_live: void 0
      },
      controller: {
        showHeight: x
      }
    };

    function Oe() {
      var e = Ee.$ROOM.show_status
        , t = Ee.$ROOM.room_id
        , i = Te('uid') || '0'
        , r = Ee.$ROOM.owner_uid
        , n = Ee.$ROOM.eticket
        , o = Ee.$ROOM.is_video_high_quality_time
        , a = Ee.$ROOM.video_high_quality_resolution;
      if ('undefined' !== o && 'undefined' !== a) {
        var s = [parseInt(a, 10), 0, parseInt(o, 10)];
        ke.ticket.definitionConfig = s ? escape(JSON.stringify(s)) : '';
      }
      (ke = {
        app: {
          Status: !0,
          usergroupid: '',
          rid: 0,
          isLogin: !1,
          haveChangeMultirates: 1,
          definitionConfig: '',
          rate: m('realRateModel', '-1'),
          isYuanHua: !1,
          cdn: m(P.player_storage_cdn, ''),
          isYuanhua: !1,
          pageRateSwitch: 0,
          streamInfo: {},
          roomInfo: {},
          width: 1217,
          height: 726,
          isFullscreen: !1,
          isWebFullscreen: !1,
          rateSwitch: 0,
          ct: 0,
          uip: '',
          manualLoadVideo: !1,
          canAutoPlay: !0,
          playbModel: !0,
          isHostlive: !1,
          isPhone: !1,
          p2p: ''
        },
        videoModule: {
          haveShowVideo: !1
        },
        tcp: {
          loginres: {
            userid: 0
          }
        },
        LoadVideoNet: {
          requestRoomInfoTimePoint: -1,
          requestStreamUrlTimePoint: 0,
          starPlayStreamTimePoint: 0,
          loadNum: 0
        },
        xvideoModule: {
          xplayer: {
            showXc: !1,
            showmusicicon: !1,
            openWichVideo: !1
          }
        },
        ticket: {
          isTicketNeed: !1,
          rtmp_url: void 0,
          rtmp_live: void 0
        },
        controller: {
          showHeight: x
        }
      }).app.Status = 1 == e,
        ke.app.usergroupid = Te('groupid') || '0',
        ke.app.rid = t,
        ke.app.isLogin = !!(i && parseFloat(i) > 0),
        ke.app.isHostlive = !(!r || r !== Number(i)),
        ke.app.isYuanhua = -1 !== ['673327', '429265'].indexOf(t),
        ke.app.isPhone = 1 === (Te('phonestatus') || 0),
        ke.ticket.isTicketNeed = void 0 != n && '' != n;
    }

    function Pe() {
      return ke;
    }

    var Re = void 0
      , Ae = 0
      , xe = void 0
      , Me = 3;

    function De() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
        , t = m(P.GaoRateTimestamp, 0);
      Re || (Re = new Date);
      var i = function (e, t, i) {
        var r = new Date(t)
          , n = new Date(r.getFullYear(), r.getMonth(), r.getHours() >= i ? r.getDate() : r.getDate() - 1, i);
        return e < n.getTime();
      }(t, Re.valueOf(), 19);
      return i && e && _(P.GaoRateTimestamp, Re.valueOf()),
        i;
    }

    function Ie() {
      Ae += 1,
        _(P.RateRecordTime, Ae),
      Ae == Me && (pe({
        id: 'multiBitRate',
        action: 'ChangeRateNotify',
        data: [2]
      }),
        clearInterval(xe));
    }

    function Le(e) {
      var t = ye(['app', 'pageRateSwitch'])
        , i = ye(['app', 'isLogin']);
      return Ae = parseInt(m(P.RateRecordTime, 0), 10),
        De(e) ? 1 == t && 0 == i && (e && (clearInterval(xe),
          xe = setInterval(function () {
            Ie();
          }, 6e4)),
          !0) : 1 == t && 0 == i && Ae < Me && (e && (clearInterval(xe),
          xe = setInterval(function () {
            Ie();
          }, 6e4)),
          !0);
    }

    function Ce() {
      clearInterval(xe);
    }

    function Be() {
      return o.DataCenter.global.get('$ROOM') || {};
    }

    var je = !1;

    function Ue() {
      return window.location.href.indexOf('shark_debug=2') > 0 || window.location.href.indexOf('dydg') > 0;
    }

    function Fe(e) {
      return o.DataCenter.global.get(e);
    }

    function Ve(e, t) {
      void 0 === t && (t = Object.getPrototypeOf(e)),
        Object.getOwnPropertyNames(t).forEach(function (t) {
          var i = e[t];
          'function' == typeof i && (e[t] = i.bind(e));
        });
    }

    function Ne(e) {
      var t = e.content
        , i = e.url;
      return new Promise(function (e, r) {
          var n = document.head || document.body
            , o = document.createElement('script')
            , a = function () {
            return n.removeChild(o);
          };
          t ? o.text = t : (o.src = i,
            o.async = !0),
            o.onload = function () {
              a(),
                e();
            }
            ,
            o.onerror = function () {
              a(),
                r(new Error('load ' + i + ' failed.'));
            }
            ,
            n.appendChild(o);
        }
      );
    }

    function He(e, t, i, r, n) {
      try {
        e && 1 == +e.smt && ce(ie),
          pe({
            id: 'loading',
            action: 'showLoading',
            data: [!0]
          });
        for (var o = e.multirates, a = 0; a < o.length; a++)
          o[a].type = o[a].rate;
        var s = o.find(function (e) {
          return e.type === t;
        })
          , d = s ? s.name : ''
          , u = o && o.length > 1 ? 1 : 0
          , l = u
          , p = e.cdnsWithName;
        Pe().app.pageRateSwitch = l,
          pe({
            id: 'app',
            action: 'changePageRateSwitch',
            data: [l]
          });
        var h = void 0
          , f = !1;
        void 0 != e.eticket && null != e.eticket && (h = e.eticket,
          f = !0);
        var y = '';
        (function (e, t) {
            return Promise.resolve().then(function () {
              if (t)
                return '';
              var i = ye(['app', 'isHostlive'])
                , r = ye(['app', 'isLogin'])
                , n = ye(['app', 'isPhone'])
                , o = ye(['ticket', 'isTicketNeed'])
                , a = '';
              return e > 0 &&
              (1 == e ? a = D.XY : 2 == e ? a = D.QQ : 3 == e ? a = D.WS : 4 == e ? a = D.YC : 8 == e && (a = D.BABA)),
                i ? '' : e ? r && n && o ? '' : a : '';
            });
          }
        )(e.p2p, i).then(function (e) {
          y = e;
        }).then(function () {
          pe({
            id: 'ticket',
            action: 'initeticketData',
            data: [h]
          }),
            pe({
              id: 'videoModule',
              action: 'refeshplayerP2pData',
              data: [
                {
                  src: null,
                  p2p: y,
                  streamName: d,
                  streamStatus: e.streamStatus,
                  isPreload: r
                }]
            });
          var i = {
            cdnsWithName: p,
            is_pass_player: e.isPassPlayer
          };
          _('realRateModel', e.rate),
            function (e, t) {
              for (var i in e)
                ke.app.roomInfo[i] = e[i];
              ke.app.multirates = t.multirates,
                ke.app.rateSwitch = t.rateSwitch,
                ke.app.rate = t.rate;
            }(i, {
              multirates: o,
              rateSwitch: u,
              rate: e.rate
            }),
            pe(f ? {
              id: 'LoadVideoNet',
              action: 'loadTicketStream',
              data: [n, t, h]
            } : {
              id: 'LoadVideoNet',
              action: 'streamDataHandle',
              data: [e]
            });
        });
      } catch (e) {
        c.warn(e + 'streamHandle err');
      }
    }

    function Ge() {
      var e = Fe('$ROOM.owner_uid')
        , t = Te('uid') || '0';
      return !(!e || e !== Number(t));
    }

    function We(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var i = Object.getOwnPropertyNames(t), r = 0; r < i.length; r++) {
          var n = i[r]
            , o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }

    var ze = function (e) {
      function t(i) {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, t);
        var r = function (e, t) {
          if (!e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
          return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
        }(this, e.call(this));
        return Ve(r, t.prototype),
          Ve(r),
          r.h5video = i,
          r.props = null,
          r;
      }

      return We(t, e),
        t.prototype.init = function (e) {
          this.container = e;
        }
        ,
        t.prototype.Uprops = function (e, t) {
          this.props.key = t;
        }
        ,
        t.prototype.destroy = function () {
          this.removeAllListeners(),
          this.container && this.element && this.container.contains(this.element) &&
          this.container.removeChild(this.element),
            this.element = null;
        }
        ,
        t;
    }(a.EventEmitter);

    function qe(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var i = Object.getOwnPropertyNames(t), r = 0; r < i.length; r++) {
          var n = i[r]
            , o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }

    var Ye = function (e) {
      function t() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, t);
        var i = function (e, t) {
          if (!e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
          return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
        }(this, e.call(this));
        return i.id = 'videoBg',
          i;
      }

      return qe(t, e),
        t.prototype.init = function (e) {
          1 == Fe('$ROOM.show_status') && (this.container = e,
          void 0 === this.element && (this.element = document.createElement('div'),
            this.element.className = d.a.bg,
            e.appendChild(this.element)),
            this.updateURL());
        }
        ,
        t.prototype.updateScale = function () {}
        ,
        t.prototype.updateURL = function () {
          var e = ye(['app', 'roomInfo', 'isVertical'])
            , t = ye(['app', 'roomInfo', 'coverSrc'])
            , i = ye(['app', 'roomInfo', 'owner_avatar'])
            , r = ye(['app', 'roomInfo', 'isDefaultAvatar'])
            , n = ye(['app', 'roomInfo', 'defaultSrc']);
          if (1 === e || void 0 !== Fe('$ROOM.audioWEBBGIMG')) {
            var o = void 0;
            void 0 !== Fe('$ROOM.audioWEBBGIMG') ? o = Fe('$ROOM.audioWEBBGIMG') : t ? o = t : i && 0 === r
              ? o = i
              : n && (o = n),
              o
                ? (this.initDom(o),
                this.element && 'block' !== this.element.style.display && (this.element.style.display = 'block'))
                : this.element && (this.element.style.display = 'none');
          } else
            this.element && 'block' === this.element.style.display && (this.element.style.display = 'none');
        }
        ,
        t.prototype.initDom = function (e) {
          this.element &&
          (this.element.className = d.a.bg + ' ' + (void 0 === Fe('$ROOM.audioWEBBGIMG') ? d.a.yzBg : ''),
            this.element.style.backgroundImage = 'url(' + e + ')');
        }
        ,
        t.prototype.destroy = function () {
          e.prototype.destroy.call(this);
        }
        ,
        t;
    }(ze)
      , $e = i(10)
      , Ke = i.n($e)
      , Je = null
      , Qe = {
      byteCount: 0,
      haveShowVideo: !1,
      player: {
        isReady: !1,
        isPlay: !0,
        volume: Ge() ? 0 : m(P.player_storage_volume, .5),
        getPlayTime: function () {
          return 0;
        },
        getBuffered: function () {
          return 0;
        },
        getPlayerStat: function () {
          return {};
        },
        videoWidth: 0,
        vidoRealWidth: 0,
        vidoRealHeight: 0,
        videoHeight: 0,
        videoAngle: 0,
        src: '',
        starEnterH5Play: 0,
        showFrameTimePoint: 0,
        p2p: '',
        error: 0,
        isRollback: !1,
        isPreload: !1
      }
    };

    function Xe() {
      return Qe;
    }

    function Ze(e) {
      Xe().player.starEnterH5Play = e;
    }

    function et(e) {
      var t = ye(['videoModule', 'player', 'volume']);
      1 == e ? t -= .1 : t += .1,
      t < 0 && (t = 0),
      t > 1 && (t = 1),
        Xe().player.volume = t,
      Je && Je.refreshPlayer();
    }

    function tt(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
        , i = e.getPlayTime
        , r = e.getBuffered
        , n = e.getPlayerStat;
      Xe().player.isReady = !0,
        Xe().player.isBuffering = !1,
        Xe().player.getPlayTime = i,
        Xe().player.getBuffered = r,
        Xe().player.getPlayerStat = n,
        Xe().player.videoWidth = e.getVideoWidth(),
        Xe().player.videoHeight = e.getVideoHeight(),
      Je && Je.viewFresh(),
      0 == t && pe({
        id: 'loading',
        action: 'showLoading',
        data: [!1]
      });
    }

    function it() {
      pe({
        id: 'LoadVideoNet',
        action: 'loadVideo',
        data: [
          {
            isRollback: !0
          }]
      });
    }

    function rt(e, t) {
      Xe().player.vidoRealWidth = e,
        Xe().player.vidoRealHeight = t;
    }

    function nt(e) {
      Xe().byteCount = e;
    }

    function ot(e) {
      Xe().player.volume = e,
      Je && Je.refreshPlayer();
    }

    function at(e, t) {
      Xe().player.isPlay !== e && (Xe().player.isPlay = e,
      Je && Je.refreshPlayer(),
      e && pe({
        id: 'LoadVideoNet',
        action: 'reloadVideo',
        data: [
          {
            manual: t
          }]
      }));
    }

    function st(e, t) {
      Xe().player.multiratesName = e,
        Xe().player.streamStatus = t;
    }

    function dt(e) {
      var t = Xe().player.src;
      Xe().player.src = e,
      Je && t != e && Je.SrcFresh();
    }

    function ut(e) {
      Xe().player.isPlay = e,
      Je && Je.refreshPlayer();
    }

    function lt(e) {
      Xe().player.isRollback = e;
    }

    function pt(e) {
      Xe().player.p2p = e;
    }

    function ct(e) {
      for (var t in e)
        Xe().player[t] = e[t];
    }

    function ht() {
      Xe().haveShowVideo = !0;
    }

    function ft(e) {
      Xe().player.error = e;
    }

    function yt(e) {
      Je = e;
    }

    function mt() {
      Qe = {
        byteCount: 0,
        haveShowVideo: !1,
        player: {
          isReady: !1,
          isPlay: !0,
          volume: Ge() ? 0 : m(P.player_storage_volume, .5),
          getPlayTime: function () {
            return 0;
          },
          getBuffered: function () {
            return 0;
          },
          getPlayerStat: function () {
            return {};
          },
          videoWidth: 0,
          vidoRealWidth: 0,
          vidoRealHeight: 0,
          videoHeight: 0,
          videoAngle: 0,
          src: '',
          starEnterH5Play: 0,
          showFrameTimePoint: 0,
          p2p: '',
          error: 0,
          isRollback: !1,
          isPreload: !1
        }
      };
    }

    var _t = {}
      , vt = {
      on: function (e, t) {
        var i = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).once;
        e && (_t[e] || (_t[e] = []),
          _t[e].push({
            listener: t,
            once: i
          }));
      },
      off: function (e, t) {
        _t[e] && (_t[e] = _t[e].filter(function (e) {
          return e.listener !== t;
        }));
      },
      once: function (e, t) {
        this.on(e, t, {
          once: !0
        });
      },
      emit: function (e) {
        for (var t = this, i = arguments.length, r = Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
          r[n - 1] = arguments[n];
        _t[e] && _t[e].every(function (i) {
          if (i.listener)
            try {
              var n = i.listener.apply(null, r);
              return i.once && t.off(e, i.listener),
                !n;
            } catch (t) {
              c.warn('Event emit error', e, t);
            }
          return !0;
        });
      },
      clear: function () {
        _t = {};
      }
    }
      , gt = i(1);

    function bt(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var i = Object.getOwnPropertyNames(t), r = 0; r < i.length; r++) {
          var n = i[r]
            , o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }

    var wt, St, Tt, Et, kt = function (e) {
      function t(i, r) {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, t);
        var n = function (e, t) {
          if (!e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
          return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
        }(this, e.call(this));
        return n.tag = 'Player',
          n.ready = !1,
          n.src = i,
          n.options = r,
          Ve(n, t.prototype),
          Ve(n),
          n;
      }

      return bt(t, e),
        t.prototype.attachMedia = function (e) {
          this.video = e,
            this.video.ondurationchange = this.ondurationchange,
            this.video.onended = this.onended,
            this.video.onprogress = this.onprogress,
            this.video.onwaiting = this.onwaiting,
            this.video.onseeking = this.onseeking,
            this.video.onseeked = this.onseeked,
            this.video.oncanplay = this.oncanplay;
        }
        ,
        t.prototype.detachMedia = function () {
          this.removeAllListeners(),
            this.video = null;
        }
        ,
        t.prototype.removeAllListeners = function (t) {
          e.prototype.removeAllListeners.call(this, t),
          this.video && (this.video.ondurationchange = void 0,
            this.video.onended = void 0,
            this.video.onprogress = void 0,
            this.video.onwaiting = void 0,
            this.video.onseeking = void 0,
            this.video.onseeked = void 0,
            this.video.oncanplay = void 0,
            this.video = void 0);
        }
        ,
        t.prototype.ondurationchange = function () {
          this.emit(Kt.DURATION_CHANGE, this.video.duration);
        }
        ,
        t.prototype.onended = function () {
          this.emit(Kt.COMPLETE);
        }
        ,
        t.prototype.onprogress = function () {
          this.emit(Kt.BUFFER_PROGRESS);
        }
        ,
        t.prototype.onwaiting = function () {
          this.emit(Kt.BUFFER_EMPTY);
        }
        ,
        t.prototype.oncanplay = function () {
          this.emit(Kt.BUFFER_FULL),
          this.ready || (this.ready = !0,
            this.emit(Kt.READY));
        }
        ,
        t.prototype.onseeking = function () {}
        ,
        t.prototype.onseeked = function () {}
        ,
        t.prototype.onerror = function () {}
        ,
        t.prototype.load = function () {}
        ,
        t.prototype.play = function () {
          var e = this;
          if (this.video) {
            var t = this.video.play();
            t && t.catch(function (t) {
              var i = t.toString();
              -1 === i.indexOf('play() failed because the user didn\'t interact with the document first') && -1 ===
              i.indexOf(
                'The play method is not allowed by the user agent or the platform in the current context, possibly because the user denied permission') ||
              e.emit(Kt.CANAUTO_PLAY);
            });
          }
        }
        ,
        t.prototype.pause = function () {
          this.video && this.video.pause();
        }
        ,
        t.prototype.seek = function (e) {
          this.video && this.ready && (this.video.currentTime = e);
        }
        ,
        t.prototype.dispose = function () {
          this.ready = !1,
            this.removeAllListeners(),
            this.detachMedia();
        }
        ,
        t.prototype.volume = function (e) {
          return 'number' != typeof e ? this.video ? this.video.volume : 1 : (this.video && (this.video.volume = e),
            1);
        }
        ,
        t.prototype.getPlayTime = function () {
          return this.video ? this.video.currentTime : 0;
        }
        ,
        t.prototype.getBuffered = function () {
          return this.video && this.video.buffered.length > 0
            ? this.video.buffered.end(this.video.buffered.length - 1)
            : 0;
        }
        ,
        t.prototype.getVideoWidth = function () {
          return this.video ? this.video.videoWidth : 0;
        }
        ,
        t.prototype.getVideoHeight = function () {
          return this.video ? this.video.videoHeight : 0;
        }
        ,
        t.prototype.getPlayerStat = function () {
          return {
            mediaInfo: this.mediaInfo,
            statInfo: this.statInfo
          };
        }
        ,
        t.prototype._error = function (e) {
          var t = this;
          !function (e) {
            setTimeout(e, 0);
          }(function () {
            t.emit(Kt.ERROR, e);
          });
        }
        ,
        t;
    }(a.EventEmitter);

    function Ot(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }

    function Pt(e, t) {
      if (!e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
    }

    function Rt(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var i = Object.getOwnPropertyNames(t), r = 0; r < i.length; r++) {
          var n = i[r]
            , o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }

    var At = (St = wt = function (e) {
      function t() {
        Ot(this, t);
        for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
          r[n] = arguments[n];
        var o = Pt(this, e.call.apply(e, [this].concat(r)));
        return o.name = t.NAME,
          o;
      }

      return Rt(t, e),
        t;
    }(Error),
      wt.NAME = 'P2PInitError',
      St)
      , xt = (Et = Tt = function (e) {
      function t() {
        Ot(this, t);
        for (var i = arguments.length, r = Array(i), n = 0; n < i; n++)
          r[n] = arguments[n];
        var o = Pt(this, e.call.apply(e, [this].concat(r)));
        return o.name = t.NAME,
          o.eCode = r.length > 1 ? r[1] : 0,
          o;
      }

      return Rt(t, e),
        t;
    }(Error),
      Tt.NAME = 'P2PRollbackError',
      Et);

    function Mt(e, t) {
      if (!e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
    }

    function Dt(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var i = Object.getOwnPropertyNames(t), r = 0; r < i.length; r++) {
          var n = i[r]
            , o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }

    var It = function (e) {
      function t() {
        var i, r;
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, t);
        for (var n = arguments.length, o = Array(n), a = 0; a < n; a++)
          o[a] = arguments[a];
        return i = r = Mt(this, e.call.apply(e, [this].concat(o))),
          r.sdk = 'https://xp2p-1255868781.file.myqcloud.com/xp2psdk/h5/douyu/qvbp2p.js',
          r.isSdkLoad = !1,
          r._cdnBytes = 0,
          r._p2pBytes = 0,
          r._beginGetSdkTime = 0,
          r._GetSdkTime = 0,
          Mt(r, i);
      }

      return Dt(t, e),
        t.prototype.load = function (t, r) {
          var n = this;
          if (e.prototype.load.call(this, t, r),
            this.isSdkLoad) {
            if (!window.QVBP2P) {
              var o = 'qq p2p sdk init error.';
              return c.warn(o),
                void this.onError(new At(o));
            }
            if (!window.QVBP2P.isSupported()) {
              var a = 'qq p2p not support';
              return c.warn(a),
                void this.onError(new At(a));
            }
            window.qvbp2p && (window.qvbp2p.destroy(),
              window.qvbp2p = null),
              window.qvbp2p = new window.QVBP2P({
                debug: Ue()
              }),
              window.qvbp2p.listen(window.QVBP2P.ComEvents.STATE_CHANGE, this._onStateChange),
              window.qvbp2p.loadSource({
                videoId: A,
                src: t
              });
          } else {
            this.isSdkLoad = !0,
              this._beginGetSdkTime = (new Date).getTime();
            var s = ye(['app', 'rid']);
            4258555 === s || 606118 === s ? Ne({
              url: this.sdk
            }).then(function () {
              n.load(t),
                n._GetSdkTime = (new Date).getTime(),
                vt.emit(Z, {
                  bt: n._beginGetSdkTime,
                  et: n._GetSdkTime
                });
            }).catch(function () {
              n.load(t);
            }) : i.e(4).then(i.bind(null, 15)).then(function () {
              n.load(t),
                n._GetSdkTime = (new Date).getTime(),
                vt.emit(Z, {
                  bt: n._beginGetSdkTime,
                  et: n._GetSdkTime
                });
            }).catch(function (e) {
              c.warn('qqv1.0.0 p2p sdk load error.', e),
                n.load(t);
            });
          }
        }
        ,
        t.prototype.dispose = function () {
          window.qvbp2p && (window.qvbp2p.destroy(),
            window.qvbp2p = null),
            e.prototype.dispose.call(this);
        }
        ,
        t.prototype.getStatistics = function () {
          if (window.qvbp2p && window.qvbp2p.getStatistics) {
            var e = window.qvbp2p.getStatistics()
              , t = e.cdnBytes
              , i = e.p2pReceiveBytes;
            this._cdnBytes += t,
              this._p2pBytes += i;
          }
          return {
            loaderBytes: this._loaderBytes,
            cdnBytes: this._cdnBytes,
            p2pBytes: this._p2pBytes
          };
        }
        ,
        t.prototype._onStateChange = function (e, t) {
          var i = window.QVBP2P.ComCodes;
          switch (t.code) {
            case i.RECEIVE_BUFFER:
              this._receiveBuffer(t.payload);
              break;
            case i.ROLLBACK:
              this._rollback(t.player, t.rollbackReason);
              break;
            case i.END_OF_STREAM:
              this._onEnd();
          }
        }
        ,
        t.prototype._receiveBuffer = function (e) {
          this._onData(e);
        }
        ,
        t.prototype._onEnd = function () {
          this.onEnd && this.onEnd();
        }
        ,
        t.prototype._rollback = function (e, t) {
          this.onError(new xt('p2p error, rollback.', t)),
            this.dispose();
        }
        ,
        t;
    }(gt.BaseLoader);

    function Lt(e, t) {
      if (!e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
    }

    function Ct(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var i = Object.getOwnPropertyNames(t), r = 0; r < i.length; r++) {
          var n = i[r]
            , o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }

    var Bt = function (e) {
      function t() {
        var i, r;
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, t);
        for (var n = arguments.length, o = Array(n), a = 0; a < n; a++)
          o[a] = arguments[a];
        return i = r = Lt(this, e.call.apply(e, [this].concat(o))),
          r.sdk = 'https://www.vod.lxdns.com/html5/douyu.com/whprelease.js',
          r.isSdkLoad = !1,
          r._cdnBytes = 0,
          r._p2pBytes = 0,
          r._beginGetSdkTime = 0,
          r._GetSdkTime = 0,
          Lt(r, i);
      }

      return Ct(t, e),
        t.prototype.load = function (t, r) {
          var n = this;
          if (e.prototype.load.call(this, t, r),
            !this.isSdkLoad) {
            var o = ye(['app', 'rid']);
            return this.isSdkLoad = !0,
              this._beginGetSdkTime = (new Date).getTime(),
              void (122402 === o || 5551065 === o || 1863767 === o ? Ne({
                url: this.sdk
              }).then(function () {
                n.load(t),
                  n._GetSdkTime = (new Date).getTime(),
                  vt.emit(Z, {
                    bt: n._beginGetSdkTime,
                    et: n._GetSdkTime
                  });
              }).catch(function (e) {
                c.warn('ws sdk yuanduan load error.', e),
                  n.load(t);
              }) : i.e(0).then(i.bind(null, 16)).then(function () {
                n.load(t),
                  n._GetSdkTime = (new Date).getTime(),
                  vt.emit(Z, {
                    bt: n._beginGetSdkTime,
                    et: n._GetSdkTime
                  });
              }).catch(function () {
                c.warn('WS 3.0p2p sdk init error.'),
                  n.load(t);
              }));
          }
          if (!window.wshp2p) {
            var a = 'WS p2p sdk init error.';
            return c.warn(a),
              void this.onError(new At(a));
          }
          if (!window.wshp2p.isSupported()) {
            var s = 'WS p2p not support';
            return c.warn(s),
              void this.onError(new At(s));
          }
          this.wshp2pload && (this.wshp2pload.close(),
            this.wshp2pload = null);
          var d = {
            vedio: document.getElementById(A),
            customid: 'douyu.com',
            url: t
          };
          this.wshp2pload = new window.wshp2p.p2pLive,
            this.wshp2pload.rollback = this.rollbackHandle,
            this.wshp2pload.dataarrival = this.dataarrivalHandle,
            this.wshp2pload.open(d);
        }
        ,
        t.prototype.dispose = function () {
          this.wshp2pload && (this.wshp2pload.close(),
            this.wshp2pload = null),
            e.prototype.dispose.call(this);
        }
        ,
        t.prototype.rollbackHandle = function (e) {
          this._rollback(e);
        }
        ,
        t.prototype.dataarrivalHandle = function (e) {
          this._receiveBuffer(e);
        }
        ,
        t.prototype.getStatistics = function () {
          if (this.wshp2pload) {
            var e = this.wshp2pload.infoget()
              , t = e.http_bytesLoaded
              , i = e.p2p_bytesLoaded;
            this._cdnBytes += t,
              this._p2pBytes += i;
          }
          return {
            loaderBytes: this._loaderBytes,
            cdnBytes: this._cdnBytes,
            p2pBytes: this._p2pBytes
          };
        }
        ,
        t.prototype._receiveBuffer = function (e) {
          this._onData(e);
        }
        ,
        t.prototype._rollback = function (e) {
          this.onError(new xt('p2p error, rollback.', e)),
            this.dispose();
        }
        ,
        t;
    }(gt.BaseLoader);

    function jt(e, t) {
      if (!e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
    }

    function Ut(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var i = Object.getOwnPropertyNames(t), r = 0; r < i.length; r++) {
          var n = i[r]
            , o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }

    var Ft = function (e) {
      function t() {
        var i, r;
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, t);
        for (var n = arguments.length, o = Array(n), a = 0; a < n; a++)
          o[a] = arguments[a];
        return i = r = jt(this, e.call.apply(e, [this].concat(o))),
          r.sdk = 'https://sdk.congyicn.com/dist/yhp2p.min.js',
          r.isSdkLoad = !1,
          r._cdnBytes = 0,
          r._p2pBytes = 0,
          r._beginGetSdkTime = 0,
          r._GetSdkTime = 0,
          jt(r, i);
      }

      return Ut(t, e),
        t.prototype.load = function (t, r) {
          var n = this;
          if (e.prototype.load.call(this, t, r),
            !this.isSdkLoad) {
            var o = ye(['app', 'rid']);
            return this.isSdkLoad = !0,
              this._beginGetSdkTime = (new Date).getTime(),
              void (85894 === o || 78561 === o || 128489 === o ? Ne({
                url: this.sdk
              }).then(function () {
                n.load(t),
                  n._GetSdkTime = (new Date).getTime(),
                  vt.emit(Z, {
                    bt: n._beginGetSdkTime,
                    et: n._GetSdkTime
                  });
              }).catch(function () {
                n.load(t);
              }) : i.e(1).then(i.bind(null, 17)).then(function () {
                n.load(t),
                  n._GetSdkTime = (new Date).getTime(),
                  vt.emit(Z, {
                    bt: n._beginGetSdkTime,
                    et: n._GetSdkTime
                  });
              }).catch(function () {
                c.warn('YC p2p sdk init error.'),
                  n.load(t);
              }));
          }
          if (!window.YHP2P) {
            var a = 'YC p2p sdk init error.';
            return c.warn(a),
              void this.onError(new At(a));
          }
          if (!window.YHP2P.isSupported()) {
            var s = 'YC p2p not support';
            return c.warn(s),
              void this.onError(new At(s));
          }
          this.ycp2pload && (this.ycp2pload.destroy(),
            this.ycp2pload = null);
          var d = 'https://p2pcoop.congyicn.com/p2pcoop/live_h5.php?partnerId=douyu&rtmp=' + t;
          this.ycp2pload = new window.YHP2P(d, 10, this.dataarrivalHandle, this.onStatus),
            this.ycp2pload.open();
        }
        ,
        t.prototype.onStatus = function (e) {
          'stream_notfound' !== e && 'start_failed' !== e && 'stream_disconnected' !== e || this.rollbackHandle();
        }
        ,
        t.prototype.dispose = function () {
          this.ycp2pload && (this.ycp2pload.destroy(),
            this.ycp2pload = null),
            e.prototype.dispose.call(this);
        }
        ,
        t.prototype.rollbackHandle = function () {
          this._rollback();
        }
        ,
        t.prototype.dataarrivalHandle = function (e) {
          this._receiveBuffer(e);
        }
        ,
        t.prototype.getStatistics = function () {
          if (this.ycp2pload) {
            var e = this.ycp2pload.getStatistics();
            this._cdnBytes += e[0],
              this._p2pBytes += e[1];
          }
          return {
            loaderBytes: this._loaderBytes,
            cdnBytes: this._cdnBytes,
            p2pBytes: this._p2pBytes
          };
        }
        ,
        t.prototype._receiveBuffer = function (e) {
          this._onData(e);
        }
        ,
        t.prototype._rollback = function () {
          this.onError(new xt('p2p error, rollback.')),
            this.dispose();
        }
        ,
        t;
    }(gt.BaseLoader);

    function Vt(e, t) {
      if (!e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
    }

    function Nt(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var i = Object.getOwnPropertyNames(t), r = 0; r < i.length; r++) {
          var n = i[r]
            , o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }

    var Ht = function (e) {
      function t() {
        var i, r;
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, t);
        for (var n = arguments.length, o = Array(n), a = 0; a < n; a++)
          o[a] = arguments[a];
        return i = r = Vt(this, e.call.apply(e, [this].concat(o))),
          r.sdk = 'https://static.galaxyclouds.cn/0.0.1/kiwi.min.js',
          r.isSdkLoad = !1,
          r._cdnBytes = 0,
          r._p2pBytes = 0,
          r._beginGetSdkTime = 0,
          r._GetSdkTime = 0,
          Vt(r, i);
      }

      return Nt(t, e),
        t.prototype.load = function (t, r) {
          var n = this;
          if (e.prototype.load.call(this, t, r),
            this.isSdkLoad) {
            if (!window.KiwiJs) {
              var o = 'XY p2p sdk init error.';
              return c.warn(o),
                void this.onError(new At(o));
            }
            if (!window.KiwiJs.isSupported()) {
              var a = 'XY p2p not support';
              return c.warn(a),
                void this.onError(new At(a));
            }
            this.xyp2pload && (this.xyp2pload.destroy(),
              this.xyp2pload = null),
              this.xyp2pload = new window.KiwiJs({
                appid: '589ac3b89be5e8493fd1b336',
                secret: 'MAdVFu',
                url: t,
                only_data: !0,
                media_id: A,
                rollback: this.rollbackHandle,
                log_level: Ue() ? 'debug' : void 0
              }),
              this.xyp2pload.on('data', this.dataarrivalHandle),
              this.xyp2pload.on('reset', this.rollbackHandle),
              this.xyp2pload.play();
          } else {
            this.isSdkLoad = !0,
              this._beginGetSdkTime = (new Date).getTime();
            var s = ye(['app', 'rid']);
            949007 === s || 431460 === s ? (c.log('load dyp2p.'),
              i.e(3).then(i.bind(null, 18)).then(function () {
                n.load(t),
                  n._GetSdkTime = (new Date).getTime(),
                  vt.emit(Z, {
                    bt: n._beginGetSdkTime,
                    et: n._GetSdkTime
                  });
              }).catch(function () {
                c.warn('DY p2p sdk init error.'),
                  n.load(t);
              })) : i.e(2).then(i.bind(null, 19)).then(function () {
              n.load(t),
                n._GetSdkTime = (new Date).getTime(),
                vt.emit(Z, {
                  bt: n._beginGetSdkTime,
                  et: n._GetSdkTime
                });
            }).catch(function () {
              c.warn('XY p2p sdk init error.'),
                n.load(t);
            });
          }
        }
        ,
        t.prototype.dispose = function () {
          this.xyp2pload && (this.xyp2pload.destroy(),
            this.xyp2pload = null),
            e.prototype.dispose.call(this);
        }
        ,
        t.prototype.rollbackHandle = function () {
          this._rollback();
        }
        ,
        t.prototype.dataarrivalHandle = function (e) {
          this._receiveBuffer(e.buffer);
        }
        ,
        t.prototype.getStatistics = function () {
          if (this.xyp2pload) {
            var e = this.xyp2pload.getStatistics();
            this._cdnBytes += e.cdnBytes,
              this._p2pBytes += e.p2pBytes;
          }
          return {
            loaderBytes: this._loaderBytes,
            cdnBytes: this._cdnBytes,
            p2pBytes: this._p2pBytes
          };
        }
        ,
        t.prototype._receiveBuffer = function (e) {
          this._onData(e);
        }
        ,
        t.prototype._rollback = function () {
          this.onError(new xt('p2p error, rollback.')),
            this.dispose();
        }
        ,
        t;
    }(gt.BaseLoader);

    function Gt(e, t) {
      if (!e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
    }

    function Wt(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var i = Object.getOwnPropertyNames(t), r = 0; r < i.length; r++) {
          var n = i[r]
            , o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }

    var zt = function (e) {
      function t() {
        var i, r;
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, t);
        for (var n = arguments.length, o = Array(n), a = 0; a < n; a++)
          o[a] = arguments[a];
        return i = r = Gt(this, e.call.apply(e, [this].concat(o))),
          r.isSdkLoad = !1,
          r._cdnBytes = 0,
          r._p2pBytes = 0,
          r._beginGetSdkTime = 0,
          r._GetSdkTime = 0,
          Gt(r, i);
      }

      return Wt(t, e),
        t.prototype.load = function (t, r) {
          var n = this;
          if (e.prototype.load.call(this, t, r),
            !this.isSdkLoad)
            return this.isSdkLoad = !0,
              this._beginGetSdkTime = (new Date).getTime(),
              void i.e(5).then(i.bind(null, 20)).then(function () {
                n.load(t),
                  n._GetSdkTime = (new Date).getTime(),
                  vt.emit(Z, {
                    bt: n._beginGetSdkTime,
                    et: n._GetSdkTime
                  });
              }).catch(function (e) {
                c.warn('baba sdk load error.', e),
                  n.load(t);
              });
          if (!window.PcdnPlayer) {
            var o = 'BaBa p2p sdk init error.';
            return c.warn(o),
              void this.onError(new At(o));
          }
          if (!window.PcdnPlayer.isSupported()) {
            var a = 'BaBa p2p not support';
            return c.warn(a),
              void this.onError(new At(a));
          }
          this.babap2pload && (this.babap2pload.destroy(),
            this.babap2pload = null);
          var s = document.getElementById(A)
            , d = {
            url: t,
            video: s,
            tokenId: '60009e11005bbc28e2be292a4f7e2ba8a0ccc6afc572e3d3b7',
            authKey: 'xWtJCsa27Ocw4LNz'
          };
          this.babap2pload = new window.PcdnPlayer(d),
            this.babap2pload.on(window.PcdnPlayer.Events.DATA, this.dataarrivalHandle),
            this.babap2pload.on(window.PcdnPlayer.Events.ERROR, this.onStatus),
            this.babap2pload.play();
        }
        ,
        t.prototype.onStatus = function () {
          this.rollbackHandle();
        }
        ,
        t.prototype.dispose = function () {
          this.babap2pload && (this.babap2pload.destroy(),
            this.babap2pload = null),
            e.prototype.dispose.call(this);
        }
        ,
        t.prototype.rollbackHandle = function () {
          this._rollback();
        }
        ,
        t.prototype.dataarrivalHandle = function (e) {
          this._receiveBuffer(e);
        }
        ,
        t.prototype.getStatistics = function () {
          if (this.babap2pload) {
            var e = this.babap2pload.getStatistics();
            this._cdnBytes = e.cdnBytes,
              this._p2pBytes = e.p2pBytes;
          }
          return {
            loaderBytes: this._loaderBytes,
            cdnBytes: this._cdnBytes,
            p2pBytes: this._p2pBytes
          };
        }
        ,
        t.prototype._receiveBuffer = function (e) {
          this._onData(e);
        }
        ,
        t.prototype._rollback = function () {
          this.onError(new xt('p2p error, rollback.')),
            this.dispose();
        }
        ,
        t;
    }(gt.BaseLoader)
      , qt = function () {
      function e(e, t) {
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }

      return function (t, i, r) {
        return i && e(t.prototype, i),
        r && e(t, r),
          t;
      };
    }();

    function Yt(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var i = Object.getOwnPropertyNames(t), r = 0; r < i.length; r++) {
          var n = i[r]
            , o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }

    var $t = function (e) {
      function t(i, r) {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, t);
        var n = function (e, t) {
          if (!e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
          return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
        }(this, e.call(this, i, r));
        n.tag = 'FlvPlayer',
          n._createPlayer(i);
        var o = (new Date).getTime();
        return vt.emit(ee, {
          sdkok: o
        }),
          n;
      }

      return Yt(t, e),
        t.prototype._createPlayer = function (e) {
          var t = this;
          this.dispose();
          var i = {
            url: e,
            enableWorker: !0,
            debug: Ue()
          };
          if (this.options) {
            switch (this.options.p2p) {
              case D.QQ:
                i.loader = new It;
                break;
              case D.WS:
                i.loader = new Bt;
                break;
              case D.YC:
                i.loader = new Ft;
                break;
              case D.XY:
                i.loader = new Ht;
                break;
              case D.BABA:
                i.loader = new zt;
            }
            void 0 !== this.options.hasVideo && (i.hasVideo = this.options.hasVideo),
            void 0 !== this.options.hasAudio && (i.hasAudio = this.options.hasAudio);
          }
          this.player = new gt.LivePlayer(i),
          this.player && (this.player.on(gt.PlayerEvents.ON_MEDIA_INFO, function (e) {
            t.mediaInfo = e;
          }),
            this.player.on(gt.PlayerEvents.ON_FIRST_FRAME, function () {
              t.emit(Kt.FIRST_FRAME);
            }),
            this.player.on(gt.PlayerEvents.ON_ERROR, function (e) {
              t._error(e);
            }),
            this.player.on(gt.PlayerEvents.ON_SEI, function (e) {
              5 === e.seiType && 'RoiMaskSeiV00001' === e.seiData.uuid && pe({
                id: 'comment',
                action: 'seiMcdatachange',
                data: [e.seiData.data]
              }),
                t.emit(Kt.ON_SEI, e);
            }));
        }
        ,
        t.prototype.attachMedia = function (t) {
          e.prototype.attachMedia.call(this, t),
          this.player && this.player.attach(t);
        }
        ,
        t.prototype.detachMedia = function () {
          this.player && this.player.detach(),
            e.prototype.detachMedia.call(this);
        }
        ,
        t.prototype.load = function () {
          this.player && this.player.load();
        }
        ,
        t.prototype.dispose = function () {
          this.player && (this.player.dispose(),
            this.player = null),
            e.prototype.dispose.call(this);
        }
        ,
        qt(t, [
          {
            key: 'statInfo',
            get: function () {
              return this.player && this.player.getStatInfo();
            }
          }]),
        t;
    }(kt);
    var Kt = {
      ERROR: 'ERROR',
      FIRST_FRAME: 'FIRST_FRAME',
      READY: 'READY',
      BUFFER_EMPTY: 'BUFFER_EMPTY',
      BUFFER_FULL: 'BUFFER_FULL',
      BUFFER_PROGRESS: 'BUFFER_PROGRESS',
      COMPLETE: 'COMPLETE',
      DURATION_CHANGE: 'DURATION_CHANGE',
      CANAUTO_PLAY: 'CANAUTO_PLAY',
      ON_SEI: 'ON_SEI'
    }
      , Jt = 'hidden' in document ? 'hidden' : 'webkitHidden' in document ? 'webkitHidden' : 'mozHidden' in document
      ? 'mozHidden'
      : null
      , Qt = !1
      , Xt = void 0;

    function Zt(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var i = Object.getOwnPropertyNames(t), r = 0; r < i.length; r++) {
          var n = i[r]
            , o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }

    Jt && (Xt = Jt.replace(/hidden/i, 'visibilitychange'),
      document.addEventListener(Xt, function (e) {
        Qt || (Qt = document[Jt]);
      }, !1));
    var ei = function (e) {
      function t() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, t);
        var i = function (e, t) {
          if (!e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
          return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
        }(this, e.call(this));
        return i.firstReadVide = !0,
          mt(),
          yt(i),
          i.id = 'videoModule',
          i.videoId = A,
          i._byteAnotherTimerID = '',
          i._byteTmp = 0,
          i._byteCount = 0,
          i._byteP2PTmp = 0,
          i._byteP2PCount = 0,
          i.P2PtotalByteCount = 0,
          i.P2PCurrentCount = 0,
          i.inEmpty = !1,
          i.StarEmptyTime = 0,
          i.StarFullTime = 0,
          i.totalEmptyTime = 0,
          i.emptyCount = 0,
          i.fullCount = 0,
          i.hasNetStream = !1,
          i.failTimeIndex = 0,
          i.playTimeIndex = 0,
          i.showFrameTimePoint = 0,
          i.aliNotified = !1,
          i.hasP2PRollback = !1,
          i.videoRealWidth = 0,
          i.videoRealHeight = 0,
          i.bufferCheckTimer = 0,
          i.speedTencounts = 0,
          i.speedArray = [],
          i.lastLoaderBytes = 0,
          i.lastTimestamp = 0,
          i.disposeTimer = 0,
          i.startsdkTimevalue = 0,
          i.getsdkTimevalue = 0,
          i.beginloadTime = 0,
          i.pid = '',
          i.seiTimeList = [],
          vt.on(Z, i.getsdkTime),
          vt.on(ee, i.beginLoadTimefun),
          i;
      }

      return Zt(t, e),
        t.prototype.init = function (t) {
          e.prototype.init.call(this, t),
            this.videoContent = document.createElement('div'),
            this.videoContent.className = Ke.a.videoContainer,
            t.appendChild(this.videoContent),
            this.video = document.createElement('video'),
            this.video.className = Ke.a.video,
            this.videoContent.appendChild(this.video),
            this.video.id = this.videoId,
            this.canvas = document.createElement('canvas'),
            this.canvas.className = Ke.a.screenshot,
            this.videoContent.appendChild(this.canvas),
            this.element = this.videoContent,
            this.videoContent.addEventListener('mouseover', this.onmouseover),
            this.videoContent.addEventListener('mouseleave', this.onmouseleave),
            this.videoContent.addEventListener('dblclick', this.ondblclick),
            this.viewFresh();
        }
        ,
        t.prototype.SrcFresh = function () {
          this.createPlayer(Xe().player.src),
            this.refreshPlayer();
        }
        ,
        t.prototype.actionHandle = function (e) {
          var t = e.action
            , i = e.data;
          r && r[t] && r[t].apply(r, i);
        }
        ,
        t.prototype.render = function (e) {
          var t = e.id
            , i = e.action
            , r = e.data;
          t === this.id && this.actionList.indexOf(i) > -1 && this.actionHandle({
            action: i,
            data: r
          });
        }
        ,
        t.prototype.destroy = function (t) {
          1 == t && (e.prototype.destroy.call(this),
            vt.off(Z, this.getsdkTime),
            vt.off(ee, this.beginLoadTimefun),
            this.firstReadVide = !0),
            clearTimeout(this.disposeTimer),
            clearInterval(this.bufferCheckTimer),
            clearInterval(this._byteAnotherTimerID),
            clearInterval(this.failTimeIndex),
            clearInterval(this.playTimeIndex),
            clearInterval(this.speedTencounts),
          this.player && (this.player.dispose(),
            this.player = null),
            this._byteTmp = 0,
            this._byteCount = 0,
            this._byteP2PTmp = 0,
            this._byteP2PCount = 0,
            this.seiTimeList = [],
            pe({
              id: 'videoModule',
              action: 'setByteCount',
              data: [0]
            }),
            this.P2PtotalByteCount = 0,
            this.P2PCurrentCount = 0,
            this.inEmpty = !1,
            this.StarEmptyTime = 0,
            this.StarFullTime = 0,
            this.totalEmptyTime = 0,
            this.emptyCount = 0,
            this.fullCount = 0,
            this.hasNetStream = !1,
            this.showFrameTimePoint = 0,
            this.speedArray = [],
            this.lastLoaderBytes = 0,
            this.lastTimestamp = 0,
            c.log('video disposed.');
        }
        ,
        t.prototype.createPlayer = function (e) {
          var t = this;
          if (this.reportCarlton(),
            this.destroy(),
            clearTimeout(this.P2PRollbackId),
          e && 0 === e.indexOf('rtmp'))
            return c.warn('can\'t play ' + e + ', switch to flash player.'),
              void (window.__player && window.__player.switchPlayer(!1));
          if (this.canvas && (this.canvas.style.visibility = 'hidden'),
            e) {
            var i = ye(['videoModule', 'player', 'p2p']);
            if (i ? (c.log('player init with p2p: ' + i),
              this.hasP2PRollback = !1) : c.log('player init with no p2p'),
              this.player = function (e, t) {
                return new $t(e, t);
              }(e, {
                p2p: i,
                hasVideo: !Fe('$ROOM.audioWEBBGIMG') && void 0
              }),
              this.player) {
              this.video.src = '',
                this.player.attachMedia(this.video),
                this.player.on(Kt.FIRST_FRAME, this.onFirstFrame),
                this.player.on(Kt.READY, this.onReady),
                this.player.on(Kt.COMPLETE, this.onComplete),
                this.player.on(Kt.DURATION_CHANGE, this.onDurationChange),
                this.player.on(Kt.ERROR, this.onError),
                this.player.on(Kt.ON_SEI, this.seiDateHandle),
                this.player.load();
              for (var r = (new Date).valueOf(), n = '', o = 0; o < 4; o++)
                n += parseInt(10 * Math.random(), 10);
              this.pid = n + r,
              this._byteAnotherTimerID && clearInterval(this._byteAnotherTimerID),
                clearInterval(this.failTimeIndex),
                this.failTimeIndex = setInterval(function () {
                  t.failStreamHander();
                }, 5e3),
                this._byteAnotherTimerID = setInterval(function () {
                  t.getAnotherByteTimer();
                }, 6e4);
            }
          }
          return null;
        }
        ,
        t.prototype.seiDateHandle = function (e) {
          e && 5 === e.seiType && e.seiData && 'CloudVideoStream' === e.seiData.uuid &&
          this.seiTimeList.push(Date.now() - e.seiData.data);
        }
        ,
        t.prototype.getMoudleDate = function () {
          return Xe();
        }
        ,
        t.prototype.refreshPlayer = function () {
          var e = ye(['videoModule', 'player', 'volume'])
            , t = ye(['videoModule', 'player', 'isPlay'])
            , i = ye(['app', 'canAutoPlay'])
            , r = ye(['xvideoModule', 'xplayer', 'openWichVideo']);
          this.player && (r ? this.player.volume(0) : this.player.volume(parseFloat(e, 10)),
            t && i ? this.player.play() : this.stop());
        }
        ,
        t.prototype.onFirstFrame = function () {
          var e = this
            , t = ye(['app', 'rid'])
            , i = ye(['app', 'streamInfo', 'rtmp_live'])
            , r = ye(['videoModule', 'player', 'p2p'])
            , n = ye(['app', 'cdn'])
            , o = ye(['app', 'isLogin'])
            , a = ye(['app', 'pageRateSwitch'])
            , s = ye(['app', 'rate']);
          ce('room_video_replay', {
            rtmp_live: i,
            rid: t,
            hightligth: r !== D.YC && (r === D.QQ || 'tct-h5' === n)
          }),
            this.showFrameTimePoint = (new Date).valueOf(),
            this.performancePoint(),
            this.refreshPlayer(),
            pe({
              id: 'videoModule',
              action: 'setVideoReady',
              data: [this.player, 1]
            }),
            pe({
              id: 'videoModule',
              action: 'changeHaveShowVideoState'
            }),
          0 == o && 1 == a && (Le() || pe({
            id: 'multiBitRate',
            action: 'ChangeRateNotify',
            data: [1]
          })),
          1 !== parseInt(s, 10) && 2 !== parseInt(s, 10) && Le(!0),
            this.hasNetStream = !0,
            clearInterval(this.failTimeIndex),
            this.playTimeIndex = setInterval(function () {
              e.playSucss();
            }, 3e3);
          var d = new Date;
          this.lastTimestamp = d.getTime(),
            this.speedTencounts = setInterval(function () {
              e.countSpeed();
            }, 1e3);
        }
        ,
        t.prototype.countSpeed = function () {
          var e = ye(['videoModule', 'player', 'getPlayerStat'])().statInfo.loaderBytes
            , t = 0
            , i = (new Date).getTime()
            , r = i - this.lastTimestamp;
          this.lastLoaderBytes && e > this.lastLoaderBytes &&
          (t = parseInt((e - this.lastLoaderBytes) / 1024 / (r / 1e3), 10)),
            this.speedArray.push(t),
          this.speedArray.length > 10 && (this.speedArray = this.speedArray.slice(1)),
            this.lastLoaderBytes = e,
            this.lastTimestamp = i;
        }
        ,
        t.prototype.onReady = function () {
          var e = this;
          this.player.on(Kt.BUFFER_EMPTY, this.onBufferEmpty),
            this.player.on(Kt.BUFFER_FULL, this.onBufferFull),
            this.player.on(Kt.BUFFER_PROGRESS, this.onBufferProgress),
            this.player.on(Kt.CANAUTO_PLAY, this.onCanAutoPlay),
            this.refreshPlayer(),
            pe({
              id: 'videoModule',
              action: 'setVideoReady',
              data: [this.player]
            }),
            setTimeout(function () {
              e.player && pe({
                id: 'videoModule',
                action: 'setVideoReady',
                data: [e.player]
              });
            }, 50),
            this.bufferCheckTimer = setInterval(this.checkBuffer, 2e3),
            this.checkBuffer(),
          window.player_video_ready && !je && (je = !0,
            window.player_video_ready.next());
        }
        ,
        t.prototype.checkBuffer = function () {
          if (this.video && this.video.buffered.length > 0) {
            var e = this.video.buffered
              , t = this.video.currentTime
              , i = e.length
              , r = e.end(i - 1);
            if (r - t > 30) {
              var n = e.start(i - 1)
                , o = Math.max(n, r - 8);
              c.warn('buffer too much, seek to ' + o + '. cur=' + t + ' buffered=' + r),
                this.video.currentTime = o;
            }
          }
        }
        ,
        t.prototype.onCanAutoPlay = function () {
          pe({
            id: 'app',
            action: 'setAutoPlay',
            data: [!1]
          });
        }
        ,
        t.prototype.onComplete = function () {
          var e = ye(['app', 'cdn'])
            , t = ye(['videoModule', 'player', 'src'])
            , i = ye(['videoModule', 'player', 'p2p'])
            , r = ye(['app', 'uip']);
          fe('video', 'ASSIST_PLAY_COMPLETE', {
            delta: this.player.getBuffered() - this.player.getPlayTime(),
            playTime: this.player.getPlayTime(),
            emptyCount: this.emptyCount,
            fullCount: this.fullCount,
            browser: navigator.userAgent,
            location: window.location.href,
            cdn: e,
            p2p: i,
            uip: r,
            src: t
          }),
            this.stop(),
            c.log('play complete');
        }
        ,
        t.prototype.onBufferEmpty = function () {
          var e = ye(['app', 'cdn'])
            , t = ye(['videoModule', 'player', 'src'])
            , i = ye(['videoModule', 'player', 'p2p'])
            , r = ye(['app', 'uip']);
          fe('video', 'ASSIST_BUFFER_EMPTY', {
            seeking: this.video.seeking,
            readyState: this.video.readyState,
            delta: this.player.getBuffered() - this.player.getPlayTime(),
            buffered: this.player.getBuffered(),
            playTime: this.player.getPlayTime(),
            bufferLength: this.video.buffered.length,
            emptyCount: this.emptyCount,
            fullCount: this.fullCount,
            browser: navigator.userAgent,
            cdn: e,
            p2p: i,
            uip: r,
            src: t,
            speedArray: this.speedArray
          }),
          this.player.getBuffered() - this.player.getPlayTime() < 1 && (this.emptyCount += 1,
            this.inEmpty = !0,
            this.StarEmptyTime = (new Date).valueOf()),
            c.log('buffer empty');
        }
        ,
        t.prototype.onBufferFull = function () {
          this.fullCount += 1,
          this.inEmpty && (this.totalEmptyTime = this.totalEmptyTime + (new Date).valueOf() - this.StarEmptyTime),
            this.inEmpty = !1,
            c.log('buffer full');
        }
        ,
        t.prototype.onBufferProgress = function () {}
        ,
        t.prototype.onDurationChange = function () {}
        ,
        t.prototype.onError = function (e) {
          var t = this;
          clearInterval(this.failTimeIndex);
          var i = 3
            , r = ye(['yzView', 'isYanzhi'])
            , n = ye(['app', 'cdn'])
            , o = ye(['videoModule', 'player', 'src'])
            , a = ye(['videoModule', 'player', 'p2p'])
            , s = ye(['app', 'uip']);
          if (e instanceof Error)
            switch (e.name) {
              case At.NAME:
              case xt.NAME:
                this.initError = e.name === At.NAME,
                  this.hasP2PRollback = !0;
                var d = e.name === At.NAME ? 1 : 2
                  , u = {
                  playstate: 4,
                  enum: this.emptyCount,
                  fnum: this.fullCount,
                  error: e.message,
                  eCode: e.eCode,
                  us: d
                };
                return c.warn('p2p error, rollback', e.name),
                  this.DataHandle(u),
                  this.firstReadVide ? this.p2pRollback() : (clearTimeout(this.P2PRollbackId),
                    this.P2PRollbackId = setTimeout(function () {
                      t.p2pRollback();
                    }, 5e3 * Math.random())),
                  void this.stop();
              case 'DyNetworkError':
                var l = {
                  playstate: 3,
                  enum: this.emptyCount,
                  fnum: this.fullCount,
                  error: e.message,
                  error_num: 1
                };
                this.DataHandle(l),
                  i = 1;
                break;
              case 'DyMediaError':
              case 'DyDemuxError':
                i = 2;
            }
          fe('video', 'ASSIST_PLAY_ERROR', {
            errorType: i,
            error: e.message,
            playTime: this.player.getPlayTime(),
            browser: navigator.userAgent,
            isYanzhi: r,
            location: window.location.href,
            cdn: n,
            p2p: a,
            uip: s,
            src: o
          }),
            pe({
              id: 'videoModule',
              action: 'setPlayerError',
              data: [i]
            }),
            this.stop(),
            c.warn('player error', e);
        }
        ,
        t.prototype.p2pRollback = function () {
          pe({
            id: 'videoModule',
            action: 'P2PRollback'
          });
        }
        ,
        t.prototype.ondblclick = function () {
          var e = ye(['app', 'isFullscreen'])
            , t = ye(['app', 'isWebFullscreen']);
          e || t ? (e && pe({
            id: 'app',
            action: 'setFullScreen',
            data: [!1]
          }),
          t && pe({
            id: 'app',
            action: 'setPagescreen',
            data: [!1]
          })) : pe({
            id: 'app',
            action: 'setPagescreen',
            data: [!0]
          });
        }
        ,
        t.prototype.getsdkTime = function (e) {
          e && (this.startsdkTimevalue = e.bt,
            this.getsdkTimevalue = e.et);
        }
        ,
        t.prototype.beginLoadTimefun = function (e) {
          e && (this.beginloadTime = e.sdkok);
        }
        ,
        t.prototype.componentDidMount = function () {
          c.log('start loadVideo');
        }
        ,
        t.prototype.componentWillUnmount = function () {
          e.prototype.componentWillUnmount.call(this),
            this.firstReadVide = !0,
            clearInterval(this._byteAnotherTimerID),
            clearInterval(this.failTimeIndex),
            clearTimeout(this.P2PRollbackId),
            this.destroy();
        }
        ,
        t.prototype.onmouseover = function () {
          pe({
            id: 'xvideoModule',
            action: 'showmusicIconfun',
            data: [!0]
          });
        }
        ,
        t.prototype.onmouseleave = function () {
          pe({
            id: 'xvideoModule',
            action: 'showmusicIconfun',
            data: [!1]
          });
        }
        ,
        t.prototype.viewFresh = function () {
          var e = ye(['app', 'width'])
            , t = ye(['app', 'height'])
            , i = ye(['app', 'isFullscreen'])
            , r = ye(['app', 'isWebFullscreen'])
            , n = ye(['app', 'playbModel'])
            , o = ye(['videoModule', 'player', 'videoWidth'])
            , a = ye(['videoModule', 'player', 'videoHeight'])
            , s = (ye(['xvideoModule', 'xplayer', 'showXc']),
            ye(['xvideoModule', 'xplayer', 'openWichVideo']),
            ye(['xvideoModule', 'xplayer', 'showmusicicon']),
            void 0);
          if (t -= i || r || !n ? 0 : x,
          0 === o || 0 === a)
            s = {
              width: e,
              height: t
            },
              this.videoRealWidth = e,
              this.videoRealHeight = t;
          else {
            var d = 1
              , u = 0
              , l = 0
              , p = 0
              , c = 0;
            a / o <= t / e ? (l = e,
              u = a * (d = e / o),
              c = .5 * t - a * d * .5) : (u = t,
              l = o * (d = t / a),
              p = .5 * e - o * d * .5),
              s = {
                width: l,
                height: u,
                left: p,
                top: c
              },
              this.videoRealWidth = l,
              this.videoRealHeight = u;
          }
          var h = {
            width: s.width + 'px',
            height: s.height + 'px'
          };
          Object.assign(this.video.style, h),
            Object.assign(this.canvas.style, h),
          this.videoRealWidth && this.videoRealHeight && pe({
            id: 'videoModule',
            action: 'udpateVidoReal',
            data: [this.videoRealWidth, this.videoRealHeight]
          });
        }
        ,
        t.prototype.stop = function () {
          var e = this;
          this.player && this.canvas && this.video && this.videoRealWidth && this.videoRealHeight &&
          (this.player.pause(),
            this.canvas.width = this.videoRealWidth,
            this.canvas.height = this.videoRealHeight,
            this.canvas.getContext('2d').drawImage(this.video, 0, 0, this.videoRealWidth, this.videoRealHeight),
            this.canvas.style.visibility = '');
          !function () {
            if (Jt)
              return document[Jt];
          }() ? (clearTimeout(this.disposeTimer),
            this.disposeTimer = setTimeout(function () {
              e.destroy();
            }, 20)) : this.destroy();
        }
        ,
        t.prototype.getAnotherByteTimer = function () {
          if (this.player) {
            var e = this.player.statInfo;
            if (e) {
              var t = e.cdnBytes
                , i = e.p2pBytes
                , r = e.loaderBytes;
              this._byteCount = t - this._byteTmp,
                this._byteTmp = t,
                this._byteP2PCount = i - this._byteP2PTmp,
                this._byteP2PTmp = i,
                this.P2PCurrentCount = r - this.P2PtotalByteCount,
                this.P2PtotalByteCount = r;
            }
          }
          this._byteCount < 0 && (this._byteCount = 0),
          this._byteP2PCount < 0 && (this._byteP2PCount = 0),
          this.P2PCurrentCount < 0 && (this.P2PCurrentCount = 0);
          var n = this._byteCount + this._byteP2PCount;
          if (n > 62914560 && (n = 62914560),
          n < 0 && (n = 0),
            pe({
              id: 'videoModule',
              action: 'setByteCount',
              data: [n]
            }),
          this.inEmpty && (this.totalEmptyTime = this.totalEmptyTime + (new Date).valueOf() - this.StarEmptyTime,
            this.StarEmptyTime = (new Date).valueOf()),
            this.hasNetStream) {
            if (this.emptyCount >= 1) {
              var o = {
                playstate: 0,
                enum: this.emptyCount,
                fnum: this.fullCount,
                emptyTime: this.totalEmptyTime,
                caton_type: 0
              };
              this.DataHandle(o);
            }
            var a = {
              playstate: 2,
              enum: this.emptyCount,
              fnum: this.fullCount,
              emptyTime: this.totalEmptyTime,
              dl: this.P2PCurrentCount,
              tdl: this.P2PtotalByteCount,
              pdl: this._byteP2PCount,
              pcdl: this._byteCount
            };
            this.DataHandle(a);
          }
          this.totalEmptyTime = 0,
            this.emptyCount = 0,
            this.fullCount = 0;
        }
        ,
        t.prototype.playSucss = function () {
          clearInterval(this.playTimeIndex);
          var e = {
            playstate: 1,
            enum: this.emptyCount,
            fnum: this.fullCount
          };
          this.DataHandle(e);
        }
        ,
        t.prototype.failStreamHander = function () {
          clearInterval(this.failTimeIndex);
          var e = {
            playstate: 3,
            enum: this.emptyCount,
            fnum: this.fullCount,
            error_num: 0,
            error: ''
          };
          this.DataHandle(e);
        }
        ,
        t.prototype.DataHandle = function (e) {
          var t = ye(['tcp', 'loginres', 'userid'])
            , i = ye(['app', 'rid'])
            , r = ye(['app', 'ct'])
            , n = ye(['app', 'cdn'])
            , o = ye(['videoModule', 'player', 'src'])
            , a = ye(['videoModule', 'player', 'p2p'])
            , s = ye(['app', 'uip'])
            , d = ye(['app', 'streamInfo', 'is_mixed'])
            , u = ye(['videoModule', 'player', 'isPreload'])
            , l = ye(['videoModule', 'player', 'getPlayerStat'])
            , p = ye(['videoModule', 'player', 'streamName'])
            , c = ye(['videoModule', 'player', 'streamStatus'])
            , h = l().mediaInfo
            , f = o.match(/(^|&)isp=([^&]*)(&|$)/)
            , y = f && f[2] ? f[2] : ''
            , m = e.playstate
            , _ = e.enum
            , v = o
            , g = a ? 1 : 0
            , b = +(void 0 !== Fe('$ROOM.audioWEBBGIMG'))
            , w = {
            bt: e.emptyTime || 0,
            ex: e.error || '',
            is_ma: u ? 1 : 0,
            isp: y
          };
          if (1 !== b && (w.is_mix = void 0 === d ? 0 : +d),
          a && (w.pn = a),
            w.definition = p,
          0 == m)
            w.caton_type = e.caton_type;
          else if (1 == m)
            h && (w.vbr = parseInt(h.videoDataRate, 10)),
              w.cs = c;
          else if (2 == m) {
            w.dl = e.dl,
              w.tdl = e.tdl,
              w.pdl = e.pdl,
              w.pcdl = e.pcdl,
            h && (w.vbr = parseInt(h.videoDataRate, 10));
            var S = 0
              , T = 0;
            if (this.seiTimeList.length > 0) {
              for (var E = 0; E < this.seiTimeList.length; E++)
                this.seiTimeList[E] > 0 && this.seiTimeList[E] < 3e4 && (T += 1,
                  S += this.seiTimeList[E]);
              T > 0 && (S = parseInt(S / T, 10));
            } else
              S = -1;
            w.delay = S,
              this.seiTimeList = [];
          } else
            3 == m ? (w.error_num = c ? e.error_num : 4,
              w.cs = c) : 4 == m && (w.us = e.us,
              g = 0,
              w.err_p2p = e.eCode || '');
          var k = JSON.stringify(w);
          !function (e) {
            ne ? we(Q, e) : ue.push(e);
          }({
            type: 'ssr',
            uid: t,
            rid: i,
            ec: _,
            surl: v,
            cdn: n,
            isp2p: g,
            did: Se(),
            ps: m,
            ct: r,
            pt: '2',
            ext: k,
            pid: this.pid,
            uip: s,
            v_type: b,
            aver: R
          });
        }
        ,
        t.prototype.performancePoint = function () {
          var e, t = ye(['videoModule', 'player', 'p2p']), i = ye(['videoModule', 'player', 'isPreload']),
            r = ye(['app', 'cdn']), n = ye(['videoModule', 'player', 'src']).match(/(^|&)isp=([^&]*)(&|$)/),
            o = n && n[2] ? n[2] : '', a = ye(['videoModule', 'player', 'starEnterH5Play']),
            s = ye(['LoadVideoNet', 'requestRoomInfoTimePoint']), d = ye(['LoadVideoNet', 'requestStreamUrlTimePoint']),
            u = ye(['LoadVideoNet', 'starPlayStreamTimePoint']), l = ye(['LoadVideoNet', 'loadNum']), p = t || r,
            h = void 0;
          e = u - d;
          var f = this.showFrameTimePoint - u
            , y = t ? 'prf_pl_ss_p2p_0' : 'prf_pl_ss_cdn_0'
            , m = t ? 2 : 1;
          ye(['app', 'manualLoadVideo']) && (this.firstReadVide = !1),
            h = -1 == s ? -1 : d - s,
            c.log('firstReadVide为' + this.firstReadVide);
          var _ = window.__player && window.__player.isSwitched
            , v = 0;
          if (_ && (v = window.__player.timeSwitch),
          this.firstReadVide && !_)
            this.firstReadVide = !1,
              c.log('发送room_video_catchtime'),
              ce('room_video_catchtime', {
                type: m,
                service_t: p,
                enterFlashTimer: a,
                getRoomInfoTimer: s,
                getStramUrlTimer: d,
                starRequstStramTimer: u,
                showStramTimer: this.showFrameTimePoint,
                isH5: !0,
                is_back: this.hasP2PRollback ? 1 : 0,
                av: R,
                is_ma: i ? 1 : 0,
                requestSDKTime: this.startsdkTimevalue,
                getSDKTime: this.getsdkTimevalue,
                starRequstStramTimer2: this.beginloadTime,
                showStramTimer2: this.showFrameTimePoint,
                isp: o
              });
          else {
            var g = void 0
              , b = 0;
            if (this.firstReadVide) {
              var w, S = a - v, T = s - a;
              b = this.showFrameTimePoint - v,
                (w = {
                  type: m,
                  service_t: p,
                  cnt: l,
                  prf_pl_ro_0: h,
                  prf_pl_pf_0: e
                })[y] = f,
                w.prf_pl_dls_0 = S,
                w.prf_pl_sa_0 = T,
                w.prf_pl_fs_0 = b,
                w.ac_type = 1,
                w.is_back = this.hasP2PRollback ? 1 : 0,
                w.isp = o,
                g = w;
            } else {
              var E;
              b = -1 == s ? this.showFrameTimePoint - d : this.showFrameTimePoint - s,
                (E = {
                  type: m,
                  service_t: p,
                  cnt: l,
                  prf_pl_ro_0: h,
                  prf_pl_pf_0: e
                })[y] = f,
                E.prf_pl_fs_0 = b,
                E.ac_type = 2,
                E.is_back = this.hasP2PRollback ? 1 : 0,
                E.isp = o,
                g = E;
            }
            he('player_load_o', g, R),
              this.firstReadVide = !1;
          }
        }
        ,
        t.prototype.reportCarlton = function () {
          if (this.emptyCount >= 1) {
            var e = {
              playstate: 0,
              enum: this.emptyCount,
              fnum: this.fullCount,
              emptyTime: this.totalEmptyTime,
              caton_type: 1
            };
            this.DataHandle(e);
          }
          this.emptyCount = 0;
        }
        ,
        t;
    }(ze)
      , ti = p('MSG')
      , ii = {
      requestRoomInfoTimePoint: -1,
      requestStreamUrlTimePoint: 0,
      starPlayStreamTimePoint: 0,
      loadNum: 0
    }
      , ri = '/lapi/live/getH5Play';

    function ni() {
      return ii;
    }

    function oi(e) {
      Pe().app.cdn = e.rtmp_cdn,
        pe({
          id: 'app',
          action: 'refreshRidAndCdn',
          data: [e.room_id, e.rtmp_cdn]
        });
      var t = {
        is_mixed: e.is_mixed,
        mixed_url: e.mixed_url,
        mixed_live: e.mixed_live,
        rtmp_url: e.rtmp_url,
        rtmp_live: e.rtmp_live
      };
      Pe().app.uip = e.client_ip,
        pe({
          id: 'app',
          action: 'freshUip',
          data: [e.client_ip]
        }),
        function (e) {
          for (var t in e)
            ke.app.streamInfo[t] = e[t];
        }(t),
        pe({
          id: 'app',
          action: 'refeshStreamInfo',
          data: [t]
        }),
        pe({
          id: 'LoadVideoNet',
          action: 'playStream',
          data: []
        });
    }

    function ai() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        , t = e.cdn
        , i = e.rate
        , r = e.isRollback
        , n = e.isInit
        , o = e.manual
        , a = void 0 !== o && o
        , s = e.isLianmaiOver;
      if (Ce(),
        pe({
          id: 'videoModule',
          action: 'setPlayerError',
          data: [0]
        }),
        pe({
          id: 'videoModule',
          action: 'refeshplayerisRollback',
          data: [r]
        }),
        pe({
          id: 'comment',
          action: 'seiMcdatachange',
          data: ['']
        }),
      a && (Pe().app.manualLoadVideo = a,
        pe({
          id: 'app',
          action: 'manualLoadVideo',
          data: [a]
        })),
        n) {
        var d = Fe('$ROOM.p2p_setting')
          , u = Fe('$ROOM.multirates')
          , l = void 0;
        try {
          var p = localStorage.getItem('h5StreamPreload_h5p_room');
          if (p)
            p = JSON.parse(p),
            Date.now() < p.e && (l = JSON.parse(p.v));
        } catch (e) {
          ti.warn('parse preload stream error', e);
        }
        var c = ye(['app', 'rid']);
        l && c == l.room_id && l.multirates && l.multirates.length > 0 && (l.multirates.forEach(function (e) {
          e.type = e.rate;
        }),
          u = l.multirates,
          i = l.rate);
        var h = Fe('$ROOM.coverSrc')
          , f = Fe('$ROOM.owner_avatar')
          , y = Fe('$ROOM.isDefaultAvatar')
          , v = Fe('$ROOM.roomSrc')
          , g = Fe('$ROOM.defaultSrc')
          , b = u && u.length > 1 ? 1 : 0
          , w = u && u.length > 1 ? 1 : 0
          , S = Fe('$ROOM.is_high_game')
          , T = Fe('$ROOM.room_idle');
        Pe().app.changeRateSwitch = b,
          pe({
            id: 'app',
            action: 'changeRateSwitch',
            data: [b]
          }),
          Pe().app.pageRateSwitch = w,
          pe({
            id: 'app',
            action: 'changePageRateSwitch',
            data: [w]
          }),
        T && T.hasOwnProperty('active') && T.hasOwnProperty('minute_limit') && ce(F, T),
        De() && (_('rateRecordTime', 0),
          _('realRateModel', -1)),
          function (e, t) {
            for (var i in e)
              ke.app.roomInfo[i] = e[i];
            ke.app.rateSwitch = t.rateSwitch,
              ke.app.rate = t.rate;
          }({
            p2p_settings: d,
            coverSrc: h,
            owner_avatar: f,
            isDefaultAvatar: y,
            roomSrc: v,
            defaultSrc: g
          }, {
            rateSwitch: b,
            liveType: S,
            rate: i = m('realRateModel', -1)
          });
      } else
        i = ye(['app', 'rate']);
      pe({
        id: 'LoadVideoNet',
        action: 'loadStream',
        data: [t, i, r, a, n, s]
      });
    }

    function si() {
      var e = ''
        , t = ye(['app', 'streamInfo', 'rtmp_url']);
      t && (e = t + '/' + ye(['app', 'streamInfo', 'rtmp_live']));
      (t = ye(['ticket', 'rtmp_url'])) && (e = t + '/' + ye(['ticket', 'rtmp_live']));
      ye(['app', 'streamInfo', 'is_mixed']) &&
      (e = ye(['app', 'streamInfo', 'mixed_url']) + '/' + ye(['app', 'streamInfo', 'mixed_live']));
      var i = (new Date).valueOf();
      ni().starPlayStreamTimePoint = i,
        pe({
          id: 'videoModule',
          action: 'refeshplayerisPlay',
          data: [!0]
        }),
        pe({
          id: 'app',
          action: 'refreshAppinfo',
          data: [
            ye(['app', 'roomInfo']), {
              rateSwitch: ye(['app', 'rateSwitch']),
              rate: ye(['app', 'rate']),
              multirates: ye(['app', 'multirates'])
            }]
        }),
        pe({
          id: 'videoModule',
          action: 'refeshplayerSrc',
          data: [e]
        });
    }

    function di(e, t, i, r, n, a) {
      var s = ye(['LoadVideoNet', 'loadNum']);
      s += 1;
      var d = (new Date).valueOf()
        , u = (new Date).valueOf();
      ni().requestStreamUrlTimePoint = d,
        ni().loadNum = s,
        ni().requestRoomInfoTimePoint = u;
      var l = ye(['app', 'rid'])
        , p = Se()
        , c = parseInt((new Date).getTime() / 1e3, 10);
      void 0 === e && (e = ye(['app', 'cdn'])),
      void 0 === t && (t = ye(['app', 'rate']));
      var h = void 0
        , f = ye(['videoModule', 'haveShowVideo']) ? 0 : 1
        , y = 0;
      m(P.RateRecordTime, 0) >= 3 && (y = 1);
      try {
        h = window.ub98484234(l, p, c) + '&cdn=' + e + '&rate=' + t + '&ver=' + R + '&iar=' + f + '&ive=' + y;
      } catch (e) {
        return he(I, {
          s_error: 2,
          err_type: 1,
          en_ver: window.vdwdae325w_64we,
          em: e.message
        }),
          ti.error('get stream url error.', e);
      }
      var _ = !1;
      return Promise.resolve().then(function () {
        var r = window.__player && window.__player.isSwitched;
        if (n && !r) {
          var s = void 0;
          try {
            var d = localStorage.getItem('h5StreamPreload_h5p_room');
            if (d)
              d = JSON.parse(d),
              Date.now() < d.e && (s = JSON.parse(d.v));
          } catch (e) {
            ti.warn('parse preload stream error', e);
          }
          if (s && l == s.room_id && s.multirates && s.multirates.length > 0) {
            if (_ = !0,
              !s.rtmp_live) {
              var u = s.multirates[0];
              s.rtmp_url = u.rtmp_url,
                s.rtmp_live = u.rtmp_live,
                s.rate = u.rate,
                ti.warn('找不到指定清晰度的流，使用rate=' + u.rate + '代替');
            }
            return s.rtmp_live && (s.rtmp_live += '&' + h),
            s.mixed_live && (s.mixed_live += '&' + h),
              localStorage.removeItem('h5StreamPreload_h5p_room'),
              ti.log('use preload stream'),
              He(s, t, i, _, e);
          }
        }
        return o.httpClient.post(String, ri + '/' + l, h).subscribe(function (r) {
          var n = r.error;
          try {
            if (0 !== n)
              throw -1 === n ? he(I, {
                s_error: 2,
                err_type: 2,
                en_ver: window.vdwdae325w_64we,
                em: r.msg
              }) : -9 == n && ce(V),
                new Error('stream error code = ' + n);
            var o = JSON.parse(r.data);
            a && o && (o.is_mixed = !1),
              He(o, t, i, _, e);
          } catch (e) {
            pe({
              id: 'loading',
              action: 'showLoading',
              data: [!0]
            });
          }
        });
      }).catch(function (e) {
        return ti.error('Load stream api error : roomid = ' + l, e);
      }),
        null;
    }

    var ui = !1;

    function li(e, t, i) {
      if (!ui && i && (ce(te, {
        status: 1,
        ticketId: i.ticket_id
      }),
        ui = !0),
      !1 !== ye(['app', 'isLogin'])) {
        var r = ye(['LoadVideoNet', 'loadNum']);
        r += 1;
        var n = (new Date).valueOf();
        ni().requestStreamUrlTimePoint = n,
          ni().loadNum = r,
          ni().requestRoomInfoTimePoint = -1;
        var a = ye(['videoModule', 'haveShowVideo']) ? 0 : 1;
        Pe().app.rate = t,
          pe({
            id: 'app',
            action: 'freshRate',
            data: [t]
          });
        var s = ye(['app', 'rid'])
          , d = ye(['app', 'isYuanhua'])
          , u = Se()
          , l = parseInt((new Date).getTime() / 1e3, 10);
        void 0 === e && (e = ye(['app', 'cdn'])),
        void 0 === t && (t = ye(['app', 'rate'])),
          o.httpClient.post(String, M + '/' + s,
            window.ub98484234(s, u, l) + '&cdn=' + e + '&rate=' + t + '&iar=' + a + '&ver=' + R).
            subscribe(function (e) {
              try {
                var t = JSON.stringify(e);
                0 == (e = JSON.parse(t)).error && (e.data = JSON.parse(e.data)),
                  e.flash_is_yuanhua = d ? 1 : 0,
                  Pe().app.uip = e.client_ip,
                  pe({
                    id: 'app',
                    action: 'freshUip',
                    data: [e.client_ip]
                  }),
                  pe({
                    id: 'app',
                    action: 'setTicketData',
                    data: [e]
                  }),
                  Pe().app.cdn = e.data.rtmp_cdn,
                  pe({
                    id: 'app',
                    action: 'freshCdn',
                    data: [e.data.rtmp_cdn]
                  });
              } catch (e) {
                ti.warn('parse preload stream error', e),
                  pe({
                    id: 'loading',
                    action: 'showLoading',
                    data: [!0]
                  }),
                  pe({
                    id: 'videoModule',
                    action: 'setPlay',
                    data: [!0, !0]
                  });
              }
            });
      }
    }

    function pi() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        , t = e.manual
        , i = e.isLianmaiOver;
      pe({
        id: 'videoModule',
        action: 'refeshplayerisPlay',
        data: [!0]
      }),
        pe({
          id: 'LoadVideoNet',
          action: 'loadVideo',
          data: [
            {
              manual: t,
              isLianmaiOver: i
            }]
        });
    }

    function ci() {
      ii = {
        requestRoomInfoTimePoint: -1,
        requestStreamUrlTimePoint: 0,
        starPlayStreamTimePoint: 0,
        loadNum: 0
      };
    }

    function hi(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var i = Object.getOwnPropertyNames(t), r = 0; r < i.length; r++) {
          var n = i[r]
            , o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }

    var fi = function (e) {
      function t() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, t);
        var i = function (e, t) {
          if (!e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
          return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
        }(this, e.call(this));
        return ci(),
          i.id = 'LoadVideoNet',
          i.actionList = ['reloadVideo'],
          i;
      }

      return hi(t, e),
        t.prototype.init = function (t) {
          e.prototype.init.call(this, t);
        }
        ,
        t.prototype.destroy = function () {
          e.prototype.destroy.call(this);
        }
        ,
        t.prototype.getMoudleDate = function () {
          return ni();
        }
        ,
        t.prototype.actionHandle = function (e) {
          var t = e.action
            , i = e.data;
          n && n[t] && n[t].apply(n, i);
        }
        ,
        t;
    }(ze);

    function yi(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function (e, t) {
        for (var i = Object.getOwnPropertyNames(t), r = 0; r < i.length; r++) {
          var n = i[r]
            , o = Object.getOwnPropertyDescriptor(t, n);
          o && o.configurable && void 0 === e[n] && Object.defineProperty(e, n, o);
        }
      }(e, t));
    }

    var mi = function (e) {
      function t() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, t);
        var i = function (e, t) {
          if (!e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
          return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
        }(this, e.call(this));
        return re = [],
          ne = !1,
          oe = [],
          ae = [],
          se = [],
          de = [],
          ue = [],
          i.modules = [],
          i.isVideoShow = !1,
          i;
      }

      return yi(t, e),
        t.prototype.init = function (e) {
          this.container = e,
            function (e) {
              Ee.$ROOM.show_status = e.show_status,
                Ee.$ROOM.p2p_setting = e.p2p_setting,
                Ee.$ROOM.multirates = e.multirates,
                Ee.$ROOM.cate_id = e.cate_id,
                Ee.$ROOM.isVertical = e.isVertical,
                Ee.$ROOM.coverSrc = e.coverSrc,
                Ee.$ROOM.owner_avatar = e.owner_avatar,
                Ee.$ROOM.isDefaultAvatar = e.isDefaultAvatar,
                Ee.$ROOM.roomSrc = e.roomSrc,
                Ee.$ROOM.defaultSrc = e.defaultSrc,
                Ee.$ROOM.is_high_game = e.is_high_game,
                Ee.$ROOM.room_idle = e.room_idle,
                Ee.$ROOM.show_status = e.show_status,
                Ee.$ROOM.room_id = e.room_id,
                Ee.$ROOM.owner_uid = e.owner_uid,
                Ee.$ROOM.eticket = e.eticket,
                Ee.$ROOM.is_video_high_quality_time = e.is_video_high_quality_time,
                Ee.$ROOM.video_high_quality_resolution = e.video_high_quality_resolution,
                Oe();
            }(Be()),
            function (e) {
              var t = e.width
                , i = e.height;
              t && (ke.app.width = t),
              i && (ke.app.height = i);
            }(e.getBoundingClientRect()),
            this.registerModule(new Ye(this), new ei(this), new fi(this)),
            function (e) {
              re = e;
            }(this.modules),
            pe({
              id: 'videoModule',
              action: 'setEnterPlay',
              data: [(new Date).valueOf()]
            }),
            pe({
              id: 'LoadVideoNet',
              action: 'loadVideo',
              data: [
                {
                  isInit: !0
                }]
            }),
          _e || (_e = new U),
          be || (_e.MonitorData(N, ve),
            _e.MonitorData(H, ge),
            be = !0);
        }
        ,
        t.prototype.destroy = function () {
          this.removeAllListeners(),
            this.modules.forEach(function (e) {
              return e.destroy(1);
            }),
            this.modules = null,
            Ce(),
            this.container = null;
        }
        ,
        t.prototype.registerModule = function () {
          for (var e = this, t = arguments.length, i = Array(t), r = 0; r < t; r++)
            i[r] = arguments[r];
          i.forEach(function (t) {
            t.init(e.container),
              e.modules.push(t);
          }),
          Jt && (Qt = document[Jt]);
        }
        ,
        t.prototype.getModule = function (e) {
          for (var t = 0; t < this.modules.length; t++) {
            var i = this.modules[t];
            if (i.id === e)
              return i;
          }
          return null;
        }
        ,
        t;
    }(a.EventEmitter)
      , _i = _i || function (e, t) {
      var i = {}
        , r = i.lib = {}
        , n = function () {}
        , o = r.Base = {
        extend: function (e) {
          n.prototype = this;
          var t = new n;
          return e && t.mixIn(e),
          t.hasOwnProperty('init') || (t.init = function () {
              t.$super.init.apply(this, arguments);
            }
          ),
            t.init.prototype = t,
            t.$super = this,
            t;
        },
        create: function () {
          var e = this.extend();
          return e.init.apply(e, arguments),
            e;
        },
        init: function () {},
        mixIn: function (e) {
          for (var t in e)
            e.hasOwnProperty(t) && (this[t] = e[t]);
          e.hasOwnProperty('toString') && (this.toString = e.toString);
        },
        clone: function () {
          return this.init.prototype.extend(this);
        }
      }
        , a = r.WordArray = o.extend({
        init: function (e, t) {
          e = this.words = e || [],
            this.sigBytes = void 0 != t ? t : 4 * e.length;
        },
        toString: function (e) {
          return (e || d).stringify(this);
        },
        concat: function (e) {
          var t = this.words
            , i = e.words
            , r = this.sigBytes;
          if (e = e.sigBytes,
            this.clamp(),
          r % 4)
            for (var n = 0; n < e; n++)
              t[r + n >>> 2] |= (i[n >>> 2] >>> 24 - n % 4 * 8 & 255) << 24 - (r + n) % 4 * 8;
          else if (65535 < i.length)
            for (n = 0; n < e; n += 4)
              t[r + n >>> 2] = i[n >>> 2];
          else
            t.push.apply(t, i);
          return this.sigBytes += e,
            this;
        },
        clamp: function () {
          var t = this.words
            , i = this.sigBytes;
          t[i >>> 2] &= 4294967295 << 32 - i % 4 * 8,
            t.length = e.ceil(i / 4);
        },
        clone: function () {
          var e = o.clone.call(this);
          return e.words = this.words.slice(0),
            e;
        },
        random: function (t) {
          for (var i = [], r = 0; r < t; r += 4)
            i.push(4294967296 * e.random() | 0);
          return new a.init(i, t);
        }
      })
        , s = i.enc = {}
        , d = s.Hex = {
        stringify: function (e) {
          var t = e.words;
          e = e.sigBytes;
          for (var i = [], r = 0; r < e; r++) {
            var n = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
            i.push((n >>> 4).toString(16)),
              i.push((15 & n).toString(16));
          }
          return i.join('');
        },
        parse: function (e) {
          for (var t = e.length, i = [], r = 0; r < t; r += 2)
            i[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
          return new a.init(i, t / 2);
        }
      }
        , u = s.Latin1 = {
        stringify: function (e) {
          var t = e.words;
          e = e.sigBytes;
          for (var i = [], r = 0; r < e; r++)
            i.push(String.fromCharCode(t[r >>> 2] >>> 24 - r % 4 * 8 & 255));
          return i.join('');
        },
        parse: function (e) {
          for (var t = e.length, i = [], r = 0; r < t; r++)
            i[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
          return new a.init(i, t);
        }
      }
        , l = s.Utf8 = {
        stringify: function (e) {
          try {
            return decodeURIComponent(escape(u.stringify(e)));
          } catch (e) {
            throw Error('Malformed UTF-8 data');
          }
        },
        parse: function (e) {
          return u.parse(unescape(encodeURIComponent(e)));
        }
      }
        , p = r.BufferedBlockAlgorithm = o.extend({
        reset: function () {
          this._data = new a.init,
            this._nDataBytes = 0;
        },
        _append: function (e) {
          'string' == typeof e && (e = l.parse(e)),
            this._data.concat(e),
            this._nDataBytes += e.sigBytes;
        },
        _process: function (t) {
          var i = this._data
            , r = i.words
            , n = i.sigBytes
            , o = this.blockSize
            , s = n / (4 * o);
          if (t = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * o,
            n = e.min(4 * t, n),
            t) {
            for (var d = 0; d < t; d += o)
              this._doProcessBlock(r, d);
            d = r.splice(0, t),
              i.sigBytes -= n;
          }
          return new a.init(d, n);
        },
        clone: function () {
          var e = o.clone.call(this);
          return e._data = this._data.clone(),
            e;
        },
        _minBufferSize: 0
      });
      r.Hasher = p.extend({
        cfg: o.extend(),
        init: function (e) {
          this.cfg = this.cfg.extend(e),
            this.reset();
        },
        reset: function () {
          p.reset.call(this),
            this._doReset();
        },
        update: function (e) {
          return this._append(e),
            this._process(),
            this;
        },
        finalize: function (e) {
          return e && this._append(e),
            this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function (e) {
          return function (t, i) {
            return new e.init(i).finalize(t);
          };
        },
        _createHmacHelper: function (e) {
          return function (t, i) {
            return new c.HMAC.init(e, i).finalize(t);
          };
        }
      });
      var c = i.algo = {};
      return i;
    }(Math);
    !function (e) {
      function t(e, t, i, r, n, o, a) {
        return ((e = e + (t & i | ~t & r) + n + a) << o | e >>> 32 - o) + t;
      }

      function i(e, t, i, r, n, o, a) {
        return ((e = e + (t & r | i & ~r) + n + a) << o | e >>> 32 - o) + t;
      }

      function r(e, t, i, r, n, o, a) {
        return ((e = e + (t ^ i ^ r) + n + a) << o | e >>> 32 - o) + t;
      }

      function n(e, t, i, r, n, o, a) {
        return ((e = e + (i ^ (t | ~r)) + n + a) << o | e >>> 32 - o) + t;
      }

      for (var o = _i, a = (d = o.lib).WordArray, s = d.Hasher, d = o.algo, u = [], l = 0; 64 > l; l++)
        u[l] = 4294967296 * e.abs(e.sin(l + 1)) | 0;
      d = d.MD5 = s.extend({
        _doReset: function () {
          this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function (e, o) {
          for (var a = 0; 16 > a; a++) {
            var s = e[p = o + a];
            e[p] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
          }
          a = this._hash.words;
          var d, l, p = e[o + 0], c = (s = e[o + 1],
              e[o + 2]), h = e[o + 3], f = e[o + 4], y = e[o + 5], m = e[o + 6], _ = e[o + 7], v = e[o + 8], g = e[o + 9],
            b = e[o + 10], w = e[o + 11], S = e[o + 12], T = e[o + 13], E = e[o + 14], k = e[o + 15], O = a[0], P = n(
            P = n(P = n(P = n(P = r(P = r(P = r(P = r(P = i(P = i(P = i(P = i(P = t(P = t(P = t(P = t(P = a[1],
              l = t(l = a[2], d = t(d = a[3], O = t(O, P, l, d, p, 7, u[0]), P, l, s, 12, u[1]), O, P, c, 17, u[2]), d,
              O, h, 22, u[3]), l = t(l, d = t(d, O = t(O, P, l, d, f, 7, u[4]), P, l, y, 12, u[5]), O, P, m, 17, u[6]),
              d, O, _, 22, u[7]),
              l = t(l, d = t(d, O = t(O, P, l, d, v, 7, u[8]), P, l, g, 12, u[9]), O, P, b, 17, u[10]), d, O, w, 22,
              u[11]), l = t(l, d = t(d, O = t(O, P, l, d, S, 7, u[12]), P, l, T, 12, u[13]), O, P, E, 17, u[14]), d, O,
              k, 22, u[15]), l = i(l, d = i(d, O = i(O, P, l, d, s, 5, u[16]), P, l, m, 9, u[17]), O, P, w, 14, u[18]),
              d, O, p, 20, u[19]),
              l = i(l, d = i(d, O = i(O, P, l, d, y, 5, u[20]), P, l, b, 9, u[21]), O, P, k, 14, u[22]), d, O, f, 20,
              u[23]), l = i(l, d = i(d, O = i(O, P, l, d, g, 5, u[24]), P, l, E, 9, u[25]), O, P, h, 14, u[26]), d, O,
              v, 20, u[27]), l = i(l, d = i(d, O = i(O, P, l, d, T, 5, u[28]), P, l, c, 9, u[29]), O, P, _, 14, u[30]),
              d, O, S, 20, u[31]),
              l = r(l, d = r(d, O = r(O, P, l, d, y, 4, u[32]), P, l, v, 11, u[33]), O, P, w, 16, u[34]), d, O, E, 23,
              u[35]), l = r(l, d = r(d, O = r(O, P, l, d, s, 4, u[36]), P, l, f, 11, u[37]), O, P, _, 16, u[38]), d, O,
              b, 23, u[39]), l = r(l, d = r(d, O = r(O, P, l, d, T, 4, u[40]), P, l, p, 11, u[41]), O, P, h, 16, u[42]),
              d, O, m, 23, u[43]),
              l = r(l, d = r(d, O = r(O, P, l, d, g, 4, u[44]), P, l, S, 11, u[45]), O, P, k, 16, u[46]), d, O, c, 23,
              u[47]), l = n(l, d = n(d, O = n(O, P, l, d, p, 6, u[48]), P, l, _, 10, u[49]), O, P, E, 15, u[50]), d, O,
              y, 21, u[51]), l = n(l, d = n(d, O = n(O, P, l, d, S, 6, u[52]), P, l, h, 10, u[53]), O, P, b, 15, u[54]),
              d, O, s, 21, u[55]),
              l = n(l, d = n(d, O = n(O, P, l, d, v, 6, u[56]), P, l, k, 10, u[57]), O, P, m, 15, u[58]), d, O, T, 21,
              u[59]), l = n(l, d = n(d, O = n(O, P, l, d, f, 6, u[60]), P, l, w, 10, u[61]), O, P, c, 15, u[62]), d, O,
            g, 21, u[63]);
          a[0] = a[0] + O | 0,
            a[1] = a[1] + P | 0,
            a[2] = a[2] + l | 0,
            a[3] = a[3] + d | 0;
        },
        _doFinalize: function () {
          var t = this._data
            , i = t.words
            , r = 8 * this._nDataBytes
            , n = 8 * t.sigBytes;
          i[n >>> 5] |= 128 << 24 - n % 32;
          var o = e.floor(r / 4294967296);
          for (i[15 + (n + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                 i[14 + (n + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8),
                 t.sigBytes = 4 * (i.length + 1),
                 this._process(),
                 i = (t = this._hash).words,
                 r = 0; 4 > r; r++)
            n = i[r],
              i[r] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
          return t;
        },
        clone: function () {
          var e = s.clone.call(this);
          return e._hash = this._hash.clone(),
            e;
        }
      }),
        o.MD5 = s._createHelper(d),
        o.HmacMD5 = s._createHmacHelper(d);
    }(Math),
      window.CryptoJS = _i;
    var vi = o.DataCenter.global.get('$ROOM.room_id');
    vi || (vi = window.room_id);
    var gi = 'betard/' + vi
      , bi = o.DataCenter.cookie() || {}
      , wi = bi.get('uid')
      , Si = '/roomapi/biz/getSwitch?rid=' + vi;
    5 != +bi.get('groupid') && +wi != +o.DataCenter.global.get('$ROOM.owner_uid') ||
    (gi = 'betard/' + vi + '?_r=' + Math.random());
    var Ti = {
      $DATA: gi,
      $ROLE_BARRAGE_SWITCH: Si
    };
    window.GIAS || (o.DataCenter.setCommonDataConfig(Ti),
      o.DataCenter.common.get('$DATA')),
      t.getVideo = function () {
        return Ei;
      }
      ,
      function (e) {
        u = e;
      }(Ue());
    var Ei = void 0;

    function ki(e) {
      var t = document.getElementById('js-player-video-first');
      return Ei && Ei.destroy(),
        function () {
          var e = 1 == Fe('$ROOM.show_status')
            , t = Te('groupid')
            , i = Fe('$ROOM.owner_uid')
            , r = Te('uid') || '0'
            , n = !(!i || i !== Number(r));
          return e || !e && (1 == n || '5' == t);
        }() ? ((Ei = new mi).init(t, e),
          Ei) : null;
    }

    var Oi = function () {
      var e = -1 !== location.search.search('[?&]useh5(&|$)');
      return !(!e && navigator.userAgent.match(/Edge\/(\d{2})/)) && (1 === Be().defaulth5 || e) && function () {
        if (!window.vdwdae325w_64we)
          return !1;
        var e = navigator.userAgent
          , t = e.toLowerCase().match(/version\/([\d{2}]+).*safari/);
        if (t) {
          var i = parseInt(t[1], 10);
          if (!Number.isNaN(i) && i >= 11)
            return !0;
        }
        if (t = e.match(/Chrome\/(\d{2})/)) {
          var r = parseInt(t[1], 10);
          if (!Number.isNaN(r) && r >= 43)
            return !0;
        }
        if (t = e.match(/Firefox\/(\d{2})/)) {
          var n = parseInt(t[1], 10);
          if (!Number.isNaN(n) && n >= 43)
            return !0;
        }
        return !1;
      }() && function () {
        var e = m('player_remeber_key');
        return !e || 'h5' === e;
      }();
    }();

    function Pi() {
      Oi && (c.log('enable fast video.'),
        window.FIRST_VIDEO = !0,
        window.__use_player_video_ready = !0,
        window.$Player = {
          useh5: Oi
        },
        ki(1));
    }

    window.checkCreateFirstVideo = function () {
      c.log('enable fast video.'),
        window.FIRST_VIDEO = !0,
        window.__use_player_video_ready = !0,
        window.$Player = {
          useh5: Oi
        },
        ki(2);
    }
      ,
      window.destroyFirstVideo = function () {
        Ei && Ei.destroy(),
          Ei = null;
      }
    ;
    var Ri = window.location.href.indexOf('carnivalBarrageRoom');
    window.GIAS ? -1 === Ri && o.DataCenter.common.get('Player.room').subscribe(function (e) {
      e && e.decrypt && 1 === e.decrypt.status ? Pi() : c.warn('多房间专题页没有初始化H5播放器');
    }) : -1 === Ri && Pi();
  }
  , function (e, t, i) {
    var r = i(8);
    'string' == typeof r && (r = [[e.i, r, '']]);
    var n = {
      transform: void 0
    };
    i(4)(r, n);
    r.locals && (e.exports = r.locals);
  }
  , function (e, t, i) {
    (t = e.exports = i(3)(!1)).push([
      e.i,
      '._1kKaoWgWfDlixqqQxmo-dL{position:absolute;top:0;left:0;right:0;bottom:0;display:block!important;background:transparent 50%/cover no-repeat}._1SrWxye3ZmK3Cy_shRpMH7{margin:-30px;-webkit-filter:blur(30px);filter:blur(30px);display:block!important}',
      '']),
      t.locals = {
        bg: '_1kKaoWgWfDlixqqQxmo-dL',
        'yz-bg': '_1SrWxye3ZmK3Cy_shRpMH7',
        yzBg: '_1SrWxye3ZmK3Cy_shRpMH7'
      };
  }
  , function (e, t) {
    e.exports = function (e) {
      var t = 'undefined' != typeof window && window.location;
      if (!t)
        throw new Error('fixUrls requires window.location');
      if (!e || 'string' != typeof e)
        return e;
      var i = t.protocol + '//' + t.host
        , r = i + t.pathname.replace(/\/[^\/]*$/, '/');
      return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
        var n, o = t.trim().replace(/^"(.*)"$/, function (e, t) {
          return t;
        }).replace(/^'(.*)'$/, function (e, t) {
          return t;
        });
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o) ? e : (n = 0 === o.indexOf('//') ? o : 0 ===
        o.indexOf('/') ? i + o : r + o.replace(/^\.\//, ''),
        'url(' + JSON.stringify(n) + ')');
      });
    };
  }
  , function (e, t, i) {
    var r = i(11);
    'string' == typeof r && (r = [[e.i, r, '']]);
    var n = {
      transform: void 0
    };
    i(4)(r, n);
    r.locals && (e.exports = r.locals);
  }
  , function (e, t, i) {
    (t = e.exports = i(3)(!1)).push([
      e.i,
      '.sqOdMuTuWoumfzV7B2K_C{position:absolute;width:100%;height:100%;overflow:hidden;display:block!important}._24YvIwDiTmfB8Zi3IbUTB8,._32G4lrnklPDotWjRQmof27{position:absolute;left:50%!important;top:50%!important;transform:translate(-50%,-50%);overflow:hidden}._24YvIwDiTmfB8Zi3IbUTB8{pointer-events:none}',
      '']),
      t.locals = {
        videoContainer: 'sqOdMuTuWoumfzV7B2K_C',
        video: '_32G4lrnklPDotWjRQmof27',
        screenshot: '_24YvIwDiTmfB8Zi3IbUTB8'
      };
  }
  , function (e, t) {
    e.exports = function (e) {
      var t = {};

      function i(r) {
        if (t[r])
          return t[r].exports;
        var n = t[r] = {
          i: r,
          l: !1,
          exports: {}
        };
        return e[r].call(n.exports, n, n.exports, i),
          n.l = !0,
          n.exports;
      }

      return i.m = e,
        i.c = t,
        i.d = function (e, t, r) {
          i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
          });
        }
        ,
        i.n = function (e) {
          var t = e && e.__esModule ? function () {
              return e.default;
            }
            : function () {
              return e;
            }
          ;
          return i.d(t, 'a', t),
            t;
        }
        ,
        i.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        ,
        i.p = '',
        i(i.s = 11);
    }([
      function (e, t, i) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var r = !1;

        function n(e) {
          r = e;
        }

        function o(e) {
          for (var t = [], i = 1; i < arguments.length; i++)
            t[i - 1] = arguments[i];
          var n = ['[html5 player]'].concat(t.map(function (e) {
            return '[' + e + ']';
          }));
          return function () {
            for (var t = [], i = 0; i < arguments.length; i++)
              t[i] = arguments[i];
            r && e.call.apply(e, [console].concat(n, t));
          };
        }

        function a() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return {
            log: o.apply(void 0, [console.log].concat(e)),
            debug: o.apply(void 0, [console.debug].concat(e)),
            info: o.apply(void 0, [console.info].concat(e)),
            warn: o.apply(void 0, [console.warn].concat(e)),
            error: o.apply(void 0, [console.error].concat(e)),
            setEnable: n
          };
        }

        t.makeLogger = a,
          t.default = a('dylive');
      }
      , function (e, t, i) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0
        }),
          t.bindAll = function (e, t) {
            void 0 === t && (t = Object.getPrototypeOf(e)),
              Object.getOwnPropertyNames(t).forEach(function (t) {
                var i = e[t];
                'function' == typeof i && (e[t] = i.bind(e));
              });
          };
      }
      , function (e, t, i) {
        'use strict';
        var r = this && this.__extends || function () {
          var e = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            }
            || function (e, t) {
              for (var i in t)
                t.hasOwnProperty(i) && (e[i] = t[i]);
            }
          ;
          return function (t, i) {
            function r() {
              this.constructor = t;
            }

            e(t, i),
              t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                new r);
          };
        }();
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var n = function (e) {
          function t() {
            for (var i = [], r = 0; r < arguments.length; r++)
              i[r] = arguments[r];
            var n = e.apply(this, i) || this;
            return n.name = t.NAME,
              n;
          }

          return r(t, e),
            t.NAME = 'DyNetworkError',
            t;
        }(Error);
        t.DyNetworkError = n;
        var o = function (e) {
          function t() {
            for (var i = [], r = 0; r < arguments.length; r++)
              i[r] = arguments[r];
            var n = e.apply(this, i) || this;
            return n.name = t.NAME,
              n;
          }

          return r(t, e),
            t.NAME = 'DyMediaError',
            t;
        }(Error);
        t.DyMediaError = o;
        var a = function (e) {
          function t() {
            for (var i = [], r = 0; r < arguments.length; r++)
              i[r] = arguments[r];
            var n = e.apply(this, i) || this;
            return n.name = t.NAME,
              n;
          }

          return r(t, e),
            t.NAME = 'DyDemuxError',
            t;
        }(Error);
        t.DyDemuxError = a;
      }
      , function (e, t, i) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var r = i(1)
          , n = function () {
          function e() {
            this._loaderBytes = 0,
              r.bindAll(this),
              r.bindAll(this, e.prototype);
          }

          return Object.defineProperty(e.prototype, 'url', {
            get: function () {
              return this._url;
            },
            enumerable: !0,
            configurable: !0
          }),
            Object.defineProperty(e.prototype, 'redirectUrl', {
              get: function () {
                return this._redirectUrl;
              },
              enumerable: !0,
              configurable: !0
            }),
            e.prototype.load = function (e, t) {
              this._loaderBytes = 0,
                this._url = e;
            }
            ,
            e.prototype.dispose = function () {
              this.onData = null,
                this.onEnd = null,
                this.onError = null;
            }
            ,
            e.prototype.getStatistics = function () {
              return {
                loaderBytes: this._loaderBytes,
                cdnBytes: this._loaderBytes,
                p2pBytes: 0
              };
            }
            ,
            e.prototype._onData = function (e) {
              e && (this._loaderBytes += e.byteLength,
              this.onData && this.onData(e));
            }
            ,
            e.prototype._onRedirectUrl = function (e) {
              this._redirectUrl = e;
            }
            ,
            e.prototype._onError = function (e) {
              this.onError && this.onError(e);
            }
            ,
            e;
        }();
        t.BaseLoader = n;
      }
      , function (e, t) {
        'function' != typeof Object.assign && Object.defineProperty(Object, 'assign', {
          value: function (e, t) {
            'use strict';
            if (null == e)
              throw new TypeError('Cannot convert undefined or null to object');
            for (var i = Object(e), r = 1; r < arguments.length; r++) {
              var n = arguments[r];
              if (null != n)
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (i[o] = n[o]);
            }
            return i;
          },
          writable: !0,
          configurable: !0
        });
      }
      , function (e, t, i) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var r = i(3);
        t.BaseLoader = r.BaseLoader;
        var n = i(14);
        t.FetchStreamLoader = n.FetchStreamLoader;
        var o = i(15);
        t.MozChunkedLoader = o.MozChunkedLoader;
      }
      , function (e, t, i) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var r = {};
        !function () {
          var e = self.navigator.userAgent.toLowerCase()
            , t = /(edge)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) ||
            /(iemobile)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) ||
            /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) ||
            /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) ||
            /(msie) ([\w.]+)/.exec(e) || e.indexOf('trident') >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) ||
            e.indexOf('compatible') < 0 && /(firefox)[ \/]([\w.]+)/.exec(e) || []
            , i = /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) ||
            /(kindle)/.exec(e) || /(android)/.exec(e) || /(windows)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) ||
            /(cros)/.exec(e) || []
            , n = {
            browser: t[5] || t[3] || t[1] || '',
            version: t[2] || t[4] || '0',
            majorVersion: t[4] || t[2] || '0',
            platform: i[0] || ''
          }
            , o = {};
          if (n.browser) {
            o[n.browser] = !0;
            var a = n.majorVersion.split('.');
            o.version = {
              major: parseInt(n.majorVersion, 10),
              string: n.version
            },
            a.length > 1 && (o.version.minor = parseInt(a[1], 10)),
            a.length > 2 && (o.version.build = parseInt(a[2], 10));
          }
          n.platform && (o[n.platform] = !0),
          (o.chrome || o.opr || o.safari) && (o.webkit = !0),
          (o.rv || o.iemobile) && (o.rv && delete o.rv,
            n.browser = 'msie',
            o.msie = !0);
          o.edge && (delete o.edge,
            n.browser = 'msedge',
            o.msedge = !0);
          o.opr && (n.browser = 'opera',
            o.opera = !0);
          o.safari && o.android && (n.browser = 'android',
            o.android = !0);
          for (var s in o.name = n.browser,
            o.platform = n.platform,
            r)
            r.hasOwnProperty(s) && delete r[s];
          Object.assign(r, o);
        }(),
          t.default = r;
      }
      , function (e, t, i) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var r = function () {
          function e() {
            this.mimeType = null,
              this.duration = null,
              this.hasAudio = null,
              this.hasVideo = null,
              this.audioCodec = null,
              this.videoCodec = null,
              this.audioDataRate = null,
              this.videoDataRate = null,
              this.audioSampleRate = null,
              this.audioChannelCount = null,
              this.width = null,
              this.height = null,
              this.fps = null,
              this.profile = null,
              this.level = null,
              this.chromaFormat = null,
              this.sarNum = null,
              this.sarDen = null,
              this.metadata = null,
              this.segments = null,
              this.segmentCount = null,
              this.hasKeyframesIndex = null,
              this.keyframesIndex = null;
          }

          return e.prototype.isComplete = function () {
            var e = !1 === this.hasAudio || !0 === this.hasAudio && null != this.audioCodec && null !=
              this.audioSampleRate && null != this.audioChannelCount
              , t = !1 === this.hasVideo || !0 === this.hasVideo && null != this.videoCodec && null != this.width &&
              null != this.height && null != this.fps && null != this.profile && null != this.level && null !=
              this.chromaFormat && null != this.sarNum && null != this.sarDen;
            return null != this.mimeType && e && t;
          }
            ,
            e.prototype.isSeekable = function () {
              return !0 === this.hasKeyframesIndex;
            }
            ,
            e.prototype.getNearestKeyframe = function (e) {
              if (null == this.keyframesIndex)
                return null;
              var t = this.keyframesIndex
                , i = this._search(t.times, e);
              return {
                index: i,
                milliseconds: t.times[i],
                fileposition: t.filepositions[i]
              };
            }
            ,
            e.prototype._search = function (e, t) {
              var i = 0
                , r = e.length - 1
                , n = 0
                , o = 0
                , a = r;
              for (t < e[0] && (i = 0,
                o = a + 1); o <= a;) {
                if ((n = o + Math.floor((a - o) / 2)) === r || t >= e[n] && t < e[n + 1]) {
                  i = n;
                  break;
                }
                e[n] < t ? o = n + 1 : a = n - 1;
              }
              return i;
            }
            ,
            e;
        }();
        t.default = r;
      }
      , function (e, t, i) {
        'use strict';
        var r = this && this.__generator || function (e, t) {
            var i, r, n, o, a = {
              label: 0,
              sent: function () {
                if (1 & n[0])
                  throw n[1];
                return n[1];
              },
              trys: [],
              ops: []
            };
            return o = {
              next: s(0),
              throw: s(1),
              return: s(2)
            },
            'function' == typeof Symbol && (o[Symbol.iterator] = function () {
                return this;
              }
            ),
              o;

            function s(o) {
              return function (s) {
                return function (o) {
                  if (i)
                    throw new TypeError('Generator is already executing.');
                  for (; a;)
                    try {
                      if (i = 1,
                      r && (n = r[2 & o[0] ? 'return' : o[0] ? 'throw' : 'next']) && !(n = n.call(r, o[1])).done)
                        return n;
                      switch (r = 0,
                      n && (o = [0, n.value]),
                        o[0]) {
                        case 0:
                        case 1:
                          n = o;
                          break;
                        case 4:
                          return a.label++,
                            {
                              value: o[1],
                              done: !1
                            };
                        case 5:
                          a.label++,
                            r = o[1],
                            o = [0];
                          continue;
                        case 7:
                          o = a.ops.pop(),
                            a.trys.pop();
                          continue;
                        default:
                          if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
                            a = 0;
                            continue;
                          }
                          if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                            a.label = o[1];
                            break;
                          }
                          if (6 === o[0] && a.label < n[1]) {
                            a.label = n[1],
                              n = o;
                            break;
                          }
                          if (n && a.label < n[2]) {
                            a.label = n[2],
                              a.ops.push(o);
                            break;
                          }
                          n[2] && a.ops.pop(),
                            a.trys.pop();
                          continue;
                      }
                      o = t.call(e, a);
                    } catch (e) {
                      o = [6, e],
                        r = 0;
                    } finally {
                      i = n = 0;
                    }
                  if (5 & o[0])
                    throw o[1];
                  return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                  };
                }([o, s]);
              };
            }
          }
        ;
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var n, o = i(9), a = i(18), s = i(0), d = i(20), u = i(22), l = i(7), p = i(2);
        !function (e) {
          e[e.WAIT_FLV_FLAG = 0] = 'WAIT_FLV_FLAG',
            e[e.WAIT_PRE_TAG_SIZE = 1] = 'WAIT_PRE_TAG_SIZE',
            e[e.WAIT_TAG = 2] = 'WAIT_TAG';
        }(n || (n = {}));
        var c = function () {
          function e(e) {
            this.TAG = 'FlvDemuxer',
              this.hasFirstFrame = !1,
              this._referenceFrameRate = {
                fixed: !0,
                fps: 23.976,
                fps_num: 23976,
                fps_den: 1e3
              },
              this._flvSoundRateTable = [5500, 11025, 22050, 44100, 48e3],
              this._mpegSamplingRates = [
                96e3,
                88200,
                64e3,
                48e3,
                44100,
                32e3,
                24e3,
                22050,
                16e3,
                12e3,
                11025,
                8e3,
                7350],
              this._mpegAudioV10SampleRateTable = [44100, 48e3, 32e3, 0],
              this._mpegAudioV20SampleRateTable = [22050, 24e3, 16e3, 0],
              this._mpegAudioV25SampleRateTable = [11025, 12e3, 8e3, 0],
              this._mpegAudioL1BitRateTable = [
                0,
                32,
                64,
                96,
                128,
                160,
                192,
                224,
                256,
                288,
                320,
                352,
                384,
                416,
                448,
                -1],
              this._mpegAudioL2BitRateTable = [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1],
              this._mpegAudioL3BitRateTable = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1],
              this._status = n.WAIT_FLV_FLAG,
              this._timestampBase = 0,
              this._timescale = 1e3,
              this._duration = 0,
              this._naluLengthSize = 4,
              this._videoTrack = {
                type: 'video',
                id: 1,
                sequenceNumber: 0,
                samples: [],
                length: 0,
                sei: void 0,
                seiPs: void 0,
                isEnd: !1
              },
              this._audioTrack = {
                type: 'audio',
                id: 2,
                sequenceNumber: 0,
                samples: [],
                length: 0,
                isEnd: !1
              },
              this._audioInitialMetadataDispatched = !1,
              this._videoInitialMetadataDispatched = !1,
              this._mediaInfo = new l.default,
              this._lastParseTime = 0,
              this._config = e,
              this._byteArray = new o.default({
                initLength: this._config.stashBuffer,
                autoClear: !0
              });
          }

          return e.prototype.dispose = function () {
            this.onInit = null,
              this.onTrackData = null,
              this.onTrackMeta = null,
              this.onError = null,
            this._parser && (this._parser.return(),
              this._parser = null),
              this._mediaInfo = null,
              this._audioMeta = null,
              this._videoMeta = null,
              this._videoTrack = null,
              this._audioTrack = null,
              this._byteArray = null,
              this._audioInitialMetadataDispatched = !1,
              this._videoInitialMetadataDispatched = !1;
          }
            ,
            e.prototype.appendData = function (e) {
              this._byteArray.write(e),
                this._parseData();
            }
            ,
            e.prototype.appendEnd = function () {
              this._parseData(!0),
              this._parser && this._parser.return(),
                this._flush(!0);
            }
            ,
            e.prototype._parseData = function (e) {
              if (void 0 === e && (e = !1),
              this._byteArray.byteAvailable > 0) {
                this._parser || (this._parser = this._parse());
                var t = Date.now();
                (e || !this.hasFirstFrame || this._byteArray.byteAvailable > this._config.stashBuffer || t -
                  this._lastParseTime > this._config.stashTime) && (this._parser.next(),
                  this._flush(),
                  this._lastParseTime = t);
              }
            }
            ,
            e.prototype._parse = function () {
              var e, t, i, o, a, d, u, l, p;
              return r(this, function (r) {
                switch (r.label) {
                  case 0:
                    switch (this._status) {
                      case n.WAIT_FLV_FLAG:
                        return [3, 1];
                      case n.WAIT_PRE_TAG_SIZE:
                        return [3, 4];
                      case n.WAIT_TAG:
                        return [3, 7];
                    }
                    return [3, 13];
                  case 1:
                    return this._byteArray.byteAvailable < 9 ? [4] : [3, 3];
                  case 2:
                    return r.sent(),
                      [3, 1];
                  case 3:
                    return 'FLV' !== (e = this._byteArray.readString(3))
                      ? [2, this._error('Not valid flv file : ' + e)]
                      : (this._byteArray.readUint8(),
                        t = this._byteArray.readUint8(),
                        this._mediaInfo.hasVideo = !!(1 & t),
                        this._mediaInfo.hasAudio = !!(4 & t),
                      void 0 !== this._config.hasVideo && (this._mediaInfo.hasVideo = this._config.hasVideo),
                      void 0 !== this._config.hasAudio && (this._mediaInfo.hasAudio = this._config.hasAudio),
                        this._byteArray.read(4),
                        this._status = n.WAIT_PRE_TAG_SIZE,
                        [3, 13]);
                  case 4:
                    return this._byteArray.byteAvailable < 4 ? [4] : [3, 6];
                  case 5:
                    return r.sent(),
                      [3, 4];
                  case 6:
                    return this._byteArray.read(4),
                      this._status = n.WAIT_TAG,
                      [3, 13];
                  case 7:
                    return this._byteArray.byteAvailable < 11 ? [4] : [3, 9];
                  case 8:
                    return r.sent(),
                      [3, 7];
                  case 9:
                    i = this._byteArray.readUint8(),
                      o = this._byteArray.readUint24(),
                      a = this._byteArray.readUint24(),
                      d = this._byteArray.readUint8(),
                      u = d << 24 | a,
                      this._byteArray.readUint24(),
                      r.label = 10;
                  case 10:
                    return this._byteArray.byteAvailable < o ? [4] : [3, 12];
                  case 11:
                    return r.sent(),
                      [3, 10];
                  case 12:
                    switch (l = this._byteArray.bytePosition,
                      p = this._byteArray.read(o),
                      i) {
                      case 8:
                        if (!1 === this._config.hasAudio)
                          break;
                        void 0 === this._config.hasAudio && (this._mediaInfo.hasAudio = !0),
                          this._parseAudio(p, u);
                        break;
                      case 9:
                        if (!1 === this._config.hasVideo)
                          break;
                        void 0 === this._config.hasVideo && (this._mediaInfo.hasVideo = !0),
                          this._parseVideo(p, u, l);
                        break;
                      case 18:
                        this._parseScript(p);
                        break;
                      default:
                        s.default.warn('unsupport flv tag type', i);
                    }
                    return this._status = n.WAIT_PRE_TAG_SIZE,
                      [3, 13];
                  case 13:
                    return [3, 0];
                  case 14:
                    return [2];
                }
              });
            }
            ,
            e.prototype._onInit = function (e) {
              var t = Object.assign(new l.default, e);
              this.onInit && this.onInit(t);
            }
            ,
            e.prototype._flush = function (e) {
              void 0 === e && (e = !1),
              this._mediaInfo.isComplete() && (this._audioTrack.length || this._videoTrack.length || e) &&
              (this._audioTrack.isEnd = e,
                this._videoTrack.isEnd = e,
              this.onTrackData && this.onTrackData(this._audioTrack, this._videoTrack));
            }
            ,
            e.prototype._error = function (e) {
              s.default.error('[' + this.TAG + '] ' + e),
              this.onError && this.onError(new p.DyDemuxError(e));
            }
            ,
            e.prototype._parseAudio = function (e, t) {
              var i = new o.default({
                buffer: e
              })
                , r = i.readUint8()
                , n = (240 & r) >> 4
                , a = (12 & r) >> 2
                , d = 1 & r
                , u = i.read(i.byteAvailable)
                , l = this._audioMeta
                , p = this._audioTrack;
              if (l || ((l = this._audioMeta = {}).type = p.type,
                l.id = p.id,
                l.timescale = this._timescale,
                l.duration = this._duration,
                l.audioSampleRate = this._flvSoundRateTable[a],
                l.channelCount = 0 === d ? 1 : 2),
              10 === n) {
                var c = this._parseAACAudioData(u, 0, u.byteLength);
                if (!c || !c.data)
                  return;
                if (0 === c.packetType) {
                  l.config && s.default.warn(this.TAG, 'Found another AudioSpecificConfig!');
                  var h = c.data;
                  l.audioSampleRate = h.samplingRate,
                    l.channelCount = h.channelCount,
                    l.codec = h.codec,
                    l.originalCodec = h.originalCodec,
                    l.config = h.config,
                    l.refSampleDuration = 1024 / l.audioSampleRate * l.timescale,
                    s.default.log(this.TAG, 'Parsed AudioSpecificConfig'),
                    this._audioInitialMetadataDispatched ? this._flush() : this._audioInitialMetadataDispatched = !0,
                  this.onTrackMeta && this.onTrackMeta('audio', l),
                    (m = this._mediaInfo).audioCodec = l.originalCodec,
                    m.audioSampleRate = l.audioSampleRate,
                    m.audioChannelCount = l.channelCount,
                    m.hasVideo
                      ? null != m.videoCodec &&
                      (m.mimeType = 'video/x-flv; codecs="' + m.videoCodec + ',' + m.audioCodec + '"')
                      : m.mimeType = 'video/x-flv; codecs="' + m.audioCodec + '"',
                  m.isComplete() && this._onInit(m);
                } else if (1 === c.packetType) {
                  var f = this._timestampBase + t
                    , y = {
                    unit: c.data,
                    dts: f,
                    pts: f,
                    cts: 0
                  };
                  p.samples.push(y),
                    p.length += c.data.length;
                } else
                  s.default.error(this.TAG, 'Flv: Unsupported AAC data type ' + c.packetType);
              } else if (2 === n) {
                if (!l.codec) {
                  var m;
                  if (!(h = this._parseMP3AudioData(u, 0, u.byteLength, !0)))
                    return;
                  l.audioSampleRate = h.samplingRate,
                    l.channelCount = h.channelCount,
                    l.codec = h.codec,
                    l.originalCodec = h.originalCodec,
                    l.refSampleDuration = 1152 / l.audioSampleRate * l.timescale,
                    s.default.log(this.TAG, 'Parsed MPEG Audio Frame Header'),
                    this._audioInitialMetadataDispatched = !0,
                  this.onTrackMeta && this.onTrackMeta('audio', l),
                    (m = this._mediaInfo).audioCodec = l.codec,
                    m.audioSampleRate = l.audioSampleRate,
                    m.audioChannelCount = l.channelCount,
                    m.audioDataRate = h.bitRate,
                    m.hasVideo
                      ? null != m.videoCodec &&
                      (m.mimeType = 'video/x-flv; codecs="' + m.videoCodec + ',' + m.audioCodec + '"')
                      : m.mimeType = 'video/x-flv; codecs="' + m.audioCodec + '"',
                  m.isComplete() && this._onInit(m);
                }
                var _ = this._parseMP3AudioData(u, 0, u.byteLength, !1);
                if (!_)
                  return;
                var v = {
                  unit: _,
                  dts: f = this._timestampBase + t,
                  pts: f,
                  cts: 0
                };
                p.samples.push(v),
                  p.length += _.length;
              } else
                this._error('unsupport audio type = ' + n);
            }
            ,
            e.prototype._parseVideo = function (e, t, i) {
              var r = new o.default({
                buffer: e
              })
                , n = r.readUint8()
                , a = (240 & n) >> 4
                , s = 15 & n;
              if (7 !== s)
                return this._error('unsupport video codec type = ' + s);
              var d = r.read(r.byteAvailable);
              this._parseAVCVideoPacket(d, 0, d.byteLength, t, i, a);
            }
            ,
            e.prototype._parseScript = function (e) {
              var t = a.default.parseScriptData(e, 0, e.byteLength);
              if ('onMetaData' in t) {
                var i = t.onMetaData;
                if ('number' == typeof i.audiodatarate && (this._mediaInfo.audioDataRate = i.audiodatarate),
                'number' == typeof i.videodatarate && (this._mediaInfo.videoDataRate = i.videodatarate),
                'number' == typeof i.width && (this._mediaInfo.width = i.width),
                'number' == typeof i.height && (this._mediaInfo.height = i.height),
                  'number' == typeof i.duration ? this._duration = this._mediaInfo.duration = Math.floor(
                    i.duration * this._timescale) : this._duration = this._mediaInfo.duration = 0,
                'number' == typeof i.framerate) {
                  var r = Math.floor(1e3 * i.framerate);
                  if (r > 0) {
                    var n = r / 1e3;
                    this._referenceFrameRate.fixed = !0,
                      this._referenceFrameRate.fps = n,
                      this._referenceFrameRate.fps_num = r,
                      this._referenceFrameRate.fps_den = 1e3,
                      this._mediaInfo.fps = n;
                  }
                }
                if ('object' == typeof i.keyframes) {
                  this._mediaInfo.hasKeyframesIndex = !0;
                  var o = i.keyframes;
                  this._mediaInfo.keyframesIndex = this._parseKeyframesIndex(o),
                    i.keyframes = null;
                } else
                  this._mediaInfo.hasKeyframesIndex = !1;
                this._mediaInfo.metadata = i,
                  s.default.log(this.TAG, 'Parsed onMetaData'),
                this._mediaInfo.isComplete() && this._onInit(this._mediaInfo);
              }
            }
            ,
            e.prototype._parseKeyframesIndex = function (e) {
              for (var t = [], i = [], r = 1; r < e.times.length; r++) {
                var n = this._timestampBase + Math.floor(1e3 * e.times[r]);
                t.push(n),
                  i.push(e.filepositions[r]);
              }
              return {
                times: t,
                filepositions: i
              };
            }
            ,
            e.prototype._parseAACAudioData = function (e, t, i) {
              if (!(i <= 1)) {
                var r = {}
                  , n = new Uint8Array(e, t, i);
                if (r.packetType = n[0],
                0 === n[0])
                  r.data = this._parseAACAudioSpecificConfig(e, t + 1, i - 1);
                else {
                  var o = n.subarray(1);
                  32 === o.byteLength && 33 === o[0] && 31 === o[1] && 16 === o[2] ? s.default.log(
                    'private aac data, ignore!') : r.data = o;
                }
                return r;
              }
              s.default.warn(this.TAG, 'Flv: Invalid AAC packet, missing AACPacketType or/and Data!');
            }
            ,
            e.prototype._parseAACAudioSpecificConfig = function (e, t, i) {
              var r, n, o = new Uint8Array(e, t, i), a = [].slice.call(o), s = 0, d = null;
              if (s = r = o[0] >>> 3,
              (n = (7 & o[0]) << 1 | o[1] >>> 7) < 0 || n >= this._mpegSamplingRates.length)
                this._error('Flv: AAC invalid sampling frequency index!');
              else {
                var u = this._mpegSamplingRates[n]
                  , l = (120 & o[1]) >>> 3;
                if (!(l < 0 || l >= 8)) {
                  5 === s && (d = (7 & o[1]) << 1 | o[2] >>> 7,
                  (124 & o[2]) >>> 2);
                  var p = self.navigator.userAgent.toLowerCase();
                  return -1 !== p.indexOf('firefox') ? n >= 6 ? (s = 5,
                    a = new Array(4),
                    d = n - 3) : (s = 2,
                    a = new Array(2),
                    d = n) : -1 !== p.indexOf('android') ? (s = 2,
                    a = new Array(2),
                    d = n) : (s = 5,
                    d = n,
                    a = new Array(4),
                    n >= 6 ? d = n - 3 : 1 === l && (s = 2,
                      a = new Array(2),
                      d = n)),
                    a[0] = s << 3,
                    a[0] |= (15 & n) >>> 1,
                    a[1] = (15 & n) << 7,
                    a[1] |= (15 & l) << 3,
                  5 === s && (a[1] |= (15 & d) >>> 1,
                    a[2] = (1 & d) << 7,
                    a[2] |= 8,
                    a[3] = 0),
                    {
                      config: a,
                      samplingRate: u,
                      channelCount: l,
                      codec: 'mp4a.40.' + s,
                      originalCodec: 'mp4a.40.' + r
                    };
                }
                this._error('Flv: AAC invalid channel configuration');
              }
            }
            ,
            e.prototype._parseMP3AudioData = function (e, t, i, r) {
              if (!(i < 4)) {
                var n = new Uint8Array(e, t, i)
                  , o = null;
                if (r) {
                  if (255 !== n[0])
                    return;
                  var a = n[1] >>> 3 & 3
                    , d = (6 & n[1]) >> 1
                    , u = (240 & n[2]) >>> 4
                    , l = (12 & n[2]) >>> 2
                    , p = 3 !== (n[3] >>> 6 & 3) ? 2 : 1
                    , c = 0
                    , h = 0;
                  switch (a) {
                    case 0:
                      c = this._mpegAudioV25SampleRateTable[l];
                      break;
                    case 2:
                      c = this._mpegAudioV20SampleRateTable[l];
                      break;
                    case 3:
                      c = this._mpegAudioV10SampleRateTable[l];
                  }
                  switch (d) {
                    case 1:
                      34,
                      u < this._mpegAudioL3BitRateTable.length && (h = this._mpegAudioL3BitRateTable[u]);
                      break;
                    case 2:
                      33,
                      u < this._mpegAudioL2BitRateTable.length && (h = this._mpegAudioL2BitRateTable[u]);
                      break;
                    case 3:
                      32,
                      u < this._mpegAudioL1BitRateTable.length && (h = this._mpegAudioL1BitRateTable[u]);
                  }
                  o = {
                    bitRate: h,
                    samplingRate: c,
                    channelCount: p,
                    codec: 'mp3',
                    originalCodec: 'mp3'
                  };
                } else
                  o = n;
                return o;
              }
              s.default.warn(this.TAG, 'Flv: Invalid MP3 packet, header missing!');
            }
            ,
            e.prototype._parseAVCVideoPacket = function (e, t, i, r, n, a) {
              if (i < 4)
                s.default.warn(this.TAG, 'Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime');
              else {
                var d = o.default.littleEndian
                  , u = new DataView(e, t, i)
                  , l = u.getUint8(0)
                  , p = (16777215 & u.getUint32(0, d)) << 8 >> 8;
                if (0 === l)
                  this._parseAVCDecoderConfigurationRecord(e, t + 4, i - 4);
                else if (1 === l)
                  this._parseAVCVideoData(e, t + 4, i - 4, r, n, a, p);
                else if (2 !== l)
                  return void this._error('Flv: Invalid video packet type ' + l);
              }
            }
            ,
            e.prototype._parseAVCDecoderConfigurationRecord = function (e, t, i) {
              if (i < 7)
                s.default.warn(this.TAG, 'Flv: Invalid AVCDecoderConfigurationRecord, lack of data!');
              else {
                var r = this._videoMeta
                  , n = this._videoTrack
                  , a = o.default.littleEndian
                  , u = new DataView(e, t, i);
                r
                  ? void 0 !== r.avcc && s.default.warn(this.TAG, 'Found another AVCDecoderConfigurationRecord!')
                  : ((r = this._videoMeta = {}).type = 'video',
                    r.id = n.id,
                    r.timescale = this._timescale,
                    r.duration = this._duration);
                var l = u.getUint8(0)
                  , p = u.getUint8(1);
                u.getUint8(2),
                  u.getUint8(3);
                if (1 === l && 0 !== p)
                  if (this._naluLengthSize = 1 + (3 & u.getUint8(4)),
                  3 === this._naluLengthSize || 4 === this._naluLengthSize) {
                    var c = 31 & u.getUint8(5);
                    if (0 !== c) {
                      c > 1 && s.default.warn(this.TAG, 'Flv: Strange AVCDecoderConfigurationRecord: SPS Count = ' + c);
                      for (var h = 6, f = 0; f < c; f++) {
                        var y = u.getUint16(h, a);
                        if (h += 2,
                        0 !== y) {
                          var m = new Uint8Array(e, t + h, y);
                          h += y;
                          var _ = d.default.parseSPS(m);
                          if (0 === f) {
                            r.codecWidth = _.codec_size.width,
                              r.codecHeight = _.codec_size.height,
                              r.presentWidth = _.present_size.width,
                              r.presentHeight = _.present_size.height,
                              r.profile = _.profile_string,
                              r.level = _.level_string,
                              r.bitDepth = _.bit_depth,
                              r.chromaFormat = _.chroma_format,
                              r.sarRatio = _.sar_ratio,
                              r.frameRate = _.frame_rate,
                            !1 !== _.frame_rate.fixed && 0 !== _.frame_rate.fps_num && 0 !== _.frame_rate.fps_den ||
                            (r.frameRate = this._referenceFrameRate);
                            var v = r.frameRate.fps_den
                              , g = r.frameRate.fps_num;
                            r.refSampleDuration = r.timescale * (v / g);
                            for (var b = m.subarray(1, 4), w = 'avc1.', S = 0; S < 3; S++) {
                              var T = b[S].toString(16);
                              T.length < 2 && (T = '0' + T),
                                w += T;
                            }
                            r.codec = w;
                            var E = this._mediaInfo;
                            E.width = r.codecWidth,
                              E.height = r.codecHeight,
                              E.fps = r.frameRate.fps,
                              E.profile = r.profile,
                              E.level = r.level,
                              E.chromaFormat = _.chroma_format_string,
                              E.sarNum = r.sarRatio.width,
                              E.sarDen = r.sarRatio.height,
                              E.videoCodec = w,
                              E.hasAudio
                                ? null != E.audioCodec &&
                                (E.mimeType = 'video/x-flv; codecs="' + E.videoCodec + ',' + E.audioCodec + '"')
                                : E.mimeType = 'video/x-flv; codecs="' + E.videoCodec + '"';
                          }
                        }
                      }
                      var k = u.getUint8(h);
                      if (0 !== k) {
                        k > 1 &&
                        s.default.warn(this.TAG, 'Flv: Strange AVCDecoderConfigurationRecord: PPS Count = ' + k),
                          h++;
                        for (f = 0; f < k; f++) {
                          y = u.getUint16(h, a);
                          h += 2,
                          0 !== y && (h += y);
                        }
                        r.avcc = new Uint8Array(i),
                          r.avcc.set(new Uint8Array(e, t, i), 0),
                          s.default.log(this.TAG, 'Parsed AVCDecoderConfigurationRecord'),
                          this._videoInitialMetadataDispatched
                            ? this._flush()
                            : this._videoInitialMetadataDispatched = !0,
                        this.onTrackMeta && this.onTrackMeta('video', r),
                        this._mediaInfo.isComplete() && this._onInit(this._mediaInfo);
                      } else
                        this._error('Flv: Invalid AVCDecoderConfigurationRecord: No PPS');
                    } else
                      this._error('Flv: Invalid AVCDecoderConfigurationRecord: No SPS');
                  } else
                    this._error('Flv: Strange NaluLengthSizeMinusOne: ' + (this._naluLengthSize - 1));
                else
                  this._error('Flv: Invalid AVCDecoderConfigurationRecord');
              }
            }
            ,
            e.prototype._parseAVCVideoData = function (e, t, i, r, n, a, d) {
              for (var l = o.default.littleEndian, p = new DataView(e, t,
                i), c = [], h = 0, f = 0, y = this._naluLengthSize, m = this._timestampBase + r, _ = 1 === a; f < i;) {
                if (f + 4 >= i) {
                  s.default.warn(this.TAG,
                    'Malformed Nalu near timestamp ' + m + ', offset = ' + f + ', dataSize = ' + i);
                  break;
                }
                var v = p.getUint32(f, l);
                if (3 === y && (v >>>= 8),
                v > i - y)
                  return void s.default.warn(this.TAG,
                    'Malformed Nalus near timestamp ' + m + ', NaluSize > DataSize!');
                var g = 31 & p.getUint8(f + y);
                if (5 === g)
                  _ = !0;
                else if (6 === g)
                  try {
                    var b = new Uint8Array(e, t + f + 1 + y, v - 1)
                      , w = u.default.parseSEI(b)
                      , S = w.seiType
                      , T = w.seiData;
                    this._videoTrack.seiPs = r,
                    T && T.data && (S === u.H264SeiType.H264_SEI_TYPE_USER_DATA_UNREGISTERED && T.uuid ===
                    u.H264SeiUUIDType.CloudVideoStream && (this._videoTrack.sei = T.data),
                    this.onSei && this.onSei({
                      seiTimestamp: r,
                      seiType: S,
                      seiData: T
                    }));
                  } catch (e) {
                    s.default.warn('parse sei error, ignored!', e);
                  }
                var E = new Uint8Array(e, t + f, y + v)
                  , k = {
                  type: g,
                  data: E
                };
                c.push(k),
                  h += E.byteLength,
                  f += y + v;
              }
              if (c.length) {
                var O = this._videoTrack
                  , P = {
                  units: c,
                  length: h,
                  isKeyframe: _,
                  dts: m,
                  cts: d,
                  pts: m + d
                };
                _ && (P.fileposition = n),
                  O.samples.push(P),
                  O.length += h,
                _ && this._videoInitialMetadataDispatched && this._flush();
              }
            }
            ,
            e;
        }();
        t.default = c;
      }
      , function (e, t, i) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var r = function () {
          function e(t) {
            var i = void 0 === t ? {} : t
              , r = i.buffer
              , n = i.initLength
              , o = void 0 === n ? 1024 : n
              , a = i.autoClear
              , s = void 0 !== a && a
              , d = i.increase
              , u = void 0 === d ? 0 : d
              , l = i.littleEndian
              , p = void 0 === l ? e.littleEndian : l;
            this._rposition = 0,
              this._wposition = 0,
              this._count = 0,
              this._autoClear = s,
              this.increase = u,
              this.littleEndian = p,
              r ? (this._buffer = r,
                this._wposition = r.byteLength) : this._buffer = new ArrayBuffer(o);
          }

          return Object.defineProperty(e.prototype, 'buffer', {
            get: function () {
              return this._buffer.slice(0, this._wposition);
            },
            enumerable: !0,
            configurable: !0
          }),
            Object.defineProperty(e.prototype, 'byteAvailable', {
              get: function () {
                return this._wposition - this._rposition;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'byteLength', {
              get: function () {
                return this._wposition;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'bytePosition', {
              get: function () {
                return this._rposition;
              },
              enumerable: !0,
              configurable: !0
            }),
            e.prototype.read = function (t) {
              if (t > this.byteAvailable)
                throw new Error('[' + e.TAG + '] not enough data for read.');
              var i = this._buffer.slice(this._rposition, this._rposition + t);
              return this._rposition += t,
                i;
            }
            ,
            e.prototype.readUint8 = function () {
              return new DataView(this.read(1)).getUint8(0);
            }
            ,
            e.prototype.readUint16 = function () {
              return new DataView(this.read(2)).getUint16(0, this.littleEndian);
            }
            ,
            e.prototype.readUint24 = function () {
              var e = new Uint8Array(this.read(3));
              return this.littleEndian && e.reverse(),
              e[0] << 16 | e[1] << 8 | e[2];
            }
            ,
            e.prototype.readUint32 = function () {
              return new DataView(this.read(4)).getUint32(0, this.littleEndian);
            }
            ,
            e.prototype.readString = function (e) {
              return String.fromCharCode.apply(null, new Uint8Array(this.read(e)));
            }
            ,
            e.prototype.write = function (e) {
              if (e && e.byteLength > 0) {
                var t = e.byteLength
                  , i = this._wposition + t;
                if (i > this._buffer.byteLength) {
                  var r = this._autoClear ? this._rposition : 0
                    , n = i - r
                    , o = this._buffer.slice(r, this._wposition)
                    , a = void 0;
                  n > this._buffer.byteLength ? (this.increase ? n += this.increase : n = 2 *
                    (this.buffer.byteLength + t),
                    this._count++,
                    a = new ArrayBuffer(n)) : a = this._buffer,
                    new Uint8Array(a).set(new Uint8Array(o), 0),
                    this._rposition -= r,
                    this._wposition = o.byteLength,
                    this._buffer = a;
                }
                new Uint8Array(this._buffer).set(new Uint8Array(e), this._wposition),
                  this._wposition += t;
              }
            }
            ,
            e.fromArray = function (t) {
              var i = 0;
              t.forEach(function (e) {
                return i += e.byteLength;
              });
              var r = new e({
                initLength: i
              });
              return t.forEach(function (e) {
                return r.write(e);
              }),
                r;
            }
            ,
            e.TAG = 'ByteArray',
            e.littleEndian = !1,
            e;
        }();
        t.default = r;
      }
      , function (e, t, i) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var r = i(23)
          , n = i(6)
          , o = i(9)
          , a = i(0)
          , s = function () {
          function e(e) {
            this.TAG = 'MP4Remuxer',
              this._audioTrack = {
                container: 'audio/mp4',
                codec: '',
                buffers: [],
                timeOffset: -1,
                extra: {
                  isEnd: !1,
                  jumpOverTs: -1
                }
              },
              this._videoTrack = {
                container: 'video/mp4',
                codec: '',
                buffers: [],
                ts: 0,
                sei: void 0,
                keyframes: [],
                extra: {
                  isEnd: !1
                }
              },
              this._lastAudioSample = null,
              this._lastVideoSample = null,
              this._useAudioMpeg = !1,
              this._isAudioInited = !1,
              this._isVideoInited = !1,
              this._isAudioTimeNeedUpdate = !1,
              this._config = e;
          }

          return e.prototype.dispose = function () {
            this.onInit = null,
              this.onData = null,
              this.onError = null,
              this._mediaInfo = null,
              this._audioMeta = null,
              this._videoMeta = null,
              this._audioTrack = null,
              this._videoTrack = null,
              this._lastAudioSample = null,
              this._lastVideoSample = null;
          }
            ,
            e.prototype.onMediaInfo = function (e) {
              this._mediaInfo && a.default.log('receive another mediaInfo!', this._mediaInfo, e),
                this._mediaInfo = e,
              e.hasAudio && !this._isAudioInited && (this._isAudioInited = !0,
                'mp3' !== this._mediaInfo.audioCodec || n.default.firefox
                  ? (this._audioTrack.codec = this._mediaInfo.audioCodec,
                    this._audioTrack.buffers.push(r.default.generateInitSegment(this._audioMeta).buffer))
                  : (this._useAudioMpeg = !0,
                    this._isAudioTimeNeedUpdate = !0,
                    this._audioTrack.container = 'audio/mpeg',
                    this._audioTrack.codec = '')),
              e.hasVideo && !this._isVideoInited && (this._isVideoInited = !0,
                this._videoTrack.codec = this._mediaInfo.videoCodec,
                this._videoTrack.buffers.push(r.default.generateInitSegment(this._videoMeta).buffer)),
              this.onInit && this.onInit(this._mediaInfo);
            }
            ,
            e.prototype.onTrackMeta = function (e, t) {
              'audio' === e && (this._audioMeta = t),
              'video' === e && (this._videoMeta = t);
            }
            ,
            e.prototype.onTrackData = function (e, t) {
              this._remuxVideo(t),
                this._remuxAudio(e),
                this._dispatchData();
            }
            ,
            e.prototype._dispatchData = function () {
              if (this.onData) {
                var e = [];
                if (this._mediaInfo.hasAudio) {
                  var t = this._audioTrack
                    , i = o.default.fromArray(t.buffers).buffer;
                  t.buffers = [],
                    e.push({
                      id: 0,
                      container: t.container,
                      codec: t.codec,
                      data: i,
                      timeOffset: t.timeOffset,
                      extra: Object.assign({}, t.extra)
                    }),
                    t.timeOffset = -1;
                }
                if (this._mediaInfo.hasVideo) {
                  t = this._videoTrack,
                    i = o.default.fromArray(t.buffers).buffer;
                  t.buffers = [],
                    e.push({
                      id: 1,
                      container: t.container,
                      codec: t.codec,
                      data: i,
                      ts: t.ts,
                      sei: t.sei,
                      keyframes: t.keyframes.splice(0, t.keyframes.length),
                      extra: Object.assign({}, t.extra)
                    });
                }
                this.onData(e);
              }
            }
            ,
            e.prototype._remuxAudio = function (e) {
              if (this._audioMeta) {
                var t = e
                  , i = t.isEnd
                  , n = t.samples;
                if (this._audioTrack.extra.isEnd = i,
                n && (this._lastAudioSample && (n.unshift(this._lastAudioSample),
                  this._lastAudioSample = null),
                i || (this._lastAudioSample = n.pop()),
                0 !== n.length)) {
                  for (var s = -1, d = n.length, u = 0, l = -1, p = 0; p < d; p++) {
                    var c = n[p];
                    -1 === s && (s = c.dts),
                      p === d - 1 ? this._lastAudioSample
                        ? c.duration = this._lastAudioSample.pts - c.pts
                        : c.duration = Math.floor(this._audioMeta.refSampleDuration) : c.duration = n[p + 1].pts -
                        c.pts,
                    c.duration > this._config.audioDurationThreshold &&
                    (a.default.warn('audio duration too long', c.duration),
                      l = c.dts + c.duration),
                      c.size = c.unit.byteLength,
                      c.flags = {
                        isLeading: 0,
                        dependsOn: 1,
                        isDependedOn: 0,
                        hasRedundancy: 0
                      },
                      u += c.size;
                  }
                  var h = new o.default({
                    initLength: u
                  });
                  if (n.forEach(function (e) {
                    return h.write(e.unit);
                  }),
                    this._useAudioMpeg)
                    this._audioTrack.buffers.push(h.buffer),
                    this._isAudioTimeNeedUpdate && (this._audioTrack.timeOffset = s,
                      this._isAudioTimeNeedUpdate = !1);
                  else {
                    var f = r.default.moof(t, s)
                      , y = r.default.mdat(new Uint8Array(h.buffer));
                    this._audioTrack.buffers.push(this._mergeBoxes(f, y).buffer);
                  }
                  this._audioTrack.extra.jumpOverTs = l,
                    t.sequenceNumber++,
                    t.samples.splice(0, d),
                    t.length = 0;
                }
              }
            }
            ,
            e.prototype._remuxVideo = function (e) {
              if (null != this._videoMeta) {
                var t = e
                  , i = t.isEnd
                  , a = t.samples;
                if (this._videoTrack.extra.isEnd = i,
                a && (this._lastVideoSample && (a.unshift(this._lastVideoSample),
                  this._lastVideoSample = null),
                i || (this._lastVideoSample = a.pop()),
                0 !== a.length)) {
                  for (var s = -1, d = [], u = a.length, l = 0, p = 0, c = [], h = 0; h < u; h++) {
                    var f = a[h]
                      , y = f.isKeyframe
                      , m = f.dts
                      , _ = f.cts
                      , v = m + _;
                    -1 === s && (s = m);
                    var g = 0;
                    g = h === u - 1 ? this._lastVideoSample ? this._lastVideoSample.dts - m : Math.floor(
                      this._videoMeta.refSampleDuration) : a[h + 1].dts - m,
                    y && c.push(f.dts / 1e3),
                      d.push({
                        dts: m,
                        pts: v,
                        cts: _,
                        units: f.units,
                        size: f.length,
                        isKeyframe: y,
                        duration: g,
                        flags: {
                          isLeading: 0,
                          dependsOn: y ? 2 : 1,
                          isDependedOn: y ? 1 : 0,
                          hasRedundancy: 0,
                          isNonSync: y ? 0 : 1
                        }
                      }),
                      f.units.forEach(function (e) {
                        l += e.data.byteLength;
                      }),
                    h === u - 1 && (p = f.dts);
                  }
                  if (n.default.chrome &&
                    (n.default.version.major < 50 || 50 === n.default.version.major && n.default.version.build <
                      2661)) {
                    var b = d[0].flags;
                    b.dependsOn = 2,
                      b.isNonSync = 0;
                  }
                  var w = new o.default({
                    initLength: l
                  });
                  a.forEach(function (e) {
                    return e.units.forEach(function (e) {
                      return w.write(e.data);
                    });
                  }),
                    t.samples = d;
                  var S = r.default.moof(t, s)
                    , T = r.default.mdat(new Uint8Array(w.buffer));
                  this._videoTrack.buffers.push(this._mergeBoxes(S, T).buffer),
                    this._videoTrack.ts = p,
                    this._videoTrack.sei = t.sei,
                    this._videoTrack.keyframes = c,
                    t.sequenceNumber++,
                    t.samples.splice(0, u),
                    t.length = 0;
                }
              }
            }
            ,
            e.prototype._mergeBoxes = function (e, t) {
              var i = new Uint8Array(e.byteLength + t.byteLength);
              return i.set(e, 0),
                i.set(t, e.byteLength),
                i;
            }
            ,
            e;
        }();
        t.default = s;
      }
      , function (e, t, i) {
        'use strict';

        function r(e) {
          for (var i in e)
            t.hasOwnProperty(i) || (t[i] = e[i]);
        }

        Object.defineProperty(t, '__esModule', {
          value: !0
        }),
          r(i(12)),
          r(i(2)),
          r(i(5));
      }
      , function (e, t, i) {
        'use strict';
        var r = this && this.__extends || function () {
          var e = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            }
            || function (e, t) {
              for (var i in t)
                t.hasOwnProperty(i) && (e[i] = t[i]);
            }
          ;
          return function (t, i) {
            function r() {
              this.constructor = t;
            }

            e(t, i),
              t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                new r);
          };
        }();
        Object.defineProperty(t, '__esModule', {
          value: !0
        }),
          i(4);
        var n = i(13)
          , o = i(1)
          , a = i(5)
          , s = i(16)
          , d = i(2)
          , u = i(0)
          , l = i(26)
          , p = i(27)
          , c = i(28);
        t.PlayerEvents = {
          ON_MEDIA_INFO: 'mediaInfo',
          ON_FIRST_FRAME: 'firstFrame',
          ON_ERROR: 'player_error',
          ON_SEI: 'sei',
          ON_LOAD_SEI: 'loadSei'
        };
        var h = {
          enableWorker: !0,
          debug: !1,
          stashBuffer: 65536,
          stashTime: 200,
          videoBackTime: 5,
          videoBackTimeThreshold: 10,
          enableJitterBuffer: !1,
          minBuffer: 2,
          maxBuffer: 6,
          slowRate: .95,
          fastRate: 1.05,
          audioDurationThreshold: 200
        }
          , f = function (e) {
          function i(t) {
            var i = e.call(this) || this;
            return i._isFirstFrameEmitted = !1,
              o.bindAll(i),
              i._config = Object.assign({}, h, t),
              i._config.loader ? i._loader = i._config.loader : a.FetchStreamLoader.isSupported()
                ? i._loader = new a.FetchStreamLoader
                : a.MozChunkedLoader.isSupported() && (i._loader = new a.MozChunkedLoader),
              i._loader ? (i._timeDispatch = new l.TimeDispatch,
                i._timeDispatch.onSend = i._onTimeDispatch,
                i._mediaHandler = new c.ToMSE(i._config),
                i._mediaHandler.onHasKeyframe = i._onFirstFrame,
                i._flv2mp4 = new s.Flv2mp4(i._loader, i._mediaHandler, i._config),
                i._flv2mp4.onInit = i._onInit,
                i._flv2mp4.onSei = i._onSei,
                i._flv2mp4.onError = i._onError,
                i) : (i._onError(new d.DyDemuxError('Do not has supported loader.')),
                i);
          }

          return r(i, e),
            i.prototype.dispose = function () {
              this.pause(),
                this.detach(),
              this._flv2mp4 && (this._flv2mp4.dispose(),
                this._flv2mp4 = null),
              this._loader && (this._loader.dispose(),
                this._loader = null),
              this._mediaHandler && (this._mediaHandler.dispose(),
                this._mediaHandler = null),
              this._timeDispatch && (this._timeDispatch.destroy(),
                this._timeDispatch = null),
                this.removeAllListeners();
            }
            ,
            i.prototype.load = function () {
              this._loader.load(this._config.url);
            }
            ,
            i.prototype.attach = function (e) {
              this._mediaHandler.attach(e),
                this._timeDispatch.attach(e),
                this._video = e,
                this._video.addEventListener('loadedmetadata', this._onFirstFrame),
                this._video.addEventListener('canplay', this._onCanplay);
            }
            ,
            i.prototype.detach = function () {
              this._mediaHandler && this._mediaHandler.detach(),
              this._timeDispatch && this._timeDispatch.detach(),
              this._video && (this._video.removeEventListener('loadedmetadata', this._onFirstFrame),
                this._video.removeEventListener('canplay', this._onCanplay),
                this._video = null);
            }
            ,
            i.prototype.play = function () {
              this._video && this._video.play();
            }
            ,
            i.prototype.pause = function () {
              this._video && this._video.pause();
            }
            ,
            i.prototype.getStatInfo = function () {
              var e = {
                url: '',
                redirectedURL: '',
                loaderBytes: 0,
                decodedFrames: 0,
                droppedFrames: 0,
                cdnBytes: 0,
                p2pBytes: 0
              };
              if (this._loader) {
                e.url = this._loader.url,
                  e.redirectedURL = this._loader.redirectUrl;
                var t = this._loader.getStatistics()
                  , i = t.loaderBytes
                  , r = t.cdnBytes
                  , n = t.p2pBytes;
                e.loaderBytes = i,
                  e.cdnBytes = r,
                  e.p2pBytes = n;
              }
              if (this._video)
                if ('function' == typeof this._video.getVideoPlaybackQuality) {
                  var o = this._video.getVideoPlaybackQuality();
                  e.decodedFrames = o.totalVideoFrames,
                    e.droppedFrames = o.droppedVideoFrames;
                } else
                  void 0 !== this._video.webkitDecodedFrameCount &&
                  (e.decodedFrames = this._video.webkitDecodedFrameCount,
                    e.droppedFrames = this._video.webkitDroppedFrameCount);
              return e;
            }
            ,
            i.prototype._onInit = function (e) {
              this.emit(t.PlayerEvents.ON_MEDIA_INFO, e);
            }
            ,
            i.prototype._onFirstFrame = function () {
              this._isFirstFrameEmitted || (this._isFirstFrameEmitted = !0,
                this.emit(t.PlayerEvents.ON_FIRST_FRAME),
                u.default.log('first frame from ' + (arguments[0] ? 'meta' : 'keyframe')));
            }
            ,
            i.prototype._onCanplay = function () {
              this._flv2mp4.notify({
                type: 'firstFrame'
              });
            }
            ,
            i.prototype._onError = function (e) {
              var i = this;
              setTimeout(function () {
                i.emit(t.PlayerEvents.ON_ERROR, e);
              }, 10);
            }
            ,
            i.prototype._onSei = function (e) {
              this._timeDispatch.add({
                type: p.TimeDispatchType.H264_SEI,
                ts: e.seiTimestamp,
                data: e
              }),
                this.emit(t.PlayerEvents.ON_LOAD_SEI, e);
            }
            ,
            i.prototype._onTimeDispatch = function (e) {
              switch (e.type) {
                case p.TimeDispatchType.H264_SEI:
                  this.emit(t.PlayerEvents.ON_SEI, e.data);
                  break;
                default:
                  u.default.log('unknown dispatch type: ' + e.type);
              }
            }
            ,
            i;
        }(n.EventEmitter);
        t.LivePlayer = f;
      }
      , function (e, t) {
        function i() {
          this._events = this._events || {},
            this._maxListeners = this._maxListeners || void 0;
        }

        function r(e) {
          return 'function' == typeof e;
        }

        function n(e) {
          return 'object' == typeof e && null !== e;
        }

        function o(e) {
          return void 0 === e;
        }

        e.exports = i,
          i.EventEmitter = i,
          i.prototype._events = void 0,
          i.prototype._maxListeners = void 0,
          i.defaultMaxListeners = 10,
          i.prototype.setMaxListeners = function (e) {
            if (!function (e) {
              return 'number' == typeof e;
            }(e) || e < 0 || isNaN(e))
              throw TypeError('n must be a positive number');
            return this._maxListeners = e,
              this;
          }
          ,
          i.prototype.emit = function (e) {
            var t, i, a, s, d, u;
            if (this._events || (this._events = {}),
            'error' === e && (!this._events.error || n(this._events.error) && !this._events.error.length)) {
              if ((t = arguments[1]) instanceof Error)
                throw t;
              var l = new Error('Uncaught, unspecified "error" event. (' + t + ')');
              throw l.context = t,
                l;
            }
            if (o(i = this._events[e]))
              return !1;
            if (r(i))
              switch (arguments.length) {
                case 1:
                  i.call(this);
                  break;
                case 2:
                  i.call(this, arguments[1]);
                  break;
                case 3:
                  i.call(this, arguments[1], arguments[2]);
                  break;
                default:
                  s = Array.prototype.slice.call(arguments, 1),
                    i.apply(this, s);
              }
            else if (n(i))
              for (s = Array.prototype.slice.call(arguments, 1),
                     a = (u = i.slice()).length,
                     d = 0; d < a; d++)
                u[d].apply(this, s);
            return !0;
          }
          ,
          i.prototype.addListener = function (e, t) {
            var a;
            if (!r(t))
              throw TypeError('listener must be a function');
            return this._events || (this._events = {}),
            this._events.newListener && this.emit('newListener', e, r(t.listener) ? t.listener : t),
              this._events[e]
                ? n(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t]
                : this._events[e] = t,
            n(this._events[e]) && !this._events[e].warned &&
            (a = o(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners) && a > 0 &&
            this._events[e].length > a && (this._events[e].warned = !0,
              console.error(
                '(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.',
                this._events[e].length),
            'function' == typeof console.trace && console.trace()),
              this;
          }
          ,
          i.prototype.on = i.prototype.addListener,
          i.prototype.once = function (e, t) {
            if (!r(t))
              throw TypeError('listener must be a function');
            var i = !1;

            function n() {
              this.removeListener(e, n),
              i || (i = !0,
                t.apply(this, arguments));
            }

            return n.listener = t,
              this.on(e, n),
              this;
          }
          ,
          i.prototype.removeListener = function (e, t) {
            var i, o, a, s;
            if (!r(t))
              throw TypeError('listener must be a function');
            if (!this._events || !this._events[e])
              return this;
            if (a = (i = this._events[e]).length,
              o = -1,
            i === t || r(i.listener) && i.listener === t)
              delete this._events[e],
              this._events.removeListener && this.emit('removeListener', e, t);
            else if (n(i)) {
              for (s = a; s-- > 0;)
                if (i[s] === t || i[s].listener && i[s].listener === t) {
                  o = s;
                  break;
                }
              if (o < 0)
                return this;
              1 === i.length ? (i.length = 0,
                delete this._events[e]) : i.splice(o, 1),
              this._events.removeListener && this.emit('removeListener', e, t);
            }
            return this;
          }
          ,
          i.prototype.removeAllListeners = function (e) {
            var t, i;
            if (!this._events)
              return this;
            if (!this._events.removeListener)
              return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e],
                this;
            if (0 === arguments.length) {
              for (t in this._events)
                'removeListener' !== t && this.removeAllListeners(t);
              return this.removeAllListeners('removeListener'),
                this._events = {},
                this;
            }
            if (r(i = this._events[e]))
              this.removeListener(e, i);
            else if (i)
              for (; i.length;)
                this.removeListener(e, i[i.length - 1]);
            return delete this._events[e],
              this;
          }
          ,
          i.prototype.listeners = function (e) {
            return this._events && this._events[e]
              ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice()
              : [];
          }
          ,
          i.prototype.listenerCount = function (e) {
            if (this._events) {
              var t = this._events[e];
              if (r(t))
                return 1;
              if (t)
                return t.length;
            }
            return 0;
          }
          ,
          i.listenerCount = function (e, t) {
            return e.listenerCount(t);
          };
      }
      , function (e, t, i) {
        'use strict';
        var r = this && this.__extends || function () {
          var e = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            }
            || function (e, t) {
              for (var i in t)
                t.hasOwnProperty(i) && (e[i] = t[i]);
            }
          ;
          return function (t, i) {
            function r() {
              this.constructor = t;
            }

            e(t, i),
              t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                new r);
          };
        }();
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var n = i(3)
          , o = i(2)
          , a = i(6)
          , s = function (e) {
          function t() {
            return null !== e && e.apply(this, arguments) || this;
          }

          return r(t, e),
            t.isSupported = function () {
              try {
                var e = a.default.msedge && a.default.version.minor >= 15048
                  , t = !a.default.msedge || e;
                return self.fetch && self.ReadableStream && t;
              } catch (e) {
                return !1;
              }
            }
            ,
            t.prototype.load = function (t, i) {
              var r = this;
              e.prototype.load.call(this, t, i),
                fetch(t).then(function (e) {
                  if (e && e.ok)
                    return t !== e.url && r._onRedirectUrl(e.url),
                      e.body.getReader();
                  throw e
                    ? new o.DyNetworkError('fetch stream failed: ' + e.status + ' ' + e.statusText)
                    : new o.DyNetworkError('fetch stream failed: no response, maybe blocked.');
                }).then(function (e) {
                  r._reader = e;
                  var t = function (i) {
                    var n = i.done
                      , o = i.value;
                    n ? r.onEnd && r.onEnd() : (r._onData(o.buffer),
                      e.read().then(t).catch(r._onError));
                  };
                  e.read().then(t).catch(r._onError);
                }).catch(function (e) {
                  e && 11 === e.code && a.default.msedge ||
                  r._onError(new o.DyNetworkError('fetch stream failed: ' + e));
                });
            }
            ,
            t.prototype.dispose = function () {
              this._reader && (this._reader.cancel().catch(function (e) {}),
                this._reader = null),
                e.prototype.dispose.call(this);
            }
            ,
            t;
        }(n.BaseLoader);
        t.FetchStreamLoader = s;
      }
      , function (e, t, i) {
        'use strict';
        var r = this && this.__extends || function () {
          var e = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            }
            || function (e, t) {
              for (var i in t)
                t.hasOwnProperty(i) && (e[i] = t[i]);
            }
          ;
          return function (t, i) {
            function r() {
              this.constructor = t;
            }

            e(t, i),
              t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                new r);
          };
        }();
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var n = i(3)
          , o = i(2)
          , a = function (e) {
          function t() {
            var t = e.call(this) || this;
            return t._xhr = null,
              t._requestAbort = !1,
              t;
          }

          return r(t, e),
            t.isSupported = function () {
              try {
                var e = new XMLHttpRequest;
                return e.open('GET', 'https://example.com', !0),
                  e.responseType = 'moz-chunked-arraybuffer',
                'moz-chunked-arraybuffer' === e.responseType;
              } catch (e) {
                return !1;
              }
            }
            ,
            t.prototype.load = function (e, t) {
              this._requestURL = e;
              var i = this._xhr = new XMLHttpRequest;
              i.open('GET', e, !0),
                i.responseType = 'moz-chunked-arraybuffer',
                i.onreadystatechange = this._onReadyStateChange.bind(this),
                i.onprogress = this._onProgress.bind(this),
                i.onloadend = this._onLoadEnd.bind(this),
                i.onerror = this._onXhrError.bind(this),
                i.send();
            }
            ,
            t.prototype.dispose = function () {
              this.abort(),
              this._xhr && (this._xhr.onreadystatechange = null,
                this._xhr.onprogress = null,
                this._xhr.onloadend = null,
                this._xhr.onerror = null,
                this._xhr = null),
                e.prototype.dispose.call(this);
            }
            ,
            t.prototype.abort = function () {
              this._requestAbort = !0,
              this._xhr && this._xhr.abort();
            }
            ,
            t.prototype._onReadyStateChange = function (e) {
              var t = e.target;
              2 === t.readyState &&
              (void 0 != t.responseURL && t.responseURL !== this._requestURL && this._onRedirectUrl(t.responseURL),
              0 !== t.status && (t.status < 200 || t.status > 299) && this._onError(
                new o.DyNetworkError('MozChunkedLoader: Http code invalid, ' + t.status + ' ' + t.statusText)));
            }
            ,
            t.prototype._onProgress = function (e) {
              var t = e.target.response;
              this._onData(t);
            }
            ,
            t.prototype._onLoadEnd = function (e) {
              !0 !== this._requestAbort ? this.onEnd && this.onEnd() : this._requestAbort = !1;
            }
            ,
            t.prototype._onXhrError = function (e) {
              this._onError('xhr load exit');
            }
            ,
            t;
        }(n.BaseLoader);
        t.MozChunkedLoader = a;
      }
      , function (e, t, i) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var r = i(1)
          , n = i(0)
          , o = i(7)
          , a = i(17)
          , s = function () {
          function e(e, t, o) {
            r.bindAll(this);
            var s = o.enableWorker
              , d = o.debug;
            this._loader = e,
              this._loader.onData = this.appendData,
              this._loader.onEnd = this.appendEnd,
              this._loader.onError = this._onError,
              this._mediaHandler = t,
              this._mediaHandler.onError = this._onError,
              n.default.setEnable(d),
              s ? (this._transmuxer = i(24)(25),
                this._transmuxer.postMessage({
                  name: '_setLoggerEnable',
                  params: d
                }),
                n.default.log('transmuxe with worker')) : (this._transmuxer = new a.Transmuxer,
                n.default.log('transmuxe with no worker')),
              this._transmuxer.onmessage = this._onMessage,
              this._transmuxer.postMessage({
                name: 'init',
                params: JSON.parse(JSON.stringify(o))
              });
          }

          return e.prototype.dispose = function () {
            this.onInit = null,
              this.onError = null,
              this._mediaHandler = null,
              this._loader = null,
              this._transmuxer.terminate(),
              this._transmuxer = null;
          }
            ,
            e.prototype.appendData = function (e) {
              this._transmuxer.postMessage({
                name: 'appendData',
                params: e
              }, [e]);
            }
            ,
            e.prototype.appendEnd = function () {
              n.default.log('loader end'),
                this._transmuxer.postMessage({
                  name: 'appendEnd'
                });
            }
            ,
            e.prototype.notify = function (e) {
              var t = e.type;
              e.data;
              switch (t) {
                case 'firstFrame':
                  this._transmuxer.postMessage({
                    name: 'firstFrame'
                  });
              }
            }
            ,
            e.prototype._onRemuxInit = function (e) {
              e instanceof o.default || (e = Object.assign(new o.default, e)),
              this.onInit && this.onInit(e);
            }
            ,
            e.prototype._onRemuxData = function (e) {
              this._mediaHandler && this._mediaHandler.appendData(e);
            }
            ,
            e.prototype._onError = function (e) {
              this.onError && this.onError(e);
            }
            ,
            e.prototype._onSei = function (e) {
              this.onSei && this.onSei(e);
            }
            ,
            e.prototype._onMessage = function (e) {
              var t = e.data
                , i = t.name
                , r = t.params;
              try {
                switch (i) {
                  case '_onRemuxInit':
                    this._onRemuxInit(r);
                    break;
                  case '_onRemuxData':
                    this._onRemuxData(r);
                    break;
                  case '_onError':
                    this._onError(r);
                    break;
                  case '_onSei':
                    this._onSei(r);
                    break;
                  default:
                    n.default.warn('unknown function: flv2mp4.' + i);
                }
              } catch (e) {
                n.default.warn('call flv2mp4.' + i + ' error', e);
              }
            }
            ,
            e;
        }();
        t.Flv2mp4 = s;
      }
      , function (e, t, i) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var r = i(1)
          , n = i(0)
          , o = i(8)
          , a = i(10)
          , s = function () {
          function e() {
            r.bindAll(this);
          }

          return e.prototype.init = function (e) {
            this._demux = new o.default(e),
              this._remux = new a.default(e),
              this._demux.onInit = this._onDemuxInit,
              this._demux.onTrackMeta = this._onTrackMeta,
              this._demux.onTrackData = this._onTrackData,
              this._demux.onSei = this._onSei,
              this._demux.onError = this._onError,
              this._remux.onInit = this._onRemuxInit,
              this._remux.onData = this._onRemuxData,
              this._remux.onError = this._onError;
          }
            ,
            e.prototype.appendData = function (e) {
              this._demux.appendData(e);
            }
            ,
            e.prototype.appendEnd = function () {
              this._demux.appendEnd();
            }
            ,
            e.prototype.firstFrame = function () {
              this._demux.hasFirstFrame = !0;
            }
            ,
            e.prototype.postMessage = function (e, t) {
              try {
                var i = e.name
                  , r = e.params;
                switch (i) {
                  case 'init':
                    this.init(r);
                    break;
                  case 'appendData':
                    this.appendData(r);
                    break;
                  case 'appendEnd':
                    this.appendEnd();
                    break;
                  case 'firstFrame':
                    this.firstFrame();
                    break;
                  default:
                    n.default.warn('unknown function: transmuxer.' + i);
                }
              } catch (e) {
                n.default.warn('call transmuxer.' + name + ' error', e);
              }
            }
            ,
            e.prototype.terminate = function () {
              this.onmessage = null,
                this._demux.dispose(),
                this._demux = null,
                this._remux.dispose(),
                this._remux = null;
            }
            ,
            e.prototype._onmessage = function (e) {
              this.onmessage && this.onmessage({
                data: e
              });
            }
            ,
            e.prototype._onDemuxInit = function (e) {
              this._remux.onMediaInfo(e);
            }
            ,
            e.prototype._onTrackMeta = function (e, t) {
              this._remux.onTrackMeta(e, t);
            }
            ,
            e.prototype._onTrackData = function (e, t) {
              this._remux.onTrackData(e, t);
            }
            ,
            e.prototype._onSei = function (e) {
              this._onmessage({
                name: '_onSei',
                params: e
              });
            }
            ,
            e.prototype._onRemuxInit = function (e) {
              this._onmessage({
                name: '_onRemuxInit',
                params: e
              });
            }
            ,
            e.prototype._onRemuxData = function (e) {
              this._onmessage({
                name: '_onRemuxData',
                params: e
              });
            }
            ,
            e.prototype._onError = function (e) {
              this._onmessage({
                name: '_onError',
                params: e
              });
            }
            ,
            e;
        }();
        t.Transmuxer = s;
      }
      , function (e, t, i) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var r = i(0)
          , n = i(19)
          , o = function () {
          var e = new ArrayBuffer(2);
          return new DataView(e).setInt16(0, 256, !0),
          256 === new Int16Array(e)[0];
        }()
          , a = function () {
          function e() {}

          return e.parseScriptData = function (t, i, n) {
            var o = {};
            try {
              var a = e.parseValue(t, i, n)
                , s = e.parseValue(t, i + a.size, n - a.size);
              o[a.data] = s.data;
            } catch (e) {
              r.default.error('AMF', e.toString());
            }
            return o;
          }
            ,
            e.parseObject = function (t, i, r) {
              if (r < 3)
                throw new Error('Data not enough when parse ScriptDataObject');
              var n = e.parseString(t, i, r)
                , o = e.parseValue(t, i + n.size, r - n.size)
                , a = o.objectEnd;
              return {
                data: {
                  name: n.data,
                  value: o.data
                },
                size: n.size + o.size,
                objectEnd: a
              };
            }
            ,
            e.parseVariable = function (t, i, r) {
              return e.parseObject(t, i, r);
            }
            ,
            e.parseString = function (e, t, i) {
              if (i < 2)
                throw new Error('Data not enough when parse String');
              var r = new DataView(e, t, i).getUint16(0, !o);
              return {
                data: r > 0 ? n.default(new Uint8Array(e, t + 2, r)) : '',
                size: 2 + r
              };
            }
            ,
            e.parseLongString = function (e, t, i) {
              if (i < 4)
                throw new Error('Data not enough when parse LongString');
              var r = new DataView(e, t, i).getUint32(0, !o);
              return {
                data: r > 0 ? n.default(new Uint8Array(e, t + 4, r)) : '',
                size: 4 + r
              };
            }
            ,
            e.parseDate = function (e, t, i) {
              if (i < 10)
                throw new Error('Data size invalid when parse Date');
              var r = new DataView(e, t, i)
                , n = r.getFloat64(0, !o)
                , a = r.getInt16(8, !o);
              return {
                data: new Date(n += 60 * a * 1e3),
                size: 10
              };
            }
            ,
            e.parseValue = function (t, i, n) {
              if (n < 1)
                throw new Error('Data not enough when parse Value');
              var a, s = new DataView(t, i, n), d = 1, u = s.getUint8(0), l = !1;
              try {
                switch (u) {
                  case 0:
                    a = s.getFloat64(1, !o),
                      d += 8;
                    break;
                  case 1:
                    a = !!s.getUint8(1),
                      d += 1;
                    break;
                  case 2:
                    var p = e.parseString(t, i + 1, n - 1);
                    a = p.data,
                      d += p.size;
                    break;
                  case 3:
                    a = {};
                    var c = 0;
                    for (9 == (16777215 & s.getUint32(n - 4, !o)) && (c = 3); d < n - 4;) {
                      var h = e.parseObject(t, i + d, n - d - c);
                      if (h.objectEnd)
                        break;
                      a[h.data.name] = h.data.value,
                        d += h.size;
                    }
                    if (d <= n - 3)
                      9 === (16777215 & s.getUint32(d - 1, !o)) && (d += 3);
                    break;
                  case 8:
                    a = {},
                      d += 4;
                    c = 0;
                    for (9 == (16777215 & s.getUint32(n - 4, !o)) && (c = 3); d < n - 8;) {
                      var f = e.parseVariable(t, i + d, n - d - c);
                      if (f.objectEnd)
                        break;
                      a[f.data.name] = f.data.value,
                        d += f.size;
                    }
                    if (d <= n - 3)
                      9 === (16777215 & s.getUint32(d - 1, !o)) && (d += 3);
                    break;
                  case 9:
                    a = void 0,
                      d = 1,
                      l = !0;
                    break;
                  case 10:
                    a = [];
                    var y = s.getUint32(1, !o);
                    d += 4;
                    for (var m = 0; m < y; m++) {
                      var _ = e.parseValue(t, i + d, n - d);
                      a.push(_.data),
                        d += _.size;
                    }
                    break;
                  case 11:
                    var v = e.parseDate(t, i + 1, n - 1);
                    a = v.data,
                      d += v.size;
                    break;
                  case 12:
                    var g = e.parseString(t, i + 1, n - 1);
                    a = g.data,
                      d += g.size;
                    break;
                  default:
                    d = n,
                      r.default.warn('AMF', 'Unsupported AMF value type ' + u);
                }
              } catch (e) {
                r.default.error('AMF', e.toString());
              }
              return {
                data: a,
                size: d,
                objectEnd: l
              };
            }
            ,
            e;
        }();
        t.default = a;
      }
      , function (e, t, i) {
        'use strict';

        function r(e, t, i) {
          var r = e;
          if (t + i < r.length) {
            for (; i--;)
              if (128 != (192 & r[++t]))
                return !1;
            return !0;
          }
          return !1;
        }

        Object.defineProperty(t, '__esModule', {
          value: !0
        }),
          t.default = function (e) {
            for (var t = [], i = e, n = 0, o = e.length; n < o;)
              if (i[n] < 128)
                t.push(String.fromCharCode(i[n])),
                  ++n;
              else {
                if (i[n] < 192)
                  ;
                else if (i[n] < 224) {
                  if (r(i, n, 1) && (a = (31 & i[n]) << 6 | 63 & i[n + 1]) >= 128) {
                    t.push(String.fromCharCode(65535 & a)),
                      n += 2;
                    continue;
                  }
                } else if (i[n] < 240) {
                  if (r(i, n, 2) && (a = (15 & i[n]) << 12 | (63 & i[n + 1]) << 6 | 63 & i[n + 2]) >= 2048 && 55296 !=
                    (63488 & a)) {
                    t.push(String.fromCharCode(65535 & a)),
                      n += 3;
                    continue;
                  }
                } else if (i[n] < 248) {
                  var a;
                  if (r(i, n, 3) &&
                    (a = (7 & i[n]) << 18 | (63 & i[n + 1]) << 12 | (63 & i[n + 2]) << 6 | 63 & i[n + 3]) > 65536 && a <
                    1114112) {
                    a -= 65536,
                      t.push(String.fromCharCode(a >>> 10 | 55296)),
                      t.push(String.fromCharCode(1023 & a | 56320)),
                      n += 4;
                    continue;
                  }
                }
                t.push(String.fromCharCode(65533)),
                  ++n;
              }
            return t.join('');
          };
      }
      , function (e, t, i) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var r = i(21)
          , n = function () {
          function e() {}

          return e._ebsp2rbsp = function (e) {
            for (var t = e, i = t.byteLength, r = new Uint8Array(i), n = 0, o = 0; o < i; o++)
              o >= 2 && 3 === t[o] && 0 === t[o - 1] && 0 === t[o - 2] || (r[n] = t[o],
                n++);
            return new Uint8Array(r.buffer, 0, n);
          }
            ,
            e.parseSPS = function (t) {
              var i = e._ebsp2rbsp(t)
                , n = new r.default(i);
              n.readByte();
              var o = n.readByte();
              n.readByte();
              var a = n.readByte();
              n.readUEG();
              var s = e.getProfileString(o)
                , d = e.getLevelString(a)
                , u = 1
                , l = 420
                , p = 8;
              if ((100 === o || 110 === o || 122 === o || 244 === o || 44 === o || 83 === o || 86 === o || 118 === o ||
                128 === o || 138 === o || 144 === o) && (3 === (u = n.readUEG()) && n.readBits(1),
              u <= 3 && (l = [0, 420, 422, 444][u]),
                p = n.readUEG() + 8,
                n.readUEG(),
                n.readBits(1),
                n.readBool()))
                for (var c = 3 !== u ? 8 : 12, h = 0; h < c; h++)
                  n.readBool() && (h < 6 ? e._skipScalingList(n, 16) : e._skipScalingList(n, 64));
              n.readUEG();
              var f = n.readUEG();
              if (0 === f)
                n.readUEG();
              else if (1 === f) {
                n.readBits(1),
                  n.readSEG(),
                  n.readSEG();
                var y = n.readUEG();
                for (h = 0; h < y; h++)
                  n.readSEG();
              }
              n.readUEG(),
                n.readBits(1);
              var m = n.readUEG()
                , _ = n.readUEG()
                , v = n.readBits(1);
              0 === v && n.readBits(1),
                n.readBits(1);
              var g = 0
                , b = 0
                , w = 0
                , S = 0;
              n.readBool() && (g = n.readUEG(),
                b = n.readUEG(),
                w = n.readUEG(),
                S = n.readUEG());
              var T = 1
                , E = 1
                , k = 0
                , O = !0
                , P = 0
                , R = 0;
              if (n.readBool()) {
                if (n.readBool()) {
                  var A = n.readByte();
                  A > 0 && A < 16 ? (T = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][A - 1],
                    E = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][A - 1]) : 255 === A &&
                    (T = n.readByte() << 8 | n.readByte(),
                      E = n.readByte() << 8 | n.readByte());
                }
                if (n.readBool() && n.readBool(),
                n.readBool() && (n.readBits(4),
                n.readBool() && n.readBits(24)),
                n.readBool() && (n.readUEG(),
                  n.readUEG()),
                  n.readBool()) {
                  var x = n.readBits(32)
                    , M = n.readBits(32);
                  O = n.readBool(),
                    k = (P = M) / (R = 2 * x);
                }
              }
              var D = 1;
              1 === T && 1 === E || (D = T / E);
              var I = 0
                , L = 0;
              0 === u ? (I = 1,
                L = 2 - v) : (I = 3 === u ? 1 : 2,
                L = (1 === u ? 2 : 1) * (2 - v));
              var C = 16 * (m + 1)
                , B = 16 * (_ + 1) * (2 - v);
              C -= (g + b) * I,
                B -= (w + S) * L;
              var j = Math.ceil(C * D);
              return n.destroy(),
                n = null,
                {
                  profile_string: s,
                  level_string: d,
                  bit_depth: p,
                  chroma_format: l,
                  chroma_format_string: e.getChromaFormatString(l),
                  frame_rate: {
                    fixed: O,
                    fps: k,
                    fps_den: R,
                    fps_num: P
                  },
                  sar_ratio: {
                    width: T,
                    height: E
                  },
                  codec_size: {
                    width: C,
                    height: B
                  },
                  present_size: {
                    width: j,
                    height: B
                  }
                };
            }
            ,
            e._skipScalingList = function (e, t) {
              for (var i = 8, r = 8, n = 0; n < t; n++)
                0 !== r && (r = (i + e.readSEG() + 256) % 256),
                  i = 0 === r ? i : r;
            }
            ,
            e.getProfileString = function (e) {
              switch (e) {
                case 66:
                  return 'Baseline';
                case 77:
                  return 'Main';
                case 88:
                  return 'Extended';
                case 100:
                  return 'High';
                case 110:
                  return 'High10';
                case 122:
                  return 'High422';
                case 244:
                  return 'High444';
                default:
                  return 'Unknown';
              }
            }
            ,
            e.getLevelString = function (e) {
              return (e / 10).toFixed(1);
            }
            ,
            e.getChromaFormatString = function (e) {
              switch (e) {
                case 420:
                  return '4:2:0';
                case 422:
                  return '4:2:2';
                case 444:
                  return '4:4:4';
                default:
                  return 'Unknown';
              }
            }
            ,
            e;
        }();
        t.default = n;
      }
      , function (e, t, i) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var r = function () {
          function e(e) {
            this.TAG = 'ExpGolomb',
              this._buffer = e,
              this._buffer_index = 0,
              this._total_bytes = e.byteLength,
              this._total_bits = 8 * e.byteLength,
              this._current_word = 0,
              this._current_word_bits_left = 0;
          }

          return e.prototype.destroy = function () {
            this._buffer = null;
          }
            ,
            e.prototype._fillCurrentWord = function () {
              var e = this._total_bytes - this._buffer_index;
              if (e <= 0)
                throw new Error('ExpGolomb: _fillCurrentWord() but no bytes available');
              var t = Math.min(4, e)
                , i = new Uint8Array(4);
              i.set(this._buffer.subarray(this._buffer_index, this._buffer_index + t)),
                this._current_word = new DataView(i.buffer).getUint32(0, !1),
                this._buffer_index += t,
                this._current_word_bits_left = 8 * t;
            }
            ,
            e.prototype.readBits = function (e) {
              if (e > 32)
                throw new Error('ExpGolomb: readBits() bits exceeded max 32bits!');
              if (e <= this._current_word_bits_left) {
                var t = this._current_word >>> 32 - e;
                return this._current_word <<= e,
                  this._current_word_bits_left -= e,
                  t;
              }
              var i = this._current_word_bits_left ? this._current_word : 0;
              i >>>= 32 - this._current_word_bits_left;
              var r = e - this._current_word_bits_left;
              this._fillCurrentWord();
              var n = Math.min(r, this._current_word_bits_left)
                , o = this._current_word >>> 32 - n;
              return this._current_word <<= n,
                this._current_word_bits_left -= n,
                i = i << n | o;
            }
            ,
            e.prototype.readBool = function () {
              return 1 === this.readBits(1);
            }
            ,
            e.prototype.readByte = function () {
              return this.readBits(8);
            }
            ,
            e.prototype._skipLeadingZero = function () {
              var e;
              for (e = 0; e < this._current_word_bits_left; e++)
                if (0 != (this._current_word & 2147483648 >>> e))
                  return this._current_word <<= e,
                    this._current_word_bits_left -= e,
                    e;
              return this._fillCurrentWord(),
              e + this._skipLeadingZero();
            }
            ,
            e.prototype.readUEG = function () {
              var e = this._skipLeadingZero();
              return this.readBits(e + 1) - 1;
            }
            ,
            e.prototype.readSEG = function () {
              var e = this.readUEG();
              return 1 & e ? e + 1 >>> 1 : -1 * (e >>> 1);
            }
            ,
            e;
        }();
        t.default = r;
      }
      , function (e, t, i) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var r = i(0);
        t.H264SeiType = {
          H264_SEI_TYPE_BUFFERING_PERIOD: 0,
          H264_SEI_TYPE_PIC_TIMING: 1,
          H264_SEI_TYPE_PAN_SCAN_RECT: 2,
          H264_SEI_TYPE_FILLER_PAYLOAD: 3,
          H264_SEI_TYPE_USER_DATA_REGISTERED: 4,
          H264_SEI_TYPE_USER_DATA_UNREGISTERED: 5,
          H264_SEI_TYPE_RECOVERY_POINT: 6,
          H264_SEI_TYPE_FRAME_PACKING: 45,
          H264_SEI_TYPE_DISPLAY_ORIENTATION: 47,
          H264_SEI_TYPE_GREEN_METADATA: 56,
          H264_SEI_TYPE_MASTERING_DISPLAY_COLOUR_VOLUME: 137,
          H264_SEI_TYPE_ALTERNATIVE_TRANSFER: 147
        },
          t.H264SeiUUIDType = {
            CloudVideoStream: 'CloudVideoStream',
            RoiMaskSeiV00001: 'RoiMaskSeiV00001'
          };
        var n = function () {
          function e() {}

          return e._ebsp2rbsp = function (e) {
            for (var t = e, i = t.byteLength, r = new Uint8Array(i), n = 0, o = 0; o < i; o++)
              o >= 2 && 3 === t[o] && 0 === t[o - 1] && 0 === t[o - 2] || (r[n] = t[o],
                n++);
            return new Uint8Array(r.buffer, 0, n);
          }
            ,
            e.parseSEI = function (i) {
              var r, n, o = e._ebsp2rbsp(i), a = new DataView(o.buffer), s = 0, d = 0, u = 0;
              do {
                n = a.getUint8(u),
                  u += 1,
                  s += n;
              } while (255 === n);
              do {
                n = a.getUint8(u),
                  u += 1,
                  d += n;
              } while (255 === n);
              switch (s) {
                case t.H264SeiType.H264_SEI_TYPE_USER_DATA_UNREGISTERED:
                  r = e.decodeUnregisteredUserData(a, u, d);
              }
              return {
                seiType: s,
                seiData: r
              };
            }
            ,
            e.decodeUnregisteredUserData = function (e, i, n) {
              if (n < 16)
                return r.default.warn('SEIParser ', 'error size: ', n),
                  null;
              var o, a = String.fromCharCode.apply(null, new Uint8Array(e.buffer, i, 16));
              switch (i += 16,
                a) {
                case t.H264SeiUUIDType.CloudVideoStream:
                  var s = e.getUint32(i).toString(2)
                    , d = e.getUint32(i + 4).toString(2);
                  o = parseInt('' + s + (d.length < 32 ? new Array(32 - d.length + 1).join('0') : '') + d, 2);
                  break;
                case t.H264SeiUUIDType.RoiMaskSeiV00001:
                  var u = e.getUint8(i);
                  i += 1,
                  1 === u && (o = String.fromCharCode.apply(null, new Uint8Array(e.buffer, i, n - 17)));
              }
              return {
                uuid: a,
                data: o
              };
            }
            ,
            e;
        }();
        t.default = n;
      }
      , function (e, t, i) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var r = function () {
          function e() {}

          return e.init = function () {
            for (var t in e.types = {
              avc1: [],
              avcC: [],
              btrt: [],
              dinf: [],
              dref: [],
              esds: [],
              ftyp: [],
              hdlr: [],
              mdat: [],
              mdhd: [],
              mdia: [],
              mfhd: [],
              minf: [],
              moof: [],
              moov: [],
              mp4a: [],
              mvex: [],
              mvhd: [],
              sdtp: [],
              stbl: [],
              stco: [],
              stsc: [],
              stsd: [],
              stsz: [],
              stts: [],
              tfdt: [],
              tfhd: [],
              traf: [],
              trak: [],
              trun: [],
              trex: [],
              tkhd: [],
              vmhd: [],
              smhd: [],
              '.mp3': []
            },
              e.types)
              e.types.hasOwnProperty(t) &&
              (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
            var i = e.constants = {};
            i.FTYP = new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49]),
              i.STSD_PREFIX = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]),
              i.STTS = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
              i.STSC = i.STCO = i.STTS,
              i.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
              i.HDLR_VIDEO = new Uint8Array([
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                118,
                105,
                100,
                101,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                86,
                105,
                100,
                101,
                111,
                72,
                97,
                110,
                100,
                108,
                101,
                114,
                0]),
              i.HDLR_AUDIO = new Uint8Array([
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                115,
                111,
                117,
                110,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                83,
                111,
                117,
                110,
                100,
                72,
                97,
                110,
                100,
                108,
                101,
                114,
                0]),
              i.DREF = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
              i.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
              i.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
          }
            ,
            e.box = function (e) {
              for (var t = 8, i = null, r = Array.prototype.slice.call(arguments, 1), n = r.length, o = 0; o < n; o++)
                t += r[o].byteLength;
              (i = new Uint8Array(t))[0] = t >>> 24 & 255,
                i[1] = t >>> 16 & 255,
                i[2] = t >>> 8 & 255,
                i[3] = 255 & t,
                i.set(e, 4);
              var a = 8;
              for (o = 0; o < n; o++)
                i.set(r[o], a),
                  a += r[o].byteLength;
              return i;
            }
            ,
            e.generateInitSegment = function (t) {
              var i = e.box(e.types.ftyp, e.constants.FTYP)
                , r = e.moov(t)
                , n = new Uint8Array(i.byteLength + r.byteLength);
              return n.set(i, 0),
                n.set(r, i.byteLength),
                n;
            }
            ,
            e.moov = function (t) {
              var i = e.mvhd(t.timescale, t.duration)
                , r = e.trak(t)
                , n = e.mvex(t);
              return e.box(e.types.moov, i, r, n);
            }
            ,
            e.mvhd = function (t, i) {
              return e.box(e.types.mvhd, new Uint8Array([
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                t >>> 24 & 255,
                t >>> 16 & 255,
                t >>> 8 & 255,
                255 & t,
                i >>> 24 & 255,
                i >>> 16 & 255,
                i >>> 8 & 255,
                255 & i,
                0,
                1,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                64,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                255,
                255,
                255,
                255]));
            }
            ,
            e.trak = function (t) {
              return e.box(e.types.trak, e.tkhd(t), e.mdia(t));
            }
            ,
            e.tkhd = function (t) {
              var i = t.id
                , r = t.duration
                , n = t.presentWidth
                , o = t.presentHeight;
              return e.box(e.types.tkhd, new Uint8Array([
                0,
                0,
                0,
                7,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                i >>> 24 & 255,
                i >>> 16 & 255,
                i >>> 8 & 255,
                255 & i,
                0,
                0,
                0,
                0,
                r >>> 24 & 255,
                r >>> 16 & 255,
                r >>> 8 & 255,
                255 & r,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                64,
                0,
                0,
                0,
                n >>> 8 & 255,
                255 & n,
                0,
                0,
                o >>> 8 & 255,
                255 & o,
                0,
                0]));
            }
            ,
            e.mdia = function (t) {
              return e.box(e.types.mdia, e.mdhd(t), e.hdlr(t), e.minf(t));
            }
            ,
            e.mdhd = function (t) {
              var i = t.timescale
                , r = t.duration;
              return e.box(e.types.mdhd, new Uint8Array([
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                i >>> 24 & 255,
                i >>> 16 & 255,
                i >>> 8 & 255,
                255 & i,
                r >>> 24 & 255,
                r >>> 16 & 255,
                r >>> 8 & 255,
                255 & r,
                85,
                196,
                0,
                0]));
            }
            ,
            e.hdlr = function (t) {
              var i = null;
              return i = 'audio' === t.type ? e.constants.HDLR_AUDIO : e.constants.HDLR_VIDEO,
                e.box(e.types.hdlr, i);
            }
            ,
            e.minf = function (t) {
              var i = null;
              return i = 'audio' === t.type ? e.box(e.types.smhd, e.constants.SMHD) : e.box(e.types.vmhd,
                e.constants.VMHD),
                e.box(e.types.minf, i, e.dinf(), e.stbl(t));
            }
            ,
            e.dinf = function () {
              return e.box(e.types.dinf, e.box(e.types.dref, e.constants.DREF));
            }
            ,
            e.stbl = function (t) {
              return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.constants.STTS),
                e.box(e.types.stsc, e.constants.STSC), e.box(e.types.stsz, e.constants.STSZ),
                e.box(e.types.stco, e.constants.STCO));
            }
            ,
            e.stsd = function (t) {
              return 'audio' === t.type ? 'mp3' === t.codec
                ? e.box(e.types.stsd, e.constants.STSD_PREFIX, e.mp3(t))
                : e.box(e.types.stsd, e.constants.STSD_PREFIX, e.mp4a(t)) : e.box(e.types.stsd, e.constants.STSD_PREFIX,
                e.avc1(t));
            }
            ,
            e.mp3 = function (t) {
              var i = t.channelCount
                , r = t.audioSampleRate
                , n = new Uint8Array([
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                i,
                0,
                16,
                0,
                0,
                0,
                0,
                r >>> 8 & 255,
                255 & r,
                0,
                0]);
              return e.box(e.types['.mp3'], n);
            }
            ,
            e.mp4a = function (t) {
              var i = t.channelCount
                , r = t.audioSampleRate
                , n = new Uint8Array([
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                i,
                0,
                16,
                0,
                0,
                0,
                0,
                r >>> 8 & 255,
                255 & r,
                0,
                0]);
              return e.box(e.types.mp4a, n, e.esds(t));
            }
            ,
            e.esds = function (t) {
              var i = t.config || []
                , r = i.length
                , n = new Uint8Array(
                [0, 0, 0, 0, 3, 23 + r, 0, 1, 0, 4, 15 + r, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([r]).
                  concat(i).
                  concat([6, 1, 2]));
              return e.box(e.types.esds, n);
            }
            ,
            e.avc1 = function (t) {
              var i = t.avcc
                , r = t.codecWidth
                , n = t.codecHeight
                , o = new Uint8Array([
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                r >>> 8 & 255,
                255 & r,
                n >>> 8 & 255,
                255 & n,
                0,
                72,
                0,
                0,
                0,
                72,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                10,
                115,
                107,
                121,
                45,
                119,
                97,
                110,
                103,
                64,
                113,
                113,
                46,
                99,
                111,
                109,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                24,
                255,
                255]);
              return e.box(e.types.avc1, o, e.box(e.types.avcC, i));
            }
            ,
            e.mvex = function (t) {
              return e.box(e.types.mvex, e.trex(t));
            }
            ,
            e.trex = function (t) {
              var i = t.id
                , r = new Uint8Array([
                0,
                0,
                0,
                0,
                i >>> 24 & 255,
                i >>> 16 & 255,
                i >>> 8 & 255,
                255 & i,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                1]);
              return e.box(e.types.trex, r);
            }
            ,
            e.moof = function (t, i) {
              return e.box(e.types.moof, e.mfhd(t.sequenceNumber), e.traf(t, i));
            }
            ,
            e.mfhd = function (t) {
              var i = new Uint8Array([0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t]);
              return e.box(e.types.mfhd, i);
            }
            ,
            e.traf = function (t, i) {
              var r = t.id
                , n = e.box(e.types.tfhd,
                new Uint8Array([0, 0, 0, 0, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r]))
                , o = e.box(e.types.tfdt,
                new Uint8Array([0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i]))
                , a = e.sdtp(t)
                , s = e.trun(t, a.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
              return e.box(e.types.traf, n, o, s, a);
            }
            ,
            e.sdtp = function (t) {
              for (var i = t.samples || [], r = i.length, n = new Uint8Array(4 + r), o = 0; o < r; o++) {
                var a = i[o].flags;
                n[o + 4] = a.isLeading << 6 | a.dependsOn << 4 | a.isDependedOn << 2 | a.hasRedundancy;
              }
              return e.box(e.types.sdtp, n);
            }
            ,
            e.trun = function (t, i) {
              var r = t.samples || []
                , n = r.length
                , o = 12 + 16 * n
                , a = new Uint8Array(o);
              i += 8 + o,
                a.set([
                  0,
                  0,
                  15,
                  1,
                  n >>> 24 & 255,
                  n >>> 16 & 255,
                  n >>> 8 & 255,
                  255 & n,
                  i >>> 24 & 255,
                  i >>> 16 & 255,
                  i >>> 8 & 255,
                  255 & i], 0);
              for (var s = 0; s < n; s++) {
                var d = r[s].duration
                  , u = r[s].size
                  , l = r[s].flags
                  , p = r[s].cts;
                a.set([
                  d >>> 24 & 255,
                  d >>> 16 & 255,
                  d >>> 8 & 255,
                  255 & d,
                  u >>> 24 & 255,
                  u >>> 16 & 255,
                  u >>> 8 & 255,
                  255 & u,
                  l.isLeading << 2 | l.dependsOn,
                  l.isDependedOn << 6 | l.hasRedundancy << 4 | l.isNonSync,
                  0,
                  0,
                  p >>> 24 & 255,
                  p >>> 16 & 255,
                  p >>> 8 & 255,
                  255 & p], 12 + 16 * s);
              }
              return e.box(e.types.trun, a);
            }
            ,
            e.mdat = function (t) {
              return e.box(e.types.mdat, t);
            }
            ,
            e;
        }();
        r.init(),
          t.default = r;
      }
      , function (e, t, i) {
        function r(e) {
          var t = {};

          function i(r) {
            if (t[r])
              return t[r].exports;
            var n = t[r] = {
              i: r,
              l: !1,
              exports: {}
            };
            return e[r].call(n.exports, n, n.exports, i),
              n.l = !0,
              n.exports;
          }

          i.m = e,
            i.c = t,
            i.i = function (e) {
              return e;
            }
            ,
            i.d = function (e, t, r) {
              i.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: r
              });
            }
            ,
            i.r = function (e) {
              Object.defineProperty(e, '__esModule', {
                value: !0
              });
            }
            ,
            i.n = function (e) {
              var t = e && e.__esModule ? function () {
                  return e.default;
                }
                : function () {
                  return e;
                }
              ;
              return i.d(t, 'a', t),
                t;
            }
            ,
            i.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }
            ,
            i.p = '/',
            i.oe = function (e) {
              throw console.error(e),
                e;
            }
          ;
          var r = i(i.s = ENTRY_MODULE);
          return r.default || r;
        }

        var n = '[\\.|\\-|\\+|\\w|/|@]+'
          , o = '\\((/\\*.*?\\*/)?s?.*?(' + n + ').*?\\)';

        function a(e) {
          return (e + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
        }

        function s(e, t, r) {
          var s = {};
          s[r] = [];
          var d = t.toString()
            , u = d.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);
          if (!u)
            return s;
          for (var l, p = u[1], c = new RegExp('(\\\\n|\\W)' + a(p) + o, 'g'); l = c.exec(d);)
            'dll-reference' !== l[3] && s[r].push(l[3]);
          for (c = new RegExp('\\(' + a(p) + '\\("(dll-reference\\s(' + n + '))"\\)\\)' + o, 'g'); l = c.exec(d);)
            e[l[2]] || (s[r].push(l[1]),
              e[l[2]] = i(l[1]).m),
              s[l[2]] = s[l[2]] || [],
              s[l[2]].push(l[4]);
          return s;
        }

        function d(e) {
          return Object.keys(e).reduce(function (t, i) {
            return t || e[i].length > 0;
          }, !1);
        }

        e.exports = function (e, t) {
          t = t || {};
          var n = {
            main: i.m
          }
            , o = t.all ? {
            main: Object.keys(n)
          } : function (e, t) {
            for (var i = {
              main: [t]
            }, r = {
              main: []
            }, n = {
              main: {}
            }; d(i);)
              for (var o = Object.keys(i), a = 0; a < o.length; a++) {
                var u = o[a]
                  , l = i[u].pop();
                if (n[u] = n[u] || {},
                !n[u][l] && e[u][l]) {
                  n[u][l] = !0,
                    r[u] = r[u] || [],
                    r[u].push(l);
                  for (var p = s(e, e[u][l], u), c = Object.keys(p), h = 0; h < c.length; h++)
                    i[c[h]] = i[c[h]] || [],
                      i[c[h]] = i[c[h]].concat(p[c[h]]);
                }
              }
            return r;
          }(n, e)
            , a = '';
          Object.keys(o).filter(function (e) {
            return 'main' !== e;
          }).forEach(function (e) {
            for (var t = 0; o[e][t];)
              t++;
            o[e].push(t),
              n[e][t] = '(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })',
              a = a + 'var ' + e + ' = (' + r.toString().replace('ENTRY_MODULE', JSON.stringify(t)) + ')({' +
                o[e].map(function (t) {
                  return JSON.stringify(t) + ': ' + n[e][t].toString();
                }).join(',') + '});\n';
          }),
            a = a + 'new ((' + r.toString().replace('ENTRY_MODULE', JSON.stringify(e)) + ')({' +
              o.main.map(function (e) {
                return JSON.stringify(e) + ': ' + n.main[e].toString();
              }).join(',') + '}))(self);';
          var u = new window.Blob([a], {
            type: 'text/javascript'
          });
          if (t.bare)
            return u;
          var l = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(u)
            , p = new window.Worker(l);
          return p.objectURL = l,
            p;
        };
      }
      , function (e, t, i) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0
        }),
          i(4);
        var r = i(1)
          , n = i(0)
          , o = i(8)
          , a = i(10)
          , s = function () {
          function e() {
            r.bindAll(this),
              self.onmessage = this._onMessage,
              self.onerror = this._onError;
          }

          return e.prototype.init = function (e) {
            this._demux = new o.default(e),
              this._remux = new a.default(e),
              this._demux.onInit = this._onDemuxInit,
              this._demux.onTrackMeta = this._onTrackMeta,
              this._demux.onTrackData = this._onTrackData,
              this._demux.onSei = this._onSei,
              this._demux.onError = this._onError,
              this._remux.onInit = this._onRemuxInit,
              this._remux.onData = this._onRemuxData,
              this._remux.onError = this._onError;
          }
            ,
            e.prototype.appendData = function (e) {
              this._demux.appendData(e);
            }
            ,
            e.prototype.appendEnd = function () {
              this._demux.appendEnd();
            }
            ,
            e.prototype.firstFrame = function () {
              this._demux.hasFirstFrame = !0;
            }
            ,
            e.prototype._onDemuxInit = function (e) {
              this._remux.onMediaInfo(e);
            }
            ,
            e.prototype._onTrackMeta = function (e, t) {
              this._remux.onTrackMeta(e, t);
            }
            ,
            e.prototype._onTrackData = function (e, t) {
              this._remux.onTrackData(e, t);
            }
            ,
            e.prototype._onSei = function (e) {
              self.postMessage({
                name: '_onSei',
                params: e
              });
            }
            ,
            e.prototype._onRemuxInit = function (e) {
              self.postMessage({
                name: '_onRemuxInit',
                params: e
              });
            }
            ,
            e.prototype._onRemuxData = function (e) {
              self.postMessage({
                name: '_onRemuxData',
                params: e
              }, e.map(function (e) {
                return e.data;
              }));
            }
            ,
            e.prototype._setLoggerEnable = function (e) {
              n.default.setEnable(e);
            }
            ,
            e.prototype._onError = function (e) {
              self.postMessage({
                name: '_onError',
                params: JSON.parse(JSON.stringify(e))
              });
            }
            ,
            e.prototype._onMessage = function (e) {
              var t = e.data
                , i = t.name
                , r = t.params;
              try {
                switch (i) {
                  case 'init':
                    this.init(r);
                    break;
                  case 'appendData':
                    this.appendData(r);
                    break;
                  case 'appendEnd':
                    this.appendEnd();
                    break;
                  case 'firstFrame':
                    this.firstFrame();
                    break;
                  case '_setLoggerEnable':
                    this._setLoggerEnable(r);
                    break;
                  default:
                    n.default.warn('unknown function: transmuxer.' + i);
                }
              } catch (e) {
                n.default.warn('call transmuxer worker ' + i + ' error', e);
              }
            }
            ,
            e;
        }();
        t.default = s;
      }
      , function (e, t, i) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var r = i(1)
          , n = function () {
          function e() {
            this.array = [],
              r.bindAll(this),
              this._timer = setInterval(this._onTimeUpdate, 100);
          }

          return e.prototype.destroy = function () {
            this.detach(),
              clearInterval(this._timer);
          }
            ,
            e.prototype.attach = function (e) {
              this.video = e;
            }
            ,
            e.prototype.detach = function () {
              this.video = null,
                this.array = [];
            }
            ,
            e.prototype.add = function (e) {
              this.array.push(e),
                this._onTimeUpdate();
            }
            ,
            e.prototype._send = function (e) {
              this.onSend && this.onSend(e);
            }
            ,
            e.prototype._onTimeUpdate = function () {
              if (this.video) {
                for (var e = 1e3 * this.video.currentTime, t = this.array.length, i = 0; i < t; i++) {
                  var r = this.array[i];
                  if (r.ts > e)
                    break;
                  this._send(r);
                }
                i > 0 && this.array.splice(0, i);
              }
            }
            ,
            e;
        }();
        t.TimeDispatch = n;
      }
      , function (e, t, i) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0
        }),
          t.TimeDispatchType = {
            H264_SEI: 'H264_SEI'
          };
      }
      , function (e, t, i) {
        'use strict';
        var r = this && this.__extends || function () {
          var e = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            }
            || function (e, t) {
              for (var i in t)
                t.hasOwnProperty(i) && (e[i] = t[i]);
            }
          ;
          return function (t, i) {
            function r() {
              this.constructor = t;
            }

            e(t, i),
              t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                new r);
          };
        }();
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var n = i(0)
          , o = i(1)
          , a = i(2)
          , s = i(29)
          , d = function (e) {
          function t(t) {
            var i = e.call(this, t) || this;
            return i.preTimestamp = 0,
              i._tracksList = [],
              i._sourceBufferAdded = {},
              i._isLoadEnded = !1,
              i._isPlayEnded = !1,
              i._isDisposed = !1,
              i._isWaiting = !1,
              i._reachCanplay = !1,
              i._jumpOverList = [],
              i._keyframes = [],
              o.bindAll(i),
              window.T_ADV_Timestamp = i.T_ADV_Timestamp,
            i._config.enableJitterBuffer && (i._checkBufferTimer = setInterval(i._checkBuffer, 1e3)),
              i._jumpOverTimer = setInterval(i._jumpOver, 200),
              i._removeBuffer = s.throttle(i._removeBuffer, 1e3),
              i;
          }

          return r(t, e),
            t.prototype.dispose = function () {
              if (this.detach(),
                this._mediaSource) {
                if ('closed' !== this._mediaSource.readyState)
                  for (var e = this._mediaSource.sourceBuffers, t = 0; t < e.length; t++) {
                    var i = e[t];
                    try {
                      this._mediaSource.removeSourceBuffer(i);
                    } catch (e) {
                      n.default.warn('remove source buffer error: ', e);
                    }
                    i.removeEventListener('updateend', this._onUpdateend);
                  }
                if ('open' === this._mediaSource.readyState)
                  try {
                    this._mediaSource.endOfStream();
                  } catch (e) {
                    n.default.warn('endOfStream error: ', e);
                  }
                this._mediaSource.removeEventListener('sourceopen', this._appendBuffer),
                  this._mediaSource = null;
              }
              this._mediaSourceUrl && (URL.revokeObjectURL(this._mediaSourceUrl),
                this._mediaSourceUrl = null),
                this._tracksList = [],
                this._sourceBufferAdded = {},
                this._isDisposed = !0;
            }
            ,
            t.prototype.appendData = function (e) {
              var t = this;
              this._isDisposed || (e.forEach(function (e, i) {
                var r = t._tracksList[i];
                r || (r = t._tracksList[i] = []),
                  r.push(e);
              }),
                this._appendBuffer());
            }
            ,
            t.prototype.appendEnd = function () {
              if (!this._isDisposed && this._mediaSource && 'open' === this._mediaSource.readyState) {
                for (var e = this._mediaSource.sourceBuffers, t = !1, i = 0; i < e.length; i++) {
                  if (e[i].updating) {
                    t = !0;
                    break;
                  }
                }
                t || this._mediaSource.endOfStream();
              }
            }
            ,
            t.prototype.attach = function (e) {
              if (this._video = e,
                this._video.addEventListener('stalled', this._onStalled),
                this._video.addEventListener('progress', this._onProgress),
                this._video.addEventListener('canplay', this._onCanplay),
                this._video.addEventListener('waiting', this._onWaiting),
                this._video.addEventListener('ended', this._onEnded),
                this._video.addEventListener('error', this._onMediaError),
                !this._mediaSourceUrl) {
                var t = this._mediaSource = new MediaSource;
                t.addEventListener('sourceopen', this._appendBuffer),
                  this._mediaSourceUrl = URL.createObjectURL(t);
              }
              e.src = this._mediaSourceUrl;
            }
            ,
            t.prototype.detach = function () {
              this._video && (this._video.removeEventListener('stalled', this._onStalled),
                this._video.removeEventListener('progress', this._onProgress),
                this._video.removeEventListener('canplay', this._onCanplay),
                this._video.removeEventListener('waiting', this._onWaiting),
                this._video.removeEventListener('ended', this._onEnded),
                this._video.removeEventListener('error', this._onMediaError),
                this._video.playbackRate = 1,
                this._video.src = '',
                this._video.removeAttribute('src'),
                this._video = null),
              this._removeBuffer.cancel && this._removeBuffer.cancel(),
                clearTimeout(this._checkStuckTimer),
                clearInterval(this._checkBufferTimer),
                clearInterval(this._jumpOverTimer);
            }
            ,
            t.prototype._appendBuffer = function () {
              var e;
              if (!this._isDisposed && this._mediaSource && 'open' === this._mediaSource.readyState)
                for (var t = 0; t < this._tracksList.length; t++) {
                  var i = this._tracksList[t];
                  if (0 !== i.length) {
                    var r = i[0]
                      , o = this._sourceBufferAdded[r.id];
                    if (o) {
                      if (!o.updating)
                        if (r)
                          try {
                            if (r.extra && (r.extra.isEnd && (this._isLoadEnded = !0),
                            r.extra.jumpOverTs > 0)) {
                              var a = r.extra.jumpOverTs / 1e3
                                , s = this._jumpOverList.length;
                              if (0 === s)
                                this._jumpOverList.push(a);
                              else
                                a - this._jumpOverList[s - 1] < 1 && this._jumpOverList.pop(),
                                  this._jumpOverList.push(a);
                              n.default.warn('jumpover timestamp list changed: ', JSON.stringify(this._jumpOverList));
                            }
                            r.ts && (this.preTimestamp = r.ts),
                            r.sei && (this.seiTimestamp = r.sei),
                            'number' == typeof r.timeOffset && -1 !== r.timeOffset &&
                            (o.timestampOffset = r.timeOffset / 1e3,
                              n.default.log('buffer time offset change: ' + o.timestampOffset)),
                            r.data && r.data.byteLength > 0 && o.appendBuffer(r.data),
                            r.keyframes && r.keyframes.length > 0 && ((e = this._keyframes).push.apply(e, r.keyframes),
                            this.onHasKeyframe && this.onHasKeyframe()),
                              delete r.data,
                              i.shift();
                          } catch (e) {
                            n.default.warn('append buffer error: ', e, this._video.error),
                            22 === e.code || this._onError('append buffer error: ' + e + ' ' + this._video.error);
                          }
                        else
                          i.shift();
                    } else {
                      var d = r.container + '; codecs="' + r.codec + '"';
                      if (MediaSource.isTypeSupported(d)) {
                        var u = this._mediaSource.addSourceBuffer(d);
                        -1 !== r.container.indexOf('video') && (u.type = 'video'),
                        -1 !== r.container.indexOf('audio') && (u.type = 'audio'),
                          this._sourceBufferAdded[r.id] = u,
                          u.addEventListener('updateend', this._onUpdateend);
                      } else
                        this._onError('Unsupported MIME type or codec: ' + d);
                    }
                  }
                }
            }
            ,
            t.prototype._removeBuffer = function () {
              if (this._video)
                for (var e = this._video.currentTime, t = this._mediaSource.sourceBuffers, i = 0; i < t.length; i++) {
                  var r = t[i];
                  if (!r.updating) {
                    var n = r.buffered;
                    if (n.length > 0)
                      if (n.length > 1) {
                        var o = Math.max(n.start(0) - .1, 0);
                        (a = n.end(0) + .1) < e && r.remove(o, a);
                      } else {
                        if (e - (o = Math.max(n.start(0) - .1, 0)) > this._config.videoBackTimeThreshold) {
                          var a = e - this._config.videoBackTime;
                          'video' === r.type && (a = this._searchNearestKeyframe(a)),
                          a && a - o > 5 && r.remove(o, a);
                        }
                      }
                  }
                }
            }
            ,
            t.prototype._searchNearestKeyframe = function (e) {
              var t = this._keyframes.length;
              if (0 === t)
                return n.default.warn('no keyframe info!'),
                  e;
              if (!(e < this._keyframes[0]))
                for (var i = 0; i < t; i++)
                  if (e >= this._keyframes[i] && (i === t - 1 || e < this._keyframes[i + 1])) {
                    var r = this._keyframes[i];
                    return this._keyframes.splice(0, i),
                      r;
                  }
            }
            ,
            t.prototype._onUpdateend = function () {
              this._removeBuffer(),
                this._appendBuffer(),
              this._isLoadEnded && this.appendEnd();
            }
            ,
            t.prototype._checkStartStuck = function () {
              var e = this._video.buffered;
              if (e.length > 0 && this._video.readyState < 2) {
                var t = this._video.currentTime
                  , i = e.start(0)
                  , r = e.end(0);
                t < i && (n.default.log('player stuck, recover from ' + t + ' to ' + i + ' -- ' + r),
                  this._video.currentTime = i);
              }
            }
            ,
            t.prototype._checkPlayStuck = function () {
              clearTimeout(this._checkStuckTimer);
              var e = this._video.buffered;
              if (this._isWaiting && e.length > 0 && !this._isPlayEnded && !this._video.seeking) {
                var t = this._video.currentTime
                  , i = e.end(e.length - 1)
                  , r = i - t;
                if (r > 4) {
                  var o = e.start(e.length - 1)
                    , a = Math.max(this._video.currentTime + 1, o);
                  i - a > 2 && (this._video.currentTime = a,
                    n.default.warn('player stuck, force move forward: ' + r + ', ' + t + ' -> ' + a),
                    this._printBuffer(this._video.buffered));
                }
                this._checkStuckTimer = setTimeout(this._checkPlayStuck, 2e3);
              }
            }
            ,
            t.prototype._checkBuffer = function () {
              if (this._video) {
                var e = this._video.buffered;
                if (e && e.length > 0) {
                  var t = e.end(e.length - 1) - this._video.currentTime
                    , i = this._video.playbackRate
                    , r = void 0;
                  if (t < this._config.minBuffer)
                    r = this._config.slowRate;
                  else if (t < this._config.maxBuffer) {
                    var o = (this._config.minBuffer + this._config.maxBuffer) / 2;
                    i < 1 && t > o && (r = 1),
                    i > 1 && t < o && (r = 1);
                  } else
                    r = this._config.fastRate;
                  r && r !== i && (this._video.playbackRate = r,
                    n.default.log('playback rate change to ' + r));
                }
              }
            }
            ,
            t.prototype._printBuffer = function (e) {
              var t = e.length;
              n.default.log('current time = ' + this._video.currentTime);
              for (var i = 0; i < t; i++)
                n.default.log('buffered[' + i + ']: ' + e.start(i) + ' ---- ' + e.end(i));
            }
            ,
            t.prototype._jumpOver = function () {
              var e = this._jumpOverList.length;
              if (e > 0) {
                if (!this._video)
                  return;
                for (var t = this._video.currentTime, i = 0; i < e; i++) {
                  var r = this._jumpOverList[i];
                  if (t > r) {
                    if (i === e - 1) {
                      n.default.warn('Large gap detected, jump over ' + r + ', current: ' + t),
                        this._video.currentTime += .1,
                        this._jumpOverList.splice(0, i + 1);
                      break;
                    }
                    if (t < this._jumpOverList[i + 1]) {
                      this._video.currentTime += .1,
                        this._jumpOverList.splice(0, i + 1),
                        n.default.warn('Large gap detected, jump over ' + r + ', current: ' + t);
                      break;
                    }
                  } else
                    ;
                }
              }
            }
            ,
            t.prototype._onStalled = function () {
              this._checkPlayStuck();
            }
            ,
            t.prototype._onProgress = function () {
              this._checkStartStuck();
            }
            ,
            t.prototype._onWaiting = function () {
              this._reachCanplay && (this._isWaiting = !0,
                this._checkPlayStuck());
            }
            ,
            t.prototype._onCanplay = function () {
              this._reachCanplay = !0,
                this._isWaiting = !1,
                this._video.removeEventListener('progress', this._onProgress);
            }
            ,
            t.prototype._onEnded = function () {
              this._isPlayEnded = !0,
                clearTimeout(this._checkStuckTimer);
            }
            ,
            t.prototype._onMediaError = function (e) {
              var t = 'Media Error';
              this._video && this._video.error &&
              (t = 'code=' + this._video.error.code + ',message=' + this._video.error.message),
                this._onError(t);
            }
            ,
            t.prototype._onError = function (e) {
              this.onError && this.onError(new a.DyMediaError(e));
            }
            ,
            t.prototype.T_ADV_Timestamp = function () {
              if (this._video) {
                var e = this._video;
                if (0 == e.buffered.length)
                  return;
                return {
                  bufferLength: e.buffered.end(0) - e.currentTime,
                  ptsTimestamp: this.preTimestamp,
                  seiTimestamp: this.seiTimestamp
                };
              }
            }
            ,
            t;
        }(i(30).MediaHandler);
        t.ToMSE = d;
      }
      , function (e, t, i) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0
        }),
          t.throttle = function (e, t, i) {
            var r, n, o, a, s = 0;
            i || (i = {});
            var d = function () {
              s = !1 === i.leading ? 0 : performance.now(),
                r = null,
                a = e.apply(n, o),
              r || (n = o = null);
            }
              , u = function () {
              var u = performance.now();
              s || !1 !== i.leading || (s = u);
              var l = t - (u - s);
              return n = this,
                o = arguments,
                l <= 0 || l > t ? (r && (clearTimeout(r),
                  r = null),
                  s = u,
                  a = e.apply(n, o),
                r || (n = o = null)) : r || !1 === i.trailing || (r = setTimeout(d, l)),
                a;
            };
            return u.cancel = function () {
              clearTimeout(r),
                s = 0,
                r = n = o = null;
            }
              ,
              u;
          };
      }
      , function (e, t, i) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0
        });
        var r = function () {
          return function (e) {
            this._config = e;
          };
        }();
        t.MediaHandler = r;
      }
    ]);
  }
]);
//# sourceMappingURL=http://fedci.dz11.com:4567/live_player_first/online/sourcemaps/h5_video_f21ba13.js.map
