window.BMAP_AUTHENTIC_KEY = "Typ9aiOPhCYaVrkuAtL2TnGL";
(function() {
    function aa(a) {
        throw a;
    }
    var i = void 0,
        n = !0,
        o = null,
        p = !1;

    function q() {
        return function() {}
    }

    function ba(a) {
        return function(b) {
            this[a] = b
        }
    }

    function t(a) {
        return function() {
            return this[a]
        }
    }

    function ca(a) {
        return function() {
            return a
        }
    }
    var da, ea = [];

    function fa(a) {
        return function() {
            return ea[a].apply(this, arguments)
        }
    }

    function ga(a, b) {
        return ea[a] = b
    }
    var ia, u = ia = u || {
        version: "1.3.4"
    };
    u.Q = "$BAIDU$";
    window[u.Q] = window[u.Q] || {};
    u.object = u.object || {};
    u.extend = u.object.extend = function(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    };
    u.C = u.C || {};
    u.C.M = function(a) {
        return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : o
    };
    u.M = u.Ub = u.C.M;
    u.C.H = function(a) {
        a = u.C.M(a);
        a.style.display = "none";
        return a
    };
    u.H = u.C.H;
    u.lang = u.lang || {};
    u.lang.gf = function(a) {
        return "[object String]" == Object.prototype.toString.call(a)
    };
    u.gf = u.lang.gf;
    u.C.ai = function(a) {
        return u.lang.gf(a) ? document.getElementById(a) : a
    };
    u.ai = u.C.ai;
    u.C.contains = function(a, b) {
        var c = u.C.ai,
            a = c(a),
            b = c(b);
        return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    };
    u.R = u.R || {};
    /msie (\d+\.\d)/i.test(navigator.userAgent) && (u.R.W = u.W = document.documentMode || +RegExp.$1);
    var ja = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    8 > u.R.W ? (ja["for"] = "htmlFor", ja["class"] = "className") : (ja.htmlFor = "for", ja.className = "class");
    u.C.JA = ja;
    u.C.Cz = function(a, b, c) {
        a = u.C.M(a);
        if ("style" == b) a.style.cssText = c;
        else {
            b = u.C.JA[b] || b;
            a.setAttribute(b, c)
        }
        return a
    };
    u.Cz = u.C.Cz;
    u.C.Dz = function(a, b) {
        var a = u.C.M(a),
            c;
        for (c in b) u.C.Cz(a, c, b[c]);
        return a
    };
    u.Dz = u.C.Dz;
    u.Zi = u.Zi || {};
    (function() {
        var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
        u.Zi.trim = function(b) {
            return ("" + b).replace(a, "")
        }
    })();
    u.trim = u.Zi.trim;
    u.Zi.lk = function(a, b) {
        var a = "" + a,
            c = Array.prototype.slice.call(arguments, 1),
            d = Object.prototype.toString;
        if (c.length) {
            c = c.length == 1 ? b !== o && /\[object Array\]|\[object Object\]/.test(d.call(b)) ? b : c : c;
            return a.replace(/#\{(.+?)\}/g, function(a, b) {
                var g = c[b];
                "[object Function]" == d.call(g) && (g = g(b));
                return "undefined" == typeof g ? "" : g
            })
        }
        return a
    };
    u.lk = u.Zi.lk;
    u.C.Pb = function(a, b) {
        for (var a = u.C.M(a), c = a.className.split(/\s+/), d = b.split(/\s+/), e, f = d.length, g, j = 0; j < f; ++j) {
            g = 0;
            for (e = c.length; g < e; ++g)
                if (c[g] == d[j]) {
                    c.splice(g, 1);
                    break
                }
        }
        a.className = c.join(" ");
        return a
    };
    u.Pb = u.C.Pb;
    u.C.Ps = function(a, b, c) {
        var a = u.C.M(a),
            d;
        if (a.insertAdjacentHTML) a.insertAdjacentHTML(b, c);
        else {
            d = a.ownerDocument.createRange();
            b = b.toUpperCase();
            if (b == "AFTERBEGIN" || b == "BEFOREEND") {
                d.selectNodeContents(a);
                d.collapse(b == "AFTERBEGIN")
            } else {
                b = b == "BEFOREBEGIN";
                d[b ? "setStartBefore" : "setEndAfter"](a);
                d.collapse(b)
            }
            d.insertNode(d.createContextualFragment(c))
        }
        return a
    };
    u.Ps = u.C.Ps;
    u.C.show = function(a) {
        a = u.C.M(a);
        a.style.display = "";
        return a
    };
    u.show = u.C.show;
    u.C.ay = function(a) {
        a = u.C.M(a);
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    };
    u.C.$a = function(a, b) {
        for (var a = u.C.M(a), c = b.split(/\s+/), d = a.className, e = " " + d + " ", f = 0, g = c.length; f < g; f++) e.indexOf(" " + c[f] + " ") < 0 && (d = d + (" " + c[f]));
        a.className = d;
        return a
    };
    u.$a = u.C.$a;
    u.C.qw = u.C.qw || {};
    u.C.Jj = u.C.Jj || [];
    u.C.Jj.filter = function(a, b, c) {
        for (var d = 0, e = u.C.Jj, f; f = e[d]; d++)
            if (f = f[c]) b = f(a, b);
        return b
    };
    u.Zi.XG = function(a) {
        return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function(a) {
            return a.charAt(1).toUpperCase()
        })
    };
    u.C.jV = function(a, b) {
        u.C.rp(a, b) ? u.C.Pb(a, b) : u.C.$a(a, b)
    };
    u.C.rp = function(a) {
        if (arguments.length <= 0 || typeof a === "function") return this;
        if (this.size() <= 0) return p;
        var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "),
            b = a.split(" "),
            c;
        u.forEach(this, function(a) {
            for (var a = a.className, e = 0; e < b.length; e++)
                if (!~(" " + a + " ").indexOf(" " + b[e] + " ")) {
                    c = p;
                    return
                }
            c !== p && (c = n)
        });
        return c
    };
    u.C.Lh = function(a, b) {
        var c = u.C,
            a = c.M(a),
            b = u.Zi.XG(b),
            d = a.style[b];
        if (!d) var e = c.qw[b],
            d = a.currentStyle || (u.R.W ? a.style : getComputedStyle(a, o)),
            d = e && e.get ? e.get(a, d) : d[e || b];
        if (e = c.Jj) d = e.filter(b, d, "get");
        return d
    };
    u.Lh = u.C.Lh;
    /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (u.R.opera = +RegExp.$1);
    u.R.qF = /webkit/i.test(navigator.userAgent);
    u.R.xP = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    u.R.Ny = "CSS1Compat" == document.compatMode;
    u.C.U = function(a) {
        var a = u.C.M(a),
            b = u.C.ay(a),
            c = u.R,
            d = u.C.Lh;
        c.xP > 0 && b.getBoxObjectFor && d(a, "position");
        var e = {
                left: 0,
                top: 0
            },
            f;
        if (a == (c.W && !c.Ny ? b.body : b.documentElement)) return e;
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            e.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
            e.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
            e.left = e.left - b.documentElement.clientLeft;
            e.top = e.top - b.documentElement.clientTop;
            a = b.body;
            b = parseInt(d(a, "borderLeftWidth"));
            d = parseInt(d(a, "borderTopWidth"));
            if (c.W && !c.Ny) {
                e.left = e.left - (isNaN(b) ? 2 : b);
                e.top = e.top - (isNaN(d) ? 2 : d)
            }
        } else {
            f = a;
            do {
                e.left = e.left + f.offsetLeft;
                e.top = e.top + f.offsetTop;
                if (c.qF > 0 && d(f, "position") == "fixed") {
                    e.left = e.left + b.body.scrollLeft;
                    e.top = e.top + b.body.scrollTop;
                    break
                }
                f = f.offsetParent
            } while (f && f != a);
            if (c.opera > 0 || c.qF > 0 && d(a, "position") == "absolute") e.top = e.top - b.body.offsetTop;
            for (f = a.offsetParent; f && f != b.body;) {
                e.left = e.left - f.scrollLeft;
                if (!c.opera || f.tagName != "TR") e.top = e.top - f.scrollTop;
                f = f.offsetParent
            }
        }
        return e
    };
    /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (u.R.Lf = +RegExp.$1);
    /BIDUBrowser/i.test(navigator.userAgent) && (u.R.iT = n);
    var ka = navigator.userAgent;
    /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(ka) && !/chrome/i.test(ka) && (u.R.AG = +(RegExp.$1 || RegExp.$2));
    /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (u.R.yD = +RegExp.$1);
    u.lc = u.lc || {};
    u.lc.Eb = function(a, b) {
        var c, d, e = a.length;
        if ("function" == typeof b)
            for (d = 0; d < e; d++) {
                c = a[d];
                c = b.call(a, c, d);
                if (c === p) break
            }
        return a
    };
    u.Eb = u.lc.Eb;
    u.lang.Q = function() {
        return "TANGRAM__" + (window[u.Q]._counter++).toString(36)
    };
    window[u.Q]._counter = window[u.Q]._counter || 1;
    window[u.Q]._instances = window[u.Q]._instances || {};
    u.lang.xp = function(a) {
        return "[object Function]" == Object.prototype.toString.call(a)
    };
    u.lang.oa = function(a) {
        this.Q = a || u.lang.Q();
        window[u.Q]._instances[this.Q] = this
    };
    window[u.Q]._instances = window[u.Q]._instances || {};
    u.lang.oa.prototype.Gg = fa(1);
    u.lang.oa.prototype.toString = function() {
        return "[object " + (this.JI || "Object") + "]"
    };
    u.lang.hu = function(a, b) {
        this.type = a;
        this.returnValue = n;
        this.target = b || o;
        this.currentTarget = o
    };
    u.lang.oa.prototype.addEventListener = function(a, b, c) {
        if (u.lang.xp(b)) {
            !this.bh && (this.bh = {});
            var d = this.bh,
                e;
            if (typeof c == "string" && c) {
                /[^\w\-]/.test(c) && aa("nonstandard key:" + c);
                e = b.TE = c
            }
            a.indexOf("on") != 0 && (a = "on" + a);
            typeof d[a] != "object" && (d[a] = {});
            e = e || u.lang.Q();
            b.TE = e;
            d[a][e] = b
        }
    };
    u.lang.oa.prototype.removeEventListener = function(a, b) {
        if (u.lang.xp(b)) b = b.TE;
        else if (!u.lang.gf(b)) return;
        !this.bh && (this.bh = {});
        a.indexOf("on") != 0 && (a = "on" + a);
        var c = this.bh;
        c[a] && c[a][b] && delete c[a][b]
    };
    u.lang.oa.prototype.dispatchEvent = function(a, b) {
        u.lang.gf(a) && (a = new u.lang.hu(a));
        !this.bh && (this.bh = {});
        var b = b || {},
            c;
        for (c in b) a[c] = b[c];
        var d = this.bh,
            e = a.type;
        a.target = a.target || this;
        a.currentTarget = this;
        e.indexOf("on") != 0 && (e = "on" + e);
        u.lang.xp(this[e]) && this[e].apply(this, arguments);
        if (typeof d[e] == "object")
            for (c in d[e]) d[e][c].apply(this, arguments);
        return a.returnValue
    };
    u.lang.ha = function(a, b, c) {
        var d, e, f = a.prototype;
        e = new Function;
        e.prototype = b.prototype;
        e = a.prototype = new e;
        for (d in f) e[d] = f[d];
        a.prototype.constructor = a;
        a.DR = b.prototype;
        if ("string" == typeof c) e.JI = c
    };
    u.ha = u.lang.ha;
    u.lang.ad = function(a) {
        return window[u.Q]._instances[a] || o
    };
    u.platform = u.platform || {};
    u.platform.CP = /macintosh/i.test(navigator.userAgent);
    u.platform.oU = /MicroMessenger/i.test(navigator.userAgent);
    u.platform.rF = /windows/i.test(navigator.userAgent);
    u.platform.HP = /x11/i.test(navigator.userAgent);
    u.platform.tm = /android/i.test(navigator.userAgent);
    /android (\d+\.\d)/i.test(navigator.userAgent) && (u.platform.hD = u.hD = RegExp.$1);
    u.platform.AP = /ipad/i.test(navigator.userAgent);
    u.platform.BP = /iphone/i.test(navigator.userAgent);

    function x(a, b) {
        a.domEvent = b = window.event || b;
        a.clientX = b.clientX || b.pageX;
        a.clientY = b.clientY || b.pageY;
        a.offsetX = b.offsetX || b.layerX;
        a.offsetY = b.offsetY || b.layerY;
        a.screenX = b.screenX;
        a.screenY = b.screenY;
        a.ctrlKey = b.ctrlKey || b.metaKey;
        a.shiftKey = b.shiftKey;
        a.altKey = b.altKey;
        if (b.touches) {
            a.touches = [];
            for (var c = 0; c < b.touches.length; c++) a.touches.push({
                clientX: b.touches[c].clientX,
                clientY: b.touches[c].clientY,
                screenX: b.touches[c].screenX,
                screenY: b.touches[c].screenY,
                pageX: b.touches[c].pageX,
                pageY: b.touches[c].pageY,
                target: b.touches[c].target,
                identifier: b.touches[c].identifier
            })
        }
        if (b.changedTouches) {
            a.changedTouches = [];
            for (c = 0; c < b.changedTouches.length; c++) a.changedTouches.push({
                clientX: b.changedTouches[c].clientX,
                clientY: b.changedTouches[c].clientY,
                screenX: b.changedTouches[c].screenX,
                screenY: b.changedTouches[c].screenY,
                pageX: b.changedTouches[c].pageX,
                pageY: b.changedTouches[c].pageY,
                target: b.changedTouches[c].target,
                identifier: b.changedTouches[c].identifier
            })
        }
        if (b.targetTouches) {
            a.targetTouches = [];
            for (c = 0; c < b.targetTouches.length; c++) a.targetTouches.push({
                clientX: b.targetTouches[c].clientX,
                clientY: b.targetTouches[c].clientY,
                screenX: b.targetTouches[c].screenX,
                screenY: b.targetTouches[c].screenY,
                pageX: b.targetTouches[c].pageX,
                pageY: b.targetTouches[c].pageY,
                target: b.targetTouches[c].target,
                identifier: b.targetTouches[c].identifier
            })
        }
        a.rotation = b.rotation;
        a.scale = b.scale;
        return a
    }
    u.lang.hs = function(a) {
        var b = window[u.Q];
        b.zK && delete b.zK[a]
    };
    u.event = {};
    u.D = u.event.D = function(a, b, c) {
        if (!(a = u.M(a))) return a;
        b = b.replace(/^on/, "");
        a.addEventListener ? a.addEventListener(b, c, p) : a.attachEvent && a.attachEvent("on" + b, c);
        return a
    };
    u.Fd = u.event.Fd = function(a, b, c) {
        if (!(a = u.M(a))) return a;
        b = b.replace(/^on/, "");
        a.removeEventListener ? a.removeEventListener(b, c, p) : a.detachEvent && a.detachEvent("on" + b, c);
        return a
    };
    u.C.rp = function(a, b) {
        if (!a || !a.className || typeof a.className != "string") return p;
        var c = -1;
        try {
            c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
        } catch (d) {
            return p
        }
        return c > -1
    };
    u.gE = function() {
        function a(a) {
            document.addEventListener && (this.element = a, this.jE = this.wk ? "touchstart" : "mousedown", this.Kx = this.wk ? "touchmove" : "mousemove", this.Jx = this.wk ? "touchend" : "mouseup", this.Wf = p, this.dq = this.cq = 0, this.element.addEventListener(this.jE, this, p), ia.D(this.element, "mousedown", q()), this.handleEvent(o))
        }
        a.prototype = {
            wk: "ontouchstart" in window || "createTouch" in document,
            start: function(a) {
                B(a);
                this.Wf = p;
                this.cq = this.wk ? a.touches[0].clientX : a.clientX;
                this.dq = this.wk ? a.touches[0].clientY : a.clientY;
                this.element.addEventListener(this.Kx, this, p);
                this.element.addEventListener(this.Jx, this, p)
            },
            move: function(a) {
                la(a);
                var c = this.wk ? a.touches[0].clientY : a.clientY;
                if (10 < Math.abs((this.wk ? a.touches[0].clientX : a.clientX) - this.cq) || 10 < Math.abs(c - this.dq)) this.Wf = n
            },
            end: function(a) {
                la(a);
                this.Wf || (a = document.createEvent("Event"), a.initEvent("tap", p, n), this.element.dispatchEvent(a));
                this.element.removeEventListener(this.Kx, this, p);
                this.element.removeEventListener(this.Jx, this, p)
            },
            handleEvent: function(a) {
                if (a) switch (a.type) {
                    case this.jE:
                        this.start(a);
                        break;
                    case this.Kx:
                        this.move(a);
                        break;
                    case this.Jx:
                        this.end(a)
                }
            }
        };
        return function(b) {
            return new a(b)
        }
    }();
    var C = window.BMap || {};
    C.version = "2.0";
    0 <= C.version.indexOf("#") && (C.version = "2.0");
    C.oo = [];
    C.Wd = function(a) {
        this.oo.push(a)
    };
    C.fo = [];
    C.Bm = function(a) {
        this.fo.push(a)
    };
    C.qM = C.apiLoad || q();
    var na = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = o;
    var oa = window.BMap_loadScriptTime,
        pa = (new Date).getTime(),
        qa = o,
        ra = n,
        sa = o,
        ua = 5042,
        va = 5002,
        wa = 5003,
        xa = "load_mapclick",
        za = 5038,
        Aa = 5041,
        Ba = 5047,
        Ca = 5036,
        Da = 5039,
        Ea = 5037,
        Fa = 5040,
        Ga = 5011,
        Ha = 7E3;

    function Ia(a, b) {
        if (a = u.M(a)) {
            var c = this;
            u.lang.oa.call(c);
            b = b || {};
            c.F = {
                Pw: 200,
                Xb: n,
                qs: p,
                Bx: n,
                Zo: n,
                ap: p,
                Ex: n,
                $o: n,
                ns: n,
                Yl: b.enable3DBuilding || p,
                Mc: 25,
                qS: 240,
                eM: 450,
                Cb: D.Cb,
                Lc: D.Lc,
                Rs: !!b.Rs,
                Pc: b.minZoom || 1,
                yd: b.maxZoom || 18,
                mb: b.mapType || Ja,
                WU: p,
                os: n,
                tx: 500,
                FT: b.enableHighResolution !== p,
                Zl: b.enableMapClick !== p,
                devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
                sH: b.vectorMapLevel || (F() || 1 < window.devicePixelRatio ? 3 : 99),
                vd: b.mapStyle || o,
                QP: b.logoControl === p ? p : n,
                yM: ["chrome"],
                nD: b.beforeClickIcon || o
            };
            c.F.vd && (this.dF(c.F.vd.controls), this.eF(c.F.vd.geotableId));
            c.F.vd && c.F.vd.styleId && c.LE(c.F.vd.styleId);
            c.F.Jo = {
                dark: {
                    backColor: "#2D2D2D",
                    textColor: "#bfbfbf",
                    iconUrl: "dicons"
                },
                normal: {
                    backColor: "#F3F1EC",
                    textColor: "#c61b1b",
                    iconUrl: "icons"
                },
                light: {
                    backColor: "#EBF8FC",
                    textColor: "#017fb4",
                    iconUrl: "licons"
                }
            };
            b.enableAutoResize && (c.F.ns = b.enableAutoResize);
            u.platform.tm && 1.5 < window.devicePixelRatio && (c.F.devicePixelRatio = 1.5);
            var d = c.F.yM;
            if (F())
                for (var e = 0, f = d.length; e < f; e++)
                    if (u.R[d[e]]) {
                        c.F.devicePixelRatio = 1;
                        break
                    }
            c.Ga = a;
            c.hw(a);
            a.unselectable = "on";
            a.innerHTML = "";
            a.appendChild(c.qa());
            b.size && this.Tc(b.size);
            d = c.pb();
            c.width = d.width;
            c.height = d.height;
            c.offsetX = 0;
            c.offsetY = 0;
            c.platform = a.firstChild;
            c.xd = c.platform.firstChild;
            c.xd.style.width = c.width + "px";
            c.xd.style.height = c.height + "px";
            c.od = {};
            c.Gf = new I(0, 0);
            c.ac = new I(0, 0);
            c.sa = 3;
            c.qc = 0;
            c.fx = o;
            c.dx = o;
            c.wb = "";
            c.Xr = "";
            c.rg = {};
            c.rg.custom = {};
            c.Ha = 0;
            c.J = new Ka(a, {
                ff: "api"
            });
            c.J.H();
            c.J.Gz(c);
            b = b || {};
            d = c.mb = c.F.mb;
            c.Bd = d.im();
            d === La && Ma(va);
            d === Na && Ma(wa);
            d = c.F;
            d.lH = b.minZoom;
            d.kH = b.maxZoom;
            c.Ku();
            c.G = {
                Zb: p,
                Ab: 0,
                Cp: 0,
                wF: 0,
                rU: 0,
                Hw: p,
                pz: -1,
                he: []
            };
            c.platform.style.cursor = c.F.Cb;
            for (e = 0; e < C.oo.length; e++) C.oo[e](c);
            c.G.pz = e;
            c.P();
            J.load("map", function() {
                c.vb()
            });
            c.F.Zl && (setTimeout(function() {
                Ma(xa)
            }, 1E3), J.load("mapclick", function() {
                window.MPC_Mgr = new Oa(c)
            }, n));
            Pa() && J.load("oppc", function() {
                c.zu()
            });
            F() && J.load("opmb", function() {
                c.zu()
            });
            a = o;
            c.vw = []
        }
    }
    u.lang.ha(Ia, u.lang.oa, "Map");
    u.extend(Ia.prototype, {
        qa: function() {
            var a = L("div"),
                b = a.style;
            b.overflow = "visible";
            b.position = "absolute";
            b.zIndex = "0";
            b.top = b.left = "0px";
            var b = L("div", {
                    "class": "BMap_mask"
                }),
                c = b.style;
            c.position = "absolute";
            c.top = c.left = "0px";
            c.zIndex = "9";
            c.overflow = "hidden";
            c.WebkitUserSelect = "none";
            a.appendChild(b);
            return a
        },
        hw: function(a) {
            var b = a.style;
            b.overflow = "hidden";
            "absolute" != Qa(a).position && (b.position = "relative", b.zIndex = 0);
            b.backgroundColor = "#F3F1EC";
            b.color = "#000";
            b.textAlign = "left"
        },
        P: function() {
            var a = this;
            a.Bo = function() {
                var b = a.pb();
                if (a.width != b.width || a.height != b.height) {
                    var c = new M(a.width, a.height),
                        d = new N("onbeforeresize");
                    d.size = c;
                    a.dispatchEvent(d);
                    a.ni((b.width - a.width) / 2, (b.height - a.height) / 2);
                    a.xd.style.width = (a.width = b.width) + "px";
                    a.xd.style.height = (a.height = b.height) + "px";
                    c = new N("onresize");
                    c.size = b;
                    a.dispatchEvent(c)
                }
            };
            a.F.ns && (a.G.Eo = setInterval(a.Bo, 80))
        },
        ni: function(a, b, c, d) {
            var e = this.la().Yb(this.V()),
                f = this.Bd,
                g = n;
            c && I.hF(c) && (this.Gf = new I(c.lng, c.lat), g = p);
            if (c = c && d ? f.Ck(c, this.wb) : this.ac)
                if (this.ac = new I(c.lng + a * e, c.lat - b * e), (a = f.Ji(this.ac, this.wb)) && g) this.Gf = a
        },
        sf: function(a, b) {
            if (Ra(a) && (a = this.ml(a).zoom, a != this.sa)) {
                this.qc = this.sa;
                this.sa = a;
                var c;
                b ? c = b : this.Pf() && (c = this.Pf().U());
                c && (c = this.xb(c, this.qc), this.ni(this.width / 2 - c.x, this.height / 2 - c.y, this.fb(c, this.qc), n));
                this.dispatchEvent(new N("onzoomstart"));
                this.dispatchEvent(new N("onzoomstartcode"))
            }
        },
        hd: function(a) {
            this.sf(a)
        },
        eA: function(a) {
            this.sf(this.sa + 1, a)
        },
        fA: function(a) {
            this.sf(this.sa - 1, a)
        },
        Qg: function(a) {
            a instanceof I && (this.ac = this.Bd.Ck(a, this.wb), this.Gf = I.hF(a) ? new I(a.lng, a.lat) : this.Bd.Ji(this.ac, this.wb))
        },
        mf: function(a, b) {
            a = Math.round(a) || 0;
            b = Math.round(b) || 0;
            this.ni(-a, -b)
        },
        Mr: function(a) {
            a && Sa(a.$d) && (a.$d(this), this.dispatchEvent(new N("onaddcontrol", a)))
        },
        tG: function(a) {
            a && Sa(a.remove) && (a.remove(), this.dispatchEvent(new N("onremovecontrol", a)))
        },
        Kl: function(a) {
            a && Sa(a.ea) && (a.ea(this), this.dispatchEvent(new N("onaddcontextmenu", a)))
        },
        Em: function(a) {
            a && Sa(a.remove) && (this.dispatchEvent(new N("onremovecontextmenu", a)), a.remove())
        },
        Aa: function(a) {
            a && Sa(a.$d) && (a.$d(this), this.dispatchEvent(new N("onaddoverlay", a)))
        },
        Fb: function(a) {
            a && Sa(a.remove) && (a.remove(), this.dispatchEvent(new N("onremoveoverlay", a)))
        },
        AD: function() {
            this.dispatchEvent(new N("onclearoverlays"))
        },
        Ef: function(a) {
            a && this.dispatchEvent(new N("onaddtilelayer", a))
        },
        ag: function(a) {
            a && this.dispatchEvent(new N("onremovetilelayer", a))
        },
        nf: function(a) {
            if (this.mb !== a) {
                var b = new N("onsetmaptype");
                b.PU = this.mb;
                this.mb = this.F.mb = a;
                this.Bd = this.mb.im();
                this.ni(0, 0, this.Da(), n);
                this.Ku();
                var c = this.ml(this.V()).zoom;
                this.sf(c);
                this.dispatchEvent(b);
                b = new N("onmaptypechange");
                b.sa = c;
                b.mb = a;
                this.dispatchEvent(b);
                (a === Ta || a === Na) && Ma(wa)
            }
        },
        Oe: function(a) {
            var b = this;
            if (a instanceof I) b.Qg(a, {
                noAnimation: n
            });
            else if (Ua(a))
                if (b.mb == La) {
                    var c = D.Lw[a];
                    c && (pt = c.m, b.Oe(pt))
                } else {
                    var d = this.FB();
                    d.Jz(function(c) {
                        0 == d.rk() && 2 == d.xa.result.type && (b.Oe(c.Ci(0).point), La.xi(a) && b.Ez(a))
                    });
                    d.search(a, {
                        log: "center"
                    })
                }
        },
        rd: function(a, b) {
            "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
            sa = F() ? Wa.bl.Mo(101) : Wa.bl.Mo(1);
            sa.Rz();
            sa.Cc("script_loaded", pa - oa);
            sa.Cc("centerAndZoom");
            var c = this;
            if (Ua(a))
                if (c.mb == La) {
                    var d = D.Lw[a];
                    d && (pt = d.m, c.rd(pt, b))
                } else {
                    var e = c.FB();
                    e.Jz(function(d) {
                        if (0 == e.rk() && 2 == e.xa.result.type) {
                            var d = d.Ci(0).point,
                                f = b || O.Wx(e.xa.content.level, c);
                            c.rd(d, f);
                            La.xi(a) && c.Ez(a)
                        }
                    });
                    e.search(a, {
                        log: "center"
                    })
                } else if (a instanceof I && b) {
                b = c.ml(b).zoom;
                c.qc = c.sa || b;
                c.sa = b;
                c.Gf = new I(a.lng, a.lat);
                c.ac = c.Bd.Ck(c.Gf, c.wb);
                c.fx = c.fx || c.sa;
                c.dx = c.dx || c.Gf;
                var d = new N("onload"),
                    f = new N("onloadcode");
                d.point = new I(a.lng, a.lat);
                d.pixel = c.xb(c.Gf, c.sa);
                d.zoom = b;
                c.loaded || (c.loaded = n, c.dispatchEvent(d), qa || (qa = Xa()));
                c.dispatchEvent(f);
                c.dispatchEvent(new N("onmoveend"));
                c.qc != c.sa && c.dispatchEvent(new N("onzoomend"));
                c.F.Yl && c.Yl()
            }
        },
        FB: function() {
            this.G.AF || (this.G.AF = new Ya(1));
            return this.G.AF
        },
        reset: function() {
            this.rd(this.dx, this.fx, n)
        },
        enableDragging: function() {
            this.F.Xb = n
        },
        disableDragging: function() {
            this.F.Xb = p
        },
        enableInertialDragging: function() {
            this.F.os = n
        },
        disableInertialDragging: function() {
            this.F.os = p
        },
        enableScrollWheelZoom: function() {
            this.F.ap = n
        },
        disableScrollWheelZoom: function() {
            this.F.ap = p
        },
        enableContinuousZoom: function() {
            this.F.Zo = n
        },
        disableContinuousZoom: function() {
            this.F.Zo = p
        },
        enableDoubleClickZoom: function() {
            this.F.Bx = n
        },
        disableDoubleClickZoom: function() {
            this.F.Bx = p
        },
        enableKeyboard: function() {
            this.F.qs = n
        },
        disableKeyboard: function() {
            this.F.qs = p
        },
        enablePinchToZoom: function() {
            this.F.$o = n
        },
        disablePinchToZoom: function() {
            this.F.$o = p
        },
        enableAutoResize: function() {
            this.F.ns = n;
            this.Bo();
            this.G.Eo || (this.G.Eo = setInterval(this.Bo, 80))
        },
        disableAutoResize: function() {
            this.F.ns = p;
            this.G.Eo && (clearInterval(this.G.Eo), this.G.Eo = o)
        },
        Yl: function() {
            this.F.Yl = n;
            this.fl || (this.fl = new Za({
                mE: n
            }), this.Ef(this.fl))
        },
        vN: function() {
            this.F.Yl = p;
            this.fl && (this.ag(this.fl), this.fl = o, delete this.fl)
        },
        pb: function() {
            return this.So && this.So instanceof M ? new M(this.So.width, this.So.height) : new M(this.Ga.clientWidth, this.Ga.clientHeight)
        },
        Tc: function(a) {
            a && a instanceof M ? (this.So = a, this.Ga.style.width = a.width + "px", this.Ga.style.height = a.height + "px") : this.So = o
        },
        Da: t("Gf"),
        V: t("sa"),
        QM: function() {
            this.Bo()
        },
        ml: function(a) {
            var b = this.F.Pc,
                c = this.F.yd,
                d = p;
            a < b && (d = n, a = b);
            a > c && (d = n, a = c);
            return {
                zoom: a,
                Lx: d
            }
        },
        Ea: t("Ga"),
        xb: function(a, b) {
            b = b || this.V();
            return this.Bd.xb(a, b, this.ac, this.pb(), this.wb)
        },
        fb: function(a, b) {
            b = b || this.V();
            return this.Bd.fb(a, b, this.ac, this.pb(), this.wb)
        },
        Vd: function(a, b) {
            if (a) {
                var c = this.xb(new I(a.lng, a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        kG: function(a, b) {
            if (a) {
                var c = new P(a.x, a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.fb(c, b)
            }
        },
        pointToPixelFor3D: function(a, b) {
            var c = map.wb;
            this.mb == La && c && $a.GD(a, this, b)
        },
        KU: function(a, b) {
            var c = map.wb;
            this.mb == La && c && $a.FD(a, this, b)
        },
        LU: function(a, b) {
            var c = this,
                d = map.wb;
            c.mb == La && d && $a.GD(a, c, function(a) {
                a.x -= c.offsetX;
                a.y -= c.offsetY;
                b && b(a)
            })
        },
        HU: function(a, b) {
            var c = map.wb;
            this.mb == La && c && (a.x += this.offsetX, a.y += this.offsetY, $a.FD(a, this, b))
        },
        Je: function(a) {
            if (!this.Ky()) return new ab;
            var b = a || {},
                a = b.margins || [0, 0, 0, 0],
                c = b.zoom || o,
                b = this.fb({
                    x: a[3],
                    y: this.height - a[2]
                }, c),
                a = this.fb({
                    x: this.width - a[1],
                    y: a[0]
                }, c);
            return new ab(b, a)
        },
        Ky: function() {
            return !!this.loaded
        },
        PJ: function(a, b) {
            for (var c = this.la(), d = b.margins || [10, 10, 10, 10], e = b.zoomFactor || 0, f = d[1] + d[3], d = d[0] + d[2], g = c.dm(), j = c = c.pk(); j >= g; j--) {
                var k = this.la().Yb(j);
                if (a.Zz().lng / k < this.width - f && a.Zz().lat / k < this.height - d) break
            }
            j += e;
            j < g && (j = g);
            j > c && (j = c);
            return j
        },
        qp: function(a, b) {
            var c = {
                center: this.Da(),
                zoom: this.V()
            };
            if (!a || !a instanceof ab && 0 == a.length || a instanceof ab && a.Nh()) return c;
            var d = [];
            a instanceof ab ? (d.push(a.Td()), d.push(a.$c())) : d = a.slice(0);
            for (var b = b || {}, e = [], f = 0, g = d.length; f < g; f++) e.push(this.Bd.Ck(d[f], this.wb));
            d = new ab;
            for (f = e.length - 1; 0 <= f; f--) d.extend(e[f]);
            if (d.Nh()) return c;
            c = d.Da();
            e = this.PJ(d, b);
            b.margins && (d = b.margins, f = (d[1] - d[3]) / 2, d = (d[0] - d[2]) / 2, g = this.la().Yb(e), b.offset && (f = b.offset.width, d = b.offset.height), c.lng += g * f, c.lat += g * d);
            c = this.Bd.Ji(c, this.wb);
            return {
                center: c,
                zoom: e
            }
        },
        dg: function(a, b) {
            var c;
            c = a && a.center ? a : this.qp(a, b);
            var b = b || {},
                d = b.delay || 200;
            if (c.zoom == this.sa && b.enableAnimation != p) {
                var e = this;
                setTimeout(function() {
                    e.Qg(c.center, {
                        duration: 210
                    })
                }, d)
            } else this.rd(c.center, c.zoom)
        },
        Ke: t("od"),
        Pf: function() {
            return this.G.Ra && this.G.Ra.Ia() ? this.G.Ra : o
        },
        getDistance: function(a, b) {
            if (a && b) {
                var c = 0,
                    c = Q.gp(a, b);
                if (c == o || c == i) c = 0;
                return c
            }
        },
        ny: function() {
            var a = [],
                b = this.ka,
                c = this.Id;
            if (b)
                for (var d in b) b[d] instanceof bb && a.push(b[d]);
            if (c) {
                d = 0;
                for (b = c.length; d < b; d++) a.push(c[d])
            }
            return a
        },
        la: t("mb"),
        zu: function() {
            for (var a = this.G.pz; a < C.oo.length; a++) C.oo[a](this);
            this.G.pz = a
        },
        Ez: function(a) {
            this.wb = La.xi(a);
            this.Xr = La.uE(this.wb);
            this.mb == La && this.Bd instanceof cb && (this.Bd.Xw = this.wb)
        },
        setDefaultCursor: function(a) {
            this.F.Cb = a;
            this.platform && (this.platform.style.cursor = this.F.Cb)
        },
        getDefaultCursor: function() {
            return this.F.Cb
        },
        setDraggingCursor: function(a) {
            this.F.Lc = a
        },
        getDraggingCursor: function() {
            return this.F.Lc
        },
        Gi: ca(p),
        Or: function(a, b) {
            b ? this.rg[b] || (this.rg[b] = {}) : b = "custom";
            a.tag = b;
            a instanceof db && (this.rg[b][a.Q] = a, a.ea(this));
            var c = this;
            J.load("hotspot", function() {
                c.zu()
            })
        },
        zQ: function(a, b) {
            b || (b = "custom");
            this.rg[b][a.Q] && delete this.rg[b][a.Q]
        },
        Xj: function(a) {
            a || (a = "custom");
            this.rg[a] = {}
        },
        Ku: function() {
            var a = this.Gi() ? this.mb.k.iP : this.mb.dm(),
                b = this.Gi() ? this.mb.k.hP : this.mb.pk(),
                c = this.F;
            c.Pc = c.lH || a;
            c.yd = c.kH || b;
            c.Pc < a && (c.Pc = a);
            c.yd > b && (c.yd = b)
        },
        setMinZoom: function(a) {
            a > this.F.yd && (a = this.F.yd);
            this.F.lH = a;
            this.UC()
        },
        setMaxZoom: function(a) {
            a < this.F.Pc && (a = this.F.Pc);
            this.F.kH = a;
            this.UC()
        },
        UC: function() {
            this.Ku();
            var a = this.F;
            this.sa < a.Pc ? this.hd(a.Pc) : this.sa > a.yd && this.hd(a.yd);
            var b = new N("onzoomspanchange");
            b.Pc = a.Pc;
            b.yd = a.yd;
            this.dispatchEvent(b)
        },
        gU: t("vw"),
        getKey: function() {
            return na
        },
        Om: function(a) {
            window.MPC_Mgr && window.MPC_Mgr.close();
            var b = this;
            b.F.Zl = p;
            if (a) {
                if (a.styleId) this.LE(a.styleId);
                else {
                    b = this;
                    a.styleJson && (a.styleStr = b.AR(a.styleJson));
                    F() && u.R.AG ? setTimeout(function() {
                        b.F.vd = a;
                        b.dispatchEvent(new N("onsetcustomstyles", a))
                    }, 50) : (this.F.vd = a, this.dispatchEvent(new N("onsetcustomstyles", a)), this.eF(b.F.vd.geotableId));
                    this.dF(a.controls);
                    var c = {
                        style: a.style
                    };
                    a.features && 0 < a.features.length && (c.features = n);
                    a.styleJson && 0 < a.styleJson.length && (c.styleJson = n);
                    Ma(5050, c)
                }
                a.style && (c = b.F.Jo[a.style] ? b.F.Jo[a.style].backColor : b.F.Jo.normal.backColor) && (this.Ea().style.backgroundColor = c)
            }
        },
        LE: function(a) {
            var b = this;
            eb(C.Bc + "style/poi/personalize?method=get&ak=" + na + "&id=" + a, function(a) {
                if (a && a.content && 0 < a.content.length) {
                    var a = a.content[0],
                        d = {};
                    a.features && 0 < a.features.length && (d.features = a.features);
                    a.controllers && 0 < a.controllers.length && (d.controls = a.controllers);
                    a.style && "" != a.style && (d.style = a.style);
                    a.geotable_id && "" != a.geotable_id && (d.geotableId = a.geotable_id);
                    setTimeout(function() {
                        b.Om(d)
                    }, 200)
                }
            })
        },
        dF: function(a) {
            this.controls || (this.controls = {
                navigationControl: new fb,
                scaleControl: new gb,
                overviewMapControl: new hb,
                mapTypeControl: new ib
            });
            var b = this,
                c;
            for (c in this.controls) b.tG(b.controls[c]);
            a = a || [];
            u.lc.Eb(a, function(a) {
                b.Mr(b.controls[a])
            })
        },
        eF: function(a) {
            a ? this.Qo && this.Qo.We == a || (this.ag(this.Qo), this.Qo = new jb({
                geotableId: a
            }), this.Ef(this.Qo)) : this.ag(this.Qo)
        },
        Lb: function() {
            var a = this.V() >= this.F.sH && this.la() == Ja && 18 >= this.V(),
                b = p;
            try {
                document.createElement("canvas").getContext("2d"), b = n
            } catch (c) {
                b = p
            }
            return a && b
        },
        getCurrentCity: function() {
            return {
                name: this.Rl,
                code: this.Ew
            }
        },
        getPanorama: t("J"),
        setPanorama: function(a) {
            this.J = a;
            this.J.Gz(this)
        },
        AR: function(a) {
            for (var b = {
                    featureType: "t",
                    elementType: "e",
                    visibility: "v",
                    color: "c",
                    lightness: "l",
                    saturation: "s",
                    weight: "w",
                    zoom: "z",
                    hue: "h"
                }, c = {
                    all: "all",
                    geometry: "g",
                    "geometry.fill": "g.f",
                    "geometry.stroke": "g.s",
                    labels: "l",
                    "labels.text.fill": "l.t.f",
                    "labels.text.stroke": "l.t.s",
                    "lables.text": "l.t",
                    "labels.icon": "l.i"
                }, d = [], e = 0, f; f = a[e]; e++) {
                var g = f.stylers;
                delete f.stylers;
                u.extend(f, g);
                var g = [],
                    j;
                for (j in b) f[j] && ("elementType" == j ? g.push(b[j] + ":" + c[f[j]]) : g.push(b[j] + ":" + f[j]));
                2 < g.length && d.push(g.join("|"))
            }
            return d.join(",")
        }
    });

    function Ma(a, b) {
        if (a) {
            var b = b || {},
                c = "",
                d;
            for (d in b) c = c + "&" + d + "=" + encodeURIComponent(b[d]);
            var e = function(a) {
                    a && (kb = n, setTimeout(function() {
                        lb.src = C.Bc + "images/blank.gif?" + a.src
                    }, 50))
                },
                f = function() {
                    var a = mb.shift();
                    a && e(a)
                };
            d = (1E8 * Math.random()).toFixed(0);
            kb ? mb.push({
                src: "product=jsapi&sub_product=jsapi&v=" + C.version + "&sub_product_v=" + C.version + "&t=" + d + "&code=" + a + "&da_src=" + a + c
            }) : e({
                src: "product=jsapi&sub_product=jsapi&v=" + C.version + "&sub_product_v=" + C.version + "&t=" + d + "&code=" + a + "&da_src=" + a + c
            });
            nb || (u.D(lb, "load", function() {
                kb = p;
                f()
            }), u.D(lb, "error", function() {
                kb = p;
                f()
            }), nb = n)
        }
    }
    var kb, nb, mb = [],
        lb = new Image;
    Ma(5E3, {
        device_pixel_ratio: window.devicePixelRatio,
        platform: navigator.platform
    });
    C.YE = {
        TILE_BASE_URLS: ["ss0.baidu.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu", "ss0.baidu.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu", "ss0.baidu.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu", "ss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu", "ss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu"],
        TILE_ONLINE_URLS: ["ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlRMgBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlRcgBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlRsgBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv"],
        TIlE_PERSPECT_URLS: ["ss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "ss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "ss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "ss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"],
        geolocControl: "p0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
        TILES_YUN_HOST: ["sp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "sp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "sp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "sp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"],
        traffic: "sp0.baidu.com/7_AZsjOpB1gCo2Kml5_Y_D3",
        iw_pano: "ss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_",
        message: "sp0.baidu.com/7vo0bSba2gU2pMbgoY3K",
        baidumap: "sp0.baidu.com/80MWsjip0QIZ8tyhnq",
        wuxian: "sp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
        pano: ["ss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_", "ss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_", "ss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_"],
        main_domain_nocdn: {
            baidu: "sp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3",
            other: "sapi.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["ss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv", "ss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv", "ss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv"],
            other: ["sapi.map.baidu.com"]
        },
        map_click: "sp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
        vector_traffic: "ss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a"
    };
    C.mP = {
        TILE_BASE_URLS: ["shangetu0.map.bdimg.com", "shangetu1.map.bdimg.com", "shangetu2.map.bdimg.com", "shangetu3.map.bdimg.com", "shangetu4.map.bdimg.com"],
        TILE_ONLINE_URLS: ["online0.map.bdimg.com", "online1.map.bdimg.com", "online2.map.bdimg.com", "online3.map.bdimg.com", "online4.map.bdimg.com"],
        TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"],
        geolocControl: "loc.map.baidu.com",
        TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com"],
        traffic: "its.map.baidu.com",
        iw_pano: "pcsv0.map.bdimg.com",
        message: "j.map.baidu.com",
        baidumap: "map.baidu.com",
        wuxian: "wuxian.baidu.com",
        pano: ["pcsv0.map.bdimg.com", "pcsv1.map.bdimg.com", "pcsv2.map.bdimg.com"],
        main_domain_nocdn: {
            baidu: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["api0.map.bdimg.com", "api1.map.bdimg.com", "api2.map.bdimg.com"]
        },
        map_click: "mapclick.map.baidu.com",
        vector_traffic: "or.map.bdimg.com"
    };
    C.bS = {
        "0": {
            proto: "http://",
            domain: C.mP
        },
        1: {
            proto: "https://",
            domain: C.YE
        },
        2: {
            proto: "https://",
            domain: C.YE
        }
    };
    C.Zt = window.HOST_TYPE || "0";
    C.url = C.bS[C.Zt];
    C.Ys = C.url.proto + C.url.domain.baidumap + "/";
    C.Bc = C.url.proto + ("2" == C.Zt ? C.url.domain.main_domain_nocdn.other : C.url.domain.main_domain_nocdn.baidu) + "/";
    C.ca = C.url.proto + ("2" == C.Zt ? C.url.domain.main_domain_cdn.other[0] : C.url.domain.main_domain_cdn.baidu[0]) + "/";

    function ob(a) {
        var b = {
            duration: 1E3,
            Mc: 30,
            Ul: 0,
            jd: pb.yF,
            ht: q()
        };
        this.Re = [];
        if (a)
            for (var c in a) b[c] = a[c];
        this.k = b;
        if (Ra(b.Ul)) {
            var d = this;
            setTimeout(function() {
                d.start()
            }, b.Ul)
        } else b.Ul != qb && this.start()
    }
    var qb = "INFINITE";
    ob.prototype.start = function() {
        this.Bq = Xa();
        this.av = this.Bq + this.k.duration;
        rb(this)
    };
    ob.prototype.add = fa(0);

    function rb(a) {
        var b = Xa();
        b >= a.av ? (Sa(a.k.qa) && a.k.qa(a.k.jd(1)), Sa(a.k.finish) && a.k.finish(), 0 < a.Re.length && (b = a.Re[0], b.Re = [].concat(a.Re.slice(1)), b.start())) : (a.Ct = a.k.jd((b - a.Bq) / a.k.duration), Sa(a.k.qa) && a.k.qa(a.Ct), a.Uz || (a.yo = setTimeout(function() {
            rb(a)
        }, 1E3 / a.k.Mc)))
    }
    ob.prototype.stop = function(a) {
        this.Uz = n;
        for (var b = 0; b < this.Re.length; b++) this.Re[b].stop(), this.Re[b] = o;
        this.Re.length = 0;
        this.yo && (clearTimeout(this.yo), this.yo = o);
        this.k.ht(this.Ct);
        a && (this.av = this.Bq, rb(this))
    };
    ob.prototype.cancel = fa(2);
    var pb = {
        yF: function(a) {
            return a
        },
        reverse: function(a) {
            return 1 - a
        },
        yx: function(a) {
            return a * a
        },
        xx: function(a) {
            return Math.pow(a, 3)
        },
        eE: function(a) {
            return -(a * (a - 2))
        },
        PN: function(a) {
            return Math.pow(a - 1, 3) + 1
        },
        dE: function(a) {
            return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
        },
        zT: function(a) {
            return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
        },
        AT: function(a) {
            return (1 - Math.cos(Math.PI * a)) / 2
        }
    };
    pb["ease-in"] = pb.yx;
    pb["ease-out"] = pb.eE;
    var D = {
        iA: 34,
        jA: 21,
        kA: new M(21, 32),
        CH: new M(10, 32),
        BH: new M(24, 36),
        AH: new M(12, 36),
        gA: new M(13, 1),
        da: C.ca + "images/",
        hA: C.ca + "images/markers_new.png",
        yH: 24,
        zH: 73,
        Lw: {
            "\u5317\u4eac": {
                mt: "bj",
                m: new I(116.403874, 39.914889)
            },
            "\u4e0a\u6d77": {
                mt: "sh",
                m: new I(121.487899, 31.249162)
            },
            "\u6df1\u5733": {
                mt: "sz",
                m: new I(114.025974, 22.546054)
            },
            "\u5e7f\u5dde": {
                mt: "gz",
                m: new I(113.30765, 23.120049)
            }
        },
        fontFamily: "arial,sans-serif"
    };
    u.R.Lf ? (u.extend(D, {
        UD: "url(" + D.da + "ruler.cur),crosshair",
        Cb: "-moz-grab",
        Lc: "-moz-grabbing"
    }), u.platform.rF && (D.fontFamily = "arial,simsun,sans-serif")) : u.R.yD || u.R.AG ? u.extend(D, {
        UD: "url(" + D.da + "ruler.cur) 2 6,crosshair",
        Cb: "url(" + D.da + "openhand.cur) 8 8,default",
        Lc: "url(" + D.da + "closedhand.cur) 8 8,move"
    }) : u.extend(D, {
        UD: "url(" + D.da + "ruler.cur),crosshair",
        Cb: "url(" + D.da + "openhand.cur),default",
        Lc: "url(" + D.da + "closedhand.cur),move"
    });

    function sb(a, b) {
        var c = a.style;
        c.left = b[0] + "px";
        c.top = b[1] + "px"
    }

    function tb(a) {
        0 < u.R.W ? a.unselectable = "on" : a.style.MozUserSelect = "none"
    }

    function ub(a) {
        return a && a.parentNode && 11 != a.parentNode.nodeType
    }

    function vb(a, b) {
        u.C.Ps(a, "beforeEnd", b);
        return a.lastChild
    }

    function wb(a) {
        for (var b = {
                left: 0,
                top: 0
            }; a && a.offsetParent;) b.left += a.offsetLeft, b.top += a.offsetTop, a = a.offsetParent;
        return b
    }

    function B(a) {
        a = window.event || a;
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = n
    }

    function xb(a) {
        a = window.event || a;
        a.preventDefault ? a.preventDefault() : a.returnValue = p;
        return p
    }

    function la(a) {
        B(a);
        return xb(a)
    }

    function yb() {
        var a = document.documentElement,
            b = document.body;
        return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
    }

    function zb(a, b) {
        if (a && b) return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
    }

    function Ab(a, b) {
        var c = [],
            b = b || function(a) {
                return a
            },
            d;
        for (d in a) c.push(d + "=" + b(a[d]));
        return c.join("&")
    }

    function L(a, b, c) {
        var d = document.createElement(a);
        c && (d = document.createElementNS(c, a));
        return u.C.Dz(d, b || {})
    }

    function Qa(a) {
        if (a.currentStyle) return a.currentStyle;
        if (a.ownerDocument && a.ownerDocument.defaultView) return a.ownerDocument.defaultView.getComputedStyle(a, o)
    }

    function Sa(a) {
        return "function" == typeof a
    }

    function Ra(a) {
        return "number" == typeof a
    }

    function Ua(a) {
        return "string" == typeof a
    }

    function Bb(a) {
        return "undefined" != typeof a
    }

    function Cb(a) {
        return "object" == typeof a
    }
    var Db = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function Eb(a) {
        var b = "",
            c, d, e = "",
            f, g = "",
            j = 0;
        f = /[^A-Za-z0-9\+\/\=]/g;
        if (!a || f.exec(a)) return a;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do c = Db.indexOf(a.charAt(j++)), d = Db.indexOf(a.charAt(j++)), f = Db.indexOf(a.charAt(j++)), g = Db.indexOf(a.charAt(j++)), c = c << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 != f && (b += String.fromCharCode(d)), 64 != g && (b += String.fromCharCode(e)); while (j < a.length);
        return b
    }
    var N = u.lang.hu;

    function F() {
        return !(!u.platform.BP && !u.platform.AP && !u.platform.tm)
    }

    function Pa() {
        return !(!u.platform.rF && !u.platform.CP && !u.platform.HP)
    }

    function Xa() {
        return (new Date).getTime()
    }

    function Fb() {
        var a = document.body.appendChild(L("div"));
        a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
        var b = a.firstChild;
        if (!b.style) return p;
        b.style.behavior = "url(#default#VML)";
        b = b ? "object" == typeof b.adj : n;
        a.parentNode.removeChild(a);
        return b
    }

    function Gb() {
        return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
    }

    function Hb() {
        return !!L("canvas").getContext
    }
    C.PP = function() {
        var a = n,
            b = n,
            c = n,
            d = n,
            e = 0,
            f = 0,
            g = 0,
            j = 0;
        return {
            UI: function() {
                e += 1;
                a && (a = p, setTimeout(function() {
                    Ma(5054, {
                        pic: e
                    });
                    a = n;
                    e = 0
                }, 1E4))
            },
            BS: function() {
                f += 1;
                b && (b = p, setTimeout(function() {
                    Ma(5055, {
                        move: f
                    });
                    b = n;
                    f = 0
                }, 1E4))
            },
            DS: function() {
                g += 1;
                c && (c = p, setTimeout(function() {
                    Ma(5056, {
                        zoom: g
                    });
                    c = n;
                    g = 0
                }, 1E4))
            },
            CS: function(a) {
                j += a;
                d && (d = p, setTimeout(function() {
                    Ma(5057, {
                        tile: j
                    });
                    d = n;
                    j = 0
                }, 5E3))
            }
        }
    }();
    var Wa;
    (function() {
        function a(a) {
            this.sM = a;
            this.timing = {};
            this.start = +new Date
        }

        function b(a, b) {
            if (a.length === +a.length)
                for (var c = 0, d = a.length; c < d && b.call(i, c, a[c], a) !== p; c++);
            else
                for (c in a)
                    if (a.hasOwnProperty(c) && b.call(i, c, a[c], a) === p) break
        }
        var c = [],
            d = {
                push: function(a) {
                    c.push(a);
                    if (window.localStorage && window.JSON) try {
                        localStorage.setItem("WPO_NR", JSON.stringify(c))
                    } catch (b) {}
                },
                get: function(a) {
                    var b = [];
                    if (window.localStorage) try {
                        a && localStorage.removeItem("WPO_NR")
                    } catch (d) {}
                    b = c;
                    a && (c = []);
                    return b
                }
            },
            e, f, g, j, k = {};
        (!window.localStorage || !window.JSON) && document.attachEvent && window.attachEvent("onbeforeunload", function() {
            l.send()
        });
        var l = {
            send: function(a) {
                var c = [],
                    e = [],
                    f = a || d.get(n),
                    g;
                0 < f.length && (b(f, function(d, e) {
                    var f = [];
                    b(e.timing, function(a, b) {
                        f.push('"' + a + '":' + b)
                    });
                    c.push('{"t":{' + f.join(",") + '},"a":' + e.sM + "}");
                    !g && (a && e.start) && (g = e.start)
                }), b(k, function(a, b) {
                    e.push(a + "=" + b)
                }), e.push("d=[" + c.join(",") + "]"), g ? e.push("_st=" + g) : e.push("_t=" + +new Date), f = new Image, f.src = "http://static.tieba.baidu.com/tb/pms/img/st.gif?" + e.join("&"), window["___pms_img_" + 1 * new Date] = f)
            }
        };
        a.prototype = {
            Cc: function(a, b) {
                this.timing[a] = 0 <= b ? b : new Date - this.start
            },
            Rz: function() {
                this.start = +new Date
            },
            WR: function() {
                this.Cc("tt")
            },
            uH: function() {
                this.Cc("vt")
            },
            wt: function() {
                f && (d.push(this), d.get().length >= g && l.send())
            },
            error: q()
        };
        Wa = {
            bl: {
                Fy: function(a) {
                    var b = navigator.rT || navigator.wU || navigator.tV || {
                        type: 0
                    };
                    f = Math.random() <= (a.KQ || 0.01);
                    g = a.max || 5;
                    j = a.vU || b.type;
                    k = {
                        p: a.uQ,
                        mnt: j,
                        b: 50
                    };
                    window.localStorage && (window.JSON && window.addEventListener) && (e = d.get(n), window.addEventListener("load", function() {
                        l.send(e)
                    }, p))
                },
                Mo: function(b) {
                    return new a(b)
                }
            }
        }
    })();
    Wa.bl.Fy({
        uQ: 18,
        KQ: 0.1,
        max: 1
    });
    C.fn = {
        wA: "#83a1ff",
        hn: "#808080"
    };

    function eb(a, b) {
        if (b) {
            var c = (1E5 * Math.random()).toFixed(0);
            C._rd["_cbk" + c] = function(a) {
                b && b(a);
                delete C._rd["_cbk" + c]
            };
            a += "&callback=BMap._rd._cbk" + c
        }
        var d = L("script", {
            type: "text/javascript"
        });
        d.charset = "utf-8";
        d.src = a;
        d.addEventListener ? d.addEventListener("load", function(a) {
            a = a.target;
            a.parentNode.removeChild(a)
        }, p) : d.attachEvent && d.attachEvent("onreadystatechange", function() {
            var a = window.event.srcElement;
            a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
        });
        setTimeout(function() {
            document.getElementsByTagName("head")[0].appendChild(d);
            d = o
        }, 1)
    };
    var Ib = {
        map: "xqjagz",
        common: "xilvmn",
        style: "nha3f5",
        tile: "mninhr",
        groundoverlay: "enscgi",
        pointcollection: "hzemqd",
        marker: "xbghrk",
        markeranimation: "l4i5hk",
        poly: "amiqa3",
        draw: "wd5uxp",
        drawbysvg: "yfl0rn",
        drawbyvml: "jjt3em",
        drawbycanvas: "ihkffc",
        infowindow: "ablwya",
        oppc: "fajd40",
        opmb: "vamzno",
        menu: "orglqn",
        control: "zuqhy5",
        navictrl: "qcbglm",
        geoctrl: "wm12sd",
        copyrightctrl: "mvrufs",
        scommon: "4rxmyh",
        local: "mwrn2s",
        route: "tb2rmt",
        othersearch: "4w3lpa",
        mapclick: "lrv1xn",
        buslinesearch: "mqh0zo",
        hotspot: "zsjg0d",
        autocomplete: "pzzrr2",
        coordtrans: "53xccf",
        coordtransutils: "mtakxu",
        clayer: "o4ybbw",
        panorama: "yewvlx",
        pservice: "f2d102",
        pcommon: "dgxkkb",
        panoramaflash: "gtmfog",
        vector: "eamsav"
    };
    u.Tt = function() {
        function a(a) {
            return d && !!c[b + a + "_" + Ib[a]]
        }
        var b = "BMap_",
            c = window.localStorage,
            d = "localStorage" in window && c !== o && c !== i;
        return {
            EP: d,
            set: function(a, f) {
                if (d) {
                    for (var g = b + a + "_", j = c.length, k; j--;) k = c.key(j), -1 < k.indexOf(g) && c.removeItem(k);
                    try {
                        c.setItem(b + a + "_" + Ib[a], f)
                    } catch (l) {
                        c.clear()
                    }
                }
            },
            get: function(e) {
                return d && a(e) ? c.getItem(b + e + "_" + Ib[e]) : p
            },
            vD: a
        }
    }();

    function J() {}
    u.object.extend(J, {
        Th: {
            yA: -1,
            gI: 0,
            $m: 1
        },
        xE: function() {
            var a = "drawbysvg";
            F() && Hb() ? a = "drawbycanvas" : Gb() ? a = "drawbysvg" : Fb() ? a = "drawbyvml" : Hb() && (a = "drawbycanvas");
            return {
                control: [],
                marker: [],
                style: [],
                poly: ["marker", a],
                drawbysvg: ["draw"],
                drawbyvml: ["draw"],
                drawbycanvas: ["draw"],
                infowindow: ["common", "marker"],
                menu: [],
                oppc: [],
                opmb: [],
                scommon: [],
                local: ["scommon"],
                route: ["scommon"],
                othersearch: ["scommon"],
                autocomplete: ["scommon"],
                mapclick: ["scommon"],
                buslinesearch: ["route"],
                hotspot: [],
                coordtransutils: ["coordtrans"],
                clayer: ["tile"],
                pservice: [],
                pcommon: ["style", "pservice"],
                panorama: ["pcommon"],
                panoramaflash: ["pcommon"]
            }
        },
        OU: {},
        pA: {
            pI: C.ca + "getmodules?v=2.0&t=20140707",
            YL: 5E3
        },
        gx: p,
        Wc: {
            vj: {},
            dl: [],
            vr: []
        },
        load: function(a, b, c) {
            var d = this.Po(a);
            if (d.de == this.Th.$m) c && b();
            else {
                if (d.de == this.Th.yA) {
                    this.CD(a);
                    this.rG(a);
                    var e = this;
                    e.gx == p && (e.gx = n, setTimeout(function() {
                        for (var a = [], b = 0, c = e.Wc.dl.length; b < c; b++) {
                            var d = e.Wc.dl[b],
                                l = "";
                            ia.Tt.vD(d) ? l = ia.Tt.get(d) : (l = "", a.push(d + "_" + Ib[d]));
                            e.Wc.vr.push({
                                LF: d,
                                Zy: l
                            })
                        }
                        e.gx = p;
                        e.Wc.dl.length = 0;
                        0 == a.length ? e.iE() : eb(e.pA.pI + "&mod=" + a.join(","))
                    }, 1));
                    d.de = this.Th.gI
                }
                d.Cq.push(b)
            }
        },
        CD: function(a) {
            if (a && this.xE()[a])
                for (var a = this.xE()[a], b = 0; b < a.length; b++) this.CD(a[b]), this.Wc.vj[a[b]] || this.rG(a[b])
        },
        rG: function(a) {
            for (var b = 0; b < this.Wc.dl.length; b++)
                if (this.Wc.dl[b] == a) return;
            this.Wc.dl.push(a)
        },
        JQ: function(a, b) {
            var c = this.Po(a);
            try {
                eval(b)
            } catch (d) {
                return
            }
            c.de = this.Th.$m;
            for (var e = 0, f = c.Cq.length; e < f; e++) c.Cq[e]();
            c.Cq.length = 0
        },
        vD: function(a, b) {
            var c = this;
            c.timeout = setTimeout(function() {
                c.Wc.vj[a].de != c.Th.$m ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
            }, c.pA.YL)
        },
        Po: function(a) {
            this.Wc.vj[a] || (this.Wc.vj[a] = {}, this.Wc.vj[a].de = this.Th.yA, this.Wc.vj[a].Cq = []);
            return this.Wc.vj[a]
        },
        remove: function(a) {
            delete this.Po(a)
        },
        OM: function(a, b) {
            for (var c = this.Wc.vr, d = n, e = 0, f = c.length; e < f; e++) "" == c[e].Zy && (c[e].LF == a ? c[e].Zy = b : d = p);
            d && this.iE()
        },
        iE: function() {
            for (var a = this.Wc.vr, b = 0, c = a.length; b < c; b++) this.JQ(a[b].LF, a[b].Zy);
            this.Wc.vr.length = 0
        }
    });

    function P(a, b) {
        this.x = a || 0;
        this.y = b || 0;
        this.x = this.x;
        this.y = this.y
    }
    P.prototype.ob = function(a) {
        return a && a.x == this.x && a.y == this.y
    };

    function M(a, b) {
        this.width = a || 0;
        this.height = b || 0
    }
    M.prototype.ob = function(a) {
        return a && this.width == a.width && this.height == a.height
    };

    function db(a, b) {
        a && (this.bb = a, this.Q = "spot" + db.Q++, b = b || {}, this.uh = b.text || "", this.hr = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5], this.VC = b.userData || o, this.ug = b.minZoom || o, this.Be = b.maxZoom || o)
    }
    db.Q = 0;
    u.extend(db.prototype, {
        ea: function(a) {
            this.ug == o && (this.ug = a.F.Pc);
            this.Be == o && (this.Be = a.F.yd)
        },
        ga: function(a) {
            a instanceof I && (this.bb = a)
        },
        U: t("bb"),
        Vp: ba("uh"),
        vy: t("uh"),
        setUserData: ba("VC"),
        getUserData: t("VC")
    });

    function R() {
        this.A = o;
        this.Ib = "control";
        this.Ca = this.pD = n
    }
    u.lang.ha(R, u.lang.oa, "Control");
    u.extend(R.prototype, {
        initialize: function(a) {
            this.A = a;
            if (this.B) return a.Ga.appendChild(this.B), this.B
        },
        $d: function(a) {
            !this.B && (this.initialize && Sa(this.initialize)) && (this.B = this.initialize(a));
            this.k = this.k || {
                Zf: p
            };
            this.hw();
            this.pr();
            this.B && (this.B.Zn = this)
        },
        hw: function() {
            var a = this.B;
            if (a) {
                var b = a.style;
                b.position = "absolute";
                b.zIndex = this.Eu || "10";
                b.MozUserSelect = "none";
                b.WebkitTextSizeAdjust = "none";
                this.k.Zf || u.C.$a(a, "BMap_noprint");
                F() || u.D(a, "contextmenu", la)
            }
        },
        remove: function() {
            this.A = o;
            this.B && (this.B.parentNode && this.B.parentNode.removeChild(this.B), this.B = this.B.Zn = o)
        },
        ya: function() {
            this.B = vb(this.A.Ga, "<div unselectable='on'></div>");
            this.Ca == p && u.C.H(this.B);
            return this.B
        },
        pr: function() {
            this.Qb(this.k.anchor)
        },
        Qb: function(a) {
            if (this.eT || !Ra(a) || isNaN(a) || a < Jb || 3 < a) a = this.defaultAnchor;
            this.k = this.k || {
                Zf: p
            };
            this.k.ma = this.k.ma || this.defaultOffset;
            var b = this.k.anchor;
            this.k.anchor = a;
            if (this.B) {
                var c = this.B,
                    d = this.k.ma.width,
                    e = this.k.ma.height;
                c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
                switch (a) {
                    case Jb:
                        c.style.top = e + "px";
                        c.style.left = d + "px";
                        break;
                    case Kb:
                        c.style.top = e + "px";
                        c.style.right = d + "px";
                        break;
                    case Lb:
                        c.style.bottom = e + "px";
                        c.style.left = d + "px";
                        break;
                    case 3:
                        c.style.bottom = e + "px", c.style.right = d + "px"
                }
                c = ["TL", "TR", "BL", "BR"];
                u.C.Pb(this.B, "anchor" + c[b]);
                u.C.$a(this.B, "anchor" + c[a])
            }
        },
        Ux: function() {
            return this.k.anchor
        },
        Cd: function(a) {
            a instanceof M && (this.k = this.k || {
                Zf: p
            }, this.k.ma = new M(a.width, a.height), this.B && this.Qb(this.k.anchor))
        },
        Qf: function() {
            return this.k.ma
        },
        Oc: t("B"),
        show: function() {
            this.Ca != n && (this.Ca = n, this.B && u.C.show(this.B))
        },
        H: function() {
            this.Ca != p && (this.Ca = p, this.B && u.C.H(this.B))
        },
        isPrintable: function() {
            return !!this.k.Zf
        },
        Sf: function() {
            return !this.B && !this.A ? p : !!this.Ca
        }
    });
    var Jb = 0,
        Kb = 1,
        Lb = 2;

    function fb(a) {
        R.call(this);
        a = a || {};
        this.k = {
            Zf: p,
            Nz: a.showZoomInfo || n,
            anchor: a.anchor,
            ma: a.offset,
            type: a.type,
            QN: a.enableGeolocation || p
        };
        this.defaultAnchor = F() ? 3 : Jb;
        this.defaultOffset = new M(10, 10);
        this.Qb(a.anchor);
        this.Tk(a.type);
        this.we()
    }
    u.lang.ha(fb, R, "NavigationControl");
    u.extend(fb.prototype, {
        initialize: function(a) {
            this.A = a;
            return this.B
        },
        Tk: function(a) {
            this.k.type = Ra(a) && 0 <= a && 3 >= a ? a : 0
        },
        mm: function() {
            return this.k.type
        },
        we: function() {
            var a = this;
            J.load("navictrl", function() {
                a.vf()
            })
        }
    });

    function Mb(a) {
        R.call(this);
        a = a || {};
        this.k = {
            anchor: a.anchor || Lb,
            ma: a.offset || new M(10, 30),
            cV: a.showAddressBar || p,
            CT: a.enableAutoLocation || p,
            tU: a.locationIcon || o
        };
        var b = this;
        this.Eu = 1200;
        b.dS = [];
        this.qd = [];
        J.load("geoctrl", function() {
            (function d() {
                if (0 !== b.qd.length) {
                    var a = b.qd.shift();
                    b[a.method].apply(b, a.arguments);
                    d()
                }
            })();
            b.oI()
        });
        Ma(Ha)
    }
    u.lang.ha(Mb, R, "GeolocationControl");
    u.extend(Mb.prototype, {
        location: function() {
            this.qd.push({
                method: "location",
                arguments: arguments
            })
        },
        getAddressComponent: ca(o)
    });

    function Nb(a) {
        R.call(this);
        a = a || {};
        this.k = {
            Zf: p,
            anchor: a.anchor,
            ma: a.offset
        };
        this.ub = [];
        this.defaultAnchor = Lb;
        this.defaultOffset = new M(5, 2);
        this.Qb(a.anchor);
        this.pD = p;
        this.we()
    }
    u.lang.ha(Nb, R, "CopyrightControl");
    u.object.extend(Nb.prototype, {
        initialize: function(a) {
            this.A = a;
            return this.B
        },
        Nr: function(a) {
            if (a && Ra(a.id) && !isNaN(a.id)) {
                var b = {
                        bounds: o,
                        content: ""
                    },
                    c;
                for (c in a) b[c] = a[c];
                if (a = this.nk(a.id))
                    for (var d in b) a[d] = b[d];
                else this.ub.push(b)
            }
        },
        nk: function(a) {
            for (var b = 0, c = this.ub.length; b < c; b++)
                if (this.ub[b].id == a) return this.ub[b]
        },
        $x: t("ub"),
        qz: function(a) {
            for (var b = 0, c = this.ub.length; b < c; b++) this.ub[b].id == a && (r = this.ub.splice(b, 1), b--, c = this.ub.length)
        },
        we: function() {
            var a = this;
            J.load("copyrightctrl", function() {
                a.vf()
            })
        }
    });

    function hb(a) {
        R.call(this);
        a = a || {};
        this.k = {
            Zf: p,
            size: a.size || new M(150, 150),
            padding: 5,
            Ia: a.isOpen === n ? n : p,
            oS: 4,
            ma: a.offset,
            anchor: a.anchor
        };
        this.defaultAnchor = 3;
        this.defaultOffset = new M(0, 0);
        this.zn = this.An = 13;
        this.Qb(a.anchor);
        this.Tc(this.k.size);
        this.we()
    }
    u.lang.ha(hb, R, "OverviewMapControl");
    u.extend(hb.prototype, {
        initialize: function(a) {
            this.A = a;
            return this.B
        },
        Qb: function(a) {
            R.prototype.Qb.call(this, a)
        },
        sd: function() {
            this.sd.Cl = n;
            this.k.Ia = !this.k.Ia;
            this.B || (this.sd.Cl = p)
        },
        Tc: function(a) {
            a instanceof M || (a = new M(150, 150));
            a.width = 0 < a.width ? a.width : 150;
            a.height = 0 < a.height ? a.height : 150;
            this.k.size = a
        },
        pb: function() {
            return this.k.size
        },
        Ia: function() {
            return this.k.Ia
        },
        we: function() {
            var a = this;
            J.load("control", function() {
                a.vf()
            })
        }
    });

    function gb(a) {
        R.call(this);
        a = a || {};
        this.k = {
            Zf: p,
            color: "black",
            vc: "metric",
            ma: a.offset
        };
        this.defaultAnchor = Lb;
        this.defaultOffset = new M(81, 18);
        this.Qb(a.anchor);
        this.Bg = {
            metric: {
                name: "metric",
                ED: 1,
                cF: 1E3,
                eH: "\u7c73",
                fH: "\u516c\u91cc"
            },
            us: {
                name: "us",
                ED: 3.2808,
                cF: 5280,
                eH: "\u82f1\u5c3a",
                fH: "\u82f1\u91cc"
            }
        };
        this.Bg[this.k.vc] || (this.k.vc = "metric");
        this.xC = o;
        this.dC = {};
        this.we()
    }
    u.lang.ha(gb, R, "ScaleControl");
    u.object.extend(gb.prototype, {
        initialize: function(a) {
            this.A = a;
            return this.B
        },
        Ti: function(a) {
            this.k.color = a + ""
        },
        KT: function() {
            return this.k.color
        },
        Lz: function(a) {
            this.k.vc = this.Bg[a] && this.Bg[a].name || this.k.vc
        },
        XO: function() {
            return this.k.vc
        },
        we: function() {
            var a = this;
            J.load("control", function() {
                a.vf()
            })
        }
    });
    var Ob = 0;

    function ib(a) {
        R.call(this);
        a = a || {};
        this.defaultAnchor = Kb;
        this.defaultOffset = new M(10, 10);
        this.k = {
            Zf: p,
            Vf: [Ja, Ta, Na, La],
            nN: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
            type: a.type || Ob,
            ma: a.offset || this.defaultOffset,
            SN: n
        };
        this.Qb(a.anchor);
        "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.k.Vf = a.mapTypes.slice(0));
        this.we()
    }
    u.lang.ha(ib, R, "MapTypeControl");
    u.object.extend(ib.prototype, {
        initialize: function(a) {
            this.A = a;
            return this.B
        },
        Ut: function(a) {
            this.A.ql = a
        },
        we: function() {
            var a = this;
            J.load("control", function() {
                a.vf()
            }, n)
        }
    });

    function Pb(a) {
        R.call(this);
        a = a || {};
        this.k = {
            Zf: p,
            ma: a.offset,
            anchor: a.anchor
        };
        this.lh = p;
        this.xr = o;
        this.lC = new Qb({
            ff: "api"
        });
        this.mC = new S(o, {
            ff: "api"
        });
        this.defaultAnchor = Kb;
        this.defaultOffset = new M(10, 10);
        this.Qb(a.anchor);
        this.we();
        Ma(ua)
    }
    u.lang.ha(Pb, R, "PanoramaControl");
    u.extend(Pb.prototype, {
        initialize: function(a) {
            this.A = a;
            return this.B
        },
        we: function() {
            var a = this;
            J.load("control", function() {
                a.vf()
            })
        }
    });

    function Rb(a) {
        u.lang.oa.call(this);
        this.k = {
            Ga: o,
            cursor: "default"
        };
        this.k = u.extend(this.k, a);
        this.Ib = "contextmenu";
        this.A = o;
        this.ja = [];
        this.Ce = [];
        this.Jd = [];
        this.fs = this.Oo = o;
        this.sg = p;
        var b = this;
        J.load("menu", function() {
            b.vb()
        })
    }
    u.lang.ha(Rb, u.lang.oa, "ContextMenu");
    u.object.extend(Rb.prototype, {
        ea: function(a, b) {
            this.A = a;
            this.zj = b || o
        },
        remove: function() {
            this.A = this.zj = o
        },
        Pr: function(a) {
            if (a && !("menuitem" != a.Ib || "" == a.uh || 0 >= a.dM)) {
                for (var b = 0, c = this.ja.length; b < c; b++)
                    if (this.ja[b] === a) return;
                this.ja.push(a);
                this.Ce.push(a)
            }
        },
        removeItem: function(a) {
            if (a && "menuitem" == a.Ib) {
                for (var b = 0, c = this.ja.length; b < c; b++) this.ja[b] === a && (this.ja[b].remove(), this.ja.splice(b, 1), c--);
                b = 0;
                for (c = this.Ce.length; b < c; b++) this.Ce[b] === a && (this.Ce[b].remove(), this.Ce.splice(b, 1), c--)
            }
        },
        zw: function() {
            this.ja.push({
                Ib: "divider",
                Yh: this.Jd.length
            });
            this.Jd.push({
                C: o
            })
        },
        tz: function(a) {
            if (this.Jd[a]) {
                for (var b = 0, c = this.ja.length; b < c; b++) this.ja[b] && ("divider" == this.ja[b].Ib && this.ja[b].Yh == a) && (this.ja.splice(b, 1), c--), this.ja[b] && ("divider" == this.ja[b].Ib && this.ja[b].Yh > a) && this.ja[b].Yh--;
                this.Jd.splice(a, 1)
            }
        },
        Oc: t("B"),
        show: function() {
            this.sg != n && (this.sg = n)
        },
        H: function() {
            this.sg != p && (this.sg = p)
        },
        WQ: function(a) {
            a && (this.k.cursor = a)
        },
        getItem: function(a) {
            return this.Ce[a]
        }
    });

    function Sb(a, b, c) {
        if (a && Sa(b)) {
            u.lang.oa.call(this);
            this.k = {
                width: 100,
                id: ""
            };
            c = c || {};
            this.k.width = 1 * c.width ? c.width : 100;
            this.k.id = c.id ? c.id : "";
            this.uh = a + "";
            this.Gu = b;
            this.A = o;
            this.Ib = "menuitem";
            this.B = this.mg = o;
            this.pg = n;
            var d = this;
            J.load("menu", function() {
                d.vb()
            })
        }
    }
    u.lang.ha(Sb, u.lang.oa, "MenuItem");
    u.object.extend(Sb.prototype, {
        ea: function(a, b) {
            this.A = a;
            this.mg = b
        },
        remove: function() {
            this.A = this.mg = o
        },
        Vp: function(a) {
            a && (this.uh = a + "")
        },
        Oc: t("B"),
        enable: function() {
            this.pg = n
        },
        disable: function() {
            this.pg = p
        }
    });

    function ab(a, b) {
        a && !b && (b = a);
        this.Nd = this.Md = this.Rd = this.Qd = this.Kj = this.yj = o;
        a && (this.Kj = new I(a.lng, a.lat), this.yj = new I(b.lng, b.lat), this.Rd = a.lng, this.Qd = a.lat, this.Nd = b.lng, this.Md = b.lat)
    }
    u.object.extend(ab.prototype, {
        Nh: function() {
            return !this.Kj || !this.yj
        },
        ob: function(a) {
            return !(a instanceof ab) || this.Nh() ? p : this.$c().ob(a.$c()) && this.Td().ob(a.Td())
        },
        $c: t("Kj"),
        Td: t("yj"),
        aN: function(a) {
            return !(a instanceof ab) || this.Nh() || a.Nh() ? p : a.Rd > this.Rd && a.Nd < this.Nd && a.Qd > this.Qd && a.Md < this.Md
        },
        Da: function() {
            return this.Nh() ? o : new I((this.Rd + this.Nd) / 2, (this.Qd + this.Md) / 2)
        },
        Hy: function(a) {
            if (!(a instanceof ab) || Math.max(a.Rd, a.Nd) < Math.min(this.Rd, this.Nd) || Math.min(a.Rd, a.Nd) > Math.max(this.Rd, this.Nd) || Math.max(a.Qd, a.Md) < Math.min(this.Qd, this.Md) || Math.min(a.Qd, a.Md) > Math.max(this.Qd, this.Md)) return o;
            var b = Math.max(this.Rd, a.Rd),
                c = Math.min(this.Nd, a.Nd),
                d = Math.max(this.Qd, a.Qd),
                a = Math.min(this.Md, a.Md);
            return new ab(new I(b, d), new I(c, a))
        },
        bN: function(a) {
            return !(a instanceof I) || this.Nh() ? p : a.lng >= this.Rd && a.lng <= this.Nd && a.lat >= this.Qd && a.lat <= this.Md
        },
        extend: function(a) {
            if (a instanceof I) {
                var b = a.lng,
                    a = a.lat;
                this.Kj || (this.Kj = new I(0, 0));
                this.yj || (this.yj = new I(0, 0));
                if (!this.Rd || this.Rd > b) this.Kj.lng = this.Rd = b;
                if (!this.Nd || this.Nd < b) this.yj.lng = this.Nd = b;
                if (!this.Qd || this.Qd > a) this.Kj.lat = this.Qd = a;
                if (!this.Md || this.Md < a) this.yj.lat = this.Md = a
            }
        },
        Zz: function() {
            return this.Nh() ? new I(0, 0) : new I(Math.abs(this.Nd - this.Rd), Math.abs(this.Md - this.Qd))
        }
    });

    function I(a, b) {
        isNaN(a) && (a = Eb(a), a = isNaN(a) ? 0 : a);
        Ua(a) && (a = parseFloat(a));
        isNaN(b) && (b = Eb(b), b = isNaN(b) ? 0 : b);
        Ua(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b
    }
    I.hF = function(a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    };
    I.prototype.ob = function(a) {
        return a && this.lat == a.lat && this.lng == a.lng
    };

    function Tb() {}
    Tb.prototype.Tf = function() {
        aa("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")
    };
    Tb.prototype.Sg = function() {
        aa("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")
    };

    function Ub() {};
    var $a = {
        GD: function(a, b, c) {
            J.load("coordtransutils", function() {
                $a.xM(a, b, c)
            }, n)
        },
        FD: function(a, b, c) {
            J.load("coordtransutils", function() {
                $a.wM(a, b, c)
            }, n)
        }
    };

    function Q() {}
    Q.prototype = new Tb;
    u.extend(Q, {
        KH: 6370996.81,
        CA: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        vq: [75, 60, 45, 30, 15, 0],
        QH: [
            [1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7],
            [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7],
            [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37],
            [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06],
            [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4],
            [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]
        ],
        zA: [
            [-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5],
            [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5],
            [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5],
            [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5],
            [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5],
            [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]
        ],
        OT: function(a, b) {
            if (!a || !b) return 0;
            var c, d, a = this.Bb(a);
            if (!a) return 0;
            c = this.$i(a.lng);
            d = this.$i(a.lat);
            b = this.Bb(b);
            return !b ? 0 : this.le(c, this.$i(b.lng), d, this.$i(b.lat))
        },
        gp: function(a, b) {
            if (!a || !b) return 0;
            a.lng = this.jy(a.lng, -180, 180);
            a.lat = this.qy(a.lat, -74, 74);
            b.lng = this.jy(b.lng, -180, 180);
            b.lat = this.qy(b.lat, -74, 74);
            return this.le(this.$i(a.lng), this.$i(b.lng), this.$i(a.lat), this.$i(b.lat))
        },
        Bb: function(a) {
            if (a === o || a === i) return new I(0, 0);
            var b, c;
            b = new I(Math.abs(a.lng), Math.abs(a.lat));
            for (var d = 0; d < this.CA.length; d++)
                if (b.lat >= this.CA[d]) {
                    c = this.QH[d];
                    break
                }
            a = this.HD(a, c);
            return a = new I(a.lng.toFixed(6), a.lat.toFixed(6))
        },
        jb: function(a) {
            if (a === o || a === i || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat) return new I(0, 0);
            var b, c;
            a.lng = this.jy(a.lng, -180, 180);
            a.lat = this.qy(a.lat, -74, 74);
            b = new I(a.lng, a.lat);
            for (var d = 0; d < this.vq.length; d++)
                if (b.lat >= this.vq[d]) {
                    c = this.zA[d];
                    break
                }
            if (!c)
                for (d = this.vq.length - 1; 0 <= d; d--)
                    if (b.lat <= -this.vq[d]) {
                        c = this.zA[d];
                        break
                    }
            a = this.HD(a, c);
            return a = new I(a.lng.toFixed(2), a.lat.toFixed(2))
        },
        HD: function(a, b) {
            if (a && b) {
                var c = b[0] + b[1] * Math.abs(a.lng),
                    d = Math.abs(a.lat) / b[9],
                    d = b[2] + b[3] * d + b[4] * d * d + b[5] * d * d * d + b[6] * d * d * d * d + b[7] * d * d * d * d * d + b[8] * d * d * d * d * d * d,
                    c = c * (0 > a.lng ? -1 : 1),
                    d = d * (0 > a.lat ? -1 : 1);
                return new I(c, d)
            }
        },
        le: function(a, b, c, d) {
            return this.KH * Math.acos(Math.sin(c) * Math.sin(d) + Math.cos(c) * Math.cos(d) * Math.cos(b - a))
        },
        $i: function(a) {
            return Math.PI * a / 180
        },
        iV: function(a) {
            return 180 * a / Math.PI
        },
        qy: function(a, b, c) {
            b != o && (a = Math.max(a, b));
            c != o && (a = Math.min(a, c));
            return a
        },
        jy: function(a, b, c) {
            for (; a > c;) a -= c - b;
            for (; a < b;) a += c - b;
            return a
        }
    });
    u.extend(Q.prototype, {
        Ck: function(a) {
            return Q.jb(a)
        },
        Tf: function(a) {
            a = Q.jb(a);
            return new P(a.lng, a.lat)
        },
        Ji: function(a) {
            return Q.Bb(a)
        },
        Sg: function(a) {
            a = new I(a.x, a.y);
            return Q.Bb(a)
        },
        xb: function(a, b, c, d, e) {
            if (a) return a = this.Ck(a, e), b = this.Yb(b), new P(Math.round((a.lng - c.lng) / b + d.width / 2), Math.round((c.lat - a.lat) / b + d.height / 2))
        },
        fb: function(a, b, c, d, e) {
            if (a) return b = this.Yb(b), this.Ji(new I(c.lng + b * (a.x - d.width / 2), c.lat - b * (a.y - d.height / 2)), e)
        },
        Yb: function(a) {
            return Math.pow(2, 18 - a)
        }
    });

    function cb() {
        this.Xw = "bj"
    }
    cb.prototype = new Q;
    u.extend(cb.prototype, {
        Ck: function(a, b) {
            return this.RI(b, Q.jb(a))
        },
        Ji: function(a, b) {
            return Q.Bb(this.SI(b, a))
        },
        lngLatToPointFor3D: function(a, b) {
            var c = this,
                d = Q.jb(a);
            J.load("coordtrans", function() {
                var a = Ub.my(c.Xw || "bj", d),
                    a = new P(a.x, a.y);
                b && b(a)
            }, n)
        },
        pointToLngLatFor3D: function(a, b) {
            var c = this,
                d = new I(a.x, a.y);
            J.load("coordtrans", function() {
                var a = Ub.ly(c.Xw || "bj", d),
                    a = new I(a.lng, a.lat),
                    a = Q.Bb(a);
                b && b(a)
            }, n)
        },
        RI: function(a, b) {
            if (J.Po("coordtrans").de == J.Th.$m) {
                var c = Ub.my(a || "bj", b);
                return new I(c.x, c.y)
            }
            J.load("coordtrans", q());
            return new I(0, 0)
        },
        SI: function(a, b) {
            if (J.Po("coordtrans").de == J.Th.$m) {
                var c = Ub.ly(a || "bj", b);
                return new I(c.lng, c.lat)
            }
            J.load("coordtrans", q());
            return new I(0, 0)
        },
        Yb: function(a) {
            return Math.pow(2, 20 - a)
        }
    });

    function Vb() {
        this.Ib = "overlay"
    }
    u.lang.ha(Vb, u.lang.oa, "Overlay");
    Vb.uk = function(a) {
        a *= 1;
        return !a ? 0 : -1E5 * a << 1
    };
    u.extend(Vb.prototype, {
        $d: function(a) {
            if (!this.K && Sa(this.initialize) && (this.K = this.initialize(a))) this.K.style.WebkitUserSelect = "none";
            this.draw()
        },
        initialize: function() {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        draw: function() {
            aa("draw\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function() {
            this.K && this.K.parentNode && this.K.parentNode.removeChild(this.K);
            this.K = o;
            this.dispatchEvent(new N("onremove"))
        },
        H: function() {
            this.K && u.C.H(this.K)
        },
        show: function() {
            this.K && u.C.show(this.K)
        },
        Sf: function() {
            return !this.K || "none" == this.K.style.display || "hidden" == this.K.style.visibility ? p : n
        }
    });
    C.Wd(function(a) {
        function b(a, b) {
            var c = L("div"),
                g = c.style;
            g.position = "absolute";
            g.top = g.left = g.width = g.height = "0";
            g.zIndex = b;
            a.appendChild(c);
            return c
        }
        var c = a.G;
        c.re = a.re = b(a.platform, 200);
        a.od.Px = b(c.re, 800);
        a.od.Vy = b(c.re, 700);
        a.od.nE = b(c.re, 600);
        a.od.Qy = b(c.re, 500);
        a.od.IF = b(c.re, 400);
        a.od.Wy = b(c.re, 300);
        a.od.kS = b(c.re, 201);
        a.od.Xs = b(c.re, 200)
    });

    function bb() {
        u.lang.oa.call(this);
        Vb.call(this);
        this.map = o;
        this.Ca = n;
        this.ab = o;
        this.iB = 0
    }
    u.lang.ha(bb, Vb, "OverlayInternal");
    u.extend(bb.prototype, {
        initialize: function(a) {
            this.map = a;
            u.lang.oa.call(this, this.Q);
            return o
        },
        ky: t("map"),
        draw: q(),
        remove: function() {
            this.map = o;
            u.lang.hs(this.Q);
            Vb.prototype.remove.call(this)
        },
        H: function() {
            this.Ca != p && (this.Ca = p)
        },
        show: function() {
            this.Ca != n && (this.Ca = n)
        },
        Sf: function() {
            return !this.K ? p : !!this.Ca
        },
        Ea: t("K"),
        CG: function(a) {
            var a = a || {},
                b;
            for (b in a) this.z[b] = a[b]
        },
        Kt: ba("zIndex"),
        Gh: function() {
            this.z.Gh = n
        },
        xN: function() {
            this.z.Gh = p
        },
        Kl: ba("Ze"),
        Em: function() {
            this.Ze = o
        }
    });

    function Wb() {
        this.map = o;
        this.ka = {};
        this.Id = []
    }
    C.Wd(function(a) {
        var b = new Wb;
        b.map = a;
        a.ka = b.ka;
        a.Id = b.Id;
        a.addEventListener("load", function(a) {
            b.draw(a)
        });
        a.addEventListener("moveend", function(a) {
            b.draw(a)
        });
        u.R.W && 8 > u.R.W || "BackCompat" == document.compatMode ? a.addEventListener("zoomend", function(a) {
            setTimeout(function() {
                b.draw(a)
            }, 20)
        }) : a.addEventListener("zoomend", function(a) {
            b.draw(a)
        });
        a.addEventListener("maptypechange", function(a) {
            b.draw(a)
        });
        a.addEventListener("addoverlay", function(a) {
            a = a.target;
            if (a instanceof bb) b.ka[a.Q] || (b.ka[a.Q] = a);
            else {
                for (var d = p, e = 0, f = b.Id.length; e < f; e++)
                    if (b.Id[e] === a) {
                        d = n;
                        break
                    }
                d || b.Id.push(a)
            }
        });
        a.addEventListener("removeoverlay", function(a) {
            a = a.target;
            if (a instanceof bb) delete b.ka[a.Q];
            else
                for (var d = 0, e = b.Id.length; d < e; d++)
                    if (b.Id[d] === a) {
                        b.Id.splice(d, 1);
                        break
                    }
        });
        a.addEventListener("clearoverlays", function() {
            this.nc();
            for (var a in b.ka) b.ka[a].z.Gh && (b.ka[a].remove(), delete b.ka[a]);
            a = 0;
            for (var d = b.Id.length; a < d; a++) b.Id[a].Gh != p && (b.Id[a].remove(), b.Id[a] = o, b.Id.splice(a, 1), a--, d--)
        });
        a.addEventListener("infowindowopen", function() {
            var a = this.ab;
            a && (u.C.H(a.Ob), u.C.H(a.sb))
        });
        a.addEventListener("movestart", function() {
            this.Pf() && this.Pf().DC()
        });
        a.addEventListener("moveend", function() {
            this.Pf() && this.Pf().vC()
        })
    });
    Wb.prototype.draw = function() {
        if (C.dn) {
            var a = C.dn.hp(this.map);
            "canvas" == a.Ib && a.canvas && a.MI(a.canvas.getContext("2d"))
        }
        for (var b in this.ka) this.ka[b].draw();
        u.lc.Eb(this.Id, function(a) {
            a.draw()
        });
        this.map.G.Ra && this.map.G.Ra.ga();
        C.dn && a.Iz()
    };

    function Xb(a) {
        bb.call(this);
        a = a || {};
        this.z = {
            strokeColor: a.strokeColor || "#3a6bdb",
            fg: a.strokeWeight || 5,
            pf: a.strokeOpacity || 0.65,
            strokeStyle: a.strokeStyle || "solid",
            Gh: a.enableMassClear === p ? p : n,
            Bi: o,
            qk: o,
            Ie: a.enableEditing === n ? n : p,
            QF: 15,
            cS: p,
            ge: a.enableClicking === p ? p : n
        };
        0 >= this.z.fg && (this.z.fg = 5);
        if (0 > this.z.pf || 1 < this.z.pf) this.z.pf = 0.65;
        if (0 > this.z.kk || 1 < this.z.kk) this.z.kk = 0.65;
        "solid" != this.z.strokeStyle && "dashed" != this.z.strokeStyle && (this.z.strokeStyle = "solid");
        this.K = o;
        this.Du = new ab(0, 0);
        this.ce = [];
        this.Hb = [];
        this.za = {}
    }
    u.lang.ha(Xb, bb, "Graph");
    Xb.ys = function(a) {
        var b = [];
        if (!a) return b;
        Ua(a) && u.lc.Eb(a.split(";"), function(a) {
            a = a.split(",");
            b.push(new I(a[0], a[1]))
        });
        "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
        return b
    };
    Xb.hz = [0.09, 0.0050, 1.0E-4, 1.0E-5];
    u.extend(Xb.prototype, {
        initialize: function(a) {
            this.map = a;
            return o
        },
        draw: q(),
        vo: function(a) {
            this.ce.length = 0;
            this.aa = Xb.ys(a).slice(0);
            this.ig()
        },
        Dd: function(a) {
            this.vo(a)
        },
        ig: function() {
            if (this.aa) {
                var a = this;
                a.Du = new ab;
                u.lc.Eb(this.aa, function(b) {
                    a.Du.extend(b)
                })
            }
        },
        ud: t("aa"),
        Rk: function(a, b) {
            b && this.aa[a] && (this.ce.length = 0, this.aa[a] = new I(b.lng, b.lat), this.ig())
        },
        setStrokeColor: function(a) {
            this.z.strokeColor = a
        },
        NO: function() {
            return this.z.strokeColor
        },
        Up: function(a) {
            0 < a && (this.z.fg = a)
        },
        KE: function() {
            return this.z.fg
        },
        Sp: function(a) {
            a == i || (1 < a || 0 > a) || (this.z.pf = a)
        },
        OO: function() {
            return this.z.pf
        },
        Et: function(a) {
            1 < a || 0 > a || (this.z.kk = a)
        },
        oO: function() {
            return this.z.kk
        },
        Tp: function(a) {
            "solid" != a && "dashed" != a || (this.z.strokeStyle = a)
        },
        JE: function() {
            return this.z.strokeStyle
        },
        setFillColor: function(a) {
            this.z.fillColor = a || ""
        },
        nO: function() {
            return this.z.fillColor
        },
        Je: t("Du"),
        remove: function() {
            this.map && this.map.removeEventListener("onmousemove", this.Rq);
            bb.prototype.remove.call(this);
            this.ce.length = 0
        },
        Ie: function() {
            if (!(2 > this.aa.length)) {
                this.z.Ie = n;
                var a = this;
                J.load("poly", function() {
                    a.Pj()
                }, n)
            }
        },
        wN: function() {
            this.z.Ie = p;
            var a = this;
            J.load("poly", function() {
                a.ri()
            }, n)
        }
    });

    function Yb(a) {
        bb.call(this);
        this.K = this.map = o;
        this.z = {
            width: 0,
            height: 0,
            ma: new M(0, 0),
            opacity: 1,
            background: "transparent",
            Ts: 1,
            xF: "#000",
            NP: "solid",
            point: o
        };
        this.CG(a);
        this.point = this.z.point
    }
    u.lang.ha(Yb, bb, "Division");
    u.extend(Yb.prototype, {
        jj: function() {
            var a = this.z,
                b = this.content,
                c = ['<div class="BMap_Division" style="position:absolute;'];
            c.push("width:" + a.width + "px;display:block;");
            c.push("overflow:hidden;");
            "none" != a.borderColor && c.push("border:" + a.Ts + "px " + a.NP + " " + a.xF + ";");
            c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
            c.push("background:" + a.background + ";");
            c.push('z-index:60;">');
            c.push(b);
            c.push("</div>");
            this.K = vb(this.map.Ke().Vy, c.join(""))
        },
        initialize: function(a) {
            this.map = a;
            this.jj();
            this.K && u.D(this.K, F() ? "touchstart" : "mousedown", function(a) {
                B(a)
            });
            return this.K
        },
        draw: function() {
            var a = this.map.Vd(this.z.point);
            this.z.ma = new M(-Math.round(this.z.width / 2) - Math.round(this.z.Ts), -Math.round(this.z.height / 2) - Math.round(this.z.Ts));
            this.K.style.left = a.x + this.z.ma.width + "px";
            this.K.style.top = a.y + this.z.ma.height + "px"
        },
        U: function() {
            return this.z.point
        },
        NS: function() {
            return this.map.xb(this.U())
        },
        ga: function(a) {
            this.z.point = a;
            this.draw()
        },
        XQ: function(a, b) {
            this.z.width = Math.round(a);
            this.z.height = Math.round(b);
            this.K && (this.K.style.width = this.z.width + "px", this.K.style.height = this.z.height + "px", this.draw())
        }
    });

    function Zb(a, b, c) {
        a && b && (this.imageUrl = a, this.size = b, a = new M(Math.floor(b.width / 2), Math.floor(b.height / 2)), c = c || {}, a = c.anchor || a, b = c.imageOffset || new M(0, 0), this.imageSize = c.imageSize, this.anchor = a, this.imageOffset = b, this.infoWindowAnchor = c.infoWindowAnchor || this.anchor, this.printImageUrl = c.printImageUrl || "")
    }
    u.extend(Zb.prototype, {
        eR: function(a) {
            a && (this.imageUrl = a)
        },
        pR: function(a) {
            a && (this.printImageUrl = a)
        },
        Tc: function(a) {
            a && (this.size = new M(a.width, a.height))
        },
        Qb: function(a) {
            a && (this.anchor = new M(a.width, a.height))
        },
        Op: function(a) {
            a && (this.imageOffset = new M(a.width, a.height))
        },
        gR: function(a) {
            a && (this.infoWindowAnchor = new M(a.width, a.height))
        },
        cR: function(a) {
            a && (this.imageSize = new M(a.width, a.height))
        },
        toString: ca("Icon")
    });

    function $b(a, b) {
        u.lang.oa.call(this);
        this.content = a;
        this.map = o;
        b = b || {};
        this.z = {
            width: b.width || 0,
            height: b.height || 0,
            maxWidth: b.maxWidth || 730,
            ma: b.offset || new M(0, 0),
            title: b.title || "",
            Yy: b.maxContent || "",
            If: b.enableMaximize || p,
            Yo: b.enableAutoPan === p ? p : n,
            Ax: b.enableCloseOnClick === p ? p : n,
            margin: b.margin || [10, 10, 40, 10],
            Rw: b.collisions || [
                [10, 10],
                [10, 10],
                [10, 10],
                [10, 10]
            ],
            nP: p,
            fQ: b.onClosing || ca(n),
            Dx: b.enableMessage === p ? p : n,
            Fx: b.enableParano === n ? n : p,
            message: b.message,
            Hx: b.enableSearchTool === n ? n : p,
            Ks: b.headerContent || ""
        };
        if (0 != this.z.width && (220 > this.z.width && (this.z.width = 220), 730 < this.z.width)) this.z.width = 730;
        if (0 != this.z.height && (60 > this.z.height && (this.z.height = 60), 650 < this.z.height)) this.z.height = 650;
        if (0 != this.z.maxWidth && (220 > this.z.maxWidth && (this.z.maxWidth = 220), 730 < this.z.maxWidth)) this.z.maxWidth = 730;
        this.bd = p;
        this.$g = D.da;
        this.Oa = o;
        var c = this;
        J.load("infowindow", function() {
            c.vb()
        })
    }
    u.lang.ha($b, u.lang.oa, "InfoWindow");
    u.extend($b.prototype, {
        setWidth: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.z.width = a)
        },
        setHeight: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60), 650 < a && (a = 650)), this.z.height = a)
        },
        GG: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.z.maxWidth = a)
        },
        Tb: function(a) {
            this.z.title = a
        },
        getTitle: function() {
            return this.z.title
        },
        tc: ba("content"),
        yi: t("content"),
        Pp: function(a) {
            this.z.Yy = a + ""
        },
        gd: q(),
        Yo: function() {
            this.z.Yo = n
        },
        disableAutoPan: function() {
            this.z.Yo = p
        },
        enableCloseOnClick: function() {
            this.z.Ax = n
        },
        disableCloseOnClick: function() {
            this.z.Ax = p
        },
        If: function() {
            this.z.If = n
        },
        js: function() {
            this.z.If = p
        },
        show: function() {
            this.Ca = n
        },
        H: function() {
            this.Ca = p
        },
        close: function() {
            this.H()
        },
        Zs: function() {
            this.bd = n
        },
        restore: function() {
            this.bd = p
        },
        Sf: function() {
            return this.Ia()
        },
        Ia: ca(p),
        U: function() {
            if (this.Oa && this.Oa.U) return this.Oa.U()
        },
        Qf: function() {
            return this.z.ma
        }
    });
    Ia.prototype.bc = function(a, b) {
        if (a instanceof $b && b instanceof I) {
            var c = this.G;
            c.Ek ? c.Ek.ga(b) : (c.Ek = new T(b, {
                icon: new Zb(D.da + "blank.gif", {
                    width: 1,
                    height: 1
                }),
                offset: new M(0, 0),
                clickable: p
            }), c.Ek.HJ = 1);
            this.Aa(c.Ek);
            c.Ek.bc(a)
        }
    };
    Ia.prototype.nc = function() {
        var a = this.G.Ra || this.G.rj;
        a && a.Oa && a.Oa.nc()
    };
    bb.prototype.bc = function(a) {
        this.map && (this.map.nc(), a.Ca = n, this.map.G.rj = a, a.Oa = this, u.lang.oa.call(a, a.Q))
    };
    bb.prototype.nc = function() {
        this.map && this.map.G.rj && (this.map.G.rj.Ca = p, u.lang.hs(this.map.G.rj.Q), this.map.G.rj = o)
    };

    function ac(a, b) {
        bb.call(this);
        this.content = a;
        this.K = this.map = o;
        b = b || {};
        this.z = {
            width: 0,
            ma: b.offset || new M(0, 0),
            Rm: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px " + D.fontFamily,
                zIndex: "80",
                MozUserSelect: "none"
            },
            position: b.position || o,
            Gh: b.enableMassClear === p ? p : n,
            ge: n
        };
        0 > this.z.width && (this.z.width = 0);
        Bb(b.enableClicking) && (this.z.ge = b.enableClicking);
        this.point = this.z.position;
        var c = this;
        J.load("marker", function() {
            c.vb()
        })
    }
    u.lang.ha(ac, bb, "Label");
    u.extend(ac.prototype, {
        U: function() {
            return this.br ? this.br.U() : this.point
        },
        ga: function(a) {
            a instanceof I && !this.As() && (this.point = this.z.position = new I(a.lng, a.lat))
        },
        tc: ba("content"),
        Hz: function(a) {
            0 <= a && 1 >= a && (this.z.opacity = a)
        },
        Cd: function(a) {
            a instanceof M && (this.z.ma = new M(a.width, a.height))
        },
        Qf: function() {
            return this.z.ma
        },
        Uc: function(a) {
            a = a || {};
            this.z.Rm = u.extend(this.z.Rm, a)
        },
        Ug: function(a) {
            return this.Uc(a)
        },
        Tb: function(a) {
            this.z.title = a || ""
        },
        getTitle: function() {
            return this.z.title
        },
        FG: function(a) {
            this.point = (this.br = a) ? this.z.position = a.U() : this.z.position = o
        },
        As: function() {
            return this.br || o
        },
        yi: t("content")
    });

    function bc(a, b) {
        if (0 !== arguments.length) {
            bb.apply(this, arguments);
            b = b || {};
            this.z = {
                Wa: a,
                opacity: b.opacity || 1,
                zk: b.zk || "",
                Wl: b.Wl || 1,
                Vl: b.Vl || 18
            };
            var c = this;
            J.load("groundoverlay", function() {
                c.vb()
            })
        }
    }
    u.lang.ha(bc, bb, "GroundOverlay");
    u.extend(bc.prototype, {
        setBounds: function(a) {
            this.z.Wa = a
        },
        getBounds: function() {
            return this.z.Wa
        },
        setOpacity: function(a) {
            this.z.opacity = a
        },
        getOpacity: function() {
            return this.z.opacity
        },
        setImageURL: function(a) {
            this.z.zk = a
        },
        getImageURL: function() {
            return this.z.zk
        },
        setDispalyOnMinLevel: function(a) {
            this.z.Wl = a
        },
        getDispalyOnMinLevel: function() {
            return this.z.Wl
        },
        setDispalyOnMaxLevel: function(a) {
            this.z.Vl = a
        },
        getDispalyOnMaxLevel: function() {
            return this.z.Vl
        }
    });
    var cc = 3,
        dc = 4;

    function ec() {
        var a = document.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    }

    function fc(a, b) {
        var c = this;
        ec() && (a === i && aa(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")), "[object Array]" !== Object.prototype.toString.call(a) && aa(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")), b = b || {}, bb.apply(c, arguments), c.ia = {
            aa: a
        }, c.z = {
            shape: b.shape || cc,
            size: b.size || dc,
            color: b.color || "#fa937e",
            Gh: n
        }, this.Uv = [], this.qd = [], J.load("pointcollection", function() {
            for (var a = 0, b; b = c.Uv[a]; a++) c[b.method].apply(c, b.arguments);
            for (a = 0; b = c.qd[a]; a++) c[b.method].apply(c, b.arguments)
        }))
    }
    u.lang.ha(fc, bb, "PointCollection");
    u.extend(fc.prototype, {
        initialize: function(a) {
            this.Uv && this.Uv.push({
                method: "initialize",
                arguments: arguments
            })
        },
        setPoints: function(a) {
            this.qd && this.qd.push({
                method: "setPoints",
                arguments: arguments
            })
        },
        setStyles: function(a) {
            this.qd && this.qd.push({
                method: "setStyles",
                arguments: arguments
            })
        },
        clear: function() {
            this.qd && this.qd.push({
                method: "clear",
                arguments: arguments
            })
        },
        remove: function() {
            this.qd && this.qd.push({
                method: "remove",
                arguments: arguments
            })
        }
    });
    var gc = new Zb(D.da + "marker_red_sprite.png", new M(19, 25), {
            anchor: new M(10, 25),
            infoWindowAnchor: new M(10, 0)
        }),
        hc = new Zb(D.da + "marker_red_sprite.png", new M(20, 11), {
            anchor: new M(6, 11),
            imageOffset: new M(-19, -13)
        });

    function T(a, b) {
        bb.call(this);
        b = b || {};
        this.point = a;
        this.wn = this.map = o;
        this.z = {
            ma: b.offset || new M(0, 0),
            Rf: b.icon || gc,
            Vi: hc,
            title: b.title || "",
            label: o,
            mD: b.baseZIndex || 0,
            ge: n,
            wV: p,
            Oy: p,
            Gh: b.enableMassClear === p ? p : n,
            Xb: p,
            sG: b.raiseOnDrag === n ? n : p,
            xG: p,
            Lc: b.draggingCursor || D.Lc,
            rotation: b.rotation || 0
        };
        b.icon && !b.shadow && (this.z.Vi = o);
        b.enableDragging && (this.z.Xb = b.enableDragging);
        Bb(b.enableClicking) && (this.z.ge = b.enableClicking);
        var c = this;
        J.load("marker", function() {
            c.vb()
        })
    }
    T.zq = Vb.uk(-90) + 1E6;
    T.uA = T.zq + 1E6;
    u.lang.ha(T, bb, "Marker");
    u.extend(T.prototype, {
        Jb: function(a) {
            a instanceof Zb && (this.z.Rf = a)
        },
        cm: function() {
            return this.z.Rf
        },
        Jt: function(a) {
            a instanceof Zb && (this.z.Vi = a)
        },
        getShadow: function() {
            return this.z.Vi
        },
        Pk: function(a) {
            this.z.label = a || o
        },
        BE: function() {
            return this.z.label
        },
        Xb: function() {
            this.z.Xb = n
        },
        jx: function() {
            this.z.Xb = p
        },
        U: t("point"),
        ga: function(a) {
            a instanceof I && (this.point = new I(a.lng, a.lat))
        },
        Vg: function(a, b) {
            this.z.Oy = !!a;
            a && (this.OA = b || 0)
        },
        Tb: function(a) {
            this.z.title = a + ""
        },
        getTitle: function() {
            return this.z.title
        },
        Cd: function(a) {
            a instanceof M && (this.z.ma = a)
        },
        Qf: function() {
            return this.z.ma
        },
        Ok: ba("wn"),
        It: function(a) {
            this.z.rotation = a
        },
        HE: function() {
            return this.z.rotation
        }
    });

    function ic(a, b) {
        Xb.call(this, b);
        b = b || {};
        this.z.kk = b.fillOpacity ? b.fillOpacity : 0.65;
        this.z.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
        this.Dd(a);
        var c = this;
        J.load("poly", function() {
            c.vb()
        })
    }
    u.lang.ha(ic, Xb, "Polygon");
    u.extend(ic.prototype, {
        Dd: function(a, b) {
            this.Hl = Xb.ys(a).slice(0);
            var c = Xb.ys(a).slice(0);
            1 < c.length && c.push(new I(c[0].lng, c[0].lat));
            Xb.prototype.Dd.call(this, c, b)
        },
        Rk: function(a, b) {
            this.Hl[a] && (this.Hl[a] = new I(b.lng, b.lat), this.aa[a] = new I(b.lng, b.lat), 0 == a && !this.aa[0].ob(this.aa[this.aa.length - 1]) && (this.aa[this.aa.length - 1] = new I(b.lng, b.lat)), this.ig())
        },
        ud: function() {
            var a = this.Hl;
            0 == a.length && (a = this.aa);
            return a
        }
    });

    function jc(a, b) {
        Xb.call(this, b);
        this.vo(a);
        var c = this;
        J.load("poly", function() {
            c.vb()
        })
    }
    u.lang.ha(jc, Xb, "Polyline");

    function lc(a, b, c) {
        this.point = a;
        this.na = Math.abs(b);
        ic.call(this, [], c)
    }
    lc.hz = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
    u.lang.ha(lc, ic, "Circle");
    u.extend(lc.prototype, {
        initialize: function(a) {
            this.map = a;
            this.aa = this.Pq(this.point, this.na);
            this.ig();
            return o
        },
        Da: t("point"),
        Oe: function(a) {
            a && (this.point = a)
        },
        FE: t("na"),
        te: function(a) {
            this.na = Math.abs(a)
        },
        Pq: function(a, b) {
            if (!a || !b || !this.map) return [];
            for (var c = [], d = b / 6378800, e = Math.PI / 180 * a.lat, f = Math.PI / 180 * a.lng, g = 0; 360 > g; g += 9) {
                var j = Math.PI / 180 * g,
                    k = Math.asin(Math.sin(e) * Math.cos(d) + Math.cos(e) * Math.sin(d) * Math.cos(j)),
                    j = new I(((f - Math.atan2(Math.sin(j) * Math.sin(d) * Math.cos(e), Math.cos(d) - Math.sin(e) * Math.sin(k)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI), k * (180 / Math.PI));
                c.push(j)
            }
            d = c[0];
            c.push(new I(d.lng, d.lat));
            return c
        }
    });
    var mc = {};

    function nc(a) {
        this.map = a;
        this.Dk = [];
        this.Qe = [];
        this.rf = [];
        this.JM = 300;
        this.oz = 0;
        this.jf = {};
        this.Ah = {};
        this.Xf = 0;
        this.Jy = n;
        this.ND = {};
        this.$q = this.En(1);
        this.fe = this.En(2);
        this.co = this.En(3);
        a.platform.appendChild(this.$q);
        a.platform.appendChild(this.fe);
        a.platform.appendChild(this.co)
    }
    C.Wd(function(a) {
        var b = new nc(a);
        b.ea();
        a.Gb = b
    });
    u.extend(nc.prototype, {
        ea: function() {
            var a = this,
                b = a.map;
            b.addEventListener("loadcode", function() {
                a.Us()
            });
            b.addEventListener("addtilelayer", function(b) {
                a.Ef(b)
            });
            b.addEventListener("removetilelayer", function(b) {
                a.ag(b)
            });
            b.addEventListener("setmaptype", function(b) {
                a.nf(b)
            });
            b.addEventListener("zoomstartcode", function(b) {
                a.jc(b)
            });
            b.addEventListener("setcustomstyles", function(b) {
                a.Om(b.target);
                a.lf(n)
            })
        },
        Us: function() {
            var a = this;
            if (u.R.W) try {
                document.execCommand("BackgroundImageCache", p, n)
            } catch (b) {}
            this.loaded || a.Os();
            a.lf();
            this.loaded || (this.loaded = n, J.load("tile", function() {
                a.nI()
            }))
        },
        Os: function() {
            for (var a = this.map.la().$n, b = 0; b < a.length; b++) {
                var c = new oc;
                u.extend(c, a[b]);
                this.Dk.push(c);
                c.ea(this.map, this.$q)
            }
            this.Om()
        },
        En: function(a) {
            var b = L("div");
            b.style.position = "absolute";
            b.style.overflow = "visible";
            b.style.left = b.style.top = "0";
            b.style.zIndex = a;
            return b
        },
        wf: function() {
            this.Xf--;
            var a = this;
            this.Jy && (this.map.dispatchEvent(new N("onfirsttileloaded")), this.Jy = p);
            0 == this.Xf && (this.fh && (clearTimeout(this.fh), this.fh = o), this.fh = setTimeout(function() {
                if (a.Xf == 0) {
                    a.map.dispatchEvent(new N("ontilesloaded"));
                    a.Jy = n
                }
                a.fh = o
            }, 80))
        },
        wy: function(a, b) {
            return "TILE-" + b.Q + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Ms: function(a) {
            var b = a.gb;
            b && ub(b) && b.parentNode.removeChild(b);
            delete this.jf[a.name];
            a.loaded || (pc(a), a.gb = o, a.Fk = o)
        },
        km: function(a, b, c) {
            var d = this.map,
                e = d.la(),
                f = d.sa,
                g = d.ac,
                j = e.Yb(f),
                k = this.vE(),
                l = k[0],
                m = k[1],
                s = k[2],
                v = k[3],
                w = k[4],
                c = "undefined" != typeof c ? c : 0,
                e = e.k.Sb,
                k = d.Q.replace(/^TANGRAM_/, "");
            for (this.Xg ? this.Xg.length = 0 : this.Xg = []; l < s; l++)
                for (var z = m; z < v; z++) {
                    var A = l,
                        H = z;
                    this.Xg.push([A, H]);
                    A = k + "_" + b + "_" + A + "_" + H + "_" + f;
                    this.ND[A] = A
                }
            this.Xg.sort(function(a) {
                return function(b, c) {
                    return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                }
            }([w[0] - 1, w[1] - 1]));
            g = [Math.round(-g.lng / j), Math.round(g.lat / j)];
            l = -d.offsetY + d.height / 2;
            a.style.left = -d.offsetX + d.width / 2 + "px";
            a.style.top = l + "px";
            this.Tj ? this.Tj.length = 0 : this.Tj = [];
            l = 0;
            for (d = a.childNodes.length; l < d; l++) z = a.childNodes[l], z.SB = p, this.Tj.push(z);
            if (l = this.cz)
                for (var y in l) delete l[y];
            else this.cz = {};
            this.Uj ? this.Uj.length = 0 : this.Uj = [];
            l = 0;
            for (d = this.Xg.length; l < d; l++) {
                y = this.Xg[l][0];
                j = this.Xg[l][1];
                z = 0;
                for (m = this.Tj.length; z < m; z++)
                    if (s = this.Tj[z], s.id == k + "_" + b + "_" + y + "_" + j + "_" + f) {
                        s.SB = n;
                        this.cz[s.id] = s;
                        break
                    }
            }
            l = 0;
            for (d = this.Tj.length; l < d; l++) s = this.Tj[l], s.SB || this.Uj.push(s);
            this.Wz = [];
            z = (e + c) * this.map.F.devicePixelRatio;
            l = 0;
            for (d = this.Xg.length; l < d; l++) y = this.Xg[l][0], j = this.Xg[l][1], v = y * e + g[0] - c / 2, w = (-1 - j) * e + g[1] - c / 2, A = k + "_" + b + "_" + y + "_" + j + "_" + f, m = this.cz[A], s = o, m ? (s = m.style, s.left = v + "px", s.top = w + "px", m.xf || this.Wz.push([y, j, m])) : (0 < this.Uj.length ? (m = this.Uj.shift(), m.getContext("2d").clearRect(-c / 2, -c / 2, z, z), s = m.style) : (m = document.createElement("canvas"), s = m.style, s.position = "absolute", s.width = e + c + "px", s.height = e + c + "px", this.oF() && (s.WebkitTransform = "scale(1.001)"), m.setAttribute("width", z), m.setAttribute("height", z), a.appendChild(m)), m.id = A, s.left = v + "px", s.top = w + "px", -1 < A.indexOf("bg") && (v = "#F3F1EC", this.map.F.Tr && (v = this.map.F.Tr), s.background = v ? v : ""), this.Wz.push([y, j, m])), m.style.visibility = "";
            l = 0;
            for (d = this.Uj.length; l < d; l++) this.Uj[l].style.visibility = "hidden";
            return this.Wz
        },
        oF: function() {
            return /M040/i.test(navigator.userAgent)
        },
        vE: function() {
            var a = this.map,
                b = a.la(),
                c = a.sa;
            b.Yb(c);
            var c = b.PE(c),
                d = a.ac,
                e = Math.ceil(d.lng / c),
                f = Math.ceil(d.lat / c),
                b = b.k.Sb,
                c = [e, f, (d.lng - e * c) / c * b, (d.lat - f * c) / c * b];
            return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
        },
        uR: function(a, b, c, d) {
            var e = this;
            e.mT = b;
            var f = this.map.la(),
                g = e.wy(a, c),
                j = f.k.Sb,
                b = [a[0] * j + b[0], (-1 - a[1]) * j + b[1]],
                k = this.jf[g];
            k && k.gb ? (sb(k.gb, b), d && (d = new P(a[0], a[1]), f = this.map.F.vd ? this.map.F.vd.style : "normal", d = c.getTilesUrl(d, a[2], f), k.loaded = p, rc(k, d)), k.loaded ? this.wf() : sc(k, function() {
                e.wf()
            })) : (k = this.Ah[g]) && k.gb ? (c.tb.insertBefore(k.gb, c.tb.lastChild), this.jf[g] = k, sb(k.gb, b), d && (d = new P(a[0], a[1]), f = this.map.F.vd ? this.map.F.vd.style : "normal", d = c.getTilesUrl(d, a[2], f), k.loaded = p, rc(k, d)), k.loaded ? this.wf() : sc(k, function() {
                e.wf()
            })) : (k = j * Math.pow(2, f.pk() - a[2]), new I(a[0] * k, a[1] * k), d = new P(a[0], a[1]), f = this.map.F.vd ? this.map.F.vd.style : "normal", d = c.getTilesUrl(d, a[2], f), k = new tc(this, d, b, a, c), sc(k, function() {
                e.wf()
            }), uc(k), this.jf[g] = k)
        },
        wf: function() {
            this.Xf--;
            var a = this;
            0 == this.Xf && (this.fh && (clearTimeout(this.fh), this.fh = o), this.fh = setTimeout(function() {
                if (a.Xf == 0) {
                    a.map.dispatchEvent(new N("ontilesloaded"));
                    if (ra) {
                        if (oa && pa && qa) {
                            var b = Xa(),
                                c = a.map.pb();
                            setTimeout(function() {
                                Ma(5030, {
                                    load_script_time: pa - oa,
                                    load_tiles_time: b - qa,
                                    map_width: c.width,
                                    map_height: c.height,
                                    map_size: c.width * c.height
                                })
                            }, 1E4);
                            sa.Cc("img_fisrt_loaded");
                            sa.Cc("map_width", c.width);
                            sa.Cc("map_height", c.height);
                            sa.Cc("map_size", c.width * c.height);
                            sa.wt()
                        }
                        ra = p
                    }
                }
                a.fh = o
            }, 80))
        },
        wy: function(a, b) {
            return this.map.la() === La ? "TILE-" + b.Q + "-" + this.map.Xr + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.Q + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Ms: function(a) {
            var b = a.gb;
            b && (vc(b), ub(b) && b.parentNode.removeChild(b));
            delete this.jf[a.name];
            a.loaded || (vc(b), pc(a), a.gb = o, a.Fk = o)
        },
        lf: function(a) {
            var b = this;
            if (b.map.la() == La) J.load("coordtrans", function() {
                b.map.wb || (b.map.wb = La.xi(b.map.Rl), b.map.Xr = La.uE(b.map.wb));
                b.aC()
            }, n);
            else {
                if (a && a)
                    for (var c in this.Ah) delete this.Ah[c];
                b.aC(a)
            }
        },
        aC: function(a) {
            for (var b = this.Dk.concat(this.Qe), c = b.length, d = 0; d < c; d++) {
                var e = b[d];
                if (e.Pc && l.sa < e.Pc) break;
                if (e.Ur) {
                    var f = this.tb = e.tb;
                    if (a) {
                        var g = f;
                        if (g && g.childNodes)
                            for (var j = g.childNodes.length, k = j - 1; 0 <= k; k--) j = g.childNodes[k], g.removeChild(j), j = o
                    }
                    if (this.map.Lb()) {
                        this.fe.style.display = "block";
                        f.style.display = "none";
                        this.map.dispatchEvent(new N("vectorchanged"), {
                            isvector: n
                        });
                        continue
                    } else f.style.display = "block", this.fe.style.display = "none", this.map.dispatchEvent(new N("vectorchanged"), {
                        isvector: p
                    })
                }
                if (!(e.um && !this.map.Lb() || e.nF && this.map.Lb())) {
                    var l = this.map,
                        m = l.la(),
                        f = m.im(),
                        j = l.sa,
                        s = l.ac;
                    m == La && s.ob(new I(0, 0)) && (s = l.ac = f.Ck(l.Gf, l.wb));
                    var v = m.Yb(j),
                        j = m.PE(j),
                        f = Math.ceil(s.lng / j),
                        g = Math.ceil(s.lat / j),
                        w = m.k.Sb,
                        j = [f, g, (s.lng - f * j) / j * w, (s.lat - g * j) / j * w],
                        k = j[0] - Math.ceil((l.width / 2 - j[2]) / w),
                        f = j[1] - Math.ceil((l.height / 2 - j[3]) / w),
                        g = j[0] + Math.ceil((l.width / 2 + j[2]) / w),
                        z = 0;
                    m === La && 15 == l.V() && (z = 1);
                    m = j[1] + Math.ceil((l.height / 2 + j[3]) / w) + z;
                    this.jD = new I(s.lng, s.lat);
                    var A = this.jf,
                        w = -this.jD.lng / v,
                        z = this.jD.lat / v,
                        v = [Math.ceil(w), Math.ceil(z)],
                        s = l.V(),
                        H;
                    for (H in A) {
                        var y = A[H],
                            K = y.info;
                        (K[2] != s || K[2] == s && (k > K[0] || g <= K[0] || f > K[1] || m <= K[1])) && this.Ms(y)
                    }
                    A = -l.offsetX + l.width / 2;
                    y = -l.offsetY + l.height / 2;
                    e.tb && (e.tb.style.left = Math.ceil(w + A) - v[0] + "px", e.tb.style.top = Math.ceil(z + y) - v[1] + "px");
                    w = [];
                    for (l.vw = []; k < g; k++)
                        for (z = f; z < m; z++) w.push([k, z]), l.vw.push({
                            x: k,
                            y: z
                        });
                    w.sort(function(a) {
                        return function(b, c) {
                            return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                        }
                    }([j[0] - 1, j[1] - 1]));
                    if (!e.BK) {
                        j = w.length;
                        this.Xf += j;
                        for (k = 0; k < j; k++) this.uR([w[k][0], w[k][1], s], v, e, a)
                    }
                }
            }
        },
        Ef: function(a) {
            var b = this,
                c = a.target,
                a = b.map.Lb();
            if (c instanceof Za) a && !c.Ak && (c.ea(this.map, this.fe), c.Ak = n);
            else if (c.qf && this.map.Ef(c.qf), c.um) {
                for (a = 0; a < b.rf.length; a++)
                    if (b.rf[a] == c) return;
                J.load("vector", function() {
                    c.ea(b.map, b.fe);
                    b.rf.push(c)
                }, n)
            } else {
                for (a = 0; a < b.Qe.length; a++)
                    if (b.Qe[a] == c) return;
                c.ea(this.map, this.co);
                b.Qe.push(c)
            }
        },
        ag: function(a) {
            var a = a.target,
                b = this.map.Lb();
            if (a instanceof Za) b && a.Ak && (a.remove(), a.Ak = p);
            else {
                a.qf && this.map.ag(a.qf);
                if (a.um)
                    for (var b = 0, c = this.rf.length; b < c; b++) a == this.rf[b] && this.rf.splice(b, 1);
                else {
                    b = 0;
                    for (c = this.Qe.length; b < c; b++) a == this.Qe[b] && this.Qe.splice(b, 1)
                }
                a.remove()
            }
        },
        nf: function() {
            for (var a = this.Dk, b = 0, c = a.length; b < c; b++) a[b].remove();
            delete this.tb;
            this.Dk = [];
            this.Ah = this.jf = {};
            this.Os();
            this.lf()
        },
        jc: function() {
            var a = this;
            a.Gc && u.C.H(a.Gc);
            setTimeout(function() {
                a.lf();
                a.map.dispatchEvent(new N("onzoomend"))
            }, 10)
        },
        nV: q(),
        Om: function(a) {
            if (!this.map.Lb() && (a ? this.map.F.BR = a : a = this.map.F.BR, a))
                for (var b = o, b = "2" == C.Zt ? [C.url.proto + C.url.domain.main_domain_cdn.other[0] + "/"] : [C.url.proto + C.url.domain.main_domain_cdn.baidu[0] + "/", C.url.proto + C.url.domain.main_domain_cdn.baidu[1] + "/", C.url.proto + C.url.domain.main_domain_cdn.baidu[2] + "/"], c = 0, d; d = this.Dk[c]; c++)
                    if (d.qR == n) {
                        d.getTilesUrl = function(c, d) {
                            var g = c.x,
                                j = c.y,
                                k = "customimage/tile?&x=" + g + "&y=" + j + "&z=" + d + "&udt=20140905",
                                k = a.styleStr ? k + ("&styles=" + encodeURIComponent(a.styleStr)) : k + ("&customid=" + a.style);
                            return b[Math.abs(g + j) % b.length] + k
                        };
                        break
                    }
        }
    });

    function tc(a, b, c, d, e) {
        this.Fk = a;
        this.position = c;
        this.Dq = [];
        this.name = a.wy(d, e);
        this.info = d;
        this.TC = e.Ap();
        d = L("img");
        tb(d);
        d.pE = p;
        var f = d.style,
            a = a.map.la();
        f.position = "absolute";
        f.border = "none";
        f.width = a.k.Sb + "px";
        f.height = a.k.Sb + "px";
        f.left = c[0] + "px";
        f.top = c[1] + "px";
        f.maxWidth = "none";
        this.gb = d;
        this.src = b;
        wc && (this.gb.style.opacity = 0);
        var g = this;
        this.gb.onload = function() {
            C.PP.UI();
            g.loaded = n;
            if (g.Fk) {
                var a = g.Fk,
                    b = a.Ah;
                if (!b[g.name]) {
                    a.oz++;
                    b[g.name] = g
                }
                if (g.gb && !ub(g.gb) && e.tb) {
                    e.tb.appendChild(g.gb);
                    if (u.R.W <= 6 && u.R.W > 0 && g.TC) g.gb.style.cssText = g.gb.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + g.src + '",sizingMethod=scale);')
                }
                var c = a.oz - a.JM,
                    d;
                for (d in b) {
                    if (c <= 0) break;
                    if (!a.jf[d]) {
                        b[d].Fk = o;
                        var f = b[d].gb;
                        if (f && f.parentNode) {
                            f.parentNode.removeChild(f);
                            vc(f)
                        }
                        f = o;
                        b[d].gb = o;
                        delete b[d];
                        a.oz--;
                        c--
                    }
                }
                wc && new ob({
                    Mc: 20,
                    duration: 200,
                    qa: function(a) {
                        if (g.gb && g.gb.style) g.gb.style.opacity = a * 1
                    },
                    finish: function() {
                        g.gb && g.gb.style && delete g.gb.style.opacity
                    }
                });
                pc(g)
            }
        };
        this.gb.onerror = function() {
            pc(g);
            if (g.Fk) {
                var a = g.Fk.map.la();
                if (a.k.Ix) {
                    g.error = n;
                    g.gb.src = a.k.Ix;
                    g.gb && !ub(g.gb) && e.tb.appendChild(g.gb)
                }
            }
        };
        d = o
    }

    function sc(a, b) {
        a.Dq.push(b)
    }

    function uc(a) {
        a.gb.src = 0 < u.R.W && 6 >= u.R.W && a.TC ? D.da + "blank.gif" : "" !== a.src && a.gb.src == a.src ? a.src + "&t = " + Date.now() : a.src
    }

    function pc(a) {
        for (var b = 0; b < a.Dq.length; b++) a.Dq[b]();
        a.Dq.length = 0
    }

    function vc(a) {
        if (a) {
            a.onload = a.onerror = o;
            var b = a.attributes,
                c, d, e;
            if (b) {
                d = b.length;
                for (c = 0; c < d; c += 1) e = b[c].name, Sa(a[e]) && (a[e] = o)
            }
            if (b = a.children) {
                d = b.length;
                for (c = 0; c < d; c += 1) vc(a.children[c])
            }
        }
    }

    function rc(a, b) {
        a.src = b;
        uc(a)
    }
    var wc = !u.R.W || 8 < u.R.W;

    function oc(a) {
        this.Am = a || {};
        this.dN = this.Am.copyright || o;
        this.ZR = this.Am.transparentPng || p;
        this.Ur = this.Am.baseLayer || p;
        this.zIndex = this.Am.zIndex || 0;
        this.Q = oc.qK++
    }
    oc.qK = 0;
    u.lang.ha(oc, u.lang.oa, "TileLayer");
    u.extend(oc.prototype, {
        ea: function(a, b) {
            this.Ur && (this.zIndex = -100);
            this.map = a;
            if (!this.tb) {
                var c = L("div"),
                    d = c.style;
                d.position = "absolute";
                d.overflow = "visible";
                d.zIndex = this.zIndex;
                d.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
                d.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
                b.appendChild(c);
                this.tb = c
            }
            c = a.la();
            a.Gi() && c == Ja && (c.k.Sb = 128, d = function(a) {
                return Math.pow(2, 18 - a) * 2
            }, c.Yb = d, c.k.Bd.Yb = d)
        },
        remove: function() {
            this.tb && this.tb.parentNode && (this.tb.innerHTML = "", this.tb.parentNode.removeChild(this.tb));
            delete this.tb
        },
        Ap: t("ZR"),
        getTilesUrl: function(a, b) {
            var c = "";
            this.Am.tileUrlTemplate && (c = this.Am.tileUrlTemplate.replace(/\{X\}/, a.x), c = c.replace(/\{Y\}/, a.y), c = c.replace(/\{Z\}/, b));
            return c
        },
        nk: t("dN"),
        la: function() {
            return this.mb || Ja
        }
    });

    function xc(a, b) {
        Cb(a) ? b = a || {} : (b = b || {}, b.databoxId = a);
        this.k = {
            OD: b.databoxId,
            Mf: b.geotableId,
            vt: b.q || "",
            fq: b.tags || "",
            filter: b.filter || "",
            Rt: b.sortby || "",
            zR: b.styleId || "",
            Qj: b.ak || na,
            Sr: b.age || 36E5,
            zIndex: 11,
            LP: "VectorCloudLayer",
            Hi: b.hotspotName || "vector_md_" + (1E5 * Math.random()).toFixed(0),
            pM: "LBS\u4e91\u9ebb\u70b9\u5c42"
        };
        this.um = n;
        oc.call(this, this.k);
        this.qN = C.Bc + "geosearch/detail/";
        this.rN = C.Bc + "geosearch/v2/detail/";
        this.pm = {}
    }
    u.ha(xc, oc, "VectorCloudLayer");

    function yc(a) {
        a = a || {};
        this.k = u.extend(a, {
            zIndex: 1,
            LP: "VectorTrafficLayer",
            pM: "\u77e2\u91cf\u8def\u51b5\u5c42"
        });
        this.um = n;
        oc.call(this, this.k);
        this.VR = C.url.proto + C.url.domain.vector_traffic + "/gvd/?qt=lgvd&styles=pl&layers=tf";
        this.kc = {
            "0": [2, 1354709503, 2, 2, 0, [], 0, 0],
            1: [2, 1354709503, 3, 2, 0, [], 0, 0],
            10: [2, -231722753, 2, 2, 0, [], 0, 0],
            11: [2, -231722753, 3, 2, 0, [], 0, 0],
            12: [2, -231722753, 4, 2, 0, [], 0, 0],
            13: [2, -231722753, 5, 2, 0, [], 0, 0],
            14: [2, -231722753, 6, 2, 0, [], 0, 0],
            15: [2, -1, 4, 0, 0, [], 0, 0],
            16: [2, -1, 5.5, 0, 0, [], 0, 0],
            17: [2, -1, 7, 0, 0, [], 0, 0],
            18: [2, -1, 8.5, 0, 0, [], 0, 0],
            19: [2, -1, 10, 0, 0, [], 0, 0],
            2: [2, 1354709503, 4, 2, 0, [], 0, 0],
            3: [2, 1354709503, 5, 2, 0, [], 0, 0],
            4: [2, 1354709503, 6, 2, 0, [], 0, 0],
            5: [2, -6350337, 2, 2, 0, [], 0, 0],
            6: [2, -6350337, 3, 2, 0, [], 0, 0],
            7: [2, -6350337, 4, 2, 0, [], 0, 0],
            8: [2, -6350337, 5, 2, 0, [], 0, 0],
            9: [2, -6350337, 6, 2, 0, [], 0, 0]
        }
    }
    u.ha(yc, oc, "VectorTrafficLayer");

    function Za(a) {
        this.KM = [C.url.proto + C.url.domain.TILE_ONLINE_URLS[1] + "/gvd/?", C.url.proto + C.url.domain.TILE_ONLINE_URLS[2] + "/gvd/?", C.url.proto + C.url.domain.TILE_ONLINE_URLS[3] + "/gvd/?", C.url.proto + C.url.domain.TILE_ONLINE_URLS[4] + "/gvd/?"];
        this.k = {
            mE: p
        };
        for (var b in a) this.k[b] = a[b];
        this.Ag = this.gh = this.gc = this.B = this.A = o;
        this.vF = 0;
        var c = this;
        J.load("vector", function() {
            c.we()
        })
    }
    u.extend(Za.prototype, {
        ea: function(a, b) {
            this.A = a;
            this.B = b
        },
        remove: function() {
            this.B = this.A = o
        }
    });

    function zc(a) {
        oc.call(this, a);
        this.k = a || {};
        this.nF = n;
        this.qf = new yc;
        this.qf.Wt = this;
        if (this.k.predictDate) {
            if (1 > this.k.predictDate.weekday || 7 < this.k.predictDate.weekday) this.k.predictDate = 1;
            if (0 > this.k.predictDate.hour || 23 < this.k.predictDate.hour) this.k.predictDate.hour = 0
        }
        this.XL = C.url.proto + C.url.domain.traffic + ":8002/traffic/"
    }
    zc.prototype = new oc;
    zc.prototype.ea = function(a, b) {
        oc.prototype.ea.call(this, a, b);
        this.A = a
    };
    zc.prototype.Ap = ca(n);
    zc.prototype.getTilesUrl = function(a, b) {
        var c = "";
        this.k.predictDate ? c = "HistoryService?day=" + (this.k.predictDate.weekday - 1) + "&hour=" + this.k.predictDate.hour + "&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (new Date).getTime() + "&", this.A.Gi() || (c += "label=web2D&v=016&"));
        return (this.XL + c + "level=" + b + "&x=" + a.x + "&y=" + a.y).replace(/-(\d+)/gi, "M$1")
    };
    var Ac = [C.url.proto + C.url.domain.TILES_YUN_HOST[0] + "/georender/gss", C.url.proto + C.url.domain.TILES_YUN_HOST[1] + "/georender/gss", C.url.proto + C.url.domain.TILES_YUN_HOST[2] + "/georender/gss", C.url.proto + C.url.domain.TILES_YUN_HOST[3] + "/georender/gss"],
        Bc = 100;

    function jb(a, b) {
        oc.call(this);
        var c = this;
        this.nF = n;
        var d = p;
        try {
            document.createElement("canvas").getContext("2d"), d = n
        } catch (e) {
            d = p
        }
        d && (this.qf = new xc(a, b), this.qf.Wt = this);
        Cb(a) ? b = a || {} : (c.Hn = a, b = b || {});
        b.geotableId && (c.We = b.geotableId);
        b.databoxId && (c.Hn = b.databoxId);
        d = C.Bc + "geosearch";
        c.Yc = {
            qQ: b.pointDensity || Bc,
            kP: d + "/detail/",
            lP: d + "/v2/detail/",
            Sr: b.age || 36E5,
            vt: b.q || "",
            KR: "png",
            jU: [5, 5, 5, 5],
            KP: {
                backgroundColor: "#FFFFD5",
                borderColor: "#808080"
            },
            Qj: b.ak || na,
            fq: b.tags || "",
            filter: b.filter || "",
            Rt: b.sortby || "",
            Hi: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0)
        };
        J.load("clayer", function() {
            c.Hd()
        })
    }
    jb.prototype = new oc;
    jb.prototype.ea = function(a, b) {
        oc.prototype.ea.call(this, a, b);
        this.A = a
    };
    jb.prototype.getTilesUrl = function(a, b) {
        var c = a.x,
            d = a.y,
            e = this.Yc,
            c = Ac[Math.abs(c + d) % Ac.length] + "/image?grids=" + c + "_" + d + "_" + b + "&q=" + e.vt + "&tags=" + e.fq + "&filter=" + e.filter + "&sortby=" + e.Rt + "&ak=" + this.Yc.Qj + "&age=" + e.Sr + "&page_size=" + e.qQ + "&format=" + e.KR;
        this.We ? c += "&geotable_id=" + this.We : this.Hn && (c += "&databox_id=" + this.Hn);
        return c
    };
    jb.zL = /^point\(|\)$/ig;
    jb.AL = /\s+/;
    jb.CL = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function Cc(a, b, c) {
        this.be = a;
        this.$n = b instanceof oc ? [b] : b.slice(0);
        c = c || {};
        this.k = {
            LR: c.tips || "",
            Ry: "",
            Pc: c.minZoom || 3,
            yd: c.maxZoom || 18,
            iP: c.minZoom || 3,
            hP: c.maxZoom || 18,
            Sb: 256,
            JR: c.textColor || "black",
            Ix: c.errorImageUrl || "",
            Bd: c.projection || new Q
        };
        1 <= this.$n.length && (this.$n[0].Ur = n);
        u.extend(this.k, c)
    }
    u.extend(Cc.prototype, {
        getName: t("be"),
        pp: function() {
            return this.k.LR
        },
        UT: function() {
            return this.k.Ry
        },
        TO: function() {
            return this.$n[0]
        },
        fU: t("$n"),
        UO: function() {
            return this.k.Sb
        },
        dm: function() {
            return this.k.Pc
        },
        pk: function() {
            return this.k.yd
        },
        setMaxZoom: function(a) {
            this.k.yd = a
        },
        op: function() {
            return this.k.JR
        },
        im: function() {
            return this.k.Bd
        },
        PT: function() {
            return this.k.Ix
        },
        UO: function() {
            return this.k.Sb
        },
        Yb: function(a) {
            return Math.pow(2, 18 - a)
        },
        PE: function(a) {
            return this.Yb(a) * this.k.Sb
        }
    });
    var Dc = [C.url.proto + C.url.domain.TILE_BASE_URLS[0] + "/it/", C.url.proto + C.url.domain.TILE_BASE_URLS[1] + "/it/", C.url.proto + C.url.domain.TILE_BASE_URLS[2] + "/it/", C.url.proto + C.url.domain.TILE_BASE_URLS[3] + "/it/", C.url.proto + C.url.domain.TILE_BASE_URLS[4] + "/it/"],
        Ec = [C.url.proto + C.url.domain.TILE_ONLINE_URLS[0] + "/tile/", C.url.proto + C.url.domain.TILE_ONLINE_URLS[1] + "/tile/", C.url.proto + C.url.domain.TILE_ONLINE_URLS[2] + "/tile/", C.url.proto + C.url.domain.TILE_ONLINE_URLS[3] + "/tile/", C.url.proto + C.url.domain.TILE_ONLINE_URLS[4] + "/tile/"],
        Fc = {
            dark: "dl",
            light: "ll",
            normal: "pl"
        },
        Gc = new oc;
    Gc.qR = n;
    Gc.getTilesUrl = function(a, b, c) {
        var d = a.x,
            a = a.y,
            e = "pl";
        this.map.Gi();
        e = Fc[c];
        return (Ec[Math.abs(d + a) % Ec.length] + "?qt=tile&x=" + (d + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + e + (6 == u.R.W ? "&color_dep=32&colors=50" : "") + "&udt=20140928").replace(/-(\d+)/gi, "M$1")
    };
    var Ja = new Cc("\u5730\u56fe", Gc, {
            tips: "\u663e\u793a\u666e\u901a\u5730\u56fe"
        }),
        Hc = new oc;
    Hc.UG = [C.url.proto + C.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", C.url.proto + C.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/", C.url.proto + C.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", C.url.proto + C.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"];
    Hc.getTilesUrl = function(a, b) {
        var c = a.x,
            d = a.y,
            e = 256 * Math.pow(2, 20 - b),
            d = Math.round((9998336 - e * d) / e) - 1;
        return url = this.UG[Math.abs(c + d) % this.UG.length] + this.map.wb + "/" + this.map.Xr + "/3/lv" + (21 - b) + "/" + c + "," + d + ".jpg"
    };
    var La = new Cc("\u4e09\u7ef4", Hc, {
        tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
        minZoom: 15,
        maxZoom: 20,
        textColor: "white",
        projection: new cb
    });
    La.Yb = function(a) {
        return Math.pow(2, 20 - a)
    };
    La.xi = function(a) {
        if (!a) return "";
        var b = D.Lw,
            c;
        for (c in b)
            if (-1 < a.search(c)) return b[c].mt;
        return ""
    };
    La.uE = function(a) {
        return {
            bj: 2,
            gz: 1,
            sz: 14,
            sh: 4
        }[a]
    };
    var Ic = new oc({
        Ur: n
    });
    Ic.getTilesUrl = function(a, b) {
        var c = a.x,
            d = a.y;
        return (Dc[Math.abs(c + d) % Dc.length] + "u=x=" + c + ";y=" + d + ";z=" + b + ";v=009;type=sate&fm=46&udt=20141015").replace(/-(\d+)/gi, "M$1")
    };
    var Ta = new Cc("\u536b\u661f", Ic, {
            tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
            minZoom: 1,
            maxZoom: 19,
            textColor: "white"
        }),
        Jc = new oc({
            transparentPng: n
        });
    Jc.getTilesUrl = function(a, b) {
        var c = a.x,
            d = a.y;
        return (Ec[Math.abs(c + d) % Ec.length] + "?qt=tile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (d + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == u.R.W ? "&color_dep=32&colors=50" : "") + "&udt=20141015").replace(/-(\d+)/gi, "M$1")
    };
    var Na = new Cc("\u6df7\u5408", [Ic, Jc], {
        tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
        labelText: "\u8def\u7f51",
        minZoom: 1,
        maxZoom: 19,
        textColor: "white"
    });
    var Kc = 1,
        U = {};
    window.rS = U;

    function V(a, b) {
        u.lang.oa.call(this);
        this.Ic = {};
        this.Qk(a);
        b = b || {};
        b.S = b.renderOptions || {};
        this.k = {
            S: {
                wa: b.S.panel || o,
                map: b.S.map || o,
                Ff: b.S.autoViewport || n,
                Mp: b.S.selectFirstResult,
                up: b.S.highlightMode,
                Xb: b.S.enableDragging || p
            },
            gt: b.onSearchComplete || q(),
            cG: b.onMarkersSet || q(),
            bG: b.onInfoHtmlSet || q(),
            eG: b.onResultsHtmlSet || q(),
            aG: b.onGetBusListComplete || q(),
            $F: b.onGetBusLineComplete || q(),
            ZF: b.onBusListHtmlSet || q(),
            YF: b.onBusLineHtmlSet || q(),
            dz: b.onPolylinesSet || q(),
            Fm: b.reqFrom || ""
        };
        this.k.S.Ff = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport : n;
        this.k.S.wa = u.Ub(this.k.S.wa)
    }
    u.ha(V, u.lang.oa);
    u.extend(V.prototype, {
        getResults: function() {
            return this.Wb ? this.dh : this.T
        },
        enableAutoViewport: function() {
            this.k.S.Ff = n
        },
        disableAutoViewport: function() {
            this.k.S.Ff = p
        },
        Qk: function(a) {
            a && (this.Ic.src = a)
        },
        Jz: function(a) {
            this.k.gt = a || q()
        },
        setMarkersSetCallback: function(a) {
            this.k.cG = a || q()
        },
        setPolylinesSetCallback: function(a) {
            this.k.dz = a || q()
        },
        setInfoHtmlSetCallback: function(a) {
            this.k.bG = a || q()
        },
        setResultsHtmlSetCallback: function(a) {
            this.k.eG = a || q()
        },
        rk: t("de")
    });
    var Lc = {
        XH: C.Bc,
        Ya: function(a, b, c, d, e) {
            var f = (1E5 * Math.random()).toFixed(0);
            C._rd["_cbk" + f] = function(b) {
                c = c || {};
                a && a(b, c);
                delete C._rd["_cbk" + f]
            };
            d = d || "";
            b = c && c.iH ? Ab(b, encodeURI) : Ab(b, encodeURIComponent);
            d = this.XH + d + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
            e || (d += "&res=api");
            eb(d + ("&callback=BMap._rd._cbk" + f))
        }
    };
    window.xS = Lc;
    C._rd = {};
    var O = {};
    window.wS = O;
    O.uG = function(a) {
        return a.replace(/<\/?b>/g, "")
    };
    O.mQ = function(a) {
        return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
    };
    O.nQ = function(a, b) {
        return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1")
    };
    var Mc = 2,
        Oc = 3,
        Pc = 0,
        Qc = "bt",
        Rc = "nav",
        Sc = "walk",
        Tc = "bl",
        Uc = "bsl",
        Vc = 14,
        Wc = 15,
        Xc = 18,
        Yc = 20,
        Zc = 31;
    C.I = window.Instance = u.lang.ad;

    function $c(a, b, c) {
        u.lang.oa.call(this);
        if (a) {
            this.Ga = "object" == typeof a ? a : u.Ub(a);
            this.page = 1;
            this.Qc = 100;
            this.kD = "pg";
            this.Ne = 4;
            this.rD = b;
            this.update = n;
            a = {
                page: 1,
                ue: 100,
                Qc: 100,
                Ne: 4,
                kD: "pg",
                update: n
            };
            c || (c = a);
            for (var d in c) "undefined" != typeof c[d] && (this[d] = c[d]);
            this.qa()
        }
    }
    u.extend($c.prototype, {
        qa: function() {
            this.ea()
        },
        ea: function() {
            this.PM();
            this.Ga.innerHTML = this.gN()
        },
        PM: function() {
            isNaN(parseInt(this.page)) && (this.page = 1);
            isNaN(parseInt(this.Qc)) && (this.Qc = 1);
            1 > this.page && (this.page = 1);
            1 > this.Qc && (this.Qc = 1);
            this.page > this.Qc && (this.page = this.Qc);
            this.page = parseInt(this.page);
            this.Qc = parseInt(this.Qc)
        },
        YT: function() {
            location.search.match(RegExp("[?&]?" + this.kD + "=([^&]*)[&$]?", "gi"));
            this.page = RegExp.$1
        },
        gN: function() {
            var a = [],
                b = this.page - 1,
                c = this.page + 1;
            a.push('<p style="margin:0;padding:0;white-space:nowrap">');
            if (!(1 > b)) {
                if (this.page >= this.Ne) {
                    var d;
                    a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace("{temp1}", "BMap.I('" + this.Q + "').toPage(1);"))
                }
                a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace("{temp2}", "BMap.I('" + this.Q + "').toPage(" + b + ");"))
            }
            if (this.page < this.Ne) d = 0 == this.page % this.Ne ? this.page - this.Ne - 1 : this.page - this.page % this.Ne + 1, b = d + this.Ne - 1;
            else {
                d = Math.floor(this.Ne / 2);
                var e = this.Ne % 2 - 1,
                    b = this.Qc > this.page + d ? this.page + d : this.Qc;
                d = this.page - d - e
            }
            this.page > this.Qc - this.Ne && this.page >= this.Ne && (d = this.Qc - this.Ne + 1, b = this.Qc);
            for (e = d; e <= b; e++) 0 < e && (e == this.page ? a.push('<span style="margin-right:3px">' + e + "</span>") : 1 <= e && e <= this.Qc && (d = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + e + "]</a></span>", a.push(d.replace("{temp3}", "BMap.I('" + this.Q + "').toPage(" + e + ");"))));
            c > this.Qc || a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace("{temp4}", "BMap.I('" + this.Q + "').toPage(" + c + ");"));
            a.push("</p>");
            return a.join("")
        },
        toPage: function(a) {
            a = a ? a : 1;
            "function" == typeof this.rD && (this.rD(a), this.page = a);
            this.update && this.qa()
        }
    });

    function Ya(a, b) {
        V.call(this, a, b);
        b = b || {};
        b.renderOptions = b.renderOptions || {};
        this.Pm(b.pageCapacity);
        "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.kx() : this.Cx();
        this.ka = [];
        this.ve = [];
        this.Pa = -1;
        this.Ka = [];
        var c = this;
        J.load("local", function() {
            c.Ju()
        }, n)
    }
    u.ha(Ya, V, "LocalSearch");
    Ya.bn = 10;
    Ya.uS = 1;
    Ya.al = 100;
    Ya.sA = 2E3;
    Ya.BA = 1E5;
    u.extend(Ya.prototype, {
        search: function(a, b) {
            this.Ka.push({
                method: "search",
                arguments: [a, b]
            })
        },
        Nk: function(a, b, c) {
            this.Ka.push({
                method: "searchInBounds",
                arguments: [a, b, c]
            })
        },
        Lm: function(a, b, c, d) {
            this.Ka.push({
                method: "searchNearby",
                arguments: [a, b, c, d]
            })
        },
        Sd: function() {
            delete this.xa;
            delete this.de;
            delete this.T;
            delete this.ba;
            this.Pa = -1;
            this.Za();
            this.k.S.wa && (this.k.S.wa.innerHTML = "")
        },
        vk: q(),
        Cx: function() {
            this.k.S.Mp = n
        },
        kx: function() {
            this.k.S.Mp = p
        },
        Pm: function(a) {
            this.k.Mi = "number" == typeof a && !isNaN(a) ? 1 > a ? Ya.bn : a > Ya.al ? Ya.bn : a : Ya.bn
        },
        me: function() {
            return this.k.Mi
        },
        toString: ca("LocalSearch")
    });
    var ad = Ya.prototype;
    W(ad, {
        clearResults: ad.Sd,
        setPageCapacity: ad.Pm,
        getPageCapacity: ad.me,
        gotoPage: ad.vk,
        searchNearby: ad.Lm,
        searchInBounds: ad.Nk,
        search: ad.search,
        enableFirstResultSelection: ad.Cx,
        disableFirstResultSelection: ad.kx
    });

    function bd(a, b) {
        V.call(this, a, b)
    }
    u.ha(bd, V, "BaseRoute");
    u.extend(bd.prototype, {
        Sd: q()
    });

    function cd(a, b) {
        V.call(this, a, b);
        b = b || {};
        this.Rp(b.policy);
        this.Pm(b.pageCapacity);
        this.Gd = Qc;
        this.wq = Vc;
        this.qu = Kc;
        this.ka = [];
        this.Pa = -1;
        this.Ka = [];
        var c = this;
        J.load("route", function() {
            c.Hd()
        })
    }
    cd.al = 100;
    cd.MH = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    u.ha(cd, bd, "TransitRoute");
    u.extend(cd.prototype, {
        Rp: function(a) {
            this.k.Ad = 0 <= a && 4 >= a ? a : 0
        },
        uv: function(a, b) {
            this.Ka.push({
                method: "_internalSearch",
                arguments: [a, b]
            })
        },
        search: function(a, b) {
            this.Ka.push({
                method: "search",
                arguments: [a, b]
            })
        },
        Pm: function(a) {
            if ("string" == typeof a && (a = parseInt(a), isNaN(a))) {
                this.k.Mi = cd.al;
                return
            }
            this.k.Mi = "number" != typeof a ? cd.al : 1 <= a && a <= cd.al ? Math.round(a) : cd.al
        },
        toString: ca("TransitRoute"),
        LL: function(a) {
            return a.replace(/\(.*\)/, "")
        }
    });
    var dd = cd.prototype;
    W(dd, {
        _internalSearch: dd.uv
    });

    function ed(a, b) {
        V.call(this, a, b);
        this.ka = [];
        this.Pa = -1;
        this.Ka = [];
        var c = this,
            d = this.k.S;
        1 != d.up && 2 != d.up && (d.up = 1);
        this.$u = this.k.S.Xb ? n : p;
        J.load("route", function() {
            c.Hd()
        });
        this.Gy && this.Gy()
    }
    ed.$H = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" ");
    u.ha(ed, bd, "DWRoute");
    u.extend(ed.prototype, {
        search: function(a, b, c) {
            this.Ka.push({
                method: "search",
                arguments: [a, b, c]
            })
        }
    });

    function fd(a, b) {
        ed.call(this, a, b);
        b = b || {};
        this.Rp(b.policy);
        this.Gd = Rc;
        this.wq = Yc;
        this.qu = Oc
    }
    u.ha(fd, ed, "DrivingRoute");
    fd.prototype.Rp = function(a) {
        this.k.Ad = 0 <= a && 2 >= a ? a : 0
    };

    function gd(a, b) {
        ed.call(this, a, b);
        this.Gd = Sc;
        this.wq = Zc;
        this.qu = Mc;
        this.$u = p
    }
    u.ha(gd, ed, "WalkingRoute");

    function hd(a, b) {
        u.lang.oa.call(this);
        this.Me = [];
        this.Ik = [];
        this.k = b;
        this.lb = a;
        this.map = this.k.S.map || o;
        this.Bt = this.k.Bt;
        this.ab = o;
        this.Ch = 0;
        this.St = "";
        this.Jf = 1;
        this.rs = "";
        this.Gm = [0, 0, 0, 0, 0, 0, 0];
        this.Sy = [];
        this.No = [1, 1, 1, 1, 1, 1, 1];
        this.aH = [1, 1, 1, 1, 1, 1, 1];
        this.Kp = [0, 0, 0, 0, 0, 0, 0];
        this.Hm = [0, 0, 0, 0, 0, 0, 0];
        this.cc = [{
            o: "",
            Ge: 0,
            Xk: 0,
            x: 0,
            y: 0,
            Kb: -1
        }, {
            o: "",
            Ge: 0,
            Xk: 0,
            x: 0,
            y: 0,
            Kb: -1
        }, {
            o: "",
            Ge: 0,
            Xk: 0,
            x: 0,
            y: 0,
            Kb: -1
        }, {
            o: "",
            Ge: 0,
            Xk: 0,
            x: 0,
            y: 0,
            Kb: -1
        }, {
            o: "",
            Ge: 0,
            Xk: 0,
            x: 0,
            y: 0,
            Kb: -1
        }, {
            o: "",
            Ge: 0,
            Xk: 0,
            x: 0,
            y: 0,
            Kb: -1
        }, {
            o: "",
            Ge: 0,
            Xk: 0,
            x: 0,
            y: 0,
            Kb: -1
        }];
        this.Fg = -1;
        J.load("route", q())
    }
    u.lang.ha(hd, u.lang.oa, "RouteAddr");

    function id(a) {
        this.k = {};
        u.extend(this.k, a);
        this.Ka = [];
        var b = this;
        J.load("othersearch", function() {
            b.Hd()
        })
    }
    u.ha(id, u.lang.oa, "Geocoder");
    u.extend(id.prototype, {
        py: function(a, b, c) {
            this.Ka.push({
                method: "getPoint",
                arguments: [a, b, c]
            })
        },
        kp: function(a, b, c) {
            this.Ka.push({
                method: "getLocation",
                arguments: [a, b, c]
            })
        },
        toString: ca("Geocoder")
    });
    var jd = id.prototype;
    W(jd, {
        getPoint: jd.py,
        getLocation: jd.kp
    });

    function Geolocation(a) {
        a = a || {};
        this.F = {
            timeout: a.timeout || 1E4,
            maximumAge: a.maximumAge || 6E5
        };
        this.qd = [];
        var b = this;
        J.load("othersearch", function() {
            for (var a = 0, d; d = b.qd[a]; a++) b[d.method].apply(b, d.arguments)
        })
    }
    u.extend(Geolocation.prototype, {
        getCurrentPosition: function(a, b) {
            this.qd.push({
                method: "getCurrentPosition",
                arguments: arguments
            })
        },
        getStatus: ca(2)
    });

    function kd(a) {
        a = a || {};
        a.S = a.renderOptions || {};
        this.k = {
            S: {
                map: a.S.map || o
            }
        };
        this.Ka = [];
        var b = this;
        J.load("othersearch", function() {
            b.Hd()
        })
    }
    u.ha(kd, u.lang.oa, "LocalCity");
    u.extend(kd.prototype, {
        get: function(a) {
            this.Ka.push({
                method: "get",
                arguments: [a]
            })
        },
        toString: ca("LocalCity")
    });

    function ld() {
        this.Ka = [];
        var a = this;
        J.load("othersearch", function() {
            a.Hd()
        })
    }
    u.ha(ld, u.lang.oa, "Boundary");
    u.extend(ld.prototype, {
        get: function(a, b) {
            this.Ka.push({
                method: "get",
                arguments: [a, b]
            })
        },
        toString: ca("Boundary")
    });

    function md(a, b) {
        V.call(this, a, b);
        this.WH = Tc;
        this.ZH = Wc;
        this.VH = Uc;
        this.YH = Xc;
        this.Ka = [];
        var c = this;
        J.load("buslinesearch", function() {
            c.Hd()
        })
    }
    md.Vq = D.da + "iw_plus.gif";
    md.uK = D.da + "iw_minus.gif";
    md.TL = D.da + "stop_icon.png";
    u.ha(md, V);
    u.extend(md.prototype, {
        getBusList: function(a) {
            this.Ka.push({
                method: "getBusList",
                arguments: [a]
            })
        },
        getBusLine: function(a) {
            this.Ka.push({
                method: "getBusLine",
                arguments: [a]
            })
        },
        setGetBusListCompleteCallback: function(a) {
            this.k.aG = a || q()
        },
        setGetBusLineCompleteCallback: function(a) {
            this.k.$F = a || q()
        },
        setBusListHtmlSetCallback: function(a) {
            this.k.ZF = a || q()
        },
        setBusLineHtmlSetCallback: function(a) {
            this.k.YF = a || q()
        },
        setPolylinesSetCallback: function(a) {
            this.k.dz = a || q()
        }
    });

    function nd(a) {
        V.call(this, a);
        a = a || {};
        this.Yc = {
            input: a.input || o,
            Cw: a.baseDom || o,
            types: a.types || [],
            gt: a.onSearchComplete || q()
        };
        this.Ic.src = a.location || "\u5168\u56fd";
        this.xh = "";
        this.bf = o;
        this.QB = "";
        this.kh();
        Ma(Ga);
        var b = this;
        J.load("autocomplete", function() {
            b.Hd()
        })
    }
    u.ha(nd, V, "Autocomplete");
    u.extend(nd.prototype, {
        kh: q(),
        show: q(),
        H: q(),
        Kz: function(a) {
            this.Yc.types = a
        },
        Qk: function(a) {
            this.Ic.src = a
        },
        search: ba("xh"),
        Ft: ba("QB")
    });
    var Oa;

    function Ka(a, b) {
        this.B = "string" == typeof a ? u.M(a) : a;
        this.k = {
            enableScrollWheelZoom: n,
            panoramaRenderer: "flash",
            swfSrc: C.Bc + "res/swf/APILoader.swf",
            visible: n,
            linksControl: n,
            navigationControl: n,
            indoorSceneSwitchControl: n,
            albumsControl: p,
            albumsControlOptions: {}
        };
        var b = b || {},
            c;
        for (c in b) this.k[c] = b[c];
        this.ua = {
            heading: o,
            pitch: o
        };
        this.rl = [];
        this.bb = this.Va = o;
        this.qo = this.pj();
        this.ka = [];
        this.jc = 1;
        this.$e = this.LK = this.Zh = "";
        this.Od = {};
        this.Ee = o;
        this.zf = [];
        this.jo = [];
        this.no = p;
        var d = this;
        "flashRender" === this.pj() ? J.load("panoramaflash", function() {
            d.kh()
        }, n) : J.load("panorama", function() {
            d.vb()
        }, n);
        this.iL(this.B);
        "api" == b.ff ? Ma(Ca) : Ma(Da);
        this.addEventListener("id_changed", function() {
            Ma(Ba, {
                from: b.ff
            })
        })
    }
    var od = 4,
        pd = 1;
    u.lang.ha(Ka, u.lang.oa, "Panorama");
    u.extend(Ka.prototype, {
        iL: function(a) {
            var b, c;
            b = a.style;
            c = Qa(a).position;
            "absolute" != c && "relative" != c && (b.position = "relative", b.zIndex = 0);
            if ("absolute" === c || "relative" === c)
                if (a = Qa(a).zIndex, !a || "auto" === a) b.zIndex = 0
        },
        vO: t("rl"),
        kb: t("Va"),
        VO: t("yr"),
        KG: t("yr"),
        U: t("bb"),
        Fa: t("ua"),
        V: t("jc"),
        zi: t("Zh"),
        $T: function() {
            return this.VS || []
        },
        WT: t("LK"),
        Hs: t("$e"),
        Sk: function(a) {
            a !== this.$e && (this.$e = a, this.dispatchEvent(new N("onscene_type_changed")))
        },
        uc: function(a, b) {
            a != this.Va && (this.uj = this.Va, this.Wq = this.bb, this.Va = a, this.$e = b || "street", this.bb = o)
        },
        ga: function(a) {
            a.ob(this.bb) || (this.uj = this.Va, this.Wq = this.bb, this.bb = a, this.Va = o)
        },
        Ed: function(a) {
            this.ua = a;
            a = this.ua.pitch;
            "cvsRender" == this.pj() ? (90 < a && (a = 90), -90 > a && (a = -90)) : "cssRender" == this.pj() && (45 < a && (a = 45), -45 > a && (a = -45));
            this.no = n;
            this.ua.pitch = a
        },
        hd: function(a) {
            a != this.jc && (a > od && (a = od), a < pd && (a = pd), a != this.jc && (this.jc = a))
        },
        fw: function() {
            if (this.A)
                for (var a = this.A.ny(), b = 0; b < a.length; b++)(a[b] instanceof T || a[b] instanceof ac) && a[b].point && this.ka.push(a[b])
        },
        Gz: ba("A"),
        Qp: function(a) {
            this.Ee = a || "none"
        },
        Gt: function(a) {
            for (var b in a) {
                if ("object" == typeof a[b])
                    for (var c in a[b]) this.k[b][c] = a[b][c];
                else this.k[b] = a[b];
                switch (b) {
                    case "linksControl":
                        this.dispatchEvent(new N("onlinks_visible_changed"));
                        break;
                    case "navigationControl":
                        this.dispatchEvent(new N("onnavigation_visible_changed"));
                        break;
                    case "indoorSceneSwitchControl":
                        this.dispatchEvent(new N("onindoor_default_switch_mode_changed"));
                        break;
                    case "albumsControl":
                        this.dispatchEvent(new N("onalbums_visible_changed"));
                        break;
                    case "albumsControlOptions":
                        this.dispatchEvent(new N("onalbums_options_changed"))
                }
            }
        },
        Fi: function() {
            this.Aj.style.visibility = "hidden"
        },
        Nt: function() {
            this.Aj.style.visibility = "visible"
        },
        RN: function() {
            this.k.enableScrollWheelZoom = n
        },
        yN: function() {
            this.k.enableScrollWheelZoom = p
        },
        show: function() {
            this.k.visible = n
        },
        H: function() {
            this.k.visible = p
        },
        pj: function() {
            return Pa() && !F() && "javascript" != this.k.panoramaRenderer ? "flashRender" : !F() && Hb() ? "cvsRender" : "cssRender"
        },
        Aa: function(a) {
            this.Od[a.zc] = a
        },
        Fb: function(a) {
            delete this.Od[a]
        },
        OE: function() {
            return this.k.visible
        },
        OE: function() {
            return this.k.visible
        },
        Nf: function() {
            return new M(this.B.clientWidth, this.B.clientHeight)
        },
        Ea: t("B"),
        gO: function() {
            var a = "http://map.baidu.com/?",
                b = this.kb();
            if (b) {
                var b = {
                        panotype: this.Hs(),
                        heading: this.Fa().heading,
                        pitch: this.Fa().pitch,
                        pid: b,
                        panoid: b,
                        from: "api"
                    },
                    c;
                for (c in b) a += c + "=" + b[c] + "&"
            }
            return a.slice(0, -1)
        },
        fP: q(),
        yw: function(a) {
            function b(a, b) {
                return function() {
                    a.jo.push({
                        NF: b,
                        MF: arguments
                    })
                }
            }
            for (var c = a.getPanoMethodList(), d = "", e = 0, f = c.length; e < f; e++) d = c[e], this[d] = b(this, d);
            this.zf.push(a)
        },
        rz: function(a) {
            for (var b = this.zf.length; b--;) this.zf[b] === a && this.zf.splice(b, 1)
        }
    });
    var X = Ka.prototype;
    W(X, {
        setId: X.uc,
        setPosition: X.ga,
        setPov: X.Ed,
        setZoom: X.hd,
        setOptions: X.Gt,
        getId: X.kb,
        getPosition: X.U,
        getPov: X.Fa,
        getZoom: X.V,
        getLinks: X.vO,
        getBaiduMapUrl: X.gO,
        hideMapLogo: X.fP,
        enableDoubleClickZoom: X.ET,
        disableDoubleClickZoom: X.wT,
        enableScrollWheelZoom: X.RN,
        disableScrollWheelZoom: X.yN,
        show: X.show,
        hide: X.H,
        addPlugin: X.yw,
        removePlugin: X.rz,
        getVisible: X.OE,
        addOverlay: X.Aa,
        removeOverlay: X.Fb,
        getSceneType: X.Hs,
        setPanoramaPOIType: X.Qp
    });
    W(window, {
        BMAP_PANORAMA_POI_HOTEL: "hotel",
        BMAP_PANORAMA_POI_CATERING: "catering",
        BMAP_PANORAMA_POI_MOVIE: "movie",
        BMAP_PANORAMA_POI_TRANSIT: "transit",
        BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
        BMAP_PANORAMA_POI_NONE: "none",
        BMAP_PANORAMA_INDOOR_SCENE: "inter",
        BMAP_PANORAMA_STREET_SCENE: "street"
    });

    function qd() {
        u.lang.oa.call(this);
        this.zc = "PanoramaOverlay_" + this.Q;
        this.J = o;
        this.Ca = n
    }
    u.lang.ha(qd, u.lang.oa, "PanoramaOverlayBase");
    u.extend(qd.prototype, {
        XT: t("zc"),
        ea: function() {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function() {
            aa("remove\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Bf: function() {
            aa("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0")
        }
    });

    function rd(a, b) {
        qd.call(this);
        var c = {
                position: o,
                altitude: 2
            },
            b = b || {},
            d;
        for (d in b) c[d] = b[d];
        this.bb = c.position;
        this.Xh = a;
        this.vn = c.altitude;
        this.ua = {
            heading: 0,
            pitch: 0
        }
    }
    u.lang.ha(rd, qd, "PanoramaLabel");
    u.extend(rd.prototype, {
        ga: function(a) {
            this.bb = a;
            this.Bf("position", a)
        },
        U: t("bb"),
        tc: function(a) {
            this.Xh = a;
            this.Bf("content", a)
        },
        yi: t("Xh"),
        Bz: function(a) {
            this.vn = a;
            this.Bf("altitude", a)
        },
        dp: t("vn"),
        Fa: function() {
            var a = o;
            if (this.J) {
                var a = this.J.U(),
                    b = this.U(),
                    a = sd(b.lng - a.lng, b.lat - a.lat);
                isNaN(a) && (a = 0);
                a = {
                    heading: a,
                    pitch: 0
                }
            } else a = this.ua;
            return a
        },
        H: function() {
            aa("hide\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        show: function() {
            aa("show\u65b9\u6cd5\u672a\u5b9e\u73b0")
        }
    });
    var td = rd.prototype;
    W(td, {
        setPosition: td.ga,
        getPosition: td.U,
        setContent: td.tc,
        getContent: td.yi,
        setAltitude: td.Bz,
        getAltitude: td.dp,
        getPov: td.Fa,
        show: td.show,
        hide: td.H
    });

    function ud(a, b) {
        qd.call(this);
        var c = {
                icon: "",
                title: "",
                panoInfo: o,
                altitude: 2
            },
            b = b || {},
            d;
        for (d in b) c[d] = b[d];
        this.bb = a;
        this.NB = c.icon;
        this.RC = c.title;
        this.vn = c.altitude;
        this.ZK = c.panoInfo;
        this.ua = {
            heading: 0,
            pitch: 0
        }
    }
    u.lang.ha(ud, qd, "PanoramaMarker");
    u.extend(ud.prototype, {
        ga: function(a) {
            this.bb = a;
            this.Bf("position", a)
        },
        U: t("bb"),
        Tb: function(a) {
            this.RC = a;
            this.Bf("title", a)
        },
        lm: t("RC"),
        Jb: function(a) {
            this.NB = icon;
            this.Bf("icon", a)
        },
        cm: t("NB"),
        Bz: function(a) {
            this.vn = a;
            this.Bf("altitude", a)
        },
        dp: t("vn"),
        oy: t("ZK"),
        Fa: function() {
            var a = o;
            if (this.J) {
                var a = this.J.U(),
                    b = this.U(),
                    a = sd(b.lng - a.lng, b.lat - a.lat);
                isNaN(a) && (a = 0);
                a = {
                    heading: a,
                    pitch: 0
                }
            } else a = this.ua;
            return a
        }
    });
    var vd = ud.prototype;
    W(vd, {
        setPosition: vd.ga,
        getPosition: vd.U,
        setTitle: vd.Tb,
        getTitle: vd.lm,
        setAltitude: vd.Bz,
        getAltitude: vd.dp,
        getPanoInfo: vd.oy,
        getIcon: vd.cm,
        setIcon: vd.Jb,
        getPov: vd.Fa
    });

    function sd(a, b) {
        var c = 180 * (Math.atan(a / b) / Math.PI),
            d = 0;
        0 < a && 0 > b && (d = 90);
        0 > a && 0 > b && (d = 180);
        0 > a && 0 < b && (d = 270);
        return Math.round((c + 90) % 90 + d)
    };

    function S(a, b) {
        this.J = a || o;
        var c = this;
        c.J && c.P();
        J.load("pservice", function() {
            c.HI()
        });
        "api" == (b || {}).ff ? Ma(Ea) : Ma(Fa);
        this.ld = {
            getPanoramaById: [],
            getPanoramaByLocation: [],
            getVisiblePOIs: [],
            getRecommendPanosById: [],
            getPanoramaVersions: [],
            checkPanoSupportByCityCode: [],
            getPanoramaByPOIId: []
        }
    }
    C.Bm(function(a) {
        "flashRender" !== a.pj() && new S(a, {
            ff: "api"
        })
    });
    u.extend(S.prototype, {
        P: function() {
            function a(a) {
                if (a) {
                    if (a.id != b.yr) {
                        b.KG(a.id);
                        var c = new N("ondataload");
                        c.data = a;
                        b.Va = a.id;
                        b.bb = a.position;
                        b.SS = a.Ni;
                        b.TS = a.Oi;
                        b.Zh = a.description;
                        b.rl = a.links;
                        b.ia = a;
                        b.dispatchEvent(c);
                        b.dispatchEvent(new N("onposition_changed"));
                        b.dispatchEvent(new N("onlinks_changed"));
                        a.oi ? (u.C.show(b.bv), u.C.H(b.tl)) : (u.C.H(b.bv), u.C.show(b.tl))
                    }
                } else b.Va = b.uj, b.bb = b.Wq, b.dispatchEvent(new N("onnoresult"))
            }
            var b = this.J,
                c = this;
            b.addEventListener("id_changed", function() {
                c.gm(b.kb(), a)
            });
            b.addEventListener("iid_changed", function() {
                c.qh(S.hj + "qt=idata&iid=" + b.rv + "&fn=", function(b) {
                    if (b && b.result && 0 == b.result.error) {
                        var b = b.content[0].interinfo,
                            e = {};
                        e.oi = b.BreakID;
                        for (var f = b.Defaultfloor, g = o, j = 0; j < b.Floors.length; j++)
                            if (b.Floors[j].Floor == f) {
                                g = b.Floors[j];
                                break
                            }
                        e.id = g.StartID || g.Points[0].PID;
                        c.gm(e.id, a, e)
                    }
                })
            });
            b.addEventListener("position_changed_inner", function() {
                c.Ih(b.U(), a)
            })
        },
        gm: function(a, b) {
            this.ld.getPanoramaById.push(arguments)
        },
        Ih: function(a, b, c) {
            this.ld.getPanoramaByLocation.push(arguments)
        },
        zy: function(a, b, c, d) {
            this.ld.getVisiblePOIs.push(arguments)
        },
        Gs: function(a, b) {
            this.ld.getRecommendPanosById.push(arguments)
        },
        Fs: function(a) {
            this.ld.getPanoramaVersions.push(arguments)
        },
        Jw: function(a, b) {
            this.ld.checkPanoSupportByCityCode.push(arguments)
        },
        Es: function(a, b) {
            this.ld.getPanoramaByPOIId.push(arguments)
        }
    });
    var wd = S.prototype;
    W(wd, {
        getPanoramaById: wd.gm,
        getPanoramaByLocation: wd.Ih,
        getPanoramaByPOIId: wd.Es
    });

    function Qb(a) {
        oc.call(this);
        "api" == (a || {}).ff ? Ma(za) : Ma(Aa)
    }
    Qb.GA = ["http://pcsv0.map.bdimg.com/tile/", "http://pcsv1.map.bdimg.com/tile/"];
    Qb.prototype = new oc;
    Qb.prototype.getTilesUrl = function(a, b) {
        return Qb.GA[(a.x + a.y) % Qb.GA.length] + "?udt=v&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b
    };
    Qb.prototype.Ap = ca(n);
    xd.ae = new Q;

    function xd() {}
    u.extend(xd, {
        zN: function(a, b, c) {
            c = u.lang.ad(c);
            b = {
                data: b
            };
            "position_changed" == a && (b.data = xd.ae.Sg(new P(b.data.mercatorX, b.data.mercatorY)));
            c.dispatchEvent(new N("on" + a), b)
        }
    });
    var yd = xd;
    W(yd, {
        dispatchFlashEvent: yd.zN
    });
    var zd = {
        OH: 50,
        xq: "http://pcsv0.map.bdimg.com",
        uq: {
            width: 220,
            height: 60
        }
    };
    u.extend(zd, {
        sm: function(a, b, c, d) {
            if (!b || !c || !c.lngLat || !c.panoInstance) d();
            else {
                this.zl === i && (this.zl = new S(o, {
                    ff: "api"
                }));
                var e = this;
                this.zl.Jw(b, function(b) {
                    b ? e.zl.Ih(c.lngLat, zd.OH, function(b) {
                        if (b && b.id) {
                            var f = b.id,
                                k = b.Ni,
                                b = b.Oi,
                                l = S.ae.Tf(c.lngLat),
                                m = e.bK(l, {
                                    x: k,
                                    y: b
                                }),
                                k = e.EE(f, m, 0, zd.uq.width, zd.uq.height);
                            a.content = e.cK(a.content, k, c.titleTip, c.beforeDomId);
                            a.addEventListener("open", function() {
                                ia.D(u.Ub("infoWndPano"), "click", function() {
                                    c.panoInstance.uc(f);
                                    c.panoInstance.show();
                                    c.panoInstance.Ed({
                                        heading: m,
                                        pitch: 0
                                    })
                                })
                            })
                        }
                        d()
                    }) : d()
                })
            }
        },
        cK: function(a, b, c, d) {
            var c = c || "",
                e;
            !d || !a.split(d)[0] ? (d = a, a = "") : (d = a.split(d)[0], e = d.lastIndexOf("<"), d = a.substring(0, e), a = a.substring(e));
            e = [];
            var f = zd.uq.width,
                g = zd.uq.height;
            e.push(d);
            e.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + g + "px;width:" + f + "px; margin-top: -19px;'>");
            e.push("<img class='pano_thumnail_img' width='" + f + "' height='" + g + "' border='0' alt='" + c + "\u5916\u666f' title='" + c + "\u5916\u666f' src='" + b + "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + f + ", " + g + ");' />");
            e.push("<div class='panoInfoBoxTitleBg' style='width:" + f + "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>");
            e.push("</div>");
            e.push(a);
            return e.join("")
        },
        bK: function(a, b) {
            var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
            0 > c && (c += 360);
            return c
        },
        EE: function(a, b, c, d, e) {
            var f = {
                panoId: a,
                panoHeading: b || 0,
                panoPitch: c || 0,
                width: d,
                height: e
            };
            return (zd.xq + "/?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}").replace(/\{(.*?)\}/g, function(a, b) {
                return f[b]
            })
        }
    });
    C.Map = Ia;
    C.Hotspot = db;
    C.MapType = Cc;
    C.Point = I;
    C.Pixel = P;
    C.Size = M;
    C.Bounds = ab;
    C.TileLayer = oc;
    C.Projection = Tb;
    C.MercatorProjection = Q;
    C.PerspectiveProjection = cb;
    C.Copyright = function(a, b, c) {
        this.id = a;
        this.Wa = b;
        this.content = c
    };
    C.Overlay = Vb;
    C.Label = ac;
    C.GroundOverlay = bc;
    C.PointCollection = fc;
    C.Marker = T;
    C.Icon = Zb;
    C.Polyline = jc;
    C.Polygon = ic;
    C.InfoWindow = $b;
    C.Circle = lc;
    C.Control = R;
    C.NavigationControl = fb;
    C.GeolocationControl = Mb;
    C.OverviewMapControl = hb;
    C.CopyrightControl = Nb;
    C.ScaleControl = gb;
    C.MapTypeControl = ib;
    C.PanoramaControl = Pb;
    C.TrafficLayer = zc;
    C.CustomLayer = jb;
    C.ContextMenu = Rb;
    C.MenuItem = Sb;
    C.LocalSearch = Ya;
    C.TransitRoute = cd;
    C.DrivingRoute = fd;
    C.WalkingRoute = gd;
    C.Autocomplete = nd;
    C.Geocoder = id;
    C.LocalCity = kd;
    C.Geolocation = Geolocation;
    C.BusLineSearch = md;
    C.Boundary = ld;
    C.VectorCloudLayer = xc;
    C.VectorTrafficLayer = yc;
    C.Panorama = Ka;
    C.PanoramaLabel = rd;
    C.PanoramaService = S;
    C.PanoramaCoverageLayer = Qb;
    C.PanoramaFlashInterface = xd;

    function W(a, b) {
        for (var c in b) a[c] = b[c]
    }
    W(window, {
        BMap: C,
        _jsload2: function(a, b) {
            ia.Tt.EP && ia.Tt.set(a, b);
            J.OM(a, b)
        },
        BMAP_API_VERSION: "2.0"
    });
    var Y = Ia.prototype;
    W(Y, {
        getBounds: Y.Je,
        getCenter: Y.Da,
        getMapType: Y.la,
        getSize: Y.pb,
        setSize: Y.Tc,
        getViewport: Y.qp,
        getZoom: Y.V,
        centerAndZoom: Y.rd,
        panTo: Y.Qg,
        panBy: Y.mf,
        setCenter: Y.Oe,
        setCurrentCity: Y.Ez,
        setMapType: Y.nf,
        setViewport: Y.dg,
        setZoom: Y.hd,
        highResolutionEnabled: Y.Gi,
        zoomTo: Y.sf,
        zoomIn: Y.eA,
        zoomOut: Y.fA,
        addHotspot: Y.Or,
        removeHotspot: Y.zQ,
        clearHotspots: Y.Xj,
        checkResize: Y.QM,
        addControl: Y.Mr,
        removeControl: Y.tG,
        getContainer: Y.Ea,
        addContextMenu: Y.Kl,
        removeContextMenu: Y.Em,
        addOverlay: Y.Aa,
        removeOverlay: Y.Fb,
        clearOverlays: Y.AD,
        openInfoWindow: Y.bc,
        closeInfoWindow: Y.nc,
        pointToOverlayPixel: Y.Vd,
        overlayPixelToPoint: Y.kG,
        getInfoWindow: Y.Pf,
        getOverlays: Y.ny,
        getPanes: function() {
            return {
                floatPane: this.od.Px,
                markerMouseTarget: this.od.Vy,
                floatShadow: this.od.nE,
                labelPane: this.od.Qy,
                markerPane: this.od.IF,
                markerShadow: this.od.Wy,
                mapPane: this.od.Xs
            }
        },
        addTileLayer: Y.Ef,
        removeTileLayer: Y.ag,
        pixelToPoint: Y.fb,
        pointToPixel: Y.xb,
        setFeatureStyle: Y.Fz,
        selectBaseElement: Y.ZU,
        setMapStyle: Y.Om,
        enable3DBuilding: Y.Yl,
        disable3DBuilding: Y.vN
    });
    var Ad = Cc.prototype;
    W(Ad, {
        getTileLayer: Ad.TO,
        getMinZoom: Ad.dm,
        getMaxZoom: Ad.pk,
        getProjection: Ad.im,
        getTextColor: Ad.op,
        getTips: Ad.pp
    });
    W(window, {
        BMAP_NORMAL_MAP: Ja,
        BMAP_PERSPECTIVE_MAP: La,
        BMAP_SATELLITE_MAP: Ta,
        BMAP_HYBRID_MAP: Na
    });
    var Bd = Q.prototype;
    W(Bd, {
        lngLatToPoint: Bd.Tf,
        pointToLngLat: Bd.Sg
    });
    var Cd = cb.prototype;
    W(Cd, {
        lngLatToPoint: Cd.Tf,
        pointToLngLat: Cd.Sg
    });
    var Dd = ab.prototype;
    W(Dd, {
        equals: Dd.ob,
        containsPoint: Dd.bN,
        containsBounds: Dd.aN,
        intersects: Dd.Hy,
        extend: Dd.extend,
        getCenter: Dd.Da,
        isEmpty: Dd.Nh,
        getSouthWest: Dd.$c,
        getNorthEast: Dd.Td,
        toSpan: Dd.Zz
    });
    var Ed = Vb.prototype;
    W(Ed, {
        isVisible: Ed.Sf,
        show: Ed.show,
        hide: Ed.H
    });
    Vb.getZIndex = Vb.uk;
    var Fd = bb.prototype;
    W(Fd, {
        openInfoWindow: Fd.bc,
        closeInfoWindow: Fd.nc,
        enableMassClear: Fd.Gh,
        disableMassClear: Fd.xN,
        show: Fd.show,
        hide: Fd.H,
        getMap: Fd.ky,
        addContextMenu: Fd.Kl,
        removeContextMenu: Fd.Em
    });
    var Gd = T.prototype;
    W(Gd, {
        setIcon: Gd.Jb,
        getIcon: Gd.cm,
        setPosition: Gd.ga,
        getPosition: Gd.U,
        setOffset: Gd.Cd,
        getOffset: Gd.Qf,
        getLabel: Gd.BE,
        setLabel: Gd.Pk,
        setTitle: Gd.Tb,
        setTop: Gd.Vg,
        enableDragging: Gd.Xb,
        disableDragging: Gd.jx,
        setZIndex: Gd.Kt,
        getMap: Gd.ky,
        setAnimation: Gd.Ok,
        setShadow: Gd.Jt,
        hide: Gd.H,
        setRotation: Gd.It,
        getRotation: Gd.HE
    });
    W(window, {
        BMAP_ANIMATION_DROP: 1,
        BMAP_ANIMATION_BOUNCE: 2
    });
    var Hd = ac.prototype;
    W(Hd, {
        setStyle: Hd.Uc,
        setStyles: Hd.Ug,
        setContent: Hd.tc,
        setPosition: Hd.ga,
        getPosition: Hd.U,
        setOffset: Hd.Cd,
        getOffset: Hd.Qf,
        setTitle: Hd.Tb,
        setZIndex: Hd.Kt,
        getMap: Hd.ky,
        getContent: Hd.yi
    });
    var Id = Zb.prototype;
    W(Id, {
        setImageUrl: Id.eR,
        setSize: Id.Tc,
        setAnchor: Id.Qb,
        setImageOffset: Id.Op,
        setImageSize: Id.cR,
        setInfoWindowAnchor: Id.gR,
        setPrintImageUrl: Id.pR
    });
    var Jd = $b.prototype;
    W(Jd, {
        redraw: Jd.gd,
        setTitle: Jd.Tb,
        setContent: Jd.tc,
        getContent: Jd.yi,
        getPosition: Jd.U,
        enableMaximize: Jd.If,
        disableMaximize: Jd.js,
        isOpen: Jd.Ia,
        setMaxContent: Jd.Pp,
        maximize: Jd.Zs,
        enableAutoPan: Jd.Yo
    });
    var Kd = Xb.prototype;
    W(Kd, {
        getPath: Kd.ud,
        setPath: Kd.Dd,
        setPositionAt: Kd.Rk,
        getStrokeColor: Kd.NO,
        setStrokeWeight: Kd.Up,
        getStrokeWeight: Kd.KE,
        setStrokeOpacity: Kd.Sp,
        getStrokeOpacity: Kd.OO,
        setFillOpacity: Kd.Et,
        getFillOpacity: Kd.oO,
        setStrokeStyle: Kd.Tp,
        getStrokeStyle: Kd.JE,
        getFillColor: Kd.nO,
        getBounds: Kd.Je,
        enableEditing: Kd.Ie,
        disableEditing: Kd.wN
    });
    var Ld = lc.prototype;
    W(Ld, {
        setCenter: Ld.Oe,
        getCenter: Ld.Da,
        getRadius: Ld.FE,
        setRadius: Ld.te
    });
    var Md = ic.prototype;
    W(Md, {
        getPath: Md.ud,
        setPath: Md.Dd,
        setPositionAt: Md.Rk
    });
    var Nd = db.prototype;
    W(Nd, {
        getPosition: Nd.U,
        setPosition: Nd.ga,
        getText: Nd.vy,
        setText: Nd.Vp
    });
    I.prototype.equals = I.prototype.ob;
    P.prototype.equals = P.prototype.ob;
    M.prototype.equals = M.prototype.ob;
    W(window, {
        BMAP_ANCHOR_TOP_LEFT: Jb,
        BMAP_ANCHOR_TOP_RIGHT: Kb,
        BMAP_ANCHOR_BOTTOM_LEFT: Lb,
        BMAP_ANCHOR_BOTTOM_RIGHT: 3
    });
    var Od = R.prototype;
    W(Od, {
        setAnchor: Od.Qb,
        getAnchor: Od.Ux,
        setOffset: Od.Cd,
        getOffset: Od.Qf,
        show: Od.show,
        hide: Od.H,
        isVisible: Od.Sf,
        toString: Od.toString
    });
    var Pd = fb.prototype;
    W(Pd, {
        getType: Pd.mm,
        setType: Pd.Tk
    });
    W(window, {
        BMAP_NAVIGATION_CONTROL_LARGE: 0,
        BMAP_NAVIGATION_CONTROL_SMALL: 1,
        BMAP_NAVIGATION_CONTROL_PAN: 2,
        BMAP_NAVIGATION_CONTROL_ZOOM: 3
    });
    var Qd = hb.prototype;
    W(Qd, {
        changeView: Qd.sd,
        setSize: Qd.Tc,
        getSize: Qd.pb
    });
    var Rd = gb.prototype;
    W(Rd, {
        getUnit: Rd.XO,
        setUnit: Rd.Lz
    });
    W(window, {
        BMAP_UNIT_METRIC: "metric",
        BMAP_UNIT_IMPERIAL: "us"
    });
    var Sd = Nb.prototype;
    W(Sd, {
        addCopyright: Sd.Nr,
        removeCopyright: Sd.qz,
        getCopyright: Sd.nk,
        getCopyrightCollection: Sd.$x
    });
    W(window, {
        BMAP_MAPTYPE_CONTROL_HORIZONTAL: Ob,
        BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
        BMAP_MAPTYPE_CONTROL_MAP: 2
    });
    var Td = oc.prototype;
    W(Td, {
        getMapType: Td.la,
        getCopyright: Td.nk,
        isTransparentPng: Td.Ap
    });
    var Ud = Rb.prototype;
    W(Ud, {
        addItem: Ud.Pr,
        addSeparator: Ud.zw,
        removeSeparator: Ud.tz
    });
    var Vd = Sb.prototype;
    W(Vd, {
        setText: Vd.Vp
    });
    var Wd = V.prototype;
    W(Wd, {
        getStatus: Wd.rk,
        setSearchCompleteCallback: Wd.Jz,
        getPageCapacity: Wd.me,
        setPageCapacity: Wd.Pm,
        setLocation: Wd.Qk,
        disableFirstResultSelection: Wd.kx,
        enableFirstResultSelection: Wd.Cx,
        gotoPage: Wd.vk,
        searchNearby: Wd.Lm,
        searchInBounds: Wd.Nk,
        search: Wd.search
    });
    W(window, {
        BMAP_STATUS_SUCCESS: 0,
        BMAP_STATUS_CITY_LIST: 1,
        BMAP_STATUS_UNKNOWN_LOCATION: 2,
        BMAP_STATUS_UNKNOWN_ROUTE: 3,
        BMAP_STATUS_INVALID_KEY: 4,
        BMAP_STATUS_INVALID_REQUEST: 5,
        BMAP_STATUS_PERMISSION_DENIED: 6,
        BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
        BMAP_STATUS_TIMEOUT: 8
    });
    W(window, {
        BMAP_POI_TYPE_NORMAL: 0,
        BMAP_POI_TYPE_BUSSTOP: 1,
        BMAP_POI_TYPE_BUSLINE: 2,
        BMAP_POI_TYPE_SUBSTOP: 3,
        BMAP_POI_TYPE_SUBLINE: 4
    });
    W(window, {
        BMAP_TRANSIT_POLICY_LEAST_TIME: 0,
        BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 2,
        BMAP_TRANSIT_POLICY_LEAST_WALKING: 3,
        BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 4,
        BMAP_LINE_TYPE_BUS: 0,
        BMAP_LINE_TYPE_SUBWAY: 1,
        BMAP_LINE_TYPE_FERRY: 2
    });
    var Xd = bd.prototype;
    W(Xd, {
        clearResults: Xd.Sd
    });
    dd = cd.prototype;
    W(dd, {
        setPolicy: dd.Rp,
        toString: dd.toString,
        setPageCapacity: dd.Pm
    });
    W(window, {
        BMAP_DRIVING_POLICY_LEAST_TIME: 0,
        BMAP_DRIVING_POLICY_LEAST_DISTANCE: 1,
        BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 2
    });
    W(window, {
        BMAP_HIGHLIGHT_STEP: 1,
        BMAP_HIGHLIGHT_ROUTE: 2
    });
    W(window, {
        BMAP_ROUTE_TYPE_DRIVING: Oc,
        BMAP_ROUTE_TYPE_WALKING: Mc
    });
    W(window, {
        BMAP_ROUTE_STATUS_NORMAL: Pc,
        BMAP_ROUTE_STATUS_EMPTY: 1,
        BMAP_ROUTE_STATUS_ADDRESS: 2
    });
    var Yd = fd.prototype;
    W(Yd, {
        setPolicy: Yd.Rp
    });
    var Zd = nd.prototype;
    W(Zd, {
        show: Zd.show,
        hide: Zd.H,
        setTypes: Zd.Kz,
        setLocation: Zd.Qk,
        search: Zd.search,
        setInputValue: Zd.Ft
    });
    W(jb.prototype, {});
    var $d = ld.prototype;
    W($d, {
        get: $d.get
    });
    W(Qb.prototype, {});
    W(Za.prototype, {});
    W(window, {
        BMAP_POINT_DENSITY_HIGH: 200,
        BMAP_POINT_DENSITY_MEDIUM: Bc,
        BMAP_POINT_DENSITY_LOW: 50
    });
    W(window, {
        BMAP_POINT_SHAPE_STAR: 1,
        BMAP_POINT_SHAPE_WATERDROP: 2,
        BMAP_POINT_SHAPE_CIRCLE: cc,
        BMAP_POINT_SHAPE_SQUARE: 4,
        BMAP_POINT_SHAPE_RHOMBUS: 5
    });
    W(window, {
        BMAP_POINT_SIZE_TINY: 1,
        BMAP_POINT_SIZE_SMALLER: 2,
        BMAP_POINT_SIZE_SMALL: 3,
        BMAP_POINT_SIZE_NORMAL: dc,
        BMAP_POINT_SIZE_BIG: 5,
        BMAP_POINT_SIZE_BIGGER: 6,
        BMAP_POINT_SIZE_HUGE: 7
    });
    C.qM();
})()
