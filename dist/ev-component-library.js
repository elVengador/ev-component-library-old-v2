import { jsxs as ae, jsx as N } from "react/jsx-runtime";
import fe, { useState as ue, useRef as re, useEffect as ce, useCallback as pe, useContext as je, createContext as qn, useMemo as tt, forwardRef as Gn } from "react";
import { twMerge as B } from "tailwind-merge";
var Xa = {
  prefix: "fas",
  iconName: "quote-right",
  icon: [448, 512, [8221, "quote-right-alt"], "f10e", "M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"]
}, Xn = {
  prefix: "fas",
  iconName: "link",
  icon: [640, 512, [128279, "chain"], "f0c1", "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]
}, Qa = {
  prefix: "fas",
  iconName: "quote-left",
  icon: [448, 512, [8220, "quote-left-alt"], "f10d", "M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"]
};
function Qr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qr(Object(r), !0).forEach(function(n) {
      Z(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _t(e) {
  "@babel/helpers - typeof";
  return _t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _t(e);
}
function Ja(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Jr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Za(e, t, r) {
  return t && Jr(e.prototype, t), r && Jr(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Z(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Mr(e, t) {
  return ti(e) || ni(e, t) || Qn(e, t) || ii();
}
function ut(e) {
  return ei(e) || ri(e) || Qn(e) || ai();
}
function ei(e) {
  if (Array.isArray(e))
    return ur(e);
}
function ti(e) {
  if (Array.isArray(e))
    return e;
}
function ri(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function ni(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], a = !0, i = !1, o, s;
    try {
      for (r = r.call(e); !(a = (o = r.next()).done) && (n.push(o.value), !(t && n.length === t)); a = !0)
        ;
    } catch (l) {
      i = !0, s = l;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return n;
  }
}
function Qn(e, t) {
  if (e) {
    if (typeof e == "string")
      return ur(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ur(e, t);
  }
}
function ur(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function ai() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ii() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Zr = function() {
}, _r = {}, Jn = {}, Zn = null, ea = {
  mark: Zr,
  measure: Zr
};
try {
  typeof window < "u" && (_r = window), typeof document < "u" && (Jn = document), typeof MutationObserver < "u" && (Zn = MutationObserver), typeof performance < "u" && (ea = performance);
} catch {
}
var oi = _r.navigator || {}, en = oi.userAgent, tn = en === void 0 ? "" : en, Te = _r, G = Jn, rn = Zn, bt = ea;
Te.document;
var we = !!G.documentElement && !!G.head && typeof G.addEventListener == "function" && typeof G.createElement == "function", ta = ~tn.indexOf("MSIE") || ~tn.indexOf("Trident/"), gt, yt, ht, xt, wt, ye = "___FONT_AWESOME___", dr = 16, ra = "fa", na = "svg-inline--fa", Le = "data-fa-i2svg", vr = "data-fa-pseudo-element", si = "data-fa-pseudo-element-pending", Lr = "data-prefix", Nr = "data-icon", nn = "fontawesome-i2svg", li = "async", fi = ["HTML", "HEAD", "STYLE", "SCRIPT"], aa = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), q = "classic", J = "sharp", Rr = [q, J];
function dt(e) {
  return new Proxy(e, {
    get: function(r, n) {
      return n in r ? r[n] : r[q];
    }
  });
}
var it = dt((gt = {}, Z(gt, q, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  fakd: "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), Z(gt, J, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), gt)), ot = dt((yt = {}, Z(yt, q, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), Z(yt, J, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), yt)), st = dt((ht = {}, Z(ht, q, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), Z(ht, J, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), ht)), ci = dt((xt = {}, Z(xt, q, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), Z(xt, J, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), xt)), ui = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, ia = "fa-layers-text", di = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, vi = dt((wt = {}, Z(wt, q, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), Z(wt, J, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), wt)), oa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mi = oa.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), pi = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ie = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, lt = /* @__PURE__ */ new Set();
Object.keys(ot[q]).map(lt.add.bind(lt));
Object.keys(ot[J]).map(lt.add.bind(lt));
var bi = [].concat(Rr, ut(lt), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ie.GROUP, Ie.SWAP_OPACITY, Ie.PRIMARY, Ie.SECONDARY]).concat(oa.map(function(e) {
  return "".concat(e, "x");
})).concat(mi.map(function(e) {
  return "w-".concat(e);
})), rt = Te.FontAwesomeConfig || {};
function gi(e) {
  var t = G.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function yi(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (G && typeof G.querySelector == "function") {
  var hi = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  hi.forEach(function(e) {
    var t = Mr(e, 2), r = t[0], n = t[1], a = yi(gi(r));
    a != null && (rt[n] = a);
  });
}
var sa = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: ra,
  replacementClass: na,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
rt.familyPrefix && (rt.cssPrefix = rt.familyPrefix);
var Be = $($({}, sa), rt);
Be.autoReplaceSvg || (Be.observeMutations = !1);
var T = {};
Object.keys(sa).forEach(function(e) {
  Object.defineProperty(T, e, {
    enumerable: !0,
    set: function(r) {
      Be[e] = r, nt.forEach(function(n) {
        return n(T);
      });
    },
    get: function() {
      return Be[e];
    }
  });
});
Object.defineProperty(T, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    Be.cssPrefix = t, nt.forEach(function(r) {
      return r(T);
    });
  },
  get: function() {
    return Be.cssPrefix;
  }
});
Te.FontAwesomeConfig = T;
var nt = [];
function xi(e) {
  return nt.push(e), function() {
    nt.splice(nt.indexOf(e), 1);
  };
}
var $e = dr, me = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function wi(e) {
  if (!(!e || !we)) {
    var t = G.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var r = G.head.childNodes, n = null, a = r.length - 1; a > -1; a--) {
      var i = r[a], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (n = i);
    }
    return G.head.insertBefore(t, n), e;
  }
}
var $i = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ft() {
  for (var e = 12, t = ""; e-- > 0; )
    t += $i[Math.random() * 62 | 0];
  return t;
}
function Ge(e) {
  for (var t = [], r = (e || []).length >>> 0; r--; )
    t[r] = e[r];
  return t;
}
function Dr(e) {
  return e.classList ? Ge(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function la(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Pi(e) {
  return Object.keys(e || {}).reduce(function(t, r) {
    return t + "".concat(r, '="').concat(la(e[r]), '" ');
  }, "").trim();
}
function Vt(e) {
  return Object.keys(e || {}).reduce(function(t, r) {
    return t + "".concat(r, ": ").concat(e[r].trim(), ";");
  }, "");
}
function jr(e) {
  return e.size !== me.size || e.x !== me.x || e.y !== me.y || e.rotate !== me.rotate || e.flipX || e.flipY;
}
function ki(e) {
  var t = e.transform, r = e.containerWidth, n = e.iconWidth, a = {
    transform: "translate(".concat(r / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(i, " ").concat(o, " ").concat(s)
  }, c = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: l,
    path: c
  };
}
function Ei(e) {
  var t = e.transform, r = e.width, n = r === void 0 ? dr : r, a = e.height, i = a === void 0 ? dr : a, o = e.startCentered, s = o === void 0 ? !1 : o, l = "";
  return s && ta ? l += "translate(".concat(t.x / $e - n / 2, "em, ").concat(t.y / $e - i / 2, "em) ") : s ? l += "translate(calc(-50% + ".concat(t.x / $e, "em), calc(-50% + ").concat(t.y / $e, "em)) ") : l += "translate(".concat(t.x / $e, "em, ").concat(t.y / $e, "em) "), l += "scale(".concat(t.size / $e * (t.flipX ? -1 : 1), ", ").concat(t.size / $e * (t.flipY ? -1 : 1), ") "), l += "rotate(".concat(t.rotate, "deg) "), l;
}
var Ti = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function fa() {
  var e = ra, t = na, r = T.cssPrefix, n = T.replacementClass, a = Ti;
  if (r !== e || n !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    a = a.replace(i, ".".concat(r, "-")).replace(o, "--".concat(r, "-")).replace(s, ".".concat(n));
  }
  return a;
}
var an = !1;
function Gt() {
  T.autoAddCss && !an && (wi(fa()), an = !0);
}
var Si = {
  mixout: function() {
    return {
      dom: {
        css: fa,
        insertCss: Gt
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Gt();
      },
      beforeI2svg: function() {
        Gt();
      }
    };
  }
}, he = Te || {};
he[ye] || (he[ye] = {});
he[ye].styles || (he[ye].styles = {});
he[ye].hooks || (he[ye].hooks = {});
he[ye].shims || (he[ye].shims = []);
var de = he[ye], ca = [], Oi = function e() {
  G.removeEventListener("DOMContentLoaded", e), Lt = 1, ca.map(function(t) {
    return t();
  });
}, Lt = !1;
we && (Lt = (G.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(G.readyState), Lt || G.addEventListener("DOMContentLoaded", Oi));
function Ai(e) {
  we && (Lt ? setTimeout(e, 0) : ca.push(e));
}
function vt(e) {
  var t = e.tag, r = e.attributes, n = r === void 0 ? {} : r, a = e.children, i = a === void 0 ? [] : a;
  return typeof e == "string" ? la(e) : "<".concat(t, " ").concat(Pi(n), ">").concat(i.map(vt).join(""), "</").concat(t, ">");
}
function on(e, t, r) {
  if (e && e[t] && e[t][r])
    return {
      prefix: t,
      iconName: r,
      icon: e[t][r]
    };
}
var Ci = function(t, r) {
  return function(n, a, i, o) {
    return t.call(r, n, a, i, o);
  };
}, Xt = function(t, r, n, a) {
  var i = Object.keys(t), o = i.length, s = a !== void 0 ? Ci(r, a) : r, l, c, u;
  for (n === void 0 ? (l = 1, u = t[i[0]]) : (l = 0, u = n); l < o; l++)
    c = i[l], u = s(u, t[c], c, t);
  return u;
};
function Ii(e) {
  for (var t = [], r = 0, n = e.length; r < n; ) {
    var a = e.charCodeAt(r++);
    if (a >= 55296 && a <= 56319 && r < n) {
      var i = e.charCodeAt(r++);
      (i & 64512) == 56320 ? t.push(((a & 1023) << 10) + (i & 1023) + 65536) : (t.push(a), r--);
    } else
      t.push(a);
  }
  return t;
}
function mr(e) {
  var t = Ii(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Mi(e, t) {
  var r = e.length, n = e.charCodeAt(t), a;
  return n >= 55296 && n <= 56319 && r > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (n - 55296) * 1024 + a - 56320 + 65536 : n;
}
function sn(e) {
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r], a = !!n.icon;
    return a ? t[n.iconName] = n.icon : t[r] = n, t;
  }, {});
}
function pr(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = r.skipHooks, a = n === void 0 ? !1 : n, i = sn(t);
  typeof de.hooks.addPack == "function" && !a ? de.hooks.addPack(e, sn(t)) : de.styles[e] = $($({}, de.styles[e] || {}), i), e === "fas" && pr("fa", t);
}
var $t, Pt, kt, Ve = de.styles, _i = de.shims, Li = ($t = {}, Z($t, q, Object.values(st[q])), Z($t, J, Object.values(st[J])), $t), Fr = null, ua = {}, da = {}, va = {}, ma = {}, pa = {}, Ni = (Pt = {}, Z(Pt, q, Object.keys(it[q])), Z(Pt, J, Object.keys(it[J])), Pt);
function Ri(e) {
  return ~bi.indexOf(e);
}
function Di(e, t) {
  var r = t.split("-"), n = r[0], a = r.slice(1).join("-");
  return n === e && a !== "" && !Ri(a) ? a : null;
}
var ba = function() {
  var t = function(i) {
    return Xt(Ve, function(o, s, l) {
      return o[l] = Xt(s, i, {}), o;
    }, {});
  };
  ua = t(function(a, i, o) {
    if (i[3] && (a[i[3]] = o), i[2]) {
      var s = i[2].filter(function(l) {
        return typeof l == "number";
      });
      s.forEach(function(l) {
        a[l.toString(16)] = o;
      });
    }
    return a;
  }), da = t(function(a, i, o) {
    if (a[o] = o, i[2]) {
      var s = i[2].filter(function(l) {
        return typeof l == "string";
      });
      s.forEach(function(l) {
        a[l] = o;
      });
    }
    return a;
  }), pa = t(function(a, i, o) {
    var s = i[2];
    return a[o] = o, s.forEach(function(l) {
      a[l] = o;
    }), a;
  });
  var r = "far" in Ve || T.autoFetchSvg, n = Xt(_i, function(a, i) {
    var o = i[0], s = i[1], l = i[2];
    return s === "far" && !r && (s = "fas"), typeof o == "string" && (a.names[o] = {
      prefix: s,
      iconName: l
    }), typeof o == "number" && (a.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: l
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  va = n.names, ma = n.unicodes, Fr = Ht(T.styleDefault, {
    family: T.familyDefault
  });
};
xi(function(e) {
  Fr = Ht(e.styleDefault, {
    family: T.familyDefault
  });
});
ba();
function zr(e, t) {
  return (ua[e] || {})[t];
}
function ji(e, t) {
  return (da[e] || {})[t];
}
function Me(e, t) {
  return (pa[e] || {})[t];
}
function ga(e) {
  return va[e] || {
    prefix: null,
    iconName: null
  };
}
function Fi(e) {
  var t = ma[e], r = zr("fas", e);
  return t || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Se() {
  return Fr;
}
var Yr = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Ht(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.family, n = r === void 0 ? q : r, a = it[n][e], i = ot[n][e] || ot[n][a], o = e in de.styles ? e : null;
  return i || o || null;
}
var ln = (kt = {}, Z(kt, q, Object.keys(st[q])), Z(kt, J, Object.keys(st[J])), kt);
function Ut(e) {
  var t, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.skipLookups, a = n === void 0 ? !1 : n, i = (t = {}, Z(t, q, "".concat(T.cssPrefix, "-").concat(q)), Z(t, J, "".concat(T.cssPrefix, "-").concat(J)), t), o = null, s = q;
  (e.includes(i[q]) || e.some(function(c) {
    return ln[q].includes(c);
  })) && (s = q), (e.includes(i[J]) || e.some(function(c) {
    return ln[J].includes(c);
  })) && (s = J);
  var l = e.reduce(function(c, u) {
    var d = Di(T.cssPrefix, u);
    if (Ve[u] ? (u = Li[s].includes(u) ? ci[s][u] : u, o = u, c.prefix = u) : Ni[s].indexOf(u) > -1 ? (o = u, c.prefix = Ht(u, {
      family: s
    })) : d ? c.iconName = d : u !== T.replacementClass && u !== i[q] && u !== i[J] && c.rest.push(u), !a && c.prefix && c.iconName) {
      var p = o === "fa" ? ga(c.iconName) : {}, b = Me(c.prefix, c.iconName);
      p.prefix && (o = null), c.iconName = p.iconName || b || c.iconName, c.prefix = p.prefix || c.prefix, c.prefix === "far" && !Ve.far && Ve.fas && !T.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, Yr());
  return (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"), !l.prefix && s === J && (Ve.fass || T.autoFetchSvg) && (l.prefix = "fass", l.iconName = Me(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || o === "fa") && (l.prefix = Se() || "fas"), l;
}
var zi = /* @__PURE__ */ function() {
  function e() {
    Ja(this, e), this.definitions = {};
  }
  return Za(e, [{
    key: "add",
    value: function() {
      for (var r = this, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
        a[i] = arguments[i];
      var o = a.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        r.definitions[s] = $($({}, r.definitions[s] || {}), o[s]), pr(s, o[s]);
        var l = st[q][s];
        l && pr(l, o[s]), ba();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(r, n) {
      var a = n.prefix && n.iconName && n.icon ? {
        0: n
      } : n;
      return Object.keys(a).map(function(i) {
        var o = a[i], s = o.prefix, l = o.iconName, c = o.icon, u = c[2];
        r[s] || (r[s] = {}), u.length > 0 && u.forEach(function(d) {
          typeof d == "string" && (r[s][d] = c);
        }), r[s][l] = c;
      }), r;
    }
  }]), e;
}(), fn = [], He = {}, We = {}, Yi = Object.keys(We);
function Vi(e, t) {
  var r = t.mixoutsTo;
  return fn = e, He = {}, Object.keys(We).forEach(function(n) {
    Yi.indexOf(n) === -1 && delete We[n];
  }), fn.forEach(function(n) {
    var a = n.mixout ? n.mixout() : {};
    if (Object.keys(a).forEach(function(o) {
      typeof a[o] == "function" && (r[o] = a[o]), _t(a[o]) === "object" && Object.keys(a[o]).forEach(function(s) {
        r[o] || (r[o] = {}), r[o][s] = a[o][s];
      });
    }), n.hooks) {
      var i = n.hooks();
      Object.keys(i).forEach(function(o) {
        He[o] || (He[o] = []), He[o].push(i[o]);
      });
    }
    n.provides && n.provides(We);
  }), r;
}
function br(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    n[a - 2] = arguments[a];
  var i = He[e] || [];
  return i.forEach(function(o) {
    t = o.apply(null, [t].concat(n));
  }), t;
}
function Ne(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var a = He[e] || [];
  a.forEach(function(i) {
    i.apply(null, r);
  });
}
function xe() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return We[e] ? We[e].apply(null, t) : void 0;
}
function gr(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, r = e.prefix || Se();
  if (t)
    return t = Me(r, t) || t, on(ya.definitions, r, t) || on(de.styles, r, t);
}
var ya = new zi(), Hi = function() {
  T.autoReplaceSvg = !1, T.observeMutations = !1, Ne("noAuto");
}, Ui = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return we ? (Ne("beforeI2svg", t), xe("pseudoElements2svg", t), xe("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.autoReplaceSvgRoot;
    T.autoReplaceSvg === !1 && (T.autoReplaceSvg = !0), T.observeMutations = !0, Ai(function() {
      Wi({
        autoReplaceSvgRoot: r
      }), Ne("watch", t);
    });
  }
}, Ki = {
  icon: function(t) {
    if (t === null)
      return null;
    if (_t(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: Me(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var r = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], n = Ht(t[0]);
      return {
        prefix: n,
        iconName: Me(n, r) || r
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(T.cssPrefix, "-")) > -1 || t.match(ui))) {
      var a = Ut(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || Se(),
        iconName: Me(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof t == "string") {
      var i = Se();
      return {
        prefix: i,
        iconName: Me(i, t) || t
      };
    }
  }
}, ie = {
  noAuto: Hi,
  config: T,
  dom: Ui,
  parse: Ki,
  library: ya,
  findIconDefinition: gr,
  toHtml: vt
}, Wi = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.autoReplaceSvgRoot, n = r === void 0 ? G : r;
  (Object.keys(de.styles).length > 0 || T.autoFetchSvg) && we && T.autoReplaceSvg && ie.dom.i2svg({
    node: n
  });
};
function Kt(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(n) {
        return vt(n);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (we) {
        var n = G.createElement("div");
        return n.innerHTML = e.html, n.children;
      }
    }
  }), e;
}
function Bi(e) {
  var t = e.children, r = e.main, n = e.mask, a = e.attributes, i = e.styles, o = e.transform;
  if (jr(o) && r.found && !n.found) {
    var s = r.width, l = r.height, c = {
      x: s / l / 2,
      y: 0.5
    };
    a.style = Vt($($({}, i), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function qi(e) {
  var t = e.prefix, r = e.iconName, n = e.children, a = e.attributes, i = e.symbol, o = i === !0 ? "".concat(t, "-").concat(T.cssPrefix, "-").concat(r) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: $($({}, a), {}, {
        id: o
      }),
      children: n
    }]
  }];
}
function Vr(e) {
  var t = e.icons, r = t.main, n = t.mask, a = e.prefix, i = e.iconName, o = e.transform, s = e.symbol, l = e.title, c = e.maskId, u = e.titleId, d = e.extra, p = e.watchable, b = p === void 0 ? !1 : p, S = n.found ? n : r, x = S.width, w = S.height, C = a === "fak", I = [T.replacementClass, i ? "".concat(T.cssPrefix, "-").concat(i) : ""].filter(function(A) {
    return d.classes.indexOf(A) === -1;
  }).filter(function(A) {
    return A !== "" || !!A;
  }).concat(d.classes).join(" "), E = {
    children: [],
    attributes: $($({}, d.attributes), {}, {
      "data-prefix": a,
      "data-icon": i,
      class: I,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(x, " ").concat(w)
    })
  }, O = C && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(x / w * 16 * 0.0625, "em")
  } : {};
  b && (E.attributes[Le] = ""), l && (E.children.push({
    tag: "title",
    attributes: {
      id: E.attributes["aria-labelledby"] || "title-".concat(u || ft())
    },
    children: [l]
  }), delete E.attributes.title);
  var v = $($({}, E), {}, {
    prefix: a,
    iconName: i,
    main: r,
    mask: n,
    maskId: c,
    transform: o,
    symbol: s,
    styles: $($({}, O), d.styles)
  }), Q = n.found && r.found ? xe("generateAbstractMask", v) || {
    children: [],
    attributes: {}
  } : xe("generateAbstractIcon", v) || {
    children: [],
    attributes: {}
  }, ee = Q.children, f = Q.attributes;
  return v.children = ee, v.attributes = f, s ? qi(v) : Bi(v);
}
function cn(e) {
  var t = e.content, r = e.width, n = e.height, a = e.transform, i = e.title, o = e.extra, s = e.watchable, l = s === void 0 ? !1 : s, c = $($($({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  l && (c[Le] = "");
  var u = $({}, o.styles);
  jr(a) && (u.transform = Ei({
    transform: a,
    startCentered: !0,
    width: r,
    height: n
  }), u["-webkit-transform"] = u.transform);
  var d = Vt(u);
  d.length > 0 && (c.style = d);
  var p = [];
  return p.push({
    tag: "span",
    attributes: c,
    children: [t]
  }), i && p.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), p;
}
function Gi(e) {
  var t = e.content, r = e.title, n = e.extra, a = $($($({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), i = Vt(n.styles);
  i.length > 0 && (a.style = i);
  var o = [];
  return o.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), r && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [r]
  }), o;
}
var Qt = de.styles;
function yr(e) {
  var t = e[0], r = e[1], n = e.slice(4), a = Mr(n, 1), i = a[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(T.cssPrefix, "-").concat(Ie.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(T.cssPrefix, "-").concat(Ie.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(T.cssPrefix, "-").concat(Ie.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: t,
    height: r,
    icon: o
  };
}
var Xi = {
  found: !1,
  width: 512,
  height: 512
};
function Qi(e, t) {
  !aa && !T.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function hr(e, t) {
  var r = t;
  return t === "fa" && T.styleDefault !== null && (t = Se()), new Promise(function(n, a) {
    if (xe("missingIconAbstract"), r === "fa") {
      var i = ga(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && Qt[t] && Qt[t][e]) {
      var o = Qt[t][e];
      return n(yr(o));
    }
    Qi(e, t), n($($({}, Xi), {}, {
      icon: T.showMissingIcons && e ? xe("missingIconAbstract") || {} : {}
    }));
  });
}
var un = function() {
}, xr = T.measurePerformance && bt && bt.mark && bt.measure ? bt : {
  mark: un,
  measure: un
}, et = 'FA "6.5.1"', Ji = function(t) {
  return xr.mark("".concat(et, " ").concat(t, " begins")), function() {
    return ha(t);
  };
}, ha = function(t) {
  xr.mark("".concat(et, " ").concat(t, " ends")), xr.measure("".concat(et, " ").concat(t), "".concat(et, " ").concat(t, " begins"), "".concat(et, " ").concat(t, " ends"));
}, Hr = {
  begin: Ji,
  end: ha
}, Ct = function() {
};
function dn(e) {
  var t = e.getAttribute ? e.getAttribute(Le) : null;
  return typeof t == "string";
}
function Zi(e) {
  var t = e.getAttribute ? e.getAttribute(Lr) : null, r = e.getAttribute ? e.getAttribute(Nr) : null;
  return t && r;
}
function eo(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(T.replacementClass);
}
function to() {
  if (T.autoReplaceSvg === !0)
    return It.replace;
  var e = It[T.autoReplaceSvg];
  return e || It.replace;
}
function ro(e) {
  return G.createElementNS("http://www.w3.org/2000/svg", e);
}
function no(e) {
  return G.createElement(e);
}
function xa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.ceFn, n = r === void 0 ? e.tag === "svg" ? ro : no : r;
  if (typeof e == "string")
    return G.createTextNode(e);
  var a = n(e.tag);
  Object.keys(e.attributes || []).forEach(function(o) {
    a.setAttribute(o, e.attributes[o]);
  });
  var i = e.children || [];
  return i.forEach(function(o) {
    a.appendChild(xa(o, {
      ceFn: n
    }));
  }), a;
}
function ao(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var It = {
  replace: function(t) {
    var r = t[0];
    if (r.parentNode)
      if (t[1].forEach(function(a) {
        r.parentNode.insertBefore(xa(a), r);
      }), r.getAttribute(Le) === null && T.keepOriginalSource) {
        var n = G.createComment(ao(r));
        r.parentNode.replaceChild(n, r);
      } else
        r.remove();
  },
  nest: function(t) {
    var r = t[0], n = t[1];
    if (~Dr(r).indexOf(T.replacementClass))
      return It.replace(t);
    var a = new RegExp("".concat(T.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var i = n[0].attributes.class.split(" ").reduce(function(s, l) {
        return l === T.replacementClass || l.match(a) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? r.removeAttribute("class") : r.setAttribute("class", i.toNode.join(" "));
    }
    var o = n.map(function(s) {
      return vt(s);
    }).join(`
`);
    r.setAttribute(Le, ""), r.innerHTML = o;
  }
};
function vn(e) {
  e();
}
function wa(e, t) {
  var r = typeof t == "function" ? t : Ct;
  if (e.length === 0)
    r();
  else {
    var n = vn;
    T.mutateApproach === li && (n = Te.requestAnimationFrame || vn), n(function() {
      var a = to(), i = Hr.begin("mutate");
      e.map(a), i(), r();
    });
  }
}
var Ur = !1;
function $a() {
  Ur = !0;
}
function wr() {
  Ur = !1;
}
var Nt = null;
function mn(e) {
  if (rn && T.observeMutations) {
    var t = e.treeCallback, r = t === void 0 ? Ct : t, n = e.nodeCallback, a = n === void 0 ? Ct : n, i = e.pseudoElementsCallback, o = i === void 0 ? Ct : i, s = e.observeMutationsRoot, l = s === void 0 ? G : s;
    Nt = new rn(function(c) {
      if (!Ur) {
        var u = Se();
        Ge(c).forEach(function(d) {
          if (d.type === "childList" && d.addedNodes.length > 0 && !dn(d.addedNodes[0]) && (T.searchPseudoElements && o(d.target), r(d.target)), d.type === "attributes" && d.target.parentNode && T.searchPseudoElements && o(d.target.parentNode), d.type === "attributes" && dn(d.target) && ~pi.indexOf(d.attributeName))
            if (d.attributeName === "class" && Zi(d.target)) {
              var p = Ut(Dr(d.target)), b = p.prefix, S = p.iconName;
              d.target.setAttribute(Lr, b || u), S && d.target.setAttribute(Nr, S);
            } else
              eo(d.target) && a(d.target);
        });
      }
    }), we && Nt.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function io() {
  Nt && Nt.disconnect();
}
function oo(e) {
  var t = e.getAttribute("style"), r = [];
  return t && (r = t.split(";").reduce(function(n, a) {
    var i = a.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (n[o] = s.join(":").trim()), n;
  }, {})), r;
}
function so(e) {
  var t = e.getAttribute("data-prefix"), r = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "", a = Ut(Dr(e));
  return a.prefix || (a.prefix = Se()), t && r && (a.prefix = t, a.iconName = r), a.iconName && a.prefix || (a.prefix && n.length > 0 && (a.iconName = ji(a.prefix, e.innerText) || zr(a.prefix, mr(e.innerText))), !a.iconName && T.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function lo(e) {
  var t = Ge(e.attributes).reduce(function(a, i) {
    return a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a;
  }, {}), r = e.getAttribute("title"), n = e.getAttribute("data-fa-title-id");
  return T.autoA11y && (r ? t["aria-labelledby"] = "".concat(T.replacementClass, "-title-").concat(n || ft()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function fo() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: me,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function pn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, r = so(e), n = r.iconName, a = r.prefix, i = r.rest, o = lo(e), s = br("parseNodeAttributes", {}, e), l = t.styleParser ? oo(e) : [];
  return $({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: me,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: l,
      attributes: o
    }
  }, s);
}
var co = de.styles;
function Pa(e) {
  var t = T.autoReplaceSvg === "nest" ? pn(e, {
    styleParser: !1
  }) : pn(e);
  return ~t.extra.classes.indexOf(ia) ? xe("generateLayersText", e, t) : xe("generateSvgReplacementMutation", e, t);
}
var Oe = /* @__PURE__ */ new Set();
Rr.map(function(e) {
  Oe.add("fa-".concat(e));
});
Object.keys(it[q]).map(Oe.add.bind(Oe));
Object.keys(it[J]).map(Oe.add.bind(Oe));
Oe = ut(Oe);
function bn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!we)
    return Promise.resolve();
  var r = G.documentElement.classList, n = function(d) {
    return r.add("".concat(nn, "-").concat(d));
  }, a = function(d) {
    return r.remove("".concat(nn, "-").concat(d));
  }, i = T.autoFetchSvg ? Oe : Rr.map(function(u) {
    return "fa-".concat(u);
  }).concat(Object.keys(co));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(ia, ":not([").concat(Le, "])")].concat(i.map(function(u) {
    return ".".concat(u, ":not([").concat(Le, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = Ge(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    n("pending"), a("complete");
  else
    return Promise.resolve();
  var l = Hr.begin("onTree"), c = s.reduce(function(u, d) {
    try {
      var p = Pa(d);
      p && u.push(p);
    } catch (b) {
      aa || b.name === "MissingIcon" && console.error(b);
    }
    return u;
  }, []);
  return new Promise(function(u, d) {
    Promise.all(c).then(function(p) {
      wa(p, function() {
        n("active"), n("complete"), a("pending"), typeof t == "function" && t(), l(), u();
      });
    }).catch(function(p) {
      l(), d(p);
    });
  });
}
function uo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Pa(e).then(function(r) {
    r && wa([r], t);
  });
}
function vo(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (t || {}).icon ? t : gr(t || {}), a = r.mask;
    return a && (a = (a || {}).icon ? a : gr(a || {})), e(n, $($({}, r), {}, {
      mask: a
    }));
  };
}
var mo = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.transform, a = n === void 0 ? me : n, i = r.symbol, o = i === void 0 ? !1 : i, s = r.mask, l = s === void 0 ? null : s, c = r.maskId, u = c === void 0 ? null : c, d = r.title, p = d === void 0 ? null : d, b = r.titleId, S = b === void 0 ? null : b, x = r.classes, w = x === void 0 ? [] : x, C = r.attributes, I = C === void 0 ? {} : C, E = r.styles, O = E === void 0 ? {} : E;
  if (t) {
    var v = t.prefix, Q = t.iconName, ee = t.icon;
    return Kt($({
      type: "icon"
    }, t), function() {
      return Ne("beforeDOMElementCreation", {
        iconDefinition: t,
        params: r
      }), T.autoA11y && (p ? I["aria-labelledby"] = "".concat(T.replacementClass, "-title-").concat(S || ft()) : (I["aria-hidden"] = "true", I.focusable = "false")), Vr({
        icons: {
          main: yr(ee),
          mask: l ? yr(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: v,
        iconName: Q,
        transform: $($({}, me), a),
        symbol: o,
        title: p,
        maskId: u,
        titleId: S,
        extra: {
          attributes: I,
          styles: O,
          classes: w
        }
      });
    });
  }
}, po = {
  mixout: function() {
    return {
      icon: vo(mo)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.treeCallback = bn, r.nodeCallback = uo, r;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(r) {
      var n = r.node, a = n === void 0 ? G : n, i = r.callback, o = i === void 0 ? function() {
      } : i;
      return bn(a, o);
    }, t.generateSvgReplacementMutation = function(r, n) {
      var a = n.iconName, i = n.title, o = n.titleId, s = n.prefix, l = n.transform, c = n.symbol, u = n.mask, d = n.maskId, p = n.extra;
      return new Promise(function(b, S) {
        Promise.all([hr(a, s), u.iconName ? hr(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(x) {
          var w = Mr(x, 2), C = w[0], I = w[1];
          b([r, Vr({
            icons: {
              main: C,
              mask: I
            },
            prefix: s,
            iconName: a,
            transform: l,
            symbol: c,
            maskId: d,
            title: i,
            titleId: o,
            extra: p,
            watchable: !0
          })]);
        }).catch(S);
      });
    }, t.generateAbstractIcon = function(r) {
      var n = r.children, a = r.attributes, i = r.main, o = r.transform, s = r.styles, l = Vt(s);
      l.length > 0 && (a.style = l);
      var c;
      return jr(o) && (c = xe("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), n.push(c || i.icon), {
        children: n,
        attributes: a
      };
    };
  }
}, bo = {
  mixout: function() {
    return {
      layer: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.classes, i = a === void 0 ? [] : a;
        return Kt({
          type: "layer"
        }, function() {
          Ne("beforeDOMElementCreation", {
            assembler: r,
            params: n
          });
          var o = [];
          return r(function(s) {
            Array.isArray(s) ? s.map(function(l) {
              o = o.concat(l.abstract);
            }) : o = o.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(T.cssPrefix, "-layers")].concat(ut(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, go = {
  mixout: function() {
    return {
      counter: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.title, i = a === void 0 ? null : a, o = n.classes, s = o === void 0 ? [] : o, l = n.attributes, c = l === void 0 ? {} : l, u = n.styles, d = u === void 0 ? {} : u;
        return Kt({
          type: "counter",
          content: r
        }, function() {
          return Ne("beforeDOMElementCreation", {
            content: r,
            params: n
          }), Gi({
            content: r.toString(),
            title: i,
            extra: {
              attributes: c,
              styles: d,
              classes: ["".concat(T.cssPrefix, "-layers-counter")].concat(ut(s))
            }
          });
        });
      }
    };
  }
}, yo = {
  mixout: function() {
    return {
      text: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.transform, i = a === void 0 ? me : a, o = n.title, s = o === void 0 ? null : o, l = n.classes, c = l === void 0 ? [] : l, u = n.attributes, d = u === void 0 ? {} : u, p = n.styles, b = p === void 0 ? {} : p;
        return Kt({
          type: "text",
          content: r
        }, function() {
          return Ne("beforeDOMElementCreation", {
            content: r,
            params: n
          }), cn({
            content: r,
            transform: $($({}, me), i),
            title: s,
            extra: {
              attributes: d,
              styles: b,
              classes: ["".concat(T.cssPrefix, "-layers-text")].concat(ut(c))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(r, n) {
      var a = n.title, i = n.transform, o = n.extra, s = null, l = null;
      if (ta) {
        var c = parseInt(getComputedStyle(r).fontSize, 10), u = r.getBoundingClientRect();
        s = u.width / c, l = u.height / c;
      }
      return T.autoA11y && !a && (o.attributes["aria-hidden"] = "true"), Promise.resolve([r, cn({
        content: r.innerHTML,
        width: s,
        height: l,
        transform: i,
        title: a,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, ho = new RegExp('"', "ug"), gn = [1105920, 1112319];
function xo(e) {
  var t = e.replace(ho, ""), r = Mi(t, 0), n = r >= gn[0] && r <= gn[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: mr(a ? t[0] : t),
    isSecondary: n || a
  };
}
function yn(e, t) {
  var r = "".concat(si).concat(t.replace(":", "-"));
  return new Promise(function(n, a) {
    if (e.getAttribute(r) !== null)
      return n();
    var i = Ge(e.children), o = i.filter(function(ee) {
      return ee.getAttribute(vr) === t;
    })[0], s = Te.getComputedStyle(e, t), l = s.getPropertyValue("font-family").match(di), c = s.getPropertyValue("font-weight"), u = s.getPropertyValue("content");
    if (o && !l)
      return e.removeChild(o), n();
    if (l && u !== "none" && u !== "") {
      var d = s.getPropertyValue("content"), p = ~["Sharp"].indexOf(l[2]) ? J : q, b = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? ot[p][l[2].toLowerCase()] : vi[p][c], S = xo(d), x = S.value, w = S.isSecondary, C = l[0].startsWith("FontAwesome"), I = zr(b, x), E = I;
      if (C) {
        var O = Fi(x);
        O.iconName && O.prefix && (I = O.iconName, b = O.prefix);
      }
      if (I && !w && (!o || o.getAttribute(Lr) !== b || o.getAttribute(Nr) !== E)) {
        e.setAttribute(r, E), o && e.removeChild(o);
        var v = fo(), Q = v.extra;
        Q.attributes[vr] = t, hr(I, b).then(function(ee) {
          var f = Vr($($({}, v), {}, {
            icons: {
              main: ee,
              mask: Yr()
            },
            prefix: b,
            iconName: E,
            extra: Q,
            watchable: !0
          })), A = G.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(A, e.firstChild) : e.appendChild(A), A.outerHTML = f.map(function(V) {
            return vt(V);
          }).join(`
`), e.removeAttribute(r), n();
        }).catch(a);
      } else
        n();
    } else
      n();
  });
}
function wo(e) {
  return Promise.all([yn(e, "::before"), yn(e, "::after")]);
}
function $o(e) {
  return e.parentNode !== document.head && !~fi.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(vr) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function hn(e) {
  if (we)
    return new Promise(function(t, r) {
      var n = Ge(e.querySelectorAll("*")).filter($o).map(wo), a = Hr.begin("searchPseudoElements");
      $a(), Promise.all(n).then(function() {
        a(), wr(), t();
      }).catch(function() {
        a(), wr(), r();
      });
    });
}
var Po = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.pseudoElementsCallback = hn, r;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(r) {
      var n = r.node, a = n === void 0 ? G : n;
      T.searchPseudoElements && hn(a);
    };
  }
}, xn = !1, ko = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          $a(), xn = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        mn(br("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        io();
      },
      watch: function(r) {
        var n = r.observeMutationsRoot;
        xn ? wr() : mn(br("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, wn = function(t) {
  var r = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(n, a) {
    var i = a.toLowerCase().split("-"), o = i[0], s = i.slice(1).join("-");
    if (o && s === "h")
      return n.flipX = !0, n;
    if (o && s === "v")
      return n.flipY = !0, n;
    if (s = parseFloat(s), isNaN(s))
      return n;
    switch (o) {
      case "grow":
        n.size = n.size + s;
        break;
      case "shrink":
        n.size = n.size - s;
        break;
      case "left":
        n.x = n.x - s;
        break;
      case "right":
        n.x = n.x + s;
        break;
      case "up":
        n.y = n.y - s;
        break;
      case "down":
        n.y = n.y + s;
        break;
      case "rotate":
        n.rotate = n.rotate + s;
        break;
    }
    return n;
  }, r);
}, Eo = {
  mixout: function() {
    return {
      parse: {
        transform: function(r) {
          return wn(r);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var a = n.getAttribute("data-fa-transform");
        return a && (r.transform = wn(a)), r;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(r) {
      var n = r.main, a = r.transform, i = r.containerWidth, o = r.iconWidth, s = {
        transform: "translate(".concat(i / 2, " 256)")
      }, l = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), c = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), u = "rotate(".concat(a.rotate, " 0 0)"), d = {
        transform: "".concat(l, " ").concat(c, " ").concat(u)
      }, p = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, b = {
        outer: s,
        inner: d,
        path: p
      };
      return {
        tag: "g",
        attributes: $({}, b.outer),
        children: [{
          tag: "g",
          attributes: $({}, b.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: $($({}, n.icon.attributes), b.path)
          }]
        }]
      };
    };
  }
}, Jt = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function $n(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function To(e) {
  return e.tag === "g" ? e.children : [e];
}
var So = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var a = n.getAttribute("data-fa-mask"), i = a ? Ut(a.split(" ").map(function(o) {
          return o.trim();
        })) : Yr();
        return i.prefix || (i.prefix = Se()), r.mask = i, r.maskId = n.getAttribute("data-fa-mask-id"), r;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(r) {
      var n = r.children, a = r.attributes, i = r.main, o = r.mask, s = r.maskId, l = r.transform, c = i.width, u = i.icon, d = o.width, p = o.icon, b = ki({
        transform: l,
        containerWidth: d,
        iconWidth: c
      }), S = {
        tag: "rect",
        attributes: $($({}, Jt), {}, {
          fill: "white"
        })
      }, x = u.children ? {
        children: u.children.map($n)
      } : {}, w = {
        tag: "g",
        attributes: $({}, b.inner),
        children: [$n($({
          tag: u.tag,
          attributes: $($({}, u.attributes), b.path)
        }, x))]
      }, C = {
        tag: "g",
        attributes: $({}, b.outer),
        children: [w]
      }, I = "mask-".concat(s || ft()), E = "clip-".concat(s || ft()), O = {
        tag: "mask",
        attributes: $($({}, Jt), {}, {
          id: I,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [S, C]
      }, v = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: E
          },
          children: To(p)
        }, O]
      };
      return n.push(v, {
        tag: "rect",
        attributes: $({
          fill: "currentColor",
          "clip-path": "url(#".concat(E, ")"),
          mask: "url(#".concat(I, ")")
        }, Jt)
      }), {
        children: n,
        attributes: a
      };
    };
  }
}, Oo = {
  provides: function(t) {
    var r = !1;
    Te.matchMedia && (r = Te.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var n = [], a = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: $($({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = $($({}, i), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: $($({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return r || s.children.push({
        tag: "animate",
        attributes: $($({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: $($({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(s), n.push({
        tag: "path",
        attributes: $($({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: r ? [] : [{
          tag: "animate",
          attributes: $($({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), r || n.push({
        tag: "path",
        attributes: $($({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: $($({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, Ao = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var a = n.getAttribute("data-fa-symbol"), i = a === null ? !1 : a === "" ? !0 : a;
        return r.symbol = i, r;
      }
    };
  }
}, Co = [Si, po, bo, go, yo, Po, ko, Eo, So, Oo, Ao];
Vi(Co, {
  mixoutsTo: ie
});
ie.noAuto;
ie.config;
ie.library;
ie.dom;
var $r = ie.parse;
ie.findIconDefinition;
ie.toHtml;
var Io = ie.icon;
ie.layer;
ie.text;
ie.counter;
function Mo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pr = { exports: {} }, Et = { exports: {} }, H = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pn;
function _o() {
  if (Pn)
    return H;
  Pn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
  function E(v) {
    if (typeof v == "object" && v !== null) {
      var Q = v.$$typeof;
      switch (Q) {
        case t:
          switch (v = v.type, v) {
            case l:
            case c:
            case n:
            case i:
            case a:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case u:
                case S:
                case b:
                case o:
                  return v;
                default:
                  return Q;
              }
          }
        case r:
          return Q;
      }
    }
  }
  function O(v) {
    return E(v) === c;
  }
  return H.AsyncMode = l, H.ConcurrentMode = c, H.ContextConsumer = s, H.ContextProvider = o, H.Element = t, H.ForwardRef = u, H.Fragment = n, H.Lazy = S, H.Memo = b, H.Portal = r, H.Profiler = i, H.StrictMode = a, H.Suspense = d, H.isAsyncMode = function(v) {
    return O(v) || E(v) === l;
  }, H.isConcurrentMode = O, H.isContextConsumer = function(v) {
    return E(v) === s;
  }, H.isContextProvider = function(v) {
    return E(v) === o;
  }, H.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, H.isForwardRef = function(v) {
    return E(v) === u;
  }, H.isFragment = function(v) {
    return E(v) === n;
  }, H.isLazy = function(v) {
    return E(v) === S;
  }, H.isMemo = function(v) {
    return E(v) === b;
  }, H.isPortal = function(v) {
    return E(v) === r;
  }, H.isProfiler = function(v) {
    return E(v) === i;
  }, H.isStrictMode = function(v) {
    return E(v) === a;
  }, H.isSuspense = function(v) {
    return E(v) === d;
  }, H.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === c || v === i || v === a || v === d || v === p || typeof v == "object" && v !== null && (v.$$typeof === S || v.$$typeof === b || v.$$typeof === o || v.$$typeof === s || v.$$typeof === u || v.$$typeof === w || v.$$typeof === C || v.$$typeof === I || v.$$typeof === x);
  }, H.typeOf = E, H;
}
var U = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kn;
function Lo() {
  return kn || (kn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function E(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === n || h === c || h === i || h === a || h === d || h === p || typeof h == "object" && h !== null && (h.$$typeof === S || h.$$typeof === b || h.$$typeof === o || h.$$typeof === s || h.$$typeof === u || h.$$typeof === w || h.$$typeof === C || h.$$typeof === I || h.$$typeof === x);
    }
    function O(h) {
      if (typeof h == "object" && h !== null) {
        var ve = h.$$typeof;
        switch (ve) {
          case t:
            var pt = h.type;
            switch (pt) {
              case l:
              case c:
              case n:
              case i:
              case a:
              case d:
                return pt;
              default:
                var Xr = pt && pt.$$typeof;
                switch (Xr) {
                  case s:
                  case u:
                  case S:
                  case b:
                  case o:
                    return Xr;
                  default:
                    return ve;
                }
            }
          case r:
            return ve;
        }
      }
    }
    var v = l, Q = c, ee = s, f = o, A = t, V = u, P = n, W = S, m = b, y = r, X = i, te = a, Ce = d, mt = !1;
    function qt(h) {
      return mt || (mt = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), g(h) || O(h) === l;
    }
    function g(h) {
      return O(h) === c;
    }
    function k(h) {
      return O(h) === s;
    }
    function j(h) {
      return O(h) === o;
    }
    function R(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function M(h) {
      return O(h) === u;
    }
    function F(h) {
      return O(h) === n;
    }
    function _(h) {
      return O(h) === S;
    }
    function D(h) {
      return O(h) === b;
    }
    function z(h) {
      return O(h) === r;
    }
    function K(h) {
      return O(h) === i;
    }
    function Y(h) {
      return O(h) === a;
    }
    function ne(h) {
      return O(h) === d;
    }
    U.AsyncMode = v, U.ConcurrentMode = Q, U.ContextConsumer = ee, U.ContextProvider = f, U.Element = A, U.ForwardRef = V, U.Fragment = P, U.Lazy = W, U.Memo = m, U.Portal = y, U.Profiler = X, U.StrictMode = te, U.Suspense = Ce, U.isAsyncMode = qt, U.isConcurrentMode = g, U.isContextConsumer = k, U.isContextProvider = j, U.isElement = R, U.isForwardRef = M, U.isFragment = F, U.isLazy = _, U.isMemo = D, U.isPortal = z, U.isProfiler = K, U.isStrictMode = Y, U.isSuspense = ne, U.isValidElementType = E, U.typeOf = O;
  }()), U;
}
var En;
function ka() {
  return En || (En = 1, process.env.NODE_ENV === "production" ? Et.exports = _o() : Et.exports = Lo()), Et.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Zt, Tn;
function No() {
  if (Tn)
    return Zt;
  Tn = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(o).map(function(u) {
        return o[u];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        c[u] = u;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Zt = a() ? Object.assign : function(i, o) {
    for (var s, l = n(i), c, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var d in s)
        t.call(s, d) && (l[d] = s[d]);
      if (e) {
        c = e(s);
        for (var p = 0; p < c.length; p++)
          r.call(s, c[p]) && (l[c[p]] = s[c[p]]);
      }
    }
    return l;
  }, Zt;
}
var er, Sn;
function Kr() {
  if (Sn)
    return er;
  Sn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return er = e, er;
}
var tr, On;
function Ea() {
  return On || (On = 1, tr = Function.call.bind(Object.prototype.hasOwnProperty)), tr;
}
var rr, An;
function Ro() {
  if (An)
    return rr;
  An = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Kr(), r = {}, n = Ea();
    e = function(i) {
      var o = "Warning: " + i;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function a(i, o, s, l, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in i)
        if (n(i, u)) {
          var d;
          try {
            if (typeof i[u] != "function") {
              var p = Error(
                (l || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            d = i[u](o, u, l, s, null, t);
          } catch (S) {
            d = S;
          }
          if (d && !(d instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var b = c ? c() : "";
            e(
              "Failed " + s + " type: " + d.message + (b ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, rr = a, rr;
}
var nr, Cn;
function Do() {
  if (Cn)
    return nr;
  Cn = 1;
  var e = ka(), t = No(), r = Kr(), n = Ea(), a = Ro(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return nr = function(s, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(g) {
      var k = g && (c && g[c] || g[u]);
      if (typeof k == "function")
        return k;
    }
    var p = "<<anonymous>>", b = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: I(),
      arrayOf: E,
      element: O(),
      elementType: v(),
      instanceOf: Q,
      node: V(),
      objectOf: f,
      oneOf: ee,
      oneOfType: A,
      shape: W,
      exact: m
    };
    function S(g, k) {
      return g === k ? g !== 0 || 1 / g === 1 / k : g !== g && k !== k;
    }
    function x(g, k) {
      this.message = g, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function w(g) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, j = 0;
      function R(F, _, D, z, K, Y, ne) {
        if (z = z || p, Y = Y || D, ne !== r) {
          if (l) {
            var h = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw h.name = "Invariant Violation", h;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = z + ":" + D;
            !k[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[ve] = !0, j++);
          }
        }
        return _[D] == null ? F ? _[D] === null ? new x("The " + K + " `" + Y + "` is marked as required " + ("in `" + z + "`, but its value is `null`.")) : new x("The " + K + " `" + Y + "` is marked as required in " + ("`" + z + "`, but its value is `undefined`.")) : null : g(_, D, z, K, Y);
      }
      var M = R.bind(null, !1);
      return M.isRequired = R.bind(null, !0), M;
    }
    function C(g) {
      function k(j, R, M, F, _, D) {
        var z = j[R], K = te(z);
        if (K !== g) {
          var Y = Ce(z);
          return new x(
            "Invalid " + F + " `" + _ + "` of type " + ("`" + Y + "` supplied to `" + M + "`, expected ") + ("`" + g + "`."),
            { expectedType: g }
          );
        }
        return null;
      }
      return w(k);
    }
    function I() {
      return w(o);
    }
    function E(g) {
      function k(j, R, M, F, _) {
        if (typeof g != "function")
          return new x("Property `" + _ + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var D = j[R];
        if (!Array.isArray(D)) {
          var z = te(D);
          return new x("Invalid " + F + " `" + _ + "` of type " + ("`" + z + "` supplied to `" + M + "`, expected an array."));
        }
        for (var K = 0; K < D.length; K++) {
          var Y = g(D, K, M, F, _ + "[" + K + "]", r);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return w(k);
    }
    function O() {
      function g(k, j, R, M, F) {
        var _ = k[j];
        if (!s(_)) {
          var D = te(_);
          return new x("Invalid " + M + " `" + F + "` of type " + ("`" + D + "` supplied to `" + R + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(g);
    }
    function v() {
      function g(k, j, R, M, F) {
        var _ = k[j];
        if (!e.isValidElementType(_)) {
          var D = te(_);
          return new x("Invalid " + M + " `" + F + "` of type " + ("`" + D + "` supplied to `" + R + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(g);
    }
    function Q(g) {
      function k(j, R, M, F, _) {
        if (!(j[R] instanceof g)) {
          var D = g.name || p, z = qt(j[R]);
          return new x("Invalid " + F + " `" + _ + "` of type " + ("`" + z + "` supplied to `" + M + "`, expected ") + ("instance of `" + D + "`."));
        }
        return null;
      }
      return w(k);
    }
    function ee(g) {
      if (!Array.isArray(g))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function k(j, R, M, F, _) {
        for (var D = j[R], z = 0; z < g.length; z++)
          if (S(D, g[z]))
            return null;
        var K = JSON.stringify(g, function(ne, h) {
          var ve = Ce(h);
          return ve === "symbol" ? String(h) : h;
        });
        return new x("Invalid " + F + " `" + _ + "` of value `" + String(D) + "` " + ("supplied to `" + M + "`, expected one of " + K + "."));
      }
      return w(k);
    }
    function f(g) {
      function k(j, R, M, F, _) {
        if (typeof g != "function")
          return new x("Property `" + _ + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var D = j[R], z = te(D);
        if (z !== "object")
          return new x("Invalid " + F + " `" + _ + "` of type " + ("`" + z + "` supplied to `" + M + "`, expected an object."));
        for (var K in D)
          if (n(D, K)) {
            var Y = g(D, K, M, F, _ + "." + K, r);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return w(k);
    }
    function A(g) {
      if (!Array.isArray(g))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var k = 0; k < g.length; k++) {
        var j = g[k];
        if (typeof j != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + mt(j) + " at index " + k + "."
          ), o;
      }
      function R(M, F, _, D, z) {
        for (var K = [], Y = 0; Y < g.length; Y++) {
          var ne = g[Y], h = ne(M, F, _, D, z, r);
          if (h == null)
            return null;
          h.data && n(h.data, "expectedType") && K.push(h.data.expectedType);
        }
        var ve = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new x("Invalid " + D + " `" + z + "` supplied to " + ("`" + _ + "`" + ve + "."));
      }
      return w(R);
    }
    function V() {
      function g(k, j, R, M, F) {
        return y(k[j]) ? null : new x("Invalid " + M + " `" + F + "` supplied to " + ("`" + R + "`, expected a ReactNode."));
      }
      return w(g);
    }
    function P(g, k, j, R, M) {
      return new x(
        (g || "React class") + ": " + k + " type `" + j + "." + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function W(g) {
      function k(j, R, M, F, _) {
        var D = j[R], z = te(D);
        if (z !== "object")
          return new x("Invalid " + F + " `" + _ + "` of type `" + z + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var K in g) {
          var Y = g[K];
          if (typeof Y != "function")
            return P(M, F, _, K, Ce(Y));
          var ne = Y(D, K, M, F, _ + "." + K, r);
          if (ne)
            return ne;
        }
        return null;
      }
      return w(k);
    }
    function m(g) {
      function k(j, R, M, F, _) {
        var D = j[R], z = te(D);
        if (z !== "object")
          return new x("Invalid " + F + " `" + _ + "` of type `" + z + "` " + ("supplied to `" + M + "`, expected `object`."));
        var K = t({}, j[R], g);
        for (var Y in K) {
          var ne = g[Y];
          if (n(g, Y) && typeof ne != "function")
            return P(M, F, _, Y, Ce(ne));
          if (!ne)
            return new x(
              "Invalid " + F + " `" + _ + "` key `" + Y + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(j[R], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(g), null, "  ")
            );
          var h = ne(D, Y, M, F, _ + "." + Y, r);
          if (h)
            return h;
        }
        return null;
      }
      return w(k);
    }
    function y(g) {
      switch (typeof g) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !g;
        case "object":
          if (Array.isArray(g))
            return g.every(y);
          if (g === null || s(g))
            return !0;
          var k = d(g);
          if (k) {
            var j = k.call(g), R;
            if (k !== g.entries) {
              for (; !(R = j.next()).done; )
                if (!y(R.value))
                  return !1;
            } else
              for (; !(R = j.next()).done; ) {
                var M = R.value;
                if (M && !y(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function X(g, k) {
      return g === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function te(g) {
      var k = typeof g;
      return Array.isArray(g) ? "array" : g instanceof RegExp ? "object" : X(k, g) ? "symbol" : k;
    }
    function Ce(g) {
      if (typeof g > "u" || g === null)
        return "" + g;
      var k = te(g);
      if (k === "object") {
        if (g instanceof Date)
          return "date";
        if (g instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function mt(g) {
      var k = Ce(g);
      switch (k) {
        case "array":
        case "object":
          return "an " + k;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + k;
        default:
          return k;
      }
    }
    function qt(g) {
      return !g.constructor || !g.constructor.name ? p : g.constructor.name;
    }
    return b.checkPropTypes = a, b.resetWarningCache = a.resetWarningCache, b.PropTypes = b, b;
  }, nr;
}
var ar, In;
function jo() {
  if (In)
    return ar;
  In = 1;
  var e = Kr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ar = function() {
    function n(o, s, l, c, u, d) {
      if (d !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, ar;
}
if (process.env.NODE_ENV !== "production") {
  var Fo = ka(), zo = !0;
  Pr.exports = Do()(Fo.isElement, zo);
} else
  Pr.exports = jo()();
var Yo = Pr.exports;
const L = /* @__PURE__ */ Mo(Yo);
function Mn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mn(Object(r), !0).forEach(function(n) {
      Ue(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Rt(e) {
  "@babel/helpers - typeof";
  return Rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rt(e);
}
function Ue(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Vo(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Ho(e, t) {
  if (e == null)
    return {};
  var r = Vo(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function kr(e) {
  return Uo(e) || Ko(e) || Wo(e) || Bo();
}
function Uo(e) {
  if (Array.isArray(e))
    return Er(e);
}
function Ko(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Wo(e, t) {
  if (e) {
    if (typeof e == "string")
      return Er(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Er(e, t);
  }
}
function Er(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Bo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qo(e) {
  var t, r = e.beat, n = e.fade, a = e.beatFade, i = e.bounce, o = e.shake, s = e.flash, l = e.spin, c = e.spinPulse, u = e.spinReverse, d = e.pulse, p = e.fixedWidth, b = e.inverse, S = e.border, x = e.listItem, w = e.flip, C = e.size, I = e.rotation, E = e.pull, O = (t = {
    "fa-beat": r,
    "fa-fade": n,
    "fa-beat-fade": a,
    "fa-bounce": i,
    "fa-shake": o,
    "fa-flash": s,
    "fa-spin": l,
    "fa-spin-reverse": u,
    "fa-spin-pulse": c,
    "fa-pulse": d,
    "fa-fw": p,
    "fa-inverse": b,
    "fa-border": S,
    "fa-li": x,
    "fa-flip": w === !0,
    "fa-flip-horizontal": w === "horizontal" || w === "both",
    "fa-flip-vertical": w === "vertical" || w === "both"
  }, Ue(t, "fa-".concat(C), typeof C < "u" && C !== null), Ue(t, "fa-rotate-".concat(I), typeof I < "u" && I !== null && I !== 0), Ue(t, "fa-pull-".concat(E), typeof E < "u" && E !== null), Ue(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(O).map(function(v) {
    return O[v] ? v : null;
  }).filter(function(v) {
    return v;
  });
}
function Go(e) {
  return e = e - 0, e === e;
}
function Ta(e) {
  return Go(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, r) {
    return r ? r.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Xo = ["style"];
function Qo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Jo(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, r) {
    var n = r.indexOf(":"), a = Ta(r.slice(0, n)), i = r.slice(n + 1).trim();
    return a.startsWith("webkit") ? t[Qo(a)] = i : t[a] = i, t;
  }, {});
}
function Sa(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var n = (t.children || []).map(function(l) {
    return Sa(e, l);
  }), a = Object.keys(t.attributes || {}).reduce(function(l, c) {
    var u = t.attributes[c];
    switch (c) {
      case "class":
        l.attrs.className = u, delete t.attributes.class;
        break;
      case "style":
        l.attrs.style = Jo(u);
        break;
      default:
        c.indexOf("aria-") === 0 || c.indexOf("data-") === 0 ? l.attrs[c.toLowerCase()] = u : l.attrs[Ta(c)] = u;
    }
    return l;
  }, {
    attrs: {}
  }), i = r.style, o = i === void 0 ? {} : i, s = Ho(r, Xo);
  return a.attrs.style = Ee(Ee({}, a.attrs.style), o), e.apply(void 0, [t.tag, Ee(Ee({}, a.attrs), s)].concat(kr(n)));
}
var Oa = !1;
try {
  Oa = process.env.NODE_ENV === "production";
} catch {
}
function Zo() {
  if (!Oa && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function _n(e) {
  if (e && Rt(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if ($r.icon)
    return $r.icon(e);
  if (e === null)
    return null;
  if (e && Rt(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function ir(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Ue({}, e, t) : {};
}
var Ae = /* @__PURE__ */ fe.forwardRef(function(e, t) {
  var r = e.icon, n = e.mask, a = e.symbol, i = e.className, o = e.title, s = e.titleId, l = e.maskId, c = _n(r), u = ir("classes", [].concat(kr(qo(e)), kr(i.split(" ")))), d = ir("transform", typeof e.transform == "string" ? $r.transform(e.transform) : e.transform), p = ir("mask", _n(n)), b = Io(c, Ee(Ee(Ee(Ee({}, u), d), p), {}, {
    symbol: a,
    title: o,
    titleId: s,
    maskId: l
  }));
  if (!b)
    return Zo("Could not find icon", c), null;
  var S = b.abstract, x = {
    ref: t
  };
  return Object.keys(e).forEach(function(w) {
    Ae.defaultProps.hasOwnProperty(w) || (x[w] = e[w]);
  }), es(S[0], x);
});
Ae.displayName = "FontAwesomeIcon";
Ae.propTypes = {
  beat: L.bool,
  border: L.bool,
  beatFade: L.bool,
  bounce: L.bool,
  className: L.string,
  fade: L.bool,
  flash: L.bool,
  mask: L.oneOfType([L.object, L.array, L.string]),
  maskId: L.string,
  fixedWidth: L.bool,
  inverse: L.bool,
  flip: L.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: L.oneOfType([L.object, L.array, L.string]),
  listItem: L.bool,
  pull: L.oneOf(["right", "left"]),
  pulse: L.bool,
  rotation: L.oneOf([0, 90, 180, 270]),
  shake: L.bool,
  size: L.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: L.bool,
  spinPulse: L.bool,
  spinReverse: L.bool,
  symbol: L.oneOfType([L.bool, L.string]),
  title: L.string,
  titleId: L.string,
  transform: L.oneOfType([L.string, L.object]),
  swapOpacity: L.bool
};
Ae.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
};
var es = Sa.bind(null, fe.createElement);
const Tl = ({ children: e, className: t, ...r }) => /* @__PURE__ */ ae(
  "h1",
  {
    ...r,
    className: B("text-ev-primary text-6xl font-semibold", t),
    children: [
      /* @__PURE__ */ N("span", { children: e }),
      r.id && /* @__PURE__ */ N(Xe, { id: r.id })
    ]
  }
), Sl = ({ children: e, className: t, ...r }) => /* @__PURE__ */ ae(
  "h2",
  {
    ...r,
    className: B("text-ev-primary text-5xl font-semibold", t),
    children: [
      /* @__PURE__ */ N("span", { children: e }),
      r.id && /* @__PURE__ */ N(Xe, { id: r.id })
    ]
  }
), Ol = ({ children: e, className: t, ...r }) => /* @__PURE__ */ ae(
  "h3",
  {
    ...r,
    className: B("text-ev-primary text-4xl font-semibold", t),
    children: [
      /* @__PURE__ */ N("span", { children: e }),
      r.id && /* @__PURE__ */ N(Xe, { id: r.id })
    ]
  }
), Al = ({ children: e, className: t, ...r }) => /* @__PURE__ */ ae(
  "h4",
  {
    ...r,
    className: B("text-ev-primary text-3xl font-semibold", t),
    children: [
      /* @__PURE__ */ N("span", { children: e }),
      r.id && /* @__PURE__ */ N(Xe, { id: r.id })
    ]
  }
), Cl = ({ children: e, className: t, ...r }) => /* @__PURE__ */ ae(
  "h1",
  {
    ...r,
    className: B("text-ev-primary text-2xl font-semibold", t),
    children: [
      /* @__PURE__ */ N("span", { children: e }),
      r.id && /* @__PURE__ */ N(Xe, { id: r.id })
    ]
  }
), Il = ({ children: e, className: t, ...r }) => /* @__PURE__ */ ae(
  "h6",
  {
    ...r,
    className: B("text-ev-primary text-xl font-semibold", t),
    children: [
      /* @__PURE__ */ N("span", { children: e }),
      r.id && /* @__PURE__ */ N(Xe, { id: r.id })
    ]
  }
), Ml = ({ children: e, className: t, ...r }) => /* @__PURE__ */ N(
  "p",
  {
    ...r,
    className: B(
      "text-ev-dark dark:text-ev-light text-base",
      t
    ),
    children: e
  }
), _l = ({ children: e, className: t, ...r }) => (console.log({ className: t }), /* @__PURE__ */ N(
  "strong",
  {
    ...r,
    className: B(
      "text-ev-dark dark:text-ev-light text-base font-bold",
      t
    ),
    children: e
  }
)), Ll = ({ children: e, className: t, ...r }) => /* @__PURE__ */ N(
  "code",
  {
    ...r,
    className: B(
      "px-1 text-ev-dark bg-ev-light-hard dark:text-ev-light  dark:bg-ev-dark-hard text-base rounded-md",
      t
    ),
    children: e
  }
), Nl = ({ children: e, className: t, ...r }) => /* @__PURE__ */ N(
  "pre",
  {
    ...r,
    className: B(
      "bg-ev-light-hard py-2 px-4 rounded-lg *:bg-inherit",
      t
    ),
    children: e
  }
), Rl = ({ children: e, className: t, ...r }) => /* @__PURE__ */ N("ul", { ...r, className: B("pl-4 list-disc", t), children: e }), Dl = ({ children: e, className: t, ...r }) => /* @__PURE__ */ N("ol", { ...r, className: B("pl-2 list-decimal", t), children: e }), jl = ({ className: e, ...t }) => /* @__PURE__ */ N(
  "img",
  {
    ...t,
    loading: "lazy",
    className: B("rounded-lg", e)
  }
), Fl = ({
  children: e,
  className: t,
  variant: r = "default",
  source: n,
  ...a
}) => /* @__PURE__ */ ae(
  "blockquote",
  {
    ...a,
    className: B(
      "text-ev-dark dark:text-ev-light text-base border-l-4 border-ev-primary pl-4 italic",
      t
    ),
    children: [
      /* @__PURE__ */ ae("div", { className: "inline", children: [
        r === "default" && /* @__PURE__ */ N(
          Ae,
          {
            icon: Qa,
            className: "mr-2 text-ev-primary"
          }
        ),
        e,
        r === "default" && /* @__PURE__ */ N(
          Ae,
          {
            icon: Xa,
            className: "ml-2 text-ev-primary"
          }
        )
      ] }),
      /* @__PURE__ */ N("div", { className: "text-right", children: n })
    ]
  }
), zl = ({ className: e, children: t, ...r }) => /* @__PURE__ */ ae(
  "a",
  {
    ...r,
    className: B(
      "border-b-2 border-dashed border-ev-dark hover:border-solid hover:text-ev-primary hover:border-ev-primary",
      e
    ),
    target: "_blank",
    rel: "noreferrer noopener",
    children: [
      /* @__PURE__ */ N(Ae, { icon: Xn, className: "mr-2" }),
      t
    ]
  }
), Xe = ({ id: e }) => /* @__PURE__ */ N("a", { href: `#${e}`, className: "px-2 text-ev-primary/50 hover:text-ev-primary", children: "#" });
function ts(e, t, r) {
  let [n, a] = ue(e || t), i = re(e !== void 0), o = e !== void 0;
  ce(() => {
    let c = i.current;
    c !== o && console.warn(`WARN: A component changed from ${c ? "controlled" : "uncontrolled"} to ${o ? "controlled" : "uncontrolled"}.`), i.current = o;
  }, [
    o
  ]);
  let s = o ? e : n, l = pe((c, ...u) => {
    let d = (p, ...b) => {
      r && (Object.is(s, p) || r(p, ...b)), o || (s = p);
    };
    typeof c == "function" ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), a((b, ...S) => {
      let x = c(o ? s : b, ...S);
      return d(x, ...u), o ? b : x;
    })) : (o || a(c), d(c, ...u));
  }, [
    o,
    s,
    r
  ]);
  return [
    s,
    l
  ];
}
const Dt = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, Aa = /* @__PURE__ */ fe.createContext(Dt), rs = /* @__PURE__ */ fe.createContext(!1);
let ns = !!(typeof window < "u" && window.document && window.document.createElement), or = /* @__PURE__ */ new WeakMap();
function as(e = !1) {
  let t = je(Aa), r = re(null);
  if (r.current === null && !e) {
    var n, a;
    let i = (a = fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || a === void 0 || (n = a.ReactCurrentOwner) === null || n === void 0 ? void 0 : n.current;
    if (i) {
      let o = or.get(i);
      o == null ? or.set(i, {
        id: t.current,
        state: i.memoizedState
      }) : i.memoizedState !== o.state && (t.current = o.id, or.delete(i));
    }
    r.current = ++t.current;
  }
  return r.current;
}
function is(e) {
  let t = je(Aa);
  t === Dt && !ns && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let r = as(!!e), n = t === Dt && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${n}-${r}`;
}
function os(e) {
  let t = fe.useId(), [r] = ue(us()), n = r || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${Dt.prefix}`;
  return e || `${n}-${t}`;
}
const ss = typeof fe.useId == "function" ? os : is;
function ls() {
  return !1;
}
function fs() {
  return !0;
}
function cs(e) {
  return () => {
  };
}
function us() {
  return typeof fe.useSyncExternalStore == "function" ? fe.useSyncExternalStore(cs, ls, fs) : je(rs);
}
function Ca(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++)
        e[t] && (r = Ca(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function ds() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++)
    (e = arguments[r]) && (t = Ca(e)) && (n && (n += " "), n += t);
  return n;
}
const Fe = typeof document < "u" ? fe.useLayoutEffect : () => {
};
function se(e) {
  const t = re(null);
  return Fe(() => {
    t.current = e;
  }, [
    e
  ]), pe((...r) => {
    const n = t.current;
    return n == null ? void 0 : n(...r);
  }, []);
}
function vs(e) {
  let [t, r] = ue(e), n = re(null), a = se(() => {
    if (!n.current)
      return;
    let o = n.current.next();
    if (o.done) {
      n.current = null;
      return;
    }
    t === o.value ? a() : r(o.value);
  });
  Fe(() => {
    n.current && a();
  });
  let i = se((o) => {
    n.current = o(t), a();
  });
  return [
    t,
    i
  ];
}
let ms = !!(typeof window < "u" && window.document && window.document.createElement), jt = /* @__PURE__ */ new Map();
function Ft(e) {
  let [t, r] = ue(e), n = re(null), a = ss(t), i = pe((o) => {
    n.current = o;
  }, []);
  return ms && jt.set(a, i), Fe(() => {
    let o = a;
    return () => {
      jt.delete(o);
    };
  }, [
    a
  ]), ce(() => {
    let o = n.current;
    o && (n.current = null, r(o));
  }), a;
}
function ps(e, t) {
  if (e === t)
    return e;
  let r = jt.get(e);
  if (r)
    return r(t), t;
  let n = jt.get(t);
  return n ? (n(e), e) : t;
}
function Ln(e = []) {
  let t = Ft(), [r, n] = vs(t), a = pe(() => {
    n(function* () {
      yield t, yield document.getElementById(t) ? t : void 0;
    });
  }, [
    t,
    n
  ]);
  return Fe(a, [
    t,
    a,
    ...e
  ]), r;
}
function Ia(...e) {
  return (...t) => {
    for (let r of e)
      typeof r == "function" && r(...t);
  };
}
const le = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, Re = (e) => e && "window" in e && e.window === e ? e : le(e).defaultView || window;
function be(...e) {
  let t = {
    ...e[0]
  };
  for (let r = 1; r < e.length; r++) {
    let n = e[r];
    for (let a in n) {
      let i = t[a], o = n[a];
      typeof i == "function" && typeof o == "function" && // This is a lot faster than a regex.
      a[0] === "o" && a[1] === "n" && a.charCodeAt(2) >= /* 'A' */
      65 && a.charCodeAt(2) <= /* 'Z' */
      90 ? t[a] = Ia(i, o) : (a === "className" || a === "UNSAFE_className") && typeof i == "string" && typeof o == "string" ? t[a] = ds(i, o) : a === "id" && i && o ? t.id = ps(i, o) : t[a] = o !== void 0 ? o : i;
    }
  }
  return t;
}
const bs = /* @__PURE__ */ new Set([
  "id"
]), gs = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), ys = /* @__PURE__ */ new Set([
  "href",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), hs = /^(data-.*)$/;
function Qe(e, t = {}) {
  let { labelable: r, isLink: n, propNames: a } = t, i = {};
  for (const o in e)
    Object.prototype.hasOwnProperty.call(e, o) && (bs.has(o) || r && gs.has(o) || n && ys.has(o) || a != null && a.has(o) || hs.test(o)) && (i[o] = e[o]);
  return i;
}
function _e(e) {
  if (xs())
    e.focus({
      preventScroll: !0
    });
  else {
    let t = ws(e);
    e.focus(), $s(t);
  }
}
let Tt = null;
function xs() {
  if (Tt == null) {
    Tt = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Tt = !0, !0;
        }
      });
    } catch {
    }
  }
  return Tt;
}
function ws(e) {
  let t = e.parentNode, r = [], n = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== n; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && r.push({
      element: t,
      scrollTop: t.scrollTop,
      scrollLeft: t.scrollLeft
    }), t = t.parentNode;
  return n instanceof HTMLElement && r.push({
    element: n,
    scrollTop: n.scrollTop,
    scrollLeft: n.scrollLeft
  }), r;
}
function $s(e) {
  for (let { element: t, scrollTop: r, scrollLeft: n } of e)
    t.scrollTop = r, t.scrollLeft = n;
}
function Wt(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((r) => e.test(r.brand))) || e.test(window.navigator.userAgent);
}
function Wr(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function ct() {
  return Wr(/^Mac/i);
}
function Ps() {
  return Wr(/^iPhone/i);
}
function Ma() {
  return Wr(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  ct() && navigator.maxTouchPoints > 1;
}
function _a() {
  return Ps() || Ma();
}
function ks() {
  return Wt(/AppleWebKit/i) && !Es();
}
function Es() {
  return Wt(/Chrome/i);
}
function La() {
  return Wt(/Android/i);
}
function Ts() {
  return Wt(/Firefox/i);
}
const Ss = /* @__PURE__ */ qn({
  isNative: !0,
  open: Is
});
function Os() {
  return je(Ss);
}
function As(e, t) {
  let r = e.getAttribute("target");
  return (!r || r === "_self") && e.origin === location.origin && !e.hasAttribute("download") && !t.metaKey && // open in new tab (mac)
  !t.ctrlKey && // open in new tab (windows)
  !t.altKey && // download
  !t.shiftKey;
}
function qe(e, t, r = !0) {
  var n, a;
  let { metaKey: i, ctrlKey: o, altKey: s, shiftKey: l } = t;
  Ts() && (!((a = window.event) === null || a === void 0 || (n = a.type) === null || n === void 0) && n.startsWith("key")) && e.target === "_blank" && (ct() ? i = !0 : o = !0);
  let c = ks() && ct() && !Ma() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: i,
    ctrlKey: o,
    altKey: s,
    shiftKey: l
  }) : new MouseEvent("click", {
    metaKey: i,
    ctrlKey: o,
    altKey: s,
    shiftKey: l,
    bubbles: !0,
    cancelable: !0
  });
  qe.isOpening = r, _e(e), e.dispatchEvent(c), qe.isOpening = !1;
}
qe.isOpening = !1;
function Cs(e, t) {
  if (e instanceof HTMLAnchorElement)
    t(e);
  else if (e.hasAttribute("data-href")) {
    let r = document.createElement("a");
    r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), t(r), e.removeChild(r);
  }
}
function Is(e, t) {
  Cs(e, (r) => qe(r, t));
}
let Ye = /* @__PURE__ */ new Map(), Tr = /* @__PURE__ */ new Set();
function Nn() {
  if (typeof window > "u")
    return;
  function e(n) {
    return "propertyName" in n;
  }
  let t = (n) => {
    if (!e(n) || !n.target)
      return;
    let a = Ye.get(n.target);
    a || (a = /* @__PURE__ */ new Set(), Ye.set(n.target, a), n.target.addEventListener("transitioncancel", r, {
      once: !0
    })), a.add(n.propertyName);
  }, r = (n) => {
    if (!e(n) || !n.target)
      return;
    let a = Ye.get(n.target);
    if (a && (a.delete(n.propertyName), a.size === 0 && (n.target.removeEventListener("transitioncancel", r), Ye.delete(n.target)), Ye.size === 0)) {
      for (let i of Tr)
        i();
      Tr.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", r);
}
typeof document < "u" && (document.readyState !== "loading" ? Nn() : document.addEventListener("DOMContentLoaded", Nn));
function Na(e) {
  requestAnimationFrame(() => {
    Ye.size === 0 ? e() : Tr.add(e);
  });
}
function Ms() {
  let e = re(/* @__PURE__ */ new Map()), t = pe((a, i, o, s) => {
    let l = s != null && s.once ? (...c) => {
      e.current.delete(o), o(...c);
    } : o;
    e.current.set(o, {
      type: i,
      eventTarget: a,
      fn: l,
      options: s
    }), a.addEventListener(i, o, s);
  }, []), r = pe((a, i, o, s) => {
    var l;
    let c = ((l = e.current.get(o)) === null || l === void 0 ? void 0 : l.fn) || o;
    a.removeEventListener(i, c, s), e.current.delete(o);
  }, []), n = pe(() => {
    e.current.forEach((a, i) => {
      r(a.eventTarget, a.type, i, a.options);
    });
  }, [
    r
  ]);
  return ce(() => n, [
    n
  ]), {
    addGlobalListener: t,
    removeGlobalListener: r,
    removeAllGlobalListeners: n
  };
}
function _s(e, t) {
  let { id: r, "aria-label": n, "aria-labelledby": a } = e;
  return r = Ft(r), a && n ? a = [
    .../* @__PURE__ */ new Set([
      r,
      ...a.trim().split(/\s+/)
    ])
  ].join(" ") : a && (a = a.trim().split(/\s+/).join(" ")), !n && !a && t && (n = t), {
    id: r,
    "aria-label": n,
    "aria-labelledby": a
  };
}
function Ra(e, t) {
  Fe(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function Sr(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : La() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Ls(e) {
  return !La() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
function Ns(e, t, r) {
  let n = re(t), a = se(() => {
    r && r(n.current);
  });
  ce(() => {
    var i;
    let o = e == null || (i = e.current) === null || i === void 0 ? void 0 : i.form;
    return o == null || o.addEventListener("reset", a), () => {
      o == null || o.removeEventListener("reset", a);
    };
  }, [
    e,
    a
  ]);
}
function Rs(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Da(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to " + r + " private field on non-instance");
  return t.get(e);
}
function Ds(e, t) {
  var r = Da(e, t, "get");
  return Rs(e, r);
}
function js(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Fs(e, t, r) {
  js(e, t), t.set(e, r);
}
function zs(e, t, r) {
  if (t.set)
    t.set.call(e, r);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = r;
  }
}
function Rn(e, t, r) {
  var n = Da(e, t, "set");
  return zs(e, n, r), r;
}
let Ke = "default", Or = "", Mt = /* @__PURE__ */ new WeakMap();
function Dn(e) {
  if (_a()) {
    if (Ke === "default") {
      const t = le(e);
      Or = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    Ke = "disabled";
  } else
    (e instanceof HTMLElement || e instanceof SVGElement) && (Mt.set(e, e.style.userSelect), e.style.userSelect = "none");
}
function St(e) {
  if (_a()) {
    if (Ke !== "disabled")
      return;
    Ke = "restoring", setTimeout(() => {
      Na(() => {
        if (Ke === "restoring") {
          const t = le(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = Or || ""), Or = "", Ke = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Mt.has(e)) {
    let t = Mt.get(e);
    e.style.userSelect === "none" && (e.style.userSelect = t), e.getAttribute("style") === "" && e.removeAttribute("style"), Mt.delete(e);
  }
}
const ja = fe.createContext({
  register: () => {
  }
});
ja.displayName = "PressResponderContext";
function Ys(e) {
  let t = je(ja);
  if (t) {
    let { register: r, ...n } = t;
    e = be(n, e), r();
  }
  return Ra(t, e.ref), e;
}
var Ot = /* @__PURE__ */ new WeakMap();
class At {
  continuePropagation() {
    Rn(this, Ot, !1);
  }
  get shouldStopPropagation() {
    return Ds(this, Ot);
  }
  constructor(t, r, n) {
    Fs(this, Ot, {
      writable: !0,
      value: void 0
    }), Rn(this, Ot, !0), this.type = t, this.pointerType = r, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey;
  }
}
const jn = Symbol("linkClicked");
function Fa(e) {
  let {
    onPress: t,
    onPressChange: r,
    onPressStart: n,
    onPressEnd: a,
    onPressUp: i,
    isDisabled: o,
    isPressed: s,
    preventFocusOnPress: l,
    shouldCancelOnPointerExit: c,
    allowTextSelectionOnPress: u,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: d,
    ...p
  } = Ys(e), [b, S] = ue(!1), x = re({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    ignoreClickAfterPress: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null
  }), { addGlobalListener: w, removeAllGlobalListeners: C } = Ms(), I = se((f, A) => {
    let V = x.current;
    if (o || V.didFirePressStart)
      return !1;
    let P = !0;
    if (V.isTriggeringEvent = !0, n) {
      let W = new At("pressstart", A, f);
      n(W), P = W.shouldStopPropagation;
    }
    return r && r(!0), V.isTriggeringEvent = !1, V.didFirePressStart = !0, S(!0), P;
  }), E = se((f, A, V = !0) => {
    let P = x.current;
    if (!P.didFirePressStart)
      return !1;
    P.ignoreClickAfterPress = !0, P.didFirePressStart = !1, P.isTriggeringEvent = !0;
    let W = !0;
    if (a) {
      let m = new At("pressend", A, f);
      a(m), W = m.shouldStopPropagation;
    }
    if (r && r(!1), S(!1), t && V && !o) {
      let m = new At("press", A, f);
      t(m), W && (W = m.shouldStopPropagation);
    }
    return P.isTriggeringEvent = !1, W;
  }), O = se((f, A) => {
    let V = x.current;
    if (o)
      return !1;
    if (i) {
      V.isTriggeringEvent = !0;
      let P = new At("pressup", A, f);
      return i(P), V.isTriggeringEvent = !1, P.shouldStopPropagation;
    }
    return !0;
  }), v = se((f) => {
    let A = x.current;
    A.isPressed && A.target && (A.isOverTarget && A.pointerType != null && E(ge(A.target, f), A.pointerType, !1), A.isPressed = !1, A.isOverTarget = !1, A.activePointerId = null, A.pointerType = null, C(), u || St(A.target));
  }), Q = se((f) => {
    c && v(f);
  }), ee = tt(() => {
    let f = x.current, A = {
      onKeyDown(P) {
        if (sr(P.nativeEvent, P.currentTarget) && P.currentTarget.contains(P.target)) {
          var W;
          zn(P.target, P.key) && P.preventDefault();
          let m = !0;
          if (!f.isPressed && !P.repeat) {
            f.target = P.currentTarget, f.isPressed = !0, m = I(P, "keyboard");
            let y = P.currentTarget, X = (te) => {
              sr(te, y) && !te.repeat && y.contains(te.target) && f.target && O(ge(f.target, te), "keyboard");
            };
            w(le(P.currentTarget), "keyup", Ia(X, V), !0);
          }
          m && P.stopPropagation(), P.metaKey && ct() && ((W = f.metaKeyEvents) === null || W === void 0 || W.set(P.key, P.nativeEvent));
        } else
          P.key === "Meta" && (f.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(P) {
        if (!(P && !P.currentTarget.contains(P.target)) && P && P.button === 0 && !f.isTriggeringEvent && !qe.isOpening) {
          let W = !0;
          if (o && P.preventDefault(), !f.ignoreClickAfterPress && !f.ignoreEmulatedMouseEvents && !f.isPressed && (f.pointerType === "virtual" || Sr(P.nativeEvent))) {
            !o && !l && _e(P.currentTarget);
            let m = I(P, "virtual"), y = O(P, "virtual"), X = E(P, "virtual");
            W = m && y && X;
          }
          f.ignoreEmulatedMouseEvents = !1, f.ignoreClickAfterPress = !1, W && P.stopPropagation();
        }
      }
    }, V = (P) => {
      var W;
      if (f.isPressed && f.target && sr(P, f.target)) {
        var m;
        zn(P.target, P.key) && P.preventDefault();
        let X = P.target;
        E(ge(f.target, P), "keyboard", f.target.contains(X)), C(), P.key !== "Enter" && Br(f.target) && f.target.contains(X) && !P[jn] && (P[jn] = !0, qe(f.target, P, !1)), f.isPressed = !1, (m = f.metaKeyEvents) === null || m === void 0 || m.delete(P.key);
      } else if (P.key === "Meta" && (!((W = f.metaKeyEvents) === null || W === void 0) && W.size)) {
        var y;
        let X = f.metaKeyEvents;
        f.metaKeyEvents = void 0;
        for (let te of X.values())
          (y = f.target) === null || y === void 0 || y.dispatchEvent(new KeyboardEvent("keyup", te));
      }
    };
    if (typeof PointerEvent < "u") {
      A.onPointerDown = (y) => {
        if (y.button !== 0 || !y.currentTarget.contains(y.target))
          return;
        if (Ls(y.nativeEvent)) {
          f.pointerType = "virtual";
          return;
        }
        lr(y.currentTarget) && y.preventDefault(), f.pointerType = y.pointerType;
        let X = !0;
        f.isPressed || (f.isPressed = !0, f.isOverTarget = !0, f.activePointerId = y.pointerId, f.target = y.currentTarget, !o && !l && _e(y.currentTarget), u || Dn(f.target), X = I(y, f.pointerType), w(le(y.currentTarget), "pointermove", P, !1), w(le(y.currentTarget), "pointerup", W, !1), w(le(y.currentTarget), "pointercancel", m, !1)), X && y.stopPropagation();
      }, A.onMouseDown = (y) => {
        y.currentTarget.contains(y.target) && y.button === 0 && (lr(y.currentTarget) && y.preventDefault(), y.stopPropagation());
      }, A.onPointerUp = (y) => {
        !y.currentTarget.contains(y.target) || f.pointerType === "virtual" || y.button === 0 && ze(y, y.currentTarget) && O(y, f.pointerType || y.pointerType);
      };
      let P = (y) => {
        y.pointerId === f.activePointerId && (f.target && ze(y, f.target) ? !f.isOverTarget && f.pointerType != null && (f.isOverTarget = !0, I(ge(f.target, y), f.pointerType)) : f.target && f.isOverTarget && f.pointerType != null && (f.isOverTarget = !1, E(ge(f.target, y), f.pointerType, !1), Q(y)));
      }, W = (y) => {
        y.pointerId === f.activePointerId && f.isPressed && y.button === 0 && f.target && (ze(y, f.target) && f.pointerType != null ? E(ge(f.target, y), f.pointerType) : f.isOverTarget && f.pointerType != null && E(ge(f.target, y), f.pointerType, !1), f.isPressed = !1, f.isOverTarget = !1, f.activePointerId = null, f.pointerType = null, C(), u || St(f.target));
      }, m = (y) => {
        v(y);
      };
      A.onDragStart = (y) => {
        y.currentTarget.contains(y.target) && v(y);
      };
    } else {
      A.onMouseDown = (m) => {
        if (m.button !== 0 || !m.currentTarget.contains(m.target))
          return;
        if (lr(m.currentTarget) && m.preventDefault(), f.ignoreEmulatedMouseEvents) {
          m.stopPropagation();
          return;
        }
        f.isPressed = !0, f.isOverTarget = !0, f.target = m.currentTarget, f.pointerType = Sr(m.nativeEvent) ? "virtual" : "mouse", !o && !l && _e(m.currentTarget), I(m, f.pointerType) && m.stopPropagation(), w(le(m.currentTarget), "mouseup", P, !1);
      }, A.onMouseEnter = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        let y = !0;
        f.isPressed && !f.ignoreEmulatedMouseEvents && f.pointerType != null && (f.isOverTarget = !0, y = I(m, f.pointerType)), y && m.stopPropagation();
      }, A.onMouseLeave = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        let y = !0;
        f.isPressed && !f.ignoreEmulatedMouseEvents && f.pointerType != null && (f.isOverTarget = !1, y = E(m, f.pointerType, !1), Q(m)), y && m.stopPropagation();
      }, A.onMouseUp = (m) => {
        m.currentTarget.contains(m.target) && !f.ignoreEmulatedMouseEvents && m.button === 0 && O(m, f.pointerType || "mouse");
      };
      let P = (m) => {
        if (m.button === 0) {
          if (f.isPressed = !1, C(), f.ignoreEmulatedMouseEvents) {
            f.ignoreEmulatedMouseEvents = !1;
            return;
          }
          f.target && ze(m, f.target) && f.pointerType != null ? E(ge(f.target, m), f.pointerType) : f.target && f.isOverTarget && f.pointerType != null && E(ge(f.target, m), f.pointerType, !1), f.isOverTarget = !1;
        }
      };
      A.onTouchStart = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        let y = Vs(m.nativeEvent);
        if (!y)
          return;
        f.activePointerId = y.identifier, f.ignoreEmulatedMouseEvents = !0, f.isOverTarget = !0, f.isPressed = !0, f.target = m.currentTarget, f.pointerType = "touch", !o && !l && _e(m.currentTarget), u || Dn(f.target), I(m, f.pointerType) && m.stopPropagation(), w(Re(m.currentTarget), "scroll", W, !0);
      }, A.onTouchMove = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        if (!f.isPressed) {
          m.stopPropagation();
          return;
        }
        let y = Fn(m.nativeEvent, f.activePointerId), X = !0;
        y && ze(y, m.currentTarget) ? !f.isOverTarget && f.pointerType != null && (f.isOverTarget = !0, X = I(m, f.pointerType)) : f.isOverTarget && f.pointerType != null && (f.isOverTarget = !1, X = E(m, f.pointerType, !1), Q(m)), X && m.stopPropagation();
      }, A.onTouchEnd = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        if (!f.isPressed) {
          m.stopPropagation();
          return;
        }
        let y = Fn(m.nativeEvent, f.activePointerId), X = !0;
        y && ze(y, m.currentTarget) && f.pointerType != null ? (O(m, f.pointerType), X = E(m, f.pointerType)) : f.isOverTarget && f.pointerType != null && (X = E(m, f.pointerType, !1)), X && m.stopPropagation(), f.isPressed = !1, f.activePointerId = null, f.isOverTarget = !1, f.ignoreEmulatedMouseEvents = !0, f.target && !u && St(f.target), C();
      }, A.onTouchCancel = (m) => {
        m.currentTarget.contains(m.target) && (m.stopPropagation(), f.isPressed && v(m));
      };
      let W = (m) => {
        f.isPressed && m.target.contains(f.target) && v({
          currentTarget: f.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      A.onDragStart = (m) => {
        m.currentTarget.contains(m.target) && v(m);
      };
    }
    return A;
  }, [
    w,
    o,
    l,
    C,
    u,
    v,
    Q,
    E,
    I,
    O
  ]);
  return ce(() => () => {
    var f;
    u || St((f = x.current.target) !== null && f !== void 0 ? f : void 0);
  }, [
    u
  ]), {
    isPressed: s || b,
    pressProps: be(p, ee)
  };
}
function Br(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function sr(e, t) {
  const { key: r, code: n } = e, a = t, i = a.getAttribute("role");
  return (r === "Enter" || r === " " || r === "Spacebar" || n === "Space") && !(a instanceof Re(a).HTMLInputElement && !za(a, r) || a instanceof Re(a).HTMLTextAreaElement || a.isContentEditable) && // Links should only trigger with Enter key
  !((i === "link" || !i && Br(a)) && r !== "Enter");
}
function Vs(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function Fn(e, t) {
  const r = e.changedTouches;
  for (let n = 0; n < r.length; n++) {
    const a = r[n];
    if (a.identifier === t)
      return a;
  }
  return null;
}
function ge(e, t) {
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey
  };
}
function Hs(e) {
  let t = 0, r = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? r = e.height / 2 : e.radiusY !== void 0 && (r = e.radiusY), {
    top: e.clientY - r,
    right: e.clientX + t,
    bottom: e.clientY + r,
    left: e.clientX - t
  };
}
function Us(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function ze(e, t) {
  let r = t.getBoundingClientRect(), n = Hs(e);
  return Us(r, n);
}
function lr(e) {
  return !(e instanceof HTMLElement) || !e.hasAttribute("draggable");
}
function zn(e, t) {
  return e instanceof HTMLInputElement ? !za(e, t) : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Br(e);
}
const Ks = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function za(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : Ks.has(e.type);
}
class Ws {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = !0, this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0;
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {
  }
  constructor(t, r) {
    this.nativeEvent = r, this.target = r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget, this.bubbles = r.bubbles, this.cancelable = r.cancelable, this.defaultPrevented = r.defaultPrevented, this.eventPhase = r.eventPhase, this.isTrusted = r.isTrusted, this.timeStamp = r.timeStamp, this.type = t;
  }
}
function Bs(e) {
  let t = re({
    isFocused: !1,
    observer: null
  });
  Fe(() => {
    const n = t.current;
    return () => {
      n.observer && (n.observer.disconnect(), n.observer = null);
    };
  }, []);
  let r = se((n) => {
    e == null || e(n);
  });
  return pe((n) => {
    if (n.target instanceof HTMLButtonElement || n.target instanceof HTMLInputElement || n.target instanceof HTMLTextAreaElement || n.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let a = n.target, i = (o) => {
        t.current.isFocused = !1, a.disabled && r(new Ws("blur", o)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      a.addEventListener("focusout", i, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && a.disabled) {
          var o;
          (o = t.current.observer) === null || o === void 0 || o.disconnect();
          let s = a === document.activeElement ? null : document.activeElement;
          a.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: s
          })), a.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: s
          }));
        }
      }), t.current.observer.observe(a, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    r
  ]);
}
function qs(e) {
  let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: a } = e;
  const i = pe((l) => {
    if (l.target === l.currentTarget)
      return n && n(l), a && a(!1), !0;
  }, [
    n,
    a
  ]), o = Bs(i), s = pe((l) => {
    l.target === l.currentTarget && document.activeElement === l.target && (r && r(l), a && a(!0), o(l));
  }, [
    a,
    r,
    o
  ]);
  return {
    focusProps: {
      onFocus: !t && (r || a || n) ? s : void 0,
      onBlur: !t && (n || a) ? i : void 0
    }
  };
}
let Je = null, Gs = /* @__PURE__ */ new Set(), at = /* @__PURE__ */ new Map(), De = !1, Ar = !1;
function Bt(e, t) {
  for (let r of Gs)
    r(e, t);
}
function Xs(e) {
  return !(e.metaKey || !ct() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function zt(e) {
  De = !0, Xs(e) && (Je = "keyboard", Bt("keyboard", e));
}
function oe(e) {
  Je = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (De = !0, Bt("pointer", e));
}
function Ya(e) {
  Sr(e) && (De = !0, Je = "virtual");
}
function Va(e) {
  e.target === window || e.target === document || (!De && !Ar && (Je = "virtual", Bt("virtual", e)), De = !1, Ar = !1);
}
function Ha() {
  De = !1, Ar = !0;
}
function Yn(e) {
  if (typeof window > "u" || at.get(Re(e)))
    return;
  const t = Re(e), r = le(e);
  let n = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    De = !0, n.apply(this, arguments);
  }, r.addEventListener("keydown", zt, !0), r.addEventListener("keyup", zt, !0), r.addEventListener("click", Ya, !0), t.addEventListener("focus", Va, !0), t.addEventListener("blur", Ha, !1), typeof PointerEvent < "u" ? (r.addEventListener("pointerdown", oe, !0), r.addEventListener("pointermove", oe, !0), r.addEventListener("pointerup", oe, !0)) : (r.addEventListener("mousedown", oe, !0), r.addEventListener("mousemove", oe, !0), r.addEventListener("mouseup", oe, !0)), t.addEventListener("beforeunload", () => {
    Ua(e);
  }, {
    once: !0
  }), at.set(t, {
    focus: n
  });
}
const Ua = (e, t) => {
  const r = Re(e), n = le(e);
  t && n.removeEventListener("DOMContentLoaded", t), at.has(r) && (r.HTMLElement.prototype.focus = at.get(r).focus, n.removeEventListener("keydown", zt, !0), n.removeEventListener("keyup", zt, !0), n.removeEventListener("click", Ya, !0), r.removeEventListener("focus", Va, !0), r.removeEventListener("blur", Ha, !1), typeof PointerEvent < "u" ? (n.removeEventListener("pointerdown", oe, !0), n.removeEventListener("pointermove", oe, !0), n.removeEventListener("pointerup", oe, !0)) : (n.removeEventListener("mousedown", oe, !0), n.removeEventListener("mousemove", oe, !0), n.removeEventListener("mouseup", oe, !0)), at.delete(r));
};
function Qs(e) {
  const t = le(e);
  let r;
  return t.readyState !== "loading" ? Yn(e) : (r = () => {
    Yn(e);
  }, t.addEventListener("DOMContentLoaded", r)), () => Ua(e, r);
}
typeof document < "u" && Qs();
function Js() {
  return Je;
}
function Zs(e) {
  Je = e, Bt(e, null);
}
let Yt = !1, fr = 0;
function Cr() {
  Yt = !0, setTimeout(() => {
    Yt = !1;
  }, 50);
}
function Vn(e) {
  e.pointerType === "touch" && Cr();
}
function el() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", Vn) : document.addEventListener("touchend", Cr), fr++, () => {
      fr--, !(fr > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Vn) : document.removeEventListener("touchend", Cr));
    };
}
function Ka(e) {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: a } = e, [i, o] = ue(!1), s = re({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  ce(el, []);
  let { hoverProps: l, triggerHoverEnd: c } = tt(() => {
    let u = (b, S) => {
      if (s.pointerType = S, a || S === "touch" || s.isHovered || !b.currentTarget.contains(b.target))
        return;
      s.isHovered = !0;
      let x = b.currentTarget;
      s.target = x, t && t({
        type: "hoverstart",
        target: x,
        pointerType: S
      }), r && r(!0), o(!0);
    }, d = (b, S) => {
      if (s.pointerType = "", s.target = null, S === "touch" || !s.isHovered)
        return;
      s.isHovered = !1;
      let x = b.currentTarget;
      n && n({
        type: "hoverend",
        target: x,
        pointerType: S
      }), r && r(!1), o(!1);
    }, p = {};
    return typeof PointerEvent < "u" ? (p.onPointerEnter = (b) => {
      Yt && b.pointerType === "mouse" || u(b, b.pointerType);
    }, p.onPointerLeave = (b) => {
      !a && b.currentTarget.contains(b.target) && d(b, b.pointerType);
    }) : (p.onTouchStart = () => {
      s.ignoreEmulatedMouseEvents = !0;
    }, p.onMouseEnter = (b) => {
      !s.ignoreEmulatedMouseEvents && !Yt && u(b, "mouse"), s.ignoreEmulatedMouseEvents = !1;
    }, p.onMouseLeave = (b) => {
      !a && b.currentTarget.contains(b.target) && d(b, "mouse");
    }), {
      hoverProps: p,
      triggerHoverEnd: d
    };
  }, [
    t,
    r,
    n,
    a,
    s
  ]);
  return ce(() => {
    a && c({
      currentTarget: s.target
    }, s.pointerType);
  }, [
    a
  ]), {
    hoverProps: l,
    isHovered: i
  };
}
function Hn(e) {
  if (!e)
    return;
  let t = !0;
  return (r) => {
    let n = {
      ...r,
      preventDefault() {
        r.preventDefault();
      },
      isDefaultPrevented() {
        return r.isDefaultPrevented();
      },
      stopPropagation() {
        console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.");
      },
      continuePropagation() {
        t = !1;
      }
    };
    e(n), t && r.stopPropagation();
  };
}
function tl(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: Hn(e.onKeyDown),
      onKeyUp: Hn(e.onKeyUp)
    }
  };
}
function rl(e) {
  const t = le(e);
  if (Js() === "virtual") {
    let r = t.activeElement;
    Na(() => {
      t.activeElement === r && e.isConnected && _e(e);
    });
  } else
    _e(e);
}
function nl(e, t) {
  return !e || !t ? !1 : t.some((r) => r.contains(e));
}
class qr {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(t) {
    return this.fastMap.get(t);
  }
  addTreeNode(t, r, n) {
    let a = this.fastMap.get(r ?? null);
    if (!a)
      return;
    let i = new Un({
      scopeRef: t
    });
    a.addChild(i), i.parent = a, this.fastMap.set(t, i), n && (i.nodeToRestore = n);
  }
  addNode(t) {
    this.fastMap.set(t.scopeRef, t);
  }
  removeTreeNode(t) {
    if (t === null)
      return;
    let r = this.fastMap.get(t);
    if (!r)
      return;
    let n = r.parent;
    for (let i of this.traverse())
      i !== r && r.nodeToRestore && i.nodeToRestore && r.scopeRef && r.scopeRef.current && nl(i.nodeToRestore, r.scopeRef.current) && (i.nodeToRestore = r.nodeToRestore);
    let a = r.children;
    n && (n.removeChild(r), a.size > 0 && a.forEach((i) => n && n.addChild(i))), this.fastMap.delete(r.scopeRef);
  }
  // Pre Order Depth First
  *traverse(t = this.root) {
    if (t.scopeRef != null && (yield t), t.children.size > 0)
      for (let r of t.children)
        yield* this.traverse(r);
  }
  clone() {
    var t;
    let r = new qr();
    var n;
    for (let a of this.traverse())
      r.addTreeNode(a.scopeRef, (n = (t = a.parent) === null || t === void 0 ? void 0 : t.scopeRef) !== null && n !== void 0 ? n : null, a.nodeToRestore);
    return r;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new Un({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class Un {
  addChild(t) {
    this.children.add(t), t.parent = this;
  }
  removeChild(t) {
    this.children.delete(t), t.parent = void 0;
  }
  constructor(t) {
    this.children = /* @__PURE__ */ new Set(), this.contain = !1, this.scopeRef = t.scopeRef;
  }
}
new qr();
let al = /* @__PURE__ */ fe.createContext(null);
function il(e) {
  let t = je(al) || {};
  Ra(t, e);
  let { ref: r, ...n } = t;
  return n;
}
function Gr(e, t) {
  let { focusProps: r } = qs(e), { keyboardProps: n } = tl(e), a = be(r, n), i = il(t), o = e.isDisabled ? {} : i, s = re(e.autoFocus);
  return ce(() => {
    s.current && t.current && rl(t.current), s.current = !1;
  }, [
    t
  ]), {
    focusableProps: be({
      ...a,
      tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
    }, o)
  };
}
function ol(e, t) {
  let {
    elementType: r = "a",
    onPress: n,
    onPressStart: a,
    onPressEnd: i,
    // @ts-ignore
    onClick: o,
    isDisabled: s,
    ...l
  } = e, c = {};
  r !== "a" && (c = {
    role: "link",
    tabIndex: s ? void 0 : 0
  });
  let { focusableProps: u } = Gr(e, t), { pressProps: d, isPressed: p } = Fa({
    onPress: n,
    onPressStart: a,
    onPressEnd: i,
    isDisabled: s,
    ref: t
  }), b = Qe(l, {
    labelable: !0,
    isLink: r === "a"
  }), S = be(u, d), x = Os();
  return {
    isPressed: p,
    linkProps: be(b, {
      ...S,
      ...c,
      "aria-disabled": s || void 0,
      "aria-current": e["aria-current"],
      onClick: (w) => {
        var C;
        (C = d.onClick) === null || C === void 0 || C.call(d, w), o && (o(w), console.warn("onClick is deprecated, please use onPress")), !x.isNative && w.currentTarget instanceof HTMLAnchorElement && w.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
        !w.isDefaultPrevented() && As(w.currentTarget, w) && (w.preventDefault(), x.open(w.currentTarget, w));
      }
    })
  };
}
function Wa(e, t) {
  let {
    elementType: r = "button",
    isDisabled: n,
    onPress: a,
    onPressStart: i,
    onPressEnd: o,
    onPressUp: s,
    onPressChange: l,
    preventFocusOnPress: c,
    allowFocusWhenDisabled: u,
    // @ts-ignore
    onClick: d,
    href: p,
    target: b,
    rel: S,
    type: x = "button"
  } = e, w;
  r === "button" ? w = {
    type: x,
    disabled: n
  } : w = {
    role: "button",
    tabIndex: n ? void 0 : 0,
    href: r === "a" && n ? void 0 : p,
    target: r === "a" ? b : void 0,
    type: r === "input" ? x : void 0,
    disabled: r === "input" ? n : void 0,
    "aria-disabled": !n || r === "input" ? void 0 : n,
    rel: r === "a" ? S : void 0
  };
  let { pressProps: C, isPressed: I } = Fa({
    onPressStart: i,
    onPressEnd: o,
    onPressChange: l,
    onPress: a,
    onPressUp: s,
    isDisabled: n,
    preventFocusOnPress: c,
    ref: t
  }), { focusableProps: E } = Gr(e, t);
  u && (E.tabIndex = n ? -1 : E.tabIndex);
  let O = be(E, C, Qe(e, {
    labelable: !0
  }));
  return {
    isPressed: I,
    buttonProps: be(w, O, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      onClick: (v) => {
        d && (d(v), console.warn("onClick is deprecated, please use onPress"));
      }
    })
  };
}
function sl(e, t, r) {
  let { validationBehavior: n, focus: a } = e;
  Fe(() => {
    if (n === "native" && (r != null && r.current)) {
      let l = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      r.current.setCustomValidity(l), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation(fl(r.current));
    }
  });
  let i = se(() => {
    t.resetValidation();
  }), o = se((l) => {
    var c;
    t.displayValidation.isInvalid || t.commitValidation();
    let u = r == null || (c = r.current) === null || c === void 0 ? void 0 : c.form;
    if (!l.defaultPrevented && r && u && cl(u) === r.current) {
      var d;
      a ? a() : (d = r.current) === null || d === void 0 || d.focus(), Zs("keyboard");
    }
    l.preventDefault();
  }), s = se(() => {
    t.commitValidation();
  });
  ce(() => {
    let l = r == null ? void 0 : r.current;
    if (!l)
      return;
    let c = l.form;
    return l.addEventListener("invalid", o), l.addEventListener("change", s), c == null || c.addEventListener("reset", i), () => {
      l.removeEventListener("invalid", o), l.removeEventListener("change", s), c == null || c.removeEventListener("reset", i);
    };
  }, [
    r,
    o,
    s,
    i,
    n
  ]);
}
function ll(e) {
  let t = e.validity;
  return {
    badInput: t.badInput,
    customError: t.customError,
    patternMismatch: t.patternMismatch,
    rangeOverflow: t.rangeOverflow,
    rangeUnderflow: t.rangeUnderflow,
    stepMismatch: t.stepMismatch,
    tooLong: t.tooLong,
    tooShort: t.tooShort,
    typeMismatch: t.typeMismatch,
    valueMissing: t.valueMissing,
    valid: t.valid
  };
}
function fl(e) {
  return {
    isInvalid: !e.validity.valid,
    validationDetails: ll(e),
    validationErrors: e.validationMessage ? [
      e.validationMessage
    ] : []
  };
}
function cl(e) {
  for (let t = 0; t < e.elements.length; t++) {
    let r = e.elements[t];
    if (!r.validity.valid)
      return r;
  }
  return null;
}
const Ba = {
  badInput: !1,
  customError: !1,
  patternMismatch: !1,
  rangeOverflow: !1,
  rangeUnderflow: !1,
  stepMismatch: !1,
  tooLong: !1,
  tooShort: !1,
  typeMismatch: !1,
  valueMissing: !1,
  valid: !0
}, qa = {
  ...Ba,
  customError: !0,
  valid: !1
}, Ze = {
  isInvalid: !1,
  validationDetails: Ba,
  validationErrors: []
}, ul = qn({}), Kn = "__formValidationState" + Date.now();
function dl(e) {
  if (e[Kn]) {
    let { realtimeValidation: t, displayValidation: r, updateValidation: n, resetValidation: a, commitValidation: i } = e[Kn];
    return {
      realtimeValidation: t,
      displayValidation: r,
      updateValidation: n,
      resetValidation: a,
      commitValidation: i
    };
  }
  return vl(e);
}
function vl(e) {
  let { isInvalid: t, validationState: r, name: n, value: a, builtinValidation: i, validate: o, validationBehavior: s = "aria" } = e;
  r && (t || (t = r === "invalid"));
  let l = t ? {
    isInvalid: !0,
    validationErrors: [],
    validationDetails: qa
  } : null, c = tt(() => Wn(ml(o, a)), [
    o,
    a
  ]);
  i != null && i.validationDetails.valid && (i = null);
  let u = je(ul), d = tt(() => n ? Array.isArray(n) ? n.flatMap((V) => Ir(u[V])) : Ir(u[n]) : [], [
    u,
    n
  ]), [p, b] = ue(u), [S, x] = ue(!1);
  u !== p && (b(u), x(!1));
  let w = tt(() => Wn(S ? [] : d), [
    S,
    d
  ]), C = re(Ze), [I, E] = ue(Ze), O = re(Ze), v = () => {
    if (!Q)
      return;
    ee(!1);
    let V = c || i || C.current;
    cr(V, O.current) || (O.current = V, E(V));
  }, [Q, ee] = ue(!1);
  return ce(v), {
    realtimeValidation: l || w || c || i || Ze,
    displayValidation: s === "native" ? l || w || I : l || w || c || i || I,
    updateValidation(V) {
      s === "aria" && !cr(I, V) ? E(V) : C.current = V;
    },
    resetValidation() {
      let V = Ze;
      cr(V, O.current) || (O.current = V, E(V)), s === "native" && ee(!1), x(!0);
    },
    commitValidation() {
      s === "native" && ee(!0), x(!0);
    }
  };
}
function Ir(e) {
  return e ? Array.isArray(e) ? e : [
    e
  ] : [];
}
function ml(e, t) {
  if (typeof e == "function") {
    let r = e(t);
    if (r && typeof r != "boolean")
      return Ir(r);
  }
  return [];
}
function Wn(e) {
  return e.length ? {
    isInvalid: !0,
    validationErrors: e,
    validationDetails: qa
  } : null;
}
function cr(e, t) {
  return e === t ? !0 : e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((r, n) => r === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([r, n]) => t.validationDetails[r] === n);
}
function pl(e) {
  let { id: t, label: r, "aria-labelledby": n, "aria-label": a, labelElementType: i = "label" } = e;
  t = Ft(t);
  let o = Ft(), s = {};
  r ? (n = n ? `${o} ${n}` : o, s = {
    id: o,
    htmlFor: i === "label" ? t : void 0
  }) : !n && !a && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let l = _s({
    id: t,
    "aria-label": a,
    "aria-labelledby": n
  });
  return {
    labelProps: s,
    fieldProps: l
  };
}
function bl(e) {
  let { description: t, errorMessage: r, isInvalid: n, validationState: a } = e, { labelProps: i, fieldProps: o } = pl(e), s = Ln([
    !!t,
    !!r,
    n,
    a
  ]), l = Ln([
    !!t,
    !!r,
    n,
    a
  ]);
  return o = be(o, {
    "aria-describedby": [
      s,
      // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
      l,
      e["aria-describedby"]
    ].filter(Boolean).join(" ") || void 0
  }), {
    labelProps: i,
    fieldProps: o,
    descriptionProps: {
      id: s
    },
    errorMessageProps: {
      id: l
    }
  };
}
function Ga(e, t) {
  let { inputElementType: r = "input", isDisabled: n = !1, isRequired: a = !1, isReadOnly: i = !1, type: o = "text", validationBehavior: s = "aria" } = e, [l, c] = ts(e.value, e.defaultValue || "", e.onChange), { focusableProps: u } = Gr(e, t), d = dl({
    ...e,
    value: l
  }), { isInvalid: p, validationErrors: b, validationDetails: S } = d.displayValidation, { labelProps: x, fieldProps: w, descriptionProps: C, errorMessageProps: I } = bl({
    ...e,
    isInvalid: p,
    errorMessage: e.errorMessage || b
  }), E = Qe(e, {
    labelable: !0
  });
  const O = {
    type: o,
    pattern: e.pattern
  };
  return Ns(t, l, c), sl(e, d, t), ce(() => {
    if (t.current instanceof Re(t.current).HTMLTextAreaElement) {
      let v = t.current;
      Object.defineProperty(v, "defaultValue", {
        get: () => v.value,
        set: () => {
        },
        configurable: !0
      });
    }
  }, [
    t
  ]), {
    labelProps: x,
    inputProps: be(E, r === "input" && O, {
      disabled: n,
      readOnly: i,
      required: a && s === "native",
      "aria-required": a && s === "aria" || void 0,
      "aria-invalid": p || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-activedescendant": e["aria-activedescendant"],
      "aria-autocomplete": e["aria-autocomplete"],
      "aria-haspopup": e["aria-haspopup"],
      value: l,
      onChange: (v) => c(v.target.value),
      autoComplete: e.autoComplete,
      autoCapitalize: e.autoCapitalize,
      maxLength: e.maxLength,
      minLength: e.minLength,
      name: e.name,
      placeholder: e.placeholder,
      inputMode: e.inputMode,
      // Clipboard events
      onCopy: e.onCopy,
      onCut: e.onCut,
      onPaste: e.onPaste,
      // Composition events
      onCompositionEnd: e.onCompositionEnd,
      onCompositionStart: e.onCompositionStart,
      onCompositionUpdate: e.onCompositionUpdate,
      // Selection events
      onSelect: e.onSelect,
      // Input events
      onBeforeInput: e.onBeforeInput,
      onInput: e.onInput,
      ...u,
      ...w
    }),
    descriptionProps: C,
    errorMessageProps: I,
    isInvalid: p,
    validationErrors: b,
    validationDetails: S
  };
}
const Pe = "px-2 py-1 rounded-md", gl = {
  flat: {
    primary: `${Pe} bg-transparent text-ev-primary data-[hovered]:bg-ev-primary/20 data-[pressed]:bg-ev-primary/40 data-[hovered]:dark:bg-ev-primary/20 data-[pressed]:dark:bg-ev-primary/40 disabled:text-ev-primary/40`,
    secondary: `${Pe} bg-transparent text-ev-secondary data-[hovered]:bg-ev-secondary/20 data-[pressed]:bg-ev-secondary/40 data-[hovered]:dark:bg-ev-secondary/20  data-[pressed]:dark:bg-ev-secondary/40 disabled:text-ev-secondary/40`,
    destructive: `${Pe} bg-transparent text-ev-destructive data-[hovered]:bg-ev-destructive/20 data-[pressed]:bg-ev-destructive/40 data-[hovered]:dark:bg-ev-destructive/20  data-[pressed]:dark:bg-ev-destructive/40 disabled:text-ev-destructive/40`,
    foreground: `${Pe} bg-transparent text-ev-dark data-[hovered]:bg-ev-dark/20 data-[pressed]:bg-ev-dark/40 dark:text-ev-light data-[hovered]:dark:bg-ev-light/20  data-[pressed]:dark:bg-ev-light/40 disabled:text-ev-dark/40`
  },
  solid: {
    primary: `${Pe} bg-ev-primary hover:bg-ev-primary-hard pressed:bg-ev-primary-harder text-ev-light disabled:bg-ev-primary/40`,
    secondary: `${Pe} bg-ev-secondary hover:bg-ev-secondary-hard pressed:bg-ev-primary-harder text-ev-light disabled:bg-ev-secondary-hard/40`,
    destructive: `${Pe} bg-ev-destructive hover:bg-ev-destructive-hard pressed:bg-ev-destructive-harder text-ev-light disabled:bg-ev-destructive-hard/40`,
    foreground: `${Pe} bg-ev-dark text-ev-light hover:bg-ev-dark-hard pressed:bg-ev-dark-harder dark:bg-ev-light dark:text-ev-dark dark:hover:bg-ev-light-hard  dark:pressed:bg-ev-light-harder disabled:bg-ev-dark-hard/40`
  }
}, yl = ({ variant: e = "solid", color: t = "primary" }) => gl[e][t], Yl = Gn(
  ({ children: e, ...t }, r) => {
    const { buttonProps: n, isPressed: a } = Wa(
      t,
      r
    ), { hoverProps: i, isHovered: o } = Ka({});
    return /* @__PURE__ */ N(
      "button",
      {
        ref: r,
        ...Qe(t),
        ...i,
        ...n,
        ...t.isDisabled && { "data-disabled": !0, disabled: !0 },
        ...a && { "data-pressed": a },
        ...o && !a && !t.isDisabled && { "data-hovered": o },
        className: B(yl(t), t.className),
        children: e
      }
    );
  }
), ke = "w-[32px] h-[32px] rounded-md", hl = {
  flat: {
    primary: `${ke} bg-transparent text-ev-primary data-[hovered]:bg-ev-primary/20 data-[pressed]:bg-ev-primary/40 data-[hovered]:dark:bg-ev-primary/20 data-[pressed]:dark:bg-ev-primary/40 disabled:text-ev-primary/40`,
    secondary: `${ke} bg-transparent text-ev-secondary data-[hovered]:bg-ev-secondary/20 data-[pressed]:bg-ev-secondary/40 data-[hovered]:dark:bg-ev-secondary/20  data-[pressed]:dark:bg-ev-secondary/40 disabled:text-ev-secondary/40`,
    destructive: `${ke} bg-transparent text-ev-destructive data-[hovered]:bg-ev-destructive/20 data-[pressed]:bg-ev-destructive/40 data-[hovered]:dark:bg-ev-destructive/20  data-[pressed]:dark:bg-ev-destructive/40 disabled:text-ev-destructive/40`,
    foreground: `${ke} bg-transparent text-ev-dark data-[hovered]:bg-ev-dark/20 data-[pressed]:bg-ev-dark/40 dark:text-ev-light data-[hovered]:dark:bg-ev-light/20  data-[pressed]:dark:bg-ev-light/40 disabled:text-ev-dark/40`
  },
  solid: {
    primary: `${ke} bg-ev-primary hover:bg-ev-primary-hard pressed:bg-ev-primary-harder text-ev-light disabled:bg-ev-primary/40`,
    secondary: `${ke} bg-ev-secondary hover:bg-ev-secondary-hard pressed:bg-ev-primary-harder text-ev-light disabled:bg-ev-secondary-hard/40`,
    destructive: `${ke} bg-ev-destructive hover:bg-ev-destructive-hard pressed:bg-ev-destructive-harder text-ev-light disabled:bg-ev-destructive-hard/40`,
    foreground: `${ke} bg-ev-dark text-ev-light hover:bg-ev-dark-hard pressed:bg-ev-dark-harder dark:bg-ev-light dark:text-ev-dark dark:hover:bg-ev-light-hard  dark:pressed:bg-ev-light-harder disabled:bg-ev-dark-hard/40`
  }
}, xl = ({ variant: e = "flat", color: t = "foreground" }) => hl[e][t], Vl = Gn(
  ({ children: e, ...t }, r) => {
    const { buttonProps: n, isPressed: a } = Wa(
      t,
      r
    ), { hoverProps: i, isHovered: o } = Ka({});
    return /* @__PURE__ */ N(
      "button",
      {
        ref: r,
        ...Qe(t),
        ...i,
        ...n,
        ...t.isDisabled && { "data-disabled": !0, disabled: !0 },
        ...a && { "data-pressed": a },
        ...o && !a && !t.isDisabled && { "data-hovered": o },
        className: B(xl(t), t.className),
        children: e
      }
    );
  }
), Bn = "underline decoration-dashed px-2 py-1 rounded hover:decoration-solid", wl = {
  primary: `${Bn} text-ev-primary hover:text-ev-primary-hard`,
  secondary: `${Bn} text-ev-secondary hover:text-ev-secondary-hard`
}, $l = ({ color: e = "primary" }) => wl[e], Hl = ({
  children: e,
  showExternalIcon: t = !0,
  ...r
}) => {
  const n = re(null), { linkProps: a } = ol(r, n);
  return /* @__PURE__ */ ae(
    "a",
    {
      ref: n,
      ...Qe(r),
      ...a,
      className: B($l(r), r.className),
      children: [
        r.target === "_blank" && t && /* @__PURE__ */ N(Ae, { icon: Xn, className: "mr-2" }),
        e
      ]
    }
  );
}, Ul = ({
  variant: e = "solid",
  className: t,
  labelClassName: r,
  inputClassName: n,
  descriptionClassName: a,
  errorClassName: i,
  ...o
}) => {
  let { label: s } = o, l = re(null), {
    labelProps: c,
    inputProps: u,
    descriptionProps: d,
    errorMessageProps: p,
    isInvalid: b,
    validationErrors: S
  } = Ga(o, l);
  return /* @__PURE__ */ ae("div", { className: B("flex flex-col w-full", t), children: [
    e === "solid" && /* @__PURE__ */ N(
      "label",
      {
        ...c,
        className: B(c.className, r),
        children: s
      }
    ),
    /* @__PURE__ */ N(
      "input",
      {
        ...u,
        className: B(
          `bg-inherit ${e === "flat" && "border-0 "} ${e === "solid" && "border-2 border-ev-dark rounded-sm"}`,
          n
        ),
        ref: l
      }
    ),
    o.description && /* @__PURE__ */ N(
      "div",
      {
        ...d,
        className: B("text-[12px]", a),
        children: o.description
      }
    ),
    b && /* @__PURE__ */ N(
      "div",
      {
        ...p,
        className: B("text-red-700 text-[12px]", i),
        children: S.join(" ")
      }
    )
  ] });
}, Kl = ({
  variant: e = "solid",
  className: t,
  labelClassName: r,
  inputClassName: n,
  autoResize: a,
  ...i
}) => {
  let { label: o } = i, s = re(null), { labelProps: l, inputProps: c } = Ga(
    {
      ...i,
      inputElementType: "textarea"
    },
    s
  );
  const u = (p) => {
    p.style.height = "auto", p.style.height = `${p.scrollHeight}px`;
  }, d = (p) => {
    c.onInput && c.onInput(p), a && u(p.target);
  };
  return ce(() => {
    a && s.current && u(s.current);
  }, [a]), /* @__PURE__ */ ae("div", { className: B("flex flex-col w-full", t), children: [
    e === "solid" && /* @__PURE__ */ N(
      "label",
      {
        ...l,
        className: B(l.className, r),
        children: o
      }
    ),
    /* @__PURE__ */ N(
      "textarea",
      {
        ...c,
        onInput: d,
        ref: s,
        className: B(
          c.className,
          "bg-inherit h-full",
          n
        )
      }
    )
  ] });
}, Wl = ({
  title: e,
  children: t,
  unmountInvisibleChildren: r
}) => {
  const [n, a] = ue(!1);
  return /* @__PURE__ */ ae(
    "details",
    {
      onToggle: () => a((i) => !i),
      className: "w-full group bg-ev-light-hard dark:bg-ev-dark-hard p-4 rounded-lg",
      open: n,
      children: [
        /* @__PURE__ */ N("summary", { className: "group-[open]:bg-ev-primary text-ev-dark dark:text-ev-light select-none cursor-pointer", children: e }),
        (n || !r) && /* @__PURE__ */ N("div", { className: "mt-3 text-sm  text-ev-dark dark:text-ev-light", children: t })
      ]
    }
  );
}, Bl = ({
  videoId: e,
  startMilliseconds: t = 0
}) => /* @__PURE__ */ N("div", { className: "relative w-full h-auto pb-[56.25%]", children: /* @__PURE__ */ N(
  "iframe",
  {
    src: `https://www.youtube-nocookie.com/embed/${e}?start=${t}&rel=0`,
    title: "YouTube video player",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    allowFullScreen: !0,
    className: "absolute w-full h-full ",
    style: { aspectRatio: "16 / 9" }
  }
) });
export {
  zl as A,
  Fl as Blockquote,
  Yl as Button,
  Ll as Code,
  Wl as Collapsible,
  Tl as H1,
  Sl as H2,
  Ol as H3,
  Al as H4,
  Cl as H5,
  Il as H6,
  Vl as IconButton,
  jl as Img,
  Hl as Link,
  Dl as Ol,
  Ml as P,
  Nl as Pre,
  _l as Strong,
  Kl as TextArea,
  Ul as TextField,
  Rl as Ul,
  Bl as YoutubeVideo
};
