window.TILE_VERSION = {
  "ditu": {
    "normal": {
      "version": "088",
      "updateDate": "20200324"
    },
    "satellite": {
      "version": "009",
      "updateDate": "20200324"
    },
    "normalTraffic": {
      "version": "081",
      "updateDate": "20200324"
    },
    "satelliteTraffic": {
      "version": "083",
      "updateDate": "20200324"
    },
    "mapJS": {
      "version": "104",
      "updateDate": "20200324"
    },
    "satelliteStreet": {
      "version": "083",
      "updateDate": "20200324"
    },
    "earthVector": {
      "version": "001",
      "updateDate": "20200324"
    }
  },
  "webapp": {
    "high_normal": {
      "version": "001",
      "updateDate": "20200324"
    },
    "lower_normal": {
      "version": "002",
      "updateDate": "20200324"
    }
  },
  "api_for_mobile": {
    "vector": {
      "version": "002",
      "updateDate": "20200324"
    },
    "vectorIcon": {
      "version": "002",
      "updateDate": "20200324"
    }
  }
};
window.MSV = {
  "mapstyle": {
    "updateDate": "202003020",
    "version": "001"
  }
};
window.BMAP_AUTHENTIC_KEY = "7oI4Btwfj71N5p5WnqOsuey4UxI2BipG";
window.BMapGL = window.BMapGL || {};
(function(aT, dw) {
    var z = z || {
      version: "20150702",
      emptyFn: function() {}
    };
    (function() {
        z._log = [];
        var i = 0;
        var gf = {};
        z.BaseClass = function(gg) {
          gf[(this.hashCode = (gg || z.BaseClass.guid()))] = this
        }
        ;
        z.BaseClass.guid = function() {
          return "mz_" + (i++).toString(36)
        }
        ;
        z.BaseClass.create = function() {
          var gg = new z.BaseClass();
          gg.decontrol();
          return gg
        }
        ;
        var e = z.instance = z.I = function(gg) {
            return gf[gg]
          }
        ;
        z.BaseClass.prototype.dispose = function() {
          if (this.hashCode) {
            delete gf[this.hashCode]
          }
          for (var gg in this) {
            if (typeof this[gg] != "function") {
              delete this[gg]
            }
          }
        }
        ;
        z.BaseClass.prototype.getHashCode = function() {
          if (!this.hashCode) {
            gf[(this.hashCode = z.BaseClass.guid())] = this
          }
          return this.hashCode
        }
        ;
        z.BaseClass.prototype.decontrol = function() {
          delete gf[this.hashCode]
        }
        ;
        z.BaseClass.prototype.toString = function() {
          return "[object " + (this._className || "Object") + "]"
        }
        ;
        z.BaseClass.prototype._wlog = function(gh, gi) {
          var gg = z._log;
          if (gg.length > 100) {
            gg.reverse().length = 50;
            gg.reverse()
          }
          gg[gg.length] = "[" + gh + "][" + (this._className || "Object") + " " + this.hashCode + "] " + gi
        }
      }
    )();
    Function.prototype.inherits = function(gg, gf) {
      var e, gh, gj = this.prototype, gi = function() {};
      gi.prototype = gg.prototype;
      gh = this.prototype = new gi();
      if (typeof (gf) == "string") {
        gh._className = gf
      }
      for (e in gj) {
        gh[e] = gj[e]
      }
      this.prototype.constructor = gj.constructor;
      gj = gi = null;
      return gh
    }
    ;
    z.BaseEvent = function(e, i) {
      this.type = e;
      this.returnValue = true;
      this.target = i || null;
      this.currentTarget = this.srcElement = null;
      this.cancelBubble = false;
      this.domEvent = null
    }
    ;
    z.BaseClass.prototype.on = z.BaseClass.prototype.addEventListener = function(gf, i) {
      if (typeof i !== "function") {
        return this._wlog("error", "addEventListener:" + i + " is not a function")
      }
      if (!this._listeners) {
        this._listeners = {}
      }
      var e = this._listeners;
      if (gf.indexOf("on") !== 0) {
        gf = "on" + gf
      }
      if (typeof e[gf] !== "object") {
        e[gf] = {}
      }
      var gg = i.hashCode || z.BaseClass.guid();
      i.hashCode = gg;
      if (e[gf][gg]) {
        this._wlog("warning", "repeat key:" + gg)
      }
      e[gf][gg] = i
    }
    ;
    z.BaseClass.prototype.off = z.BaseClass.prototype.removeEventListener = function(gf, i) {
      if (typeof i == "function") {
        i = i.hashCode
      } else {
        if (typeof i != "string") {
          return
        }
      }
      if (!this._listeners) {
        this._listeners = {}
      }
      if (gf.indexOf("on") != 0) {
        gf = "on" + gf
      }
      var e = this._listeners;
      if (!e[gf]) {
        return
      }
      if (e[gf][i]) {
        delete e[gf][i]
      }
    }
    ;
    z.BaseClass.prototype.fire = z.BaseClass.prototype.dispatchEvent = function(gg) {
      if (!this._listeners) {
        this._listeners = {}
      }
      var gf, e = this._listeners, gh = gg.type;
      gg.target = gg.srcElement = gg.target || gg.srcElement || this;
      gg.currentTarget = this;
      if (typeof this[gh] == "function") {
        this[gh](gg)
      }
      if (typeof e[gh] == "object") {
        for (gf in e[gh]) {
          if (typeof e[gh][gf] == "function") {
            e[gh][gf].call(this, gg)
          }
        }
      }
      return gg.returnValue
    }
    ;
    z.BaseEvent.prototype.inherit = function(gf) {
      var i = this;
      this.domEvent = gf = window.event || gf;
      i.clientX = gf.clientX || gf.pageX;
      i.clientY = gf.clientY || gf.pageY;
      i.offsetX = gf.offsetX || gf.layerX;
      i.offsetY = gf.offsetY || gf.layerY;
      i.screenX = gf.screenX;
      i.screenY = gf.screenY;
      i.ctrlKey = gf.ctrlKey || gf.metaKey;
      i.shiftKey = gf.shiftKey;
      i.altKey = gf.altKey;
      return i
    }
    ;
    z.Browser = (function() {
        var gf = navigator.userAgent;
        var gh = 0;
        var e = 0;
        var gi = 0;
        var i = 0;
        var gm = 0;
        var gk = 0;
        var gl = 0;
        var gj = 0;
        var gg = 0;
        var gn = 0;
        if (typeof window.opera === "object" && /Opera(\s|\/)(\d+(\.\d+)?)/.test(gf)) {
          gi = parseFloat(RegExp.$2)
        } else {
          if (/OPR(\/(\d+)(\..?)?)/.test(gf)) {
            gi = parseInt(RegExp.$2, 10)
          } else {
            if (/Edge\/((\d+)\.\d+)/.test(gf)) {
              gh = parseInt(RegExp.$2, 10)
            } else {
              if (/MSIE (\d+(\.\d+)?)/.test(gf)) {
                e = parseFloat(RegExp.$1)
              } else {
                if (gf.indexOf("Trident") > -1 && /rv:(\d+(\.\d+)?)/.test(gf)) {
                  e = parseInt(RegExp.$1, 10)
                } else {
                  if (/Firefox(\s|\/)(\d+(\.\d+)?)/.test(gf)) {
                    gm = parseFloat(RegExp.$2)
                  } else {
                    if (navigator.vendor === "Netscape" && /Netscape(\s|\/)(\d+(\.\d+)?)/.test(gf)) {
                      gl = parseFloat(RegExp.$2)
                    } else {
                      if (gf.indexOf("Safari") > -1 && /Version\/(\d+(\.\d+)?)/.test(gf)) {
                        i = parseFloat(RegExp.$1)
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (gf.indexOf("Trident") > -1 && /Trident\/(\d+(\.\d+)?)/.test(gf)) {
          gj = parseInt(RegExp.$1, 10)
        } else {
          if (!e && !gh && gf.indexOf("Gecko") > -1 && gf.indexOf("KHTML") === -1 && /rv\:(\d+(\.\d+)?)/.test(gf)) {
            gg = parseFloat(RegExp.$1)
          } else {
            if (!gh && /chrome\/(\d+(\.\d+)?)/i.test(gf)) {
              gk = parseFloat(RegExp.$1)
            } else {
              if (!gh && /AppleWebKit\/(\d+(\.\d+)?)/.test(gf)) {
                gn = parseInt(RegExp.$1, 10)
              }
            }
          }
        }
        var go = {
          edge: gh,
          ie: e,
          firefox: gm,
          netscape: gl,
          opera: gi,
          safari: i,
          chrome: gk,
          gecko: gg,
          trident: gj,
          webkit: gn
        };
        return go
      }
    )();
    window.FeBrowser = z.Browser;
    z.Dom = {};
    z.Dom.createDom = function(i, e) {
      if (z.isIE && e && e.name) {
        i = "<" + i + ' name="' + z.String.escapeHTML(e.name) + '">'
      }
      var gf = document.createElement(i);
      if (e) {
        z.Dom.setProperties(gf, e)
      }
      return gf
    }
    ;
    z.Dom.getOffset = function(gg) {
      var gj = z.Dom.getOwnerDocument(gg);
      var gi = z.isGecko > 0 && gj.getBoxObjectFor && z.Dom.getStyle(gg, "position") == "absolute" && (gg.style.top === "" || gg.style.left === "");
      var gk = {
        left: 0,
        top: 0
      };
      var i = (z.isIE && !z.isStrict) ? gj.body : gj.documentElement;
      if (gg == i) {
        return gk
      }
      var gf = null;
      var gh;
      if (gg.getBoundingClientRect) {
        gh = gg.getBoundingClientRect();
        gk.left = gh.left + Math.max(gj.documentElement.scrollLeft, gj.body.scrollLeft);
        gk.top = gh.top + Math.max(gj.documentElement.scrollTop, gj.body.scrollTop);
        gk.left -= gj.documentElement.clientLeft;
        gk.top -= gj.documentElement.clientTop;
        if (z.isIE && !z.isStrict) {
          gk.left -= 2;
          gk.top -= 2
        }
      } else {
        if (gj.getBoxObjectFor && !gi) {
          gh = gj.getBoxObjectFor(gg);
          var e = gj.getBoxObjectFor(i);
          gk.left = gh.screenX - e.screenX;
          gk.top = gh.screenY - e.screenY
        } else {
          gf = gg;
          do {
            gk.left += gf.offsetLeft;
            gk.top += gf.offsetTop;
            if (z.isWebkit > 0 && z.Dom.getStyle(gf, "position") == "fixed") {
              gk.left += gj.body.scrollLeft;
              gk.top += gj.body.scrollTop;
              break
            }
            gf = gf.offsetParent
          } while (gf && gf != gg);if (z.isOpera > 0 || (z.isWebkit > 0 && z.Dom.getStyle(gg, "position") == "absolute")) {
            gk.top -= gj.body.offsetTop
          }
          gf = gg.offsetParent;
          while (gf && gf != gj.body) {
            gk.left -= gf.scrollLeft;
            if (!z.isOpera || gf.tagName != "TR") {
              gk.top -= gf.scrollTop
            }
            gf = gf.offsetParent
          }
        }
      }
      return gk
    }
    ;
    z.Dom.getOwnerDocument = function(e) {
      return e.nodeType == 9 ? e : e.ownerDocument || e.document
    }
    ;
    z.Dom.setProperties = function(i, e) {
      z.each(e, function(gg, gf) {
        z.Dom._setProperty(i, gf, gg)
      })
    }
    ;
    z.Dom._setProperty = function(i, e, gf) {
      if (e == "style") {
        i.style.cssText = gf
      } else {
        if (e == "class") {
          i.className = gf
        } else {
          if (e == "for") {
            i.htmlFor = gf
          } else {
            if (e in z.Dom._DIRECT_ATTRIBUTE_MAP) {
              i.setAttribute(z.Dom._DIRECT_ATTRIBUTE_MAP[e], gf)
            } else {
              i[e] = gf
            }
          }
        }
      }
    }
    ;
    z.Dom._DIRECT_ATTRIBUTE_MAP = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      rowspan: "rowSpan",
      valign: "vAlign",
      height: "height",
      width: "width",
      usemap: "useMap",
      frameborder: "frameBorder"
    };
    z.G = function() {
      for (var gf = [], gg = arguments.length - 1; gg > -1; gg--) {
        var gh = arguments[gg];
        gf[gg] = null;
        if (typeof gh == "object" && gh && gh.dom) {
          gf[gg] = gh.dom
        } else {
          if ((typeof gh == "object" && gh && gh.tagName) || gh == window || gh == document) {
            gf[gg] = gh
          } else {
            if (typeof gh == "string" && (gh = document.getElementById(gh))) {
              gf[gg] = gh
            }
          }
        }
      }
      return gf.length < 2 ? gf[0] : gf
    }
    ;
    z.ac = function(e, i) {
      if (!(e = this.G(e))) {
        return
      }
      i = this.trim(i);
      if (!new RegExp("(^| )" + i.replace(/(\W)/g, "\\$1") + "( |$)").test(e.className)) {
        e.className = e.className.split(/\s+/).concat(i).join(" ")
      }
    }
    ;
    z.addClassName = z.ac;
    z.each = function(gi, e) {
      if (typeof e != "function") {
        return gi
      }
      if (gi) {
        if (gi.length === undefined) {
          for (var gf in gi) {
            e.call(gi[gf], gi[gf], gf)
          }
        } else {
          for (var gg = 0, gh = gi.length; gg < gh; gg++) {
            e.call(gi[gg], gi[gg], gg)
          }
        }
      }
      return gi
    }
    ;
    z.extend = function(gi, gg) {
      if (gi && gg && typeof (gg) == "object") {
        for (var gh in gg) {
          gi[gh] = gg[gh]
        }
        var gf = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
        for (var e = 0, i; e < gf.length; e++) {
          i = gf[e];
          if (Object.prototype.hasOwnProperty.call(gg, i)) {
            gi[i] = gg[i]
          }
        }
      }
      return gi
    }
    ;
    z.hide = function() {
      z.each(arguments, function(e) {
        if (e = z.G(e)) {
          e.style.display = "none"
        }
      })
    }
    ;
    z.inherit = function(gk, gg, gf) {
      var gj = gk.prototype;
      var gi = function() {};
      gi.prototype = gg.prototype;
      var gh = gk.prototype = new gi();
      if (typeof gf == "string") {
        gh._className = gf
      }
      for (var e in gj) {
        gh[e] = gj[e]
      }
      gk.prototype.constructor = gj.constructor;
      gj = null;
      return gh
    }
    ;
    z.isIE = 0;
    (function() {
        if (navigator.userAgent.indexOf("MSIE") > 0 && !window.opera) {
          /MSIE (\d+(\.\d+)?)/.test(navigator.userAgent);
          z.isIE = parseFloat(RegExp.$1)
        }
      }
    )();
    z.rc = function(e, i) {
      if (!(e = this.G(e))) {
        return
      }
      i = this.trim(i);
      var gf = e.className.replace(new RegExp("(^| +)" + i.replace(/(\W)/g, "\\$1") + "( +|$)","g"), "$2");
      if (e.className != gf) {
        e.className = gf
      }
    }
    ;
    z.removeClassName = z.rc;
    z.show = function() {
      this.each(arguments, function(e) {
        if (e = z.G(e)) {
          e.style.display = ""
        }
      })
    }
    ;
    z.trim = function(e) {
      return e.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, "")
    }
    ;
    if (typeof HTMLElement != "undefined" && HTMLElement.prototype.__lookupGetter__ && !HTMLElement.prototype.__lookupGetter__("children") && !window.opera) {
      try {
        HTMLElement.prototype.__defineGetter__("children", function() {
          for (var gf = [], gg = 0, gi, gh = 0, e = this.childNodes.length; gh < e; gh++) {
            gi = this.childNodes[gh];
            if (gi.nodeType == 1) {
              gf[gg++] = gi;
              if (gi.name) {
                if (!gf[gi.name]) {
                  gf[gi.name] = []
                }
                gf[gi.name][gf[gi.name].length] = gi
              }
              if (gi.id) {
                gf[gi.id] = gi
              }
            }
          }
          return gf
        })
      } catch (fd) {}
    }
    if (typeof (HTMLElement) != "undefined" && !window.opera && HTMLElement.prototype && !HTMLElement.prototype.insertAdjacentHTML) {
      HTMLElement.prototype.insertAdjacentHTML = function(i, gf) {
        var gg = this.ownerDocument.createRange();
        gg.setStartBefore(this);
        gg = gg.createContextualFragment(gf);
        switch (i) {
          case "beforeBegin":
            this.parentNode.insertBefore(gg, this);
            break;
          case "afterBegin":
            this.insertBefore(gg, this.firstChild);
            break;
          case "beforeEnd":
            this.appendChild(gg);
            break;
          case "afterEnd":
            if (!this.nextSibling) {
              this.parentNode.appendChild(gg)
            } else {
              this.parentNode.insertBefore(gg, this.nextSibling)
            }
            break
        }
      }
    }
    if (typeof HTMLElement != "undefined" && !window.opera) {
      HTMLElement.prototype.contains = function(e) {
        if (e == this) {
          return true
        }
        while (e = e.parentNode) {
          if (e == this) {
            return true
          }
        }
        return false
      }
    }
    if (!z.Browser.ie && typeof Event != "undefined" && !window.opera) {
      Event.prototype.__defineSetter__("returnValue", function(e) {
        if (!e) {
          this.preventDefault()
        }
        return e
      });
      Event.prototype.__defineSetter__("cancelBubble", function(e) {
        if (e) {
          this.stopPropagation()
        }
        return e
      })
    }
    z.each = function(gh, gg) {
      if (bm(gg)) {
        for (var gf = 0, e = gh.length; gf < e; gf++) {
          if (gg.call(gh, gh[gf], gf) === false) {
            break
          }
        }
      }
      return gh
    }
    ;
    z.Platform = {
      x11: 0,
      macintosh: 0,
      windows: 0,
      android: 0,
      iphone: 0,
      ipad: 0
    };
    for (var e9 in z.Platform) {
      if (z.Platform.hasOwnProperty(e9)) {
        z.Platform[e9] = new RegExp(e9,"i").test(window.navigator.userAgent) ? 1 : 0
      }
    }
    if (typeof (z.Dom) === "undefined") {
      z.Dom = {}
    }
    z.Dom.getComputedStyle = function(i, e) {
      var gg = i.nodeType == 9 ? i : i.ownerDocument || i.document, gf;
      if (gg.defaultView && gg.defaultView.getComputedStyle) {
        gf = gg.defaultView.getComputedStyle(i, null);
        if (gf) {
          return gf[e] || gf.getPropertyValue(e)
        }
      } else {
        if (i.currentStyle) {
          return i.currentStyle[e] || ""
        }
      }
      return ""
    }
    ;
    var aL = z.BaseEvent;
    var db = z.BaseClass;
    db.prototype.toString = function() {
      return this._className || ""
    }
    ;
    z.on = function(gf, i, e) {
      if (!(gf = z.G(gf))) {
        return gf
      }
      i = i.replace(/^on/, "");
      if (gf.addEventListener) {
        gf.addEventListener(i, e, false)
      } else {
        if (gf.attachEvent) {
          gf.attachEvent("on" + i, e)
        }
      }
      return gf
    }
    ;
    z.un = function(gf, i, e) {
      if (!(gf = z.G(gf))) {
        return gf
      }
      i = i.replace(/^on/, "");
      if (gf.removeEventListener) {
        gf.removeEventListener(i, e, false)
      } else {
        if (gf.detachEvent) {
          gf.detachEvent("on" + i, e)
        }
      }
      return gf
    }
    ;
    z.hc = function(gg, gf) {
      if (!gg || !gg.className || typeof gg.className != "string") {
        return false
      }
      var i = -1;
      try {
        i = gg.className == gf || gg.className.search(new RegExp("(\\s|^)" + gf + "(\\s|$)"))
      } catch (gh) {
        return false
      }
      return i > -1
    }
    ;
    z.isEmptyObject = function(gf) {
      if (Object.prototype.toString.call(gf) === "[object Object]") {
        for (var e in gf) {
          return false
        }
        return true
      } else {
        return false
      }
    }
    ;
    var dP = {
      mapStyleNameIdPair: {
        "default": 0,
        "grayed-out": 1
      },
      mapHost: "https://map.baidu.com",
      apiHost: "https://api.map.baidu.com",
      staticHost: "//webmap0.bdimg.com",
      imgPath: "//webmap0.bdimg.com/image/api/",
      tileDomain: ["https://maponline0.bdimg.com", "https://maponline1.bdimg.com", "https://maponline2.bdimg.com", "https://maponline3.bdimg.com"],
      optDomain: "http://10.120.25.45:8017",
      rasterTilePath: "/tile/",
      vectorTilePath: "/pvd/",
      originTilePath: ["https://pcor.baidu.com"],
      getIconSetPath: function(e) {
        var i = "map_icons2x/";
        if (typeof e === "string" && this.mapStyleNameIdPair[e] > 0) {
          i = "map_icons2x_" + (this.mapStyleNameIdPair[e] - 1) + "/"
        }
        return "https://maponline0.bdimg.com/sty/" + i
      },
      getMapStyleFiles: function(gf) {
        var gh = true;
        if (typeof gf === "string" && gf !== "default") {
          gh = false
        }
        var gi = gh ? "" : "_" + (this.mapStyleNameIdPair[gf] - 1);
        var i = eo();
        var gg = "udt=" + i.udt + "&v=" + i.ver;
        var e = "https://maponline0.bdimg.com/sty/";
        return [e + "icons_2x" + gi + ".js?" + gg, e + "fs" + gi + ".js?" + gg, e + "indoor_fs.js?" + gg]
      },
      tvc: {
        ditu: {
          normal: {
            version: "088",
            updateDate: "20190618"
          },
          satellite: {
            version: "009",
            updateDate: "20190618"
          },
          normalTraffic: {
            version: "081",
            updateDate: "20190618"
          },
          satelliteTraffic: {
            version: "083",
            updateDate: "20190618"
          },
          mapJS: {
            version: "104",
            updateDate: "20190618"
          },
          satelliteStreet: {
            version: "083",
            updateDate: "20190618"
          },
          panoClick: {
            version: "1033",
            updateDate: "20180108"
          },
          panoUdt: {
            version: "20180108",
            updateDate: "20180108"
          },
          panoSwfAPI: {
            version: "20150123",
            updateDate: "20150123"
          },
          panoSwfPlace: {
            version: "20141112",
            updateDate: "20141112"
          },
          earthVector: {
            version: "001",
            updateDate: "20190618"
          }
        }
      },
      msv: {
        mapstyle: {
          updateDate: "20190108",
          version: "001"
        }
      }
    };
    dP.imgResources = {
      blankGIF: dP.staticHost + "/res/litemapapi/v1d1/images/blank.gif?20170501",
      markerPng: dP.staticHost + "/res/litemapapi/v1d1/images/marker.png?20170501",
      locPng: dP.staticHost + "/res/litemapapi/v1d1/images/loc.png?20180918",
      locNewPng: dP.staticHost + "/res/litemapapi/v1d1/images/loc_new.png?20190314",
      zoomPng: dP.staticHost + "/res/litemapapi/v1d1/images/zoombtn.png?20180918",
      mapLogoPng: dP.staticHost + "/res/litemapapi/v1d1/images/logo-2x.png?20190226"
    };
    var dW = dP;
    var aF = "ruler.cur";
    if (z.Browser.ie || z.Browser.edge) {
      z.extend(dW, {
        distCursor: "url(" + dW.imgPath + aF + "),crosshair",
        defaultCursor: "url(" + dW.imgPath + "openhand.cur),default",
        draggingCursor: "url(" + dW.imgPath + "closedhand.cur),move"
      })
    } else {
      if (z.Browser.firefox) {
        z.extend(dW, {
          distCursor: "url(" + dW.imgPath + aF + "),crosshair",
          defaultCursor: "-moz-grab",
          draggingCursor: "-moz-grabbing"
        })
      } else {
        if (z.Browser.chrome || z.Browser.safari) {
          z.extend(dW, {
            distCursor: "url(" + dW.imgPath + aF + ") 2 6,crosshair",
            defaultCursor: "url(" + dW.imgPath + "openhand.cur) 8 8,default",
            draggingCursor: "url(" + dW.imgPath + "closedhand.cur) 8 8,move"
          });
          if (z.Platform.macintosh) {
            dW.defaultCursor = "-webkit-grab";
            dW.draggingCursor = "-webkit-grabbing"
          }
        } else {
          z.extend(dW, {
            distCursor: "url(" + dW.imgPath + aF + "),crosshair",
            defaultCursor: "url(" + dW.imgPath + "openhand.cur),default",
            draggingCursor: "url(" + dW.imgPath + "closedhand.cur),move"
          })
        }
      }
    }
    aT = aT || {};
    aT.version = "3.0";
    aT._register = [];
    aT.register = function(e) {
      this._register[this._register.length] = e
    }
    ;
    aT.guid = 1;
    aT.getGUID = function(e) {
      return (e || "") + aT.guid++
    }
    ;
    var eW = window.BMAP_AUTHENTIC_KEY || "";
    aT.bmapVerifyCbk = function(e) {
      if (e && e.error !== 0) {
        if (typeof map !== "undefined") {
          map.getContainer().innerHTML = "";
          map.__listeners = {}
        }
        aT = null;
        var i = "百度未授权使用地图API，可能是因为您提供的密钥不是有效的百度LBS开放平台密钥，或此密钥未对本应用的百度地图JavaScriptAPI授权。您可以访问如下网址了解如何获取有效的密钥：http://lbsyun.baidu.com/apiconsole/key#。";
        switch (e.error) {
          case 101:
            i = "开发者禁用了该ak的jsapi服务权限。您可以访问如下网址了解如何获取有效的密钥：http://lbsyun.baidu.com/apiconsole/key#。";
            break;
          case 102:
            i = "开发者Referer不正确。您可以访问如下网址了解如何获取有效的密钥：http://lbsyun.baidu.com/apiconsole/key#。";
            break
        }
        alert(i)
      }
    }
    ;
    aT.verify = function() {
      var e = dW.apiHost + "/?qt=verify&ak=" + eW + "&callback=" + dw + ".bmapVerifyCbk";
      fO.load(e)
    }
    ;
    aT.apiLoad = aT.apiLoad || function() {}
    ;
    function ex(i, e) {
      this._size = i;
      this._cache = [];
      this._totalGetTimes = 0;
      this._totalHitTimes = 0;
      this._options = {
        clearCallback: null,
        removeOldCallback: null
      };
      e = e || {};
      for (var gf in e) {
        if (e.hasOwnProperty(gf)) {
          this._options[gf] = e[gf]
        }
      }
    }
    ex.prototype.setData = function(gf, gg) {
      var e = this._cache;
      var i = this._size;
      if (i === 0) {
        return
      }
      if (e.length > i) {
        this._removeOld()
      }
      if (!e[gf]) {
        e.push(gg)
      }
      e[gf] = gg;
      gg._key_ = gf
    }
    ;
    ex.prototype.getHitRate = function() {
      return Math.round(this._totalHitTimes / this._totalGetTimes * 1000) / 1000
    }
    ;
    ex.prototype.getData = function(i) {
      var e = this._cache[i];
      if (e) {
        this._totalHitTimes++
      }
      this._totalGetTimes++;
      return e
    }
    ;
    ex.prototype.removeData = function(gh) {
      if (this._options.clearCallback) {
        this._options.clearCallback(this._cache[gh])
      }
      var gf = this._cache;
      var gi = gf[gh];
      for (var gg = 0, e = gf.length; gg < e; gg++) {
        if (gf[gg] === gi) {
          gf.splice(gg, 1);
          break
        }
      }
      delete gf[gh]
    }
    ;
    ex.prototype._removeOld = function() {
      var e = this._cache;
      var gh = Math.round(this._size * 0.6);
      for (var gg = 0; gg < gh; gg++) {
        var gf = e[gg]._key_;
        if (this._options.clearCallback) {
          this._options.clearCallback(e[gf])
        }
        delete e[gf]
      }
      e.splice(0, gh);
      if (this._options.removeOldCallback) {
        this._options.removeOldCallback()
      }
    }
    ;
    ex.prototype.clear = function() {
      var gf = this._cache;
      for (var gh = 0, e = gf.length; gh < e; gh++) {
        var gg = gf[gh]._key_;
        if (this._options.clearCallback) {
          this._options.clearCallback(gf[gg])
        }
        delete gf[gg]
      }
      this._cache = gf = []
    }
    ;
    ex.prototype.forEach = function(gg) {
      var gf = this._cache;
      for (var gi = 0, e = gf.length; gi < e; gi++) {
        var gh = gf[gi]._key_;
        gg(gf[gh])
      }
    }
    ;
    ex.prototype.getBatch = function(gh) {
      var e = [];
      for (var gg = 0, gf = gh.length; gg < gf; gg++) {
        if (this.getData(gh[gg])) {
          e[e.length] = this.getData(gh[gg])
        }
      }
      return e
    }
    ;
    ex.prototype.clearExcept = function(gi) {
      var gf = this._cache;
      for (var e = gf.length, gh = e - 1; gh >= 0; gh--) {
        var gg = this._cache[gh]._key_;
        if (!gi[gg]) {
          gf.splice(gh, 1);
          if (this._options.clearCallback) {
            this._options.clearCallback(gf[gg])
          }
          delete gf[gg]
        }
      }
    }
    ;
    ex.prototype.getDataCount = function() {
      return this._cache.length
    }
    ;
    function ab() {}
    z.extend(ab.prototype, {
      centerAndZoomIn: function(gl, gf, gm) {
        var gj = this;
        if (!gl && !gf) {
          return
        }
        gl = gl || this.centerPoint;
        gf = gf || this.zoomLevel;
        gf = this._getProperZoom(gf).zoom;
        if (this.mapType === BMAP_EARTH_MAP) {
          if (!this._earth) {
            this.mapType = BMAPGL_NORMAL_MAP;
            this.temp.originMapType = BMAP_EARTH_MAP;
            function gk() {
              gj._earth = new aT.Earth(gj,{
                showRealSunlight: gj.config.showRealSunlight,
                showMilkyway: gj.config.showMilkyway,
                earthBackground: gj.config.earthBackground
              });
              gj._proxyEarthEvents();
              gj._changeEarthMapType(BMAP_EARTH_MAP);
              z.extend(gj, aT.EarthView.prototype);
              if (!gj._navigationCtrl && gj.config.showControls) {
                gj._navigationCtrl = new aT.NavigationControl3D(gj)
              }
              delete gj.temp.originMapType
            }
            c9.load("earth", function() {
              if (aT["FeatureStyle" + gj.config.style]) {
                gk()
              } else {
                gj.loadMapStyleFiles(function() {
                  gk()
                })
              }
            })
          }
        }
        this.lastLevel = this.zoomLevel || gf;
        this.zoomLevel = gf;
        var gh = new aL("onload");
        gh.point = gl;
        gh.zoom = gf;
        this.centerPoint = this.restrictCenter(new fU(gl.lng,gl.lat));
        if (this.centerPoint.zoom) {
          this.zoomLevel = this.centerPoint.zoom
        }
        this.defaultZoomLevel = this.defaultZoomLevel || this.zoomLevel;
        this.defaultCenter = this.defaultCenter || this.centerPoint;
        if (!this.loaded && !(this.temp.originMapType === BMAP_EARTH_MAP)) {
          var i = this.config.defaultMaxBounds;
          var gi = new cj(i,"baidu",this.mapType);
          var gg = new b7({
            mapType: this.mapType,
            copyright: gi,
            customLayer: false,
            baseLayer: true,
            tileTypeName: "web"
          });
          gg._isInnerLayer = true;
          this.addTileLayer(gg);
          if (this.mapType === BMAP_SATELLITE_MAP && this._isHybridShow === true) {
            this._addHybirdMap()
          }
        }
        this.dispatchEvent(gh);
        this.loaded = true;
        gm = gm || {};
        gm.callback && gm.callback()
      },
      _setPlatformPosition: function(gm, gl, gp) {
        gp = gp || {};
        if (gm === 0 && gl === 0 && !gp.point) {
          return
        }
        if (isNaN(gp.initMapOffsetX)) {
          gp.initMapOffsetX = this.offsetX
        }
        if (isNaN(gp.initMapOffsetY)) {
          gp.initMapOffsetY = this.offsetY
        }
        var gn = gm + gp.initMapOffsetX;
        var gk = gl + gp.initMapOffsetY;
        if (gp.point) {
          var i = this.restrictCenter(gp.point);
          if (!i.equals(this.centerPoint)) {
            this.centerPoint = i.clone();
            this.fire(new aL("oncenter_changed"))
          }
        } else {
          var gg = this.offsetX - gn;
          var e = this.offsetY - gk;
          var gf = this.getZoomUnits();
          var gj = this.centerPoint.lng;
          var gi = this.centerPoint.lat;
          var gh = new fU(gj,gi);
          this.centerPoint = this.restrictCenter(new fU(gh.lng + gg * gf,gh.lat - e * gf), gf);
          this.fire(new aL("oncenter_changed"));
          if (this.zoomLevel < 10) {
            gn = this.offsetX - (this.centerPoint.lng - gh.lng) / gf;
            gk = this.offsetY + (this.centerPoint.lat - gh.lat) / gf
          }
        }
        this.offsetX = gn;
        this.offsetY = gk;
        var go = this.platform.style;
        go.left = gn + "px";
        go.top = gk + "px";
        this.maskLayer.style.left = -gn + "px";
        this.maskLayer.style.top = -gk + "px";
        if (gp.dispatchEvent !== false) {
          this.dispatchEvent(new aL("onmoving"))
        }
      },
      zoomTo: function(e, gj, gn) {
        gn = gn || {};
        gn.zoomCenter = gj;
        if (gn.noAnimation !== true) {
          this.deepZoomTo(e, gn);
          return
        }
        if (typeof e !== "number") {
          return
        }
        var gh = bv[this.mapType];
        if (!gh) {
          return
        }
        var gf = e;
        e = this._getProperZoom(e).zoom;
        if (e === this.zoomLevel) {
          var gk = new aL("onzoomexceeded");
          gk.targetZoom = gf;
          this.dispatchEvent(gk);
          gn.callback && gn.callback();
          return
        }
        this.lastLevel = this.zoomLevel;
        if (gj) {
          this.temp._cPoint = gj;
          this.temp._cPixel = this.pointToPixelIn(gj)
        } else {
          if (this.getInfoWindow()) {
            var gm = this.getInfoWindow().getPoint();
            this.temp._cPixel = this.pointToPixelIn(gm);
            this.temp._cPoint = gm
          }
        }
        if (this.config.zoomCenter) {
          gj = this.config.zoomCenter;
          this.temp._cPoint = gj;
          this.temp._cPixel = this.pointToPixelIn(gj)
        }
        if (gj || this.temp.infoWin && this.temp.infoWin.isOpen()) {
          var i = this.temp._cPoint;
          var gl = this.temp._cPixel;
          var gg = this.getZoomUnits(e);
          var gi = new fU(i.lng + gg * (this.width / 2 - gl.x),i.lat - gg * (this.height / 2 - gl.y));
          this.centerPoint = this.restrictCenter(gi, gg, e);
          if (this.centerPoint.zoom) {
            e = this.centerPoint.zoom
          }
        }
        if (gn.fireEvent !== false) {
          this.dispatchEvent(new aL("onzoomstart"))
        }
        if (e !== this.zoomLevel) {
          this.zoomLevel = e;
          this.dispatchEvent(new aL("onzooming"));
          this.dispatchEvent(new aL("onzoomstartcode"))
        }
        if (gn.fireEvent !== false) {
          this.dispatchEvent(new aL("onzoomend"))
        }
        if (gn.callback) {
          gn.callback()
        }
      },
      deepZoomMedia: function(e) {
        var i = this;
        if (!i.temp.isStdCtrlBusy) {
          i.temp.isStdCtrlBusy = true;
          i.deepZoomTo(i.zoomLevel + e);
          setTimeout(function() {
            i.temp.isStdCtrlBusy = false
          }, 400)
        }
      },
      deepZoomTo: function(gk, gg) {
        gg = gg || {};
        var gi = gk - this.zoomLevel;
        var gh = this._getProperZoom(gk);
        if (gh.exceeded) {
          var e = new aL("onzoomexceeded");
          e.targetZoom = gk;
          this.dispatchEvent(e);
          return
        }
        var i;
        if (gg.zoomCenter) {
          i = this.pointToPixelIn(gg.zoomCenter)
        } else {
          if (this.getInfoWindow()) {
            i = this.pointToPixelIn(this.getInfoWindow().getPoint(), {
              zoom: this.lastLevel
            })
          } else {
            var i = new dh(this.width / 2,this.height / 2)
          }
        }
        this.lastLevel = this.zoomLevel;
        var gj = this.deepZoom || new a8(this);
        var gf = gi > 0 ? 1 : -1;
        gj.zoomMap(i, gi, gf, null, gg)
      },
      flyToIn: function(gl, e) {
        if (e === this.zoomLevel) {
          this.panToIn(gl);
          return
        }
        var gi = this._getProperZoom(e);
        if (gi.exceeded) {
          var gm = new aL("onzoomexceeded");
          gm.targetZoom = e;
          this.dispatchEvent(gm);
          return
        }
        var gk = e - this.zoomLevel;
        var gf = new dh(this.width / 2,this.height / 2);
        var i = this.pointToPixelIn(gl);
        var gj = new c8(i.x - gf.x,i.y - gf.y);
        this.lastLevel = this.zoomLevel;
        if (Math.abs(gk) >= 4 || Math.abs(gj.width) > this.width || Math.abs(gj.height) > this.height) {
          this.centerAndZoomIn(gl, e);
          return
        }
        var gh = this.deepZoom || new a8(this);
        var gg = gk > 0 ? 1 : -1;
        gh.zoomMap(i, gk, gg, gj)
      },
      panToIn: function(i, gf) {
        gf = gf || {};
        if (!i || i.equals(this.centerPoint)) {
          gf.callback && gf.callback();
          return
        }
        var gg = this.pointToPixelIn(i);
        var e = Math.round(this.width / 2);
        var gh = Math.round(this.height / 2);
        if (Math.abs(e - gg.x) > this.width || Math.abs(gh - gg.y) > this.height || gf.noAnimation === true) {
          this._panToIn(e - gg.x, gh - gg.y, i);
          gf.callback && gf.callback()
        } else {
          this._panBy(e - gg.x, gh - gg.y, gf)
        }
      },
      _panToIn: function(i, e, gg) {
        var gf = this.temp;
        if (gf.operating === true) {
          return
        }
        if (gf.dragAni) {
          gf.dragAni.stop();
          gf.dragAni = null;
          this.dispatchEvent(new aL("onmoveend"))
        }
        this.dispatchEvent(new aL("onmovestart"));
        this._setPlatformPosition(i, e, {
          point: gg
        });
        this.dispatchEvent(new aL("onmoveend"))
      },
      panBy: function(i, e, gf) {
        gf = gf || {};
        i = Math.round(i) || 0;
        e = Math.round(e) || 0;
        if (Math.abs(i) <= this.width && Math.abs(e) <= this.height && gf.noAnimation !== true) {
          this._panBy(i, e, gf)
        } else {
          this._panToIn(i, e);
          gf.callback && gf.callback()
        }
      },
      _panBy: function(i, e, gh) {
        if (this.temp.operating === true) {
          return
        }
        gh = gh || {};
        this.dispatchEvent(new aL("onmovestart"));
        var gg = this;
        var gf = gg.temp;
        gf.pl = gg.offsetX;
        gf.pt = gg.offsetY;
        if (gf.tlPan) {
          gf.tlPan.cancel()
        }
        if (gf.dragAni) {
          gf.dragAni.stop();
          gf.dragAni = null;
          this.dispatchEvent(new aL("onmoveend"))
        }
        gf.tlPan = new n({
          fps: gh.fps || gg.config.fps,
          duration: gh.duration || gg.config.actionDuration,
          transition: gh.transition || bK.easeInOutQuad,
          render: function(gi) {
            this.terminative = gg.temp.operating;
            if (gg.temp.operating) {
              return
            }
            gg._setPlatformPosition(Math.ceil(i * gi), Math.ceil(e * gi), {
              initMapOffsetX: gf.pl,
              initMapOffsetY: gf.pt
            })
          },
          finish: function(gi) {
            gg.dispatchEvent(new aL("onmoveend"));
            gg.temp.tlPan = false;
            if (gg.temp.stopArrow === true) {
              gg.temp.stopArrow = false;
              if (gg.temp.arrow !== 0) {
                gg._arrow()
              }
            }
            gh.callback && gh.callback()
          }
        })
      },
      getCenterIn: function() {
        return this.centerPoint
      },
      getZoom: function() {
        return this.zoomLevel
      },
      setTilt: function() {},
      getTilt: function() {
        return this._tilt
      },
      setHeading: function() {},
      getHeading: function() {
        return this._heading
      },
      restrictCenter: function(gk, gh, gl) {
        this.isRestrict = false;
        gh = gh || this.getZoomUnits();
        gl = gl || this.zoomLevel;
        var gf = this.pixelToPointIn(new dh(0,0), {
          center: gk,
          zoom: gl
        });
        var gi = this.pixelToPointIn(new dh(0,this.height), {
          center: gk,
          zoom: gl
        });
        if (this.zoomLevel < 5) {
          if (gf.lat > cl.MAX_LAT && gi.lat < cl.MIN_LAT) {
            this.isRestrict = true;
            var i = cl.MAX_LAT - gk.lat;
            var e = gk.lat - cl.MIN_LAT;
            var gj;
            if (i < e) {
              gj = i / (this.height / 2)
            } else {
              gj = e / (this.height / 2)
            }
            var gg = 18 - dy(gj);
            this.zoomLevel = Math.ceil(gg);
            gk.zoom = Math.ceil(gg);
            return gk
          }
        }
        if (gf.lat > cl.MAX_LAT) {
          this.isRestrict = true;
          gk.lat = cl.MAX_LAT - this.height / 2 * gh
        } else {
          if (gi.lat < cl.MIN_LAT) {
            this.isRestrict = true;
            gk.lat = cl.MIN_LAT + this.height / 2 * gh
          }
        }
        return gk
      }
    });
    function cl(e, gf) {
      if (typeof e === "string") {
        e = document.getElementById(e)
      }
      db.call(this);
      this.container = e;
      this.width = e.clientWidth;
      this.height = e.clientHeight;
      this.offsetX = 0;
      this.offsetY = 0;
      this._setStyle(e);
      e.unselectable = "on";
      e.innerHTML = "";
      z.ac(e, "bmap-container");
      e.appendChild(this.render());
      this._initDate = new Date();
      this.platform = e.children[0];
      this.maskLayer = this.platform.children[0];
      this._panes = {};
      this.centerPoint = new fU(0,0);
      this.zoomLevel = 0;
      this._heading = 0;
      this._tilt = 0;
      this._bounds = new cX();
      this.lastLevel = 0;
      this._lock = false;
      this._enableTiltZoom = 7;
      this._enableHeadingZoom = 7;
      this.defaultZoomLevel = null;
      this.defaultCenter = null;
      this.zoomEventStatus = "idle";
      this.currentOperation = cZ.idle;
      this._setConfig(gf);
      this._initMapRenderType();
      this._animationInfo = {};
      this._animationInfoUnstopable = {};
      this.suspendLoad = false;
      this._customTileLabels = [];
      if (this._renderType === "webgl") {
        this._workerMgr = new eS(this);
        this._featureMgr = new cp();
        z.extend(this, ck.prototype);
        this.jobScheduler = new eB(this);
        this.benchmark = new S();
        this._setupWebGLMap();
        this.deviceInfo = {
          hardwareInfo: {
            renderer: "",
            vendor: ""
          }
        };
        if (aK.ifSupportWebGL._renderer) {
          this.deviceInfo.hardwareInfo.renderer = aK.ifSupportWebGL._renderer;
          this.deviceInfo.hardwareInfo.vendor = aK.ifSupportWebGL._vendor
        }
      } else {
        z.extend(this, ab.prototype)
      }
      if (!bv[this.config.mapType]) {
        this.config.mapType = BMAPGL_NORMAL_MAP
      }
      if (this.config.mapType === BMAP_EARTH_MAP && !this.config.enableEarth) {
        if (this.forceEnableEarth() === false) {
          this.config.mapType = BMAPGL_NORMAL_MAP
        }
      }
      this.mapType = this.config.mapType;
      this.preMapType = null;
      if (this.config.enableEarth) {
        var gi = this.maskLayer.style;
        gi.opacity = 0;
        gi.background = "#000";
        if (this.config.mapType === BMAP_EARTH_MAP) {
          gi.opacity = 1
        }
        setTimeout(function() {
          gi.WebkitTransition = gi.transition = "opacity .4s"
        }, 100)
      }
      this._isHybridShow = this.config.showStreetLayer;
      this.temp = {
        operating: false,
        arrow: 0,
        lastDomMoveTime: 0,
        lastLoadTileTime: 0,
        lastMovingTime: 0,
        canKeyboard: false,
        I: function(i) {
          return z.I(i)
        },
        curSpots: [],
        curSpotsArray: [],
        curAreaSpot: null,
        spotsGuid: 1,
        registerIndex: -1,
        hoverOnSpot: null,
        isStdCtrlBusy: false
      };
      window.InstanceCore = this.temp.I;
      this.platform.style.cursor = this.config.defaultCursor;
      this._bind();
      for (var gg = 0; gg < aT._register.length; gg++) {
        aT._register[gg](this)
      }
      this.temp.registerIndex = gg;
      var gh = this;
      if (this._renderType === "webgl") {
        c9.load("oppcgl", function() {
          gh._asyncRegister()
        })
      } else {
        c9.load("oppc", function() {
          gh._asyncRegister()
        })
      }
      if (this.config.mapType === "B_EARTH_MAP") {
        if (!aT.Earth) {
          c9.load("earth", function() {})
        } else {
          gh._syncAndChangeMapType("B_EARTH_MAP")
        }
      }
    }
    cl.MAX_TILT = 87;
    cl.MAX_DRAG_TILT = 73;
    cl.MAX_DRAG_TILT_L2 = 50;
    cl.MIN_TILT = 0;
    cl.MAX_LAT = 19431424;
    cl.MIN_LAT = -16023552;
    cl.WORLD_SIZE_MC_HALF = 20037726.372307256;
    cl.WORLD_SIZE_MC = cl.WORLD_SIZE_MC_HALF * 2;
    cl.RIGHT_EDGE_POINT = new fU(cl.WORLD_SIZE_MC_HALF,0);
    cl.LEFT_EDGE_POINT = new fU(-cl.WORLD_SIZE_MC_HALF,0);
    cl.inherits(db, "Map");
    z.extend(cl.prototype, {
      render: function() {
        var e = L("div", {
          id: "platform"
        });
        var gg = e.style;
        gg.overflow = "visible";
        gg.position = "absolute";
        gg.zIndex = 5;
        gg.top = gg.left = "0px";
        var i = L("div", {
          id: "mask",
          "class": "BMap_mask"
        });
        var gf = i.style;
        gf.position = "absolute";
        gf.top = gf.left = "0px";
        gf.zIndex = "9";
        gf.overflow = "hidden";
        gf.WebkitUserSelect = "none";
        gf.width = this.width + "px";
        gf.height = this.height + "px";
        e.appendChild(i);
        return e
      },
      _initMapRenderType: function() {
        var e = this.config.forceRenderType;
        if (e === "dom") {
          this._renderType = "dom";
          return
        } else {
          if (e === "canvas") {
            if (aK.isModernBrowser) {
              this._renderType = "canvas";
              return
            }
          } else {
            if (e === "webgl") {
              if (aK.ifSupportWebGL()) {
                this._renderType = "webgl";
                return
              }
            }
          }
        }
        if (aK.ifSupportWebGL() && aK.ifEnableWebGLMap()) {
          this._renderType = "webgl";
          return
        }
        if (aK.isModernBrowser && aK.ifEnableCanvas2dMap()) {
          this._renderType = "canvas";
          return
        }
        this._renderType = "dom"
      },
      _setConfig: function(i) {
        i = i || {};
        this.config = {
          bottomOffset: 0,
          clickInterval: 200,
          enableDragging: true,
          enableKeyboard: false,
          enableDblclickZoom: true,
          enableContinuousZoom: true,
          enableWheelZoom: false,
          enablePinchZoom: true,
          enableRotateGestures: true,
          enableTiltGestures: true,
          fixCenterWhenPinch: false,
          enableAutoResize: true,
          zoomCenter: null,
          fps: 60,
          zoomerDuration: 240,
          actionDuration: 450,
          defaultCursor: dW.defaultCursor,
          draggingCursor: dW.draggingCursor,
          coordType: BMAP_COORD_MERCATOR,
          mapType: BMAPGL_NORMAL_MAP,
          drawer: BMAP_SYS_DRAWER,
          enableInertialDragging: true,
          drawMargin: 500,
          drawMarginGL: 500,
          enableFulltimeSpotClick: false,
          enableResizeOnCenter: false,
          isModernBrowser: aK.isModernBrowser,
          forceRenderType: "",
          textRenderType: null,
          ratio: aI() >= 1.5 ? 2 : 1,
          enableEarth: aK.ifEnableEarth(),
          defaultMaxBounds: new cX(new fU(-21364736,-10616832),new fU(23855104,15859712)),
          showControls: false,
          showRealSunlight: true,
          showMilkyway: true,
          earthBackground: null,
          showStreetLayer: true,
          minZoom: null,
          maxZoom: null,
          style: "default",
          enableIconClick: false,
          autoSafeArea: false,
          ak: null,
          restrictCenter: true,
          smaa: true,
          preserveDrawingBuffer: false
        };
        for (var gf in i) {
          if (i.hasOwnProperty(gf)) {
            this.config[gf] = i[gf];
            if (gf === "fixCenterWhenResize") {
              this.config.enableResizeOnCenter = i[gf]
            }
          }
        }
        if (i.style) {
          if (i.style["styleId"] && i.style["styleId"].length < 32) {
            this.config.style = i.style["styleId"]
          } else {
            this.config.style = i.style
          }
        }
        this._setTextRenderType();
        this._displayOptions = {
          poi: true,
          poiText: true,
          poiIcon: true,
          overlay: true,
          layer: true,
          building: true,
          indoor: true,
          street: true,
          skyColors: ["rgb(226, 237, 248)", "rgb(186, 211, 252)"],
          isFlat: false
        };
        if (i.displayOptions) {
          for (var e in i.displayOptions) {
            if (i.displayOptions.hasOwnProperty(e)) {
              this._displayOptions[e] = i.displayOptions[e]
            }
          }
        }
        if (this.config.restrictCenter === false) {
          this._enableTiltZoom = 0;
          this._enableHeadingZoom = 0
        }
      },
      getMinZoom: function() {
        var gf;
        if (bv[this.mapType][this._renderType]) {
          gf = bv[this.mapType][this._renderType].minZoom
        } else {
          gf = bv[this.mapType].minZoom
        }
        if (this.config.minZoom !== null && this.config.minZoom >= gf) {
          gf = this.config.minZoom
        }
        if (this.mapType === "B_EARTH_MAP") {
          return gf
        }
        var i = this.getSize();
        var e = this.worldSize(gf);
        while (e < i.width) {
          gf++;
          e = this.worldSize(gf)
        }
        return gf
      },
      getMaxZoom: function() {
        var e;
        if (bv[this.mapType][this._renderType]) {
          e = bv[this.mapType][this._renderType].maxZoom
        } else {
          e = bv[this.mapType].maxZoom
        }
        if (this.config.maxZoom !== null && this.config.maxZoom <= e) {
          e = this.config.maxZoom
        }
        return e
      },
      _drawFrame: function() {
        this._webglMapScene._painter.draw()
      },
      _setupWebGLMap: function() {
        var e = this;
        c9.load("mapgl", function() {
          e._asyncRegister()
        })
      },
      _setStyle: function(i) {
        var e = i.style;
        e.overflow = "hidden";
        if (eJ(i).position !== "absolute") {
          e.position = "relative"
        }
        e.backgroundImage = "url(" + dW.imgPath + "bg.png)";
        e.textAlign = "left";
        e.touchAction = e.MSTouchAction = "none"
      },
      _bind: function() {
        var e = this;
        if (e._renderType !== "webgl") {
          e._watchSize = function() {
            var gf = e.getContainerSize();
            if (e.width !== gf.width || e.height !== gf.height) {
              var gj = (gf.width - e.width) / 2;
              var gl = (gf.height - e.height) / 2;
              var gg = e.getZoomUnits();
              var gi = e.centerPoint;
              if (gi && !e.config.enableResizeOnCenter) {
                e.centerPoint = new fU(gi.lng + gj * gg,gi.lat - gl * gg)
              }
              e.maskLayer.style.width = (e.width = gf.width) + "px";
              e.maskLayer.style.height = (e.height = gf.height) + "px";
              var gh = new aL("onresize");
              gh.size = gf;
              e.dispatchEvent(gh);
              e.fire(new aL("onsize_changed"));
              var i = parseInt(e.platform.style.left, 10) || 0;
              var gk = parseInt(e.platform.style.top, 10) || 0;
              if (e.currentOperation !== "undefined" && e.currentOperation !== cZ.idle && (e.offsetX !== i || e.offsetY !== gk)) {
                e._setPlatformPosition(i, gk)
              }
            }
          }
        } else {
          e._watchSize = function() {
            var i = e.getContainerSize();
            if (e.width !== i.width || e.height !== i.height) {
              var gg = e.getSize();
              e.maskLayer.style.width = (e.width = i.width) + "px";
              e.maskLayer.style.height = (e.height = i.height) + "px";
              if (aI() !== e.config.ratio) {
                e.config.ratio = aI()
              }
              var gh = new aL("onresize");
              gh.size = i;
              e.dispatchEvent(gh);
              var gf = new aL("onsize_changed");
              gf.size = i;
              gf.oldSize = gg;
              e.fire(gf)
            }
          }
        }
        if (e.config.enableAutoResize) {
          e.temp.autoResizeTimer = setInterval(e._watchSize, 16)
        }
        this.on("size_changed", function() {
          var i = e.getMinZoom();
          if (e.zoomLevel < i) {
            e.setZoomIn(i, {
              noAnimation: true
            })
          }
        });
        this.on("zoom_changed", function() {
          this.dispatchEvent(new aL("onzooming"))
        })
      },
      addControl: function(e) {
        if (e && bm(e._i)) {
          e._i(this);
          this.dispatchEvent(new aL("onaddcontrol",e))
        }
      },
      removeControl: function(e) {
        if (e && bm(e.remove)) {
          e.remove();
          this.dispatchEvent(new aL("onremovecontrol",e))
        }
      },
      addContextMenu: function(e) {
        if (e) {
          e.initialize(this);
          this.dispatchEvent(new aL("onaddcontextmenu",e))
        }
      },
      removeContextMenu: function(e) {
        if (e) {
          this.dispatchEvent(new aL("onremovecontextmenu",e));
          e.remove()
        }
      },
      addOverlay: function(i) {
        if (i && bm(i._i)) {
          var gf = new aL("onbeforeaddoverlay",i);
          gf.overlay = i;
          this.dispatchEvent(gf);
          i._i(this);
          gf = new aL("onaddoverlay",i);
          gf.overlay = i;
          this.dispatchEvent(gf)
        }
      },
      removeOverlay: function(i) {
        if (i && bm(i.remove)) {
          var gf = new aL("onremoveoverlay",i);
          gf.overlay = i;
          i.remove();
          this.dispatchEvent(gf)
        }
      },
      clearOverlays: function() {
        this.dispatchEvent(new aL("onclearoverlays"))
      },
      addTileLayer: function(gh) {
        if (!gh) {
          return
        }
        for (var gg = 0, e = this.tileMgr.tileLayers.length; gg < e; gg++) {
          var gf = this.tileMgr.tileLayers[gg];
          if (gf === gh || gf.getMapType() === gh.getMapType()) {
            return
          }
        }
        gh.initialize(this);
        this.dispatchEvent(new aL("onaddtilelayer",gh))
      },
      removeTileLayer: function(e) {
        if (e) {
          e.remove();
          this.dispatchEvent(new aL("onremovetilelayer",e))
        }
      },
      getTileLayer: function(e) {
        if (this.tileMgr) {
          return this.tileMgr.getTileLayer(e)
        }
        return null
      },
      setMapType: function(e) {
        var i = this;
        if (this.mapType === e || this._mapTypeChanging) {
          return
        }
        if (e === BMAP_EARTH_MAP && !this.config.enableEarth) {
          return
        }
        if (this._earth && this._earth.getLock()) {
          return
        }
        this._mapTypeChanging = true;
        this.preMapType = this.mapType;
        this._boundsInPreMapType = this.getBoundsIn();
        if (this.preMapType === BMAP_SATELLITE_MAP) {
          this._preStreetLayerShow = this._isHybridShow
        }
        if (e === BMAP_EARTH_MAP) {
          if (!aT.Earth) {
            c9.load("earth", function() {
              i._syncAndChangeMapType(e)
            });
            return
          }
          i._syncAndChangeMapType(e)
        } else {
          if (this.preMapType !== BMAP_EARTH_MAP) {
            this._changeFlatMapType(e);
            this._mapTypeChanging = false
          } else {
            this._setMapTypeStatus(e, function(gf, gg) {
              var gh = i._earth.getEarthCanvas();
              i._changeFlatMapType(e, this.preMapType);
              if (i._mapTypeChangAni) {
                i._mapTypeChangAni.stop()
              }
              i._mapTypeChangAni = ed.start({
                el: gh,
                style: "opacity",
                startValue: 1,
                endValue: 0,
                duration: 200,
                callback: function() {
                  i._mapTypeChangAni = null;
                  i._mapTypeChanging = false
                }
              });
              gf = dl.convertLL2MC(gf);
              if (i._renderType === "webgl") {
                z.extend(i, ck.prototype);
                i.setCenterIn(gf, {
                  noAnimation: true
                });
                i.setZoomIn(gg, {
                  noAnimation: true
                })
              } else {
                z.extend(i, ab.prototype);
                i.centerAndZoomIn(gf, gg)
              }
            })
          }
        }
      },
      _changeFlatMapType: function(gj) {
        if (!gj || !bv[gj]) {
          return
        }
        var gr = this.preMapType;
        this.mapType = gj;
        var gg = this.getTileLayer(gr);
        if (gg) {
          this.removeTileLayer(gg)
        }
        if (gr !== BMAP_EARTH_MAP || this._renderType !== "webgl" || this.baseLayerAdded !== true) {
          var gf = new cX(new fU(-21364736,-10616832),new fU(23855104,15859712));
          var go = new cj(gf,"baidu",gj);
          var gq = this._renderType === "webgl" ? 2 : 1;
          var gh = new b7({
            mapType: gj,
            copyright: go,
            dataType: gq,
            customLayer: false,
            baseLayer: true,
            tileTypeName: "na"
          });
          gh._isInnerLayer = true;
          this.addTileLayer(gh);
          if (this._renderType === "webgl" && !this.baseLayerAdded) {
            this.baseLayerAdded = true
          }
        }
        if (gr === BMAP_SATELLITE_MAP) {
          this._preStreetLayerShow = this._isHybridShow;
          this._removeHybirdMap()
        } else {
          if (gj === BMAP_SATELLITE_MAP) {
            if (this._preStreetLayerShow === true || typeof this._preStreetLayerShow === "undefined") {
              this._addHybirdMap()
            }
          }
        }
        var gl = this.tileMgr.tileLayers;
        for (var gk = 0, gi = gl.length; gk < gi; gk++) {
          var gm = gl[gk];
          var gp = gm.tilesDiv;
          if (!gp) {
            continue
          }
          if (!gm._isInnerLayer && gp.style.visibility === "hidden") {
            gp.style.visibility = ""
          }
        }
        var gn = new aL("onmaptypechange");
        gn.zoomLevel = this.zoomLevel;
        gn.mapType = gj;
        gn.exMapType = gr;
        this.dispatchEvent(gn)
      },
      showStreetLayer: function(e) {
        e ? this._addHybirdMap() : this._removeHybirdMap()
      },
      hideStreetLayer: function(e) {
        this._hideStreetLayerOptions = e;
        this._removeHybirdMap(e)
      },
      _addHybirdMap: function() {
        this._isHybridShow = true;
        if (this.mapType === "B_EARTH_MAP") {
          if (this._earth) {
            this._earth.showStreetLayer()
          }
          return
        }
        if (this._hybridTileLayer) {
          this.addTileLayer(this._hybridTileLayer);
          var gi = new aL("onstreetlayer_show");
          this.dispatchEvent(gi);
          return
        }
        var gh = new cX(new fU(-21364736,-10616832),new fU(23855104,15859712));
        var gf = new cj(gh,"",BMAP_HYBRID_MAP);
        var i = new b7({
          copyright: gf,
          transparentPng: true,
          tileTypeName: "web"
        });
        i._isInnerLayer = true;
        var gg = this.isCanvasMap();
        i.getTilesUrl = function(gj, go) {
          var gm = bv.B_STREET_MAP;
          var gn = am("ditu", "satelliteStreet");
          var gk = gn.ver;
          var e = gn.udt;
          var gl = gm.tileUrls[Math.abs(gj.x + gj.y) % gm.tileUrls.length] + "?qt=vtile&x=" + (gj.x + "").replace(/-/gi, "M") + "&y=" + (gj.y + "").replace(/-/gi, "M") + "&z=" + go + "&styles=sl&v=" + gk + "&udt=" + e + "$scaler=" + aI() + "&showtext=" + (gg ? 0 : 1);
          return gl
        }
        ;
        this._isHybridShow = true;
        this.addTileLayer(i);
        this._hybridTileLayer = i;
        var gi = new aL("onstreetlayer_show");
        this.dispatchEvent(gi)
      },
      _removeHybirdMap: function(i) {
        this._isHybridShow = false;
        if (this.mapType === "B_EARTH_MAP") {
          if (this._earth) {
            this._earth.hideStreetLayer(i)
          }
          return
        }
        if (this._hybridTileLayer) {
          this.removeTileLayer(this._hybridTileLayer);
          var gf = new aL("onstreetlayer_hide");
          this.dispatchEvent(gf)
        }
      },
      isStreetLayerShow: function() {
        return this._isHybridShow
      },
      getTileId: function(e, gi) {
        var gg = bv[this.mapType];
        if (typeof gg !== "object") {
          return null
        }
        var gf = gg.baseUnits * Math.pow(2, (gg.zoomLevelBase - gi));
        var gh = parseInt(e.lng / gf, 10);
        var i = parseInt(e.lat / gf, 10);
        return {
          row: gh,
          column: i,
          level: gi
        }
      },
      reset: function() {
        this.centerAndZoomIn(this.defaultCenter, this.defaultZoomLevel, true)
      },
      setOptions: function(e) {
        e = e || {};
        for (var gf in e) {
          if (e.hasOwnProperty(gf)) {
            var i = true;
            if (typeof e[gf] !== "object") {
              i = e[gf] !== this.config[gf]
            }
            this.config[gf] = e[gf];
            if (gf === "fixCenterWhenResize") {
              this.config.enableResizeOnCenter = e[gf]
            }
            if (!i) {
              continue
            }
            switch (gf) {
              case "style":
                this.fire(new aL("onstyle_willchange"));
                var gg = this;
                this.loadMapStyleFiles(function() {
                  gg.fire(new aL("onstyle_changed"))
                });
                break;
              case "enableAutoResize":
                if (e[gf] === true) {
                  this.enableAutoResize()
                } else {
                  this.disableAutoResize()
                }
                break;
              case "displayOptions":
                this.setDisplayOptions(e[gf]);
                break
            }
          }
        }
      },
      enableDragging: function() {
        this.config.enableDragging = true
      },
      disableDragging: function() {
        this.config.enableDragging = false
      },
      enableInertialDragging: function() {
        this.config.enableInertialDragging = true
      },
      disableInertialDragging: function() {
        this.config.enableInertialDragging = false
      },
      enableScrollWheelZoom: function() {
        this.config.enableWheelZoom = true
      },
      disableScrollWheelZoom: function() {
        this.config.enableWheelZoom = false
      },
      enableContinuousZoom: function() {
        this.config.enableContinuousZoom = true
      },
      disableContinuousZoom: function() {
        this.config.enableContinuousZoom = false
      },
      enableResizeOnCenter: function() {
        this.config.enableResizeOnCenter = true
      },
      disableResizeOnCenter: function() {
        this.config.enableResizeOnCenter = false
      },
      enableDoubleClickZoom: function() {
        this.config.enableDblclickZoom = true
      },
      disableDoubleClickZoom: function() {
        this.config.enableDblclickZoom = false
      },
      enableKeyboard: function() {
        this.config.enableKeyboard = true
      },
      disableKeyboard: function() {
        this.config.enableKeyboard = false
      },
      getSize: function() {
        return new c8(this.width,this.height)
      },
      enablePinchToZoom: function() {
        this.config.enablePinchZoom = true
      },
      disablePinchToZoom: function() {
        this.config.enablePinchZoom = false
      },
      enableAutoResize: function() {
        this.config.enableAutoResize = true;
        this._watchSize();
        if (!this.temp.autoResizeTimer) {
          this.temp.autoResizeTimer = setInterval(this._watchSize, 16)
        }
      },
      disableAutoResize: function() {
        this.config.enableAutoResize = false;
        if (this.temp.autoResizeTimer) {
          clearInterval(this.temp.autoResizeTimer);
          this.temp.autoResizeTimer = null
        }
      },
      checkResize: function() {
        this._watchSize()
      },
      resize: function() {
        this._watchSize()
      },
      getContainerSize: function() {
        return new c8(this.container.clientWidth,this.container.clientHeight)
      },
      _getProperZoom: function(gf) {
        if (!gf) {
          gf = this.zoomLevel
        }
        var i = this.getMinZoom();
        var e = this.getMaxZoom();
        var gg = false;
        if (gf < i) {
          gg = true;
          gf = i
        }
        if (gf > e) {
          gg = true;
          gf = e
        }
        if (this._renderType !== "webgl") {
          gf = Math.round(gf)
        }
        return {
          zoom: gf,
          exceeded: gg
        }
      },
      getContainer: function() {
        return this.container
      },
      getZoomUnits: function(gf) {
        if (this.mapType === BMAP_EARTH_MAP) {
          return Math.pow(2, 18 - this._earth.getImageZoom())
        }
        var e = bv[this.mapType];
        if (typeof e !== "object") {
          return null
        }
        var i = gf || this.zoomLevel;
        return Math.pow(2, (e.zoomLevelBase - i))
      },
      pointToPixelIn: function(gp, gr) {
        if (!gp) {
          return
        }
        gr = gr || {};
        if (this.mapType === BMAP_EARTH_MAP) {
          var gg;
          if (!gp._llPt) {
            gg = dl.convertMC2LL(gp);
            gp._llPt = gg
          }
          gg = gp._llPt;
          var gl = null;
          var gf = null;
          if (typeof gr.zoom === "number") {
            var go = this._earth;
            var gq = go._getEarthZoomByImgZoom(gr.zoom);
            if (gq <= 3) {
              gl = go._generateTmpPMatrix(gq)
            }
            gf = go._generateTmpMVMatrix(go.getCenter(), gq)
          }
          var gh = this._earth.fromLatLngToPixel(gg, {
            useRound: false,
            isCalcOnBack: true,
            matrixInfo: {
              modelViewMatrix: gf,
              projectionMatrix: gl
            }
          });
          return gh
        }
        if ((this._heading % 360 === 0 && this._tilt === 0) || !this._webglMapCamera) {
          var gn = this.getZoomUnits(gr.zoom);
          var gj = gr.center || this.centerPoint;
          var i = this.width / 2;
          var gi = this.height / 2;
          var gm = (gp.lng - gj.lng) / gn + i;
          var gk = (gj.lat - gp.lat) / gn + gi;
          if (gr.useRound !== false) {
            gm = Math.round(gm);
            gk = Math.round(gk)
          }
          return new dh(gm,gk)
        }
        var e = this._webglMapCamera.fromMCToScreenPixel(gp.lng, gp.lat, gr);
        if (gr.useRound === false) {
          return e
        }
        e.x = Math.round(e.x);
        e.y = Math.round(e.y);
        return e
      },
      pixelToPointIn: function(e, gn) {
        if (!e) {
          return
        }
        gn = gn || {};
        if (this.mapType === BMAP_EARTH_MAP) {
          if (typeof gn.zoom === "number") {
            var gl = this._earth;
            var gi = null;
            var gf = null;
            var gm = gl._getEarthZoomByImgZoom(gn.zoom);
            if (gm <= 3) {
              gi = gl._generateTmpPMatrix(gm)
            }
            gf = gl._generateTmpMVMatrix(gl.getCenter(), gm)
          }
          var i = this._earth.fromPixelToLatLng(e, {
            matrixInfo: {
              modelViewMatrix: gf,
              projectionMatrix: gi
            }
          });
          if (i === null) {
            return null
          }
          return dl.convertLL2MC(i)
        }
        if ((this._heading % 360 !== 0 || this._tilt > 0) && this._webglMapCamera) {
          return this._webglMapCamera.fromScreenPixelToMC(e.x, e.y, gn)
        }
        var gj = gn.center || this.centerPoint;
        var gk = this.getZoomUnits(gn.zoom);
        var gh = gj.lng + gk * (e.x - this.width / 2);
        var gg = gj.lat - gk * (e.y - this.height / 2);
        return new fU(gh,gg)
      },
      pointToOverlayPixelIn: function(e, gg) {
        gg = gg || {};
        var gf = this.pointToPixelIn(e, {
          zoom: gg.zoom,
          center: gg.center,
          forLabel: true,
          frustumTest: true
        });
        if (!gf) {
          return
        }
        if (gg.fixPosition && this.mapType !== "B_EARTH_MAP") {
          var gh = this.getSize();
          var i = this.worldSize(gg.zoom);
          if (gf.x > gh.width) {
            while (gf.x > gh.width) {
              gf.x -= i
            }
          } else {
            if (gf.x < 0) {
              while (gf.x < 0) {
                gf.x += i
              }
            }
          }
        }
        if (this._renderType === "webgl") {
          return gf
        }
        gf.x -= this.offsetX;
        gf.y -= this.offsetY;
        return gf
      },
      overlayPixelToPointIn: function(i, e) {
        if (!i) {
          return
        }
        var gf = i.clone();
        if (this._renderType !== "webgl") {
          gf.x += this.offsetX;
          gf.y += this.offsetY
        }
        return this.pixelToPointIn(gf, e)
      },
      lnglatToMercator: function(e, gg) {
        var i = new fU(e,gg);
        var gf = dl.convertLL2MC(i);
        return [gf.lng, gf.lat]
      },
      mercatorToLnglat: function(i, e) {
        if (isNaN(i) || isNaN(e)) {
          return []
        }
        i = parseFloat(i);
        e = parseFloat(e);
        var gg = new fU(i,e);
        var gf = dl.convertMC2LL(gg);
        return [gf.lng, gf.lat]
      },
      getBoundsIn: function() {
        var gt = arguments[0];
        if (this.mapType === BMAP_EARTH_MAP && this._earth) {
          var gn = this._earth.getCustomBounds();
          if (!gn) {
            return this.config.defaultMaxBounds
          }
          var gm = gn.getSouthWest();
          var e = gn.getNorthEast();
          if (gm.lng > e.lng) {
            e.lng = 180
          }
          var gK = dl.convertLL2MC(gm);
          var gA = dl.convertLL2MC(e);
          var gq = this.config.defaultMaxBounds;
          var gz = Math.max(gK.lng, gq.sw.lng);
          var gy = Math.max(gK.lat, gq.sw.lat);
          var gs = Math.min(gA.lng, gq.ne.lng);
          var gr = Math.min(gA.lat, gq.ne.lat);
          var gv = new cX(new fU(gz,gy),new fU(gs,gr));
          gv.pointBottomLeft = new fU(gz,gy);
          gv.pointBottomRight = new fU(gs,gy);
          gv.pointTopLeft = new fU(gz,gr);
          gv.pointTopRight = new fU(gs,gr);
          gv.setMinMax();
          gv.makeNormalizedPoint(this._earth.getHeading());
          return gv
        }
        gt = gt || {};
        var gh = gt.margins || [0, 0, 0, 0];
        var gF = this.pixelToPointIn({
          x: gh[3],
          y: this.height - gh[2]
        }, gt);
        var gJ = this.pixelToPointIn({
          x: this.width - gh[1],
          y: gh[0]
        }, gt);
        var gx = typeof gt.heading === "number" ? gt.heading : (this._heading % 360);
        var gf = typeof gt.tilt === "number" ? gt.tilt : this._tilt;
        var gp = this._webglMapCamera;
        if ((gx === 0 && gf === 0) || !gp) {
          this._bounds.setSouthWest(gF);
          this._bounds.setNorthEast(gJ);
          this._bounds.pointBottomLeft = gF;
          this._bounds.pointBottomRight = new fU(gJ.lng,gF.lat);
          this._bounds.pointTopRight = gJ;
          this._bounds.pointTopLeft = new fU(gF.lng,gJ.lat);
          this._bounds.setMinMax();
          this._bounds.makeNormalizedPoint(gx);
          return this._bounds
        }
        var gw = this.pixelToPointIn({
          x: gh[3],
          y: gh[0]
        }, gt);
        var gg = gp.getPosition();
        var gL = Math.sqrt(Math.pow(gw.lng - gg[0], 2) + Math.pow(gw.lat - gg[1], 2));
        var gG = this.getZoomUnits();
        var gN = gL / gG;
        var gD = gp._frustumSideLen;
        var gl = gp._fovy;
        if (gN > gD || (90 - gf) < gl / 2) {
          var gM = [gw.lng - gg[0], gw.lat - gg[1]];
          if ((90 - gf) < gl / 2) {
            gM[0] = -gM[0];
            gM[1] = -gM[1]
          }
          var gE = gD * gG;
          var gk = [gM[0] / gL * gE + gg[0], gM[1] / gL * gE + gg[1]];
          var gB = [gJ.lng - gg[0], gJ.lat - gg[1]];
          if ((90 - gf) < gl / 2) {
            gB[0] = -gB[0];
            gB[1] = -gB[1]
          }
          var gi = [gB[0] / gL * gE + gg[0], gB[1] / gL * gE + gg[1]];
          gw.lng = gk[0];
          gw.lat = gk[1];
          gJ.lng = gi[0];
          gJ.lat = gi[1]
        }
        var gu = this.pixelToPointIn({
          x: this.width - gh[1],
          y: this.height - gh[2]
        }, gt);
        var gC = [gF, gJ, gw, gu];
        var gI = gC[0].lng;
        var gO = gC[0].lat;
        var gj = gC[0].lng;
        var go = gC[0].lat;
        for (var gH = 1; gH < 4; gH++) {
          if (gC[gH].lng < gI) {
            gI = gC[gH].lng
          }
          if (gC[gH].lng > gj) {
            gj = gC[gH].lng
          }
          if (gC[gH].lat < gO) {
            gO = gC[gH].lat
          }
          if (gC[gH].lat > go) {
            go = gC[gH].lat
          }
        }
        this._bounds.setSouthWest(new fU(gI,gO));
        this._bounds.setNorthEast(new fU(gj,go));
        this._bounds.pointTopLeft = gw;
        this._bounds.pointTopRight = gJ;
        this._bounds.pointBottomRight = gu;
        this._bounds.pointBottomLeft = gF;
        this._bounds.makeNormalizedPoint(gx);
        this._bounds.setMinMax();
        return this._bounds
      },
      isLoaded: function() {
        return !!this.loaded
      },
      _getBestLevel: function(i, gp) {
        var gi = 0;
        if (this._renderType === "webgl" && !eO()) {
          gi = 100
        }
        var gj = gp.margins || [10, 10, 10, 10];
        var gg = gp.zoomFactor || 0;
        var gk = gj[1] + gj[3];
        var gh = gj[0] + gj[2];
        var e = this.getMinZoom();
        var go = this.getMaxZoom();
        var gn = i.toSpan();
        var gm = gn.width / (this.width - gk - gi);
        var gl = gn.height / (this.height - gh - gi);
        var gf = 18 - dy(Math.max(gm, gl));
        if (gf < e) {
          gf = e
        }
        if (gf > go) {
          gf = go
        }
        gf += gg;
        if (this._renderType !== "webgl") {
          gf = Math.floor(gf)
        }
        return gf
      },
      getViewportIn: function(gr, gu) {
        if (this.mapType === BMAP_EARTH_MAP) {
          gr = gr || [];
          var gq = [];
          for (var gh = 0; gh < gr.length; gh++) {
            if (!gr[gh]) {
              continue
            }
            gq.push(dl.convertMC2LL(gr[gh]))
          }
          var gp = this._earth.getViewportIn(gq, gu);
          var gi = gp.center;
          var gj = gp.zoom;
          var gn = dl.convertLL2MC(gi);
          return {
            center: gn,
            zoom: gj
          }
        }
        var gt = {
          center: this.getCenterIn(),
          zoom: this.getZoom()
        };
        if (!gr || gr.length === 0) {
          return gt
        }
        gu = gu || {};
        var gf;
        if (gr instanceof cX) {
          gf = gr
        } else {
          var gm = gr;
          gf = new cX();
          for (var gh = gm.length - 1; gh >= 0; gh--) {
            gf.extend(gm[gh])
          }
          if (gf.isEmpty()) {
            return gt
          }
        }
        var e = gf.getCenter();
        var gs = this._getBestLevel(gf, gu);
        if (gu.margins) {
          var gl = gu.margins;
          var gk = (gl[1] - gl[3]) / 2;
          var go = (gl[0] - gl[2]) / 2;
          var gg = this.getZoomUnits(gs);
          e.lng = e.lng + gg * gk;
          e.lat = e.lat + gg * go
        }
        return {
          center: e,
          zoom: gs
        }
      },
      setViewportIn: function(gg, gh) {
        if (this.mapType === BMAP_EARTH_MAP) {
          var gl;
          if (gg && gg.center) {
            var gf = dl.convertMC2LL(gg.center);
            var gj = this._earth._getEarthZoomByImgZoom(gg.zoom, gf);
            gl = {
              center: gf,
              zoom: gj
            }
          } else {
            gl = [];
            for (var gi = 0; gi < gg.length; gi++) {
              var gk = dl.convertMC2LL(gg[gi]);
              gl[gi] = new ci(gk.lat,gk.lng)
            }
          }
          this._earth.setViewportIn(gl, gh);
          return
        }
        var e;
        if (gg && gg.center) {
          e = gg
        } else {
          e = this.getViewportIn(gg, gh)
        }
        gh = gh || {};
        if (this._renderType === "webgl") {
          this.centerAndZoomIn(e.center, e.zoom, gh);
          return
        }
        if (e.zoom === this.zoomLevel && gh.enableAnimation !== false) {
          this.panToIn(e.center, {
            duration: 200,
            callback: gh.callback
          })
        } else {
          this.centerAndZoomIn(e.center, e.zoom, gh)
        }
      },
      addSpots: function(gf, i) {
        if (!gf || gf.length === 0) {
          return
        }
        i = i || {};
        var gi = i.zIndex || 0;
        var gh = typeof i.enableMultiResponse === "undefined" ? true : !!i.enableMultiResponse;
        this.spotsPool = this.spotsPool || {};
        var e = "sp" + (this.temp.spotsGuid++);
        this.spotsPool[e] = {
          spots: gf.slice(0),
          zIndex: gi,
          enableMultiResponse: gh
        };
        var gg = this;
        c9.load("hotspot", function() {
          gg._asyncRegister()
        });
        return e
      },
      getSpots: function(e) {
        return this.spotsPool[e] && this.spotsPool[e].spots || []
      },
      removeSpots: function(e) {
        if (!e || !this.spotsPool[e]) {
          return
        }
        delete this.spotsPool[e]
      },
      clearSpots: function() {
        delete this.spotsPool
      },
      getIconByClickPosition: function(i) {
        if (!this.config.enableIconClick || !this._spotsMgr) {
          return null
        }
        var e = this._spotsMgr.getSpotsByScreenPosition(i);
        if (e[0] && e[0].userdata) {
          var gf = e[0].userdata;
          return {
            name: gf.name,
            uid: gf.uid,
            position: gf.iconPoint || e[0].pt
          }
        }
        return null
      },
      setBounds: function(e) {
        bv[this.mapType].bounds = e.clone()
      },
      getCoordType: function() {
        return this.config.coordType
      },
      getPanes: function() {
        return this._panes
      },
      getInfoWindow: function() {
        if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
          return this.temp.infoWin
        }
        return null
      },
      getDistanceIn: function(gh, e) {
        if (!gh || !e) {
          return
        }
        if (this.mapType === BMAP_EARTH_MAP) {
          var gg = dl.convertMC2LL(gh);
          var gf = dl.convertMC2LL(e);
          return this._earth.getDistance(gg, gf)
        }
        var i = dl.getDistanceByMC(gh, e);
        return i
      },
      getOverlays: function() {
        var gh = [];
        var gi = this._overlays;
        var gg = this._customOverlays;
        if (gi) {
          for (var gf in gi) {
            if (gi[gf]instanceof ca) {
              gh.push(gi[gf])
            }
          }
        }
        if (gg) {
          for (var gf = 0, e = gg.length; gf < e; gf++) {
            gh.push(gg[gf])
          }
        }
        return gh
      },
      getMapType: function() {
        return this.mapType
      },
      _asyncRegister: function() {
        for (var e = this.temp.registerIndex; e < aT._register.length; e++) {
          aT._register[e](this)
        }
        this.temp.registerIndex = e
      },
      setDefaultCursor: function(e) {
        this.config.defaultCursor = e;
        if (this.platform) {
          this.platform.style.cursor = this.config.defaultCursor
        }
      },
      getDefaultCursor: function() {
        return this.config.defaultCursor
      },
      setDraggingCursor: function(e) {
        this.config.draggingCursor = e
      },
      getDraggingCursor: function() {
        return this.config.draggingCursor
      },
      _syncAndChangeMapType: function(e) {
        var i = this;
        if (i._renderType === "webgl" && i.getTilt() > cl.MAX_DRAG_TILT_L2) {
          i.setTilt(cl.MAX_DRAG_TILT_L2, {
            callback: function() {
              i._changeEarthMapType(e)
            }
          })
        } else {
          i._changeEarthMapType(e)
        }
      },
      _changeEarthMapType: function(gf) {
        var gg = this;
        var gj = gg.tileMgr.tileLayers;
        if (this._mapTypeChangAni) {
          this._mapTypeChangAni.stop()
        }
        var gi;
        if (this._earth) {
          gi = this._earth.getEarthCanvas()
        }
        if (!this._earth) {
          this.maskLayer.style.opacity = 1;
          this.maskLayer.style.zIndex = 999;
          this.maskLayer.style.background = "#000"
        }
        this._mapTypeChangAni = new n({
          duration: 400,
          render: function(e) {
            if (!gg._earth) {
              return
            }
            gi.style.opacity = e
          },
          finish: function() {
            for (var e = gj.length - 1, gk = e; gk >= 0; gk--) {
              var gm = gj[gk].tilesDiv;
              if (gm) {
                gm.style.visibility = "hidden"
              }
              if (gj[gk]._isInnerLayer && gg._renderType !== "webgl") {
                gg.removeTileLayer(gj[gk])
              }
            }
            gg._mapTypeChangAni = null;
            gg._mapTypeChanging = false;
            function gl() {
              var gq = gg.getZoom() - 2;
              var gr = gg.getCenterIn();
              var go = dl.convertMC2LL(gr);
              gg._earth = new aT.Earth(gg,{
                center: go,
                zoom: gq,
                showRealSunlight: gg.config.showRealSunlight,
                showMilkyway: gg.config.showMilkyway,
                earthBackground: gg.config.earthBackground
              });
              gg._proxyEarthEvents();
              var gn = gg.mapType;
              gg.mapType = gf;
              var gp = new aL("onmaptypechange");
              gp.zoomLevel = this.zoomLevel;
              gp.mapType = gf;
              gp.exMapType = gn;
              gg.dispatchEvent(gp);
              gg._setMapTypeStatus(gf);
              z.extend(gg, aT.EarthView.prototype);
              if (!gg._navigationCtrl && gg.config.showControls) {
                gg._navigationCtrl = new dO(gg)
              }
            }
            if (!gg._earth) {
              if (aT["FeatureStyle" + gg.config.style]) {
                gl()
              } else {
                gg.loadMapStyleFiles(function() {
                  gl()
                })
              }
            }
            if (parseInt(gg.maskLayer.style.opacity, 10) === 1) {
              setTimeout(function() {
                gg.maskLayer.style.zIndex = 9;
                gg.maskLayer.style.opacity = 0
              }, 1000)
            }
          }
        });
        if (!this._earth) {
          return
        }
        var i = this.mapType;
        this.mapType = gf;
        var gh = new aL("onmaptypechange");
        gh.zoomLevel = this.zoomLevel;
        gh.mapType = gf;
        gh.exMapType = i;
        this.dispatchEvent(gh);
        gg._setMapTypeStatus(gf);
        z.extend(gg, aT.EarthView.prototype)
      },
      getMapStyleId: function() {
        if (typeof this.config.style === "string") {
          return this.config.style
        }
        return this.config.mapStyleId || "custom"
      },
      _setMapTypeStatus: function(gf) {
        var gk = arguments[1];
        if (gf === BMAP_EARTH_MAP) {
          var gi = this._earth.getEarthCanvas();
          if (gi) {
            gi.style.display = ""
          }
          var gl = {
            noAnimation: true
          };
          this._earth.setCenter(dl.convertMC2LL(this.centerPoint), gl);
          this._earth.setImageZoom(this.zoomLevel, gl);
          this._earth.setTilt(this.getTilt(), gl);
          this._earth.setHeading(this.getHeading(), gl)
        } else {
          if (this.preMapType === BMAP_EARTH_MAP && this._earth) {
            var gj = this._earth;
            var gg = gj.getMapZoom();
            var gh = gj._imageRawZoom || gg;
            var i = gh - gg;
            var e = gj.getCenter();
            if (this._renderType === "webgl") {
              this._tilt = gj.getTilt();
              if (this.zoomLevel > 7) {
                this._heading = gj.getHeading();
                gk && gk(e, gg);
                return
              }
              if (gj.getHeading() !== 0) {
                gj.setTilt(this.getTilt());
                gj.setHeading(this.getHeading(), {
                  callback: function() {
                    gk && gk(e, gg)
                  }
                })
              } else {
                gk && gk(e, gg)
              }
              return
            }
            if (i < 0.1 && gj.getTilt() === 0 && gj.getHeading() === 0) {
              gk && gk(e, gg);
              return
            }
            gj.setTilt(0);
            gj.setHeading(0);
            gj.setZoom(gj.getZoom() - i, {
              callback: function() {
                gk && gk(e, gg)
              }
            })
          }
        }
      },
      _proxyEarthEvents: function() {
        var gi = this;
        var gj = this._earth;
        var e = false;
        gj.on("tilesload", function(i) {
          gi.fire(i)
        });
        gj.on("centerandzoom", function(i) {
          gi.dispatchEvent(new aL("onmoveend"));
          gi.dispatchEvent(new aL("onzoomend"))
        });
        function gh(i) {
          gi.fire(i)
        }
        var gf = ["zoomstart", "zoomend", "tilesload", "sunlighttime_change", "sunlighttime_clear", "centerandzoom", "animation_start", "animation_stop", "movestart", "moveend", "moving", "dragstart", "dragend", "dragging"];
        for (var gg = 0; gg < gf.length; gg++) {
          gj.on(gf[gg], gh)
        }
      },
      forceEnableEarth: function() {
        this.config.forceEnableEarth = true;
        this.config.enableEarth = aK.ifEnableEarth(true);
        this.dispatchEvent(new aL("forceenableearth"));
        return this.config.enableEarth
      },
      setLock: function(e) {
        if (this.mapType === BMAP_EARTH_MAP) {
          this._earth.setLock(e)
        }
        this._lock = e
      },
      getLock: function() {
        if (this.mapType === BMAP_EARTH_MAP) {
          return this._earth.getLock()
        }
        return this._lock
      },
      getEarth: function() {
        return this._earth
      },
      isSupportEarth: function() {
        return this.config.enableEarth
      },
      isCanvasMap: function() {
        return !!(this._renderType === "canvas" && this.getMapType() !== "B_EARTH_MAP")
      },
      getCanvasMapCoordByUid: function(gh) {
        if (this._renderType === "webgl") {
          var gi = this.tileMgr.tileLayers;
          for (var gg = 0; gg < gi.length; gg++) {
            if (gi[gg].labelProcessor) {
              return gi[gg].labelProcessor.getLabelByUid(gh, "")
            }
          }
          return null
        }
        var e = this.canvas2dMapMgr._labelClick;
        var gf = e.findLabelByUid(gh);
        return gf ? new fU(gf.iconPos.geoX,gf.iconPos.geoY) : null
      },
      loadBizData: function(i) {
        var e = new aL("onloadbizdata");
        e.data = i;
        this.dispatchEvent(e)
      },
      unloadBizData: function() {
        var e = new aL("onunloadbizdata");
        this.dispatchEvent(e)
      },
      zoomIn: function(e) {
        this.setZoomIn(this.zoomLevel + 1, {
          zoomCenter: e
        })
      },
      zoomOut: function(e) {
        this.setZoomIn(this.zoomLevel - 1, {
          zoomCenter: e
        })
      },
      setCenterIn: function(e, i) {
        this.panToIn(e, i)
      },
      getRenderType: function() {
        return this._renderType
      },
      getSolarInfo: function(gg) {
        gg = gg || this._initDate;
        var gf = a3(gg);
        var e = dl.convertLL2MC(new fU(gf[0],gf[1]));
        var go = e.latLng;
        var gj = aT.Projection.convertMC2LL(this.centerPoint);
        var gl = gg.getUTCHours();
        var gn = gl + 24 * gj.lng / 360;
        var gm = gn - 12;
        var gk = gm * 60 * 0.25;
        var gi = Math.asin(Math.sin(cS(gj.lat)) * Math.sin(cS(go.lat)) + Math.cos(cS(gj.lat)) * Math.cos(cS(go.lat)) * Math.cos(cS(gk)));
        var gh = Math.asin(Math.sin(cS(gk)) * Math.cos(cS(go.lat)) / Math.cos(gi));
        var i = "north";
        if (gj.lat < go.lat) {
          i = "south"
        }
        return {
          zenith: e,
          solarAltitude: gi,
          solarAzimuth: gh,
          centerPosition: i,
          position: e
        }
      },
      setDisplayOptions: function(gf) {
        if (!gf) {
          return
        }
        for (var e in this._displayOptions) {
          if (this._displayOptions.hasOwnProperty(e)) {
            if (typeof gf[e] === "boolean" || (e === "skyColors" && typeof gf.skyColors === "object")) {
              this._displayOptions[e] = gf[e]
            }
          }
        }
        var i = this.getMapType();
        if (i === cn.NORMAL) {
          this.fire(new aL("ondisplayoptions_changed"))
        } else {
          if (i === cn.EARTH && this._earth) {
            this._earth.fire(new aL("ondisplayoptions_changed"))
          }
        }
      },
      getHorizonPosY: function(e) {
        if (!e || !this._webglMapCamera) {
          return null
        }
        var i = this._webglMapCamera.fromMCToScreenPixel(e.lng, e.lat, {
          heading: 0
        });
        return i.y
      },
      getIndoorInfo: function() {
        if (!this._indoorMgr) {
          return
        }
        return this._indoorMgr.getData()
      },
      showIndoor: function(e, gf) {
        var i = new aL("onindoor_status_changed");
        i.uid = e;
        i.floor = gf;
        this.fire(i)
      },
      addAreaSpot: function(e, gf) {
        if (!e || e.length === 0) {
          return
        }
        gf = gf || {};
        this.areaSpots = this.areaSpots || {};
        var i = gf.id || ("sp" + (this.temp.spotsGuid++));
        this.areaSpots[i] = {
          spot: e,
          userData: gf.userData
        };
        var gg = this;
        c9.load("hotspot", function() {
          gg._asyncRegister()
        });
        return i
      },
      getAreaSpot: function(e) {
        if (this.areaSpots && this.areaSpots[e]) {
          return this.areaSpots[e]
        }
        return null
      },
      removeAreaSpot: function(e) {
        if (!e || !this.areaSpots[e]) {
          return
        }
        delete this.areaSpots[e]
      },
      clearAreaSpots: function() {
        this.areaSpots = {}
      },
      resetSpotStatus: function() {
        this.fire(new aL("onspot_status_reset"))
      },
      hightlightSpotByUid: function(e, gf) {
        var i = new aL("onspot_highlight");
        i.uid = e;
        i.tilePosStr = gf;
        this.fire(i)
      },
      setZoomIn: function(i, e) {
        e = e || {};
        this.zoomTo(i, e.zoomCenter || null, e)
      },
      getCurrentMaxTilt: function() {
        var e = this.zoomLevel;
        if (this.mapType === "B_EARTH_MAP") {
          return cl.MAX_DRAG_TILT_L2
        }
        if (this.config.restrictCenter === false) {
          return cl.MAX_DRAG_TILT
        }
        if (e >= 19) {
          return cl.MAX_DRAG_TILT
        } else {
          if (e <= 18) {
            if (e < this._enableTiltZoom) {
              if (e >= this._enableTiltZoom - 2) {
                return (1 - (this._enableTiltZoom - e) / 2) * cl.MAX_DRAG_TILT_L2
              }
              return 0
            }
            return cl.MAX_DRAG_TILT_L2
          } else {
            return (cl.MAX_DRAG_TILT - cl.MAX_DRAG_TILT_L2) * (e - 18) + cl.MAX_DRAG_TILT_L2
          }
        }
      },
      worldSize: function(i) {
        var e = i || this.zoomLevel;
        return cl.WORLD_SIZE_MC / Math.pow(2, 18 - e)
      },
      setTrafficOn: function() {
        this.addTileLayer(bC)
      },
      setTrafficOff: function() {
        this.removeTileLayer(bC)
      },
      showOverlayContainer: function() {
        this.setDisplayOptions({
          overlay: true
        })
      },
      hideOverlayContainer: function() {
        this.setDisplayOptions({
          overlay: false
        })
      },
      addLabelsToMapTile: function(gf) {
        for (var e = 0; e < gf.length; e++) {
          if (typeof gf[e].type === "undefined") {
            gf[e].type = "fixed"
          }
          if (typeof gf[e].rank !== "number") {
            gf[e].rank = 50000
          }
          gf[e].pt = gf[e].position;
          gf[e].custom = true;
          gf[e].processedInZoom = 0;
          this._customTileLabels.push(gf[e])
        }
        this.dispatchEvent(new aL("onadd_tile_labels"))
      },
      removeLabelsFromMapTile: function(gf) {
        for (var gg = 0; gg < gf.length; gg++) {
          for (var e = 0; e < this._customTileLabels.length; e++) {
            if (this._customTileLabels[e].uid === gf[gg]) {
              this._customTileLabels.splice(e, 1)
            }
          }
        }
        this.dispatchEvent(new aL("onremove_tile_labels"))
      },
      clearLabels: function() {
        this._customTileLabels.length = 0;
        this.dispatchEvent(new aL("onclear_labels"))
      },
      loadMapStyleFiles: function(gg) {
        var i = this.config.style;
        var gf = this;
        this._setTextRenderType();
        if (typeof i === "string") {
          if (aT["FeatureStyle" + i]) {
            gf.fire(new aL("onstyle_loaded"));
            gg();
            return
          }
          fO.load(dW.getMapStyleFiles(i), function() {
            if (gf.config.style === i) {
              aT["FeatureStyle" + i] = window.FeatureStyle;
              aT["iconSetInfo" + i] = window.iconSetInfo_high;
              aT.indoorStyle = window.indoorStyle;
              gf.fire(new aL("onstyle_loaded"));
              gg()
            }
          })
        } else {
          var e = i;
          f.init(gf);
          f.getStyleJson(e, function(gm) {
            var gn = eW;
            var gj = aT.getGUID("custom");
            gf.config.mapStyleId = gj;
            var gk = {};
            z.extend(gk, gm);
            var gi = Math.floor(gf.getZoom());
            window.styleCbk = function(go) {
              f.onStyleDataBack(go, gi, gj, gk, gn);
              aT.customStyleLoaded = true;
              gf.fire(new aL("onstyle_loaded"));
              gg()
            }
            ;
            aT.customStyleInfo = {
              zoomRegion: {},
              zoomStyleBody: [],
              zoomFrontStyle: {}
            };
            var gl = f.getStyleUrl(gm, gn, "styleCbk", gi);
            if (!aT.iconSetInfoCustom) {
              var gh = dW.getMapStyleFiles("default");
              gh.splice(1, 1);
              fO.load(gh, function() {
                aT.iconSetInfoCustom = window.iconSetInfo_high;
                aT.indoorStyle = window.indoorStyle;
                fO.load(gl)
              })
            } else {
              fO.load(gl)
            }
          })
        }
      },
      setCopyrightOffset: function(gg, i) {
        var gf = new aL("oncopyrightoffsetchange",{
          logo: gg,
          cpy: i
        });
        this.dispatchEvent(gf)
      },
      _setTextRenderType: function(e) {
        if (e) {
          this.config.textRenderType = e;
          return
        }
        if (this.config.textRenderType !== null) {
          return
        }
        if (eO()) {
          this.config.textRenderType = "canvas"
        } else {
          if (typeof this.config.style === "string") {
            this.config.textRenderType = "image"
          } else {
            this.config.textRenderType = "canvas"
          }
        }
      },
      destroy: function() {
        this.fire(new aL("ondestroy"))
      },
      centerAndZoom: function(e, gg, gf) {
        var i = dl.convertLL2MC(e);
        this.centerAndZoomIn(i, gg, gf)
      },
      pointToPixel: function(e, gf) {
        var i = dl.convertLL2MC(e);
        var gg = {};
        z.extend(gg, gf);
        if (gg && gg.center) {
          gg.center = dl.convertLL2MC(gg.center)
        }
        return this.pointToPixelIn(i, gg)
      },
      pixelToPoint: function(gf, i) {
        var gg = {};
        z.extend(gg, i);
        if (gg && gg.center) {
          gg.center = dl.convertLL2MC(gg.center)
        }
        var e = this.pixelToPointIn(gf, gg);
        return dl.convertMC2LL(e)
      },
      pointToOverlayPixel: function(e, gf) {
        var i = dl.convertLL2MC(e);
        var gg = {};
        z.extend(gg, gf);
        if (gg && gg.center) {
          gg.center = dl.convertLL2MC(gg.center)
        }
        return this.pointToOverlayPixelIn(i, gg)
      },
      overlayPixelToPoint: function(gf, i) {
        var gg = {};
        z.extend(gg, i);
        if (gg && gg.center) {
          gg.center = dl.convertLL2MC(gg.center)
        }
        var e = this.overlayPixelToPointIn(gf, gg);
        return dl.convertMC2LL(e)
      },
      setViewport: function(gf, gg) {
        var e;
        if (gf && gf.center) {
          e = {};
          z.extend(e, gf);
          e.center = dl.convertLL2MC(e.center)
        } else {
          e = [];
          for (var gh = 0; gh < gf.length; gh++) {
            e[gh] = dl.convertLL2MC(gf[gh])
          }
        }
        this.setViewportIn(e, gg)
      },
      getViewport: function(gi, gg) {
        var gf;
        if (gi && gi.length) {
          gf = [];
          for (var gh = 0; gh < gi.length; gh++) {
            gf[gh] = dl.convertLL2MC(gi[gh])
          }
        }
        var e = this.getViewportIn(gf, gg);
        e.center = dl.convertMC2LL(e.center);
        return e
      },
      getDistance: function(gh, gf) {
        var i = dl.convertLL2MC(gh);
        var gg = dl.convertLL2MC(gf);
        var e = this.getDistanceIn(i, gg);
        return e
      },
      setCenter: function(e, gf) {
        var i = dl.convertLL2MC(e);
        this.setCenterIn(i, gf)
      },
      setZoom: function(gf, e) {
        var i = {};
        z.extend(i, e);
        if (i && i.zoomCenter) {
          i.zoomCenter = dl.convertLL2MC(i.zoomCenter)
        }
        this.setZoomIn(gf, i)
      },
      flyTo: function(e, gf) {
        var i = dl.convertLL2MC(e);
        this.flyToIn(i, gf)
      },
      panTo: function(e, gf) {
        var i = dl.convertLL2MC(e);
        this.panToIn(i, gf)
      },
      getCenter: function() {
        var e = this.getCenterIn();
        return dl.convertMC2LL(e)
      },
      getBounds: function() {
        var e = this.getBoundsIn();
        var i = new cX(dl.convertMC2LL(e.getSouthWest()),dl.convertMC2LL(e.getNorthEast()));
        return i
      },
      setMapStyleV2: function(e) {
        this._setTextRenderType("canvas");
        this.setOptions({
          style: e
        })
      },
      startViewAnimation: function(gf) {
        var e = gf._options.delay;
        var i = this;
        setTimeout(function() {
          gf._start(i)
        }, e)
      },
      cancelViewAnimation: function(e) {
        e._cancel(this)
      },
      getMapScreenshot: function() {
        return this._webglMapScene._painter._canvas.toDataURL()
      }
    });
    var cn = {
      NORMAL: "B_NORMAL_MAP",
      EARTH: "B_EARTH_MAP",
      SATELLITE: "B_STREET_MAP"
    };
    aT.MapTypeId = cn;
    window.BMAP_NORMAL_MAP = "B_NORMAL_MAP";
    window.BMAPGL_NORMAL_MAP = "B_NORMAL_MAP";
    window.BMAP_SATELLITE_MAP = "B_SATELLITE_MAP";
    window.BMAP_HYBRID_MAP = "B_STREET_MAP";
    window.BMAP_EARTH_MAP = "B_EARTH_MAP";
    window.BMAP_COORD_MERCATOR = 1;
    window.BMAP_SYS_DRAWER = 0;
    window.BMAP_SVG_DRAWER = 1;
    window.BMAP_VML_DRAWER = 2;
    window.BMAP_CANVAS_DRAWER = 3;
    var f = {
      environment: "jsapi",
      map: null,
      ontilesloaded: false,
      onstyle_loaded: false,
      init: function(i) {
        var e = this;
        e.map = i;
        this.changeCopyright();
        this.setEnvironment(e.map.config.style);
        this.resetEventListener()
      },
      resetEventListener: function() {
        var e = this;
        this.ontilesloaded = false;
        this.onstyle_loaded = false;
        e.map.addEventListener("ontilesloaded", e.checkLoadedStatus);
        e.map.addEventListener("onstyle_loaded", e.checkLoadedStatus)
      },
      checkLoadedStatus: function(i) {
        f[i.type] = true;
        if (f.ontilesloaded && f.onstyle_loaded) {
          this.dispatchEvent(new aL("onstylechangetilesloaded"));
          this.removeEventListener("ontilesloaded", f.checkLoadedStatus);
          this.removeEventListener("onstyle_loaded", f.checkLoadedStatus)
        }
      },
      changeCopyright: function() {
        var e = this;
        if (e.map.cpyCtrl) {
          e.map.cpyCtrl.hide();
          if (e.environment !== "customEditor") {
            e.map.setCopyrightOffset(new c8(1,1))
          }
        } else {
          e.map.addEventListener("oncopyrightaddend", function() {
            e.map.cpyCtrl.hide();
            if (e.environment !== "customEditor") {
              e.map.setCopyrightOffset(new c8(1,1))
            }
          })
        }
      },
      setEnvironment: function(e) {
        if (e.customEditor) {
          this.environment = "customEditor";
          bc.map = this.map
        } else {
          if (e.sharing) {
            this.environment = "sharing"
          } else {
            if (e.preview) {
              this.environment = "preview"
            } else {
              this.environment = "jsapi"
            }
          }
        }
      },
      getStyleJson: function(gg, gi) {
        var gh = this;
        if (gg.styleJson) {
          gi && gi(gg.styleJson)
        } else {
          if (gg.styleId) {
            var i = gg.styleId;
            var e = (Math.random() * 100000).toFixed(0);
            aT["_cbk_si_phpui" + e] = function(gk) {
              var gj = [];
              if (gk.result && gk.result["error"] === 0 && gk.content && gk.content["status"] === 0) {
                gj = gh.parseJson(gk.content["data"]["json"]);
                gi && gi(gj)
              } else {
                gi && gi("default")
              }
            }
            ;
            aT["_cbk_si_api" + e] = function(gk) {
              var gj = [];
              if (gk.status === 0) {
                if (gk.info) {
                  gj = gh.parseJson(gk.info["json"])
                } else {
                  gj = gh.parseJson(gk.data["json"])
                }
                gi && gi(gj)
              } else {
                gi && gi("default")
              }
            }
            ;
            var gf = "";
            switch (this.environment) {
              case "jsapi":
                gf = dP.apiHost + "/?qt=custom_map&v=3.0&style_id=" + i + "&type=publish&ak=" + eW;
                gf += "&callback=" + dw + "._cbk_si_phpui" + e;
                break;
              case "sharing":
                gf += "/apiconsole/custommap/getSharingJson";
                gf += "?styleid=" + i + "&type=edit";
                gf += "&ck=" + dw + "._cbk_si_api" + e;
                break;
              case "preview":
                gf += "/apiconsole/custommap/getJson";
                gf += "?styleid=" + i + "&type=edit";
                gf += "&ck=" + dw + "._cbk_si_api" + e;
                break
            }
            fO.load(gf)
          } else {
            gi && gi("default")
          }
        }
      },
      parseJson: function(gf) {
        if (gf === null || gf === "") {
          return []
        }
        var i = {
          t: "featureType",
          e: "elementType",
          v: "visibility",
          c: "color",
          l: "lightness",
          s: "saturation",
          w: "weight",
          z: "level",
          h: "hue",
          f: "fontsize",
          zri: "curZoomRegionId",
          zr: "curZoomRegion"
        };
        var gh = {
          all: "all",
          g: "geometry",
          "g.f": "geometry.fill",
          "g.s": "geometry.stroke",
          l: "labels",
          "l.t.f": "labels.text.fill",
          "l.t.s": "labels.text.stroke",
          "l.t": "labels.text",
          "l.i": "labels.icon",
          "g.tf": "geometry.topfill",
          "g.sf": "geometry.sidefill"
        };
        var gg = gf.split(",");
        var e = gg.map(function(gl) {
          var gk = gl.split("|").map(function(gr) {
            var gp = i[gr.split(":")[0]];
            var go = (gh[gr.split(":")[1]] ? gh[gr.split(":")[1]] : gr.split(":")[1]);
            switch (go) {
              case "poi":
                go = "poilabel";
                break;
              case "districtlabel":
                go = "districtlabel";
                break
            }
            var gq = {};
            gq[gp] = go;
            return gq
          });
          var gi = gk[0];
          var gn = 1;
          if (gk[1]["elementType"]) {
            gn = 2;
            z.extend(gi, gk[1])
          }
          var gm = {};
          for (var gj = gn; gj < gk.length; gj++) {
            z.extend(gm, gk[gj])
          }
          return z.extend(gi, {
            stylers: gm
          })
        });
        return e
      },
      getStyleUrl: function(gf, gh, gg, e) {
        this.styleJson = gf;
        var i = dW.apiHost + "/custom/v2/mapstyle?ak=" + gh + "&callback=" + gg + "&";
        i += "is_all=true&is_new=1&";
        i += "styles=" + encodeURIComponent(this.styleJson2styleStringV2(gf, e));
        return i
      },
      styleJson2styleStringV2: function(gg, gq) {
        var gr = {
          featureType: "t",
          elementType: "e",
          visibility: "v",
          color: "c",
          lightness: "l",
          saturation: "s",
          weight: "w",
          level: "z",
          hue: "h",
          fontsize: "f"
        };
        var gs = {
          all: "all",
          geometry: "g",
          "geometry.fill": "g.f",
          "geometry.stroke": "g.s",
          labels: "l",
          "labels.text.fill": "l.t.f",
          "labels.text.stroke": "l.t.s",
          "labels.text": "l.t",
          "labels.icon": "l.i",
          "geometry.topfill": "g.tf",
          "geometry.sidefill": "g.sf"
        };
        var gt = [];
        var gl = false;
        var gn = false;
        var gf = false;
        var gm = false;
        var e = false;
        aT.customStyleInfo.zoomFrontStyle[gq] = {};
        for (var gh = 0; !!gg[gh]; gh++) {
          var gp = gg[gh];
          if (this.isOnlyZoomStyler(gp)) {
            continue
          }
          aT.customStyleInfo.zoomRegion = this.getZoomRegion(gp, aT.customStyleInfo.zoomRegion);
          if (!this.isSelectZoom(gp, gq)) {
            continue
          }
          if ((gp.featureType === "land" || gp.featureType === "all" || gp.featureType === "background") && typeof gp.elementType === "string" && (gp.elementType === "geometry" || gp.elementType === "geometry.fill" || gp.elementType === "all") && gp.stylers) {
            if (gp.stylers["color"]) {
              aT.customStyleInfo.zoomFrontStyle[gq]["bmapLandColor"] = gp.stylers["color"];
              aT.customStyleInfo.zoomFrontStyle[gq].landColor = true;
              aT.bmapLandColor = gp.stylers["color"];
              gl = true
            }
            if (gp.stylers["visibility"] && gp.stylers["visibility"] === "off") {
              aT.customStyleInfo.zoomFrontStyle[gq]["bmapLandColor"] = "#00000000";
              aT.customStyleInfo.zoomFrontStyle[gq].landColor = true;
              aT.bmapLandColor = "#00000000";
              gl = true
            }
          }
          if (gp.featureType === "roadarrow" && gp.elementType === "labels.icon" && gp.stylers) {
            aT.bmapRoadarrowVisibility = gp.stylers["visibility"];
            aT.customStyleInfo.zoomFrontStyle[gq]["bmapRoadarrowVisibility"] = gp.stylers["visibility"];
            aT.customStyleInfo.zoomFrontStyle[gq].roadarrowVisibility = true;
            e = true
          }
          var gi = {};
          z.extend(gi, gp);
          var gk = gi.stylers;
          delete gi.stylers;
          z.extend(gi, gk);
          var gj = [];
          for (var go in gr) {
            if (gi[go]) {
              if (this.isEditorZoomKeys(go)) {
                continue
              }
              if (go === "elementType") {
                gj.push(gr[go] + ":" + gs[gi[go]])
              } else {
                switch (gi[go]) {
                  case "poilabel":
                    gi[go] = "poi";
                    break;
                  case "districtlabel":
                    gi[go] = "label";
                    break
                }
                gj.push(gr[go] + ":" + gi[go])
              }
            }
          }
          if (gj.length > 2) {
            gt.push(gj.join("|"))
          }
        }
        if (!aT.customStyleInfo.zoomFrontStyle[gq].landColor && aT.customStyleInfo.zoomFrontStyle[gq]["bmapLandColor"]) {
          delete aT.customStyleInfo.zoomFrontStyle[gq]["bmapLandColor"]
        }
        if (!aT.customStyleInfo.zoomFrontStyle[gq].roadarrowVisibility && aT.customStyleInfo.zoomFrontStyle[gq]["bmapRoadarrowVisibility"]) {
          delete aT.customStyleInfo.zoomFrontStyle[gq]["bmapRoadarrowVisibility"]
        }
        return gt.join(",")
      },
      isOnlyZoomStyler: function(e) {
        var i = {};
        z.extend(i, e.stylers);
        delete i.curZoomRegionId;
        delete i.curZoomRegion;
        delete i.level;
        if (z.isEmptyObject(i)) {
          return true
        } else {
          return false
        }
      },
      isSelectZoom: function(i, e) {
        var gf = i.stylers["level"];
        if (gf === undefined) {
          return true
        } else {
          if (gf === e + "") {
            return true
          } else {
            return false
          }
        }
      },
      isEditorZoomKeys: function(e) {
        var i = {
          curZoomRegionId: true,
          curZoomRegion: true
        };
        if (i[e]) {
          return true
        } else {
          return false
        }
      },
      getZoomRegion: function(e, i) {
        var gg = e.stylers["level"];
        var gf = {};
        z.extend(gf, i);
        if (gg === undefined) {
          return gf
        } else {
          gf[parseInt(gg, 10)] = true;
          return gf
        }
      },
      onStyleDataBack: function(gh, gm, gl, e, gj) {
        if (gh.status !== 0) {
          return
        }
        if (gh.data.style.length === 3) {
          if (!aT.customStyleInfo.baseFs) {
            aT.customStyleInfo.baseFs = gh.data.style
          }
          aT.StyleBody = gh.data.style[2]
        } else {
          aT.StyleBody = gh.data.style
        }
        var gk = aT.customStyleInfo.baseFs;
        if (!z.isEmptyObject(aT.customStyleInfo.zoomRegion)) {
          this.updateZoomFeatureStyle(aT.StyleBody, gm);
          this.updateFrontFeatureStyle(gm);
          var gf = this.calcuOtherZoomRegion(aT.customStyleInfo.zoomRegion, gm);
          for (var gi in gf) {
            var gg = {};
            z.extend(gg, e);
            this.getOtherZoomStyles(gi, gj, gg)
          }
        } else {
          aT["FeatureStyle" + gl] = gk;
          this.updateFrontFeatureStyle(gm)
        }
      },
      updateZoomFeatureStyle: function(gi, gh) {
        aT.customStyleInfo.zoomStyleBody[gh] = gi;
        if (!aT.customStyleInfo.zoomRegion[gh]) {
          var gg = 3;
          var e = 21;
          for (var gf = gg; gf <= e; gf++) {
            if (!aT.customStyleInfo.zoomRegion[gf]) {
              aT.customStyleInfo.zoomStyleBody[gf] = gi
            }
          }
        }
      },
      getOtherZoomStyles: function(gi, gj, gg) {
        var gh = this;
        var gf = gi;
        var e = (Math.random() * 100000).toFixed(0);
        window["_cbk" + e] = function(gk) {
          if (gk.data.style.length === 3) {
            gk = gk.data.style[2]
          } else {
            gk = gk.data.style
          }
          gh.updateZoomFeatureStyle(gk, gf);
          gh.updateFrontFeatureStyle(gf);
          gh.map.dispatchEvent(new aL("onstylezoomupdate"));
          delete window["_cbk" + e]
        }
        ;
        var i = dW.apiHost + "/custom/v2/mapstyle?ak=" + gj + "&callback=_cbk" + e + "&is_all=true&is_new=1&styles=" + encodeURIComponent(this.styleJson2styleStringV2(gg, gf));
        fO.load(i)
      },
      updateFrontFeatureStyle: function(gh) {
        if (!aT.customStyleInfo.zoomRegion[gh]) {
          var gg = 3;
          var e = 21;
          for (var gf = gg; gf <= e; gf++) {
            if (!aT.customStyleInfo.zoomRegion[gf]) {
              if (!aT.customStyleInfo.zoomFrontStyle[gf]) {
                aT.customStyleInfo.zoomFrontStyle[gf] = {}
              }
              aT.customStyleInfo.zoomFrontStyle[gf]["bmapLandColor"] = aT.customStyleInfo.zoomFrontStyle[gh]["bmapLandColor"];
              aT.customStyleInfo.zoomFrontStyle[gf]["bmapRoadarrowVisibility"] = aT.customStyleInfo.zoomFrontStyle[gh]["bmapRoadarrowVisibility"]
            }
          }
        }
      },
      calcuOtherZoomRegion: function(gj, gi) {
        var gf = {};
        z.extend(gf, gj);
        if (gf[gi]) {
          var gh = 3;
          var e = 21;
          for (var gg = gh; gg <= e; gg++) {
            if (!gf[gg]) {
              gf[gg] = true;
              break
            }
          }
          delete gf[gi]
        } else {}
        return gf
      }
    };
    var bc = {
      map: null,
      labelCache: {},
      calcDrawMc: function(gf, i, e) {
        var gg = [];
        switch (i) {
          case "fill":
            gg = this.calcFill(gf, e);
            break;
          case "line":
            break;
          case "building3d":
            gg = this.calcBuilding3d(gf, e);
            break
        }
        return gg
      },
      calcFill: function(gh, gf) {
        var gi = [];
        for (var gg = 0; gg < gh.length; gg = gg + 5) {
          var e = this.coordToMc({
            x: gh[gg],
            y: gh[gg + 1]
          }, gf.row, gf.col, gf.mercatorSize, gf.baseTileSize);
          gi.push(e[0], e[1])
        }
        return gi
      },
      calcLine: function(gh, gf) {
        var gi = [];
        var gj = new Int16Array(gh.buffer);
        for (var gg = 0; gg < gj.length; gg = gg + 10) {
          var e = this.coordToMc({
            x: gj[gg] / 10,
            y: gj[gg + 1] / 10
          }, gf.row, gf.col, gf.mercatorSize, gf.baseTileSize);
          gi.push(e[0], e[1])
        }
        return gi
      },
      calcBuilding3d: function(gi, gf) {
        var gj = [];
        var gg = {};
        for (var gh = 0; gh < gi.length / 2; gh = gh + 7) {
          if (gi[gh] === gi[gh - 7] && gi[gh + 1] === gi[gh - 6]) {
            continue
          }
          if (gg[gi[gh].toString() + gi[gh + 1].toString()]) {
            continue
          }
          gg[gi[gh].toString() + gi[gh + 1].toString()] = true;
          var e = this.coordToMc({
            x: gi[gh],
            y: gi[gh + 1]
          }, gf.row, gf.col, gf.mercatorSize, gf.baseTileSize);
          gj.push(e[0], e[1])
        }
        return gj
      },
      coordToMc: function(gh, gg, e, i, gf) {
        return [gh.x * (i / gf) + e * i, gh.y * (i / gf) + gg * i]
      },
      addDrawIntoAreaSpots: function(e, gh) {
        if (f.environment !== "customEditor") {
          return
        }
        if (!gh.styleIds) {
          return
        }
        for (var gf = 0; gf < gh.styleIds.length; gf++) {
          var gk = 0;
          if (gf > 0) {
            gk = gh.verticesLength[gf - 1]
          }
          end = gh.verticesLength[gf];
          var gi = [];
          var gg = "";
          if (gh.vertex) {
            gi = gh.vertex;
            gg = "building3d"
          } else {
            if (gh.data[0]) {
              gi = gh.data[0];
              gg = gh.type
            } else {
              continue
            }
          }
          var gj = this.calcDrawMc(gi.slice(gk, end), gg, e);
          this.map.addAreaSpot(gj, {
            userData: {
              styleId: gh.styleIds[gf],
              type: "mapstyle"
            }
          })
        }
      },
      addLabelIntoAreaSpots: function(e) {
        if (f.environment !== "customEditor") {
          return
        }
        for (var gh = 0; gh < e.length; gh++) {
          var gi = e[gh];
          for (var gg = 0; gg < gi.fixedLabel.length; gg++) {
            var gf = gi.fixedLabel[gg];
            if (!gf._mcBds) {
              continue
            }
            var gj = [gf._mcBds[0].lng, gf._mcBds[0].lat, gf._mcBds[0].lng, gf._mcBds[1].lat, gf._mcBds[1].lng, gf._mcBds[1].lat, gf._mcBds[1].lng, gf._mcBds[0].lat];
            if (!this.labelCache[gj.join()]) {
              this.labelCache[gj.join()] = true;
              this.map.addAreaSpot(gj, {
                userData: {
                  styleId: gf.styleId,
                  type: "mapstyle",
                  name: gf.name
                }
              })
            }
          }
        }
      }
    };
    function bj(i, e, gg, gf) {
      this.cx = 3 * i;
      this.bx = 3 * (gg - i) - this.cx;
      this.ax = 1 - this.cx - this.bx;
      this.cy = 3 * e;
      this.by = 3 * (gf - e) - this.cy;
      this.ay = 1 - this.cy - this.by;
      this.p1x = i;
      this.p1y = gf;
      this.p2x = gg;
      this.p2y = gf
    }
    bj.prototype.sampleCurveX = function(e) {
      return ((this.ax * e + this.bx) * e + this.cx) * e
    }
    ;
    bj.prototype.sampleCurveY = function(e) {
      return ((this.ay * e + this.by) * e + this.cy) * e
    }
    ;
    bj.prototype.sampleCurveDerivativeX = function(e) {
      return (3 * this.ax * e + 2 * this.bx) * e + this.cx
    }
    ;
    bj.prototype.solveCurveX = function(e, gl) {
      if (typeof gl === "undefined") {
        gl = 0.000001
      }
      var gk;
      var gj;
      var gh;
      var gf;
      var gg;
      for (gh = e,
             gg = 0; gg < 8; gg++) {
        gf = this.sampleCurveX(gh) - e;
        if (Math.abs(gf) < gl) {
          return gh
        }
        var gi = this.sampleCurveDerivativeX(gh);
        if (Math.abs(gi) < 0.000001) {
          break
        }
        gh = gh - gf / gi
      }
      gk = 0;
      gj = 1;
      gh = e;
      if (gh < gk) {
        return gk
      }
      if (gh > gj) {
        return gj
      }
      while (gk < gj) {
        gf = this.sampleCurveX(gh);
        if (Math.abs(gf - e) < gl) {
          return gh
        }
        if (e > gf) {
          gk = gh
        } else {
          gj = gh
        }
        gh = (gj - gk) * 0.5 + gk
      }
      return gh
    }
    ;
    bj.prototype.solve = function(e, i) {
      return this.sampleCurveY(this.solveCurveX(e, i))
    }
    ;
    var bK = {};
    function n(gf) {
      var e = {
        duration: 1000,
        fps: 30,
        delay: 0,
        transition: bK.linear,
        dropLastAnimation: false
      };
      if (gf) {
        for (var gg in gf) {
          e[gg] = gf[gg]
        }
      }
      if (gf.beginTime) {
        this._beginTime = gf.beginTime
      }
      this._callbacks = [];
      this._options = e;
      if (e.delay) {
        var gh = this;
        setTimeout(function() {
          gh._doStart()
        }, e.delay)
      } else {
        this._doStart()
      }
    }
    n.INFINITE = "INFINITE";
    n.prototype._doStart = function() {
      if (window.requestAnimationFrame) {
        var e = this;
        e._timer = window.requestAnimationFrame(function(i) {
          e._loop(i)
        })
      } else {
        this._beginTime = new Date().getTime();
        if (this._options.duration === n.INFINITE) {
          this._endTime = null
        } else {
          this._endTime = this._beginTime + this._options.duration
        }
        this._loop()
      }
    }
    ;
    n.prototype._loop = function(gg) {
      var gj = this;
      gg = gg || new Date().getTime();
      if (!this._beginTime) {
        this._beginTime = gg
      }
      if (!this._endTime && typeof this._options.duration === "number") {
        this._endTime = this._beginTime + this._options.duration
      }
      if (gj._endTime !== null && gg >= gj._endTime) {
        if (gj._options.dropLastAnimation === false) {
          gj._options.render(gj._options.transition(1), 1, gg)
        }
        if (typeof gj._options.finish === "function") {
          gj._options.finish(gg, this)
        }
        for (var gi = 0, e = gj._callbacks.length; gi < e; gi++) {
          gj._callbacks[gi]()
        }
        return
      }
      var gh;
      if (typeof gj._options.duration === "number") {
        gh = (gg - gj._beginTime) / gj._options.duration;
        gj.schedule = gj._options.transition(gh)
      } else {
        gh = gg - gj._beginTime;
        gj.schedule = 0
      }
      gj._options.render(gj.schedule, gh, gg);
      if (!gj.terminative) {
        if (window.requestAnimationFrame) {
          gj._timer = requestAnimationFrame(function gf(i) {
            gj._loop(i)
          })
        } else {
          gj._timer = setTimeout(function() {
            gj._loop()
          }, 1000 / gj._options.fps)
        }
      }
    }
    ;
    n.prototype.stop = function(i, e) {
      this.terminative = true;
      if (this._timer) {
        if (window.cancelAnimationFrame) {
          cancelAnimationFrame(this._timer)
        } else {
          clearTimeout(this._timer)
        }
        this._timer = null;
        if (typeof this._options.onStop === "function") {
          this._options.onStop(e)
        }
      }
      if (i) {
        this._endTime = this._beginTime;
        this._loop()
      }
    }
    ;
    n.prototype.cancel = function() {
      this.stop()
    }
    ;
    n.prototype.append = function(e) {
      this._callbacks.push(e);
      return this
    }
    ;
    bK = {
      _p1: 1,
      _p2: 1 * 1.525,
      linear: function(e) {
        return e
      },
      reverse: function(e) {
        return 1 - e
      },
      easeInQuad: function(e) {
        return e * e
      },
      easeInCubic: function(e) {
        return Math.pow(e, 3)
      },
      easeInBiquad: function(e) {
        return Math.pow(e, 4)
      },
      easeInBack: function(e) {
        return e * e * ((bK._p1 + 1) * e - bK._p1)
      },
      easeOutQuad: function(e) {
        return -(e * (e - 2))
      },
      easeOutCubic: function(e) {
        return Math.pow((e - 1), 3) + 1
      },
      easeOutBiquad: function(e) {
        return 1 - Math.pow((e - 1), 4)
      },
      easeOutBack: function(e) {
        return ((e = e - 1) * e * ((bK._p1 + 1) * e + bK._p1) + 1)
      },
      easeInOutQuad: function(e) {
        if (e < 0.5) {
          return e * e * 2
        } else {
          return -2 * (e - 2) * e - 1
        }
      },
      easeInOutCubic: function(e) {
        if (e < 0.5) {
          return Math.pow(e, 3) * 4
        } else {
          return Math.pow(e - 1, 3) * 4 + 1
        }
      },
      easeInOutBiquad: function(e) {
        if (e < 0.5) {
          return Math.pow(e, 4) * 8
        } else {
          return 1 - (Math.pow(e - 1, 4) * 8)
        }
      },
      easeInOutSine: function(e) {
        return (1 - Math.cos(Math.PI * e)) / 2
      }
    };
    bK.ease = (function() {
        var e = new bj(0.4,0,0.6,1);
        return function(i) {
          return e.solve(i)
        }
      }
    )();
    bK["ease-in"] = bK.easeInQuad;
    bK["ease-out"] = bK.easeOutQuad;
    var ed = {
      start: function(gm) {
        var gg = gm.el;
        var e = gm.style;
        var i = gm.startValue;
        var gj = gm.endValue;
        var gh = gm.duration || 1400;
        var gi = gm.transition || bK.linear;
        var gl = gm.callback;
        var gk = gj - i;
        var gf = gm.unit || "";
        return new n({
          fps: 60,
          duration: gh,
          transition: gi,
          render: function(gn) {
            gg.style[e] = i + gk * gn + gf
          },
          finish: function() {
            gl && gl()
          }
        })
      }
    };
    function b4(gh, gf) {
      db.call(this);
      this.keyframes = gh;
      var e = {
        duration: 1000,
        delay: 0,
        transition: bK.linear,
        interation: 1
      };
      if (gf) {
        for (var gg in gf) {
          e[gg] = gf[gg]
        }
      }
      this._options = e
    }
    b4.inherits(db, "ViewAnimation");
    b4.prototype._start = function(gi) {
      var gf = this;
      gf.map = gi;
      var gh = new aL("onanimationstart");
      gf.dispatchEvent(gh);
      this._initStatus(gf.map);
      var gg = this._options.duration;
      var i = this._options.interation;
      var gj = this._options.transition;
      var gk = 0;
      gf.poiStatus = gf.map._displayOptions.poi;
      if (gf.poiStatus) {
        gf.map.setDisplayOptions({
          poi: false
        })
      }
      gf.map.viewAnimationTime = new Date().getTime();
      this.animation = new n({
        duration: gg,
        transition: gj,
        start: function(e) {},
        render: function(gl, e) {
          if (gl === 0) {
            gf._initStatus(gf.map)
          } else {
            gf._setViewByRate(gl)
          }
        },
        finish: function(gm, gl) {
          if (++gk < i || i === "INFINITE") {
            var gn = new aL("onanimationiterations");
            gf.dispatchEvent(gn);
            delete gl._beginTime;
            delete gl._endTime;
            gl._doStart()
          } else {
            var gn = new aL("onanimationend");
            gf.dispatchEvent(gn);
            delete gf.map.viewAnimationTime;
            gf.map.setDisplayOptions({
              poi: gf.poiStatus
            })
          }
        }
      })
    }
    ;
    b4.prototype._getTotalDuration = function(e, i) {
      if (e === n.INFINITE) {
        return n.INFINITE
      } else {
        return e * i
      }
    }
    ;
    b4.prototype._initStatus = function(e) {
      if (this.keyframes[0]) {
        e.setCenter(this.keyframes[0].center, {
          noAnimation: true
        });
        e.setZoom(this.keyframes[0].zoom, {
          noAnimation: true
        });
        e.setTilt(this.keyframes[0].tilt, {
          noAnimation: true
        });
        e.setHeading(this.keyframes[0].heading, {
          noAnimation: true
        })
      }
    }
    ;
    b4.prototype._setViewByRate = function(gg) {
      for (var e = 0; e < this.keyframes.length - 1; e++) {
        var gh = this.keyframes[e];
        var gf = this.keyframes[e + 1];
        if (gg >= gh.percentage && gg < gf.percentage) {
          this.map.setHeading(this._getHeadingDelta(gh, gf, gg), {
            noAnimation: true
          });
          this.map.setTilt(this._getTiltDelta(gh, gf, gg), {
            noAnimation: true
          });
          this.map.setCenter(this._getCenterDelta(gh, gf, gg), {
            noAnimation: true
          });
          this.map.setZoom(this._getZoomDelta(gh, gf, gg), {
            noAnimation: true
          })
        }
      }
    }
    ;
    b4.prototype._getHeadingDelta = function(gf, i, e) {
      var gh = (e - gf.percentage) / (i.percentage - gf.percentage);
      var gg = gf.heading + (i.heading - gf.heading) * gh;
      return gg
    }
    ;
    b4.prototype._getTiltDelta = function(gf, i, e) {
      var gh = (e - gf.percentage) / (i.percentage - gf.percentage);
      var gg = gf.tilt + (i.tilt - gf.tilt) * gh;
      return gg
    }
    ;
    b4.prototype._getCenterDelta = function(gf, i, e) {
      var gh = (e - gf.percentage) / (i.percentage - gf.percentage);
      var gg = gf.center.add(i.center.sub(gf.center).mult(gh));
      return gg
    }
    ;
    b4.prototype._getZoomDelta = function(gg, gf, i) {
      var gh = (i - gg.percentage) / (gf.percentage - gg.percentage);
      var e = gg.zoom + (gf.zoom - gg.zoom) * gh;
      return e
    }
    ;
    b4.prototype._cancel = function(gf) {
      gf.setDisplayOptions({
        poi: this.poiStatus
      });
      this.animation.cancel();
      delete gf.viewAnimationTime;
      var i = new aL("onanimationcancel");
      this.dispatchEvent(i)
    }
    ;
    var ds = undefined;
    var cf = {
      is64Bit: function() {
        if (/Windows/.test(navigator.userAgent)) {
          if (/Win64; x64/.test(navigator.userAgent)) {
            return true
          } else {
            if (/WOW64/.test(navigator.userAgent)) {
              return true
            } else {
              return false
            }
          }
        }
        return true
      },
      isIOS112: function b6(e) {
        return /11_2/.test(navigator.userAgent)
      },
      canUseWebAssembly: function(i) {
        if (ds !== undefined) {
          i && i(ds);
          return
        }
        if (window.WebAssembly && this.is64Bit()) {
          if (!aZ()) {
            ds = true;
            i && i(ds)
          } else {
            if (this.isIOS112()) {
              ds = false;
              i && i(ds)
            } else {
              var e = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 133, 128, 128, 128, 0, 1, 96, 0, 1, 127, 3, 130, 128, 128, 128, 0, 1, 0, 4, 132, 128, 128, 128, 0, 1, 112, 0, 0, 5, 131, 128, 128, 128, 0, 1, 0, 1, 6, 129, 128, 128, 128, 0, 0, 7, 145, 128, 128, 128, 0, 2, 6, 109, 101, 109, 111, 114, 121, 2, 0, 4, 109, 97, 105, 110, 0, 0, 10, 138, 128, 128, 128, 0, 1, 132, 128, 128, 128, 0, 0, 65, 42, 11]);
              WebAssembly.instantiate(e).then(function(gf) {
                ds = true;
                i && i(ds)
              }, function(gf) {
                ds = false;
                i && i(ds)
              })
            }
          }
        } else {
          ds = false;
          i && i(ds)
        }
      }
    };
    var cE = {};
    aT.Utils = cE;
    function cq(e) {
      return e.style
    }
    function cw(i) {
      if (z.Browser.ie > 0) {
        i.unselectable = "on";
        i.selectstart = function() {
          return false
        }
        ;
        i.onmousedown = function(gf) {
          gf.preventDefault();
          return false
        }
      } else {
        var e = cq(i);
        e.MozUserSelect = "none";
        e.WebkitUserSelect = "none";
        i.addEventListener("mousedown", function(gf) {
          gf.preventDefault()
        }, false)
      }
    }
    function fH(e) {
      return e && e.parentNode && e.parentNode.nodeType !== 11
    }
    function cQ(i, e) {
      i.insertAdjacentHTML("beforeEnd", e);
      return i.lastChild
    }
    function f0(gf, i) {
      var gg = document.createElement("div");
      gg.innerHTML = i;
      var e = gg.childNodes[0];
      return gf.parentNode.insertBefore(e, gf)
    }
    function j(i) {
      i = i || window.event;
      i.stopPropagation ? i.stopPropagation() : i.cancelBubble = true
    }
    function bl(i) {
      i = i || window.event;
      i.preventDefault ? i.preventDefault() : i.returnValue = false;
      return false
    }
    function co(i) {
      j(i);
      return bl(i)
    }
    function ew() {
      var e = document.documentElement;
      var i = document.body;
      if (e && (e.scrollTop || e.scrollLeft)) {
        return [e.scrollTop, e.scrollLeft]
      } else {
        if (i) {
          return [i.scrollTop, i.scrollLeft]
        } else {
          return [0, 0]
        }
      }
    }
    function ei(gh) {
      if (!gh) {
        return
      }
      gh.onload = gh.onerror = null;
      var gf = gh.attributes, gg, e, gi;
      if (gf) {
        e = gf.length;
        for (gg = 0; gg < e; gg += 1) {
          gi = gf[gg].name;
          if (typeof gh[gi] === "function") {
            gh[gi] = null
          }
        }
      }
      gf = gh.children;
      if (gf) {
        e = gf.length;
        for (gg = 0; gg < e; gg += 1) {
          ei(gh.children[gg])
        }
      }
    }
    function ba(i, gj, gi) {
      var gh = gj.lng - gi.lng;
      var gg = gj.lat - gi.lat;
      if (gh === 0) {
        return Math.abs(i.lng - gj.lng)
      }
      if (gg === 0) {
        return Math.abs(i.lat - gj.lat)
      }
      var gf = gg / gh;
      var e = gj.lat - gf * gj.lng;
      return Math.abs(gf * i.lng - i.lat + e) / Math.sqrt(gf * gf + 1)
    }
    function ft(i, e) {
      if (!i || !e) {
        return
      }
      return Math.round(Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)))
    }
    function bg(i, e) {
      if (!i || !e) {
        return 0
      }
      return Math.round(Math.sqrt(Math.pow(i.lng - e.lng, 2) + Math.pow(i.lat - e.lat, 2)))
    }
    function cg(gf, i) {
      var e = Math.round((gf.x + i.x) / 2);
      var gg = Math.round((gf.y + i.y) / 2);
      return new dh(e,gg)
    }
    function fM(e, gf) {
      var i = [];
      gf = gf || function(gh) {
        return gh
      }
      ;
      for (var gg in e) {
        i.push(gg + "=" + gf(e[gg]))
      }
      return i.join("&")
    }
    function L(gf, i, gi) {
      var gj = document.createElement(gf);
      if (gi) {
        gj = document.createElementNS(gi, gf)
      }
      i = i || {};
      for (var gg in i) {
        var gh = {
          "for": "htmlFor",
          "class": "cssClass"
        }[gg] || gg;
        if (gg === "style") {
          gj.style.cssText = i[gg];
          continue
        }
        if (gg === "class") {
          z.ac(gj, i[gg]);
          continue
        }
        if (gj.setAttribute) {
          gj.setAttribute(gh, i[gg])
        } else {
          try {
            gj[gh] = i[gg]
          } catch (gj) {}
        }
      }
      return gj
    }
    function eJ(e) {
      if (e.currentStyle) {
        return e.currentStyle
      } else {
        if (e.ownerDocument && e.ownerDocument.defaultView) {
          return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }
      }
    }
    function bm(e) {
      return typeof e === "function"
    }
    var fP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function fz(gh) {
      var gf = "";
      var go;
      var gm;
      var gk = "";
      var gn;
      var gl;
      var gj;
      var gi = "";
      var gg = 0;
      var e = /[^A-Za-z0-9+/=]/g;
      if (!gh || e.exec(gh)) {
        return gh
      }
      gh = gh.replace(/[^A-Za-z0-9+/=]/g, "");
      do {
        gn = fP.indexOf(gh.charAt(gg++));
        gl = fP.indexOf(gh.charAt(gg++));
        gj = fP.indexOf(gh.charAt(gg++));
        gi = fP.indexOf(gh.charAt(gg++));
        go = (gn << 2) | (gl >> 4);
        gm = ((gl & 15) << 4) | (gj >> 2);
        gk = ((gj & 3) << 6) | gi;
        gf = gf + String.fromCharCode(go);
        if (gj !== 64) {
          gf = gf + String.fromCharCode(gm)
        }
        if (gi !== 64) {
          gf = gf + String.fromCharCode(gk)
        }
        go = gm = gk = "";
        gn = gl = gj = gi = ""
      } while (gg < gh.length);return gf
    }
    (function(e) {
        if (!e.Utils) {
          e.Utils = {}
        }
        var i = e.Utils;
        i.format = (function() {
            function gf(gj, gi, gk) {
              var gh = gk[+gi];
              return typeof (gh) === "function" ? gh(gi) : gh
            }
            function gg(gj, gi, gk) {
              var gm = gi;
              var gn = [];
              var gh = gi.split(":");
              if (gh.length === 2) {
                gm = gh[0];
                gn.push(gh[1])
              }
              var gl = typeof (gk[gm]);
              if (gl === "function") {
                return gk[gm].apply(undefined, gn)
              } else {
                if (gl === "undefined") {
                  return gj
                } else {
                  return String(gk[gm])
                }
              }
            }
            return function(gh, gi) {
              var gk = gi.splice ? gf : gg;
              var gj = gh.splice ? gh.join("") : gh;
              return gj.replace(/{([a-zA-Z0-9_$:.]+)}/g, function(gm, gl) {
                return gk(gm, gl, gi)
              })
            }
          }
        )();
        i.ErrorMonitor = function(gg, gf, gh) {}
        ;
        cf.canUseWebAssembly(function(gf) {
          i.canUseWebAssembly = gf
        })
      }
    )(aT);
    function eO() {
      return (aZ() || dx())
    }
    function aZ() {
      var e = navigator.userAgent;
      if (e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1) {
        return true
      }
      return false
    }
    function dx() {
      var e = navigator.userAgent;
      if (e.indexOf("Android") > -1) {
        return true
      }
      return false
    }
    function cS(e) {
      return e * Math.PI / 180
    }
    function cr(e) {
      return e / Math.PI * 180
    }
    function cV(e, gh) {
      var gg = Math.pow(10, gh);
      if (typeof e === "number") {
        return Math.round(e * gg) / gg
      }
      for (var gf = 0; gf < e.length; gf++) {
        e[gf] = cV(e[gf], gh)
      }
      return e
    }
    function es(gf, i, e) {
      if (gf < i) {
        gf = i
      } else {
        if (gf > e) {
          gf = e
        }
      }
      return gf
    }
    function eK(e, i) {
      while (e < 0) {
        e += i
      }
      return e % i
    }
    function c7(i, e) {
      return (i >= 0 && e >= 0) || (i < 0 && e < 0)
    }
    function aH(i) {
      if (i._gl) {
        return i._gl
      }
      var e = {
        alpha: true,
        antialias: false,
        failIfMajorPerformanceCaveat: false,
        preserveDrawingBuffer: false,
        stencil: false
      };
      var gf = i.getContext("webgl", e) || i.getContext("experimental-webgl", e);
      i._gl = gf;
      return gf
    }
    function dE(gg, gf) {
      for (var e = 0; e < gf.length; e++) {
        z.on(gg, gf[e], j)
      }
    }
    function ge(i, gf, e) {
      gf[e] = i.getUniformLocation(gf, e)
    }
    function dU(gh, gi, e, gf, i) {
      var gg = "";
      switch (i) {
        case "mat4":
          gh.uniformMatrix4fv(gi[e], false, gf);
          return;
        case "v3":
          gg = "uniform3fv";
          break;
        case "f":
          gg = "uniform1f";
          break;
        case "i":
          gg = "uniform1i";
          break
      }
      if (gg === "") {
        throw "error"
      }
      gh[gg](gi[e], gf)
    }
    function G(go, e) {
      while (go < 0) {
        go += 360
      }
      go = go % 360;
      var gg = e.width;
      var gn = e.height;
      var gj = gg;
      var gf = gn;
      if (go < 90) {
        var i = Math.sin(cS(go)) * gg;
        var gl = Math.sin(cS(go)) * gn;
        var gm = Math.cos(cS(go)) * gg;
        var gi = Math.cos(cS(go)) * gn;
        var gj = Math.ceil(gm + gl);
        var gf = Math.ceil(i + gi)
      } else {
        if (go < 180) {
          var go = go - 90;
          var i = Math.sin(cS(go)) * gg;
          var gl = Math.sin(cS(go)) * gn;
          var gm = Math.cos(cS(go)) * gg;
          var gi = Math.cos(cS(go)) * gn;
          var gj = Math.ceil(i + gi);
          var gf = Math.ceil(gm + gl)
        } else {
          if (go < 270) {
            var go = go - 180;
            var i = Math.sin(cS(go)) * gg;
            var gl = Math.sin(cS(go)) * gn;
            var gm = Math.cos(cS(go)) * gg;
            var gi = Math.cos(cS(go)) * gn;
            var gj = Math.ceil(gm + gl);
            var gf = Math.ceil(i + gi)
          } else {
            var go = go - 270;
            var i = Math.sin(cS(go)) * gg;
            var gl = Math.sin(cS(go)) * gn;
            var gm = Math.cos(cS(go)) * gg;
            var gi = Math.cos(cS(go)) * gn;
            var gj = Math.ceil(i + gi);
            var gf = Math.ceil(gm + gl)
          }
        }
      }
      var gk = gj - gg;
      var gh = gf - gn;
      return [0 - gk / 2, 0 - gh / 2, gg + gk / 2, gn + gh / 2]
    }
    function fk(e) {
      if (e.toDataURL() === fk._blankData) {
        return true
      }
      return false
    }
    function fc(gh, gg, gf) {
      var i = [gf.lng - gh.lng, gf.lat - gh.lat];
      var e = [gg.lng - gh.lng, gg.lat - gh.lat];
      return i[0] * e[1] - i[1] * e[0]
    }
    function bE(gi, gh, gf) {
      var e;
      var gj;
      var gg;
      var i;
      if (gi.lng < gh.lng) {
        e = gi.lng;
        gg = gh.lng
      } else {
        e = gh.lng;
        gg = gi.lng
      }
      if (gi.lat < gh.lat) {
        gj = gi.lat;
        i = gh.lat
      } else {
        gj = gh.lat;
        i = gi.lat
      }
      if (gf.lng < e || gf.lng > gg || gf.lat < gj || gf.lat > i) {
        return false
      }
      return true
    }
    function fe(gk, gj, gi, gg) {
      var gh = fc(gi, gg, gk);
      var gf = fc(gi, gg, gj);
      var i = fc(gk, gj, gi);
      var e = fc(gk, gj, gg);
      if (gh * gf < 0 && i * e < 0) {
        return true
      } else {
        if (gh === 0 && bE(gi, gg, gk)) {
          return true
        } else {
          if (gf === 0 && bE(gi, gg, gj)) {
            return true
          } else {
            if (i === 0 && bE(gk, gj, gi)) {
              return true
            } else {
              if (e === 0 && bE(gk, gj, gg)) {
                return true
              } else {
                return false
              }
            }
          }
        }
      }
    }
    function fY(gf, i) {
      var e = i.parentNode;
      if (e.lastChild === i) {
        e.appendChild(gf)
      } else {
        e.insertBefore(gf, i.nextSibling)
      }
    }
    function f4(gm, gn) {
      if (gn === 0) {
        return gm
      }
      var gl = 0;
      var gj = 0;
      if (!gm) {
        throw "异常"
      }
      if (gm.length === 0) {
        return []
      }
      for (var gh = 1, gf = gm.length - 1; gh < gf; gh++) {
        var gk = ba(gm[gh], gm[0], gm[gm.length - 1]);
        if (gk > gl) {
          gj = gh;
          gl = gk
        }
      }
      var e = [];
      if (gl >= gn) {
        var gp = gm.slice(0, gj);
        var go = gm.slice(gj, gm.length);
        var gi = f4(gp, gn);
        var gg = f4(go, gn);
        for (var gh = 0, gf = gi.length; gh < gf; gh++) {
          e.push(gi[gh])
        }
        for (var gh = 0, gf = gg.length; gh < gf; gh++) {
          e.push(gg[gh])
        }
      } else {
        e.push(gm[0]);
        e.push(gm[gm.length - 1])
      }
      return e
    }
    function dy(e) {
      if (Math.log2) {
        return Math.log2(e)
      }
      return Math.log(e) / Math.LN2
    }
    function aW(gf, i, e) {
      return Math.min(e, Math.max(i, gf))
    }
    function b2(e, i) {
      if (!i) {
        return e
      }
      var gi = i[0];
      var gh = i[1];
      var gg = i[2];
      var gf = i[3];
      var gk = [];
      var gj = [];
      gk[0] = gf * e[0] + gg * e[2];
      gk[1] = e[1];
      gk[2] = -gg * e[0] + gf * e[2];
      gj[0] = gk[0];
      gj[1] = gh * gk[1] - gi * gk[2];
      gj[2] = gi * gk[1] + gh * gk[2];
      return gj
    }
    var av = Math.PI / 180;
    var A = 180 / Math.PI;
    function a3(gf) {
      var i = (gf - Date.UTC(2000, 0, 1, 12)) / 86400000 / 36525;
      var e = (d3.utcDay.floor(gf) - gf) / 86400000 * 360 - 180;
      return [e - M(i) * A, fh(i) * A]
    }
    function M(gg) {
      var gh = eQ(gg);
      var i = cT(gg);
      var gf = Y(gg);
      var gi = Math.tan(eN(gg) / 2);
      gi *= gi;
      return gi * Math.sin(2 * gf) - 2 * gh * Math.sin(i) + 4 * gh * gi * Math.sin(i) * Math.cos(2 * gf) - 0.5 * gi * gi * Math.sin(4 * gf) - 1.25 * gh * gh * Math.sin(2 * i)
    }
    function fh(e) {
      return Math.asin(Math.sin(eN(e)) * Math.sin(fx(e)))
    }
    function fx(e) {
      return aO(e) - (0.00569 + 0.00478 * Math.sin((125.04 - 1934.136 * e) * av)) * av
    }
    function aO(e) {
      return Y(e) + cW(e)
    }
    function cT(e) {
      return (357.52911 + e * (35999.05029 - 0.0001537 * e)) * av
    }
    function Y(i) {
      var e = (280.46646 + i * (36000.76983 + i * 0.0003032)) % 360;
      return (e < 0 ? e + 360 : e) / 180 * Math.PI
    }
    function cW(i) {
      var e = cT(i);
      return (Math.sin(e) * (1.914602 - i * (0.004817 + 0.000014 * i)) + Math.sin(e + e) * (0.019993 - 0.000101 * i) + Math.sin(e + e + e) * 0.000289) * av
    }
    function eN(e) {
      return d6(e) + 0.00256 * Math.cos((125.04 - 1934.136 * e) * av) * av
    }
    function d6(e) {
      return (23 + (26 + (21.448 - e * (46.815 + e * (0.00059 - e * 0.001813))) / 60) / 60) * av
    }
    function eQ(e) {
      return 0.016708634 - e * (0.000042037 + 1.267e-7 * e)
    }
    function aI() {
      return window.devicePixelRatio || 1
    }
    function an(gf) {
      var i;
      var e;
      var gg;
      if (gf >= 0) {
        gg = Math.floor(gf / 65536) * 65536;
        i = gg;
        e = gf - gg
      } else {
        gg = Math.floor(-gf / 65536) * 65536;
        i = -gg;
        e = gf + gg
      }
      return [i, e]
    }
    function C(e) {
      if (e.lng >= 0 && e.lat >= 0) {
        return new fU(e.lng - 10000000,e.lat - 6000000)
      }
      if (e.lng >= 0 && e.lat < 0) {
        return new fU(e.lng - 10000000,e.lat + 6000000)
      }
      if (e.lng < 0 && e.lat >= 0) {
        return new fU(e.lng + 10000000,e.lat - 6000000)
      }
      if (e.lng < 0 && e.lat < 0) {
        return new fU(e.lng + 10000000,e.lat + 6000000)
      }
    }
    var ep = null;
    if (window.performance && window.performance.now) {
      ep = function() {
        return performance.now()
      }
    } else {
      if (Date.now) {
        ep = function() {
          return Date.now()
        }
      } else {
        ep = function() {
          return (new Date).getTime()
        }
      }
    }
    function be(gg, e, i) {
      var gf = "mouseWheel";
      if (z.Platform.macintosh) {
        if (!isNaN(gg) && (gg < 10 || gg !== 120) && (e % 1 === 0 && e < 5)) {
          gf = "padScroll"
        }
        if (z.Browser.firefox && (e % 1 === 0 && e < 5 && i === 0)) {
          gf = "padScroll"
        }
      }
      if (z.Browser.safari && gg === 12) {
        gf = "mouseWheel"
      }
      return gf
    }
    function cs(gp, gk) {
      var go = gp[0];
      var gn = gp[1];
      var gg = false;
      for (var gj = 0, gi = gk.length - 2; gj < gk.length; gj += 2) {
        var gm = gk[gj];
        var gh = gk[gj + 1];
        var gl = gk[gi];
        var gf = gk[gi + 1];
        var e = ((gh > gn) !== (gf > gn)) && (go < (gl - gm) * (gn - gh) / (gf - gh) + gm);
        if (e) {
          gg = !gg
        }
        gi = gj
      }
      return gg
    }
    function bY(gf, e, i, gg) {
      gg = gg || 0.4;
      if (gf > i) {
        gf = Math.pow(gf - i + 1, gg) + i - 1
      } else {
        if (gf < e) {
          gf = e - Math.pow(e - gf + 1, gg) + 1
        }
      }
      return gf
    }
    function e2(gk) {
      var gi = "";
      for (var gf = 0; gf < gk.length; gf++) {
        var gl = gk.charCodeAt(gf) << 1;
        var e = gl.toString(2);
        var gh = e.length;
        var go = e;
        if (gh < 8) {
          go = "00000000" + e;
          go = go.substr(e.length, 8)
        }
        gi += go
      }
      var gm = 5 - gi.length % 5;
      var gg = [];
      for (var gf = 0; gf < gm; gf++) {
        gg[gf] = "0"
      }
      gi = gg.join("") + gi;
      var gn = [];
      for (var gf = 0; gf < gi.length / 5; gf++) {
        var gl = gi.substr(gf * 5, 5);
        var gj = parseInt(gl, 2) + 50;
        gn.push(String.fromCharCode(gj))
      }
      return gn.join("") + gm.toString()
    }
    function am(gf, i) {
      var e = aT.TILE_VERSION || window.TILE_VERSION;
      if (!e || !e[gf] || !e[gf][i] || !e[gf][i].version || !e[gf][i].updateDate) {
        e = dW.tvc
      }
      return {
        ver: e[gf][i].version,
        udt: e[gf][i].updateDate
      }
    }
    function eo() {
      var e = aT.MSV || window.MSV;
      if (!e || !e.mapstyle || !e.mapstyle.updateDate || !e.mapstyle.version) {
        e = dW.msv
      }
      return {
        ver: e.mapstyle.version,
        udt: e.mapstyle.updateDate
      }
    }
    function dp(e, gh) {
      var gg = e.slice(0);
      for (var gf = 0; gf < gg.length; gf++) {
        gg[gf] += gh
      }
      return gg
    }
    var aG = null;
    function a2(e) {
      if (aG) {
        return
      }
      e.fire(new aL("onloadtile"));
      aG = setTimeout(function() {
        aG = null
      }, 1000)
    }
    function dT() {
      if (bN("//map.baidu.com") || bN("//maps.baidu.com") || bN("//ditu.baidu.com")) {
        return true
      }
      return false
    }
    cE.inMapHost = dT();
    if (typeof window._inMapHost === "boolean") {
      cE.inMapHost = window._inMapHost
    }
    function bN(i) {
      var gf = window.location;
      var e = document.createElement("a");
      e.href = i;
      return e.hostname === gf.hostname && e.port === gf.port && e.protocol === gf.protocol
    }
    function c9() {}
    z.extend(c9, {
      Request: {
        INITIAL: -1,
        WAITING: 0,
        LOADED: 1,
        COMPLETED: 2
      },
      Dependency: {
        poly: ["marker"],
        infowindow: ["marker"],
        groundOverlay: ["marker"],
        simpleInfowindow: ["marker"],
        hotspot: ["poly"],
        tools: ["marker", "poly"],
        mapgl: ["glcommon", "poly"],
        earth: ["glcommon"]
      },
      MD5Mapping: {
        control: "vamzcw",
        marker: "n0v1ze",
        poly: "d4bzkl",
        infowindow: "t5l1lm",
        simpleInfowindow: "g4geqh",
        groundOverlay: "$groundOverlay$",
        hotspot: "yiffsa",
        menu: "svwaw1",
        tools: "qohrz4",
        oppc: "olnfzk",
        oppcgl: "kdacuw",
        mapgl: "atfu52",
        markeranimation: "rxij2e",
        earth: "j3w4bz",
        glcommon: "tpul1s",
        otherSearch: "$otherSearch$"
      },
      Config: {
        baseUrl: dW.apiHost + "/getmodules?v=1.0&type=webgl",
        jsModPath: (cE.inMapHost ? "" : dW.mapHost) + "/res/newui/",
        timeout: 5000
      },
      delayFlag: false,
      Module: {
        modules: {},
        modulesNeedToLoad: []
      },
      _getMd5ModsStr: function(gi) {
        var gh = [];
        for (var gk = 0, gf = gi.length; gk < gf; gk++) {
          var gj = gi[gk];
          var e = this.MD5Mapping[gj];
          var gg = "$" + gj + "$";
          if (e !== gg) {
            gh.push(gj + "_" + e)
          }
        }
        return gh.join(",")
      },
      load: function(i, gi, gg) {
        var e = this.getModuleInfo(i);
        if (e.status === this.Request.COMPLETED) {
          if (gg === true) {
            gi()
          }
        } else {
          if (e.status === this.Request.INITIAL) {
            this.combine(i);
            this.addToLoadQueue(i);
            var gf = this;
            if (gf.delayFlag === false) {
              gf.delayFlag = true;
              setTimeout(function() {
                var gj = gf.Config.baseUrl + "&mod=" + gf._getMd5ModsStr(gf.Module.modulesNeedToLoad);
                fO.load(gj);
                gf.Module.modulesNeedToLoad.length = 0;
                gf.delayFlag = false
              }, 1)
            }
            e.status = this.Request.WAITING;
            function gh(gl) {
              var gk = gf.getModuleInfo(i);
              if (gk.status !== gf.Request.COMPLETED) {
                if (window.map) {
                  var gj = new aL("onmod_timeout");
                  gj.timeout = gl / 1000;
                  gj.moduleName = i;
                  window.map.fire(gj)
                }
              }
            }
            setTimeout(gh, this.Config.timeout, this.Config.timeout);
            setTimeout(gh, this.Config.timeout * 2, this.Config.timeout * 2)
          }
          e.callbacks.push(gi)
        }
      },
      combine: function(e) {
        if (e && this.Dependency[e]) {
          var gg = this.Dependency[e];
          for (var gf = 0; gf < gg.length; gf++) {
            this.combine(gg[gf]);
            if (!this.Module.modules[gg[gf]]) {
              this.addToLoadQueue(gg[gf])
            }
          }
        }
      },
      addToLoadQueue: function(e) {
        var i = this.getModuleInfo(e);
        if (i.status === this.Request.INITIAL) {
          i.status = this.Request.WAITING;
          this.Module.modulesNeedToLoad.push(e)
        }
      },
      run: function(gf, gg) {
        var gk = this.getModuleInfo(gf);
        var gn = this.Dependency[gf];
        if (gn) {
          for (var gi = 0; gi < gn.length; gi++) {
            var gj = this.getModuleInfo(gn[gi]);
            if (gj.status !== this.Request.COMPLETED) {
              gj.modsNeedToRun.push({
                name: gf,
                code: gg
              });
              return
            }
          }
        }
        try {
          eval(gg)
        } catch (gl) {
          return
        }
        gk.status = this.Request.COMPLETED;
        for (var gi = 0, gh = gk.callbacks.length; gi < gh; gi++) {
          gk.callbacks[gi]()
        }
        gk.callbacks.length = 0;
        for (gi = 0; gi < gk.modsNeedToRun.length; gi++) {
          var gm = gk.modsNeedToRun[gi];
          this.run(gm.name, gm.code)
        }
        gk.modsNeedToRun.length = 0
      },
      getModuleInfo: function(i) {
        var e;
        if (!this.Module.modules[i]) {
          this.Module.modules[i] = {
            status: this.Request.INITIAL,
            callbacks: [],
            modsNeedToRun: []
          }
        }
        e = this.Module.modules[i];
        return e
      }
    });
    window._jsload = function(gh, gi) {
      var i = c9.getModuleInfo(gh);
      i.status = c9.Request.LOADED;
      if (gi !== "") {
        c9.run(gh, gi)
      } else {
        if (window.map) {
          var e = new aL("ongetmodules_fail");
          e.moduleName = gh;
          window.map.fire(e)
        }
        var gf = document.createElement("script");
        var gg = c9.MD5Mapping[gh];
        gf.src = c9.Config.jsModPath + gh + "_" + gg + ".js";
        document.getElementsByTagName("head")[0].appendChild(gf)
      }
    }
    ;
    function S() {
      this._timeData = {}
    }
    var d2;
    if (typeof window !== "undefined") {
      d2 = window
    } else {
      d2 = self
    }
    S.prototype.mark = function(e) {
      this._timeData[e] = this._getTime()
    }
    ;
    S.prototype.getMark = function(e) {
      return this._timeData[e]
    }
    ;
    S.prototype.getTime = function(i, e) {
      return parseFloat((this._timeData[e] - this._timeData[i]).toFixed(2))
    }
    ;
    S.prototype.print = function() {}
    ;
    S.prototype.clear = function() {
      this._timeData = {}
    }
    ;
    if (d2.performance && d2.performance.now) {
      S.prototype._getTime = function() {
        return performance.now()
      }
    } else {
      S.prototype._getTime = function() {
        return Date.now()
      }
    }
    !function(i, gf) {
      gf(i.d3 = i.d3 || {})
    }(window, function(gS) {
      function ha(hi, hj, hg, hh) {
        function e(i) {
          return hi(i = new Date(+i)),
            i
        }
        return e.floor = e,
          e.ceil = function(i) {
            return hi(i = new Date(i - 1)),
              hj(i, 1),
              hi(i),
              i
          }
          ,
          e.round = function(i) {
            var hk = e(i)
              , hl = e.ceil(i);
            return hl - i > i - hk ? hk : hl
          }
          ,
          e.offset = function(i, hk) {
            return hj(i = new Date(+i), null == hk ? 1 : Math.floor(hk)),
              i
          }
          ,
          e.range = function(hl, i, hk) {
            var hm = [];
            if (hl = e.ceil(hl),
              hk = null == hk ? 1 : Math.floor(hk),
              !(i > hl && hk > 0)) {
              return hm
            }
            do {
              hm.push(new Date(+hl))
            } while (hj(hl, hk),
              hi(hl),
            i > hl);return hm
          }
          ,
          e.filter = function(i) {
            return ha(function(hk) {
              for (; hi(hk),
                       !i(hk); ) {
                hk.setTime(hk - 1)
              }
            }, function(hk, hl) {
              for (; --hl >= 0; ) {
                for (; hj(hk, 1),
                         !i(hk); ) {}
              }
            })
          }
          ,
        hg && (e.count = function(i, hk) {
            return gU.setTime(+i),
              gY.setTime(+hk),
              hi(gU),
              hi(gY),
              Math.floor(hg(gU, gY))
          }
            ,
            e.every = function(i) {
              return i = Math.floor(i),
                isFinite(i) && i > 0 ? i > 1 ? e.filter(hh ? function(hk) {
                    return hh(hk) % i === 0
                  }
                  : function(hk) {
                    return e.count(0, hk) % i === 0
                  }
                ) : e : null
            }
        ),
          e
      }
      function gZ(e) {
        return ha(function(i) {
          i.setDate(i.getDate() - (i.getDay() + 7 - e) % 7),
            i.setHours(0, 0, 0, 0)
        }, function(i, hg) {
          i.setDate(i.getDate() + 7 * hg)
        }, function(i, hg) {
          return (hg - i - (hg.getTimezoneOffset() - i.getTimezoneOffset()) * gT) / g7
        })
      }
      function gR(e) {
        return ha(function(i) {
          i.setUTCDate(i.getUTCDate() - (i.getUTCDay() + 7 - e) % 7),
            i.setUTCHours(0, 0, 0, 0)
        }, function(i, hg) {
          i.setUTCDate(i.getUTCDate() + 7 * hg)
        }, function(i, hg) {
          return (hg - i) / g7
        })
      }
      var gU = new Date
        , gY = new Date
        , g5 = ha(function() {}, function(i, hg) {
        i.setTime(+i + hg)
      }, function(i, hg) {
        return hg - i
      });
      g5.every = function(e) {
        return e = Math.floor(e),
          isFinite(e) && e > 0 ? e > 1 ? ha(function(i) {
            i.setTime(Math.floor(i / e) * e)
          }, function(i, hg) {
            i.setTime(+i + hg * e)
          }, function(i, hg) {
            return (hg - i) / e
          }) : g5 : null
      }
      ;
      var he = g5.range
        , hc = 1000
        , gT = 60000
        , g9 = 3600000
        , g1 = 86400000
        , g7 = 604800000
        , gl = ha(function(e) {
        e.setTime(Math.floor(e / hc) * hc)
      }, function(i, hg) {
        i.setTime(+i + hg * hc)
      }, function(i, hg) {
        return (hg - i) / hc
      }, function(e) {
        return e.getUTCSeconds()
      })
        , hb = gl.range
        , g0 = ha(function(e) {
        e.setTime(Math.floor(e / gT) * gT)
      }, function(i, hg) {
        i.setTime(+i + hg * gT)
      }, function(i, hg) {
        return (hg - i) / gT
      }, function(e) {
        return e.getMinutes()
      })
        , gt = g0.range
        , gN = ha(function(i) {
        var hg = i.getTimezoneOffset() * gT % g9;
        0 > hg && (hg += g9),
          i.setTime(Math.floor((+i - hg) / g9) * g9 + hg)
      }, function(i, hg) {
        i.setTime(+i + hg * g9)
      }, function(i, hg) {
        return (hg - i) / g9
      }, function(e) {
        return e.getHours()
      })
        , g6 = gN.range
        , gD = ha(function(e) {
        e.setHours(0, 0, 0, 0)
      }, function(i, hg) {
        i.setDate(i.getDate() + hg)
      }, function(i, hg) {
        return (hg - i - (hg.getTimezoneOffset() - i.getTimezoneOffset()) * gT) / g1
      }, function(e) {
        return e.getDate() - 1
      })
        , gk = gD.range
        , gA = gZ(0)
        , gC = gZ(1)
        , gg = gZ(2)
        , gy = gZ(3)
        , gn = gZ(4)
        , gQ = gZ(5)
        , gX = gZ(6)
        , gi = gA.range
        , gP = gC.range
        , gr = gg.range
        , gM = gy.range
        , g2 = gn.range
        , gO = gQ.range
        , hd = gX.range
        , g4 = ha(function(e) {
        e.setDate(1),
          e.setHours(0, 0, 0, 0)
      }, function(i, hg) {
        i.setMonth(i.getMonth() + hg)
      }, function(i, hg) {
        return hg.getMonth() - i.getMonth() + 12 * (hg.getFullYear() - i.getFullYear())
      }, function(e) {
        return e.getMonth()
      })
        , hf = g4.range
        , gx = ha(function(e) {
        e.setMonth(0, 1),
          e.setHours(0, 0, 0, 0)
      }, function(i, hg) {
        i.setFullYear(i.getFullYear() + hg)
      }, function(i, hg) {
        return hg.getFullYear() - i.getFullYear()
      }, function(e) {
        return e.getFullYear()
      });
      gx.every = function(e) {
        return isFinite(e = Math.floor(e)) && e > 0 ? ha(function(i) {
          i.setFullYear(Math.floor(i.getFullYear() / e) * e),
            i.setMonth(0, 1),
            i.setHours(0, 0, 0, 0)
        }, function(i, hg) {
          i.setFullYear(i.getFullYear() + hg * e)
        }) : null
      }
      ;
      var gq = gx.range
        , gV = ha(function(e) {
        e.setUTCSeconds(0, 0)
      }, function(i, hg) {
        i.setTime(+i + hg * gT)
      }, function(i, hg) {
        return (hg - i) / gT
      }, function(e) {
        return e.getUTCMinutes()
      })
        , gF = gV.range
        , gE = ha(function(e) {
        e.setUTCMinutes(0, 0, 0)
      }, function(i, hg) {
        i.setTime(+i + hg * g9)
      }, function(i, hg) {
        return (hg - i) / g9
      }, function(e) {
        return e.getUTCHours()
      })
        , gB = gE.range
        , gz = ha(function(e) {
        e.setUTCHours(0, 0, 0, 0)
      }, function(i, hg) {
        i.setUTCDate(i.getUTCDate() + hg)
      }, function(i, hg) {
        return (hg - i) / g1
      }, function(e) {
        return e.getUTCDate() - 1
      })
        , gw = gz.range
        , gv = gR(0)
        , gu = gR(1)
        , gs = gR(2)
        , gp = gR(3)
        , go = gR(4)
        , gj = gR(5)
        , gh = gR(6)
        , gf = gv.range
        , gL = gu.range
        , g8 = gs.range
        , gW = gp.range
        , g3 = go.range
        , gK = gj.range
        , gJ = gh.range
        , gI = ha(function(e) {
        e.setUTCDate(1),
          e.setUTCHours(0, 0, 0, 0)
      }, function(i, hg) {
        i.setUTCMonth(i.getUTCMonth() + hg)
      }, function(i, hg) {
        return hg.getUTCMonth() - i.getUTCMonth() + 12 * (hg.getUTCFullYear() - i.getUTCFullYear())
      }, function(e) {
        return e.getUTCMonth()
      })
        , gH = gI.range
        , gm = ha(function(e) {
        e.setUTCMonth(0, 1),
          e.setUTCHours(0, 0, 0, 0)
      }, function(i, hg) {
        i.setUTCFullYear(i.getUTCFullYear() + hg)
      }, function(i, hg) {
        return hg.getUTCFullYear() - i.getUTCFullYear()
      }, function(e) {
        return e.getUTCFullYear()
      });
      gm.every = function(e) {
        return isFinite(e = Math.floor(e)) && e > 0 ? ha(function(i) {
          i.setUTCFullYear(Math.floor(i.getUTCFullYear() / e) * e),
            i.setUTCMonth(0, 1),
            i.setUTCHours(0, 0, 0, 0)
        }, function(i, hg) {
          i.setUTCFullYear(i.getUTCFullYear() + hg * e)
        }) : null
      }
      ;
      var gG = gm.range;
      gS.timeInterval = ha,
        gS.timeMillisecond = g5,
        gS.timeMilliseconds = he,
        gS.utcMillisecond = g5,
        gS.utcMilliseconds = he,
        gS.timeSecond = gl,
        gS.timeSeconds = hb,
        gS.utcSecond = gl,
        gS.utcSeconds = hb,
        gS.timeMinute = g0,
        gS.timeMinutes = gt,
        gS.timeHour = gN,
        gS.timeHours = g6,
        gS.timeDay = gD,
        gS.timeDays = gk,
        gS.timeWeek = gA,
        gS.timeWeeks = gi,
        gS.timeSunday = gA,
        gS.timeSundays = gi,
        gS.timeMonday = gC,
        gS.timeMondays = gP,
        gS.timeTuesday = gg,
        gS.timeTuesdays = gr,
        gS.timeWednesday = gy,
        gS.timeWednesdays = gM,
        gS.timeThursday = gn,
        gS.timeThursdays = g2,
        gS.timeFriday = gQ,
        gS.timeFridays = gO,
        gS.timeSaturday = gX,
        gS.timeSaturdays = hd,
        gS.timeMonth = g4,
        gS.timeMonths = hf,
        gS.timeYear = gx,
        gS.timeYears = gq,
        gS.utcMinute = gV,
        gS.utcMinutes = gF,
        gS.utcHour = gE,
        gS.utcHours = gB,
        gS.utcDay = gz,
        gS.utcDays = gw,
        gS.utcWeek = gv,
        gS.utcWeeks = gf,
        gS.utcSunday = gv,
        gS.utcSundays = gf,
        gS.utcMonday = gu,
        gS.utcMondays = gL,
        gS.utcTuesday = gs,
        gS.utcTuesdays = g8,
        gS.utcWednesday = gp,
        gS.utcWednesdays = gW,
        gS.utcThursday = go,
        gS.utcThursdays = g3,
        gS.utcFriday = gj,
        gS.utcFridays = gK,
        gS.utcSaturday = gh,
        gS.utcSaturdays = gJ,
        gS.utcMonth = gI,
        gS.utcMonths = gH,
        gS.utcYear = gm,
        gS.utcYears = gG,
        Object.defineProperty(gS, "__esModule", {
          value: !0
        })
    });
    function e4(e) {
      this._elemType = e;
      this._objCollection = {}
    }
    e4.prototype.get = function() {
      var i = null;
      for (var e in this._objCollection) {
        if (this._objCollection[e] && this._objCollection[e]._free === true) {
          this._objCollection[e]._free = false;
          return this._objCollection[e]
        }
      }
      i = L(this._elemType);
      e = aT.getGUID("obj_pool_");
      this._objCollection[e] = i;
      return i
    }
    ;
    e4.prototype.free = function(e) {
      if (!e) {
        return
      }
      e._free = true;
      if (e.tagName.toLowerCase() === "img") {
        e.src = "";
        e.crossOrigin = null;
        e.onload = e.onerror = null
      }
    }
    ;
    e4.prototype.clear = function() {
      for (var e in this._objCollection) {
        if (this._objCollection[e] && this._objCollection[e].tagName.toLowerCase === "img") {
          this._objCollection[e].onload = this._objCollection[e].onerror = null
        }
      }
      this._objCollection = {}
    }
    ;
    var fO = (function(e) {
        function i(gi, gf, gh) {
          var gg = L("script", {
            src: gi,
            type: "text/javascript",
            charset: "utf-8"
          });
          if (gg.addEventListener) {
            gg.addEventListener("load", function(gk) {
              var gj = gk.target;
              gj.parentNode.removeChild(gj);
              gf && gf()
            }, false);
            gg.addEventListener("error", function(gj) {
              gh && gh(null)
            }, false)
          } else {
            if (gg.attachEvent) {
              gg.attachEvent("onreadystatechange", function(gk) {
                var gj = window.event.srcElement;
                if (gj && (gj.readyState === "loaded" || gj.readyState === "complete")) {
                  gj.parentNode.removeChild(gj)
                }
                gf && gf()
              })
            }
          }
          e.getElementsByTagName("head")[0].appendChild(gg)
        }
        return {
          load: function(gj, gf, gg) {
            if (typeof gj === "string") {
              i(gj, gf, gg)
            } else {
              if (gj.length > 0) {
                var gi = gj.length;
                for (var gh = 0; gh < gi; gh++) {
                  i(gj[gh], function() {
                    gi--;
                    if (gi === 0 && gf) {
                      gf()
                    }
                  })
                }
              }
            }
          }
        }
      }
    )(window.document);
    function b3() {}
    b3.instances = {};
    b3.getInstance = function(i, gf) {
      if (b3.instances[i]) {
        return b3.instances[i]
      }
      var e = new cu(i,gf);
      b3.instances[i] = e;
      return e
    }
    ;
    function cu(e, i) {
      this._name = e;
      this._baseZoom = 18;
      this._opts = {
        tileSize: 256
      };
      z.extend(this._opts, i || {})
    }
    cu.mapZoomBaseIndex = [0, 0, 0, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0];
    cu.baseScaleZoom = [19, 17, 15, 12, 10, 9, 7, 5, 3];
    cu.baseScaleZoomMercatorSize = [512, 2048, 4096, 32768, 65536, 262144, 1048576, 4194304, 8388608];
    cu.mapZoomBaseZoomMapping = [0, 0, 0, 3, 5, 5, 7, 7, 9, 9, 10, 12, 12, 12, 15, 15, 17, 17, 19, 19, 19, 19];
    cu.mapZoomStartZoomMapping = [0, 0, 0, 3, 4, 4, 6, 6, 8, 8, 10, 11, 11, 11, 14, 14, 16, 16, 18, 18, 18, 18];
    cu.baseScaleTileSize = [1024, 1024, 512, 512, 256, 512, 512, 512, 256];
    cu.mapZoomTileSize = [0, 0, 0, 256, 256, 512, 256, 512, 256, 512, 256, 256, 512, 1024, 256, 512, 512, 1024, 512, 1024, 2048, 4096];
    cu.baseZoomInfo = {
      "3": [3],
      "5": [4, 5],
      "7": [6, 7],
      "9": [8, 9],
      "10": [10],
      "12": [11, 12, 13],
      "15": [14, 15],
      "17": [16, 17],
      "19": [18, 19, 20, 21]
    };
    cu.prototype = {
      getName: function() {
        return this._name
      },
      getTileSize: function(e) {
        e = Math.floor(e);
        if (e < 3) {
          e = 3
        }
        if (this._name === "na") {
          return cu.mapZoomTileSize[e]
        }
        return this._opts.tileSize
      },
      getBaseTileSize: function(i) {
        i = Math.floor(i);
        if (this._name === "na") {
          var e = cu.mapZoomBaseZoomMapping[i];
          return cu.mapZoomTileSize[e]
        }
        return this._opts.tileSize
      },
      getDataZoom: function(e) {
        e = Math.floor(e);
        if (this._name === "na") {
          return cu.mapZoomBaseZoomMapping[e]
        }
        return e
      },
      getZoomUnits: function(e) {
        return Math.pow(2, (this._baseZoom - e))
      },
      getMercatorSize: function(gf, i) {
        if (this._name === "na") {
          gf = Math.floor(gf);
          var e = cu.mapZoomBaseIndex[gf];
          return cu.baseScaleZoomMercatorSize[e]
        }
        return this._opts.tileSize * this.getZoomUnits(i)
      },
      getBaseZoom: function() {
        return this._baseZoom
      },
      getParentTile: function(gg, gm, gl, gf, i) {
        if (this._name === "na") {
          var gh = cu.baseZoomInfo[gl];
          gf--;
          if (gh.indexOf(gf) > -1) {
            return {
              col: gg,
              row: gm,
              zoom: gl,
              useZoom: gf
            }
          } else {
            var gj = cu.mapZoomBaseIndex[gl];
            var gi = cu.baseScaleZoom[gj + 1];
            if (!gi) {
              return null
            }
            var gk = this.getFactorByZooms(gi, gl);
            var e = cu.baseZoomInfo[gi];
            return {
              col: Math.floor(gg / gk),
              row: Math.floor(gm / gk),
              zoom: gi,
              useZoom: e[e.length - 1]
            }
          }
          return null
        }
        if (gl - 1 < i) {
          return null
        }
        return {
          col: Math.floor(gg / 2),
          row: Math.floor(gm / 2),
          zoom: gl - 1,
          useZoom: gl - 1
        }
      },
      getChildTiles: function(gh, gj, e, gf, gq, gw) {
        if (this._name === "na") {
          var gg = cu.baseZoomInfo[e];
          gf += gw;
          if (gg.indexOf(gf) > -1) {
            return [{
              col: gh,
              row: gj,
              zoom: e,
              useZoom: gf
            }]
          } else {
            var gu = 0;
            var gr = e;
            while (gu < gw) {
              var gv = cu.mapZoomBaseIndex[gr];
              var gl = cu.baseScaleZoom[gv - 1];
              if (!gl) {
                return null
              }
              var gm = cu.baseZoomInfo[gl];
              if (gm[gw - 1]) {
                var gn = [];
                var gp = this.getFactorByZooms(e, gl);
                var i = gh * gp;
                var go = gj * gp;
                for (var gt = 0; gt < gp; gt++) {
                  var gi = i + gt;
                  for (var gs = 0; gs < gp; gs++) {
                    var gk = go + gs;
                    gn.push({
                      col: gi,
                      row: gk,
                      zoom: gl,
                      useZoom: gm[gw - 1]
                    })
                  }
                }
                return gn
              }
              gu += gm.length;
              if (gw === gm.length) {
                gr = gl
              }
            }
          }
          return null
        }
        var gn = [];
        if (e + gw > gq) {
          return null
        }
        var gp = Math.pow(2, gw);
        var i = gh * gp;
        var go = gj * gp;
        var gl = e + gw;
        var gn = [];
        for (var gt = 0; gt < 2; gt++) {
          var gi = i + gt;
          for (var gs = 0; gs < 2; gs++) {
            var gk = go + gs;
            gn.push({
              col: gi,
              row: gk,
              zoom: gl,
              useZoom: gl
            })
          }
        }
        return gn
      },
      getFactorByZooms: function(i, gg) {
        var gf = cu.mapZoomBaseIndex[i];
        var gh = cu.mapZoomBaseIndex[gg];
        var e = cu.baseScaleZoomMercatorSize[gf];
        var gi = cu.baseScaleZoomMercatorSize[gh];
        return e / gi
      }
    };
    var aK = {};
    var V = ["swiftshader", "microsoft basic render driver"];
    var bI = ["intel", "nvidia", "amd", "apple", "geforce"];
    function cD(e) {
      e = e.toLowerCase();
      if (V.indexOf(e) >= 0) {
        return true
      }
      if (e.indexOf("mobile") >= 0) {
        return true
      }
      return false
    }
    function er(gf) {
      gf = gf.toLowerCase();
      for (var e = 0; e < bI.length; e++) {
        if (gf.indexOf(bI[e]) >= 0) {
          return true
        }
      }
      return false
    }
    function c3(e) {
      if (!e) {
        return false
      }
      if (cD(e)) {
        return false
      }
      if (er(e)) {
        return true
      }
      return false
    }
    aK.ifEnableEarth = function(i) {
      var e = aK.ifEnableEarth;
      if (!i && typeof e._enable === "boolean") {
        return e._enable
      }
      if (aK.ifSupportWebGL()) {
        e._enable = true;
        return true
      }
      e._enable = false;
      return false
    }
    ;
    aK.ifEnableWebGLMap = function(i) {
      var e = aK.ifEnableWebGLMap;
      if (!i && typeof e._enable === "boolean") {
        return e._enable
      }
      if (aK.ifSupportWebGL()) {
        if (cE.inMapHost) {
          e._enable = true;
          return true
        } else {
          if (window.Blob || window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder) {
            e._enable = true;
            return true
          } else {
            e._enable = false;
            return false
          }
        }
      }
      e._enable = false;
      return false
    }
    ;
    aK.params = {};
    aK.ifSupportWebGL = function() {
      var i = aK.ifSupportWebGL;
      if (typeof i._supportWebGL === "boolean") {
        return i._supportWebGL
      }
      if (!window.WebGLRenderingContext) {
        i._supportWebGL = false;
        return false
      }
      var gf = document.createElement("canvas");
      gf.width = 300;
      gf.height = 150;
      var gh = null;
      var go = {
        alpha: false,
        antialias: false,
        failIfMajorPerformanceCaveat: true,
        preserveDrawingBuffer: false,
        stencil: false
      };
      try {
        gh = gf.getContext("webgl", go) || gf.getContext("experimental-webgl", go)
      } catch (gj) {
        i._supportWebGL = false
      }
      if (gh === null) {
        i._supportWebGL = false
      } else {
        i._supportWebGL = true;
        var gm = gh.getExtension("WEBGL_debug_renderer_info");
        if (gm) {
          var gk = gh.getParameter(gm.UNMASKED_RENDERER_WEBGL);
          if (c3(gk) === true) {
            i._supportWebGL = true
          }
          var gn = gh.getParameter(gm.UNMASKED_VENDOR_WEBGL);
          i._renderer = gk;
          i._vendor = gn
        }
        if (!gm && z.Browser.firefox) {
          i._supportWebGL = true
        }
        if (!gm && z.Platform.macintosh) {
          i._supportWebGL = true
        }
        if (gh.drawingBufferWidth !== gf.width || gh.drawingBufferHeight !== gf.height) {
          i._supportWebGL = false
        }
        if (gh.getParameter(gh.MAX_VERTEX_TEXTURE_IMAGE_UNITS) < 4) {
          i._supportWebGL = false
        }
        var gg = gh.getParameter(gh.MAX_TEXTURE_SIZE);
        aK.params.maxTextureSize = gg;
        if (gg < 4096) {
          i._supportWebGL = false
        }
        var gi = gh.getParameter(gh.MAX_TEXTURE_IMAGE_UNITS);
        if (gi < 8) {
          i._supportWebGL = false
        }
        if (!gh.getShaderPrecisionFormat || gh.getShaderPrecisionFormat(gh.FRAGMENT_SHADER, gh.HIGH_FLOAT).precision < 23) {
          i._supportWebGL = false
        }
      }
      return i._supportWebGL
    }
    ;
    aK.ifSupportCanvas2d = function() {
      var gh = aK.ifSupportCanvas2d;
      if (typeof gh.supportCanvas2d === "boolean") {
        return gh.supportCanvas2d
      }
      var gf = document.createElement("canvas");
      var i = null;
      try {
        i = gf.getContext("2d")
      } catch (gg) {
        gh.supportCanvas2d = false
      }
      if (i === null) {
        gh.supportCanvas2d = false
      } else {
        gh.supportCanvas2d = true
      }
      return gh.supportCanvas2d
    }
    ;
    aK.ifEnableCanvas2dMap = function() {
      var i = navigator.userAgent;
      var e = 0;
      var gg = 0;
      var gh = 0;
      if (/macintosh/ig.test(i)) {
        var gf = 0;
        if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(i) && !/chrome/i.test(i)) {
          gf = parseInt((RegExp["\x241"] || RegExp["\x242"]), 10)
        }
        if (gf > 0) {
          return false
        }
        return true
      }
      if (/windows nt (\d+\.\d)/ig.test(i)) {
        gg = parseFloat(RegExp.$1);
        if (gg >= 6.1) {
          if (/chrome\/(\d+\.\d)/i.test(i)) {
            e = parseFloat(RegExp.$1);
            if (e >= 31) {
              return true
            }
          }
          if (/MSIE (\d+(\.\d+)?)/.test(i)) {
            gh = parseFloat(RegExp.$1);
            if (gh >= 10) {
              return true
            }
          }
          if (/Firefox/.test(i)) {
            return true
          }
          if (/rv:11.0/ig.test(i)) {
            return true
          }
          if (/edge/ig.test(i)) {
            return true
          }
        }
      }
      return false
    }
    ;
    aK.ifSupportCSS3 = function(gk, i) {
      var gj = document.createElement("div");
      var gi = "Webkit Moz O ms".split(" ");
      var e = gi.length;
      var gf = "";
      var gg = gj.style;
      if (gk in gg) {
        gf = gk
      }
      gk = gk.replace(/^[a-z]/, function(gl) {
        return gl.toUpperCase()
      });
      while (e--) {
        var gh = gi[e] + gk;
        if (gh in gg) {
          gf = gh;
          break
        }
      }
      if (i) {
        return gf
      } else {
        return gf.length > 0 ? true : false
      }
    }
    ;
    aK.isModernBrowser = aK.ifSupportCanvas2d() && aK.ifSupportCSS3("transform");
    function dS(i, e) {
      this._size = i;
      this._curSize = 0;
      this._cache = {};
      this._least = null;
      this._most = null;
      this._options = {
        clearCallback: null,
        removeOldCallback: null
      };
      e = e || {};
      for (var gf in e) {
        this._options[gf] = e[gf]
      }
      this._getDataTimes = 0;
      this._hitTimes = 0
    }
    dS.prototype.setData = function(gg, gi) {
      var i = this._cache;
      var gf = this._size;
      if (gf === 0) {
        return
      }
      var e = this._curSize;
      if (e === gf) {
        this._removeOld()
      }
      var gh;
      if (!i[gg]) {
        gh = {
          key: gg,
          data: gi,
          older: null,
          newwer: null
        };
        i[gg] = gh;
        if (this._least === null) {
          this._least = gh
        }
        if (this._most === null) {
          this._most = gh
        }
        this._curSize++
      } else {
        gh = i[gg];
        gh.data = gi;
        if (this._most === gh) {
          return
        }
        gh.older && (gh.older.newer = gh.newer);
        gh.newer && (gh.newer.older = gh.older);
        if (this._least === gh) {
          this._least = gh.newer
        }
      }
      if (this._most && this._most !== gh) {
        this._most.newer = gh;
        gh.older = this._most;
        this._most = gh;
        gh.newer = null
      }
    }
    ;
    dS.prototype.getData = function(e) {
      var i = this._cache[e];
      this._getDataTimes++;
      if (i) {
        this._hitTimes++;
        var gf = i.data;
        if (this._most === i) {
          return gf
        }
        i.older && (i.older.newer = i.newer);
        i.newer && (i.newer.older = i.older);
        if (this._least === i) {
          this._least = i.newer
        }
        this._most.newer = i;
        i.older = this._most;
        i.newer = null;
        this._most = i;
        return gf
      }
      return null
    }
    ;
    dS.prototype.getAllData = function() {
      return this._cache
    }
    ;
    dS.prototype.getHitRate = function() {
      return this._hitTimes / this._getDataTimes
    }
    ;
    dS.prototype.removeData = function(i) {
      var e = this._cache;
      var gf = e[i];
      if (!gf) {
        return
      }
      if (this._options.clearCallback) {
        this._options.clearCallback(gf.data, gf.key)
      }
      gf.older && (gf.older.newer = gf.newer);
      gf.newer && (gf.newer.older = gf.older);
      if (this._least === gf) {
        this._least = gf.newer
      }
      if (this._most === gf) {
        this._most = gf.older
      }
      delete e[i];
      this._curSize--
    }
    ;
    dS.prototype._removeOld = function() {
      var e = this._cache;
      var gg = Math.round(this._size * 0.6);
      var gf = 0;
      while (this._least && gf < gg) {
        var i = this._least;
        this._least = i.newer;
        i.newer && (i.newer.older = null);
        if (this._options.clearCallback) {
          this._options.clearCallback(i.data, i.key)
        }
        delete e[i.key];
        gf++
      }
      this._curSize -= gf;
      if (this._options.removeOldCallback) {
        this._options.removeOldCallback()
      }
    }
    ;
    dS.prototype.clear = function() {
      var e = this._cache;
      var i = this._least;
      if (this._options.clearCallback) {
        while (i) {
          this._options.clearCallback(i.data, i.key);
          i = i.newer
        }
      }
      this._least = this._most = null;
      this._cache = {};
      this._curSize = 0
    }
    ;
    dS.prototype.forEach = function(e) {
      var i = this._least;
      while (i) {
        e(i.data);
        i = i.newer
      }
    }
    ;
    dS.prototype.clearExcept = function(i) {
      var e = this._cache;
      var gf = this._least;
      while (gf) {
        if (!i[gf.key]) {
          if (this._options.clearCallback) {
            this._options.clearCallback(gf.data, gf.key)
          }
          gf.older && (gf.older.newer = gf.newer);
          gf.newer && (gf.newer.older = gf.older);
          if (this._least === gf) {
            this._least = gf.newer
          }
          if (this._most === gf) {
            this._most = gf.older
          }
          delete e[gf.key];
          this._curSize--
        }
        gf = gf.newer
      }
    }
    ;
    var bV = {
      request: function(gj, gg, i, gl, gf) {
        var gh = (Math.random() * 100000).toFixed(0);
        aT._rd["_cbk" + gh] = function(gm) {
          if (gm.result && gm.result["error"] && gm.result["error"] === 202) {
            alert("该AK因为恶意行为已经被管理员封禁！");
            return
          }
          i = i || {};
          gj && gj(gm, i);
          delete aT._rd["_cbk" + gh]
        }
        ;
        gl = gl || "";
        var gk;
        if (i && i.useEncodeURI) {
          gk = fM(gg, encodeURI)
        } else {
          gk = fM(gg, encodeURIComponent)
        }
        var gi = this;
        var e = dW.apiHost + "/" + gl + "?" + gk + "&ie=utf-8&oue=1&fromproduct=jsapi";
        if (!gf) {
          e += "&res=api"
        }
        e += "&callback=" + dw + "._rd._cbk" + gh;
        e += "&ak=" + eW;
        fO.load(e)
      }
    };
    aT._rd = {};
    function aJ() {
      this._map = null;
      this._container;
      this._type = "control";
      this.blockInfoWindow = true;
      this._visible = true
    }
    aJ.inherits(db, "Control");
    z.extend(aJ.prototype, {
      initialize: function(e) {
        this._map = e;
        if (this._container) {
          if (this._opts && this._opts.container) {
            this._opts.container.appendChild(this._container)
          } else {
            e.container.appendChild(this._container)
          }
          return this._container
        }
        return
      },
      _i: function(e) {
        if (!this._container && this.initialize && bm(this.initialize)) {
          this._container = this.initialize(e)
        }
        this._opts = this._opts || {
          printable: false
        };
        this._setStyle();
        this._setPosition();
        if (this._container) {
          this._container._jsobj = this
        }
      },
      _setStyle: function() {
        var i = this._container;
        if (i) {
          var e = i.style;
          e.position = "absolute";
          e.zIndex = this._cZIndex || "10";
          e.MozUserSelect = "none";
          if (!this._opts.printable) {
            z.ac(i, "BMap_noprint")
          }
          z.on(i, "contextmenu", co)
        }
      },
      remove: function() {
        this._map = null;
        if (!this._container) {
          return
        }
        this._container.parentNode && this._container.parentNode.removeChild(this._container);
        this._container._jsobj = null;
        this._container = null
      },
      _render: function(e) {
        if (this._opts && this._opts.container) {
          this._container = cQ(this._opts.container, '<div unselectable="on"></div>')
        } else {
          var i = '<div unselectable="on"></div>';
          if (e && e.config.autoSafeArea && aZ()) {
            this._safeAreaContainer = cQ(this._map.container, i);
            this._safeAreaContainer.style.position = "absolute";
            this._safeAreaContainer.style.bottom = "env(safe-area-inset-bottom)";
            this._container = cQ(this._safeAreaContainer, i)
          } else {
            this._container = cQ(this._map.container, i)
          }
        }
        if (this._visible === false) {
          this._container.style.display = "none"
        }
        return this._container
      },
      _setPosition: function() {
        this.setAnchor(this._opts.anchor)
      },
      setAnchor: function(gg) {
        if (this.anchorFixed || typeof gg !== "number" || isNaN(gg) || gg < BMAP_ANCHOR_TOP_LEFT || gg > BMAP_ANCHOR_BOTTOM_RIGHT) {
          gg = this.defaultAnchor
        }
        this._opts.offset = this._opts.offset || this.defaultOffset;
        var gf = this._opts.anchor;
        this._opts.anchor = gg;
        if (!this._container) {
          return
        }
        var gi = this._container;
        var e = this._opts.offset.width;
        var gh = this._opts.offset.height;
        gi.style.left = gi.style.top = gi.style.right = gi.style.bottom = "auto";
        switch (gg) {
          case BMAP_ANCHOR_TOP_LEFT:
            gi.style.top = gh + "px";
            gi.style.left = e + "px";
            break;
          case BMAP_ANCHOR_TOP_RIGHT:
            gi.style.top = gh + "px";
            gi.style.right = e + "px";
            break;
          case BMAP_ANCHOR_BOTTOM_LEFT:
            gi.style.bottom = gh + "px";
            gi.style.left = e + "px";
            break;
          case BMAP_ANCHOR_BOTTOM_RIGHT:
            gi.style.bottom = gh + "px";
            gi.style.right = e + "px";
            break;
          default:
            break
        }
        var i = ["TL", "TR", "BL", "BR"];
        z.rc(this._container, "anchor" + i[gf]);
        z.ac(this._container, "anchor" + i[gg])
      },
      getAnchor: function() {
        return this._opts.anchor
      },
      setOffset: function(e) {
        if (!e) {
          return
        }
        this._opts = this._opts || {};
        this._opts.offset = new c8(e.width,e.height);
        if (!this._container) {
          return
        }
        this.setAnchor(this._opts.anchor)
      },
      getOffset: function() {
        return this._opts.offset
      },
      getDom: function() {
        return this._container
      },
      show: function() {
        if (this._visible === true) {
          return
        }
        this._visible = true;
        if (this._container) {
          this._container.style.display = ""
        }
        this.dispatchEvent(new aL("onshow"))
      },
      hide: function() {
        if (this._visible === false) {
          return
        }
        this._visible = false;
        if (this._container) {
          this._container.style.display = "none"
        }
        this.dispatchEvent(new aL("onhide"))
      },
      isPrintable: function() {
        return !!this._opts.printable
      },
      isVisible: function() {
        if (!this._container && !this._map) {
          return false
        }
        return !!this._visible
      },
      _asyncLoadCode: function() {
        var e = this;
        c9.load("control", function() {
          if (e._asyncDraw) {
            e._asyncDraw()
          }
        })
      }
    });
    var f2 = {
      TOP_LEFT: 0,
      TOP_RIGHT: 1,
      BOTTOM_LEFT: 2,
      BOTTOM_RIGHT: 3
    };
    aT.ControlAnchor = f2;
    window.BMAP_ANCHOR_TOP_LEFT = 0;
    window.BMAP_ANCHOR_TOP_RIGHT = 1;
    window.BMAP_ANCHOR_BOTTOM_LEFT = 2;
    window.BMAP_ANCHOR_BOTTOM_RIGHT = 3;
    function cP(e) {
      aJ.call(this);
      e = e || {};
      this._opts = {
        printable: false
      };
      z.extend(this._opts, e);
      this._copyrightCollection = [];
      this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
      this.defaultOffset = new c8(5,2);
      this.setAnchor(e.anchor);
      this._canShow = true;
      this.sateMapStyle = false;
      this.blockInfoWindow = false;
      this._asyncLoadCode()
    }
    cP.inherits(aJ, "CopyrightControl");
    z.extend(cP.prototype, {
      initialize: function(e) {
        this._map = e;
        return this._container
      },
      addCopyright: function(gg) {
        var e = {
          minZoom: 0,
          bounds: null,
          content: "",
          mapType: ""
        };
        for (var gf in gg) {
          e[gf] = gg[gf]
        }
        if (this._map) {
          var gj = e.minZoom;
          if (gj === -1 || gj < this._map.getMinZoom() || gj > this._map.getMaxZoom()) {
            e.minZoom = this._map.getMinZoom()
          }
          if (e.mapType !== "" && !bv[e.mapType]) {
            e.mapType = BMAPGL_NORMAL_MAP
          }
        }
        var gh = this.getCopyright(gg.id);
        if (gh) {
          for (var gi in e) {
            gh[gi] = e[gi]
          }
        } else {
          this._copyrightCollection.push(e)
        }
      },
      getCopyright: function(gg) {
        for (var gf = 0, e = this._copyrightCollection.length; gf < e; gf++) {
          if (this._copyrightCollection[gf].id === gg) {
            return this._copyrightCollection[gf]
          }
        }
      },
      addSateMapStyle: function() {
        this.sateMapStyle = true;
        if (this._container) {
          z.ac(this._container, "BMap_cpyCtrl_w")
        }
      },
      removeSateMapStyle: function() {
        this.sateMapStyle = false;
        if (this._container) {
          z.rc(this._container, "BMap_cpyCtrl_w")
        }
      }
    });
    function fK(e) {
      aJ.call(this);
      e = e || {};
      this._opts = {
        printable: false
      };
      this._opts = z.extend(z.extend(this._opts, {
        unit: "metric"
      }), e);
      this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
      this.defaultOffset = new c8(81,18);
      if (eO()) {
        this.defaultOffset = new c8(75,10)
      }
      this.setAnchor(e.anchor);
      this._units = {
        metric: {
          name: "metric",
          conv: 1,
          incon: 1000,
          u1: "米",
          u2: "公里"
        },
        us: {
          name: "us",
          conv: 3.2808,
          incon: 5280,
          u1: "英尺",
          u2: "英里"
        }
      };
      this.sateMapStyle = false;
      if (!this._units[this._opts.unit]) {
        this._opts.unit = "metric"
      }
      this._scaleText = null;
      this._numberArray = {};
      this._asyncLoadCode()
    }
    window.BMAP_UNIT_METRIC = "metric";
    window.BMAP_UNIT_IMPERIAL = "us";
    fK.inherits(aJ, "ScaleControl");
    z.extend(fK.prototype, {
      initialize: function(e) {
        this._map = e;
        return this._container
      },
      setUnit: function(e) {
        this._opts.unit = this._units[e] && this._units[e].name || this._opts.unit
      },
      getUnit: function() {
        return this._opts.unit
      },
      addSateMapStyle: function() {
        this.sateMapStyle = true;
        var e = this._container;
        if (e) {
          z.ac(e.children[0], "dark")
        }
      },
      removeSateMapStyle: function() {
        this.sateMapStyle = false;
        var e = this._container;
        if (e) {
          z.rc(e.children[0], "dark")
        }
      }
    });
    window.BMAP_NAVIGATION_CONTROL_LARGE = 0;
    window.BMAP_NAVIGATION_CONTROL_SMALL = 1;
    window.BMAP_NAVIGATION_CONTROL_PAN = 2;
    window.BMAP_NAVIGATION_CONTROL_ZOOM = 3;
    window.BMAP_NAVIGATION_CONTROL_ANIM = 4;
    function cB(e) {
      aJ.call(this);
      e = e || {};
      this._opts = {
        printable: false
      };
      z.extend(this._opts, e);
      this.controlHeight = [{
        width: 65,
        height: 227,
        zoomHeight: 227,
        zoomWidth: 37,
        sliderHeight: 180
      }, {
        width: 65,
        height: 47,
        zoomHeight: (this._opts.forceNew === true) ? 56 : 47,
        zoomWidth: 37,
        sliderHeight: 0
      }, {
        width: 37,
        height: 57,
        zoomHeight: 0,
        zoomWidth: 0,
        sliderHeight: 0
      }, {
        width: 26,
        height: 56,
        zoomHeight: 56,
        zoomWidth: 6,
        sliderHeight: 0
      }, {
        width: 56,
        height: 47,
        zoomHeight: 47,
        zoomWidth: 37,
        sliderHeight: 180
      }];
      this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
      this.defaultOffset = new c8(10,10);
      this.setAnchor(e.anchor);
      this.setType(e.type);
      this._maxTotalZoomLv = 19;
      this._minZoomLevel = -1;
      this._maxZoomLevel = -1;
      this._totalZoomLv = -1;
      this._sliderInterval = 10;
      this._sliderHeight = 180;
      this._minBarY = 1;
      this._maxBarY = -1;
      this._curBarY = -1;
      this._zoomDom = null;
      this._zoomBtnDom = null;
      this._sliderDom = null;
      this._sliderBaseDom = null;
      this._cZIndex = "1100";
      this._asyncLoadCode()
    }
    cB.inherits(aJ, "NavigationControl");
    z.extend(cB.prototype, {
      initialize: function(e) {
        this._map = e;
        return this._container
      },
      setType: function(e) {
        if (typeof e == "number" && e >= BMAP_NAVIGATION_CONTROL_LARGE && e <= BMAP_NAVIGATION_CONTROL_ANIM) {
          this._opts.type = e
        } else {
          this._opts.type = BMAP_NAVIGATION_CONTROL_LARGE
        }
      },
      getType: function() {
        return this._opts.type
      }
    });
    function a6(i) {
      aJ.call(this);
      i = i || {};
      this._opts = {
        printable: false
      };
      this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
      this.defaultOffset = new c8(10,10);
      this.setAnchor(i.anchor);
      this._opts = z.extend(z.extend(this._opts, {
        offset: this.defaultOffset,
        enableSwitch: true
      }), i);
      var e = this;
      c9.load("control", function() {
        e._asyncDraw()
      })
    }
    a6.inherits(aJ, "MapTypeControl");
    z.extend(a6.prototype, {
      initialize: function(e) {
        this._map = e;
        return this._container
      },
      showStreetLayer: function(e) {
        this._map.showStreetLayer(e)
      }
    });
    function bT(e) {
      aJ.call(this);
      e = e || {};
      this._opts = {};
      this._opts = z.extend(this._opts, e);
      this._zoomInDisabled = false;
      this._zoomOutDisabled = false;
      this._zoomInTapped = false;
      this._zoomOutTapped = false;
      this.defaultAnchor = f2.BOTTOM_RIGHT;
      this.defaultOffset = new c8(10,50);
      this.setAnchor(e.anchor);
      this._asyncLoadCode()
    }
    bT.inherits(aJ, "ZoomControl");
    z.extend(bT.prototype, {
      initialize: function(e) {
        this._map = e;
        return this._container
      }
    });
    function a4(e) {
      aJ.call(this);
      e = e || {};
      this._opts = {
        autoZoom: true,
        autoViewport: true
      };
      this._opts = z.extend(this._opts, e);
      this.defaultAnchor = f2.BOTTOM_LEFT;
      this.defaultOffset = new c8(10,50);
      this.watchPosition = this._opts.watchPosition || false;
      this.useCompass = this._opts.useCompass || false;
      this.locMarker = null;
      this.locLevel = 16;
      this.setAnchor(this._opts.anchor);
      this.onLocationStart = e.onLocationStart || null;
      this._asyncLoadCode()
    }
    a4.inherits(aJ, "LocationControl");
    z.extend(a4.prototype, {
      initialize: function(e) {
        this._map = e;
        return this._container
      },
      startLocation: function() {
        this._startLocationCalled = true
      },
      stopLocationTrace: function() {},
      setOptions: function(e) {
        e = e || {};
        z.extend(this._opts, e)
      }
    });
    function U(e) {
      aJ.call(this);
      e = e || {};
      this._opts = {};
      this._opts = z.extend(this._opts, e);
      this.defaultAnchor = f2.BOTTOM_LEFT;
      this.defaultOffset = new c8(5,15);
      if (eO()) {
        this.defaultOffset = new c8(10,10)
      }
      this.setAnchor(e.anchor)
    }
    U.inherits(aJ, "LogoControl");
    z.extend(U.prototype, {
      initialize: function(i) {
        this._map = i;
        var e = this._container = document.createElement("div");
        e.innerHTML = '<img src="' + dW.apiHost + '/images/logo_hd.png"  style="height:21px;width:62px;"/>';
        i.getContainer().appendChild(e);
        return e
      }
    });
    function fg(e, i) {
      this._map = e;
      this._indoorInfo = i;
      this._visible = true;
      this._adjustVisible = true;
      this._isMobile = eO();
      this._sizeConfig = {
        FLOOR_BTN_HEIGHT: this._isMobile ? 35 : 26,
        SWITCH_ARROW_HEIGHT: this._isMobile ? 20 : 15
      };
      this._init()
    }
    fg.prototype._init = function() {
      this._render();
      this._bindDom();
      this._bind();
      this._adjustDisplayHeight();
      var e = new aL("onindoor_bar_show");
      e.uid = this._indoorInfo.uid;
      this._map.dispatchEvent(e)
    }
    ;
    fg.prototype._render = function() {
      if (!this._indoorInfo) {
        return
      }
      var gk = this._isMobile;
      var e = this._div = L("div");
      z.ac(e, "floor-select-container");
      gk && z.ac(e, "mobile");
      gk && z.ac(e, "all-border-radius");
      var i = this._btnTop = L("button");
      z.ac(i, "floor-switch-top");
      z.ac(i, "top-border-radius");
      var gi = L("div");
      z.ac(gi, "floor-switch-top-icon");
      i.appendChild(gi);
      var gh = this._btnBottom = L("button");
      var gf = L("div");
      z.ac(gf, "floor-switch-bottom-icon");
      gh.appendChild(gf);
      z.ac(gh, "floor-switch-bottom");
      z.ac(gh, "bottom-border-radius");
      var gg = this._floorsContainer = L("div");
      z.ac(gg, "floors-container");
      gg.appendChild(this._createFloorsDom());
      this._div.appendChild(i);
      this._div.appendChild(gg);
      this._div.appendChild(gh);
      var gl = 0;
      if (this._btnTop.style.display === "") {
        gl = 2 * this._sizeConfig.SWITCH_ARROW_HEIGHT
      }
      this._div.style.height = parseInt(this._floorsContainer.style.height, 10) + gl + "px";
      this._map.getContainer().appendChild(this._div);
      if (!gk) {
        var gj = this;
        setTimeout(function() {
          gj._div.style.right = "20px"
        }, 20)
      }
    }
    ;
    fg.prototype._createFloorsDom = function() {
      if (!this._indoorInfo) {
        return
      }
      var gf = this._ol = L("ol");
      var gi = this._indoorInfo.currentFloor;
      for (var gh = this._indoorInfo.floors.length - 1; gh >= 0; gh--) {
        var gj = this._indoorInfo.floors[gh].floorName;
        var e = L("li");
        var gg = L("button");
        z.ac(gg, "btn-select-floor");
        if (gh === gi) {
          z.ac(gg, "selected")
        }
        gg.setAttribute("data-floor", gh);
        gg.innerHTML = gj;
        e.appendChild(gg);
        gf.appendChild(e)
      }
      return gf
    }
    ;
    fg.prototype._updateUI = function() {
      if (!this._ol) {
        this._render();
        this._bind();
        this._adjustDisplayHeight();
        return
      }
      this._ol = null;
      this._ol = this._createFloorsDom();
      this._floorsContainer.innerHTML = "";
      this._floorsContainer.appendChild(this._ol);
      this._adjustDisplayHeight()
    }
    ;
    fg.prototype._bindDom = function() {
      var e = this;
      z.on(this._floorsContainer, "click", function(gg) {
        var gf = gg.target || gg.srcElement;
        if (gf.tagName.toLowerCase() === "button") {
          e._map.showIndoor(e._indoorInfo.uid, parseInt(gf.getAttribute("data-floor"), 10));
          var i = new aL("onindoor_bar_click");
          i.uid = e._indoorInfo.uid;
          e._map.dispatchEvent(i)
        }
      });
      z.on(this._floorsContainer, "mouseover", function(gf) {
        var i = gf.target;
        if (i.tagName.toLowerCase() === "button") {
          z.ac(i, "hover")
        }
      });
      z.on(this._floorsContainer, "mouseout", function(gf) {
        var i = gf.target;
        if (i.tagName.toLowerCase() === "button") {
          z.rc(i, "hover")
        }
      });
      z.on(this._floorsContainer, "touchstart", function(gf) {
        var i = gf.target;
        if (i.tagName.toLowerCase() === "button") {
          z.ac(i, "onmousedown")
        }
      });
      z.on(this._floorsContainer, "touchend", function(gf) {
        var i = gf.target;
        if (i.tagName.toLowerCase() === "button") {
          z.rc(i, "onmousedown")
        }
      });
      z.on(this._btnTop, "mouseover", function(i) {
        if (this._disable) {
          return
        }
        z.ac(this, "hover")
      });
      z.on(this._btnTop, "mouseout", function(i) {
        z.rc(this, "hover")
      });
      z.on(this._btnBottom, "mouseover", function(i) {
        if (this._disable) {
          return
        }
        z.ac(this, "hover")
      });
      z.on(this._btnBottom, "mouseout", function(i) {
        z.rc(this, "hover")
      });
      z.on(this._btnTop, "touchstart", function(i) {
        if (this.className.indexOf("disable") > -1) {
          return
        }
        z.ac(this, "onmousedown")
      });
      z.on(this._btnTop, "touchend", function(i) {
        z.rc(this, "onmousedown")
      });
      z.on(this._btnBottom, "touchstart", function(i) {
        if (this.className.indexOf("disable") > -1) {
          return
        }
        z.ac(this, "onmousedown")
      });
      z.on(this._btnBottom, "touchend", function(i) {
        z.rc(this, "onmousedown")
      });
      z.on(this._btnTop, "click", function(i) {
        e._setBarSliderTop(parseInt(e._ol.style.top, 10) + 26)
      });
      z.on(this._btnBottom, "click", function(i) {
        e._setBarSliderTop(parseInt(e._ol.style.top, 10) - 26)
      });
      z.on(this._div, "mousemove", j);
      z.on(this._div, "wheel", co);
      z.on(this._div, "mousewheel", co);
      this._map.addEventListener("resize", function() {
        e._adjustDisplayHeight()
      })
    }
    ;
    fg.prototype._adjustDisplayHeight = function() {
      if (!this._indoorInfo) {
        return
      }
      var gi = this._map.getSize().height;
      var gj = this._sizeConfig.FLOOR_BTN_HEIGHT;
      var gk = gi - 291 - 100;
      if (this._isMobile) {
        gk = gi - 12 - 108 - this._map.config.bottomOffset
      }
      var e = this._indoorInfo.floors.length;
      var gf = e * gj;
      var gg = e;
      var gm = 0;
      var gn = this._floorsContainer.children[0];
      if (gf > gk) {
        this._showArrow = true;
        z.rc(gn.children[0].children[0], "top-border-radius");
        z.rc(gn.children[e - 1].children[0], "bottom-border-radius")
      } else {
        this._showArrow = false;
        z.ac(gn.children[0].children[0], "top-border-radius");
        z.ac(gn.children[e - 1].children[0], "bottom-border-radius")
      }
      while (gf > gk) {
        if (gg === 0) {
          break
        }
        gg--;
        gm = 2 * this._sizeConfig.SWITCH_ARROW_HEIGHT;
        gf = gg * gj + gm
      }
      this._currentDisplayHeight = gf;
      if (gg < 3) {
        this._setAdjustVisbile(false)
      } else {
        this._setAdjustVisbile(true)
      }
      this._floorsContainer.style.height = gg * gj + "px";
      var gh = this._indoorInfo.currentFloor;
      var i = e - gh;
      var gl = gh - 1;
      this._div.style.height = parseInt(this._floorsContainer.style.height, 10) + gm + "px";
      var go = -(e - (gh + Math.round(gg / 2))) * gj;
      this._setBarSliderTop(go);
      if (gg < e) {
        z.show(this._btnTop);
        z.show(this._btnBottom)
      } else {
        z.hide(this._btnTop);
        z.hide(this._btnBottom);
        this._setBarSliderTop(0)
      }
      if (this._isMobile) {
        this._div.style.bottom = 108 + this._map.config.bottomOffset + "px"
      }
    }
    ;
    fg.prototype._setBarSliderTop = function(gg) {
      var gf = 26;
      var i = this._indoorInfo.floors.length;
      var e = i * gf;
      if (this._currentDisplayHeight) {
        if (this._showArrow) {
          e = this._currentDisplayHeight - 30
        } else {
          e = this._currentDisplayHeight
        }
      }
      if (e - gg >= i * gf) {
        gg = e - i * gf;
        z.ac(this._btnBottom, "disable");
        z.rc(this._btnBottom, "hover");
        this._btnBottom._disable = true
      } else {
        z.rc(this._btnBottom, "disable");
        this._btnBottom._disable = false
      }
      if (gg >= 0) {
        gg = 0;
        z.ac(this._btnTop, "disable");
        z.rc(this._btnTop, "hover");
        this._btnTop._disable = true
      } else {
        z.rc(this._btnTop, "disable");
        this._btnTop._disable = false
      }
      this._ol.style.top = gg + "px"
    }
    ;
    fg.prototype._setAdjustVisbile = function(e) {
      if (this._adjustVisible === e) {
        return
      }
      this._adjustVisible = e;
      if (e && this._visible) {
        this._div.style.right = "20px"
      } else {
        this._div.style.right = "-30px"
      }
    }
    ;
    fg.prototype._bind = function() {
      var i = this._map;
      var e = this;
      i.on("indoor_status_changed", function(gk) {
        if (e._visible === false) {
          return
        }
        var gf = e._ol;
        var gi = gk.uid;
        if (!gi) {
          return
        }
        var gj = gk.floor;
        for (var gh = 0; gh < gf.children.length; gh++) {
          var gg = gf.children[gh].children[0];
          if (parseInt(gg.getAttribute("data-floor"), 10) === gj) {
            z.ac(gg, "selected")
          } else {
            z.rc(gg, "selected")
          }
        }
      });
      i.on("zoomend", function(gf) {
        if (this.getZoom() < 17) {
          e._setAdjustVisbile(false)
        } else {
          e._setAdjustVisbile(true)
        }
      })
    }
    ;
    fg.prototype.setInfo = function(e) {
      if (this._indoorInfo && this._indoorInfo.uid === e.uid) {
        return
      }
      this._indoorInfo = e;
      this._updateUI()
    }
    ;
    fg.prototype.show = function() {
      if (this._visible === true) {
        return
      }
      this._visible = true;
      if (!this._isMobile) {
        this._div.style.right = "20px"
      } else {
        this._div.style.display = ""
      }
      var e = new aL("onindoor_bar_show");
      e.uid = this._indoorInfo.uid;
      this._map.dispatchEvent(e)
    }
    ;
    fg.prototype.hide = function() {
      if (this._visible === false) {
        return
      }
      this._visible = false;
      if (!this._isMobile) {
        this._div.style.right = "-30px"
      } else {
        this._div.style.display = "none"
      }
    }
    ;
    function dO() {
      this._opts = {};
      this.defaultOffset = new c8(0,80);
      this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
      this._firstAnimation = true
    }
    dO.inherits(aJ, "NavigationControl3D");
    z.extend(dO.prototype, {
      initialize: function(gf) {
        this._map = gf;
        this._createDom();
        this._bindDom();
        this._bind();
        if (!eO()) {
          this._headingControl = new f5(this._map,this._div)
        }
        this._tiltControl = new dq(this._map,this._div);
        this._render();
        var i = this._map.getMapType();
        var e = this;
        if (i === "B_EARTH_MAP" || this._map._renderType === "webgl") {
          e._div.style.opacity = "1";
          e._div.style.visibility = "visible"
        } else {
          e._div.style.opacity = "0";
          e._div.style.visibility = "hidden"
        }
        return this._container
      },
      _createDom: function() {
        var i = this._div = document.createElement("div");
        this._container = i;
        var e = i.style;
        e.position = "absolute";
        e.zIndex = 5;
        e.width = "52px";
        e.height = "82px";
        e.right = "-3px";
        e.bottom = "79px";
        e.opacity = "0";
        e.visibility = "hidden";
        e.WebkitTransition = e.transition = "opacity .3s ease-out,visibility .3s ease-out"
      },
      _render: function() {
        var e = document.getElementById("map-operate");
        if (e) {
          e.appendChild(this._div)
        } else {
          this._map.getContainer().appendChild(this._div)
        }
      },
      _bindDom: function() {
        this._div.addEventListener("mousemove", j)
      },
      _bind: function() {
        if (this._map._renderType === "webgl") {
          return
        }
        var e = this;
        this._map.on("maptypechange", function() {
          if (this.mapType === "B_EARTH_MAP") {
            if (e._firstAnimation) {
              e._firstAnimation = false;
              setTimeout(function() {
                e._div.style.opacity = "1";
                e._div.style.visibility = "visible"
              }, 300)
            } else {
              e._div.style.opacity = "1";
              e._div.style.visibility = "visible"
            }
          } else {
            e._div.style.opacity = "0";
            e._div.style.visibility = "hidden"
          }
        })
      }
    });
    function f5(gf, i) {
      this._map = gf;
      this._target = gf;
      var gg = gf.temp.originMapType || gf.mapType;
      if (gg === "B_EARTH_MAP" && gf._earth) {
        this._target = gf._earth
      }
      this._outContainer = i || gf.getContainer();
      this._imgRatio = aI() >= 1.5 ? 2 : 1;
      this._imgPath = dW.imgPath + "earth-navi-control-pc4" + (this._imgRatio === 2 ? "-2x.png" : ".png");
      this._enabled = true;
      var e = this;
      this._setHeadingOptions = {
        callback: function() {
          e._target.setLock(false)
        }
      };
      this._init()
    }
    z.extend(f5.prototype, {
      _init: function() {
        this._createDom();
        this._render();
        this._bindDom();
        this._bind();
        this._updateUI();
        this._checkEnable()
      },
      _checkEnable: function() {
        if (this._target.getZoom() >= this._target._enableHeadingZoom) {
          this.enable()
        } else {
          this.disable()
        }
      },
      _createDom: function() {
        var i = this._div = L("div");
        var e = i.style;
        e.position = "absolute";
        e.zIndex = 5;
        e.top = "0";
        e.left = "0";
        e.width = "52px";
        e.height = "54px";
        e.background = "url(" + this._imgPath + ") no-repeat";
        e.backgroundSize = "266px auto";
        this._rotateCCW = this._createButton();
        this._rotateCCW.title = "逆时针转动";
        e = this._rotateCCW.style;
        e.left = "2px";
        e.top = "5px";
        e.zIndex = "1";
        e.width = "15px";
        e.height = "42px";
        e.backgroundPosition = "-75px -5px";
        this._rotateCW = this._createButton();
        this._rotateCW.title = "顺时针转动";
        e = this._rotateCW.style;
        e.right = "2px";
        e.top = "5px";
        e.zIndex = "1";
        e.width = "15px";
        e.height = "42px";
        e.backgroundPosition = "-75px -5px";
        e.WebkitTransform = e.transform = "scaleX(-1)";
        this._compass = this._createButton();
        this._compass.title = "恢复正北方向";
        e = this._compass.style;
        e.left = "19px";
        e.top = "4px";
        e.width = "14px";
        e.height = "44px";
        e.backgroundPosition = "-56px -4px";
        e.WebkitTransform = e.transform = "rotate(0deg)";
        this._div.appendChild(this._rotateCCW);
        this._div.appendChild(this._compass);
        this._div.appendChild(this._rotateCW);
        this._domRendered = true
      },
      _createButton: function() {
        var e = L("button");
        var i = e.style;
        i.position = "absolute";
        i.outline = "none";
        i.border = "none";
        i.background = "url(" + this._imgPath + ") no-repeat";
        i.backgroundSize = "266px auto";
        i.cursor = "pointer";
        return e
      },
      _render: function() {
        this._outContainer.appendChild(this._div)
      },
      enable: function() {
        this._enabled = true;
        if (this._domRendered) {
          this._rotateCCW.style.cursor = "pointer";
          this._rotateCCW.style.opacity = 1;
          this._rotateCW.style.cursor = "pointer";
          this._rotateCW.style.opacity = 1;
          this._compass.style.cursor = "pointer";
          this._compass.style.opacity = 1
        }
      },
      disable: function() {
        this._enabled = false;
        if (this._domRendered) {
          this._rotateCCW.style.cursor = "";
          this._rotateCCW.style.opacity = 0.4;
          this._rotateCW.style.cursor = "";
          this._rotateCW.style.opacity = 0.4;
          this._compass.style.cursor = "";
          this._compass.style.opacity = 0.4
        }
      },
      _bindDom: function() {
        dE(this._div, ["mousedown", "click", "dblclick"]);
        var i = this._map;
        var e = this;
        this._rotateCW.addEventListener("click", function() {
          if (e._isOperating || e._enabled === false) {
            return
          }
          if (e._target.getLock()) {
            return
          }
          if (e._target.getHeading() === 360) {
            e._target.setHeading(0)
          }
          e._target.setLock(true);
          e._target.setHeading(e._target.getHeading() + 90, e._setHeadingOptions);
          i.fire(new aL("onrotatecwclick"))
        }, false);
        this._rotateCCW.addEventListener("click", function() {
          if (e._isOperating || e._enabled === false) {
            return
          }
          if (e._target.getLock()) {
            return
          }
          if (e._target.getHeading() === -360) {
            e._target.setHeading(0)
          }
          e._target.setLock(true);
          e._target.setHeading(e._target.getHeading() - 90, e._setHeadingOptions);
          i.fire(new aL("onrotateccwclick"))
        }, false);
        this._rotateCW.addEventListener("mouseover", function() {
          if (e._enabled === false) {
            return
          }
          this.style.backgroundPosition = "-89px -5px"
        }, false);
        this._rotateCW.addEventListener("mouseout", function() {
          if (e._enabled === false) {
            return
          }
          this.style.backgroundPosition = "-75px -5px"
        }, false);
        this._rotateCCW.addEventListener("mouseover", function() {
          if (e._enabled === false) {
            return
          }
          this.style.backgroundPosition = "-89px -5px"
        }, false);
        this._rotateCCW.addEventListener("mouseout", function() {
          if (e._enabled === false) {
            return
          }
          this.style.backgroundPosition = "-75px -5px"
        }, false);
        this._compass.addEventListener("click", function() {
          if (e._isOperating || e._enabled === false) {
            return
          }
          if (e._target.getLock()) {
            return
          }
          e._target.setLock(true);
          var gf = false;
          if (e._target.getTilt() !== 0) {
            gf = true;
            e._target.setTilt(0, e._setHeadingOptions)
          }
          if (e._target.getHeading() % 360 !== 0) {
            gf = true;
            e._target.resetHeading(e._setHeadingOptions)
          }
          if (!gf) {
            e._target.setLock(false)
          }
          i.fire(new aL("oncompassclick"))
        }, false)
      },
      _bind: function() {
        var e = this;
        this._bindTarget(this._target);
        if (this._map._renderType === "webgl") {
          this._map.addEventListener("maptypechange", function(i) {
            if (this.mapType === "B_EARTH_MAP") {
              e._target = e._map._earth
            } else {
              e._target = e._map
            }
            e._bindTarget(e._target);
            e._checkEnable()
          })
        }
      },
      _bindTarget: function(i) {
        if (i === this._map && this._mapBinded) {
          return
        }
        if (i === this._map._earth && this._earthBinded) {
          return
        }
        var e = this;
        i.addEventListener("heading_changed", function(gf) {
          e._updateUI()
        });
        i.addEventListener("animation_start", function(gf) {
          e._isOperating = true
        });
        i.addEventListener("animation_end", function(gf) {
          e._isOperating = false
        });
        i.on("load", function() {
          e._checkEnable()
        });
        i.on("zoom_changed", function() {
          e._checkEnable()
        });
        if (i === this._map) {
          this._mapBinded = true
        } else {
          this._earthBinded = true
        }
      },
      _updateUI: function() {
        var e = this._target.getHeading();
        var i = this._compass.style;
        i.WebkitTransform = i.transform = "rotate(" + e + "deg)"
      },
      hide: function() {
        this._div.style.display = "none"
      },
      show: function() {
        this._div.style.display = "block"
      }
    });
    function dq(gf, i) {
      this._map = gf;
      this._target = gf;
      var gg = gf.temp.originMapType || gf.mapType;
      if (gg === "B_EARTH_MAP" && gf._earth) {
        this._target = gf._earth
      }
      this._outContainer = i || gf.getContainer();
      this._imgRatio = aI() >= 1.5 ? 2 : 1;
      this._imgPath = dW.imgPath + "gl-navi-control-pc4" + (this._imgRatio === 2 ? "-2x.png" : ".png");
      this._enabled = true;
      var e = this;
      this._setTiltOptions = {
        callback: function() {
          e._target.setLock(false)
        }
      };
      this._init()
    }
    z.extend(dq.prototype, {
      _init: function() {
        this._createDom();
        this._render();
        this._bindDom();
        this._bind();
        this._checkEnable()
      },
      _checkEnable: function() {
        if (this._target.getZoom() >= this._target._enableTiltZoom) {
          this.enable()
        } else {
          this.disable()
        }
      },
      _createDom: function() {
        var e = this._div = L("button");
        e.title = "倾斜";
        var i = e.style;
        i.position = "absolute";
        i.zIndex = 5;
        i.outline = "none";
        i.border = "none";
        i.cursor = "pointer";
        i.width = "26px";
        i.height = "26px";
        i.top = "56px";
        i.right = "13px";
        i.background = "url(" + this._imgPath + ") no-repeat #fff";
        i.backgroundSize = "266px auto";
        i.backgroundPosition = "-110px 1px";
        i.boxShadow = "1px 2px 1px rgba(0, 0, 0, 0.15)"
      },
      enable: function() {
        this._enabled = true;
        if (this._div) {
          this._div.style.cursor = "pointer"
        }
        this._updateUI()
      },
      disable: function() {
        this._enabled = false;
        if (this._div) {
          this._div.style.cursor = ""
        }
        this._updateUI()
      },
      _render: function() {
        this._outContainer.appendChild(this._div)
      },
      _bindDom: function() {
        var e = this;
        this._div.addEventListener("mousedown", function(gg) {
          if (!e._enabled) {
            return
          }
          if (e._target.getLock()) {
            return
          }
          var i = e._target.getTilt();
          var gf;
          if (i === e._map.getCurrentMaxTilt()) {
            gf = "out"
          } else {
            if (i === 0) {
              gf = "in"
            } else {
              gf = e._preTrend ? e._preTrend : "in"
            }
          }
          e._curTrend = gf;
          e._clickTimer = setTimeout(function() {
            e._map.fire(new aL("ontiltmsdown"));
            e._tiltAni = new n({
              duration: 9999999,
              render: function(gh) {
                i = e._target.getTilt();
                if (gf === "in" && i < e._map.getCurrentMaxTilt()) {
                  e._target.setTilt(i + 1, {
                    noAnimation: true
                  })
                } else {
                  if (gf === "out" && i > 0) {
                    e._target.setTilt(i - 1, {
                      noAnimation: true
                    })
                  }
                }
              },
              finish: function() {
                e._tiltAni = null
              }
            });
            e._clickTimer = null
          }, 200);
          gg.stopPropagation()
        }, false);
        this._div.addEventListener("mouseup", function(i) {
          if (!e._enabled) {
            return
          }
          if (e._tiltAni) {
            e._tiltAni.stop()
          }
          e._preTrend = e._curTrend
        }, false);
        this._div.addEventListener("click", function(gg) {
          if (!e._enabled) {
            return
          }
          if (!e._clickTimer) {
            return
          }
          if (e._target.getLock()) {
            return
          }
          clearTimeout(e._clickTimer);
          e._map.fire(new aL("ontiltclick"));
          var i = e._target.getTilt();
          e._target.setLock(true);
          gg.stopPropagation();
          var gf = e._map.getCurrentMaxTilt();
          if (e._curTrend === "in") {
            e._target.setTilt(gf, e._setTiltOptions)
          } else {
            if (e._curTrend === "out") {
              e._target.setTilt(0, e._setTiltOptions)
            } else {
              if (i < gf) {
                e._target.setTilt(gf, e._setTiltOptions)
              } else {
                e._target.setTilt(0, e._setTiltOptions)
              }
            }
          }
        }, false);
        this._div.addEventListener("mouseover", function(i) {
          if (!e._enabled) {
            return
          }
          e._mouseOver = true;
          e._updateUI()
        }, false);
        this._div.addEventListener("mouseout", function(i) {
          if (!e._enabled) {
            return
          }
          e._mouseOver = false;
          e._updateUI()
        }, false);
        dE(this._div, ["mousedown", "click", "dblclick"])
      },
      _bind: function() {
        var e = this;
        var i = this._map;
        this._bindTarget(this._target);
        if (this._map._renderType === "webgl") {
          this._map.addEventListener("maptypechange", function(gf) {
            if (this.mapType === "B_EARTH_MAP") {
              e._target = e._map._earth
            } else {
              e._target = e._map
            }
            e._bindTarget(e._target);
            e._checkEnable()
          })
        }
      },
      _bindTarget: function(i) {
        if (i === this._map && this._mapBinded) {
          return
        }
        if (i === this._map._earth && this._earthBinded) {
          return
        }
        var e = this;
        i.on("load", function() {
          e._checkEnable()
        });
        i.on("zoom_changed", function() {
          e._checkEnable()
        });
        i.on("tilt_changed", function() {
          e._updateUI()
        });
        if (i === this._map) {
          this._mapBinded = true
        } else {
          this._earthBinded = true
        }
      },
      _updateUI: function() {
        var gf = this._target.getTilt();
        var i = 0;
        var gg = 0;
        var e = 0;
        if (gf > 0) {
          i = 78
        }
        if (this._mouseOver) {
          e = 52
        }
        if (this._enabled === false) {
          gg = 26;
          e = 0;
          i = 0
        }
        var gh = "-" + (110 + i + gg + e) + "px 1px";
        this._div && (this._div.style.backgroundPosition = gh);
        if (this._enabled) {
          if (gf > 0) {
            this._div && (this._div.title = "恢复")
          } else {
            this._div && (this._div.title = "倾斜")
          }
        } else {
          this._div && (this._div.title = "请放大地图后操作")
        }
      },
      hide: function() {
        this._div.style.display = "none"
      },
      show: function() {
        this._div.style.display = "block"
      }
    });
    function bD(i) {
      db.call(this);
      this._opts = {
        container: null,
        cursor: "default"
      };
      this._opts = z.extend(this._opts, i);
      this._type = "contextmenu";
      this._map = null;
      this._container;
      this._left = 0;
      this._top = 0;
      this._items = [];
      this._rItems = [];
      this._dividers = [];
      this._enable = true;
      this.curPixel = null;
      this.curPoint = null;
      this._isOpen = false;
      var e = this;
      c9.load("menu", function() {
        e._draw()
      })
    }
    bD.inherits(db, "ContextMenu");
    z.extend(bD.prototype, {
      initialize: function(e) {
        this._map = e
      },
      remove: function() {
        this._map = null
      },
      addItem: function(gh, e) {
        if (!gh || gh._type != "menuitem" || gh._text == "" || gh._width <= 0) {
          return
        }
        for (var gg = 0, gf = this._items.length; gg < gf; gg++) {
          if (this._items[gg] === gh) {
            return
          }
        }
        if (e === undefined || e > this._items.length - 1) {
          e = -1
        }
        gh._insertIndex = e;
        if (e === -1) {
          this._items.push(gh);
          this._rItems.push(gh)
        } else {
          this._items.splice(e, 0, gh);
          this._rItems.splice(e, 0, gh)
        }
      },
      removeItem: function(gg) {
        if (!gg || gg._type != "menuitem") {
          return
        }
        for (var gf = 0, e = this._items.length; gf < e; gf++) {
          if (this._items[gf] === gg) {
            this._items[gf].remove();
            this._items.splice(gf, 1);
            delete gg._insertIndex;
            e--
          }
        }
        for (var gf = 0, e = this._rItems.length; gf < e; gf++) {
          if (this._rItems[gf] === gg) {
            this._rItems[gf].remove();
            this._rItems.splice(gf, 1);
            delete gg._insertIndex;
            e--
          }
        }
      },
      addSeparator: function(e) {
        if (e === undefined || e > this._items.length - 1) {
          e = -1
        }
        var i = {
          _type: "divider",
          _dIndex: this._dividers.length,
          _insertIndex: e
        };
        this._dividers.push({
          dom: null
        });
        if (e === -1) {
          this._items.push(i)
        } else {
          this._items.splice(e, 0, i)
        }
      },
      removeSeparator: function(gf) {
        if (!this._dividers[gf]) {
          return
        }
        for (var gg = 0, e = this._items.length; gg < e; gg++) {
          if (this._items[gg] && this._items[gg]._type == "divider" && this._items[gg]._dIndex == gf) {
            this._items.splice(gg, 1);
            e--
          }
          if (this._items[gg] && this._items[gg]._type == "divider" && this._items[gg]._dIndex > gf) {
            this._items[gg]._dIndex--
          }
        }
        this._dividers.splice(gf, 1)
      },
      getDom: function() {
        return this._container
      },
      show: function() {
        if (this._isOpen == true) {
          return
        }
        this._isOpen = true
      },
      hide: function() {
        if (this._isOpen == false) {
          return
        }
        this._isOpen = false
      },
      setCursor: function(e) {
        if (!e) {
          return
        }
        this._opts.cursor = e
      },
      getItem: function(e) {
        return this._rItems[e]
      },
      enable: function() {
        this._enable = true
      },
      disable: function() {
        this._enable = false
      }
    });
    function en(gf, gg, i) {
      if (!gf || !gg || typeof gg != "function") {
        return
      }
      db.call(this);
      this._opts = {
        width: 100,
        id: ""
      };
      i = i || {};
      this._opts.width = (i.width * 1) ? i.width : 100;
      this._opts.id = i.id ? i.id : "";
      this._text = gf + "";
      this._callback = gg;
      this._map = null;
      this._type = "menuitem";
      this._contextmenu = null;
      this._container = null;
      this._enabled = true;
      var e = this;
      c9.load("menu", function() {
        e._draw()
      })
    }
    en.inherits(db, "MenuItem");
    z.extend(en.prototype, {
      initialize: function(e, i) {
        this._map = e;
        this._contextmenu = i
      },
      remove: function() {
        this._contextmenu = null;
        this._map = null
      },
      setText: function(e) {
        if (!e) {
          return
        }
        this._text = e + ""
      },
      getDom: function() {
        return this._container
      },
      enable: function() {
        this._enabled = true
      },
      disable: function() {
        this._enabled = false
      }
    });
    function cX(e, i) {
      this.setSouthWest(e);
      this.setNorthEast(i)
    }
    z.extend(cX.prototype, {
      isEmpty: function() {
        return this.sw === null && this.ne === null
      },
      equals: function(e) {
        if (!e || e.isEmpty() || this.isEmpty()) {
          return false
        }
        return this.sw.equals(e.sw) && this.ne.equals(e.ne)
      },
      containsBounds: function(e) {
        if (!e || e.isEmpty() || this.isEmpty()) {
          return false
        }
        return (e.sw.lng > this.sw.lng && e.ne.lng < this.ne.lng && e.sw.lat > this.sw.lat && e.ne.lat < this.ne.lat)
      },
      getCenter: function() {
        if (this.isEmpty()) {
          return null
        }
        return new fU((this.sw.lng + this.ne.lng) / 2,(this.sw.lat + this.ne.lat) / 2)
      },
      intersects: function(gf) {
        if (!gf || gf.isEmpty() || this.isEmpty()) {
          return null
        }
        if (Math.max(gf.sw.lng, gf.ne.lng) < Math.min(this.sw.lng, this.ne.lng) || Math.min(gf.sw.lng, gf.ne.lng) > Math.max(this.sw.lng, this.ne.lng) || Math.max(gf.sw.lat, gf.ne.lat) < Math.min(this.sw.lat, this.ne.lat) || Math.min(gf.sw.lat, gf.ne.lat) > Math.max(this.sw.lat, this.ne.lat)) {
          return null
        }
        var gh = Math.max(this.sw.lng, gf.sw.lng);
        var i = Math.min(this.ne.lng, gf.ne.lng);
        var gg = Math.max(this.sw.lat, gf.sw.lat);
        var e = Math.min(this.ne.lat, gf.ne.lat);
        return new cX(new fU(gh,gg),new fU(i,e))
      },
      setMinMax: function() {
        this.minX = this.sw ? this.sw.lng : null;
        this.minY = this.sw ? this.sw.lat : null;
        this.maxX = this.ne ? this.ne.lng : null;
        this.maxY = this.ne ? this.ne.lat : null
      },
      containsPoint: function(e) {
        if (!e) {
          return
        }
        return (e.lng >= this.sw.lng && e.lng <= this.ne.lng && e.lat >= this.sw.lat && e.lat <= this.ne.lat)
      },
      extend: function(e) {
        if (!e) {
          return
        }
        var i = e.lng;
        var gf = e.lat;
        if (!this.sw) {
          this.sw = e.clone()
        }
        if (!this.ne) {
          this.ne = e.clone()
        }
        if (this.sw.lng > i) {
          this.sw.lng = i
        }
        if (this.ne.lng < i) {
          this.ne.lng = i
        }
        if (this.sw.lat > gf) {
          this.sw.lat = gf
        }
        if (this.ne.lat < gf) {
          this.ne.lat = gf
        }
      },
      getMin: function() {
        return this.sw
      },
      getMax: function() {
        return this.ne
      },
      getSouthWest: function() {
        return this.sw
      },
      getNorthEast: function() {
        return this.ne
      },
      setSouthWest: function(e) {
        this.sw = e ? e.clone() : null
      },
      setNorthEast: function(e) {
        this.ne = e ? e.clone() : null
      },
      clone: function() {
        return new cX(this.sw,this.ne)
      },
      toSpan: function() {
        if (this.isEmpty()) {
          return new c8(0,0)
        }
        return new c8(Math.abs(this.ne.lng - this.sw.lng),Math.abs(this.ne.lat - this.sw.lat))
      },
      div: function(e) {
        if (!e || e.isEmpty() || this.isEmpty()) {
          return 0
        }
        return ((this.ne.lng - this.sw.lng) * (this.ne.lat - this.sw.lat)) / ((e.ne.lng - e.sw.lng) * (e.ne.lat - e.sw.lat))
      },
      makeNormalizedPoint: function(e) {
        this.normalizedTopLeft = this.pointTopLeft.clone();
        this.normalizedTopRight = this.pointTopRight.clone();
        this.normalizedBottomRight = this.pointBottomRight.clone();
        this.normalizedBottomLeft = this.pointBottomLeft.clone();
        while (e < 0) {
          e += 360
        }
        e = e % 360;
        if (e >= 0 && e < 90 || e >= 270 && e < 360) {
          if (this.normalizedTopRight.lng < this.normalizedTopLeft.lng) {
            this.normalizedTopRight.lng += cl.WORLD_SIZE_MC
          }
          if (this.normalizedBottomRight.lng < this.normalizedBottomLeft.lng) {
            this.normalizedBottomRight.lng += cl.WORLD_SIZE_MC
          }
        } else {
          if (this.normalizedTopLeft.lng < this.normalizedTopRight.lng) {
            this.normalizedTopLeft.lng += cl.WORLD_SIZE_MC
          }
          if (this.normalizedBottomLeft.lng < this.normalizedBottomRight.lng) {
            this.normalizedBottomLeft.lng += cl.WORLD_SIZE_MC
          }
        }
      },
      toString: function() {
        return "Bounds"
      }
    });
    function fU(e, i) {
      if (isNaN(e)) {
        e = fz(e);
        e = isNaN(e) ? 0 : e
      }
      if (typeof e === "string") {
        e = parseFloat(e)
      }
      if (isNaN(i)) {
        i = fz(i);
        i = isNaN(i) ? 0 : i
      }
      if (typeof i === "string") {
        i = parseFloat(i)
      }
      this.lng = e;
      this.lat = i
    }
    fU.prototype.equals = function(i) {
      if (!i) {
        return false
      }
      var gg = Math.abs(this.lat - i.lat);
      var gf = Math.abs(this.lng - i.lng);
      var e = 1e-8;
      if (gg < e && gf < e) {
        return true
      }
      return false
    }
    ;
    fU.prototype.clone = function() {
      return new fU(this.lng,this.lat)
    }
    ;
    fU.prototype.add = function(e) {
      return new fU(this.lng + e.lng,this.lat + e.lat)
    }
    ;
    fU.prototype.sub = function(e) {
      return new fU(this.lng - e.lng,this.lat - e.lat)
    }
    ;
    fU.prototype.mult = function(e) {
      return new fU(this.lng * e,this.lat * e)
    }
    ;
    fU.prototype.div = function(e) {
      return new fU(this.lng / e,this.lat / e)
    }
    ;
    fU.prototype.mag = function() {
      return Math.sqrt(this.lng * this.lng + this.lat * this.lat)
    }
    ;
    fU.prototype.toString = function() {
      return "Point"
    }
    ;
    function dl() {}
    z.extend(dl, {
      EARTHRADIUS: 6370996.81,
      MCBAND: [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
      LLBAND: [86, 60, 45, 30, 15, 0],
      MC2LL: [[1.410526172116255e-8, 0.00000898305509648872, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 17337981.2], [-7.435856389565537e-9, 0.000008983055097726239, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86], [-3.030883460898826e-8, 0.00000898305509983578, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [-1.981981304930552e-8, 0.000008983055099779535, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437e-9, 0.000008983055096812155, 0.00006995724062, 23.10934304144901, -0.00023663490511, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878e-9, 0.000008983055095805407, -3.068298e-8, 7.47137025468032, -0.00000353937994, -0.02145144861037, -0.00001234426596, 0.00010322952773, -0.00000323890364, 826088.5]],
      LL2MC: [[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [0.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455, -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-0.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-0.0003218135878613132, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]],
      getDistanceByMC: function(gi, gg) {
        if (!gi || !gg) {
          return 0
        }
        var i;
        var gh;
        var e;
        var gf;
        gi = this.convertMC2LL(gi);
        if (!gi) {
          return 0
        }
        i = cS(gi.lng);
        gh = cS(gi.lat);
        gg = this.convertMC2LL(gg);
        if (!gg) {
          return 0
        }
        e = cS(gg.lng);
        gf = cS(gg.lat);
        return this.getDistance(i, e, gh, gf)
      },
      getDistanceByLL: function(gi, gg) {
        if (!gi || !gg) {
          return 0
        }
        gi.lng = this.getLoop(gi.lng, -180, 180);
        gi.lat = this.getRange(gi.lat, -80, 84);
        gg.lng = this.getLoop(gg.lng, -180, 180);
        gg.lat = this.getRange(gg.lat, -80, 84);
        var i;
        var e;
        var gh;
        var gf;
        i = cS(gi.lng);
        gh = cS(gi.lat);
        e = cS(gg.lng);
        gf = cS(gg.lat);
        return this.getDistance(i, e, gh, gf)
      },
      convertMC2LL: function(e) {
        if (e === null) {
          return e
        }
        if (!e) {
          return new fU(0,0)
        }
        var gf;
        var gh;
        gf = new fU(Math.abs(e.lng),Math.abs(e.lat));
        for (var gg = 0; gg < this.MCBAND.length; gg++) {
          if (gf.lat >= this.MCBAND[gg]) {
            gh = this.MC2LL[gg];
            break
          }
        }
        var gi = this.convertor(e, gh);
        return new ci(gi.lat,gi.lng)
      },
      convertLL2MC: function(gj) {
        if (!gj) {
          return new fU(0,0)
        }
        var gl = gj.lat;
        var gg = gj.lng;
        gg = this.getLoop(gj.lng, -180, 180);
        gl = es(gl, -85, 85);
        var gi;
        for (var gh = 0; gh < this.LLBAND.length; gh++) {
          if (gl >= this.LLBAND[gh]) {
            gi = this.LL2MC[gh];
            break
          }
        }
        if (!gi) {
          for (gh = 0; gh < this.LLBAND.length; gh++) {
            if (gl <= -this.LLBAND[gh]) {
              gi = this.LL2MC[gh];
              break
            }
          }
        }
        var gf = new fU(gg,gl);
        var gk = this.convertor(gf, gi);
        var e = new fU(gk.lng,gk.lat);
        e.latLng = gj.clone();
        return e
      },
      convertor: function(gf, gg) {
        if (!gf || !gg) {
          return
        }
        var e = gg[0] + gg[1] * Math.abs(gf.lng);
        var i = Math.abs(gf.lat) / gg[9];
        var gh = gg[2] + gg[3] * i + gg[4] * i * i + gg[5] * i * i * i + gg[6] * i * i * i * i + gg[7] * i * i * i * i * i + gg[8] * i * i * i * i * i * i;
        e *= (gf.lng < 0 ? -1 : 1);
        gh *= (gf.lat < 0 ? -1 : 1);
        return new fU(e,gh)
      },
      getDistance: function(i, e, gg, gf) {
        return this.EARTHRADIUS * Math.acos((Math.sin(gg) * Math.sin(gf) + Math.cos(gg) * Math.cos(gf) * Math.cos(e - i)))
      },
      getRange: function(gf, i, e) {
        if (i != null) {
          gf = Math.max(gf, i)
        }
        if (e != null) {
          gf = Math.min(gf, e)
        }
        return gf
      },
      getLoop: function(gf, i, e) {
        while (gf > e) {
          gf -= e - i
        }
        while (gf < i) {
          gf += e - i
        }
        return gf
      }
    });
    function ci(i, e) {
      if (i < -90) {
        i = -90
      } else {
        if (i > 90) {
          i = 90
        }
      }
      while (e < -180) {
        e += 360
      }
      while (e > 180) {
        e -= 360
      }
      this.lat = i || 0;
      this.lng = e || 0
    }
    z.extend(ci.prototype, {
      equals: function(e) {
        return (this.lat === e.lat && this.lng === e.lng)
      },
      clone: function() {
        return new ci(this.lat,this.lng)
      },
      getLngSpan: function(e) {
        var i = this.lng;
        var gf = Math.abs(e - i);
        if (gf > 180) {
          gf = 360 - gf
        }
        return gf
      },
      sub: function(e) {
        return new ci(this.lat - e.lat,this.lng - e.lng)
      },
      toString: function() {
        return this.lat + ", " + this.lng
      }
    });
    function dB(e, i) {
      if (e && !i) {
        i = e
      }
      this._sw = this._ne = null;
      this._swLng = this._swLat = null;
      this._neLng = this._neLat = null;
      if (e) {
        this._sw = new ci(e.lat,e.lng);
        this._ne = new ci(i.lat,i.lng);
        this._swLng = e.lng;
        this._swLat = e.lat;
        this._neLng = i.lng;
        this._neLat = i.lat
      }
    }
    z.extend(dB.prototype, {
      isEmpty: function() {
        return !this._sw || !this._ne
      },
      equals: function(e) {
        if (this.isEmpty()) {
          return false
        }
        return this.getSouthWest().equals(e.getSouthWest()) && this.getNorthEast().equals(e.getNorthEast())
      },
      getSouthWest: function() {
        return this._sw
      },
      getNorthEast: function() {
        return this._ne
      },
      containsBounds: function(e) {
        if (this.isEmpty() || e.isEmpty()) {
          return false
        }
        return (e._swLng > this._swLng && e._neLng < this._neLng && e._swLat > this._swLat && e._neLat < this._neLat)
      },
      getCenter: function() {
        if (this.isEmpty()) {
          return null
        }
        return new ci((this._swLat + this._neLat) / 2,(this._swLng + this._neLng) / 2)
      },
      intersects: function(gf) {
        if (Math.max(gf._swLng, gf._neLng) < Math.min(this._swLng, this._neLng) || Math.min(gf._swLng, gf._neLng) > Math.max(this._swLng, this._neLng) || Math.max(gf._swLat, gf._neLat) < Math.min(this._swLat, this._neLat) || Math.min(gf._swLat, gf._neLat) > Math.max(this._swLat, this._neLat)) {
          return false
        }
        var gh = Math.max(this._swLng, gf._swLng);
        var i = Math.min(this._neLng, gf._neLng);
        var gg = Math.max(this._swLat, gf._swLat);
        var e = Math.min(this._neLat, gf._neLat);
        this._sw = new ci(gg,gh);
        this._ne = new ci(e,i);
        this._swLng = gh;
        this._swLat = gg;
        this._neLng = i;
        this._neLat = e;
        return true
      },
      containsPoint: function(e) {
        if (this.isEmpty()) {
          return false
        }
        return (e.lng >= this._swLng && e.lng <= this._neLng && e.lat >= this._swLat && e.lat <= this._neLat)
      },
      extend: function(e) {
        var i = e.lng;
        var gf = e.lat;
        if (!this._sw) {
          this._sw = new ci(0,0)
        }
        if (!this._ne) {
          this._ne = new ci(0,0)
        }
        if (!this._swLng || this._swLng > i) {
          this._sw.lng = this._swLng = i
        }
        if (!this._neLng || this._neLng < i) {
          this._ne.lng = this._neLng = i
        }
        if (!this._swLat || this._swLat > gf) {
          this._sw.lat = this._swLat = gf
        }
        if (!this._neLat || this._neLat < gf) {
          this._ne.lat = this._neLat = gf
        }
      },
      toSpan: function() {
        if (this.isEmpty()) {
          return new ci(0,0)
        }
        return new ci(Math.abs(this._neLat - this._swLat),Math.abs(this._neLng - this._swLng))
      },
      union: function(i) {
        if (i.isEmpty()) {
          return false
        }
        var e = i.getSouthWest();
        var gf = i.getNorthEast();
        if (this._swLat > e.lat) {
          this._swLat = e.lat
        }
        if (this._swLng > e.lng) {
          this._swLng = e.lng
        }
        if (this._neLat < gf.lat) {
          this._neLat = gf.lat
        }
        if (this._neLng < gf.lng) {
          this._neLng = gf.lng
        }
        this._sw = new ci(this._swLat,this._swLng);
        this._ne = new ci(this._neLat,this._neLng);
        return true
      },
      toString: function() {
        return this._swLat + ", " + this._swLng + ", " + this._neLat + ", " + this._neLng
      }
    });
    var cZ = {
      idle: 0,
      freeze: 1,
      zooming: 2,
      dragging: 3,
      moving: 4,
      readyToDrag: 5,
      readyToPinch: 6,
      pinching: 7,
      stdMapCtrlDrag: 8,
      KEY_LEFT: 37,
      KEY_UP: 38,
      KEY_RIGHT: 39,
      KEY_DOWN: 40,
      arrowOpCodes: {
        37: 1,
        38: 2,
        39: 4,
        40: 8
      }
    };
    var df = {
      _map: null,
      _html: "<div class='BMap_opMask' unselectable='on'></div>",
      _maskElement: null,
      _cursor: "default",
      inUse: false,
      show: function(e) {
        if (!this._map) {
          this._map = e
        }
        this.inUse = true;
        if (!this._maskElement) {
          this._createMask(e)
        }
        this._maskElement.style.display = "block"
      },
      _createMask: function(i) {
        if (!this._map) {
          this._map = i
        }
        if (!this._map) {
          return
        }
        var e = this._maskElement = cQ(this._map.container, this._html);
        z.on(e, "mouseup", function(gf) {
          if (gf.button == 2) {
            co(gf)
          }
        });
        z.on(e, "contextmenu", co);
        e.style.display = "none"
      },
      getDrawPoint: function(gg, gj, gh) {
        gg = window.event || gg;
        var i = gg.offsetX || gg.layerX || 0;
        var gi = parseInt(gg.offsetY) || parseInt(gg.layerY) || 0;
        var gf = gg.target || gg.srcElement;
        if (gf != df.getDom(this._map) && gj == true) {
          while (gf && gf != this._map.container) {
            if (!(gf.clientWidth == 0 && gf.clientHeight == 0 && gf.offsetParent && gf.offsetParent.nodeName.toLowerCase() == "td")) {
              i += gf.offsetLeft;
              gi += gf.offsetTop
            }
            gf = gf.offsetParent
          }
        }
        if (gf != df.getDom(this._map) && gf != this._map.container) {
          return
        }
        if (typeof i === "undefined" || typeof gi === "undefined") {
          return
        }
        if (isNaN(i) || isNaN(gi)) {
          return
        }
        if (gh) {
          i = i + gh.x;
          gi = gi + gh.y
        }
        return this._map.pixelToPointIn(new dh(i,gi))
      },
      hide: function() {
        if (!this._map) {
          return
        }
        this.inUse = false;
        if (this._maskElement) {
          this._maskElement.style.display = "none"
        }
      },
      getDom: function(e) {
        if (!this._maskElement) {
          this._createMask(e)
        }
        return this._maskElement
      },
      setCursor: function(e) {
        this._cursor = e || "default";
        if (this._maskElement) {
          this._maskElement.style.cursor = this._cursor
        }
      }
    };
    function aS() {
      this._type = "overlay"
    }
    aS.inherits(z.BaseClass, "Overlay");
    aS.getZIndex = function(i, e) {
      i = i * 1;
      if (!i) {
        return 0
      }
      if (e) {
        i = dl.convertMC2LL(new fU(0,i)).lat
      }
      return (i * -100000) << 1
    }
    ;
    z.extend(aS.prototype, {
      _i: function(e) {
        this._map = e;
        if (!this.domElement && bm(this.initialize)) {
          this.domElement = this.initialize(e);
          if (this.domElement) {
            this.domElement.style.WebkitUserSelect = "none"
          }
        }
        this.draw()
      },
      initialize: function(e) {
        throw "initialize方法未实现"
      },
      draw: function() {
        throw "draw方法未实现"
      },
      remove: function() {
        this._map = null;
        if (this.domElement && this.domElement.parentNode) {
          this.domElement.parentNode.removeChild(this.domElement)
        }
        this.domElement = null;
        this.dispatchEvent(new aL("onremove"))
      },
      hide: function() {
        this._visible = false;
        z.hide(this.domElement)
      },
      show: function() {
        this._visible = true;
        z.show(this.domElement)
      },
      getMap: function() {
        return this._map
      },
      dispose: function() {
        z.BaseClass.prototype.decontrol.call(this)
      }
    });
    function ca() {
      z.BaseClass.call(this);
      aS.call(this);
      this._visible = true;
      this._visibleInternal = true;
      this.infoWindow = null;
      this._dblclickTime = 0
    }
    ca.inherits(aS, "OverlayInternal");
    z.extend(ca.prototype, {
      initialize: function(e) {
        this.map = e;
        z.BaseClass.call(this, this.hashCode);
        return null
      },
      draw: function() {},
      remove: function() {
        this.map = null;
        this.decontrol();
        aS.prototype.remove.call(this)
      },
      hide: function() {
        this._visible = false
      },
      show: function() {
        this._visible = true
      },
      getDom: function() {
        return this.domElement
      },
      getContainer: function() {
        return this.domElement
      },
      setClassName: function() {},
      setConfig: function(i) {
        if (!i) {
          return
        }
        for (var e in i) {
          if (i.hasOwnProperty(e)) {
            this._config[e] = i[e]
          }
        }
      },
      getPoint: function(gf, gg) {
        if (!gf) {
          return this.point
        } else {
          var e = gg ? gg.width : 0;
          var gh = gg ? gg.height : 0;
          if (this.map) {
            var i = this.map.pointToPixelIn(this.point);
            if (this._config && this._config.offset) {
              i.x = i.x + this._config.offset.width + e;
              i.y = i.y + this._config.offset.height + gh
            } else {
              i.x = i.x + e;
              i.y = i.y + gh
            }
            return this.map.pixelToPointIn(i)
          }
        }
      },
      setZIndex: function(e) {
        this.zIndex = e
      },
      isVisible: function() {
        if (!this.domElement) {
          return false
        }
        return !!this._visible
      },
      enableMassClear: function() {
        this._config.enableMassClear = true
      },
      disableMassClear: function() {
        this._config.enableMassClear = false
      },
      showInternal: function() {
        this._visibleInternal = true
      },
      hideInternal: function(e) {
        this._visibleInternal = false;
        this._hideInternalReason = e
      }
    });
    function dQ(e) {
      this.map = e;
      this._overlays = {};
      this._overlayArray = [];
      this._customOverlays = [];
      e._overlays = this._overlays;
      e._overlayArray = this._overlayArray;
      e._customOverlays = this._customOverlays;
      this._zoomingOrMoving = false;
      this._init()
    }
    dQ.prototype._init = function() {
      if (this.map._renderType !== "webgl") {
        this._createOverlayContainers()
      } else {
        this._createWebGLOverlayContainers()
      }
      this._bind()
    }
    ;
    dQ.prototype._createOverlayContainers = function() {
      var e = this.map;
      e.temp.overlayDiv = e.overlayDiv = this._createOverlayDiv(e.platform, 200);
      e.temp.overlayDivEx = e.overlayDivEx = this._createOverlayDiv(e.platform, 50);
      e._panes.floatPane = this._createOverlayDiv(e.temp.overlayDiv, 800);
      e._panes.markerMouseTarget = this._createOverlayDiv(e.temp.overlayDiv, 700);
      e._panes.floatShadow = this._createOverlayDiv(e.temp.overlayDiv, 600);
      e._panes.labelPane = this._createOverlayDiv(e.temp.overlayDiv, 500);
      e._panes.markerPane = this._createOverlayDiv(e.temp.overlayDiv, 400);
      if (e.isCanvasMap()) {
        e._panes.mapPane = this._createOverlayDiv(e.temp.overlayDivEx, 50)
      } else {
        e._panes.mapPane = this._createOverlayDiv(e.temp.overlayDiv, 200)
      }
    }
    ;
    dQ.prototype._createWebGLOverlayContainers = function() {
      var e = this.map;
      e.temp.overlayDiv = e.overlayDiv = this._createOverlayDiv(e.platform, 200);
      e._panes.floatPane = this._createOverlayDiv(e.temp.overlayDiv, 800);
      e._panes.markerMouseTarget = this._createOverlayDiv(e.temp.overlayDiv, 700);
      e._panes.floatShadow = this._createOverlayDiv(e.temp.overlayDiv, 600);
      e._panes.labelPane = this._createOverlayDiv(e.temp.overlayDiv, 500);
      e._panes.markerPane = this._createOverlayDiv(e.temp.overlayDiv, 400)
    }
    ;
    dQ.prototype._createOverlayDiv = function(e, gg) {
      var gf = L("div");
      var i = gf.style;
      i.position = "absolute";
      i.top = i.left = i.width = i.height = "0";
      i.zIndex = gg;
      e.appendChild(gf);
      return gf
    }
    ;
    dQ.prototype._bind = function() {
      var gh = this.map;
      var gg = this;
      function i(gj) {
        gg.draw(gj)
      }
      if (gh._renderType !== "webgl") {
        gh.addEventListener("load", i);
        gh.addEventListener("moveend", i);
        gh.addEventListener("resize", i);
        gh.addEventListener("zoomend", i);
        gh.addEventListener("zooming_inner", i)
      } else {
        gh.on("update", i)
      }
      gh.addEventListener("zoomend", function(gj) {
        if (this.mapType === "B_EARTH_MAP") {
          if (this._earth.getZoom() < this._earth.zoomForNight + 1) {
            this.temp.overlayDiv.style.display = "none";
            if (this.temp.overlayDivEx) {
              this.temp.overlayDivEx.style.display = "none"
            }
          } else {
            if (this.temp.overlayDiv.style.display === "none") {
              this.temp.overlayDiv.style.display = "";
              if (this.temp.overlayDivEx) {
                this.temp.overlayDivEx.style.display = ""
              }
              if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
                this.temp.infoWin.redraw()
              }
            }
          }
        }
      });
      gh.addEventListener("oncenterandzoom", function(gj) {
        gg.draw(gj);
        if (this.mapType === "B_EARTH_MAP") {
          if (this._earth.getZoom() < this._earth.zoomForNight + 1) {
            this.temp.overlayDiv.style.display = "none";
            if (this.temp.overlayDivEx) {
              this.temp.overlayDivEx.style.display = "none"
            }
          } else {
            if (this.temp.overlayDiv.style.display === "none") {
              this.temp.overlayDiv.style.display = "";
              if (this.temp.overlayDivEx) {
                this.temp.overlayDivEx.style.display = ""
              }
              if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
                this.temp.infoWin.redraw()
              }
            }
          }
        }
      });
      gh.addEventListener("maptypechange", function(gj) {
        if (this.mapType === "B_EARTH_MAP") {
          if (this._panes.mapPane) {
            this._panes.mapPane.style.display = "none"
          }
          if (this._earth.getZoom() < this._earth.zoomForNight + 1) {
            this.temp.overlayDiv.style.display = "none";
            if (this.temp.overlayDivEx) {
              this.temp.overlayDivEx.style.display = "none"
            }
          } else {
            if (this.temp.overlayDiv.style.display === "none") {
              this.temp.overlayDiv.style.display = "";
              if (this.temp.overlayDivEx) {
                this.temp.overlayDivEx.style.display = ""
              }
              if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
                this.temp.infoWin.redraw()
              }
            }
          }
          if (this._panes.markerPane) {
            this._panes.markerPane.style.display = "none"
          }
        } else {
          if (this._panes.mapPane) {
            this._panes.mapPane.style.display = ""
          }
          if (this._panes.markerPane) {
            this._panes.markerPane.style.display = ""
          }
          if (this.temp.overlayDiv.style.display === "none") {
            this.temp.overlayDiv.style.display = "";
            if (this.temp.overlayDivEx) {
              this.temp.overlayDivEx.style.display = ""
            }
            if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
              this.temp.infoWin.redraw()
            }
          }
        }
        gg.draw(gj)
      });
      gh.on("earthstatuschange", function gi(gj) {
        gg.draw(gj)
      });
      gh.addEventListener("addoverlay", function(gn) {
        var gk = gn.target;
        if (gk instanceof ca) {
          if (!gg._overlays[gk.hashCode]) {
            gg._overlays[gk.hashCode] = gk;
            gg._overlayArray.push(gk)
          }
        } else {
          var gm = false;
          for (var gl = 0, gj = gg._customOverlays.length; gl < gj; gl++) {
            if (gg._customOverlays[gl] === gk) {
              gm = true;
              break
            }
          }
          if (!gm) {
            gg._customOverlays.push(gk)
          }
        }
      });
      gh.addEventListener("removeoverlay", function(gm) {
        var gk = gm.target;
        if (gk instanceof ca) {
          delete gg._overlays[gk.hashCode];
          for (var gl = 0; gl < gg._overlayArray.length; gl++) {
            if (gg._overlayArray[gl] === gk) {
              gg._overlayArray.splice(gl, 1);
              break
            }
          }
        } else {
          for (var gl = 0, gj = gg._customOverlays.length; gl < gj; gl++) {
            if (gg._customOverlays[gl] === gk) {
              gg._customOverlays.splice(gl, 1);
              break
            }
          }
        }
      });
      gh.addEventListener("clearoverlays", function(gl) {
        this.closeInfoWindow();
        this.closeSimpleInfoWindow();
        for (var gk in gg._overlays) {
          if (gg._overlays[gk]._config.enableMassClear) {
            this.removeOverlay(gg._overlays[gk])
          }
        }
        for (var gj = gg._customOverlays.length - 1; gj > 0; gj--) {
          if (gg._customOverlays[gj].enableMassClear !== false) {
            this.removeOverlay(gg._customOverlays[gj]);
            gg._customOverlays.splice(gj, 1)
          }
        }
      });
      gh.addEventListener("infowindowopen", function(gk) {
        var gj = this.infoWindow;
        if (gj) {
          z.hide(gj.popDom);
          z.hide(gj.shadowDom)
        }
      });
      function gf() {
        if (this.getMapType() === "B_EARTH_MAP" || this._renderType === "webgl") {
          if (gg._zoomingOrMoving === false) {
            this._panes.markerMouseTarget.style.display = "none";
            gg._zoomingOrMoving = true
          }
        }
      }
      function e(gl) {
        if (this.getMapType() === "B_EARTH_MAP" || this._renderType === "webgl") {
          if (gg._zoomingOrMoving === true) {
            this._panes.markerMouseTarget.style.display = "";
            gg._zoomingOrMoving = false;
            for (var gk = 0; gk < gg._overlayArray.length; gk++) {
              var gj = gg._overlayArray[gk];
              if (gj instanceof cz === true) {
                gj.draw(gl)
              }
            }
          }
        }
      }
      gh.addEventListener("movestart", gf);
      gh.addEventListener("moveend", e);
      gh.addEventListener("zoomstart", gf);
      gh.addEventListener("zoomend", e);
      gh.addEventListener("animation_start", gf);
      gh.addEventListener("animation_end", e);
      gh.addEventListener("displayoptions_changed", function(gj) {
        if (this._displayOptions.overlay === false) {
          this.temp.overlayDiv.style.display = "none"
        } else {
          this.temp.overlayDiv.style.display = ""
        }
      })
    }
    ;
    dQ.prototype.draw = function(gj) {
      gj = gj || {};
      if (this.map.getMapType() === "B_EARTH_MAP") {
        for (var gh = 0; gh < this._overlayArray.length; gh++) {
          var gf = this._overlayArray[gh];
          if (gf instanceof u === true) {
            continue
          }
          if (this._zoomingOrMoving) {
            if (gf instanceof cz === true) {
              continue
            }
          }
          gf.draw(gj)
        }
      } else {
        for (var gh = 0, gg = this._overlayArray.length; gh < gg; gh++) {
          var gf = this._overlayArray[gh];
          if (this._zoomingOrMoving && gf instanceof cz === true) {
            continue
          }
          gf.draw(gj)
        }
      }
      z.each(this._customOverlays, function(e) {
        e.draw(gj)
      });
      if (this.map.temp.infoWin) {
        this.map.temp.infoWin.setPosition(gj.center, gj.zoom)
      }
      if (this.map.getMapType() !== "B_EARTH_MAP" && this.map._renderType !== "webgl") {
        if (aT.DrawerSelector) {
          var gi = aT.DrawerSelector.getDrawer(this.map);
          gi.setPalette()
        }
      }
    }
    ;
    aT.register(function(e) {
      e._overlayMgr = new dQ(e)
    });
    function u(e) {
      ca.call(this);
      this._config = {
        strokeColor: "#000",
        strokeWeight: 2,
        strokeOpacity: 1,
        strokeStyle: "solid",
        strokeLineCap: "round",
        strokeLineJoin: "round",
        enableMassClear: true,
        getParseTolerance: null,
        getParseCacheIndex: null,
        enableParse: true,
        enableEditing: false,
        mouseOverTolerance: 15,
        geodesic: false,
        clip: true,
        texture: null
      };
      this.setConfig(e);
      if (this._config.strokeOpacity < 0 || this._config.strokeOpacity > 1) {
        this._config.strokeOpacity = 0.65
      }
      if (this._config.fillOpacity < 0 || this._config.fillOpacity > 1) {
        this._config.fillOpacity = 0.65
      }
      if (this._config.strokeStyle !== "solid" && this._config.strokeStyle !== "dashed" && this._config.strokeStyle !== "dotted") {
        this._config.strokeStyle = "solid"
      }
      this.domElement = null;
      this._bounds = new cX();
      this.points = [];
      this.greatCirclePoints = [];
      this._parseCache = [];
      this._holesCache = [];
      this._parseCacheGL = [];
      this._parseCacheGLRaw = [];
      this._areaCacheGL = [];
      this._strokeStyleInfoForGL = [[]];
      this._fillStyleInfoForGL = "";
      this.vertexMarkers = [];
      this._temp = {}
    }
    u.JOININDEX = {
      miter: 0,
      round: 1,
      bevel: 2
    };
    u.CAPINDEX = {
      round: 0,
      butt: 1,
      square: 2
    };
    u.inherits(ca, "Graph");
    u.getGraphPoints = function(i) {
      var e = [];
      if (!i || i.length === 0) {
        return e
      }
      if (typeof i === "string") {
        var gf = i.split(";");
        z.each(gf, function(gh) {
          var gg = gh.split(",");
          e.push(new fU(gg[0],gg[1]))
        })
      }
      if (i.constructor === Array && i.length > 0) {
        e = i
      }
      return e
    }
    ;
    u.parseTolerance = {
      0: [0.09, 0.005, 0.0001, 0.00001],
      1: [9000, 500, 20, 1]
    };
    z.extend(u.prototype, {
      initialize: function(e) {
        this.map = e;
        return null
      },
      draw: function() {},
      setPoints: function(e) {
        this._clearCache();
        this.points = u.getGraphPoints(e).slice(0);
        this._calcBounds()
      },
      setPathIn: function(e) {
        this.setPoints(e)
      },
      _calcBounds: function() {
        if (!this.points) {
          return
        }
        var e = this;
        e._bounds = new cX();
        if (!this.hasMultipleParts) {
          z.each(this.points, function(i) {
            e._bounds.extend(i)
          })
        } else {
          z.each(this.points, function(i) {
            z.each(i, function(gf) {
              e._bounds.extend(gf)
            })
          })
        }
      },
      getPoints: function() {
        return this.points
      },
      getPathIn: function() {
        return this.points
      },
      setPointAt: function(i, e) {
        if (!e || !this.points[i]) {
          return
        }
        this._clearCache();
        this.points[i] = new fU(e.lng,e.lat);
        this._calcBounds()
      },
      setOptions: function(i) {
        i = i || {};
        for (var e in i) {
          if (i.hasOwnProperty(e)) {
            this._config[e] = i[e]
          }
        }
      },
      setStrokeColor: function(e) {
        this._config.strokeColor = e
      },
      getStrokeColor: function() {
        return this._config.strokeColor
      },
      setStrokeLineCap: function(e) {
        this._config.strokeLineCap = e
      },
      getStrokeLineCap: function() {
        return this._config.strokeLineCap
      },
      setStrokeLineJoin: function(e) {
        this._config.strokeLineJoin = e
      },
      getStrokeLineJoin: function() {
        return this._config.strokeLineJoin
      },
      setStrokeWeight: function(e) {
        if (e > 0) {
          this._config.strokeWeight = e
        }
      },
      getStrokeWeight: function() {
        return this._config.strokeWeight
      },
      setStrokeOpacity: function(e) {
        if (!e || e > 1 || e < 0) {
          return
        }
        this._config.strokeOpacity = e
      },
      getStrokeOpacity: function() {
        return this._config.strokeOpacity
      },
      setFillOpacity: function(e) {
        if (e > 1 || e < 0) {
          return
        }
        this._config.fillOpacity = e
      },
      getFillOpacity: function() {
        return this._config.fillOpacity
      },
      setStrokeStyle: function(e) {
        if (e !== "solid" && e !== "dashed" && e !== "dotted") {
          return
        }
        this._config.strokeStyle = e
      },
      getStrokeStyle: function() {
        return this._config.strokeStyle
      },
      setFillColor: function(e) {
        this._config.fillColor = e || ""
      },
      getFillColor: function() {
        return this._config.fillColor
      },
      getBounds: function() {
        this._bounds.setMinMax();
        return this._bounds
      },
      remove: function() {
        if (this.map) {
          this.map.removeEventListener("onmousemove", this._graphMouseEvent)
        }
        ca.prototype.remove.call(this);
        this._clearCache();
        var e = new aL("onlineupdate");
        e.action = "remove";
        e.overlay = this;
        this.fire(e)
      },
      enableEditing: function() {
        this._config.enableEditing = true
      },
      disableEditing: function() {
        this._config.enableEditing = false
      },
      getParsedPoints: function() {
        var e = this._simplification(this.points);
        if (this.hasMultipleParts) {
          return e
        }
        return [e]
      },
      _simplification: function(gk) {
        var e = this.map;
        var gj = this.getParseCacheIndex(e.getZoom());
        var gm;
        if (this._parseCache[gj]) {
          gm = this._parseCache[gj]
        } else {
          var gh = gk;
          if (this.greatCirclePoints.length > 0) {
            gh = this.greatCirclePoints
          }
          var gi = this.getParseTolerance(e.getZoom(), e.config.coordType);
          if (!this.hasMultipleParts) {
            var gl = f4(gh, gi)
          } else {
            var gl = [];
            for (var gf = 0; gf < gh.length; gf++) {
              var gg = f4(gh[gf], gi);
              gl.push(gg)
            }
          }
          gm = this._parseCache[gj] = gl
        }
        return gm
      },
      _clearCache: function() {
        this._parseCache.length = 0;
        this._parseCacheGL.length = 0;
        this._parseCacheGLRaw.length = 0;
        this._areaCacheGL.length = 0
      }
    });
    if (z.Browser.ie && document.namespaces && !document.namespaces.olv) {
      document.namespaces.add("olv", "urn:schemas-microsoft-com:vml")
    }
    function fF(gi, gg, gf) {
      if (!gi || !gg) {
        return
      }
      this.imageUrl = null;
      this.imageDom = null;
      if (typeof gi === "string") {
        this.imageUrl = gi
      } else {
        this.imageDom = gi;
        if (!this.imageDom.id) {
          this.imageDom.id = aT.getGUID("icon_dom_")
        }
      }
      this.size = gg;
      var gh = new c8(Math.floor(gg.width / 2),Math.floor(gg.height / 2));
      var i = {
        offset: gh,
        imageOffset: new c8(0,0)
      };
      gf = gf || {};
      for (var e in gf) {
        i[e] = gf[e]
      }
      if (gf.anchor) {
        i.offset = gf.anchor
      }
      this.anchor = this.offset = i.offset;
      this.imageOffset = i.imageOffset;
      this.infoWindowOffset = gf.infoWindowOffset || this.offset;
      this.printImageUrl = gf.printImageUrl || "";
      this.imageSize = gf.imageSize;
      this.srcSetObject = {};
      this.setImageSrcset(gf.srcset || gf.srcSet)
    }
    fF.prototype.setImageUrl = function(e) {
      if (!e) {
        return
      }
      this.imageUrl = e;
      this._renderData = null
    }
    ;
    fF.prototype.getCurrentImageUrl = function() {
      if (window.devicePixelRatio > 1 && this.srcSetObject["2x"]) {
        return this.srcSetObject["2x"]
      }
      return this.imageUrl
    }
    ;
    fF.prototype.setPrintImageUrl = function(e) {
      if (!e) {
        return
      }
      this.printImageUrl = e
    }
    ;
    fF.prototype.setSize = function(e) {
      if (!e) {
        return
      }
      this.size = new c8(e.width,e.height);
      this._renderData = null
    }
    ;
    fF.prototype.setOffset = function(e) {
      if (!e) {
        return
      }
      this.anchor = this.offset = new c8(e.width,e.height);
      this._renderData = null
    }
    ;
    fF.prototype.setAnchor = function(e) {
      this.setOffset(e)
    }
    ;
    fF.prototype.setImageOffset = function(e) {
      if (!e) {
        return
      }
      this.imageOffset = new c8(e.width,e.height);
      this._renderData = null
    }
    ;
    fF.prototype.setInfoWindowOffset = function(e) {
      if (!e) {
        return
      }
      this.infoWindowOffset = new c8(e.width,e.height)
    }
    ;
    fF.prototype.setImageSize = function(e) {
      if (!e) {
        return
      }
      this.imageSize = new c8(e.width,e.height)
    }
    ;
    fF.prototype.setImageSrcset = function(gf) {
      var e = "";
      if (!gf) {
        return
      }
      for (var i in gf) {
        if (gf.hasOwnProperty(i)) {
          this.srcSetObject[i] = gf[i];
          e = gf[i] + " " + i + ","
        }
      }
      this.srcSet = e
    }
    ;
    fF.prototype.toString = function() {
      return "Icon"
    }
    ;
    fF.prototype.generateRenderData = function() {
      var i = this.offset;
      var e = this.size;
      var gg = this.imageOffset;
      var gf = [];
      gf.push(-i.width, i.height - e.height, 0);
      gf.push(e.width - i.width, i.height - e.height, 0);
      gf.push(e.width - i.width, i.height, 0);
      gf.push(-i.width, i.height - e.height, 0);
      gf.push(e.width - i.width, i.height, 0);
      gf.push(-i.width, i.height, 0);
      return {
        vertex: gf
      }
    }
    ;
    fF.prototype.getRenderData = function() {
      if (!this._renderData) {
        this._renderData = this.generateRenderData()
      }
      return this._renderData
    }
    ;
    function ac(gf, i) {
      z.BaseClass.call(this);
      this.content = gf;
      this.map = null;
      this._config = {
        width: 0,
        height: 0,
        maxWidth: 600,
        offset: new c8(0,0),
        title: "",
        maxContent: "",
        enableMaximize: false,
        enableAutoPan: true,
        enableCloseOnClick: true,
        margin: [10, 10, 40, 10],
        collisions: [[10, 10], [10, 10], [10, 10], [10, 10]],
        ifMaxScene: false,
        onClosing: function() {
          return true
        }
      };
      this.setConfig(i);
      if (this._config.width != 0) {
        if (this._config.width < 220) {
          this._config.width = 220
        }
        if (this._config.width > 730) {
          this._config.width = 730
        }
      }
      if (this._config.height != 0) {
        if (this._config.height < 60) {
          this._config.height = 60
        }
        if (this._config.height > 650) {
          this._config.height = 650
        }
      }
      if (this._config.maxWidth != 0) {
        if (this._config.maxWidth < 220) {
          this._config.maxWidth = 220
        }
        if (this._config.maxWidth > 730) {
          this._config.maxWidth = 730
        }
      }
      this.isWinMax = false;
      this.IMG_PATH = dW.imgPath;
      this.overlay = null;
      var e = this;
      c9.load("infowindow", function() {
        e._draw()
      })
    }
    ac.inherits(z.BaseClass, "InfoWindow");
    z.extend(ac.prototype, {
      setWidth: function(e) {
        e = e * 1;
        if (!e && e != 0 || isNaN(e) || e < 0) {
          return
        }
        if (e != 0) {
          if (e < 220) {
            e = 220
          }
          if (e > 730) {
            e = 730
          }
        }
        this._config.width = e
      },
      setHeight: function(e) {
        e = e * 1;
        if (!e && e != 0 || isNaN(e) || e < 0) {
          return
        }
        if (e != 0) {
          if (e < 60) {
            e = 60
          }
          if (e > 650) {
            e = 650
          }
        }
        this._config.height = e
      },
      setMaxWidth: function(e) {
        e = e * 1;
        if (!e && e != 0 || isNaN(e) || e < 0) {
          return
        }
        if (e != 0) {
          if (e < 220) {
            e = 220
          }
          if (e > 730) {
            e = 730
          }
        }
        this._config.maxWidth = e
      },
      setTitle: function(e) {
        this._config.title = e || ""
      },
      setContent: function(e) {
        this.content = e || ""
      },
      getContent: function() {
        return this.content
      },
      setMaxContent: function(e) {
        this._config.maxContent = e || ""
      },
      redraw: function() {},
      enableAutoPan: function() {
        this._config.enableAutoPan = true
      },
      disableAutoPan: function() {
        this._config.enableAutoPan = false
      },
      enableCloseOnClick: function() {
        this._config.enableCloseOnClick = true
      },
      disableCloseOnClick: function() {
        this._config.enableCloseOnClick = false
      },
      enableMaximize: function() {
        this._config.enableMaximize = true
      },
      disableMaximize: function() {
        this._config.enableMaximize = false
      },
      show: function() {
        this._visible = true
      },
      hide: function() {
        this._visible = false
      },
      close: function() {
        this.hide()
      },
      dispose: function() {
        z.BaseClass.prototype.decontrol.call(this)
      },
      maximize: function() {
        this.isWinMax = true
      },
      restore: function() {
        this.isWinMax = false
      },
      setConfig: function(i) {
        if (!i) {
          return
        }
        for (var e in i) {
          if (typeof (this._config[e]) == typeof (i[e])) {
            this._config[e] = i[e]
          }
        }
      },
      isVisible: function() {
        return this.isOpen()
      },
      isOpen: function() {
        return false
      },
      getPointIn: function() {
        if (this.overlay && this.overlay.getPoint) {
          return this.overlay.getPoint()
        }
      },
      getTitle: function() {
        return this._config.title || ""
      },
      getPosition: function() {
        return this.latLng;
        var e = this.getPointIn();
        return dl.convertMC2LL(e)
      },
      getPoint: function() {
        var e = this.getPointIn();
        return dl.convertMC2LL(e)
      },
      getOffset: function() {
        return this._config.offset
      },
      dispose: function() {
        z.BaseClass.prototype.decontrol.call(this)
      },
      toString: function() {
        return "InfoWindow"
      }
    });
    cl.prototype.openInfoWindowIn = function(gg, e) {
      if (!gg || gg.toString() != "InfoWindow" || !e || e.toString() != "Point") {
        return
      }
      var i = this.temp;
      if (!i.marker) {
        var gf = new fF(dW.imgPath + "blank.gif",{
          width: 1,
          height: 1
        });
        i.marker = new cz(e,{
          icon: gf,
          width: 1,
          height: 1,
          offset: new c8(0,0),
          infoWindowOffset: new c8(0,0),
          clickable: false
        });
        i.marker._fromMap = 1
      } else {
        i.marker.setPoint(e)
      }
      this.addOverlay(i.marker);
      i.marker.show();
      i.marker.openInfoWindow(gg)
    }
    ;
    cl.prototype.openInfoWindow = function(gf, e) {
      gf.latLng = new ci(e.lat,e.lng);
      var i = dl.convertLL2MC(e);
      this.openInfoWindowIn(gf, i)
    }
    ;
    cl.prototype.closeInfoWindow = function() {
      var e = this.temp.infoWin || this.temp._infoWin;
      if (e && e.overlay) {
        e.overlay.closeInfoWindow()
      }
    }
    ;
    ca.prototype.openInfoWindow = function(e) {
      if (this.map) {
        this.map.closeInfoWindow();
        e._visible = true;
        this.map.temp._infoWin = e;
        e.overlay = this;
        z.BaseClass.call(e, e.hashCode)
      }
    }
    ;
    ca.prototype.closeInfoWindow = function() {
      if (this.map && this.map.temp._infoWin) {
        this.map.temp._infoWin._visible = false;
        this.map.temp._infoWin.decontrol();
        this.map.temp._infoWin = null
      }
    }
    ;
    function at(gf, i) {
      ca.call(this);
      this.content = gf;
      this.map = null;
      this.domElement = null;
      this._config = {
        width: 0,
        offset: new c8(0,0),
        styles: {
          backgroundColor: "#fff",
          border: "1px solid #f00",
          padding: "1px",
          whiteSpace: "nowrap",
          fontSize: "12px",
          zIndex: "80",
          MozUserSelect: "none"
        },
        point: null,
        enableMassClear: true
      };
      i = i || {};
      this.setConfig(i);
      if (this._config.width < 0) {
        this._config.width = 0
      }
      this.point = this._config.point;
      var e = this;
      c9.load("marker", function() {
        e._draw()
      })
    }
    at.inherits(ca, "Label");
    z.extend(at.prototype, {
      setPoint: function(e) {
        if (e && e.toString() === "Point" && !this.getMarker()) {
          this.point = this._config.point = new fU(e.lng,e.lat)
        }
      },
      setContent: function(e) {
        this.content = e
      },
      getContent: function(e) {
        return this.content
      },
      setOpacity: function(e) {
        if (e >= 0 && e <= 1) {
          this._config.opacity = e
        }
      },
      setOffset: function(e) {
        if (!e || e.toString() !== "Size") {
          return
        }
        this._config.offset = new c8(e.width,e.height)
      },
      getOffset: function() {
        return this._config.offset
      },
      setStyle: function(e) {
        e = e || {};
        this._config.styles = z.extend(this._config.styles, e)
      },
      setStyles: function(e) {
        this.setStyle(e)
      },
      setTitle: function(e) {
        this._config.title = e || ""
      },
      getTitle: function() {
        return this._config.title
      },
      setMarker: function(e) {
        if (this._marker && this._marker !== e) {
          this._marker._config.label = null
        }
        this._marker = e;
        if (e) {
          this.point = this._config.point = e.getPoint()
        } else {
          this.point = this._config.point = null
        }
      },
      getMarker: function() {
        return this._marker || null
      },
      getPositionIn: function() {
        return this.getPoint()
      },
    });
    function eC(gf, i) {
      var gg = {};
      for (var e in i) {
        if (i.hasOwnProperty(e)) {
          if (e === "position") {
            gg.point = dl.convertLL2MC(i[e]);
            this.latLng = new ci(i[e]["lat"],i[e]["lng"])
          } else {
            gg[e] = i[e]
          }
        }
      }
      at.call(this, gf, gg)
    }
    eC.inherits(at, "LabelOut");
    z.extend(eC.prototype, {
      toString: function() {
        return "Label"
      },
      setPosition: function(e) {
        this.latLng = new ci(e.lat,e.lng);
        var i = dl.convertLL2MC(e);
        this.setPoint(i)
      },
      getPosition: function() {
        return this.latLng;
        var e = this.getPositionIn();
        return dl.convertMC2LL(e)
      }
    });
    window.BMAP_ANIMATION_DROP = 1;
    window.BMAP_ANIMATION_BOUNCE = 2;
    function cz(e, i) {
      ca.call(this);
      i = i || {};
      this.point = e;
      this._rotation = 0;
      this.map = null;
      this._animation = null;
      this.domElement = null;
      this.iconDom = null;
      this.infoWindowDom = null;
      this.siblingElement = null;
      this.textureCoord = null;
      this.textureCoordGLMap = null;
      this.collisionDetectionFailed = false;
      this._config = {
        offset: new c8(0,0),
        opacity: 1,
        icon: null,
        title: "",
        infoWindow: null,
        label: null,
        baseZIndex: 0,
        clickable: true,
        zIndexFixed: false,
        isTop: false,
        enableMassClear: true,
        enableDragging: false,
        raiseOnDrag: false,
        restrictDraggingArea: false,
        startAnimation: "",
        enableCollisionDetection: false,
        rank: 0,
        enableDraggingMap: false
      };
      this.setConfig(i);
      if (!i.icon) {
        this._config.icon = new fF(dW.imgPath + "marker_red.png",new c8(23,25),{
          offset: new c8(10,25),
          infoWindowOffset: new c8(10,0)
        })
      }
      this._isDragging = false;
      var gf = this;
      c9.load("marker", function() {
        gf._draw()
      })
    }
    cz.TOP_ZINDEX = aS.getZIndex(-90) + 1000000;
    cz.DRAG_ZINDEX = cz.TOP_ZINDEX + 1000000;
    cz._injectMethond = function(e) {
      z.extend(cz.prototype, e)
    }
    ;
    cz.inherits(ca, "Marker");
    z.extend(cz.prototype, {
      toString: function() {
        return "Marker"
      },
      setIcon: function(e) {
        if (e) {
          this._config.icon = e;
          this.textureCoord = this.textureCoordGLMap = null
        }
      },
      getIcon: function() {
        return this._config.icon
      },
      setLabel: function(e) {
        if (!e) {
          return
        }
        this._config.label = e;
        e._config.enableMassClear = this._config.enableMassClear;
        e.setPoint(this.point)
      },
      getLabel: function() {
        return this._config.label
      },
      enableDragging: function() {
        this._config.enableDragging = true
      },
      disableDragging: function() {
        this._config.enableDragging = false
      },
      setPoint: function(e) {
        if (e) {
          this.point = this._config.point = new fU(e.lng,e.lat);
          this.latLng = dl.convertMC2LL(e)
        }
      },
      setPositionIn: function(e) {
        this.setPoint(e)
      },
      getPositionIn: function() {
        return this.getPoint()
      },
      setTop: function(i, e) {
        this._config.isTop = !!i;
        if (i) {
          this._addi = e || 0
        }
      },
      setTitle: function(e) {
        this._config.title = e || ""
      },
      getTitle: function() {
        return this._config.title
      },
      setOffset: function(e) {
        if (e) {
          this._config.offset = e
        }
      },
      getOffset: function() {
        return this._config.offset
      },
      setAnimation: function(e) {
        this._animation = e
      },
      setRank: function(e) {
        this._config.rank = e
      },
      getRank: function() {
        return this._config.rank
      },
      setRotation: function(e) {
        while (e < 0) {
          e += 360
        }
        this._rotation = e % 360
      },
      getRotation: function() {
        return this._rotation
      }
    });
    function al(e, gf) {
      this.latLng = new ci(e.lat,e.lng);
      var i = dl.convertLL2MC(e);
      cz.call(this, i, gf)
    }
    al.inherits(cz, "MarkerOut");
    z.extend(al.prototype, {
      toString: function() {
        return "Marker"
      },
      setPosition: function(e) {
        this.latLng = new ci(e.lat,e.lng);
        var i = dl.convertLL2MC(e);
        this.setPositionIn(i)
      },
      getPosition: function() {
        return this.latLng;
        var e = this.getPositionIn();
        return dl.convertMC2LL(e)
      }
    });
    function a(gf, e) {
      u.call(this, e);
      this.setPoints(gf);
      var i = this;
      c9.load("poly", function() {
        i._draw()
      })
    }
    a.inherits(u, "Polyline");
    function Z(gh, e) {
      if (!gh || gh.length === 0) {
        return
      }
      var gg = [];
      for (var gf = 0; gf < gh.length; gf++) {
        gg[gf] = dl.convertLL2MC(gh[gf])
      }
      a.call(this, gg, e)
    }
    Z.inherits(a, "PolylineOut");
    z.extend(Z.prototype, {
      toString: function() {
        return "Polyline"
      },
      setPath: function(gg) {
        if (!gg || gg.length === 0) {
          return
        }
        var gf = [];
        for (var e = 0; e < gg.length; e++) {
          gf[e] = dl.convertLL2MC(gg[e])
        }
        this.setPathIn(gf)
      },
      getPath: function() {
        var e = this.getPathIn();
        if (!e || e.length === 0) {
          return []
        }
        var gg = [];
        for (var gf = 0; gf < e.length; gf++) {
          gg[gf] = dl.convertMC2LL(e[gf])
        }
        return gg
      }
    });
    function ee(e, gf) {
      u.call(this, gf);
      this._normalizedBounds = new cX();
      this.setPoints(e);
      var i = this;
      c9.load("poly", function() {
        i._draw()
      })
    }
    ee.inherits(a, "PolylineMultipart");
    z.extend(ee.prototype, {
      setPoints: function(e) {
        if (!e) {
          return
        }
        this._clearCache();
        this.points = this._unifyArgs(e);
        this._calcBounds()
      },
      _unifyArgs: function(gf) {
        var e = [];
        var i = [];
        if (gf.constructor === Array) {
          if (gf[0].constructor === fU) {
            i.push(gf)
          } else {
            i = gf
          }
        } else {
          if (typeof gf === "string") {
            i.push(gf)
          }
        }
        z.each(i, function(gg) {
          e.push(u.getGraphPoints(gg))
        });
        return e
      },
      setPointAt: function(i, e, gf) {
        gf = gf || 0;
        if (!e || !this.points[gf] || !this.points[gf][i]) {
          return
        }
        this._clearCache();
        this.points[gf][i] = new fU(e.lng,e.lat);
        this._calcBounds()
      },
      getBounds: function(e) {
        if (!e) {
          this._bounds.setMinMax();
          return this._bounds
        }
        this._normalizedBounds.setMinMax();
        return this._normalizedBounds
      },
      _calcBounds: function() {
        if (!this.points) {
          return
        }
        var e = this;
        e._bounds.setNorthEast(null);
        e._bounds.setSouthWest(null);
        if (e.greatCirclePoints && e.greatCirclePoints.length > 0) {
          z.each(e.greatCirclePoints, function(i) {
            e._bounds.extend(i)
          })
        } else {
          z.each(e.points, function(i) {
            z.each(i, function(gf) {
              e._bounds.extend(gf)
            })
          })
        }
        e._normalizedBounds.setSouthWest(e._bounds.getSouthWest());
        e._normalizedBounds.setNorthEast(e._bounds.getNorthEast());
        if (e._normalizedBounds.sw.lng < -cl.WORLD_SIZE_MC_HALF || e._normalizedBounds.ne.lng > cl.WORLD_SIZE_MC_HALF) {
          e._normalizedBounds.sw.lng = -cl.WORLD_SIZE_MC_HALF;
          e._normalizedBounds.ne.lng = cl.WORLD_SIZE_MC_HALF
        }
      }
    });
    function aw(gf, e) {
      u.call(this, e);
      e = e || {};
      if (typeof e.fillOpacity === "number") {
        this._config.fillOpacity = e.fillOpacity
      } else {
        this._config.fillOpacity = 0.6
      }
      es(this._config.fillOpacity, 0, 1);
      if (e.fillColor === "") {
        this._config.fillColor = ""
      } else {
        this._config.fillColor = e.fillColor ? e.fillColor : "#fff"
      }
      this._parseFillCacheWebGL = [];
      this.setPoints(gf, e);
      var i = this;
      c9.load("poly", function() {
        i._draw()
      })
    }
    aw.inherits(u, "Polygon");
    z.extend(aw.prototype, {
      setPoints: function(gi) {
        var gg = [];
        if (typeof gi === "string" || gi[0]instanceof fU || this instanceof eR || gi.length === 0) {
          var e = this._processSinglePointArray(gi);
          this._userPoints = e.userPoints;
          gg = e.innerPoints;
          this.hasMultipleParts = false
        } else {
          this._userPoints = [];
          for (var gh = 0; gh < gi.length; gh++) {
            var gf = this._processSinglePointArray(gi[gh]);
            this._userPoints.push(gf.userPoints);
            gg.push(gf.innerPoints)
          }
          this.hasMultipleParts = true
        }
        u.prototype.setPoints.call(this, gg)
      },
      setPathIn: function(e) {
        this.setPoints(e)
      },
      _processSinglePointArray: function(e) {
        var i = u.getGraphPoints(e).slice(0);
        innerPoints = i.slice(0);
        if (innerPoints.length > 1 && !innerPoints[0].equals(innerPoints[innerPoints.length - 1])) {
          innerPoints.push(new fU(innerPoints[0].lng,innerPoints[0].lat))
        }
        return {
          userPoints: i,
          innerPoints: innerPoints
        }
      },
      setPointAt: function(i, e) {
        if (!this._userPoints[i]) {
          return
        }
        this._userPoints[i] = new fU(e.lng,e.lat);
        this.points[i] = new fU(e.lng,e.lat);
        if (i === 0 && !this.points[0].equals(this.points[this.points.length - 1])) {
          this.points[this.points.length - 1] = new fU(e.lng,e.lat)
        }
        this._calcBounds()
      },
      getPoints: function() {
        var e = this._userPoints;
        if (e.length === 0) {
          e = this.points
        }
        return e
      },
      getPathIn: function() {
        return this.getPoints()
      }
    });
    function fA(gh, e) {
      if (!gh || gh.length === 0) {
        return
      }
      var gg = [];
      for (var gf = 0; gf < gh.length; gf++) {
        gg[gf] = dl.convertLL2MC(gh[gf])
      }
      aw.call(this, gg, e)
    }
    fA.inherits(aw, "PolygonOut");
    z.extend(fA.prototype, {
      toString: function() {
        return "Polygon"
      },
      setPath: function(gg) {
        if (!gg || gg.length === 0) {
          return
        }
        var gf = [];
        for (var e = 0; e < gg.length; e++) {
          gf[e] = dl.convertLL2MC(gg[e])
        }
        this.setPathIn(gf)
      },
      getPath: function() {
        var e = this.getPathIn();
        if (!e || e.length === 0) {
          return []
        }
        var gg = [];
        for (var gf = 0; gf < e.length; gf++) {
          gg[gf] = dl.convertMC2LL(e[gf])
        }
        return gg
      }
    });
    function eR(i, e, gf) {
      this.point = i;
      this.radius = Math.abs(e);
      aw.call(this, [], gf)
    }
    eR.parseTolerance = {
      0: [0.01, 0.0001, 0.00001, 0.000004],
      1: [1000, 10, 1, 0.4]
    };
    eR.inherits(aw, "Circle");
    z.extend(eR.prototype, {
      initialize: function(e) {
        this.map = e;
        this.points = this._getPerimeterPoints(this.point, this.radius);
        this._calcBounds();
        return null
      },
      getPoint: function() {
        return this.point
      },
      setPoint: function(e) {
        if (!e) {
          return
        }
        this.point = e
      },
      setCenterIn: function(e) {
        var i = arguments[1];
        this.setPoint(e, i)
      },
      setRadius: function(e) {
        this.radius = Math.abs(e)
      },
      getCenterIn: function() {
        return this.point
      },
      getRadius: function() {
        return this.radius
      },
      _getPerimeterPoints: function(e, gn) {
        if (!e || !gn || !this.map) {
          return []
        }
        var gf = this.map;
        var gk = e.lng;
        var gi = e.lat;
        var gt = dl.convertMC2LL(e);
        gk = gt.lng;
        gi = gt.lat;
        var gu = [];
        var gp = gn / dl.EARTHRADIUS;
        var gm = (Math.PI / 180) * gi;
        var gs = (Math.PI / 180) * gk;
        for (var gl = 0; gl < 360; gl += 9) {
          var gj = (Math.PI / 180) * gl;
          var gq = Math.asin(Math.sin(gm) * Math.cos(gp) + Math.cos(gm) * Math.sin(gp) * Math.cos(gj));
          var go = Math.atan2(Math.sin(gj) * Math.sin(gp) * Math.cos(gm), Math.cos(gp) - Math.sin(gm) * Math.sin(gq));
          var gr = ((gs - go + Math.PI) % (2 * Math.PI)) - Math.PI;
          var gh = new ci(gq * (180 / Math.PI),gr * (180 / Math.PI));
          gu.push(dl.convertLL2MC(gh))
        }
        var gg = gu[0];
        gu.push(new fU(gg.lng,gg.lat));
        if (gg) {
          this._radiusMercator = Math.sqrt(Math.pow(gg.lng - this.point.lng, 2) + Math.pow(gg.lat - this.point.lat, 2))
        } else {
          this._radiusMercator = this.radius
        }
        return gu
      }
    });
    function cN(i, e, gg) {
      this.latLng = new ci(i.lat,i.lng);
      var gf = dl.convertLL2MC(i);
      eR.call(this, gf, e, gg)
    }
    cN.inherits(eR, "CircleOut");
    z.extend(cN.prototype, {
      toString: function() {
        return "Circle"
      },
      setCenter: function(e) {
        this.latLng = new ci(e.lat,e.lng);
        var i = dl.convertLL2MC(e);
        this.setCenterIn(i)
      },
      getCenter: function() {
        return this.latLng;
        var e = this.getCenterIn();
        return dl.convertMC2LL(e)
      }
    });
    var a5 = {};
    function f6(gf, i) {
      z.BaseClass.call(this);
      this.content = gf;
      this.map = null;
      this._config = {
        width: 0,
        height: 0,
        maxWidth: 600,
        offset: new c8(0,0),
        title: "",
        maxContent: "",
        enableMaximize: false,
        enableAutoPan: true,
        enableCloseOnClick: true,
        margin: [10, 10, 40, 10],
        collisions: [[10, 10], [10, 10], [10, 10], [10, 10]],
        ifMaxScene: false,
        onClosing: function() {
          return true
        }
      };
      this.setConfig(i);
      if (this._config.width < 50) {
        this._config.width = 50
      }
      if (this._config.width > 730) {
        this._config.width = 730
      }
      if (this._config.height != 0) {
        if (this._config.height < 50) {
          this._config.height = 50
        }
        if (this._config.height > 650) {
          this._config.height = 650
        }
      }
      if (this._config.maxWidth !== 0) {
        if (this._config.maxWidth < 50) {
          this._config.maxWidth = 50
        }
        if (this._config.maxWidth > 730) {
          this._config.maxWidth = 730
        }
      }
      this.isWinMax = false;
      this.IMG_PATH = dW.imgPath;
      this.overlay = null;
      var e = this;
      c9.load("simpleInfowindow", function() {
        e._draw()
      })
    }
    f6.inherits(z.BaseClass, "SimpleInfoWindow");
    z.extend(f6.prototype, {
      setWidth: function(e) {
        e = e * 1;
        if (!e && e != 0 || isNaN(e) || e < 0) {
          return
        }
        if (e != 0) {
          if (e < 50) {
            e = 50
          }
          if (e > 730) {
            e = 730
          }
        }
        this._config.width = e
      },
      setHeight: function(e) {
        e = e * 1;
        e -= 10;
        if (!e && e != 0 || isNaN(e) || e < 0) {
          return
        }
        if (e != 0) {
          if (e < 50) {
            e = 50
          }
          if (e > 650) {
            e = 650
          }
        }
        this._config.height = e
      },
      setMaxWidth: function(e) {
        e = e * 1;
        if (!e && e != 0 || isNaN(e) || e < 0) {
          return
        }
        if (e != 0) {
          if (e < 50) {
            e = 50
          }
          if (e > 730) {
            e = 730
          }
        }
        this._config.maxWidth = e
      },
      setTitle: function(e) {
        this._config.title = e || ""
      },
      setContent: function(e) {
        this.content = e || ""
      },
      setMaxContent: function(e) {
        this._config.maxContent = e || ""
      },
      redraw: function() {},
      enableAutoPan: function() {
        this._config.enableAutoPan = true
      },
      disableAutoPan: function() {
        this._config.enableAutoPan = false
      },
      enableCloseOnClick: function() {
        this._config.enableCloseOnClick = true
      },
      disableCloseOnClick: function() {
        this._config.enableCloseOnClick = false
      },
      enableMaximize: function() {
        this._config.enableMaximize = true
      },
      disableMaximize: function() {
        this._config.enableMaximize = false
      },
      show: function() {
        this._visible = true
      },
      hide: function() {
        this._visible = false
      },
      close: function() {
        this.hide()
      },
      dispose: function() {
        z.BaseClass.prototype.decontrol.call(this)
      },
      maximize: function() {
        this.isWinMax = true
      },
      restore: function() {
        this.isWinMax = false
      },
      setConfig: function(i) {
        if (!i) {
          return
        }
        for (var e in i) {
          if (typeof (this._config[e]) == typeof (i[e])) {
            this._config[e] = i[e]
          }
        }
      },
      isVisible: function() {
        return this.isOpen()
      },
      isOpen: function() {
        return false
      },
      getPoint: function() {
        if (this.overlay && this.overlay.getPoint) {
          return this.overlay.getPoint()
        }
      },
      getOffset: function() {
        return this._config.offset
      },
      dispose: function() {
        z.BaseClass.prototype.decontrol.call(this)
      },
      toString: function() {
        return "SimpleInfoWindow"
      }
    });
    cl.prototype.openSimpleInfoWindow = function(gg, e) {
      if (!gg || gg.toString() != "SimpleInfoWindow" || !e || e.toString() != "Point") {
        return
      }
      var i = this.temp;
      if (!i.marker) {
        var gf = new fF(dW.imgPath + "blank.gif",{
          width: 1,
          height: 1
        });
        i.marker = new cz(e,{
          icon: gf,
          width: 1,
          height: 1,
          offset: new c8(0,0),
          infoWindowOffset: new c8(0,0),
          clickable: false
        });
        i.marker._fromMap = 1
      } else {
        i.marker.setPoint(e)
      }
      this.addOverlay(i.marker);
      i.marker.show();
      i.marker.openSimpleInfoWindow(gg)
    }
    ;
    cl.prototype.closeSimpleInfoWindow = function() {
      var e = this.temp.infoWin || this.temp._infoWin;
      if (e && e.overlay) {
        e.overlay.closeSimpleInfoWindow()
      }
    }
    ;
    ca.prototype.openSimpleInfoWindow = function(e) {
      if (this.map) {
        this.map.closeSimpleInfoWindow();
        e._visible = true;
        this.map.temp._infoWin = e;
        e.overlay = this;
        z.BaseClass.call(e, e.hashCode)
      }
    }
    ;
    ca.prototype.closeSimpleInfoWindow = function() {
      if (this.map && this.map.temp._infoWin) {
        this.map.temp._infoWin._visible = false;
        this.map.temp._infoWin.decontrol();
        this.map.temp._infoWin = null
      }
    }
    ;
    function c0(gf, e) {
      if (arguments.length === 0) {
        return
      }
      ca.apply(this, arguments);
      e = e || {};
      this._config = {
        bounds: gf,
        opacity: e.opacity || 1,
        imageURL: e.imageURL || "",
        displayOnMinLevel: e.displayOnMinLevel || 1,
        enableMassClear: e.enableMassClear === false ? false : true,
        displayOnMaxLevel: e.displayOnMaxLevel || 19,
        stretch: e.stretch || false
      };
      if (e.opacity === 0) {
        this._config.opacity = 0
      }
      var i = this;
      c9.load("groundoverlay", function() {
        i._draw()
      })
    }
    c0.inherits(ca, "GroundOverlay");
    z.extend(c0.prototype, {
      setBounds: function(e) {
        this._config.bounds = e
      },
      getBounds: function() {
        return this._config.bounds
      },
      setOpacity: function(e) {
        this._config.opacity = e
      },
      getOpacity: function() {
        return this._config.opacity
      },
      setImageURL: function(e) {
        this._config.imageURL = e
      },
      getImageURL: function() {
        return this._config.imageURL
      },
      setDisplayOnMinLevel: function(e) {
        this._config.displayOnMinLevel = e
      },
      getDisplayOnMinLevel: function() {
        return this._config.displayOnMinLevel
      },
      setDisplayOnMaxLevel: function(e) {
        this._config.displayOnMaxLevel = e
      },
      getDisplayOnMaxLevel: function() {
        return this._config.displayOnMaxLevel
      }
    });
    function dh(e, i) {
      e = isNaN(e) ? 0 : e;
      i = isNaN(i) ? 0 : i;
      this.x = e;
      this.y = i
    }
    dh.prototype.equals = function(e) {
      if (!e) {
        return false
      }
      return e.x === this.x && e.y === this.y
    }
    ;
    dh.prototype.clone = function() {
      return new dh(this.x,this.y)
    }
    ;
    dh.prototype.toString = function() {
      return "Pixel"
    }
    ;
    function c8(i, e) {
      if (typeof i !== "number") {
        this.width = parseFloat(i)
      } else {
        this.width = i
      }
      if (typeof e !== "number") {
        this.height = parseFloat(e)
      } else {
        this.height = e
      }
    }
    c8.prototype.equals = function(e) {
      return !!(e && this.width === e.width && this.height === e.height)
    }
    ;
    c8.prototype.toString = function() {
      return "Size"
    }
    ;
    var bb = {
      B_NORMAL_MAP: {
        tileUrls: dp(dW.tileDomain, dW.rasterTilePath),
        vectorTileUrls: dp(dW.tileDomain, dW.vectorTilePath),
        tileSize: 256,
        baseUnits: 256,
        zoomLevelMin: 3,
        zoomLevelMax: 19,
        minDataZoom: 3,
        maxDataZoom: 19,
        minZoom: 3,
        maxZoom: 19,
        webgl: {
          minZoom: 3,
          maxZoom: 21
        },
        zoomLevelBase: 18,
        errorUrl: dW.imgPath + "bg.png",
        bounds: new cX(new fU(-21364736,-11708041.66),new fU(23855104,12474104.17)),
        imgExtend: "png"
      },
      B_SATELLITE_MAP: {
        tileUrls: ["https://maponline0.bdimg.com/starpic/?qt=satepc&", "https://maponline1.bdimg.com/starpic/?qt=satepc&", "https://maponline2.bdimg.com/starpic/?qt=satepc&", "https://maponline3.bdimg.com/starpic/?qt=satepc&"],
        tileSize: 256,
        baseUnits: 256,
        zoomLevelMin: 3,
        zoomLevelMax: 19,
        minDataZoom: 3,
        maxDataZoom: 19,
        minZoom: 3,
        maxZoom: 19,
        zoomLevelBase: 18,
        errorUrl: dW.imgPath + "bg.png",
        bounds: new cX(new fU(-21364736,-10616832),new fU(23855104,15859712)),
        imgExtend: "png"
      },
      B_STREET_MAP: {
        tileUrls: dp(dW.tileDomain, dW.rasterTilePath),
        tileSize: 256,
        baseUnits: 256,
        zoomLevelMin: 3,
        zoomLevelMax: 19,
        minDataZoom: 3,
        maxDataZoom: 19,
        minZoom: 3,
        maxZoom: 19,
        zoomLevelBase: 18,
        errorUrl: dW.imgPath + "bg.png",
        bounds: new cX(new fU(-21364736,-10616832),new fU(23855104,15859712)),
        imgExtend: "png"
      },
      BMAP_CUSTOM_LAYER: {
        tileUrls: [""],
        tileSize: 256,
        baseUnits: 256,
        zoomLevelMin: 1,
        zoomLevelMax: 19,
        minDataZoom: 3,
        maxDataZoom: 19,
        minZoom: 3,
        maxZoom: 19,
        zoomLevelBase: 18,
        errorUrl: dW.imgPath + "blank.gif",
        bounds: new cX(new fU(-21364736,-10616832),new fU(23855104,15859712)),
        imgExtend: "png"
      },
      B_EARTH_MAP: {
        tileUrls: [""],
        tileSize: 256,
        baseUnits: 256,
        zoomLevelMin: 3,
        zoomLevelMax: 19,
        minDataZoom: 3,
        maxDataZoom: 19,
        minZoom: 3,
        maxZoom: 19,
        webgl: {
          minZoom: 3,
          maxZoom: 21
        },
        zoomLevelBase: 18,
        errorUrl: dW.imgPath + "blank.gif",
        bounds: new cX(new fU(-21364736,-10616832),new fU(23855104,15859712)),
        imgExtend: "png"
      }
    };
    var bv = bb;
    function bk(gl, i, gh, gf, gg) {
      this.mgr = gl;
      this.position = gh;
      this._cbks = [];
      this.name = gl.getTileName(gf, gg, gl.map.config.style);
      this.info = gf;
      this._transparentPng = gg.isTransparentPng();
      var gm = L("img");
      cw(gm);
      gm.galleryImg = false;
      var gk = gm.style;
      gk.position = "absolute";
      gk.width = gl.tileSize + "px";
      gk.height = gl.tileSize + "px";
      gk.left = gh[0] + "px";
      gk.top = gh[1] + "px";
      this.img = gm;
      this.src = i;
      if (R && gh._offsetX === 0) {
        gk.opacity = 0;
        gk.willChange = "opacity"
      }
      var gj = this;
      this.img.onload = function(gu) {
        if (!gj.mgr) {
          return
        }
        var gp = gj.mgr;
        var gn = gp.bufferTiles;
        if (gp.bufferNumber > 0) {
          gn[gj.name] = gj;
          gn.push(gj.name)
        }
        var gr = gn.length - gp.bufferNumber;
        for (var gs = 0; gr > 0 && gs < gn.length; gs++) {
          var gt = gn[gs];
          if (!gp.mapTiles[gt]) {
            if (gn[gt]) {
              gn[gt].mgr = null;
              var gq = gn[gt].img;
              if (gq.parentNode) {
                ei(gq);
                gq.parentNode.removeChild(gq)
              }
              gq = null;
              gn[gt].img = null;
              gn[gt] = null;
              delete gn[gt]
            }
            gn.splice(gs, 1);
            gs--;
            gr--
          }
        }
        gj.loaded = true;
        gp.imgNumber++;
        if (!fH(gj.img)) {
          if (gg.tilesDiv) {
            gg.tilesDiv.appendChild(gj.img)
          }
        }
        var gu = new aL("onimagechange");
        gu.action = "show";
        gu.tile = gj.name;
        gp.map.dispatchEvent(gu);
        if (R && gh._offsetX === 0) {
          var go = new n({
            fps: 10,
            duration: 300,
            render: function(e) {
              if (gj.img && gj.img.style) {
                gj.img.style.opacity = e * 1
              }
            },
            finish: function() {
              if (gj.img && gj.img.style) {
                delete gj.img.style.opacity;
                gj.img.style.willChange = "auto"
              }
            }
          })
        }
        gj._callCbks()
      }
      ;
      this.img.onerror = function(gp) {
        gj.error = true;
        gj._callCbks();
        if (!gj.mgr) {
          return
        }
        var gn = gj.mgr;
        var go = bv[gg.mapType];
        if (go.errorUrl) {
          gj.img.src = go.errorUrl
        }
        if (!fH(gj.img)) {
          if (gg.tilesDiv) {
            gg.tilesDiv.appendChild(gj.img)
          }
        }
      }
      ;
      gm = null;
      var gi = new aL("onimagebefore");
      gi.tile = gj.name;
      gl.map.dispatchEvent(gi)
    }
    bk.prototype._addLoadCbk = function(e) {
      this._cbks.push(e)
    }
    ;
    bk.prototype._load = function() {
      if (FeBrowser.ie <= 6 && FeBrowser.ie > 0 && this._transparentPng) {
        this.img.src = dW.imgPath + "blank.gif"
      } else {
        this.img.src = this.src
      }
    }
    ;
    bk.prototype._callCbks = function() {
      var gf = this;
      for (var e = 0; e < gf._cbks.length; e++) {
        gf._cbks[e]()
      }
      gf._cbks.length = 0
    }
    ;
    var R = (!z.Browser.ie || z.Browser.ie > 8);
    function d7(e) {
      this.tileLayers = [];
      this.map = e;
      this.bufferNumber = 300;
      this.mapTiles = [];
      this.bufferTiles = [];
      this.config = bv[this.map.mapType];
      this.errorUrl = this.config.errorUrl;
      this.tileSize = this.config.tileSize;
      this.baseUnits = this.config.baseUnits;
      this.baseZoomLevel = this.config.zoomLevelBase;
      this.tileURLs = this.config.tileUrls;
      this.imgNumber = 0;
      this.numLoading = 0;
      this.temp = {}
    }
    aT.register(function(i) {
      if (i._renderType === "webgl") {
        return
      }
      var e = i.tileMgr = new d7(i);
      i.addEventListener("mousewheel", function(gf) {
        e.mouseWheel(gf)
      });
      i.addEventListener("dblclick", function(gf) {
        e.dblClick(gf)
      });
      i.addEventListener("rightdblclick", function(gf) {
        e.dblClick(gf)
      });
      i.addEventListener("minuspress", function(gf) {
        e.keypress(gf)
      });
      i.addEventListener("pluspress", function(gf) {
        e.keypress(gf)
      });
      i.addEventListener("load", function(gf) {
        if (this.mapType === BMAP_EARTH_MAP) {
          return
        }
        e.loadTiles()
      });
      i.addEventListener("zoomstartcode", function(gf) {
        if (this.mapType === BMAP_EARTH_MAP) {
          return
        }
        e._zoom(gf)
      });
      i.addEventListener("moving", function(gf) {
        if (this.mapType === BMAP_EARTH_MAP) {
          return
        }
        e.moveGridTiles()
      });
      i.addEventListener("resize", function(gf) {
        if (this.mapType === BMAP_EARTH_MAP) {
          return
        }
        e.resizeMap(gf)
      });
      i.addEventListener("addtilelayer", function(gf) {
        e.addTileLayer(gf)
      });
      i.addEventListener("removetilelayer", function(gf) {
        e.removeTileLayer(gf)
      })
    });
    z.extend(d7.prototype, {
      addTileLayer: function(gg) {
        var gf = this;
        var i = gg.target;
        gf.tileLayers.push(i);
        if (gf.map.loaded) {
          gf.moveGridTiles()
        }
      },
      removeTileLayer: function(gn) {
        var go = this;
        var gl = gn.target;
        var gj = gl.mapType;
        var gi = go.mapTiles;
        var gq = go.bufferTiles;
        for (var gf in gq) {
          var gg = gf.split("-")[1];
          if (gg == gj) {
            delete gq[gf]
          }
        }
        for (var gf in gi) {
          var gg = gf.split("-")[1];
          if (gg == gj) {
            delete gi[gf]
          }
        }
        if (go.zoomsDiv && go.zoomsDiv.parentNode) {
          go.zoomsDiv.parentNode.removeChild(go.zoomsDiv);
          go.zoomsDiv.innerHTML = ""
        }
        var gh = go.map;
        if (gh.deepZoom) {
          var gp = gh.deepZoom.preDeepZoomDiv;
          if (gp && gp.parentNode) {
            gp.parentNode.removeChild(gp)
          }
        }
        for (var gm = 0, gk = go.tileLayers.length; gm < gk; gm++) {
          if (gl == go.tileLayers[gm]) {
            go.tileLayers.splice(gm, 1)
          }
        }
        go.moveGridTiles()
      },
      hideDeepZoomDiv: function() {
        var i = this
          , gf = i.map;
        if (gf.deepZoom) {
          var e = gf.deepZoom.preDeepZoomDiv;
          if (e && e.style.display != "none") {
            e.style.display = "none"
          }
        }
      },
      getTileLayer: function(gh) {
        var gg = this;
        for (var gf = 0, e = gg.tileLayers.length; gf < e; gf++) {
          tilelayer = gg.tileLayers[gf];
          if (tilelayer.mapType == gh) {
            return tilelayer
          }
        }
        return null
      },
      _zoom: function(gf) {
        var i = this;
        if (i.zoomsDiv && i.zoomsDiv.style.display != "none") {
          i.zoomsDiv.style.display = "none"
        }
        i.hideDeepZoomDiv();
        i.moveGridTiles()
      },
      resizeMap: function(i) {
        this.loaded = false;
        this.moveGridTiles()
      },
      _checkTilesLoaded: function() {
        this.numLoading--;
        var e = this;
        if (this.numLoading == 0) {
          if (this._checkLoadedTimer) {
            clearTimeout(this._checkLoadedTimer);
            this._checkLoadedTimer = null
          }
          this._checkLoadedTimer = setTimeout(function() {
            if (e.numLoading == 0) {
              e.map.dispatchEvent(new aL("ontilesloaded"))
            }
            e._checkLoadedTimer = null
          }, 80)
        }
      },
      getTileName: function(e, gf, i) {
        var gh = gf.mapType;
        var gg = "TILE-" + gh + "-" + i + "-" + e[0] + "-" + e[1] + "-" + e[2];
        return gg
      },
      hideTile: function(gg, gf) {
        var i = gg.img;
        if (fH(i)) {
          if (gg.loaded) {
            this.imgNumber--
          }
          if (i.parentNode) {
            ei(i);
            i.parentNode.removeChild(i)
          }
        }
        var gh = new aL("onimagechange");
        gh.tile = this.getTileName(gg.info, gf, this.map.config.style);
        gh.action = "hide";
        delete this.mapTiles[gg.name];
        if (!gg.loaded) {
          ei(i);
          gg._callCbks();
          i = null;
          gg.img = null;
          gg.mgr = null
        }
        this.map.dispatchEvent(gh)
      },
      loadTiles: function() {
        var i = this;
        if (z.Browser.ie) {
          try {
            document.execCommand("BackgroundImageCache", false, true)
          } catch (gf) {}
        }
        if (this.zoomsDiv && this.zoomsDiv.style.display != "none") {
          this.zoomsDiv.style.display = "none"
        }
        i.hideDeepZoomDiv();
        i.moveGridTiles()
      },
      getCell: function(gh, gg) {
        var e = this.baseUnits * Math.pow(2, (this.baseZoomLevel - gg));
        var gf = parseInt(gh.lng / e);
        var i = parseInt(gh.lat / e);
        return [gf, i, e * (gf + 0.5), e * (i + 0.5)]
      },
      moveGridTiles: function() {
        var gu = this.map
          , gD = gu.getMapType()
          , gB = this.tileLayers.length;
        var gz = gu.centerPoint;
        if (gD !== BMAP_SATELLITE_MAP) {
          gz = c5.calcLoopCenterPoint(gz)
        }
        var gl = gu.width;
        var gP = gu.getZoomUnits();
        var gA = gP * gl;
        var gF = gz.lng - gA / 2;
        var gq = gz.lng + gA / 2;
        var gt = c5.isAddWidth(gF, gq);
        for (var gH = 0; gH < gB; gH++) {
          var gh = this.tileLayers[gH];
          if (gh.baseLayer || gB == 1) {
            this.tilesDiv = gh.tilesDiv
          }
          var gv = bv[gh.mapType];
          var gg = gu.zoomLevel;
          var gK = gu.getZoomUnits(gu.zoomLevel);
          var gp = gv.baseUnits * Math.pow(2, (gv.zoomLevelBase - gg));
          var gn = Math.floor(gz.lng / gp);
          var gG = Math.floor(gz.lat / gp);
          var gs = gv.tileSize;
          var gw = [gn, gG, (gz.lng - gn * gp) / gp * gs, (gz.lat - gG * gp) / gp * gs];
          var go = gt ? gu.width / 2 * 1.5 : gu.width / 2;
          var gr = gw[0] - Math.ceil((go - gw[2]) / gs);
          var gO = gw[1] - Math.ceil((gu.height / 2 - gw[3]) / gs);
          var gI = gw[0] + Math.ceil((go + gw[2]) / gs);
          var gx = gw[1] + Math.ceil((gu.height / 2 + gw[3]) / gs);
          var gm = [];
          for (var gM = gr; gM < gI; gM++) {
            for (var gL = gO; gL < gx; gL++) {
              gm.push([gM, gL]);
              var gC = "id_" + gM + "_" + gL + "_" + gg;
              gm[gC] = true
            }
          }
          if (gh.mapType !== BMAP_SATELLITE_MAP) {
            gm = c5.calcLoopTiles(gm, gg)
          }
          gm.sort((function(i) {
              return function(gR, gS) {
                return ((0.4 * Math.abs(gR[0] - i[0]) + 0.6 * Math.abs(gR[1] - i[1])) - (0.4 * Math.abs(gS[0] - i[0]) + 0.6 * Math.abs(gS[1] - i[1])))
              }
            }
          )([gw[0], gw[1]]));
          var gf = this.mapTiles;
          var e = -gz.lng / gK;
          var gQ = gz.lat / gK;
          var gE = [e, gQ];
          for (var gy in gf) {
            var gj = gf[gy];
            var gN = gj.info;
            if (!gN) {
              continue
            }
            var gC = "id_" + gN[0] + "_" + gN[1] + "_" + gN[2];
            if (!gm[gC]) {
              this.hideTile(gj, gh)
            }
          }
          var gi = -gu.offsetX + gu.width / 2;
          var gk = -gu.offsetY + gu.height / 2;
          gh.tilesDiv.style.left = Math.round(e + gi) - gE[0] + "px";
          gh.tilesDiv.style.top = Math.round(gQ + gk) - gE[1] + "px";
          this.numLoading += gm.length;
          for (var gM = 0, gJ = gm.length; gM < gJ; gM++) {
            this.showTile([gm[gM][0], gm[gM][1], gu.zoomLevel], gE, gh, gM, gu.config.style)
          }
        }
      },
      showTile: function(gj, gi, gm, gr) {
        this.centerPos = gi;
        var gk = bv[gm.mapType];
        var gn = this.map.config.style;
        var gg = this.getTileName(gj, gm, gn);
        var gh = (gj[0] * gk.tileSize) + gi[0];
        var gf = (-1 - gj[1]) * gk.tileSize + gi[1];
        var gq = [gh, gf];
        var gl = null;
        if (gm.mapType !== BMAP_SATELLITE_MAP) {
          gl = c5.calcLoopParam(gj[0], gj[2]);
          var gp = gl.offsetX;
          gq[0] += gp;
          gq._offsetX = gp
        }
        var gu = this;
        var gt = this.mapTiles[gg];
        if (gt) {
          gt.img.style.left = gq[0] + "px";
          gt.img.style.top = gq[1] + "px";
          if (gt.loaded) {
            this._checkTilesLoaded()
          } else {
            gt._addLoadCbk(function() {
              gu._checkTilesLoaded()
            })
          }
          return
        }
        gt = this.bufferTiles[gg];
        if (gt) {
          this.imgNumber++;
          gm.tilesDiv.insertBefore(gt.img, gm.tilesDiv.lastChild);
          this.mapTiles[gg] = gt;
          gt.img.style.left = gq[0] + "px";
          gt.img.style.top = gq[1] + "px";
          if (gt.loaded) {
            this._checkTilesLoaded()
          } else {
            gt._addLoadCbk(function() {
              gu._checkTilesLoaded()
            })
          }
          var gs = new aL("onimagechange");
          gs.action = "cache";
          gs.tile = this.getTileName(gj, gm, gn);
          this.map.dispatchEvent(gs)
        } else {
          var go = new dh(gj[0],gj[1]);
          if (gl) {
            go.x = gl.col
          }
          var i = gm.getTilesUrl(go, gj[2]);
          gt = new bk(this,i,gq,gj,gm);
          gt._addLoadCbk(function() {
            gu._checkTilesLoaded()
          });
          gt._load();
          this.mapTiles[gg] = gt;
          a2(this.map)
        }
      },
      mouseWheel: function(gk) {
        var gj = this.map;
        if (!gj.config.enableWheelZoom) {
          return
        }
        var gl = gj.zoomLevel + (gk.trend === true ? 1 : -1);
        var gh = gj._getProperZoom(gl);
        if (gh.exceeded) {
          var gf = new aL("onzoomexceeded");
          gf.targetZoom = gl;
          gj.dispatchEvent(gf);
          return
        }
        gj.dispatchEvent(new aL("onzoomstart"));
        gj.lastLevel = gj.zoomLevel;
        gj.zoomLevel = gh.zoom;
        var i = gk.pixel;
        var gg = gj.pixelToPointIn(i, {
          zoom: gj.lastLevel
        });
        var gi = gj.getZoomUnits(gj.zoomLevel);
        gj.centerPoint = new fU(gg.lng + gi * (gj.width / 2 - i.x),gg.lat - gi * (gj.height / 2 - i.y));
        this.zoom(i)
      },
      dblClick: function(gf) {
        var i = this.map;
        if (!i.config.enableDblclickZoom) {
          return
        }
        if (i.mapType === "B_EARTH_MAP") {
          return
        }
        if (i.currentOperation === cZ.dragging) {
          return
        }
        if (gf.type == "onrightdblclick") {
          i.zoomOut(gf.point)
        } else {
          i.zoomIn(gf.point)
        }
      },
      keypress: function(gf) {
        var i = this.map;
        if (i.getMapType() === BMAP_EARTH_MAP) {
          return
        }
        gf.type == "onpluspress" ? i.zoomIn() : i.zoomOut()
      }
    });
    function b7(gg) {
      this.opts = gg || {};
      this.copyright = this.opts.copyright || {};
      this.transparentPng = this.opts.transparentPng || false;
      this.png8 = this.opts.png8 || false;
      this.baseLayer = this.opts.baseLayer || false;
      this.dataType = this.opts.dataType || 1;
      this.isFlat = this.opts.isFlat === false ? false : true;
      this.showLabel = this.opts.showLabel === false ? false : true;
      var e = this.opts.tileTypeName || "web";
      this.tileType = b3.getInstance(e);
      this.clipTile = this.opts.clipTile || false;
      this._type = "tilelayer";
      var i = eO() ? 128 : 256;
      this.cacheSize = this.opts.cacheSize || i;
      var gf = this;
      this.tileCache = new dS(this.cacheSize,{
        clearCallback: function(gh) {
          if (gh.label) {
            if (gh.label.textImageBitmap) {
              gh.label.textImageBitmap.close()
            }
            if (gh.label.indoorTextImageBitmap) {
              gh.label.indoorTextImageBitmap.close()
            }
          }
          gf._removeIndoorData(gh)
        }
      });
      this.scaler = aI() >= 1.5 ? 2 : 1;
      this.normalUdt = am("ditu", "normal").udt;
      this.numLoading = 0;
      this.useThumbData = false;
      if (this.baseLayer) {
        this.useThumbData = true
      }
      if (typeof this.opts.customLayer === "boolean") {
        this.customLayer = this.opts.customLayer
      } else {
        this.customLayer = true
      }
    }
    b7.inherits(db, "TileLayer");
    z.extend(b7.prototype, {
      isTransparentPng: function() {
        return this.transparentPng
      },
      getTilesUrl: function(gn, e) {
        var gf = bv[this.mapType];
        if (typeof gf != "object") {
          return null
        }
        var gg = gn.x;
        var go = gn.y;
        if (this.mapType !== BMAP_SATELLITE_MAP) {
          var go = c5.calcLoopParam(go, e).col
        }
        var i = "";
        if (this.opts.tileUrlTemplate) {
          i = this.opts.tileUrlTemplate;
          i = i.replace(/\{X\}/, go);
          i = i.replace(/\{Y\}/, gg);
          i = i.replace(/\{Z\}/, e)
        } else {
          if (this.mapType == BMAPGL_NORMAL_MAP) {
            var gm = this.isCanvasMap ? 0 : 1;
            var gi = gf.tileUrls[Math.abs(go + gg) % gf.tileUrls.length];
            if (window.offLineIPAddress) {
              gi = window.offLineIPAddress + "tile5/"
            }
            var gh = this.map.config.style;
            i = gi + "?qt=vtile&x=" + gg + "&y=" + go + "&z=" + e + (gh === "default" ? "" : ("&styleId=" + dW.mapStyleNameIdPair[gh])) + "&styles=pl&udt=" + this.normalUdt + "&scaler=" + this.scaler + "&showtext=" + gm;
            i = i.replace(/-(\d+)/gi, "M$1")
          }
          if (this.mapType == BMAP_SATELLITE_MAP) {
            var gj = am("ditu", "satellite");
            var gl = gj.ver;
            var gk = gj.udt;
            i = gf.tileUrls[Math.abs(go + gg) % gf.tileUrls.length] + "u=x=" + gg + ";y=" + go + ";z=" + e + ";v=" + gl + ";type=sate&fm=46&udt=" + gk;
            i = i.replace(/-(\d+)/gi, "M$1")
          }
        }
        return i
      },
      initialize: function(gh) {
        this.map = gh;
        if (gh._renderType === "webgl") {
          var gg = null;
          if (this.customLayer !== false) {
            gg = this.getTilesUrl
          }
          z.extend(this, eE);
          this.labelProcessor = new cv(this);
          this.callbackDataQueue = [];
          if (gg) {
            this.getTilesUrl = gg
          }
          var e = this;
          gh.on("indoor_data_refresh", function(gi) {
            if (!e.baseLayer) {
              return
            }
            e._refreshIndoorData(gi.uid, gi.floor)
          });
          gh.on("custom_labels_ready", function(gi) {
            if (!e.baseLayer) {
              return
            }
            e._doWorkAfterLabelImageLoad(gi.virtualTile, gi.labelCanvas, null, gi.imgKey)
          });
          gh.on("glmoduleloaded", function() {
            if (!e.baseLayer) {
              return
            }
            e.updateAllIconsTextureCoords()
          })
        }
        if (!gh.temp.layerZIndex) {
          gh.temp.layerZIndex = 0
        }
        this.zIndex = this.zIndex || 0;
        if (this.baseLayer) {
          this.zIndex = 0
        }
        if (!gh.temp.layid) {
          gh.temp.layid = 0
        }
        if (!this.opts.mapType) {
          this.mapType = "BMAP_CUSTOM_LAYER_" + gh.temp.layid;
          gh.temp.layid++
        } else {
          this.mapType = this.opts.mapType
        }
        var i = bv[this.mapType];
        if (!i) {
          bv[this.mapType] = {
            tileUrls: [],
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 1,
            zoomLevelMax: 19,
            minZoom: 3,
            maxZoom: 19,
            minDataZoom: 3,
            maxDataZoom: 19,
            zoomLevelBase: 18,
            errorUrl: dW.imgPath + "/blank.gif",
            bounds: new cX(new fU(-21364736,-10616832),new fU(23855104,15859712)),
            imgExtend: "png"
          }
        }
        if (gh._renderType !== "webgl") {
          var gf = cQ(gh.platform, '<div style="position:absolute;z-index:' + this.zIndex + '"></div>');
          gf.style.display = "";
          gf.style.left = Math.ceil(-gh.offsetX + gh.width / 2) + "px";
          gf.style.top = Math.ceil(-gh.offsetY + gh.height / 2) + "px";
          this.tilesDiv = gf
        }
        this.isCanvasMap = gh.isCanvasMap();
        this.lastZoom = gh.getZoom()
      },
      remove: function() {
        if (this.tilesDiv && this.tilesDiv.parentNode) {
          this.tilesDiv.innerHTML = "";
          this.tilesDiv.parentNode.removeChild(this.tilesDiv)
        }
        delete this.tilesDiv
      },
      getCopyright: function() {
        return this.copyright
      },
      getMapType: function() {
        return this.mapType
      },
      setZIndex: function(e) {
        this.zIndex = e;
        if (this.tilesDiv) {
          this.tilesDiv.style.zIndex = e
        }
      }
    });
    function cj(i, e, gf) {
      this.bounds = i;
      this.content = e;
      this.mapType = gf
    }
    cj.inherits(db, "Copyright");
    var e5 = {
      get: function(e) {
        if (!e5.singleton) {
          e5.singleton = new X(e)
        }
        return e5.singleton
      }
    };
    function X(i) {
      this._map = i;
      this._tileMgr = i.tileMgr;
      this._animationDiv = null;
      this._preAnimationDiv = null;
      this._animation = null;
      this._baseLayerDiv = null;
      this._transformStyleName = aK.ifSupportCSS3("transform", true);
      this._transformOriginStyleName = aK.ifSupportCSS3("transformOrigin", true);
      this._preZoomTimes = 1;
      this._preRenderTick = 1;
      this._enableCanvas2dMap = !!(i.getRenderType() === "canvas");
      this._isIE9 = !!(z.Browser.ie === 9);
      var e = this;
      i.addEventListener("maptypechange", function() {
        e.hide()
      });
      i.addEventListener("load", function() {
        e.hide()
      })
    }
    z.extend(X.prototype, {
      prepareLayer: function() {
        var gg = this._map;
        var e = this._tileMgr;
        this._canvas2dMapMgr = gg.canvas2dMapMgr;
        var gf = this._baseLayerDiv = e.tilesDiv;
        if (!this._animationDiv) {
          var i = this._preAnimationDiv;
          if (i) {
            i.parentNode && i.parentNode.removeChild(i);
            this._preAnimationDiv = null
          }
          this._preAnimationDiv = this._animationDiv = gf.cloneNode(true);
          gg.platform.insertBefore(this._animationDiv, gg.platform.firstChild)
        }
        this.show()
      },
      prepareAniParam: function() {
        var gg = this._animationDiv;
        if (!gg) {
          return
        }
        var e = gg.children.length;
        var gf;
        this._zoomAniInfo = [];
        for (var gh = e - 1; gh > -1; gh--) {
          var gi = {};
          gf = gg.children[gh].style;
          gi.top = parseInt(gf.top, 10);
          gi.left = parseInt(gf.left, 10);
          this._zoomAniInfo[gh] = gi
        }
      },
      prepareLabelLayer: function() {
        var gh = this._map;
        if (this._enableCanvas2dMap && gh.canvas2dMapMgr) {
          if (this.touchZoomLabelCanvas) {
            this.touchZoomLabelCanvas.parentNode.removeChild(this.touchZoomLabelCanvas)
          }
          var i = gh.canvas2dMapMgr._labelCanvas;
          this.touchZoomLabelCanvas = i.cloneNode(false);
          var e = this.touchZoomLabelCanvas.getContext("2d");
          e.drawImage(i, 0, 0);
          gh.platform.insertBefore(this.touchZoomLabelCanvas, gh.platform.firstChild);
          var gg = parseInt(i.style.left, 10);
          var gf = parseInt(i.style.top, 10);
          this.touchZoomLabelCanvas.style.zIndex = 9;
          this.touchZoomLabelCanvas.style[this._transformOriginStyleName] = (this._fixPosition.x - (gh.offsetX + gg)) + "px " + (this._fixPosition.y - (gh.offsetY + gf)) + "px";
          i.style.visibility = "hidden"
        }
      },
      show: function() {
        if (this._animationDiv) {
          this._animationDiv.style.visibility = ""
        }
      },
      showLabel: function() {
        var i = this._map;
        if (this._enableCanvas2dMap && i.canvas2dMapMgr) {
          var e = i.canvas2dMapMgr._labelCanvas;
          if (e) {
            e.style.visibility = ""
          }
          if (this.touchZoomLabelCanvas) {
            this.touchZoomLabelCanvas.style.zIndex = -2;
            this.touchZoomLabelCanvas.style.visibility = "hidden"
          }
        }
      },
      hide: function() {
        if (this._animationDiv) {
          this._animationDiv.style.visibility = "hidden"
        }
        if (this._preAnimationDiv) {
          this._preAnimationDiv.style.visibility = "hidden"
        }
      },
      hideNonAnimationLayers: function() {
        var gg = this._map;
        if (gg.getRenderType() === "dom") {
          if (gg.overlayDiv) {
            gg.overlayDiv.style.visibility = "hidden"
          }
          if (gg.overlayDivEx) {
            gg.overlayDivEx.style.visibility = "hidden"
          }
        }
        var gi = gg.tileMgr.tileLayers;
        var gh;
        for (var gf = 0, e = gi.length; gf < e; gf++) {
          gh = gi[gf];
          gh.tilesDiv.style.visibility = "hidden"
        }
      },
      showNonAnimationLayers: function() {
        var gg = this._map;
        if (gg.getRenderType() === "dom") {
          if (gg.overlayDiv) {
            gg.overlayDiv.style.visibility = ""
          }
          if (gg.overlayDivEx) {
            gg.overlayDivEx.style.visibility = ""
          }
        }
        var gi = gg.tileMgr.tileLayers;
        var gh;
        for (var gf = 0, e = gi.length; gf < e; gf++) {
          gh = gi[gf];
          gh.tilesDiv.style.visibility = ""
        }
      },
      setFixPosition: function(e) {
        this._fixPosition = e
      },
      setZoom: function(e, gm) {
        var gj = this._fixPosition;
        var gs = this._map;
        var gt = this._baseLayerDiv;
        var gk = {
          x: gj.x - parseInt(gt.style.left, 10) - gs.offsetX,
          y: gj.y - parseInt(gt.style.top, 10) - gs.offsetY
        };
        var gg = this._animationDiv;
        if (!gg) {
          return
        }
        var gq = gg.children.length;
        var go;
        var gr = this._transformStyleName;
        var gi = this._transformOriginStyleName;
        var gu = this;
        var gw;
        var gl;
        for (var gp = gq - 1; gp > -1; gp--) {
          var gn = this._zoomAniInfo[gp];
          go = gg.children[gp].style;
          var gh = gn.left - gk.x;
          var gf = gn.top - gk.y;
          gn.dx = gh * e - gh;
          gn.dy = gf * e - gf;
          gn.preDx = gh - gh;
          gn.preDy = gf - gf;
          gw = gn.preDx + (gn.dx - gn.preDx);
          gl = gn.preDy + (gn.dy - gn.preDy) + gm;
          go.left = gn.left + gw + "px";
          go.top = gn.top + gl + "px";
          go.width = go.height = 256 * e + "px"
        }
        if (this._enableCanvas2dMap) {
          var gv = !gu._isIE9 ? "translate3d(0px, " + gm + "px, 0) scale(" + e + ")" : "translate(0px, " + gm + "px) scale(" + e + ")";
          this.touchZoomLabelCanvas.style[gr] = gv
        }
      },
      setZoomFinish: function() {
        this._animationDiv = null
      },
      startAnimation: function(gj) {
        this.prepareLayer();
        this.hideNonAnimationLayers();
        var gC = this._map;
        if (this.touchZoomLabelCanvas) {
          this.touchZoomLabelCanvas.style.display = "none"
        }
        gj = gj || {};
        var gA = gj.zoomCount || 0;
        var go = gj.fixPosition;
        var gy = gj.fixMCPosition;
        var gm = gj.pixOffset;
        this._zoomCount = gA;
        var gg = gC.getZoom();
        var gB = gg + gA;
        var e = gC.config.enableContinuousZoom;
        var gs = 0.5;
        var gn = 5;
        var gf = Math.pow(2, gA);
        var gE = this._baseLayerDiv;
        var gp = {
          x: go.x - parseInt(gE.style.left, 10) - gC.offsetX,
          y: go.y - parseInt(gE.style.top, 10) - gC.offsetY
        };
        var gk = this._animationDiv;
        var gw = gk.children.length;
        var gG = this._preZoomTimes;
        var gz = [];
        var gx = this._transformStyleName;
        var gl = this._transformOriginStyleName;
        for (var gv = gw - 1; gv > -1; gv--) {
          var gt = {};
          var gu = gk.children[gv].style;
          gt.top = parseInt(gu.top, 10);
          gt.left = parseInt(gu.left, 10);
          var gi = gt.left - gp.x;
          var gh = gt.top - gp.y;
          gt.dx = gi * gf - gi;
          gt.dy = gh * gf - gh;
          gt.preDx = gi * gG - gi;
          gt.preDy = gh * gG - gh;
          gz[gv] = gt
        }
        var gD = this;
        var gr;
        var gF;
        var gq;
        this._zoomAni = new n({
          fps: 60,
          duration: e ? 500 : 1,
          transition: function(i) {
            i = i * gn / (2 * gs);
            return gn * i - gs * i * i
          },
          render: function(gP) {
            gP = gP * (4 * gs) / (gn * gn);
            gr = gG + gP * (gf - gG);
            var gI = gg + dy(gr);
            var gN = null;
            var gM = 0;
            var gQ = 0;
            if (gj.onAnimationBeforeLooping) {
              var gR = gj.onAnimationBeforeLooping(gP, gI);
              gN = gR.loopingCenter;
              gM = gR.yDiff;
              gQ = gR.totalYDiff
            }
            for (var gJ = gz.length - 1; gJ > -1; gJ--) {
              var gK = gz[gJ];
              if (gk.children[gJ]) {
                var gO = gk.children[gJ].style;
                gF = gK.preDx + (gK.dx - gK.preDx) * gP - gm.width * gP;
                gq = gK.preDy + (gK.dy - gK.preDy) * gP - gm.height * gP + gM;
                gO.left = gK.left + gF + "px";
                gO.top = gK.top + gq + "px";
                gO.height = gO.width = 256 * gr + "px"
              }
            }
            var gH = gm.width * gP;
            var gL = gm.height * gP;
            if (gC.isRestrict) {
              gD._enableCanvas2dMap && gD._canvas2dMapMgr.clearLabel()
            } else {
              gD._enableCanvas2dMap && gD._canvas2dMapMgr.drawLabel(gr, go, gg, gB, gA, gP, gH, gL, gQ, gM)
            }
            gD._preZoomTimes = gr;
            gD._preRenderTick = gP;
            gj.onAnimationLooping && gj.onAnimationLooping(gP, gI, gN)
          },
          finish: function() {
            gD._preZoomTimes = 1;
            gD._zoomAni = null;
            gD._animationDiv = null;
            gj.onAnimationFinish && gj.onAnimationFinish();
            gD.showNonAnimationLayers()
          }
        });
        return this._zoomAni
      },
      stopAnimation: function() {
        if (this._zoomAni) {
          this._zoomAni.stop();
          this._zoomAni = null
        }
      }
    });
    function c(e) {
      this._initVars(e);
      this._initColorCanvas();
      this._bindEvent(e)
    }
    z.extend(c.prototype, {
      _initVars: function(e) {
        this._map = e._map;
        this._canvas2dMapMgr = e;
        this._labelCtx = e._labelCtx;
        this.ratio = this._map.config.ratio;
        this.sizeRatio = this.ratio > 1 ? 2 : 1;
        this.RANK1 = 1000000;
        this.RANK2 = 2000000;
        this.RANK3 = 3000000;
        this.RANK4 = 4000000;
        this.RANK5 = 5000000
      },
      _initColorCanvas: function() {
        var i = 256
          , gf = L("canvas")
          , e = gf.style;
        e.width = i + "px";
        e.height = i + "px";
        gf.width = i;
        gf.height = i;
        this._colorCvsSize = i;
        this._colorCvs = gf;
        this._colorCtx = gf.getContext("2d")
      },
      getLabelImageData: function(gt) {
        var gs = gt.textImg;
        var gf = gt.textPos;
        var gq = this.ratio;
        var go = this.sizeRatio / gq;
        var gh = this._colorCtx;
        var gl = this._colorCvsSize;
        gh.clearRect(0, 0, gl, gl);
        var gn = 0;
        var e = 0;
        var gk = 0;
        for (var gm = 0; gm < gf.length; gm++) {
          if (gf[gm].width > gn) {
            gn = gf[gm].width;
            e = gm;
            gk = gf[gm].drawX
          }
        }
        gn /= go;
        var gp = 0;
        for (var gm = 0, gj = gf.length; gm < gj; gm++) {
          var gr = gf[gm];
          var gu;
          if (gm === e) {
            gu = 0
          } else {
            gu = gr.drawX - gk
          }
          gh.drawImage(gs, gr.srcX, gr.srcY, gr.width, gr.height, gu, gp, gr.width / go, gr.height / go);
          if (gr.width / go > gn) {
            gn = gr.width / go
          }
          gp += gr.height / go + 2 * gq
        }
        var gg = gh.getImageData(0, 0, gn, gp);
        var gi = gh.getImageData(0, 0, gn, gp);
        return [gg, gi]
      },
      _bindEvent: function(i) {
        var e = this
          , gf = i._map;
        gf.addEventListener("onspotmouseover", function(gj) {
          if (!this.isCanvasMap() || !this.temp.isPermitSpotOver) {
            return
          }
          if (gj.spots.length > 0) {
            var gi = gj.spots[0].userdata.uid;
            var gh = gj.spots[0].userdata.name;
            var gg = e.findLabelByUid(gi, gh);
            gg && e._toHighLightColor(gg)
          }
        });
        gf.addEventListener("onspotmouseout", function(gj) {
          if (!this.isCanvasMap() || !this.temp.isPermitSpotOver) {
            return
          }
          if (gj.spots.length > 0) {
            var gi = gj.spots[0].userdata.uid;
            var gh = gj.spots[0].userdata.name;
            var gg = e.findLabelByUid(gi, gh);
            gg && e._toDefaultColor(gg)
          }
        });
        gf.addEventListener("onspotclick", function(gj) {
          if (!this.isCanvasMap() || !this.temp.isPermitSpotOver) {
            return
          }
          if (gj.spots && gj.spots.length > 0) {
            var gi = gj.spots[0].userdata.uid;
            var gh = gj.spots[0].userdata.name;
            var gg = e.findLabelByUid(gi, gh);
            gg && e._changeBaseMapState(gg)
          } else {
            e._recoverNormalState()
          }
        });
        gf.on("spot_status_reset", function() {
          e._recoverNormalState()
        });
        gf.on("spot_highlight", function(gh) {
          var gg = e.findLabelByUid(gh.uid);
          gg && e._changeBaseMapState(gg)
        })
      },
      _getTextBound: function(gr) {
        if (!gr.textPos) {
          return null
        }
        var gp = this.ratio;
        var gn = this.sizeRatio / gp;
        var gf = gr.textPos;
        var gq = gr.baseDrawX;
        var go = gr.baseDrawY;
        var gl = gq * gp + (gf[0].drawX - gq) / gn;
        var gj = go * gp + (gf[0].drawY - go) / gn;
        var gh = gl + gf[0].width / gn;
        var e = gj + gf[0].height / gn;
        for (var gm = 0, gk = gf.length; gm < gk; gm++) {
          var gs = gf[gm];
          var gi = gq * gp + (gs.drawX - gq) / gn;
          if (gi < gl) {
            gl = gi
          }
          var gg = go * gp + (gs.drawY - go) / gn;
          if (gg < gj) {
            gj = gg
          }
          if (gi + gs.width > gh) {
            gh = gi + gs.width
          }
          if (gg + gs.height > e) {
            e = gg + gs.height
          }
        }
        return [gl, gj, gh, e]
      },
      _toHighLightColor: function(gf) {
        if (gf._tempRank && gf._tempRank == this.RANK5) {
          return
        }
        var gk = this._getTextBound(gf);
        if (!gk) {
          return
        }
        var gg = Math.round(gk[0]);
        var i = Math.round(gk[1]);
        var e = this.getLabelImageData(gf);
        var gi = e[0];
        var gh = e[1];
        var gj = this._canvas2dMapMgr.getFilterImageData(gi, this.RANK5);
        gf._oldImgData = gh;
        this._labelCtx.putImageData(gj, gg, i)
      },
      _toDefaultColor: function(e) {
        if (e._tempRank && e._tempRank == this.RANK5) {
          return
        }
        if (e._oldImgData) {
          var i = this.sizeRatio;
          var gf = this._getTextBound(e);
          if (!gf) {
            return
          }
          this._labelCtx.putImageData(e._oldImgData, Math.round(gf[0]), Math.round(gf[1]));
          e._oldImgData = null
        }
      },
      _changeBaseMapState: function(gg) {
        var gf = this._canvas2dMapMgr;
        var i = gg.guid;
        var e = gg.guidExt;
        var gh = {
          guid: i,
          name: gg.name,
          guidExt: e
        };
        gf._labelStrategy.setStrategyInfo(gh);
        gf._loadData()
      },
      _recoverNormalState: function() {
        var e = this._canvas2dMapMgr;
        e._labelStrategy.setStrategyInfo(null);
        e._loadData()
      },
      findLabelByUid: function(gi, gg) {
        var gk = this._canvas2dMapMgr
          , e = gk._computedLabel;
        for (var gh = 0, gf = e.length; gh < gf; gh++) {
          var gj = e[gh];
          if (!gk.isClickableLabel(gj)) {
            continue
          }
          if (gi && gj.guid === gi) {
            return gj
          }
          if (gg && gj.name === gg) {
            return gj
          }
        }
        return null
      }
    });
    function da(e) {
      this._initVars(e)
    }
    z.extend(da.prototype, {
      _initVars: function(e) {
        this._map = e._map;
        this._canvas2dMapMgr = e;
        this.ratio = this._map.config.ratio;
        this._strategyInfo = null;
        this.RANK1 = 1000000;
        this.RANK2 = 2000000;
        this.RANK3 = 3000000;
        this.RANK4 = 4000000;
        this.RANK5 = 5000000
      },
      setStrategyInfo: function(e) {
        this._strategyInfo = e
      },
      preComputeLabel: function(gm, hd, gW, gy, g7, hr) {
        var gQ = []
          , gu = gm._centerX
          , gs = gm._centerY
          , hs = gy * g7;
        var g2 = this.ratio;
        var gl = this._map.getZoom();
        var gL = 0;
        if (gl === 5) {
          gL = 4
        }
        if (gl === 8) {
          gL = -6
        }
        gm.sort(function(ht, i) {
          if (ht.x * ht.y < i.x * i.y) {
            return -1
          } else {
            return 1
          }
        });
        for (var gN = 0, gJ = gm.length; gN < gJ; gN++) {
          var hi = gm[gN]
            , gE = hi.x
            , gB = hi.y
            , gz = hi.z;
          var gG = c5.calcLoopParam(gE, gz).offsetX;
          var g0 = gE * hs
            , gZ = (gB + 1) * hs
            , gg = (g0 - gu) / gy + hd / 2 + gG
            , gf = (gs - gZ) / gy + gW / 2;
          for (var gK = 0, hm = hi.length; gK < hm; gK++) {
            var go = hi[gK]
              , gv = undefined
              , gt = undefined
              , hk = undefined
              , hj = undefined;
            var g9 = go.baseDrawX = gg + go.baseX;
            var g8 = go.baseDrawY = gf + go.baseY;
            if (go.type == "fixed") {
              var gU = go.iconPos
                , gx = go.textPos
                , ho = go.textImg;
              if (gU) {
                gU.drawX = gg + gU.destX;
                gU.drawY = gf + gU.destY;
                gv = gU.drawX;
                gt = gU.drawY;
                hk = gU.drawX + gU.width;
                hj = gU.drawY + gU.height
              }
              if (gx && ho) {
                for (var ha = 0; ha < gx.length; ha++) {
                  var hn = gx[ha];
                  hn.drawX = gg + hn.destX;
                  hn.drawY = gf + hn.destY;
                  if (!gv) {
                    gv = hn.drawX;
                    gt = hn.drawY;
                    hk = hn.drawX + hn.width;
                    hj = hn.drawY + hn.height
                  } else {
                    if (hn.drawX < gv) {
                      gv = hn.drawX
                    }
                    if (hn.drawY < gt) {
                      gt = hn.drawY
                    }
                    if (hn.drawX + hn.width > hk) {
                      hk = hn.drawX + hn.width
                    }
                    if (hn.drawY + hn.height > hj) {
                      hj = hn.drawY + hn.height
                    }
                  }
                }
              }
            } else {
              go.tileX = gg;
              go.tileY = gf;
              gv = gg + go.minXOriginal;
              gt = gf + go.minYOriginal;
              hk = gg + go.maxXOriginal;
              hj = gf + go.maxYOriginal
            }
            if (gv != undefined) {
              var hc = g9 + (gv - g9) / g2;
              var hb = g8 + (gt - g8) / g2;
              var gO = g9 + (hk - g9) / g2;
              var gM = g8 + (hj - g8) / g2;
              go.minX = hc;
              go.minY = hb;
              go.maxX = gO;
              go.maxY = gM;
              var hg = (hc + gO) / 2
                , hf = (hb + gM) / 2
                , gX = gu + (hg - hd / 2) * gy
                , gV = gs + (gW / 2 - hf) * gy;
              go.geoX = gX;
              go.geoY = gV;
              gQ.push(go)
            }
          }
        }
        if (hr) {
          for (var gN = 0, gJ = hr.length; gN < gJ; gN++) {
            var gI = hr[gN];
            var g5 = gI[0];
            var gp = gI[1];
            var gU = g5.iconPos;
            var gj = gU.geoX;
            var gh = gU.geoY;
            var g9 = (gj - gu) / gy + hd / 2;
            var g8 = (gs - gh) / gy + gW / 2;
            var gv = g9 + gU.destX;
            var gt = g8 + gU.destY;
            var hk = gv + gU.width;
            var hj = gt + gU.height;
            g5.textPos = g5.textPos || g5._textPos;
            var gx = g5.textPos;
            var he = gx[0];
            var gD = g9 + he.destX;
            var gr = g8 + he.destY;
            if (gr < gt) {
              gt = gr
            }
            if (gD + he.width > hk) {
              hk = gD + he.width
            }
            if (gr + he.height > hj) {
              hj = gr + he.height
            }
            if (gx.length === 2) {
              var gC = gx[1];
              var gA = g9 + gC.destX;
              var gq = g8 + gC.destY;
              if (gq < gt) {
                gt = gq
              }
              if (gA + gC.width > hk) {
                hk = gA + gC.width
              }
              if (gq + gC.height > hj) {
                hj = gq + gC.height
              }
            }
            g5._tempBounds = [gv, gt, hk, hj];
            var gU = gp.iconPos;
            var gj = gU.geoX;
            var gh = gU.geoY;
            var g9 = (gj - gu) / gy + hd / 2;
            var g8 = (gs - gh) / gy + gW / 2;
            var gv = g9 + gU.destX;
            var gt = g8 + gU.destY;
            var hk = gv + gU.width;
            var hj = gt + gU.height;
            gp.textPos = gp.textPos || gp._textPos;
            var gx = gp.textPos;
            var he = gx[0];
            var gD = g9 + he.destX;
            var gr = g8 + he.destY;
            if (gD < gv) {
              gv = gD
            }
            if (gr < gt) {
              gt = gr
            }
            if (gr + he.height > hj) {
              hj = gr + he.height
            }
            if (gx.length === 2) {
              var gC = gx[1];
              var gA = g9 + gC.destX;
              var gq = g8 + gC.destY;
              if (gA < gv) {
                gv = gA
              }
              if (gq < gt) {
                gt = gq
              }
              if (gq + gC.height > hj) {
                hj = gq + gC.height
              }
            }
            gp._tempBounds = [gv, gt, hk, hj]
          }
          for (var gN = 0, gJ = hr.length; gN < gJ; gN++) {
            var gI = hr[gN];
            var g5 = gI[0];
            var gp = gI[1];
            if (gN === 0 && gp.textPos) {
              gp._textPos = gp.textPos;
              delete gp.textPos
            }
            var hh = g5;
            if (!g5.textPos && gp.textPos) {
              hh = gp
            }
            var hl = hh._tempBounds;
            for (gK = gN + 1; gK < gJ; gK++) {
              var gH = hr[gK];
              var gR = gH[0];
              var hq = gH[1];
              var gw = 0;
              var hp = gR._tempBounds;
              if (!(hl[2] < hp[0] || hl[0] > hp[2] || hl[3] < hp[1] || hl[1] > hp[3])) {
                gw++;
                if (gR.textPos) {
                  gR._textPos = gR.textPos;
                  delete gR.textPos
                }
              }
              var hp = hq._tempBounds;
              if (!(hl[2] < hp[0] || hl[0] > hp[2] || hl[3] < hp[1] || hl[1] > hp[3])) {
                gw++;
                if (hq.textPos) {
                  hq._textPos = hq.textPos;
                  delete hq.textPos
                }
              }
              if (gw >= 2) {
                if (hh.textPos) {
                  hh._textPos = hh.textPos;
                  delete hh.textPos
                }
              }
            }
          }
          for (var gN = 0, gJ = hr.length; gN < gJ; gN++) {
            var gI = hr[gN];
            var g5 = gI[0];
            var gp = gI[1];
            var gS = g5;
            if (!g5.textPos && gp.textPos) {
              gS = gp
            }
            var gU = gS.iconPos;
            var gj = gU.geoX;
            var gh = gU.geoY;
            var g9 = gS.baseDrawX = (gj - gu) / gy + hd / 2;
            var g8 = gS.baseDrawY = (gs - gh) / gy + gW / 2;
            gU.drawX = g9 + gU.destX;
            gU.drawY = g8 + gU.destY;
            var gv = gU.drawX;
            var gt = gU.drawY;
            var hk = gU.drawX + gU.width;
            var hj = gU.drawY + gU.height;
            var gx = gS.textPos;
            if (gx) {
              var he = gx[0];
              he.drawX = g9 + he.destX;
              he.drawY = g8 + he.destY;
              if (he.drawX < gv) {
                gv = he.drawX
              }
              if (he.drawY < gt) {
                gt = he.drawY
              }
              if (he.drawX + he.width > hk) {
                hk = he.drawX + he.width
              }
              if (he.drawY + he.height > hj) {
                hj = he.drawY + he.height
              }
              if (gx.length === 2) {
                var gC = gx[1];
                gC.drawX = g9 + gC.destX;
                gC.drawY = g8 + gC.destY;
                if (gC.drawX < gv) {
                  gv = gC.drawX
                }
                if (gC.drawY < gt) {
                  gt = gC.drawY
                }
                if (gC.drawX + gC.width > hk) {
                  hk = gC.drawX + gC.width
                }
                if (gC.drawY + gC.height > hj) {
                  hj = gC.drawY + gC.height
                }
              }
            }
            var hc = g9 + (gv - g9) / g2;
            var hb = g8 + (gt - g8) / g2;
            var gO = g9 + (hk - g9) / g2;
            var gM = g8 + (hj - g8) / g2;
            gS.minX = hc;
            gS.minY = hb;
            gS.maxX = gO;
            gS.maxY = gM;
            var g4 = (hc + gO) / 2;
            var g3 = (hb + gM) / 2;
            var gk = gu + (g4 - hd / 2) * gy;
            var gi = gs + (gW / 2 - g3) * gy;
            gS.geoX = gk;
            gS.geoY = gi;
            gQ.push(gS)
          }
        }
        var g6 = this._strategyInfo;
        if (g6) {
          var gP = g6.guid;
          var gY = g6.name;
          var gF = g6.guidExt;
          for (var gN = 0, gJ = gQ.length; gN < gJ; gN++) {
            var gn = gQ[gN];
            delete gn._tempRank;
            if (!this._canvas2dMapMgr.isClickableLabel(gn) || (gF === 1 && !gn.guidExt)) {
              continue
            }
            if ((gP && gP === gn.guid) || (gY && gY === gn.name)) {
              gn._tempRank = this.RANK5
            }
          }
        } else {
          for (var gN = 0, gJ = gQ.length; gN < gJ; gN++) {
            var gn = gQ[gN];
            if (gn.type == "line" || !gn.iconPos) {
              continue
            }
            delete gn._tempRank
          }
        }
        gQ.sort(function(hu, ht) {
          var hv = hu._tempRank ? hu._tempRank : hu.rank
            , i = ht._tempRank ? ht._tempRank : ht.rank;
          if (hv === i) {
            return hu.baseX - ht.baseX
          }
          return i - hv
        });
        for (var gN = 0, gJ = gQ.length; gN < gJ; gN++) {
          var hh = gQ[gN];
          hh.isDel = false;
          hh.isFadeout = false;
          hh._schedule = 0;
          hh._isIgnore = false;
          hh.arrIntersectIndex = [];
          for (gK = gN + 1; gK < gJ; gK++) {
            var gT = gQ[gK];
            if (!(hh.maxX - gL < gT.minX || hh.minX > gT.maxX - gL || hh.maxY - gL < gT.minY || hh.minY > gT.maxY - gL)) {
              hh.arrIntersectIndex.push(gK)
            }
          }
        }
        for (var gN = 0, gJ = gQ.length; gN < gJ; gN++) {
          var gn = gQ[gN];
          if (gn.isDel == false) {
            var e = gn.arrIntersectIndex;
            for (var gK = 0, hm = e.length; gK < hm; gK++) {
              var g1 = gQ[e[gK]];
              g1.isDel = true;
              if (g1.guidExt === 1) {
                g1.isDel = false
              }
            }
          }
        }
        return gQ
      }
    });
    function W(e) {
      this._map = e;
      this._initCanvas();
      this._initVars();
      this._bindEvent();
      this._tileType = b3.getInstance("na")
    }
    aT.register(function(i) {
      if (i.getRenderType() === "canvas") {
        var e = i.config.style;
        if (aT["FeatureStyle" + e]) {
          i.canvas2dMapMgr = new W(i)
        } else {
          i.loadMapStyleFiles(function() {
            i.canvas2dMapMgr = new W(i);
            i.canvas2dMapMgr._loadData()
          })
        }
      }
    });
    z.extend(W.prototype, {
      _initCanvas: function() {
        var gj = this._map
          , gh = gj.getSize()
          , gg = gh.width
          , i = gh.height
          , e = gj.platform
          , gk = L("canvas")
          , gi = gk.style;
        var gf = this.ratio = gj.config.ratio;
        this._width = gg;
        this._height = i;
        gi.cssText = "position: absolute;left:0;top:0;width:" + gg + "px;height:" + i + "px;z-index:100;";
        gk.width = gg * gf;
        gk.height = i * gf;
        this._labelCanvas = gk;
        this._labelCtx = gk.getContext("2d");
        e.appendChild(gk)
      },
      _initVars: function() {
        var e = am("ditu", "normal");
        this._udt = e.udt;
        this._version = e.ver;
        this._labelDataUrls = bv.B_NORMAL_MAP.vectorTileUrls;
        this._style = aT["FeatureStyle" + this._map.config.style];
        this._labelCount = 0;
        this._vectorDrawLib = new aC(this);
        this._cache = {
          maxNum: 500,
          delNum: 50,
          arrCache: []
        };
        this._computedLabel = null;
        this._spotData = null;
        this._labelStrategy = new da(this);
        this._labelClick = new c(this);
        this._biz = new fp(this);
        this._map.temp.isPermitSpotOver = true;
        this.labelStyleParam = "pl";
        if (this._map.getMapType() === BMAP_SATELLITE_MAP) {
          this.labelStyleParam = "sl"
        }
        this.statRequestCount = 0;
        this.statResponseCount = 0
      },
      _resizeHandler: function(gi) {
        var gk = this
          , i = gk._map
          , gh = i.getSize()
          , gf = gh.width
          , gm = gh.height;
        var gj = this.ratio;
        var gn = this._labelCanvas
          , gg = gn.style;
        gg.width = gf + "px";
        gg.height = gm + "px";
        gn.width = gf * gj;
        gn.height = gm * gj;
        gk._width = gf;
        gk._height = gm;
        var gl = true;
        gk._loadData(gl)
      },
      _bindEvent: function() {
        var e = this
          , i = e._map;
        i.addEventListener("load", function(gf) {
          e.clearLabel();
          e._loadData()
        });
        i.addEventListener("zoomend", function(gf) {
          if (!gf.notClearLabel) {
            e.clearLabel()
          }
          e._loadData()
        });
        i.addEventListener("moveend", function(gf) {
          e._loadData()
        });
        i.addEventListener("resize", function(gf) {
          e._resizeHandler(gf)
        });
        i.addEventListener("maptypechange", function(gf) {
          if (gf.mapType === BMAP_EARTH_MAP) {
            e.hideLabelCanvas()
          } else {
            e.showLabelCanvas();
            if (gf.mapType === BMAPGL_NORMAL_MAP) {
              e.labelStyleParam = "pl"
            } else {
              if (gf.mapType === BMAP_SATELLITE_MAP) {
                e.labelStyleParam = "sl"
              }
            }
            e._loadData()
          }
        });
        i.addEventListener("streetlayer_show", function(gf) {
          if (this.isCanvasMap()) {
            e.showLabelCanvas()
          }
        });
        i.addEventListener("streetlayer_hide", function(gf) {
          if (this.isCanvasMap()) {
            e.hideLabelCanvas()
          }
        });
        i.addEventListener("loadbizdata", function(gg) {
          var gf = gg.data;
          e._biz.proecessBizData(gf, function() {
            e.updateLabel()
          })
        });
        i.addEventListener("unloadbizdata", function(gf) {
          e._biz.clearBizData();
          e.updateLabel()
        });
        e.isDrawText = false;
        setTimeout(function() {
          if (!e.isDrawText) {
            i.dispatchEvent(new aL("onmapwhitescreen"))
          }
        }, 10000)
      },
      getStyle: function() {
        return this._style
      },
      _getZoomUnits: function(e) {
        return Math.pow(2, 18 - e)
      },
      _createCacheForm: function(gf, gk, gj, i) {
        var gi = this;
        var e = gi._cache;
        var gg = e.arrCache;
        var gl = this._getLabelId(gf, gk, gj, i);
        var gh = {
          id: gl,
          updateLabelCounter: 0
        };
        gg.push(gh);
        gg[gl] = gh;
        return gh
      },
      _getLabelId: function(i, gg, gf, e) {
        return "_" + i + "_" + gg + "_" + gf + "_" + e + "_" + this.labelStyleParam
      },
      _getCache: function(i, gg, gf, e) {
        return this._cache.arrCache[this._getLabelId(i, gg, gf, e)]
      },
      _setCacheValue: function(gh, gu, gs, gg, gn) {
        var gp = this;
        var e = gp._cache;
        var gj = e.arrCache;
        var gl = e.maxNum;
        var gi = e.delNum;
        var gt = this._getLabelId(gh, gu, gs, gg);
        var go = gj[gt];
        if (gn) {
          go.lb = gn
        }
        if (gj.length > gl) {
          var gf = gj.splice(0, gi);
          for (var gm = 0, gk = gf.length; gm < gk; gm++) {
            var gq = gf[gm]
              , gr = gq.id;
            if (gj[gr].lb) {
              gj[gr].lb = null
            }
            gj[gr] = null;
            delete gj[gr]
          }
          gf = null
        }
      },
      _loadData: function(gs) {
        var gL = this._map;
        if (!gL.isCanvasMap()) {
          return
        }
        var gl = gL.getCenterIn();
        var gK = c5.calcLoopCenterPoint(gl);
        var gk = this._tileType;
        var gn = this._width / 2;
        var gz = this._height;
        var gA = gL.getZoom();
        var gw = gk.getDataZoom(gA);
        var gp = gL.getZoomUnits(gA);
        var gv = gp * gn;
        var gJ = gK.lng - gv;
        var gI = gK.lng + gv;
        var gt = c5.isAddWidth(gJ, gI);
        gn = gt ? gn * 1.5 : gn;
        var gu = gk.getTileSize(gA);
        var gh = gk.getMercatorSize(gA, gw);
        var go = Math.floor(gK.lng / gh);
        var gq = Math.floor(gK.lat / gh);
        var gi = [go, gq, (gK.lng - go * gh) / gh * gu, (gK.lat - gq * gh) / gh * gu];
        var gC = gi[0] - Math.ceil((gn - gi[2]) / gu);
        var gG = gi[1] - Math.ceil((gz / 2 - gi[3]) / gu);
        var gy = gi[0] + Math.ceil((gn + gi[2]) / gu);
        var gD = gi[1] + Math.ceil((gz / 2 + gi[3]) / gu);
        gL.temp.isPermitSpotOver = false;
        var e = [];
        for (var gF = gC; gF < gy; gF++) {
          for (var gE = gG; gE < gD; gE++) {
            e.push([gF, gE, gw]);
            var gx = "id_" + gF + "_" + gE + "_" + gA;
            e[gx] = true
          }
        }
        e._zoom = gw;
        e = c5.calcLoopTiles(e, gA);
        e.sort((function(i) {
            return function(gN, gO) {
              return ((0.4 * Math.abs(gN[0] - i[0]) + 0.6 * Math.abs(gN[1] - i[1])) - (0.4 * Math.abs(gO[0] - i[0]) + 0.6 * Math.abs(gO[1] - i[1])))
            }
          }
        )([gi[0], gi[1]]));
        var gr = this._cache.arrCache;
        this._curViewLabels = [];
        var gg = "viewKey_" + Math.floor(gl.lng) + "_" + Math.floor(gl.lat) + "_" + gA;
        this.statRequestCount = 0;
        this.statResponseCount = 0;
        this._labelCount += e.length;
        var gm = gA;
        for (var gF = 0, gB = e.length; gF < gB; gF++) {
          var go = e[gF][0];
          var gq = e[gF][1];
          var gf = e[gF][2];
          var gj = this._getLabelId(go, gq, gf, gm);
          var gH = gr[gj];
          if (!gH) {
            gH = this._createCacheForm(go, gq, gf, gm)
          }
          if (typeof gH.lb === "undefined") {
            gH.lb = null;
            this._loadLabelData(go, gq, gf, gm, gu, gg);
            this.statRequestCount++
          } else {
            if (gH.lb) {
              this._curViewLabels.push(gH.lb);
              this._labelCount--
            } else {
              if (gs) {
                this._loadLabelData(go, gq, gf, gm, gu, gg)
              }
              gH.updateLabelCounter++
            }
          }
        }
        if (this._labelCount === 0) {
          this.updateLabel()
        }
        var gM = this;
        if (gM.errorTimer) {
          clearTimeout(gM.errorTimer)
        }
        gM.errorTimer = setTimeout(function() {
          if (gM._labelCount !== 0) {
            gM._labelCount = 0;
            gM.updateLabel()
          }
          var gO = new aL("onloaddatatimeout");
          var gP = 0;
          var gN = 0;
          var gQ = 0;
          var i = 0;
          if (gM.statRequestCount === gM.statResponseCount) {
            gP = 1
          } else {
            gN = 1
          }
          if (gN === 1) {
            i = gM.statRequestCount - gM.statResponseCount;
            gQ = gM.statResponseCount
          }
          gO.noTimeoutCount = gP;
          gO.timeoutCount = gN;
          gO.timeoutNoLoaded = i;
          gO.timeoutLoaded = gQ;
          gM._map.dispatchEvent(gO)
        }, 500)
      },
      clearLabel: function() {
        var e = this._width;
        var gf = this._height;
        var i = this.ratio;
        this._labelCtx.clearRect(0, 0, e * i, gf * i)
      },
      updateLabel: function() {
        var i = this._map;
        var e = i.getCenterIn();
        var gg = this._width;
        var gj = this._height;
        var gm = i.getZoom();
        var gl = this._tileType.getTileSize(gm);
        var gk = this._getZoomUnits(gm);
        var gf = this._labelCtx;
        this._labelCanvas.style.left = -i.offsetX + "px";
        this._labelCanvas.style.top = -i.offsetY + "px";
        var gi = this._curViewLabels;
        gi._centerX = e.lng;
        gi._centerY = e.lat;
        var gh = this._biz.bizLabels;
        this._computedLabel = this._labelStrategy.preComputeLabel(gi, gg, gj, gk, gl, gh);
        this._computedLabel._zoom = gm;
        this.clearLabel();
        this._vectorDrawLib.drawIconAndText(gf, this._computedLabel, gm);
        this._addSpotData();
        i.temp.isPermitSpotOver = true;
        if (gi.length > 0) {
          this.isDrawText = true
        }
      },
      _loadLabelData: function(gp, go, gn, gf, gq, e) {
        var gi = gp.toString();
        var gg = go.toString();
        var gk = "cbk_" + gi.replace("-", "_") + "_" + gg.replace("-", "__") + "_" + Math.floor(gn);
        var gu = dw + "." + gk;
        var gt = this._labelDataUrls;
        var gm = Math.abs(gp + go) % gt.length;
        var gz = gt[gm];
        if (window.offLineIPAddress) {
          gz = window.offLineIPAddress + "pvd/"
        }
        var i = this.labelStyleParam;
        var gs = "?qt=vtile";
        var gv = "";
        if (this._map.config.style !== "default") {
          gv = "&styleId=" + dW.mapStyleNameIdPair[this._map.config.style]
        }
        var gr = "x={x}&y={y}&z={z}&udt={udt}&v={v}&styles={styles}" + gv + "&textonly=1&textimg=1&scaler={scaler}&fn=" + encodeURIComponent(gu);
        var gw = c5.calcLoopParam(gp, gn).col;
        var gl = this.ratio > 1 ? 2 : 1;
        var gj = gr.replace(/{x}/, gw).replace(/{y}/, go).replace(/{z}/, Math.floor(gn)).replace(/{styles}/, i).replace(/{udt}/, this._udt).replace(/{v}/, this._version).replace(/{scaler}/, gl);
        var gh = gz + gs + "&param=" + window.encodeURIComponent(e2(gj));
        var gy = this;
        var gx = gy._map;
        aT[gk] = function(gA) {
          gy._vectorDrawLib.parseLabelData(gA, gp, go, gn, gf, gq, function(gF) {
            var gC = gx.getCenterIn();
            var gG = gx.getZoom();
            var gI = "viewKey_" + Math.floor(gC.lng) + "_" + Math.floor(gC.lat) + "_" + gG;
            gy._labelCount--;
            var gJ = gy._getCache(gp, go, gn, gf).updateLabelCounter;
            gy._labelCount -= gJ;
            var gD = gy._curViewLabels;
            if (gI === e || (gy._labelCount < 0 && gG === gn)) {
              gD.push(gF)
            }
            if (gI === e) {
              gy.statResponseCount++
            }
            if (gy._labelCount <= 0) {
              var gB = (new Date()).getTime();
              gy.updateLabel();
              var gE = (new Date()).getTime();
              var gH = new aL("oncanvasmaploaded");
              gH.drawTime = gE - gB;
              if (gy.statResponseCount === gy.statRequestCount) {
                gH.isAllLoadedDrawing = true
              }
              gx.dispatchEvent(gH)
            }
            gy._setCacheValue(gp, go, gn, gf, gF);
            delete aT[gk]
          })
        }
        ;
        fO.load(gh)
      },
      drawLabel: function(gf, gg, gn, i, gl, gh, e, gi, gm, gj) {
        var gk = this;
        if (!gk._computedLabel) {
          return
        }
        if (gk._computedLabel._zoom !== gn) {
          gk.clearLabel();
          return
        }
        gk._map.temp.isPermitSpotOver = false;
        gk.clearLabel();
        gk._vectorDrawLib.zoomingIconAndText(this._labelCtx, gk._computedLabel, gf, gg, i, gl, gh, e, gi, gm, gj)
      },
      _addSpotData: function() {
        this._spotData = [];
        var gn = this._map.getZoom();
        for (var gi = 0, gh = this._computedLabel.length; gi < gh; gi++) {
          var gk = this._computedLabel[gi];
          if (!this.isClickableLabel(gk) || (gk.guidExt === 1 && gk.startScale > gn)) {
            continue
          }
          var gj = [];
          gj[0] = (gk.minX - gk.maxX) / 2;
          gj[1] = (gk.minY - gk.maxY) / 2;
          gj[2] = (gk.maxX - gk.minX) / 2;
          gj[3] = (gk.maxY - gk.minY) / 2;
          var gg = null;
          if (gk.iconPos) {
            gg = new fU(gk.iconPos.geoX,gk.iconPos.geoY)
          }
          var gf = gk.name ? gk.name.replace("\\\\", "<br>") : "";
          if (gk.iconPos && gk.iconPos.iconType.indexOf("ditie") > -1 && this._map.getZoom() > 14) {
            gf = ""
          }
          var gm = {
            n: gf,
            pt: new fU(gk.geoX,gk.geoY),
            userdata: {
              iconPoint: gg,
              uid: gk.guid,
              name: gf,
              type: gk.iconPos ? gk.iconPos.iconType : "",
              iconImg: gk.iconImg,
              mapPoi: true,
              adver_log: gk.adver_log || ""
            },
            bd: gj,
            tag: "MAP_SPOT_INFO"
          };
          this._spotData.push(gm)
        }
        var gl = new aL("onspotsdataready");
        gl.spots = this._spotData;
        this._map._spotDataOnCanvas = this._spotData;
        this._map.dispatchEvent(gl)
      },
      isClickableLabel: function(e) {
        if (e.isDel || (!e.guid && !e.name)) {
          return false
        }
        return true
      },
      getFilterImageData: function(gf, gj) {
        var gk = gf.data
          , gi = this._labelStrategy
          , gj = parseInt(gj);
        for (var gl = 0, gh = gk.length; gl < gh; gl += 4) {
          var e = gk[gl]
            , gm = gk[gl + 1]
            , gn = gk[gl + 2]
            , go = gk[gl + 3];
          if (go === 0) {
            continue
          }
          var gg = Math.round((e + gm + gn) / 3);
          var gp = gg - 90;
          gp = gp < 0 ? 0 : gp;
          if (gj === gi.RANK5) {
            gk[gl] = 51 + gp * 1.3;
            gk[gl + 1] = 133 + gp * 0.8;
            gk[gl + 2] = 255
          }
        }
        return gf
      },
      showLabelCanvas: function() {
        this._labelCanvas.style.visibility = ""
      },
      hideLabelCanvas: function() {
        this._labelCanvas.style.visibility = "hidden"
      }
    });
    var by = 5;
    var c2 = 4;
    var fS = 3;
    var d9 = 2;
    var f8 = 1;
    var c4 = 0;
    var gb = 3;
    var fJ = 5;
    var E = {
      3: {
        start: 3,
        base: 3
      },
      4: {
        start: 4,
        base: 5
      },
      5: {
        start: 4,
        base: 5
      },
      6: {
        start: 6,
        base: 7
      },
      7: {
        start: 6,
        base: 7
      },
      8: {
        start: 8,
        base: 9
      },
      9: {
        start: 8,
        base: 9
      },
      10: {
        start: 10,
        base: 10
      },
      11: {
        start: 11,
        base: 12
      },
      12: {
        start: 11,
        base: 12
      },
      13: {
        start: 11,
        base: 12
      },
      14: {
        start: 14,
        base: 15
      },
      15: {
        start: 14,
        base: 15
      },
      16: {
        start: 16,
        base: 17
      },
      17: {
        start: 16,
        base: 17
      },
      18: {
        start: 18,
        base: 19
      },
      19: {
        start: 18,
        base: 19
      },
      20: {
        start: 18,
        base: 19
      },
      21: {
        start: 18,
        base: 19
      }
    };
    function aC(gg) {
      this._canvas2dMapMgr = gg;
      var i = this.ratio = gg._map.config.ratio;
      this._featureStyle = null;
      this._map = gg._map;
      var gf = eo();
      var e = "udt=" + gf.udt + "&v=" + gf.ver;
      this.sizeRatio = this.ratio > 1 ? 2 : 1;
      this._binaryCache = {};
      this._iconCache = {};
      this._initColorCanvas()
    }
    z.extend(aC.prototype, {
      _initColorCanvas: function() {
        var i = 256
          , gf = L("canvas")
          , e = gf.style;
        e.width = i + "px";
        e.height = i + "px";
        gf.width = i;
        gf.height = i;
        this._colorCvs = gf;
        this._colorCtx = gf.getContext("2d")
      },
      parseLabelData: function(i, gi, gh, gg, e, gl, gk) {
        if (!this._featureStyle) {
          this._featureStyle = this._canvas2dMapMgr.getStyle()
        }
        if (!i || !i[0]) {
          gk([]);
          return
        }
        var gj = this._map.getZoomUnits();
        var gf = this;
        this.loadTextPng(i, gl, gi, gh, gg, e, gj, gk)
      },
      loadTextPng: function(gx, go, gm, gl, gj, i, gh, gg) {
        var gw = this;
        var e = gx[5];
        var gv = this._map;
        var gs = gv.getZoom();
        var gf = gv.getSize();
        var gt = gf.width;
        var gr = gf.height;
        var gu = gv.getCenterIn();
        var gk = gu.lng;
        var gi = gu.lat;
        var gq = gm * go * gh;
        var gp = (gl + 1) * go * gh;
        if (e) {
          var gn = new Image();
          gn.onload = function() {
            gw.calcIconAndTextInfo(gx, gn, go, gm, gl, gj, i, gh, gq, gp, gg);
            delete this.onload
          }
          ;
          gn.src = e
        } else {
          setTimeout(function() {
            gw.calcIconAndTextInfo(gx, null, go, gm, gl, gj, i, gh, gq, gp, gg)
          }, 1)
        }
      },
      calcIconAndTextInfo: function(gz, gq, gr, gp, gm, gk, gg, gi, gt, gs, gh) {
        var gy = this;
        var gx = gy._featureStyle;
        var gn = [];
        gn.x = gp;
        gn.y = gm;
        gn.z = gk;
        var go = gy._canvas2dMapMgr
          , gf = gp * gi * gr
          , gw = (gm + 1) * gi * gr
          , gj = {
          tileLeft: gf,
          tileTop: gw,
          zoomUnits: gi
        };
        var e = [];
        if (gz[0]) {
          for (var gu = 0; gu < gz[0].length; gu++) {
            if (gz[0][gu][0] === gb) {
              e.push(gz[0][gu])
            }
          }
        }
        var gl = gz[2] || [];
        for (var gu = 0; gu < e.length; gu++) {
          this._getFixedLabelInfo(e[gu], gq, gg, gi, gr, gt, gs, gn)
        }
        var gv = Math.pow(2, gg - gk);
        for (gu = 0; gu < gl.length; gu++) {
          this._getLineLabelInfo(gl[gu], gq, gk, gg, gi, gr, gt, gs, gv, gn)
        }
        gh(gn)
      },
      _getFixedLabelInfo: function(gq, gu, gh, gl, gv, gy, gx, gA) {
        var gp = gq[1];
        if (!gp) {
          return
        }
        var gC = this._map.getZoom();
        var gK = this._map.config.style;
        var gL = this._featureStyle;
        var gm = gh;
        if (gm === 9) {
          gm = 8
        }
        for (var gH = 0; gH < gp.length; gH++) {
          var gM = gp[gH];
          var e = gM[0];
          var gg = dj.getStyleFromCache(gK, e, "point", gm, gL);
          var gG = dj.getStyleFromCache(gK, e, "pointText", gm, gL);
          if ((!gG || gG.length === 0) && (!gg || gg.length === 0)) {
            if (gm === 5) {
              var gk = gM[1];
              if (!gk) {
                continue
              }
              for (var gD = 0; gD < gk.length; gD++) {
                var gB = gk[gD][4];
                if (gB && gB[7] === "北京") {
                  gg = dj.getStyleFromCache(gK, e, "point", 6, gL);
                  gG = dj.getStyleFromCache(gK, e, "pointText", 6, gL);
                  break
                } else {
                  continue
                }
              }
            } else {
              continue
            }
          }
          var gk = gM[1];
          if (!gk) {
            continue
          }
          var gI = null;
          var gn = 1;
          var gf = 0;
          var gt = 0;
          if (gg && gg[0]) {
            gg = gg[0];
            gI = gg.icon;
            gn = gg.zoom ? gg.zoom / 100 : 1
          } else {
            gg = null
          }
          for (var gD = 0; gD < gk.length; gD++) {
            var gB = gk[gD][4];
            if (!gB) {
              continue
            }
            var gF = gB[2];
            if (!this._isVisible(gF, gC)) {
              continue
            }
            var go = gB[12];
            if (gG && gG.length > 0 && !go) {
              continue
            }
            var gs = Math.round(gB[0] / 100);
            var gr = Math.round(gB[1] / 100);
            var gE = {
              lng: gy + gs,
              lat: gx - (gv * gl - gr)
            };
            var gj = gs / gl;
            var gi = gv - gr / gl;
            var gw = gB[7] || "";
            var gJ = gB[5];
            var gz = {
              type: "fixed",
              name: gw,
              textImg: gu,
              rank: gB[4],
              baseX: gj,
              baseY: gi,
              iconPos: null,
              textPos: null,
              guid: gB[3] || "",
              tracer: gF,
              direction: gJ,
              startScale: 3
            };
            if ((gJ !== c2 && go || !go) && gI !== null) {
              gz.iconPos = this._getIconPosition(gI, gn, gj, gi, gE);
              if (gz.iconPos) {
                gf = gz.iconPos.width;
                gt = gz.iconPos.height
              }
            }
            if (gf === 0) {
              gz.direction = c2
            }
            if (go) {
              gz.textPos = this._getTextDrawData(gB, gj, gi, gf, gt)
            }
            if (gz.textPos || gz.iconPos) {
              gA.push(gz)
            }
          }
        }
      },
      _isVisible: function(e, i) {
        var gg;
        if (!this._binaryCache[e]) {
          gg = e.toString(2);
          if (gg.length < 8) {
            gg = new Array(8 - gg.length + 1).join("0") + gg
          }
          this._binaryCache[e] = gg
        }
        gg = this._binaryCache[e];
        var gf = E[i].start;
        return gg[i - gf] === "1"
      },
      _getIconPosition: function(gk, gi, gf, i, e) {
        var gg = this._map.config.style;
        var gl = aT["iconSetInfo" + gg][gk];
        if (!gl) {
          if (gk.charCodeAt(0) >= 48 && gk.charCodeAt(0) <= 57) {
            gl = aT["iconSetInfo" + gg]["_" + gk]
          }
        }
        if (!gl) {
          return null
        }
        var gh = gl[0];
        var gj = gl[1];
        gh = gh * gi;
        gj = gj * gi;
        return {
          srcX: 0,
          srcY: 0,
          destX: gf - gh / 2,
          destY: i - gj / 2,
          width: gh,
          height: gj,
          geoX: e.lng,
          geoY: e.lat,
          mcPt: e,
          iconType: gk
        }
      },
      _getTextDrawData: function(gr, gq, gp, gg, gn) {
        var gw = gr[5];
        if (typeof gw !== "number") {
          gw = 0
        }
        var gl = this.ratio;
        var gk = gl / 2;
        gg *= gk;
        gn *= gk;
        var gm = gr[12];
        var gh = gm.length;
        var gz = 0;
        var gy = 0;
        var gv = [];
        var gu = 0;
        var gx = 0;
        for (var gt = 0; gt < gh; gt++) {
          gx += Math.round(gm[gt][3])
        }
        for (var gt = 0; gt < gh; gt++) {
          var gj = gm[gt];
          var gi = gj[0];
          var i = gj[1];
          var gf = gj[2];
          var e = gj[3];
          var gA = 2 * gl;
          var gs = 0;
          if (gg !== 0) {
            gs = 2 * gl
          }
          if (gg === 0) {
            gw = c2
          }
          switch (gw) {
            case fS:
              var go = gp - gx / 2 - gA * (gh - 1) / 2;
              gz = gq - gf - gg / 2 - gs;
              gy = go + gu + gA * gt;
              break;
            case f8:
              var go = gp - gx / 2 - gA * (gh - 1) / 2;
              gz = gq + gg / 2 + gs;
              gy = go + gu + gA * gt;
              break;
            case d9:
              var go = gp - gn / 2 - gx - gA * (gh - 1) - gA;
              gz = gq - gf / 2;
              gy = go + gu + gA * gt;
              break;
            case c4:
              var go = gp + gn / 2 + gA / 2;
              gz = gq - gf / 2;
              gy = go + gu + gA * gt;
              break;
            case c2:
              var go = gp - e / 2 - gA * (gh - 1) / 2;
              gz = gq - gf / 2;
              gy = go + gu + gA * gt;
              break
          }
          gu += e;
          if (gf > 0 && e > 0) {
            gv.push({
              srcX: gi,
              srcY: i,
              destX: gz,
              destY: gy,
              width: gf,
              height: e
            })
          }
        }
        if (gv.length > 0) {
          return gv
        }
        return null
      },
      _getLineLabelInfo: function(go, gg, gh, gD, gQ, gv, gB, gA, gC, gu) {
        if (go.length !== 10) {
          return
        }
        var gF = this.ratio;
        var gf = this.ratio;
        var gM = go[7].length;
        var gw = go[1];
        var gO = go[3];
        var gU = go[8];
        var gk = go[4];
        var e = 2;
        var gi = gk.slice(0, e);
        for (var gR = e; gR < gk.length; gR += e) {
          gi[gR] = gi[gR - e] + gk[gR];
          gi[gR + 1] = gi[gR - (e - 1)] + gk[gR + 1]
        }
        for (var gR = e; gR < gk.length; gR += e) {
          if (gR % (gO * e) === 0 || gR % (gO * e) === 1) {
            continue
          }
          gi[gR] = gi[gR - e] + gk[gR] / gC;
          gi[gR + 1] = gi[gR - (e - 1)] + gk[gR + 1] / gC
        }
        for (var gT = 0; gT < gM; gT++) {
          var gP = go[7][gT];
          if (!this._isVisible(gP, gD)) {
            continue
          }
          var gH = go[6][gT];
          var gt = gT * gO * e;
          gk = gi.slice(gt, gt + gO * e);
          var gx = [];
          var gG = undefined;
          var gE = undefined;
          var gs = undefined;
          var gr = undefined;
          var gU = go[9].slice(0);
          if (gH) {
            gU.reverse()
          }
          var gK;
          var gI;
          for (var gS = 0; gS < gO; gS++) {
            var gq = go[5][gO * gT + gS];
            var gL = gk[gS * e] / 100;
            var gJ = gk[gS * e + 1] / 100;
            var gp = gU[gS];
            var gl = gp[0];
            var gn = gp[1];
            var gj = gp[2];
            var gm = gp[3];
            var gz;
            var gy;
            var gW;
            var gV;
            if (gS === 0) {
              gK = gW = gL / gQ;
              gI = gv - gJ / gQ;
              gV = gJ / gQ
            } else {
              gW = gL / gQ;
              gV = gJ / gQ
            }
            var gY = gK + (gW - gK) * gf - gj / 2;
            var gX = gI + (gv - gV - gI) * gf - gm / 2;
            if (gG === undefined) {
              gG = gK - gj / 2;
              gE = gI - gm / 2;
              gs = gG + gj;
              gr = gE + gm
            } else {
              if (gY < gG) {
                gG = gY
              }
              if (gX < gE) {
                gE = gX
              }
              if (gY + gj > gs) {
                gs = gY + gj
              }
              if (gX + gm > gr) {
                gr = gX + gm
              }
            }
            gx.push({
              angle: gq,
              srcX: gl,
              srcY: gn,
              destX: gY,
              destY: gX,
              width: gj,
              height: gm
            })
          }
          var gN = {
            type: "line",
            textImg: gg,
            rank: gw,
            baseX: gK,
            baseY: gI,
            arrWordPos: gx,
            minXOriginal: gG,
            minYOriginal: gE,
            maxXOriginal: gs,
            maxYOriginal: gr,
            text: ""
          };
          gu.push(gN)
        }
      },
      alterColor: function(gj, e, gi) {
        var gf = this._colorCtx
          , i = this._canvas2dMapMgr;
        gf.clearRect(0, 0, gj.width, gj.height);
        gf.drawImage(e, gj.srcX, gj.srcY, gj.width, gj.height, 0, 0, gj.width, gj.height);
        var gh = gf.getImageData(0, 0, gj.width, gj.height)
          , gg = i.getFilterImageData(gh, gi);
        gf.putImageData(gg, 0, 0)
      },
      drawIconAndText: function(gv, gu, e) {
        var gm = this.ratio;
        var gk = this.sizeRatio / gm;
        var go = 2 / gm;
        var gG = this;
        for (var gy = 0, gw = gu.length; gy < gw; gy++) {
          var gn = gu[gy];
          if (gn.isDel == false) {
            var gh = gn.baseDrawX;
            var gg = gn.baseDrawY;
            if (gn.type == "fixed") {
              var gj = gn.iconPos
                , gz = gn.textPos
                , gs = gn.textImg
                , gC = gn.startScale;
              if (gj && gC <= e) {
                var gf = this._iconCache[gj.iconType];
                if (gf) {
                  if (gf.img) {
                    gv.drawImage(gf.img, 0, 0, gf.img.width, gf.img.height, Math.round(gh * gm + (gj.drawX - gh) / go), Math.round(gg * gm + (gj.drawY - gg) / go), gj.width / go, gj.height / go)
                  } else {
                    gf.drawLabels.push(gn)
                  }
                } else {
                  if (!gf) {
                    this._iconCache[gj.iconType] = {
                      img: null,
                      drawLabels: [gn]
                    };
                    var gI = new Image();
                    gI._iconName = gj.iconType;
                    gI.onload = function() {
                      var gO = gG._iconCache[this._iconName];
                      gO.img = this;
                      this.onload = null;
                      for (var gK = 0; gK < gO.drawLabels.length; gK++) {
                        var gM = gO.drawLabels[gK];
                        var gL = gM.baseDrawX;
                        var gJ = gM.baseDrawY;
                        var gN = gM.iconPos;
                        gv.drawImage(this, 0, 0, this.width, this.height, Math.round(gL * gm + (gN.drawX - gL) / go), Math.round(gJ * gm + (gN.drawY - gJ) / go), gN.width / go, gN.height / go)
                      }
                      gO.drawPos = []
                    }
                    ;
                    gI.src = dW.getIconSetPath(gG._map.config.style) + gj.iconType + ".png"
                  }
                }
              }
              if (gz && gs && gC <= e) {
                for (var gl = 0; gl < gz.length; gl++) {
                  var gt = gz[gl];
                  if (!gn._tempRank) {
                    gv.drawImage(gs, gt.srcX, gt.srcY, gt.width, gt.height, Math.round(gh * gm + (gt.drawX - gh) / gk), Math.round(gg * gm + (gt.drawY - gg) / gk), gt.width / gk, gt.height / gk)
                  } else {
                    this.alterColor(gt, gs, gn._tempRank);
                    gv.drawImage(this._colorCvs, 0, 0, gt.width, gt.height, Math.round(gh * gm + (gt.drawX - gh) / gk), Math.round(gg * gm + (gt.drawY - gg) / gk), gt.width / gk, gt.height / gk)
                  }
                }
              }
            } else {
              var gi = gn.arrWordPos
                , gs = gn.textImg
                , gr = gn.tileX
                , gp = gn.tileY;
              for (var gx = 0, gq = gi.length; gx < gq; gx++) {
                var gA = gi[gx];
                var gH = Math.round(gr + gA.destX);
                var gF = Math.round(gp + gA.destY);
                var gB = gA.angle;
                gH = gh * gm + gH - gh;
                gF = gg * gm + gF - gg;
                if (gB > 10 && gB < 350) {
                  gv.save();
                  var gE = Math.round(gH + gA.width / 2);
                  var gD = Math.round(gF + gA.height / 2);
                  gv.translate(gE, gD);
                  gv.rotate(-gB / 180 * Math.PI);
                  gv.drawImage(gs, gA.srcX, gA.srcY, gA.width, gA.height, -Math.round(gA.width / 2), -Math.round(gA.height / 2), gA.width / gk, gA.height / gk);
                  gv.restore()
                } else {
                  gv.drawImage(gs, gA.srcX, gA.srcY, gA.width, gA.height, gH, gF, gA.width / gk, gA.height / gk)
                }
              }
            }
          }
        }
      },
      isCollide: function(gi, gr, gq, e, gk, gf, gm) {
        for (var gh = 0, gg = gf.length; gh < gg; gh++) {
          var gl = gf[gh]
            , gj = 1 / Math.pow(2, gm + 1)
            , gp = gj * gl[3] / 2
            , go = gj * gl[4] / 2
            , gn = gl[0];
          if (gn != gi) {
            if (!(gr + e < gl[1] - gp || gr > gl[1] + gl[3] + gp || gq + gk < gl[2] - go || gq > gl[2] + gl[4] + go)) {
              return true
            }
          }
        }
        return false
      },
      zoomingIconAndText: function(gG, gA, gg, gE, gF, g7, gN, go, gT, gM, gx) {
        var g8 = this.ratio;
        var gp = this.sizeRatio / g8;
        var g9 = 2 / g8;
        var hj = g8 / 2;
        var g3 = gE.x;
        var g2 = gE.y;
        var gH = 2 * g8;
        if (gx !== 0) {
          g2 += gM
        }
        var gs = undefined
          , gl = undefined
          , gi = undefined
          , gn = undefined
          , gw = undefined;
        var gS = g7 > 0 ? true : false;
        if (!gS) {
          gs = [];
          var gW = 1 - gN
        }
        for (var hf = 0, hd = gA.length; hf < hd; hf++) {
          var ha = gA[hf];
          if (ha.isDel == false) {
            var hk = ha.baseDrawX;
            var hh = ha.baseDrawY;
            gG.save();
            gG.translate(-go * g8, -gT * g8);
            if (ha.isFadeout) {
              if (!gS && ha._schedule <= gN && !ha._isIgnore) {
                gG.globalAlpha = gW;
                ha._schedule = gN
              } else {
                ha._isIgnore = true;
                continue
              }
            }
            if (ha.type == "fixed") {
              var gI = ha.iconPos
                , gP = ha.textPos
                , gj = ha.textImg
                , gJ = ha.startScale;
              var gf;
              var g0 = 0;
              if (gI) {
                g0 = gH
              }
              if (gI && !ha.iconImg && this._iconCache[gI.iconType]) {
                gf = this._iconCache[gI.iconType].img
              }
              if (gI && gJ <= gF && gf) {
                gn = gI.width;
                gw = gI.height;
                gl = (g3 + (hk - g3) * gg) * g8 - gn / 2 / g9;
                gi = (g2 + (hh - g2) * gg) * g8 - gw / 2 / g9 + gx;
                if (!gS && this.isCollide(hf, gl, gi, gn, gw, gs, g7)) {
                  ha.isFadeout = true
                }
                gG.drawImage(gf, gI.srcX, gI.srcY, gf.width, gf.height, Math.round(gl), Math.round(gi), gn / g9, gw / g9);
                !gS && gs.push([hf, gl, gi, gn, gw])
              }
              if (gP && gj && gJ <= gF) {
                var gO;
                var gQ;
                var gz = 0;
                var gL = 0;
                if (gI) {
                  gz = gI.width;
                  gL = gI.height
                }
                var g1 = gP.length;
                var gr = 0;
                var gR = 0;
                for (var gB = 0; gB < g1; gB++) {
                  var hc = gP[gB];
                  gR += hc.height;
                  if (gr < hc.width) {
                    gr = hc.width
                  }
                }
                gR += (gB - 1) * gH;
                if (!gS && this.isCollide(hf, gl, gi, gr, gR, gs, g7)) {
                  ha.isFadeout = true
                }
                var hb = 0;
                for (var gB = 0; gB < g1; gB++) {
                  var hc = gP[gB];
                  switch (ha.direction) {
                    case fS:
                      gO = -(gz / 2 / g9 + hc.width + g0);
                      gQ = -gR / 2 + hb + gH * gB;
                      break;
                    case f8:
                      gO = gz / 2 / g9 + g0;
                      gQ = -gR / 2 + hb + gH * gB;
                      break;
                    case d9:
                      gO = -hc.width / 2;
                      gQ = -gL / 2 / g9 - gR + hb - gH * (gB + 1);
                      break;
                    case c4:
                      gO = -hc.width / 2;
                      gQ = gL / 2 / g9 + hb + gH * (gB + 1);
                      break;
                    case c2:
                      gO = -hc.width / 2;
                      gQ = -gR / 2 + hb + gH * gB;
                      break
                  }
                  hb += hc.height;
                  gl = (g3 + (hk - g3) * gg) * g8 + gO / gp;
                  gi = (g2 + (hh - g2) * gg) * g8 + gQ / gp;
                  +gx;
                  gn = hc.width;
                  gw = hc.height;
                  if (!ha._tempRank) {
                    gG.drawImage(gj, hc.srcX, hc.srcY, gn, gw, Math.round(gl), Math.round(gi), gn / gp, gw / gp)
                  } else {
                    this.alterColor(hc, gj, ha._tempRank);
                    gG.drawImage(this._colorCvs, 0, 0, gn, gw, Math.round(gl), Math.round(gi), gn / gp, gw / gp)
                  }
                  !gS && gs.push([hf, gl, gi, gn, gw])
                }
              }
            } else {
              var gy = ha.arrWordPos
                , gj = ha.textImg
                , hi = ha.tileX
                , hg = ha.tileY;
              var gq = gy[0];
              var gm = Math.round(hi + gq.destX);
              var gk = Math.round(hg + gq.destY);
              for (var he = 0, gZ = gy.length; he < gZ; he++) {
                var g6 = gy[he];
                var hm = Math.round(hi + g6.destX);
                var hl = Math.round(hg + g6.destY);
                var gD = g6.angle;
                var gY = Math.round((g3 + (hk - g3) * gg) * g8 - gq.width / 2 + hm - gm);
                var gX = Math.round((g2 + (hh - g2) * gg) * g8 - gq.height / 2 + hl - gk);
                gl = gY;
                gi = gX;
                gn = g6.width;
                gw = g6.height;
                if (!gS && this.isCollide(hf, gl, gi, gn, gw, gs, g7)) {
                  ha.isFadeout = true
                }
                if (gD > 10 && gD < 350) {
                  var g5 = gY + g6.width / 2;
                  var g4 = gX + g6.height / 2;
                  var gh = gD / 180 * Math.PI;
                  var gK = Math.cos(gh);
                  var gt = Math.sin(gh);
                  var gV = gK;
                  var gu = gK;
                  var gU = gt;
                  var gv = -gt;
                  var gC = g5 - g5 * gK - g4 * gt;
                  var e = g4 + g5 * gt - g4 * gK;
                  gG.save();
                  gG.transform(gV, gv, gU, gu, gC, e);
                  gG.drawImage(gj, g6.srcX, g6.srcY, gn, gw, gl, gi, gn / gp, gw / gp);
                  gG.restore()
                } else {
                  gG.drawImage(gj, g6.srcX, g6.srcY, gn, gw, gl, gi, gn / gp, gw / gp)
                }
                !gS && gs.push([hf, gl, gi, gn, gw])
              }
            }
            gG.restore()
          }
        }
      }
    });
    function fp(e) {
      this.initVars(e)
    }
    z.extend(fp.prototype, {
      initVars: function(e) {
        this._map = e._map;
        this._canvas2dMapMgr = e;
        this.base64Prefix = "data:image/png;base64,";
        this.bizData = null;
        this.objTextsPng = null;
        this.arrIconsPng = null;
        this.bizLabels = null
      },
      proecessBizData: function(gi, gm) {
        var gk = this;
        this.bizData = gi;
        this.objTextsPng = null;
        this.arrIconsPng = null;
        var gf = gi.textsPng;
        var go = gi.iconsPng;
        if (!gf || !go) {
          return
        }
        var gl = new Image();
        gl.onload = function() {
          gk.objTextsPng = this;
          gk.calcIconAndTextInfo(gm);
          this.onload = null
        }
        ;
        gl.src = this.base64Prefix + gf;
        var gn = go.length;
        var e = [];
        for (var gh = 0; gh < gn; gh++) {
          var gj = go[gh];
          var gg = new Image();
          (function(i) {
              gg.onload = function() {
                gn--;
                e[i] = this;
                if (gn === 0) {
                  gk.arrIconsPng = e;
                  gk.calcIconAndTextInfo(gm)
                }
                this.onload = null
              }
            }
          )(gh);
          gg.src = this.base64Prefix + gj
        }
      },
      calcIconAndTextInfo: function(gp) {
        if (this.objTextsPng && this.arrIconsPng) {
          var gl = this.bizData;
          var gj = gl.pois;
          var e = [];
          for (var gm = 0, gi = gj.length; gm < gi; gm++) {
            var gg = gj[gm];
            var gk = this.arrIconsPng[gg.iconPng];
            var gh = gk.height / 2;
            var go = {
              type: "fixed",
              name: "",
              textImg: this.objTextsPng,
              iconImg: gk,
              rank: gg.rank,
              iconPos: {
                srcX: 0,
                srcY: 0,
                destX: -gk.width / 2,
                destY: -gh / 2,
                width: gk.width,
                height: gh,
                geoX: gg.x,
                geoY: gg.y,
                iconType: "vectorCustom"
              },
              textPos: this.calcTextPos(gg.pos, gk),
              startScale: gg.from < 12 ? 12 : gg.from,
              guid: gg.guid,
              guidExt: 1,
              adver_log: gg.adver_log || ""
            };
            var gf = {
              type: "fixed",
              textDirLeft: "left",
              name: "",
              textImg: this.objTextsPng,
              iconImg: gk,
              rank: gg.rank,
              iconPos: {
                srcX: 0,
                srcY: 0,
                destX: -gk.width / 2,
                destY: -gh / 2,
                width: gk.width,
                height: gh,
                geoX: gg.x,
                geoY: gg.y,
                iconType: "vectorCustom"
              },
              textPos: this.calcTextPosLeft(gg.pos, gk),
              startScale: gg.from < 12 ? 12 : gg.from,
              guid: gg.guid,
              guidExt: 1,
              adver_log: gg.adver_log || ""
            };
            var gn = [go, gf];
            e.push(gn)
          }
          this.bizLabels = e;
          gp && gp()
        }
      },
      calcTextPos: function(gj, gf) {
        var i = [];
        var gi = gj.length / 4;
        var gh = gf.width / 2;
        if (gi === 1) {
          var gg = {
            srcX: gj[0],
            srcY: gj[1],
            destX: gh,
            destY: -gj[3] / 2,
            width: gj[2],
            height: gj[3]
          };
          i.push(gg)
        } else {
          var gg = {
            srcX: gj[0],
            srcY: gj[1],
            destX: gh,
            destY: -gj[3],
            width: gj[2],
            height: gj[3]
          };
          var e = {
            srcX: gj[4],
            srcY: gj[5],
            destX: gh,
            destY: 0,
            width: gj[6],
            height: gj[7]
          };
          i.push(gg);
          i.push(e)
        }
        return i
      },
      calcTextPosLeft: function(gj, gf) {
        var i = [];
        var gi = gj.length / 4;
        var gh = gf.width / 2;
        if (gi === 1) {
          var gg = {
            srcX: gj[0],
            srcY: gj[1],
            destX: -gh - gj[2],
            destY: -gj[3] / 2,
            width: gj[2],
            height: gj[3]
          };
          i.push(gg)
        } else {
          var gg = {
            srcX: gj[0],
            srcY: gj[1],
            destX: -gh - gj[2],
            destY: -gj[3],
            width: gj[2],
            height: gj[3]
          };
          var e = {
            srcX: gj[4],
            srcY: gj[5],
            destX: -gh - gj[2],
            destY: 0,
            width: gj[6],
            height: gj[7]
          };
          i.push(gg);
          i.push(e)
        }
        return i
      },
      clearBizData: function() {
        this.bizData = null;
        this.bizLabels = null
      }
    });
    function ck() {}
    z.extend(ck.prototype, {
      centerAndZoomIn: function(gf, gm, gn) {
        gn = gn || {};
        if (!this.loaded) {
          this.firstTileLoad = false
        }
        gm = this._getProperZoom(gm).zoom;
        if (gn.noAnimation !== true && this.loaded) {
          var gi = this._ifUseAnimation(gf, gm);
          if (gi) {
            this.flyToIn(gf, gm, gn);
            return
          }
        }
        var gk = this;
        if (!gf && !gm) {
          return
        }
        this._stopAllAnimations();
        if (gf && !gf.equals(this.centerPoint)) {
          this.fire(new aL("oncenter_changed"))
        }
        if (gm && gm !== this.zoomLevel) {
          this.fire(new aL("onzoom_changed"))
        }
        gf = gf || this.centerPoint;
        gm = gm || this.zoomLevel;
        gm = this._getProperZoom(gm).zoom;
        if (this.mapType === BMAP_EARTH_MAP) {
          if (!this._earth) {
            this.mapType = BMAPGL_NORMAL_MAP;
            this.temp.originMapType = BMAP_EARTH_MAP;
            function gl() {
              gk._earth = new aT.Earth(gk,{
                showRealSunlight: gk.config.showRealSunlight,
                showMilkyway: gk.config.showMilkyway,
                earthBackground: gk.config.earthBackground
              });
              gk._proxyEarthEvents();
              gk._changeEarthMapType(BMAP_EARTH_MAP);
              z.extend(gk, aT.EarthView.prototype);
              delete gk.temp.originMapType
            }
            c9.load("earth", function() {
              if (aT["FeatureStyle" + gk.config.style]) {
                gl()
              } else {
                gk.loadMapStyleFiles(function() {
                  gl()
                })
              }
            })
          }
        }
        this.lastLevel = this.zoomLevel || gm;
        this.zoomLevel = gm;
        var gj = new aL("onload");
        gj.point = gf;
        gj.zoom = gm;
        this.centerPoint = new fU(gf.lng,gf.lat);
        this.defaultZoomLevel = this.defaultZoomLevel || this.zoomLevel;
        this.defaultCenter = this.defaultCenter || this.centerPoint;
        if (this.mapType !== BMAP_EARTH_MAP) {
          this.centerPoint = this.restrictCenter(this.centerPoint)
        }
        if (!this.loaded && !(this.temp.originMapType === BMAP_EARTH_MAP)) {
          var i = this.config.defaultMaxBounds;
          var gh = new cj(i,"baidu",this.mapType);
          var gg = new b7({
            mapType: this.mapType,
            copyright: gh,
            dataType: fa,
            customLayer: false,
            baseLayer: true,
            tileTypeName: "na"
          });
          gg._isInnerLayer = true;
          this.addTileLayer(gg);
          if (this.mapType === BMAP_SATELLITE_MAP && this._isHybridShow === true) {
            this._addHybirdMap()
          }
          this.baseLayerAdded = true;
          this.on("zoom_changed", function() {
            if (this._heading === 0) {
              return
            }
            if (this.getZoom() < 7 && this.config.restrictCenter === true) {
              gk.resetHeading()
            }
          })
        }
        this.loaded = true;
        this.dispatchEvent(gj);
        gn.callback && gn.callback()
      },
      _ifUseAnimation: function(gg, gl) {
        var gk = this.getSize();
        var gf = {
          zoom: this.zoomLevel
        };
        var gn = {
          zoom: gl
        };
        var gm = this.pointToPixelIn(this.centerPoint);
        var gh = this.pointToPixelIn(gg, gf);
        var gj = this.pointToPixelIn(this.centerPoint, gn);
        var gp = this.pointToPixelIn(gg, gn);
        var gi = Math.abs(gm.x - gh.x);
        var i = Math.abs(gm.y - gh.y);
        var e = Math.abs(gj.x - gp.x);
        var go = Math.abs(gj.y - gp.y);
        if ((gi > gk.width || i > gk.height) && (e > gk.width || go > gk.height)) {
          return false
        }
        return true
      },
      _setPlatformPosition: function(gn, gm, gp) {
        gp = gp || {};
        if (gn === 0 && gm === 0 && !gp.point) {
          return
        }
        if (isNaN(gp.initMapOffsetX)) {
          gp.initMapOffsetX = this.offsetX
        }
        if (isNaN(gp.initMapOffsetY)) {
          gp.initMapOffsetY = this.offsetY
        }
        var gj = cS(this._heading);
        if (this._tilt > 0) {
          gm = gm / Math.cos(cS(this._tilt))
        }
        var go = gn * Math.cos(gj) + gm * Math.sin(gj);
        var gl = -gn * Math.sin(gj) + gm * Math.cos(gj);
        go = go + gp.initMapOffsetX;
        gl = gl + gp.initMapOffsetY;
        if (gp.point) {
          var i = this.restrictCenter(gp.point);
          if (!i.equals(this.centerPoint)) {
            this.centerPoint = i.clone();
            this.fire(new aL("oncenter_changed"))
          }
        } else {
          var gg = this.offsetX - go;
          var e = this.offsetY - gl;
          var gk = this.centerPoint.lng;
          var gi = this.centerPoint.lat;
          var gh = new fU(gk,gi);
          var gf = this.getZoomUnits();
          this.centerPoint = this.restrictCenter(new fU(gh.lng + gg * gf,gh.lat - e * gf), gf);
          this.fire(new aL("oncenter_changed"))
        }
        this.offsetX = go;
        this.offsetY = gl;
        this.dispatchEvent(new aL("onmoving"))
      },
      restrictCenter: function(gg, gh) {
        if (this.config.restrictCenter === false) {
          return gg
        }
        gh = gh || this.getZoomUnits();
        var gf = this.pixelToPointIn(new dh(0,0), {
          center: gg
        });
        var i = this.pixelToPointIn(new dh(0,this.height), {
          center: gg
        });
        if (this.zoomLevel < 5) {
          if (gf.lat > cl.MAX_LAT && i.lat < cl.MIN_LAT) {
            var gi = cl.MAX_LAT - gg.lat;
            var e = gg.lat - cl.MIN_LAT;
            var gk;
            if (gi < e) {
              gk = gi / (this.height / 2)
            } else {
              gk = e / (this.height / 2)
            }
            var gj = 18 - dy(gk);
            this.zoomLevel = gj;
            return gg
          }
        }
        if (gf.lat > cl.MAX_LAT) {
          gg.lat = cl.MAX_LAT - this.height / 2 * gh
        } else {
          if (i.lat < cl.MIN_LAT) {
            gg.lat = cl.MIN_LAT + this.height / 2 * gh
          }
        }
        return gg
      },
      zoomTo: function(e, gr, gs) {
        var gn = bv[this.mapType];
        if (!gn) {
          return
        }
        var gm = this._getProperZoom(e);
        e = gm.zoom;
        if (this.zoomLevel === e) {
          return
        }
        var gi = e;
        this.lastLevel = this.zoomLevel;
        gs = gs || {};
        if (this.zoomEventStatus === "idle") {
          this.fire(new aL("onzoomstart"));
          this.zoomEventStatus = "zooming"
        }
        if (!gr && (this.getInfoWindow() && this.temp.infoWin && this.temp.infoWin.isOpen())) {
          gr = this.getInfoWindow().getPoint()
        }
        var gf;
        if (gr) {
          gf = this.pointToPixelIn(gr)
        }
        var gj = this.pixelToPointIn(gf);
        var gk = this.centerPoint.clone();
        this.fixPoint = gr;
        this.fixPixel = gf;
        this.fixCenter = gk;
        this.mousePosMCPoint = gj;
        if (gs.noAnimation) {
          e = gm.zoom;
          this.zoomLevel = e;
          this.fire(new aL("onzoom_changed"));
          var gh = this.getCurrentMaxTilt();
          if (this._tilt > gh) {
            this._tilt = gh
          }
          if (gr) {
            if (this._heading % 360 !== 0 || this._tilt > 0) {
              var i = this._webglMapCamera.fromScreenPixelToMC(gf.x, gf.y, {
                center: gk,
                zoom: this.zoomLevel
              });
              if (i) {
                var go = i.sub(gj);
                var gg = gk.sub(go);
                this.centerPoint = this.restrictCenter(gg)
              }
            } else {
              var gl = this.getZoomUnits();
              var gg = new fU(gr.lng - gl * (gf.x - this.width / 2),gr.lat + gl * (gf.y - this.height / 2));
              this.centerPoint = this.restrictCenter(gg, gl)
            }
            this.fire(new aL("oncenter_changed"))
          }
          this._checkFireZoomend();
          return
        }
        this._animationInfo.zoom = {
          current: this.zoomLevel,
          diff: e - this.zoomLevel,
          target: e
        };
        var gp = this;
        gs.callback = function() {
          gp._checkFireZoomend()
        }
        ;
        var gq = this._tilt;
        if (this.fixPoint || gq > cl.MAX_DRAG_TILT_L2) {
          gs.renderCallback = function() {
            var gw = gp.getCurrentMaxTilt();
            if (gp._tilt > gw) {
              gp._tilt = gw
            }
            var gx = gp.fixPixel;
            if (!gp.fixPixel || !gp.fixPoint) {
              return
            }
            var gt = gp.fixPixel;
            var gD = gp.fixPoint;
            var gA = gp.fixCenter;
            var gy = gp.mousePosMCPoint;
            if (gp._heading % 360 !== 0 || gp._tilt > 0) {
              var gu = gp._webglMapCamera.fromScreenPixelToMC(gt.x, gt.y, {
                center: gA,
                zoom: gp.zoomLevel,
                tilt: gp._tilt
              });
              if (gu) {
                var gC = gu.sub(gy);
                var gv = gA.sub(gC);
                gp.centerPoint = gp.restrictCenter(gv)
              }
            } else {
              var gz = gt;
              var gB = gp.getZoomUnits();
              var gv = new fU(gD.lng - gB * (gz.x - gp.width / 2),gD.lat + gB * (gz.y - gp.height / 2));
              gp.centerPoint = gp.restrictCenter(gv, gB)
            }
            gp.fire(new aL("oncenter_changed"))
          }
        }
        if (gs.fromMouseWheel === true) {
          this._startInfiniteZoomAnimation(gs);
          return
        }
        this._startAnimation(gs)
      },
      _checkFireZoomend: function() {
        var e = this;
        if (e.fireZoomendTimer) {
          clearTimeout(e.fireZoomendTimer)
        }
        e.fireZoomendTimer = setTimeout(function() {
          if (e.zoomEventStatus === "zooming") {
            e.fire(new aL("onzoomend"));
            e.zoomEventStatus = "idle"
          }
          e.fireZoomendTimer = null
        }, 150)
      },
      deepZoomMedia: function(e) {
        var i = this;
        if (!i.temp.isStdCtrlBusy) {
          i.temp.isStdCtrlBusy = true;
          i.deepZoomTo(i.zoomLevel + e);
          setTimeout(function() {
            i.temp.isStdCtrlBusy = false
          }, 400)
        }
      },
      deepZoomTo: function(e) {
        this.zoomTo(e)
      },
      flyToIn: function(gf, gK, gv) {
        gv = gv || {};
        var gh = this._getProperZoom(gK);
        gK = gh.zoom;
        if (this.centerPoint.equals(gf) && this.zoomLevel === gK && typeof gv.heading !== "number" && typeof gv.tilt !== "number") {
          return
        }
        var e = this.getHeading() % 360;
        var gn = this.getTilt();
        var gt = 0;
        var gx = 0;
        var gq = this.getBounds().containsPoint(gf);
        if (typeof gv.heading === "number") {
          gt = gv.heading
        } else {
          if (gq) {
            gt = e
          }
        }
        if (typeof gv.tilt === "number") {
          gx = gv.tilt
        } else {
          if (gq) {
            gx = gn
          }
        }
        this._heading = e;
        var gH = gt - e;
        var gD = gx - gn;
        var gr = this;
        var gj = this.zoomLevel;
        var gk = 1.42;
        var gz = this.zoomScale(gK - gj);
        var gM = this.getZoomUnits();
        var gp = this.centerPoint.div(gM);
        var gN = gf.div(gM);
        var gG = this.worldSize();
        var gC = gk;
        var gB = Math.max(this.width, this.height);
        var gA = gB / gz;
        var go = gN.sub(gp).mag();
        var i = gC * gC;
        function gJ(gP) {
          var gO = (gA * gA - gB * gB + (gP ? -1 : 1) * i * i * go * go) / (2 * (gP ? gA : gB) * i * go);
          return Math.log(Math.sqrt(gO * gO + 1) - gO)
        }
        function gg(gO) {
          return (Math.exp(gO) - Math.exp(-gO)) / 2
        }
        function gl(gO) {
          return (Math.exp(gO) + Math.exp(-gO)) / 2
        }
        function gu(gO) {
          return gg(gO) / gl(gO)
        }
        var gm = gJ(0);
        var gE = function(gO) {
          return (gl(gm) / gl(gm + gC * gO))
        };
        var gF = function(gO) {
          return gB * ((gl(gm) * gu(gm + gC * gO) - gg(gm)) / i) / go
        };
        var gi = (gJ(1) - gm) / gC;
        if (Math.abs(go) < 0.000001 || gi === Infinity || isNaN(gi)) {
          if (Math.abs(gB - gA) < 0.000001) {
            this._animationInfo.zoom = {
              current: this.zoomLevel,
              diff: gK - this.zoomLevel
            };
            this._animationInfo.center = {
              current: this.centerPoint,
              diff: gf.sub(this.centerPoint)
            };
            this._animationInfo.heading = {
              current: e,
              diff: gt - e
            };
            this._animationInfo.tilt = {
              current: gn,
              diff: gx - gn
            };
            this.setLock(true);
            this._startAnimation({
              callback: function(gO) {
                gr.setLock(false);
                if (gv.callback) {
                  gv.callback(gO)
                }
              },
              duration: gv.duration
            });
            return
          }
          var gL = gA < gB ? -1 : 1;
          gi = Math.abs(Math.log(gA / gB)) / gC;
          gF = function() {
            return 0
          }
          ;
          gE = function(gO) {
            return Math.exp(gL * gC * gO)
          }
        }
        var gI = 1.7;
        if (gi < 0.3) {
          gI = 0.8
        } else {
          if (gi > 5) {
            gI = (gi - 5) / 2 + gI
          }
        }
        var gw = gv.duration || 1000 * gi / gI;
        if (isNaN(gw)) {
          var gy = {};
          for (var gs in gv) {
            gy[gs] = gv[gs];
            gy.noAnimation = true
          }
          this.centerAndZoomIn(gf, gK, gy);
          return
        }
        this.fire(new aL("onmovestart"));
        this.fire(new aL("onzoomstart"));
        this.setLock(true);
        this._startAnimation({
          duration: gw,
          renderCallback: function(gO, gP) {
            var gQ = gO * gi;
            var gT = gF(gQ);
            var gS = gj + gr.scaleZoom(1 / gE(gQ));
            if (gS < gr.getMinZoom()) {
              gS = gr.getMinZoom()
            }
            if (gS > gr.getMaxZoom()) {
              gS = gr.getMaxZoom()
            }
            if (gS !== gr.zoomLevel) {
              gr.zoomLevel = gS;
              gr.fire(new aL("onzoom_changed"))
            }
            gr.centerPoint = gp.add(gN.sub(gp).mult(gT)).mult(gM);
            gr.fire(new aL("oncenter_changed"));
            if (typeof gt === "number") {
              var gR = gO / 0.7;
              if (gR > 1) {
                gR = 1
              }
              gr.setHeading(e + gH * gO, {
                noAnimation: true
              })
            }
            if (typeof gx === "number") {
              gr.setTilt(gn + gD * gO, {
                noAnimation: true
              })
            }
          },
          callback: function(gO, gP) {
            gr.setLock(false);
            if (gP && gP.stop === true) {
              gr.fire(new aL("onmoveend"));
              gr.fire(new aL("onzoomend"));
              gv.callback && gv.callback(gO);
              return
            }
            if (gK !== gr.zoomLevel) {
              gr.zoomLevel = gK;
              gr.fire(new aL("onzoom_changed"))
            }
            gr.fire(new aL("onmoveend"));
            gr.fire(new aL("onzoomend"));
            gv.callback && gv.callback(gO)
          }
        })
      },
      zoomScale: function(e) {
        return Math.pow(2, e)
      },
      scaleZoom: function(e) {
        return Math.log(e) / Math.LN2
      },
      panToIn: function(i, gf) {
        gf = gf || {};
        if (!i || i.equals(this.centerPoint)) {
          gf.callback && gf.callback();
          return
        }
        var gg = this.pointToPixelIn(i);
        var e = Math.round(this.width / 2);
        var gi = Math.round(this.height / 2);
        var gh = this._ifUseAnimation(i, this.zoomLevel);
        if (gf.noAnimation === true || gh === false) {
          this._stopAllAnimations();
          this._panToIn(e - gg.x, gi - gg.y, i);
          gf.callback && gf.callback();
          return
        }
        this.flyToIn(i, this.zoomLevel, gf)
      },
      _panToIn: function(i, e, gg) {
        var gf = this.temp;
        if (gf.operating === true) {
          return
        }
        if (gf.dragAni) {
          gf.dragAni.stop(false, {
            readyToMove: true
          });
          gf.dragAni = null
        }
        this.dispatchEvent(new aL("onmovestart"));
        this._setPlatformPosition(i, e, {
          point: gg
        });
        this.dispatchEvent(new aL("onmoveend"))
      },
      _stopAllAnimations: function(e) {
        e = e || {};
        if (this._ani) {
          this._ani.stop(!!e.goToEnd, {
            stopCurrentAnimation: e.stopCurrentAnimation
          });
          this._ani = null
        }
        if (this._infiniteAni) {
          this._infiniteAni.stop();
          this._infiniteAni = null
        }
      },
      panBy: function(i, e, gf) {
        i = Math.round(i) || 0;
        e = Math.round(e) || 0;
        gf = gf || {};
        if (Math.abs(i) <= this.width && Math.abs(e) <= this.height && gf.noAnimation !== true) {
          this._panBy(i, e, gf)
        } else {
          this._panToIn(i, e, gf.point);
          gf.callback && gf.callback()
        }
      },
      _panBy: function(i, e, gh) {
        if (this.temp.operating === true) {
          return
        }
        gh = gh || {};
        this.dispatchEvent(new aL("onmovestart"));
        var gg = this;
        var gf = gg.temp;
        gf.pl = gg.offsetX;
        gf.pt = gg.offsetY;
        if (gf.tlPan) {
          gf.tlPan.cancel()
        }
        if (gf.dragAni) {
          gf.dragAni.stop(false, {
            readyToMove: true
          });
          gf.dragAni = null
        }
        gf.tlPan = new n({
          fps: gh.fps || gg.config.fps,
          duration: gh.duration || gg.config.actionDuration,
          transition: gh.transition || bK.easeInOutQuad,
          render: function(gi) {
            this.terminative = gg.temp.operating;
            if (gg.temp.operating) {
              return
            }
            gg._setPlatformPosition(i * gi, e * gi, {
              initMapOffsetX: gf.pl,
              initMapOffsetY: gf.pt
            })
          },
          finish: function(gi) {
            gg.dispatchEvent(new aL("onmoveend"));
            gg.temp.tlPan = false;
            if (gg.temp.stopArrow === true) {
              gg.temp.stopArrow = false;
              if (gg.temp.arrow !== 0) {
                gg._arrow()
              }
            }
          }
        })
      },
      _startAnimation: function(i) {
        var gh = this._animationInfo;
        var gf = this;
        i = i || {};
        if (gf._ani) {
          gf._ani.stop(!!i.goToEnd, {
            stopCurrentAnimation: i.stopCurrentAnimation
          })
        }
        if (gf._infiniteAni) {
          gf._infiniteAni.stop();
          gf._infiniteAni = null
        }
        var gi = i.duration || 500;
        var gj = i.transition || bK.ease;
        var e = new aL("onanimation_start");
        this.fire(e);
        if (i.unstopable) {
          gh = this._animationInfoUnstopable
        }
        var gg = new n({
          duration: gi,
          transition: gj,
          render: function(gm, gl) {
            for (var gk in gh) {
              if (!gh.hasOwnProperty(gk)) {
                continue
              }
              var go = gh[gk].current;
              var gn = gh[gk].diff;
              gf._setValueTick(gk, go, gn, gm)
            }
            if (i.renderCallback) {
              i.renderCallback(gm, gl)
            }
          },
          finish: function(gk) {
            gf.fire(new aL("onanimation_end"));
            if (i.unstopable) {
              gf._animationInfoUnstopable = {};
              gf._unstopableAni = null
            } else {
              gf._ani = null;
              gf._animationInfo = {}
            }
            if (i.mapNeedCbk) {
              i.mapNeedCbk()
            }
            if (i.callback) {
              i.callback(gk)
            }
          },
          onStop: function(gk) {
            gk = gk || {};
            gf.fire(new aL("onanimation_end"));
            if (gk.stopCurrentAnimation) {
              gf._animationInfo = {}
            }
            gf._ani = null;
            if (i.mapNeedCbk) {
              i.mapNeedCbk()
            }
            if (i.callback) {
              i.callback(null, {
                stop: true
              })
            }
          }
        });
        if (i.unstopable) {
          gf._unstopableAni = gg
        } else {
          gf._ani = gg
        }
      },
      _startInfiniteZoomAnimation: function(e) {
        var i = this;
        if (i._ani) {
          i._ani.stop(!!e.goToEnd, {
            stopCurrentAnimation: e.stopCurrentAnimation
          })
        }
        if (i._infiniteAni) {
          return
        }
        this.fire(new aL("onanimation_start"));
        i._infiniteAni = new n({
          duration: 10000,
          transition: bK.linear,
          render: function() {
            var gf = i._animationInfo.zoom;
            if (Math.abs(gf.current - gf.target) < 0.001) {
              i._setValue("zoom", gf.target);
              i._infiniteAni.stop();
              return
            }
            gf.current += (gf.target - gf.current) * 0.35;
            i._setValue("zoom", gf.current);
            if (e.renderCallback) {
              e.renderCallback()
            }
          },
          finish: function() {
            i._infiniteAni = null;
            i._animationInfo = {};
            i.fire(new aL("onanimation_end"));
            if (e.callback) {
              e.callback()
            }
          },
          onStop: function() {
            i._infiniteAni = null;
            i._animationInfo = {};
            i.fire(new aL("onanimation_end"));
            if (e.callback) {
              e.callback()
            }
          }
        })
      },
      _setValue: function(e, gf) {
        if (e === "zoom") {
          this._preZoomLevel = this.zoomLevel;
          var i = this._getProperZoom(gf);
          gf = i.zoom;
          if (gf !== this.zoomLevel) {
            this.zoomLevel = gf;
            if (gf < 5) {
              this.restrictCenter(this.centerPoint)
            }
            this.fire(new aL("on" + e + "_changed"))
          }
          return
        } else {
          if (e === "center") {
            this.centerPoint = gf
          }
        }
        this["_" + e] = gf;
        this.fire(new aL("on" + e + "_changed"))
      },
      _setValueTick: function(e, gh, gg, i) {
        if (e === "center") {
          var gf = new fU(gh.lng + gg.lng * i,gh.lat + gg.lat * i);
          this._setValue(e, gf);
          return
        }
        if (e === "zoom") {
          this._setValue(e, Math.pow(gh, 1 - i) * Math.pow(gh + gg, i));
          return
        }
        this._setValue(e, gh + gg * i)
      },
      setHeading: function(gg, i) {
        i = i || {};
        if (gg === this._heading) {
          i.callback && i.callback();
          return
        }
        var gf = eK(this._heading, 360);
        var e = eK(gg, 360);
        if (e === gf) {
          this._heading = gg;
          i.callback && i.callback();
          return
        }
        if (i.noAnimation) {
          this._setValue("heading", gg);
          i.callback && i.callback();
          return
        }
        if (i.unstopable) {
          this._animationInfoUnstopable.heading = {
            current: this._heading,
            diff: gg - this._heading
          }
        } else {
          this._animationInfo.heading = {
            current: this._heading,
            diff: gg - this._heading
          }
        }
        this._startAnimation(i)
      },
      resetHeading: function(e) {
        var i = this._heading;
        while (i < 0) {
          i += 360
        }
        i = i % 360;
        if (i > 180) {
          i -= 360
        }
        this._heading = i;
        e = e || {};
        e.unstopable = true;
        this.setHeading(0, e)
      },
      getHeading: function() {
        return this._heading
      },
      setTilt: function(e, i) {
        i = i || {};
        if (e === this._tilt) {
          i.callback && i.callback();
          return
        }
        if (e > cl.MAX_TILT) {
          e = cl.MAX_TILT
        }
        if (e < cl.MIN_TILT) {
          e = cl.MIN_TILT
        }
        if (i && i.noAnimation) {
          this._setValue("tilt", e);
          i.callback && i.callback();
          return
        }
        this._animationInfo.tilt = {
          current: this._tilt,
          diff: e - this._tilt
        };
        this._startAnimation(i)
      },
      getTilt: function() {
        return this._tilt
      },
      getCenterIn: function() {
        return this.centerPoint
      },
      getZoom: function() {
        return this.zoomLevel
      },
      getCameraPosition: function(gf) {
        gf = gf || {};
        var e = gf.center || this.centerPoint;
        var gg = gf.zoom || this.zoomLevel;
        var gj = typeof gf.heading === "number" ? gf.heading : this._heading;
        var i = typeof gf.tilt === "number" ? gf.tilt : this._tilt;
        var gi = this._webglMapCamera.generateMVMatrix(e, gg, gj, i);
        var gh = mat4.create(Float32Array);
        mat4.invert(gh, gi);
        return this._webglMapCamera.getPosition(gh)
      }
    });
    function eB(i) {
      this._jobQueue = [];
      this._idleOnlyJobQueue = [];
      var e = this;
      this.isIdle = true;
      i.on("updateframe", function(gg) {
        var gf = 12 - gg.frameTime;
        gf = gf < 1 ? 1 : gf;
        e.isIdle = false;
        if (e.idleWorkTimer) {
          clearInterval(e.idleWorkTimer);
          e.idleWorkTimer = null
        }
        e.runJobs(gf)
      });
      this._idleWorkerTicker = (function(gf) {
          return function() {
            if (gf.isIdle) {
              gf.runJobs();
              gf.runIdleOnlyJobs()
            }
          }
        }
      )(this);
      i.on("mapglidle", function() {
        e.isIdle = true;
        e.runJobs();
        e.runIdleOnlyJobs();
        e.idleWorkTimer = setInterval(e._idleWorkerTicker, eB.MAX_IDLE_TIME)
      })
    }
    eB.MAX_IDLE_TIME = 50;
    eB.MAX_FRAME_TIME = 6;
    eB.prototype.runJobs = function(i) {
      if (this._jobQueue.length === 0) {
        return
      }
      var gg = ep();
      var e = 0;
      i = i || eB.MAX_FRAME_TIME;
      while (this._jobQueue.length && e < i) {
        var gf = this._jobQueue.shift();
        if (gf.state !== "invalid") {
          gf.call()
        }
        e = ep() - gg
      }
    }
    ;
    eB.prototype.runIdleOnlyJobs = function() {
      if (this._idleOnlyJobQueue.length === 0) {
        return
      }
      var gf = ep();
      var e = 0;
      while (this._idleOnlyJobQueue.length && e < eB.MAX_IDLE_TIME) {
        var i = this._idleOnlyJobQueue.shift();
        if (i.state !== "invalid") {
          i.call()
        }
        e = ep() - gf
      }
    }
    ;
    eB.prototype.checkIdleRunning = function() {
      if (this.isIdle && !this.idleWorkTimer) {
        this.runJobs();
        this.runIdleOnlyJobs();
        this.idleWorkTimer = setInterval(this._idleWorkerTicker, 50)
      }
    }
    ;
    eB.prototype.addJob = function(e) {
      this._jobQueue.push(e);
      this.checkIdleRunning()
    }
    ;
    eB.prototype.clearJobs = function() {
      this._jobQueue.length = 0;
      this._idleOnlyJobQueue.length = 0
    }
    ;
    eB.prototype.addIdleOnlyJob = function(e) {
      this._idleOnlyJobQueue.push(e);
      this.checkIdleRunning()
    }
    ;
    var bA = {};
    (function(gj) {
        if (!gn) {
          var gn = 0.000001
        }
        if (!i) {
          var i = (typeof Float32Array !== "undefined") ? Float32Array : Array
        }
        if (!gh) {
          var gh = Math.random
        }
        var gf = {};
        var gi = Math.PI / 180;
        gf.toRadian = function(go) {
          return go * gi
        }
        ;
        var gm = {};
        gm.create = function(gp) {
          gp = gp || i;
          var go = new gp(2);
          go[0] = 0;
          go[1] = 0;
          return go
        }
        ;
        gm.clone = function(go, gq) {
          gq = gq || i;
          var gp = new gq(2);
          gp[0] = go[0];
          gp[1] = go[1];
          return gp
        }
        ;
        gm.fromValues = function(go, gr, gq) {
          gq = gq || i;
          var gp = new gq(2);
          gp[0] = go;
          gp[1] = gr;
          return gp
        }
        ;
        gm.copy = function(gp, go) {
          gp[0] = go[0];
          gp[1] = go[1];
          return gp
        }
        ;
        gm.set = function(gp, go, gq) {
          gp[0] = go;
          gp[1] = gq;
          return gp
        }
        ;
        gm.add = function(gq, gp, go) {
          gq[0] = gp[0] + go[0];
          gq[1] = gp[1] + go[1];
          return gq
        }
        ;
        gm.subtract = function(gq, gp, go) {
          gq[0] = gp[0] - go[0];
          gq[1] = gp[1] - go[1];
          return gq
        }
        ;
        gm.sub = gm.subtract;
        gm.multiply = function(gq, gp, go) {
          gq[0] = gp[0] * go[0];
          gq[1] = gp[1] * go[1];
          return gq
        }
        ;
        gm.mul = gm.multiply;
        gm.divide = function(gq, gp, go) {
          gq[0] = gp[0] / go[0];
          gq[1] = gp[1] / go[1];
          return gq
        }
        ;
        gm.div = gm.divide;
        gm.min = function(gq, gp, go) {
          gq[0] = Math.min(gp[0], go[0]);
          gq[1] = Math.min(gp[1], go[1]);
          return gq
        }
        ;
        gm.max = function(gq, gp, go) {
          gq[0] = Math.max(gp[0], go[0]);
          gq[1] = Math.max(gp[1], go[1]);
          return gq
        }
        ;
        gm.scale = function(gq, gp, go) {
          gq[0] = gp[0] * go;
          gq[1] = gp[1] * go;
          return gq
        }
        ;
        gm.scaleAndAdd = function(gq, gp, go, gr) {
          gq[0] = gp[0] + (go[0] * gr);
          gq[1] = gp[1] + (go[1] * gr);
          return gq
        }
        ;
        gm.distance = function(gq, gp) {
          var go = gp[0] - gq[0]
            , gr = gp[1] - gq[1];
          return Math.sqrt(go * go + gr * gr)
        }
        ;
        gm.dist = gm.distance;
        gm.squaredDistance = function(gq, gp) {
          var go = gp[0] - gq[0]
            , gr = gp[1] - gq[1];
          return go * go + gr * gr
        }
        ;
        gm.sqrDist = gm.squaredDistance;
        gm.length = function(gp) {
          var go = gp[0]
            , gq = gp[1];
          return Math.sqrt(go * go + gq * gq)
        }
        ;
        gm.len = gm.length;
        gm.squaredLength = function(gp) {
          var go = gp[0]
            , gq = gp[1];
          return go * go + gq * gq
        }
        ;
        gm.sqrLen = gm.squaredLength;
        gm.negate = function(gp, go) {
          gp[0] = -go[0];
          gp[1] = -go[1];
          return gp
        }
        ;
        gm.normalize = function(gr, gq) {
          var gp = gq[0]
            , gs = gq[1];
          var go = gp * gp + gs * gs;
          if (go > 0) {
            go = 1 / Math.sqrt(go);
            gr[0] = gq[0] * go;
            gr[1] = gq[1] * go
          }
          return gr
        }
        ;
        gm.dot = function(gp, go) {
          return gp[0] * go[0] + gp[1] * go[1]
        }
        ;
        gm.cross = function(gq, gp, go) {
          var gr = gp[0] * go[1] - gp[1] * go[0];
          gq[0] = gq[1] = 0;
          gq[2] = gr;
          return gq
        }
        ;
        gm.lerp = function(gq, gp, go, gr) {
          var gt = gp[0]
            , gs = gp[1];
          gq[0] = gt + gr * (go[0] - gt);
          gq[1] = gs + gr * (go[1] - gs);
          return gq
        }
        ;
        gm.random = function(go, gq) {
          gq = gq || 1;
          var gp = gh() * 2 * Math.PI;
          go[0] = Math.cos(gp) * gq;
          go[1] = Math.sin(gp) * gq;
          return go
        }
        ;
        gm.transformMat2 = function(gr, gq, gp) {
          var go = gq[0]
            , gs = gq[1];
          gr[0] = gp[0] * go + gp[2] * gs;
          gr[1] = gp[1] * go + gp[3] * gs;
          return gr
        }
        ;
        gm.transformMat2d = function(gr, gq, gp) {
          var go = gq[0]
            , gs = gq[1];
          gr[0] = gp[0] * go + gp[2] * gs + gp[4];
          gr[1] = gp[1] * go + gp[3] * gs + gp[5];
          return gr
        }
        ;
        gm.transformMat3 = function(gr, gq, gp) {
          var go = gq[0]
            , gs = gq[1];
          gr[0] = gp[0] * go + gp[3] * gs + gp[6];
          gr[1] = gp[1] * go + gp[4] * gs + gp[7];
          return gr
        }
        ;
        gm.transformMat4 = function(gr, gq, gp) {
          var go = gq[0]
            , gs = gq[1];
          gr[0] = gp[0] * go + gp[4] * gs + gp[12];
          gr[1] = gp[1] * go + gp[5] * gs + gp[13];
          return gr
        }
        ;
        gm.rotate = function(gr, gp, go, gv) {
          var gu = gp[0] - go[0];
          var gt = gp[1] - go[1];
          var gq = Math.sin(gv);
          var gs = Math.cos(gv);
          gr[0] = gu * gs - gt * gq + go[0];
          gr[1] = gu * gq + gt * gs + go[1];
          return gr
        }
        ;
        gm.forEach = (function() {
            var go = gm.create();
            return function(gr, gv, gw, gu, gt, gp) {
              var gs, gq;
              if (!gv) {
                gv = 2
              }
              if (!gw) {
                gw = 0
              }
              if (gu) {
                gq = Math.min((gu * gv) + gw, gr.length)
              } else {
                gq = gr.length
              }
              for (gs = gw; gs < gq; gs += gv) {
                go[0] = gr[gs];
                go[1] = gr[gs + 1];
                gt(go, go, gp);
                gr[gs] = go[0];
                gr[gs + 1] = go[1]
              }
              return gr
            }
          }
        )();
        gm.str = function(go) {
          return "vec2(" + go[0] + ", " + go[1] + ")"
        }
        ;
        gj.vec2 = gm;
        var gl = {};
        gl.create = function(gp) {
          gp = gp || i;
          var go = new gp(3);
          go[0] = 0;
          go[1] = 0;
          go[2] = 0;
          return go
        }
        ;
        gl.clone = function(go, gq) {
          gq = gq || i;
          var gp = new gq(3);
          gp[0] = go[0];
          gp[1] = go[1];
          gp[2] = go[2];
          return gp
        }
        ;
        gl.fromValues = function(go, gs, gq, gr) {
          gr = gr || i;
          var gp = new gr(3);
          gp[0] = go;
          gp[1] = gs;
          gp[2] = gq;
          return gp
        }
        ;
        gl.copy = function(gp, go) {
          gp[0] = go[0];
          gp[1] = go[1];
          gp[2] = go[2];
          return gp
        }
        ;
        gl.set = function(gp, go, gr, gq) {
          gp[0] = go;
          gp[1] = gr;
          gp[2] = gq;
          return gp
        }
        ;
        gl.add = function(gq, gp, go) {
          gq[0] = gp[0] + go[0];
          gq[1] = gp[1] + go[1];
          gq[2] = gp[2] + go[2];
          return gq
        }
        ;
        gl.subtract = function(gq, gp, go) {
          gq[0] = gp[0] - go[0];
          gq[1] = gp[1] - go[1];
          gq[2] = gp[2] - go[2];
          return gq
        }
        ;
        gl.sub = gl.subtract;
        gl.multiply = function(gq, gp, go) {
          gq[0] = gp[0] * go[0];
          gq[1] = gp[1] * go[1];
          gq[2] = gp[2] * go[2];
          return gq
        }
        ;
        gl.mul = gl.multiply;
        gl.divide = function(gq, gp, go) {
          gq[0] = gp[0] / go[0];
          gq[1] = gp[1] / go[1];
          gq[2] = gp[2] / go[2];
          return gq
        }
        ;
        gl.div = gl.divide;
        gl.min = function(gq, gp, go) {
          gq[0] = Math.min(gp[0], go[0]);
          gq[1] = Math.min(gp[1], go[1]);
          gq[2] = Math.min(gp[2], go[2]);
          return gq
        }
        ;
        gl.max = function(gq, gp, go) {
          gq[0] = Math.max(gp[0], go[0]);
          gq[1] = Math.max(gp[1], go[1]);
          gq[2] = Math.max(gp[2], go[2]);
          return gq
        }
        ;
        gl.scale = function(gq, gp, go) {
          gq[0] = gp[0] * go;
          gq[1] = gp[1] * go;
          gq[2] = gp[2] * go;
          return gq
        }
        ;
        gl.scaleAndAdd = function(gq, gp, go, gr) {
          gq[0] = gp[0] + (go[0] * gr);
          gq[1] = gp[1] + (go[1] * gr);
          gq[2] = gp[2] + (go[2] * gr);
          return gq
        }
        ;
        gl.distance = function(gq, gp) {
          var go = gp[0] - gq[0]
            , gs = gp[1] - gq[1]
            , gr = gp[2] - gq[2];
          return Math.sqrt(go * go + gs * gs + gr * gr)
        }
        ;
        gl.dist = gl.distance;
        gl.squaredDistance = function(gq, gp) {
          var go = gp[0] - gq[0]
            , gs = gp[1] - gq[1]
            , gr = gp[2] - gq[2];
          return go * go + gs * gs + gr * gr
        }
        ;
        gl.sqrDist = gl.squaredDistance;
        gl.length = function(gp) {
          var go = gp[0]
            , gr = gp[1]
            , gq = gp[2];
          return Math.sqrt(go * go + gr * gr + gq * gq)
        }
        ;
        gl.len = gl.length;
        gl.squaredLength = function(gp) {
          var go = gp[0]
            , gr = gp[1]
            , gq = gp[2];
          return go * go + gr * gr + gq * gq
        }
        ;
        gl.sqrLen = gl.squaredLength;
        gl.negate = function(gp, go) {
          gp[0] = -go[0];
          gp[1] = -go[1];
          gp[2] = -go[2];
          return gp
        }
        ;
        gl.normalize = function(gr, gq) {
          var gp = gq[0]
            , gt = gq[1]
            , gs = gq[2];
          var go = gp * gp + gt * gt + gs * gs;
          if (go > 0) {
            go = 1 / Math.sqrt(go);
            gr[0] = gq[0] * go;
            gr[1] = gq[1] * go;
            gr[2] = gq[2] * go
          }
          return gr
        }
        ;
        gl.dot = function(gp, go) {
          return gp[0] * go[0] + gp[1] * go[1] + gp[2] * go[2]
        }
        ;
        gl.cross = function(gp, gu, gt) {
          var go = gu[0]
            , gw = gu[1]
            , gv = gu[2]
            , gs = gt[0]
            , gr = gt[1]
            , gq = gt[2];
          gp[0] = gw * gq - gv * gr;
          gp[1] = gv * gs - go * gq;
          gp[2] = go * gr - gw * gs;
          return gp
        }
        ;
        gl.lerp = function(gq, gp, go, gr) {
          var gu = gp[0]
            , gt = gp[1]
            , gs = gp[2];
          gq[0] = gu + gr * (go[0] - gu);
          gq[1] = gt + gr * (go[1] - gt);
          gq[2] = gs + gr * (go[2] - gs);
          return gq
        }
        ;
        gl.random = function(go, gs) {
          gs = gs || 1;
          var gq = gh() * 2 * Math.PI;
          var gr = (gh() * 2) - 1;
          var gp = Math.sqrt(1 - gr * gr) * gs;
          go[0] = Math.cos(gq) * gp;
          go[1] = Math.sin(gq) * gp;
          go[2] = gr * gs;
          return go
        }
        ;
        gl.transformMat4 = function(gr, gq, gp) {
          var go = gq[0]
            , gt = gq[1]
            , gs = gq[2];
          gr[0] = gp[0] * go + gp[4] * gt + gp[8] * gs + gp[12];
          gr[1] = gp[1] * go + gp[5] * gt + gp[9] * gs + gp[13];
          gr[2] = gp[2] * go + gp[6] * gt + gp[10] * gs + gp[14];
          return gr
        }
        ;
        gl.transformMat3 = function(gr, gq, gp) {
          var go = gq[0]
            , gt = gq[1]
            , gs = gq[2];
          gr[0] = go * gp[0] + gt * gp[3] + gs * gp[6];
          gr[1] = go * gp[1] + gt * gp[4] + gs * gp[7];
          gr[2] = go * gp[2] + gt * gp[5] + gs * gp[8];
          return gr
        }
        ;
        gl.transformQuat = function(gu, gA, go) {
          var gB = gA[0]
            , gz = gA[1]
            , gy = gA[2]
            , gw = go[0]
            , gv = go[1]
            , gt = go[2]
            , gx = go[3]
            , gr = gx * gB + gv * gy - gt * gz
            , gq = gx * gz + gt * gB - gw * gy
            , gp = gx * gy + gw * gz - gv * gB
            , gs = -gw * gB - gv * gz - gt * gy;
          gu[0] = gr * gx + gs * -gw + gq * -gt - gp * -gv;
          gu[1] = gq * gx + gs * -gv + gp * -gw - gr * -gt;
          gu[2] = gp * gx + gs * -gt + gr * -gv - gq * -gw;
          return gu
        }
        ;
        gl.rotateX = function(gq, gp, go, gt) {
          var gs = []
            , gr = [];
          gs[0] = gp[0] - go[0];
          gs[1] = gp[1] - go[1];
          gs[2] = gp[2] - go[2];
          gr[0] = gs[0];
          gr[1] = gs[1] * Math.cos(gt) - gs[2] * Math.sin(gt);
          gr[2] = gs[1] * Math.sin(gt) + gs[2] * Math.cos(gt);
          gq[0] = gr[0] + go[0];
          gq[1] = gr[1] + go[1];
          gq[2] = gr[2] + go[2];
          return gq
        }
        ;
        gl.rotateY = function(gq, gp, go, gt) {
          var gs = []
            , gr = [];
          gs[0] = gp[0] - go[0];
          gs[1] = gp[1] - go[1];
          gs[2] = gp[2] - go[2];
          gr[0] = gs[2] * Math.sin(gt) + gs[0] * Math.cos(gt);
          gr[1] = gs[1];
          gr[2] = gs[2] * Math.cos(gt) - gs[0] * Math.sin(gt);
          gq[0] = gr[0] + go[0];
          gq[1] = gr[1] + go[1];
          gq[2] = gr[2] + go[2];
          return gq
        }
        ;
        gl.rotateZ = function(gq, gp, go, gt) {
          var gs = []
            , gr = [];
          gs[0] = gp[0] - go[0];
          gs[1] = gp[1] - go[1];
          gs[2] = gp[2] - go[2];
          gr[0] = gs[0] * Math.cos(gt) - gs[1] * Math.sin(gt);
          gr[1] = gs[0] * Math.sin(gt) + gs[1] * Math.cos(gt);
          gr[2] = gs[2];
          gq[0] = gr[0] + go[0];
          gq[1] = gr[1] + go[1];
          gq[2] = gr[2] + go[2];
          return gq
        }
        ;
        gl.forEach = (function() {
            var go = gl.create();
            return function(gr, gv, gw, gu, gt, gp) {
              var gs, gq;
              if (!gv) {
                gv = 3
              }
              if (!gw) {
                gw = 0
              }
              if (gu) {
                gq = Math.min((gu * gv) + gw, gr.length)
              } else {
                gq = gr.length
              }
              for (gs = gw; gs < gq; gs += gv) {
                go[0] = gr[gs];
                go[1] = gr[gs + 1];
                go[2] = gr[gs + 2];
                gt(go, go, gp);
                gr[gs] = go[0];
                gr[gs + 1] = go[1];
                gr[gs + 2] = go[2]
              }
              return gr
            }
          }
        )();
        gl.str = function(go) {
          return "vec3(" + go[0] + ", " + go[1] + ", " + go[2] + ")"
        }
        ;
        gj.vec3 = gl;
        var gk = {};
        gk.create = function(gp) {
          gp = gp || i;
          var go = new gp(4);
          go[0] = 0;
          go[1] = 0;
          go[2] = 0;
          go[3] = 0;
          return go
        }
        ;
        gk.clone = function(go, gq) {
          gq = gq || i;
          var gp = new gq(4);
          gp[0] = go[0];
          gp[1] = go[1];
          gp[2] = go[2];
          gp[3] = go[3];
          return gp
        }
        ;
        gk.fromValues = function(go, gt, gr, gp, gs) {
          gs = gs || i;
          var gq = new gs(4);
          gq[0] = go;
          gq[1] = gt;
          gq[2] = gr;
          gq[3] = gp;
          return gq
        }
        ;
        gk.copy = function(gp, go) {
          gp[0] = go[0];
          gp[1] = go[1];
          gp[2] = go[2];
          gp[3] = go[3];
          return gp
        }
        ;
        gk.set = function(gq, go, gs, gr, gp) {
          gq[0] = go;
          gq[1] = gs;
          gq[2] = gr;
          gq[3] = gp;
          return gq
        }
        ;
        gk.add = function(gq, gp, go) {
          gq[0] = gp[0] + go[0];
          gq[1] = gp[1] + go[1];
          gq[2] = gp[2] + go[2];
          gq[3] = gp[3] + go[3];
          return gq
        }
        ;
        gk.subtract = function(gq, gp, go) {
          gq[0] = gp[0] - go[0];
          gq[1] = gp[1] - go[1];
          gq[2] = gp[2] - go[2];
          gq[3] = gp[3] - go[3];
          return gq
        }
        ;
        gk.sub = gk.subtract;
        gk.multiply = function(gq, gp, go) {
          gq[0] = gp[0] * go[0];
          gq[1] = gp[1] * go[1];
          gq[2] = gp[2] * go[2];
          gq[3] = gp[3] * go[3];
          return gq
        }
        ;
        gk.mul = gk.multiply;
        gk.divide = function(gq, gp, go) {
          gq[0] = gp[0] / go[0];
          gq[1] = gp[1] / go[1];
          gq[2] = gp[2] / go[2];
          gq[3] = gp[3] / go[3];
          return gq
        }
        ;
        gk.div = gk.divide;
        gk.min = function(gq, gp, go) {
          gq[0] = Math.min(gp[0], go[0]);
          gq[1] = Math.min(gp[1], go[1]);
          gq[2] = Math.min(gp[2], go[2]);
          gq[3] = Math.min(gp[3], go[3]);
          return gq
        }
        ;
        gk.max = function(gq, gp, go) {
          gq[0] = Math.max(gp[0], go[0]);
          gq[1] = Math.max(gp[1], go[1]);
          gq[2] = Math.max(gp[2], go[2]);
          gq[3] = Math.max(gp[3], go[3]);
          return gq
        }
        ;
        gk.scale = function(gq, gp, go) {
          gq[0] = gp[0] * go;
          gq[1] = gp[1] * go;
          gq[2] = gp[2] * go;
          gq[3] = gp[3] * go;
          return gq
        }
        ;
        gk.scaleAndAdd = function(gq, gp, go, gr) {
          gq[0] = gp[0] + (go[0] * gr);
          gq[1] = gp[1] + (go[1] * gr);
          gq[2] = gp[2] + (go[2] * gr);
          gq[3] = gp[3] + (go[3] * gr);
          return gq
        }
        ;
        gk.distance = function(gr, gp) {
          var go = gp[0] - gr[0]
            , gt = gp[1] - gr[1]
            , gs = gp[2] - gr[2]
            , gq = gp[3] - gr[3];
          return Math.sqrt(go * go + gt * gt + gs * gs + gq * gq)
        }
        ;
        gk.dist = gk.distance;
        gk.squaredDistance = function(gr, gp) {
          var go = gp[0] - gr[0]
            , gt = gp[1] - gr[1]
            , gs = gp[2] - gr[2]
            , gq = gp[3] - gr[3];
          return go * go + gt * gt + gs * gs + gq * gq
        }
        ;
        gk.sqrDist = gk.squaredDistance;
        gk.length = function(gq) {
          var go = gq[0]
            , gs = gq[1]
            , gr = gq[2]
            , gp = gq[3];
          return Math.sqrt(go * go + gs * gs + gr * gr + gp * gp)
        }
        ;
        gk.len = gk.length;
        gk.squaredLength = function(gq) {
          var go = gq[0]
            , gs = gq[1]
            , gr = gq[2]
            , gp = gq[3];
          return go * go + gs * gs + gr * gr + gp * gp
        }
        ;
        gk.sqrLen = gk.squaredLength;
        gk.negate = function(gp, go) {
          gp[0] = -go[0];
          gp[1] = -go[1];
          gp[2] = -go[2];
          gp[3] = -go[3];
          return gp
        }
        ;
        gk.normalize = function(gs, gr) {
          var gp = gr[0]
            , gu = gr[1]
            , gt = gr[2]
            , gq = gr[3];
          var go = gp * gp + gu * gu + gt * gt + gq * gq;
          if (go > 0) {
            go = 1 / Math.sqrt(go);
            gs[0] = gr[0] * go;
            gs[1] = gr[1] * go;
            gs[2] = gr[2] * go;
            gs[3] = gr[3] * go
          }
          return gs
        }
        ;
        gk.dot = function(gp, go) {
          return gp[0] * go[0] + gp[1] * go[1] + gp[2] * go[2] + gp[3] * go[3]
        }
        ;
        gk.lerp = function(gq, gp, go, gr) {
          var gu = gp[0]
            , gt = gp[1]
            , gs = gp[2]
            , gv = gp[3];
          gq[0] = gu + gr * (go[0] - gu);
          gq[1] = gt + gr * (go[1] - gt);
          gq[2] = gs + gr * (go[2] - gs);
          gq[3] = gv + gr * (go[3] - gv);
          return gq
        }
        ;
        gk.random = function(go, gp) {
          gp = gp || 1;
          go[0] = gh();
          go[1] = gh();
          go[2] = gh();
          go[3] = gh();
          gk.normalize(go, go);
          gk.scale(go, go, gp);
          return go
        }
        ;
        gk.transformMat4 = function(gs, gr, gp) {
          var go = gr[0]
            , gu = gr[1]
            , gt = gr[2]
            , gq = gr[3];
          gs[0] = gp[0] * go + gp[4] * gu + gp[8] * gt + gp[12] * gq;
          gs[1] = gp[1] * go + gp[5] * gu + gp[9] * gt + gp[13] * gq;
          gs[2] = gp[2] * go + gp[6] * gu + gp[10] * gt + gp[14] * gq;
          gs[3] = gp[3] * go + gp[7] * gu + gp[11] * gt + gp[15] * gq;
          return gs
        }
        ;
        gk.transformQuat = function(gu, gA, go) {
          var gB = gA[0]
            , gz = gA[1]
            , gy = gA[2]
            , gw = go[0]
            , gv = go[1]
            , gt = go[2]
            , gx = go[3]
            , gr = gx * gB + gv * gy - gt * gz
            , gq = gx * gz + gt * gB - gw * gy
            , gp = gx * gy + gw * gz - gv * gB
            , gs = -gw * gB - gv * gz - gt * gy;
          gu[0] = gr * gx + gs * -gw + gq * -gt - gp * -gv;
          gu[1] = gq * gx + gs * -gv + gp * -gw - gr * -gt;
          gu[2] = gp * gx + gs * -gt + gr * -gv - gq * -gw;
          return gu
        }
        ;
        gk.forEach = (function() {
            var go = gk.create();
            return function(gr, gv, gw, gu, gt, gp) {
              var gs, gq;
              if (!gv) {
                gv = 4
              }
              if (!gw) {
                gw = 0
              }
              if (gu) {
                gq = Math.min((gu * gv) + gw, gr.length)
              } else {
                gq = gr.length
              }
              for (gs = gw; gs < gq; gs += gv) {
                go[0] = gr[gs];
                go[1] = gr[gs + 1];
                go[2] = gr[gs + 2];
                go[3] = gr[gs + 3];
                gt(go, go, gp);
                gr[gs] = go[0];
                gr[gs + 1] = go[1];
                gr[gs + 2] = go[2];
                gr[gs + 3] = go[3]
              }
              return gr
            }
          }
        )();
        gk.str = function(go) {
          return "vec4(" + go[0] + ", " + go[1] + ", " + go[2] + ", " + go[3] + ")"
        }
        ;
        gj.vec4 = gk;
        var gg = {};
        gg.create = function(gp) {
          gp = gp || i;
          var go = new gp(4);
          go[0] = 1;
          go[1] = 0;
          go[2] = 0;
          go[3] = 1;
          return go
        }
        ;
        gg.clone = function(go, gq) {
          gq = gq || i;
          var gp = new gq(4);
          gp[0] = go[0];
          gp[1] = go[1];
          gp[2] = go[2];
          gp[3] = go[3];
          return gp
        }
        ;
        gg.copy = function(gp, go) {
          gp[0] = go[0];
          gp[1] = go[1];
          gp[2] = go[2];
          gp[3] = go[3];
          return gp
        }
        ;
        gg.identity = function(go) {
          go[0] = 1;
          go[1] = 0;
          go[2] = 0;
          go[3] = 1;
          return go
        }
        ;
        gg.transpose = function(gq, gp) {
          if (gq === gp) {
            var go = gp[1];
            gq[1] = gp[2];
            gq[2] = go
          } else {
            gq[0] = gp[0];
            gq[1] = gp[2];
            gq[2] = gp[1];
            gq[3] = gp[3]
          }
          return gq
        }
        ;
        gg.invert = function(gs, gq) {
          var gr = gq[0]
            , gp = gq[1]
            , go = gq[2]
            , gu = gq[3]
            , gt = gr * gu - go * gp;
          if (!gt) {
            return null
          }
          gt = 1 / gt;
          gs[0] = gu * gt;
          gs[1] = -gp * gt;
          gs[2] = -go * gt;
          gs[3] = gr * gt;
          return gs
        }
        ;
        gg.adjoint = function(gq, go) {
          var gp = go[0];
          gq[0] = go[3];
          gq[1] = -go[1];
          gq[2] = -go[2];
          gq[3] = gp;
          return gq
        }
        ;
        gg.determinant = function(go) {
          return go[0] * go[3] - go[2] * go[1]
        }
        ;
        gg.multiply = function(gs, gx, gv) {
          var gr = gx[0]
            , gq = gx[1]
            , gp = gx[2]
            , go = gx[3];
          var gy = gv[0]
            , gw = gv[1]
            , gu = gv[2]
            , gt = gv[3];
          gs[0] = gr * gy + gp * gw;
          gs[1] = gq * gy + go * gw;
          gs[2] = gr * gu + gp * gt;
          gs[3] = gq * gu + go * gt;
          return gs
        }
        ;
        gg.mul = gg.multiply;
        gg.rotate = function(gs, gv, gu) {
          var gr = gv[0]
            , gq = gv[1]
            , gp = gv[2]
            , go = gv[3]
            , gw = Math.sin(gu)
            , gt = Math.cos(gu);
          gs[0] = gr * gt + gp * gw;
          gs[1] = gq * gt + go * gw;
          gs[2] = gr * -gw + gp * gt;
          gs[3] = gq * -gw + go * gt;
          return gs
        }
        ;
        gg.scale = function(gs, gt, gv) {
          var gr = gt[0]
            , gq = gt[1]
            , gp = gt[2]
            , go = gt[3]
            , gw = gv[0]
            , gu = gv[1];
          gs[0] = gr * gw;
          gs[1] = gq * gw;
          gs[2] = gp * gu;
          gs[3] = go * gu;
          return gs
        }
        ;
        gg.str = function(go) {
          return "mat2(" + go[0] + ", " + go[1] + ", " + go[2] + ", " + go[3] + ")"
        }
        ;
        gg.frob = function(go) {
          return (Math.sqrt(Math.pow(go[0], 2) + Math.pow(go[1], 2) + Math.pow(go[2], 2) + Math.pow(go[3], 2)))
        }
        ;
        gg.LDU = function(go, gr, gq, gp) {
          go[2] = gp[2] / gp[0];
          gq[0] = gp[0];
          gq[1] = gp[1];
          gq[3] = gp[3] - go[2] * gq[1];
          return [go, gr, gq]
        }
        ;
        gj.mat2 = gg;
        var e = {};
        e.create = function(gp) {
          gp = gp || i;
          var go = new gp(16);
          go[0] = 1;
          go[1] = 0;
          go[2] = 0;
          go[3] = 0;
          go[4] = 0;
          go[5] = 1;
          go[6] = 0;
          go[7] = 0;
          go[8] = 0;
          go[9] = 0;
          go[10] = 1;
          go[11] = 0;
          go[12] = 0;
          go[13] = 0;
          go[14] = 0;
          go[15] = 1;
          return go
        }
        ;
        e.clone = function(go) {
          var gp = new i(16);
          gp[0] = go[0];
          gp[1] = go[1];
          gp[2] = go[2];
          gp[3] = go[3];
          gp[4] = go[4];
          gp[5] = go[5];
          gp[6] = go[6];
          gp[7] = go[7];
          gp[8] = go[8];
          gp[9] = go[9];
          gp[10] = go[10];
          gp[11] = go[11];
          gp[12] = go[12];
          gp[13] = go[13];
          gp[14] = go[14];
          gp[15] = go[15];
          return gp
        }
        ;
        e.copy = function(gp, go) {
          gp[0] = go[0];
          gp[1] = go[1];
          gp[2] = go[2];
          gp[3] = go[3];
          gp[4] = go[4];
          gp[5] = go[5];
          gp[6] = go[6];
          gp[7] = go[7];
          gp[8] = go[8];
          gp[9] = go[9];
          gp[10] = go[10];
          gp[11] = go[11];
          gp[12] = go[12];
          gp[13] = go[13];
          gp[14] = go[14];
          gp[15] = go[15];
          return gp
        }
        ;
        e.identity = function(go) {
          go[0] = 1;
          go[1] = 0;
          go[2] = 0;
          go[3] = 0;
          go[4] = 0;
          go[5] = 1;
          go[6] = 0;
          go[7] = 0;
          go[8] = 0;
          go[9] = 0;
          go[10] = 1;
          go[11] = 0;
          go[12] = 0;
          go[13] = 0;
          go[14] = 0;
          go[15] = 1;
          return go
        }
        ;
        e.transpose = function(gr, gq) {
          if (gr === gq) {
            var gv = gq[1]
              , gt = gq[2]
              , gs = gq[3]
              , go = gq[6]
              , gu = gq[7]
              , gp = gq[11];
            gr[1] = gq[4];
            gr[2] = gq[8];
            gr[3] = gq[12];
            gr[4] = gv;
            gr[6] = gq[9];
            gr[7] = gq[13];
            gr[8] = gt;
            gr[9] = go;
            gr[11] = gq[14];
            gr[12] = gs;
            gr[13] = gu;
            gr[14] = gp
          } else {
            gr[0] = gq[0];
            gr[1] = gq[4];
            gr[2] = gq[8];
            gr[3] = gq[12];
            gr[4] = gq[1];
            gr[5] = gq[5];
            gr[6] = gq[9];
            gr[7] = gq[13];
            gr[8] = gq[2];
            gr[9] = gq[6];
            gr[10] = gq[10];
            gr[11] = gq[14];
            gr[12] = gq[3];
            gr[13] = gq[7];
            gr[14] = gq[11];
            gr[15] = gq[15]
          }
          return gr
        }
        ;
        e.invert = function(gH, gM) {
          var gQ = gM[0]
            , gO = gM[1]
            , gN = gM[2]
            , gK = gM[3]
            , gs = gM[4]
            , gr = gM[5]
            , gq = gM[6]
            , gp = gM[7]
            , gG = gM[8]
            , gF = gM[9]
            , gE = gM[10]
            , gD = gM[11]
            , gS = gM[12]
            , gR = gM[13]
            , gP = gM[14]
            , gL = gM[15]
            , gC = gQ * gr - gO * gs
            , gB = gQ * gq - gN * gs
            , gA = gQ * gp - gK * gs
            , gz = gO * gq - gN * gr
            , gy = gO * gp - gK * gr
            , gx = gN * gp - gK * gq
            , gw = gG * gR - gF * gS
            , gv = gG * gP - gE * gS
            , gu = gG * gL - gD * gS
            , gt = gF * gP - gE * gR
            , gJ = gF * gL - gD * gR
            , gI = gE * gL - gD * gP
            , go = gC * gI - gB * gJ + gA * gt + gz * gu - gy * gv + gx * gw;
          if (!go) {
            return null
          }
          go = 1 / go;
          gH[0] = (gr * gI - gq * gJ + gp * gt) * go;
          gH[1] = (gN * gJ - gO * gI - gK * gt) * go;
          gH[2] = (gR * gx - gP * gy + gL * gz) * go;
          gH[3] = (gE * gy - gF * gx - gD * gz) * go;
          gH[4] = (gq * gu - gs * gI - gp * gv) * go;
          gH[5] = (gQ * gI - gN * gu + gK * gv) * go;
          gH[6] = (gP * gA - gS * gx - gL * gB) * go;
          gH[7] = (gG * gx - gE * gA + gD * gB) * go;
          gH[8] = (gs * gJ - gr * gu + gp * gw) * go;
          gH[9] = (gO * gu - gQ * gJ - gK * gw) * go;
          gH[10] = (gS * gy - gR * gA + gL * gC) * go;
          gH[11] = (gF * gA - gG * gy - gD * gC) * go;
          gH[12] = (gr * gv - gs * gt - gq * gw) * go;
          gH[13] = (gQ * gt - gO * gv + gN * gw) * go;
          gH[14] = (gR * gB - gS * gz - gP * gC) * go;
          gH[15] = (gG * gz - gF * gB + gE * gC) * go;
          return gH
        }
        ;
        e.adjoint = function(gw, gz) {
          var gD = gz[0]
            , gB = gz[1]
            , gA = gz[2]
            , gx = gz[3]
            , gr = gz[4]
            , gq = gz[5]
            , gp = gz[6]
            , go = gz[7]
            , gv = gz[8]
            , gu = gz[9]
            , gt = gz[10]
            , gs = gz[11]
            , gF = gz[12]
            , gE = gz[13]
            , gC = gz[14]
            , gy = gz[15];
          gw[0] = (gq * (gt * gy - gs * gC) - gu * (gp * gy - go * gC) + gE * (gp * gs - go * gt));
          gw[1] = -(gB * (gt * gy - gs * gC) - gu * (gA * gy - gx * gC) + gE * (gA * gs - gx * gt));
          gw[2] = (gB * (gp * gy - go * gC) - gq * (gA * gy - gx * gC) + gE * (gA * go - gx * gp));
          gw[3] = -(gB * (gp * gs - go * gt) - gq * (gA * gs - gx * gt) + gu * (gA * go - gx * gp));
          gw[4] = -(gr * (gt * gy - gs * gC) - gv * (gp * gy - go * gC) + gF * (gp * gs - go * gt));
          gw[5] = (gD * (gt * gy - gs * gC) - gv * (gA * gy - gx * gC) + gF * (gA * gs - gx * gt));
          gw[6] = -(gD * (gp * gy - go * gC) - gr * (gA * gy - gx * gC) + gF * (gA * go - gx * gp));
          gw[7] = (gD * (gp * gs - go * gt) - gr * (gA * gs - gx * gt) + gv * (gA * go - gx * gp));
          gw[8] = (gr * (gu * gy - gs * gE) - gv * (gq * gy - go * gE) + gF * (gq * gs - go * gu));
          gw[9] = -(gD * (gu * gy - gs * gE) - gv * (gB * gy - gx * gE) + gF * (gB * gs - gx * gu));
          gw[10] = (gD * (gq * gy - go * gE) - gr * (gB * gy - gx * gE) + gF * (gB * go - gx * gq));
          gw[11] = -(gD * (gq * gs - go * gu) - gr * (gB * gs - gx * gu) + gv * (gB * go - gx * gq));
          gw[12] = -(gr * (gu * gC - gt * gE) - gv * (gq * gC - gp * gE) + gF * (gq * gt - gp * gu));
          gw[13] = (gD * (gu * gC - gt * gE) - gv * (gB * gC - gA * gE) + gF * (gB * gt - gA * gu));
          gw[14] = -(gD * (gq * gC - gp * gE) - gr * (gB * gC - gA * gE) + gF * (gB * gp - gA * gq));
          gw[15] = (gD * (gq * gt - gp * gu) - gr * (gB * gt - gA * gu) + gv * (gB * gp - gA * gq));
          return gw
        }
        ;
        e.determinant = function(gJ) {
          var gO = gJ[0]
            , gM = gJ[1]
            , gK = gJ[2]
            , gI = gJ[3]
            , gr = gJ[4]
            , gq = gJ[5]
            , gp = gJ[6]
            , go = gJ[7]
            , gF = gJ[8]
            , gE = gJ[9]
            , gD = gJ[10]
            , gC = gJ[11]
            , gQ = gJ[12]
            , gP = gJ[13]
            , gN = gJ[14]
            , gL = gJ[15]
            , gB = gO * gq - gM * gr
            , gA = gO * gp - gK * gr
            , gz = gO * go - gI * gr
            , gy = gM * gp - gK * gq
            , gx = gM * go - gI * gq
            , gw = gK * go - gI * gp
            , gv = gF * gP - gE * gQ
            , gu = gF * gN - gD * gQ
            , gt = gF * gL - gC * gQ
            , gs = gE * gN - gD * gP
            , gH = gE * gL - gC * gP
            , gG = gD * gL - gC * gN;
          return gB * gG - gA * gH + gz * gs + gy * gt - gx * gu + gw * gv
        }
        ;
        e.multiply = function(gA, gE, gB) {
          var gI = gE[0]
            , gH = gE[1]
            , gF = gE[2]
            , gC = gE[3]
            , gu = gE[4]
            , gs = gE[5]
            , gq = gE[6]
            , go = gE[7]
            , gz = gE[8]
            , gy = gE[9]
            , gx = gE[10]
            , gw = gE[11]
            , gK = gE[12]
            , gJ = gE[13]
            , gG = gE[14]
            , gD = gE[15];
          var gv = gB[0]
            , gt = gB[1]
            , gr = gB[2]
            , gp = gB[3];
          gA[0] = gv * gI + gt * gu + gr * gz + gp * gK;
          gA[1] = gv * gH + gt * gs + gr * gy + gp * gJ;
          gA[2] = gv * gF + gt * gq + gr * gx + gp * gG;
          gA[3] = gv * gC + gt * go + gr * gw + gp * gD;
          gv = gB[4];
          gt = gB[5];
          gr = gB[6];
          gp = gB[7];
          gA[4] = gv * gI + gt * gu + gr * gz + gp * gK;
          gA[5] = gv * gH + gt * gs + gr * gy + gp * gJ;
          gA[6] = gv * gF + gt * gq + gr * gx + gp * gG;
          gA[7] = gv * gC + gt * go + gr * gw + gp * gD;
          gv = gB[8];
          gt = gB[9];
          gr = gB[10];
          gp = gB[11];
          gA[8] = gv * gI + gt * gu + gr * gz + gp * gK;
          gA[9] = gv * gH + gt * gs + gr * gy + gp * gJ;
          gA[10] = gv * gF + gt * gq + gr * gx + gp * gG;
          gA[11] = gv * gC + gt * go + gr * gw + gp * gD;
          gv = gB[12];
          gt = gB[13];
          gr = gB[14];
          gp = gB[15];
          gA[12] = gv * gI + gt * gu + gr * gz + gp * gK;
          gA[13] = gv * gH + gt * gs + gr * gy + gp * gJ;
          gA[14] = gv * gF + gt * gq + gr * gx + gp * gG;
          gA[15] = gv * gC + gt * go + gr * gw + gp * gD;
          return gA
        }
        ;
        e.mul = e.multiply;
        e.translate = function(gA, gC, gv) {
          var gu = gv[0], gt = gv[1], gs = gv[2], gF, gE, gD, gB, gr, gq, gp, go, gz, gy, gx, gw;
          if (gC === gA) {
            gA[12] = gC[0] * gu + gC[4] * gt + gC[8] * gs + gC[12];
            gA[13] = gC[1] * gu + gC[5] * gt + gC[9] * gs + gC[13];
            gA[14] = gC[2] * gu + gC[6] * gt + gC[10] * gs + gC[14];
            gA[15] = gC[3] * gu + gC[7] * gt + gC[11] * gs + gC[15]
          } else {
            gF = gC[0];
            gE = gC[1];
            gD = gC[2];
            gB = gC[3];
            gr = gC[4];
            gq = gC[5];
            gp = gC[6];
            go = gC[7];
            gz = gC[8];
            gy = gC[9];
            gx = gC[10];
            gw = gC[11];
            gA[0] = gF;
            gA[1] = gE;
            gA[2] = gD;
            gA[3] = gB;
            gA[4] = gr;
            gA[5] = gq;
            gA[6] = gp;
            gA[7] = go;
            gA[8] = gz;
            gA[9] = gy;
            gA[10] = gx;
            gA[11] = gw;
            gA[12] = gF * gu + gr * gt + gz * gs + gC[12];
            gA[13] = gE * gu + gq * gt + gy * gs + gC[13];
            gA[14] = gD * gu + gp * gt + gx * gs + gC[14];
            gA[15] = gB * gu + go * gt + gw * gs + gC[15]
          }
          return gA
        }
        ;
        e.scale = function(gr, gp, gq) {
          var go = gq[0]
            , gt = gq[1]
            , gs = gq[2];
          gr[0] = gp[0] * go;
          gr[1] = gp[1] * go;
          gr[2] = gp[2] * go;
          gr[3] = gp[3] * go;
          gr[4] = gp[4] * gt;
          gr[5] = gp[5] * gt;
          gr[6] = gp[6] * gt;
          gr[7] = gp[7] * gt;
          gr[8] = gp[8] * gs;
          gr[9] = gp[9] * gs;
          gr[10] = gp[10] * gs;
          gr[11] = gp[11] * gs;
          gr[12] = gp[12];
          gr[13] = gp[13];
          gr[14] = gp[14];
          gr[15] = gp[15];
          return gr
        }
        ;
        e.rotate = function(gI, gP, gR, go) {
          var gy = go[0], gx = go[1], gw = go[2], gJ = Math.sqrt(gy * gy + gx * gx + gw * gw), gD, gN, gC, gT, gS, gQ, gO, gv, gu, gt, gs, gH, gG, gF, gE, gB, gA, gz, gM, gL, gK, gr, gq, gp;
          if (Math.abs(gJ) < gn) {
            return null
          }
          gJ = 1 / gJ;
          gy *= gJ;
          gx *= gJ;
          gw *= gJ;
          gD = Math.sin(gR);
          gN = Math.cos(gR);
          gC = 1 - gN;
          gT = gP[0];
          gS = gP[1];
          gQ = gP[2];
          gO = gP[3];
          gv = gP[4];
          gu = gP[5];
          gt = gP[6];
          gs = gP[7];
          gH = gP[8];
          gG = gP[9];
          gF = gP[10];
          gE = gP[11];
          gB = gy * gy * gC + gN;
          gA = gx * gy * gC + gw * gD;
          gz = gw * gy * gC - gx * gD;
          gM = gy * gx * gC - gw * gD;
          gL = gx * gx * gC + gN;
          gK = gw * gx * gC + gy * gD;
          gr = gy * gw * gC + gx * gD;
          gq = gx * gw * gC - gy * gD;
          gp = gw * gw * gC + gN;
          gI[0] = gT * gB + gv * gA + gH * gz;
          gI[1] = gS * gB + gu * gA + gG * gz;
          gI[2] = gQ * gB + gt * gA + gF * gz;
          gI[3] = gO * gB + gs * gA + gE * gz;
          gI[4] = gT * gM + gv * gL + gH * gK;
          gI[5] = gS * gM + gu * gL + gG * gK;
          gI[6] = gQ * gM + gt * gL + gF * gK;
          gI[7] = gO * gM + gs * gL + gE * gK;
          gI[8] = gT * gr + gv * gq + gH * gp;
          gI[9] = gS * gr + gu * gq + gG * gp;
          gI[10] = gQ * gr + gt * gq + gF * gp;
          gI[11] = gO * gr + gs * gq + gE * gp;
          if (gP !== gI) {
            gI[12] = gP[12];
            gI[13] = gP[13];
            gI[14] = gP[14];
            gI[15] = gP[15]
          }
          return gI
        }
        ;
        e.rotateX = function(go, gv, gu) {
          var gA = Math.sin(gu)
            , gt = Math.cos(gu)
            , gz = gv[4]
            , gy = gv[5]
            , gx = gv[6]
            , gw = gv[7]
            , gs = gv[8]
            , gr = gv[9]
            , gq = gv[10]
            , gp = gv[11];
          if (gv !== go) {
            go[0] = gv[0];
            go[1] = gv[1];
            go[2] = gv[2];
            go[3] = gv[3];
            go[12] = gv[12];
            go[13] = gv[13];
            go[14] = gv[14];
            go[15] = gv[15]
          }
          go[4] = gz * gt + gs * gA;
          go[5] = gy * gt + gr * gA;
          go[6] = gx * gt + gq * gA;
          go[7] = gw * gt + gp * gA;
          go[8] = gs * gt - gz * gA;
          go[9] = gr * gt - gy * gA;
          go[10] = gq * gt - gx * gA;
          go[11] = gp * gt - gw * gA;
          return go
        }
        ;
        e.rotateY = function(gs, gz, gy) {
          var gA = Math.sin(gy)
            , gx = Math.cos(gy)
            , gr = gz[0]
            , gq = gz[1]
            , gp = gz[2]
            , go = gz[3]
            , gw = gz[8]
            , gv = gz[9]
            , gu = gz[10]
            , gt = gz[11];
          if (gz !== gs) {
            gs[4] = gz[4];
            gs[5] = gz[5];
            gs[6] = gz[6];
            gs[7] = gz[7];
            gs[12] = gz[12];
            gs[13] = gz[13];
            gs[14] = gz[14];
            gs[15] = gz[15]
          }
          gs[0] = gr * gx - gw * gA;
          gs[1] = gq * gx - gv * gA;
          gs[2] = gp * gx - gu * gA;
          gs[3] = go * gx - gt * gA;
          gs[8] = gr * gA + gw * gx;
          gs[9] = gq * gA + gv * gx;
          gs[10] = gp * gA + gu * gx;
          gs[11] = go * gA + gt * gx;
          return gs
        }
        ;
        e.rotateZ = function(gs, gv, gu) {
          var gA = Math.sin(gu)
            , gt = Math.cos(gu)
            , gr = gv[0]
            , gq = gv[1]
            , gp = gv[2]
            , go = gv[3]
            , gz = gv[4]
            , gy = gv[5]
            , gx = gv[6]
            , gw = gv[7];
          if (gv !== gs) {
            gs[8] = gv[8];
            gs[9] = gv[9];
            gs[10] = gv[10];
            gs[11] = gv[11];
            gs[12] = gv[12];
            gs[13] = gv[13];
            gs[14] = gv[14];
            gs[15] = gv[15]
          }
          gs[0] = gr * gt + gz * gA;
          gs[1] = gq * gt + gy * gA;
          gs[2] = gp * gt + gx * gA;
          gs[3] = go * gt + gw * gA;
          gs[4] = gz * gt - gr * gA;
          gs[5] = gy * gt - gq * gA;
          gs[6] = gx * gt - gp * gA;
          gs[7] = gw * gt - go * gA;
          return gs
        }
        ;
        e.fromRotationTranslation = function(gB, gz, gx) {
          var gu = gz[0]
            , gt = gz[1]
            , gs = gz[2]
            , gv = gz[3]
            , gC = gu + gu
            , go = gt + gt
            , gw = gs + gs
            , gr = gu * gC
            , gq = gu * go
            , gp = gu * gw
            , gA = gt * go
            , gy = gt * gw
            , gF = gs * gw
            , gG = gv * gC
            , gE = gv * go
            , gD = gv * gw;
          gB[0] = 1 - (gA + gF);
          gB[1] = gq + gD;
          gB[2] = gp - gE;
          gB[3] = 0;
          gB[4] = gq - gD;
          gB[5] = 1 - (gr + gF);
          gB[6] = gy + gG;
          gB[7] = 0;
          gB[8] = gp + gE;
          gB[9] = gy - gG;
          gB[10] = 1 - (gr + gA);
          gB[11] = 0;
          gB[12] = gx[0];
          gB[13] = gx[1];
          gB[14] = gx[2];
          gB[15] = 1;
          return gB
        }
        ;
        e.fromQuat = function(gy, gv) {
          var gs = gv[0]
            , gr = gv[1]
            , gq = gv[2]
            , gt = gv[3]
            , gz = gs + gs
            , go = gr + gr
            , gu = gq + gq
            , gp = gs * gz
            , gx = gr * gz
            , gw = gr * go
            , gF = gq * gz
            , gE = gq * go
            , gC = gq * gu
            , gD = gt * gz
            , gB = gt * go
            , gA = gt * gu;
          gy[0] = 1 - gw - gC;
          gy[1] = gx + gA;
          gy[2] = gF - gB;
          gy[3] = 0;
          gy[4] = gx - gA;
          gy[5] = 1 - gp - gC;
          gy[6] = gE + gD;
          gy[7] = 0;
          gy[8] = gF + gB;
          gy[9] = gE - gD;
          gy[10] = 1 - gp - gw;
          gy[11] = 0;
          gy[12] = 0;
          gy[13] = 0;
          gy[14] = 0;
          gy[15] = 1;
          return gy
        }
        ;
        e.frustum = function(gs, gp, gx, go, gw, gu, gt) {
          var gv = 1 / (gx - gp)
            , gr = 1 / (gw - go)
            , gq = 1 / (gu - gt);
          gs[0] = (gu * 2) * gv;
          gs[1] = 0;
          gs[2] = 0;
          gs[3] = 0;
          gs[4] = 0;
          gs[5] = (gu * 2) * gr;
          gs[6] = 0;
          gs[7] = 0;
          gs[8] = (gx + gp) * gv;
          gs[9] = (gw + go) * gr;
          gs[10] = (gt + gu) * gq;
          gs[11] = -1;
          gs[12] = 0;
          gs[13] = 0;
          gs[14] = (gt * gu * 2) * gq;
          gs[15] = 0;
          return gs
        }
        ;
        e.perspective = function(gr, gq, gp, gs, go) {
          var gu = 1 / Math.tan(gq / 2)
            , gt = 1 / (gs - go);
          gr[0] = gu / gp;
          gr[1] = 0;
          gr[2] = 0;
          gr[3] = 0;
          gr[4] = 0;
          gr[5] = gu;
          gr[6] = 0;
          gr[7] = 0;
          gr[8] = 0;
          gr[9] = 0;
          gr[10] = (go + gs) * gt;
          gr[11] = -1;
          gr[12] = 0;
          gr[13] = 0;
          gr[14] = (2 * go * gs) * gt;
          gr[15] = 0;
          return gr
        }
        ;
        e.ortho = function(gr, gp, gx, go, gv, gu, gt) {
          var gs = 1 / (gp - gx)
            , gw = 1 / (go - gv)
            , gq = 1 / (gu - gt);
          gr[0] = -2 * gs;
          gr[1] = 0;
          gr[2] = 0;
          gr[3] = 0;
          gr[4] = 0;
          gr[5] = -2 * gw;
          gr[6] = 0;
          gr[7] = 0;
          gr[8] = 0;
          gr[9] = 0;
          gr[10] = 2 * gq;
          gr[11] = 0;
          gr[12] = (gp + gx) * gs;
          gr[13] = (gv + go) * gw;
          gr[14] = (gt + gu) * gq;
          gr[15] = 1;
          return gr
        }
        ;
        e.lookAt = function(gC, gJ, gK, gu) {
          var gI, gH, gF, gq, gp, go, gx, gw, gv, gD, gG = gJ[0], gE = gJ[1], gB = gJ[2], gt = gu[0], gs = gu[1], gr = gu[2], gA = gK[0], gz = gK[1], gy = gK[2];
          if (Math.abs(gG - gA) < gn && Math.abs(gE - gz) < gn && Math.abs(gB - gy) < gn) {
            return e.identity(gC)
          }
          gx = gG - gA;
          gw = gE - gz;
          gv = gB - gy;
          gD = 1 / Math.sqrt(gx * gx + gw * gw + gv * gv);
          gx *= gD;
          gw *= gD;
          gv *= gD;
          gI = gs * gv - gr * gw;
          gH = gr * gx - gt * gv;
          gF = gt * gw - gs * gx;
          gD = Math.sqrt(gI * gI + gH * gH + gF * gF);
          if (!gD) {
            gI = 0;
            gH = 0;
            gF = 0
          } else {
            gD = 1 / gD;
            gI *= gD;
            gH *= gD;
            gF *= gD
          }
          gq = gw * gF - gv * gH;
          gp = gv * gI - gx * gF;
          go = gx * gH - gw * gI;
          gD = Math.sqrt(gq * gq + gp * gp + go * go);
          if (!gD) {
            gq = 0;
            gp = 0;
            go = 0
          } else {
            gD = 1 / gD;
            gq *= gD;
            gp *= gD;
            go *= gD
          }
          gC[0] = gI;
          gC[1] = gq;
          gC[2] = gx;
          gC[3] = 0;
          gC[4] = gH;
          gC[5] = gp;
          gC[6] = gw;
          gC[7] = 0;
          gC[8] = gF;
          gC[9] = go;
          gC[10] = gv;
          gC[11] = 0;
          gC[12] = -(gI * gG + gH * gE + gF * gB);
          gC[13] = -(gq * gG + gp * gE + go * gB);
          gC[14] = -(gx * gG + gw * gE + gv * gB);
          gC[15] = 1;
          return gC
        }
        ;
        e.str = function(go) {
          return "mat4(" + go[0] + ", " + go[1] + ", " + go[2] + ", " + go[3] + ", " + go[4] + ", " + go[5] + ", " + go[6] + ", " + go[7] + ", " + go[8] + ", " + go[9] + ", " + go[10] + ", " + go[11] + ", " + go[12] + ", " + go[13] + ", " + go[14] + ", " + go[15] + ")"
        }
        ;
        e.frob = function(go) {
          return (Math.sqrt(Math.pow(go[0], 2) + Math.pow(go[1], 2) + Math.pow(go[2], 2) + Math.pow(go[3], 2) + Math.pow(go[4], 2) + Math.pow(go[5], 2) + Math.pow(go[6], 2) + Math.pow(go[6], 2) + Math.pow(go[7], 2) + Math.pow(go[8], 2) + Math.pow(go[9], 2) + Math.pow(go[10], 2) + Math.pow(go[11], 2) + Math.pow(go[12], 2) + Math.pow(go[13], 2) + Math.pow(go[14], 2) + Math.pow(go[15], 2)))
        }
        ;
        gj.mat4 = e
      }
    )(window);
    function cp() {
      this.result = {
        bkData: [],
        eleData: [[], [], [], [], [], []],
        tileLabels: []
      }
    }
    z.extend(cp.prototype, {
      createLayer: function(gf, i) {
        var e = this.result.bkData;
        i = i || {};
        if (!e[gf]) {
          e[gf] = [[], [], []]
        }
        e[gf].dataType = i.dataType || 2;
        e[gf].png8 = i.png8 || false;
        e[gf].clipTile = i.clipTile || false
      },
      removeLayer: function(i) {
        var e = this.result.bkData;
        e[i] = null
      },
      getResult: function() {
        return this.result
      },
      setData: function(gi, gh, gj) {
        var e = this.result.bkData;
        var gf = e[gh] ? e[gh][gj] : null;
        if (!gf) {
          return
        }
        for (var gg = 0; gg < gf.length; gg++) {
          if (gf[gg].key && gf[gg].key === gi.key) {
            gf[gg] = gi;
            return
          }
        }
        gf.push(gi)
      },
      setLabelData: function(e) {
        this.result.tileLabels = e
      },
      getLabelData: function() {
        return this.result.tileLabels
      },
      setOverlayData: function(i, e) {
        if (!this.result.eleData[e]) {
          return
        }
        this.result.eleData[e] = i
      },
      clearLabelOverlayData: function() {
        this.result.eleData[2] = [];
        this.result.eleData[3] = [];
        this.result.eleData[4] = []
      },
      clearData: function(gg) {
        var e = this.result.bkData;
        if (typeof gg === "number") {
          if (e[gg]) {
            e[gg][0] = [];
            e[gg][1] = [];
            e[gg][2] = []
          }
          return
        }
        for (var gf = 0; gf < e.length; gf++) {
          if (!e[gf]) {
            continue
          }
          e[gf][0] = [];
          e[gf][1] = [];
          e[gf][2] = []
        }
      },
      sortThumbData: function(i) {
        var e = this.result.bkData;
        var gf = e[i];
        if (!gf) {
          return
        }
        if (gf[0] && gf[0].length > 0) {
          gf[0].sort(function(gh, gg) {
            return gh.tileInfo.useZoom - gg.tileInfo.useZoom
          })
        }
      }
    });
    var eb = (function() {
        var gr = new Int8Array(4);
        var gf = new Int32Array(gr.buffer,0,1);
        var gl = new Float32Array(gr.buffer,0,1);
        function gt(gz) {
          gf[0] = gz;
          return gl[0]
        }
        function i(gz) {
          gl[0] = gz;
          return gf[0]
        }
        function gm(gz) {
          var gB = (gz[3] << 24 | gz[2] << 16 | gz[1] << 8 | gz[0]);
          var gA = gt(gB & 4278190079);
          return gA
        }
        var gh = 0;
        var gk = 1;
        var gp = 2;
        var gw = 0;
        var gu = 1;
        var gs = 2;
        var gi = 6;
        var go = 7;
        function gq(gz, gA) {
          var gB;
          if (gA % 2 === 0) {
            gB = [-gz[1], gz[0]]
          } else {
            gB = [gz[1], -gz[0]]
          }
          return gB
        }
        function e(gz, gA, gB) {
          var gC = gq(gz, gA);
          var gD;
          if (gB === gk) {
            return gC
          } else {
            if (gA === 4 || gA === 5) {
              gD = [gC[0] - gz[0], gC[1] - gz[1]]
            } else {
              gD = [gC[0] + gz[0], gC[1] + gz[1]]
            }
            if (gB === gh) {
              vec2.normalize(gD, gD)
            }
            return gD
          }
        }
        function gg(gD, gC, gB, gz) {
          var gA = vec2.dot(gD, gC);
          if (gB === gs || gB === gu) {
            if ((gz === 0 || gz === 1) && gA > 0) {
              return true
            } else {
              if ((gz === 2 || gz === 3) && gA < 0) {
                return true
              }
            }
          }
          if ((gz === 0 || gz === 1) && gA < 0) {
            return true
          } else {
            if ((gz === 2 || gz === 3) && gA > 0) {
              return true
            }
          }
          return false
        }
        function gn(gA, gF, gH) {
          var gG = gq(gA, gF);
          var gC;
          var gE = gA;
          var gD = gH;
          var gJ = [];
          vec2.normalize(gJ, [gE[0] + gD[0], gE[1] + gD[1]]);
          var gI = vec2.dot(gG, [-gJ[1], gJ[0]]);
          if (Math.abs(gI) < 0.1) {
            gI = 1
          }
          var gB = 1 / gI;
          gC = [-gJ[1] * gB, gJ[0] * gB];
          var gz = vec2.dot(gA, gC);
          if (gz < 0) {
            vec2.negate(gC, gC)
          }
          return {
            cos2: gz,
            offset: gC
          }
        }
        function gy(gA, gF, gH, gz) {
          var gG = gq(gA, gF);
          var gE;
          var gD;
          var gC;
          if (gF === 0 || gF === 1) {
            gE = gH;
            gD = gA
          } else {
            gE = gA;
            gD = gH
          }
          if (!gE || !gD) {
            return gG
          }
          var gJ = [gE[0] + gD[0], gE[1] + gD[1]];
          if (gJ[0] === 0 && gJ[1] === 0) {
            vec2.normalize(gJ, gD)
          } else {
            vec2.normalize(gJ, gJ)
          }
          var gK = gg(gJ, gG, gz, gF);
          if (gK) {
            return gG
          }
          var gI = vec2.dot(gG, [-gJ[1], gJ[0]]);
          if (Math.abs(gI) < 0.1) {
            gI = 1
          }
          var gB = 1 / gI;
          gC = [-gJ[1] * gB, gJ[0] * gB];
          return gC
        }
        function gx(gJ, gK, gD, gL, gI, gB, gE, gC, gH) {
          var gG;
          var gA = 0;
          var gz = false;
          if (gH === undefined) {
            gG = gI.length / gi - 1
          } else {
            gG = gI.length / go - 1
          }
          gj(gK[0], gJ[0], gL, gD, 4, gE, gC, undefined, gI, gH);
          gG++;
          gA++;
          gj(gK[0], gJ[0], gL, gD, 5, gE, gC, undefined, gI, gH);
          gG++;
          gA++;
          for (var gF = 0; gF < gJ.length; gF++) {
            gj(gK[gF], gJ[gF], gL, gD, 0, gE, gC, gJ[gF - 1], gI, gH);
            gv(gB, ++gG, ++gA, gz);
            gj(gK[gF], gJ[gF], gL, gD, 1, gE, gC, gJ[gF - 1], gI, gH);
            gv(gB, ++gG, ++gA, gz);
            gj(gK[gF + 1], gJ[gF], gL, gD, 2, gE, gC, gJ[gF + 1], gI, gH);
            gv(gB, ++gG, ++gA, gz);
            gj(gK[gF + 1], gJ[gF], gL, gD, 3, gE, gC, gJ[gF + 1], gI, gH);
            gv(gB, ++gG, ++gA, gz);
            if (gD === gu && gF !== gJ.length - 1) {
              gj(gK[gF + 1], gJ[gF], gL, gD, 8, gE, gC, gJ[gF + 1], gI, gH);
              gv(gB, ++gG, ++gA, gz);
              gz = gz ? false : true
            }
          }
          gj(gK[gK.length - 1], gJ[gJ.length - 1], gL, gD, 6, gE, gC, undefined, gI, gH);
          gv(gB, ++gG, ++gA, gz);
          gj(gK[gK.length - 1], gJ[gJ.length - 1], gL, gD, 7, gE, gC, undefined, gI, gH);
          gv(gB, ++gG, ++gA, gz)
        }
        function gj(gL, gC, gM, gB, gG, gE, gA, gJ, gI, gH) {
          var gK = gG % 2 === 0 ? 1 : -1;
          var gF;
          if (gG === 4 || gG === 5 || gG === 6 || gG === 7) {
            gF = e(gC, gG, gM)
          } else {
            if (gG === 0 || gG === 1 || gG === 2 || gG === 3) {
              gF = gy(gC, gG, gJ, gB)
            } else {
              if (gG === 8) {
                var gD = gn(gC, gG, gJ);
                gF = gD.offset;
                vec2.normalize(gF, gF);
                var gz = gD.cos2;
                if (gz < 0) {
                  gK = -gK
                }
              }
            }
          }
          gI[gI.length] = gL[0] * 10;
          gI[gI.length] = gL[1] * 10;
          gI[gI.length] = gF[0] * gA * 10;
          gI[gI.length] = gF[1] * gA * 10;
          gI[gI.length] = gE;
          gI[gI.length] = gK;
          if (gH !== undefined) {
            gI[gI.length] = gH
          }
        }
        function gv(gD, gB, gz, gC) {
          var gA;
          if (gz % 2 === 0) {
            if (gC) {
              gD[gD.length] = gB - 2;
              gD[gD.length] = gB - 1;
              gD[gD.length] = gB
            } else {
              gD[gD.length] = gB - 1;
              gD[gD.length] = gB - 2;
              gD[gD.length] = gB
            }
          } else {
            if (gC) {
              gD[gD.length] = gB - 1;
              gD[gD.length] = gB - 2;
              gD[gD.length] = gB
            } else {
              gD[gD.length] = gB - 2;
              gD[gD.length] = gB - 1;
              gD[gD.length] = gB
            }
          }
        }
        return {
          getVertexCount: function(gA, gz) {
            if (gz === gu) {
              return gA * 5 - 2
            } else {
              return gA * 4
            }
          },
          overlayLine: function(gI, gB, gJ, gF, gz, gD, gA, gG) {
            var gH = [];
            for (var gE = 0; gE < gI.length; gE++) {
              if (gE !== gI.length - 1) {
                var gC = [gI[gE + 1][0] - gI[gE][0], gI[gE + 1][1] - gI[gE][1]];
                var gK = [];
                if (gC[0] === 0 && gC[1] === 0) {
                  gK = [0, 0]
                } else {
                  vec2.normalize(gK, gC)
                }
                gH[gH.length] = [gK[0], gK[1]]
              }
            }
            return gx(gH, gI, gB, gJ, gF, gz, gm(gD), gA, gG)
          },
          toSolidVertices: function(gD, gA) {
            var gB = new Float32Array(gD.length / go * 5);
            var gz = new Int16Array(gB.buffer);
            var gF = 0;
            var gC = 0;
            for (var gE = 0; gE < gD.length; gE += go) {
              gz[gF] = ~~gD[gE];
              gz[gF + 1] = ~~gD[gE + 1];
              gz[gF + 2] = ~~gD[gE + 2];
              gz[gF + 3] = ~~gD[gE + 3];
              gB[gC + 2] = gD[gE + 4];
              gz[gF + 6] = gD[gE + 5];
              gz[gF + 7] = gA ? gA : 0;
              gz[gF + 8] = gD[gE + 6];
              gz[gF + 9] = 0;
              gF += 10;
              gC += 5
            }
            return gB
          }
        }
      }
    )();
    var dC = 1;
    var fa = 2;
    var eE = {
      drawIndex: 0,
      devicePixelRatio: aI(),
      zoomState: 1,
      curViewTilesInfo: null,
      iconSetImg: null,
      LAST_CALC_ZOOM: -1,
      LAST_LOAD_VECTOR_ZOOM_CHANGE: false,
      lastCollisionTestTime: 0,
      remove: function() {
        this.tileCache.clear()
      },
      initDrawData: function() {
        this.drawIndex = this.zIndex;
        this.map._featureMgr.createLayer(this.drawIndex, {
          dataType: this.dataType,
          png8: this.png8,
          clipTile: this.clipTile
        })
      },
      destroyDrawData: function() {
        this.map._featureMgr.removeLayer(this.drawIndex)
      },
      setZIndex: function(e) {
        this.zIndex = e
      },
      getTileKey: function(e, gg) {
        gg = gg || {};
        var i = typeof gg.useZoom === "number" ? gg.useZoom : e.useZoom;
        var gf = e.style || this.mapStyleId || "default";
        return this.mapType + "_" + gf + "_" + e.col + "_" + e.row + "_" + e.zoom + "_" + i
      },
      getTileRenderDataKey: function(i) {
        var gf = i.col;
        var gg = i.zoom;
        var e = i.baseTileSize;
        gf = c5.calcLoopParam(gf, gg, e).col;
        return this.mapType + "_" + gf + "_" + i.row + "_" + gg + "_" + i.useZoom
      },
      getTileUnits: function(e) {
        var gg = this.map;
        var gf = bv[gg.getMapType()];
        var i = gf.baseUnits * Math.pow(2, gf.zoomLevelBase - e);
        return i
      },
      getTilesUrl: function(gh, gq, gr) {
        var i = gh.x;
        var gs = gh.y;
        var gn = am("ditu", "normal");
        var gj = gn.ver;
        var gk = gn.udt;
        i = c5.calcLoopParam(i, gq, gr).col;
        var gp = bv.B_NORMAL_MAP.vectorTileUrls;
        var gi = Math.abs(i + gs) % gp.length;
        var go = gp[gi];
        if (window.offLineIPAddress) {
          gp = [window.offLineIPAddress + "pvd/"];
          go = gp[0]
        }
        var gf = "x=" + i + "&y=" + gs + "&z=" + Math.floor(gq);
        var gm = this.devicePixelRatio > 1 ? "&scaler=2" : "";
        var gl = "&textimg=1";
        if (this.map.config.textRenderType === "canvas") {
          gl = "&textimg=0"
        }
        var gg = this.map.config.style;
        if (typeof gg === "string" && gg !== "default") {
          gf += "&styleId=" + dW.mapStyleNameIdPair[gg]
        }
        gf += "&styles=pl" + gl + gm + "&v=" + gj + "&udt=" + gk + "&json=0";
        var e = go + "?qt=vtile&param=" + window.encodeURIComponent(e2(gf));
        return e
      },
      getRasterTilesUrl: function(gf, gi, gg) {
        var gh = bv[this.map.mapType];
        var i = this.map.config.style;
        var e = gh.tileUrls[Math.abs(gi + gf) % gh.tileUrls.length] + "?qt=tile&x=" + gf + "&y=" + gi + "&z=" + gg + ((i === "default" || typeof i !== "string") ? "" : ("&styleId=" + dW.mapStyleNameIdPair[i])) + "&styles=pl&udt=" + this.normalUdt + "&scaler=" + this.scaler + "&p=1";
        e = e.replace(/-(\d+)/gi, "M$1");
        return e
      },
      getZoomState: function() {
        var gf = this.map;
        var i = gf.getZoom();
        var e = i - this.lastZoom;
        if (e > 0) {
          this.zoomState = 1
        } else {
          if (e < 0) {
            this.zoomState = -1
          }
        }
        this.lastZoom = i;
        return this.zoomState
      },
      releaseOutViewTileData: function(e) {
        var gh = this.map._workerMgr.releasePendingData(e);
        for (var gg = 0, gf = gh.length; gg < gf; gg++) {
          var gi = this.getTileKey(gh[gg]);
          this.tileCache.removeData(gi)
        }
      },
      loadLayerData: function(e, gg, i) {
        this.hasZoomChange = i;
        this.curViewTilesInfo = e;
        this.mapStyleId = this.map.getMapStyleId();
        this.releaseOutViewTileData(e);
        var gf = this.getZoomState();
        if (this.dataType === fa) {
          if (gg) {
            this.getVectorLayerDataFromCache(e, gf)
          } else {
            this.loadVectorLayerData(e)
          }
        } else {
          this.loadRasterLayerData(e, gg)
        }
      },
      getVectorLayerDataFromCache: function(gl, gv) {
        this.map.temp.isPermitSpotOver = false;
        this.tileLabels = [];
        if (this.baseLayer === true) {
          var gp = this.map._customLabelMgr.virtualTile;
          if (gp && gp.label) {
            this.tileLabels.push(gp.label)
          }
        }
        this.thumbCache = {};
        var gw = -1;
        for (var gs = 0, gq = gl.length; gs < gq; gs++) {
          var gt = gl[gs];
          var gh = gt.col;
          var gi = gt.row;
          var gf = gt.zoom;
          var gr = this._getTileTexImgKey(gt);
          var gg = gt.useZoom;
          gw = gf;
          var gj = this.getTileKey(gt);
          var gy = this.tileCache.getData(gj);
          if (gy && gy.status === "ready") {
            var gz = gy;
            this.map._featureMgr.setData(gy, this.drawIndex, 2);
            if (gy.label) {
              if (gy.label.status === "ready") {
                gy.label.tileInfo = gy.tileInfo;
                this.tileLabels.push(gy.label);
                if (gy.label.textureSources && gy.label.textureSources[gg] && this.map._webglMapScene) {
                  var gx = this.map._webglMapScene._painter;
                  if (!gx._labelTextureAtlasOffset[gr]) {
                    gx._addToAsyncJob(gy.label.textureSources[gg])
                  }
                }
              } else {
                if (gy.label.status !== "processing") {
                  this.processLabelData(gy)
                }
              }
            }
          } else {
            var gu = {
              tileInfo: gt,
              dataType: fa,
              key: gj
            };
            this.map._featureMgr.setData(gu, this.drawIndex, 2);
            if (this.useThumbData) {
              this.setThumbData(gh, gi, gf, gg, gv)
            }
          }
        }
        this.tileLabels.labelZoom = gw;
        this.updateLabels(gv);
        var gm = this.map.getZoom();
        var gk = Math.floor(gm);
        var go = gm - gk;
        var gn = Math.floor(this.LAST_CALC_ZOOM);
        var e = this.LAST_CALC_ZOOM - gn;
        var gA = false;
        if (this.hasZoomChange) {
          if (Math.abs(gm - this.LAST_CALC_ZOOM) >= 0.5) {
            gA = true
          } else {
            if (go < 0.5 && e >= 0.5) {
              gA = true
            } else {
              if (go >= 0.5 && e < 0.5) {
                gA = true
              }
            }
          }
          if (gA) {
            this.cacheDataCollideLabels(0)
          }
          this.LAST_CALC_ZOOM = gm
        } else {
          if (this.tileLabels.length > 0) {
            this.cacheDataCollideLabels(30)
          }
        }
      },
      loadVectorLayerData: function(go, gq) {
        this.map.temp.isPermitSpotOver = false;
        var gn = this;
        function gm(i, gs) {
          var gu = gn.tileCache.getData(gs);
          if (!gu) {
            return
          }
          if (!i || i.error) {
            if (typeof alog !== "undefined") {
              alog("exception.fire", "catch", {
                msg: i.tileKey + ":" + i.message,
                path: "api.js",
                ln: 1
              })
            }
            var gt = new aL("ontileloaderror");
            i = i || {};
            gt.error = i.error || "";
            gt.message = i.message || "";
            gn.map.fire(gt);
            gu.status = "init";
            gu.reloadTimer = setTimeout(function() {
              if (gu.retry < 3) {
                gu.retry++;
                gu.status = "loading";
                gn.loadVectorTileData(i.tileInfo, gm)
              } else {
                gn.tileCache.removeData(gs)
              }
            }, 4000);
            gn.map._featureMgr.clearData(gn.drawIndex);
            gn._checkTilesLoaded();
            gn.getVectorLayerDataFromCache(gn.curViewTilesInfo, gn.getZoomState());
            return
          }
          if (gu.reloadTimer) {
            clearTimeout(gu.reloadTimer);
            gu.reloadTimer = null
          }
          gn.callbackDataQueue.push([i, gs]);
          if (gn.processDataTimer) {
            return
          }
          gn.processDataTimer = setTimeout(function() {
            while (gn.callbackDataQueue.length > 0) {
              var gv = gn.callbackDataQueue.shift();
              gn.vectorTileDataCbk(gv[0], gv[1]);
              gn._checkTilesLoaded()
            }
            gn.map._featureMgr.clearData(gn.drawIndex);
            gn.getVectorLayerDataFromCache(gn.curViewTilesInfo, gn.getZoomState());
            gn.processDataTimer = null
          }, 200)
        }
        for (var gl = 0, gj = go.length; gl < gj; gl++) {
          var gg = go[gl];
          var gh = gg.col;
          var gr = gg.row;
          var gp = gg.zoom;
          var gf = gg.loopOffsetX;
          var gk = this.getTileKey(gg);
          var e = this.tileCache.getData(gk);
          if (!e) {
            e = {
              status: "init",
              tileInfo: gg,
              dataType: fa,
              key: gk,
              retry: 0
            }
          }
          if (e.status !== "ready" && e.status !== "loading") {
            this.numLoading++;
            e.status = "loading";
            this.tileCache.setData(gk, e);
            var gi = this.getProcessedLabelZoom(gg);
            if (gi) {
              gg.processedLabelZooms = gi
            }
            this.loadVectorTileData(gg, gm)
          }
        }
      },
      setThumbData: function(i, gh, gg, e, gf) {
        if (gf === 1) {
          if (this._findParentZoomTile(i, gh, gg, e, 8) === false) {
            this._findChildZoomTile(i, gh, gg, e, 3)
          }
        } else {
          if (gf === -1) {
            if (this._findChildZoomTile(i, gh, gg, e, 3) === false) {
              this._findParentZoomTile(i, gh, gg, e, 8)
            }
          }
        }
        this.map._featureMgr.sortThumbData(this.drawIndex)
      },
      _findParentZoomTile: function(gj, gs, gr, gh, gm) {
        var gi = bv[this.getMapType()];
        var gf = gi.minDataZoom;
        var e = gj;
        var gp = gs;
        var gn = gr;
        var go = gh;
        for (var gl = 1; gl <= gm; gl++) {
          var gg = this.tileType.getParentTile(e, gp, gn, go, gf);
          if (gg === null) {
            continue
          }
          var gq = this.getTileKey(gg);
          var gk = this.tileCache.getData(gq);
          if (gk && gk.status === "ready") {
            if (this.thumbCache[gq]) {
              continue
            }
            this.map._featureMgr.setData(gk, this.drawIndex, 0);
            this.thumbCache[gq] = true;
            return true
          }
          e = gg.col;
          gp = gg.row;
          gn = gg.zoom;
          go = gg.useZoom
        }
        return false
      },
      _findChildZoomTile: function(gk, gm, e, gh, gv) {
        var gt = bv[this.getMapType()];
        var gp = gt.maxDataZoom;
        var gj = gk;
        var gl = gm;
        var gn = e;
        var gg = gh;
        var gi = true;
        for (var gs = 1; gs <= gv; gs++) {
          var gq = false;
          var gf = this.tileType.getChildTiles(gj, gl, gn, gg, gp, gs);
          if (!gf) {
            continue
          }
          for (var gr = 0; gr < gf.length; gr++) {
            var go = this.getTileKey(gf[gr]);
            var gu = this.tileCache.getData(go);
            if (gu && gu.status === "ready") {
              if (!this.thumbCache[go]) {
                this.map._featureMgr.setData(gu, this.drawIndex, 1);
                this.thumbCache[go] = true
              }
              gq = true
            } else {
              gi = false
            }
          }
          if (gq) {
            break
          }
        }
        return gi
      },
      loadVectorTileData: function(i, gh) {
        var gf = i.col;
        var gl = i.row;
        var gj = i.zoom;
        var gk = i.baseTileSize;
        var e = this.getTilesUrl(new dh(gf,gl), gj, gk);
        if (!e) {
          return
        }
        var gi = this.getTileKey(i);
        a2(this.map);
        if (!this.processData) {
          this.map._workerMgr.loadTileData(e, i, gi, gh);
          return
        }
        var gh = "cbk" + gi.replace(/-/g, "_");
        var gg = this;
        aT[gh] = function(gm) {
          var gn = (function(go) {
              return function() {
                go.tileInfo = i;
                var gu = gg.processData(go);
                if (!gu.road) {
                  return
                }
                var gr = {
                  tileInfo: i,
                  renderData: {
                    base: []
                  },
                  status: "ready",
                  key: gi,
                  mapType: gg.mapType
                };
                var gx = [];
                var gA = [];
                for (var gt = 0; gt < gu.road.length; gt++) {
                  var gw = gu.road[gt];
                  var gv = -1;
                  for (var gs = 0; gs < gw.length; gs++) {
                    var gy = gw[gs];
                    var gz = [];
                    if (gx.length / 7 + gy[0].length / 2 > 65536) {
                      gr.renderData.base.push({
                        type: "line",
                        data: [eb.toSolidVertices(gx, 4000), new Uint16Array(gA)]
                      });
                      gx = [];
                      gA = []
                    }
                    for (var gq = 0; gq < gy[0].length; gq += 2) {
                      gz[gz.length] = [gy[0][gq], gy[0][gq + 1]]
                    }
                    var gp = gy[3];
                    eb.overlayLine(gz, gy[1], gy[2], gx, gA, gp, gy[4], gt + 20)
                  }
                  gr.renderData.base.push({
                    type: "line",
                    data: [eb.toSolidVertices(gx, 4000), new Uint16Array(gA)]
                  })
                }
                gg.tileCache.setData(gi, gr);
                gg.map._featureMgr.clearData(gg.drawIndex);
                gg.getVectorLayerDataFromCache(gg.curViewTilesInfo, gg.getZoomState());
                gg.map.dispatchEvent(new aL("onrefresh"))
              }
            }
          )(gm);
          gg.map.jobScheduler.addJob(gn);
          delete aT[gh]
        }
        ;
        e += "&fn=" + encodeURIComponent(dw + "." + gh);
        fO.load(e)
      },
      vectorTileDataCbk: function(gg, gh) {
        var gl = new aL("ontileloaded");
        gl.perfStat = gg.perfStat || [];
        var e = this.map;
        e.fire(gl);
        var i = gg.tileInfo;
        var gf = i.col;
        var gq = i.row;
        var gp = i.zoom;
        var go = i.baseTileSize;
        var gj = this.tileCache.getData(gh);
        if (!gj) {
          return
        }
        if (!this.showLabel) {
          gg.label = null
        }
        gj.renderData = gg;
        gj.tileInfo = i;
        var gi = c5.calcLoopParam(gf, gp, go);
        var gm = gi.geoOffsetX;
        gj.tileInfo.loopOffsetX = gm;
        gj.status = "ready";
        gj.mapType = this.mapType;
        this.tileCache.setData(gh, gj);
        gj.label = gg.label;
        gg.label = null;
        if (gg.indoorData) {
          e._indoorMgr.setData(gg.indoorData)
        }
        var gk = "id_" + gf + "_" + gq + "_" + gp;
        if (!this.curViewTilesInfo[gk]) {
          e.fire(new aL("ontilenotinview"));
          return
        }
        this.processLabelData(gj);
        if (gg.indoorData && e._indoorMgr.currentUid) {
          this._refreshIndoorData(e._indoorMgr.currentUid, e._indoorMgr.currentFloor)
        }
        var gn = new aL("onrefresh");
        gn.source = "webgllayer";
        this.map.dispatchEvent(gn)
      },
      _refreshIndoorData: function(go, gn) {
        var gq = this.map._indoorMgr.getIndoorData(go);
        var gt = gq.tileKeys;
        var gr = Math.floor(this.map.getZoom());
        for (var gl = 0; gl < gt.length; gl++) {
          var gi = gt[gl];
          var gk = this.tileCache.getData(gi);
          if (!gk) {
            continue
          }
          var gs = gk.renderData;
          gs.indoorBase = [];
          gs.indoorBaseContour = [];
          gs.indoorBorder3D = [];
          gs.indoorArea3D = [];
          gk.label.indoorLabel = [];
          this.labelProcessor.clearCollisionCache(gk.label);
          for (var gm in gs.indoorData) {
            if (gm === "tileInfo") {
              continue
            }
            var e = gs.indoorData[gm];
            var gh = e.defaultFloor;
            if (gm === go) {
              gh = gn;
              e.currentFloor = gn
            }
            if (e.floors[gh]) {
              if (e.floors[gh].base) {
                for (var gj = 0; gj < e.floors[gh].base.length; gj++) {
                  gs.indoorBase.push(e.floors[gh].base[gj])
                }
              }
              if (e.floors[gh].contour) {
                for (var gj = 0; gj < e.floors[gh].contour.length; gj++) {
                  gs.indoorBaseContour.push(e.floors[gh].contour[gj])
                }
              }
              if (e.floors[gh].indoorBorder3D) {
                gs.indoorBorder3D.push(e.floors[gh].indoorBorder3D)
              }
              if (e.floors[gh].area3D) {
                gs.indoorArea3D.push(e.floors[gh].area3D)
              }
              if (e.floors[gh].pois) {
                gk.label.indoorLabel = gk.label.indoorLabel.concat(e.floors[gh].pois)
              }
            }
          }
          this.updateAllIconsTextureCoords(gk);
          var gp = this;
          this.labelProcessor.loadIconImages(gk, function(i) {
            gp.updateAllIconsTextureCoords(i)
          });
          var gg = gi.split("_");
          var gf = parseInt(gg[gg.length - 1], 10);
          if (gf !== gr) {
            continue
          }
          gp.map._featureMgr.setData(gk, this.drawIndex, 2)
        }
        this.dataBackCollideLabels();
        this.map.dispatchEvent(new aL("onrefresh"))
      },
      _removeIndoorData: function(i) {
        if (!i.indoorData) {
          return
        }
        for (var e in i.indoorData) {
          if (e === "tileInfo") {
            continue
          }
          this.map._indoorMgr.removeData(e, i.key)
        }
      },
      getProcessedLabelZoom: function(gg) {
        var gh = cu.baseZoomInfo[gg.zoom];
        if (!gh) {
          return false
        }
        var gf = [];
        for (var gi = 0; gi < gh.length; gi++) {
          var gj = this.getTileKey(gg, {
            useZoom: gh[gi]
          });
          var e = this.tileCache.getData(gj);
          if (e && e.status === "ready" && e.label && e.label.status === "ready") {
            gf.push(gh[gi])
          }
        }
        if (gf.length) {
          return gf
        } else {
          return false
        }
      },
      getSameZoomDataFromCache: function(gf) {
        var gg = cu.baseZoomInfo[gf.zoom];
        for (var gh = 0; gh < gg.length; gh++) {
          var gi = this.getTileKey(gf, {
            useZoom: gg[gh]
          });
          if (gf.useZoom === gg[gh]) {
            continue
          }
          var e = this.tileCache.getData(gi);
          if (e && e.status === "ready" && e.label && e.label.status === "ready") {
            return e
          }
        }
        return false
      },
      hasSameLabelData: function(gg, gf) {
        for (var e = 0; e < gf.length; e++) {
          if (gf[e].key === gg) {
            return true
          }
        }
        return false
      },
      getDataByFloorName: function(gf, gg) {
        for (var e = 0; e < gf.length; e++) {
          if (gf[e].floorName === gg) {
            return gf[e]
          }
        }
        return null
      },
      mergeIndoorLabelData: function(gl, e) {
        for (var gj in gl) {
          if (gj === "tileInfo") {
            continue
          }
          if (e[gj]) {
            var gf = gl[gj].floors;
            var gm = e[gj].floors;
            for (var gh = 0; gh < gf.length; gh++) {
              var gg = gf[gh];
              var gk = gg.floorName;
              var gi = this.getDataByFloorName(gm, gk);
              if (gi) {
                if (gi.pois) {
                  gi.pois = gi.pois.concat(gg.pois);
                  gg.pois = gi.pois
                } else {
                  gi.pois = gg.pois
                }
              }
            }
          }
        }
      },
      mergeSameZoomLabelData: function(gj) {
        var gh = gj.label;
        if (!gh) {
          return
        }
        var e = gj.tileInfo;
        var gi = this.getSameZoomDataFromCache(e);
        if (!gi) {
          return
        }
        var gg = gi.label;
        if (!gg) {
          return
        }
        for (var gf = 0; gf < gh.fixedLabel.length; gf++) {
          if (!this.hasSameLabelData(gh.fixedLabel[gf].key, gg.fixedLabel)) {
            gg.hasNewData = true;
            gg.fixedLabel.push(gh.fixedLabel[gf])
          }
        }
        for (var gf = 0; gf < gh.lineLabel.length; gf++) {
          if (!this.hasSameLabelData(gh.lineLabel[gf].key, gg.lineLabel)) {
            gg.hasNewData = true;
            gg.lineLabel.push(gh.lineLabel[gf])
          }
        }
        for (var gf = 0; gf < gh.indoorLabel.length; gf++) {
          if (!this.hasSameLabelData(gh.indoorLabel[gf].key, gg.indoorLabel)) {
            gg.hasNewData = true;
            gg.indoorLabel.push(gh.indoorLabel[gf])
          }
        }
        gj.label = gg;
        if (gi.renderData.indoorData && gj.renderData.indoorData) {
          this.mergeIndoorLabelData(gj.renderData.indoorData, gi.renderData.indoorData)
        }
      },
      processLabelData: function(gi) {
        if (!gi.label) {
          return
        }
        if (gi.label.status === "processing") {
          return
        }
        gi.label.status = "processing";
        var gg = this;
        gg.updateAllIconsTextureCoords(gi);
        this.labelProcessor.loadIconImages(gi, function(gj) {
          gg.updateAllIconsTextureCoords(gj)
        });
        if (this.map.config.textRenderType === "canvas") {
          var e = this.labelProcessor.drawLabelsOnCanvas(gi, function(gl, gm) {
            var gk = gi.tileInfo;
            gg.mergeSameZoomLabelData(gi);
            if (gl) {
              if (!gi.label.textureHeights) {
                gi.label.textureHeights = []
              }
              gi.label.textureHeights[gk.useZoom] = gl.height
            }
            if (gm) {
              if (!gi.label.indoorTextureHeights) {
                gi.label.indoorTextureHeights = []
              }
              gi.label.indoorTextureHeights[gk.useZoom] = gm.height
            }
            var gj = gg._getTileTexImgKey(gk);
            gg._doWorkAfterLabelImageLoad(gi, gl, gm, gj)
          });
          return
        }
        var gf = gi.label.textImageBitmap || gi.label.textImgStr;
        var gh = gi.label.indoorTextImageBitmap || gi.label.indoorTextImgStr;
        this.labelProcessor.loadImgByStr(gf, gh, function i(go, gm) {
          var gl = gi.label.textureHeight;
          var gp = gi.label.indoorTextureHeight;
          gi.label.textureHeight = undefined;
          gi.label.indoorTextureHeight = undefined;
          var gk = gi.tileInfo;
          gg.mergeSameZoomLabelData(gi);
          var gn = gi.label;
          gn.textImgStr = "";
          gn.indoorTextImgStr && (gn.indoorTextImgStr = "");
          if (!gn.textureHeights) {
            gn.textureHeights = []
          }
          gn.textureHeights[gk.useZoom] = gl;
          if (!gn.indoorTextureHeights) {
            gn.indoorTextureHeights = []
          }
          gn.indoorTextureHeights[gk.useZoom] = gp;
          var gj = gg._getTileTexImgKey(gk);
          gg._doWorkAfterLabelImageLoad(gi, go, gm, gj)
        })
      },
      _getTileTexImgKey: function(i) {
        var gf = i.style || this.mapStyleId || "default";
        var e = gf + "_" + i.col + "_" + i.row + "_" + i.zoom;
        if (this.map.config.textRenderType === "canvas") {
          e += "_" + i.useZoom
        }
        return e
      },
      _doWorkAfterLabelImageLoad: function(gk, gi, gg, i) {
        var gj = this;
        var gh = gk.label;
        gh.tileInfo = gk.tileInfo;
        gh.status = "ready";
        if (gi || gg) {
          var e = gh.tileInfo;
          if (gi) {
            gi.id = i;
            if (!gh.textureSources) {
              gh.textureSources = []
            }
            gh.textureSources[e.useZoom] = gi
          }
          if (gg) {
            gg.id = i + "_indoor";
            if (!gh.indoorTextureSources) {
              gh.indoorTextureSources = []
            }
            gh.indoorTextureSources[e.useZoom] = gg
          }
          if (gj.map._webglMapScene) {
            var gf = gj.map._webglMapScene._painter;
            if (gi) {
              gf._addToAsyncJob(gh.textureSources[e.useZoom])
            }
          }
        }
        if (gk.custom !== true) {
          gj.tileLabels.push(gh)
        }
        if (gj.collisionTimer) {
          return
        }
        gj.collisionTimer = setTimeout(function() {
          gj.dataBackCollideLabels();
          gj.collisionTimer = null
        }, 300)
      },
      _updateIconTextureCoords: function(gk, gf) {
        if (!gk) {
          return
        }
        var gj = this.map;
        for (var gg = 0; gg < gk.length; gg++) {
          var gi = gk[gg];
          if (!gi.iconPos) {
            continue
          }
          if (gj._webglMapScene) {
            var e = gj._webglMapScene._painter;
            var gh = gf + "_" + gi.iconPos.iconType;
            gi.iconPos.texcoord = e._iconTextureAtlasCoords[gh] || null
          }
        }
      },
      updateAllIconsTextureCoords: function(gh) {
        if (this.map.viewAnimationTime) {
          return
        }
        if (gh) {
          if (gh.label) {
            var i = gh.tileInfo.style;
            this._updateIconTextureCoords(gh.label.fixedLabel, i);
            this._updateIconTextureCoords(gh.label.indoorLabel, i)
          }
        } else {
          var gg = this.tileCache.getAllData();
          for (var gf in gg) {
            var e = gg[gf].data;
            if (e.status === "ready" && e.label) {
              var i = e.tileInfo.style;
              this._updateIconTextureCoords(e.label.fixedLabel, i);
              this._updateIconTextureCoords(e.label.indoorLabel, i)
            }
          }
        }
        this.updateLabels();
        this.map.dispatchEvent(new aL("onrefresh"))
      },
      cacheDataCollideLabels: function(gf) {
        var gh = this;
        var i = this.map._featureMgr;
        function gg() {
          gh.cacheLabelTimer = null;
          var gi;
          var gj = gh.map.getTilt();
          var gk = gh.map.getHeading() % 360;
          if (gh.tileLabels.length === 0 || (gh.tileLabels.length === 1 && gh.tileLabels[0].tileInfo.zoom === 0)) {
            gi = i.getLabelData();
            if (gi.length > 0) {
              gi = gh.labelProcessor.collisionTest(gi, -1)
            }
          } else {
            if (gj || gk) {
              if (this._collisionTimer) {
                if (!gj) {
                  clearTimeout(this._collisionTimer)
                } else {
                  if (Date.now() - gh.lastCollisionTestTime > 500) {
                    gh.lastCollisionTestTime = Date.now()
                  } else {
                    clearTimeout(this._collisionTimer)
                  }
                }
              }
              this._collisionTimer = setTimeout(function() {
                gi = gh.labelProcessor.collisionTest(gh.tileLabels);
                if (gi) {
                  i.setLabelData(gi)
                }
                gh.updateLabels();
                gh.map.dispatchEvent(new aL("onrefresh"));
                gh._collisionTimer = null
              }, 60);
              return
            } else {
              gi = gh.labelProcessor.getCachedLabels(gh.tileLabels)
            }
          }
          if (gi) {
            i.setLabelData(gi)
          }
          gh.updateLabels();
          gh.map.dispatchEvent(new aL("onrefresh"))
        }
        if (!gf) {
          clearTimeout(gh.cacheLabelTimer);
          gg()
        } else {
          if (gh.cacheLabelTimer) {
            return
          }
          gh.cacheLabelTimer = setTimeout(function e() {
            gg()
          }, gf)
        }
      },
      dataBackCollideLabels: function() {
        var i = this;
        if ((i.tileLabels && i.tileLabels.length === 0)) {
          return
        }
        var e;
        i.labelProcessor.calcLabelsCollision(i.tileLabels);
        e = i.labelProcessor.getCachedLabels(i.tileLabels);
        if (e) {
          i.map._featureMgr.setLabelData(e)
        }
        i.updateLabels();
        i.map.dispatchEvent(new aL("onrefresh"));
        if (eO()) {
          this.labelProcessor._refreshSpotData()
        }
      },
      updateLabels: function(gh) {
        var gi = this.map;
        var i = gi._featureMgr;
        var gf = i.getLabelData();
        if (gf.length > 0) {
          var gg = gi.getZoom();
          if (gf.labelZoom - gg < 3) {
            this.labelProcessor.updateLabels(gf);
            var e = this.labelProcessor.fixDataFormat(gf);
            i.setOverlayData(e[0], 2);
            i.setOverlayData(e[1], 3);
            i.setOverlayData(e[2], 4)
          } else {
            i.clearLabelOverlayData()
          }
          gi.temp.isPermitSpotOver = false;
          this.labelProcessor.curSpotAdded = false
        }
      },
      loadRasterLayerData: function(gg, gk) {
        if (gk) {
          for (var gi = 0, gh = gg.length; gi < gh; gi++) {
            var gf = gg[gi];
            var gl = this.getTileKey(gf);
            var e = this.tileCache.getData(gl);
            if (e && e.status === "ready") {
              this.map._featureMgr.setData(e, this.drawIndex, 2)
            }
          }
          return
        }
        for (var gi = 0, gh = gg.length; gi < gh; gi++) {
          var gf = gg[gi];
          var gl = this.getTileKey(gf);
          var e = this.tileCache.getData(gl);
          if (!e) {
            this.tileCache.setData(gl, {});
            var gj = this;
            this.loadRasterTileData(gf, function(i, gm) {
              gj.rasterTileDataCbk(i, gm)
            })
          }
        }
      },
      loadRasterTileData: function(i, e) {
        var gh = i.col;
        var gk = i.row;
        var gi = i.zoom;
        var gg = this.getTilesUrl(new dh(gh,gk), gi);
        if (!gg) {
          return
        }
        var gj = this.getTileKey(i);
        var gf = this.loadTileImage(gg, gj, e);
        gf.tileInfo = i
      },
      loadTileImage: function(gg, gf, e) {
        var i = new Image();
        i.crossOrigin = "anonymous";
        i.onload = function() {
          e && e(this, gf)
        }
        ;
        i.onerror = function() {
          e && e(null, gf)
        }
        ;
        i.src = gg;
        return i
      },
      rasterTileDataCbk: function(gi, gg) {
        if (!gi) {
          this.tileCache.removeData(gg);
          return
        }
        var i = gi.tileInfo;
        var gf = i.col;
        var go = i.row;
        var gn = i.zoom;
        var e = this.tileCache.getData(gg);
        if (!e) {
          return
        }
        var gh = c5.calcLoopParam(gf, gn);
        var gl = gh.geoOffsetX;
        gi.tileInfo.loopOffsetX = gl;
        e.textureSource = gi;
        e.dataType = dC;
        e.tileInfo = i;
        e.renderData = {
          vertexAll: [0, 0, 0, 0, 0, 256, 0, 0, 1, 0, 256, 256, 0, 1, 1, 0, 0, 0, 0, 0, 256, 256, 0, 1, 1, 0, 256, 0, 0, 1]
        };
        e.status = "ready";
        this.tileCache.setData(gg, e);
        var gj = "id_" + gf + "_" + go + "_" + gn;
        var gk = false;
        if (this.curViewTilesInfo[gj]) {
          e.dataType = dC;
          e.png8 = this.png8 || false;
          this.map._featureMgr.setData(e, this.drawIndex, 2);
          gk = true
        }
        if (gk) {
          var gm = new aL("onrefresh");
          gm.source = "webgllayer";
          this.map.dispatchEvent(gm)
        }
      },
      _checkTilesLoaded: function() {
        this.numLoading--;
        if (this.map.firstTileLoad === false) {
          this.map.dispatchEvent(new aL("onfirsttilesloaded"));
          this.map.firstTileLoad = true
        }
        var e = this;
        if (this.numLoading === 0) {
          if (this._checkLoadedTimer) {
            clearTimeout(this._checkLoadedTimer);
            this._checkLoadedTimer = null
          }
          this._checkLoadedTimer = setTimeout(function() {
            if (e.numLoading === 0) {
              e.map.dispatchEvent(new aL("ontilesloaded"))
            }
            e._checkLoadedTimer = null
          }, 60)
        }
      },
      isClickableLabel: function(e) {
        if (e.isDel) {
          return false
        }
        if (e.zoom > 9 && !e.guid) {
          return false
        }
        if (e.zoom <= 9 && !e.name && !e.guid) {
          return false
        }
        return true
      }
    };
    var by = 5;
    var c2 = 4;
    var fS = 3;
    var d9 = 2;
    var f8 = 1;
    var c4 = 0;
    function t(e) {
      this._ratio = aI();
      this._iconCache = {};
      this._map = e;
      this._drawingCanvasPool = [];
      this._drawingCanvasHeight = 4096
    }
    z.extend(t.prototype, {
      _loadIcons: function(i, gk) {
        var gi = 0;
        var gh = this;
        var gf = this._map.config.style;
        for (var gj in i) {
          gi++;
          var e = new Image();
          e.id = gj;
          e.crossOrigin = "anonymous";
          e.onload = function() {
            gh._iconCache[this.id].loaded = true;
            gi--;
            if (gi === 0) {
              gk()
            }
            this.onload = null
          }
          ;
          e.onerror = function() {
            gh._iconCache[this.id] = null;
            gi--;
            if (gi === 0) {
              gk()
            }
            this.onerror = null
          }
          ;
          var gg = dW.getIconSetPath(gf) + gj + ".png";
          e.src = gg;
          this._iconCache[gj] = {
            loaded: false,
            image: e
          }
        }
      },
      _getEmptyDrawingCanvas: function() {
        for (var gf = 0; gf < this._drawingCanvasPool.length; gf++) {
          if (this._drawingCanvasPool[gf]._free === true) {
            this._drawingCanvasPool[gf]._free = false;
            return this._drawingCanvasPool[gf]
          }
        }
        var e = this._createNewDrawingCanvas();
        this._drawingCanvasPool.push(e);
        e._free = false;
        return e
      },
      _createNewDrawingCanvas: function() {
        var e = L("canvas");
        e.width = 512;
        e.height = this._drawingCanvasHeight;
        e._free = true;
        e._id = aT.getGUID();
        var i = e.getContext("2d");
        i.textBaseline = "bottom";
        i.lineJoin = "round";
        return e
      },
      drawLabelsOnCanvas: function(gy, gg) {
        var go = gy.label.fixedLabel.slice(0);
        var gu = gy.label.lineLabel.slice(0);
        var gf = gy.label.indoorLabel.slice(0);
        if (go.length === 0 && gu.length === 0 && gf.length === 0) {
          gg();
          return
        }
        var gj = function(gD, i) {
          return gD.styleId - i.styleId
        };
        go.sort(gj);
        gu.sort(gj);
        gf.sort(gj);
        var gx = {};
        var e = this._getEmptyDrawingCanvas();
        var gt = e.getContext("2d");
        gt.clearRect(0, 0, e.width, e.height);
        var gB = 0;
        var gp = null;
        var gi = 0;
        if (go.length > 0) {
          while (gi < go.length && !go[gi].styleText[0]) {
            gi++
          }
          if (go[gi] && go[gi].styleText[0]) {
            gp = go[gi].styleText[0].fontSize + go[gi].styleText[0].haloSize * 2
          }
        }
        if (gp === null && gf.length > 0) {
          gi = 0;
          while (gi < gf.length && !gf[gi].styleText[0]) {
            gi++
          }
          if (gf[gi] && gf[gi].styleText[0]) {
            gp = gf[gi].styleText[0].fontSize + gf[gi].styleText[0].haloSize * 2
          }
        }
        if (gp === null && gu.length > 0) {
          gi = 0;
          while (gi < gu.length && !gu[gi].styleText[0]) {
            gi++
          }
          if (gu[gi] && gu[gi].styleText[0]) {
            gp = gu[gi].styleText[0].fontSize + gu[gi].styleText[0].haloSize * 2
          }
        }
        if (gp === null || isNaN(gp)) {
          gg();
          return
        }
        var gl = 0;
        var gk = gp;
        var gr = {};
        var gC = 0;
        var gs = [];
        for (var gw = 0; gw < go.length; gw++) {
          var gn = go[gw];
          var gq = gn.name;
          var gv = gn.styleText;
          if (!gq || gv.length === 0) {
            continue
          }
          var gh = gn.icon;
          if (gn.textOnIcon && (!this._iconCache[gh] || this._iconCache[gh].loaded === false)) {
            gs.push(gn);
            gC++;
            if (!gr[gh]) {
              gr[gh] = true
            }
            continue
          }
          var gz = this._drawEachText(gt, gn, gB, gl, gk, gp, gx);
          if (!gz) {
            continue
          }
          gl = gz.curX;
          gk = gz.curY;
          gp = gz.curLineHeight;
          gB = gz.styleId
        }
        var gz = this._drawEachTypeOfLabels(gt, gf, gB, gl, gk, gp, gx);
        gB = gz.curStyleId;
        gl = gz.curX;
        gk = gz.curY;
        gp = gz.curLineHeight;
        var gz = this._drawEachTypeOfLabels(gt, gu, gB, gl, gk, gp, gx);
        gB = gz.curStyleId;
        gl = gz.curX;
        gk = gz.curY;
        gp = gz.curLineHeight;
        if (gC > 0) {
          var gA = this;
          this._loadIcons(gr, function() {
            gz = gA._drawEachTypeOfLabels(gt, gs, gB, gl, gk, gp, gx);
            gB = gz.curStyleId;
            gl = gz.curX;
            gk = gz.curY;
            gp = gz.curLineHeight;
            var i = gA._generateEachLabelCanvas(e, gk, go, gu, gf, gy);
            gg(i[0], i[1])
          });
          return
        }
        var gm = this._generateEachLabelCanvas(e, gk, go, gu, gf, gy);
        gg(gm[0], gm[1])
      },
      drawCustomLabelsOnCanvas: function(gj, gp) {
        if (gj.length === 0) {
          gp();
          return
        }
        var gf = 0;
        var e = (gj[0].style.fontSize + (gj[0].style.haloSize || 0) * 2) || 0;
        var gg = e;
        var gl = this._getEmptyDrawingCanvas();
        var gq = gl.getContext("2d");
        gq.clearRect(0, 0, gl.width, gl.height);
        var gm = {};
        var go = -1;
        for (var gh = 0; gh < gj.length; gh++) {
          if (!gj[gh].name) {
            continue
          }
          var gn = this._drawEachText(gq, gj[gh], go, gf, e, gg, gm);
          if (!gn) {
            continue
          }
          gf = gn.curX;
          e = gn.curY;
          gg = gn.curLineHeight;
          go = gn.styleId
        }
        var gi = e;
        var gk = this._copyToNewCanvas(gl, gi);
        for (var gh = 0; gh < gj.length; gh++) {
          if (!gj[gh].name && gj[gh].style.iconSize) {
            this._addFixedLabelBounds(gj[gh]);
            continue
          }
          if (!gj[gh].textSize) {
            continue
          }
          this._updateFixedLabelCoords(gj[gh], gi);
          this._addFixedLabelBounds(gj[gh])
        }
        gp(gk)
      },
      _drawEachTypeOfLabels: function(gp, gj, gn, gg, gf, gh, gl) {
        for (var gi = 0; gi < gj.length; gi++) {
          var gk = gj[gi];
          var go = gk.name;
          var e = gk.styleText;
          if (!go || e.length === 0) {
            continue
          }
          var gm = this._drawEachText(gp, gk, gn, gg, gf, gh, gl);
          if (!gm) {
            continue
          }
          gg = gm.curX;
          gf = gm.curY;
          gh = gm.curLineHeight;
          gn = gm.styleId;
          if (gm.curY > this._drawingCanvasHeight) {
            return {
              curX: gg,
              curY: gf,
              curLineHeight: gh,
              curStyleId: gn
            }
          }
        }
        return {
          curX: gg,
          curY: gf,
          curLineHeight: gh,
          curStyleId: gn
        }
      },
      _drawIndoorTextLabelOnCanvas: function(gh) {
        var e = this._getEmptyDrawingCanvas();
        var go = e.getContext("2d");
        go.clearRect(0, 0, e.width, e.height);
        var gw = 0;
        var gn = null;
        var gm = 0;
        var gk;
        var gt = {};
        var gs = [];
        for (var gi in gh) {
          if (gi === "tileInfo") {
            continue
          }
          var gg = gh[gi];
          var gr = gg.defaultFloor;
          var gl = gg.floors;
          for (var gq = 0; gq < gl.length; gq++) {
            if (gq === gr) {
              continue
            }
            var gu = gl[gq];
            if (!gu.pois) {
              continue
            }
            var gj = gu.pois;
            for (var gp = 0; gp < gj.length; gp++) {
              if (gn === null && gj[gp].styleText[0]) {
                gn = gj[gp].styleText[0].fontSize + gj[gp].styleText[0].haloSize * 2;
                gk = gn
              }
              gs.push(gj[gp])
            }
          }
        }
        if (gn === null) {
          return null
        }
        gs.sort(function(gx, i) {
          return i.rank - gx.rank || gx.styleId - i.styleId
        });
        var gv = this._drawEachTypeOfLabels(go, gs, gw, gm, gk, gn, gt);
        gw = gv.curStyleId;
        gm = gv.curX;
        gk = gv.curY;
        gn = gv.curLineHeight;
        var gf = this._copyToNewCanvas(e, gk);
        return gf
      },
      _updateIndoorLabelsCoords: function(gn, go) {
        for (var gm in gn) {
          if (gm === "tileInfo") {
            continue
          }
          var e = gn[gm];
          var gi = e.defaultFloor;
          var gj = e.floors;
          for (var gk = 0; gk < gj.length; gk++) {
            if (gk === gi) {
              continue
            }
            var gf = gj[gk];
            if (!gf.pois) {
              continue
            }
            var gh = gf.pois;
            for (var gg = 0; gg < gh.length; gg++) {
              var gl = gh[gg];
              if (gl.name && (!gl.textSize || gl.textSize.length === 0)) {
                gh.splice(gg, 1);
                gg--;
                continue
              }
              this._updateFixedLabelCoords(gl, go);
              this._addFixedLabelBounds(gl)
            }
          }
        }
      },
      _generateEachLabelCanvas: function(gj, gi, gk, e, gm, gf) {
        gi = Math.min(gi, this._drawingCanvasHeight);
        var gl = this._copyToNewCanvas(gj, gi);
        var gg = null;
        if (gf.renderData.indoorData) {
          gg = this._drawIndoorTextLabelOnCanvas(gf.renderData.indoorData);
          if (gg) {
            this._updateIndoorLabelsCoords(gf.renderData.indoorData, gg.height)
          }
        }
        for (var gh = 0; gh < gk.length; gh++) {
          if (!gk[gh].textSize) {
            continue
          }
          this._updateFixedLabelCoords(gk[gh], gi);
          this._addFixedLabelBounds(gk[gh])
        }
        for (var gh = 0; gh < gm.length; gh++) {
          if (!gm[gh].textSize) {
            continue
          }
          this._updateFixedLabelCoords(gm[gh], gi);
          this._addFixedLabelBounds(gm[gh])
        }
        for (var gh = 0; gh < e.length; gh++) {
          this._updateLineLabelCoords(e[gh], gi)
        }
        return [gl, gg]
      },
      _copyToNewCanvas: function(gf, i) {
        if (i === 0) {
          return null
        }
        var gg = L("canvas");
        gg.width = gf.width;
        gg.height = i;
        var e = gg.getContext("2d");
        e.drawImage(gf, 0, 0, 512, i, 0, 0, 512, i);
        gg._id = gf._id;
        gf._free = true;
        return gg
      },
      _drawEachText: function(gv, gj, i, gx, gw, gE, gg) {
        var gD = gj.name;
        var gn = gj.styleText ? gj.styleText[0] : gj.style;
        if (!gn) {
          return null
        }
        var gq = gn.fontSize;
        var gT = gn.haloSize || 0;
        if (!gr) {}
        var gN = gn.fontRgba ? "rgba(" + gn.fontRgba.join(",") + ")" : gn.color;
        var gi = gn.haloRgba ? "rgba(" + gn.haloRgba.join(",") + ")" : gn.strokeColor;
        var gV = gj.styleId || 0;
        if (gT > 2) {
          gT = 2
        }
        var gF = [];
        var gu = [];
        var gB = 0;
        if (gg && !gg[gV]) {
          gg[gV] = {}
        }
        var gp = gq + gT * 2;
        var gG = gp;
        if (gj.containDescendings) {
          gG += 4
        }
        if (gT === 0) {
          gG += 2
        }
        if (gj.textOnIcon) {
          gG = Math.max(gG, gj.iconSize[1])
        }
        if (gV !== i || gG > gE) {
          i = gV;
          gv.font = gq + "px sans-serif";
          if (gG > gE) {
            var gC = gG - gE;
            gE += gC;
            gw += gC
          }
          if (gT > 0) {
            gv.lineWidth = gT * 2;
            gv.strokeStyle = gi
          }
          gv.fillStyle = gN
        }
        if (gj.type === "line") {
          var gl = gD.split("");
          for (var gW = 0; gW < gl.length; gW++) {
            var gP = gl[gW];
            var gy;
            var gH;
            if (gg[gV][gP]) {
              var gr = gg[gV][gP];
              gy = gr.displaySize;
              gH = gr.curWordPosition
            } else {
              var gf = Math.ceil(gv.measureText(gP).width);
              if (gx + gf > 512) {
                gx = 0;
                gw += gG;
                gE = gG
              }
              if (gw > this._drawingCanvasHeight) {
                return {
                  curX: gx,
                  curY: gw,
                  curLineHeight: gE,
                  styleId: gV
                }
              }
              var gQ = gx;
              if (gT > 0) {
                gf += gT;
                gQ -= Math.round(gT / 2);
                gv.strokeText(gP, gx, gw)
              }
              gv.fillText(gP, gx, gw);
              var gM = [gf, gG];
              gy = [Math.round(gM[0] / 2), Math.round(gM[1] / 2)];
              gH = [gQ, gw - gG];
              gg[gV][gP] = {
                displaySize: gy,
                curWordPosition: gH,
                totalHeight: gB
              };
              gx += gf + 2
            }
            gF.push(gy);
            gu.push(gH)
          }
          gB = Math.round(gF[0][1])
        } else {
          if (gg[gV][gD]) {
            var gr = gg[gV][gD];
            gF = gr.textSize;
            gu = gr.labelImagePosition;
            gB = gr.totalHeight
          } else {
            var gs = gD.split("\\");
            if (gs.length > 1 && gj.textOnIcon) {
              var gX = 0;
              var gU = 0;
              var gY = [];
              var gz = 8;
              for (var gW = 0; gW < gs.length; gW++) {
                var gD = gs[gW];
                var go = Math.ceil(gv.measureText(gD).width);
                if (go > gX) {
                  gX = go
                }
                gY.push(Math.round(go / 2));
                gU += gG
              }
              var gm = gX + 2 * gz;
              var gS = gU + 2 * gz;
              if (gx + gm > 512) {
                gx = 0;
                gw += gE
              }
              gw += gU - gG + 2 * gz;
              var gL = gx;
              var gA = gw - gS;
              var e = Math.round(gm / 2);
              var gt = this._iconCache[gj.icon].image;
              this.drawStretchedIcon(gv, gt, [gL, gA], gz, gX, gU);
              for (var gW = 0; gW < gs.length; gW++) {
                var gD = gs[gW];
                var gR = gL + (e - gY[gW]);
                var gO = gA + 4 + (gW + 1) * gG;
                gv.fillText(gD, gR, gO)
              }
              gF.push([Math.round(gm / 2), Math.round(gS / 2)]);
              gu.push([gL, gA]);
              gx += gm;
              gE = gS;
              gB = Math.round(gS / 2)
            } else {
              for (var gW = 0; gW < gs.length; gW++) {
                var gD = gs[gW];
                var go = Math.ceil(gv.measureText(gD).width);
                var gm = go;
                var gh = 0;
                if (gj.textOnIcon) {
                  gh = 10;
                  gm += gh * 2;
                  if (gj.styleId === 519) {
                    gm = gj.iconSize[0];
                    gh = Math.round((gm - go) / 2)
                  }
                }
                if (gx + gm > 512) {
                  gx = 0;
                  gw += gG;
                  gE = gG
                }
                if (gw > this._drawingCanvasHeight) {
                  return {
                    curX: gx,
                    curY: gw,
                    curLineHeight: gE,
                    styleId: gV
                  }
                }
                var gL = gx;
                var gA = gw - gG;
                var gK = gx;
                var gJ = gw;
                if (gj.containDescendings) {
                  gJ -= 4
                }
                if (gj.textOnIcon) {
                  var gt = this._iconCache[gj.icon].image;
                  var gI = gj.iconSize;
                  if (gj.styleId === 519) {
                    gv.drawImage(gt, 0, 0, gI[0], gI[1], gL, gA, gI[0], gI[1])
                  } else {
                    this.draw3StretchedIcon(gv, gt, [gL, gA], gh, go, gI[1])
                  }
                  gK += gh;
                  if (gj.iconSize[1] > gp) {
                    gJ -= (gj.iconSize[1] - gp) / 2 - 1
                  }
                  gm += 1
                }
                if (gT > 0) {
                  gm += gT;
                  gL -= Math.round(gT / 2);
                  gv.strokeText(gD, gK, gJ)
                }
                gv.fillText(gD, gK, gJ);
                var gk = [gm, gG];
                var gy = [Math.round(gk[0] / 2), Math.round(gk[1] / 2)];
                gF.push(gy);
                gu.push([gL, gA]);
                gB += Math.round(gy[1]);
                gx += gm
              }
            }
            gg[gV][gD] = {
              textSize: gF,
              labelImagePosition: gu,
              totalHeight: gB
            }
          }
        }
        gj.textSize = gF;
        gj.labelImagePosition = gu;
        gj.totalHeight = gB;
        return {
          curX: gx,
          curY: gw,
          curLineHeight: gE,
          styleId: gV
        }
      },
      drawStretchedIcon: function(e, gf, gg, gj, gk, i) {
        var gi = gg[0];
        var gh = gg[1];
        e.drawImage(gf, 0, 0, gj, gj, gi, gh, gj, gj);
        e.drawImage(gf, gj, 0, 1, gj, gi + gj, gh, gk, gj);
        e.drawImage(gf, gf.width - gj, 0, gj, gj, gi + gk + gj, gh, gj, gj);
        e.drawImage(gf, 0, gj, gj, 1, gi, gh + gj, gj, i);
        e.drawImage(gf, gj, gj, 1, 1, gi + gj, gh + gj, gk, i);
        e.drawImage(gf, gf.width - gj, gj, gj, 1, gi + gk + gj, gh + gj, gj, i);
        e.drawImage(gf, 0, gf.height - gj, gj, gj, gi, gh + i + gj, gj, gj);
        e.drawImage(gf, gj, gf.height - gj, 1, gj, gi + gj, gh + i + gj, gk, gj);
        e.drawImage(gf, gf.width - gj, gf.height - gj, gj, gj, gi + gk + gj, gh + i + gj, gj, gj)
      },
      draw3StretchedIcon: function(e, i, gf, gi, gk, gj) {
        var gh = gf[0];
        var gg = gf[1];
        e.drawImage(i, 0, 0, gi, i.height, gh, gg, gi, i.height);
        e.drawImage(i, gi, 0, 1, i.height, gh + gi, gg, gk, i.height);
        e.drawImage(i, i.width - gi, 0, gi, i.height, gh + gi + gk, gg, gi, i.height)
      },
      _updateFixedLabelCoords: function(gh, gw) {
        if (gw === 0) {
          return
        }
        var gr = [];
        var gD = [];
        var gE = 0;
        var gu = gh.totalHeight;
        var gM = gh.textSize.length;
        var gi = gh.direction;
        if (typeof gi !== "number") {
          gi = 0
        }
        for (var gF = 0; gF < gM; gF++) {
          var gx = gh.labelImagePosition[gF];
          var gv = gh.textSize[gF];
          var gt = gx[0];
          var gg = gx[1];
          var gj = gv[0];
          var go = gv[1];
          var gq = 0;
          var gC = 0;
          if (typeof gh.textMargin === "number") {
            gC = gh.textMargin
          }
          var gp;
          var e;
          var gl = 0;
          var gs = 0;
          if (!gh.iconPos) {
            if (!gh.custom) {
              gi = c2
            }
          } else {
            gl = gh.iconPos.width;
            gs = gh.iconPos.height
          }
          switch (gi) {
            case fS:
              var gf = gu / 2 - go + gq * (gM - 1) / 2;
              gp = Math.round(-gl / 2 - gj - gC);
              e = Math.round(gf - gE - gq * gF);
              break;
            case f8:
              var gf = gu / 2 - go + gq * (gM - 1) / 2;
              gp = Math.round(gl / 2 + gC);
              e = Math.round(gf - gE - gq * gF);
              break;
            case d9:
              var gf = gs / 2 + gu - go + gq * gM;
              gp = Math.round(-gj / 2);
              e = Math.round(gf - gE - gq * gF);
              break;
            case c4:
              var gf = -gs / 2 - gq - go;
              gp = Math.round(-gj / 2);
              e = Math.round(gf - gE - gq * gF);
              break;
            case c2:
              var gf = -gu / 2 - gq * (gM - 1) / 2;
              gp = Math.round(-gj / 2);
              e = Math.round(gf - gE - gq * gF);
              break
          }
          gE += go;
          var gn = gp + gj;
          var gN = e;
          var gm = gn;
          var gL = gN + go;
          var gk = gp;
          var gK = gL;
          gr.push(gp, e, gn, gN, gm, gL, gp, e, gm, gL, gk, gK);
          var gJ = gt / 512;
          var gB = (gw - gg - go * 2) / gw;
          var gI = (gt + gj * 2) / 512;
          var gA = gB;
          var gH = gI;
          var gz = (gw - gg) / gw;
          var gG = gJ;
          var gy = gz;
          gD.push(gJ, gB, gI, gA, gH, gz, gJ, gB, gH, gz, gG, gy)
        }
        if (!gh.textPos) {
          gh.textPos = {}
        }
        gh.textPos.vertex = gr;
        gh.textPos.texcoord = gD
      },
      _addFixedLabelBounds: function(gm) {
        var gi = 1000;
        var gg = 1000;
        var gf = -1000;
        var e = -1000;
        if (gm.iconPos) {
          var gk = gm.iconPos["vertex"];
          for (var gl = 0, gh = gk.length; gl < gh; gl += 2) {
            var gq = gk[gl];
            var go = gk[gl + 1];
            if (gq < gi) {
              gi = gq
            }
            if (gq > gf) {
              gf = gq
            }
            if (go < gg) {
              gg = go
            }
            if (go > e) {
              e = go
            }
          }
        }
        if (gm.custom && gm.style.iconSize && !gm.name) {
          var gn = gm.style.iconSize;
          var gp = gm.direction;
          switch (gp) {
            case c2:
              gi = -Math.round(gn[0] / 2);
              gg = -Math.round(gn[1] / 2);
              gf = Math.round(gn[0] / 2);
              e = Math.round(gn[1] / 2);
              break;
            case d9:
              gi = -Math.round(gn[0] / 2);
              gg = 0;
              gf = Math.round(gn[0] / 2);
              e = gn[1];
              break
          }
        }
        if (gm.textPos) {
          var gj = gm.textPos["vertex"];
          for (var gl = 0, gh = gj.length; gl < gh; gl += 2) {
            var gq = gj[gl];
            var go = gj[gl + 1];
            if (gq < gi) {
              gi = gq
            }
            if (gq > gf) {
              gf = gq
            }
            if (go < gg) {
              gg = go
            }
            if (go > e) {
              e = go
            }
          }
        }
        gm.bds = [gi, gg, gf, e]
      },
      _updateLineLabelCoords: function(gx, gn) {
        if (gn === 0) {
          return
        }
        var gg = gx.wordsInfo;
        var gu = gx.wordCount;
        if (!gx.labelImagePosition) {
          return
        }
        var gp = gx.labelImagePosition.slice(0);
        if (gx.reverse) {
          gp.reverse()
        }
        var gG = 1000;
        var gD = 1000;
        var gE = -1000;
        var gC = -1000;
        for (var gy = 0; gy < gu; gy++) {
          var gH = gp[gy];
          var gF = gH[0];
          var gv = gH[1];
          var gt = gx.textSize[gy];
          var gm = gt[0];
          var e = gt[1];
          var gl = gF / 512;
          var gs = (gn - gv - e * 2) / gn;
          var gj = (gF + gm * 2) / 512;
          var gr = gs;
          var gh = gj;
          var gq = (gn - gv) / gn;
          var gf = gl;
          var go = gq;
          gg[gy].size = [gm, e];
          gg[gy].texcoord = [gl, gs, gj, gr, gh, gq, gl, gs, gh, gq, gf, go];
          var gB = gg[gy].offset[0];
          var gA = gg[gy].offset[1];
          var gz = gB - gm / 2;
          var gk = gA + e / 2;
          var gi = gA - e / 2;
          var gw = gB + gm / 2;
          if (gz < gG) {
            gG = gz
          }
          if (gw > gE) {
            gE = gw
          }
          if (gi < gD) {
            gD = gi
          }
          if (gk > gC) {
            gC = gk
          }
        }
        gx.bds = [gG, gD, gE, gC]
      }
    });
    var b8 = {
      0: "00000000",
      16: "00010000",
      32: "00100000",
      48: "00110000",
      64: "01000000",
      96: "01100000"
    };
    function bM(gf, gg, gh) {
      var e = gf.bds;
      if (!e) {
        return false
      }
      var i = gf.tracer;
      var gk;
      if (i) {
        if (!b8[i]) {
          gk = i.toString(2);
          if (gk.length < 8) {
            gk = new Array(8 - gk.length + 1).join("0") + gk
          }
          b8[i] = gk
        }
        gk = b8[i];
        var gj = cu.mapZoomStartZoomMapping[gg];
        return gk[gg - gj] === "1"
      }
      var gi = gf.displayRange;
      if (gh >= gi[0] && gh <= gi[1]) {
        return true
      }
      return false
    }
    function cv(i, e) {
      this.map = i.map;
      this.layer = i;
      e = e || [];
      this.allLabels = [];
      this._spotData = [];
      this._strategyInfo = null;
      this.RANK1 = 1000000;
      this.RANK2 = 2000000;
      this.RANK3 = 3000000;
      this.RANK4 = 4000000;
      this.RANK5 = 5000000;
      this._useRound = false;
      this._mapIsMoving = false;
      this._onMapIdleCallback = e.onMapIdleCallback;
      this.map.temp.isPermitSpotOver = true;
      this.currentSelectedLabel = null;
      this.map._labelProcessor = this;
      this.iconCache = {};
      this.fixedLabelData = [];
      this.lineLabelData = [];
      this.highlightLabelData = [];
      this._iconLoadTimer = null;
      this._labelTextCanvas = null;
      if (this.map.config.textRenderType === "canvas") {
        this._labelTextCanvas = this.map.tileMgr.getLabelTextCanvas()
      }
      this.bind()
    }
    z.extend(cv.prototype, {
      bind: function() {
        var gf = this.map;
        var i = this;
        gf.addEventListener("mapstatusbusy_inner", function(gg) {
          i._useRound = false;
          i._mapIsMoving = true
        });
        gf.addEventListener("mapstatusidle_inner", function(gg) {
          if (!eO()) {
            i._useRound = true
          }
          i._mapIsMoving = false
        });
        gf.addEventListener("onspotmouseover", function(gi) {
          if (!this.temp.isPermitSpotOver) {
            return
          }
          if (gi.spots.length > 0) {
            var gh = gi.spots[0].userdata.uid;
            var gj = gi.spots[0].userdata.tilePosStr;
            var gg = i.getLabelByUid(gh, gj);
            gg && gg.formatedData && i._toHighlightColor(gg.formatedData)
          }
        });
        gf.addEventListener("onspotmouseout", function(gi) {
          if (!this.temp.isPermitSpotOver) {
            return
          }
          if (gi.spots.length > 0) {
            var gh = gi.spots[0].userdata.uid;
            var gj = gi.spots[0].userdata.tilePosStr;
            var gg = i.getLabelByUid(gh, gj);
            gg && gg.formatedData && i._toDefaultColor(gg.formatedData)
          }
        });
        gf.addEventListener("spotclick", function(gi) {
          if (gi.spots && gi.spots.length > 0) {
            if (gi.spots[0].userdata.zoom < 10) {
              return
            }
            var gh = gi.spots[0].userdata.uid;
            var gj = gi.spots[0].userdata.tilePosStr;
            if (i.currentSelectedLabel && (i.currentSelectedLabel.uid !== gh || i.currentSelectedLabel.tilePosStr !== gj)) {
              i._recoverNormalState()
            }
            var gg = i.getLabelByUid(gh, gj);
            gg && i._changeBaseMapState(gg)
          } else {
            i._recoverNormalState()
          }
        });
        gf.on("spot_status_reset", function() {
          i._recoverNormalState()
        });
        gf.on("spot_highlight", function(gh) {
          var gg = i.getLabelByUid(gh.uid, gh.tilePosStr);
          gg && gg.formatedData && i._toHighlightColor(gg.formatedData)
        });
        gf.addEventListener("mousemove", function(gg) {
          if (i.curSpotAdded) {
            return
          }
          if (this.currentOperation !== cZ.idle || i._mapIsMoving === true) {
            return
          }
          i._refreshSpotData();
          this.temp.isPermitSpotOver = true;
          i.curSpotAdded = true
        });
        if (eO()) {
          function e() {
            i._refreshSpotData()
          }
          gf.addEventListener("mapstatusidle_inner", e)
        }
        gf.on("style_loaded", function() {
          if (i.map.config.textRenderType === "canvas" && !i._labelTextCanvas) {
            i._labelTextCanvas = i.map.tileMgr.getLabelTextCanvas()
          }
        })
      },
      getLabelByUid: function(gj, gk) {
        var e = this.map._featureMgr.getResult().tileLabels;
        for (var gi = 0; gi < e.length; gi++) {
          var gf = e[gi].fixedLabel;
          for (var gh = 0; gh < gf.length; gh++) {
            if (e[gi].fixedLabel[gh].guid === gj && e[gi].fixedLabel[gh].tilePosStr === gk) {
              return e[gi].fixedLabel[gh]
            }
          }
          var gg = e[gi].indoorLabel;
          for (var gh = 0; gh < gg.length; gh++) {
            if (e[gi].indoorLabel[gh].guid === gj && e[gi].indoorLabel[gh].tilePosStr === gk) {
              return e[gi].indoorLabel[gh]
            }
          }
        }
        return null
      },
      getTileByLabelUid: function(gj) {
        var e = this.map._featureMgr.getResult().tileLabels;
        for (var gi = 0; gi < e.length; gi++) {
          var gf = e[gi].fixedLabel;
          for (var gh = 0; gh < gf.length; gh++) {
            if (e[gi].fixedLabel[gh].guid === gj) {
              return e[gi]
            }
          }
          var gg = e[gi].indoorLabel;
          for (var gh = 0; gh < gg.length; gh++) {
            if (e[gi].indoorLabel[gh].guid === gj) {
              return e[gi]
            }
          }
        }
        return null
      },
      _toHighlightColor: function(gf) {
        if (gf.tempRank && gf.tempRank === this.RANK5) {
          return
        }
        var e = this.map._featureMgr.getResult().eleData[4] || [];
        var gh = false;
        for (var gg = 0; gg < e.length; gg++) {
          if (e[gg] === gf || (e[gg].guid === gf.guid && e[gg].tilePosStr === gf.tilePosStr && e[gg].zoom === gf.zoom)) {
            gh = true;
            break
          }
        }
        if (gh) {
          return
        }
        e.push(gf);
        this.map._featureMgr.setOverlayData(e, 4);
        this.map.dispatchEvent(new aL("onrefresh"))
      },
      _toDefaultColor: function(gf) {
        if (gf.tempRank && gf.tempRank === this.RANK5) {
          return
        }
        var e = this.map._featureMgr.getResult().eleData[4] || [];
        for (var gg = 0; gg < e.length; gg++) {
          if (gf === e[gg] || (gf.guid === e[gg].guid && gf.tilePosStr === e[gg].tilePosStr && gf.zoom === e[gg].zoom)) {
            e.splice(gg, 1);
            break
          }
        }
        this.map._featureMgr.setOverlayData(e, 4);
        this.map.dispatchEvent(new aL("onrefresh"))
      },
      _changeBaseMapState: function(i) {
        var gh = i.guid;
        var gl = i.formatedData.guidExt;
        var gn = {
          guid: gh,
          tilePosStr: i.tilePosStr,
          guidExt: gl
        };
        this._strategyInfo = gn;
        this.currentSelectedLabel = i;
        var gg = this.map._featureMgr;
        var e = gg.getLabelData();
        e = this.collisionTest(e);
        this.updateLabels(e);
        var go = this.fixDataFormat(e);
        gg.setOverlayData(go[0], 2);
        gg.setOverlayData(go[1], 3);
        gg.setOverlayData(go[2], 4);
        var gf = this.getTileByLabelUid(gh);
        this.currentSelectedLabel.tileInfo = gf.tileInfo;
        var gm = gf.tileInfo.zoom;
        var gk = this.layer.tileCache.getAllData();
        for (var gj in gk) {
          var gi = gk[gj].data;
          if (!gi.label) {
            continue
          }
          this.clearCollisionCache(gi.label)
        }
        this.map.dispatchEvent(new aL("onrefresh"))
      },
      _recoverNormalState: function() {
        this._strategyInfo = null;
        var gk = false;
        var gi = this.map._featureMgr.getLabelData();
        if (this.currentSelectedLabel) {
          var gf = this.currentSelectedLabel.guid;
          this.clearCollisionCache(this.getTileByLabelUid(gf));
          var gh = this.layer.tileCache.getAllData();
          for (var gg in gh) {
            var gj = gh[gg].data;
            if (!gj.label) {
              continue
            }
            this.clearCollisionCache(gj.label)
          }
          this.currentSelectedLabel.tempRank = null;
          this.currentSelectedLabel = null;
          gk = true
        }
        gi = this.collisionTest(gi);
        this.updateLabels(gi);
        var e = this.fixDataFormat(gi);
        var i = this.map._featureMgr;
        i.setOverlayData(e[0], 2);
        i.setOverlayData(e[1], 3);
        i.setOverlayData([], 4);
        this.map.dispatchEvent(new aL("onrefresh"));
        if (gk) {
          this.curSpotAdded = false;
          this._refreshSpotData()
        }
      },
      loadIconImages: function(gh, gs) {
        var gk = gh.label;
        var gi = gh.tileInfo.style;
        var gf = gk.fixedLabel;
        var gp = gk.indoorLabel;
        var gt = gf.length + gp.length;
        var gm = this;
        var gg = 0;
        var gr = 200;
        for (var gj = 0; gj < gt; gj++) {
          var gl;
          if (gj < gf.length) {
            gl = gf[gj]
          } else {
            gl = gp[gj - gf.length]
          }
          if (!gl.iconPos) {
            continue
          }
          var go = gl.iconPos.iconType;
          var gq = gi + "_" + go;
          gg++;
          if (this.iconCache[gq]) {
            if (this.iconCache[gq].loaded) {
              gs(gh)
            }
            continue
          }
          var gn = new Image();
          gn.id = gq;
          gn.crossOrigin = "anonymous";
          gn.onload = function() {
            gm.iconCache[this.id].loaded = true;
            gm._addToIconTexture(this);
            if (gm._iconLoadTimer === null) {
              gm._iconLoadTimer = setTimeout(function() {
                gs();
                gm._iconLoadTimer = null
              }, gr)
            }
            this.onload = null
          }
          ;
          gn.onerror = function() {
            if (!gm._iconLoadTimer) {
              gm._iconLoadTimer = setTimeout(function() {
                gs();
                gm._iconLoadTimer = null
              }, gr)
            }
            gm.iconCache[this.id] = null;
            this.onerror = null
          }
          ;
          var e = dW.getIconSetPath(this.map.config.style) + go + ".png";
          gn.src = e;
          this.iconCache[gq] = {
            loaded: false,
            image: gn
          }
        }
        return gg
      },
      _addToIconTexture: function(gi) {
        if (!this.map._webglMapScene) {
          return
        }
        var gk = this.map._webglMapScene._painter;
        var e = gk._iconTextureAtlas.addTexture(gi);
        gk._iconTextureAtlasOffset[gi.id] = e;
        var gn = 0 * gi.width / 1024 + e.width;
        var gh = 0 * gi.height / 1024 + e.height;
        var gm = gi.width / 1024 + e.width;
        var gg = gh;
        var gl = gm;
        var gf = gi.height / 1024 + e.height;
        var gj = gn;
        var i = gf;
        gk._iconTextureAtlasCoords[gi.id] = [gn, gh, gm, gg, gl, gf, gn, gh, gl, gf, gj, i]
      },
      loadImgByStr: function(gg, gh, gi) {
        if (!gg && !gh) {
          gi && gi(null, null);
          return
        }
        if (typeof gg === "object" && typeof gh === "object") {
          gi(gg, gh);
          return
        }
        var i = 0;
        var gf = null;
        var e = null;
        if (gg) {
          i++;
          gf = new Image();
          gf.onload = function() {
            i--;
            if (i === 0) {
              gi && gi(this, e)
            }
            this.onload = null
          }
          ;
          gf.src = gg
        }
        if (gh) {
          i++;
          e = new Image();
          e.onload = function() {
            i--;
            if (i === 0) {
              gi && gi(gf, this)
            }
            this.onload = null
          }
          ;
          e.src = gh
        }
      },
      collisionTest: function(gn, g0, gF) {
        if (this.map.viewAnimationTime) {
          return []
        }
        if (!gn) {
          return []
        }
        var gx = this.map;
        var gM = gx.getHeading();
        gM = this.calcLoopHeading(gM);
        var gV = gx.height;
        var gR = this.allLabels;
        gR.length = 0;
        gn.sort(function(g2, i) {
          var g4 = g2.tileInfo;
          var g3 = i.tileInfo;
          if (g4.col * g4.row < g3.col * g3.row) {
            return -1
          } else {
            return 1
          }
        });
        var go = gn.labelZoom;
        var gy = gx.getTilt();
        var gq = gx.getZoom();
        var gQ;
        if (gF) {
          gQ = gF
        } else {
          gQ = this.getZoomStep()
        }
        for (var gY = 0, gW = gn.length; gY < gW; gY++) {
          var gB = gn[gY];
          var gl = gB.tileInfo;
          var gi = gl.zoom;
          var gP = gl.loopOffsetX / Math.pow(2, 18 - gi);
          if (!gM && !gy) {
            if (gB.unnecessaryCollisionTest && gB.unnecessaryCollisionTest[gF]) {
              continue
            }
          }
          var gI = gB.fixedLabel || [];
          for (var gX = 0, gD = gI.length; gX < gD; gX++) {
            var gj = gI[gX];
            gj.zoom = gi;
            if (g0 === -1 && gj.isDel) {
              continue
            }
            if (!bM(gj, gl.useZoom, gq)) {
              gj.isDel = true;
              continue
            }
            this.calcCollisionBounds(gj, gQ, gP, gV);
            gR.push(gj)
          }
          var gH = gB.indoorLabel || [];
          for (var gX = 0, gD = gH.length; gX < gD; gX++) {
            var gj = gH[gX];
            gj.zoom = gi;
            if (g0 === -1 && gj.isDel) {
              continue
            }
            if (!bM(gj, gl.useZoom)) {
              gj.isDel = true;
              continue
            }
            this.calcCollisionBounds(gj, gQ, gP, gV);
            gR.push(gj)
          }
          var gk = gB.lineLabel || [];
          for (var gX = 0, gD = gk.length; gX < gD; gX++) {
            var gj = gk[gX];
            if (g0 === -1 && gj.isDel) {
              continue
            }
            if (!bM(gj, gl.useZoom)) {
              gj.isDel = true;
              continue
            }
            var g1 = gj.pt;
            var gE = gx.pointToPixelIn(g1, {
              zoom: gQ,
              useRound: this._useRound
            });
            var gC = gE.x + gP;
            var gA = gV - gE.y;
            var gG = gj.bds;
            var gU = gG[0];
            var gS = gG[1];
            var gv = gG[2];
            var gu = gG[3];
            var gN = gU;
            var gL = gS;
            var gt = gv;
            var gs = gu;
            if ((gM >= 0 && gM < 45) || (gM >= 315 && gM < 360)) {
              gN = gU;
              gL = gS;
              gt = gv;
              gs = gu
            } else {
              if (gM >= 45 && gM < 135) {
                gN = gS;
                gL = -gv;
                gt = gu;
                gs = -gU
              } else {
                if (gM >= 135 && gM < 225) {
                  gN = -gv;
                  gL = -gu;
                  gt = -gU;
                  gs = -gS
                } else {
                  if (gM >= 225 && gM < 315) {
                    gN = -gu;
                    gL = gU;
                    gt = -gS;
                    gs = gv
                  }
                }
              }
            }
            gj._tempBds = [gC + gN, gA + gL, gC + gt, gA + gs];
            var gm = gx.pixelToPointIn(new dh(gj._tempBds[0],gE.y + gL), {
              zoom: gQ
            });
            var gg = gx.pixelToPointIn(new dh(gj._tempBds[2],gE.y + gs), {
              zoom: gQ
            });
            gj._mcBds = [gm, gg];
            gR.push(gj)
          }
        }
        var gO = this._strategyInfo;
        if (gO) {
          var gr = gO.guid;
          var gz = gO.guidExt;
          var gf = false;
          for (var gY = 0, gW = gR.length; gY < gW; gY++) {
            var gT = gR[gY];
            delete gT.tempRank;
            if (!this.layer.isClickableLabel(gT) || (gz === 1 && !gT.guidExt)) {
              continue
            }
            if (gr === gT.guid && gO.tilePosStr === gT.tilePosStr) {
              gT.tempRank = this.RANK5;
              gf = true
            }
          }
          if (!gf && this.currentSelectedLabel) {
            this.currentSelectedLabel.tempRank = this.RANK5;
            var gl = this.currentSelectedLabel.tileInfo;
            var gi = gl.zoom;
            var gP = gl.loopOffsetX / Math.pow(2, 18 - gi);
            this.calcCollisionBounds(this.currentSelectedLabel, gQ, gP, gV);
            gR.push(this.currentSelectedLabel)
          }
        } else {
          for (var gY = 0, gW = gR.length; gY < gW; gY++) {
            var gT = gR[gY];
            if (gT.type === "line" || !gT.iconPos) {
              continue
            }
            delete gT.tempRank
          }
        }
        gR.sort(function(g3, g2) {
          var g4 = g3.tempRank ? g3.tempRank : g3.rank;
          var i = g2.tempRank ? g2.tempRank : g2.rank;
          return i - g4 || g3.startZoom - g2.startZoom || g2.pt.lng - g3.pt.lng || g2.pt.lat - g3.pt.lat
        });
        var gh = 0;
        if (gy > 0) {
          gh = 6
        }
        var gq = gx.getZoom();
        if (gq >= 8 && gq < 9) {
          gq < 8.5 ? (gh = 6) : (gh = 3)
        }
        var e = 2;
        if (gq < 6 && gq >= 5) {
          e = -1
        }
        for (var gY = 0, gW = gR.length; gY < gW; gY++) {
          var gK = gR[gY];
          var gp = gK._tempBds;
          gK.isDel = false;
          gK._intersectIdx = [];
          for (gX = gY + 1; gX < gW; gX++) {
            var gw = gR[gX];
            var gZ = gw._tempBds;
            if (!(gp[2] + gh + e < gZ[0] - gh || gp[0] - gh > gZ[2] + gh + e || gp[3] + gh + e < gZ[1] - gh || gp[1] - gh > gZ[3] + gh + e)) {
              gK._intersectIdx.push(gX)
            }
          }
        }
        for (var gY = 0, gW = gR.length; gY < gW; gY++) {
          var gT = gR[gY];
          if (gT.isDel === false) {
            var gJ = gT._intersectIdx;
            for (var gX = 0, gD = gJ.length; gX < gD; gX++) {
              gR[gJ[gX]].isDel = true
            }
          }
        }
        return gn
      },
      calcCollisionBounds: function(gm, gk, i, gl) {
        var gi = gm.pt;
        var gg = this.map;
        var gh = gg.pointToPixelIn(gi, {
          zoom: gk,
          useRound: this._useRound
        });
        var gf = gh.x + i;
        var go = gl - gh.y;
        var e = gm.bds;
        gm._tempBds = [gf + e[0], go + e[1], gf + e[2], go + e[3]];
        var gj = gg.pixelToPointIn(new dh(gm._tempBds[0],gh.y + e[1]), {
          zoom: gk
        });
        var gn = gg.pixelToPointIn(new dh(gm._tempBds[2],gh.y + e[3]), {
          zoom: gk
        });
        gm._mcBds = [gj, gn]
      },
      getZoomStep: function() {
        var gf = this.map.getZoom();
        var e = Math.floor(gf);
        var i = gf - e >= 0.5 ? e + 0.5 : e;
        return i
      },
      clearCollisionCache: function(e) {
        if (!e) {
          return
        }
        e.cacheState = null;
        e.unnecessaryCollisionTest = null
      },
      getCachedLabels: function(e) {
        e = e || [];
        var gf = this.getZoomStep();
        var gh = [];
        var gj = false;
        for (var gg = 0; gg < e.length; gg++) {
          var gi = e[gg];
          if (!gi.cacheState || !gi.cacheState[gf]) {
            gj = true;
            break
          }
          if (gi.hasNewData) {
            gj = true;
            break
          }
        }
        if (gj) {
          this.calcLabelsCollision(e)
        }
        return e
      },
      calcLabelsCollision: function(gf) {
        var gh = this.getZoomStep();
        var gi = {};
        var gl;
        var gg;
        gf = this.collisionTest(gf, undefined, gh);
        bc.addLabelIntoAreaSpots(gf);
        for (var gk = 0; gk < gf.length; gk++) {
          gl = gf[gk];
          gg = gl.tileInfo;
          var gp = gg.col + "," + gg.row;
          gi[gp] = 1
        }
        var e = {};
        for (var gk = 0; gk < gf.length; gk++) {
          gl = gf[gk];
          if (!gl.cacheState) {
            gl.cacheState = {}
          }
          gg = gl.tileInfo;
          var go = gg.col;
          var gm = gg.row;
          gp = go + "," + gm;
          if (gl.cacheState[gh] === "stable") {
            e[gp] = 1;
            if (!gl.hasNewData) {
              continue
            }
          }
          for (var gj = 0; gj < gl.fixedLabel.length; gj++) {
            var gn = gl.fixedLabel[gj];
            if (!gn.cachedIsDel) {
              gn.cachedIsDel = {}
            }
            gn.cachedIsDel[gh] = gn.isDel
          }
          for (var gj = 0; gj < gl.indoorLabel.length; gj++) {
            var gn = gl.indoorLabel[gj];
            if (!gn.cachedIsDel) {
              gn.cachedIsDel = {}
            }
            gn.cachedIsDel[gh] = gn.isDel
          }
          for (var gj = 0; gj < gl.lineLabel.length; gj++) {
            var gn = gl.lineLabel[gj];
            if (!gn.cachedIsDel) {
              gn.cachedIsDel = {}
            }
            gn.cachedIsDel[gh] = gn.isDel
          }
          if (gi[(go - 1) + "," + (gm - 1)] && gi[(go - 1) + "," + gm] && gi[(go - 1) + "," + (gm + 1)] && gi[go + "," + (gm - 1)] && gi[go + "," + (gm + 1)] && gi[(go + 1) + "," + (gm - 1)] && gi[(go + 1) + "," + gm] && gi[(go + 1) + "," + (gm + 1)]) {
            gl.cacheState[gh] = "stable";
            e[gp] = 1
          } else {
            if (!gl.cacheState[gh]) {
              gl.cacheState[gh] = "unstable"
            }
          }
        }
        for (var gk = 0; gk < gf.length; gk++) {
          var gl = gf[gk];
          gg = gl.tileInfo;
          var gp = gg.col + "," + gg.row;
          var go = +gg.col;
          var gm = +gg.row;
          if (e[(go - 1) + "," + (gm - 1)] && e[(go - 1) + "," + gm] && e[(go - 1) + "," + (gm + 1)] && e[go + "," + (gm - 1)] && e[go + "," + (gm + 1)] && e[(go + 1) + "," + (gm - 1)] && e[(go + 1) + "," + gm] && e[(go + 1) + "," + (gm + 1)]) {
            if (!gl.unnecessaryCollisionTest) {
              gl.unnecessaryCollisionTest = {}
            }
            gl.unnecessaryCollisionTest[gh] = 1
          }
        }
        gf.hasNewData = false
      },
      updateLabels: function(gg) {
        var e = this.map;
        var gm = e.getZoom();
        var go = e.getHeading();
        go = this.calcLoopHeading(go);
        var gn = e.getTilt();
        var gh = this.getZoomStep();
        for (var gl = 0, gi = gg.length; gl < gi; gl++) {
          var gk = gg[gl];
          var gf = gk.tileInfo;
          var gj = gf.loopOffsetX || 0;
          this.updateFixedLabel(gk.fixedLabel, gn, go, gk, gh, gm, gj);
          this.updateFixedLabel(gk.indoorLabel, gn, go, gk, gh, gm, 0);
          this.updateLineLabel(gk.lineLabel, gn, go, gk, gh)
        }
      },
      updateFixedLabel: function(gl, gn, i, gp, gh, e, gg) {
        if (gl.length === 1) {}
        for (var gq = 0, gi = gl.length; gq < gi; gq++) {
          var gm = gl[gq];
          if (!gm.cachedIsDel) {
            continue
          }
          if (!gn && !i && gp.cacheState && gp.cacheState[gh]) {
            gm.isDel = gm.cachedIsDel[gh];
            if (typeof gm.isDel === "undefined") {
              gm.isDel = gm.cachedIsDel[gh] = true
            }
          }
          if (gm.startScale > e) {
            gm.isDel = true
          }
          if (gm.isDel) {
            continue
          }
          var gs = gm.pt;
          var gf = gm.iconPos;
          if (gf && gf.texcoord) {
            if (!gf.rtVertex) {
              gf.rtVertex = [];
              var gu = gf.vertex;
              var gj = an(gs.lng);
              var gr = an(gs.lat);
              gf.rtVertex = [gj[0], gr[0], gj[1], gr[1], 0, gu[0], gu[1], 0, 0, gf.texcoord[0], gf.texcoord[1], gj[0], gr[0], gj[1], gr[1], 0, gu[2], gu[3], 0, 0, gf.texcoord[2], gf.texcoord[3], gj[0], gr[0], gj[1], gr[1], 0, gu[4], gu[5], 0, 0, gf.texcoord[4], gf.texcoord[5], gj[0], gr[0], gj[1], gr[1], 0, gu[6], gu[7], 0, 0, gf.texcoord[6], gf.texcoord[7], gj[0], gr[0], gj[1], gr[1], 0, gu[8], gu[9], 0, 0, gf.texcoord[8], gf.texcoord[9], gj[0], gr[0], gj[1], gr[1], 0, gu[10], gu[11], 0, 0, gf.texcoord[10], gf.texcoord[11]]
            }
          }
          var gt = gm.textPos;
          if (gt) {
            if (!gt.rtVertex) {
              gt.rtVertex = [];
              var gu = gt.vertex;
              var gk = gt.rtVertex;
              var gj = an(gs.lng);
              var gr = an(gs.lat);
              var gw = an(gg);
              for (var go = 0, gv = gu.length; go < gv; go += 12) {
                gk.push(gj[0], gr[0], gj[1], gr[1], 0, gu[go], gu[go + 1], gw[0], gw[1], gt.texcoord[0], gt.texcoord[1]);
                gk.push(gj[0], gr[0], gj[1], gr[1], 0, gu[go + 2], gu[go + 3], gw[0], gw[1], gt.texcoord[2], gt.texcoord[3]);
                gk.push(gj[0], gr[0], gj[1], gr[1], 0, gu[go + 4], gu[go + 5], gw[0], gw[1], gt.texcoord[4], gt.texcoord[5]);
                gk.push(gj[0], gr[0], gj[1], gr[1], 0, gu[go + 6], gu[go + 7], gw[0], gw[1], gt.texcoord[6], gt.texcoord[7]);
                gk.push(gj[0], gr[0], gj[1], gr[1], 0, gu[go + 8], gu[go + 9], gw[0], gw[1], gt.texcoord[8], gt.texcoord[9]);
                gk.push(gj[0], gr[0], gj[1], gr[1], 0, gu[go + 10], gu[go + 11], gw[0], gw[1], gt.texcoord[10], gt.texcoord[11])
              }
            }
          }
        }
      },
      updateLineLabel: function(gl, gP, gF, gA, gB) {
        gl = gl || [];
        var gv = this.map;
        var go = gv.getZoomUnits();
        for (var gO = 0, gM = gl.length; gO < gM; gO++) {
          var gk = gl[gO];
          if (!gk.cachedIsDel) {
            continue
          }
          if (!gP && !gF && gA.cacheState && gA.cacheState[gB]) {
            gk.isDel = gk.cachedIsDel[gB];
            if (typeof gk.isDel === "undefined") {
              gk.isDel = gk.cachedIsDel[gB] = true
            }
          }
          if (gk.isDel) {
            continue
          }
          if (!gk.styleText || gk.styleText.length === 0) {
            continue
          }
          var gm = gk.mcInTile;
          var gI = gm.x;
          var gG = gm.y;
          var gz = gk.wordsInfo;
          var gx = gk.labelAngle;
          var gt = false;
          var gH = 0;
          if (gF !== 0) {
            var gu = gz[0].angle;
            var gL = this.calcLoopHeading(gu - gF);
            var gr = this.calcLoopHeading(gx - gF);
            if (gL > 45 && gL < 315) {
              if (gL > 45 && gL <= 135) {
                gH = 270
              } else {
                if (gL > 135 && gL <= 225) {
                  gH = 180
                } else {
                  if (gL > 225 && gL < 315) {
                    gH = 90
                  }
                }
              }
              if (gx > 225 && gx <= 315 && gH <= 180) {
                gt = true
              } else {
                if ((gx >= 0 && gx <= 45 || gx >= 315 && gx < 360) && gH >= 180) {
                  gt = true
                }
              }
            }
          }
          for (var gN = 0, gp = gz.length; gN < gp; gN++) {
            var gK = gz[gN];
            var gs = gK.calcInfo;
            var gE = gK.offset[0];
            var gC = gK.offset[1];
            if (!gK.size) {
              continue
            }
            var e = gK.size[0];
            var gf = gK.size[1];
            var gq = gK.angle;
            if (!gs) {
              gs = {}
            }
            if (gF !== gs.mapHeading || go !== gs.zoomUnits) {
              gs.mapHeading = gF;
              gs.zoomUnits = go;
              if (gt) {
                var gw = gz[gp - 1 - gN];
                gE = gw.offset[0];
                gC = gw.offset[1];
                gq = gw.angle
              }
              var gh = gI + gE * go;
              var gg = gG + gC * go;
              gs.rotationCenter = {
                lng: gh,
                lat: gg
              };
              gs.calcHeading = gH;
              gs.angle = gq;
              gs.offsetX = gE;
              gs.offsetY = gC;
              gK.calcInfo = gs
            }
            if (!gK.rtVertex) {
              gK.rtVertex = []
            }
            gK.rtVertex.length = 0;
            var gy = gs.calcHeading + gs.angle;
            var gi = gs.rotationCenter;
            gE = gs.offsetX;
            gC = gs.offsetY;
            var gj = Math.round(gE - e / 2);
            var gJ = Math.round(gE + e / 2);
            var gD = Math.round(gC + gf / 2);
            var gn = Math.round(gC - gf / 2);
            gK.rtVertex.push(gI, gG, gK.z, gj, gn, gi.lng, gi.lat, gy, gK.texcoord[0], gK.texcoord[1], gI, gG, gK.z, gJ, gn, gi.lng, gi.lat, gy, gK.texcoord[2], gK.texcoord[3], gI, gG, gK.z, gJ, gD, gi.lng, gi.lat, gy, gK.texcoord[4], gK.texcoord[5], gI, gG, gK.z, gj, gn, gi.lng, gi.lat, gy, gK.texcoord[6], gK.texcoord[7], gI, gG, gK.z, gJ, gD, gi.lng, gi.lat, gy, gK.texcoord[8], gK.texcoord[9], gI, gG, gK.z, gj, gD, gi.lng, gi.lat, gy, gK.texcoord[10], gK.texcoord[11])
          }
        }
      },
      calcLoopHeading: function(e) {
        while (e >= 360) {
          e -= 360
        }
        while (e < 0) {
          e += 360
        }
        return e
      },
      fixDataFormat: function(go) {
        var gg = this.fixedLabelData;
        var e = this.lineLabelData;
        var gf = this.highlightLabelData;
        var gv = 0;
        var gk = 0;
        var gt = 0;
        var gu;
        if (this.currentSelectedLabel) {
          var gj = this.getLabelByUid(this.currentSelectedLabel.guid, this.currentSelectedLabel.tilePosStr);
          if (!gj || gj.isDel) {
            gg[gv] = this.currentSelectedLabel.formatedData;
            gv++;
            gf[gt] = this.currentSelectedLabel.formatedData;
            gt++
          }
        }
        for (var gs = 0; gs < go.length; gs++) {
          var gm = go[gs];
          var gl = gm.fixedLabel;
          var gh = gm.indoorLabel;
          var gr = gm.lineLabel;
          gu = this.fixFixedLabelDataFormat(gl, gm, gg, gv, gf, gt);
          gv = gu[0];
          gt = gu[1];
          gu = this.fixFixedLabelDataFormat(gh, gm, gg, gv, gf, gt, true);
          gv = gu[0];
          gt = gu[1];
          e[gk] = {
            tileInfo: gm.tileInfo,
            lineLabels: []
          };
          for (var gq = 0; gq < gr.length; gq++) {
            if (gr[gq].isDel) {
              continue
            }
            var gn = gr[gq].wordsInfo;
            if (gn) {
              for (var gp = 0; gp < gn.length; gp++) {
                if (!gn[gp].rtVertex) {
                  continue
                }
                var gi = gn[gp].formatedData;
                if (!gi) {
                  gi = {
                    textureSource: gm.textureSources[gr[gq].processedInZoom],
                    textureHeight: gm.textureHeights[gr[gq].processedInZoom],
                    renderData: {
                      vertex: gn[gp].rtVertex,
                      textureCoord: gn[gp].texcoord
                    }
                  };
                  gn[gp].formatedData = gi
                }
                e[gk].lineLabels.push(gi)
              }
            }
          }
          gk++
        }
        gg.length = gv;
        e.length = gk;
        gf.length = gt;
        return [e, gg, gf]
      },
      fixFixedLabelDataFormat: function(gj, gm, gn, gk, gh, e, gl) {
        for (var i = 0; i < gj.length; i++) {
          if (gj[i].isDel) {
            continue
          }
          var gi = gj[i].textPos;
          var gg = gj[i].iconPos;
          var gf = null;
          if (gi && gi.rtVertex) {
            if (!gj[i].formatedData) {
              gf = {
                guid: gj[i].guid,
                guidExt: gj[i].guidExt,
                tilePosStr: gj[i].tilePosStr,
                zoom: gj[i].zoom,
                tempRank: gj[i].tempRank,
                textureSource: gm.textureSources[gj[i].processedInZoom],
                textureHeight: gm.textureHeights[gj[i].processedInZoom],
                renderData: {
                  vertex: gi.rtVertex,
                  textureCoord: gi.texcoord
                }
              };
              if (gl && gj[i].onDefaultFloor === false) {
                gf.textureSource = gm.indoorTextureSources[gj[i].processedInZoom];
                gf.textureHeight = gm.indoorTextureHeights[gj[i].processedInZoom]
              }
              gj[i].formatedData = gf
            } else {
              gf = gj[i].formatedData;
              gf.tempRank = gj[i].tempRank
            }
            if (this.currentSelectedLabel && gf.guid === this.currentSelectedLabel.guid && gf.tilePosStr === this.currentSelectedLabel.tilePosStr) {
              gh[e] = gf;
              e++
            }
          }
          if (gg && gg.rtVertex) {
            if (gf) {
              if (!gf.iconRenderData) {
                gf.iconRenderData = {
                  vertex: gg.rtVertex,
                  textureCoord: gg.texcoord
                }
              }
            } else {
              gf = {
                guid: gj[i].guid,
                guidExt: gj[i].guidExt,
                zoom: gj[i].zoom,
                tempRank: gj[i].tempRank,
                iconRenderData: {
                  vertex: gg.rtVertex,
                  textureCoord: gg.texcoord
                }
              };
              gj[i].formatedData = gf
            }
          }
          gn[gk] = gf;
          gk++
        }
        return [gk, e]
      },
      _refreshSpotData: function() {
        this._spotData.length = 0;
        var gl = this.map;
        var gj = Math.floor(gl.getZoom());
        var gf = this.map._featureMgr.getLabelData();
        if (gf) {
          for (var gh = 0, gg = gf.length; gh < gg; gh++) {
            this._addFixedSpotData(gf[gh].fixedLabel, gj);
            this._addFixedSpotData(gf[gh].indoorLabel, gj)
          }
        }
        var gm = this.currentSelectedLabel;
        if (gm && !this.getTileByLabelUid(gm.guid, gm.tilePosStr)) {
          var gi = this._getSpotDataFromLabel(this.currentSelectedLabel);
          if (gi) {
            this._spotData.push(gi)
          }
        }
        var gk = new aL("onspotsdataready");
        gk.spots = this._spotData;
        gl._spotDataOnCanvas = this._spotData;
        gl.dispatchEvent(gk)
      },
      _addFixedSpotData: function(gh, gg) {
        for (var e = 0; e < gh.length; e++) {
          var gf = gh[e];
          if (!this.layer.isClickableLabel(gf) || (gf.guidExt === 1 && gf.startScale > gg)) {
            continue
          }
          var i = gh[e].spot || this._getSpotDataFromLabel(gh[e]);
          if (i) {
            this._spotData.push(i)
          }
        }
      },
      _getSpotDataFromLabel: function(gf) {
        var gi = this.map;
        if (!gf.bds) {
          return null
        }
        var e = gf.bds.slice(0);
        var gg = null;
        if (gf.iconPos) {
          gg = new fU(gf.pt.lng,gf.pt.lat)
        }
        var i = gf.name ? gf.name.replace("\\\\", "<br>") : "";
        if (gf.iconPos && gf.iconPos.iconType.indexOf("ditie") > -1 && gi.getZoom() > 14) {
          i = ""
        }
        var gh = {
          n: i,
          pt: new fU(gf.pt.lng,gf.pt.lat),
          userdata: {
            iconPoint: gg,
            uid: gf.guid,
            name: i,
            mapPoi: true,
            type: gf.iconPos ? gf.iconPos.iconType : "",
            rank: gf.rank,
            zoom: gf.zoom,
            tilePosStr: gf.tilePosStr
          },
          bd: e,
          tag: "MAP_SPOT_INFO"
        };
        gf.spot = gh;
        return gh
      },
      drawLabelsOnCanvas: function(i, e) {
        if (this._labelTextCanvas) {
          this._labelTextCanvas.drawLabelsOnCanvas(i, e)
        }
      }
    });
    function eF(e) {
      this._map = e;
      this.virtualTile = {
        custom: true,
        label: {
          fixedLabel: [],
          indoorLabel: [],
          lineLabel: [],
          textureHeights: [],
          status: "ready"
        },
        tileInfo: {
          col: 0,
          row: 0,
          zoom: 0,
          useZoom: 0,
          loopOffsetX: 0
        },
        status: "ready"
      };
      this.virtualTile.label.tileInfo = this.virtualTile.tileInfo;
      this.init()
    }
    eF.prototype.init = function() {
      var gf = this._map;
      var i = this;
      function e() {
        i.updateLabels()
      }
      gf.addEventListener("add_tile_labels", e);
      gf.addEventListener("onremove_tile_labels", e);
      gf.addEventListener("onclear_labels", e)
    }
    ;
    eF.prototype.updateLabels = function() {
      var i = this._map.tileMgr.getLabelTextCanvas();
      var gf = this._map;
      var e = this;
      i.drawCustomLabelsOnCanvas(gf._customTileLabels, function(gh) {
        var gg = e.virtualTile;
        if (gh) {
          gg.label.textureHeights[0] = [gh.height]
        }
        gg.label.fixedLabel = gf._customTileLabels;
        var gi = new aL("oncustom_labels_ready");
        gi.virtualTile = gg;
        gi.labelCanvas = gh;
        gi.imgKey = aT.getGUID("custom_labels_");
        gf.dispatchEvent(gi)
      })
    }
    ;
    aT.register(function(e) {
      e._customLabelMgr = new eF(e)
    });
    function dH(i) {
      var gg = null;
      try {
        if (cE.inMapHost) {
          gg = new Worker(i);
          gg.onerror = function(e) {
            e.preventDefault();
            gg = r(i)
          }
        } else {
          gg = r(i)
        }
      } catch (gf) {
        gg = r(i)
      }
      return gg
    }
    function r(gi) {
      var gl = null;
      try {
        var gf;
        try {
          gf = new Blob(['importScripts("' + gi + '");'],{
            type: "application/javascript"
          })
        } catch (gj) {
          var gh = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder)();
          gh.append('importScripts("' + gi + '");');
          gf = gh.getBlob("application/javascript")
        }
        var gg = window.URL || window.webkitURL;
        var i = gg.createObjectURL(gf);
        gl = new Worker(i)
      } catch (gk) {}
      return gl
    }
    function eS(e) {
      this.init(e)
    }
    var aN = {
      init: function(gf) {
        var i = this;
        this.map = gf;
        this.arrPendingData = [];
        var e = navigator.hardwareConcurrency || 4;
        if (eO() && e > 2) {
          e = 2
        }
        this.arrWorker = [];
        this.ratio = aI();
        this.wordSpaceRatio = this.ratio;
        if (this.ratio > 1) {
          this.textSizeRatio = 2
        } else {
          this.textSizeRatio = 1
        }
        cf.canUseWebAssembly(function(gg) {
          var gj;
          if (gg) {
            gj = "https://api.map.baidu.com/res/webgl/10/worker_wasm_33awmq.js"
          } else {
            gj = "https://api.map.baidu.com/res/webgl/10/worker_asm_2pt2iy.js"
          }
          for (var gi = 0; gi < e; gi++) {
            var gl = dH(gj);
            gl.onmessage = function gh(gn) {
              if (gn.data) {
                this._cbk && this._cbk(gn.data, this._parsingTileKey)
              } else {
                this._cbk && this._cbk(null, this._parsingTileKey)
              }
              this._isBusy = false;
              this._cbk = null;
              this._parsingTileInfo = null;
              this._parsingTileKey = null;
              if (i.arrPendingData.length > 0) {
                var gp = i.arrPendingData.shift();
                var gm = gp.cbk;
                i.loadTileData(gp.url, gp.tileInfo, gp.tileKey, gm)
              }
              var go = new aL("onrefresh");
              go.source = "workermgr";
              gf.fire(go)
            }
            ;
            i.arrWorker.push(gl)
          }
          if (i.arrPendingData.length > 0) {
            for (var gi = 0; gi < Math.min(i.arrPendingData.length, e); gi++) {
              var gk = i.arrPendingData.shift();
              i.loadTileData(gk.url, gk.tileInfo, gk.tileKey, gk.cbk)
            }
          }
        });
        gf.on("onstyle_loaded", function() {
          for (var gh = 0, gg = i.arrWorker.length; gh < gg; gh++) {
            i.arrWorker[gh].isSendFS = false
          }
          if (typeof this.config.style !== "string") {
            eS.stringifiedCustomStyleInfo = null;
            eS.stringifiedCustomStyleInfoZoom = []
          }
        });
        gf.on("onstylezoomupdate", function() {
          for (var gh = 0, gg = i.arrWorker.length; gh < gg; gh++) {
            i.arrWorker[gh].isSendFS = false
          }
          if (typeof this.config.style !== "string") {
            eS.stringifiedCustomStyleInfo = null;
            eS.stringifiedCustomStyleInfoZoom = []
          }
        })
      },
      getIdleWorker: function() {
        for (var gf = 0, e = this.arrWorker.length; gf < e; gf++) {
          var gg = this.arrWorker[gf];
          if (!gg._isBusy) {
            gg._isBusy = true;
            return gg
          }
        }
        return null
      },
      releasePendingData: function(gf) {
        var gg = [];
        var gj = this.arrPendingData;
        for (var gi = gj.length - 1; gi >= 0; gi--) {
          var gk = gj[gi];
          var e = gk.tileInfo;
          if (gf.tileTypeName !== e.tileTypeName) {
            continue
          }
          var gh = "id_" + e.col + "_" + e.row + "_" + e.zoom;
          if (!gf[gh]) {
            gj.splice(gi, 1);
            gg.push(e)
          }
        }
        return gg
      },
      loadTileData: function(e, gf, gm, gl) {
        var gg = this.getIdleWorker();
        if (gg) {
          gg._cbk = gl;
          gg._parsingTileInfo = gf;
          gg._parsingTileKey = gm;
          var i = {
            action: "loadTileData",
            url: e,
            tileInfo: gf,
            tileKey: gm
          };
          var gk = this.map.getMapStyleId();
          var gj = !!(gk.indexOf("custom") === 0);
          var gi = gk;
          if (gj) {
            gi = "Custom"
          }
          if (!gg.isSendFS) {
            if (!eS["stringifiedFeatureStyle" + gk] && aT["FeatureStyle" + gk]) {
              eS["stringifiedFeatureStyle" + gk] = JSON.stringify(aT["FeatureStyle" + gk])
            }
            if (!eS["stringifiedIconSetInfo" + gi]) {
              eS["stringifiedIconSetInfo" + gi] = JSON.stringify(aT["iconSetInfo" + gi])
            }
            if (!eS.stringifiedIndoorStyle) {
              eS.stringifiedIndoorStyle = JSON.stringify(aT.indoorStyle)
            }
            if (gj && aT.customStyleInfo) {
              if (!eS.stringifiedCustomStyleInfo) {
                eS.stringifiedCustomStyleInfo = JSON.stringify(aT.customStyleInfo)
              }
            }
            if (eS["stringifiedFeatureStyle" + gk]) {
              i.featureStyle = eS["stringifiedFeatureStyle" + gk]
            }
            i.iconSetInfo = eS["stringifiedIconSetInfo" + gi];
            i.indoorStyle = eS.stringifiedIndoorStyle;
            if (gj && eS.stringifiedCustomStyleInfo) {
              i.customMapStyle = eS.stringifiedCustomStyleInfo
            }
            i.iconInfo = {
              wordSpaceRatio: this.wordSpaceRatio,
              textSizeRatio: this.textSizeRatio
            };
            i.mapStyleId = gk;
            gg.isSendFS = true
          }
          gg.postMessage(i)
        } else {
          var gh = {
            url: e,
            tileInfo: gf,
            tileKey: gm,
            cbk: gl
          };
          this.arrPendingData.push(gh)
        }
      }
    };
    z.extend(eS.prototype, aN);
    function cY(i) {
      this.tileLayers = [];
      this.map = i;
      var e = this.config = bv[this.map.mapType];
      this.errorUrl = e.errorUrl;
      this.tileSize = e.tileSize;
      this.baseUnits = e.baseUnits;
      this.baseZoomLevel = e.zoomLevelBase;
      this.tileURLs = e.tileUrls;
      this.tilesInfoCache = {};
      this.loadDelay = 10;
      this._labelTextCanvas = null
    }
    aT.register(function(i) {
      if (i._renderType !== "webgl") {
        return
      }
      var e = i.tileMgr = new cY(i);
      i.addEventListener("addtilelayer", function(gg) {
        e.addWebGLLayer(gg.target)
      });
      i.addEventListener("removetilelayer", function(gg) {
        e.removeWebGLLayer(gg.target)
      });
      i.on("update", function gf(gg) {
        if (!aT["FeatureStyle" + this.config.style] && !aT.customStyleLoaded) {
          return
        }
        e.loadLayersData({
          zoomChanged: gg.changedStatus.onzoom_changed ? true : false
        })
      });
      i.on("style_changed", function() {
        e.loadLayersData()
      })
    });
    z.extend(cY.prototype, {
      addWebGLLayer: function(gg) {
        this.tileLayers.push(gg);
        gg.initDrawData();
        if (this.tileLayers.length > 1) {
          for (var gf = 1; gf < this.tileLayers.length; gf++) {
            if (this.tileLayers[gf].isFlat) {
              this.map.setDisplayOptions({
                isFlat: true
              });
              break
            }
          }
        }
        var e = this.map.config.style;
        if (aT["FeatureStyle" + e]) {
          this.loadLayersData()
        } else {
          var gh = this;
          this.map.loadMapStyleFiles(function() {
            gh.loadLayersData()
          })
        }
      },
      removeWebGLLayer: function(gi) {
        var gj = false;
        for (var gh = 0, gg = this.tileLayers.length; gh < gg; gh++) {
          if (gi === this.tileLayers[gh]) {
            gj = true;
            this.tileLayers.splice(gh, 1);
            break
          }
        }
        if (gj === false) {
          return
        }
        gi.destroyDrawData();
        if (aT["FeatureStyle" + this.map.config.style]) {
          this.loadLayersData()
        }
        if (this.tileLayers.length === 1) {
          this.map.setDisplayOptions({
            isFlat: false
          })
        } else {
          var e = false;
          for (var gh = 1; gh < this.tileLayers.length; gh++) {
            if (this.tileLayers[gh].isFlat) {
              e = true;
              break
            }
          }
          this.map.setDisplayOptions({
            isFlat: e
          })
        }
        var gf = new aL("onrefresh");
        gf.source = "removewebgllayer";
        this.map.fire(gf)
      },
      getLabelTextCanvas: function() {
        if (!this._labelTextCanvas) {
          this._labelTextCanvas = new t(this.map)
        }
        return this._labelTextCanvas
      },
      loadLayersData: function(i) {
        if (this.map.suspendLoad) {
          return
        }
        var gg = this;
        i = i || {};
        var gf = !!i.zoomChanged;
        var e = (gf === true || this.map.getTilt() > 50);
        if (!e) {
          if (!this.syncLoadTimer) {
            this.syncLoadTimer = setTimeout(function() {
              gg._loadLayersFromCache(gf);
              gg.syncLoadTimer = null
            }, 40)
          }
        } else {
          this._loadLayersFromCache(gf)
        }
        if (!gg.map.viewAnimationTime) {
          this.timer && window.clearTimeout(this.timer)
        }
        this.timer = window.setTimeout(function() {
          if (gg.map.viewAnimationTime) {
            if (new Date().getTime() - gg.map.viewAnimationTime < 1000) {
              return
            }
            gg.map.viewAnimationTime = new Date().getTime()
          }
          var gi = gg.tileLayers.length;
          gg.tilesInfoCache = {};
          for (var gj = 0; gj < gi; gj++) {
            var gl = gg.tileLayers[gj];
            var gk = gl.tileType;
            var gh = null;
            if (gg.tilesInfoCache[gk.getName()]) {
              gh = gg.tilesInfoCache[gk.getName()]
            } else {
              gh = gg.calcTilesInfo(gk);
              gg.tilesInfoCache[gk.getName()] = gh
            }
            gl.loadLayerData(gh, false, gf)
          }
          gg.timer = null
        }, this.loadDelay);
        if (eO() && gf) {
          this.loadDelay = 200
        } else {
          this.loadDelay = 80
        }
      },
      _loadLayersFromCache: function(gh) {
        this.map._featureMgr.clearData();
        var gk = this.tileLayers;
        gk.sort(function(gl, i) {
          return gl.zIndex - i.zIndex > 0
        });
        var gf = gk.length;
        this.tilesInfoCache = {};
        for (var gg = 0; gg < gf; gg++) {
          var gj = gk[gg];
          var gi = gj.tileType;
          var e = null;
          if (this.tilesInfoCache[gi.getName()]) {
            e = this.tilesInfoCache[gi.getName()]
          } else {
            e = this.calcTilesInfo(gi);
            this.tilesInfoCache[gi.getName()] = e
          }
          gj.loadLayerData(e, true, gh)
        }
      },
      calcTilesInfo: function(gr) {
        var gD = this.map;
        var gJ = gD.getMapType();
        var gE = bv[gJ];
        var gy = gD.getZoom();
        var e = Math.floor(gy);
        var gi = gr.getDataZoom(gy);
        var gT = gr.getName();
        gi = es(gi, gE.minDataZoom, gE.maxDataZoom);
        var gM = e;
        if (gr._name === "web") {
          gM = gi
        }
        var gC = gr.getTileSize(gy);
        var gh = gr.getBaseTileSize(gy);
        var gv = gr.getMercatorSize(gy, gi);
        var gu;
        var gK;
        var gB;
        var gO;
        var gF = gD.getCenterIn();
        if (gJ !== BMAP_SATELLITE_MAP) {
          gF = c5.calcLoopCenterPoint(gF)
        }
        var gz = Math.floor(gF.lng / gv);
        var gk = Math.floor(gF.lat / gv);
        var gA = gD.getBoundsIn();
        var gH = 0;
        var gf = 0;
        gA = c5.calcLoopMapBounds(gA, gD.getCenter());
        if (gA.ne.lng > c5._mc180X) {
          var gp = c5.getSpaceDistanceInPixel(gi);
          gH = Math.ceil(gp / gh)
        }
        if (gA.sw.lng < c5._mcM180X) {
          var gp = c5.getSpaceDistanceInPixel(gi);
          gf = Math.ceil(gp / gh)
        }
        var gm = [Math.floor(gA.sw.lng / gv) - gf, Math.floor(gA.sw.lat / gv)];
        var gR = [Math.floor(gA.ne.lng / gv) + gH, Math.floor(gA.ne.lat / gv)];
        gu = gm[0];
        gK = gR[0] + 1;
        gB = gm[1];
        gO = gR[1] + 1;
        var gq = [];
        for (var gn = gu; gn < gK; gn++) {
          if (c5.isTileBlank(gn, gi, gh) === true) {
            continue
          }
          for (var gs = gB; gs < gO; gs++) {
            var go = {
              col: gn,
              row: gs,
              zoom: gi,
              useZoom: gM,
              tileTypeName: gT,
              loopOffsetX: 0,
              tileSize: gC,
              baseTileSize: gh,
              mercatorSize: gv
            };
            gq.push(go);
            var gI = "id_" + gn + "_" + gs + "_" + gi;
            gq[gI] = true
          }
        }
        if (gJ !== BMAP_SATELLITE_MAP) {
          gq = c5.calcLoopTiles(gq, gi, gh, gv)
        }
        if (gi === 3) {
          for (var gQ = 0, gP = gq.length; gQ < gP; gQ++) {
            var gn = gq[gQ].col;
            var gs = gq[gQ].row;
            var gL = c5.calcLoopParam(gn, gi);
            var gj = gL.T;
            var gw = gn >= 0 ? gn - gj : gn + gj;
            var gx = "id_" + gw + "_" + gs + "_" + gi;
            if (!gq[gx]) {
              var go = {
                col: gw,
                row: gs,
                zoom: gi,
                useZoom: gM,
                loopOffsetX: 0,
                tileSize: gC,
                baseTileSize: gh,
                mercatorSize: gv
              };
              gq.push(go);
              gq[gx] = true
            }
          }
        }
        if (this.map._tilt > 0) {
          for (var gQ = 0; gQ < gq.length; gQ++) {
            var gl = gq[gQ];
            var gN = gl.col;
            var gS = gl.row;
            var gG = [];
            gG.minX = gN * gv;
            gG.maxX = (gN + 1) * gv;
            gG.minY = gS * gv;
            gG.maxY = (gS + 1) * gv;
            var gg = new fU(0,0);
            gg.lng = (gG.minX + gG.maxX) / 2;
            gg.lat = (gG.minY + gG.maxY) / 2;
            var gt = gD.pointToPixelIn(gg);
            if (gt.x > 0 && gt.x < this.map.width && gt.y > 0 && gt.y < this.map.height) {
              continue
            }
            if (gG.minX < gF.lng && gG.maxX > gF.lng && gG.minY < gF.lat && gG.maxY > gF.lat) {
              continue
            }
            if (!this.ifTileInMapBounds(gG, gA, gN, gS)) {
              gq.splice(gQ, 1);
              gQ--
            }
          }
        }
        gq.sort((function(i) {
            return function(gU, gV) {
              return ((0.4 * Math.abs(gU.col - i[0]) + 0.6 * Math.abs(gU.row - i[1])) - (0.4 * Math.abs(gV.col - i[0]) + 0.6 * Math.abs(gV.row - i[1])))
            }
          }
        )([gz, gk]));
        gq.zoom = gi;
        gq.tileTypeName = gT;
        return gq
      },
      getCurrentViewTilesInfo: function(i) {
        var e = this.tilesInfoCache[i.getName()];
        if (!e) {
          return this.calcTilesInfo(i)
        }
        return e
      },
      ifTileInMapBounds: function(e, gi, gf, gh) {
        var i = gi.normalizedBottomLeft;
        var gt = gi.normalizedTopRight;
        var gl = gi.normalizedTopLeft;
        var gj = gi.normalizedBottomRight;
        var gg = false;
        var gs = new fU(e.minX,e.minY);
        var gp = new fU(e.maxX,e.maxY);
        var gk = new fU(gp.lng,gs.lat);
        var gq = new fU(gs.lng,gp.lat);
        var gn = [gq, gp, gk, gs];
        for (var gr = 0, gm = gn.length; gr < gm; gr++) {
          var go = gr + 1;
          if (go === gm) {
            go = 0
          }
          var gu = gr;
          var gv = fe(gn[go], gn[gu], gl, i);
          if (gv) {
            gg = true;
            break
          }
          gv = fe(gn[go], gn[gu], gj, gt);
          if (gv) {
            gg = true;
            break
          }
          gv = fe(gn[go], gn[gu], gt, gl);
          if (gv) {
            gg = true;
            break
          }
          gv = fe(gn[go], gn[gu], i, gj);
          if (gv) {
            gg = true;
            break
          }
        }
        return gg
      },
      getTileLayer: function(gh) {
        for (var gg = 0, e = this.tileLayers.length; gg < e; gg++) {
          var gf = this.tileLayers[gg];
          if (gf.mapType === gh) {
            return gf
          }
        }
        return null
      }
    });
    function ax(e) {
      this._map = e;
      this._spotsId = null;
      this._init()
    }
    ax.prototype._init = function() {
      var e = this._map;
      e.addEventListener("onspotsdataready", function(gf) {
        var i = gf.spots;
        if (this._spotsId) {
          e.removeSpots(this._spotsId)
        }
        this._spotsId = e.addSpots(i)
      })
    }
    ;
    aT.register(function(e) {
      if (!e.config.enableIconClick) {
        return
      }
      e._mapIcon = new ax(e)
    });
    function aA(e) {
      this._indoorData = {};
      this._map = e;
      this.currentUid = null;
      this.currentFloor = null;
      this._indoorControl = null;
      this.enterMethod = null;
      this.showMask = false;
      this._isMobile = eO();
      this._autoEnterZoom = 19;
      if (this._isMobile) {
        this._autoEnterZoom = 17
      }
      this._init(e);
      window._indoorMgr = this
    }
    aA.prototype._init = function(i) {
      var e = this;
      i.on("indoor_status_changed", function(gj) {
        var gf = gj.uid;
        var gh = gj.floor;
        if (gf === null) {
          gf = e.currentUid;
          if (e._indoorData[gf]) {
            gh = e._indoorData[gf].defaultFloor
          }
          if (e._indoorControl) {
            e._indoorControl.hide()
          }
          e.currentUid = null;
          e.currentFloor = null;
          e.enterMethod = null
        } else {
          if (e._indoorData[gf]) {
            var gi = e._indoorData[gf];
            gh = (typeof gh === "number") ? gh : gi.defaultFloor;
            if (!e._indoorControl) {
              if (i.config.showControls && i._displayOptions.indoor) {
                e._indoorControl = new fg(i,gi)
              }
            } else {
              e._indoorControl.setInfo(gi);
              e._indoorControl.show()
            }
            e.currentUid = gf;
            e.currentFloor = gh
          }
        }
        if (!e._indoorData || !e._indoorData[gf] || e._indoorData[gf].currentFloor === gh) {
          this.fire(new aL("onrefresh"));
          return
        }
        var gg = new aL("onindoor_data_refresh");
        gg.uid = gf;
        gg.floor = gh;
        gg.tileKey = e._indoorData[gf].tileKey;
        e._indoorData[gf].currentFloor = gh;
        e.currentFloor = gh;
        this.fire(gg)
      });
      i.on("spotclick", function(gg) {
        var gf = null;
        if (gg.curAreaSpot && this.areaSpots[gg.curAreaSpot]) {
          gf = this.areaSpots[gg.curAreaSpot].userData.uid
        }
        if (gf === e.currentUid) {
          if (gg.curAreaSpot) {
            e.enterMethod = "byClick"
          }
          return
        }
        if (gf === null) {
          if (e.currentUid && e.enterMethod === "byClick") {
            i.showIndoor(null);
            e.enterMethod = null
          }
        } else {
          e.enterMethod = "byClick";
          if (e.currentUid) {
            i.showIndoor(e.currentUid, e._indoorData[e.currentUid].defaultFloor)
          }
          i.showIndoor(gf, e._indoorData[gf].defaultFloor)
        }
      });
      i.on("moveend", function() {
        if (this.getZoom() >= e._autoEnterZoom) {
          e._checkIndoorByMove()
        }
      });
      i.on("zoomend", function() {
        if (this.getZoom() >= e._autoEnterZoom) {
          e._checkIndoorByMove()
        } else {
          if (e.enterMethod !== "byClick" && e.currentUid !== null) {
            this.showIndoor(null)
          }
        }
      })
    }
    ;
    aA.prototype._checkIndoorByMove = function() {
      var gf = this._map;
      var gm = gf.getSize();
      var gr = {
        x: gm.width / 2,
        y: gm.height / 2
      };
      var gq = Math.max(gm.width, gm.height);
      var gs = [];
      for (var gn in this._indoorData) {
        var e = this._indoorData[gn].center;
        var gg = gf.pointToPixelIn(new aT.Point(e[0],e[1]));
        var gj = ft(gr, gg);
        gs.push({
          uid: gn,
          distance: gj
        })
      }
      if (gs.length === 0) {
        return
      }
      gs.sort(function(gt, i) {
        return gt.distance - i.distance
      });
      var gi = gs[0];
      var go = gf.getCenterIn();
      var gh = false;
      for (var gl = 0; gl < this._indoorData[gi.uid].contour.length; gl++) {
        if (cs([go.lng, go.lat], this._indoorData[gi.uid].contour[gl])) {
          gh = true;
          break
        }
      }
      if (gh === false && gi.uid === "e96b44200baa3b4082288acc") {
        var gk = this._indoorData[gi.uid].boundsMin;
        var gp = this._indoorData[gi.uid].boundsMax;
        if (go.lng > gk[0] && go.lat > gk[1] && go.lng < gp[0] && go.lat < gp[1]) {
          gh = true
        }
      }
      if (gh) {
        if (this.enterMethod !== "byClick") {
          if (this.currentUid !== null && this.currentUid !== gi.uid) {
            this._map.showIndoor(this.currentUid, this._indoorData[this.currentUid].defaultFloor)
          }
          if (this.currentUid !== gi.uid) {
            this._map.showIndoor(gi.uid, this._indoorData[gi.uid].defaultFloor)
          }
          this.enterMethod = "byMove"
        }
      } else {
        if (this.enterMethod !== "byClick") {
          this._map.showIndoor(null)
        }
      }
    }
    ;
    aA.prototype.setData = function(gg) {
      if (gg === null) {
        return
      }
      for (var gf in gg) {
        if (gf === "tileInfo") {
          continue
        }
        var gh = gg[gf].tileKey;
        if (this._indoorData[gf]) {
          if (!this._indoorData[gf][gh]) {
            this._indoorData[gf].tileKeys.push(gh);
            this._indoorData[gf][gh] = true
          }
        } else {
          this._indoorData[gf] = gg[gf];
          this._indoorData[gf].tileKeys = [gg[gf].tileKey];
          this._indoorData[gf][gh] = true;
          for (var e = 0; e < this._indoorData[gf].contour.length; e++) {
            this._map.addAreaSpot(this._indoorData[gf].contour[e], {
              id: gf + e,
              userData: {
                uid: gf
              }
            })
          }
        }
      }
      if (this._map.getZoom() >= this._autoEnterZoom) {
        this._checkIndoorByMove()
      }
    }
    ;
    aA.prototype.removeData = function(gf, gh) {
      if (!this._indoorData[gf]) {
        return
      }
      var gg = this._indoorData[gf];
      for (var e = 0; e < gg.tileKeys.length; e++) {
        if (gg.tileKeys[e] === gh) {
          gg.tileKeys.splice(e, 1);
          break
        }
      }
      delete gg[gh];
      if (gg.tileKeys.length === 0) {
        delete this._indoorData[gf]
      }
    }
    ;
    aA.prototype.getIndoorData = function(e) {
      return this._indoorData[e] || null
    }
    ;
    aA.prototype.getData = function() {
      return this._indoorData
    }
    ;
    aT.register(function(e) {
      e._indoorMgr = new aA(e)
    });
    var dj = (function() {
        var gg = {};
        var gp = {};
        var gl = {};
        function gn(gr) {
          if (Object.prototype.toString.call(gr) === "[object Object]") {
            for (var gq in gr) {
              return false
            }
            return true
          } else {
            return false
          }
        }
        function gm(gw, gx, gA, gt, gz) {
          gt = gt || FS;
          var gr;
          if (gt) {
            gr = go(gw, gx, gA, gt)
          } else {
            gr = gf(gw, gx, gA, gz)
          }
          var gv = gr.drawId;
          var gq = gr.style;
          var gy = gr.styleUpdate;
          var gB = [];
          if (!gv) {
            return gB
          }
          for (var gs = 0; gs < gv.length; gs++) {
            var gu = gy[gv[gs]] || gq[gv[gs]];
            if (gu) {
              switch (gx) {
                case "polygon":
                  gu = gh(gu, gw);
                  break;
                case "line":
                  gu = gk(gu, gw);
                  break;
                case "pointText":
                  gu = gi(gu, gw);
                  break;
                case "point":
                  gu = e(gu, gw);
                  break;
                case "polygon3d":
                  gu = gj(gu, gw);
                  break
              }
              if (gu) {
                gB[gB.length] = gu
              }
            }
          }
          return gB
        }
        function go(gr, gt, gu, gq) {
          var gs = gq[2];
          switch (gt) {
            case "point":
              gs = gs[0];
              break;
            case "pointText":
              gs = gs[1];
              break;
            case "line":
              gs = gs[3];
              break;
            case "polygon":
              gs = gs[4];
              break;
            case "polygon3d":
              gs = gs[5];
              break
          }
          var gw = gu - 1;
          if (gt === "line" && gu === 12) {
            gw = gu
          }
          var gx = gq[1][gw][0];
          var gv = gx[gr];
          if (!gv) {
            if (gt === "point" || gt === "pointText") {
              gx = gq[1][gu][0];
              gv = gx[gr]
            }
          }
          return {
            drawId: gv,
            style: gs,
            styleUpdate: []
          }
        }
        function gf(gu, gv, gy, gx) {
          if (!gx) {
            return {
              drawId: null,
              style: [],
              styleUpdate: []
            }
          }
          var gw;
          var gs = gx.baseFs;
          if (gn(gx.zoomRegion)) {
            gw = gx.StyleBody || []
          } else {
            gw = gx.zoomStyleBody[gy] || []
          }
          var gr = gs[2];
          switch (gv) {
            case "point":
              gr = gr[0];
              gw = gw[0] || {};
              break;
            case "pointText":
              gr = gr[1];
              gw = gw[1] || {};
              break;
            case "line":
              gr = gr[3];
              gw = gw[3] || {};
              break;
            case "polygon":
              gr = gr[4];
              gw = gw[4] || {};
              break;
            case "polygon3d":
              gr = gr[5];
              gw = gw[5] || {};
              break
          }
          var gq = gs[1][gy - 1][0];
          var gt = gq[gu];
          return {
            drawId: gt,
            style: gr,
            styleUpdate: gw
          }
        }
        function gi(gr, gq) {
          if (!gr || gr.length === 0) {
            return null
          }
          return {
            sid: gq,
            fontRgba: i(gr[0]),
            haloRgba: i(gr[1]),
            backRgba: i(gr[2]),
            fontSize: gr[3],
            haloSize: gr[4],
            fontWeight: gr[5],
            fontStyle: gr[6],
            density: gr[7]
          }
        }
        function e(gr, gq) {
          return {
            sid: gq,
            rank: gr[0],
            ucflag: gr[1],
            icon: gr[2],
            iconType: gr[3],
            nineGG: gr[4],
            density: gr[5],
            zoom: gr[6]
          }
        }
        function gk(gr, gq) {
          return {
            sid: gq,
            borderRgba: i(gr[0]),
            fillRgba: i(gr[1]),
            borderWidth: gr[2],
            fillWidth: gr[3],
            borderCap: gr[4],
            fillCap: gr[5],
            haveBorderLine: gr[6],
            haveBorderTexture: gr[7],
            haveFillTexture: gr[8],
            isUseBorderRgba: gr[9],
            isUseFillRgba: gr[10],
            borderTexture: gr[11],
            fillTexture: gr[12],
            borderTextureType: gr[13],
            fillTextureType: gr[14],
            isRealWidth: gr[15],
            haveArrow: gr[16],
            needRound: gr[17],
            realBorderWidth: gr[18]
          }
        }
        function gh(gr, gq) {
          return {
            sid: gq,
            fillRgba: i(gr[0]),
            borderRgba: i(gr[1]),
            borderWidth: gr[2],
            borderTexture: gr[3],
            borderTextureType: gr[4],
            waterStyle: gr[5],
            haloStyle: gr[6],
            textureStyle: gr[7],
            thickRgba: i(gr[8])
          }
        }
        function gj(gr, gq) {
          return {
            sid: gq,
            filter: gr[0],
            ratio: gr[1],
            haveBorder: gr[2],
            borderWidth: gr[3],
            borderRgba: i(gr[4]),
            fillTop: i(gr[5]),
            fillSide: i(gr[6]),
            polyTexture: gr[7]
          }
        }
        function i(gv) {
          var gu = gv;
          if (gl[gu]) {
            return gl[gu]
          }
          gv = gv >>> 0;
          var gt = (gv) & 255;
          var gs = (gv >> 8) & 255;
          var gq = (gv >> 16) & 255;
          var gr = (gv >> 24) & 255;
          gl[gu] = [gt, gs, gq, gr];
          return gl[gu]
        }
        return {
          getStyleFromCache: function(gx, gs, gv, gw, gr, gu, gq) {
            gx = gx || "default";
            var gt = gx + "-" + gs + "-" + gv + "-" + gw;
            if (gu) {
              gt += "-indoor"
            }
            if (gr) {
              if (!gp[gt]) {
                gp[gt] = gm(gs, gv, gw, gr)
              }
              return gp[gt]
            }
            if (!gg[gt]) {
              gg[gt] = gm(gs, gv, gw, gr, gq)
            }
            return gg[gt]
          }
        }
      }
    )();
    aT.register(function(i) {
      var e = new cO(i)
    });
    function cO(e) {
      e.container.appendChild(this.render());
      this.bind(e)
    }
    cO.prototype.render = function() {
      var i = document.createElement("div");
      i.className = "click-ripple-container";
      var e = document.createElement("div");
      e.className = "click-ripple";
      i.appendChild(e);
      this._div = i;
      this._ripple = e;
      return i
    }
    ;
    cO.prototype.bind = function(i) {
      var e = this;
      i.addEventListener("spotclick", function(gf) {
        if (!gf.spots || gf.spots.length === 0) {
          return
        }
        e._div.style.left = gf.pixel.x + "px";
        e._div.style.top = gf.pixel.y + "px";
        z.ac(e._ripple, "ripple-playing")
      });
      z.on(e._ripple, "transitionend", function() {
        z.rc(e._ripple, "ripple-playing")
      })
    }
    ;
    function eM(e) {
      db.call(this);
      if (!e) {
        return
      }
      this._opts = {};
      this._map = e;
      this._maxLat = 84.6;
      this._minLat = -80.6;
      this._maxLatMC = dl.convertLL2MC(new ci(this._maxLat,0)).lat;
      this._minLatMC = dl.convertLL2MC(new ci(this._minLat,0)).lat
    }
    eM.inherits(db, "ToolbarItem");
    z.extend(eM.prototype, {
      open: function() {
        if (this._isOpen == true) {
          return true
        }
        if (this._map._toolInUse) {
          return false
        }
        this._map._toolInUse = true;
        this._isOpen = true;
        return true
      },
      close: function() {
        if (!this._isOpen) {
          return
        }
        this._map._toolInUse = false;
        this._isOpen = false
      },
      _checkStr: function(e) {
        if (!e) {
          return ""
        }
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
    });
    function fo(gf, i) {
      eM.call(this, gf);
      i = i || {};
      this._opts = z.extend(z.extend(this._opts || {}, {
        autoClear: false,
        tips: "测距",
        followText: "单击确定起点，双击结束绘制",
        unit: "metric",
        showResult: true,
        lineColor: "blue",
        lineStroke: 2,
        opacity: 1,
        lineStyle: "solid",
        cursor: dW.distCursor,
        styleCodes: {
          lnCode: 0,
          spCode: 0,
          slCode: 0,
          tlCode: 0
        },
        enableMassClear: true
      }), i);
      if (this._opts.showResult === false) {
        if (typeof i.tips === "undefined") {
          this._opts.tips = "绘制折线"
        }
        if (!i.cursor) {
          this._opts.cursor = "crosshair"
        }
      }
      if (this._opts.lineStroke <= 0) {
        this._opts.lineStroke = 2
      }
      if (this._opts.opacity > 1) {
        this._opts.opacity = 1
      } else {
        if (this._opts.opacity < 0) {
          this._opts.opacity = 0
        }
      }
      if (this._opts.lineStyle !== "solid" && this._opts.lineStyle !== "dashed") {
        this._opts.lineStyle = "solid"
      }
      this._checked = false;
      this._drawing = null;
      this.followTitle = null;
      this._totalDis = {};
      this._points = [];
      this._paths = [];
      this._dots = [];
      this._segDistance = [];
      this._overlays = [];
      this._units = {
        metric: {
          name: "metric",
          conv: 1,
          incon: 1000,
          u1: "米",
          u2: "公里"
        },
        us: {
          name: "us",
          conv: 3.2808,
          incon: 5279.856,
          u1: "英尺",
          u2: "英里"
        }
      };
      if (!this._units[this._opts.unit]) {
        this._opts.unit = "metric"
      }
      this._dLineColor = "#ff6319";
      this._dLineStroke = 3;
      this._dOpacity = 0.8;
      this._dLineStyle = "solid";
      this._dCursor = dW.distCursor;
      if (this._opts.showResult) {
        this._opts.followText = "单击确定起点"
      }
      this._followTextM = "单击确定地点，双击结束";
      this._sectionMarkerTip = "单击可删除此点，拖拽可调整位置";
      this._movingTimerId = null;
      if (this._opts.showResult) {
        this.text = "测距"
      } else {
        this.text = "绘线"
      }
      this._isOpen = false;
      var e = this;
      c9.load("tools", function() {
        e._draw()
      })
    }
    fo.inherits(eM, "PolylineTItem");
    z.extend(fo.prototype, {
      setLineColor: function(e) {
        this._opts.lineColor = e
      },
      setLineStroke: function(e) {
        if (Math.round(e) > 0) {
          this._opts.lineStroke = Math.round(e)
        }
      },
      setOpacity: function(e) {
        if (e >= 0 && e <= 1) {
          this._opts.opacity = e
        }
      },
      setLineStyle: function(e) {
        if (e === "solid" || e === "dashed") {
          this._opts.lineStyle = e
        }
      },
      clear: function() {
        for (var gf = 0, e = this._overlays.length; gf < e; gf++) {
          if (this._overlays[gf]) {
            this._map.removeOverlay(this._overlays[gf])
          }
        }
        this._overlays.length = 0;
        for (var gf = 0, e = this._dots.length; gf < e; gf++) {
          if (this._dots[gf] && this._dots[gf].parentNode) {
            this._dots[gf].parentNode.removeChild(this._dots[gf])
          }
        }
        this._dots.length = 0
      },
      setCursor: function(e) {
        if (this._opts.showResult === true) {
          return
        }
        this._opts.cursor = e
      },
      getCursor: function() {
        if (this._opts.showResult === true) {
          return this._dCursor
        }
        var e = this._opts.cursor.match(/^url\((.+)\)(,.*)?/);
        if (e !== null) {
          return e[1]
        } else {
          return this._opts.cursor
        }
      },
      showResult: function(e) {
        this._opts.showResult = !!e
      }
    });
    function bQ() {
      var gh = 3;
      var go = 256;
      var gg = Math.pow(2, 18 - gh) * go;
      var gp = 2;
      var gn = (gp + 1) * gg;
      var gf = dl.convertLL2MC(new fU(180,0));
      var gl = gf.lng;
      var gj = gn - gl;
      var gm = -3;
      var e = gm * gg;
      var gi = dl.convertLL2MC(new fU(-180,0));
      var gk = gi.lng;
      var i = gk - e;
      this._validPixels = gl / Math.pow(2, 18 - gh);
      this._mc180X = gl;
      this._mcM180X = gk;
      this._loopOffset = gj + i;
      this._mcTSpan = gl - gk;
      this._spaceDistance = gj;
      this._mSpaceDistance = i
    }
    bQ.prototype = {
      calcLoopParam: function(gf, i, gm) {
        gm = gm || 256;
        var gj = 0;
        var gg = 3;
        var gi = 6;
        var gh = gi * Math.pow(2, (i - gg)) * 256 / gm;
        var gl = gh / 2 - 1;
        var gk = -gh / 2;
        while (gf > gl) {
          gf -= gh;
          gj -= this._loopOffset
        }
        while (gf < gk) {
          gf += gh;
          gj += this._loopOffset
        }
        var e = gj;
        gj = Math.round(gj / Math.pow(2, 18 - i));
        return {
          offsetX: gj,
          geoOffsetX: e,
          col: gf,
          T: gh,
          maxCol: gl,
          minCol: gk
        }
      },
      calcLoopCenterPoint: function(i) {
        var e = i.lng;
        while (e > this._mc180X) {
          e -= this._mcTSpan
        }
        while (e < this._mcM180X) {
          e += this._mcTSpan
        }
        i.lng = e;
        return i
      },
      calcLoopMapBounds: function(gf, gg) {
        var i = gg || gf.getCenter();
        var e = gf.sw.lng;
        var gh = gf.ne.lng;
        while (i.lng > this._mc180X) {
          i.lng -= this._mcTSpan;
          e -= this._mcTSpan;
          gh -= this._mcTSpan
        }
        while (i.lng < this._mcM180X) {
          i.lng += this._mcTSpan;
          e += this._mcTSpan;
          gh += this._mcTSpan
        }
        gf.sw.lng = e;
        gf.ne.lng = gh;
        if (gf.pointBottomLeft) {
          gf.pointBottomLeft = this.calcLoopCenterPoint(gf.pointBottomLeft);
          gf.pointTopLeft = this.calcLoopCenterPoint(gf.pointTopLeft);
          gf.pointTopRight = this.calcLoopCenterPoint(gf.pointTopRight);
          gf.pointBottomRight = this.calcLoopCenterPoint(gf.pointBottomRight)
        }
        return gf
      },
      calcLoopTiles: function(go, e, gs, gl) {
        gs = gs || 256;
        var gh = gl || Math.pow(2, 18 - e) * gs;
        var gn = Math.floor(this._mc180X / gh);
        var gj = Math.floor(this._mcM180X / gh);
        var gp = Math.floor(this._loopOffset / gh);
        var gq = [];
        for (var gk = 0; gk < go.length; gk++) {
          var gr = go[gk];
          var gg = gr[0];
          var gt = gr[1];
          if (gg >= gn) {
            var gm = gg + gp;
            if (this.isTileBlank(gm, e, gs) === true) {
              continue
            }
            var gf = "id_" + gm + "_" + gt + "_" + e;
            if (!go[gf]) {
              go[gf] = true;
              gq.push([gm, gt, e, 0])
            }
          } else {
            if (gg <= gj) {
              var gm = gg - gp;
              if (this.isTileBlank(gm, e, gs) === true) {
                continue
              }
              var gf = "id_" + gm + "_" + gt + "_" + e;
              if (!go[gf]) {
                go[gf] = true;
                gq.push([gm, gt, e, 0])
              }
            }
          }
        }
        for (var gk = 0, gi = gq.length; gk < gi; gk++) {
          go.push(gq[gk])
        }
        for (var gk = go.length - 1; gk >= 0; gk--) {
          var gg = go[gk][0];
          if (this.isTileBlank(gg, e, gs)) {
            go.splice(gk, 1)
          }
        }
        return go
      },
      isTileBlank: function(gf, gh, e) {
        var gi = Math.pow(2, gh - 3);
        var i = Math.round(this._validPixels * gi);
        var gg = 6 * gi * 256 / e;
        while (gf > gg / 2 - 1) {
          gf -= gg
        }
        while (gf < -(gg / 2)) {
          gf += gg
        }
        if (gf > 0 && gf * e > i) {
          return true
        }
        if (gf < 0 && Math.abs((gf + 1) * e) > i) {
          return true
        }
        return false
      },
      isAddWidth: function(e, i) {
        return e < this._mcM180X || i > this._mc180X
      },
      getSpaceDistanceInPixel: function(i) {
        var e = Math.round((this._spaceDistance + this._mSpaceDistance) / Math.pow(2, 18 - i));
        return e
      }
    };
    var c5 = new bQ();
    var bC = (function() {
        var e = true;
        var gg = 256;
        var gi = am("ditu", "normalTraffic");
        var gf = gi.udt;
        var gj = "https://sp3.baidu.com/7_AZsjOpB1gCo2Kml5_Y_DAcsMJiwa/traffic/";
        var gh = [[2, "79,210,125,1", 3, 2, 0, [], 0, 0], [2, "79,210,125,1", 3, 2, 0, [], 0, 0], [2, "79,210,125,1", 4, 2, 0, [], 0, 0], [2, "79,210,125,1", 5, 2, 0, [], 0, 0], [2, "79,210,125,1", 6, 2, 0, [], 0, 0], [2, "255,208,69,1", 3, 2, 0, [], 0, 0], [2, "255,208,69,1", 3, 2, 0, [], 0, 0], [2, "255,208,69,1", 4, 2, 0, [], 0, 0], [2, "255,208,69,1", 5, 2, 0, [], 0, 0], [2, "255,208,69,1", 6, 2, 0, [], 0, 0], [2, "232,14,14,1", 3, 2, 0, [], 0, 0], [2, "232,14,14,1", 3, 2, 0, [], 0, 0], [2, "232,14,14,1", 4, 2, 0, [], 0, 0], [2, "232,14,14,1", 5, 2, 0, [], 0, 0], [2, "232,14,14,1", 6, 2, 0, [], 0, 0], [2, "181,0,0,1", 3, 2, 0, [], 0, 0], [2, "181,0,0,1", 3, 2, 0, [], 0, 0], [2, "181,0,0,1", 4, 2, 0, [], 0, 0], [2, "181,0,0,1", 5, 2, 0, [], 0, 0], [2, "181,0,0,1", 6, 2, 0, [], 0, 0], [2, "255,255,255,1", 4, 0, 0, [], 0, 0], [2, "255,255,255,1", 5.5, 0, 0, [], 0, 0], [2, "255,255,255,1", 7, 0, 0, [], 0, 0], [2, "255,255,255,1", 8.5, 0, 0, [], 0, 0], [2, "255,255,255,1", 10, 0, 0, [], 0, 0]];
        var i = new b7({
          transparentPng: true,
          dataType: 2,
          cacheSize: 256,
          clipTile: true
        });
        i.zIndex = 2;
        i.getTilesUrl = function(gm, gn) {
          if (!gm || gn < 7) {
            return null
          }
          var gl = gm.x;
          var go = gm.y;
          var gk = gj + "?qt=vtraffic&z=" + gn + "&x=" + gl + "&y=" + go + "&udt=" + gf;
          return gk
        }
        ;
        i.processData = function(gn) {
          var gr = gn.content;
          var gp = 10;
          if (typeof gn.precision === "number") {
            gp = gn.precision * 10
          }
          var gy = {
            road: [[], []]
          };
          if (!gr) {
            return gy
          }
          var gw = gr.tf;
          if (!gw) {
            return gy
          }
          for (var go = 0; go < gw.length; go++) {
            var gx = gw[go][1];
            var gv = [];
            var gt = 0;
            var gs = 0;
            var gu = gh[gw[go][3]];
            for (var gm = 0, gk = gx.length; gm < gk / 2; gm++) {
              gt += gx[gm * 2] / gp;
              gs += gx[gm * 2 + 1] / gp;
              gv.push(gt, 256 - gs)
            }
            var gl = gu[1].split(",");
            gl[3] = gl[3] * 255;
            var gq = gu[2] / 2;
            gy.road[0].push([gv, 1, 2, [255, 255, 255, 255], gq + 2]);
            gy.road[1].push([gv, 1, 2, gl, gq])
          }
          return gy
        }
        ;
        return i
      }
    )();
    aT.register(function(i) {
      if (i.config && i.config.isOverviewMap) {
        return
      }
      if (i.isLoaded()) {
        eq(i)
      } else {
        i.addEventListener("load", function() {
          eq(this)
        })
      }
      i.cityName = "中国";
      i.cCode = "1";
      var e = {};
      e.enableRequest = true;
      e.request = function() {
        if (e.enableRequest) {
          e.enableRequest = false;
          setTimeout(function() {
            e._request()
          }, 500)
        }
      }
      ;
      e._request = function() {
        var gg = i.getBoundsIn();
        var gi = i.getZoom();
        var gf = gg.getSouthWest();
        var gh = gg.getNorthEast();
        bV.request(function(gl) {
          if (gl.current_city["code"] >= 9000 && gl.current_city["code"] <= 9378) {
            gl.current_city["name"] = "台湾省"
          }
          if (gl.current_city["code"] >= 20000 && gl.current_city["code"] <= 20499) {
            gl.current_city["name"] = "新加坡"
          }
          if (gl.current_city["code"] >= 20500 && gl.current_city["code"] <= 25999) {
            gl.current_city["name"] = "泰国"
          }
          if (gl.current_city["code"] >= 26000 && gl.current_city["code"] <= 29999) {
            gl.current_city["name"] = "日本"
          }
          if (gl.current_city["code"] >= 30000 && gl.current_city["code"] <= 30999) {
            gl.current_city["name"] = "韩国"
          }
          if (gl.current_city["code"] >= 31000 && gl.current_city["code"] <= 37000) {
            gl.current_city["name"] = "亚太"
          }
          if (gl.current_city["code"] >= 46609 && gl.current_city["code"] <= 52505) {
            gl.current_city["name"] = "欧洲"
          }
          if (gl.current_city["code"] >= 39509 && gl.current_city["code"] <= 53500) {
            gl.current_city["name"] = "南美洲"
          }
          if (gl.current_city["code"] >= 54000 && gl.current_city["code"] <= 70000) {
            gl.current_city["name"] = "北美洲"
          }
          if (gl.current_city["code"] === 54003 && gl.current_city["code"] >= 60731 && gl.current_city["code"] <= 61123) {
            gl.current_city["name"] = "美国"
          }
          if (gl.current_city["code"] === 54015 || gl.current_city["code"] >= 57970 && gl.current_city["code"] <= 60223) {
            gl.current_city["name"] = "加拿大"
          }
          if (gl.current_city["code"] === 54025 || gl.current_city["code"] >= 54338 && gl.current_city["code"] <= 57374) {
            gl.current_city["name"] = "墨西哥"
          }
          e.enableRequest = true;
          if (gl && gl.current_city) {
            var gk = gl.current_city["name"];
            var gj = gl.current_city["code"];
            if (gj !== i.cCode) {
              i.dispatchEvent("citychange", {
                name: gk,
                code: gj
              })
            }
            i.cityName = gk;
            i.cCode = gl.current_city["code"];
            if (!eO()) {
              dt(i)
            }
          }
        }, {
          qt: "cen",
          b: gf.lng + "," + gf.lat + ";" + gh.lng + "," + gh.lat,
          l: gi
        }, "", "", true)
      }
      ;
      i.addEventListener("load", function(gf) {
        e.request()
      });
      i.addEventListener("moveend", function(gf) {
        e.request()
      });
      i.addEventListener("zoomend", function(gf) {
        e.request()
      });
      e.request()
    });
    function eq(i) {
      if (i.temp.copyadded) {
        return
      }
      i.temp.copyadded = true;
      if (!i.cpyCtrl) {
        var gg = new c8(2,2);
        i.config.cpyCtrlOffset = gg;
        if (eO()) {
          gg.width = 72;
          gg.height = 0
        }
        var gf = new cP({
          offset: gg,
          printable: true
        });
        i.cpyCtrl = gf
      }
      if (!eO()) {
        dt(i);
        i.addEventListener("maptypechange", function() {
          dt(i)
        })
      }
      i.addControl(gf);
      var e = new U();
      e._opts = {
        printable: true
      };
      i.logoCtrl = e;
      i.addControl(e);
      i.addEventListener("resize", function() {
        if (this.getSize().width >= 300 && i.getSize().height >= 100) {
          e.show();
          gf.setOffset(i.config.cpyCtrlOffset)
        } else {
          e.hide();
          gf.setOffset(new c8(4,2))
        }
      });
      if (i.getSize().width >= 300 && i.getSize().height >= 100) {
        e.show()
      } else {
        e.hide();
        gf.setOffset(new c8(4,2))
      }
      i.addEventListener("oncopyrightoffsetchange", function(gh) {
        i.logoCtrl.setOffset(gh.target.logo);
        i.cpyCtrl.setOffset(gh.target.cpy)
      });
      i.dispatchEvent(new aL("oncopyrightaddend"))
    }
    function dt(gv) {
      if (!gv.cpyCtrl) {
        var gD = new c8(2,2);
        if (eO()) {
          gD.width = 72;
          gD.height = 0
        }
        var gy = new cP({
          offset: gD,
          printable: true
        });
        gv.cpyCtrl = gy
      }
      var gM = gv.cityName || "中国";
      var gw = gv.getMapType();
      var gx = ["常州市", "南昌市", "乌鲁木齐市", "无锡市", "福州市", "泉州市", "珠海市", "贵阳市"];
      var gp = ["北京市", "上海市", "广州市", "深圳市", "宁波市", "石家庄市", "沈阳市", "长春市", "青岛市", "温州市", "台州市", "金华市", "佛山市", "中山市", "昆明市", "南宁市", "苏州市", "西安市", "济南市", "郑州市", "合肥市", "呼和浩特市", "杭州市", "成都市", "武汉市", "长沙市", "天津市", "南京市", "重庆市", "大连市", "东莞市", "厦门市"];
      var gr = ["香港特别行政区"];
      var gl = ["台湾省"];
      var gE = ["日本"];
      var gK = ["韩国"];
      var gz = ["泰国"];
      var gC = ["亚太"];
      var gm = ["新加坡"];
      var gL = ["欧洲"];
      var gg = ["南美洲"];
      var gH = ["北美洲"];
      var gf = ["美国"];
      var gB = ["墨西哥"];
      var gj = ["加拿大"];
      for (var gI in gx) {
        if (gx[gI] === gM) {
          var gs = true;
          break
        }
      }
      for (var gI in gp) {
        if (gp[gI] === gM) {
          var gh = true;
          break
        }
      }
      for (var gI in gr) {
        if (gr[gI] === gM) {
          var gO = true;
          break
        }
      }
      if (gl[0] === gM) {
        var gG = true
      }
      if (gm[0] === gM) {
        var i = true
      }
      if (gE[0] === gM) {
        var go = true
      }
      if (gK[0] === gM) {
        var gu = true
      }
      if (gz[0] === gM) {
        var gt = true
      }
      if (gC[0] === gM) {
        var gk = true
      }
      if (gL[0] === gM) {
        var gq = true
      }
      if (gg[0] === gM) {
        var gn = true
      }
      if (gH[0] === gM) {
        var e = true
      }
      if (gf[0] === gM) {
        var gJ = true
      }
      if (gj[0] === gM) {
        var gF = true
      }
      if (gB[0] === gM) {
        var gi = true
      }
      var gN = ["&copy;&nbsp;2020 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "];
      var gA = "rgba(255, 255, 255, 0.701961)";
      if (gv.getZoom() <= 9) {
        gN = ["&copy;&nbsp;2020 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
      } else {
        if (gG) {
          gN = ["&copy;&nbsp;2020 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
        } else {
          if (go || gu) {
            gN = ["&copy;&nbsp;2020 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
          } else {
            if (i || gt) {
              gN = ["&copy;&nbsp;2020 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
            } else {
              if (gk) {
                gN = ["&copy;&nbsp;2020 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
              } else {
                if (gq) {
                  gN = ["&copy;&nbsp;2020 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
                } else {
                  if (gn) {
                    gN = ["&copy;&nbsp;2020 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
                  } else {
                    if (e) {
                      gN = ["&copy;&nbsp;2020 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (gv.getZoom() <= 9) {
        gN.push("长地万方");
        gN.push(' &amp; <a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>');
        gN.push(' &amp; <a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>');
        if (gw === BMAP_SATELLITE_MAP || gw === BMAP_HYBRID_MAP) {
          gN.push(' &amp; <a target="_blank" href="http://www.eso.org/public/">ESO</a>');
          gA = "rgba(0,0,0,.7)"
        }
      } else {
        if (go || gu) {
          gN.push('<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>')
        } else {
          if (i || gt) {
            gN.push('<a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>')
          } else {
            if (gk) {
              gN.push('<a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>');
              gN.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>')
            } else {
              if (gq) {
                gN.push('<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>');
                gN.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>')
              } else {
                if (gn) {
                  gN.push('<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>');
                  gN.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>')
                } else {
                  if (gJ || gi || gF) {
                    gN.push('<a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>');
                    gN.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>')
                  } else {
                    if (e) {
                      gN.push('<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>');
                      gN.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>')
                    } else {
                      gN.push("长地万方");
                      if (gs) {
                        gN.push(' &amp; <a target="_blank" href="http://www.palmcity.cn/palmcity/">PalmCity</a>')
                      }
                      if (gO) {
                        gN.push(' &amp; <a target="_blank" href="http://www.mapking.com/HongKong/eng/home/MapKing_Webmap.html">MapKing</a>')
                      }
                      if (gG) {
                        gN.push(' &amp; <a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>');
                        gN.push(' &amp; <a target="_blank" href="http://www.localking.com.tw/about/localking.aspx">樂客LocalKing</a>')
                      }
                      if (gw === BMAP_SATELLITE_MAP || gw === BMAP_HYBRID_MAP) {
                        gA = "rgba(0,0,0,.7)"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      gN.unshift('<span style="background: ' + gA + ';padding: 0px 1px;line-height: 16px;display: inline;height: 16px;">');
      gN.push("</span>");
      gN = gN.join("");
      gv.cpyCtrl.addCopyright({
        id: 1,
        content: gN
      })
    }
    window.BMAP_STATUS_SUCCESS = 0;
    window.BMAP_STATUS_CITY_LIST = 1;
    window.BMAP_STATUS_UNKNOWN_LOCATION = 2;
    window.BMAP_STATUS_UNKNOWN_ROUTE = 3;
    window.BMAP_STATUS_INVALID_KEY = 4;
    window.BMAP_STATUS_INVALID_REQUEST = 5;
    window.BMAP_STATUS_PERMISSION_DENIED = 6;
    window.BMAP_STATUS_SERVICE_UNAVAILABLE = 7;
    window.BMAP_STATUS_TIMEOUT = 8;
    var dA = "cur";
    var bs = "cen";
    var dk = "s";
    var K = "con";
    var cU = "bd";
    var eV = "nb";
    var f7 = "bt";
    var b5 = "nav";
    var di = "walk";
    var f3 = "gc";
    var ey = "rgc";
    var dv = "dec";
    var d5 = "bse";
    var ef = "nse";
    var g = "bl";
    var aM = "bsl";
    var aU = "bda";
    var O = "sa";
    var aj = "nba";
    var bq = "drag";
    var D = "ext";
    var e6 = 2;
    var eA = 4;
    var fD = 7;
    var fC = 11;
    var em = 12;
    var f1 = 14;
    var bi = 15;
    var cR = 18;
    var d8 = 20;
    var b1 = 21;
    var bL = 19;
    var d1 = 23;
    var bF = 26;
    var ad = 28;
    var dg = 31;
    var bZ = 35;
    var eZ = 44;
    var gd = 45;
    var dD = 46;
    var bX = 47;
    var ff = -1;
    var fv = 0;
    var fG = 1;
    var bJ = 2;
    var bx = 3;
    window.BMAP_POI_TYPE_NORMAL = 0;
    function N(i) {
      this._opts = {};
      z.extend(this._opts, i);
      this._queryList = [];
      var e = this;
      c9.load("othersearch", function() {
        e._asyncSearch()
      })
    }
    N.inherits(db, "Geocoder");
    z.extend(N.prototype, {
      getPoint: function(e, gf, i) {
        this._queryList.push({
          method: "getPoint",
          arguments: [e, gf, i]
        })
      },
      getLocation: function(e, gf, i) {
        this._queryList.push({
          method: "getLocation",
          arguments: [e, gf, i]
        })
      },
      toString: function() {
        return "Geocoder"
      }
    });
    function b9(e) {
      e = e || {};
      this.config = {
        timeout: e.timeout || 1000 * 10,
        maximumAge: e.maximumAge || 0,
        enableHighAccuracy: e.enableHighAccuracy || false,
        SDKLocation: e.SDKLocation || false
      };
      this._pendingCalls = [];
      var i = this;
      c9.load("othersearch", function() {
        var gf = i._pendingCalls[gg].length;
        for (var gg = 0; gg < gf; gg++) {
          i[call.method].apply(i, call.arguments)
        }
      })
    }
    z.extend(b9.prototype, {
      getCurrentPosition: function(e, i) {
        this._pendingCalls.push({
          method: "getCurrentPosition",
          arguments: arguments
        })
      },
      getStatus: function() {
        return BMAP_STATUS_UNKNOWN_LOCATION
      },
      enableSDKLocation: function() {
        if (eO()) {
          this.config.SDKLocation = true
        }
      },
      disableSDKLocation: function() {
        this.config.SDKLocation = false
      }
    });
    aT.Map = cl;
    aT.MapType = bv;
    aT.Point = fU;
    aT.Pixel = dh;
    aT.Size = c8;
    aT.Bounds = cX;
    aT.TileLayer = b7;
    aT.Copyright = cj;
    aT.Projection = aT.Project = dl;
    aT.RenderTypeUtils = aK;
    aT.Overlay = aS;
    aT.Label = eC;
    aT.Marker = al;
    aT.Icon = fF;
    aT.Polyline = Z;
    aT.PolylineMultipart = ee;
    aT.Polygon = fA;
    aT.InfoWindow = ac;
    aT.SimpleInfoWindow = f6;
    aT.Circle = cN;
    aT.GroundOverlay = c0;
    aT.Control = aJ;
    aT.NavigationControl = cB;
    aT.NavigationControl3D = dO;
    aT.CopyrightControl = cP;
    aT.ScaleControl = fK;
    aT.MapTypeControl = a6;
    aT.ZoomControl = bT;
    aT.LocationControl = a4;
    aT.LogoControl = U;
    aT.DistanceTool = fo;
    aT.ContextMenu = bD;
    aT.MenuItem = en;
    aT.OperationMask = df;
    aT.Animation = n;
    aT.ViewAnimation = b4;
    aT.Transitions = bK;
    aT.Event = aL;
    aT.trafficLayer = bC;
    aT.Geolocation = b9;
    aT.Geocoder = N;
    aT.verify();
    aT.apiLoad();
    window._groundOverlay = 1;
    z.extend(c0.prototype, {
      _draw: function() {
        if (!this.map) {
          return
        }
        if (!this.domElement) {
          this._addDom()
        }
        var gi = this.map.getZoom();
        if (gi < this._config.displayOnMinLevel || gi > this._config.displayOnMaxLevel) {
          this.hide();
          return
        }
        var gf = this._config.bounds.getSouthWest();
        var gh = this._config.bounds.getNorthEast();
        var gj = {
          x: this.map.pointToOverlayPixel(gf).x,
          y: this.map.pointToOverlayPixel(gh).y
        };
        var i = {
          x: this.map.pointToOverlayPixel(gh).x,
          y: this.map.pointToOverlayPixel(gf).y
        };
        var gg = i.x - gj.x;
        var e = i.y - gj.y;
        this.domElement.style.left = gj.x + "px";
        this.domElement.style.top = gj.y + "px";
        this.domElement.style.width = gg + "px";
        this.domElement.style.height = e + "px";
        this.show()
      },
      draw: function() {
        this._draw()
      },
      _addDom: function() {
        if (this.domElement) {
          return
        }
        this.domElement = document.createElement("div");
        var i = this.domElement.style;
        i.cssText = "position: absolute; -moz-user-select: none; overflow: hidden;";
        i.zIndex = aS.getZIndex(this._config.bounds.getSouthWest().lat);
        if (this._config.opacity || this._config.opacity === 0) {
          i.opacity = this._config.opacity;
          i.filter = "alpha(opacity=" + (parseInt(this._config.opacity, 10) * 100) + ")"
        }
        this._imgElement = document.createElement("img");
        this._imgElement.style.width = "100%";
        this._imgElement.style.webkitUserDrag = "none";
        if (this._config.stretch) {
          this._imgElement.style.height = "100%"
        }
        this.domElement.appendChild(this._imgElement);
        var e = this;
        this._imgElement.onload = function(gf) {
          e._imgElementWidth = e._imgElement.naturalWidth || e._imgElement.width;
          e._imgElementHeight = e._imgElement.naturalHeight || e._imgElement.height
        }
        ;
        if (this._config.imageURL) {
          this._imgElement.src = this._config.imageURL
        }
        this.map.getPanes().labelPane.appendChild(this.domElement);
        var e = this;
        z.on(this.domElement, "click", function(gf) {
          e.dispatchEvent(new aL("click"), gf)
        });
        z.on(this.domElement, "dblclick", function(gf) {
          e.dispatchEvent(new aL("dblclick"), gf)
        })
      },
      setBounds: function(e) {
        this._config.bounds = e;
        if (this.map) {
          this._draw()
        }
        this.domElement.style.zIndex = aS.getZIndex(this._config.bounds.getSouthWest().lat)
      },
      getBounds: function() {
        return this._config.bounds
      },
      setOpacity: function(e) {
        this._config.opacity = e;
        this.domElement.style.opacity = e;
        this.domElement.style.filter = "alpha(opacity=" + (parseInt(e, 10) * 100) + ")"
      },
      getOpacity: function(e) {
        return this._config.opacity
      },
      setImageURL: function(e) {
        this._config.imageURL = e;
        if (this._imgElement) {
          this._imgElement.src = e
        }
      },
      getImageURL: function() {
        return this._config.imageURL
      },
      setDisplayOnMinLevel: function(e) {
        this._config.displayOnMinLevel = e
      },
      getDisplayOnMinLevel: function() {
        return this._config.displayOnMinLevel
      },
      setDisplayOnMaxLevel: function(e) {
        this._config.displayOnMaxLevel = e
      },
      getDisplayOnMaxLevel: function() {
        return this._config.displayOnMaxLevel
      }
    });
    c0.prototype.setBounds = c0.prototype.setBounds;
    c0.prototype.getBounds = c0.prototype.getBounds;
    c0.prototype.setOpacity = c0.prototype.setOpacity;
    c0.prototype.getOpacity = c0.prototype.getOpacity;
    c0.prototype.setImageURL = c0.prototype.setImageURL;
    c0.prototype.getImageURL = c0.prototype.getImageURL;
    c0.prototype.setDispalyOnMinLevel = c0.prototype.setDispalyOnMinLevel;
    c0.prototype.setDispalyOnMaxLevel = c0.prototype.setDispalyOnMaxLevel;
    window._groundOverlay = 2;
    window._otherSearch = 1;
    function d4(i, e) {
      var gf = document.createElement("script");
      gf.onload = function(gg) {
        gf.parentNode.removeChild(gf);
        e && e(gg)
      }
      ;
      gf.src = i;
      document.getElementsByTagName("head")[0].appendChild(gf)
    }
    z.extend(b9.prototype, {
      getCurrentPosition: function(gj, gm) {
        var gk = this;
        var gf = false;
        gm = gm || {};
        gk.config = {
          timeout: gm.timeout || gk.config.timeout,
          maximumAge: gm.maximumAge || gk.config.maximumAge,
          enableHighAccuracy: gm.enableHighAccuracy || gk.config.enableHighAccuracy,
          SDKLocation: gm.SDKLocation || gk.config.SDKLocation
        };
        var e = setTimeout(function() {
          if (gf) {
            return
          }
          gk.statusCode = BMAP_STATUS_TIMEOUT;
          i(null)
        }, gk.config.timeout + 2000);
        var gh = function(gn) {
          if (gf) {
            return
          }
          if (e) {
            clearTimeout(e);
            e = null
          }
          gk.geolocationInfo = gn;
          if (BMapGL === null) {
            return
          }
          gj.apply(gk, arguments);
          gf = true
        };
        var i = function(gn) {
          if (gf) {
            return
          }
          if (e) {
            clearTimeout(e);
            e = null
          }
          gk.geolocationInfo = gn;
          gj.apply(gk, arguments);
          gf = true
        };
        function gl(gn) {
          if (a1.checkUsability()) {
            var go = new a1({
              timeout: gk.config.timeout,
              maximumAge: gk.config.maximumAge,
              enableHighAccuracy: gk.config.enableHighAccuracy
            });
            go.getCurrentPosition(function(gp) {
              gh(gp)
            }, function(gp) {
              switch (gp.errorCode) {
                case gp.ERR_PERMISSION_DENIED:
                case gp.ERR_INSECURE_ORIGINS:
                  gk.statusCode = BMAP_STATUS_PERMISSION_DENIED;
                  i(null);
                  break;
                case gp.ERR_POSITION_UNAVAILABLE:
                  gk.statusCode = BMAP_STATUS_UNKNOWN_LOCATION;
                  gn();
                  break;
                case gp.ERR_TIMEOUT:
                  gk.statusCode = BMAP_STATUS_TIMEOUT;
                  gn();
                  break
              }
            });
            return
          }
        }
        function gi(gn) {
          if (aq.checkUsability()) {
            var go = new aq({});
            go.getCurrentPosition(function(gp) {
              gh(gp)
            }, function(gp) {
              gn()
            });
            return
          }
          gn()
        }
        function gg(gn) {
          var go = new e3({
            SDKLocation: gk.config.SDKLocation
          });
          go.getCurrentPosition(function(gp) {
            gh(gp)
          }, function() {
            gn()
          })
        }
        gg(function() {
          gl(function() {
            gi(function() {
              gk.statusCode = BMAP_STATUS_UNKNOWN_LOCATION;
              i(null)
            })
          })
        })
      },
      getStatus: function() {
        if (this.geolocationInfo) {
          this.statusCode = BMAP_STATUS_SUCCESS
        }
        return this.statusCode
      }
    });
    b9.prototype.getCurrentPosition = b9.prototype.getCurrentPosition;
    b9.prototype.getStatus = b9.prototype.getStatus;
    function a1(e) {
      this.config = {
        timeout: e.timeout || 1000 * 5,
        maximumAge: e.maximumAge || 0,
        enableHighAccuracy: e.enableHighAccuracy || false
      }
    }
    a1.checkUsability = function() {
      if (navigator.geolocation) {
        return true
      }
      return false
    }
    ;
    z.extend(a1.prototype, {
      getCurrentPosition: function(e, i) {
        var gg = function(gi) {
          if (/BIDUBrowser/i.test(navigator.userAgent)) {
            var gl = new N();
            gl.getLocation(new fU(gi.coords["longitude"],gi.coords["latitude"]), function(gm) {
              var gn = new af();
              gn.accuracy = gi.coords["accuracy"] > 1999 ? 1999 : gi.coords["accuracy"];
              gn.longitude = gi.coords["longitude"];
              gn.latitude = gi.coords["latitude"];
              gn.point = new fU(gn.longitude,gn.latitude);
              if (gm.addressComponents) {
                if (gm.addressComponents["province"]) {
                  gn.address.province = gm.addressComponents["province"]
                }
                if (gm.addressComponents["city"]) {
                  gn.address.city = gm.addressComponents["city"]
                }
                if (gm.addressComponents["district"]) {
                  gn.address.district = gm.addressComponents["district"]
                }
                if (gm.addressComponents["street"]) {
                  gn.address.street = gm.addressComponents["street"]
                }
                if (gm.addressComponents["streetNumber"]) {
                  gn.address.street_number = gm.addressComponents["streetNumber"]
                }
              }
              e(gn)
            });
            return
          }
          var gk = Math.floor(Math.random() * 100000);
          var gj = "_cbk" + gk;
          window.baidu = window.baidu || {};
          window.baidu[gj] = function(gn) {
            var gm = {
              x: gn.x,
              y: gn.y
            };
            var gq = new fU(gm.x,gm.y);
            var gp = new af();
            gp.accuracy = gi.coords["accuracy"] > 1999 ? 1999 : gi.coords["accuracy"];
            gp.longitude = gq.lng;
            gp.latitude = gq.lat;
            gp.point = new fU(gq.lng,gq.lat);
            var go = new N();
            go.getLocation(gq, function(gr) {
              var gs = gr.addressComponents;
              if (gs) {
                if (gs.province) {
                  gp.address.province = gs.province
                }
                if (gs.city) {
                  gp.address.city = gs.city
                }
                if (gs.district) {
                  gp.address.district = gs.district
                }
                if (gs.street) {
                  gp.address.street = gs.street
                }
                if (gs.streetNumber) {
                  gp.address.street_number = gs.streetNumber
                }
              }
              e(gp)
            })
          }
          ;
          var gh = ["qt=coordtrans", "x=" + gi.coords["longitude"], "y=" + gi.coords["latitude"], "from=0", "to=4", "callback=baidu." + gj];
          d4(dW.apiHost + "/?" + gh.join("&"))
        };
        var gf = function(gh) {
          var gi = new l();
          if (gh.code === gh.PERMISSION_DENIED && gh.message.indexOf("secure") === -1) {
            gi.errorCode = gi.ERR_PERMISSION_DENIED;
            gi.errorMessage = "用户拒绝定位请求"
          }
          if (gh.code === gh.POSITION_UNAVAILABLE) {
            gi.errorCode = gi.ERR_POSITION_UNAVAILABLE;
            gi.errorMessage = "定位不可用"
          }
          if (gh.message.indexOf("secure") > -1) {
            gi.errorCode = gi.ERR_INSECURE_ORIGINS;
            gi.errorMessage = "定位请求需要https环境"
          }
          if (gh.code === gh.TIMEOUT) {
            gi.errorCode = gi.ERR_TIMEOUT;
            gi.errorMessage = "定位超时"
          }
          i(gi)
        };
        navigator.geolocation.getCurrentPosition(gg, gf, {
          enableHighAccuracy: this.config.enableHighAccuracy,
          timeout: this.config.timeout,
          maximumAge: this.config.maximumAge
        })
      }
    });
    function aq(e) {
      this.config = {
        extensions: 1,
        coord: "bd09ll",
        coding: "utf-8",
        callback_type: "jsonp"
      }
    }
    aq.checkUsability = function() {
      return true
    }
    ;
    z.extend(aq.prototype, {
      getCurrentPosition: function(gf, gh) {
        var gi = Math.floor(Math.random() * 100000);
        var gg = "_cbk" + gi;
        window[gg] = function(gj) {
          if (gj.result) {
            if (gj.result["error"] === 161) {
              if (gj.content && gj.content["location"]) {
                var gk = new af();
                gk.accuracy = gj.content["radius"];
                gk.longitude = gj.content["location"]["lng"];
                gk.latitude = gj.content["location"]["lat"];
                gk.point = new fU(gj.content["location"]["lng"],gj.content["location"]["lat"])
              }
              if (gj.content && gj.content["address_component"]) {
                if (gj.content["address_component"]["country"]) {
                  gk.address.country = gj.content["address_component"]["country"]
                }
                if (gj.content["address_component"]["province"]) {
                  gk.address.province = gj.content["address_component"]["province"]
                }
                if (gj.content["address_component"]["city"]) {
                  gk.address.city = gj.content["address_component"]["city"]
                }
                if (gj.content["address_component"]["district"]) {
                  gk.address.district = gj.content["address_component"]["district"]
                }
                if (gj.content["address_component"]["street"]) {
                  gk.address.street = gj.content["address_component"]["street"]
                }
                if (gj.content["address_component"]["street_number"]) {
                  gk.address.street_number = gj.content["address_component"]["street_number"]
                }
              }
              gf(gk);
              return
            } else {
              if (gj.result["error"] === 0) {
                if (gj.content && gj.content["location"]) {
                  var gk = new af();
                  gk.longitude = gj.content["location"]["lng"];
                  gk.latitude = gj.content["location"]["lat"];
                  gk.point = new fU(gj.content["location"]["lng"],gj.content["location"]["lat"])
                }
                if (gj.content && gj.content["address_component"]) {
                  if (gj.content["address_component"]["country"]) {
                    gk.address.country = gj.content["address_component"]["country"]
                  }
                  if (gj.content["address_component"]["province"]) {
                    gk.address.province = gj.content["address_component"]["province"]
                  }
                  if (gj.content["address_component"]["city"]) {
                    gk.address.city = gj.content["address_component"]["city"]
                  }
                  if (gj.content["address_component"]["district"]) {
                    gk.address.district = gj.content["address_component"]["district"]
                  }
                  if (gj.content["address_component"]["street"]) {
                    gk.address.street = gj.content["address_component"]["street"]
                  }
                  if (gj.content["address_component"]["street_number"]) {
                    gk.address.street_number = gj.content["address_component"]["street_number"]
                  }
                }
                gf(gk);
                return
              }
            }
          }
          var gl = new l();
          gl.errorCode = gl.ERR_POSITION_UNAVAILABLE;
          gl.errorMessage = "请求IP地理定位信息失败";
          gh(gl)
        }
        ;
        var i = "pc";
        if (eO()) {
          i = "mb"
        }
        var e = {
          qterm: i,
          coding: this.config.coding,
          coord: this.config.coord,
          extensions: this.config.extensions,
          callback_type: this.config.callback_type,
          ak: eW,
          qt: "hip",
          v: "3.0"
        };
        bV.request(function(gk, gj) {
          window[gg](gk)
        }, e)
      }
    });
    function e3(e) {
      this.config = {
        SDKLocation: e.SDKLocation || false
      }
    }
    z.extend(e3.prototype, {
      getCurrentPosition: function(i, gg) {
        var gh = Math.floor(Math.random() * 100000);
        var gf = "_cbk" + gh;
        window.baidu = window.baidu || {};
        window.baidu[gf] = function(gj) {
          gj = JSON.parse(gj);
          if (gj && gj.errorcode === 1) {
            gh = Math.floor(Math.random() * 100000);
            gf = "_cbk" + gh;
            window.baidu = window.baidu || {};
            window.baidu[gf] = function(gl) {
              var gk = {
                x: gl.x,
                y: gl.y
              };
              var go = new fU(gk.x,gk.y);
              var gn = new af();
              gn.longitude = go.lng;
              gn.latitude = go.lat;
              gn.point = new fU(go.lng,go.lat);
              var gm = new N();
              gm.getLocation(go, function(gp) {
                var gq = gp.addressComponents;
                if (gq) {
                  if (gq.province) {
                    gn.address.province = gq.province
                  }
                  if (gq.city) {
                    gn.address.city = gq.city
                  }
                  if (gq.district) {
                    gn.address.district = gq.district
                  }
                  if (gq.street) {
                    gn.address.street = gq.street
                  }
                  if (gq.streetNumber) {
                    gn.address.street_number = gq.streetNumber
                  }
                }
                i(gn)
              })
            }
            ;
            var gi = ["qt=coordtrans", "x=" + gj.longitude, "y=" + gj.latitude, "from=0", "to=4", "callback=baidu." + gf];
            d4(dW.apiHost + "/?" + gi.join("&"))
          } else {
            gg()
          }
        }
        ;
        if (this.config.SDKLocation && window.BaiduLocAssistant && window.BaiduLocAssistant.sendMessage) {
          var e = {
            action: "requestLoc",
            callback: "baidu." + gf
          };
          window.BaiduLocAssistant.sendMessage(JSON.stringify(e))
        } else {
          gg()
        }
      }
    });
    function af() {
      this.accuracy = null;
      this.altitude = null;
      this.altitudeAccuracy = null;
      this.heading = null;
      this.latitude = null;
      this.longitude = null;
      this.speed = null;
      this.timestamp = null;
      this.point = null;
      this.address = {
        country: "",
        city: "",
        city_code: 0,
        district: "",
        province: "",
        street: "",
        street_number: ""
      }
    }
    function l(e) {
      this.errorType = "geolocation";
      this.errorMessage = e;
      this.errorCode = 1;
      this.ERR_PERMISSION_DENIED = 1;
      this.ERR_POSITION_UNAVAILABLE = 2;
      this.ERR_TIMEOUT = 3;
      this.ERR_INSECURE_ORIGINS
    }
    z.extend(N.prototype, {
      _asyncSearch: function() {
        for (var gf = 0, e = this._queryList.length; gf < e; gf++) {
          var gg = this._queryList[gf];
          this[gg.method].apply(this, gg.arguments)
        }
        delete this._queryList
      },
      getPoint: function(e, gh, gg) {
        var gf = this;
        gg = gg || "北京市";
        var i = /^[ \s]*$/;
        if (i.test(e)) {
          return
        }
        bV.request(function(gs) {
          if (gs && gs.result && gs.result["type"] == bZ) {
            var gu = gs.result;
            var gn = gs.content;
            var gr = null;
            var gt = null;
            if (gu) {
              if (gu.error == 0 && gn) {
                var gp = gn.coord["x"];
                var go = gn.coord["y"];
                var gj = gn.cn;
                var gk = gn.sc;
                var gq = gn.wd;
                var gl = gn.prc;
                var gm = gn.fuzzy_score;
                var gi = gn.catalog;
                gr = new fU(gp,go);
                gr = dl.convertMC2LL(gr);
                gt = {
                  city: gj,
                  citycode: gk,
                  address: gq,
                  precise: gl,
                  confidence: gm,
                  level: gi
                }
              }
            }
            gh && gh(gr, gt)
          }
        }, {
          qt: f3,
          wd: e,
          cn: gg
        })
      },
      getLocation: function(i, gk, gh) {
        if (!(i instanceof fU) && gk) {
          gk(null);
          return
        }
        var gg = this;
        var i = dl.convertLL2MC(i);
        var e = i.lng;
        var gj = i.lat;
        var gh = gh || {};
        var gf = gh.poiRadius || 100;
        var gi = gh.numPois || 10;
        bV.request(function(gB) {
          var go = null;
          if (gB && gB.result && gB.result["type"] == eZ) {
            var gr = gB.result;
            var gy = gB.content;
            var gq;
            var gs = {};
            var gt = [];
            var gv;
            if (gr.error == 0 && gy) {
              var gC = gy.address_detail;
              var gz = gC.city;
              if (gC) {
                gs.streetNumber = gC.street_number;
                gs.street = gC.street;
                gs.district = gC.district;
                gs.city = gz;
                gs.province = gC.province
              }
              gv = gy.point;
              var gx = new fU(gv.x,gv.y);
              gx = dl.convertMC2LL(gx);
              var gn = gy.surround_poi;
              if (gn && gn.length) {
                for (var gA = 0, gw = gn.length; gA < gw; gA++) {
                  var gm = {}
                    , gp = gn[gA];
                  gm.title = gp.name;
                  gm.uid = gp.uid;
                  var gu = new fU(gp.point["x"],gp.point["y"]);
                  gu = dl.convertMC2LL(gu);
                  gm.point = gu;
                  gm.city = gz;
                  gm._poiType = gp.poiType;
                  gm.type = BMAP_POI_TYPE_NORMAL;
                  gm.address = gp.addr;
                  gm.postcode = gp.zip || null;
                  gm.phoneNumber = gp.tel || null;
                  var gl = gm._poiType;
                  if (gl.length !== 0) {
                    gm.tags = gl.split(",")
                  }
                  gt.push(gm)
                }
              }
              go = {
                point: gx,
                address: gy.address,
                addressComponents: gs,
                surroundingPois: gt,
                business: gy.business
              }
            }
          }
          gk && gk(go)
        }, {
          qt: ey,
          x: e,
          y: gj,
          dis_poi: gf,
          poi_num: gi,
          latest_admin: "1"
        })
      }
    });
    window._otherSearch = 2
  }
)(BMapGL, "BMapGL");
