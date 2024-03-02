import { jsxs as ve, jsx as K } from "react/jsx-runtime";
import rt, { useContext as wn, useRef as Ue, useCallback as Oe, createContext as Na, useEffect as Xe, useState as Dr, useMemo as Fr, forwardRef as Pn } from "react";
import { twMerge as Q } from "tailwind-merge";
var Ra = {
  prefix: "fas",
  iconName: "quote-right",
  icon: [448, 512, [8221, "quote-right-alt"], "f10e", "M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"]
}, jr = {
  prefix: "fas",
  iconName: "link",
  icon: [640, 512, [128279, "chain"], "f0c1", "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]
}, Da = {
  prefix: "fas",
  iconName: "quote-left",
  icon: [448, 512, [8220, "quote-left-alt"], "f10d", "M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"]
};
function Un(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Un(Object(n), !0).forEach(function(r) {
      J(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Un(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ot(e) {
  "@babel/helpers - typeof";
  return Ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ot(e);
}
function Fa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ja(e, t, n) {
  return t && Kn(e.prototype, t), n && Kn(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function J(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function kn(e, t) {
  return Ya(e) || Ua(e, t) || zr(e, t) || Wa();
}
function at(e) {
  return za(e) || Ha(e) || zr(e) || Ka();
}
function za(e) {
  if (Array.isArray(e))
    return en(e);
}
function Ya(e) {
  if (Array.isArray(e))
    return e;
}
function Ha(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Ua(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, o, s;
    try {
      for (n = n.call(e); !(a = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); a = !0)
        ;
    } catch (f) {
      i = !0, s = f;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return r;
  }
}
function zr(e, t) {
  if (e) {
    if (typeof e == "string")
      return en(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return en(e, t);
  }
}
function en(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Ka() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Wn = function() {
}, En = {}, Yr = {}, Hr = null, Ur = {
  mark: Wn,
  measure: Wn
};
try {
  typeof window < "u" && (En = window), typeof document < "u" && (Yr = document), typeof MutationObserver < "u" && (Hr = MutationObserver), typeof performance < "u" && (Ur = performance);
} catch {
}
var qa = En.navigator || {}, qn = qa.userAgent, Gn = qn === void 0 ? "" : qn, he = En, G = Yr, Bn = Hr, ut = Ur;
he.document;
var me = !!G.documentElement && !!G.head && typeof G.addEventListener == "function" && typeof G.createElement == "function", Kr = ~Gn.indexOf("MSIE") || ~Gn.indexOf("Trident/"), dt, vt, mt, pt, gt, ce = "___FONT_AWESOME___", tn = 16, Wr = "fa", qr = "svg-inline--fa", Ae = "data-fa-i2svg", nn = "data-fa-pseudo-element", Ga = "data-fa-pseudo-element-pending", Tn = "data-prefix", $n = "data-icon", Vn = "fontawesome-i2svg", Ba = "async", Va = ["HTML", "HEAD", "STYLE", "SCRIPT"], Gr = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), q = "classic", V = "sharp", Sn = [q, V];
function it(e) {
  return new Proxy(e, {
    get: function(n, r) {
      return r in n ? n[r] : n[q];
    }
  });
}
var Je = it((dt = {}, J(dt, q, {
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
}), J(dt, V, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), dt)), Qe = it((vt = {}, J(vt, q, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), J(vt, V, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), vt)), Ze = it((mt = {}, J(mt, q, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), J(mt, V, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), mt)), Xa = it((pt = {}, J(pt, q, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), J(pt, V, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), pt)), Ja = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, Br = "fa-layers-text", Qa = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, Za = it((gt = {}, J(gt, q, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), J(gt, V, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), gt)), Vr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ei = Vr.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), ti = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Te = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, et = /* @__PURE__ */ new Set();
Object.keys(Qe[q]).map(et.add.bind(et));
Object.keys(Qe[V]).map(et.add.bind(et));
var ni = [].concat(Sn, at(et), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Te.GROUP, Te.SWAP_OPACITY, Te.PRIMARY, Te.SECONDARY]).concat(Vr.map(function(e) {
  return "".concat(e, "x");
})).concat(ei.map(function(e) {
  return "w-".concat(e);
})), Ge = he.FontAwesomeConfig || {};
function ri(e) {
  var t = G.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function ai(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (G && typeof G.querySelector == "function") {
  var ii = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  ii.forEach(function(e) {
    var t = kn(e, 2), n = t[0], r = t[1], a = ai(ri(n));
    a != null && (Ge[r] = a);
  });
}
var Xr = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Wr,
  replacementClass: qr,
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
Ge.familyPrefix && (Ge.cssPrefix = Ge.familyPrefix);
var ze = x(x({}, Xr), Ge);
ze.autoReplaceSvg || (ze.observeMutations = !1);
var E = {};
Object.keys(Xr).forEach(function(e) {
  Object.defineProperty(E, e, {
    enumerable: !0,
    set: function(n) {
      ze[e] = n, Be.forEach(function(r) {
        return r(E);
      });
    },
    get: function() {
      return ze[e];
    }
  });
});
Object.defineProperty(E, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    ze.cssPrefix = t, Be.forEach(function(n) {
      return n(E);
    });
  },
  get: function() {
    return ze.cssPrefix;
  }
});
he.FontAwesomeConfig = E;
var Be = [];
function oi(e) {
  return Be.push(e), function() {
    Be.splice(Be.indexOf(e), 1);
  };
}
var pe = tn, fe = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function si(e) {
  if (!(!e || !me)) {
    var t = G.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var n = G.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
      var i = n[a], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
    }
    return G.head.insertBefore(t, r), e;
  }
}
var fi = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function tt() {
  for (var e = 12, t = ""; e-- > 0; )
    t += fi[Math.random() * 62 | 0];
  return t;
}
function Ke(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function On(e) {
  return e.classList ? Ke(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function Jr(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function li(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, '="').concat(Jr(e[n]), '" ');
  }, "").trim();
}
function Lt(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function An(e) {
  return e.size !== fe.size || e.x !== fe.x || e.y !== fe.y || e.rotate !== fe.rotate || e.flipX || e.flipY;
}
function ci(e) {
  var t = e.transform, n = e.containerWidth, r = e.iconWidth, a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), f = {
    transform: "".concat(i, " ").concat(o, " ").concat(s)
  }, u = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: f,
    path: u
  };
}
function ui(e) {
  var t = e.transform, n = e.width, r = n === void 0 ? tn : n, a = e.height, i = a === void 0 ? tn : a, o = e.startCentered, s = o === void 0 ? !1 : o, f = "";
  return s && Kr ? f += "translate(".concat(t.x / pe - r / 2, "em, ").concat(t.y / pe - i / 2, "em) ") : s ? f += "translate(calc(-50% + ".concat(t.x / pe, "em), calc(-50% + ").concat(t.y / pe, "em)) ") : f += "translate(".concat(t.x / pe, "em, ").concat(t.y / pe, "em) "), f += "scale(".concat(t.size / pe * (t.flipX ? -1 : 1), ", ").concat(t.size / pe * (t.flipY ? -1 : 1), ") "), f += "rotate(".concat(t.rotate, "deg) "), f;
}
var di = `:root, :host {
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
function Qr() {
  var e = Wr, t = qr, n = E.cssPrefix, r = E.replacementClass, a = di;
  if (n !== e || r !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    a = a.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return a;
}
var Xn = !1;
function zt() {
  E.autoAddCss && !Xn && (si(Qr()), Xn = !0);
}
var vi = {
  mixout: function() {
    return {
      dom: {
        css: Qr,
        insertCss: zt
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        zt();
      },
      beforeI2svg: function() {
        zt();
      }
    };
  }
}, ue = he || {};
ue[ce] || (ue[ce] = {});
ue[ce].styles || (ue[ce].styles = {});
ue[ce].hooks || (ue[ce].hooks = {});
ue[ce].shims || (ue[ce].shims = []);
var oe = ue[ce], Zr = [], mi = function e() {
  G.removeEventListener("DOMContentLoaded", e), At = 1, Zr.map(function(t) {
    return t();
  });
}, At = !1;
me && (At = (G.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(G.readyState), At || G.addEventListener("DOMContentLoaded", mi));
function pi(e) {
  me && (At ? setTimeout(e, 0) : Zr.push(e));
}
function ot(e) {
  var t = e.tag, n = e.attributes, r = n === void 0 ? {} : n, a = e.children, i = a === void 0 ? [] : a;
  return typeof e == "string" ? Jr(e) : "<".concat(t, " ").concat(li(r), ">").concat(i.map(ot).join(""), "</").concat(t, ">");
}
function Jn(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var gi = function(t, n) {
  return function(r, a, i, o) {
    return t.call(n, r, a, i, o);
  };
}, Yt = function(t, n, r, a) {
  var i = Object.keys(t), o = i.length, s = a !== void 0 ? gi(n, a) : n, f, u, c;
  for (r === void 0 ? (f = 1, c = t[i[0]]) : (f = 0, c = r); f < o; f++)
    u = i[f], c = s(c, t[u], u, t);
  return c;
};
function bi(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var a = e.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      var i = e.charCodeAt(n++);
      (i & 64512) == 56320 ? t.push(((a & 1023) << 10) + (i & 1023) + 65536) : (t.push(a), n--);
    } else
      t.push(a);
  }
  return t;
}
function rn(e) {
  var t = bi(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function yi(e, t) {
  var n = e.length, r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function Qn(e) {
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n], a = !!r.icon;
    return a ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function an(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, a = r === void 0 ? !1 : r, i = Qn(t);
  typeof oe.hooks.addPack == "function" && !a ? oe.hooks.addPack(e, Qn(t)) : oe.styles[e] = x(x({}, oe.styles[e] || {}), i), e === "fas" && an("fa", t);
}
var bt, yt, ht, Ne = oe.styles, hi = oe.shims, xi = (bt = {}, J(bt, q, Object.values(Ze[q])), J(bt, V, Object.values(Ze[V])), bt), Cn = null, ea = {}, ta = {}, na = {}, ra = {}, aa = {}, wi = (yt = {}, J(yt, q, Object.keys(Je[q])), J(yt, V, Object.keys(Je[V])), yt);
function Pi(e) {
  return ~ni.indexOf(e);
}
function ki(e, t) {
  var n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Pi(a) ? a : null;
}
var ia = function() {
  var t = function(i) {
    return Yt(Ne, function(o, s, f) {
      return o[f] = Yt(s, i, {}), o;
    }, {});
  };
  ea = t(function(a, i, o) {
    if (i[3] && (a[i[3]] = o), i[2]) {
      var s = i[2].filter(function(f) {
        return typeof f == "number";
      });
      s.forEach(function(f) {
        a[f.toString(16)] = o;
      });
    }
    return a;
  }), ta = t(function(a, i, o) {
    if (a[o] = o, i[2]) {
      var s = i[2].filter(function(f) {
        return typeof f == "string";
      });
      s.forEach(function(f) {
        a[f] = o;
      });
    }
    return a;
  }), aa = t(function(a, i, o) {
    var s = i[2];
    return a[o] = o, s.forEach(function(f) {
      a[f] = o;
    }), a;
  });
  var n = "far" in Ne || E.autoFetchSvg, r = Yt(hi, function(a, i) {
    var o = i[0], s = i[1], f = i[2];
    return s === "far" && !n && (s = "fas"), typeof o == "string" && (a.names[o] = {
      prefix: s,
      iconName: f
    }), typeof o == "number" && (a.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: f
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  na = r.names, ra = r.unicodes, Cn = Nt(E.styleDefault, {
    family: E.familyDefault
  });
};
oi(function(e) {
  Cn = Nt(e.styleDefault, {
    family: E.familyDefault
  });
});
ia();
function _n(e, t) {
  return (ea[e] || {})[t];
}
function Ei(e, t) {
  return (ta[e] || {})[t];
}
function $e(e, t) {
  return (aa[e] || {})[t];
}
function oa(e) {
  return na[e] || {
    prefix: null,
    iconName: null
  };
}
function Ti(e) {
  var t = ra[e], n = _n("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function xe() {
  return Cn;
}
var In = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Nt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.family, r = n === void 0 ? q : n, a = Je[r][e], i = Qe[r][e] || Qe[r][a], o = e in oe.styles ? e : null;
  return i || o || null;
}
var Zn = (ht = {}, J(ht, q, Object.keys(Ze[q])), J(ht, V, Object.keys(Ze[V])), ht);
function Rt(e) {
  var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.skipLookups, a = r === void 0 ? !1 : r, i = (t = {}, J(t, q, "".concat(E.cssPrefix, "-").concat(q)), J(t, V, "".concat(E.cssPrefix, "-").concat(V)), t), o = null, s = q;
  (e.includes(i[q]) || e.some(function(u) {
    return Zn[q].includes(u);
  })) && (s = q), (e.includes(i[V]) || e.some(function(u) {
    return Zn[V].includes(u);
  })) && (s = V);
  var f = e.reduce(function(u, c) {
    var d = ki(E.cssPrefix, c);
    if (Ne[c] ? (c = xi[s].includes(c) ? Xa[s][c] : c, o = c, u.prefix = c) : wi[s].indexOf(c) > -1 ? (o = c, u.prefix = Nt(c, {
      family: s
    })) : d ? u.iconName = d : c !== E.replacementClass && c !== i[q] && c !== i[V] && u.rest.push(c), !a && u.prefix && u.iconName) {
      var y = o === "fa" ? oa(u.iconName) : {}, g = $e(u.prefix, u.iconName);
      y.prefix && (o = null), u.iconName = y.iconName || g || u.iconName, u.prefix = y.prefix || u.prefix, u.prefix === "far" && !Ne.far && Ne.fas && !E.autoFetchSvg && (u.prefix = "fas");
    }
    return u;
  }, In());
  return (e.includes("fa-brands") || e.includes("fab")) && (f.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (f.prefix = "fad"), !f.prefix && s === V && (Ne.fass || E.autoFetchSvg) && (f.prefix = "fass", f.iconName = $e(f.prefix, f.iconName) || f.iconName), (f.prefix === "fa" || o === "fa") && (f.prefix = xe() || "fas"), f;
}
var $i = /* @__PURE__ */ function() {
  function e() {
    Fa(this, e), this.definitions = {};
  }
  return ja(e, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
        a[i] = arguments[i];
      var o = a.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        n.definitions[s] = x(x({}, n.definitions[s] || {}), o[s]), an(s, o[s]);
        var f = Ze[q][s];
        f && an(f, o[s]), ia();
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
      return Object.keys(a).map(function(i) {
        var o = a[i], s = o.prefix, f = o.iconName, u = o.icon, c = u[2];
        n[s] || (n[s] = {}), c.length > 0 && c.forEach(function(d) {
          typeof d == "string" && (n[s][d] = u);
        }), n[s][f] = u;
      }), n;
    }
  }]), e;
}(), er = [], Re = {}, je = {}, Si = Object.keys(je);
function Oi(e, t) {
  var n = t.mixoutsTo;
  return er = e, Re = {}, Object.keys(je).forEach(function(r) {
    Si.indexOf(r) === -1 && delete je[r];
  }), er.forEach(function(r) {
    var a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach(function(o) {
      typeof a[o] == "function" && (n[o] = a[o]), Ot(a[o]) === "object" && Object.keys(a[o]).forEach(function(s) {
        n[o] || (n[o] = {}), n[o][s] = a[o][s];
      });
    }), r.hooks) {
      var i = r.hooks();
      Object.keys(i).forEach(function(o) {
        Re[o] || (Re[o] = []), Re[o].push(i[o]);
      });
    }
    r.provides && r.provides(je);
  }), n;
}
function on(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  var i = Re[e] || [];
  return i.forEach(function(o) {
    t = o.apply(null, [t].concat(r));
  }), t;
}
function Ce(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var a = Re[e] || [];
  a.forEach(function(i) {
    i.apply(null, n);
  });
}
function de() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return je[e] ? je[e].apply(null, t) : void 0;
}
function sn(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, n = e.prefix || xe();
  if (t)
    return t = $e(n, t) || t, Jn(sa.definitions, n, t) || Jn(oe.styles, n, t);
}
var sa = new $i(), Ai = function() {
  E.autoReplaceSvg = !1, E.observeMutations = !1, Ce("noAuto");
}, Ci = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return me ? (Ce("beforeI2svg", t), de("pseudoElements2svg", t), de("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot;
    E.autoReplaceSvg === !1 && (E.autoReplaceSvg = !0), E.observeMutations = !0, pi(function() {
      Ii({
        autoReplaceSvgRoot: n
      }), Ce("watch", t);
    });
  }
}, _i = {
  icon: function(t) {
    if (t === null)
      return null;
    if (Ot(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: $e(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], r = Nt(t[0]);
      return {
        prefix: r,
        iconName: $e(r, n) || n
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(E.cssPrefix, "-")) > -1 || t.match(Ja))) {
      var a = Rt(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || xe(),
        iconName: $e(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof t == "string") {
      var i = xe();
      return {
        prefix: i,
        iconName: $e(i, t) || t
      };
    }
  }
}, re = {
  noAuto: Ai,
  config: E,
  dom: Ci,
  parse: _i,
  library: sa,
  findIconDefinition: sn,
  toHtml: ot
}, Ii = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot, r = n === void 0 ? G : n;
  (Object.keys(oe.styles).length > 0 || E.autoFetchSvg) && me && E.autoReplaceSvg && re.dom.i2svg({
    node: r
  });
};
function Dt(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(r) {
        return ot(r);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (me) {
        var r = G.createElement("div");
        return r.innerHTML = e.html, r.children;
      }
    }
  }), e;
}
function Mi(e) {
  var t = e.children, n = e.main, r = e.mask, a = e.attributes, i = e.styles, o = e.transform;
  if (An(o) && n.found && !r.found) {
    var s = n.width, f = n.height, u = {
      x: s / f / 2,
      y: 0.5
    };
    a.style = Lt(x(x({}, i), {}, {
      "transform-origin": "".concat(u.x + o.x / 16, "em ").concat(u.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Li(e) {
  var t = e.prefix, n = e.iconName, r = e.children, a = e.attributes, i = e.symbol, o = i === !0 ? "".concat(t, "-").concat(E.cssPrefix, "-").concat(n) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: x(x({}, a), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function Mn(e) {
  var t = e.icons, n = t.main, r = t.mask, a = e.prefix, i = e.iconName, o = e.transform, s = e.symbol, f = e.title, u = e.maskId, c = e.titleId, d = e.extra, y = e.watchable, g = y === void 0 ? !1 : y, S = r.found ? r : n, T = S.width, k = S.height, C = a === "fak", I = [E.replacementClass, i ? "".concat(E.cssPrefix, "-").concat(i) : ""].filter(function(O) {
    return d.classes.indexOf(O) === -1;
  }).filter(function(O) {
    return O !== "" || !!O;
  }).concat(d.classes).join(" "), $ = {
    children: [],
    attributes: x(x({}, d.attributes), {}, {
      "data-prefix": a,
      "data-icon": i,
      class: I,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(T, " ").concat(k)
    })
  }, A = C && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(T / k * 16 * 0.0625, "em")
  } : {};
  g && ($.attributes[Ae] = ""), f && ($.children.push({
    tag: "title",
    attributes: {
      id: $.attributes["aria-labelledby"] || "title-".concat(c || tt())
    },
    children: [f]
  }), delete $.attributes.title);
  var v = x(x({}, $), {}, {
    prefix: a,
    iconName: i,
    main: n,
    mask: r,
    maskId: u,
    transform: o,
    symbol: s,
    styles: x(x({}, A), d.styles)
  }), X = r.found && n.found ? de("generateAbstractMask", v) || {
    children: [],
    attributes: {}
  } : de("generateAbstractIcon", v) || {
    children: [],
    attributes: {}
  }, ne = X.children, l = X.attributes;
  return v.children = ne, v.attributes = l, s ? Li(v) : Mi(v);
}
function tr(e) {
  var t = e.content, n = e.width, r = e.height, a = e.transform, i = e.title, o = e.extra, s = e.watchable, f = s === void 0 ? !1 : s, u = x(x(x({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  f && (u[Ae] = "");
  var c = x({}, o.styles);
  An(a) && (c.transform = ui({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), c["-webkit-transform"] = c.transform);
  var d = Lt(c);
  d.length > 0 && (u.style = d);
  var y = [];
  return y.push({
    tag: "span",
    attributes: u,
    children: [t]
  }), i && y.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), y;
}
function Ni(e) {
  var t = e.content, n = e.title, r = e.extra, a = x(x(x({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), i = Lt(r.styles);
  i.length > 0 && (a.style = i);
  var o = [];
  return o.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
var Ht = oe.styles;
function fn(e) {
  var t = e[0], n = e[1], r = e.slice(4), a = kn(r, 1), i = a[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(E.cssPrefix, "-").concat(Te.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(E.cssPrefix, "-").concat(Te.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(E.cssPrefix, "-").concat(Te.PRIMARY),
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
    height: n,
    icon: o
  };
}
var Ri = {
  found: !1,
  width: 512,
  height: 512
};
function Di(e, t) {
  !Gr && !E.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function ln(e, t) {
  var n = t;
  return t === "fa" && E.styleDefault !== null && (t = xe()), new Promise(function(r, a) {
    if (de("missingIconAbstract"), n === "fa") {
      var i = oa(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && Ht[t] && Ht[t][e]) {
      var o = Ht[t][e];
      return r(fn(o));
    }
    Di(e, t), r(x(x({}, Ri), {}, {
      icon: E.showMissingIcons && e ? de("missingIconAbstract") || {} : {}
    }));
  });
}
var nr = function() {
}, cn = E.measurePerformance && ut && ut.mark && ut.measure ? ut : {
  mark: nr,
  measure: nr
}, qe = 'FA "6.5.1"', Fi = function(t) {
  return cn.mark("".concat(qe, " ").concat(t, " begins")), function() {
    return fa(t);
  };
}, fa = function(t) {
  cn.mark("".concat(qe, " ").concat(t, " ends")), cn.measure("".concat(qe, " ").concat(t), "".concat(qe, " ").concat(t, " begins"), "".concat(qe, " ").concat(t, " ends"));
}, Ln = {
  begin: Fi,
  end: fa
}, Tt = function() {
};
function rr(e) {
  var t = e.getAttribute ? e.getAttribute(Ae) : null;
  return typeof t == "string";
}
function ji(e) {
  var t = e.getAttribute ? e.getAttribute(Tn) : null, n = e.getAttribute ? e.getAttribute($n) : null;
  return t && n;
}
function zi(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(E.replacementClass);
}
function Yi() {
  if (E.autoReplaceSvg === !0)
    return $t.replace;
  var e = $t[E.autoReplaceSvg];
  return e || $t.replace;
}
function Hi(e) {
  return G.createElementNS("http://www.w3.org/2000/svg", e);
}
function Ui(e) {
  return G.createElement(e);
}
function la(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.ceFn, r = n === void 0 ? e.tag === "svg" ? Hi : Ui : n;
  if (typeof e == "string")
    return G.createTextNode(e);
  var a = r(e.tag);
  Object.keys(e.attributes || []).forEach(function(o) {
    a.setAttribute(o, e.attributes[o]);
  });
  var i = e.children || [];
  return i.forEach(function(o) {
    a.appendChild(la(o, {
      ceFn: r
    }));
  }), a;
}
function Ki(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var $t = {
  replace: function(t) {
    var n = t[0];
    if (n.parentNode)
      if (t[1].forEach(function(a) {
        n.parentNode.insertBefore(la(a), n);
      }), n.getAttribute(Ae) === null && E.keepOriginalSource) {
        var r = G.createComment(Ki(n));
        n.parentNode.replaceChild(r, n);
      } else
        n.remove();
  },
  nest: function(t) {
    var n = t[0], r = t[1];
    if (~On(n).indexOf(E.replacementClass))
      return $t.replace(t);
    var a = new RegExp("".concat(E.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var i = r[0].attributes.class.split(" ").reduce(function(s, f) {
        return f === E.replacementClass || f.match(a) ? s.toSvg.push(f) : s.toNode.push(f), s;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", i.toNode.join(" "));
    }
    var o = r.map(function(s) {
      return ot(s);
    }).join(`
`);
    n.setAttribute(Ae, ""), n.innerHTML = o;
  }
};
function ar(e) {
  e();
}
function ca(e, t) {
  var n = typeof t == "function" ? t : Tt;
  if (e.length === 0)
    n();
  else {
    var r = ar;
    E.mutateApproach === Ba && (r = he.requestAnimationFrame || ar), r(function() {
      var a = Yi(), i = Ln.begin("mutate");
      e.map(a), i(), n();
    });
  }
}
var Nn = !1;
function ua() {
  Nn = !0;
}
function un() {
  Nn = !1;
}
var Ct = null;
function ir(e) {
  if (Bn && E.observeMutations) {
    var t = e.treeCallback, n = t === void 0 ? Tt : t, r = e.nodeCallback, a = r === void 0 ? Tt : r, i = e.pseudoElementsCallback, o = i === void 0 ? Tt : i, s = e.observeMutationsRoot, f = s === void 0 ? G : s;
    Ct = new Bn(function(u) {
      if (!Nn) {
        var c = xe();
        Ke(u).forEach(function(d) {
          if (d.type === "childList" && d.addedNodes.length > 0 && !rr(d.addedNodes[0]) && (E.searchPseudoElements && o(d.target), n(d.target)), d.type === "attributes" && d.target.parentNode && E.searchPseudoElements && o(d.target.parentNode), d.type === "attributes" && rr(d.target) && ~ti.indexOf(d.attributeName))
            if (d.attributeName === "class" && ji(d.target)) {
              var y = Rt(On(d.target)), g = y.prefix, S = y.iconName;
              d.target.setAttribute(Tn, g || c), S && d.target.setAttribute($n, S);
            } else
              zi(d.target) && a(d.target);
        });
      }
    }), me && Ct.observe(f, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Wi() {
  Ct && Ct.disconnect();
}
function qi(e) {
  var t = e.getAttribute("style"), n = [];
  return t && (n = t.split(";").reduce(function(r, a) {
    var i = a.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (r[o] = s.join(":").trim()), r;
  }, {})), n;
}
function Gi(e) {
  var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "", a = Rt(On(e));
  return a.prefix || (a.prefix = xe()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Ei(a.prefix, e.innerText) || _n(a.prefix, rn(e.innerText))), !a.iconName && E.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function Bi(e) {
  var t = Ke(e.attributes).reduce(function(a, i) {
    return a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a;
  }, {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return E.autoA11y && (n ? t["aria-labelledby"] = "".concat(E.replacementClass, "-title-").concat(r || tt()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Vi() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: fe,
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
function or(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = Gi(e), r = n.iconName, a = n.prefix, i = n.rest, o = Bi(e), s = on("parseNodeAttributes", {}, e), f = t.styleParser ? qi(e) : [];
  return x({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: fe,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: f,
      attributes: o
    }
  }, s);
}
var Xi = oe.styles;
function da(e) {
  var t = E.autoReplaceSvg === "nest" ? or(e, {
    styleParser: !1
  }) : or(e);
  return ~t.extra.classes.indexOf(Br) ? de("generateLayersText", e, t) : de("generateSvgReplacementMutation", e, t);
}
var we = /* @__PURE__ */ new Set();
Sn.map(function(e) {
  we.add("fa-".concat(e));
});
Object.keys(Je[q]).map(we.add.bind(we));
Object.keys(Je[V]).map(we.add.bind(we));
we = at(we);
function sr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!me)
    return Promise.resolve();
  var n = G.documentElement.classList, r = function(d) {
    return n.add("".concat(Vn, "-").concat(d));
  }, a = function(d) {
    return n.remove("".concat(Vn, "-").concat(d));
  }, i = E.autoFetchSvg ? we : Sn.map(function(c) {
    return "fa-".concat(c);
  }).concat(Object.keys(Xi));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(Br, ":not([").concat(Ae, "])")].concat(i.map(function(c) {
    return ".".concat(c, ":not([").concat(Ae, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = Ke(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  var f = Ln.begin("onTree"), u = s.reduce(function(c, d) {
    try {
      var y = da(d);
      y && c.push(y);
    } catch (g) {
      Gr || g.name === "MissingIcon" && console.error(g);
    }
    return c;
  }, []);
  return new Promise(function(c, d) {
    Promise.all(u).then(function(y) {
      ca(y, function() {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), f(), c();
      });
    }).catch(function(y) {
      f(), d(y);
    });
  });
}
function Ji(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  da(e).then(function(n) {
    n && ca([n], t);
  });
}
function Qi(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : sn(t || {}), a = n.mask;
    return a && (a = (a || {}).icon ? a : sn(a || {})), e(r, x(x({}, n), {}, {
      mask: a
    }));
  };
}
var Zi = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, a = r === void 0 ? fe : r, i = n.symbol, o = i === void 0 ? !1 : i, s = n.mask, f = s === void 0 ? null : s, u = n.maskId, c = u === void 0 ? null : u, d = n.title, y = d === void 0 ? null : d, g = n.titleId, S = g === void 0 ? null : g, T = n.classes, k = T === void 0 ? [] : T, C = n.attributes, I = C === void 0 ? {} : C, $ = n.styles, A = $ === void 0 ? {} : $;
  if (t) {
    var v = t.prefix, X = t.iconName, ne = t.icon;
    return Dt(x({
      type: "icon"
    }, t), function() {
      return Ce("beforeDOMElementCreation", {
        iconDefinition: t,
        params: n
      }), E.autoA11y && (y ? I["aria-labelledby"] = "".concat(E.replacementClass, "-title-").concat(S || tt()) : (I["aria-hidden"] = "true", I.focusable = "false")), Mn({
        icons: {
          main: fn(ne),
          mask: f ? fn(f.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: v,
        iconName: X,
        transform: x(x({}, fe), a),
        symbol: o,
        title: y,
        maskId: c,
        titleId: S,
        extra: {
          attributes: I,
          styles: A,
          classes: k
        }
      });
    });
  }
}, eo = {
  mixout: function() {
    return {
      icon: Qi(Zi)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = sr, n.nodeCallback = Ji, n;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(n) {
      var r = n.node, a = r === void 0 ? G : r, i = n.callback, o = i === void 0 ? function() {
      } : i;
      return sr(a, o);
    }, t.generateSvgReplacementMutation = function(n, r) {
      var a = r.iconName, i = r.title, o = r.titleId, s = r.prefix, f = r.transform, u = r.symbol, c = r.mask, d = r.maskId, y = r.extra;
      return new Promise(function(g, S) {
        Promise.all([ln(a, s), c.iconName ? ln(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(T) {
          var k = kn(T, 2), C = k[0], I = k[1];
          g([n, Mn({
            icons: {
              main: C,
              mask: I
            },
            prefix: s,
            iconName: a,
            transform: f,
            symbol: u,
            maskId: d,
            title: i,
            titleId: o,
            extra: y,
            watchable: !0
          })]);
        }).catch(S);
      });
    }, t.generateAbstractIcon = function(n) {
      var r = n.children, a = n.attributes, i = n.main, o = n.transform, s = n.styles, f = Lt(s);
      f.length > 0 && (a.style = f);
      var u;
      return An(o) && (u = de("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), r.push(u || i.icon), {
        children: r,
        attributes: a
      };
    };
  }
}, to = {
  mixout: function() {
    return {
      layer: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.classes, i = a === void 0 ? [] : a;
        return Dt({
          type: "layer"
        }, function() {
          Ce("beforeDOMElementCreation", {
            assembler: n,
            params: r
          });
          var o = [];
          return n(function(s) {
            Array.isArray(s) ? s.map(function(f) {
              o = o.concat(f.abstract);
            }) : o = o.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(E.cssPrefix, "-layers")].concat(at(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, no = {
  mixout: function() {
    return {
      counter: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.title, i = a === void 0 ? null : a, o = r.classes, s = o === void 0 ? [] : o, f = r.attributes, u = f === void 0 ? {} : f, c = r.styles, d = c === void 0 ? {} : c;
        return Dt({
          type: "counter",
          content: n
        }, function() {
          return Ce("beforeDOMElementCreation", {
            content: n,
            params: r
          }), Ni({
            content: n.toString(),
            title: i,
            extra: {
              attributes: u,
              styles: d,
              classes: ["".concat(E.cssPrefix, "-layers-counter")].concat(at(s))
            }
          });
        });
      }
    };
  }
}, ro = {
  mixout: function() {
    return {
      text: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.transform, i = a === void 0 ? fe : a, o = r.title, s = o === void 0 ? null : o, f = r.classes, u = f === void 0 ? [] : f, c = r.attributes, d = c === void 0 ? {} : c, y = r.styles, g = y === void 0 ? {} : y;
        return Dt({
          type: "text",
          content: n
        }, function() {
          return Ce("beforeDOMElementCreation", {
            content: n,
            params: r
          }), tr({
            content: n,
            transform: x(x({}, fe), i),
            title: s,
            extra: {
              attributes: d,
              styles: g,
              classes: ["".concat(E.cssPrefix, "-layers-text")].concat(at(u))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(n, r) {
      var a = r.title, i = r.transform, o = r.extra, s = null, f = null;
      if (Kr) {
        var u = parseInt(getComputedStyle(n).fontSize, 10), c = n.getBoundingClientRect();
        s = c.width / u, f = c.height / u;
      }
      return E.autoA11y && !a && (o.attributes["aria-hidden"] = "true"), Promise.resolve([n, tr({
        content: n.innerHTML,
        width: s,
        height: f,
        transform: i,
        title: a,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, ao = new RegExp('"', "ug"), fr = [1105920, 1112319];
function io(e) {
  var t = e.replace(ao, ""), n = yi(t, 0), r = n >= fr[0] && n <= fr[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: rn(a ? t[0] : t),
    isSecondary: r || a
  };
}
function lr(e, t) {
  var n = "".concat(Ga).concat(t.replace(":", "-"));
  return new Promise(function(r, a) {
    if (e.getAttribute(n) !== null)
      return r();
    var i = Ke(e.children), o = i.filter(function(ne) {
      return ne.getAttribute(nn) === t;
    })[0], s = he.getComputedStyle(e, t), f = s.getPropertyValue("font-family").match(Qa), u = s.getPropertyValue("font-weight"), c = s.getPropertyValue("content");
    if (o && !f)
      return e.removeChild(o), r();
    if (f && c !== "none" && c !== "") {
      var d = s.getPropertyValue("content"), y = ~["Sharp"].indexOf(f[2]) ? V : q, g = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(f[2]) ? Qe[y][f[2].toLowerCase()] : Za[y][u], S = io(d), T = S.value, k = S.isSecondary, C = f[0].startsWith("FontAwesome"), I = _n(g, T), $ = I;
      if (C) {
        var A = Ti(T);
        A.iconName && A.prefix && (I = A.iconName, g = A.prefix);
      }
      if (I && !k && (!o || o.getAttribute(Tn) !== g || o.getAttribute($n) !== $)) {
        e.setAttribute(n, $), o && e.removeChild(o);
        var v = Vi(), X = v.extra;
        X.attributes[nn] = t, ln(I, g).then(function(ne) {
          var l = Mn(x(x({}, v), {}, {
            icons: {
              main: ne,
              mask: In()
            },
            prefix: g,
            iconName: $,
            extra: X,
            watchable: !0
          })), O = G.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(O, e.firstChild) : e.appendChild(O), O.outerHTML = l.map(function(Z) {
            return ot(Z);
          }).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function oo(e) {
  return Promise.all([lr(e, "::before"), lr(e, "::after")]);
}
function so(e) {
  return e.parentNode !== document.head && !~Va.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(nn) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function cr(e) {
  if (me)
    return new Promise(function(t, n) {
      var r = Ke(e.querySelectorAll("*")).filter(so).map(oo), a = Ln.begin("searchPseudoElements");
      ua(), Promise.all(r).then(function() {
        a(), un(), t();
      }).catch(function() {
        a(), un(), n();
      });
    });
}
var fo = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = cr, n;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(n) {
      var r = n.node, a = r === void 0 ? G : r;
      E.searchPseudoElements && cr(a);
    };
  }
}, ur = !1, lo = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          ua(), ur = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        ir(on("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Wi();
      },
      watch: function(n) {
        var r = n.observeMutationsRoot;
        ur ? un() : ir(on("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, dr = function(t) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(r, a) {
    var i = a.toLowerCase().split("-"), o = i[0], s = i.slice(1).join("-");
    if (o && s === "h")
      return r.flipX = !0, r;
    if (o && s === "v")
      return r.flipY = !0, r;
    if (s = parseFloat(s), isNaN(s))
      return r;
    switch (o) {
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
}, co = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return dr(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-transform");
        return a && (n.transform = dr(a)), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(n) {
      var r = n.main, a = n.transform, i = n.containerWidth, o = n.iconWidth, s = {
        transform: "translate(".concat(i / 2, " 256)")
      }, f = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), u = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), c = "rotate(".concat(a.rotate, " 0 0)"), d = {
        transform: "".concat(f, " ").concat(u, " ").concat(c)
      }, y = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, g = {
        outer: s,
        inner: d,
        path: y
      };
      return {
        tag: "g",
        attributes: x({}, g.outer),
        children: [{
          tag: "g",
          attributes: x({}, g.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: x(x({}, r.icon.attributes), g.path)
          }]
        }]
      };
    };
  }
}, Ut = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function vr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function uo(e) {
  return e.tag === "g" ? e.children : [e];
}
var vo = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-mask"), i = a ? Rt(a.split(" ").map(function(o) {
          return o.trim();
        })) : In();
        return i.prefix || (i.prefix = xe()), n.mask = i, n.maskId = r.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(n) {
      var r = n.children, a = n.attributes, i = n.main, o = n.mask, s = n.maskId, f = n.transform, u = i.width, c = i.icon, d = o.width, y = o.icon, g = ci({
        transform: f,
        containerWidth: d,
        iconWidth: u
      }), S = {
        tag: "rect",
        attributes: x(x({}, Ut), {}, {
          fill: "white"
        })
      }, T = c.children ? {
        children: c.children.map(vr)
      } : {}, k = {
        tag: "g",
        attributes: x({}, g.inner),
        children: [vr(x({
          tag: c.tag,
          attributes: x(x({}, c.attributes), g.path)
        }, T))]
      }, C = {
        tag: "g",
        attributes: x({}, g.outer),
        children: [k]
      }, I = "mask-".concat(s || tt()), $ = "clip-".concat(s || tt()), A = {
        tag: "mask",
        attributes: x(x({}, Ut), {}, {
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
            id: $
          },
          children: uo(y)
        }, A]
      };
      return r.push(v, {
        tag: "rect",
        attributes: x({
          fill: "currentColor",
          "clip-path": "url(#".concat($, ")"),
          mask: "url(#".concat(I, ")")
        }, Ut)
      }), {
        children: r,
        attributes: a
      };
    };
  }
}, mo = {
  provides: function(t) {
    var n = !1;
    he.matchMedia && (n = he.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var r = [], a = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: x(x({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = x(x({}, i), {}, {
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
      return n || s.children.push({
        tag: "animate",
        attributes: x(x({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: x(x({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(s), r.push({
        tag: "path",
        attributes: x(x({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: x(x({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || r.push({
        tag: "path",
        attributes: x(x({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: x(x({}, o), {}, {
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
}, po = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-symbol"), i = a === null ? !1 : a === "" ? !0 : a;
        return n.symbol = i, n;
      }
    };
  }
}, go = [vi, eo, to, no, ro, fo, lo, co, vo, mo, po];
Oi(go, {
  mixoutsTo: re
});
re.noAuto;
re.config;
re.library;
re.dom;
var dn = re.parse;
re.findIconDefinition;
re.toHtml;
var bo = re.icon;
re.layer;
re.text;
re.counter;
function yo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vn = { exports: {} }, xt = { exports: {} }, Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function ho() {
  if (mr)
    return Y;
  mr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
  function $(v) {
    if (typeof v == "object" && v !== null) {
      var X = v.$$typeof;
      switch (X) {
        case t:
          switch (v = v.type, v) {
            case f:
            case u:
            case r:
            case i:
            case a:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case c:
                case S:
                case g:
                case o:
                  return v;
                default:
                  return X;
              }
          }
        case n:
          return X;
      }
    }
  }
  function A(v) {
    return $(v) === u;
  }
  return Y.AsyncMode = f, Y.ConcurrentMode = u, Y.ContextConsumer = s, Y.ContextProvider = o, Y.Element = t, Y.ForwardRef = c, Y.Fragment = r, Y.Lazy = S, Y.Memo = g, Y.Portal = n, Y.Profiler = i, Y.StrictMode = a, Y.Suspense = d, Y.isAsyncMode = function(v) {
    return A(v) || $(v) === f;
  }, Y.isConcurrentMode = A, Y.isContextConsumer = function(v) {
    return $(v) === s;
  }, Y.isContextProvider = function(v) {
    return $(v) === o;
  }, Y.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, Y.isForwardRef = function(v) {
    return $(v) === c;
  }, Y.isFragment = function(v) {
    return $(v) === r;
  }, Y.isLazy = function(v) {
    return $(v) === S;
  }, Y.isMemo = function(v) {
    return $(v) === g;
  }, Y.isPortal = function(v) {
    return $(v) === n;
  }, Y.isProfiler = function(v) {
    return $(v) === i;
  }, Y.isStrictMode = function(v) {
    return $(v) === a;
  }, Y.isSuspense = function(v) {
    return $(v) === d;
  }, Y.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === u || v === i || v === a || v === d || v === y || typeof v == "object" && v !== null && (v.$$typeof === S || v.$$typeof === g || v.$$typeof === o || v.$$typeof === s || v.$$typeof === c || v.$$typeof === k || v.$$typeof === C || v.$$typeof === I || v.$$typeof === T);
  }, Y.typeOf = $, Y;
}
var H = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pr;
function xo() {
  return pr || (pr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function $(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === r || h === u || h === i || h === a || h === d || h === y || typeof h == "object" && h !== null && (h.$$typeof === S || h.$$typeof === g || h.$$typeof === o || h.$$typeof === s || h.$$typeof === c || h.$$typeof === k || h.$$typeof === C || h.$$typeof === I || h.$$typeof === T);
    }
    function A(h) {
      if (typeof h == "object" && h !== null) {
        var se = h.$$typeof;
        switch (se) {
          case t:
            var ct = h.type;
            switch (ct) {
              case f:
              case u:
              case r:
              case i:
              case a:
              case d:
                return ct;
              default:
                var Hn = ct && ct.$$typeof;
                switch (Hn) {
                  case s:
                  case c:
                  case S:
                  case g:
                  case o:
                    return Hn;
                  default:
                    return se;
                }
            }
          case n:
            return se;
        }
      }
    }
    var v = f, X = u, ne = s, l = o, O = t, Z = c, w = r, W = S, m = g, b = n, B = i, ee = a, Ee = d, lt = !1;
    function jt(h) {
      return lt || (lt = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), p(h) || A(h) === f;
    }
    function p(h) {
      return A(h) === u;
    }
    function P(h) {
      return A(h) === s;
    }
    function D(h) {
      return A(h) === o;
    }
    function N(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function _(h) {
      return A(h) === c;
    }
    function F(h) {
      return A(h) === r;
    }
    function M(h) {
      return A(h) === S;
    }
    function R(h) {
      return A(h) === g;
    }
    function j(h) {
      return A(h) === n;
    }
    function U(h) {
      return A(h) === i;
    }
    function z(h) {
      return A(h) === a;
    }
    function te(h) {
      return A(h) === d;
    }
    H.AsyncMode = v, H.ConcurrentMode = X, H.ContextConsumer = ne, H.ContextProvider = l, H.Element = O, H.ForwardRef = Z, H.Fragment = w, H.Lazy = W, H.Memo = m, H.Portal = b, H.Profiler = B, H.StrictMode = ee, H.Suspense = Ee, H.isAsyncMode = jt, H.isConcurrentMode = p, H.isContextConsumer = P, H.isContextProvider = D, H.isElement = N, H.isForwardRef = _, H.isFragment = F, H.isLazy = M, H.isMemo = R, H.isPortal = j, H.isProfiler = U, H.isStrictMode = z, H.isSuspense = te, H.isValidElementType = $, H.typeOf = A;
  }()), H;
}
var gr;
function va() {
  return gr || (gr = 1, process.env.NODE_ENV === "production" ? xt.exports = ho() : xt.exports = xo()), xt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Kt, br;
function wo() {
  if (br)
    return Kt;
  br = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
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
      var f = Object.getOwnPropertyNames(o).map(function(c) {
        return o[c];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        u[c] = c;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Kt = a() ? Object.assign : function(i, o) {
    for (var s, f = r(i), u, c = 1; c < arguments.length; c++) {
      s = Object(arguments[c]);
      for (var d in s)
        t.call(s, d) && (f[d] = s[d]);
      if (e) {
        u = e(s);
        for (var y = 0; y < u.length; y++)
          n.call(s, u[y]) && (f[u[y]] = s[u[y]]);
      }
    }
    return f;
  }, Kt;
}
var Wt, yr;
function Rn() {
  if (yr)
    return Wt;
  yr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Wt = e, Wt;
}
var qt, hr;
function ma() {
  return hr || (hr = 1, qt = Function.call.bind(Object.prototype.hasOwnProperty)), qt;
}
var Gt, xr;
function Po() {
  if (xr)
    return Gt;
  xr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Rn(), n = {}, r = ma();
    e = function(i) {
      var o = "Warning: " + i;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function a(i, o, s, f, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in i)
        if (r(i, c)) {
          var d;
          try {
            if (typeof i[c] != "function") {
              var y = Error(
                (f || "React class") + ": " + s + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            d = i[c](o, c, f, s, null, t);
          } catch (S) {
            d = S;
          }
          if (d && !(d instanceof Error) && e(
            (f || "React class") + ": type specification of " + s + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var g = u ? u() : "";
            e(
              "Failed " + s + " type: " + d.message + (g ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Gt = a, Gt;
}
var Bt, wr;
function ko() {
  if (wr)
    return Bt;
  wr = 1;
  var e = va(), t = wo(), n = Rn(), r = ma(), a = Po(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var f = "Warning: " + s;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Bt = function(s, f) {
    var u = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function d(p) {
      var P = p && (u && p[u] || p[c]);
      if (typeof P == "function")
        return P;
    }
    var y = "<<anonymous>>", g = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: I(),
      arrayOf: $,
      element: A(),
      elementType: v(),
      instanceOf: X,
      node: Z(),
      objectOf: l,
      oneOf: ne,
      oneOfType: O,
      shape: W,
      exact: m
    };
    function S(p, P) {
      return p === P ? p !== 0 || 1 / p === 1 / P : p !== p && P !== P;
    }
    function T(p, P) {
      this.message = p, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    T.prototype = Error.prototype;
    function k(p) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, D = 0;
      function N(F, M, R, j, U, z, te) {
        if (j = j || y, z = z || R, te !== n) {
          if (f) {
            var h = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw h.name = "Invariant Violation", h;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = j + ":" + R;
            !P[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            D < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + z + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[se] = !0, D++);
          }
        }
        return M[R] == null ? F ? M[R] === null ? new T("The " + U + " `" + z + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new T("The " + U + " `" + z + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : p(M, R, j, U, z);
      }
      var _ = N.bind(null, !1);
      return _.isRequired = N.bind(null, !0), _;
    }
    function C(p) {
      function P(D, N, _, F, M, R) {
        var j = D[N], U = ee(j);
        if (U !== p) {
          var z = Ee(j);
          return new T(
            "Invalid " + F + " `" + M + "` of type " + ("`" + z + "` supplied to `" + _ + "`, expected ") + ("`" + p + "`."),
            { expectedType: p }
          );
        }
        return null;
      }
      return k(P);
    }
    function I() {
      return k(o);
    }
    function $(p) {
      function P(D, N, _, F, M) {
        if (typeof p != "function")
          return new T("Property `" + M + "` of component `" + _ + "` has invalid PropType notation inside arrayOf.");
        var R = D[N];
        if (!Array.isArray(R)) {
          var j = ee(R);
          return new T("Invalid " + F + " `" + M + "` of type " + ("`" + j + "` supplied to `" + _ + "`, expected an array."));
        }
        for (var U = 0; U < R.length; U++) {
          var z = p(R, U, _, F, M + "[" + U + "]", n);
          if (z instanceof Error)
            return z;
        }
        return null;
      }
      return k(P);
    }
    function A() {
      function p(P, D, N, _, F) {
        var M = P[D];
        if (!s(M)) {
          var R = ee(M);
          return new T("Invalid " + _ + " `" + F + "` of type " + ("`" + R + "` supplied to `" + N + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(p);
    }
    function v() {
      function p(P, D, N, _, F) {
        var M = P[D];
        if (!e.isValidElementType(M)) {
          var R = ee(M);
          return new T("Invalid " + _ + " `" + F + "` of type " + ("`" + R + "` supplied to `" + N + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(p);
    }
    function X(p) {
      function P(D, N, _, F, M) {
        if (!(D[N] instanceof p)) {
          var R = p.name || y, j = jt(D[N]);
          return new T("Invalid " + F + " `" + M + "` of type " + ("`" + j + "` supplied to `" + _ + "`, expected ") + ("instance of `" + R + "`."));
        }
        return null;
      }
      return k(P);
    }
    function ne(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function P(D, N, _, F, M) {
        for (var R = D[N], j = 0; j < p.length; j++)
          if (S(R, p[j]))
            return null;
        var U = JSON.stringify(p, function(te, h) {
          var se = Ee(h);
          return se === "symbol" ? String(h) : h;
        });
        return new T("Invalid " + F + " `" + M + "` of value `" + String(R) + "` " + ("supplied to `" + _ + "`, expected one of " + U + "."));
      }
      return k(P);
    }
    function l(p) {
      function P(D, N, _, F, M) {
        if (typeof p != "function")
          return new T("Property `" + M + "` of component `" + _ + "` has invalid PropType notation inside objectOf.");
        var R = D[N], j = ee(R);
        if (j !== "object")
          return new T("Invalid " + F + " `" + M + "` of type " + ("`" + j + "` supplied to `" + _ + "`, expected an object."));
        for (var U in R)
          if (r(R, U)) {
            var z = p(R, U, _, F, M + "." + U, n);
            if (z instanceof Error)
              return z;
          }
        return null;
      }
      return k(P);
    }
    function O(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var P = 0; P < p.length; P++) {
        var D = p[P];
        if (typeof D != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + lt(D) + " at index " + P + "."
          ), o;
      }
      function N(_, F, M, R, j) {
        for (var U = [], z = 0; z < p.length; z++) {
          var te = p[z], h = te(_, F, M, R, j, n);
          if (h == null)
            return null;
          h.data && r(h.data, "expectedType") && U.push(h.data.expectedType);
        }
        var se = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new T("Invalid " + R + " `" + j + "` supplied to " + ("`" + M + "`" + se + "."));
      }
      return k(N);
    }
    function Z() {
      function p(P, D, N, _, F) {
        return b(P[D]) ? null : new T("Invalid " + _ + " `" + F + "` supplied to " + ("`" + N + "`, expected a ReactNode."));
      }
      return k(p);
    }
    function w(p, P, D, N, _) {
      return new T(
        (p || "React class") + ": " + P + " type `" + D + "." + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _ + "`."
      );
    }
    function W(p) {
      function P(D, N, _, F, M) {
        var R = D[N], j = ee(R);
        if (j !== "object")
          return new T("Invalid " + F + " `" + M + "` of type `" + j + "` " + ("supplied to `" + _ + "`, expected `object`."));
        for (var U in p) {
          var z = p[U];
          if (typeof z != "function")
            return w(_, F, M, U, Ee(z));
          var te = z(R, U, _, F, M + "." + U, n);
          if (te)
            return te;
        }
        return null;
      }
      return k(P);
    }
    function m(p) {
      function P(D, N, _, F, M) {
        var R = D[N], j = ee(R);
        if (j !== "object")
          return new T("Invalid " + F + " `" + M + "` of type `" + j + "` " + ("supplied to `" + _ + "`, expected `object`."));
        var U = t({}, D[N], p);
        for (var z in U) {
          var te = p[z];
          if (r(p, z) && typeof te != "function")
            return w(_, F, M, z, Ee(te));
          if (!te)
            return new T(
              "Invalid " + F + " `" + M + "` key `" + z + "` supplied to `" + _ + "`.\nBad object: " + JSON.stringify(D[N], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(p), null, "  ")
            );
          var h = te(R, z, _, F, M + "." + z, n);
          if (h)
            return h;
        }
        return null;
      }
      return k(P);
    }
    function b(p) {
      switch (typeof p) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !p;
        case "object":
          if (Array.isArray(p))
            return p.every(b);
          if (p === null || s(p))
            return !0;
          var P = d(p);
          if (P) {
            var D = P.call(p), N;
            if (P !== p.entries) {
              for (; !(N = D.next()).done; )
                if (!b(N.value))
                  return !1;
            } else
              for (; !(N = D.next()).done; ) {
                var _ = N.value;
                if (_ && !b(_[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function B(p, P) {
      return p === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function ee(p) {
      var P = typeof p;
      return Array.isArray(p) ? "array" : p instanceof RegExp ? "object" : B(P, p) ? "symbol" : P;
    }
    function Ee(p) {
      if (typeof p > "u" || p === null)
        return "" + p;
      var P = ee(p);
      if (P === "object") {
        if (p instanceof Date)
          return "date";
        if (p instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function lt(p) {
      var P = Ee(p);
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
    function jt(p) {
      return !p.constructor || !p.constructor.name ? y : p.constructor.name;
    }
    return g.checkPropTypes = a, g.resetWarningCache = a.resetWarningCache, g.PropTypes = g, g;
  }, Bt;
}
var Vt, Pr;
function Eo() {
  if (Pr)
    return Vt;
  Pr = 1;
  var e = Rn();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Vt = function() {
    function r(o, s, f, u, c, d) {
      if (d !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var i = {
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
    return i.PropTypes = i, i;
  }, Vt;
}
if (process.env.NODE_ENV !== "production") {
  var To = va(), $o = !0;
  vn.exports = ko()(To.isElement, $o);
} else
  vn.exports = Eo()();
var So = vn.exports;
const L = /* @__PURE__ */ yo(So);
function kr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kr(Object(n), !0).forEach(function(r) {
      De(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kr(Object(n)).forEach(function(r) {
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
function De(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Oo(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Ao(e, t) {
  if (e == null)
    return {};
  var n = Oo(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function mn(e) {
  return Co(e) || _o(e) || Io(e) || Mo();
}
function Co(e) {
  if (Array.isArray(e))
    return pn(e);
}
function _o(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Io(e, t) {
  if (e) {
    if (typeof e == "string")
      return pn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return pn(e, t);
  }
}
function pn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Mo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lo(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, i = e.bounce, o = e.shake, s = e.flash, f = e.spin, u = e.spinPulse, c = e.spinReverse, d = e.pulse, y = e.fixedWidth, g = e.inverse, S = e.border, T = e.listItem, k = e.flip, C = e.size, I = e.rotation, $ = e.pull, A = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": i,
    "fa-shake": o,
    "fa-flash": s,
    "fa-spin": f,
    "fa-spin-reverse": c,
    "fa-spin-pulse": u,
    "fa-pulse": d,
    "fa-fw": y,
    "fa-inverse": g,
    "fa-border": S,
    "fa-li": T,
    "fa-flip": k === !0,
    "fa-flip-horizontal": k === "horizontal" || k === "both",
    "fa-flip-vertical": k === "vertical" || k === "both"
  }, De(t, "fa-".concat(C), typeof C < "u" && C !== null), De(t, "fa-rotate-".concat(I), typeof I < "u" && I !== null && I !== 0), De(t, "fa-pull-".concat($), typeof $ < "u" && $ !== null), De(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(A).map(function(v) {
    return A[v] ? v : null;
  }).filter(function(v) {
    return v;
  });
}
function No(e) {
  return e = e - 0, e === e;
}
function pa(e) {
  return No(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Ro = ["style"];
function Do(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Fo(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = pa(n.slice(0, r)), i = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[Do(a)] = i : t[a] = i, t;
  }, {});
}
function ga(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(f) {
    return ga(e, f);
  }), a = Object.keys(t.attributes || {}).reduce(function(f, u) {
    var c = t.attributes[u];
    switch (u) {
      case "class":
        f.attrs.className = c, delete t.attributes.class;
        break;
      case "style":
        f.attrs.style = Fo(c);
        break;
      default:
        u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? f.attrs[u.toLowerCase()] = c : f.attrs[pa(u)] = c;
    }
    return f;
  }, {
    attrs: {}
  }), i = n.style, o = i === void 0 ? {} : i, s = Ao(n, Ro);
  return a.attrs.style = ye(ye({}, a.attrs.style), o), e.apply(void 0, [t.tag, ye(ye({}, a.attrs), s)].concat(mn(r)));
}
var ba = !1;
try {
  ba = process.env.NODE_ENV === "production";
} catch {
}
function jo() {
  if (!ba && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Er(e) {
  if (e && _t(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (dn.icon)
    return dn.icon(e);
  if (e === null)
    return null;
  if (e && _t(e) === "object" && e.prefix && e.iconName)
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
function Xt(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? De({}, e, t) : {};
}
var Pe = /* @__PURE__ */ rt.forwardRef(function(e, t) {
  var n = e.icon, r = e.mask, a = e.symbol, i = e.className, o = e.title, s = e.titleId, f = e.maskId, u = Er(n), c = Xt("classes", [].concat(mn(Lo(e)), mn(i.split(" ")))), d = Xt("transform", typeof e.transform == "string" ? dn.transform(e.transform) : e.transform), y = Xt("mask", Er(r)), g = bo(u, ye(ye(ye(ye({}, c), d), y), {}, {
    symbol: a,
    title: o,
    titleId: s,
    maskId: f
  }));
  if (!g)
    return jo("Could not find icon", u), null;
  var S = g.abstract, T = {
    ref: t
  };
  return Object.keys(e).forEach(function(k) {
    Pe.defaultProps.hasOwnProperty(k) || (T[k] = e[k]);
  }), zo(S[0], T);
});
Pe.displayName = "FontAwesomeIcon";
Pe.propTypes = {
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
Pe.defaultProps = {
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
var zo = ga.bind(null, rt.createElement);
const Ys = ({ children: e, className: t, ...n }) => /* @__PURE__ */ ve("h1", { ...n, className: Q("text-ev-primary text-6xl", t), children: [
  /* @__PURE__ */ K("span", { children: e }),
  n.id && /* @__PURE__ */ K(We, { id: n.id })
] }), Hs = ({ children: e, className: t, ...n }) => /* @__PURE__ */ ve("h2", { ...n, className: Q("text-ev-primary text-5xl", t), children: [
  /* @__PURE__ */ K("span", { children: e }),
  n.id && /* @__PURE__ */ K(We, { id: n.id })
] }), Us = ({ children: e, className: t, ...n }) => /* @__PURE__ */ ve("h3", { ...n, className: Q("text-ev-primary text-4xl", t), children: [
  /* @__PURE__ */ K("span", { children: e }),
  n.id && /* @__PURE__ */ K(We, { id: n.id })
] }), Ks = ({ children: e, className: t, ...n }) => /* @__PURE__ */ ve("h4", { ...n, className: Q("text-ev-primary text-3xl", t), children: [
  /* @__PURE__ */ K("span", { children: e }),
  n.id && /* @__PURE__ */ K(We, { id: n.id })
] }), Ws = ({ children: e, className: t, ...n }) => /* @__PURE__ */ ve("h1", { ...n, className: Q("text-ev-primary text-2xl", t), children: [
  /* @__PURE__ */ K("span", { children: e }),
  n.id && /* @__PURE__ */ K(We, { id: n.id })
] }), qs = ({ children: e, className: t, ...n }) => /* @__PURE__ */ ve("h6", { ...n, className: Q("text-ev-primary text-xl", t), children: [
  /* @__PURE__ */ K("span", { children: e }),
  n.id && /* @__PURE__ */ K(We, { id: n.id })
] }), Gs = ({ children: e, className: t, ...n }) => /* @__PURE__ */ K(
  "p",
  {
    ...n,
    className: Q(
      "text-ev-dark dark:text-ev-light text-base",
      t
    ),
    children: e
  }
), Bs = ({ children: e, className: t, ...n }) => (console.log({ className: t }), /* @__PURE__ */ K(
  "strong",
  {
    ...n,
    className: Q(
      "text-ev-dark dark:text-ev-light text-base font-bold",
      t
    ),
    children: e
  }
)), Vs = ({ children: e, className: t, ...n }) => /* @__PURE__ */ K(
  "code",
  {
    ...n,
    className: Q(
      "px-1 text-ev-dark bg-ev-light-harder dark:text-ev-light  dark:bg-ev-dark-harder text-base rounded-md",
      t
    ),
    children: e
  }
), Xs = ({ children: e, className: t, ...n }) => /* @__PURE__ */ K(
  "pre",
  {
    ...n,
    className: Q(
      "bg-ev-light-hard py-2 px-4 rounded-lg *:bg-inherit",
      t
    ),
    children: e
  }
), Js = ({ children: e, className: t, ...n }) => /* @__PURE__ */ K("ul", { ...n, className: Q("pl-4 list-disc", t), children: e }), Qs = ({ children: e, className: t, ...n }) => /* @__PURE__ */ K("ol", { ...n, className: Q("pl-2 list-decimal", t), children: e }), Zs = ({ className: e, ...t }) => /* @__PURE__ */ K(
  "img",
  {
    ...t,
    loading: "lazy",
    className: Q("rounded-lg", e)
  }
), ef = ({
  children: e,
  className: t,
  variant: n = "default",
  ...r
}) => /* @__PURE__ */ K(
  "blockquote",
  {
    ...r,
    className: Q(
      "text-ev-dark dark:text-ev-light text-base border-l-4 border-ev-primary pl-4 italic",
      t
    ),
    children: /* @__PURE__ */ ve("p", { className: "inline", children: [
      n === "default" && /* @__PURE__ */ K(
        Pe,
        {
          icon: Da,
          className: "mr-2 text-ev-primary"
        }
      ),
      e,
      n === "default" && /* @__PURE__ */ K(
        Pe,
        {
          icon: Ra,
          className: "ml-2 text-ev-primary"
        }
      )
    ] })
  }
), tf = ({ className: e, children: t, ...n }) => /* @__PURE__ */ ve("a", { ...n, className: Q("", e), children: [
  /* @__PURE__ */ K(Pe, { icon: jr, className: "mr-2" }),
  t
] }), We = ({ id: e }) => /* @__PURE__ */ K("a", { href: `#${e}`, className: "px-2 text-ev-primary/50 hover:text-ev-primary", children: "#" });
function ya(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++)
        e[t] && (n = ya(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function Yo() {
  for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)
    (e = arguments[n]) && (t = ya(e)) && (r && (r += " "), r += t);
  return r;
}
const Dn = typeof document < "u" ? rt.useLayoutEffect : () => {
};
function Me(e) {
  const t = Ue(null);
  return Dn(() => {
    t.current = e;
  }, [
    e
  ]), Oe((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
let Tr = /* @__PURE__ */ new Map();
function Ho(e, t) {
  if (e === t)
    return e;
  let n = Tr.get(e);
  if (n)
    return n(t), t;
  let r = Tr.get(t);
  return r ? (r(e), e) : t;
}
function ha(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const ie = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, Ye = (e) => e && "window" in e && e.window === e ? e : ie(e).defaultView || window;
function ke(...e) {
  let t = {
    ...e[0]
  };
  for (let n = 1; n < e.length; n++) {
    let r = e[n];
    for (let a in r) {
      let i = t[a], o = r[a];
      typeof i == "function" && typeof o == "function" && // This is a lot faster than a regex.
      a[0] === "o" && a[1] === "n" && a.charCodeAt(2) >= /* 'A' */
      65 && a.charCodeAt(2) <= /* 'Z' */
      90 ? t[a] = ha(i, o) : (a === "className" || a === "UNSAFE_className") && typeof i == "string" && typeof o == "string" ? t[a] = Yo(i, o) : a === "id" && i && o ? t.id = Ho(i, o) : t[a] = o !== void 0 ? o : i;
    }
  }
  return t;
}
const Uo = /* @__PURE__ */ new Set([
  "id"
]), Ko = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Wo = /* @__PURE__ */ new Set([
  "href",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), qo = /^(data-.*)$/;
function st(e, t = {}) {
  let { labelable: n, isLink: r, propNames: a } = t, i = {};
  for (const o in e)
    Object.prototype.hasOwnProperty.call(e, o) && (Uo.has(o) || n && Ko.has(o) || r && Wo.has(o) || a != null && a.has(o) || qo.test(o)) && (i[o] = e[o]);
  return i;
}
function Se(e) {
  if (Go())
    e.focus({
      preventScroll: !0
    });
  else {
    let t = Bo(e);
    e.focus(), Vo(t);
  }
}
let wt = null;
function Go() {
  if (wt == null) {
    wt = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return wt = !0, !0;
        }
      });
    } catch {
    }
  }
  return wt;
}
function Bo(e) {
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
function Vo(e) {
  for (let { element: t, scrollTop: n, scrollLeft: r } of e)
    t.scrollTop = n, t.scrollLeft = r;
}
function Ft(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function Fn(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function nt() {
  return Fn(/^Mac/i);
}
function Xo() {
  return Fn(/^iPhone/i);
}
function xa() {
  return Fn(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  nt() && navigator.maxTouchPoints > 1;
}
function wa() {
  return Xo() || xa();
}
function Jo() {
  return Ft(/AppleWebKit/i) && !Qo();
}
function Qo() {
  return Ft(/Chrome/i);
}
function Pa() {
  return Ft(/Android/i);
}
function Zo() {
  return Ft(/Firefox/i);
}
const es = /* @__PURE__ */ Na({
  isNative: !0,
  open: as
});
function ts() {
  return wn(es);
}
function ns(e, t) {
  let n = e.getAttribute("target");
  return (!n || n === "_self") && e.origin === location.origin && !e.hasAttribute("download") && !t.metaKey && // open in new tab (mac)
  !t.ctrlKey && // open in new tab (windows)
  !t.altKey && // download
  !t.shiftKey;
}
function He(e, t, n = !0) {
  var r, a;
  let { metaKey: i, ctrlKey: o, altKey: s, shiftKey: f } = t;
  Zo() && (!((a = window.event) === null || a === void 0 || (r = a.type) === null || r === void 0) && r.startsWith("key")) && e.target === "_blank" && (nt() ? i = !0 : o = !0);
  let u = Jo() && nt() && !xa() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: i,
    ctrlKey: o,
    altKey: s,
    shiftKey: f
  }) : new MouseEvent("click", {
    metaKey: i,
    ctrlKey: o,
    altKey: s,
    shiftKey: f,
    bubbles: !0,
    cancelable: !0
  });
  He.isOpening = n, Se(e), e.dispatchEvent(u), He.isOpening = !1;
}
He.isOpening = !1;
function rs(e, t) {
  if (e instanceof HTMLAnchorElement)
    t(e);
  else if (e.hasAttribute("data-href")) {
    let n = document.createElement("a");
    n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n);
  }
}
function as(e, t) {
  rs(e, (n) => He(n, t));
}
let Le = /* @__PURE__ */ new Map(), gn = /* @__PURE__ */ new Set();
function $r() {
  if (typeof window > "u")
    return;
  function e(r) {
    return "propertyName" in r;
  }
  let t = (r) => {
    if (!e(r) || !r.target)
      return;
    let a = Le.get(r.target);
    a || (a = /* @__PURE__ */ new Set(), Le.set(r.target, a), r.target.addEventListener("transitioncancel", n, {
      once: !0
    })), a.add(r.propertyName);
  }, n = (r) => {
    if (!e(r) || !r.target)
      return;
    let a = Le.get(r.target);
    if (a && (a.delete(r.propertyName), a.size === 0 && (r.target.removeEventListener("transitioncancel", n), Le.delete(r.target)), Le.size === 0)) {
      for (let i of gn)
        i();
      gn.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState !== "loading" ? $r() : document.addEventListener("DOMContentLoaded", $r));
function ka(e) {
  requestAnimationFrame(() => {
    Le.size === 0 ? e() : gn.add(e);
  });
}
function is() {
  let e = Ue(/* @__PURE__ */ new Map()), t = Oe((a, i, o, s) => {
    let f = s != null && s.once ? (...u) => {
      e.current.delete(o), o(...u);
    } : o;
    e.current.set(o, {
      type: i,
      eventTarget: a,
      fn: f,
      options: s
    }), a.addEventListener(i, o, s);
  }, []), n = Oe((a, i, o, s) => {
    var f;
    let u = ((f = e.current.get(o)) === null || f === void 0 ? void 0 : f.fn) || o;
    a.removeEventListener(i, u, s), e.current.delete(o);
  }, []), r = Oe(() => {
    e.current.forEach((a, i) => {
      n(a.eventTarget, a.type, i, a.options);
    });
  }, [
    n
  ]);
  return Xe(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function Ea(e, t) {
  Dn(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function bn(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Pa() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function os(e) {
  return !Pa() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
function ss(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Ta(e, t, n) {
  if (!t.has(e))
    throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function fs(e, t) {
  var n = Ta(e, t, "get");
  return ss(e, n);
}
function ls(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function cs(e, t, n) {
  ls(e, t), t.set(e, n);
}
function us(e, t, n) {
  if (t.set)
    t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function Sr(e, t, n) {
  var r = Ta(e, t, "set");
  return us(e, r, n), n;
}
let Fe = "default", yn = "", St = /* @__PURE__ */ new WeakMap();
function Or(e) {
  if (wa()) {
    if (Fe === "default") {
      const t = ie(e);
      yn = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    Fe = "disabled";
  } else
    (e instanceof HTMLElement || e instanceof SVGElement) && (St.set(e, e.style.userSelect), e.style.userSelect = "none");
}
function Pt(e) {
  if (wa()) {
    if (Fe !== "disabled")
      return;
    Fe = "restoring", setTimeout(() => {
      ka(() => {
        if (Fe === "restoring") {
          const t = ie(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = yn || ""), yn = "", Fe = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && St.has(e)) {
    let t = St.get(e);
    e.style.userSelect === "none" && (e.style.userSelect = t), e.getAttribute("style") === "" && e.removeAttribute("style"), St.delete(e);
  }
}
const $a = rt.createContext({
  register: () => {
  }
});
$a.displayName = "PressResponderContext";
function ds(e) {
  let t = wn($a);
  if (t) {
    let { register: n, ...r } = t;
    e = ke(r, e), n();
  }
  return Ea(t, e.ref), e;
}
var kt = /* @__PURE__ */ new WeakMap();
class Et {
  continuePropagation() {
    Sr(this, kt, !1);
  }
  get shouldStopPropagation() {
    return fs(this, kt);
  }
  constructor(t, n, r) {
    cs(this, kt, {
      writable: !0,
      value: void 0
    }), Sr(this, kt, !0), this.type = t, this.pointerType = n, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey;
  }
}
const Ar = Symbol("linkClicked");
function Sa(e) {
  let {
    onPress: t,
    onPressChange: n,
    onPressStart: r,
    onPressEnd: a,
    onPressUp: i,
    isDisabled: o,
    isPressed: s,
    preventFocusOnPress: f,
    shouldCancelOnPointerExit: u,
    allowTextSelectionOnPress: c,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: d,
    ...y
  } = ds(e), [g, S] = Dr(!1), T = Ue({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    ignoreClickAfterPress: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null
  }), { addGlobalListener: k, removeAllGlobalListeners: C } = is(), I = Me((l, O) => {
    let Z = T.current;
    if (o || Z.didFirePressStart)
      return !1;
    let w = !0;
    if (Z.isTriggeringEvent = !0, r) {
      let W = new Et("pressstart", O, l);
      r(W), w = W.shouldStopPropagation;
    }
    return n && n(!0), Z.isTriggeringEvent = !1, Z.didFirePressStart = !0, S(!0), w;
  }), $ = Me((l, O, Z = !0) => {
    let w = T.current;
    if (!w.didFirePressStart)
      return !1;
    w.ignoreClickAfterPress = !0, w.didFirePressStart = !1, w.isTriggeringEvent = !0;
    let W = !0;
    if (a) {
      let m = new Et("pressend", O, l);
      a(m), W = m.shouldStopPropagation;
    }
    if (n && n(!1), S(!1), t && Z && !o) {
      let m = new Et("press", O, l);
      t(m), W && (W = m.shouldStopPropagation);
    }
    return w.isTriggeringEvent = !1, W;
  }), A = Me((l, O) => {
    let Z = T.current;
    if (o)
      return !1;
    if (i) {
      Z.isTriggeringEvent = !0;
      let w = new Et("pressup", O, l);
      return i(w), Z.isTriggeringEvent = !1, w.shouldStopPropagation;
    }
    return !0;
  }), v = Me((l) => {
    let O = T.current;
    O.isPressed && O.target && (O.isOverTarget && O.pointerType != null && $(le(O.target, l), O.pointerType, !1), O.isPressed = !1, O.isOverTarget = !1, O.activePointerId = null, O.pointerType = null, C(), c || Pt(O.target));
  }), X = Me((l) => {
    u && v(l);
  }), ne = Fr(() => {
    let l = T.current, O = {
      onKeyDown(w) {
        if (Jt(w.nativeEvent, w.currentTarget) && w.currentTarget.contains(w.target)) {
          var W;
          _r(w.target, w.key) && w.preventDefault();
          let m = !0;
          if (!l.isPressed && !w.repeat) {
            l.target = w.currentTarget, l.isPressed = !0, m = I(w, "keyboard");
            let b = w.currentTarget, B = (ee) => {
              Jt(ee, b) && !ee.repeat && b.contains(ee.target) && l.target && A(le(l.target, ee), "keyboard");
            };
            k(ie(w.currentTarget), "keyup", ha(B, Z), !0);
          }
          m && w.stopPropagation(), w.metaKey && nt() && ((W = l.metaKeyEvents) === null || W === void 0 || W.set(w.key, w.nativeEvent));
        } else
          w.key === "Meta" && (l.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(w) {
        if (!(w && !w.currentTarget.contains(w.target)) && w && w.button === 0 && !l.isTriggeringEvent && !He.isOpening) {
          let W = !0;
          if (o && w.preventDefault(), !l.ignoreClickAfterPress && !l.ignoreEmulatedMouseEvents && !l.isPressed && (l.pointerType === "virtual" || bn(w.nativeEvent))) {
            !o && !f && Se(w.currentTarget);
            let m = I(w, "virtual"), b = A(w, "virtual"), B = $(w, "virtual");
            W = m && b && B;
          }
          l.ignoreEmulatedMouseEvents = !1, l.ignoreClickAfterPress = !1, W && w.stopPropagation();
        }
      }
    }, Z = (w) => {
      var W;
      if (l.isPressed && l.target && Jt(w, l.target)) {
        var m;
        _r(w.target, w.key) && w.preventDefault();
        let B = w.target;
        $(le(l.target, w), "keyboard", l.target.contains(B)), C(), w.key !== "Enter" && jn(l.target) && l.target.contains(B) && !w[Ar] && (w[Ar] = !0, He(l.target, w, !1)), l.isPressed = !1, (m = l.metaKeyEvents) === null || m === void 0 || m.delete(w.key);
      } else if (w.key === "Meta" && (!((W = l.metaKeyEvents) === null || W === void 0) && W.size)) {
        var b;
        let B = l.metaKeyEvents;
        l.metaKeyEvents = void 0;
        for (let ee of B.values())
          (b = l.target) === null || b === void 0 || b.dispatchEvent(new KeyboardEvent("keyup", ee));
      }
    };
    if (typeof PointerEvent < "u") {
      O.onPointerDown = (b) => {
        if (b.button !== 0 || !b.currentTarget.contains(b.target))
          return;
        if (os(b.nativeEvent)) {
          l.pointerType = "virtual";
          return;
        }
        Qt(b.currentTarget) && b.preventDefault(), l.pointerType = b.pointerType;
        let B = !0;
        l.isPressed || (l.isPressed = !0, l.isOverTarget = !0, l.activePointerId = b.pointerId, l.target = b.currentTarget, !o && !f && Se(b.currentTarget), c || Or(l.target), B = I(b, l.pointerType), k(ie(b.currentTarget), "pointermove", w, !1), k(ie(b.currentTarget), "pointerup", W, !1), k(ie(b.currentTarget), "pointercancel", m, !1)), B && b.stopPropagation();
      }, O.onMouseDown = (b) => {
        b.currentTarget.contains(b.target) && b.button === 0 && (Qt(b.currentTarget) && b.preventDefault(), b.stopPropagation());
      }, O.onPointerUp = (b) => {
        !b.currentTarget.contains(b.target) || l.pointerType === "virtual" || b.button === 0 && Ie(b, b.currentTarget) && A(b, l.pointerType || b.pointerType);
      };
      let w = (b) => {
        b.pointerId === l.activePointerId && (l.target && Ie(b, l.target) ? !l.isOverTarget && l.pointerType != null && (l.isOverTarget = !0, I(le(l.target, b), l.pointerType)) : l.target && l.isOverTarget && l.pointerType != null && (l.isOverTarget = !1, $(le(l.target, b), l.pointerType, !1), X(b)));
      }, W = (b) => {
        b.pointerId === l.activePointerId && l.isPressed && b.button === 0 && l.target && (Ie(b, l.target) && l.pointerType != null ? $(le(l.target, b), l.pointerType) : l.isOverTarget && l.pointerType != null && $(le(l.target, b), l.pointerType, !1), l.isPressed = !1, l.isOverTarget = !1, l.activePointerId = null, l.pointerType = null, C(), c || Pt(l.target));
      }, m = (b) => {
        v(b);
      };
      O.onDragStart = (b) => {
        b.currentTarget.contains(b.target) && v(b);
      };
    } else {
      O.onMouseDown = (m) => {
        if (m.button !== 0 || !m.currentTarget.contains(m.target))
          return;
        if (Qt(m.currentTarget) && m.preventDefault(), l.ignoreEmulatedMouseEvents) {
          m.stopPropagation();
          return;
        }
        l.isPressed = !0, l.isOverTarget = !0, l.target = m.currentTarget, l.pointerType = bn(m.nativeEvent) ? "virtual" : "mouse", !o && !f && Se(m.currentTarget), I(m, l.pointerType) && m.stopPropagation(), k(ie(m.currentTarget), "mouseup", w, !1);
      }, O.onMouseEnter = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        let b = !0;
        l.isPressed && !l.ignoreEmulatedMouseEvents && l.pointerType != null && (l.isOverTarget = !0, b = I(m, l.pointerType)), b && m.stopPropagation();
      }, O.onMouseLeave = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        let b = !0;
        l.isPressed && !l.ignoreEmulatedMouseEvents && l.pointerType != null && (l.isOverTarget = !1, b = $(m, l.pointerType, !1), X(m)), b && m.stopPropagation();
      }, O.onMouseUp = (m) => {
        m.currentTarget.contains(m.target) && !l.ignoreEmulatedMouseEvents && m.button === 0 && A(m, l.pointerType || "mouse");
      };
      let w = (m) => {
        if (m.button === 0) {
          if (l.isPressed = !1, C(), l.ignoreEmulatedMouseEvents) {
            l.ignoreEmulatedMouseEvents = !1;
            return;
          }
          l.target && Ie(m, l.target) && l.pointerType != null ? $(le(l.target, m), l.pointerType) : l.target && l.isOverTarget && l.pointerType != null && $(le(l.target, m), l.pointerType, !1), l.isOverTarget = !1;
        }
      };
      O.onTouchStart = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        let b = vs(m.nativeEvent);
        if (!b)
          return;
        l.activePointerId = b.identifier, l.ignoreEmulatedMouseEvents = !0, l.isOverTarget = !0, l.isPressed = !0, l.target = m.currentTarget, l.pointerType = "touch", !o && !f && Se(m.currentTarget), c || Or(l.target), I(m, l.pointerType) && m.stopPropagation(), k(Ye(m.currentTarget), "scroll", W, !0);
      }, O.onTouchMove = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        if (!l.isPressed) {
          m.stopPropagation();
          return;
        }
        let b = Cr(m.nativeEvent, l.activePointerId), B = !0;
        b && Ie(b, m.currentTarget) ? !l.isOverTarget && l.pointerType != null && (l.isOverTarget = !0, B = I(m, l.pointerType)) : l.isOverTarget && l.pointerType != null && (l.isOverTarget = !1, B = $(m, l.pointerType, !1), X(m)), B && m.stopPropagation();
      }, O.onTouchEnd = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        if (!l.isPressed) {
          m.stopPropagation();
          return;
        }
        let b = Cr(m.nativeEvent, l.activePointerId), B = !0;
        b && Ie(b, m.currentTarget) && l.pointerType != null ? (A(m, l.pointerType), B = $(m, l.pointerType)) : l.isOverTarget && l.pointerType != null && (B = $(m, l.pointerType, !1)), B && m.stopPropagation(), l.isPressed = !1, l.activePointerId = null, l.isOverTarget = !1, l.ignoreEmulatedMouseEvents = !0, l.target && !c && Pt(l.target), C();
      }, O.onTouchCancel = (m) => {
        m.currentTarget.contains(m.target) && (m.stopPropagation(), l.isPressed && v(m));
      };
      let W = (m) => {
        l.isPressed && m.target.contains(l.target) && v({
          currentTarget: l.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      O.onDragStart = (m) => {
        m.currentTarget.contains(m.target) && v(m);
      };
    }
    return O;
  }, [
    k,
    o,
    f,
    C,
    c,
    v,
    X,
    $,
    I,
    A
  ]);
  return Xe(() => () => {
    var l;
    c || Pt((l = T.current.target) !== null && l !== void 0 ? l : void 0);
  }, [
    c
  ]), {
    isPressed: s || g,
    pressProps: ke(y, ne)
  };
}
function jn(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function Jt(e, t) {
  const { key: n, code: r } = e, a = t, i = a.getAttribute("role");
  return (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") && !(a instanceof Ye(a).HTMLInputElement && !Oa(a, n) || a instanceof Ye(a).HTMLTextAreaElement || a.isContentEditable) && // Links should only trigger with Enter key
  !((i === "link" || !i && jn(a)) && n !== "Enter");
}
function vs(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function Cr(e, t) {
  const n = e.changedTouches;
  for (let r = 0; r < n.length; r++) {
    const a = n[r];
    if (a.identifier === t)
      return a;
  }
  return null;
}
function le(e, t) {
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey
  };
}
function ms(e) {
  let t = 0, n = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? n = e.height / 2 : e.radiusY !== void 0 && (n = e.radiusY), {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t
  };
}
function ps(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function Ie(e, t) {
  let n = t.getBoundingClientRect(), r = ms(e);
  return ps(n, r);
}
function Qt(e) {
  return !(e instanceof HTMLElement) || !e.hasAttribute("draggable");
}
function _r(e, t) {
  return e instanceof HTMLInputElement ? !Oa(e, t) : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !jn(e);
}
const gs = /* @__PURE__ */ new Set([
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
function Oa(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : gs.has(e.type);
}
class bs {
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
function ys(e) {
  let t = Ue({
    isFocused: !1,
    observer: null
  });
  Dn(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = Me((r) => {
    e == null || e(r);
  });
  return Oe((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let a = r.target, i = (o) => {
        t.current.isFocused = !1, a.disabled && n(new bs("blur", o)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
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
    n
  ]);
}
function hs(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: a } = e;
  const i = Oe((f) => {
    if (f.target === f.currentTarget)
      return r && r(f), a && a(!1), !0;
  }, [
    r,
    a
  ]), o = ys(i), s = Oe((f) => {
    f.target === f.currentTarget && document.activeElement === f.target && (n && n(f), a && a(!0), o(f));
  }, [
    a,
    n,
    o
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || a || r) ? s : void 0,
      onBlur: !t && (r || a) ? i : void 0
    }
  };
}
let ft = null, xs = /* @__PURE__ */ new Set(), Ve = /* @__PURE__ */ new Map(), _e = !1, hn = !1;
function zn(e, t) {
  for (let n of xs)
    n(e, t);
}
function ws(e) {
  return !(e.metaKey || !nt() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function It(e) {
  _e = !0, ws(e) && (ft = "keyboard", zn("keyboard", e));
}
function ae(e) {
  ft = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (_e = !0, zn("pointer", e));
}
function Aa(e) {
  bn(e) && (_e = !0, ft = "virtual");
}
function Ca(e) {
  e.target === window || e.target === document || (!_e && !hn && (ft = "virtual", zn("virtual", e)), _e = !1, hn = !1);
}
function _a() {
  _e = !1, hn = !0;
}
function Ir(e) {
  if (typeof window > "u" || Ve.get(Ye(e)))
    return;
  const t = Ye(e), n = ie(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    _e = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", It, !0), n.addEventListener("keyup", It, !0), n.addEventListener("click", Aa, !0), t.addEventListener("focus", Ca, !0), t.addEventListener("blur", _a, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", ae, !0), n.addEventListener("pointermove", ae, !0), n.addEventListener("pointerup", ae, !0)) : (n.addEventListener("mousedown", ae, !0), n.addEventListener("mousemove", ae, !0), n.addEventListener("mouseup", ae, !0)), t.addEventListener("beforeunload", () => {
    Ia(e);
  }, {
    once: !0
  }), Ve.set(t, {
    focus: r
  });
}
const Ia = (e, t) => {
  const n = Ye(e), r = ie(e);
  t && r.removeEventListener("DOMContentLoaded", t), Ve.has(n) && (n.HTMLElement.prototype.focus = Ve.get(n).focus, r.removeEventListener("keydown", It, !0), r.removeEventListener("keyup", It, !0), r.removeEventListener("click", Aa, !0), n.removeEventListener("focus", Ca, !0), n.removeEventListener("blur", _a, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", ae, !0), r.removeEventListener("pointermove", ae, !0), r.removeEventListener("pointerup", ae, !0)) : (r.removeEventListener("mousedown", ae, !0), r.removeEventListener("mousemove", ae, !0), r.removeEventListener("mouseup", ae, !0)), Ve.delete(n));
};
function Ps(e) {
  const t = ie(e);
  let n;
  return t.readyState !== "loading" ? Ir(e) : (n = () => {
    Ir(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Ia(e, n);
}
typeof document < "u" && Ps();
function ks() {
  return ft;
}
let Mt = !1, Zt = 0;
function xn() {
  Mt = !0, setTimeout(() => {
    Mt = !1;
  }, 50);
}
function Mr(e) {
  e.pointerType === "touch" && xn();
}
function Es() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", Mr) : document.addEventListener("touchend", xn), Zt++, () => {
      Zt--, !(Zt > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Mr) : document.removeEventListener("touchend", xn));
    };
}
function Ts(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: a } = e, [i, o] = Dr(!1), s = Ue({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  Xe(Es, []);
  let { hoverProps: f, triggerHoverEnd: u } = Fr(() => {
    let c = (g, S) => {
      if (s.pointerType = S, a || S === "touch" || s.isHovered || !g.currentTarget.contains(g.target))
        return;
      s.isHovered = !0;
      let T = g.currentTarget;
      s.target = T, t && t({
        type: "hoverstart",
        target: T,
        pointerType: S
      }), n && n(!0), o(!0);
    }, d = (g, S) => {
      if (s.pointerType = "", s.target = null, S === "touch" || !s.isHovered)
        return;
      s.isHovered = !1;
      let T = g.currentTarget;
      r && r({
        type: "hoverend",
        target: T,
        pointerType: S
      }), n && n(!1), o(!1);
    }, y = {};
    return typeof PointerEvent < "u" ? (y.onPointerEnter = (g) => {
      Mt && g.pointerType === "mouse" || c(g, g.pointerType);
    }, y.onPointerLeave = (g) => {
      !a && g.currentTarget.contains(g.target) && d(g, g.pointerType);
    }) : (y.onTouchStart = () => {
      s.ignoreEmulatedMouseEvents = !0;
    }, y.onMouseEnter = (g) => {
      !s.ignoreEmulatedMouseEvents && !Mt && c(g, "mouse"), s.ignoreEmulatedMouseEvents = !1;
    }, y.onMouseLeave = (g) => {
      !a && g.currentTarget.contains(g.target) && d(g, "mouse");
    }), {
      hoverProps: y,
      triggerHoverEnd: d
    };
  }, [
    t,
    n,
    r,
    a,
    s
  ]);
  return Xe(() => {
    a && u({
      currentTarget: s.target
    }, s.pointerType);
  }, [
    a
  ]), {
    hoverProps: f,
    isHovered: i
  };
}
function Lr(e) {
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
function $s(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: Lr(e.onKeyDown),
      onKeyUp: Lr(e.onKeyUp)
    }
  };
}
function Ss(e) {
  const t = ie(e);
  if (ks() === "virtual") {
    let n = t.activeElement;
    ka(() => {
      t.activeElement === n && e.isConnected && Se(e);
    });
  } else
    Se(e);
}
function Os(e, t) {
  return !e || !t ? !1 : t.some((n) => n.contains(e));
}
class Yn {
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
    let i = new Nr({
      scopeRef: t
    });
    a.addChild(i), i.parent = a, this.fastMap.set(t, i), r && (i.nodeToRestore = r);
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
    for (let i of this.traverse())
      i !== n && n.nodeToRestore && i.nodeToRestore && n.scopeRef && n.scopeRef.current && Os(i.nodeToRestore, n.scopeRef.current) && (i.nodeToRestore = n.nodeToRestore);
    let a = n.children;
    r && (r.removeChild(n), a.size > 0 && a.forEach((i) => r && r.addChild(i))), this.fastMap.delete(n.scopeRef);
  }
  // Pre Order Depth First
  *traverse(t = this.root) {
    if (t.scopeRef != null && (yield t), t.children.size > 0)
      for (let n of t.children)
        yield* this.traverse(n);
  }
  clone() {
    var t;
    let n = new Yn();
    var r;
    for (let a of this.traverse())
      n.addTreeNode(a.scopeRef, (r = (t = a.parent) === null || t === void 0 ? void 0 : t.scopeRef) !== null && r !== void 0 ? r : null, a.nodeToRestore);
    return n;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new Nr({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class Nr {
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
new Yn();
let As = /* @__PURE__ */ rt.createContext(null);
function Cs(e) {
  let t = wn(As) || {};
  Ea(t, e);
  let { ref: n, ...r } = t;
  return r;
}
function Ma(e, t) {
  let { focusProps: n } = hs(e), { keyboardProps: r } = $s(e), a = ke(n, r), i = Cs(t), o = e.isDisabled ? {} : i, s = Ue(e.autoFocus);
  return Xe(() => {
    s.current && t.current && Ss(t.current), s.current = !1;
  }, [
    t
  ]), {
    focusableProps: ke({
      ...a,
      tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
    }, o)
  };
}
function _s(e, t) {
  let {
    elementType: n = "a",
    onPress: r,
    onPressStart: a,
    onPressEnd: i,
    // @ts-ignore
    onClick: o,
    isDisabled: s,
    ...f
  } = e, u = {};
  n !== "a" && (u = {
    role: "link",
    tabIndex: s ? void 0 : 0
  });
  let { focusableProps: c } = Ma(e, t), { pressProps: d, isPressed: y } = Sa({
    onPress: r,
    onPressStart: a,
    onPressEnd: i,
    isDisabled: s,
    ref: t
  }), g = st(f, {
    labelable: !0,
    isLink: n === "a"
  }), S = ke(c, d), T = ts();
  return {
    isPressed: y,
    linkProps: ke(g, {
      ...S,
      ...u,
      "aria-disabled": s || void 0,
      "aria-current": e["aria-current"],
      onClick: (k) => {
        var C;
        (C = d.onClick) === null || C === void 0 || C.call(d, k), o && (o(k), console.warn("onClick is deprecated, please use onPress")), !T.isNative && k.currentTarget instanceof HTMLAnchorElement && k.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
        !k.isDefaultPrevented() && ns(k.currentTarget, k) && (k.preventDefault(), T.open(k.currentTarget, k));
      }
    })
  };
}
function La(e, t) {
  let {
    elementType: n = "button",
    isDisabled: r,
    onPress: a,
    onPressStart: i,
    onPressEnd: o,
    onPressUp: s,
    onPressChange: f,
    preventFocusOnPress: u,
    allowFocusWhenDisabled: c,
    // @ts-ignore
    onClick: d,
    href: y,
    target: g,
    rel: S,
    type: T = "button"
  } = e, k;
  n === "button" ? k = {
    type: T,
    disabled: r
  } : k = {
    role: "button",
    tabIndex: r ? void 0 : 0,
    href: n === "a" && r ? void 0 : y,
    target: n === "a" ? g : void 0,
    type: n === "input" ? T : void 0,
    disabled: n === "input" ? r : void 0,
    "aria-disabled": !r || n === "input" ? void 0 : r,
    rel: n === "a" ? S : void 0
  };
  let { pressProps: C, isPressed: I } = Sa({
    onPressStart: i,
    onPressEnd: o,
    onPressChange: f,
    onPress: a,
    onPressUp: s,
    isDisabled: r,
    preventFocusOnPress: u,
    ref: t
  }), { focusableProps: $ } = Ma(e, t);
  c && ($.tabIndex = r ? -1 : $.tabIndex);
  let A = ke($, C, st(e, {
    labelable: !0
  }));
  return {
    isPressed: I,
    buttonProps: ke(k, A, {
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
const ge = "px-2 py-1 rounded-md", Is = {
  flat: {
    primary: `${ge} bg-transparent text-ev-primary data-[hovered]:bg-gray-200 data-[pressed]:bg-gray-300 data-[hovered]:dark:bg-gray-800  data-[pressed]:dark:bg-gray-700`,
    secondary: `${ge} bg-transparent text-ev-secondary data-[hovered]:bg-gray-200 data-[pressed]:bg-gray-300 data-[hovered]:dark:bg-gray-800  data-[pressed]:dark:bg-gray-700`,
    destructive: `${ge} bg-transparent text-ev-destructive data-[hovered]:bg-gray-200 data-[pressed]:bg-gray-300 data-[hovered]:dark:bg-gray-800  data-[pressed]:dark:bg-gray-700`,
    foreground: `${ge} bg-transparent text-ev-dark data-[hovered]:bg-gray-200 data-[pressed]:bg-gray-300 dark:text-ev-light data-[hovered]:dark:bg-gray-800  data-[pressed]:dark:bg-gray-700`
  },
  solid: {
    primary: `${ge} bg-ev-primary data-[hovered]:bg-ev-primary-hard data-[pressed]:bg-ev-primary-harder text-ev-light`,
    secondary: `${ge} bg-ev-secondary data-[hovered]:bg-ev-secondary-hard data-[pressed]:bg-ev-primary-harder text-ev-light`,
    destructive: `${ge} bg-ev-destructive data-[hovered]:bg-ev-destructive-hard data-[pressed]:bg-ev-destructive-harder text-ev-light`,
    foreground: `${ge} bg-ev-dark text-ev-light data-[hovered]:bg-ev-dark-hard data-[pressed]:bg-ev-dark-harder dark:bg-ev-light dark:text-ev-dark dark:hover:bg-ev-light-hard  dark:[pressed]:bg-ev-light-harder`
  }
}, Ms = ({ variant: e = "solid", color: t = "primary" }) => Is[e][t], nf = Pn(
  ({ children: e, ...t }, n) => {
    const { buttonProps: r, isPressed: a } = La(
      t,
      n
    ), { hoverProps: i, isHovered: o } = Ts({});
    return /* @__PURE__ */ K(
      "button",
      {
        ref: n,
        ...st(t),
        ...i,
        ...r,
        ...a && { "data-pressed": a },
        ...o && !a && { "data-hovered": o },
        className: Q(Ms(t), t.className),
        children: e
      }
    );
  }
), be = "w-[32px] h-[32px] rounded-md", Ls = {
  flat: {
    primary: `${be} bg-transparent text-ev-primary hover:bg-gray-200 pressed:bg-gray-300 hover:dark:bg-gray-800  pressed:dark:bg-gray-700`,
    secondary: `${be} bg-transparent text-ev-secondary hover:bg-gray-200 pressed:bg-gray-300 hover:dark:bg-gray-800  pressed:dark:bg-gray-700`,
    destructive: `${be} bg-transparent text-ev-destructive hover:bg-gray-200 pressed:bg-gray-300 hover:dark:bg-gray-800  pressed:dark:bg-gray-700`,
    foreground: `${be} bg-transparent text-ev-dark hover:bg-gray-200 pressed:bg-gray-300 dark:text-ev-light hover:dark:bg-gray-800  pressed:dark:bg-gray-700`
  },
  solid: {
    primary: `${be} bg-ev-primary hover:bg-ev-primary-hard pressed:bg-ev-primary-harder text-ev-light`,
    secondary: `${be} bg-ev-secondary hover:bg-ev-secondary-hard pressed:bg-ev-primary-harder text-ev-light`,
    destructive: `${be} bg-ev-destructive hover:bg-ev-destructive-hard pressed:bg-ev-destructive-harder text-ev-light`,
    foreground: `${be} bg-ev-dark text-ev-light hover:bg-ev-dark-hard pressed:bg-ev-dark-harder dark:bg-ev-light dark:text-ev-dark dark:hover:bg-ev-light-hard  dark:pressed:bg-ev-light-harder`
  }
}, Ns = ({ variant: e = "flat", color: t = "foreground" }) => Ls[e][t], rf = Pn(
  ({ children: e, ...t }, n) => {
    const { buttonProps: r } = La(t, n);
    return /* @__PURE__ */ K(
      "button",
      {
        ref: n,
        ...st(t),
        ...r,
        className: Q(Ns(t), t.className),
        children: e
      }
    );
  }
), Rr = "underline decoration-dashed px-2 py-1 rounded hover:decoration-solid", Rs = {
  primary: `${Rr} text-ev-primary hover:text-ev-primary-hard`,
  secondary: `${Rr} text-ev-secondary hover:text-ev-secondary-hard`
}, Ds = ({ color: e = "primary" }) => Rs[e], af = Pn(
  ({ children: e, ...t }, n) => {
    const { linkProps: r } = _s(t, n);
    return /* @__PURE__ */ ve(
      "a",
      {
        ref: n,
        ...st(t),
        ...r,
        className: Q(Ds(t), t.className),
        children: [
          t.target === "_blank" && /* @__PURE__ */ K(Pe, { icon: jr, className: "mr-2" }),
          e
        ]
      }
    );
  }
);
export {
  tf as A,
  ef as Blockquote,
  nf as Button,
  Vs as Code,
  Ys as H1,
  Hs as H2,
  Us as H3,
  Ks as H4,
  Ws as H5,
  qs as H6,
  rf as IconButton,
  Zs as Img,
  af as Link,
  Qs as Ol,
  Gs as P,
  Xs as Pre,
  Bs as Strong,
  Js as Ul
};
