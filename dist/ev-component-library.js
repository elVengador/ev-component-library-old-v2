import { jsxs as le, jsx as j } from "react/jsx-runtime";
import fe, { useRef as re, useCallback as ge, useState as ue, useContext as De, useEffect as ce, createContext as Wn, useMemo as et, forwardRef as Bn } from "react";
import { twMerge as q } from "tailwind-merge";
var Ga = {
  prefix: "fas",
  iconName: "quote-right",
  icon: [448, 512, [8221, "quote-right-alt"], "f10e", "M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"]
}, qn = {
  prefix: "fas",
  iconName: "link",
  icon: [640, 512, [128279, "chain"], "f0c1", "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]
}, Xa = {
  prefix: "fas",
  iconName: "quote-left",
  icon: [448, 512, [8220, "quote-left-alt"], "f10d", "M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"]
};
function Xr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xr(Object(r), !0).forEach(function(n) {
      Z(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Lt(e) {
  "@babel/helpers - typeof";
  return Lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lt(e);
}
function Qa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ja(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Za(e, t, r) {
  return t && Ja(e.prototype, t), Object.defineProperty(e, "prototype", {
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
  return ti(e) || ni(e, t) || Gn(e, t) || ii();
}
function ct(e) {
  return ei(e) || ri(e) || Gn(e) || ai();
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
    var n = [], a = !0, o = !1, i, s;
    try {
      for (r = r.call(e); !(a = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t)); a = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function Gn(e, t) {
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
var Qr = function() {
}, Lr = {}, Xn = {}, Qn = null, Jn = {
  mark: Qr,
  measure: Qr
};
try {
  typeof window < "u" && (Lr = window), typeof document < "u" && (Xn = document), typeof MutationObserver < "u" && (Qn = MutationObserver), typeof performance < "u" && (Jn = performance);
} catch {
}
var oi = Lr.navigator || {}, Jr = oi.userAgent, Zr = Jr === void 0 ? "" : Jr, Te = Lr, G = Xn, en = Qn, bt = Jn;
Te.document;
var Pe = !!G.documentElement && !!G.head && typeof G.addEventListener == "function" && typeof G.createElement == "function", Zn = ~Zr.indexOf("MSIE") || ~Zr.indexOf("Trident/"), gt, yt, ht, xt, wt, xe = "___FONT_AWESOME___", dr = 16, ea = "fa", ta = "svg-inline--fa", Le = "data-fa-i2svg", vr = "data-fa-pseudo-element", si = "data-fa-pseudo-element-pending", _r = "data-prefix", Nr = "data-icon", tn = "fontawesome-i2svg", li = "async", fi = ["HTML", "HEAD", "STYLE", "SCRIPT"], ra = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), B = "classic", J = "sharp", Rr = [B, J];
function ut(e) {
  return new Proxy(e, {
    get: function(r, n) {
      return n in r ? r[n] : r[B];
    }
  });
}
var at = ut((gt = {}, Z(gt, B, {
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
}), gt)), it = ut((yt = {}, Z(yt, B, {
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
}), yt)), ot = ut((ht = {}, Z(ht, B, {
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
}), ht)), ci = ut((xt = {}, Z(xt, B, {
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
}), xt)), ui = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, na = "fa-layers-text", di = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, vi = ut((wt = {}, Z(wt, B, {
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
}), wt)), aa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mi = aa.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), pi = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ce = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, st = /* @__PURE__ */ new Set();
Object.keys(it[B]).map(st.add.bind(st));
Object.keys(it[J]).map(st.add.bind(st));
var bi = [].concat(Rr, ct(st), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ce.GROUP, Ce.SWAP_OPACITY, Ce.PRIMARY, Ce.SECONDARY]).concat(aa.map(function(e) {
  return "".concat(e, "x");
})).concat(mi.map(function(e) {
  return "w-".concat(e);
})), tt = Te.FontAwesomeConfig || {};
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
    a != null && (tt[n] = a);
  });
}
var ia = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: ea,
  replacementClass: ta,
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
tt.familyPrefix && (tt.cssPrefix = tt.familyPrefix);
var We = x(x({}, ia), tt);
We.autoReplaceSvg || (We.observeMutations = !1);
var E = {};
Object.keys(ia).forEach(function(e) {
  Object.defineProperty(E, e, {
    enumerable: !0,
    set: function(r) {
      We[e] = r, rt.forEach(function(n) {
        return n(E);
      });
    },
    get: function() {
      return We[e];
    }
  });
});
Object.defineProperty(E, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    We.cssPrefix = t, rt.forEach(function(r) {
      return r(E);
    });
  },
  get: function() {
    return We.cssPrefix;
  }
});
Te.FontAwesomeConfig = E;
var rt = [];
function xi(e) {
  return rt.push(e), function() {
    rt.splice(rt.indexOf(e), 1);
  };
}
var ke = dr, be = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function wi(e) {
  if (!(!e || !Pe)) {
    var t = G.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var r = G.head.childNodes, n = null, a = r.length - 1; a > -1; a--) {
      var o = r[a], i = (o.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(i) > -1 && (n = o);
    }
    return G.head.insertBefore(t, n), e;
  }
}
var $i = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function lt() {
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
function oa(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Pi(e) {
  return Object.keys(e || {}).reduce(function(t, r) {
    return t + "".concat(r, '="').concat(oa(e[r]), '" ');
  }, "").trim();
}
function Ht(e) {
  return Object.keys(e || {}).reduce(function(t, r) {
    return t + "".concat(r, ": ").concat(e[r].trim(), ";");
  }, "");
}
function jr(e) {
  return e.size !== be.size || e.x !== be.x || e.y !== be.y || e.rotate !== be.rotate || e.flipX || e.flipY;
}
function ki(e) {
  var t = e.transform, r = e.containerWidth, n = e.iconWidth, a = {
    transform: "translate(".concat(r / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(o, " ").concat(i, " ").concat(s)
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
  var t = e.transform, r = e.width, n = r === void 0 ? dr : r, a = e.height, o = a === void 0 ? dr : a, i = e.startCentered, s = i === void 0 ? !1 : i, l = "";
  return s && Zn ? l += "translate(".concat(t.x / ke - n / 2, "em, ").concat(t.y / ke - o / 2, "em) ") : s ? l += "translate(calc(-50% + ".concat(t.x / ke, "em), calc(-50% + ").concat(t.y / ke, "em)) ") : l += "translate(".concat(t.x / ke, "em, ").concat(t.y / ke, "em) "), l += "scale(".concat(t.size / ke * (t.flipX ? -1 : 1), ", ").concat(t.size / ke * (t.flipY ? -1 : 1), ") "), l += "rotate(".concat(t.rotate, "deg) "), l;
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
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
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
function sa() {
  var e = ea, t = ta, r = E.cssPrefix, n = E.replacementClass, a = Ti;
  if (r !== e || n !== t) {
    var o = new RegExp("\\.".concat(e, "\\-"), "g"), i = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    a = a.replace(o, ".".concat(r, "-")).replace(i, "--".concat(r, "-")).replace(s, ".".concat(n));
  }
  return a;
}
var rn = !1;
function Gt() {
  E.autoAddCss && !rn && (wi(sa()), rn = !0);
}
var Si = {
  mixout: function() {
    return {
      dom: {
        css: sa,
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
}, we = Te || {};
we[xe] || (we[xe] = {});
we[xe].styles || (we[xe].styles = {});
we[xe].hooks || (we[xe].hooks = {});
we[xe].shims || (we[xe].shims = []);
var de = we[xe], la = [], Oi = function e() {
  G.removeEventListener("DOMContentLoaded", e), _t = 1, la.map(function(t) {
    return t();
  });
}, _t = !1;
Pe && (_t = (G.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(G.readyState), _t || G.addEventListener("DOMContentLoaded", Oi));
function Ai(e) {
  Pe && (_t ? setTimeout(e, 0) : la.push(e));
}
function dt(e) {
  var t = e.tag, r = e.attributes, n = r === void 0 ? {} : r, a = e.children, o = a === void 0 ? [] : a;
  return typeof e == "string" ? oa(e) : "<".concat(t, " ").concat(Pi(n), ">").concat(o.map(dt).join(""), "</").concat(t, ">");
}
function nn(e, t, r) {
  if (e && e[t] && e[t][r])
    return {
      prefix: t,
      iconName: r,
      icon: e[t][r]
    };
}
var Xt = function(t, r, n, a) {
  var o = Object.keys(t), i = o.length, s = r, l, c, u;
  for (n === void 0 ? (l = 1, u = t[o[0]]) : (l = 0, u = n); l < i; l++)
    c = o[l], u = s(u, t[c], c, t);
  return u;
};
function Ci(e) {
  for (var t = [], r = 0, n = e.length; r < n; ) {
    var a = e.charCodeAt(r++);
    if (a >= 55296 && a <= 56319 && r < n) {
      var o = e.charCodeAt(r++);
      (o & 64512) == 56320 ? t.push(((a & 1023) << 10) + (o & 1023) + 65536) : (t.push(a), r--);
    } else
      t.push(a);
  }
  return t;
}
function mr(e) {
  var t = Ci(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Ii(e, t) {
  var r = e.length, n = e.charCodeAt(t), a;
  return n >= 55296 && n <= 56319 && r > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (n - 55296) * 1024 + a - 56320 + 65536 : n;
}
function an(e) {
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r], a = !!n.icon;
    return a ? t[n.iconName] = n.icon : t[r] = n, t;
  }, {});
}
function pr(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = r.skipHooks, a = n === void 0 ? !1 : n, o = an(t);
  typeof de.hooks.addPack == "function" && !a ? de.hooks.addPack(e, an(t)) : de.styles[e] = x(x({}, de.styles[e] || {}), o), e === "fas" && pr("fa", t);
}
var $t, Pt, kt, Ye = de.styles, Mi = de.shims, Li = ($t = {}, Z($t, B, Object.values(ot[B])), Z($t, J, Object.values(ot[J])), $t), Fr = null, fa = {}, ca = {}, ua = {}, da = {}, va = {}, _i = (Pt = {}, Z(Pt, B, Object.keys(at[B])), Z(Pt, J, Object.keys(at[J])), Pt);
function Ni(e) {
  return ~bi.indexOf(e);
}
function Ri(e, t) {
  var r = t.split("-"), n = r[0], a = r.slice(1).join("-");
  return n === e && a !== "" && !Ni(a) ? a : null;
}
var ma = function() {
  var t = function(o) {
    return Xt(Ye, function(i, s, l) {
      return i[l] = Xt(s, o, {}), i;
    }, {});
  };
  fa = t(function(a, o, i) {
    if (o[3] && (a[o[3]] = i), o[2]) {
      var s = o[2].filter(function(l) {
        return typeof l == "number";
      });
      s.forEach(function(l) {
        a[l.toString(16)] = i;
      });
    }
    return a;
  }), ca = t(function(a, o, i) {
    if (a[i] = i, o[2]) {
      var s = o[2].filter(function(l) {
        return typeof l == "string";
      });
      s.forEach(function(l) {
        a[l] = i;
      });
    }
    return a;
  }), va = t(function(a, o, i) {
    var s = o[2];
    return a[i] = i, s.forEach(function(l) {
      a[l] = i;
    }), a;
  });
  var r = "far" in Ye || E.autoFetchSvg, n = Xt(Mi, function(a, o) {
    var i = o[0], s = o[1], l = o[2];
    return s === "far" && !r && (s = "fas"), typeof i == "string" && (a.names[i] = {
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
  ua = n.names, da = n.unicodes, Fr = Vt(E.styleDefault, {
    family: E.familyDefault
  });
};
xi(function(e) {
  Fr = Vt(e.styleDefault, {
    family: E.familyDefault
  });
});
ma();
function zr(e, t) {
  return (fa[e] || {})[t];
}
function Di(e, t) {
  return (ca[e] || {})[t];
}
function Ie(e, t) {
  return (va[e] || {})[t];
}
function pa(e) {
  return ua[e] || {
    prefix: null,
    iconName: null
  };
}
function ji(e) {
  var t = da[e], r = zr("fas", e);
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
function Vt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.family, n = r === void 0 ? B : r, a = at[n][e], o = it[n][e] || it[n][a], i = e in de.styles ? e : null;
  return o || i || null;
}
var on = (kt = {}, Z(kt, B, Object.keys(ot[B])), Z(kt, J, Object.keys(ot[J])), kt);
function Ut(e) {
  var t, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.skipLookups, a = n === void 0 ? !1 : n, o = (t = {}, Z(t, B, "".concat(E.cssPrefix, "-").concat(B)), Z(t, J, "".concat(E.cssPrefix, "-").concat(J)), t), i = null, s = B;
  (e.includes(o[B]) || e.some(function(c) {
    return on[B].includes(c);
  })) && (s = B), (e.includes(o[J]) || e.some(function(c) {
    return on[J].includes(c);
  })) && (s = J);
  var l = e.reduce(function(c, u) {
    var d = Ri(E.cssPrefix, u);
    if (Ye[u] ? (u = Li[s].includes(u) ? ci[s][u] : u, i = u, c.prefix = u) : _i[s].indexOf(u) > -1 ? (i = u, c.prefix = Vt(u, {
      family: s
    })) : d ? c.iconName = d : u !== E.replacementClass && u !== o[B] && u !== o[J] && c.rest.push(u), !a && c.prefix && c.iconName) {
      var p = i === "fa" ? pa(c.iconName) : {}, b = Ie(c.prefix, c.iconName);
      p.prefix && (i = null), c.iconName = p.iconName || b || c.iconName, c.prefix = p.prefix || c.prefix, c.prefix === "far" && !Ye.far && Ye.fas && !E.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, Yr());
  return (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"), !l.prefix && s === J && (Ye.fass || E.autoFetchSvg) && (l.prefix = "fass", l.iconName = Ie(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || i === "fa") && (l.prefix = Se() || "fas"), l;
}
var Fi = /* @__PURE__ */ function() {
  function e() {
    Qa(this, e), this.definitions = {};
  }
  return Za(e, [{
    key: "add",
    value: function() {
      for (var r = this, n = arguments.length, a = new Array(n), o = 0; o < n; o++)
        a[o] = arguments[o];
      var i = a.reduce(this._pullDefinitions, {});
      Object.keys(i).forEach(function(s) {
        r.definitions[s] = x(x({}, r.definitions[s] || {}), i[s]), pr(s, i[s]);
        var l = ot[B][s];
        l && pr(l, i[s]), ma();
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
      return Object.keys(a).map(function(o) {
        var i = a[o], s = i.prefix, l = i.iconName, c = i.icon, u = c[2];
        r[s] || (r[s] = {}), u.length > 0 && u.forEach(function(d) {
          typeof d == "string" && (r[s][d] = c);
        }), r[s][l] = c;
      }), r;
    }
  }]), e;
}(), sn = [], He = {}, Ke = {}, zi = Object.keys(Ke);
function Yi(e, t) {
  var r = t.mixoutsTo;
  return sn = e, He = {}, Object.keys(Ke).forEach(function(n) {
    zi.indexOf(n) === -1 && delete Ke[n];
  }), sn.forEach(function(n) {
    var a = n.mixout ? n.mixout() : {};
    if (Object.keys(a).forEach(function(i) {
      typeof a[i] == "function" && (r[i] = a[i]), Lt(a[i]) === "object" && Object.keys(a[i]).forEach(function(s) {
        r[i] || (r[i] = {}), r[i][s] = a[i][s];
      });
    }), n.hooks) {
      var o = n.hooks();
      Object.keys(o).forEach(function(i) {
        He[i] || (He[i] = []), He[i].push(o[i]);
      });
    }
    n.provides && n.provides(Ke);
  }), r;
}
function br(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    n[a - 2] = arguments[a];
  var o = He[e] || [];
  return o.forEach(function(i) {
    t = i.apply(null, [t].concat(n));
  }), t;
}
function _e(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var a = He[e] || [];
  a.forEach(function(o) {
    o.apply(null, r);
  });
}
function $e() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Ke[e] ? Ke[e].apply(null, t) : void 0;
}
function gr(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, r = e.prefix || Se();
  if (t)
    return t = Ie(r, t) || t, nn(ba.definitions, r, t) || nn(de.styles, r, t);
}
var ba = new Fi(), Hi = function() {
  E.autoReplaceSvg = !1, E.observeMutations = !1, _e("noAuto");
}, Vi = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Pe ? (_e("beforeI2svg", t), $e("pseudoElements2svg", t), $e("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.autoReplaceSvgRoot;
    E.autoReplaceSvg === !1 && (E.autoReplaceSvg = !0), E.observeMutations = !0, Ai(function() {
      Ki({
        autoReplaceSvgRoot: r
      }), _e("watch", t);
    });
  }
}, Ui = {
  icon: function(t) {
    if (t === null)
      return null;
    if (Lt(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: Ie(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var r = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], n = Vt(t[0]);
      return {
        prefix: n,
        iconName: Ie(n, r) || r
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(E.cssPrefix, "-")) > -1 || t.match(ui))) {
      var a = Ut(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || Se(),
        iconName: Ie(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof t == "string") {
      var o = Se();
      return {
        prefix: o,
        iconName: Ie(o, t) || t
      };
    }
  }
}, ie = {
  noAuto: Hi,
  config: E,
  dom: Vi,
  parse: Ui,
  library: ba,
  findIconDefinition: gr,
  toHtml: dt
}, Ki = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.autoReplaceSvgRoot, n = r === void 0 ? G : r;
  (Object.keys(de.styles).length > 0 || E.autoFetchSvg) && Pe && E.autoReplaceSvg && ie.dom.i2svg({
    node: n
  });
};
function Kt(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(n) {
        return dt(n);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (Pe) {
        var n = G.createElement("div");
        return n.innerHTML = e.html, n.children;
      }
    }
  }), e;
}
function Wi(e) {
  var t = e.children, r = e.main, n = e.mask, a = e.attributes, o = e.styles, i = e.transform;
  if (jr(i) && r.found && !n.found) {
    var s = r.width, l = r.height, c = {
      x: s / l / 2,
      y: 0.5
    };
    a.style = Ht(x(x({}, o), {}, {
      "transform-origin": "".concat(c.x + i.x / 16, "em ").concat(c.y + i.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Bi(e) {
  var t = e.prefix, r = e.iconName, n = e.children, a = e.attributes, o = e.symbol, i = o === !0 ? "".concat(t, "-").concat(E.cssPrefix, "-").concat(r) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: x(x({}, a), {}, {
        id: i
      }),
      children: n
    }]
  }];
}
function Hr(e) {
  var t = e.icons, r = t.main, n = t.mask, a = e.prefix, o = e.iconName, i = e.transform, s = e.symbol, l = e.title, c = e.maskId, u = e.titleId, d = e.extra, p = e.watchable, b = p === void 0 ? !1 : p, T = n.found ? n : r, w = T.width, S = T.height, O = a === "fak", A = [E.replacementClass, o ? "".concat(E.cssPrefix, "-").concat(o) : ""].filter(function(I) {
    return d.classes.indexOf(I) === -1;
  }).filter(function(I) {
    return I !== "" || !!I;
  }).concat(d.classes).join(" "), k = {
    children: [],
    attributes: x(x({}, d.attributes), {}, {
      "data-prefix": a,
      "data-icon": o,
      class: A,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(w, " ").concat(S)
    })
  }, C = O && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(w / S * 16 * 0.0625, "em")
  } : {};
  b && (k.attributes[Le] = ""), l && (k.children.push({
    tag: "title",
    attributes: {
      id: k.attributes["aria-labelledby"] || "title-".concat(u || lt())
    },
    children: [l]
  }), delete k.attributes.title);
  var v = x(x({}, k), {}, {
    prefix: a,
    iconName: o,
    main: r,
    mask: n,
    maskId: c,
    transform: i,
    symbol: s,
    styles: x(x({}, C), d.styles)
  }), Q = n.found && r.found ? $e("generateAbstractMask", v) || {
    children: [],
    attributes: {}
  } : $e("generateAbstractIcon", v) || {
    children: [],
    attributes: {}
  }, ee = Q.children, f = Q.attributes;
  return v.children = ee, v.attributes = f, s ? Bi(v) : Wi(v);
}
function ln(e) {
  var t = e.content, r = e.width, n = e.height, a = e.transform, o = e.title, i = e.extra, s = e.watchable, l = s === void 0 ? !1 : s, c = x(x(x({}, i.attributes), o ? {
    title: o
  } : {}), {}, {
    class: i.classes.join(" ")
  });
  l && (c[Le] = "");
  var u = x({}, i.styles);
  jr(a) && (u.transform = Ei({
    transform: a,
    startCentered: !0,
    width: r,
    height: n
  }), u["-webkit-transform"] = u.transform);
  var d = Ht(u);
  d.length > 0 && (c.style = d);
  var p = [];
  return p.push({
    tag: "span",
    attributes: c,
    children: [t]
  }), o && p.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), p;
}
function qi(e) {
  var t = e.content, r = e.title, n = e.extra, a = x(x(x({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), o = Ht(n.styles);
  o.length > 0 && (a.style = o);
  var i = [];
  return i.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), r && i.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [r]
  }), i;
}
var Qt = de.styles;
function yr(e) {
  var t = e[0], r = e[1], n = e.slice(4), a = Mr(n, 1), o = a[0], i = null;
  return Array.isArray(o) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(E.cssPrefix, "-").concat(Ce.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(E.cssPrefix, "-").concat(Ce.SECONDARY),
        fill: "currentColor",
        d: o[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(E.cssPrefix, "-").concat(Ce.PRIMARY),
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
    height: r,
    icon: i
  };
}
var Gi = {
  found: !1,
  width: 512,
  height: 512
};
function Xi(e, t) {
  !ra && !E.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function hr(e, t) {
  var r = t;
  return t === "fa" && E.styleDefault !== null && (t = Se()), new Promise(function(n, a) {
    if ($e("missingIconAbstract"), r === "fa") {
      var o = pa(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && Qt[t] && Qt[t][e]) {
      var i = Qt[t][e];
      return n(yr(i));
    }
    Xi(e, t), n(x(x({}, Gi), {}, {
      icon: E.showMissingIcons && e ? $e("missingIconAbstract") || {} : {}
    }));
  });
}
var fn = function() {
}, xr = E.measurePerformance && bt && bt.mark && bt.measure ? bt : {
  mark: fn,
  measure: fn
}, Ze = 'FA "6.5.2"', Qi = function(t) {
  return xr.mark("".concat(Ze, " ").concat(t, " begins")), function() {
    return ga(t);
  };
}, ga = function(t) {
  xr.mark("".concat(Ze, " ").concat(t, " ends")), xr.measure("".concat(Ze, " ").concat(t), "".concat(Ze, " ").concat(t, " begins"), "".concat(Ze, " ").concat(t, " ends"));
}, Vr = {
  begin: Qi,
  end: ga
}, Ct = function() {
};
function cn(e) {
  var t = e.getAttribute ? e.getAttribute(Le) : null;
  return typeof t == "string";
}
function Ji(e) {
  var t = e.getAttribute ? e.getAttribute(_r) : null, r = e.getAttribute ? e.getAttribute(Nr) : null;
  return t && r;
}
function Zi(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(E.replacementClass);
}
function eo() {
  if (E.autoReplaceSvg === !0)
    return It.replace;
  var e = It[E.autoReplaceSvg];
  return e || It.replace;
}
function to(e) {
  return G.createElementNS("http://www.w3.org/2000/svg", e);
}
function ro(e) {
  return G.createElement(e);
}
function ya(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.ceFn, n = r === void 0 ? e.tag === "svg" ? to : ro : r;
  if (typeof e == "string")
    return G.createTextNode(e);
  var a = n(e.tag);
  Object.keys(e.attributes || []).forEach(function(i) {
    a.setAttribute(i, e.attributes[i]);
  });
  var o = e.children || [];
  return o.forEach(function(i) {
    a.appendChild(ya(i, {
      ceFn: n
    }));
  }), a;
}
function no(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var It = {
  replace: function(t) {
    var r = t[0];
    if (r.parentNode)
      if (t[1].forEach(function(a) {
        r.parentNode.insertBefore(ya(a), r);
      }), r.getAttribute(Le) === null && E.keepOriginalSource) {
        var n = G.createComment(no(r));
        r.parentNode.replaceChild(n, r);
      } else
        r.remove();
  },
  nest: function(t) {
    var r = t[0], n = t[1];
    if (~Dr(r).indexOf(E.replacementClass))
      return It.replace(t);
    var a = new RegExp("".concat(E.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var o = n[0].attributes.class.split(" ").reduce(function(s, l) {
        return l === E.replacementClass || l.match(a) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? r.removeAttribute("class") : r.setAttribute("class", o.toNode.join(" "));
    }
    var i = n.map(function(s) {
      return dt(s);
    }).join(`
`);
    r.setAttribute(Le, ""), r.innerHTML = i;
  }
};
function un(e) {
  e();
}
function ha(e, t) {
  var r = typeof t == "function" ? t : Ct;
  if (e.length === 0)
    r();
  else {
    var n = un;
    E.mutateApproach === li && (n = Te.requestAnimationFrame || un), n(function() {
      var a = eo(), o = Vr.begin("mutate");
      e.map(a), o(), r();
    });
  }
}
var Ur = !1;
function xa() {
  Ur = !0;
}
function wr() {
  Ur = !1;
}
var Nt = null;
function dn(e) {
  if (en && E.observeMutations) {
    var t = e.treeCallback, r = t === void 0 ? Ct : t, n = e.nodeCallback, a = n === void 0 ? Ct : n, o = e.pseudoElementsCallback, i = o === void 0 ? Ct : o, s = e.observeMutationsRoot, l = s === void 0 ? G : s;
    Nt = new en(function(c) {
      if (!Ur) {
        var u = Se();
        Ge(c).forEach(function(d) {
          if (d.type === "childList" && d.addedNodes.length > 0 && !cn(d.addedNodes[0]) && (E.searchPseudoElements && i(d.target), r(d.target)), d.type === "attributes" && d.target.parentNode && E.searchPseudoElements && i(d.target.parentNode), d.type === "attributes" && cn(d.target) && ~pi.indexOf(d.attributeName))
            if (d.attributeName === "class" && Ji(d.target)) {
              var p = Ut(Dr(d.target)), b = p.prefix, T = p.iconName;
              d.target.setAttribute(_r, b || u), T && d.target.setAttribute(Nr, T);
            } else
              Zi(d.target) && a(d.target);
        });
      }
    }), Pe && Nt.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function ao() {
  Nt && Nt.disconnect();
}
function io(e) {
  var t = e.getAttribute("style"), r = [];
  return t && (r = t.split(";").reduce(function(n, a) {
    var o = a.split(":"), i = o[0], s = o.slice(1);
    return i && s.length > 0 && (n[i] = s.join(":").trim()), n;
  }, {})), r;
}
function oo(e) {
  var t = e.getAttribute("data-prefix"), r = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "", a = Ut(Dr(e));
  return a.prefix || (a.prefix = Se()), t && r && (a.prefix = t, a.iconName = r), a.iconName && a.prefix || (a.prefix && n.length > 0 && (a.iconName = Di(a.prefix, e.innerText) || zr(a.prefix, mr(e.innerText))), !a.iconName && E.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function so(e) {
  var t = Ge(e.attributes).reduce(function(a, o) {
    return a.name !== "class" && a.name !== "style" && (a[o.name] = o.value), a;
  }, {}), r = e.getAttribute("title"), n = e.getAttribute("data-fa-title-id");
  return E.autoA11y && (r ? t["aria-labelledby"] = "".concat(E.replacementClass, "-title-").concat(n || lt()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function lo() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: be,
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
function vn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, r = oo(e), n = r.iconName, a = r.prefix, o = r.rest, i = so(e), s = br("parseNodeAttributes", {}, e), l = t.styleParser ? io(e) : [];
  return x({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: be,
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
var fo = de.styles;
function wa(e) {
  var t = E.autoReplaceSvg === "nest" ? vn(e, {
    styleParser: !1
  }) : vn(e);
  return ~t.extra.classes.indexOf(na) ? $e("generateLayersText", e, t) : $e("generateSvgReplacementMutation", e, t);
}
var Oe = /* @__PURE__ */ new Set();
Rr.map(function(e) {
  Oe.add("fa-".concat(e));
});
Object.keys(at[B]).map(Oe.add.bind(Oe));
Object.keys(at[J]).map(Oe.add.bind(Oe));
Oe = ct(Oe);
function mn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Pe)
    return Promise.resolve();
  var r = G.documentElement.classList, n = function(d) {
    return r.add("".concat(tn, "-").concat(d));
  }, a = function(d) {
    return r.remove("".concat(tn, "-").concat(d));
  }, o = E.autoFetchSvg ? Oe : Rr.map(function(u) {
    return "fa-".concat(u);
  }).concat(Object.keys(fo));
  o.includes("fa") || o.push("fa");
  var i = [".".concat(na, ":not([").concat(Le, "])")].concat(o.map(function(u) {
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
    n("pending"), a("complete");
  else
    return Promise.resolve();
  var l = Vr.begin("onTree"), c = s.reduce(function(u, d) {
    try {
      var p = wa(d);
      p && u.push(p);
    } catch (b) {
      ra || b.name === "MissingIcon" && console.error(b);
    }
    return u;
  }, []);
  return new Promise(function(u, d) {
    Promise.all(c).then(function(p) {
      ha(p, function() {
        n("active"), n("complete"), a("pending"), typeof t == "function" && t(), l(), u();
      });
    }).catch(function(p) {
      l(), d(p);
    });
  });
}
function co(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  wa(e).then(function(r) {
    r && ha([r], t);
  });
}
function uo(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (t || {}).icon ? t : gr(t || {}), a = r.mask;
    return a && (a = (a || {}).icon ? a : gr(a || {})), e(n, x(x({}, r), {}, {
      mask: a
    }));
  };
}
var vo = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.transform, a = n === void 0 ? be : n, o = r.symbol, i = o === void 0 ? !1 : o, s = r.mask, l = s === void 0 ? null : s, c = r.maskId, u = c === void 0 ? null : c, d = r.title, p = d === void 0 ? null : d, b = r.titleId, T = b === void 0 ? null : b, w = r.classes, S = w === void 0 ? [] : w, O = r.attributes, A = O === void 0 ? {} : O, k = r.styles, C = k === void 0 ? {} : k;
  if (t) {
    var v = t.prefix, Q = t.iconName, ee = t.icon;
    return Kt(x({
      type: "icon"
    }, t), function() {
      return _e("beforeDOMElementCreation", {
        iconDefinition: t,
        params: r
      }), E.autoA11y && (p ? A["aria-labelledby"] = "".concat(E.replacementClass, "-title-").concat(T || lt()) : (A["aria-hidden"] = "true", A.focusable = "false")), Hr({
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
        transform: x(x({}, be), a),
        symbol: i,
        title: p,
        maskId: u,
        titleId: T,
        extra: {
          attributes: A,
          styles: C,
          classes: S
        }
      });
    });
  }
}, mo = {
  mixout: function() {
    return {
      icon: uo(vo)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.treeCallback = mn, r.nodeCallback = co, r;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(r) {
      var n = r.node, a = n === void 0 ? G : n, o = r.callback, i = o === void 0 ? function() {
      } : o;
      return mn(a, i);
    }, t.generateSvgReplacementMutation = function(r, n) {
      var a = n.iconName, o = n.title, i = n.titleId, s = n.prefix, l = n.transform, c = n.symbol, u = n.mask, d = n.maskId, p = n.extra;
      return new Promise(function(b, T) {
        Promise.all([hr(a, s), u.iconName ? hr(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(w) {
          var S = Mr(w, 2), O = S[0], A = S[1];
          b([r, Hr({
            icons: {
              main: O,
              mask: A
            },
            prefix: s,
            iconName: a,
            transform: l,
            symbol: c,
            maskId: d,
            title: o,
            titleId: i,
            extra: p,
            watchable: !0
          })]);
        }).catch(T);
      });
    }, t.generateAbstractIcon = function(r) {
      var n = r.children, a = r.attributes, o = r.main, i = r.transform, s = r.styles, l = Ht(s);
      l.length > 0 && (a.style = l);
      var c;
      return jr(i) && (c = $e("generateAbstractTransformGrouping", {
        main: o,
        transform: i,
        containerWidth: o.width,
        iconWidth: o.width
      })), n.push(c || o.icon), {
        children: n,
        attributes: a
      };
    };
  }
}, po = {
  mixout: function() {
    return {
      layer: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.classes, o = a === void 0 ? [] : a;
        return Kt({
          type: "layer"
        }, function() {
          _e("beforeDOMElementCreation", {
            assembler: r,
            params: n
          });
          var i = [];
          return r(function(s) {
            Array.isArray(s) ? s.map(function(l) {
              i = i.concat(l.abstract);
            }) : i = i.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(E.cssPrefix, "-layers")].concat(ct(o)).join(" ")
            },
            children: i
          }];
        });
      }
    };
  }
}, bo = {
  mixout: function() {
    return {
      counter: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.title, o = a === void 0 ? null : a, i = n.classes, s = i === void 0 ? [] : i, l = n.attributes, c = l === void 0 ? {} : l, u = n.styles, d = u === void 0 ? {} : u;
        return Kt({
          type: "counter",
          content: r
        }, function() {
          return _e("beforeDOMElementCreation", {
            content: r,
            params: n
          }), qi({
            content: r.toString(),
            title: o,
            extra: {
              attributes: c,
              styles: d,
              classes: ["".concat(E.cssPrefix, "-layers-counter")].concat(ct(s))
            }
          });
        });
      }
    };
  }
}, go = {
  mixout: function() {
    return {
      text: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.transform, o = a === void 0 ? be : a, i = n.title, s = i === void 0 ? null : i, l = n.classes, c = l === void 0 ? [] : l, u = n.attributes, d = u === void 0 ? {} : u, p = n.styles, b = p === void 0 ? {} : p;
        return Kt({
          type: "text",
          content: r
        }, function() {
          return _e("beforeDOMElementCreation", {
            content: r,
            params: n
          }), ln({
            content: r,
            transform: x(x({}, be), o),
            title: s,
            extra: {
              attributes: d,
              styles: b,
              classes: ["".concat(E.cssPrefix, "-layers-text")].concat(ct(c))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(r, n) {
      var a = n.title, o = n.transform, i = n.extra, s = null, l = null;
      if (Zn) {
        var c = parseInt(getComputedStyle(r).fontSize, 10), u = r.getBoundingClientRect();
        s = u.width / c, l = u.height / c;
      }
      return E.autoA11y && !a && (i.attributes["aria-hidden"] = "true"), Promise.resolve([r, ln({
        content: r.innerHTML,
        width: s,
        height: l,
        transform: o,
        title: a,
        extra: i,
        watchable: !0
      })]);
    };
  }
}, yo = new RegExp('"', "ug"), pn = [1105920, 1112319];
function ho(e) {
  var t = e.replace(yo, ""), r = Ii(t, 0), n = r >= pn[0] && r <= pn[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: mr(a ? t[0] : t),
    isSecondary: n || a
  };
}
function bn(e, t) {
  var r = "".concat(si).concat(t.replace(":", "-"));
  return new Promise(function(n, a) {
    if (e.getAttribute(r) !== null)
      return n();
    var o = Ge(e.children), i = o.filter(function(ee) {
      return ee.getAttribute(vr) === t;
    })[0], s = Te.getComputedStyle(e, t), l = s.getPropertyValue("font-family").match(di), c = s.getPropertyValue("font-weight"), u = s.getPropertyValue("content");
    if (i && !l)
      return e.removeChild(i), n();
    if (l && u !== "none" && u !== "") {
      var d = s.getPropertyValue("content"), p = ~["Sharp"].indexOf(l[2]) ? J : B, b = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? it[p][l[2].toLowerCase()] : vi[p][c], T = ho(d), w = T.value, S = T.isSecondary, O = l[0].startsWith("FontAwesome"), A = zr(b, w), k = A;
      if (O) {
        var C = ji(w);
        C.iconName && C.prefix && (A = C.iconName, b = C.prefix);
      }
      if (A && !S && (!i || i.getAttribute(_r) !== b || i.getAttribute(Nr) !== k)) {
        e.setAttribute(r, k), i && e.removeChild(i);
        var v = lo(), Q = v.extra;
        Q.attributes[vr] = t, hr(A, b).then(function(ee) {
          var f = Hr(x(x({}, v), {}, {
            icons: {
              main: ee,
              mask: Yr()
            },
            prefix: b,
            iconName: k,
            extra: Q,
            watchable: !0
          })), I = G.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(I, e.firstChild) : e.appendChild(I), I.outerHTML = f.map(function(H) {
            return dt(H);
          }).join(`
`), e.removeAttribute(r), n();
        }).catch(a);
      } else
        n();
    } else
      n();
  });
}
function xo(e) {
  return Promise.all([bn(e, "::before"), bn(e, "::after")]);
}
function wo(e) {
  return e.parentNode !== document.head && !~fi.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(vr) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function gn(e) {
  if (Pe)
    return new Promise(function(t, r) {
      var n = Ge(e.querySelectorAll("*")).filter(wo).map(xo), a = Vr.begin("searchPseudoElements");
      xa(), Promise.all(n).then(function() {
        a(), wr(), t();
      }).catch(function() {
        a(), wr(), r();
      });
    });
}
var $o = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.pseudoElementsCallback = gn, r;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(r) {
      var n = r.node, a = n === void 0 ? G : n;
      E.searchPseudoElements && gn(a);
    };
  }
}, yn = !1, Po = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          xa(), yn = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        dn(br("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        ao();
      },
      watch: function(r) {
        var n = r.observeMutationsRoot;
        yn ? wr() : dn(br("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, hn = function(t) {
  var r = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(n, a) {
    var o = a.toLowerCase().split("-"), i = o[0], s = o.slice(1).join("-");
    if (i && s === "h")
      return n.flipX = !0, n;
    if (i && s === "v")
      return n.flipY = !0, n;
    if (s = parseFloat(s), isNaN(s))
      return n;
    switch (i) {
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
}, ko = {
  mixout: function() {
    return {
      parse: {
        transform: function(r) {
          return hn(r);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var a = n.getAttribute("data-fa-transform");
        return a && (r.transform = hn(a)), r;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(r) {
      var n = r.main, a = r.transform, o = r.containerWidth, i = r.iconWidth, s = {
        transform: "translate(".concat(o / 2, " 256)")
      }, l = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), c = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), u = "rotate(".concat(a.rotate, " 0 0)"), d = {
        transform: "".concat(l, " ").concat(c, " ").concat(u)
      }, p = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, b = {
        outer: s,
        inner: d,
        path: p
      };
      return {
        tag: "g",
        attributes: x({}, b.outer),
        children: [{
          tag: "g",
          attributes: x({}, b.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: x(x({}, n.icon.attributes), b.path)
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
function xn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Eo(e) {
  return e.tag === "g" ? e.children : [e];
}
var To = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var a = n.getAttribute("data-fa-mask"), o = a ? Ut(a.split(" ").map(function(i) {
          return i.trim();
        })) : Yr();
        return o.prefix || (o.prefix = Se()), r.mask = o, r.maskId = n.getAttribute("data-fa-mask-id"), r;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(r) {
      var n = r.children, a = r.attributes, o = r.main, i = r.mask, s = r.maskId, l = r.transform, c = o.width, u = o.icon, d = i.width, p = i.icon, b = ki({
        transform: l,
        containerWidth: d,
        iconWidth: c
      }), T = {
        tag: "rect",
        attributes: x(x({}, Jt), {}, {
          fill: "white"
        })
      }, w = u.children ? {
        children: u.children.map(xn)
      } : {}, S = {
        tag: "g",
        attributes: x({}, b.inner),
        children: [xn(x({
          tag: u.tag,
          attributes: x(x({}, u.attributes), b.path)
        }, w))]
      }, O = {
        tag: "g",
        attributes: x({}, b.outer),
        children: [S]
      }, A = "mask-".concat(s || lt()), k = "clip-".concat(s || lt()), C = {
        tag: "mask",
        attributes: x(x({}, Jt), {}, {
          id: A,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [T, O]
      }, v = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: k
          },
          children: Eo(p)
        }, C]
      };
      return n.push(v, {
        tag: "rect",
        attributes: x({
          fill: "currentColor",
          "clip-path": "url(#".concat(k, ")"),
          mask: "url(#".concat(A, ")")
        }, Jt)
      }), {
        children: n,
        attributes: a
      };
    };
  }
}, So = {
  provides: function(t) {
    var r = !1;
    Te.matchMedia && (r = Te.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var n = [], a = {
        fill: "currentColor"
      }, o = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: x(x({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var i = x(x({}, o), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: x(x({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return r || s.children.push({
        tag: "animate",
        attributes: x(x({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: x(x({}, i), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(s), n.push({
        tag: "path",
        attributes: x(x({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: r ? [] : [{
          tag: "animate",
          attributes: x(x({}, i), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), r || n.push({
        tag: "path",
        attributes: x(x({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: x(x({}, i), {}, {
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
}, Oo = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var a = n.getAttribute("data-fa-symbol"), o = a === null ? !1 : a === "" ? !0 : a;
        return r.symbol = o, r;
      }
    };
  }
}, Ao = [Si, mo, po, bo, go, $o, Po, ko, To, So, Oo];
Yi(Ao, {
  mixoutsTo: ie
});
ie.noAuto;
ie.config;
ie.library;
ie.dom;
var $r = ie.parse;
ie.findIconDefinition;
ie.toHtml;
var Co = ie.icon;
ie.layer;
ie.text;
ie.counter;
function Io(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pr = { exports: {} }, Et = { exports: {} }, V = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wn;
function Mo() {
  if (wn)
    return V;
  wn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function k(v) {
    if (typeof v == "object" && v !== null) {
      var Q = v.$$typeof;
      switch (Q) {
        case t:
          switch (v = v.type, v) {
            case l:
            case c:
            case n:
            case o:
            case a:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case u:
                case T:
                case b:
                case i:
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
  function C(v) {
    return k(v) === c;
  }
  return V.AsyncMode = l, V.ConcurrentMode = c, V.ContextConsumer = s, V.ContextProvider = i, V.Element = t, V.ForwardRef = u, V.Fragment = n, V.Lazy = T, V.Memo = b, V.Portal = r, V.Profiler = o, V.StrictMode = a, V.Suspense = d, V.isAsyncMode = function(v) {
    return C(v) || k(v) === l;
  }, V.isConcurrentMode = C, V.isContextConsumer = function(v) {
    return k(v) === s;
  }, V.isContextProvider = function(v) {
    return k(v) === i;
  }, V.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, V.isForwardRef = function(v) {
    return k(v) === u;
  }, V.isFragment = function(v) {
    return k(v) === n;
  }, V.isLazy = function(v) {
    return k(v) === T;
  }, V.isMemo = function(v) {
    return k(v) === b;
  }, V.isPortal = function(v) {
    return k(v) === r;
  }, V.isProfiler = function(v) {
    return k(v) === o;
  }, V.isStrictMode = function(v) {
    return k(v) === a;
  }, V.isSuspense = function(v) {
    return k(v) === d;
  }, V.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === c || v === o || v === a || v === d || v === p || typeof v == "object" && v !== null && (v.$$typeof === T || v.$$typeof === b || v.$$typeof === i || v.$$typeof === s || v.$$typeof === u || v.$$typeof === S || v.$$typeof === O || v.$$typeof === A || v.$$typeof === w);
  }, V.typeOf = k, V;
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
var $n;
function Lo() {
  return $n || ($n = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function k(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === n || h === c || h === o || h === a || h === d || h === p || typeof h == "object" && h !== null && (h.$$typeof === T || h.$$typeof === b || h.$$typeof === i || h.$$typeof === s || h.$$typeof === u || h.$$typeof === S || h.$$typeof === O || h.$$typeof === A || h.$$typeof === w);
    }
    function C(h) {
      if (typeof h == "object" && h !== null) {
        var ve = h.$$typeof;
        switch (ve) {
          case t:
            var pt = h.type;
            switch (pt) {
              case l:
              case c:
              case n:
              case o:
              case a:
              case d:
                return pt;
              default:
                var Gr = pt && pt.$$typeof;
                switch (Gr) {
                  case s:
                  case u:
                  case T:
                  case b:
                  case i:
                    return Gr;
                  default:
                    return ve;
                }
            }
          case r:
            return ve;
        }
      }
    }
    var v = l, Q = c, ee = s, f = i, I = t, H = u, $ = n, W = T, m = b, y = r, X = o, te = a, Ae = d, mt = !1;
    function qt(h) {
      return mt || (mt = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), g(h) || C(h) === l;
    }
    function g(h) {
      return C(h) === c;
    }
    function P(h) {
      return C(h) === s;
    }
    function D(h) {
      return C(h) === i;
    }
    function N(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function M(h) {
      return C(h) === u;
    }
    function F(h) {
      return C(h) === n;
    }
    function L(h) {
      return C(h) === T;
    }
    function R(h) {
      return C(h) === b;
    }
    function z(h) {
      return C(h) === r;
    }
    function K(h) {
      return C(h) === o;
    }
    function Y(h) {
      return C(h) === a;
    }
    function ne(h) {
      return C(h) === d;
    }
    U.AsyncMode = v, U.ConcurrentMode = Q, U.ContextConsumer = ee, U.ContextProvider = f, U.Element = I, U.ForwardRef = H, U.Fragment = $, U.Lazy = W, U.Memo = m, U.Portal = y, U.Profiler = X, U.StrictMode = te, U.Suspense = Ae, U.isAsyncMode = qt, U.isConcurrentMode = g, U.isContextConsumer = P, U.isContextProvider = D, U.isElement = N, U.isForwardRef = M, U.isFragment = F, U.isLazy = L, U.isMemo = R, U.isPortal = z, U.isProfiler = K, U.isStrictMode = Y, U.isSuspense = ne, U.isValidElementType = k, U.typeOf = C;
  }()), U;
}
var Pn;
function $a() {
  return Pn || (Pn = 1, process.env.NODE_ENV === "production" ? Et.exports = Mo() : Et.exports = Lo()), Et.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Zt, kn;
function _o() {
  if (kn)
    return Zt;
  kn = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(o) {
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
    for (var s, l = n(o), c, u = 1; u < arguments.length; u++) {
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
var er, En;
function Kr() {
  if (En)
    return er;
  En = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return er = e, er;
}
var tr, Tn;
function Pa() {
  return Tn || (Tn = 1, tr = Function.call.bind(Object.prototype.hasOwnProperty)), tr;
}
var rr, Sn;
function No() {
  if (Sn)
    return rr;
  Sn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Kr(), r = {}, n = Pa();
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
        if (n(o, u)) {
          var d;
          try {
            if (typeof o[u] != "function") {
              var p = Error(
                (l || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            d = o[u](i, u, l, s, null, t);
          } catch (T) {
            d = T;
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
var nr, On;
function Ro() {
  if (On)
    return nr;
  On = 1;
  var e = $a(), t = _o(), r = Kr(), n = Pa(), a = No(), o = function() {
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
  return nr = function(s, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(g) {
      var P = g && (c && g[c] || g[u]);
      if (typeof P == "function")
        return P;
    }
    var p = "<<anonymous>>", b = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: A(),
      arrayOf: k,
      element: C(),
      elementType: v(),
      instanceOf: Q,
      node: H(),
      objectOf: f,
      oneOf: ee,
      oneOfType: I,
      shape: W,
      exact: m
    };
    function T(g, P) {
      return g === P ? g !== 0 || 1 / g === 1 / P : g !== g && P !== P;
    }
    function w(g, P) {
      this.message = g, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    w.prototype = Error.prototype;
    function S(g) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, D = 0;
      function N(F, L, R, z, K, Y, ne) {
        if (z = z || p, Y = Y || R, ne !== r) {
          if (l) {
            var h = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw h.name = "Invariant Violation", h;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = z + ":" + R;
            !P[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            D < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[ve] = !0, D++);
          }
        }
        return L[R] == null ? F ? L[R] === null ? new w("The " + K + " `" + Y + "` is marked as required " + ("in `" + z + "`, but its value is `null`.")) : new w("The " + K + " `" + Y + "` is marked as required in " + ("`" + z + "`, but its value is `undefined`.")) : null : g(L, R, z, K, Y);
      }
      var M = N.bind(null, !1);
      return M.isRequired = N.bind(null, !0), M;
    }
    function O(g) {
      function P(D, N, M, F, L, R) {
        var z = D[N], K = te(z);
        if (K !== g) {
          var Y = Ae(z);
          return new w(
            "Invalid " + F + " `" + L + "` of type " + ("`" + Y + "` supplied to `" + M + "`, expected ") + ("`" + g + "`."),
            { expectedType: g }
          );
        }
        return null;
      }
      return S(P);
    }
    function A() {
      return S(i);
    }
    function k(g) {
      function P(D, N, M, F, L) {
        if (typeof g != "function")
          return new w("Property `" + L + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var R = D[N];
        if (!Array.isArray(R)) {
          var z = te(R);
          return new w("Invalid " + F + " `" + L + "` of type " + ("`" + z + "` supplied to `" + M + "`, expected an array."));
        }
        for (var K = 0; K < R.length; K++) {
          var Y = g(R, K, M, F, L + "[" + K + "]", r);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return S(P);
    }
    function C() {
      function g(P, D, N, M, F) {
        var L = P[D];
        if (!s(L)) {
          var R = te(L);
          return new w("Invalid " + M + " `" + F + "` of type " + ("`" + R + "` supplied to `" + N + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S(g);
    }
    function v() {
      function g(P, D, N, M, F) {
        var L = P[D];
        if (!e.isValidElementType(L)) {
          var R = te(L);
          return new w("Invalid " + M + " `" + F + "` of type " + ("`" + R + "` supplied to `" + N + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S(g);
    }
    function Q(g) {
      function P(D, N, M, F, L) {
        if (!(D[N] instanceof g)) {
          var R = g.name || p, z = qt(D[N]);
          return new w("Invalid " + F + " `" + L + "` of type " + ("`" + z + "` supplied to `" + M + "`, expected ") + ("instance of `" + R + "`."));
        }
        return null;
      }
      return S(P);
    }
    function ee(g) {
      if (!Array.isArray(g))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), i;
      function P(D, N, M, F, L) {
        for (var R = D[N], z = 0; z < g.length; z++)
          if (T(R, g[z]))
            return null;
        var K = JSON.stringify(g, function(ne, h) {
          var ve = Ae(h);
          return ve === "symbol" ? String(h) : h;
        });
        return new w("Invalid " + F + " `" + L + "` of value `" + String(R) + "` " + ("supplied to `" + M + "`, expected one of " + K + "."));
      }
      return S(P);
    }
    function f(g) {
      function P(D, N, M, F, L) {
        if (typeof g != "function")
          return new w("Property `" + L + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var R = D[N], z = te(R);
        if (z !== "object")
          return new w("Invalid " + F + " `" + L + "` of type " + ("`" + z + "` supplied to `" + M + "`, expected an object."));
        for (var K in R)
          if (n(R, K)) {
            var Y = g(R, K, M, F, L + "." + K, r);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return S(P);
    }
    function I(g) {
      if (!Array.isArray(g))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var P = 0; P < g.length; P++) {
        var D = g[P];
        if (typeof D != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + mt(D) + " at index " + P + "."
          ), i;
      }
      function N(M, F, L, R, z) {
        for (var K = [], Y = 0; Y < g.length; Y++) {
          var ne = g[Y], h = ne(M, F, L, R, z, r);
          if (h == null)
            return null;
          h.data && n(h.data, "expectedType") && K.push(h.data.expectedType);
        }
        var ve = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new w("Invalid " + R + " `" + z + "` supplied to " + ("`" + L + "`" + ve + "."));
      }
      return S(N);
    }
    function H() {
      function g(P, D, N, M, F) {
        return y(P[D]) ? null : new w("Invalid " + M + " `" + F + "` supplied to " + ("`" + N + "`, expected a ReactNode."));
      }
      return S(g);
    }
    function $(g, P, D, N, M) {
      return new w(
        (g || "React class") + ": " + P + " type `" + D + "." + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function W(g) {
      function P(D, N, M, F, L) {
        var R = D[N], z = te(R);
        if (z !== "object")
          return new w("Invalid " + F + " `" + L + "` of type `" + z + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var K in g) {
          var Y = g[K];
          if (typeof Y != "function")
            return $(M, F, L, K, Ae(Y));
          var ne = Y(R, K, M, F, L + "." + K, r);
          if (ne)
            return ne;
        }
        return null;
      }
      return S(P);
    }
    function m(g) {
      function P(D, N, M, F, L) {
        var R = D[N], z = te(R);
        if (z !== "object")
          return new w("Invalid " + F + " `" + L + "` of type `" + z + "` " + ("supplied to `" + M + "`, expected `object`."));
        var K = t({}, D[N], g);
        for (var Y in K) {
          var ne = g[Y];
          if (n(g, Y) && typeof ne != "function")
            return $(M, F, L, Y, Ae(ne));
          if (!ne)
            return new w(
              "Invalid " + F + " `" + L + "` key `" + Y + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(D[N], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(g), null, "  ")
            );
          var h = ne(R, Y, M, F, L + "." + Y, r);
          if (h)
            return h;
        }
        return null;
      }
      return S(P);
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
          var P = d(g);
          if (P) {
            var D = P.call(g), N;
            if (P !== g.entries) {
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
    function X(g, P) {
      return g === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function te(g) {
      var P = typeof g;
      return Array.isArray(g) ? "array" : g instanceof RegExp ? "object" : X(P, g) ? "symbol" : P;
    }
    function Ae(g) {
      if (typeof g > "u" || g === null)
        return "" + g;
      var P = te(g);
      if (P === "object") {
        if (g instanceof Date)
          return "date";
        if (g instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function mt(g) {
      var P = Ae(g);
      switch (P) {
        case "array":
        case "object":
          return "an " + P;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + P;
        default:
          return P;
      }
    }
    function qt(g) {
      return !g.constructor || !g.constructor.name ? p : g.constructor.name;
    }
    return b.checkPropTypes = a, b.resetWarningCache = a.resetWarningCache, b.PropTypes = b, b;
  }, nr;
}
var ar, An;
function Do() {
  if (An)
    return ar;
  An = 1;
  var e = Kr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ar = function() {
    function n(i, s, l, c, u, d) {
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
    var o = {
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
    return o.PropTypes = o, o;
  }, ar;
}
if (process.env.NODE_ENV !== "production") {
  var jo = $a(), Fo = !0;
  Pr.exports = Ro()(jo.isElement, Fo);
} else
  Pr.exports = Do()();
var zo = Pr.exports;
const _ = /* @__PURE__ */ Io(zo);
function Cn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cn(Object(r), !0).forEach(function(n) {
      Ve(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cn(Object(r)).forEach(function(n) {
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
function Ve(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Yo(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Ho(e, t) {
  if (e == null)
    return {};
  var r = Yo(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function kr(e) {
  return Vo(e) || Uo(e) || Ko(e) || Wo();
}
function Vo(e) {
  if (Array.isArray(e))
    return Er(e);
}
function Uo(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Ko(e, t) {
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
function Wo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bo(e) {
  var t, r = e.beat, n = e.fade, a = e.beatFade, o = e.bounce, i = e.shake, s = e.flash, l = e.spin, c = e.spinPulse, u = e.spinReverse, d = e.pulse, p = e.fixedWidth, b = e.inverse, T = e.border, w = e.listItem, S = e.flip, O = e.size, A = e.rotation, k = e.pull, C = (t = {
    "fa-beat": r,
    "fa-fade": n,
    "fa-beat-fade": a,
    "fa-bounce": o,
    "fa-shake": i,
    "fa-flash": s,
    "fa-spin": l,
    "fa-spin-reverse": u,
    "fa-spin-pulse": c,
    "fa-pulse": d,
    "fa-fw": p,
    "fa-inverse": b,
    "fa-border": T,
    "fa-li": w,
    "fa-flip": S === !0,
    "fa-flip-horizontal": S === "horizontal" || S === "both",
    "fa-flip-vertical": S === "vertical" || S === "both"
  }, Ve(t, "fa-".concat(O), typeof O < "u" && O !== null), Ve(t, "fa-rotate-".concat(A), typeof A < "u" && A !== null && A !== 0), Ve(t, "fa-pull-".concat(k), typeof k < "u" && k !== null), Ve(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(C).map(function(v) {
    return C[v] ? v : null;
  }).filter(function(v) {
    return v;
  });
}
function qo(e) {
  return e = e - 0, e === e;
}
function ka(e) {
  return qo(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, r) {
    return r ? r.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Go = ["style"];
function Xo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Qo(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, r) {
    var n = r.indexOf(":"), a = ka(r.slice(0, n)), o = r.slice(n + 1).trim();
    return a.startsWith("webkit") ? t[Xo(a)] = o : t[a] = o, t;
  }, {});
}
function Ea(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var n = (t.children || []).map(function(l) {
    return Ea(e, l);
  }), a = Object.keys(t.attributes || {}).reduce(function(l, c) {
    var u = t.attributes[c];
    switch (c) {
      case "class":
        l.attrs.className = u, delete t.attributes.class;
        break;
      case "style":
        l.attrs.style = Qo(u);
        break;
      default:
        c.indexOf("aria-") === 0 || c.indexOf("data-") === 0 ? l.attrs[c.toLowerCase()] = u : l.attrs[ka(c)] = u;
    }
    return l;
  }, {
    attrs: {}
  }), o = r.style, i = o === void 0 ? {} : o, s = Ho(r, Go);
  return a.attrs.style = pe(pe({}, a.attrs.style), i), e.apply(void 0, [t.tag, pe(pe({}, a.attrs), s)].concat(kr(n)));
}
var Ta = !1;
try {
  Ta = process.env.NODE_ENV === "production";
} catch {
}
function Jo() {
  if (!Ta && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function In(e) {
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
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Ve({}, e, t) : {};
}
var Mn = {
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
}, Be = /* @__PURE__ */ fe.forwardRef(function(e, t) {
  var r = pe(pe({}, Mn), e), n = r.icon, a = r.mask, o = r.symbol, i = r.className, s = r.title, l = r.titleId, c = r.maskId, u = In(n), d = ir("classes", [].concat(kr(Bo(r)), kr((i || "").split(" ")))), p = ir("transform", typeof r.transform == "string" ? $r.transform(r.transform) : r.transform), b = ir("mask", In(a)), T = Co(u, pe(pe(pe(pe({}, d), p), b), {}, {
    symbol: o,
    title: s,
    titleId: l,
    maskId: c
  }));
  if (!T)
    return Jo("Could not find icon", u), null;
  var w = T.abstract, S = {
    ref: t
  };
  return Object.keys(r).forEach(function(O) {
    Mn.hasOwnProperty(O) || (S[O] = r[O]);
  }), Zo(w[0], S);
});
Be.displayName = "FontAwesomeIcon";
Be.propTypes = {
  beat: _.bool,
  border: _.bool,
  beatFade: _.bool,
  bounce: _.bool,
  className: _.string,
  fade: _.bool,
  flash: _.bool,
  mask: _.oneOfType([_.object, _.array, _.string]),
  maskId: _.string,
  fixedWidth: _.bool,
  inverse: _.bool,
  flip: _.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: _.oneOfType([_.object, _.array, _.string]),
  listItem: _.bool,
  pull: _.oneOf(["right", "left"]),
  pulse: _.bool,
  rotation: _.oneOf([0, 90, 180, 270]),
  shake: _.bool,
  size: _.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: _.bool,
  spinPulse: _.bool,
  spinReverse: _.bool,
  symbol: _.oneOfType([_.bool, _.string]),
  title: _.string,
  titleId: _.string,
  transform: _.oneOfType([_.string, _.object]),
  swapOpacity: _.bool
};
var Zo = Ea.bind(null, fe.createElement);
const kl = ({ children: e, className: t, ...r }) => /* @__PURE__ */ le(
  "h2",
  {
    ...r,
    className: q("text-ev-primary text-5xl font-semibold", t),
    children: [
      /* @__PURE__ */ j("span", { children: e }),
      r.id && /* @__PURE__ */ j(vt, { id: r.id })
    ]
  }
), El = ({ children: e, className: t, ...r }) => /* @__PURE__ */ le(
  "h3",
  {
    ...r,
    className: q("text-ev-primary text-4xl font-semibold", t),
    children: [
      /* @__PURE__ */ j("span", { children: e }),
      r.id && /* @__PURE__ */ j(vt, { id: r.id })
    ]
  }
), Tl = ({ children: e, className: t, ...r }) => /* @__PURE__ */ le(
  "h4",
  {
    ...r,
    className: q("text-ev-primary text-3xl font-semibold", t),
    children: [
      /* @__PURE__ */ j("span", { children: e }),
      r.id && /* @__PURE__ */ j(vt, { id: r.id })
    ]
  }
), Sl = ({ children: e, className: t, ...r }) => /* @__PURE__ */ le(
  "h1",
  {
    ...r,
    className: q("text-ev-primary text-2xl font-semibold", t),
    children: [
      /* @__PURE__ */ j("span", { children: e }),
      r.id && /* @__PURE__ */ j(vt, { id: r.id })
    ]
  }
), Ol = ({ children: e, className: t, ...r }) => /* @__PURE__ */ le(
  "h6",
  {
    ...r,
    className: q("text-ev-primary text-xl font-semibold", t),
    children: [
      /* @__PURE__ */ j("span", { children: e }),
      r.id && /* @__PURE__ */ j(vt, { id: r.id })
    ]
  }
), Al = ({ children: e, className: t, ...r }) => /* @__PURE__ */ j(
  "p",
  {
    ...r,
    className: q(
      "text-ev-dark dark:text-ev-light text-base",
      t
    ),
    children: e
  }
), Cl = ({ children: e, className: t, ...r }) => (console.log({ className: t }), /* @__PURE__ */ j(
  "strong",
  {
    ...r,
    className: q(
      "text-ev-dark dark:text-ev-light text-base font-bold",
      t
    ),
    children: e
  }
)), Il = ({ children: e, className: t, ...r }) => /* @__PURE__ */ j(
  "code",
  {
    ...r,
    className: q(
      "px-1 text-ev-dark bg-ev-light-hard dark:text-ev-light  dark:bg-ev-dark-hard text-base rounded-md",
      t
    ),
    children: e
  }
), Ml = ({ children: e, className: t, ...r }) => /* @__PURE__ */ j(
  "pre",
  {
    ...r,
    className: q(
      "bg-ev-light-hard py-2 px-4 rounded-lg *:bg-inherit",
      t
    ),
    children: e
  }
), Ll = ({ children: e, className: t, ...r }) => /* @__PURE__ */ j("ul", { ...r, className: q("pl-4 list-disc", t), children: e }), _l = ({ children: e, className: t, ...r }) => /* @__PURE__ */ j("ol", { ...r, className: q("pl-2 list-decimal", t), children: e }), Nl = ({ className: e, ...t }) => /* @__PURE__ */ j(
  "img",
  {
    ...t,
    loading: "lazy",
    className: q("rounded-lg", e)
  }
), Rl = ({
  children: e,
  className: t,
  variant: r = "default",
  source: n,
  ...a
}) => /* @__PURE__ */ le(
  "blockquote",
  {
    ...a,
    className: q(
      "text-ev-dark dark:text-ev-light text-base border-l-4 border-ev-primary pl-4 italic",
      t
    ),
    children: [
      /* @__PURE__ */ le("div", { className: "inline", children: [
        r === "default" && /* @__PURE__ */ j(
          Be,
          {
            icon: Xa,
            className: "mr-2 text-ev-primary"
          }
        ),
        e,
        r === "default" && /* @__PURE__ */ j(
          Be,
          {
            icon: Ga,
            className: "ml-2 text-ev-primary"
          }
        )
      ] }),
      /* @__PURE__ */ j("div", { className: "text-right", children: n })
    ]
  }
), Dl = ({ className: e, children: t, ...r }) => /* @__PURE__ */ le(
  "a",
  {
    ...r,
    className: q(
      "border-b-2 border-dashed border-ev-dark hover:border-solid hover:text-ev-primary hover:border-ev-primary",
      e
    ),
    target: "_blank",
    rel: "noreferrer noopener",
    children: [
      /* @__PURE__ */ j(Be, { icon: qn, className: "mr-2" }),
      t
    ]
  }
), vt = ({ id: e }) => /* @__PURE__ */ j("a", { href: `#${e}`, className: "px-2 text-ev-primary/50 hover:text-ev-primary", children: "#" }), je = typeof document < "u" ? fe.useLayoutEffect : () => {
};
function se(e) {
  const t = re(null);
  return je(() => {
    t.current = e;
  }, [
    e
  ]), ge((...r) => {
    const n = t.current;
    return n == null ? void 0 : n(...r);
  }, []);
}
function es(e) {
  let [t, r] = ue(e), n = re(null), a = se(() => {
    if (!n.current)
      return;
    let i = n.current.next();
    if (i.done) {
      n.current = null;
      return;
    }
    t === i.value ? a() : r(i.value);
  });
  je(() => {
    n.current && a();
  });
  let o = se((i) => {
    n.current = i(t), a();
  });
  return [
    t,
    o
  ];
}
const Dt = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, Sa = /* @__PURE__ */ fe.createContext(Dt), ts = /* @__PURE__ */ fe.createContext(!1);
let rs = !!(typeof window < "u" && window.document && window.document.createElement), or = /* @__PURE__ */ new WeakMap();
function ns(e = !1) {
  let t = De(Sa), r = re(null);
  if (r.current === null && !e) {
    var n, a;
    let o = (a = fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || a === void 0 || (n = a.ReactCurrentOwner) === null || n === void 0 ? void 0 : n.current;
    if (o) {
      let i = or.get(o);
      i == null ? or.set(o, {
        id: t.current,
        state: o.memoizedState
      }) : o.memoizedState !== i.state && (t.current = i.id, or.delete(o));
    }
    r.current = ++t.current;
  }
  return r.current;
}
function as(e) {
  let t = De(Sa);
  t === Dt && !rs && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let r = ns(!!e), n = t === Dt && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${n}-${r}`;
}
function is(e) {
  let t = fe.useId(), [r] = ue(cs()), n = r || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${Dt.prefix}`;
  return e || `${n}-${t}`;
}
const os = typeof fe.useId == "function" ? is : as;
function ss() {
  return !1;
}
function ls() {
  return !0;
}
function fs(e) {
  return () => {
  };
}
function cs() {
  return typeof fe.useSyncExternalStore == "function" ? fe.useSyncExternalStore(fs, ss, ls) : De(ts);
}
let us = !!(typeof window < "u" && window.document && window.document.createElement), jt = /* @__PURE__ */ new Map();
function Ft(e) {
  let [t, r] = ue(e), n = re(null), a = os(t), o = ge((i) => {
    n.current = i;
  }, []);
  return us && jt.set(a, o), je(() => {
    let i = a;
    return () => {
      jt.delete(i);
    };
  }, [
    a
  ]), ce(() => {
    let i = n.current;
    i && (n.current = null, r(i));
  }), a;
}
function ds(e, t) {
  if (e === t)
    return e;
  let r = jt.get(e);
  if (r)
    return r(t), t;
  let n = jt.get(t);
  return n ? (n(e), e) : t;
}
function Ln(e = []) {
  let t = Ft(), [r, n] = es(t), a = ge(() => {
    n(function* () {
      yield t, yield document.getElementById(t) ? t : void 0;
    });
  }, [
    t,
    n
  ]);
  return je(a, [
    t,
    a,
    ...e
  ]), r;
}
function Oa(...e) {
  return (...t) => {
    for (let r of e)
      typeof r == "function" && r(...t);
  };
}
const ae = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, Ne = (e) => e && "window" in e && e.window === e ? e : ae(e).defaultView || window;
function Aa(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++)
        e[t] && (r = Aa(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function vs() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++)
    (e = arguments[r]) && (t = Aa(e)) && (n && (n += " "), n += t);
  return n;
}
function ye(...e) {
  let t = {
    ...e[0]
  };
  for (let r = 1; r < e.length; r++) {
    let n = e[r];
    for (let a in n) {
      let o = t[a], i = n[a];
      typeof o == "function" && typeof i == "function" && // This is a lot faster than a regex.
      a[0] === "o" && a[1] === "n" && a.charCodeAt(2) >= /* 'A' */
      65 && a.charCodeAt(2) <= /* 'Z' */
      90 ? t[a] = Oa(o, i) : (a === "className" || a === "UNSAFE_className") && typeof o == "string" && typeof i == "string" ? t[a] = vs(o, i) : a === "id" && o && i ? t.id = ds(o, i) : t[a] = i !== void 0 ? i : o;
    }
  }
  return t;
}
const ms = /* @__PURE__ */ new Set([
  "id"
]), ps = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), bs = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), gs = /^(data-.*)$/;
function Xe(e, t = {}) {
  let { labelable: r, isLink: n, propNames: a } = t, o = {};
  for (const i in e)
    Object.prototype.hasOwnProperty.call(e, i) && (ms.has(i) || r && ps.has(i) || n && bs.has(i) || a != null && a.has(i) || gs.test(i)) && (o[i] = e[i]);
  return o;
}
function Me(e) {
  if (ys())
    e.focus({
      preventScroll: !0
    });
  else {
    let t = hs(e);
    e.focus(), xs(t);
  }
}
let Tt = null;
function ys() {
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
function hs(e) {
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
function xs(e) {
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
function ft() {
  return Wr(/^Mac/i);
}
function ws() {
  return Wr(/^iPhone/i);
}
function Ca() {
  return Wr(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  ft() && navigator.maxTouchPoints > 1;
}
function Ia() {
  return ws() || Ca();
}
function $s() {
  return Wt(/AppleWebKit/i) && !Ps();
}
function Ps() {
  return Wt(/Chrome/i);
}
function Ma() {
  return Wt(/Android/i);
}
function ks() {
  return Wt(/Firefox/i);
}
const Es = /* @__PURE__ */ Wn({
  isNative: !0,
  open: Os,
  useHref: (e) => e
});
function La() {
  return De(Es);
}
function Ts(e, t) {
  let r = e.getAttribute("target");
  return (!r || r === "_self") && e.origin === location.origin && !e.hasAttribute("download") && !t.metaKey && // open in new tab (mac)
  !t.ctrlKey && // open in new tab (windows)
  !t.altKey && // download
  !t.shiftKey;
}
function qe(e, t, r = !0) {
  var n, a;
  let { metaKey: o, ctrlKey: i, altKey: s, shiftKey: l } = t;
  ks() && (!((a = window.event) === null || a === void 0 || (n = a.type) === null || n === void 0) && n.startsWith("key")) && e.target === "_blank" && (ft() ? o = !0 : i = !0);
  let c = $s() && ft() && !Ca() ? new KeyboardEvent("keydown", {
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
  qe.isOpening = r, Me(e), e.dispatchEvent(c), qe.isOpening = !1;
}
qe.isOpening = !1;
function Ss(e, t) {
  if (e instanceof HTMLAnchorElement)
    t(e);
  else if (e.hasAttribute("data-href")) {
    let r = document.createElement("a");
    r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), t(r), e.removeChild(r);
  }
}
function Os(e, t) {
  Ss(e, (r) => qe(r, t));
}
function As(e) {
  let t = La();
  return {
    href: e != null && e.href ? t.useHref(e == null ? void 0 : e.href) : void 0,
    target: e == null ? void 0 : e.target,
    rel: e == null ? void 0 : e.rel,
    download: e == null ? void 0 : e.download,
    ping: e == null ? void 0 : e.ping,
    referrerPolicy: e == null ? void 0 : e.referrerPolicy
  };
}
let ze = /* @__PURE__ */ new Map(), Tr = /* @__PURE__ */ new Set();
function _n() {
  if (typeof window > "u")
    return;
  function e(n) {
    return "propertyName" in n;
  }
  let t = (n) => {
    if (!e(n) || !n.target)
      return;
    let a = ze.get(n.target);
    a || (a = /* @__PURE__ */ new Set(), ze.set(n.target, a), n.target.addEventListener("transitioncancel", r, {
      once: !0
    })), a.add(n.propertyName);
  }, r = (n) => {
    if (!e(n) || !n.target)
      return;
    let a = ze.get(n.target);
    if (a && (a.delete(n.propertyName), a.size === 0 && (n.target.removeEventListener("transitioncancel", r), ze.delete(n.target)), ze.size === 0)) {
      for (let o of Tr)
        o();
      Tr.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", r);
}
typeof document < "u" && (document.readyState !== "loading" ? _n() : document.addEventListener("DOMContentLoaded", _n));
function _a(e) {
  requestAnimationFrame(() => {
    ze.size === 0 ? e() : Tr.add(e);
  });
}
function Cs() {
  let e = re(/* @__PURE__ */ new Map()), t = ge((a, o, i, s) => {
    let l = s != null && s.once ? (...c) => {
      e.current.delete(i), i(...c);
    } : i;
    e.current.set(i, {
      type: o,
      eventTarget: a,
      fn: l,
      options: s
    }), a.addEventListener(o, i, s);
  }, []), r = ge((a, o, i, s) => {
    var l;
    let c = ((l = e.current.get(i)) === null || l === void 0 ? void 0 : l.fn) || i;
    a.removeEventListener(o, c, s), e.current.delete(i);
  }, []), n = ge(() => {
    e.current.forEach((a, o) => {
      r(a.eventTarget, a.type, o, a.options);
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
function Is(e, t) {
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
function Na(e, t) {
  je(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function Sr(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Ma() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Ms(e) {
  return !Ma() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
function Ls(e, t, r) {
  let n = re(t), a = se(() => {
    r && r(n.current);
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
function _s(e, t, r) {
  let [n, a] = ue(e || t), o = re(e !== void 0), i = e !== void 0;
  ce(() => {
    let c = o.current;
    c !== i && console.warn(`WARN: A component changed from ${c ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}.`), o.current = i;
  }, [
    i
  ]);
  let s = i ? e : n, l = ge((c, ...u) => {
    let d = (p, ...b) => {
      r && (Object.is(s, p) || r(p, ...b)), i || (s = p);
    };
    typeof c == "function" ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), a((b, ...T) => {
      let w = c(i ? s : b, ...T);
      return d(w, ...u), i ? b : w;
    })) : (i || a(c), d(c, ...u));
  }, [
    i,
    s,
    r
  ]);
  return [
    s,
    l
  ];
}
let Ue = "default", Or = "", Mt = /* @__PURE__ */ new WeakMap();
function Nn(e) {
  if (Ia()) {
    if (Ue === "default") {
      const t = ae(e);
      Or = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    Ue = "disabled";
  } else
    (e instanceof HTMLElement || e instanceof SVGElement) && (Mt.set(e, e.style.userSelect), e.style.userSelect = "none");
}
function St(e) {
  if (Ia()) {
    if (Ue !== "disabled")
      return;
    Ue = "restoring", setTimeout(() => {
      _a(() => {
        if (Ue === "restoring") {
          const t = ae(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = Or || ""), Or = "", Ue = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Mt.has(e)) {
    let t = Mt.get(e);
    e.style.userSelect === "none" && (e.style.userSelect = t), e.getAttribute("style") === "" && e.removeAttribute("style"), Mt.delete(e);
  }
}
const Ra = fe.createContext({
  register: () => {
  }
});
Ra.displayName = "PressResponderContext";
function Ns(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Da(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to " + r + " private field on non-instance");
  return t.get(e);
}
function Rs(e, t) {
  var r = Da(e, t, "get");
  return Ns(e, r);
}
function Ds(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function js(e, t, r) {
  Ds(e, t), t.set(e, r);
}
function Fs(e, t, r) {
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
  return Fs(e, n, r), r;
}
function zs(e) {
  let t = De(Ra);
  if (t) {
    let { register: r, ...n } = t;
    e = ye(n, e), r();
  }
  return Na(t, e.ref), e;
}
var Ot = /* @__PURE__ */ new WeakMap();
class At {
  continuePropagation() {
    Rn(this, Ot, !1);
  }
  get shouldStopPropagation() {
    return Rs(this, Ot);
  }
  constructor(t, r, n) {
    js(this, Ot, {
      writable: !0,
      value: void 0
    }), Rn(this, Ot, !0), this.type = t, this.pointerType = r, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey;
  }
}
const Dn = Symbol("linkClicked");
function ja(e) {
  let {
    onPress: t,
    onPressChange: r,
    onPressStart: n,
    onPressEnd: a,
    onPressUp: o,
    isDisabled: i,
    isPressed: s,
    preventFocusOnPress: l,
    shouldCancelOnPointerExit: c,
    allowTextSelectionOnPress: u,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: d,
    ...p
  } = zs(e), [b, T] = ue(!1), w = re({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    ignoreClickAfterPress: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null
  }), { addGlobalListener: S, removeAllGlobalListeners: O } = Cs(), A = se((f, I) => {
    let H = w.current;
    if (i || H.didFirePressStart)
      return !1;
    let $ = !0;
    if (H.isTriggeringEvent = !0, n) {
      let W = new At("pressstart", I, f);
      n(W), $ = W.shouldStopPropagation;
    }
    return r && r(!0), H.isTriggeringEvent = !1, H.didFirePressStart = !0, T(!0), $;
  }), k = se((f, I, H = !0) => {
    let $ = w.current;
    if (!$.didFirePressStart)
      return !1;
    $.ignoreClickAfterPress = !0, $.didFirePressStart = !1, $.isTriggeringEvent = !0;
    let W = !0;
    if (a) {
      let m = new At("pressend", I, f);
      a(m), W = m.shouldStopPropagation;
    }
    if (r && r(!1), T(!1), t && H && !i) {
      let m = new At("press", I, f);
      t(m), W && (W = m.shouldStopPropagation);
    }
    return $.isTriggeringEvent = !1, W;
  }), C = se((f, I) => {
    let H = w.current;
    if (i)
      return !1;
    if (o) {
      H.isTriggeringEvent = !0;
      let $ = new At("pressup", I, f);
      return o($), H.isTriggeringEvent = !1, $.shouldStopPropagation;
    }
    return !0;
  }), v = se((f) => {
    let I = w.current;
    I.isPressed && I.target && (I.isOverTarget && I.pointerType != null && k(he(I.target, f), I.pointerType, !1), I.isPressed = !1, I.isOverTarget = !1, I.activePointerId = null, I.pointerType = null, O(), u || St(I.target));
  }), Q = se((f) => {
    c && v(f);
  }), ee = et(() => {
    let f = w.current, I = {
      onKeyDown($) {
        if (sr($.nativeEvent, $.currentTarget) && $.currentTarget.contains($.target)) {
          var W;
          Fn($.target, $.key) && $.preventDefault();
          let m = !0;
          if (!f.isPressed && !$.repeat) {
            f.target = $.currentTarget, f.isPressed = !0, m = A($, "keyboard");
            let y = $.currentTarget, X = (te) => {
              sr(te, y) && !te.repeat && y.contains(te.target) && f.target && C(he(f.target, te), "keyboard");
            };
            S(ae($.currentTarget), "keyup", Oa(X, H), !0);
          }
          m && $.stopPropagation(), $.metaKey && ft() && ((W = f.metaKeyEvents) === null || W === void 0 || W.set($.key, $.nativeEvent));
        } else
          $.key === "Meta" && (f.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick($) {
        if (!($ && !$.currentTarget.contains($.target)) && $ && $.button === 0 && !f.isTriggeringEvent && !qe.isOpening) {
          let W = !0;
          if (i && $.preventDefault(), !f.ignoreClickAfterPress && !f.ignoreEmulatedMouseEvents && !f.isPressed && (f.pointerType === "virtual" || Sr($.nativeEvent))) {
            !i && !l && Me($.currentTarget);
            let m = A($, "virtual"), y = C($, "virtual"), X = k($, "virtual");
            W = m && y && X;
          }
          f.ignoreEmulatedMouseEvents = !1, f.ignoreClickAfterPress = !1, W && $.stopPropagation();
        }
      }
    }, H = ($) => {
      var W;
      if (f.isPressed && f.target && sr($, f.target)) {
        var m;
        Fn($.target, $.key) && $.preventDefault();
        let X = $.target;
        k(he(f.target, $), "keyboard", f.target.contains(X)), O(), $.key !== "Enter" && Br(f.target) && f.target.contains(X) && !$[Dn] && ($[Dn] = !0, qe(f.target, $, !1)), f.isPressed = !1, (m = f.metaKeyEvents) === null || m === void 0 || m.delete($.key);
      } else if ($.key === "Meta" && (!((W = f.metaKeyEvents) === null || W === void 0) && W.size)) {
        var y;
        let X = f.metaKeyEvents;
        f.metaKeyEvents = void 0;
        for (let te of X.values())
          (y = f.target) === null || y === void 0 || y.dispatchEvent(new KeyboardEvent("keyup", te));
      }
    };
    if (typeof PointerEvent < "u") {
      I.onPointerDown = (y) => {
        if (y.button !== 0 || !y.currentTarget.contains(y.target))
          return;
        if (Ms(y.nativeEvent)) {
          f.pointerType = "virtual";
          return;
        }
        lr(y.currentTarget) && y.preventDefault(), f.pointerType = y.pointerType;
        let X = !0;
        f.isPressed || (f.isPressed = !0, f.isOverTarget = !0, f.activePointerId = y.pointerId, f.target = y.currentTarget, !i && !l && Me(y.currentTarget), u || Nn(f.target), X = A(y, f.pointerType), S(ae(y.currentTarget), "pointermove", $, !1), S(ae(y.currentTarget), "pointerup", W, !1), S(ae(y.currentTarget), "pointercancel", m, !1)), X && y.stopPropagation();
      }, I.onMouseDown = (y) => {
        y.currentTarget.contains(y.target) && y.button === 0 && (lr(y.currentTarget) && y.preventDefault(), y.stopPropagation());
      }, I.onPointerUp = (y) => {
        !y.currentTarget.contains(y.target) || f.pointerType === "virtual" || y.button === 0 && Fe(y, y.currentTarget) && C(y, f.pointerType || y.pointerType);
      };
      let $ = (y) => {
        y.pointerId === f.activePointerId && (f.target && Fe(y, f.target) ? !f.isOverTarget && f.pointerType != null && (f.isOverTarget = !0, A(he(f.target, y), f.pointerType)) : f.target && f.isOverTarget && f.pointerType != null && (f.isOverTarget = !1, k(he(f.target, y), f.pointerType, !1), Q(y)));
      }, W = (y) => {
        y.pointerId === f.activePointerId && f.isPressed && y.button === 0 && f.target && (Fe(y, f.target) && f.pointerType != null ? k(he(f.target, y), f.pointerType) : f.isOverTarget && f.pointerType != null && k(he(f.target, y), f.pointerType, !1), f.isPressed = !1, f.isOverTarget = !1, f.activePointerId = null, f.pointerType = null, O(), u || St(f.target));
      }, m = (y) => {
        v(y);
      };
      I.onDragStart = (y) => {
        y.currentTarget.contains(y.target) && v(y);
      };
    } else {
      I.onMouseDown = (m) => {
        if (m.button !== 0 || !m.currentTarget.contains(m.target))
          return;
        if (lr(m.currentTarget) && m.preventDefault(), f.ignoreEmulatedMouseEvents) {
          m.stopPropagation();
          return;
        }
        f.isPressed = !0, f.isOverTarget = !0, f.target = m.currentTarget, f.pointerType = Sr(m.nativeEvent) ? "virtual" : "mouse", !i && !l && Me(m.currentTarget), A(m, f.pointerType) && m.stopPropagation(), S(ae(m.currentTarget), "mouseup", $, !1);
      }, I.onMouseEnter = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        let y = !0;
        f.isPressed && !f.ignoreEmulatedMouseEvents && f.pointerType != null && (f.isOverTarget = !0, y = A(m, f.pointerType)), y && m.stopPropagation();
      }, I.onMouseLeave = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        let y = !0;
        f.isPressed && !f.ignoreEmulatedMouseEvents && f.pointerType != null && (f.isOverTarget = !1, y = k(m, f.pointerType, !1), Q(m)), y && m.stopPropagation();
      }, I.onMouseUp = (m) => {
        m.currentTarget.contains(m.target) && !f.ignoreEmulatedMouseEvents && m.button === 0 && C(m, f.pointerType || "mouse");
      };
      let $ = (m) => {
        if (m.button === 0) {
          if (f.isPressed = !1, O(), f.ignoreEmulatedMouseEvents) {
            f.ignoreEmulatedMouseEvents = !1;
            return;
          }
          f.target && Fe(m, f.target) && f.pointerType != null ? k(he(f.target, m), f.pointerType) : f.target && f.isOverTarget && f.pointerType != null && k(he(f.target, m), f.pointerType, !1), f.isOverTarget = !1;
        }
      };
      I.onTouchStart = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        let y = Ys(m.nativeEvent);
        if (!y)
          return;
        f.activePointerId = y.identifier, f.ignoreEmulatedMouseEvents = !0, f.isOverTarget = !0, f.isPressed = !0, f.target = m.currentTarget, f.pointerType = "touch", !i && !l && Me(m.currentTarget), u || Nn(f.target), A(m, f.pointerType) && m.stopPropagation(), S(Ne(m.currentTarget), "scroll", W, !0);
      }, I.onTouchMove = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        if (!f.isPressed) {
          m.stopPropagation();
          return;
        }
        let y = jn(m.nativeEvent, f.activePointerId), X = !0;
        y && Fe(y, m.currentTarget) ? !f.isOverTarget && f.pointerType != null && (f.isOverTarget = !0, X = A(m, f.pointerType)) : f.isOverTarget && f.pointerType != null && (f.isOverTarget = !1, X = k(m, f.pointerType, !1), Q(m)), X && m.stopPropagation();
      }, I.onTouchEnd = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        if (!f.isPressed) {
          m.stopPropagation();
          return;
        }
        let y = jn(m.nativeEvent, f.activePointerId), X = !0;
        y && Fe(y, m.currentTarget) && f.pointerType != null ? (C(m, f.pointerType), X = k(m, f.pointerType)) : f.isOverTarget && f.pointerType != null && (X = k(m, f.pointerType, !1)), X && m.stopPropagation(), f.isPressed = !1, f.activePointerId = null, f.isOverTarget = !1, f.ignoreEmulatedMouseEvents = !0, f.target && !u && St(f.target), O();
      }, I.onTouchCancel = (m) => {
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
      I.onDragStart = (m) => {
        m.currentTarget.contains(m.target) && v(m);
      };
    }
    return I;
  }, [
    S,
    i,
    l,
    O,
    u,
    v,
    Q,
    k,
    A,
    C
  ]);
  return ce(() => () => {
    var f;
    u || St((f = w.current.target) !== null && f !== void 0 ? f : void 0);
  }, [
    u
  ]), {
    isPressed: s || b,
    pressProps: ye(p, ee)
  };
}
function Br(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function sr(e, t) {
  const { key: r, code: n } = e, a = t, o = a.getAttribute("role");
  return (r === "Enter" || r === " " || r === "Spacebar" || n === "Space") && !(a instanceof Ne(a).HTMLInputElement && !Fa(a, r) || a instanceof Ne(a).HTMLTextAreaElement || a.isContentEditable) && // Links should only trigger with Enter key
  !((o === "link" || !o && Br(a)) && r !== "Enter");
}
function Ys(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function jn(e, t) {
  const r = e.changedTouches;
  for (let n = 0; n < r.length; n++) {
    const a = r[n];
    if (a.identifier === t)
      return a;
  }
  return null;
}
function he(e, t) {
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
function Vs(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function Fe(e, t) {
  let r = t.getBoundingClientRect(), n = Hs(e);
  return Vs(r, n);
}
function lr(e) {
  return !(e instanceof HTMLElement) || !e.hasAttribute("draggable");
}
function Fn(e, t) {
  return e instanceof HTMLInputElement ? !Fa(e, t) : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Br(e);
}
const Us = /* @__PURE__ */ new Set([
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
function Fa(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : Us.has(e.type);
}
class Ks {
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
function Ws(e) {
  let t = re({
    isFocused: !1,
    observer: null
  });
  je(() => {
    const n = t.current;
    return () => {
      n.observer && (n.observer.disconnect(), n.observer = null);
    };
  }, []);
  let r = se((n) => {
    e == null || e(n);
  });
  return ge((n) => {
    if (n.target instanceof HTMLButtonElement || n.target instanceof HTMLInputElement || n.target instanceof HTMLTextAreaElement || n.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let a = n.target, o = (i) => {
        t.current.isFocused = !1, a.disabled && r(new Ks("blur", i)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
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
    r
  ]);
}
function Bs(e) {
  let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: a } = e;
  const o = ge((l) => {
    if (l.target === l.currentTarget)
      return n && n(l), a && a(!1), !0;
  }, [
    n,
    a
  ]), i = Ws(o), s = ge((l) => {
    const c = ae(l.target);
    l.target === l.currentTarget && c.activeElement === l.target && (r && r(l), a && a(!0), i(l));
  }, [
    a,
    r,
    i
  ]);
  return {
    focusProps: {
      onFocus: !t && (r || a || n) ? s : void 0,
      onBlur: !t && (n || a) ? o : void 0
    }
  };
}
let Qe = null, qs = /* @__PURE__ */ new Set(), nt = /* @__PURE__ */ new Map(), Re = !1, Ar = !1;
function Bt(e, t) {
  for (let r of qs)
    r(e, t);
}
function Gs(e) {
  return !(e.metaKey || !ft() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function zt(e) {
  Re = !0, Gs(e) && (Qe = "keyboard", Bt("keyboard", e));
}
function oe(e) {
  Qe = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Re = !0, Bt("pointer", e));
}
function za(e) {
  Sr(e) && (Re = !0, Qe = "virtual");
}
function Ya(e) {
  e.target === window || e.target === document || (!Re && !Ar && (Qe = "virtual", Bt("virtual", e)), Re = !1, Ar = !1);
}
function Ha() {
  Re = !1, Ar = !0;
}
function zn(e) {
  if (typeof window > "u" || nt.get(Ne(e)))
    return;
  const t = Ne(e), r = ae(e);
  let n = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Re = !0, n.apply(this, arguments);
  }, r.addEventListener("keydown", zt, !0), r.addEventListener("keyup", zt, !0), r.addEventListener("click", za, !0), t.addEventListener("focus", Ya, !0), t.addEventListener("blur", Ha, !1), typeof PointerEvent < "u" ? (r.addEventListener("pointerdown", oe, !0), r.addEventListener("pointermove", oe, !0), r.addEventListener("pointerup", oe, !0)) : (r.addEventListener("mousedown", oe, !0), r.addEventListener("mousemove", oe, !0), r.addEventListener("mouseup", oe, !0)), t.addEventListener("beforeunload", () => {
    Va(e);
  }, {
    once: !0
  }), nt.set(t, {
    focus: n
  });
}
const Va = (e, t) => {
  const r = Ne(e), n = ae(e);
  t && n.removeEventListener("DOMContentLoaded", t), nt.has(r) && (r.HTMLElement.prototype.focus = nt.get(r).focus, n.removeEventListener("keydown", zt, !0), n.removeEventListener("keyup", zt, !0), n.removeEventListener("click", za, !0), r.removeEventListener("focus", Ya, !0), r.removeEventListener("blur", Ha, !1), typeof PointerEvent < "u" ? (n.removeEventListener("pointerdown", oe, !0), n.removeEventListener("pointermove", oe, !0), n.removeEventListener("pointerup", oe, !0)) : (n.removeEventListener("mousedown", oe, !0), n.removeEventListener("mousemove", oe, !0), n.removeEventListener("mouseup", oe, !0)), nt.delete(r));
};
function Xs(e) {
  const t = ae(e);
  let r;
  return t.readyState !== "loading" ? zn(e) : (r = () => {
    zn(e);
  }, t.addEventListener("DOMContentLoaded", r)), () => Va(e, r);
}
typeof document < "u" && Xs();
function Qs() {
  return Qe;
}
function Js(e) {
  Qe = e, Bt(e, null);
}
let Yt = !1, fr = 0;
function Cr() {
  Yt = !0, setTimeout(() => {
    Yt = !1;
  }, 50);
}
function Yn(e) {
  e.pointerType === "touch" && Cr();
}
function Zs() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", Yn) : document.addEventListener("touchend", Cr), fr++, () => {
      fr--, !(fr > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Yn) : document.removeEventListener("touchend", Cr));
    };
}
function Ua(e) {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: a } = e, [o, i] = ue(!1), s = re({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  ce(Zs, []);
  let { hoverProps: l, triggerHoverEnd: c } = et(() => {
    let u = (b, T) => {
      if (s.pointerType = T, a || T === "touch" || s.isHovered || !b.currentTarget.contains(b.target))
        return;
      s.isHovered = !0;
      let w = b.currentTarget;
      s.target = w, t && t({
        type: "hoverstart",
        target: w,
        pointerType: T
      }), r && r(!0), i(!0);
    }, d = (b, T) => {
      if (s.pointerType = "", s.target = null, T === "touch" || !s.isHovered)
        return;
      s.isHovered = !1;
      let w = b.currentTarget;
      n && n({
        type: "hoverend",
        target: w,
        pointerType: T
      }), r && r(!1), i(!1);
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
    isHovered: o
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
function el(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: Hn(e.onKeyDown),
      onKeyUp: Hn(e.onKeyUp)
    }
  };
}
function tl(e) {
  const t = ae(e);
  if (Qs() === "virtual") {
    let r = t.activeElement;
    _a(() => {
      t.activeElement === r && e.isConnected && Me(e);
    });
  } else
    Me(e);
}
let rl = /* @__PURE__ */ fe.createContext(null);
function nl(e) {
  let t = De(rl) || {};
  Na(t, e);
  let { ref: r, ...n } = t;
  return n;
}
function qr(e, t) {
  let { focusProps: r } = Bs(e), { keyboardProps: n } = el(e), a = ye(r, n), o = nl(t), i = e.isDisabled ? {} : o, s = re(e.autoFocus);
  return ce(() => {
    s.current && t.current && tl(t.current), s.current = !1;
  }, [
    t
  ]), {
    focusableProps: ye({
      ...a,
      tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
    }, i)
  };
}
function al(e, t) {
  let {
    elementType: r = "a",
    onPress: n,
    onPressStart: a,
    onPressEnd: o,
    // @ts-ignore
    onClick: i,
    isDisabled: s,
    ...l
  } = e, c = {};
  r !== "a" && (c = {
    role: "link",
    tabIndex: s ? void 0 : 0
  });
  let { focusableProps: u } = qr(e, t), { pressProps: d, isPressed: p } = ja({
    onPress: n,
    onPressStart: a,
    onPressEnd: o,
    isDisabled: s,
    ref: t
  }), b = Xe(l, {
    labelable: !0
  }), T = ye(u, d), w = La(), S = As(e);
  return {
    isPressed: p,
    linkProps: ye(b, S, {
      ...T,
      ...c,
      "aria-disabled": s || void 0,
      "aria-current": e["aria-current"],
      onClick: (O) => {
        var A;
        (A = d.onClick) === null || A === void 0 || A.call(d, O), i && (i(O), console.warn("onClick is deprecated, please use onPress")), !w.isNative && O.currentTarget instanceof HTMLAnchorElement && O.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
        !O.isDefaultPrevented() && Ts(O.currentTarget, O) && e.href && (O.preventDefault(), w.open(O.currentTarget, O, e.href, e.routerOptions));
      }
    })
  };
}
function Ka(e, t) {
  let {
    elementType: r = "button",
    isDisabled: n,
    onPress: a,
    onPressStart: o,
    onPressEnd: i,
    onPressUp: s,
    onPressChange: l,
    preventFocusOnPress: c,
    allowFocusWhenDisabled: u,
    // @ts-ignore
    onClick: d,
    href: p,
    target: b,
    rel: T,
    type: w = "button"
  } = e, S;
  r === "button" ? S = {
    type: w,
    disabled: n
  } : S = {
    role: "button",
    tabIndex: n ? void 0 : 0,
    href: r === "a" && n ? void 0 : p,
    target: r === "a" ? b : void 0,
    type: r === "input" ? w : void 0,
    disabled: r === "input" ? n : void 0,
    "aria-disabled": !n || r === "input" ? void 0 : n,
    rel: r === "a" ? T : void 0
  };
  let { pressProps: O, isPressed: A } = ja({
    onPressStart: o,
    onPressEnd: i,
    onPressChange: l,
    onPress: a,
    onPressUp: s,
    isDisabled: n,
    preventFocusOnPress: c,
    ref: t
  }), { focusableProps: k } = qr(e, t);
  u && (k.tabIndex = n ? -1 : k.tabIndex);
  let C = ye(k, O, Xe(e, {
    labelable: !0
  }));
  return {
    isPressed: A,
    buttonProps: ye(S, C, {
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
function il(e, t, r) {
  let { validationBehavior: n, focus: a } = e;
  je(() => {
    if (n === "native" && (r != null && r.current)) {
      let l = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      r.current.setCustomValidity(l), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation(sl(r.current));
    }
  });
  let o = se(() => {
    t.resetValidation();
  }), i = se((l) => {
    var c;
    t.displayValidation.isInvalid || t.commitValidation();
    let u = r == null || (c = r.current) === null || c === void 0 ? void 0 : c.form;
    if (!l.defaultPrevented && r && u && ll(u) === r.current) {
      var d;
      a ? a() : (d = r.current) === null || d === void 0 || d.focus(), Js("keyboard");
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
    return l.addEventListener("invalid", i), l.addEventListener("change", s), c == null || c.addEventListener("reset", o), () => {
      l.removeEventListener("invalid", i), l.removeEventListener("change", s), c == null || c.removeEventListener("reset", o);
    };
  }, [
    r,
    i,
    s,
    o,
    n
  ]);
}
function ol(e) {
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
function sl(e) {
  return {
    isInvalid: !e.validity.valid,
    validationDetails: ol(e),
    validationErrors: e.validationMessage ? [
      e.validationMessage
    ] : []
  };
}
function ll(e) {
  for (let t = 0; t < e.elements.length; t++) {
    let r = e.elements[t];
    if (!r.validity.valid)
      return r;
  }
  return null;
}
const Wa = {
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
}, Ba = {
  ...Wa,
  customError: !0,
  valid: !1
}, Je = {
  isInvalid: !1,
  validationDetails: Wa,
  validationErrors: []
}, fl = Wn({}), Vn = "__formValidationState" + Date.now();
function cl(e) {
  if (e[Vn]) {
    let { realtimeValidation: t, displayValidation: r, updateValidation: n, resetValidation: a, commitValidation: o } = e[Vn];
    return {
      realtimeValidation: t,
      displayValidation: r,
      updateValidation: n,
      resetValidation: a,
      commitValidation: o
    };
  }
  return ul(e);
}
function ul(e) {
  let { isInvalid: t, validationState: r, name: n, value: a, builtinValidation: o, validate: i, validationBehavior: s = "aria" } = e;
  r && (t || (t = r === "invalid"));
  let l = t !== void 0 ? {
    isInvalid: t,
    validationErrors: [],
    validationDetails: Ba
  } : null, c = et(() => Un(dl(i, a)), [
    i,
    a
  ]);
  o != null && o.validationDetails.valid && (o = null);
  let u = De(fl), d = et(() => n ? Array.isArray(n) ? n.flatMap((H) => Ir(u[H])) : Ir(u[n]) : [], [
    u,
    n
  ]), [p, b] = ue(u), [T, w] = ue(!1);
  u !== p && (b(u), w(!1));
  let S = et(() => Un(T ? [] : d), [
    T,
    d
  ]), O = re(Je), [A, k] = ue(Je), C = re(Je), v = () => {
    if (!Q)
      return;
    ee(!1);
    let H = c || o || O.current;
    cr(H, C.current) || (C.current = H, k(H));
  }, [Q, ee] = ue(!1);
  return ce(v), {
    realtimeValidation: l || S || c || o || Je,
    displayValidation: s === "native" ? l || S || A : l || S || c || o || A,
    updateValidation(H) {
      s === "aria" && !cr(A, H) ? k(H) : O.current = H;
    },
    resetValidation() {
      let H = Je;
      cr(H, C.current) || (C.current = H, k(H)), s === "native" && ee(!1), w(!0);
    },
    commitValidation() {
      s === "native" && ee(!0), w(!0);
    }
  };
}
function Ir(e) {
  return e ? Array.isArray(e) ? e : [
    e
  ] : [];
}
function dl(e, t) {
  if (typeof e == "function") {
    let r = e(t);
    if (r && typeof r != "boolean")
      return Ir(r);
  }
  return [];
}
function Un(e) {
  return e.length ? {
    isInvalid: !0,
    validationErrors: e,
    validationDetails: Ba
  } : null;
}
function cr(e, t) {
  return e === t ? !0 : e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((r, n) => r === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([r, n]) => t.validationDetails[r] === n);
}
function vl(e) {
  let { id: t, label: r, "aria-labelledby": n, "aria-label": a, labelElementType: o = "label" } = e;
  t = Ft(t);
  let i = Ft(), s = {};
  r ? (n = n ? `${i} ${n}` : i, s = {
    id: i,
    htmlFor: o === "label" ? t : void 0
  }) : !n && !a && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let l = Is({
    id: t,
    "aria-label": a,
    "aria-labelledby": n
  });
  return {
    labelProps: s,
    fieldProps: l
  };
}
function ml(e) {
  let { description: t, errorMessage: r, isInvalid: n, validationState: a } = e, { labelProps: o, fieldProps: i } = vl(e), s = Ln([
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
  return i = ye(i, {
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
function qa(e, t) {
  let { inputElementType: r = "input", isDisabled: n = !1, isRequired: a = !1, isReadOnly: o = !1, type: i = "text", validationBehavior: s = "aria" } = e, [l, c] = _s(e.value, e.defaultValue || "", e.onChange), { focusableProps: u } = qr(e, t), d = cl({
    ...e,
    value: l
  }), { isInvalid: p, validationErrors: b, validationDetails: T } = d.displayValidation, { labelProps: w, fieldProps: S, descriptionProps: O, errorMessageProps: A } = ml({
    ...e,
    isInvalid: p,
    errorMessage: e.errorMessage || b
  }), k = Xe(e, {
    labelable: !0
  });
  const C = {
    type: i,
    pattern: e.pattern
  };
  return Ls(t, l, c), il(e, d, t), ce(() => {
    if (t.current instanceof Ne(t.current).HTMLTextAreaElement) {
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
    labelProps: w,
    inputProps: ye(k, r === "input" && C, {
      disabled: n,
      readOnly: o,
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
      ...S
    }),
    descriptionProps: O,
    errorMessageProps: A,
    isInvalid: p,
    validationErrors: b,
    validationDetails: T
  };
}
const me = "px-2 py-1 rounded-md", pl = {
  flat: {
    primary: `${me} bg-transparent text-ev-primary data-[hovered]:bg-ev-primary/20 data-[pressed]:bg-ev-primary/40 data-[hovered]:dark:bg-ev-primary/20 data-[pressed]:dark:bg-ev-primary/40 disabled:text-ev-primary/40`,
    secondary: `${me} bg-transparent text-ev-secondary data-[hovered]:bg-ev-secondary/20 data-[pressed]:bg-ev-secondary/40 data-[hovered]:dark:bg-ev-secondary/20  data-[pressed]:dark:bg-ev-secondary/40 disabled:text-ev-secondary/40`,
    destructive: `${me} bg-transparent text-ev-destructive data-[hovered]:bg-ev-destructive/20 data-[pressed]:bg-ev-destructive/40 data-[hovered]:dark:bg-ev-destructive/20  data-[pressed]:dark:bg-ev-destructive/40 disabled:text-ev-destructive/40`,
    foreground: `${me} bg-transparent text-ev-dark data-[hovered]:bg-ev-dark/20 data-[pressed]:bg-ev-dark/40 dark:text-ev-light data-[hovered]:dark:bg-ev-light/20  data-[pressed]:dark:bg-ev-light/40 disabled:text-ev-dark/40`,
    background: `${me} bg-transparent text-ev-light data-[hovered]:bg-ev-light/20 data-[pressed]:bg-ev-light/40 dark:text-ev-dark dark:data-[hovered]:bg-ev-dark/20 data-[pressed]:dark:bg-ev-dark/40 disabled:text-ev-light/40`
  },
  solid: {
    primary: `${me} bg-ev-primary data-[hovered]:bg-ev-primary-hard data-[pressed]:bg-ev-primary-harder text-ev-light disabled:bg-ev-primary/40`,
    secondary: `${me} bg-ev-secondary data-[hovered]:bg-ev-secondary-hard data-[pressed]:bg-ev-primary-harder text-ev-light disabled:bg-ev-secondary-hard/40`,
    destructive: `${me} bg-ev-destructive data-[hovered]:bg-ev-destructive-hard data-[pressed]:bg-ev-destructive-harder text-ev-light disabled:bg-ev-destructive-hard/40`,
    foreground: `${me} bg-ev-dark text-ev-light data-[hovered]:bg-ev-dark-hard data-[pressed]:bg-ev-dark-harder dark:bg-ev-light dark:text-ev-dark dark:data-[hovered]:bg-ev-light-hard  dark:data-[pressed]:bg-ev-light-harder disabled:bg-ev-dark-hard/40`,
    background: `${me} bg-ev-light text-ev-dark data-[hovered]:bg-ev-light-hard data-[pressed]:bg-ev-light-harder dark:text-ev-light dark:bg-ev-dark dark:data-[hovered]:bg-ev-dark-hard  dark:data-[pressed]:bg-ev-light-harder disabled:bg-ev-dark-hard/40`
  }
}, bl = ({ variant: e = "solid", color: t = "primary" }) => pl[e][t], jl = Bn(
  ({ children: e, ...t }, r) => {
    const { buttonProps: n, isPressed: a } = Ka(
      t,
      r
    ), { hoverProps: o, isHovered: i } = Ua({});
    return /* @__PURE__ */ j(
      "button",
      {
        ref: r,
        ...Xe(t),
        ...o,
        ...n,
        ...t.isDisabled && { "data-disabled": !0, disabled: !0 },
        ...a && { "data-pressed": a },
        ...i && !a && !t.isDisabled && { "data-hovered": i },
        className: q(bl(t), t.className),
        children: e
      }
    );
  }
), Ee = "w-[32px] h-[32px] rounded-md", gl = {
  flat: {
    primary: `${Ee} bg-transparent text-ev-primary data-[hovered]:bg-ev-primary/20 data-[pressed]:bg-ev-primary/40 data-[hovered]:dark:bg-ev-primary/20 data-[pressed]:dark:bg-ev-primary/40 disabled:text-ev-primary/40`,
    secondary: `${Ee} bg-transparent text-ev-secondary data-[hovered]:bg-ev-secondary/20 data-[pressed]:bg-ev-secondary/40 data-[hovered]:dark:bg-ev-secondary/20  data-[pressed]:dark:bg-ev-secondary/40 disabled:text-ev-secondary/40`,
    destructive: `${Ee} bg-transparent text-ev-destructive data-[hovered]:bg-ev-destructive/20 data-[pressed]:bg-ev-destructive/40 data-[hovered]:dark:bg-ev-destructive/20  data-[pressed]:dark:bg-ev-destructive/40 disabled:text-ev-destructive/40`,
    foreground: `${Ee} bg-transparent text-ev-dark data-[hovered]:bg-ev-dark/20 data-[pressed]:bg-ev-dark/40 dark:text-ev-light data-[hovered]:dark:bg-ev-light/20  data-[pressed]:dark:bg-ev-light/40 disabled:text-ev-dark/40`
  },
  solid: {
    primary: `${Ee} bg-ev-primary hover:bg-ev-primary-hard pressed:bg-ev-primary-harder text-ev-light disabled:bg-ev-primary/40`,
    secondary: `${Ee} bg-ev-secondary hover:bg-ev-secondary-hard pressed:bg-ev-primary-harder text-ev-light disabled:bg-ev-secondary-hard/40`,
    destructive: `${Ee} bg-ev-destructive hover:bg-ev-destructive-hard pressed:bg-ev-destructive-harder text-ev-light disabled:bg-ev-destructive-hard/40`,
    foreground: `${Ee} bg-ev-dark text-ev-light hover:bg-ev-dark-hard pressed:bg-ev-dark-harder dark:bg-ev-light dark:text-ev-dark dark:hover:bg-ev-light-hard  dark:pressed:bg-ev-light-harder disabled:bg-ev-dark-hard/40`
  }
}, yl = ({ variant: e = "flat", color: t = "foreground" }) => gl[e][t], Fl = Bn(
  ({ children: e, ...t }, r) => {
    const { buttonProps: n, isPressed: a } = Ka(
      t,
      r
    ), { hoverProps: o, isHovered: i } = Ua({});
    return /* @__PURE__ */ j(
      "button",
      {
        ref: r,
        ...Xe(t),
        ...o,
        ...n,
        ...t.isDisabled && { "data-disabled": !0, disabled: !0 },
        ...a && { "data-pressed": a },
        ...i && !a && !t.isDisabled && { "data-hovered": i },
        className: q(yl(t), t.className),
        children: e
      }
    );
  }
), Kn = "underline decoration-dashed px-2 py-1 rounded hover:decoration-solid", hl = {
  primary: `${Kn} text-ev-primary hover:text-ev-primary-hard`,
  secondary: `${Kn} text-ev-secondary hover:text-ev-secondary-hard`
}, xl = ({ color: e = "primary" }) => hl[e], zl = ({
  children: e,
  showExternalIcon: t = !0,
  ...r
}) => {
  const n = re(null), { linkProps: a } = al(r, n);
  return /* @__PURE__ */ le(
    "a",
    {
      ref: n,
      ...Xe(r),
      ...a,
      className: q(xl(r), r.className),
      children: [
        r.target === "_blank" && t && /* @__PURE__ */ j(Be, { icon: qn, className: "mr-2" }),
        e
      ]
    }
  );
}, Yl = ({
  variant: e = "solid",
  className: t,
  labelClassName: r,
  inputClassName: n,
  descriptionClassName: a,
  errorClassName: o,
  ...i
}) => {
  let { label: s } = i, l = re(null), {
    labelProps: c,
    inputProps: u,
    descriptionProps: d,
    errorMessageProps: p,
    isInvalid: b,
    validationErrors: T
  } = qa(i, l);
  return /* @__PURE__ */ le("div", { className: q("flex flex-col w-full", t), children: [
    e === "solid" && /* @__PURE__ */ j(
      "label",
      {
        ...c,
        className: q(c.className, r),
        children: s
      }
    ),
    /* @__PURE__ */ j(
      "input",
      {
        ...u,
        className: q(
          `bg-inherit ${e === "flat" && "border-0 "} ${e === "solid" && "border-2 border-ev-dark rounded-sm"}`,
          n
        ),
        ref: l
      }
    ),
    i.description && /* @__PURE__ */ j(
      "div",
      {
        ...d,
        className: q("text-[12px]", a),
        children: i.description
      }
    ),
    b && /* @__PURE__ */ j(
      "div",
      {
        ...p,
        className: q("text-red-700 text-[12px]", o),
        children: T.join(" ")
      }
    )
  ] });
}, Hl = ({
  variant: e = "solid",
  className: t,
  labelClassName: r,
  inputClassName: n,
  autoResize: a,
  ...o
}) => {
  const { label: i } = o, s = re(null), { labelProps: l, inputProps: c } = qa(
    {
      ...o,
      inputElementType: "textarea"
    },
    s
  ), u = (p) => {
    p.style.height = "auto", p.style.height = `${p.scrollHeight}px`;
  }, d = (p) => {
    c.onInput && c.onInput(p), a && u(p.target);
  };
  return ce(() => {
    a && s.current && u(s.current);
  }, [a]), /* @__PURE__ */ le("div", { className: q("flex flex-col w-full", t), children: [
    e === "solid" && /* @__PURE__ */ j(
      "label",
      {
        ...l,
        className: q(l.className, r),
        children: i
      }
    ),
    /* @__PURE__ */ j(
      "textarea",
      {
        ...c,
        onInput: d,
        ref: s,
        className: q(
          c.className,
          "bg-inherit h-full",
          n
        )
      }
    )
  ] });
}, Vl = ({
  title: e,
  children: t,
  unmountInvisibleChildren: r
}) => {
  const [n, a] = ue(!1);
  return /* @__PURE__ */ le(
    "details",
    {
      onToggle: () => a((o) => !o),
      className: "w-full group bg-ev-light-hard dark:bg-ev-dark-hard p-4 rounded-lg",
      open: n,
      children: [
        /* @__PURE__ */ j("summary", { className: "group-[open]:bg-ev-primary text-ev-dark dark:text-ev-light select-none cursor-pointer", children: e }),
        (n || !r) && /* @__PURE__ */ j("div", { className: "mt-3 text-sm  text-ev-dark dark:text-ev-light", children: t })
      ]
    }
  );
}, Ul = ({
  videoId: e,
  startMilliseconds: t = 0
}) => /* @__PURE__ */ j("div", { className: "relative w-full h-auto pb-[56.25%]", children: /* @__PURE__ */ j(
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
  Dl as A,
  Rl as Blockquote,
  jl as Button,
  Il as Code,
  Vl as Collapsible,
  kl as H2,
  El as H3,
  Tl as H4,
  Sl as H5,
  Ol as H6,
  vt as Hashtag,
  Fl as IconButton,
  Nl as Img,
  zl as Link,
  _l as Ol,
  Al as P,
  Ml as Pre,
  Cl as Strong,
  Hl as TextArea,
  Yl as TextField,
  Ll as Ul,
  Ul as YoutubeVideo
};
