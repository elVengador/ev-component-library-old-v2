import { jsx as V, jsxs as Ae } from "react/jsx-runtime";
import { twMerge as wn } from "tailwind-merge";
import tt, { useContext as xn, useRef as Ye, useCallback as Te, createContext as La, useEffect as Be, useState as Dr, useMemo as Fr, forwardRef as Pn } from "react";
function jr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++)
        e[t] && (n = jr(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function Na() {
  for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)
    (e = arguments[n]) && (t = jr(e)) && (r && (r += " "), r += t);
  return r;
}
const kn = typeof document < "u" ? tt.useLayoutEffect : () => {
};
function _e(e) {
  const t = Ye(null);
  return kn(() => {
    t.current = e;
  }, [
    e
  ]), Te((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
let Un = /* @__PURE__ */ new Map();
function Ra(e, t) {
  if (e === t)
    return e;
  let n = Un.get(e);
  if (n)
    return n(t), t;
  let r = Un.get(t);
  return r ? (r(e), e) : t;
}
function zr(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const ae = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, Fe = (e) => e && "window" in e && e.window === e ? e : ae(e).defaultView || window;
function ge(...e) {
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
      90 ? t[a] = zr(i, o) : (a === "className" || a === "UNSAFE_className") && typeof i == "string" && typeof o == "string" ? t[a] = Na(i, o) : a === "id" && i && o ? t.id = Ra(i, o) : t[a] = o !== void 0 ? o : i;
    }
  }
  return t;
}
const Da = /* @__PURE__ */ new Set([
  "id"
]), Fa = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), ja = /* @__PURE__ */ new Set([
  "href",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), za = /^(data-.*)$/;
function nt(e, t = {}) {
  let { labelable: n, isLink: r, propNames: a } = t, i = {};
  for (const o in e)
    Object.prototype.hasOwnProperty.call(e, o) && (Da.has(o) || n && Fa.has(o) || r && ja.has(o) || a != null && a.has(o) || za.test(o)) && (i[o] = e[o]);
  return i;
}
function Pe(e) {
  if (Ya())
    e.focus({
      preventScroll: !0
    });
  else {
    let t = Ha(e);
    e.focus(), Ua(t);
  }
}
let ct = null;
function Ya() {
  if (ct == null) {
    ct = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return ct = !0, !0;
        }
      });
    } catch {
    }
  }
  return ct;
}
function Ha(e) {
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
function Ua(e) {
  for (let { element: t, scrollTop: n, scrollLeft: r } of e)
    t.scrollTop = n, t.scrollLeft = r;
}
function Mt(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function En(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Xe() {
  return En(/^Mac/i);
}
function Ka() {
  return En(/^iPhone/i);
}
function Yr() {
  return En(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Xe() && navigator.maxTouchPoints > 1;
}
function Hr() {
  return Ka() || Yr();
}
function Wa() {
  return Mt(/AppleWebKit/i) && !Ga();
}
function Ga() {
  return Mt(/Chrome/i);
}
function Ur() {
  return Mt(/Android/i);
}
function qa() {
  return Mt(/Firefox/i);
}
const Ba = /* @__PURE__ */ La({
  isNative: !0,
  open: Qa
});
function Xa() {
  return xn(Ba);
}
function Va(e, t) {
  let n = e.getAttribute("target");
  return (!n || n === "_self") && e.origin === location.origin && !e.hasAttribute("download") && !t.metaKey && // open in new tab (mac)
  !t.ctrlKey && // open in new tab (windows)
  !t.altKey && // download
  !t.shiftKey;
}
function je(e, t, n = !0) {
  var r, a;
  let { metaKey: i, ctrlKey: o, altKey: s, shiftKey: f } = t;
  qa() && (!((a = window.event) === null || a === void 0 || (r = a.type) === null || r === void 0) && r.startsWith("key")) && e.target === "_blank" && (Xe() ? i = !0 : o = !0);
  let u = Wa() && Xe() && !Yr() ? new KeyboardEvent("keydown", {
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
  je.isOpening = n, Pe(e), e.dispatchEvent(u), je.isOpening = !1;
}
je.isOpening = !1;
function Ja(e, t) {
  if (e instanceof HTMLAnchorElement)
    t(e);
  else if (e.hasAttribute("data-href")) {
    let n = document.createElement("a");
    n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n);
  }
}
function Qa(e, t) {
  Ja(e, (n) => je(n, t));
}
let Ie = /* @__PURE__ */ new Map(), Zt = /* @__PURE__ */ new Set();
function Kn() {
  if (typeof window > "u")
    return;
  function e(r) {
    return "propertyName" in r;
  }
  let t = (r) => {
    if (!e(r) || !r.target)
      return;
    let a = Ie.get(r.target);
    a || (a = /* @__PURE__ */ new Set(), Ie.set(r.target, a), r.target.addEventListener("transitioncancel", n, {
      once: !0
    })), a.add(r.propertyName);
  }, n = (r) => {
    if (!e(r) || !r.target)
      return;
    let a = Ie.get(r.target);
    if (a && (a.delete(r.propertyName), a.size === 0 && (r.target.removeEventListener("transitioncancel", n), Ie.delete(r.target)), Ie.size === 0)) {
      for (let i of Zt)
        i();
      Zt.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState !== "loading" ? Kn() : document.addEventListener("DOMContentLoaded", Kn));
function Kr(e) {
  requestAnimationFrame(() => {
    Ie.size === 0 ? e() : Zt.add(e);
  });
}
function Za() {
  let e = Ye(/* @__PURE__ */ new Map()), t = Te((a, i, o, s) => {
    let f = s != null && s.once ? (...u) => {
      e.current.delete(o), o(...u);
    } : o;
    e.current.set(o, {
      type: i,
      eventTarget: a,
      fn: f,
      options: s
    }), a.addEventListener(i, o, s);
  }, []), n = Te((a, i, o, s) => {
    var f;
    let u = ((f = e.current.get(o)) === null || f === void 0 ? void 0 : f.fn) || o;
    a.removeEventListener(i, u, s), e.current.delete(o);
  }, []), r = Te(() => {
    e.current.forEach((a, i) => {
      n(a.eventTarget, a.type, i, a.options);
    });
  }, [
    n
  ]);
  return Be(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function Wr(e, t) {
  kn(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function en(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Ur() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function ei(e) {
  return !Ur() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
function ti(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Gr(e, t, n) {
  if (!t.has(e))
    throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function ni(e, t) {
  var n = Gr(e, t, "get");
  return ti(e, n);
}
function ri(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function ai(e, t, n) {
  ri(e, t), t.set(e, n);
}
function ii(e, t, n) {
  if (t.set)
    t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function Wn(e, t, n) {
  var r = Gr(e, t, "set");
  return ii(e, r, n), n;
}
let Me = "default", tn = "", Et = /* @__PURE__ */ new WeakMap();
function Gn(e) {
  if (Hr()) {
    if (Me === "default") {
      const t = ae(e);
      tn = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    Me = "disabled";
  } else
    (e instanceof HTMLElement || e instanceof SVGElement) && (Et.set(e, e.style.userSelect), e.style.userSelect = "none");
}
function ut(e) {
  if (Hr()) {
    if (Me !== "disabled")
      return;
    Me = "restoring", setTimeout(() => {
      Kr(() => {
        if (Me === "restoring") {
          const t = ae(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = tn || ""), tn = "", Me = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Et.has(e)) {
    let t = Et.get(e);
    e.style.userSelect === "none" && (e.style.userSelect = t), e.getAttribute("style") === "" && e.removeAttribute("style"), Et.delete(e);
  }
}
const qr = tt.createContext({
  register: () => {
  }
});
qr.displayName = "PressResponderContext";
function oi(e) {
  let t = xn(qr);
  if (t) {
    let { register: n, ...r } = t;
    e = ge(r, e), n();
  }
  return Wr(t, e.ref), e;
}
var dt = /* @__PURE__ */ new WeakMap();
class vt {
  continuePropagation() {
    Wn(this, dt, !1);
  }
  get shouldStopPropagation() {
    return ni(this, dt);
  }
  constructor(t, n, r) {
    ai(this, dt, {
      writable: !0,
      value: void 0
    }), Wn(this, dt, !0), this.type = t, this.pointerType = n, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey;
  }
}
const qn = Symbol("linkClicked");
function Br(e) {
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
  } = oi(e), [b, S] = Dr(!1), T = Ye({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    ignoreClickAfterPress: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null
  }), { addGlobalListener: k, removeAllGlobalListeners: C } = Za(), I = _e((l, O) => {
    let Q = T.current;
    if (o || Q.didFirePressStart)
      return !1;
    let x = !0;
    if (Q.isTriggeringEvent = !0, r) {
      let K = new vt("pressstart", O, l);
      r(K), x = K.shouldStopPropagation;
    }
    return n && n(!0), Q.isTriggeringEvent = !1, Q.didFirePressStart = !0, S(!0), x;
  }), $ = _e((l, O, Q = !0) => {
    let x = T.current;
    if (!x.didFirePressStart)
      return !1;
    x.ignoreClickAfterPress = !0, x.didFirePressStart = !1, x.isTriggeringEvent = !0;
    let K = !0;
    if (a) {
      let m = new vt("pressend", O, l);
      a(m), K = m.shouldStopPropagation;
    }
    if (n && n(!1), S(!1), t && Q && !o) {
      let m = new vt("press", O, l);
      t(m), K && (K = m.shouldStopPropagation);
    }
    return x.isTriggeringEvent = !1, K;
  }), A = _e((l, O) => {
    let Q = T.current;
    if (o)
      return !1;
    if (i) {
      Q.isTriggeringEvent = !0;
      let x = new vt("pressup", O, l);
      return i(x), Q.isTriggeringEvent = !1, x.shouldStopPropagation;
    }
    return !0;
  }), v = _e((l) => {
    let O = T.current;
    O.isPressed && O.target && (O.isOverTarget && O.pointerType != null && $(fe(O.target, l), O.pointerType, !1), O.isPressed = !1, O.isOverTarget = !1, O.activePointerId = null, O.pointerType = null, C(), c || ut(O.target));
  }), X = _e((l) => {
    u && v(l);
  }), te = Fr(() => {
    let l = T.current, O = {
      onKeyDown(x) {
        if (jt(x.nativeEvent, x.currentTarget) && x.currentTarget.contains(x.target)) {
          var K;
          Xn(x.target, x.key) && x.preventDefault();
          let m = !0;
          if (!l.isPressed && !x.repeat) {
            l.target = x.currentTarget, l.isPressed = !0, m = I(x, "keyboard");
            let g = x.currentTarget, q = (Z) => {
              jt(Z, g) && !Z.repeat && g.contains(Z.target) && l.target && A(fe(l.target, Z), "keyboard");
            };
            k(ae(x.currentTarget), "keyup", zr(q, Q), !0);
          }
          m && x.stopPropagation(), x.metaKey && Xe() && ((K = l.metaKeyEvents) === null || K === void 0 || K.set(x.key, x.nativeEvent));
        } else
          x.key === "Meta" && (l.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(x) {
        if (!(x && !x.currentTarget.contains(x.target)) && x && x.button === 0 && !l.isTriggeringEvent && !je.isOpening) {
          let K = !0;
          if (o && x.preventDefault(), !l.ignoreClickAfterPress && !l.ignoreEmulatedMouseEvents && !l.isPressed && (l.pointerType === "virtual" || en(x.nativeEvent))) {
            !o && !f && Pe(x.currentTarget);
            let m = I(x, "virtual"), g = A(x, "virtual"), q = $(x, "virtual");
            K = m && g && q;
          }
          l.ignoreEmulatedMouseEvents = !1, l.ignoreClickAfterPress = !1, K && x.stopPropagation();
        }
      }
    }, Q = (x) => {
      var K;
      if (l.isPressed && l.target && jt(x, l.target)) {
        var m;
        Xn(x.target, x.key) && x.preventDefault();
        let q = x.target;
        $(fe(l.target, x), "keyboard", l.target.contains(q)), C(), x.key !== "Enter" && Tn(l.target) && l.target.contains(q) && !x[qn] && (x[qn] = !0, je(l.target, x, !1)), l.isPressed = !1, (m = l.metaKeyEvents) === null || m === void 0 || m.delete(x.key);
      } else if (x.key === "Meta" && (!((K = l.metaKeyEvents) === null || K === void 0) && K.size)) {
        var g;
        let q = l.metaKeyEvents;
        l.metaKeyEvents = void 0;
        for (let Z of q.values())
          (g = l.target) === null || g === void 0 || g.dispatchEvent(new KeyboardEvent("keyup", Z));
      }
    };
    if (typeof PointerEvent < "u") {
      O.onPointerDown = (g) => {
        if (g.button !== 0 || !g.currentTarget.contains(g.target))
          return;
        if (ei(g.nativeEvent)) {
          l.pointerType = "virtual";
          return;
        }
        zt(g.currentTarget) && g.preventDefault(), l.pointerType = g.pointerType;
        let q = !0;
        l.isPressed || (l.isPressed = !0, l.isOverTarget = !0, l.activePointerId = g.pointerId, l.target = g.currentTarget, !o && !f && Pe(g.currentTarget), c || Gn(l.target), q = I(g, l.pointerType), k(ae(g.currentTarget), "pointermove", x, !1), k(ae(g.currentTarget), "pointerup", K, !1), k(ae(g.currentTarget), "pointercancel", m, !1)), q && g.stopPropagation();
      }, O.onMouseDown = (g) => {
        g.currentTarget.contains(g.target) && g.button === 0 && (zt(g.currentTarget) && g.preventDefault(), g.stopPropagation());
      }, O.onPointerUp = (g) => {
        !g.currentTarget.contains(g.target) || l.pointerType === "virtual" || g.button === 0 && Ce(g, g.currentTarget) && A(g, l.pointerType || g.pointerType);
      };
      let x = (g) => {
        g.pointerId === l.activePointerId && (l.target && Ce(g, l.target) ? !l.isOverTarget && l.pointerType != null && (l.isOverTarget = !0, I(fe(l.target, g), l.pointerType)) : l.target && l.isOverTarget && l.pointerType != null && (l.isOverTarget = !1, $(fe(l.target, g), l.pointerType, !1), X(g)));
      }, K = (g) => {
        g.pointerId === l.activePointerId && l.isPressed && g.button === 0 && l.target && (Ce(g, l.target) && l.pointerType != null ? $(fe(l.target, g), l.pointerType) : l.isOverTarget && l.pointerType != null && $(fe(l.target, g), l.pointerType, !1), l.isPressed = !1, l.isOverTarget = !1, l.activePointerId = null, l.pointerType = null, C(), c || ut(l.target));
      }, m = (g) => {
        v(g);
      };
      O.onDragStart = (g) => {
        g.currentTarget.contains(g.target) && v(g);
      };
    } else {
      O.onMouseDown = (m) => {
        if (m.button !== 0 || !m.currentTarget.contains(m.target))
          return;
        if (zt(m.currentTarget) && m.preventDefault(), l.ignoreEmulatedMouseEvents) {
          m.stopPropagation();
          return;
        }
        l.isPressed = !0, l.isOverTarget = !0, l.target = m.currentTarget, l.pointerType = en(m.nativeEvent) ? "virtual" : "mouse", !o && !f && Pe(m.currentTarget), I(m, l.pointerType) && m.stopPropagation(), k(ae(m.currentTarget), "mouseup", x, !1);
      }, O.onMouseEnter = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        let g = !0;
        l.isPressed && !l.ignoreEmulatedMouseEvents && l.pointerType != null && (l.isOverTarget = !0, g = I(m, l.pointerType)), g && m.stopPropagation();
      }, O.onMouseLeave = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        let g = !0;
        l.isPressed && !l.ignoreEmulatedMouseEvents && l.pointerType != null && (l.isOverTarget = !1, g = $(m, l.pointerType, !1), X(m)), g && m.stopPropagation();
      }, O.onMouseUp = (m) => {
        m.currentTarget.contains(m.target) && !l.ignoreEmulatedMouseEvents && m.button === 0 && A(m, l.pointerType || "mouse");
      };
      let x = (m) => {
        if (m.button === 0) {
          if (l.isPressed = !1, C(), l.ignoreEmulatedMouseEvents) {
            l.ignoreEmulatedMouseEvents = !1;
            return;
          }
          l.target && Ce(m, l.target) && l.pointerType != null ? $(fe(l.target, m), l.pointerType) : l.target && l.isOverTarget && l.pointerType != null && $(fe(l.target, m), l.pointerType, !1), l.isOverTarget = !1;
        }
      };
      O.onTouchStart = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        let g = si(m.nativeEvent);
        if (!g)
          return;
        l.activePointerId = g.identifier, l.ignoreEmulatedMouseEvents = !0, l.isOverTarget = !0, l.isPressed = !0, l.target = m.currentTarget, l.pointerType = "touch", !o && !f && Pe(m.currentTarget), c || Gn(l.target), I(m, l.pointerType) && m.stopPropagation(), k(Fe(m.currentTarget), "scroll", K, !0);
      }, O.onTouchMove = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        if (!l.isPressed) {
          m.stopPropagation();
          return;
        }
        let g = Bn(m.nativeEvent, l.activePointerId), q = !0;
        g && Ce(g, m.currentTarget) ? !l.isOverTarget && l.pointerType != null && (l.isOverTarget = !0, q = I(m, l.pointerType)) : l.isOverTarget && l.pointerType != null && (l.isOverTarget = !1, q = $(m, l.pointerType, !1), X(m)), q && m.stopPropagation();
      }, O.onTouchEnd = (m) => {
        if (!m.currentTarget.contains(m.target))
          return;
        if (!l.isPressed) {
          m.stopPropagation();
          return;
        }
        let g = Bn(m.nativeEvent, l.activePointerId), q = !0;
        g && Ce(g, m.currentTarget) && l.pointerType != null ? (A(m, l.pointerType), q = $(m, l.pointerType)) : l.isOverTarget && l.pointerType != null && (q = $(m, l.pointerType, !1)), q && m.stopPropagation(), l.isPressed = !1, l.activePointerId = null, l.isOverTarget = !1, l.ignoreEmulatedMouseEvents = !0, l.target && !c && ut(l.target), C();
      }, O.onTouchCancel = (m) => {
        m.currentTarget.contains(m.target) && (m.stopPropagation(), l.isPressed && v(m));
      };
      let K = (m) => {
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
  return Be(() => () => {
    var l;
    c || ut((l = T.current.target) !== null && l !== void 0 ? l : void 0);
  }, [
    c
  ]), {
    isPressed: s || b,
    pressProps: ge(y, te)
  };
}
function Tn(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function jt(e, t) {
  const { key: n, code: r } = e, a = t, i = a.getAttribute("role");
  return (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") && !(a instanceof Fe(a).HTMLInputElement && !Xr(a, n) || a instanceof Fe(a).HTMLTextAreaElement || a.isContentEditable) && // Links should only trigger with Enter key
  !((i === "link" || !i && Tn(a)) && n !== "Enter");
}
function si(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function Bn(e, t) {
  const n = e.changedTouches;
  for (let r = 0; r < n.length; r++) {
    const a = n[r];
    if (a.identifier === t)
      return a;
  }
  return null;
}
function fe(e, t) {
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey
  };
}
function fi(e) {
  let t = 0, n = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? n = e.height / 2 : e.radiusY !== void 0 && (n = e.radiusY), {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t
  };
}
function li(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function Ce(e, t) {
  let n = t.getBoundingClientRect(), r = fi(e);
  return li(n, r);
}
function zt(e) {
  return !(e instanceof HTMLElement) || !e.hasAttribute("draggable");
}
function Xn(e, t) {
  return e instanceof HTMLInputElement ? !Xr(e, t) : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Tn(e);
}
const ci = /* @__PURE__ */ new Set([
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
function Xr(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : ci.has(e.type);
}
class ui {
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
function di(e) {
  let t = Ye({
    isFocused: !1,
    observer: null
  });
  kn(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = _e((r) => {
    e == null || e(r);
  });
  return Te((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let a = r.target, i = (o) => {
        t.current.isFocused = !1, a.disabled && n(new ui("blur", o)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
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
function vi(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: a } = e;
  const i = Te((f) => {
    if (f.target === f.currentTarget)
      return r && r(f), a && a(!1), !0;
  }, [
    r,
    a
  ]), o = di(i), s = Te((f) => {
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
let rt = null, mi = /* @__PURE__ */ new Set(), We = /* @__PURE__ */ new Map(), $e = !1, nn = !1;
function $n(e, t) {
  for (let n of mi)
    n(e, t);
}
function pi(e) {
  return !(e.metaKey || !Xe() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function St(e) {
  $e = !0, pi(e) && (rt = "keyboard", $n("keyboard", e));
}
function re(e) {
  rt = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && ($e = !0, $n("pointer", e));
}
function Vr(e) {
  en(e) && ($e = !0, rt = "virtual");
}
function Jr(e) {
  e.target === window || e.target === document || (!$e && !nn && (rt = "virtual", $n("virtual", e)), $e = !1, nn = !1);
}
function Qr() {
  $e = !1, nn = !0;
}
function Vn(e) {
  if (typeof window > "u" || We.get(Fe(e)))
    return;
  const t = Fe(e), n = ae(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    $e = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", St, !0), n.addEventListener("keyup", St, !0), n.addEventListener("click", Vr, !0), t.addEventListener("focus", Jr, !0), t.addEventListener("blur", Qr, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", re, !0), n.addEventListener("pointermove", re, !0), n.addEventListener("pointerup", re, !0)) : (n.addEventListener("mousedown", re, !0), n.addEventListener("mousemove", re, !0), n.addEventListener("mouseup", re, !0)), t.addEventListener("beforeunload", () => {
    Zr(e);
  }, {
    once: !0
  }), We.set(t, {
    focus: r
  });
}
const Zr = (e, t) => {
  const n = Fe(e), r = ae(e);
  t && r.removeEventListener("DOMContentLoaded", t), We.has(n) && (n.HTMLElement.prototype.focus = We.get(n).focus, r.removeEventListener("keydown", St, !0), r.removeEventListener("keyup", St, !0), r.removeEventListener("click", Vr, !0), n.removeEventListener("focus", Jr, !0), n.removeEventListener("blur", Qr, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", re, !0), r.removeEventListener("pointermove", re, !0), r.removeEventListener("pointerup", re, !0)) : (r.removeEventListener("mousedown", re, !0), r.removeEventListener("mousemove", re, !0), r.removeEventListener("mouseup", re, !0)), We.delete(n));
};
function bi(e) {
  const t = ae(e);
  let n;
  return t.readyState !== "loading" ? Vn(e) : (n = () => {
    Vn(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Zr(e, n);
}
typeof document < "u" && bi();
function gi() {
  return rt;
}
let Ot = !1, Yt = 0;
function rn() {
  Ot = !0, setTimeout(() => {
    Ot = !1;
  }, 50);
}
function Jn(e) {
  e.pointerType === "touch" && rn();
}
function yi() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", Jn) : document.addEventListener("touchend", rn), Yt++, () => {
      Yt--, !(Yt > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Jn) : document.removeEventListener("touchend", rn));
    };
}
function hi(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: a } = e, [i, o] = Dr(!1), s = Ye({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  Be(yi, []);
  let { hoverProps: f, triggerHoverEnd: u } = Fr(() => {
    let c = (b, S) => {
      if (s.pointerType = S, a || S === "touch" || s.isHovered || !b.currentTarget.contains(b.target))
        return;
      s.isHovered = !0;
      let T = b.currentTarget;
      s.target = T, t && t({
        type: "hoverstart",
        target: T,
        pointerType: S
      }), n && n(!0), o(!0);
    }, d = (b, S) => {
      if (s.pointerType = "", s.target = null, S === "touch" || !s.isHovered)
        return;
      s.isHovered = !1;
      let T = b.currentTarget;
      r && r({
        type: "hoverend",
        target: T,
        pointerType: S
      }), n && n(!1), o(!1);
    }, y = {};
    return typeof PointerEvent < "u" ? (y.onPointerEnter = (b) => {
      Ot && b.pointerType === "mouse" || c(b, b.pointerType);
    }, y.onPointerLeave = (b) => {
      !a && b.currentTarget.contains(b.target) && d(b, b.pointerType);
    }) : (y.onTouchStart = () => {
      s.ignoreEmulatedMouseEvents = !0;
    }, y.onMouseEnter = (b) => {
      !s.ignoreEmulatedMouseEvents && !Ot && c(b, "mouse"), s.ignoreEmulatedMouseEvents = !1;
    }, y.onMouseLeave = (b) => {
      !a && b.currentTarget.contains(b.target) && d(b, "mouse");
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
  return Be(() => {
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
function Qn(e) {
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
function wi(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: Qn(e.onKeyDown),
      onKeyUp: Qn(e.onKeyUp)
    }
  };
}
function xi(e) {
  const t = ae(e);
  if (gi() === "virtual") {
    let n = t.activeElement;
    Kr(() => {
      t.activeElement === n && e.isConnected && Pe(e);
    });
  } else
    Pe(e);
}
function Pi(e, t) {
  return !e || !t ? !1 : t.some((n) => n.contains(e));
}
class Sn {
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
    let i = new Zn({
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
      i !== n && n.nodeToRestore && i.nodeToRestore && n.scopeRef && n.scopeRef.current && Pi(i.nodeToRestore, n.scopeRef.current) && (i.nodeToRestore = n.nodeToRestore);
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
    let n = new Sn();
    var r;
    for (let a of this.traverse())
      n.addTreeNode(a.scopeRef, (r = (t = a.parent) === null || t === void 0 ? void 0 : t.scopeRef) !== null && r !== void 0 ? r : null, a.nodeToRestore);
    return n;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new Zn({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class Zn {
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
new Sn();
let ki = /* @__PURE__ */ tt.createContext(null);
function Ei(e) {
  let t = xn(ki) || {};
  Wr(t, e);
  let { ref: n, ...r } = t;
  return r;
}
function ea(e, t) {
  let { focusProps: n } = vi(e), { keyboardProps: r } = wi(e), a = ge(n, r), i = Ei(t), o = e.isDisabled ? {} : i, s = Ye(e.autoFocus);
  return Be(() => {
    s.current && t.current && xi(t.current), s.current = !1;
  }, [
    t
  ]), {
    focusableProps: ge({
      ...a,
      tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
    }, o)
  };
}
function Ti(e, t) {
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
  let { focusableProps: c } = ea(e, t), { pressProps: d, isPressed: y } = Br({
    onPress: r,
    onPressStart: a,
    onPressEnd: i,
    isDisabled: s,
    ref: t
  }), b = nt(f, {
    labelable: !0,
    isLink: n === "a"
  }), S = ge(c, d), T = Xa();
  return {
    isPressed: y,
    linkProps: ge(b, {
      ...S,
      ...u,
      "aria-disabled": s || void 0,
      "aria-current": e["aria-current"],
      onClick: (k) => {
        var C;
        (C = d.onClick) === null || C === void 0 || C.call(d, k), o && (o(k), console.warn("onClick is deprecated, please use onPress")), !T.isNative && k.currentTarget instanceof HTMLAnchorElement && k.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
        !k.isDefaultPrevented() && Va(k.currentTarget, k) && (k.preventDefault(), T.open(k.currentTarget, k));
      }
    })
  };
}
function ta(e, t) {
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
    target: b,
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
    target: n === "a" ? b : void 0,
    type: n === "input" ? T : void 0,
    disabled: n === "input" ? r : void 0,
    "aria-disabled": !r || n === "input" ? void 0 : r,
    rel: n === "a" ? S : void 0
  };
  let { pressProps: C, isPressed: I } = Br({
    onPressStart: i,
    onPressEnd: o,
    onPressChange: f,
    onPress: a,
    onPressUp: s,
    isDisabled: r,
    preventFocusOnPress: u,
    ref: t
  }), { focusableProps: $ } = ea(e, t);
  c && ($.tabIndex = r ? -1 : $.tabIndex);
  let A = ge($, C, nt(e, {
    labelable: !0
  }));
  return {
    isPressed: I,
    buttonProps: ge(k, A, {
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
const ve = "px-2 py-1 rounded-md", $i = {
  flat: {
    primary: `${ve} bg-transparent text-ev-primary data-[hovered]:bg-gray-200 data-[pressed]:bg-gray-300 data-[hovered]:dark:bg-gray-800  data-[pressed]:dark:bg-gray-700`,
    secondary: `${ve} bg-transparent text-ev-secondary data-[hovered]:bg-gray-200 data-[pressed]:bg-gray-300 data-[hovered]:dark:bg-gray-800  data-[pressed]:dark:bg-gray-700`,
    destructive: `${ve} bg-transparent text-ev-destructive data-[hovered]:bg-gray-200 data-[pressed]:bg-gray-300 data-[hovered]:dark:bg-gray-800  data-[pressed]:dark:bg-gray-700`,
    foreground: `${ve} bg-transparent text-ev-dark data-[hovered]:bg-gray-200 data-[pressed]:bg-gray-300 dark:text-ev-light data-[hovered]:dark:bg-gray-800  data-[pressed]:dark:bg-gray-700`
  },
  solid: {
    primary: `${ve} bg-ev-primary data-[hovered]:bg-ev-primary-hard data-[pressed]:bg-ev-primary-harder text-ev-light`,
    secondary: `${ve} bg-ev-secondary data-[hovered]:bg-ev-secondary-hard data-[pressed]:bg-ev-primary-harder text-ev-light`,
    destructive: `${ve} bg-ev-destructive data-[hovered]:bg-ev-destructive-hard data-[pressed]:bg-ev-destructive-harder text-ev-light`,
    foreground: `${ve} bg-ev-dark text-ev-light data-[hovered]:bg-ev-dark-hard data-[pressed]:bg-ev-dark-harder dark:bg-ev-light dark:text-ev-dark dark:hover:bg-ev-light-hard  dark:[pressed]:bg-ev-light-harder`
  }
}, Si = ({ variant: e = "solid", color: t = "primary" }) => $i[e][t], zs = Pn(
  ({ children: e, ...t }, n) => {
    const { buttonProps: r, isPressed: a } = ta(
      t,
      n
    ), { hoverProps: i, isHovered: o } = hi({});
    return /* @__PURE__ */ V(
      "button",
      {
        ref: n,
        ...nt(t),
        ...i,
        ...r,
        ...a && { "data-pressed": a },
        ...o && !a && { "data-hovered": o },
        className: wn(Si(t), t.className),
        children: e
      }
    );
  }
), me = "w-[32px] h-[32px] rounded-md", Oi = {
  flat: {
    primary: `${me} bg-transparent text-ev-primary hover:bg-gray-200 pressed:bg-gray-300 hover:dark:bg-gray-800  pressed:dark:bg-gray-700`,
    secondary: `${me} bg-transparent text-ev-secondary hover:bg-gray-200 pressed:bg-gray-300 hover:dark:bg-gray-800  pressed:dark:bg-gray-700`,
    destructive: `${me} bg-transparent text-ev-destructive hover:bg-gray-200 pressed:bg-gray-300 hover:dark:bg-gray-800  pressed:dark:bg-gray-700`,
    foreground: `${me} bg-transparent text-ev-dark hover:bg-gray-200 pressed:bg-gray-300 dark:text-ev-light hover:dark:bg-gray-800  pressed:dark:bg-gray-700`
  },
  solid: {
    primary: `${me} bg-ev-primary hover:bg-ev-primary-hard pressed:bg-ev-primary-harder text-ev-light`,
    secondary: `${me} bg-ev-secondary hover:bg-ev-secondary-hard pressed:bg-ev-primary-harder text-ev-light`,
    destructive: `${me} bg-ev-destructive hover:bg-ev-destructive-hard pressed:bg-ev-destructive-harder text-ev-light`,
    foreground: `${me} bg-ev-dark text-ev-light hover:bg-ev-dark-hard pressed:bg-ev-dark-harder dark:bg-ev-light dark:text-ev-dark dark:hover:bg-ev-light-hard  dark:pressed:bg-ev-light-harder`
  }
}, Ai = ({ variant: e = "flat", color: t = "foreground" }) => Oi[e][t], Ys = Pn(
  ({ children: e, ...t }, n) => {
    const { buttonProps: r } = ta(t, n);
    return /* @__PURE__ */ V(
      "button",
      {
        ref: n,
        ...nt(t),
        ...r,
        className: wn(Ai(t), t.className),
        children: e
      }
    );
  }
);
var Ci = {
  prefix: "fas",
  iconName: "link",
  icon: [640, 512, [128279, "chain"], "f0c1", "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]
};
function er(e, t) {
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
    t % 2 ? er(Object(n), !0).forEach(function(r) {
      J(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : er(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function At(e) {
  "@babel/helpers - typeof";
  return At = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, At(e);
}
function _i(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tr(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ii(e, t, n) {
  return t && tr(e.prototype, t), n && tr(e, n), Object.defineProperty(e, "prototype", {
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
function On(e, t) {
  return Li(e) || Ri(e, t) || na(e, t) || Fi();
}
function at(e) {
  return Mi(e) || Ni(e) || na(e) || Di();
}
function Mi(e) {
  if (Array.isArray(e))
    return an(e);
}
function Li(e) {
  if (Array.isArray(e))
    return e;
}
function Ni(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Ri(e, t) {
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
function na(e, t) {
  if (e) {
    if (typeof e == "string")
      return an(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return an(e, t);
  }
}
function an(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Di() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var nr = function() {
}, An = {}, ra = {}, aa = null, ia = {
  mark: nr,
  measure: nr
};
try {
  typeof window < "u" && (An = window), typeof document < "u" && (ra = document), typeof MutationObserver < "u" && (aa = MutationObserver), typeof performance < "u" && (ia = performance);
} catch {
}
var ji = An.navigator || {}, rr = ji.userAgent, ar = rr === void 0 ? "" : rr, ye = An, G = ra, ir = aa, mt = ia;
ye.document;
var de = !!G.documentElement && !!G.head && typeof G.addEventListener == "function" && typeof G.createElement == "function", oa = ~ar.indexOf("MSIE") || ~ar.indexOf("Trident/"), pt, bt, gt, yt, ht, le = "___FONT_AWESOME___", on = 16, sa = "fa", fa = "svg-inline--fa", Se = "data-fa-i2svg", sn = "data-fa-pseudo-element", zi = "data-fa-pseudo-element-pending", Cn = "data-prefix", _n = "data-icon", or = "fontawesome-i2svg", Yi = "async", Hi = ["HTML", "HEAD", "STYLE", "SCRIPT"], la = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), W = "classic", B = "sharp", In = [W, B];
function it(e) {
  return new Proxy(e, {
    get: function(n, r) {
      return r in n ? n[r] : n[W];
    }
  });
}
var Ve = it((pt = {}, J(pt, W, {
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
}), J(pt, B, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), pt)), Je = it((bt = {}, J(bt, W, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), J(bt, B, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), bt)), Qe = it((gt = {}, J(gt, W, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), J(gt, B, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), gt)), Ui = it((yt = {}, J(yt, W, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), J(yt, B, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), yt)), Ki = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, ca = "fa-layers-text", Wi = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, Gi = it((ht = {}, J(ht, W, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), J(ht, B, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), ht)), ua = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], qi = ua.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Bi = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], ke = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Ze = /* @__PURE__ */ new Set();
Object.keys(Je[W]).map(Ze.add.bind(Ze));
Object.keys(Je[B]).map(Ze.add.bind(Ze));
var Xi = [].concat(In, at(Ze), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ke.GROUP, ke.SWAP_OPACITY, ke.PRIMARY, ke.SECONDARY]).concat(ua.map(function(e) {
  return "".concat(e, "x");
})).concat(qi.map(function(e) {
  return "w-".concat(e);
})), Ge = ye.FontAwesomeConfig || {};
function Vi(e) {
  var t = G.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Ji(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (G && typeof G.querySelector == "function") {
  var Qi = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  Qi.forEach(function(e) {
    var t = On(e, 2), n = t[0], r = t[1], a = Ji(Vi(n));
    a != null && (Ge[r] = a);
  });
}
var da = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: sa,
  replacementClass: fa,
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
var ze = w(w({}, da), Ge);
ze.autoReplaceSvg || (ze.observeMutations = !1);
var E = {};
Object.keys(da).forEach(function(e) {
  Object.defineProperty(E, e, {
    enumerable: !0,
    set: function(n) {
      ze[e] = n, qe.forEach(function(r) {
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
    ze.cssPrefix = t, qe.forEach(function(n) {
      return n(E);
    });
  },
  get: function() {
    return ze.cssPrefix;
  }
});
ye.FontAwesomeConfig = E;
var qe = [];
function Zi(e) {
  return qe.push(e), function() {
    qe.splice(qe.indexOf(e), 1);
  };
}
var pe = on, se = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function eo(e) {
  if (!(!e || !de)) {
    var t = G.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var n = G.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
      var i = n[a], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
    }
    return G.head.insertBefore(t, r), e;
  }
}
var to = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function et() {
  for (var e = 12, t = ""; e-- > 0; )
    t += to[Math.random() * 62 | 0];
  return t;
}
function He(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Mn(e) {
  return e.classList ? He(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function va(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function no(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, '="').concat(va(e[n]), '" ');
  }, "").trim();
}
function Lt(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function Ln(e) {
  return e.size !== se.size || e.x !== se.x || e.y !== se.y || e.rotate !== se.rotate || e.flipX || e.flipY;
}
function ro(e) {
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
function ao(e) {
  var t = e.transform, n = e.width, r = n === void 0 ? on : n, a = e.height, i = a === void 0 ? on : a, o = e.startCentered, s = o === void 0 ? !1 : o, f = "";
  return s && oa ? f += "translate(".concat(t.x / pe - r / 2, "em, ").concat(t.y / pe - i / 2, "em) ") : s ? f += "translate(calc(-50% + ".concat(t.x / pe, "em), calc(-50% + ").concat(t.y / pe, "em)) ") : f += "translate(".concat(t.x / pe, "em, ").concat(t.y / pe, "em) "), f += "scale(".concat(t.size / pe * (t.flipX ? -1 : 1), ", ").concat(t.size / pe * (t.flipY ? -1 : 1), ") "), f += "rotate(".concat(t.rotate, "deg) "), f;
}
var io = `:root, :host {
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
function ma() {
  var e = sa, t = fa, n = E.cssPrefix, r = E.replacementClass, a = io;
  if (n !== e || r !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    a = a.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return a;
}
var sr = !1;
function Ht() {
  E.autoAddCss && !sr && (eo(ma()), sr = !0);
}
var oo = {
  mixout: function() {
    return {
      dom: {
        css: ma,
        insertCss: Ht
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Ht();
      },
      beforeI2svg: function() {
        Ht();
      }
    };
  }
}, ce = ye || {};
ce[le] || (ce[le] = {});
ce[le].styles || (ce[le].styles = {});
ce[le].hooks || (ce[le].hooks = {});
ce[le].shims || (ce[le].shims = []);
var ie = ce[le], pa = [], so = function e() {
  G.removeEventListener("DOMContentLoaded", e), Ct = 1, pa.map(function(t) {
    return t();
  });
}, Ct = !1;
de && (Ct = (G.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(G.readyState), Ct || G.addEventListener("DOMContentLoaded", so));
function fo(e) {
  de && (Ct ? setTimeout(e, 0) : pa.push(e));
}
function ot(e) {
  var t = e.tag, n = e.attributes, r = n === void 0 ? {} : n, a = e.children, i = a === void 0 ? [] : a;
  return typeof e == "string" ? va(e) : "<".concat(t, " ").concat(no(r), ">").concat(i.map(ot).join(""), "</").concat(t, ">");
}
function fr(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var lo = function(t, n) {
  return function(r, a, i, o) {
    return t.call(n, r, a, i, o);
  };
}, Ut = function(t, n, r, a) {
  var i = Object.keys(t), o = i.length, s = a !== void 0 ? lo(n, a) : n, f, u, c;
  for (r === void 0 ? (f = 1, c = t[i[0]]) : (f = 0, c = r); f < o; f++)
    u = i[f], c = s(c, t[u], u, t);
  return c;
};
function co(e) {
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
function fn(e) {
  var t = co(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function uo(e, t) {
  var n = e.length, r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function lr(e) {
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n], a = !!r.icon;
    return a ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function ln(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, a = r === void 0 ? !1 : r, i = lr(t);
  typeof ie.hooks.addPack == "function" && !a ? ie.hooks.addPack(e, lr(t)) : ie.styles[e] = w(w({}, ie.styles[e] || {}), i), e === "fas" && ln("fa", t);
}
var wt, xt, Pt, Le = ie.styles, vo = ie.shims, mo = (wt = {}, J(wt, W, Object.values(Qe[W])), J(wt, B, Object.values(Qe[B])), wt), Nn = null, ba = {}, ga = {}, ya = {}, ha = {}, wa = {}, po = (xt = {}, J(xt, W, Object.keys(Ve[W])), J(xt, B, Object.keys(Ve[B])), xt);
function bo(e) {
  return ~Xi.indexOf(e);
}
function go(e, t) {
  var n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !bo(a) ? a : null;
}
var xa = function() {
  var t = function(i) {
    return Ut(Le, function(o, s, f) {
      return o[f] = Ut(s, i, {}), o;
    }, {});
  };
  ba = t(function(a, i, o) {
    if (i[3] && (a[i[3]] = o), i[2]) {
      var s = i[2].filter(function(f) {
        return typeof f == "number";
      });
      s.forEach(function(f) {
        a[f.toString(16)] = o;
      });
    }
    return a;
  }), ga = t(function(a, i, o) {
    if (a[o] = o, i[2]) {
      var s = i[2].filter(function(f) {
        return typeof f == "string";
      });
      s.forEach(function(f) {
        a[f] = o;
      });
    }
    return a;
  }), wa = t(function(a, i, o) {
    var s = i[2];
    return a[o] = o, s.forEach(function(f) {
      a[f] = o;
    }), a;
  });
  var n = "far" in Le || E.autoFetchSvg, r = Ut(vo, function(a, i) {
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
  ya = r.names, ha = r.unicodes, Nn = Nt(E.styleDefault, {
    family: E.familyDefault
  });
};
Zi(function(e) {
  Nn = Nt(e.styleDefault, {
    family: E.familyDefault
  });
});
xa();
function Rn(e, t) {
  return (ba[e] || {})[t];
}
function yo(e, t) {
  return (ga[e] || {})[t];
}
function Ee(e, t) {
  return (wa[e] || {})[t];
}
function Pa(e) {
  return ya[e] || {
    prefix: null,
    iconName: null
  };
}
function ho(e) {
  var t = ha[e], n = Rn("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function he() {
  return Nn;
}
var Dn = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Nt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.family, r = n === void 0 ? W : n, a = Ve[r][e], i = Je[r][e] || Je[r][a], o = e in ie.styles ? e : null;
  return i || o || null;
}
var cr = (Pt = {}, J(Pt, W, Object.keys(Qe[W])), J(Pt, B, Object.keys(Qe[B])), Pt);
function Rt(e) {
  var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.skipLookups, a = r === void 0 ? !1 : r, i = (t = {}, J(t, W, "".concat(E.cssPrefix, "-").concat(W)), J(t, B, "".concat(E.cssPrefix, "-").concat(B)), t), o = null, s = W;
  (e.includes(i[W]) || e.some(function(u) {
    return cr[W].includes(u);
  })) && (s = W), (e.includes(i[B]) || e.some(function(u) {
    return cr[B].includes(u);
  })) && (s = B);
  var f = e.reduce(function(u, c) {
    var d = go(E.cssPrefix, c);
    if (Le[c] ? (c = mo[s].includes(c) ? Ui[s][c] : c, o = c, u.prefix = c) : po[s].indexOf(c) > -1 ? (o = c, u.prefix = Nt(c, {
      family: s
    })) : d ? u.iconName = d : c !== E.replacementClass && c !== i[W] && c !== i[B] && u.rest.push(c), !a && u.prefix && u.iconName) {
      var y = o === "fa" ? Pa(u.iconName) : {}, b = Ee(u.prefix, u.iconName);
      y.prefix && (o = null), u.iconName = y.iconName || b || u.iconName, u.prefix = y.prefix || u.prefix, u.prefix === "far" && !Le.far && Le.fas && !E.autoFetchSvg && (u.prefix = "fas");
    }
    return u;
  }, Dn());
  return (e.includes("fa-brands") || e.includes("fab")) && (f.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (f.prefix = "fad"), !f.prefix && s === B && (Le.fass || E.autoFetchSvg) && (f.prefix = "fass", f.iconName = Ee(f.prefix, f.iconName) || f.iconName), (f.prefix === "fa" || o === "fa") && (f.prefix = he() || "fas"), f;
}
var wo = /* @__PURE__ */ function() {
  function e() {
    _i(this, e), this.definitions = {};
  }
  return Ii(e, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
        a[i] = arguments[i];
      var o = a.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        n.definitions[s] = w(w({}, n.definitions[s] || {}), o[s]), ln(s, o[s]);
        var f = Qe[W][s];
        f && ln(f, o[s]), xa();
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
}(), ur = [], Ne = {}, De = {}, xo = Object.keys(De);
function Po(e, t) {
  var n = t.mixoutsTo;
  return ur = e, Ne = {}, Object.keys(De).forEach(function(r) {
    xo.indexOf(r) === -1 && delete De[r];
  }), ur.forEach(function(r) {
    var a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach(function(o) {
      typeof a[o] == "function" && (n[o] = a[o]), At(a[o]) === "object" && Object.keys(a[o]).forEach(function(s) {
        n[o] || (n[o] = {}), n[o][s] = a[o][s];
      });
    }), r.hooks) {
      var i = r.hooks();
      Object.keys(i).forEach(function(o) {
        Ne[o] || (Ne[o] = []), Ne[o].push(i[o]);
      });
    }
    r.provides && r.provides(De);
  }), n;
}
function cn(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  var i = Ne[e] || [];
  return i.forEach(function(o) {
    t = o.apply(null, [t].concat(r));
  }), t;
}
function Oe(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var a = Ne[e] || [];
  a.forEach(function(i) {
    i.apply(null, n);
  });
}
function ue() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return De[e] ? De[e].apply(null, t) : void 0;
}
function un(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, n = e.prefix || he();
  if (t)
    return t = Ee(n, t) || t, fr(ka.definitions, n, t) || fr(ie.styles, n, t);
}
var ka = new wo(), ko = function() {
  E.autoReplaceSvg = !1, E.observeMutations = !1, Oe("noAuto");
}, Eo = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return de ? (Oe("beforeI2svg", t), ue("pseudoElements2svg", t), ue("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot;
    E.autoReplaceSvg === !1 && (E.autoReplaceSvg = !0), E.observeMutations = !0, fo(function() {
      $o({
        autoReplaceSvgRoot: n
      }), Oe("watch", t);
    });
  }
}, To = {
  icon: function(t) {
    if (t === null)
      return null;
    if (At(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: Ee(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], r = Nt(t[0]);
      return {
        prefix: r,
        iconName: Ee(r, n) || n
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(E.cssPrefix, "-")) > -1 || t.match(Ki))) {
      var a = Rt(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || he(),
        iconName: Ee(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof t == "string") {
      var i = he();
      return {
        prefix: i,
        iconName: Ee(i, t) || t
      };
    }
  }
}, ne = {
  noAuto: ko,
  config: E,
  dom: Eo,
  parse: To,
  library: ka,
  findIconDefinition: un,
  toHtml: ot
}, $o = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot, r = n === void 0 ? G : n;
  (Object.keys(ie.styles).length > 0 || E.autoFetchSvg) && de && E.autoReplaceSvg && ne.dom.i2svg({
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
      if (de) {
        var r = G.createElement("div");
        return r.innerHTML = e.html, r.children;
      }
    }
  }), e;
}
function So(e) {
  var t = e.children, n = e.main, r = e.mask, a = e.attributes, i = e.styles, o = e.transform;
  if (Ln(o) && n.found && !r.found) {
    var s = n.width, f = n.height, u = {
      x: s / f / 2,
      y: 0.5
    };
    a.style = Lt(w(w({}, i), {}, {
      "transform-origin": "".concat(u.x + o.x / 16, "em ").concat(u.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Oo(e) {
  var t = e.prefix, n = e.iconName, r = e.children, a = e.attributes, i = e.symbol, o = i === !0 ? "".concat(t, "-").concat(E.cssPrefix, "-").concat(n) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: w(w({}, a), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function Fn(e) {
  var t = e.icons, n = t.main, r = t.mask, a = e.prefix, i = e.iconName, o = e.transform, s = e.symbol, f = e.title, u = e.maskId, c = e.titleId, d = e.extra, y = e.watchable, b = y === void 0 ? !1 : y, S = r.found ? r : n, T = S.width, k = S.height, C = a === "fak", I = [E.replacementClass, i ? "".concat(E.cssPrefix, "-").concat(i) : ""].filter(function(O) {
    return d.classes.indexOf(O) === -1;
  }).filter(function(O) {
    return O !== "" || !!O;
  }).concat(d.classes).join(" "), $ = {
    children: [],
    attributes: w(w({}, d.attributes), {}, {
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
  b && ($.attributes[Se] = ""), f && ($.children.push({
    tag: "title",
    attributes: {
      id: $.attributes["aria-labelledby"] || "title-".concat(c || et())
    },
    children: [f]
  }), delete $.attributes.title);
  var v = w(w({}, $), {}, {
    prefix: a,
    iconName: i,
    main: n,
    mask: r,
    maskId: u,
    transform: o,
    symbol: s,
    styles: w(w({}, A), d.styles)
  }), X = r.found && n.found ? ue("generateAbstractMask", v) || {
    children: [],
    attributes: {}
  } : ue("generateAbstractIcon", v) || {
    children: [],
    attributes: {}
  }, te = X.children, l = X.attributes;
  return v.children = te, v.attributes = l, s ? Oo(v) : So(v);
}
function dr(e) {
  var t = e.content, n = e.width, r = e.height, a = e.transform, i = e.title, o = e.extra, s = e.watchable, f = s === void 0 ? !1 : s, u = w(w(w({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  f && (u[Se] = "");
  var c = w({}, o.styles);
  Ln(a) && (c.transform = ao({
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
function Ao(e) {
  var t = e.content, n = e.title, r = e.extra, a = w(w(w({}, r.attributes), n ? {
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
var Kt = ie.styles;
function dn(e) {
  var t = e[0], n = e[1], r = e.slice(4), a = On(r, 1), i = a[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(E.cssPrefix, "-").concat(ke.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(E.cssPrefix, "-").concat(ke.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(E.cssPrefix, "-").concat(ke.PRIMARY),
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
var Co = {
  found: !1,
  width: 512,
  height: 512
};
function _o(e, t) {
  !la && !E.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function vn(e, t) {
  var n = t;
  return t === "fa" && E.styleDefault !== null && (t = he()), new Promise(function(r, a) {
    if (ue("missingIconAbstract"), n === "fa") {
      var i = Pa(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && Kt[t] && Kt[t][e]) {
      var o = Kt[t][e];
      return r(dn(o));
    }
    _o(e, t), r(w(w({}, Co), {}, {
      icon: E.showMissingIcons && e ? ue("missingIconAbstract") || {} : {}
    }));
  });
}
var vr = function() {
}, mn = E.measurePerformance && mt && mt.mark && mt.measure ? mt : {
  mark: vr,
  measure: vr
}, Ke = 'FA "6.5.1"', Io = function(t) {
  return mn.mark("".concat(Ke, " ").concat(t, " begins")), function() {
    return Ea(t);
  };
}, Ea = function(t) {
  mn.mark("".concat(Ke, " ").concat(t, " ends")), mn.measure("".concat(Ke, " ").concat(t), "".concat(Ke, " ").concat(t, " begins"), "".concat(Ke, " ").concat(t, " ends"));
}, jn = {
  begin: Io,
  end: Ea
}, Tt = function() {
};
function mr(e) {
  var t = e.getAttribute ? e.getAttribute(Se) : null;
  return typeof t == "string";
}
function Mo(e) {
  var t = e.getAttribute ? e.getAttribute(Cn) : null, n = e.getAttribute ? e.getAttribute(_n) : null;
  return t && n;
}
function Lo(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(E.replacementClass);
}
function No() {
  if (E.autoReplaceSvg === !0)
    return $t.replace;
  var e = $t[E.autoReplaceSvg];
  return e || $t.replace;
}
function Ro(e) {
  return G.createElementNS("http://www.w3.org/2000/svg", e);
}
function Do(e) {
  return G.createElement(e);
}
function Ta(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.ceFn, r = n === void 0 ? e.tag === "svg" ? Ro : Do : n;
  if (typeof e == "string")
    return G.createTextNode(e);
  var a = r(e.tag);
  Object.keys(e.attributes || []).forEach(function(o) {
    a.setAttribute(o, e.attributes[o]);
  });
  var i = e.children || [];
  return i.forEach(function(o) {
    a.appendChild(Ta(o, {
      ceFn: r
    }));
  }), a;
}
function Fo(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var $t = {
  replace: function(t) {
    var n = t[0];
    if (n.parentNode)
      if (t[1].forEach(function(a) {
        n.parentNode.insertBefore(Ta(a), n);
      }), n.getAttribute(Se) === null && E.keepOriginalSource) {
        var r = G.createComment(Fo(n));
        n.parentNode.replaceChild(r, n);
      } else
        n.remove();
  },
  nest: function(t) {
    var n = t[0], r = t[1];
    if (~Mn(n).indexOf(E.replacementClass))
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
    n.setAttribute(Se, ""), n.innerHTML = o;
  }
};
function pr(e) {
  e();
}
function $a(e, t) {
  var n = typeof t == "function" ? t : Tt;
  if (e.length === 0)
    n();
  else {
    var r = pr;
    E.mutateApproach === Yi && (r = ye.requestAnimationFrame || pr), r(function() {
      var a = No(), i = jn.begin("mutate");
      e.map(a), i(), n();
    });
  }
}
var zn = !1;
function Sa() {
  zn = !0;
}
function pn() {
  zn = !1;
}
var _t = null;
function br(e) {
  if (ir && E.observeMutations) {
    var t = e.treeCallback, n = t === void 0 ? Tt : t, r = e.nodeCallback, a = r === void 0 ? Tt : r, i = e.pseudoElementsCallback, o = i === void 0 ? Tt : i, s = e.observeMutationsRoot, f = s === void 0 ? G : s;
    _t = new ir(function(u) {
      if (!zn) {
        var c = he();
        He(u).forEach(function(d) {
          if (d.type === "childList" && d.addedNodes.length > 0 && !mr(d.addedNodes[0]) && (E.searchPseudoElements && o(d.target), n(d.target)), d.type === "attributes" && d.target.parentNode && E.searchPseudoElements && o(d.target.parentNode), d.type === "attributes" && mr(d.target) && ~Bi.indexOf(d.attributeName))
            if (d.attributeName === "class" && Mo(d.target)) {
              var y = Rt(Mn(d.target)), b = y.prefix, S = y.iconName;
              d.target.setAttribute(Cn, b || c), S && d.target.setAttribute(_n, S);
            } else
              Lo(d.target) && a(d.target);
        });
      }
    }), de && _t.observe(f, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function jo() {
  _t && _t.disconnect();
}
function zo(e) {
  var t = e.getAttribute("style"), n = [];
  return t && (n = t.split(";").reduce(function(r, a) {
    var i = a.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (r[o] = s.join(":").trim()), r;
  }, {})), n;
}
function Yo(e) {
  var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "", a = Rt(Mn(e));
  return a.prefix || (a.prefix = he()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = yo(a.prefix, e.innerText) || Rn(a.prefix, fn(e.innerText))), !a.iconName && E.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function Ho(e) {
  var t = He(e.attributes).reduce(function(a, i) {
    return a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a;
  }, {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return E.autoA11y && (n ? t["aria-labelledby"] = "".concat(E.replacementClass, "-title-").concat(r || et()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Uo() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: se,
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
function gr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = Yo(e), r = n.iconName, a = n.prefix, i = n.rest, o = Ho(e), s = cn("parseNodeAttributes", {}, e), f = t.styleParser ? zo(e) : [];
  return w({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: se,
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
var Ko = ie.styles;
function Oa(e) {
  var t = E.autoReplaceSvg === "nest" ? gr(e, {
    styleParser: !1
  }) : gr(e);
  return ~t.extra.classes.indexOf(ca) ? ue("generateLayersText", e, t) : ue("generateSvgReplacementMutation", e, t);
}
var we = /* @__PURE__ */ new Set();
In.map(function(e) {
  we.add("fa-".concat(e));
});
Object.keys(Ve[W]).map(we.add.bind(we));
Object.keys(Ve[B]).map(we.add.bind(we));
we = at(we);
function yr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!de)
    return Promise.resolve();
  var n = G.documentElement.classList, r = function(d) {
    return n.add("".concat(or, "-").concat(d));
  }, a = function(d) {
    return n.remove("".concat(or, "-").concat(d));
  }, i = E.autoFetchSvg ? we : In.map(function(c) {
    return "fa-".concat(c);
  }).concat(Object.keys(Ko));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(ca, ":not([").concat(Se, "])")].concat(i.map(function(c) {
    return ".".concat(c, ":not([").concat(Se, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = He(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  var f = jn.begin("onTree"), u = s.reduce(function(c, d) {
    try {
      var y = Oa(d);
      y && c.push(y);
    } catch (b) {
      la || b.name === "MissingIcon" && console.error(b);
    }
    return c;
  }, []);
  return new Promise(function(c, d) {
    Promise.all(u).then(function(y) {
      $a(y, function() {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), f(), c();
      });
    }).catch(function(y) {
      f(), d(y);
    });
  });
}
function Wo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Oa(e).then(function(n) {
    n && $a([n], t);
  });
}
function Go(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : un(t || {}), a = n.mask;
    return a && (a = (a || {}).icon ? a : un(a || {})), e(r, w(w({}, n), {}, {
      mask: a
    }));
  };
}
var qo = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, a = r === void 0 ? se : r, i = n.symbol, o = i === void 0 ? !1 : i, s = n.mask, f = s === void 0 ? null : s, u = n.maskId, c = u === void 0 ? null : u, d = n.title, y = d === void 0 ? null : d, b = n.titleId, S = b === void 0 ? null : b, T = n.classes, k = T === void 0 ? [] : T, C = n.attributes, I = C === void 0 ? {} : C, $ = n.styles, A = $ === void 0 ? {} : $;
  if (t) {
    var v = t.prefix, X = t.iconName, te = t.icon;
    return Dt(w({
      type: "icon"
    }, t), function() {
      return Oe("beforeDOMElementCreation", {
        iconDefinition: t,
        params: n
      }), E.autoA11y && (y ? I["aria-labelledby"] = "".concat(E.replacementClass, "-title-").concat(S || et()) : (I["aria-hidden"] = "true", I.focusable = "false")), Fn({
        icons: {
          main: dn(te),
          mask: f ? dn(f.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: v,
        iconName: X,
        transform: w(w({}, se), a),
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
}, Bo = {
  mixout: function() {
    return {
      icon: Go(qo)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = yr, n.nodeCallback = Wo, n;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(n) {
      var r = n.node, a = r === void 0 ? G : r, i = n.callback, o = i === void 0 ? function() {
      } : i;
      return yr(a, o);
    }, t.generateSvgReplacementMutation = function(n, r) {
      var a = r.iconName, i = r.title, o = r.titleId, s = r.prefix, f = r.transform, u = r.symbol, c = r.mask, d = r.maskId, y = r.extra;
      return new Promise(function(b, S) {
        Promise.all([vn(a, s), c.iconName ? vn(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(T) {
          var k = On(T, 2), C = k[0], I = k[1];
          b([n, Fn({
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
      return Ln(o) && (u = ue("generateAbstractTransformGrouping", {
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
}, Xo = {
  mixout: function() {
    return {
      layer: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.classes, i = a === void 0 ? [] : a;
        return Dt({
          type: "layer"
        }, function() {
          Oe("beforeDOMElementCreation", {
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
}, Vo = {
  mixout: function() {
    return {
      counter: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.title, i = a === void 0 ? null : a, o = r.classes, s = o === void 0 ? [] : o, f = r.attributes, u = f === void 0 ? {} : f, c = r.styles, d = c === void 0 ? {} : c;
        return Dt({
          type: "counter",
          content: n
        }, function() {
          return Oe("beforeDOMElementCreation", {
            content: n,
            params: r
          }), Ao({
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
}, Jo = {
  mixout: function() {
    return {
      text: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.transform, i = a === void 0 ? se : a, o = r.title, s = o === void 0 ? null : o, f = r.classes, u = f === void 0 ? [] : f, c = r.attributes, d = c === void 0 ? {} : c, y = r.styles, b = y === void 0 ? {} : y;
        return Dt({
          type: "text",
          content: n
        }, function() {
          return Oe("beforeDOMElementCreation", {
            content: n,
            params: r
          }), dr({
            content: n,
            transform: w(w({}, se), i),
            title: s,
            extra: {
              attributes: d,
              styles: b,
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
      if (oa) {
        var u = parseInt(getComputedStyle(n).fontSize, 10), c = n.getBoundingClientRect();
        s = c.width / u, f = c.height / u;
      }
      return E.autoA11y && !a && (o.attributes["aria-hidden"] = "true"), Promise.resolve([n, dr({
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
}, Qo = new RegExp('"', "ug"), hr = [1105920, 1112319];
function Zo(e) {
  var t = e.replace(Qo, ""), n = uo(t, 0), r = n >= hr[0] && n <= hr[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: fn(a ? t[0] : t),
    isSecondary: r || a
  };
}
function wr(e, t) {
  var n = "".concat(zi).concat(t.replace(":", "-"));
  return new Promise(function(r, a) {
    if (e.getAttribute(n) !== null)
      return r();
    var i = He(e.children), o = i.filter(function(te) {
      return te.getAttribute(sn) === t;
    })[0], s = ye.getComputedStyle(e, t), f = s.getPropertyValue("font-family").match(Wi), u = s.getPropertyValue("font-weight"), c = s.getPropertyValue("content");
    if (o && !f)
      return e.removeChild(o), r();
    if (f && c !== "none" && c !== "") {
      var d = s.getPropertyValue("content"), y = ~["Sharp"].indexOf(f[2]) ? B : W, b = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(f[2]) ? Je[y][f[2].toLowerCase()] : Gi[y][u], S = Zo(d), T = S.value, k = S.isSecondary, C = f[0].startsWith("FontAwesome"), I = Rn(b, T), $ = I;
      if (C) {
        var A = ho(T);
        A.iconName && A.prefix && (I = A.iconName, b = A.prefix);
      }
      if (I && !k && (!o || o.getAttribute(Cn) !== b || o.getAttribute(_n) !== $)) {
        e.setAttribute(n, $), o && e.removeChild(o);
        var v = Uo(), X = v.extra;
        X.attributes[sn] = t, vn(I, b).then(function(te) {
          var l = Fn(w(w({}, v), {}, {
            icons: {
              main: te,
              mask: Dn()
            },
            prefix: b,
            iconName: $,
            extra: X,
            watchable: !0
          })), O = G.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(O, e.firstChild) : e.appendChild(O), O.outerHTML = l.map(function(Q) {
            return ot(Q);
          }).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function es(e) {
  return Promise.all([wr(e, "::before"), wr(e, "::after")]);
}
function ts(e) {
  return e.parentNode !== document.head && !~Hi.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(sn) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function xr(e) {
  if (de)
    return new Promise(function(t, n) {
      var r = He(e.querySelectorAll("*")).filter(ts).map(es), a = jn.begin("searchPseudoElements");
      Sa(), Promise.all(r).then(function() {
        a(), pn(), t();
      }).catch(function() {
        a(), pn(), n();
      });
    });
}
var ns = {
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
      E.searchPseudoElements && xr(a);
    };
  }
}, Pr = !1, rs = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Sa(), Pr = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        br(cn("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        jo();
      },
      watch: function(n) {
        var r = n.observeMutationsRoot;
        Pr ? pn() : br(cn("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, kr = function(t) {
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
}, as = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return kr(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-transform");
        return a && (n.transform = kr(a)), n;
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
      }, b = {
        outer: s,
        inner: d,
        path: y
      };
      return {
        tag: "g",
        attributes: w({}, b.outer),
        children: [{
          tag: "g",
          attributes: w({}, b.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: w(w({}, r.icon.attributes), b.path)
          }]
        }]
      };
    };
  }
}, Wt = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Er(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function is(e) {
  return e.tag === "g" ? e.children : [e];
}
var os = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-mask"), i = a ? Rt(a.split(" ").map(function(o) {
          return o.trim();
        })) : Dn();
        return i.prefix || (i.prefix = he()), n.mask = i, n.maskId = r.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(n) {
      var r = n.children, a = n.attributes, i = n.main, o = n.mask, s = n.maskId, f = n.transform, u = i.width, c = i.icon, d = o.width, y = o.icon, b = ro({
        transform: f,
        containerWidth: d,
        iconWidth: u
      }), S = {
        tag: "rect",
        attributes: w(w({}, Wt), {}, {
          fill: "white"
        })
      }, T = c.children ? {
        children: c.children.map(Er)
      } : {}, k = {
        tag: "g",
        attributes: w({}, b.inner),
        children: [Er(w({
          tag: c.tag,
          attributes: w(w({}, c.attributes), b.path)
        }, T))]
      }, C = {
        tag: "g",
        attributes: w({}, b.outer),
        children: [k]
      }, I = "mask-".concat(s || et()), $ = "clip-".concat(s || et()), A = {
        tag: "mask",
        attributes: w(w({}, Wt), {}, {
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
          children: is(y)
        }, A]
      };
      return r.push(v, {
        tag: "rect",
        attributes: w({
          fill: "currentColor",
          "clip-path": "url(#".concat($, ")"),
          mask: "url(#".concat(I, ")")
        }, Wt)
      }), {
        children: r,
        attributes: a
      };
    };
  }
}, ss = {
  provides: function(t) {
    var n = !1;
    ye.matchMedia && (n = ye.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var r = [], a = {
        fill: "currentColor"
      }, i = {
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
      var o = w(w({}, i), {}, {
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
        attributes: w(w({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: w(w({}, o), {}, {
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
          attributes: w(w({}, o), {}, {
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
          attributes: w(w({}, o), {}, {
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
}, fs = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-symbol"), i = a === null ? !1 : a === "" ? !0 : a;
        return n.symbol = i, n;
      }
    };
  }
}, ls = [oo, Bo, Xo, Vo, Jo, ns, rs, as, os, ss, fs];
Po(ls, {
  mixoutsTo: ne
});
ne.noAuto;
ne.config;
ne.library;
ne.dom;
var bn = ne.parse;
ne.findIconDefinition;
ne.toHtml;
var cs = ne.icon;
ne.layer;
ne.text;
ne.counter;
function us(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gn = { exports: {} }, kt = { exports: {} }, Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tr;
function ds() {
  if (Tr)
    return Y;
  Tr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
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
                case b:
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
  return Y.AsyncMode = f, Y.ConcurrentMode = u, Y.ContextConsumer = s, Y.ContextProvider = o, Y.Element = t, Y.ForwardRef = c, Y.Fragment = r, Y.Lazy = S, Y.Memo = b, Y.Portal = n, Y.Profiler = i, Y.StrictMode = a, Y.Suspense = d, Y.isAsyncMode = function(v) {
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
    return $(v) === b;
  }, Y.isPortal = function(v) {
    return $(v) === n;
  }, Y.isProfiler = function(v) {
    return $(v) === i;
  }, Y.isStrictMode = function(v) {
    return $(v) === a;
  }, Y.isSuspense = function(v) {
    return $(v) === d;
  }, Y.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === u || v === i || v === a || v === d || v === y || typeof v == "object" && v !== null && (v.$$typeof === S || v.$$typeof === b || v.$$typeof === o || v.$$typeof === s || v.$$typeof === c || v.$$typeof === k || v.$$typeof === C || v.$$typeof === I || v.$$typeof === T);
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
var $r;
function vs() {
  return $r || ($r = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function $(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === r || h === u || h === i || h === a || h === d || h === y || typeof h == "object" && h !== null && (h.$$typeof === S || h.$$typeof === b || h.$$typeof === o || h.$$typeof === s || h.$$typeof === c || h.$$typeof === k || h.$$typeof === C || h.$$typeof === I || h.$$typeof === T);
    }
    function A(h) {
      if (typeof h == "object" && h !== null) {
        var oe = h.$$typeof;
        switch (oe) {
          case t:
            var lt = h.type;
            switch (lt) {
              case f:
              case u:
              case r:
              case i:
              case a:
              case d:
                return lt;
              default:
                var Hn = lt && lt.$$typeof;
                switch (Hn) {
                  case s:
                  case c:
                  case S:
                  case b:
                  case o:
                    return Hn;
                  default:
                    return oe;
                }
            }
          case n:
            return oe;
        }
      }
    }
    var v = f, X = u, te = s, l = o, O = t, Q = c, x = r, K = S, m = b, g = n, q = i, Z = a, xe = d, ft = !1;
    function Ft(h) {
      return ft || (ft = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), p(h) || A(h) === f;
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
      return A(h) === b;
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
    function ee(h) {
      return A(h) === d;
    }
    H.AsyncMode = v, H.ConcurrentMode = X, H.ContextConsumer = te, H.ContextProvider = l, H.Element = O, H.ForwardRef = Q, H.Fragment = x, H.Lazy = K, H.Memo = m, H.Portal = g, H.Profiler = q, H.StrictMode = Z, H.Suspense = xe, H.isAsyncMode = Ft, H.isConcurrentMode = p, H.isContextConsumer = P, H.isContextProvider = D, H.isElement = N, H.isForwardRef = _, H.isFragment = F, H.isLazy = M, H.isMemo = R, H.isPortal = j, H.isProfiler = U, H.isStrictMode = z, H.isSuspense = ee, H.isValidElementType = $, H.typeOf = A;
  }()), H;
}
var Sr;
function Aa() {
  return Sr || (Sr = 1, process.env.NODE_ENV === "production" ? kt.exports = ds() : kt.exports = vs()), kt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Gt, Or;
function ms() {
  if (Or)
    return Gt;
  Or = 1;
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
  return Gt = a() ? Object.assign : function(i, o) {
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
  }, Gt;
}
var qt, Ar;
function Yn() {
  if (Ar)
    return qt;
  Ar = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return qt = e, qt;
}
var Bt, Cr;
function Ca() {
  return Cr || (Cr = 1, Bt = Function.call.bind(Object.prototype.hasOwnProperty)), Bt;
}
var Xt, _r;
function ps() {
  if (_r)
    return Xt;
  _r = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Yn(), n = {}, r = Ca();
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
            var b = u ? u() : "";
            e(
              "Failed " + s + " type: " + d.message + (b ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Xt = a, Xt;
}
var Vt, Ir;
function bs() {
  if (Ir)
    return Vt;
  Ir = 1;
  var e = Aa(), t = ms(), n = Yn(), r = Ca(), a = ps(), i = function() {
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
  return Vt = function(s, f) {
    var u = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function d(p) {
      var P = p && (u && p[u] || p[c]);
      if (typeof P == "function")
        return P;
    }
    var y = "<<anonymous>>", b = {
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
      node: Q(),
      objectOf: l,
      oneOf: te,
      oneOfType: O,
      shape: K,
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
      function N(F, M, R, j, U, z, ee) {
        if (j = j || y, z = z || R, ee !== n) {
          if (f) {
            var h = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw h.name = "Invariant Violation", h;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var oe = j + ":" + R;
            !P[oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            D < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + z + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[oe] = !0, D++);
          }
        }
        return M[R] == null ? F ? M[R] === null ? new T("The " + U + " `" + z + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new T("The " + U + " `" + z + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : p(M, R, j, U, z);
      }
      var _ = N.bind(null, !1);
      return _.isRequired = N.bind(null, !0), _;
    }
    function C(p) {
      function P(D, N, _, F, M, R) {
        var j = D[N], U = Z(j);
        if (U !== p) {
          var z = xe(j);
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
          var j = Z(R);
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
          var R = Z(M);
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
          var R = Z(M);
          return new T("Invalid " + _ + " `" + F + "` of type " + ("`" + R + "` supplied to `" + N + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(p);
    }
    function X(p) {
      function P(D, N, _, F, M) {
        if (!(D[N] instanceof p)) {
          var R = p.name || y, j = Ft(D[N]);
          return new T("Invalid " + F + " `" + M + "` of type " + ("`" + j + "` supplied to `" + _ + "`, expected ") + ("instance of `" + R + "`."));
        }
        return null;
      }
      return k(P);
    }
    function te(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function P(D, N, _, F, M) {
        for (var R = D[N], j = 0; j < p.length; j++)
          if (S(R, p[j]))
            return null;
        var U = JSON.stringify(p, function(ee, h) {
          var oe = xe(h);
          return oe === "symbol" ? String(h) : h;
        });
        return new T("Invalid " + F + " `" + M + "` of value `" + String(R) + "` " + ("supplied to `" + _ + "`, expected one of " + U + "."));
      }
      return k(P);
    }
    function l(p) {
      function P(D, N, _, F, M) {
        if (typeof p != "function")
          return new T("Property `" + M + "` of component `" + _ + "` has invalid PropType notation inside objectOf.");
        var R = D[N], j = Z(R);
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
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ft(D) + " at index " + P + "."
          ), o;
      }
      function N(_, F, M, R, j) {
        for (var U = [], z = 0; z < p.length; z++) {
          var ee = p[z], h = ee(_, F, M, R, j, n);
          if (h == null)
            return null;
          h.data && r(h.data, "expectedType") && U.push(h.data.expectedType);
        }
        var oe = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new T("Invalid " + R + " `" + j + "` supplied to " + ("`" + M + "`" + oe + "."));
      }
      return k(N);
    }
    function Q() {
      function p(P, D, N, _, F) {
        return g(P[D]) ? null : new T("Invalid " + _ + " `" + F + "` supplied to " + ("`" + N + "`, expected a ReactNode."));
      }
      return k(p);
    }
    function x(p, P, D, N, _) {
      return new T(
        (p || "React class") + ": " + P + " type `" + D + "." + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _ + "`."
      );
    }
    function K(p) {
      function P(D, N, _, F, M) {
        var R = D[N], j = Z(R);
        if (j !== "object")
          return new T("Invalid " + F + " `" + M + "` of type `" + j + "` " + ("supplied to `" + _ + "`, expected `object`."));
        for (var U in p) {
          var z = p[U];
          if (typeof z != "function")
            return x(_, F, M, U, xe(z));
          var ee = z(R, U, _, F, M + "." + U, n);
          if (ee)
            return ee;
        }
        return null;
      }
      return k(P);
    }
    function m(p) {
      function P(D, N, _, F, M) {
        var R = D[N], j = Z(R);
        if (j !== "object")
          return new T("Invalid " + F + " `" + M + "` of type `" + j + "` " + ("supplied to `" + _ + "`, expected `object`."));
        var U = t({}, D[N], p);
        for (var z in U) {
          var ee = p[z];
          if (r(p, z) && typeof ee != "function")
            return x(_, F, M, z, xe(ee));
          if (!ee)
            return new T(
              "Invalid " + F + " `" + M + "` key `" + z + "` supplied to `" + _ + "`.\nBad object: " + JSON.stringify(D[N], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(p), null, "  ")
            );
          var h = ee(R, z, _, F, M + "." + z, n);
          if (h)
            return h;
        }
        return null;
      }
      return k(P);
    }
    function g(p) {
      switch (typeof p) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !p;
        case "object":
          if (Array.isArray(p))
            return p.every(g);
          if (p === null || s(p))
            return !0;
          var P = d(p);
          if (P) {
            var D = P.call(p), N;
            if (P !== p.entries) {
              for (; !(N = D.next()).done; )
                if (!g(N.value))
                  return !1;
            } else
              for (; !(N = D.next()).done; ) {
                var _ = N.value;
                if (_ && !g(_[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function q(p, P) {
      return p === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function Z(p) {
      var P = typeof p;
      return Array.isArray(p) ? "array" : p instanceof RegExp ? "object" : q(P, p) ? "symbol" : P;
    }
    function xe(p) {
      if (typeof p > "u" || p === null)
        return "" + p;
      var P = Z(p);
      if (P === "object") {
        if (p instanceof Date)
          return "date";
        if (p instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function ft(p) {
      var P = xe(p);
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
    function Ft(p) {
      return !p.constructor || !p.constructor.name ? y : p.constructor.name;
    }
    return b.checkPropTypes = a, b.resetWarningCache = a.resetWarningCache, b.PropTypes = b, b;
  }, Vt;
}
var Jt, Mr;
function gs() {
  if (Mr)
    return Jt;
  Mr = 1;
  var e = Yn();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Jt = function() {
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
  }, Jt;
}
if (process.env.NODE_ENV !== "production") {
  var ys = Aa(), hs = !0;
  gn.exports = bs()(ys.isElement, hs);
} else
  gn.exports = gs()();
var ws = gn.exports;
const L = /* @__PURE__ */ us(ws);
function Lr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lr(Object(n), !0).forEach(function(r) {
      Re(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function It(e) {
  "@babel/helpers - typeof";
  return It = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, It(e);
}
function Re(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function xs(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Ps(e, t) {
  if (e == null)
    return {};
  var n = xs(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function yn(e) {
  return ks(e) || Es(e) || Ts(e) || $s();
}
function ks(e) {
  if (Array.isArray(e))
    return hn(e);
}
function Es(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Ts(e, t) {
  if (e) {
    if (typeof e == "string")
      return hn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return hn(e, t);
  }
}
function hn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function $s() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ss(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, i = e.bounce, o = e.shake, s = e.flash, f = e.spin, u = e.spinPulse, c = e.spinReverse, d = e.pulse, y = e.fixedWidth, b = e.inverse, S = e.border, T = e.listItem, k = e.flip, C = e.size, I = e.rotation, $ = e.pull, A = (t = {
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
    "fa-inverse": b,
    "fa-border": S,
    "fa-li": T,
    "fa-flip": k === !0,
    "fa-flip-horizontal": k === "horizontal" || k === "both",
    "fa-flip-vertical": k === "vertical" || k === "both"
  }, Re(t, "fa-".concat(C), typeof C < "u" && C !== null), Re(t, "fa-rotate-".concat(I), typeof I < "u" && I !== null && I !== 0), Re(t, "fa-pull-".concat($), typeof $ < "u" && $ !== null), Re(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(A).map(function(v) {
    return A[v] ? v : null;
  }).filter(function(v) {
    return v;
  });
}
function Os(e) {
  return e = e - 0, e === e;
}
function _a(e) {
  return Os(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var As = ["style"];
function Cs(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function _s(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = _a(n.slice(0, r)), i = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[Cs(a)] = i : t[a] = i, t;
  }, {});
}
function Ia(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(f) {
    return Ia(e, f);
  }), a = Object.keys(t.attributes || {}).reduce(function(f, u) {
    var c = t.attributes[u];
    switch (u) {
      case "class":
        f.attrs.className = c, delete t.attributes.class;
        break;
      case "style":
        f.attrs.style = _s(c);
        break;
      default:
        u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? f.attrs[u.toLowerCase()] = c : f.attrs[_a(u)] = c;
    }
    return f;
  }, {
    attrs: {}
  }), i = n.style, o = i === void 0 ? {} : i, s = Ps(n, As);
  return a.attrs.style = be(be({}, a.attrs.style), o), e.apply(void 0, [t.tag, be(be({}, a.attrs), s)].concat(yn(r)));
}
var Ma = !1;
try {
  Ma = process.env.NODE_ENV === "production";
} catch {
}
function Is() {
  if (!Ma && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Nr(e) {
  if (e && It(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (bn.icon)
    return bn.icon(e);
  if (e === null)
    return null;
  if (e && It(e) === "object" && e.prefix && e.iconName)
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
function Qt(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Re({}, e, t) : {};
}
var st = /* @__PURE__ */ tt.forwardRef(function(e, t) {
  var n = e.icon, r = e.mask, a = e.symbol, i = e.className, o = e.title, s = e.titleId, f = e.maskId, u = Nr(n), c = Qt("classes", [].concat(yn(Ss(e)), yn(i.split(" ")))), d = Qt("transform", typeof e.transform == "string" ? bn.transform(e.transform) : e.transform), y = Qt("mask", Nr(r)), b = cs(u, be(be(be(be({}, c), d), y), {}, {
    symbol: a,
    title: o,
    titleId: s,
    maskId: f
  }));
  if (!b)
    return Is("Could not find icon", u), null;
  var S = b.abstract, T = {
    ref: t
  };
  return Object.keys(e).forEach(function(k) {
    st.defaultProps.hasOwnProperty(k) || (T[k] = e[k]);
  }), Ms(S[0], T);
});
st.displayName = "FontAwesomeIcon";
st.propTypes = {
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
st.defaultProps = {
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
var Ms = Ia.bind(null, tt.createElement);
const Rr = "underline decoration-dashed px-2 py-1 rounded hover:decoration-solid", Ls = {
  primary: `${Rr} text-ev-primary hover:text-ev-primary-hard`,
  secondary: `${Rr} text-ev-secondary hover:text-ev-secondary-hard`
}, Ns = ({ color: e = "primary" }) => Ls[e], Rs = Pn(
  ({ children: e, ...t }, n) => {
    const { linkProps: r } = Ti(t, n);
    return /* @__PURE__ */ Ae(
      "a",
      {
        ref: n,
        ...nt(t),
        ...r,
        className: wn(Ns(t), t.className),
        children: [
          t.target === "_blank" && /* @__PURE__ */ V(st, { icon: Ci, className: "mr-2" }),
          e
        ]
      }
    );
  }
), Hs = (e) => /* @__PURE__ */ V(Rs, { ...e, target: "_blank", rel: "noopener" }), Us = ({ children: e, className: t, ...n }) => /* @__PURE__ */ Ae("h1", { ...n, className: "text-ev-primary text-6xl", children: [
  /* @__PURE__ */ V("span", { children: e }),
  n.id && /* @__PURE__ */ V(Ue, { id: n.id })
] }), Ks = ({ children: e, className: t, ...n }) => /* @__PURE__ */ Ae("h2", { ...n, className: "text-ev-primary text-5xl", children: [
  /* @__PURE__ */ V("span", { children: e }),
  n.id && /* @__PURE__ */ V(Ue, { id: n.id })
] }), Ws = ({ children: e, className: t, ...n }) => /* @__PURE__ */ Ae("h3", { ...n, className: "text-ev-primary text-4xl", children: [
  /* @__PURE__ */ V("span", { children: e }),
  n.id && /* @__PURE__ */ V(Ue, { id: n.id })
] }), Gs = ({ children: e, className: t, ...n }) => /* @__PURE__ */ Ae("h4", { ...n, className: "text-ev-primary text-3xl", children: [
  /* @__PURE__ */ V("span", { children: e }),
  n.id && /* @__PURE__ */ V(Ue, { id: n.id })
] }), qs = ({ children: e, className: t, ...n }) => /* @__PURE__ */ Ae("h1", { ...n, className: "text-ev-primary text-2xl", children: [
  /* @__PURE__ */ V("span", { children: e }),
  n.id && /* @__PURE__ */ V(Ue, { id: n.id })
] }), Bs = ({ children: e, className: t, ...n }) => /* @__PURE__ */ Ae("h6", { ...n, className: "text-ev-primary text-xl", children: [
  /* @__PURE__ */ V("span", { children: e }),
  n.id && /* @__PURE__ */ V(Ue, { id: n.id })
] }), Xs = ({ children: e, className: t, ...n }) => /* @__PURE__ */ V("p", { ...n, className: "text-ev-dark dark:text-ev-light text-base", children: e }), Vs = ({ children: e, className: t, ...n }) => /* @__PURE__ */ V(
  "strong",
  {
    ...n,
    className: "text-ev-dark dark:text-ev-light text-base font-bold",
    children: e
  }
), Js = ({ children: e, className: t, ...n }) => /* @__PURE__ */ V(
  "code",
  {
    ...n,
    className: "px-1 text-ev-dark bg-ev-light-harder dark:text-ev-light  dark:bg-ev-dark-harder text-base rounded-md",
    children: e
  }
), Ue = ({ id: e }) => /* @__PURE__ */ V("a", { href: `#${e}`, className: "px-2", children: "#" });
export {
  Vs as Bold,
  zs as Button,
  Js as Code,
  Us as H1,
  Ks as H2,
  Ws as H3,
  Gs as H4,
  qs as H5,
  Bs as H6,
  Ys as IconButton,
  Rs as Link,
  Hs as OpenLink,
  Xs as P
};
