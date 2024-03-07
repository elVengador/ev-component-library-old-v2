import { jsxs as ue, jsx as j } from "react/jsx-runtime";
import le, { useState as ve, useRef as ne, useEffect as ce, useCallback as pe, useContext as je, createContext as Gr, useMemo as tt, forwardRef as _n } from "react";
import { twMerge as B } from "tailwind-merge";
var Xa = {
  prefix: "fas",
  iconName: "quote-right",
  icon: [448, 512, [8221, "quote-right-alt"], "f10e", "M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"]
}, Xr = {
  prefix: "fas",
  iconName: "link",
  icon: [640, 512, [128279, "chain"], "f0c1", "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]
}, Qa = {
  prefix: "fas",
  iconName: "quote-left",
  icon: [448, 512, [8220, "quote-left-alt"], "f10d", "M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"]
};
function Zn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zn(Object(n), !0).forEach(function(r) {
      Z(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
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
function er(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Za(e, t, n) {
  return t && er(e.prototype, t), n && er(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ln(e, t) {
  return ti(e) || ri(e, t) || Qr(e, t) || ii();
}
function ut(e) {
  return ei(e) || ni(e) || Qr(e) || ai();
}
function ei(e) {
  if (Array.isArray(e))
    return dn(e);
}
function ti(e) {
  if (Array.isArray(e))
    return e;
}
function ni(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function ri(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, o = !1, i, s;
    try {
      for (n = n.call(e); !(a = (i = n.next()).done) && (r.push(i.value), !(t && r.length === t)); a = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return r;
  }
}
function Qr(e, t) {
  if (e) {
    if (typeof e == "string")
      return dn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return dn(e, t);
  }
}
function dn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ai() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ii() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var tr = function() {
}, Nn = {}, Jr = {}, Zr = null, ea = {
  mark: tr,
  measure: tr
};
try {
  typeof window < "u" && (Nn = window), typeof document < "u" && (Jr = document), typeof MutationObserver < "u" && (Zr = MutationObserver), typeof performance < "u" && (ea = performance);
} catch {
}
var oi = Nn.navigator || {}, nr = oi.userAgent, rr = nr === void 0 ? "" : nr, Te = Nn, G = Jr, ar = Zr, bt = ea;
Te.document;
var $e = !!G.documentElement && !!G.head && typeof G.addEventListener == "function" && typeof G.createElement == "function", ta = ~rr.indexOf("MSIE") || ~rr.indexOf("Trident/"), gt, yt, ht, xt, $t, ye = "___FONT_AWESOME___", vn = 16, na = "fa", ra = "svg-inline--fa", Le = "data-fa-i2svg", mn = "data-fa-pseudo-element", si = "data-fa-pseudo-element-pending", Rn = "data-prefix", Dn = "data-icon", ir = "fontawesome-i2svg", li = "async", fi = ["HTML", "HEAD", "STYLE", "SCRIPT"], aa = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), q = "classic", J = "sharp", jn = [q, J];
function dt(e) {
  return new Proxy(e, {
    get: function(n, r) {
      return r in n ? n[r] : n[q];
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
}), xt)), ui = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, ia = "fa-layers-text", di = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, vi = dt(($t = {}, Z($t, q, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), Z($t, J, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), $t)), oa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mi = oa.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), pi = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ie = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, lt = /* @__PURE__ */ new Set();
Object.keys(ot[q]).map(lt.add.bind(lt));
Object.keys(ot[J]).map(lt.add.bind(lt));
var bi = [].concat(jn, ut(lt), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ie.GROUP, Ie.SWAP_OPACITY, Ie.PRIMARY, Ie.SECONDARY]).concat(oa.map(function(e) {
  return "".concat(e, "x");
})).concat(mi.map(function(e) {
  return "w-".concat(e);
})), nt = Te.FontAwesomeConfig || {};
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
    var t = Ln(e, 2), n = t[0], r = t[1], a = yi(gi(n));
    a != null && (nt[r] = a);
  });
}
var sa = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: na,
  replacementClass: ra,
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
nt.familyPrefix && (nt.cssPrefix = nt.familyPrefix);
var Be = w(w({}, sa), nt);
Be.autoReplaceSvg || (Be.observeMutations = !1);
var T = {};
Object.keys(sa).forEach(function(e) {
  Object.defineProperty(T, e, {
    enumerable: !0,
    set: function(n) {
      Be[e] = n, rt.forEach(function(r) {
        return r(T);
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
    Be.cssPrefix = t, rt.forEach(function(n) {
      return n(T);
    });
  },
  get: function() {
    return Be.cssPrefix;
  }
});
Te.FontAwesomeConfig = T;
var rt = [];
function xi(e) {
  return rt.push(e), function() {
    rt.splice(rt.indexOf(e), 1);
  };
}
var we = vn, me = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function $i(e) {
  if (!(!e || !$e)) {
    var t = G.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var n = G.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
      var o = n[a], i = (o.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(i) > -1 && (r = o);
    }
    return G.head.insertBefore(t, r), e;
  }
}
var wi = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ft() {
  for (var e = 12, t = ""; e-- > 0; )
    t += wi[Math.random() * 62 | 0];
  return t;
}
function Ge(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Fn(e) {
  return e.classList ? Ge(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function la(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Pi(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, '="').concat(la(e[n]), '" ');
  }, "").trim();
}
function Yt(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function zn(e) {
  return e.size !== me.size || e.x !== me.x || e.y !== me.y || e.rotate !== me.rotate || e.flipX || e.flipY;
}
function Ei(e) {
  var t = e.transform, n = e.containerWidth, r = e.iconWidth, a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(o, " ").concat(i, " ").concat(s)
  }, c = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: l,
    path: c
  };
}
function ki(e) {
  var t = e.transform, n = e.width, r = n === void 0 ? vn : n, a = e.height, o = a === void 0 ? vn : a, i = e.startCentered, s = i === void 0 ? !1 : i, l = "";
  return s && ta ? l += "translate(".concat(t.x / we - r / 2, "em, ").concat(t.y / we - o / 2, "em) ") : s ? l += "translate(calc(-50% + ".concat(t.x / we, "em), calc(-50% + ").concat(t.y / we, "em)) ") : l += "translate(".concat(t.x / we, "em, ").concat(t.y / we, "em) "), l += "scale(".concat(t.size / we * (t.flipX ? -1 : 1), ", ").concat(t.size / we * (t.flipY ? -1 : 1), ") "), l += "rotate(".concat(t.rotate, "deg) "), l;
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
  var e = na, t = ra, n = T.cssPrefix, r = T.replacementClass, a = Ti;
  if (n !== e || r !== t) {
    var o = new RegExp("\\.".concat(e, "\\-"), "g"), i = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    a = a.replace(o, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return a;
}
var or = !1;
function Gt() {
  T.autoAddCss && !or && ($i(fa()), or = !0);
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
var fe = he[ye], ca = [], Oi = function e() {
  G.removeEventListener("DOMContentLoaded", e), Lt = 1, ca.map(function(t) {
    return t();
  });
}, Lt = !1;
$e && (Lt = (G.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(G.readyState), Lt || G.addEventListener("DOMContentLoaded", Oi));
function Ai(e) {
  $e && (Lt ? setTimeout(e, 0) : ca.push(e));
}
function vt(e) {
  var t = e.tag, n = e.attributes, r = n === void 0 ? {} : n, a = e.children, o = a === void 0 ? [] : a;
  return typeof e == "string" ? la(e) : "<".concat(t, " ").concat(Pi(r), ">").concat(o.map(vt).join(""), "</").concat(t, ">");
}
function sr(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Ci = function(t, n) {
  return function(r, a, o, i) {
    return t.call(n, r, a, o, i);
  };
}, Xt = function(t, n, r, a) {
  var o = Object.keys(t), i = o.length, s = a !== void 0 ? Ci(n, a) : n, l, c, u;
  for (r === void 0 ? (l = 1, u = t[o[0]]) : (l = 0, u = r); l < i; l++)
    c = o[l], u = s(u, t[c], c, t);
  return u;
};
function Ii(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var a = e.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      var o = e.charCodeAt(n++);
      (o & 64512) == 56320 ? t.push(((a & 1023) << 10) + (o & 1023) + 65536) : (t.push(a), n--);
    } else
      t.push(a);
  }
  return t;
}
function pn(e) {
  var t = Ii(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Mi(e, t) {
  var n = e.length, r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function lr(e) {
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n], a = !!r.icon;
    return a ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function bn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, a = r === void 0 ? !1 : r, o = lr(t);
  typeof fe.hooks.addPack == "function" && !a ? fe.hooks.addPack(e, lr(t)) : fe.styles[e] = w(w({}, fe.styles[e] || {}), o), e === "fas" && bn("fa", t);
}
var wt, Pt, Et, Ye = fe.styles, _i = fe.shims, Li = (wt = {}, Z(wt, q, Object.values(st[q])), Z(wt, J, Object.values(st[J])), wt), Vn = null, ua = {}, da = {}, va = {}, ma = {}, pa = {}, Ni = (Pt = {}, Z(Pt, q, Object.keys(it[q])), Z(Pt, J, Object.keys(it[J])), Pt);
function Ri(e) {
  return ~bi.indexOf(e);
}
function Di(e, t) {
  var n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Ri(a) ? a : null;
}
var ba = function() {
  var t = function(o) {
    return Xt(Ye, function(i, s, l) {
      return i[l] = Xt(s, o, {}), i;
    }, {});
  };
  ua = t(function(a, o, i) {
    if (o[3] && (a[o[3]] = i), o[2]) {
      var s = o[2].filter(function(l) {
        return typeof l == "number";
      });
      s.forEach(function(l) {
        a[l.toString(16)] = i;
      });
    }
    return a;
  }), da = t(function(a, o, i) {
    if (a[i] = i, o[2]) {
      var s = o[2].filter(function(l) {
        return typeof l == "string";
      });
      s.forEach(function(l) {
        a[l] = i;
      });
    }
    return a;
  }), pa = t(function(a, o, i) {
    var s = o[2];
    return a[i] = i, s.forEach(function(l) {
      a[l] = i;
    }), a;
  });
  var n = "far" in Ye || T.autoFetchSvg, r = Xt(_i, function(a, o) {
    var i = o[0], s = o[1], l = o[2];
    return s === "far" && !n && (s = "fas"), typeof i == "string" && (a.names[i] = {
      prefix: s,
      iconName: l
    }), typeof i == "number" && (a.unicodes[i.toString(16)] = {
      prefix: s,
      iconName: l
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  va = r.names, ma = r.unicodes, Vn = Ht(T.styleDefault, {
    family: T.familyDefault
  });
};
xi(function(e) {
  Vn = Ht(e.styleDefault, {
    family: T.familyDefault
  });
});
ba();
function Yn(e, t) {
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
  var t = ma[e], n = Yn("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Se() {
  return Vn;
}
var Hn = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Ht(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.family, r = n === void 0 ? q : n, a = it[r][e], o = ot[r][e] || ot[r][a], i = e in fe.styles ? e : null;
  return o || i || null;
}
var fr = (Et = {}, Z(Et, q, Object.keys(st[q])), Z(Et, J, Object.keys(st[J])), Et);
function Ut(e) {
  var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.skipLookups, a = r === void 0 ? !1 : r, o = (t = {}, Z(t, q, "".concat(T.cssPrefix, "-").concat(q)), Z(t, J, "".concat(T.cssPrefix, "-").concat(J)), t), i = null, s = q;
  (e.includes(o[q]) || e.some(function(c) {
    return fr[q].includes(c);
  })) && (s = q), (e.includes(o[J]) || e.some(function(c) {
    return fr[J].includes(c);
  })) && (s = J);
  var l = e.reduce(function(c, u) {
    var d = Di(T.cssPrefix, u);
    if (Ye[u] ? (u = Li[s].includes(u) ? ci[s][u] : u, i = u, c.prefix = u) : Ni[s].indexOf(u) > -1 ? (i = u, c.prefix = Ht(u, {
      family: s
    })) : d ? c.iconName = d : u !== T.replacementClass && u !== o[q] && u !== o[J] && c.rest.push(u), !a && c.prefix && c.iconName) {
      var g = i === "fa" ? ga(c.iconName) : {}, p = Me(c.prefix, c.iconName);
      g.prefix && (i = null), c.iconName = g.iconName || p || c.iconName, c.prefix = g.prefix || c.prefix, c.prefix === "far" && !Ye.far && Ye.fas && !T.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, Hn());
  return (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"), !l.prefix && s === J && (Ye.fass || T.autoFetchSvg) && (l.prefix = "fass", l.iconName = Me(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || i === "fa") && (l.prefix = Se() || "fas"), l;
}
var zi = /* @__PURE__ */ function() {
  function e() {
    Ja(this, e), this.definitions = {};
  }
  return Za(e, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, a = new Array(r), o = 0; o < r; o++)
        a[o] = arguments[o];
      var i = a.reduce(this._pullDefinitions, {});
      Object.keys(i).forEach(function(s) {
        n.definitions[s] = w(w({}, n.definitions[s] || {}), i[s]), bn(s, i[s]);
        var l = st[q][s];
        l && bn(l, i[s]), ba();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, r) {
      var a = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(a).map(function(o) {
        var i = a[o], s = i.prefix, l = i.iconName, c = i.icon, u = c[2];
        n[s] || (n[s] = {}), u.length > 0 && u.forEach(function(d) {
          typeof d == "string" && (n[s][d] = c);
        }), n[s][l] = c;
      }), n;
    }
  }]), e;
}(), cr = [], He = {}, We = {}, Vi = Object.keys(We);
function Yi(e, t) {
  var n = t.mixoutsTo;
  return cr = e, He = {}, Object.keys(We).forEach(function(r) {
    Vi.indexOf(r) === -1 && delete We[r];
  }), cr.forEach(function(r) {
    var a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach(function(i) {
      typeof a[i] == "function" && (n[i] = a[i]), _t(a[i]) === "object" && Object.keys(a[i]).forEach(function(s) {
        n[i] || (n[i] = {}), n[i][s] = a[i][s];
      });
    }), r.hooks) {
      var o = r.hooks();
      Object.keys(o).forEach(function(i) {
        He[i] || (He[i] = []), He[i].push(o[i]);
      });
    }
    r.provides && r.provides(We);
  }), n;
}
function gn(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  var o = He[e] || [];
  return o.forEach(function(i) {
    t = i.apply(null, [t].concat(r));
  }), t;
}
function Ne(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var a = He[e] || [];
  a.forEach(function(o) {
    o.apply(null, n);
  });
}
function xe() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return We[e] ? We[e].apply(null, t) : void 0;
}
function yn(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, n = e.prefix || Se();
  if (t)
    return t = Me(n, t) || t, sr(ya.definitions, n, t) || sr(fe.styles, n, t);
}
var ya = new zi(), Hi = function() {
  T.autoReplaceSvg = !1, T.observeMutations = !1, Ne("noAuto");
}, Ui = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return $e ? (Ne("beforeI2svg", t), xe("pseudoElements2svg", t), xe("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot;
    T.autoReplaceSvg === !1 && (T.autoReplaceSvg = !0), T.observeMutations = !0, Ai(function() {
      Wi({
        autoReplaceSvgRoot: n
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
      var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], r = Ht(t[0]);
      return {
        prefix: r,
        iconName: Me(r, n) || n
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
      var o = Se();
      return {
        prefix: o,
        iconName: Me(o, t) || t
      };
    }
  }
}, ae = {
  noAuto: Hi,
  config: T,
  dom: Ui,
  parse: Ki,
  library: ya,
  findIconDefinition: yn,
  toHtml: vt
}, Wi = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot, r = n === void 0 ? G : n;
  (Object.keys(fe.styles).length > 0 || T.autoFetchSvg) && $e && T.autoReplaceSvg && ae.dom.i2svg({
    node: r
  });
};
function Kt(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(r) {
        return vt(r);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if ($e) {
        var r = G.createElement("div");
        return r.innerHTML = e.html, r.children;
      }
    }
  }), e;
}
function Bi(e) {
  var t = e.children, n = e.main, r = e.mask, a = e.attributes, o = e.styles, i = e.transform;
  if (zn(i) && n.found && !r.found) {
    var s = n.width, l = n.height, c = {
      x: s / l / 2,
      y: 0.5
    };
    a.style = Yt(w(w({}, o), {}, {
      "transform-origin": "".concat(c.x + i.x / 16, "em ").concat(c.y + i.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function qi(e) {
  var t = e.prefix, n = e.iconName, r = e.children, a = e.attributes, o = e.symbol, i = o === !0 ? "".concat(t, "-").concat(T.cssPrefix, "-").concat(n) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: w(w({}, a), {}, {
        id: i
      }),
      children: r
    }]
  }];
}
function Un(e) {
  var t = e.icons, n = t.main, r = t.mask, a = e.prefix, o = e.iconName, i = e.transform, s = e.symbol, l = e.title, c = e.maskId, u = e.titleId, d = e.extra, g = e.watchable, p = g === void 0 ? !1 : g, S = r.found ? r : n, x = S.width, $ = S.height, C = a === "fak", I = [T.replacementClass, o ? "".concat(T.cssPrefix, "-").concat(o) : ""].filter(function(A) {
    return d.classes.indexOf(A) === -1;
  }).filter(function(A) {
    return A !== "" || !!A;
  }).concat(d.classes).join(" "), k = {
    children: [],
    attributes: w(w({}, d.attributes), {}, {
      "data-prefix": a,
      "data-icon": o,
      class: I,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(x, " ").concat($)
    })
  }, O = C && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(x / $ * 16 * 0.0625, "em")
  } : {};
  p && (k.attributes[Le] = ""), l && (k.children.push({
    tag: "title",
    attributes: {
      id: k.attributes["aria-labelledby"] || "title-".concat(u || ft())
    },
    children: [l]
  }), delete k.attributes.title);
  var v = w(w({}, k), {}, {
    prefix: a,
    iconName: o,
    main: n,
    mask: r,
    maskId: c,
    transform: i,
    symbol: s,
    styles: w(w({}, O), d.styles)
  }), Q = r.found && n.found ? xe("generateAbstractMask", v) || {
    children: [],
    attributes: {}
  } : xe("generateAbstractIcon", v) || {
    children: [],
    attributes: {}
  }, ee = Q.children, f = Q.attributes;
  return v.children = ee, v.attributes = f, s ? qi(v) : Bi(v);
}
function ur(e) {
  var t = e.content, n = e.width, r = e.height, a = e.transform, o = e.title, i = e.extra, s = e.watchable, l = s === void 0 ? !1 : s, c = w(w(w({}, i.attributes), o ? {
    title: o
  } : {}), {}, {
    class: i.classes.join(" ")
  });
  l && (c[Le] = "");
  var u = w({}, i.styles);
  zn(a) && (u.transform = ki({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), u["-webkit-transform"] = u.transform);
  var d = Yt(u);
  d.length > 0 && (c.style = d);
  var g = [];
  return g.push({
    tag: "span",
    attributes: c,
    children: [t]
  }), o && g.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), g;
}
function Gi(e) {
  var t = e.content, n = e.title, r = e.extra, a = w(w(w({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), o = Yt(r.styles);
  o.length > 0 && (a.style = o);
  var i = [];
  return i.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), n && i.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), i;
}
var Qt = fe.styles;
function hn(e) {
  var t = e[0], n = e[1], r = e.slice(4), a = Ln(r, 1), o = a[0], i = null;
  return Array.isArray(o) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(T.cssPrefix, "-").concat(Ie.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(T.cssPrefix, "-").concat(Ie.SECONDARY),
        fill: "currentColor",
        d: o[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(T.cssPrefix, "-").concat(Ie.PRIMARY),
        fill: "currentColor",
        d: o[1]
      }
    }]
  } : i = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: o
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: i
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
function xn(e, t) {
  var n = t;
  return t === "fa" && T.styleDefault !== null && (t = Se()), new Promise(function(r, a) {
    if (xe("missingIconAbstract"), n === "fa") {
      var o = ga(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && Qt[t] && Qt[t][e]) {
      var i = Qt[t][e];
      return r(hn(i));
    }
    Qi(e, t), r(w(w({}, Xi), {}, {
      icon: T.showMissingIcons && e ? xe("missingIconAbstract") || {} : {}
    }));
  });
}
var dr = function() {
}, $n = T.measurePerformance && bt && bt.mark && bt.measure ? bt : {
  mark: dr,
  measure: dr
}, et = 'FA "6.5.1"', Ji = function(t) {
  return $n.mark("".concat(et, " ").concat(t, " begins")), function() {
    return ha(t);
  };
}, ha = function(t) {
  $n.mark("".concat(et, " ").concat(t, " ends")), $n.measure("".concat(et, " ").concat(t), "".concat(et, " ").concat(t, " begins"), "".concat(et, " ").concat(t, " ends"));
}, Kn = {
  begin: Ji,
  end: ha
}, Ct = function() {
};
function vr(e) {
  var t = e.getAttribute ? e.getAttribute(Le) : null;
  return typeof t == "string";
}
function Zi(e) {
  var t = e.getAttribute ? e.getAttribute(Rn) : null, n = e.getAttribute ? e.getAttribute(Dn) : null;
  return t && n;
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
function no(e) {
  return G.createElementNS("http://www.w3.org/2000/svg", e);
}
function ro(e) {
  return G.createElement(e);
}
function xa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.ceFn, r = n === void 0 ? e.tag === "svg" ? no : ro : n;
  if (typeof e == "string")
    return G.createTextNode(e);
  var a = r(e.tag);
  Object.keys(e.attributes || []).forEach(function(i) {
    a.setAttribute(i, e.attributes[i]);
  });
  var o = e.children || [];
  return o.forEach(function(i) {
    a.appendChild(xa(i, {
      ceFn: r
    }));
  }), a;
}
function ao(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var It = {
  replace: function(t) {
    var n = t[0];
    if (n.parentNode)
      if (t[1].forEach(function(a) {
        n.parentNode.insertBefore(xa(a), n);
      }), n.getAttribute(Le) === null && T.keepOriginalSource) {
        var r = G.createComment(ao(n));
        n.parentNode.replaceChild(r, n);
      } else
        n.remove();
  },
  nest: function(t) {
    var n = t[0], r = t[1];
    if (~Fn(n).indexOf(T.replacementClass))
      return It.replace(t);
    var a = new RegExp("".concat(T.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var o = r[0].attributes.class.split(" ").reduce(function(s, l) {
        return l === T.replacementClass || l.match(a) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", o.toNode.join(" "));
    }
    var i = r.map(function(s) {
      return vt(s);
    }).join(`
`);
    n.setAttribute(Le, ""), n.innerHTML = i;
  }
};
function mr(e) {
  e();
}
function $a(e, t) {
  var n = typeof t == "function" ? t : Ct;
  if (e.length === 0)
    n();
  else {
    var r = mr;
    T.mutateApproach === li && (r = Te.requestAnimationFrame || mr), r(function() {
      var a = to(), o = Kn.begin("mutate");
      e.map(a), o(), n();
    });
  }
}
var Wn = !1;
function wa() {
  Wn = !0;
}
function wn() {
  Wn = !1;
}
var Nt = null;
function pr(e) {
  if (ar && T.observeMutations) {
    var t = e.treeCallback, n = t === void 0 ? Ct : t, r = e.nodeCallback, a = r === void 0 ? Ct : r, o = e.pseudoElementsCallback, i = o === void 0 ? Ct : o, s = e.observeMutationsRoot, l = s === void 0 ? G : s;
    Nt = new ar(function(c) {
      if (!Wn) {
        var u = Se();
        Ge(c).forEach(function(d) {
          if (d.type === "childList" && d.addedNodes.length > 0 && !vr(d.addedNodes[0]) && (T.searchPseudoElements && i(d.target), n(d.target)), d.type === "attributes" && d.target.parentNode && T.searchPseudoElements && i(d.target.parentNode), d.type === "attributes" && vr(d.target) && ~pi.indexOf(d.attributeName))
            if (d.attributeName === "class" && Zi(d.target)) {
              var g = Ut(Fn(d.target)), p = g.prefix, S = g.iconName;
              d.target.setAttribute(Rn, p || u), S && d.target.setAttribute(Dn, S);
            } else
              eo(d.target) && a(d.target);
        });
      }
    }), $e && Nt.observe(l, {
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
  var t = e.getAttribute("style"), n = [];
  return t && (n = t.split(";").reduce(function(r, a) {
    var o = a.split(":"), i = o[0], s = o.slice(1);
    return i && s.length > 0 && (r[i] = s.join(":").trim()), r;
  }, {})), n;
}
function so(e) {
  var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "", a = Ut(Fn(e));
  return a.prefix || (a.prefix = Se()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = ji(a.prefix, e.innerText) || Yn(a.prefix, pn(e.innerText))), !a.iconName && T.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function lo(e) {
  var t = Ge(e.attributes).reduce(function(a, o) {
    return a.name !== "class" && a.name !== "style" && (a[o.name] = o.value), a;
  }, {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return T.autoA11y && (n ? t["aria-labelledby"] = "".concat(T.replacementClass, "-title-").concat(r || ft()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
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
function br(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = so(e), r = n.iconName, a = n.prefix, o = n.rest, i = lo(e), s = gn("parseNodeAttributes", {}, e), l = t.styleParser ? oo(e) : [];
  return w({
    iconName: r,
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
      classes: o,
      styles: l,
      attributes: i
    }
  }, s);
}
var co = fe.styles;
function Pa(e) {
  var t = T.autoReplaceSvg === "nest" ? br(e, {
    styleParser: !1
  }) : br(e);
  return ~t.extra.classes.indexOf(ia) ? xe("generateLayersText", e, t) : xe("generateSvgReplacementMutation", e, t);
}
var Oe = /* @__PURE__ */ new Set();
jn.map(function(e) {
  Oe.add("fa-".concat(e));
});
Object.keys(it[q]).map(Oe.add.bind(Oe));
Object.keys(it[J]).map(Oe.add.bind(Oe));
Oe = ut(Oe);
function gr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!$e)
    return Promise.resolve();
  var n = G.documentElement.classList, r = function(d) {
    return n.add("".concat(ir, "-").concat(d));
  }, a = function(d) {
    return n.remove("".concat(ir, "-").concat(d));
  }, o = T.autoFetchSvg ? Oe : jn.map(function(u) {
    return "fa-".concat(u);
  }).concat(Object.keys(co));
  o.includes("fa") || o.push("fa");
  var i = [".".concat(ia, ":not([").concat(Le, "])")].concat(o.map(function(u) {
    return ".".concat(u, ":not([").concat(Le, "])");
  })).join(", ");
  if (i.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = Ge(e.querySelectorAll(i));
  } catch {
  }
  if (s.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  var l = Kn.begin("onTree"), c = s.reduce(function(u, d) {
    try {
      var g = Pa(d);
      g && u.push(g);
    } catch (p) {
      aa || p.name === "MissingIcon" && console.error(p);
    }
    return u;
  }, []);
  return new Promise(function(u, d) {
    Promise.all(c).then(function(g) {
      $a(g, function() {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), l(), u();
      });
    }).catch(function(g) {
      l(), d(g);
    });
  });
}
function uo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Pa(e).then(function(n) {
    n && $a([n], t);
  });
}
function vo(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : yn(t || {}), a = n.mask;
    return a && (a = (a || {}).icon ? a : yn(a || {})), e(r, w(w({}, n), {}, {
      mask: a
    }));
  };
}
var mo = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, a = r === void 0 ? me : r, o = n.symbol, i = o === void 0 ? !1 : o, s = n.mask, l = s === void 0 ? null : s, c = n.maskId, u = c === void 0 ? null : c, d = n.title, g = d === void 0 ? null : d, p = n.titleId, S = p === void 0 ? null : p, x = n.classes, $ = x === void 0 ? [] : x, C = n.attributes, I = C === void 0 ? {} : C, k = n.styles, O = k === void 0 ? {} : k;
  if (t) {
    var v = t.prefix, Q = t.iconName, ee = t.icon;
    return Kt(w({
      type: "icon"
    }, t), function() {
      return Ne("beforeDOMElementCreation", {
        iconDefinition: t,
        params: n
      }), T.autoA11y && (g ? I["aria-labelledby"] = "".concat(T.replacementClass, "-title-").concat(S || ft()) : (I["aria-hidden"] = "true", I.focusable = "false")), Un({
        icons: {
          main: hn(ee),
          mask: l ? hn(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: v,
        iconName: Q,
        transform: w(w({}, me), a),
        symbol: i,
        title: g,
        maskId: u,
        titleId: S,
        extra: {
          attributes: I,
          styles: O,
          classes: $
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
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = gr, n.nodeCallback = uo, n;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(n) {
      var r = n.node, a = r === void 0 ? G : r, o = n.callback, i = o === void 0 ? function() {
      } : o;
      return gr(a, i);
    }, t.generateSvgReplacementMutation = function(n, r) {
      var a = r.iconName, o = r.title, i = r.titleId, s = r.prefix, l = r.transform, c = r.symbol, u = r.mask, d = r.maskId, g = r.extra;
      return new Promise(function(p, S) {
        Promise.all([xn(a, s), u.iconName ? xn(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(x) {
          var $ = Ln(x, 2), C = $[0], I = $[1];
          p([n, Un({
            icons: {
              main: C,
              mask: I
            },
            prefix: s,
            iconName: a,
            transform: l,
            symbol: c,
            maskId: d,
            title: o,
            titleId: i,
            extra: g,
            watchable: !0
          })]);
        }).catch(S);
      });
    }, t.generateAbstractIcon = function(n) {
      var r = n.children, a = n.attributes, o = n.main, i = n.transform, s = n.styles, l = Yt(s);
      l.length > 0 && (a.style = l);
      var c;
      return zn(i) && (c = xe("generateAbstractTransformGrouping", {
        main: o,
        transform: i,
        containerWidth: o.width,
        iconWidth: o.width
      })), r.push(c || o.icon), {
        children: r,
        attributes: a
      };
    };
  }
}, bo = {
  mixout: function() {
    return {
      layer: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.classes, o = a === void 0 ? [] : a;
        return Kt({
          type: "layer"
        }, function() {
          Ne("beforeDOMElementCreation", {
            assembler: n,
            params: r
          });
          var i = [];
          return n(function(s) {
            Array.isArray(s) ? s.map(function(l) {
              i = i.concat(l.abstract);
            }) : i = i.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(T.cssPrefix, "-layers")].concat(ut(o)).join(" ")
            },
            children: i
          }];
        });
      }
    };
  }
}, go = {
  mixout: function() {
    return {
      counter: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.title, o = a === void 0 ? null : a, i = r.classes, s = i === void 0 ? [] : i, l = r.attributes, c = l === void 0 ? {} : l, u = r.styles, d = u === void 0 ? {} : u;
        return Kt({
          type: "counter",
          content: n
        }, function() {
          return Ne("beforeDOMElementCreation", {
            content: n,
            params: r
          }), Gi({
            content: n.toString(),
            title: o,
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
      text: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.transform, o = a === void 0 ? me : a, i = r.title, s = i === void 0 ? null : i, l = r.classes, c = l === void 0 ? [] : l, u = r.attributes, d = u === void 0 ? {} : u, g = r.styles, p = g === void 0 ? {} : g;
        return Kt({
          type: "text",
          content: n
        }, function() {
          return Ne("beforeDOMElementCreation", {
            content: n,
            params: r
          }), ur({
            content: n,
            transform: w(w({}, me), o),
            title: s,
            extra: {
              attributes: d,
              styles: p,
              classes: ["".concat(T.cssPrefix, "-layers-text")].concat(ut(c))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(n, r) {
      var a = r.title, o = r.transform, i = r.extra, s = null, l = null;
      if (ta) {
        var c = parseInt(getComputedStyle(n).fontSize, 10), u = n.getBoundingClientRect();
        s = u.width / c, l = u.height / c;
      }
      return T.autoA11y && !a && (i.attributes["aria-hidden"] = "true"), Promise.resolve([n, ur({
        content: n.innerHTML,
        width: s,
        height: l,
        transform: o,
        title: a,
        extra: i,
        watchable: !0
      })]);
    };
  }
}, ho = new RegExp('"', "ug"), yr = [1105920, 1112319];
function xo(e) {
  var t = e.replace(ho, ""), n = Mi(t, 0), r = n >= yr[0] && n <= yr[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: pn(a ? t[0] : t),
    isSecondary: r || a
  };
}
function hr(e, t) {
  var n = "".concat(si).concat(t.replace(":", "-"));
  return new Promise(function(r, a) {
    if (e.getAttribute(n) !== null)
      return r();
    var o = Ge(e.children), i = o.filter(function(ee) {
      return ee.getAttribute(mn) === t;
    })[0], s = Te.getComputedStyle(e, t), l = s.getPropertyValue("font-family").match(di), c = s.getPropertyValue("font-weight"), u = s.getPropertyValue("content");
    if (i && !l)
      return e.removeChild(i), r();
    if (l && u !== "none" && u !== "") {
      var d = s.getPropertyValue("content"), g = ~["Sharp"].indexOf(l[2]) ? J : q, p = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? ot[g][l[2].toLowerCase()] : vi[g][c], S = xo(d), x = S.value, $ = S.isSecondary, C = l[0].startsWith("FontAwesome"), I = Yn(p, x), k = I;
      if (C) {
        var O = Fi(x);
        O.iconName && O.prefix && (I = O.iconName, p = O.prefix);
      }
      if (I && !$ && (!i || i.getAttribute(Rn) !== p || i.getAttribute(Dn) !== k)) {
        e.setAttribute(n, k), i && e.removeChild(i);
        var v = fo(), Q = v.extra;
        Q.attributes[mn] = t, xn(I, p).then(function(ee) {
          var f = Un(w(w({}, v), {}, {
            icons: {
              main: ee,
              mask: Hn()
            },
            prefix: p,
            iconName: k,
            extra: Q,
            watchable: !0
          })), A = G.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(A, e.firstChild) : e.appendChild(A), A.outerHTML = f.map(function(Y) {
            return vt(Y);
          }).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function $o(e) {
  return Promise.all([hr(e, "::before"), hr(e, "::after")]);
}
function wo(e) {
  return e.parentNode !== document.head && !~fi.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(mn) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function xr(e) {
  if ($e)
    return new Promise(function(t, n) {
      var r = Ge(e.querySelectorAll("*")).filter(wo).map($o), a = Kn.begin("searchPseudoElements");
      wa(), Promise.all(r).then(function() {
        a(), wn(), t();
      }).catch(function() {
        a(), wn(), n();
      });
    });
}
var Po = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = xr, n;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(n) {
      var r = n.node, a = r === void 0 ? G : r;
      T.searchPseudoElements && xr(a);
    };
  }
}, $r = !1, Eo = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          wa(), $r = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        pr(gn("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        io();
      },
      watch: function(n) {
        var r = n.observeMutationsRoot;
        $r ? wn() : pr(gn("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, wr = function(t) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(r, a) {
    var o = a.toLowerCase().split("-"), i = o[0], s = o.slice(1).join("-");
    if (i && s === "h")
      return r.flipX = !0, r;
    if (i && s === "v")
      return r.flipY = !0, r;
    if (s = parseFloat(s), isNaN(s))
      return r;
    switch (i) {
      case "grow":
        r.size = r.size + s;
        break;
      case "shrink":
        r.size = r.size - s;
        break;
      case "left":
        r.x = r.x - s;
        break;
      case "right":
        r.x = r.x + s;
        break;
      case "up":
        r.y = r.y - s;
        break;
      case "down":
        r.y = r.y + s;
        break;
      case "rotate":
        r.rotate = r.rotate + s;
        break;
    }
    return r;
  }, n);
}, ko = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return wr(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-transform");
        return a && (n.transform = wr(a)), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(n) {
      var r = n.main, a = n.transform, o = n.containerWidth, i = n.iconWidth, s = {
        transform: "translate(".concat(o / 2, " 256)")
      }, l = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), c = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), u = "rotate(".concat(a.rotate, " 0 0)"), d = {
        transform: "".concat(l, " ").concat(c, " ").concat(u)
      }, g = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, p = {
        outer: s,
        inner: d,
        path: g
      };
      return {
        tag: "g",
        attributes: w({}, p.outer),
        children: [{
          tag: "g",
          attributes: w({}, p.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: w(w({}, r.icon.attributes), p.path)
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
function Pr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function To(e) {
  return e.tag === "g" ? e.children : [e];
}
var So = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-mask"), o = a ? Ut(a.split(" ").map(function(i) {
          return i.trim();
        })) : Hn();
        return o.prefix || (o.prefix = Se()), n.mask = o, n.maskId = r.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(n) {
      var r = n.children, a = n.attributes, o = n.main, i = n.mask, s = n.maskId, l = n.transform, c = o.width, u = o.icon, d = i.width, g = i.icon, p = Ei({
        transform: l,
        containerWidth: d,
        iconWidth: c
      }), S = {
        tag: "rect",
        attributes: w(w({}, Jt), {}, {
          fill: "white"
        })
      }, x = u.children ? {
        children: u.children.map(Pr)
      } : {}, $ = {
        tag: "g",
        attributes: w({}, p.inner),
        children: [Pr(w({
          tag: u.tag,
          attributes: w(w({}, u.attributes), p.path)
        }, x))]
      }, C = {
        tag: "g",
        attributes: w({}, p.outer),
        children: [$]
      }, I = "mask-".concat(s || ft()), k = "clip-".concat(s || ft()), O = {
        tag: "mask",
        attributes: w(w({}, Jt), {}, {
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
            id: k
          },
          children: To(g)
        }, O]
      };
      return r.push(v, {
        tag: "rect",
        attributes: w({
          fill: "currentColor",
          "clip-path": "url(#".concat(k, ")"),
          mask: "url(#".concat(I, ")")
        }, Jt)
      }), {
        children: r,
        attributes: a
      };
    };
  }
}, Oo = {
  provides: function(t) {
    var n = !1;
    Te.matchMedia && (n = Te.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var r = [], a = {
        fill: "currentColor"
      }, o = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: w(w({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var i = w(w({}, o), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: w(w({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || s.children.push({
        tag: "animate",
        attributes: w(w({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: w(w({}, i), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(s), r.push({
        tag: "path",
        attributes: w(w({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: w(w({}, i), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || r.push({
        tag: "path",
        attributes: w(w({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: w(w({}, i), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, Ao = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-symbol"), o = a === null ? !1 : a === "" ? !0 : a;
        return n.symbol = o, n;
      }
    };
  }
}, Co = [Si, po, bo, go, yo, Po, Eo, ko, So, Oo, Ao];
Yi(Co, {
  mixoutsTo: ae
});
ae.noAuto;
ae.config;
ae.library;
ae.dom;
var Pn = ae.parse;
ae.findIconDefinition;
ae.toHtml;
var Io = ae.icon;
ae.layer;
ae.text;
ae.counter;
function Mo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var En = { exports: {} }, kt = { exports: {} }, H = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Er;
function _o() {
  if (Er)
    return H;
  Er = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
  function k(v) {
    if (typeof v == "object" && v !== null) {
      var Q = v.$$typeof;
      switch (Q) {
        case t:
          switch (v = v.type, v) {
            case l:
            case c:
            case r:
            case o:
            case a:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case u:
                case S:
                case p:
                case i:
                  return v;
                default:
                  return Q;
              }
          }
        case n:
          return Q;
      }
    }
  }
  function O(v) {
    return k(v) === c;
  }
  return H.AsyncMode = l, H.ConcurrentMode = c, H.ContextConsumer = s, H.ContextProvider = i, H.Element = t, H.ForwardRef = u, H.Fragment = r, H.Lazy = S, H.Memo = p, H.Portal = n, H.Profiler = o, H.StrictMode = a, H.Suspense = d, H.isAsyncMode = function(v) {
    return O(v) || k(v) === l;
  }, H.isConcurrentMode = O, H.isContextConsumer = function(v) {
    return k(v) === s;
  }, H.isContextProvider = function(v) {
    return k(v) === i;
  }, H.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, H.isForwardRef = function(v) {
    return k(v) === u;
  }, H.isFragment = function(v) {
    return k(v) === r;
  }, H.isLazy = function(v) {
    return k(v) === S;
  }, H.isMemo = function(v) {
    return k(v) === p;
  }, H.isPortal = function(v) {
    return k(v) === n;
  }, H.isProfiler = function(v) {
    return k(v) === o;
  }, H.isStrictMode = function(v) {
    return k(v) === a;
  }, H.isSuspense = function(v) {
    return k(v) === d;
  }, H.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === c || v === o || v === a || v === d || v === g || typeof v == "object" && v !== null && (v.$$typeof === S || v.$$typeof === p || v.$$typeof === i || v.$$typeof === s || v.$$typeof === u || v.$$typeof === $ || v.$$typeof === C || v.$$typeof === I || v.$$typeof === x);
  }, H.typeOf = k, H;
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
var kr;
function Lo() {
  return kr || (kr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function k(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === r || h === c || h === o || h === a || h === d || h === g || typeof h == "object" && h !== null && (h.$$typeof === S || h.$$typeof === p || h.$$typeof === i || h.$$typeof === s || h.$$typeof === u || h.$$typeof === $ || h.$$typeof === C || h.$$typeof === I || h.$$typeof === x);
    }
    function O(h) {
      if (typeof h == "object" && h !== null) {
        var de = h.$$typeof;
        switch (de) {
          case t:
            var pt = h.type;
            switch (pt) {
              case l:
              case c:
              case r:
              case o:
              case a:
              case d:
                return pt;
              default:
                var Jn = pt && pt.$$typeof;
                switch (Jn) {
                  case s:
                  case u:
                  case S:
                  case p:
                  case i:
                    return Jn;
                  default:
                    return de;
                }
            }
          case n:
            return de;
        }
      }
    }
    var v = l, Q = c, ee = s, f = i, A = t, Y = u, P = r, W = S, m = p, y = n, X = o, te = a, Ce = d, mt = !1;
    function qt(h) {
      return mt || (mt = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(h) || O(h) === l;
    }
    function b(h) {
      return O(h) === c;
    }
    function E(h) {
      return O(h) === s;
    }
    function D(h) {
      return O(h) === i;
    }
    function N(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function M(h) {
      return O(h) === u;
    }
    function F(h) {
      return O(h) === r;
    }
    function _(h) {
      return O(h) === S;
    }
    function R(h) {
      return O(h) === p;
    }
    function z(h) {
      return O(h) === n;
    }
    function K(h) {
      return O(h) === o;
    }
    function V(h) {
      return O(h) === a;
    }
    function re(h) {
      return O(h) === d;
    }
    U.AsyncMode = v, U.ConcurrentMode = Q, U.ContextConsumer = ee, U.ContextProvider = f, U.Element = A, U.ForwardRef = Y, U.Fragment = P, U.Lazy = W, U.Memo = m, U.Portal = y, U.Profiler = X, U.StrictMode = te, U.Suspense = Ce, U.isAsyncMode = qt, U.isConcurrentMode = b, U.isContextConsumer = E, U.isContextProvider = D, U.isElement = N, U.isForwardRef = M, U.isFragment = F, U.isLazy = _, U.isMemo = R, U.isPortal = z, U.isProfiler = K, U.isStrictMode = V, U.isSuspense = re, U.isValidElementType = k, U.typeOf = O;
  }()), U;
}
var Tr;
function Ea() {
  return Tr || (Tr = 1, process.env.NODE_ENV === "production" ? kt.exports = _o() : kt.exports = Lo()), kt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Zt, Sr;
function No() {
  if (Sr)
    return Zt;
  Sr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var i = {}, s = 0; s < 10; s++)
        i["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(i).map(function(u) {
        return i[u];
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
  return Zt = a() ? Object.assign : function(o, i) {
    for (var s, l = r(o), c, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var d in s)
        t.call(s, d) && (l[d] = s[d]);
      if (e) {
        c = e(s);
        for (var g = 0; g < c.length; g++)
          n.call(s, c[g]) && (l[c[g]] = s[c[g]]);
      }
    }
    return l;
  }, Zt;
}
var en, Or;
function Bn() {
  if (Or)
    return en;
  Or = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return en = e, en;
}
var tn, Ar;
function ka() {
  return Ar || (Ar = 1, tn = Function.call.bind(Object.prototype.hasOwnProperty)), tn;
}
var nn, Cr;
function Ro() {
  if (Cr)
    return nn;
  Cr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Bn(), n = {}, r = ka();
    e = function(o) {
      var i = "Warning: " + o;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function a(o, i, s, l, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in o)
        if (r(o, u)) {
          var d;
          try {
            if (typeof o[u] != "function") {
              var g = Error(
                (l || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            d = o[u](i, u, l, s, null, t);
          } catch (S) {
            d = S;
          }
          if (d && !(d instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var p = c ? c() : "";
            e(
              "Failed " + s + " type: " + d.message + (p ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, nn = a, nn;
}
var rn, Ir;
function Do() {
  if (Ir)
    return rn;
  Ir = 1;
  var e = Ea(), t = No(), n = Bn(), r = ka(), a = Ro(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return rn = function(s, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(b) {
      var E = b && (c && b[c] || b[u]);
      if (typeof E == "function")
        return E;
    }
    var g = "<<anonymous>>", p = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: I(),
      arrayOf: k,
      element: O(),
      elementType: v(),
      instanceOf: Q,
      node: Y(),
      objectOf: f,
      oneOf: ee,
      oneOfType: A,
      shape: W,
      exact: m
    };
    function S(b, E) {
      return b === E ? b !== 0 || 1 / b === 1 / E : b !== b && E !== E;
    }
    function x(b, E) {
      this.message = b, this.data = E && typeof E == "object" ? E : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function $(b) {
      if (process.env.NODE_ENV !== "production")
        var E = {}, D = 0;
      function N(F, _, R, z, K, V, re) {
        if (z = z || g, V = V || R, re !== n) {
          if (l) {
            var h = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw h.name = "Invariant Violation", h;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var de = z + ":" + R;
            !E[de] && // Avoid spamming the console because they are often not actionable except for lib authors
            D < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), E[de] = !0, D++);
          }
        }
        return _[R] == null ? F ? _[R] === null ? new x("The " + K + " `" + V + "` is marked as required " + ("in `" + z + "`, but its value is `null`.")) : new x("The " + K + " `" + V + "` is marked as required in " + ("`" + z + "`, but its value is `undefined`.")) : null : b(_, R, z, K, V);
      }
      var M = N.bind(null, !1);
      return M.isRequired = N.bind(null, !0), M;
    }
    function C(b) {
      function E(D, N, M, F, _, R) {
        var z = D[N], K = te(z);
        if (K !== b) {
          var V = Ce(z);
          return new x(
            "Invalid " + F + " `" + _ + "` of type " + ("`" + V + "` supplied to `" + M + "`, expected ") + ("`" + b + "`."),
            { expectedType: b }
          );
        }
        return null;
      }
      return $(E);
    }
    function I() {
      return $(i);
    }
    function k(b) {
      function E(D, N, M, F, _) {
        if (typeof b != "function")
          return new x("Property `" + _ + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var R = D[N];
        if (!Array.isArray(R)) {
          var z = te(R);
          return new x("Invalid " + F + " `" + _ + "` of type " + ("`" + z + "` supplied to `" + M + "`, expected an array."));
        }
        for (var K = 0; K < R.length; K++) {
          var V = b(R, K, M, F, _ + "[" + K + "]", n);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return $(E);
    }
    function O() {
      function b(E, D, N, M, F) {
        var _ = E[D];
        if (!s(_)) {
          var R = te(_);
          return new x("Invalid " + M + " `" + F + "` of type " + ("`" + R + "` supplied to `" + N + "`, expected a single ReactElement."));
        }
        return null;
      }
      return $(b);
    }
    function v() {
      function b(E, D, N, M, F) {
        var _ = E[D];
        if (!e.isValidElementType(_)) {
          var R = te(_);
          return new x("Invalid " + M + " `" + F + "` of type " + ("`" + R + "` supplied to `" + N + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return $(b);
    }
    function Q(b) {
      function E(D, N, M, F, _) {
        if (!(D[N] instanceof b)) {
          var R = b.name || g, z = qt(D[N]);
          return new x("Invalid " + F + " `" + _ + "` of type " + ("`" + z + "` supplied to `" + M + "`, expected ") + ("instance of `" + R + "`."));
        }
        return null;
      }
      return $(E);
    }
    function ee(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), i;
      function E(D, N, M, F, _) {
        for (var R = D[N], z = 0; z < b.length; z++)
          if (S(R, b[z]))
            return null;
        var K = JSON.stringify(b, function(re, h) {
          var de = Ce(h);
          return de === "symbol" ? String(h) : h;
        });
        return new x("Invalid " + F + " `" + _ + "` of value `" + String(R) + "` " + ("supplied to `" + M + "`, expected one of " + K + "."));
      }
      return $(E);
    }
    function f(b) {
      function E(D, N, M, F, _) {
        if (typeof b != "function")
          return new x("Property `" + _ + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var R = D[N], z = te(R);
        if (z !== "object")
          return new x("Invalid " + F + " `" + _ + "` of type " + ("`" + z + "` supplied to `" + M + "`, expected an object."));
        for (var K in R)
          if (r(R, K)) {
            var V = b(R, K, M, F, _ + "." + K, n);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return $(E);
    }
    function A(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var E = 0; E < b.length; E++) {
        var D = b[E];
        if (typeof D != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + mt(D) + " at index " + E + "."
          ), i;
      }
      function N(M, F, _, R, z) {
        for (var K = [], V = 0; V < b.length; V++) {
          var re = b[V], h = re(M, F, _, R, z, n);
          if (h == null)
            return null;
          h.data && r(h.data, "expectedType") && K.push(h.data.expectedType);
        }
        var de = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new x("Invalid " + R + " `" + z + "` supplied to " + ("`" + _ + "`" + de + "."));
      }
      return $(N);
    }
    function Y() {
      function b(E, D, N, M, F) {
        return y(E[D]) ? null : new x("Invalid " + M + " `" + F + "` supplied to " + ("`" + N + "`, expected a ReactNode."));
      }
      return $(b);
    }
    function P(b, E, D, N, M) {
      return new x(
        (b || "React class") + ": " + E + " type `" + D + "." + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function W(b) {
      function E(D, N, M, F, _) {
        var R = D[N], z = te(R);
        if (z !== "object")
          return new x("Invalid " + F + " `" + _ + "` of type `" + z + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var K in b) {
          var V = b[K];
          if (typeof V != "function")
            return P(M, F, _, K, Ce(V));
          var re = V(R, K, M, F, _ + "." + K, n);
          if (re)
            return re;
        }
        return null;
      }
      return $(E);
    }
    function m(b) {
      function E(D, N, M, F, _) {
        var R = D[N], z = te(R);
        if (z !== "object")
          return new x("Invalid " + F + " `" + _ + "` of type `" + z + "` " + ("supplied to `" + M + "`, expected `object`."));
        var K = t({}, D[N], b);
        for (var V in K) {
          var re = b[V];
          if (r(b, V) && typeof re != "function")
            return P(M, F, _, V, Ce(re));
          if (!re)
            return new x(
              "Invalid " + F + " `" + _ + "` key `" + V + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(D[N], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(b), null, "  ")
            );
          var h = re(R, V, M, F, _ + "." + V, n);
          if (h)
            return h;
        }
        return null;
      }
      return $(E);
    }
    function y(b) {
      switch (typeof b) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !b;
        case "object":
          if (Array.isArray(b))
            return b.every(y);
          if (b === null || s(b))
            return !0;
          var E = d(b);
          if (E) {
            var D = E.call(b), N;
            if (E !== b.entries) {
              for (; !(N = D.next()).done; )
                if (!y(N.value))
                  return !1;
            } else
              for (; !(N = D.next()).done; ) {
                var M = N.value;
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
    function X(b, E) {
      return b === "symbol" ? !0 : E ? E["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && E instanceof Symbol : !1;
    }
    function te(b) {
      var E = typeof b;
      return Array.isArray(b) ? "array" : b instanceof RegExp ? "object" : X(E, b) ? "symbol" : E;
    }
    function Ce(b) {
      if (typeof b > "u" || b === null)
        return "" + b;
      var E = te(b);
      if (E === "object") {
        if (b instanceof Date)
          return "date";
        if (b instanceof RegExp)
          return "regexp";
      }
      return E;
    }
    function mt(b) {
      var E = Ce(b);
      switch (E) {
        case "array":
        case "object":
          return "an " + E;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + E;
        default:
          return E;
      }
    }
    function qt(b) {
      return !b.constructor || !b.constructor.name ? g : b.constructor.name;
    }
    return p.checkPropTypes = a, p.resetWarningCache = a.resetWarningCache, p.PropTypes = p, p;
  }, rn;
}
var an, Mr;
function jo() {
  if (Mr)
    return an;
  Mr = 1;
  var e = Bn();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, an = function() {
    function r(i, s, l, c, u, d) {
      if (d !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, an;
}
if (process.env.NODE_ENV !== "production") {
  var Fo = Ea(), zo = !0;
  En.exports = Do()(Fo.isElement, zo);
} else
  En.exports = jo()();
var Vo = En.exports;
const L = /* @__PURE__ */ Mo(Vo);
function _r(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _r(Object(n), !0).forEach(function(r) {
      Ue(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _r(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
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
function Ue(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Yo(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Ho(e, t) {
  if (e == null)
    return {};
  var n = Yo(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function kn(e) {
  return Uo(e) || Ko(e) || Wo(e) || Bo();
}
function Uo(e) {
  if (Array.isArray(e))
    return Tn(e);
}
function Ko(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Wo(e, t) {
  if (e) {
    if (typeof e == "string")
      return Tn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Tn(e, t);
  }
}
function Tn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Bo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qo(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, o = e.bounce, i = e.shake, s = e.flash, l = e.spin, c = e.spinPulse, u = e.spinReverse, d = e.pulse, g = e.fixedWidth, p = e.inverse, S = e.border, x = e.listItem, $ = e.flip, C = e.size, I = e.rotation, k = e.pull, O = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": o,
    "fa-shake": i,
    "fa-flash": s,
    "fa-spin": l,
    "fa-spin-reverse": u,
    "fa-spin-pulse": c,
    "fa-pulse": d,
    "fa-fw": g,
    "fa-inverse": p,
    "fa-border": S,
    "fa-li": x,
    "fa-flip": $ === !0,
    "fa-flip-horizontal": $ === "horizontal" || $ === "both",
    "fa-flip-vertical": $ === "vertical" || $ === "both"
  }, Ue(t, "fa-".concat(C), typeof C < "u" && C !== null), Ue(t, "fa-rotate-".concat(I), typeof I < "u" && I !== null && I !== 0), Ue(t, "fa-pull-".concat(k), typeof k < "u" && k !== null), Ue(t, "fa-swap-opacity", e.swapOpacity), t);
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
  return Go(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
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
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = Ta(n.slice(0, r)), o = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[Qo(a)] = o : t[a] = o, t;
  }, {});
}
function Sa(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(l) {
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
  }), o = n.style, i = o === void 0 ? {} : o, s = Ho(n, Xo);
  return a.attrs.style = ke(ke({}, a.attrs.style), i), e.apply(void 0, [t.tag, ke(ke({}, a.attrs), s)].concat(kn(r)));
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
function Lr(e) {
  if (e && Rt(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Pn.icon)
    return Pn.icon(e);
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
function on(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Ue({}, e, t) : {};
}
var Ae = /* @__PURE__ */ le.forwardRef(function(e, t) {
  var n = e.icon, r = e.mask, a = e.symbol, o = e.className, i = e.title, s = e.titleId, l = e.maskId, c = Lr(n), u = on("classes", [].concat(kn(qo(e)), kn(o.split(" ")))), d = on("transform", typeof e.transform == "string" ? Pn.transform(e.transform) : e.transform), g = on("mask", Lr(r)), p = Io(c, ke(ke(ke(ke({}, u), d), g), {}, {
    symbol: a,
    title: i,
    titleId: s,
    maskId: l
  }));
  if (!p)
    return Zo("Could not find icon", c), null;
  var S = p.abstract, x = {
    ref: t
  };
  return Object.keys(e).forEach(function($) {
    Ae.defaultProps.hasOwnProperty($) || (x[$] = e[$]);
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
var es = Sa.bind(null, le.createElement);
const Tl = ({ children: e, className: t, ...n }) => /* @__PURE__ */ ue("h1", { ...n, className: B("text-ev-primary text-6xl", t), children: [
  /* @__PURE__ */ j("span", { children: e }),
  n.id && /* @__PURE__ */ j(Xe, { id: n.id })
] }), Sl = ({ children: e, className: t, ...n }) => /* @__PURE__ */ ue("h2", { ...n, className: B("text-ev-primary text-5xl", t), children: [
  /* @__PURE__ */ j("span", { children: e }),
  n.id && /* @__PURE__ */ j(Xe, { id: n.id })
] }), Ol = ({ children: e, className: t, ...n }) => /* @__PURE__ */ ue("h3", { ...n, className: B("text-ev-primary text-4xl", t), children: [
  /* @__PURE__ */ j("span", { children: e }),
  n.id && /* @__PURE__ */ j(Xe, { id: n.id })
] }), Al = ({ children: e, className: t, ...n }) => /* @__PURE__ */ ue("h4", { ...n, className: B("text-ev-primary text-3xl", t), children: [
  /* @__PURE__ */ j("span", { children: e }),
  n.id && /* @__PURE__ */ j(Xe, { id: n.id })
] }), Cl = ({ children: e, className: t, ...n }) => /* @__PURE__ */ ue("h1", { ...n, className: B("text-ev-primary text-2xl", t), children: [
  /* @__PURE__ */ j("span", { children: e }),
  n.id && /* @__PURE__ */ j(Xe, { id: n.id })
] }), Il = ({ children: e, className: t, ...n }) => /* @__PURE__ */ ue("h6", { ...n, className: B("text-ev-primary text-xl", t), children: [
  /* @__PURE__ */ j("span", { children: e }),
  n.id && /* @__PURE__ */ j(Xe, { id: n.id })
] }), Ml = ({ children: e, className: t, ...n }) => /* @__PURE__ */ j(
  "p",
  {
    ...n,
    className: B(
      "text-ev-dark dark:text-ev-light text-base",
      t
    ),
    children: e
  }
), _l = ({ children: e, className: t, ...n }) => (console.log({ className: t }), /* @__PURE__ */ j(
  "strong",
  {
    ...n,
    className: B(
      "text-ev-dark dark:text-ev-light text-base font-bold",
      t
    ),
    children: e
  }
)), Ll = ({ children: e, className: t, ...n }) => /* @__PURE__ */ j(
  "code",
  {
    ...n,
    className: B(
      "px-1 text-ev-dark bg-ev-light-harder dark:text-ev-light  dark:bg-ev-dark-harder text-base rounded-md",
      t
    ),
    children: e
  }
), Nl = ({ children: e, className: t, ...n }) => /* @__PURE__ */ j(
  "pre",
  {
    ...n,
    className: B(
      "bg-ev-light-hard py-2 px-4 rounded-lg *:bg-inherit",
      t
    ),
    children: e
  }
), Rl = ({ children: e, className: t, ...n }) => /* @__PURE__ */ j("ul", { ...n, className: B("pl-4 list-disc", t), children: e }), Dl = ({ children: e, className: t, ...n }) => /* @__PURE__ */ j("ol", { ...n, className: B("pl-2 list-decimal", t), children: e }), jl = ({ className: e, ...t }) => /* @__PURE__ */ j(
  "img",
  {
    ...t,
    loading: "lazy",
    className: B("rounded-lg", e)
  }
), Fl = ({
  children: e,
  className: t,
  variant: n = "default",
  ...r
}) => /* @__PURE__ */ j(
  "blockquote",
  {
    ...r,
    className: B(
      "text-ev-dark dark:text-ev-light text-base border-l-4 border-ev-primary pl-4 italic",
      t
    ),
    children: /* @__PURE__ */ ue("p", { className: "inline", children: [
      n === "default" && /* @__PURE__ */ j(
        Ae,
        {
          icon: Qa,
          className: "mr-2 text-ev-primary"
        }
      ),
      e,
      n === "default" && /* @__PURE__ */ j(
        Ae,
        {
          icon: Xa,
          className: "ml-2 text-ev-primary"
        }
      )
    ] })
  }
), zl = ({ className: e, children: t, ...n }) => /* @__PURE__ */ ue("a", { ...n, className: B("", e), children: [
  /* @__PURE__ */ j(Ae, { icon: Xr, className: "mr-2" }),
  t
] }), Xe = ({ id: e }) => /* @__PURE__ */ j("a", { href: `#${e}`, className: "px-2 text-ev-primary/50 hover:text-ev-primary", children: "#" });
function ts(e, t, n) {
  let [r, a] = ve(e || t), o = ne(e !== void 0), i = e !== void 0;
  ce(() => {
    let c = o.current;
    c !== i && console.warn(`WARN: A component changed from ${c ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}.`), o.current = i;
  }, [
    i
  ]);
  let s = i ? e : r, l = pe((c, ...u) => {
    let d = (g, ...p) => {
      n && (Object.is(s, g) || n(g, ...p)), i || (s = g);
    };
    typeof c == "function" ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), a((p, ...S) => {
      let x = c(i ? s : p, ...S);
      return d(x, ...u), i ? p : x;
    })) : (i || a(c), d(c, ...u));
  }, [
    i,
    s,
    n
  ]);
  return [
    s,
    l
  ];
}
const Dt = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, Aa = /* @__PURE__ */ le.createContext(Dt), ns = /* @__PURE__ */ le.createContext(!1);
let rs = !!(typeof window < "u" && window.document && window.document.createElement), sn = /* @__PURE__ */ new WeakMap();
function as(e = !1) {
  let t = je(Aa), n = ne(null);
  if (n.current === null && !e) {
    var r, a;
    let o = (a = le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || a === void 0 || (r = a.ReactCurrentOwner) === null || r === void 0 ? void 0 : r.current;
    if (o) {
      let i = sn.get(o);
      i == null ? sn.set(o, {
        id: t.current,
        state: o.memoizedState
      }) : o.memoizedState !== i.state && (t.current = i.id, sn.delete(o));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function is(e) {
  let t = je(Aa);
  t === Dt && !rs && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let n = as(!!e), r = t === Dt && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${r}-${n}`;
}
function os(e) {
  let t = le.useId(), [n] = ve(us()), r = n || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${Dt.prefix}`;
  return e || `${r}-${t}`;
}
const ss = typeof le.useId == "function" ? os : is;
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
  return typeof le.useSyncExternalStore == "function" ? le.useSyncExternalStore(cs, ls, fs) : je(ns);
}
function Ca(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++)
        e[t] && (n = Ca(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function ds() {
  for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)
    (e = arguments[n]) && (t = Ca(e)) && (r && (r += " "), r += t);
  return r;
}
const Fe = typeof document < "u" ? le.useLayoutEffect : () => {
};
function oe(e) {
  const t = ne(null);
  return Fe(() => {
    t.current = e;
  }, [
    e
  ]), pe((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
function vs(e) {
  let [t, n] = ve(e), r = ne(null), a = oe(() => {
    if (!r.current)
      return;
    let i = r.current.next();
    if (i.done) {
      r.current = null;
      return;
    }
    t === i.value ? a() : n(i.value);
  });
  Fe(() => {
    r.current && a();
  });
  let o = oe((i) => {
    r.current = i(t), a();
  });
  return [
    t,
    o
  ];
}
let ms = !!(typeof window < "u" && window.document && window.document.createElement), jt = /* @__PURE__ */ new Map();
function Ft(e) {
  let [t, n] = ve(e), r = ne(null), a = ss(t), o = pe((i) => {
    r.current = i;
  }, []);
  return ms && jt.set(a, o), Fe(() => {
    let i = a;
    return () => {
      jt.delete(i);
    };
  }, [
    a
  ]), ce(() => {
    let i = r.current;
    i && (r.current = null, n(i));
  }), a;
}
function ps(e, t) {
  if (e === t)
    return e;
  let n = jt.get(e);
  if (n)
    return n(t), t;
  let r = jt.get(t);
  return r ? (r(e), e) : t;
}
function Nr(e = []) {
  let t = Ft(), [n, r] = vs(t), a = pe(() => {
    r(function* () {
      yield t, yield document.getElementById(t) ? t : void 0;
    });
  }, [
    t,
    r
  ]);
  return Fe(a, [
    t,
    a,
    ...e
  ]), n;
}
function Ia(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const se = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, Re = (e) => e && "window" in e && e.window === e ? e : se(e).defaultView || window;
function be(...e) {
  let t = {
    ...e[0]
  };
  for (let n = 1; n < e.length; n++) {
    let r = e[n];
    for (let a in r) {
      let o = t[a], i = r[a];
      typeof o == "function" && typeof i == "function" && // This is a lot faster than a regex.
      a[0] === "o" && a[1] === "n" && a.charCodeAt(2) >= /* 'A' */
      65 && a.charCodeAt(2) <= /* 'Z' */
      90 ? t[a] = Ia(o, i) : (a === "className" || a === "UNSAFE_className") && typeof o == "string" && typeof i == "string" ? t[a] = ds(o, i) : a === "id" && o && i ? t.id = ps(o, i) : t[a] = i !== void 0 ? i : o;
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
  let { labelable: n, isLink: r, propNames: a } = t, o = {};
  for (const i in e)
    Object.prototype.hasOwnProperty.call(e, i) && (bs.has(i) || n && gs.has(i) || r && ys.has(i) || a != null && a.has(i) || hs.test(i)) && (o[i] = e[i]);
  return o;
}
function _e(e) {
  if (xs())
    e.focus({
      preventScroll: !0
    });
  else {
    let t = $s(e);
    e.focus(), ws(t);
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
function $s(e) {
  let t = e.parentNode, n = [], r = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== r; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
      element: t,
      scrollTop: t.scrollTop,
      scrollLeft: t.scrollLeft
    }), t = t.parentNode;
  return r instanceof HTMLElement && n.push({
    element: r,
    scrollTop: r.scrollTop,
    scrollLeft: r.scrollLeft
  }), n;
}
function ws(e) {
  for (let { element: t, scrollTop: n, scrollLeft: r } of e)
    t.scrollTop = n, t.scrollLeft = r;
}
function Wt(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function qn(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function ct() {
  return qn(/^Mac/i);
}
function Ps() {
  return qn(/^iPhone/i);
}
function Ma() {
  return qn(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  ct() && navigator.maxTouchPoints > 1;
}
function _a() {
  return Ps() || Ma();
}
function Es() {
  return Wt(/AppleWebKit/i) && !ks();
}
function ks() {
  return Wt(/Chrome/i);
}
function La() {
  return Wt(/Android/i);
}
function Ts() {
  return Wt(/Firefox/i);
}
const Ss = /* @__PURE__ */ Gr({
  isNative: !0,
  open: Is
});
function Os() {
  return je(Ss);
}
function As(e, t) {
  let n = e.getAttribute("target");
  return (!n || n === "_self") && e.origin === location.origin && !e.hasAttribute("download") && !t.metaKey && // open in new tab (mac)
  !t.ctrlKey && // open in new tab (windows)
  !t.altKey && // download
  !t.shiftKey;
}
function qe(e, t, n = !0) {
  var r, a;
  let { metaKey: o, ctrlKey: i, altKey: s, shiftKey: l } = t;
  Ts() && (!((a = window.event) === null || a === void 0 || (r = a.type) === null || r === void 0) && r.startsWith("key")) && e.target === "_blank" && (ct() ? o = !0 : i = !0);
  let c = Es() && ct() && !Ma() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: o,
    ctrlKey: i,
    altKey: s,
    shiftKey: l
  }) : new MouseEvent("click", {
    metaKey: o,
    ctrlKey: i,
    altKey: s,
    shiftKey: l,
    bubbles: !0,
    cancelable: !0
  });
  qe.isOpening = n, _e(e), e.dispatchEvent(c), qe.isOpening = !1;
}
qe.isOpening = !1;
function Cs(e, t) {
  if (e instanceof HTMLAnchorElement)
    t(e);
  else if (e.hasAttribute("data-href")) {
    let n = document.createElement("a");
    n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n);
  }
}
function Is(e, t) {
  Cs(e, (n) => qe(n, t));
}
let Ve = /* @__PURE__ */ new Map(), Sn = /* @__PURE__ */ new Set();
function Rr() {
  if (typeof window > "u")
    return;
  function e(r) {
    return "propertyName" in r;
  }
  let t = (r) => {
    if (!e(r) || !r.target)
      return;
    let a = Ve.get(r.target);
    a || (a = /* @__PURE__ */ new Set(), Ve.set(r.target, a), r.target.addEventListener("transitioncancel", n, {
      once: !0
    })), a.add(r.propertyName);
  }, n = (r) => {
    if (!e(r) || !r.target)
      return;
    let a = Ve.get(r.target);
    if (a && (a.delete(r.propertyName), a.size === 0 && (r.target.removeEventListener("transitioncancel", n), Ve.delete(r.target)), Ve.size === 0)) {
      for (let o of Sn)
        o();
      Sn.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState !== "loading" ? Rr() : document.addEventListener("DOMContentLoaded", Rr));
function Na(e) {
  requestAnimationFrame(() => {
    Ve.size === 0 ? e() : Sn.add(e);
  });
}
function Ms() {
  let e = ne(/* @__PURE__ */ new Map()), t = pe((a, o, i, s) => {
    let l = s != null && s.once ? (...c) => {
      e.current.delete(i), i(...c);
    } : i;
    e.current.set(i, {
      type: o,
      eventTarget: a,
      fn: l,
      options: s
    }), a.addEventListener(o, i, s);
  }, []), n = pe((a, o, i, s) => {
    var l;
    let c = ((l = e.current.get(i)) === null || l === void 0 ? void 0 : l.fn) || i;
    a.removeEventListener(o, c, s), e.current.delete(i);
  }, []), r = pe(() => {
    e.current.forEach((a, o) => {
      n(a.eventTarget, a.type, o, a.options);
    });
  }, [
    n
  ]);
  return ce(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function _s(e, t) {
  let { id: n, "aria-label": r, "aria-labelledby": a } = e;
  return n = Ft(n), a && r ? a = [
    .../* @__PURE__ */ new Set([
      n,
      ...a.trim().split(/\s+/)
    ])
  ].join(" ") : a && (a = a.trim().split(/\s+/).join(" ")), !r && !a && t && (r = t), {
    id: n,
    "aria-label": r,
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
function On(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : La() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Ls(e) {
  return !La() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
function Ns(e, t, n) {
  let r = ne(t), a = oe(() => {
    n && n(r.current);
  });
  ce(() => {
    var o;
    let i = e == null || (o = e.current) === null || o === void 0 ? void 0 : o.form;
    return i == null || i.addEventListener("reset", a), () => {
      i == null || i.removeEventListener("reset", a);
    };
  }, [
    e,
    a
  ]);
}
function Rs(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Da(e, t, n) {
  if (!t.has(e))
    throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function Ds(e, t) {
  var n = Da(e, t, "get");
  return Rs(e, n);
}
function js(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Fs(e, t, n) {
  js(e, t), t.set(e, n);
}
function zs(e, t, n) {
  if (t.set)
    t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function Dr(e, t, n) {
  var r = Da(e, t, "set");
  return zs(e, r, n), n;
}
let Ke = "default", An = "", Mt = /* @__PURE__ */ new WeakMap();
function jr(e) {
  if (_a()) {
    if (Ke === "default") {
      const t = se(e);
      An = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
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
          const t = se(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = An || ""), An = "", Ke = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Mt.has(e)) {
    let t = Mt.get(e);
    e.style.userSelect === "none" && (e.style.userSelect = t), e.getAttribute("style") === "" && e.removeAttribute("style"), Mt.delete(e);
  }
}
const ja = le.createContext({
  register: () => {
  }
});
ja.displayName = "PressResponderContext";
function Vs(e) {
  let t = je(ja);
  if (t) {
    let { register: n, ...r } = t;
    e = be(r, e), n();
  }
  return Ra(t, e.ref), e;
}
var Ot = /* @__PURE__ */ new WeakMap();
class At {
  continuePropagation() {
    Dr(this, Ot, !1);
  }
  get shouldStopPropagation() {
    return Ds(this, Ot);
  }
  constructor(t, n, r) {
    Fs(this, Ot, {
      writable: !0,
      value: void 0
    }), Dr(this, Ot, !0), this.type = t, this.pointerType = n, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey;
  }
}
const Fr = Symbol("linkClicked");
function Fa(e) {
  let {
    onPress: t,
    onPressChange: n,
    onPressStart: r,
    onPressEnd: a,
    onPressUp: o,
    isDisabled: i,
    isPressed: s,
    preventFocusOnPress: l,
    shouldCancelOnPointerExit: c,
    allowTextSelectionOnPress: u,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: d,
    ...g
  } = Vs(e), [p, S] = ve(!1), x = ne({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    ignoreClickAfterPress: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null
  }), { addGlobalListener: $, removeAllGlobalListeners: C } = Ms(), I = oe((f, A) => {
    let Y = x.current;
    if (i || Y.didFirePressStart)
      return !1;
    let P = !0;
    if (Y.isTriggeringEvent = !0, r) {
      let W = new At("pressstart", A, f);
      r(W), P = W.shouldStopPropagation;
    }
    return n && n(!0), Y.isTriggeringEvent = !1, Y.didFirePressStart = !0, S(!0), P;
  }), k = oe((f, A, Y = !0) => {
    let P = x.current;
    if (!P.didFirePressStart)
      return !1;
    P.ignoreClickAfterPress = !0, P.didFirePressStart = !1, P.isTriggeringEvent = !0;
    let W = !0;
    if (a) {
      let m = new At("pressend", A, f);
      a(m), W = m.shouldStopPropagation;
    }
    if (n && n(!1), S(!1), t && Y && !i) {
      let m = new At("press", A, f);
      t(m), W && (W = m.shouldStopPropagation);
    }
    return P.isTriggeringEvent = !1, W;
  }), O = oe((f, A) => {
    let Y = x.current;
    if (i)
      return !1;
    if (o) {
      Y.isTriggeringEvent = !0;
      let P = new At("pressup", A, f);
      return o(P), Y.isTriggeringEvent = !1, P.shouldStopPropagation;
    }
    return !0;
  }), v = oe((f) => {
    let A = x.current;
    A.isPressed && A.target && (A.isOverTarget && A.pointerType != null && k(ge(A.target, f), A.pointerType, !1), A.isPressed = !1, A.isOverTarget = !1, A.activePointerId = null, A.pointerType = null, C(), u || St(A.target));
  }), Q = oe((f) => {
    c && v(f);
  }), ee = tt(() => {
    let f = x.current, A = {
      onKeyDown(P) {
        if (ln(P.nativeEvent, P.currentTarget) && P.currentTarget.contains(P.target)) {
          var W;
          Vr(P.target, P.key) && P.preventDefault();
          let m = !0;
          if (!f.isPressed && !P.repeat) {
            f.target = P.currentTarget, f.isPressed = !0, m = I(P, "keyboard");
            let y = P.currentTarget, X = (te) => {
              ln(te, y) && !te.repeat && y.contains(te.target) && f.target && O(ge(f.target, te), "keyboard");
            };
            $(se(P.currentTarget), "keyup", Ia(X, Y), !0);
          }
          m && P.stopPropagation(), P.metaKey && ct() && ((W = f.metaKeyEvents) === null || W === void 0 || W.set(P.key, P.nativeEvent));
        } else
          P.key === "Meta" && (f.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(P) {
        if (!(P && !P.currentTarget.contains(P.target)) && P && P.button === 0 && !f.isTriggeringEvent && !qe.isOpening) {
          let W = !0;
          if (i && P.preventDefault(), !f.ignoreClickAfterPress && !f.ignoreEmulatedMouseEvents && !f.isPressed && (f.pointerType === "virtual" || On(P.nativeEvent))) {
            !i && !l && _e(P.currentTarget);
            let m = I(P, "virtual"), y = O(P, "virtual"), X = k(P, "virtual");
            W = m && y && X;
          }
          f.ignoreEmulatedMouseEvents = !1, f.ignoreClickAfterPress = !1, W && P.stopPropagation();
        }
      }
    }, Y = (P) => {
      var W;
      if (f.isPressed && f.target && ln(P, f.target)) {
        var m;
        Vr(P.target, P.key) && P.preventDefault();
        let X = P.target;
        k(ge(f.target, P), "keyboard", f.target.contains(X)), C(), P.key !== "Enter" && Gn(f.target) && f.target.contains(X) && !P[Fr] && (P[Fr] = !0, qe(f.target, P, !1)), f.isPressed = !1, (m = f.metaKeyEvents) === null || m === void 0 || m.delete(P.key);
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
        fn(y.currentTarget) && y.preventDefault(), f.pointerType = y.pointerType;
        let X = !0;
        f.isPressed || (f.isPressed = !0, f.isOverTarget = !0, f.activePointerId = y.pointerId, f.target = y.currentTarget, !i && !l && _e(y.currentTarget), u || jr(f.target), X = I(y, f.pointerType), $(se(y.currentTarget), "pointermove", P, !1), $(se(y.currentTarget), "pointerup", W, !1), $(se(y.currentTarget), "pointercancel", m, !1)), X && y.stopPropagation();
      }, A.onMouseDown = (y) => {
        y.currentTarget.contains(y.target) && y.button === 0 && (fn(y.currentTarget) && y.preventDefault(), y.stopPropagation());
      }, A.onPointerUp = (y) => {
        !y.currentTarget.contains(y.target) || f.pointerType === "virtual" || y.button === 0 && ze(y, y.currentTarget) && O(y, f.pointerType || y.pointerType);
      };
      let P = (y) => {
        y.pointerId === f.activePointerId && (f.target && ze(y, f.target) ? !f.isOverTarget && f.pointerType != null && (f.isOverTarget = !0, I(ge(f.target, y), f.pointerType)) : f.target && f.isOverTarget && f.pointerType != null && (f.isOverTarget = !1, k(ge(f.target, y), f.pointerType, !1), Q(y)));
      }, W = (y) => {
        y.pointerId === f.activePointerId && f.isPressed && y.button === 0 && f.target && (ze(y, f.target) && f.pointerType != null ? k(ge(f.target, y), f.pointerType) : f.isOverTarget && f.pointerType != null && k(ge(f.target, y), f.pointerType, !1), f.isPressed = !1, f.isOverTarget = !1, f.activePointerId = null, f.pointerType = null, C(), u || St(f.target));
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
        if (fn(m.currentTarget) && m.preventDefault(), f.ignoreEmulatedMouseEvents) {
          m.stopPropagation();
          return;
        }
        f.isPressed = !0, f.isOverTarget = !0, f.target = m.currentTarget, f.pointerType = On(m.nativeEvent) ? "virtual" : "mouse", !i && !l && _e(m.currentTarget), I(m, f.pointerType) && m.stopPropagation(), $(se(m.currentTarget), "mouseup", P, !1);
      }, A.onMouseEnter = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        let y = !0;
        f.isPressed && !f.ignoreEmulatedMouseEvents && f.pointerType != null && (f.isOverTarget = !0, y = I(m, f.pointerType)), y && m.stopPropagation();
      }, A.onMouseLeave = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        let y = !0;
        f.isPressed && !f.ignoreEmulatedMouseEvents && f.pointerType != null && (f.isOverTarget = !1, y = k(m, f.pointerType, !1), Q(m)), y && m.stopPropagation();
      }, A.onMouseUp = (m) => {
        m.currentTarget.contains(m.target) && !f.ignoreEmulatedMouseEvents && m.button === 0 && O(m, f.pointerType || "mouse");
      };
      let P = (m) => {
        if (m.button === 0) {
          if (f.isPressed = !1, C(), f.ignoreEmulatedMouseEvents) {
            f.ignoreEmulatedMouseEvents = !1;
            return;
          }
          f.target && ze(m, f.target) && f.pointerType != null ? k(ge(f.target, m), f.pointerType) : f.target && f.isOverTarget && f.pointerType != null && k(ge(f.target, m), f.pointerType, !1), f.isOverTarget = !1;
        }
      };
      A.onTouchStart = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        let y = Ys(m.nativeEvent);
        if (!y)
          return;
        f.activePointerId = y.identifier, f.ignoreEmulatedMouseEvents = !0, f.isOverTarget = !0, f.isPressed = !0, f.target = m.currentTarget, f.pointerType = "touch", !i && !l && _e(m.currentTarget), u || jr(f.target), I(m, f.pointerType) && m.stopPropagation(), $(Re(m.currentTarget), "scroll", W, !0);
      }, A.onTouchMove = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        if (!f.isPressed) {
          m.stopPropagation();
          return;
        }
        let y = zr(m.nativeEvent, f.activePointerId), X = !0;
        y && ze(y, m.currentTarget) ? !f.isOverTarget && f.pointerType != null && (f.isOverTarget = !0, X = I(m, f.pointerType)) : f.isOverTarget && f.pointerType != null && (f.isOverTarget = !1, X = k(m, f.pointerType, !1), Q(m)), X && m.stopPropagation();
      }, A.onTouchEnd = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        if (!f.isPressed) {
          m.stopPropagation();
          return;
        }
        let y = zr(m.nativeEvent, f.activePointerId), X = !0;
        y && ze(y, m.currentTarget) && f.pointerType != null ? (O(m, f.pointerType), X = k(m, f.pointerType)) : f.isOverTarget && f.pointerType != null && (X = k(m, f.pointerType, !1)), X && m.stopPropagation(), f.isPressed = !1, f.activePointerId = null, f.isOverTarget = !1, f.ignoreEmulatedMouseEvents = !0, f.target && !u && St(f.target), C();
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
    $,
    i,
    l,
    C,
    u,
    v,
    Q,
    k,
    I,
    O
  ]);
  return ce(() => () => {
    var f;
    u || St((f = x.current.target) !== null && f !== void 0 ? f : void 0);
  }, [
    u
  ]), {
    isPressed: s || p,
    pressProps: be(g, ee)
  };
}
function Gn(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function ln(e, t) {
  const { key: n, code: r } = e, a = t, o = a.getAttribute("role");
  return (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") && !(a instanceof Re(a).HTMLInputElement && !za(a, n) || a instanceof Re(a).HTMLTextAreaElement || a.isContentEditable) && // Links should only trigger with Enter key
  !((o === "link" || !o && Gn(a)) && n !== "Enter");
}
function Ys(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function zr(e, t) {
  const n = e.changedTouches;
  for (let r = 0; r < n.length; r++) {
    const a = n[r];
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
  let t = 0, n = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? n = e.height / 2 : e.radiusY !== void 0 && (n = e.radiusY), {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t
  };
}
function Us(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function ze(e, t) {
  let n = t.getBoundingClientRect(), r = Hs(e);
  return Us(n, r);
}
function fn(e) {
  return !(e instanceof HTMLElement) || !e.hasAttribute("draggable");
}
function Vr(e, t) {
  return e instanceof HTMLInputElement ? !za(e, t) : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Gn(e);
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
  constructor(t, n) {
    this.nativeEvent = n, this.target = n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget, this.bubbles = n.bubbles, this.cancelable = n.cancelable, this.defaultPrevented = n.defaultPrevented, this.eventPhase = n.eventPhase, this.isTrusted = n.isTrusted, this.timeStamp = n.timeStamp, this.type = t;
  }
}
function Bs(e) {
  let t = ne({
    isFocused: !1,
    observer: null
  });
  Fe(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = oe((r) => {
    e == null || e(r);
  });
  return pe((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let a = r.target, o = (i) => {
        t.current.isFocused = !1, a.disabled && n(new Ws("blur", i)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      a.addEventListener("focusout", o, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && a.disabled) {
          var i;
          (i = t.current.observer) === null || i === void 0 || i.disconnect();
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
    n
  ]);
}
function qs(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: a } = e;
  const o = pe((l) => {
    if (l.target === l.currentTarget)
      return r && r(l), a && a(!1), !0;
  }, [
    r,
    a
  ]), i = Bs(o), s = pe((l) => {
    l.target === l.currentTarget && document.activeElement === l.target && (n && n(l), a && a(!0), i(l));
  }, [
    a,
    n,
    i
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || a || r) ? s : void 0,
      onBlur: !t && (r || a) ? o : void 0
    }
  };
}
let Je = null, Gs = /* @__PURE__ */ new Set(), at = /* @__PURE__ */ new Map(), De = !1, Cn = !1;
function Bt(e, t) {
  for (let n of Gs)
    n(e, t);
}
function Xs(e) {
  return !(e.metaKey || !ct() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function zt(e) {
  De = !0, Xs(e) && (Je = "keyboard", Bt("keyboard", e));
}
function ie(e) {
  Je = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (De = !0, Bt("pointer", e));
}
function Va(e) {
  On(e) && (De = !0, Je = "virtual");
}
function Ya(e) {
  e.target === window || e.target === document || (!De && !Cn && (Je = "virtual", Bt("virtual", e)), De = !1, Cn = !1);
}
function Ha() {
  De = !1, Cn = !0;
}
function Yr(e) {
  if (typeof window > "u" || at.get(Re(e)))
    return;
  const t = Re(e), n = se(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    De = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", zt, !0), n.addEventListener("keyup", zt, !0), n.addEventListener("click", Va, !0), t.addEventListener("focus", Ya, !0), t.addEventListener("blur", Ha, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", ie, !0), n.addEventListener("pointermove", ie, !0), n.addEventListener("pointerup", ie, !0)) : (n.addEventListener("mousedown", ie, !0), n.addEventListener("mousemove", ie, !0), n.addEventListener("mouseup", ie, !0)), t.addEventListener("beforeunload", () => {
    Ua(e);
  }, {
    once: !0
  }), at.set(t, {
    focus: r
  });
}
const Ua = (e, t) => {
  const n = Re(e), r = se(e);
  t && r.removeEventListener("DOMContentLoaded", t), at.has(n) && (n.HTMLElement.prototype.focus = at.get(n).focus, r.removeEventListener("keydown", zt, !0), r.removeEventListener("keyup", zt, !0), r.removeEventListener("click", Va, !0), n.removeEventListener("focus", Ya, !0), n.removeEventListener("blur", Ha, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", ie, !0), r.removeEventListener("pointermove", ie, !0), r.removeEventListener("pointerup", ie, !0)) : (r.removeEventListener("mousedown", ie, !0), r.removeEventListener("mousemove", ie, !0), r.removeEventListener("mouseup", ie, !0)), at.delete(n));
};
function Qs(e) {
  const t = se(e);
  let n;
  return t.readyState !== "loading" ? Yr(e) : (n = () => {
    Yr(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Ua(e, n);
}
typeof document < "u" && Qs();
function Js() {
  return Je;
}
function Zs(e) {
  Je = e, Bt(e, null);
}
let Vt = !1, cn = 0;
function In() {
  Vt = !0, setTimeout(() => {
    Vt = !1;
  }, 50);
}
function Hr(e) {
  e.pointerType === "touch" && In();
}
function el() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", Hr) : document.addEventListener("touchend", In), cn++, () => {
      cn--, !(cn > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Hr) : document.removeEventListener("touchend", In));
    };
}
function Ka(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: a } = e, [o, i] = ve(!1), s = ne({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  ce(el, []);
  let { hoverProps: l, triggerHoverEnd: c } = tt(() => {
    let u = (p, S) => {
      if (s.pointerType = S, a || S === "touch" || s.isHovered || !p.currentTarget.contains(p.target))
        return;
      s.isHovered = !0;
      let x = p.currentTarget;
      s.target = x, t && t({
        type: "hoverstart",
        target: x,
        pointerType: S
      }), n && n(!0), i(!0);
    }, d = (p, S) => {
      if (s.pointerType = "", s.target = null, S === "touch" || !s.isHovered)
        return;
      s.isHovered = !1;
      let x = p.currentTarget;
      r && r({
        type: "hoverend",
        target: x,
        pointerType: S
      }), n && n(!1), i(!1);
    }, g = {};
    return typeof PointerEvent < "u" ? (g.onPointerEnter = (p) => {
      Vt && p.pointerType === "mouse" || u(p, p.pointerType);
    }, g.onPointerLeave = (p) => {
      !a && p.currentTarget.contains(p.target) && d(p, p.pointerType);
    }) : (g.onTouchStart = () => {
      s.ignoreEmulatedMouseEvents = !0;
    }, g.onMouseEnter = (p) => {
      !s.ignoreEmulatedMouseEvents && !Vt && u(p, "mouse"), s.ignoreEmulatedMouseEvents = !1;
    }, g.onMouseLeave = (p) => {
      !a && p.currentTarget.contains(p.target) && d(p, "mouse");
    }), {
      hoverProps: g,
      triggerHoverEnd: d
    };
  }, [
    t,
    n,
    r,
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
    isHovered: o
  };
}
function Ur(e) {
  if (!e)
    return;
  let t = !0;
  return (n) => {
    let r = {
      ...n,
      preventDefault() {
        n.preventDefault();
      },
      isDefaultPrevented() {
        return n.isDefaultPrevented();
      },
      stopPropagation() {
        console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.");
      },
      continuePropagation() {
        t = !1;
      }
    };
    e(r), t && n.stopPropagation();
  };
}
function tl(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: Ur(e.onKeyDown),
      onKeyUp: Ur(e.onKeyUp)
    }
  };
}
function nl(e) {
  const t = se(e);
  if (Js() === "virtual") {
    let n = t.activeElement;
    Na(() => {
      t.activeElement === n && e.isConnected && _e(e);
    });
  } else
    _e(e);
}
function rl(e, t) {
  return !e || !t ? !1 : t.some((n) => n.contains(e));
}
class Xn {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(t) {
    return this.fastMap.get(t);
  }
  addTreeNode(t, n, r) {
    let a = this.fastMap.get(n ?? null);
    if (!a)
      return;
    let o = new Kr({
      scopeRef: t
    });
    a.addChild(o), o.parent = a, this.fastMap.set(t, o), r && (o.nodeToRestore = r);
  }
  addNode(t) {
    this.fastMap.set(t.scopeRef, t);
  }
  removeTreeNode(t) {
    if (t === null)
      return;
    let n = this.fastMap.get(t);
    if (!n)
      return;
    let r = n.parent;
    for (let o of this.traverse())
      o !== n && n.nodeToRestore && o.nodeToRestore && n.scopeRef && n.scopeRef.current && rl(o.nodeToRestore, n.scopeRef.current) && (o.nodeToRestore = n.nodeToRestore);
    let a = n.children;
    r && (r.removeChild(n), a.size > 0 && a.forEach((o) => r && r.addChild(o))), this.fastMap.delete(n.scopeRef);
  }
  // Pre Order Depth First
  *traverse(t = this.root) {
    if (t.scopeRef != null && (yield t), t.children.size > 0)
      for (let n of t.children)
        yield* this.traverse(n);
  }
  clone() {
    var t;
    let n = new Xn();
    var r;
    for (let a of this.traverse())
      n.addTreeNode(a.scopeRef, (r = (t = a.parent) === null || t === void 0 ? void 0 : t.scopeRef) !== null && r !== void 0 ? r : null, a.nodeToRestore);
    return n;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new Kr({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class Kr {
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
new Xn();
let al = /* @__PURE__ */ le.createContext(null);
function il(e) {
  let t = je(al) || {};
  Ra(t, e);
  let { ref: n, ...r } = t;
  return r;
}
function Qn(e, t) {
  let { focusProps: n } = qs(e), { keyboardProps: r } = tl(e), a = be(n, r), o = il(t), i = e.isDisabled ? {} : o, s = ne(e.autoFocus);
  return ce(() => {
    s.current && t.current && nl(t.current), s.current = !1;
  }, [
    t
  ]), {
    focusableProps: be({
      ...a,
      tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
    }, i)
  };
}
function ol(e, t) {
  let {
    elementType: n = "a",
    onPress: r,
    onPressStart: a,
    onPressEnd: o,
    // @ts-ignore
    onClick: i,
    isDisabled: s,
    ...l
  } = e, c = {};
  n !== "a" && (c = {
    role: "link",
    tabIndex: s ? void 0 : 0
  });
  let { focusableProps: u } = Qn(e, t), { pressProps: d, isPressed: g } = Fa({
    onPress: r,
    onPressStart: a,
    onPressEnd: o,
    isDisabled: s,
    ref: t
  }), p = Qe(l, {
    labelable: !0,
    isLink: n === "a"
  }), S = be(u, d), x = Os();
  return {
    isPressed: g,
    linkProps: be(p, {
      ...S,
      ...c,
      "aria-disabled": s || void 0,
      "aria-current": e["aria-current"],
      onClick: ($) => {
        var C;
        (C = d.onClick) === null || C === void 0 || C.call(d, $), i && (i($), console.warn("onClick is deprecated, please use onPress")), !x.isNative && $.currentTarget instanceof HTMLAnchorElement && $.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
        !$.isDefaultPrevented() && As($.currentTarget, $) && ($.preventDefault(), x.open($.currentTarget, $));
      }
    })
  };
}
function Wa(e, t) {
  let {
    elementType: n = "button",
    isDisabled: r,
    onPress: a,
    onPressStart: o,
    onPressEnd: i,
    onPressUp: s,
    onPressChange: l,
    preventFocusOnPress: c,
    allowFocusWhenDisabled: u,
    // @ts-ignore
    onClick: d,
    href: g,
    target: p,
    rel: S,
    type: x = "button"
  } = e, $;
  n === "button" ? $ = {
    type: x,
    disabled: r
  } : $ = {
    role: "button",
    tabIndex: r ? void 0 : 0,
    href: n === "a" && r ? void 0 : g,
    target: n === "a" ? p : void 0,
    type: n === "input" ? x : void 0,
    disabled: n === "input" ? r : void 0,
    "aria-disabled": !r || n === "input" ? void 0 : r,
    rel: n === "a" ? S : void 0
  };
  let { pressProps: C, isPressed: I } = Fa({
    onPressStart: o,
    onPressEnd: i,
    onPressChange: l,
    onPress: a,
    onPressUp: s,
    isDisabled: r,
    preventFocusOnPress: c,
    ref: t
  }), { focusableProps: k } = Qn(e, t);
  u && (k.tabIndex = r ? -1 : k.tabIndex);
  let O = be(k, C, Qe(e, {
    labelable: !0
  }));
  return {
    isPressed: I,
    buttonProps: be($, O, {
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
function sl(e, t, n) {
  let { validationBehavior: r, focus: a } = e;
  Fe(() => {
    if (r === "native" && (n != null && n.current)) {
      let l = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      n.current.setCustomValidity(l), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation(fl(n.current));
    }
  });
  let o = oe(() => {
    t.resetValidation();
  }), i = oe((l) => {
    var c;
    t.displayValidation.isInvalid || t.commitValidation();
    let u = n == null || (c = n.current) === null || c === void 0 ? void 0 : c.form;
    if (!l.defaultPrevented && n && u && cl(u) === n.current) {
      var d;
      a ? a() : (d = n.current) === null || d === void 0 || d.focus(), Zs("keyboard");
    }
    l.preventDefault();
  }), s = oe(() => {
    t.commitValidation();
  });
  ce(() => {
    let l = n == null ? void 0 : n.current;
    if (!l)
      return;
    let c = l.form;
    return l.addEventListener("invalid", i), l.addEventListener("change", s), c == null || c.addEventListener("reset", o), () => {
      l.removeEventListener("invalid", i), l.removeEventListener("change", s), c == null || c.removeEventListener("reset", o);
    };
  }, [
    n,
    i,
    s,
    o,
    r
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
    let n = e.elements[t];
    if (!n.validity.valid)
      return n;
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
}, ul = Gr({}), Wr = "__formValidationState" + Date.now();
function dl(e) {
  if (e[Wr]) {
    let { realtimeValidation: t, displayValidation: n, updateValidation: r, resetValidation: a, commitValidation: o } = e[Wr];
    return {
      realtimeValidation: t,
      displayValidation: n,
      updateValidation: r,
      resetValidation: a,
      commitValidation: o
    };
  }
  return vl(e);
}
function vl(e) {
  let { isInvalid: t, validationState: n, name: r, value: a, builtinValidation: o, validate: i, validationBehavior: s = "aria" } = e;
  n && (t || (t = n === "invalid"));
  let l = t ? {
    isInvalid: !0,
    validationErrors: [],
    validationDetails: qa
  } : null, c = tt(() => Br(ml(i, a)), [
    i,
    a
  ]);
  o != null && o.validationDetails.valid && (o = null);
  let u = je(ul), d = tt(() => r ? Array.isArray(r) ? r.flatMap((Y) => Mn(u[Y])) : Mn(u[r]) : [], [
    u,
    r
  ]), [g, p] = ve(u), [S, x] = ve(!1);
  u !== g && (p(u), x(!1));
  let $ = tt(() => Br(S ? [] : d), [
    S,
    d
  ]), C = ne(Ze), [I, k] = ve(Ze), O = ne(Ze), v = () => {
    if (!Q)
      return;
    ee(!1);
    let Y = c || o || C.current;
    un(Y, O.current) || (O.current = Y, k(Y));
  }, [Q, ee] = ve(!1);
  return ce(v), {
    realtimeValidation: l || $ || c || o || Ze,
    displayValidation: s === "native" ? l || $ || I : l || $ || c || o || I,
    updateValidation(Y) {
      s === "aria" && !un(I, Y) ? k(Y) : C.current = Y;
    },
    resetValidation() {
      let Y = Ze;
      un(Y, O.current) || (O.current = Y, k(Y)), s === "native" && ee(!1), x(!0);
    },
    commitValidation() {
      s === "native" && ee(!0), x(!0);
    }
  };
}
function Mn(e) {
  return e ? Array.isArray(e) ? e : [
    e
  ] : [];
}
function ml(e, t) {
  if (typeof e == "function") {
    let n = e(t);
    if (n && typeof n != "boolean")
      return Mn(n);
  }
  return [];
}
function Br(e) {
  return e.length ? {
    isInvalid: !0,
    validationErrors: e,
    validationDetails: qa
  } : null;
}
function un(e, t) {
  return e === t ? !0 : e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((n, r) => n === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([n, r]) => t.validationDetails[n] === r);
}
function pl(e) {
  let { id: t, label: n, "aria-labelledby": r, "aria-label": a, labelElementType: o = "label" } = e;
  t = Ft(t);
  let i = Ft(), s = {};
  n ? (r = r ? `${i} ${r}` : i, s = {
    id: i,
    htmlFor: o === "label" ? t : void 0
  }) : !r && !a && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let l = _s({
    id: t,
    "aria-label": a,
    "aria-labelledby": r
  });
  return {
    labelProps: s,
    fieldProps: l
  };
}
function bl(e) {
  let { description: t, errorMessage: n, isInvalid: r, validationState: a } = e, { labelProps: o, fieldProps: i } = pl(e), s = Nr([
    !!t,
    !!n,
    r,
    a
  ]), l = Nr([
    !!t,
    !!n,
    r,
    a
  ]);
  return i = be(i, {
    "aria-describedby": [
      s,
      // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
      l,
      e["aria-describedby"]
    ].filter(Boolean).join(" ") || void 0
  }), {
    labelProps: o,
    fieldProps: i,
    descriptionProps: {
      id: s
    },
    errorMessageProps: {
      id: l
    }
  };
}
function Ga(e, t) {
  let { inputElementType: n = "input", isDisabled: r = !1, isRequired: a = !1, isReadOnly: o = !1, type: i = "text", validationBehavior: s = "aria" } = e, [l, c] = ts(e.value, e.defaultValue || "", e.onChange), { focusableProps: u } = Qn(e, t), d = dl({
    ...e,
    value: l
  }), { isInvalid: g, validationErrors: p, validationDetails: S } = d.displayValidation, { labelProps: x, fieldProps: $, descriptionProps: C, errorMessageProps: I } = bl({
    ...e,
    isInvalid: g,
    errorMessage: e.errorMessage || p
  }), k = Qe(e, {
    labelable: !0
  });
  const O = {
    type: i,
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
    inputProps: be(k, n === "input" && O, {
      disabled: r,
      readOnly: o,
      required: a && s === "native",
      "aria-required": a && s === "aria" || void 0,
      "aria-invalid": g || void 0,
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
      ...$
    }),
    descriptionProps: C,
    errorMessageProps: I,
    isInvalid: g,
    validationErrors: p,
    validationDetails: S
  };
}
const Pe = "px-2 py-1 rounded-md", gl = {
  flat: {
    primary: `${Pe} bg-transparent text-ev-primary data-[hovered]:bg-ev-primary/20 data-[pressed]:bg-ev-primary/40 data-[hovered]:dark:bg-ev-primary/20 data-[pressed]:dark:bg-ev-primary/40`,
    secondary: `${Pe} bg-transparent text-ev-secondary data-[hovered]:bg-ev-secondary/20 data-[pressed]:bg-ev-secondary/40 data-[hovered]:dark:bg-ev-secondary/20  data-[pressed]:dark:bg-ev-secondary/40`,
    destructive: `${Pe} bg-transparent text-ev-destructive data-[hovered]:bg-ev-destructive/20 data-[pressed]:bg-ev-destructive/40 data-[hovered]:dark:bg-ev-destructive/20  data-[pressed]:dark:bg-ev-destructive/40`,
    foreground: `${Pe} bg-transparent text-ev-dark data-[hovered]:bg-ev-dark/20 data-[pressed]:bg-ev-dark/40 dark:text-ev-light data-[hovered]:dark:bg-ev-light/20  data-[pressed]:dark:bg-ev-light/40`
  },
  solid: {
    primary: `${Pe} bg-ev-primary data-[hovered]:bg-ev-primary-hard data-[pressed]:bg-ev-primary-harder text-ev-light`,
    secondary: `${Pe} bg-ev-secondary data-[hovered]:bg-ev-secondary-hard data-[pressed]:bg-ev-primary-harder text-ev-light`,
    destructive: `${Pe} bg-ev-destructive data-[hovered]:bg-ev-destructive-hard data-[pressed]:bg-ev-destructive-harder text-ev-light`,
    foreground: `${Pe} bg-ev-dark text-ev-light data-[hovered]:bg-ev-dark-hard data-[pressed]:bg-ev-dark-harder dark:bg-ev-light dark:text-ev-dark dark:hover:bg-ev-light-hard  dark:[pressed]:bg-ev-light-harder`
  }
}, yl = ({ variant: e = "solid", color: t = "primary" }) => gl[e][t], Vl = _n(
  ({ children: e, ...t }, n) => {
    const { buttonProps: r, isPressed: a } = Wa(
      t,
      n
    ), { hoverProps: o, isHovered: i } = Ka({});
    return /* @__PURE__ */ j(
      "button",
      {
        ref: n,
        ...Qe(t),
        ...o,
        ...r,
        ...a && { "data-pressed": a },
        ...i && !a && { "data-hovered": i },
        className: B(yl(t), t.className),
        children: e
      }
    );
  }
), Ee = "w-[32px] h-[32px] rounded-md", hl = {
  flat: {
    primary: `${Ee} bg-transparent text-ev-primary data-[hovered]:bg-ev-primary/20 data-[pressed]:bg-ev-primary/40 data-[hovered]:dark:bg-ev-primary/20 data-[pressed]:dark:bg-ev-primary/40`,
    secondary: `${Ee} bg-transparent text-ev-secondary data-[hovered]:bg-ev-secondary/20 data-[pressed]:bg-ev-secondary/40 data-[hovered]:dark:bg-ev-secondary/20  data-[pressed]:dark:bg-ev-secondary/40`,
    destructive: `${Ee} bg-transparent text-ev-destructive data-[hovered]:bg-ev-destructive/20 data-[pressed]:bg-ev-destructive/40 data-[hovered]:dark:bg-ev-destructive/20  data-[pressed]:dark:bg-ev-destructive/40`,
    foreground: `${Ee} bg-transparent text-ev-dark data-[hovered]:bg-ev-dark/20 data-[pressed]:bg-ev-dark/40 dark:text-ev-light data-[hovered]:dark:bg-ev-light/20  data-[pressed]:dark:bg-ev-light/40`
  },
  solid: {
    primary: `${Ee} bg-ev-primary hover:bg-ev-primary-hard pressed:bg-ev-primary-harder text-ev-light`,
    secondary: `${Ee} bg-ev-secondary hover:bg-ev-secondary-hard pressed:bg-ev-primary-harder text-ev-light`,
    destructive: `${Ee} bg-ev-destructive hover:bg-ev-destructive-hard pressed:bg-ev-destructive-harder text-ev-light`,
    foreground: `${Ee} bg-ev-dark text-ev-light hover:bg-ev-dark-hard pressed:bg-ev-dark-harder dark:bg-ev-light dark:text-ev-dark dark:hover:bg-ev-light-hard  dark:pressed:bg-ev-light-harder`
  }
}, xl = ({ variant: e = "flat", color: t = "foreground" }) => hl[e][t], Yl = _n(
  ({ children: e, ...t }, n) => {
    const { buttonProps: r, isPressed: a } = Wa(
      t,
      n
    ), { hoverProps: o, isHovered: i } = Ka({});
    return /* @__PURE__ */ j(
      "button",
      {
        ref: n,
        ...Qe(t),
        ...o,
        ...r,
        ...a && { "data-pressed": a },
        ...i && !a && { "data-hovered": i },
        className: B(xl(t), t.className),
        children: e
      }
    );
  }
), qr = "underline decoration-dashed px-2 py-1 rounded hover:decoration-solid", $l = {
  primary: `${qr} text-ev-primary hover:text-ev-primary-hard`,
  secondary: `${qr} text-ev-secondary hover:text-ev-secondary-hard`
}, wl = ({ color: e = "primary" }) => $l[e], Hl = _n(
  ({ children: e, ...t }, n) => {
    const { linkProps: r } = ol(t, n);
    return /* @__PURE__ */ ue(
      "a",
      {
        ref: n,
        ...Qe(t),
        ...r,
        className: B(wl(t), t.className),
        children: [
          t.target === "_blank" && /* @__PURE__ */ j(Ae, { icon: Xr, className: "mr-2" }),
          e
        ]
      }
    );
  }
), Ul = ({
  variant: e = "solid",
  className: t,
  labelClassName: n,
  inputClassName: r,
  descriptionClassName: a,
  errorClassName: o,
  ...i
}) => {
  let { label: s } = i, l = ne(null), {
    labelProps: c,
    inputProps: u,
    descriptionProps: d,
    errorMessageProps: g,
    isInvalid: p,
    validationErrors: S
  } = Ga(i, l);
  return /* @__PURE__ */ ue("div", { className: B("flex flex-col w-full", t), children: [
    e === "solid" && /* @__PURE__ */ j(
      "label",
      {
        ...c,
        className: B(c.className, n),
        children: s
      }
    ),
    /* @__PURE__ */ j(
      "input",
      {
        ...u,
        className: B(
          `bg-inherit ${e === "flat" && "border-0 "} ${e === "solid" && "border-2 border-ev-dark rounded-sm"}`,
          r
        ),
        ref: l
      }
    ),
    i.description && /* @__PURE__ */ j(
      "div",
      {
        ...d,
        className: B("text-[12px]", a),
        children: i.description
      }
    ),
    p && /* @__PURE__ */ j(
      "div",
      {
        ...g,
        className: B("text-red-700 text-[12px]", o),
        children: S.join(" ")
      }
    )
  ] });
}, Kl = ({
  variant: e = "solid",
  className: t,
  labelClassName: n,
  inputClassName: r,
  ...a
}) => {
  let { label: o } = a, i = ne(null), { labelProps: s, inputProps: l } = Ga(
    {
      ...a,
      inputElementType: "textarea"
    },
    i
  );
  return /* @__PURE__ */ ue("div", { className: B("flex flex-col w-full", t), children: [
    e === "solid" && /* @__PURE__ */ j(
      "label",
      {
        ...s,
        className: B(s.className, n),
        children: o
      }
    ),
    /* @__PURE__ */ j(
      "textarea",
      {
        ...l,
        ref: i,
        className: B(
          l.className,
          "bg-inherit h-full",
          r
        )
      }
    )
  ] });
};
export {
  zl as A,
  Fl as Blockquote,
  Vl as Button,
  Ll as Code,
  Tl as H1,
  Sl as H2,
  Ol as H3,
  Al as H4,
  Cl as H5,
  Il as H6,
  Yl as IconButton,
  jl as Img,
  Hl as Link,
  Dl as Ol,
  Ml as P,
  Nl as Pre,
  _l as Strong,
  Kl as TextArea,
  Ul as TextField,
  Rl as Ul
};
