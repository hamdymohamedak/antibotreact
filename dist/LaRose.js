"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ak_Alert = Ak_Alert;
exports.AnimatedText = AnimatedText;
exports.BlockUser = void 0;
exports.Button = Button;
exports.CounterDown = CounterDown;
exports.CounterUp = CounterUp;
exports.LaRoseText = LaRoseText;
exports.Loader = Loader;
exports.ModernBtn = ModernBtn;
exports.Notification = Notification;
exports.RandomAnimate = RandomAnimate;
exports.RoseBox = RoseBox;
exports.Route = exports.RoseRouter = exports.RoseParent = void 0;
exports.SeeMore = SeeMore;
exports.ShinyButton = ShinyButton;
exports.ShinyText = ShinyText;
exports.SideBox = SideBox;
exports.SideText = SideText;
exports.Slider = Slider;
exports.SnakeMouse = exports.SmoothParent = void 0;
exports.SplitText = SplitText;
exports.Spring = Spring;
exports.SwitchCase = SwitchCase;
exports.Table = void 0;
exports.Variants = Variants;
exports.ViewportContainer = void 0;
exports.WaveText = WaveText;
exports["default"] = TestManegar;
exports.useBatteryStatus = exports.getContinent = void 0;
exports.useClipboard = useClipboard;
exports.useColorScheme = useColorScheme;
exports.useContinentContent = void 0;
exports.useDocumentTitle = useDocumentTitle;
exports.useGetContacts = void 0;
exports.useHardwareConcurrency = useHardwareConcurrency;
exports.useLocalStorage = useLocalStorage;
exports.useOnlineStatus = useOnlineStatus;
exports.usePhotoCapture = void 0;
exports.usePreferredLanguage = usePreferredLanguage;
exports.useRand = useRand;
exports.useViewportVisibility = exports.useUserCountry = exports.useRouter = exports.useRenderTime = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // LaRose is a Library was built with "Hamdy Mohamed Askander"
// for More Visit => https://askander.vercel.app
// Happy Hacking (˶ˆᗜˆ˵)
function Ak_Alert(_ref) {
  var title = _ref.title,
    time = _ref.time,
    _ref$edit = _ref.edit,
    edit = _ref$edit === void 0 ? {} : _ref$edit,
    children = _ref.children;
  var _useState = (0, _react.useState)("flex"),
    _useState2 = _slicedToArray(_useState, 2),
    display = _useState2[0],
    setDisplay = _useState2[1];
  (0, _react.useEffect)(function () {
    if (time === Infinity) {
      setDisplay("flex");
      return;
    }
    var timer = setTimeout(function () {
      setDisplay("none");
    }, time);
    return function () {
      return clearTimeout(timer);
    };
  }, [time]);
  var styles = {
    info: _objectSpread({
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      width: "20rem",
      padding: "0.75rem",
      display: display,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "start",
      background: "#509AF8",
      borderRadius: "8px",
      boxShadow: "0px 0px 5px -3px #111",
      position: "relative",
      zIndex: "999"
    }, edit),
    infoIcon: {
      width: "20px",
      height: "20px",
      transform: "translateY(-2px)",
      marginRight: "8px"
    },
    infoTitle: {
      fontWeight: 500,
      fontSize: "1rem",
      color: "#fff"
    },
    infoClose: {
      width: "1.1rem",
      height: "1.1rem",
      cursor: "pointer",
      marginLeft: "auto",
      position: "absolute",
      // Position close button to the right of the alert
      right: "0.9rem",
      top: "50%",
      transform: "translateY(-50%)"
    }
  };
  var handleClose = function handleClose() {
    setDisplay("none");
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.info
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.infoIcon
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    viewBox: "0 0 24 24",
    height: 24,
    fill: "none"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#fff",
    d: "m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.infoTitle
  }, title), /*#__PURE__*/_react["default"].createElement("div", {
    onClick: handleClose,
    style: styles.infoClose
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    height: 20,
    viewBox: "0 0 20 20",
    width: 20,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z",
    fill: "#fff"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginLeft: "1rem"
    }
  }, children)));
}
function Button(_ref2) {
  var h = _ref2.h,
    w = _ref2.w,
    event = _ref2.event,
    children = _ref2.children,
    _ref2$edit = _ref2.edit,
    edit = _ref2$edit === void 0 ? {} : _ref2$edit;
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    hover = _useState4[0],
    setHover = _useState4[1];
  var baseStyle = _objectSpread({
    height: "".concat(h, "rem"),
    width: "".concat(w, "rem"),
    backgroundImage: "linear-gradient(to right, #e52d27 0%, #b31217 51%, #e52d27 100%)",
    margin: "0.9rem",
    padding: "1rem 2.2rem",
    textAlign: "center",
    textTransform: "uppercase",
    transition: "0.5s",
    backgroundSize: "200% auto",
    color: "white",
    boxShadow: "0 0 20px #eee",
    borderRadius: "10px",
    display: "flex",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    border: "none"
  }, edit);
  var hoverStyle = {
    backgroundPosition: "right center",
    color: "#fff",
    textDecoration: "none"
  };
  var combinedStyle = hover ? _objectSpread(_objectSpread({}, baseStyle), hoverStyle) : baseStyle;
  var handleEvent = function handleEvent() {
    if (typeof event === "function") {
      event();
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
    style: combinedStyle,
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    },
    onClick: handleEvent
  }, children));
}
function CounterUp(_ref3) {
  var start = _ref3.start,
    end = _ref3.end,
    time = _ref3.time,
    size = _ref3.size,
    weight = _ref3.weight;
  var _useState5 = (0, _react.useState)(start),
    _useState6 = _slicedToArray(_useState5, 2),
    number = _useState6[0],
    setNumber = _useState6[1];
  (0, _react.useEffect)(function () {
    if (number < end) {
      var timer = setTimeout(function () {
        setNumber(function (prevNumber) {
          return prevNumber + 1;
        });
      }, time);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [number, end, time]);
  (0, _react.useEffect)(function () {
    setNumber(start);
  }, [start]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: "".concat(size, "rem"),
      fontWeight: "".concat(weight)
    }
  }, number);
}
function CounterDown(_ref4) {
  var start = _ref4.start,
    end = _ref4.end,
    time = _ref4.time,
    size = _ref4.size;
  var _useState7 = (0, _react.useState)(start),
    _useState8 = _slicedToArray(_useState7, 2),
    number = _useState8[0],
    setNumber = _useState8[1];
  (0, _react.useEffect)(function () {
    if (number > end) {
      var timer = setTimeout(function () {
        setNumber(function (prevNumber) {
          return prevNumber - 1;
        });
      }, time * 1000); // time is in seconds, so convert to milliseconds
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [number, end, time]);
  (0, _react.useEffect)(function () {
    setNumber(start);
  }, [start]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: "".concat(size, "rem")
    }
  }, number);
}
function ModernBtn(_ref5) {
  var title = _ref5.title,
    allColor = _ref5.allColor,
    fontSize = _ref5.fontSize,
    color = _ref5.color,
    hoverColor = _ref5.hoverColor,
    clickEvent = _ref5.clickEvent,
    _ref5$h = _ref5.h,
    h = _ref5$h === void 0 ? "4" : _ref5$h,
    _ref5$w = _ref5.w,
    w = _ref5$w === void 0 ? "11" : _ref5$w;
  var handleClick = function handleClick() {
    if (typeof clickEvent === "function") {
      clickEvent();
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n                .animated-button {\n                    position: relative;\n                    display: flex;\n                    align-items: center;\n                    gap: 0.2rem;\n                    padding: 1rem 2rem;\n                    border: 4px solid transparent;\n                    font-size: ".concat(fontSize, "rem;\n                    background-color: inherit;\n                    border-radius: 100px;\n                    font-weight: 600;\n                    color: ").concat(color, ";\n                    box-shadow: 0 0 0 2px ").concat(allColor, ";\n                    cursor: pointer;\n                    overflow: hidden;\n                    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);\n                    height: ").concat(h, "rem;\n                    min-width: ").concat(w, "rem;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    font-size: 1.3rem;\n                }\n                .animated-button svg {\n                    position: absolute;\n                    width: 1.5rem;\n                    fill: ").concat(allColor, ";\n                    z-index: 9;\n                    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);\n                }\n                .animated-button .arr-1 {\n                    right: 16px;\n                }\n                .animated-button .arr-2 {\n                    left: -25%;\n                }\n                .animated-button .circle {\n                    position: absolute;\n                    top: 50%;\n                    left: 50%;\n                    transform: translate(-50%, -50%);\n                    width: 1.1rem;\n                    height: 1.1rem;\n                    background-color: ").concat(allColor, ";\n                    border-radius: 50%;\n                    opacity: 0;\n                    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);\n                }\n                .animated-button .text {\n                    position: relative;\n                    z-index: 1;\n                    transform: translateX(-12px);\n                    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);\n                }\n                .animated-button:hover {\n                    box-shadow: 0 0 0 12px transparent;\n                    color: ").concat(hoverColor, ";\n                    border-radius: 12px;\n                }\n                .animated-button:hover .arr-1 {\n                    right: -25%;\n                }\n                .animated-button:hover .arr-2 {\n                    left: 1rem;\n                }\n                .animated-button:hover .text {\n                    transform: translateX(12px);\n                }\n                .animated-button:hover svg {\n                    fill: #212121;\n                }\n                .animated-button:active {\n                    transform: scale(0.95);\n                    box-shadow: 0 0 0 4px ").concat(allColor, ";\n                }\n                .animated-button:hover .circle {\n                    width: 13.75rem;\n                    height: 13.75rem;\n                    opacity: 1;\n                }\n            ")), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleClick,
    className: "animated-button"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    viewBox: "0 0 24 24",
    className: "arr-2",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
  })), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text"
  }, title), /*#__PURE__*/_react["default"].createElement("span", {
    className: "circle"
  }), /*#__PURE__*/_react["default"].createElement("svg", {
    viewBox: "0 0 24 24",
    className: "arr-1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
  }))));
}
function SwitchCase(_ref6) {
  var w = _ref6.w,
    h = _ref6.h;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, " \n    .toggler {\n      width: 3rem;\n      margin: 40px auto;\n    }\n    .toggler input {\n      display: none;\n    }\n    .toggler label {\n      display: block;\n      position: relative;\n      width:".concat(w, "rem;\n      height: ").concat(h, "rem;\n      border: 1px solid #d6d6d6;\n      border-radius: 36px;\n      background: #e4e8e8;\n      cursor: pointer;\n    }\n    .toggler label::after {\n      display: block;\n      border-radius: 100%;\n      background-color: #d7062a;\n      content: '';\n      animation-name: toggler-size;\n      animation-duration: 0.15s;\n      animation-timing-function: ease-out;\n      animation-direction: forwards;\n      animation-iteration-count: 1;\n      animation-play-state: running;\n    }\n    .toggler label::after, .toggler label .toggler-on, .toggler label .toggler-off {\n      position: absolute;\n      top: 50%;\n      left: 25%;\n      width: 26px;\n      height: 26px;\n      transform: translateY(-50%) translateX(-50%);\n      transition: left 0.15s ease-in-out, background-color 0.2s ease-out, width 0.15s ease-in-out, height 0.15s ease-in-out, opacity 0.15s ease-in-out;\n    }\n    .toggler input:checked + label::after, .toggler input:checked + label .toggler-on, .toggler input:checked + label .toggler-off {\n      left: 75%;\n    }\n    .toggler input:checked + label::after {\n      background-color: #50ac5d;\n      animation-name: toggler-size2;\n    }\n    .toggler .toggler-on, .toggler .toggler-off {\n      opacity: 1;\n      z-index: 2;\n    }\n    .toggler input:checked + label .toggler-off, .toggler input:not(:checked) + label .toggler-on {\n      width: 0;\n      height: 0;\n      opacity: 0;\n    }\n    .toggler .path {\n      fill: none;\n      stroke: #fefefe;\n      stroke-width: 7px;\n      stroke-linecap: round;\n      stroke-miterlimit: 10;\n    }\n    @keyframes toggler-size {\n      0%, 100% {\n        width: 1.5rem;\n        height: 1.5rem;\n      }\n      50% {\n        width: 0.75rem;\n        height: 0.75rem;\n      }\n    }\n    @keyframes toggler-size2 {\n      0%, 100% {\n        width: 1.5rem;\n        height: 1.5rme;\n      }\n      50% {\n        width: 0.75rem;\n        height: 0.75rem;\n      }\n    }\n            ")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "toggler"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    id: "toggler-1",
    name: "toggler-1",
    type: "checkbox",
    defaultValue: 1
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "toggler-1"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "toggler-on",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 130.2 130.2"
  }, /*#__PURE__*/_react["default"].createElement("polyline", {
    className: "path check",
    points: "100.2,40.2 51.5,88.8 29.8,67.5"
  })), /*#__PURE__*/_react["default"].createElement("svg", {
    className: "toggler-off",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 130.2 130.2"
  }, /*#__PURE__*/_react["default"].createElement("line", {
    className: "path line",
    x1: "34.4",
    y1: "34.4",
    x2: "95.8",
    y2: "95.8"
  }), /*#__PURE__*/_react["default"].createElement("line", {
    className: "path line",
    x1: "95.8",
    y1: "34.4",
    x2: "34.4",
    y2: "95.8"
  })))));
}
function Loader() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n        /* Assuming base font size of 16px, so 1rem = 16px */\n.loading {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.loading-wide {\n    width: 17.375rem;\n    height: 17.375rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n.color {\n  background-color: #3395ff;\n}\n.l1 {\n  width: 0.9375rem; /* 15px / 16px */\n  height: 4.0625rem; /* 65px / 16px */\n  position: absolute;\n  animation: move-h 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n.l2 {\n  width: 0.9375rem; /* 15px / 16px */\n  height: 3.75rem;  /* 60px / 16px */\n  position: absolute;\n  transform: rotate(90deg);\n  animation: move-v 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n@keyframes move-h {\n  0% {\n    top: 0;\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  50% {\n    top: 30%;\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  100% {\n    top: 100%;\n    opacity: 0;\n  }\n}\n@keyframes move-v {\n  0% {\n    left: 0;\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  50% {\n    left: 45%;\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  100% {\n    left: 100%;\n    opacity: 0;\n  }\n}\n.animation-effect-light {\n  animation: effect 0.2s 0.1s infinite linear;\n}\n.animation-effect-light-d {\n  animation: effect 0.3s 0.2s infinite linear;\n}\n.animation-effect-rot {\n  animation: rot 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n.animation-effect-scale {\n  animation: scale 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n@keyframes effect {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes rot {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.9);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.e1 {\n  width: 0.0625rem; /* 1px / 16px */\n  height: 2.5rem;   /* 40px / 16px */\n  opacity: 0.3;\n  position: absolute;\n  top: 0;\n  left: 0.5rem;    /* 8px / 16px */\n}\n.e2 {\n  width: 3.75rem;  /* 60px / 16px */\n  height: 0.0625rem; /* 1px / 16px */\n  opacity: 0.8;\n  position: absolute;\n  top: 0.5rem;    /* 8px / 16px */\n  left: 0;\n}\n.e3 {\n  position: absolute;\n  top: 0.625rem;  /* 10px / 16px */\n  left: 0.75rem;  /* 12px / 16px */\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: 900;\n  font-size: 1.125rem;  /* 18px / 16px */\n  color: #3395ff;\n}\n.e4 {\n  width: 0.0625rem; /* 1px / 16px */\n  height: 2.5rem;   /* 40px / 16px */\n  opacity: 0.3;\n  position: absolute;\n  top: 5.625rem;   /* 90px / 16px */\n  right: 0.625rem; /* 10px / 16px */\n}\n.e5 {\n  width: 2.5rem;   /* 40px / 16px */\n  height: 0.0625rem; /* 1px / 16px */\n  opacity: 0.3;\n  position: absolute;\n  top: 6.25rem;    /* 100px / 16px */\n  right: 0;\n}\n.e6 {\n  position: absolute;\n  top: 6.25rem;    /* 100px / 16px */\n  right: 0;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 2rem;  /* 32px / 16px */\n  color: #3395ff;\n}\n.e7 {\n  width: 0.0625rem; /* 1px / 16px */\n  height: 1.25rem;  /* 20px / 16px */\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transform: rotate(45deg);\n  animation: height 1s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n@keyframes height {\n  0% {\n    bottom: 0%;\n    left: 0%;\n    height: 0;\n  }\n  25% {\n    height: 5.625rem; /* 90px / 16px */\n  }\n  50% {\n    bottom: 100%;\n    left: 100%;\n    height: 5.625rem; /* 90px / 16px */\n  }\n  75% {\n    height: 0;\n  }\n  100% {\n    bottom: 0%;\n    left: 0%;\n    height: 0;\n  }\n}\n.e8 {\n  width: 1.25rem;  /* 20px / 16px */\n  height: 0.0625rem; /* 1px / 16px */\n  position: absolute;\n  bottom: 50%;\n  left: 0;\n  animation: width 1.5s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n@keyframes width {\n  0% {\n    left: 0%;\n    width: 0;\n  }\n  50% {\n    left: 100%;\n    width: 5.625rem; /* 90px / 16px */\n  }\n  100% {\n    left: 0%;\n    width: 0;\n  }\n}\n        "), /*#__PURE__*/_react["default"].createElement("div", {
    className: "loading"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "loading-wide"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "l1 color"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "l2 color"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "e1 color animation-effect-light"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "e2 color animation-effect-light-d"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "e3 animation-effect-rot"
  }, "X"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "e4 color animation-effect-light"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "e5 color animation-effect-light-d"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "e6 animation-effect-scale"
  }, "*"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "e7 color"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "e8 color"
  }))));
}
function Slider(_ref7) {
  var children = _ref7.children,
    _ref7$autoplay = _ref7.autoplay,
    autoplay = _ref7$autoplay === void 0 ? false : _ref7$autoplay,
    _ref7$autoplayInterva = _ref7.autoplayInterval,
    autoplayInterval = _ref7$autoplayInterva === void 0 ? 3000 : _ref7$autoplayInterva;
  var _useState9 = (0, _react.useState)(0),
    _useState10 = _slicedToArray(_useState9, 2),
    currentIndex = _useState10[0],
    setCurrentIndex = _useState10[1];
  (0, _react.useEffect)(function () {
    if (autoplay) {
      var intervalId = setInterval(function () {
        setCurrentIndex(function (prevIndex) {
          return prevIndex === _react["default"].Children.count(children) - 1 ? 0 : prevIndex + 1;
        });
      }, autoplayInterval);
      return function () {
        return clearInterval(intervalId);
      };
    }
  }, [autoplay, autoplayInterval, children]);
  var handlePrev = function handlePrev() {
    setCurrentIndex(function (prevIndex) {
      return prevIndex === 0 ? _react["default"].Children.count(children) - 1 : prevIndex - 1;
    });
  };
  var handleNext = function handleNext() {
    setCurrentIndex(function (prevIndex) {
      return prevIndex === _react["default"].Children.count(children) - 1 ? 0 : prevIndex + 1;
    });
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n      .slider-container {\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n      .slider-wrapper {\n        width: 100%;\n        min-height: 100vh;\n        overflow: hidden;\n      }\n      .slider-content {\n        display: flex;\n        transition: transform 0.5s ease-in-out;\n      }\n      .slider-slide {\n        flex: 0 0 100%;\n        box-sizing: border-box;\n        width: 100%;\n        min-height: 100vh;\n        padding: 1rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      .slider-button {\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        background: #1193d2;\n        color: white;\n        border: none;\n        padding: 10px;\n        cursor: pointer;\n        z-index: 1;\n        height: 2rem;\n        width: 3rem;\n        border-radius: 10px;\n        box-shadow: 1px 1px 19px -1px #1193d2;\n        font-weight: bold;\n        display: flex;\n        justify-content: center;\n      align-items: center;\n      }\n      .slider-button.prev {\n        left: 10px;\n      }\n      .slider-button.next {\n        right: 10px;\n      }\n      .slider-pagination {\n        position: absolute;\n        bottom: 10px;\n        left: 50%;\n        transform: translateX(-50%);\n        display: flex;\n      }\n      .pagination-dot {\n        height: 10px;\n        width: 10px;\n        margin: 0 5px;\n        background-color: white;\n        border-radius: 50%;\n        display: inline-block;\n        cursor: pointer;\n      }\n      .pagination-dot.active {\n        background-color: black;\n      }\n      "), /*#__PURE__*/_react["default"].createElement("div", {
    className: "slider-container"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "slider-button prev",
    onClick: handlePrev
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa-solid fa-angles-left"
  })), /*#__PURE__*/_react["default"].createElement("button", {
    className: "slider-button next",
    onClick: handleNext
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa-solid fa-angles-right"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "slider-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "slider-content",
    style: {
      transform: "translateX(-".concat(currentIndex * 100, "%)")
    }
  }, _react["default"].Children.map(children, function (child, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "slider-slide",
      key: index
    }, child);
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "slider-pagination"
  }, _react["default"].Children.map(children, function (_, index) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: index,
      className: "pagination-dot ".concat(index === currentIndex ? "active" : ""),
      onClick: function onClick() {
        return setCurrentIndex(index);
      }
    });
  }))));
}
function LaRoseText(_ref8) {
  var _ref8$edit = _ref8.edit,
    edit = _ref8$edit === void 0 ? {} : _ref8$edit,
    children = _ref8.children,
    _ref8$fontSize = _ref8.fontSize,
    fontSize = _ref8$fontSize === void 0 ? 2 : _ref8$fontSize,
    _ref8$fontWeight = _ref8.fontWeight,
    fontWeight = _ref8$fontWeight === void 0 ? 600 : _ref8$fontWeight,
    _ref8$gradientText = _ref8.gradientText,
    gradientText = _ref8$gradientText === void 0 ? "linear-gradient(45deg, #ff007f, #ff00ff, #ff1493, #ff69b4, #ff69b4, #ff1493, #ff00ff, #ff007f)" : _ref8$gradientText;
  var LaRoseText = _objectSpread({}, edit);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n        .title {\n          font-size: ".concat(fontSize, "rem;\n          font-weight: ").concat(fontWeight, ";\n          background: ").concat(gradientText, ";\n          -webkit-background-clip: text;\n          -webkit-text-fill-color: transparent;\n          background-clip: text;\n          text-fill-color: transparent;\n        }\n      ")), /*#__PURE__*/_react["default"].createElement("div", {
    style: LaRoseText,
    className: "title"
  }, children));
}
function RoseBox(_ref9) {
  var children = _ref9.children,
    _ref9$edit = _ref9.edit,
    edit = _ref9$edit === void 0 ? {} : _ref9$edit,
    _ref9$background = _ref9.background,
    background = _ref9$background === void 0 ? "" : _ref9$background,
    _ref9$RoseName = _ref9.RoseName,
    RoseName = _ref9$RoseName === void 0 ? "" : _ref9$RoseName,
    _ref9$RoseID = _ref9.RoseID,
    RoseID = _ref9$RoseID === void 0 ? "" : _ref9$RoseID,
    _ref9$autoLayout = _ref9.autoLayout,
    autoLayout = _ref9$autoLayout === void 0 ? false : _ref9$autoLayout,
    _ref9$shadow = _ref9.shadow,
    shadow = _ref9$shadow === void 0 ? false : _ref9$shadow,
    _ref9$shadowColor = _ref9.shadowColor,
    shadowColor = _ref9$shadowColor === void 0 ? "black" : _ref9$shadowColor,
    _ref9$aspectRatio = _ref9.aspectRatio,
    aspectRatio = _ref9$aspectRatio === void 0 ? null : _ref9$aspectRatio,
    _ref9$atHover = _ref9.atHover,
    atHover = _ref9$atHover === void 0 ? false : _ref9$atHover,
    _ref9$grid = _ref9.grid,
    grid = _ref9$grid === void 0 ? false : _ref9$grid,
    _ref9$flex = _ref9.flex,
    flex = _ref9$flex === void 0 ? false : _ref9$flex,
    _ref9$scaleAnimate = _ref9.scaleAnimate,
    scaleAnimate = _ref9$scaleAnimate === void 0 ? false : _ref9$scaleAnimate,
    _ref9$childrenVisible = _ref9.childrenVisible,
    childrenVisible = _ref9$childrenVisible === void 0 ? true : _ref9$childrenVisible,
    onClick = _ref9.onClick,
    ariaLabel = _ref9.ariaLabel,
    role = _ref9.role,
    _ref9$lazy = _ref9.lazy,
    lazy = _ref9$lazy === void 0 ? false : _ref9$lazy,
    _ref9$AutoHandling = _ref9.AutoHandling,
    AutoHandling = _ref9$AutoHandling === void 0 ? false : _ref9$AutoHandling,
    _ref9$outlineOffset = _ref9.outlineOffset,
    outlineOffset = _ref9$outlineOffset === void 0 ? 0 : _ref9$outlineOffset;
  var _useState11 = (0, _react.useState)(!lazy),
    _useState12 = _slicedToArray(_useState11, 2),
    isLoaded = _useState12[0],
    setIsLoaded = _useState12[1];
  (0, _react.useEffect)(function () {
    if (lazy) {
      var timer = setTimeout(function () {
        setIsLoaded(true);
      }, 200); // Adjust the delay as needed
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [lazy]);
  var layoutStyle = autoLayout ? {
    padding: "0.8rem",
    margin: "0 auto",
    overflow: "hidden"
  } : {};
  var shadowStyle = shadow ? {
    boxShadow: "0px 0px 9px 1px ".concat(shadowColor)
  } : {};
  var aspectStyle = aspectRatio ? {
    aspectRatio: aspectRatio
  } : {};
  var displayLayoutStyle = grid ? {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))"
  } : flex ? {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  } : {};
  var backgroundStyle = background ? {
    background: background
  } : {};
  var autoHandleStyle = AutoHandling ? {
    background: "#1b85db",
    height: "3rem",
    minWidth: "11rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #1b85db",
    borderRadius: "7px",
    fontWeight: "bold",
    boxShadow: "#1b85db 0px 50px 100px -20px, #1b85db 0px 30px 60px -30px, #1b85db 0px -2px 6px 0px inset",
    outlineOffset: "".concat(outlineOffset),
    outlineStyle: "solid",
    outlineColor: "#1b85db",
    outlineWidth: "2px",
    cursor: "pointer"
  } : {};
  // Apply the hover class conditionally
  var hoverClass = atHover ? "rosebox-hover" : "";
  var handleClick = function handleClick() {
    if (typeof onClick === "function") {
      onClick();
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n                .rosebox-hover {\n                    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;\n                }\n                .rosebox-hover:hover {\n                    transform: scale(1.05);\n                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n                    background-color: rgba(240, 240, 240, 0.8);\n                }\n                .rosebox-scale-animate {\n                    animation: scale-down 0.6s ease-out forwards;\n                }\n                @keyframes scale-down {\n                    0% {\n                        transform: scale(2);\n                    }\n                    100% {\n                        transform: scale(0.9);\n                    }\n                }\n            "), childrenVisible && /*#__PURE__*/_react["default"].createElement("div", {
    "aria-label": ariaLabel,
    role: role,
    onClick: handleClick,
    id: RoseID,
    className: "".concat(RoseName, " ").concat(hoverClass, " ").concat(scaleAnimate ? "rosebox-scale-animate" : ""),
    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, edit), layoutStyle), shadowStyle), aspectStyle), displayLayoutStyle), backgroundStyle), autoHandleStyle)
  }, isLoaded ? children : /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")));
}
function SplitText(_ref10) {
  var children = _ref10.children,
    RoseName = _ref10.RoseName,
    RoseId = _ref10.RoseId,
    _ref10$initialAnimate = _ref10.initialAnimateTypeStyle,
    initialAnimateTypeStyle = _ref10$initialAnimate === void 0 ? "character" : _ref10$initialAnimate,
    _ref10$edit = _ref10.edit,
    edit = _ref10$edit === void 0 ? {} : _ref10$edit,
    _ref10$speed = _ref10.speed,
    speed = _ref10$speed === void 0 ? 0.5 : _ref10$speed,
    _ref10$delay = _ref10.delay,
    delay = _ref10$delay === void 0 ? 0.05 : _ref10$delay;
  var _useState13 = (0, _react.useState)(initialAnimateTypeStyle),
    _useState14 = _slicedToArray(_useState13, 2),
    animateTypeStyle = _useState14[0],
    setAnimateTypeStyle = _useState14[1];
  (0, _react.useEffect)(function () {
    var fullAnimationDuration = speed + delay * (children.split("").length || 1);
    var timer = setTimeout(function () {
      setAnimateTypeStyle("word"); // Change to 'word' after full animation duration
    }, fullAnimationDuration * 1000); // Convert duration to milliseconds
    return function () {
      return clearTimeout(timer);
    }; // Cleanup timer on component unmount
  }, [speed, delay, children]);
  // Split the text based on animateTypeStyle (word or character)
  var splitText = animateTypeStyle === "word" ? children.split(/(\s+)/) : children.split("");
  // Map through the split text to create the animation effect
  var animatedText = splitText.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: index,
      className: "SplitTextItem",
      style: {
        "--SplitTextItem-index": index
      }
    }, item === " " ? "\xA0" : item, " ");
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n              .SplitTextItem {\n                  display: inline-block;\n                  opacity: 0;\n                  transform: translateY(20px);\n                  animation: splitAnimation ".concat(speed, "s forwards;\n                  animation-delay: calc(var(--SplitTextItem-index) * ").concat(delay, "s);\n              }\n              @keyframes splitAnimation {\n                  to {\n                      opacity: 1;\n                      transform: translateY(0);\n                  }\n              }\n          ")), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({}, edit),
    id: RoseId,
    className: RoseName
  }, animatedText));
}
function ShinyText(_ref11) {
  var children = _ref11.children,
    RoseName = _ref11.RoseName,
    RoseId = _ref11.RoseId,
    _ref11$edit = _ref11.edit,
    edit = _ref11$edit === void 0 ? {} : _ref11$edit,
    _ref11$speed = _ref11.speed,
    speed = _ref11$speed === void 0 ? 2 : _ref11$speed,
    _ref11$color = _ref11.color,
    color = _ref11$color === void 0 ? "#fff" : _ref11$color,
    _ref11$backgroundColo = _ref11.backgroundColor,
    backgroundColor = _ref11$backgroundColo === void 0 ? "#000" : _ref11$backgroundColo;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n              .shiny-text {\n                  position: relative;\n                  display: inline-block;\n                  color: ".concat(color, ";\n                  background-color: ").concat(backgroundColor, ";\n                  overflow: hidden;\n                  font-weight: bold;\n                  background-clip: text;\n                  -webkit-background-clip: text;\n                  color: transparent;\n              }\n              .shiny-text::before {\n                  content: '';\n                  position: absolute;\n                  top: 0;\n                  left: -100%;\n                  height: 100%;\n                  width: 100%;\n                  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.7), transparent);\n                  transform: skewX(-15deg);\n              }\n              .shiny-text::before {\n                  animation: shiny-effect ").concat(speed, "s infinite;\n              }\n              @keyframes shiny-effect {\n                  0% {\n                      left: -100%;\n                  }\n                  100% {\n                      left: 100%;\n                  }\n              }\n          ")), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({}, edit),
    id: RoseId,
    className: "shiny-text ".concat(RoseName)
  }, children));
}
function ShinyButton(_ref12) {
  var children = _ref12.children,
    RoseName = _ref12.RoseName,
    RoseId = _ref12.RoseId,
    _ref12$edit = _ref12.edit,
    edit = _ref12$edit === void 0 ? {} : _ref12$edit,
    _ref12$speed = _ref12.speed,
    speed = _ref12$speed === void 0 ? 2 : _ref12$speed,
    _ref12$color = _ref12.color,
    color = _ref12$color === void 0 ? "#fff" : _ref12$color,
    _ref12$backgroundColo = _ref12.backgroundColor,
    backgroundColor = _ref12$backgroundColo === void 0 ? "#111" : _ref12$backgroundColo,
    _ref12$padding = _ref12.padding,
    padding = _ref12$padding === void 0 ? "10px 20px" : _ref12$padding,
    _ref12$borderRadius = _ref12.borderRadius,
    borderRadius = _ref12$borderRadius === void 0 ? "5px" : _ref12$borderRadius,
    ShinyButtonEvent = _ref12.ShinyButtonEvent;
  var ShinyButtonEventClick = function ShinyButtonEventClick() {
    if (typeof ShinyButtonEvent === "function") {
      ShinyButtonEvent();
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n              .shiny-button {\n                  position: relative;\n                  display: inline-block;\n                  padding: ".concat(padding, ";\n                  background-color: ").concat(backgroundColor, ";\n                  color: ").concat(color, ";\n                  font-weight: bold;\n                  text-transform: uppercase;\n                  overflow: hidden;\n                  border-radius: ").concat(borderRadius, ";\n                  cursor: pointer;\n                  transition: background-color 0.3s, color 0.3s;\n                  ursor: pointer;\n                  border: 1px solid #353535;\n                  padding: .4em 1.2em;\n                  border-radius: 50px;\n                  transition: .3s ease;\n              }\n              .shiny-button::before {\n                  content: '';\n                  position: absolute;\n                  top: -100%;\n                  left: -100%;\n                  height: 100%;\n                  width: 100%;\n                  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.7), transparent);\n                  transform: skewX(-15deg);\n                  transition: opacity 0.3s;\n              }\n              .shiny-button:hover::before {\n                  animation: shiny-effect ").concat(speed, "s infinite;\n                  opacity: 1;\n              }\n              .shiny-button:hover {\n                  background-color: ").concat(backgroundColor, ";\n                  color: ").concat(color, ";\n              }\n              @keyframes shiny-effect {\n                  0% {\n                      left: -100%;\n                  }\n                  100% {\n                      left: 100%;\n                  }\n              }\n          ")), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: ShinyButtonEventClick,
    style: _objectSpread({}, edit),
    id: RoseId,
    className: "shiny-button ".concat(RoseName)
  }, children));
}
function WaveText(_ref13) {
  var children = _ref13.children,
    RoseName = _ref13.RoseName,
    RoseId = _ref13.RoseId,
    _ref13$initialWaveTyp = _ref13.initialWaveType,
    initialWaveType = _ref13$initialWaveTyp === void 0 ? "character" : _ref13$initialWaveTyp,
    _ref13$edit = _ref13.edit,
    edit = _ref13$edit === void 0 ? {} : _ref13$edit,
    _ref13$speed = _ref13.speed,
    speed = _ref13$speed === void 0 ? 0.5 : _ref13$speed,
    _ref13$delay = _ref13.delay,
    delay = _ref13$delay === void 0 ? 0.05 : _ref13$delay,
    _ref13$amplitude = _ref13.amplitude,
    amplitude = _ref13$amplitude === void 0 ? 10 : _ref13$amplitude,
    _ref13$frequency = _ref13.frequency,
    frequency = _ref13$frequency === void 0 ? 0.5 : _ref13$frequency;
  var _useState15 = (0, _react.useState)(initialWaveType),
    _useState16 = _slicedToArray(_useState15, 2),
    waveType = _useState16[0],
    setWaveType = _useState16[1];
  (0, _react.useEffect)(function () {
    var totalAnimationDuration = speed + delay * (children.split("").length || 1);
    var timer = setTimeout(function () {
      setWaveType("word"); // Change to 'word' after the full animation duration
    }, totalAnimationDuration * 1000 + 200); // Adjust timing to ensure it starts after animation
    return function () {
      return clearTimeout(timer);
    }; // Cleanup timer on component unmount
  }, [speed, delay, children]);
  // Split the text based on waveType (word or character)
  var splitText = waveType === "word" ? children.split(/(\s+)/) : children.split("");
  // Map through the split text to create the wave effect
  var waveText = splitText.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: index,
      className: "WaveTextItem",
      style: {
        "--WaveTextItem-index": index
      }
    }, item === " " ? "\xA0" : item, " ");
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n              .WaveTextItem {\n                  display: inline-block;\n                  opacity: 0;\n                  transform: translateY(".concat(amplitude, "px);\n                  animation: waveAnimation ").concat(speed, "s forwards;\n                  animation-delay: calc(var(--WaveTextItem-index) * ").concat(delay, "s);\n              }\n              @keyframes waveAnimation {\n                  0% {\n                      opacity: 0;\n                      transform: translateY(").concat(amplitude, "px);\n                  }\n                  50% {\n                      opacity: 1;\n                      transform: translateY(-").concat(amplitude, "px);\n                  }\n                  100% {\n                      opacity: 1;\n                      transform: translateY(0);\n                  }\n              }\n          ")), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({}, edit),
    id: RoseId,
    className: RoseName
  }, waveText));
}
function AnimatedText(_ref14) {
  var children = _ref14.children,
    RoseName = _ref14.RoseName,
    RoseId = _ref14.RoseId,
    _ref14$edit = _ref14.edit,
    edit = _ref14$edit === void 0 ? {} : _ref14$edit,
    _ref14$speed = _ref14.speed,
    speed = _ref14$speed === void 0 ? 0.5 : _ref14$speed,
    _ref14$delay = _ref14.delay,
    delay = _ref14$delay === void 0 ? 0.05 : _ref14$delay,
    _ref14$animationType = _ref14.animationType,
    animationType = _ref14$animationType === void 0 ? "blur" : _ref14$animationType,
    _ref14$initialAnimate = _ref14.initialAnimateTypeStyle,
    initialAnimateTypeStyle = _ref14$initialAnimate === void 0 ? "character" : _ref14$initialAnimate;
  var _useState17 = (0, _react.useState)(initialAnimateTypeStyle),
    _useState18 = _slicedToArray(_useState17, 2),
    animateTypeStyle = _useState18[0],
    setAnimateTypeStyle = _useState18[1];
  (0, _react.useEffect)(function () {
    // Calculate total duration of animation including delay
    var totalAnimationDuration = speed + delay * (children.split("").length || 1);
    var timer = setTimeout(function () {
      setAnimateTypeStyle("word"); // Change to 'word' after the animation ends
    }, totalAnimationDuration * 1000 + 600); // Adjust timing as needed
    return function () {
      return clearTimeout(timer);
    }; // Cleanup timer on component unmount
  }, [speed, delay, children]);
  // Split the text based on animateTypeStyle (word or character)
  var splitText = animateTypeStyle === "word" ? children.split(/(\s+)/) // Split by spaces and preserve them
  : children.split("");
  // Map through the split text to create the animation effect
  var animatedText = splitText.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: index,
      className: "AnimatedTextItem",
      style: {
        "--AnimatedTextItem-index": index
      }
    }, item === " " ? "\xA0" : item, " ", animateTypeStyle === "word" && item === " " && " ", " ");
  });
  var animations = {
    blur: "\n          filter: blur(15px);\n          animation: blurAnimation ".concat(speed, "s forwards;\n      "),
    fadeIn: "\n          opacity: 0;\n          animation: fadeInAnimation ".concat(speed, "s forwards;\n      "),
    slideIn: "\n          transform: translateX(-20px);\n          opacity: 0;\n          animation: slideInAnimation ".concat(speed, "s forwards;\n      "),
    zoomIn: "\n          transform: scale(0.5);\n          opacity: 0;\n          animation: zoomInAnimation ".concat(speed, "s forwards;\n      ")
  };
  var selectedAnimation = animations[animationType] || animations.blur;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n              .AnimatedTextItem {\n                  display: inline-block;\n                  ".concat(selectedAnimation, "\n                  animation-delay: calc(var(--AnimatedTextItem-index) * ").concat(delay, "s);\n              }\n              @keyframes blurAnimation {\n                  to {\n                      opacity: 1;\n                      transform: translateY(0);\n                      filter: blur(0);\n                  }\n              }\n              @keyframes fadeInAnimation {\n                  to {\n                      opacity: 1;\n                  }\n              }\n              @keyframes slideInAnimation {\n                  to {\n                      opacity: 1;\n                      transform: translateX(0);\n                  }\n              }\n              @keyframes zoomInAnimation {\n                  to {\n                      opacity: 1;\n                      transform: scale(1);\n                  }\n              }\n          ")), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({}, edit),
    id: RoseId,
    className: RoseName
  }, animatedText));
}
var RouterContext = /*#__PURE__*/(0, _react.createContext)();
var useRouter = exports.useRouter = function useRouter() {
  return (0, _react.useContext)(RouterContext);
};
var RoseRouter = exports.RoseRouter = function RoseRouter(_ref15) {
  var children = _ref15.children,
    _ref15$customStyles = _ref15.customStyles,
    customStyles = _ref15$customStyles === void 0 ? "" : _ref15$customStyles;
  var _useState19 = (0, _react.useState)(window.location.pathname),
    _useState20 = _slicedToArray(_useState19, 2),
    route = _useState20[0],
    setRoute = _useState20[1];
  var navigate = function navigate(path) {
    if (path !== route) {
      setRoute(path);
      window.history.pushState({}, "", path);
    }
  };
  (0, _react.useEffect)(function () {
    var handlePopState = function handlePopState() {
      return setRoute(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return function () {
      return window.removeEventListener("popstate", handlePopState);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n                .route {\n                    opacity: 0;\n                    transform: translateY(20px);\n                    transition: opacity 0.5s ease, transform 0.5s ease;\n                }\n                .route-active {\n                    opacity: 1;\n                    transform: translateY(0);\n                }\n                ".concat(customStyles, "\n            ")), /*#__PURE__*/_react["default"].createElement(RouterContext.Provider, {
    value: {
      route: route,
      navigate: navigate
    }
  }, children));
};
var Route = exports.Route = function Route(_ref16) {
  var path = _ref16.path,
    element = _ref16.element;
  var _useRouter = useRouter(),
    route = _useRouter.route;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "route ".concat(route === path ? "route-active" : "")
  }, route === path ? element : null);
};
var RoseParent = exports.RoseParent = function RoseParent(_ref17) {
  var children = _ref17.children,
    edit = _ref17.edit,
    RoseID = _ref17.RoseID,
    RoseName = _ref17.RoseName,
    _ref17$display = _ref17.display,
    display = _ref17$display === void 0 ? "flex" : _ref17$display,
    _ref17$flexDirection = _ref17.flexDirection,
    flexDirection = _ref17$flexDirection === void 0 ? "row" : _ref17$flexDirection,
    _ref17$flexDirectionM = _ref17.flexDirectionMobile,
    flexDirectionMobile = _ref17$flexDirectionM === void 0 ? "column" : _ref17$flexDirectionM,
    _ref17$justifyContent = _ref17.justifyContent,
    justifyContent = _ref17$justifyContent === void 0 ? "space-around" : _ref17$justifyContent,
    _ref17$alignItems = _ref17.alignItems,
    alignItems = _ref17$alignItems === void 0 ? "center" : _ref17$alignItems,
    _ref17$alignContent = _ref17.alignContent,
    alignContent = _ref17$alignContent === void 0 ? "center" : _ref17$alignContent,
    _ref17$flexWrap = _ref17.flexWrap,
    flexWrap = _ref17$flexWrap === void 0 ? "wrap" : _ref17$flexWrap,
    _ref17$gap = _ref17.gap,
    gap = _ref17$gap === void 0 ? "1rem" : _ref17$gap,
    _ref17$padding = _ref17.padding,
    padding = _ref17$padding === void 0 ? "1rem" : _ref17$padding,
    _ref17$minHeight = _ref17.minHeight,
    minHeight = _ref17$minHeight === void 0 ? "100vh" : _ref17$minHeight,
    _ref17$width = _ref17.width,
    width = _ref17$width === void 0 ? "100%" : _ref17$width,
    _ref17$flexBasis = _ref17.flexBasis,
    flexBasis = _ref17$flexBasis === void 0 ? "auto" : _ref17$flexBasis,
    _ref17$flexGrow = _ref17.flexGrow,
    flexGrow = _ref17$flexGrow === void 0 ? "1" : _ref17$flexGrow,
    _ref17$flexShrink = _ref17.flexShrink,
    flexShrink = _ref17$flexShrink === void 0 ? "1" : _ref17$flexShrink,
    _ref17$gridTemplateCo = _ref17.gridTemplateColumns,
    gridTemplateColumns = _ref17$gridTemplateCo === void 0 ? "" : _ref17$gridTemplateCo,
    _ref17$gridTemplateRo = _ref17.gridTemplateRows,
    gridTemplateRows = _ref17$gridTemplateRo === void 0 ? "" : _ref17$gridTemplateRo,
    _ref17$gridColumnGap = _ref17.gridColumnGap,
    gridColumnGap = _ref17$gridColumnGap === void 0 ? "" : _ref17$gridColumnGap,
    _ref17$gridRowGap = _ref17.gridRowGap,
    gridRowGap = _ref17$gridRowGap === void 0 ? "" : _ref17$gridRowGap,
    _ref17$placeItems = _ref17.placeItems,
    placeItems = _ref17$placeItems === void 0 ? "center" : _ref17$placeItems,
    _ref17$alignContentGr = _ref17.alignContentGrid,
    alignContentGrid = _ref17$alignContentGr === void 0 ? "" : _ref17$alignContentGr,
    _ref17$justifyItems = _ref17.justifyItems,
    justifyItems = _ref17$justifyItems === void 0 ? "" : _ref17$justifyItems,
    _ref17$gridAutoFlow = _ref17.gridAutoFlow,
    gridAutoFlow = _ref17$gridAutoFlow === void 0 ? "" : _ref17$gridAutoFlow,
    _ref17$gridAutoColumn = _ref17.gridAutoColumns,
    gridAutoColumns = _ref17$gridAutoColumn === void 0 ? "" : _ref17$gridAutoColumn,
    _ref17$gridAutoRows = _ref17.gridAutoRows,
    gridAutoRows = _ref17$gridAutoRows === void 0 ? "" : _ref17$gridAutoRows,
    _ref17$gridTemplateAr = _ref17.gridTemplateAreas,
    gridTemplateAreas = _ref17$gridTemplateAr === void 0 ? "" : _ref17$gridTemplateAr,
    _ref17$alignSelf = _ref17.alignSelf,
    alignSelf = _ref17$alignSelf === void 0 ? "" : _ref17$alignSelf,
    _ref17$justifySelf = _ref17.justifySelf,
    justifySelf = _ref17$justifySelf === void 0 ? "" : _ref17$justifySelf,
    _ref17$gridArea = _ref17.gridArea,
    gridArea = _ref17$gridArea === void 0 ? "" : _ref17$gridArea;
  var isGrid = display === "grid";
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n                .rose-parent {\n                    display: ".concat(display, ";\n                    ").concat(isGrid ? "\n                        grid-template-columns: ".concat(gridTemplateColumns, ";\n                        grid-template-rows: ").concat(gridTemplateRows, ";\n                        grid-column-gap: ").concat(gridColumnGap, ";\n                        grid-row-gap: ").concat(gridRowGap, ";\n                        place-items: ").concat(placeItems, ";\n                        align-content: ").concat(alignContentGrid, ";\n                        justify-items: ").concat(justifyItems, ";\n                        grid-auto-flow: ").concat(gridAutoFlow, ";\n                        grid-auto-columns: ").concat(gridAutoColumns, ";\n                        grid-auto-rows: ").concat(gridAutoRows, ";\n                        grid-template-areas: ").concat(gridTemplateAreas, ";\n                    ") : "\n                        flex-direction: ".concat(flexDirection, ";\n                        justify-content: ").concat(justifyContent, ";\n                        align-items: ").concat(alignItems, ";\n                        align-content: ").concat(alignContent, ";\n                        flex-wrap: ").concat(flexWrap, ";\n                        gap: ").concat(gap, ";\n                    "), "\n                    padding: ").concat(padding, ";\n                    box-sizing: border-box;\n                    width: ").concat(width, ";\n                    min-height: ").concat(minHeight, ";\n                }\n                .rose-parent > * {\n                    flex-basis: ").concat(flexBasis, ";\n                    flex-grow: ").concat(flexGrow, ";\n                    flex-shrink: ").concat(flexShrink, ";\n                    align-self: ").concat(alignSelf, ";\n                    justify-self: ").concat(justifySelf, ";\n                    grid-area: ").concat(gridArea, ";\n                }\n                @media (min-width: 768px) {\n                    .rose-parent {\n                        flex-direction: row;\n                        justify-content: space-between;\n                    }\n                }\n                @media (max-width: 767px) {\n                    .rose-parent {\n                        flex-direction: ").concat(flexDirectionMobile, ";\n                        align-items: center;\n                    }\n                }\n            ")), /*#__PURE__*/_react["default"].createElement("div", {
    id: RoseID,
    className: "rose-parent ".concat(RoseName),
    style: edit
  }, children));
};
var Table = exports.Table = function Table(_ref18) {
  var data = _ref18.data,
    columns = _ref18.columns,
    edit = _ref18.edit,
    RoseID = _ref18.RoseID,
    RoseName = _ref18.RoseName;
  return /*#__PURE__*/_react["default"].createElement("table", {
    style: edit,
    className: RoseName,
    id: RoseID
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, columns.map(function (col, index) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: index
    }, col.header);
  }))), /*#__PURE__*/_react["default"].createElement("tbody", null, data.map(function (row, rowIndex) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: rowIndex
    }, columns.map(function (col, colIndex) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: colIndex
      }, row[col.accessor]);
    }));
  })));
};
function Notification(_ref19) {
  var children = _ref19.children,
    _ref19$edit = _ref19.edit,
    edit = _ref19$edit === void 0 ? {} : _ref19$edit,
    RoseID = _ref19.RoseID,
    _ref19$icon = _ref19.icon,
    icon = _ref19$icon === void 0 ? /*#__PURE__*/_react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      strokeWidth: 0,
      fill: "currentColor",
      stroke: "currentColor",
      className: "icon"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
    })) : _ref19$icon,
    _ref19$RoseName = _ref19.RoseName,
    RoseName = _ref19$RoseName === void 0 ? "card" : _ref19$RoseName,
    _ref19$Message = _ref19.Message,
    Message = _ref19$Message === void 0 ? "Hello LaRose Devs" : _ref19$Message,
    _ref19$MessageColor = _ref19.MessageColor,
    MessageColor = _ref19$MessageColor === void 0 ? "white" : _ref19$MessageColor,
    _ref19$DesMessage = _ref19.DesMessage,
    DesMessage = _ref19$DesMessage === void 0 ? "success" : _ref19$DesMessage,
    _ref19$DesMessageColo = _ref19.DesMessageColor,
    DesMessageColor = _ref19$DesMessageColo === void 0 ? "white" : _ref19$DesMessageColo,
    _ref19$editCrossIconH = _ref19.editCrossIconHeight,
    editCrossIconHeight = _ref19$editCrossIconH === void 0 ? 1.5 : _ref19$editCrossIconH,
    _ref19$editCrossIconW = _ref19.editCrossIconWidth,
    editCrossIconWidth = _ref19$editCrossIconW === void 0 ? 1.5 : _ref19$editCrossIconW,
    _ref19$iconDisplay = _ref19.iconDisplay,
    iconDisplay = _ref19$iconDisplay === void 0 ? "block" : _ref19$iconDisplay,
    _ref19$CrossIconColor = _ref19.CrossIconColor,
    CrossIconColor = _ref19$CrossIconColor === void 0 ? "black" : _ref19$CrossIconColor,
    _ref19$editCrossIconC = _ref19.editCrossIconColor,
    editCrossIconColor = _ref19$editCrossIconC === void 0 ? {} : _ref19$editCrossIconC,
    _ref19$delay = _ref19.delay,
    delay = _ref19$delay === void 0 ? 5000 : _ref19$delay;
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    valueState = _useState22[0],
    setValueState = _useState22[1];
  var removeNote = function removeNote() {
    setValueState(true);
  };
  (0, _react.useEffect)(function () {
    if (delay !== Infinity) {
      var timer = setTimeout(function () {
        setValueState(true);
      }, delay);
      // Clean up the timer on unmount
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [delay]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n                .".concat(RoseName, " {\n          width: 20.625rem;\n          height: 5rem; \n          border-radius: 0.5rem; \n          box-sizing: border-box;\n          padding: 0.625rem 0.9375rem;\n          background-color: #ffffff;\n          box-shadow: rgba(149, 157, 165, 0.2) 0 0.5rem 1.5rem;\n          position: relative;\n          overflow: hidden;\n          display: flex;\n          align-items: center;\n          justify-content: space-around;\n          gap: 0.9375rem;\n        }\n        .wave {\n          position: absolute;\n          transform: rotate(90deg);\n          left: -1.9375rem; /* -31px / 16 */\n          top: 2rem; /* 32px / 16 */\n          width: 5rem; /* 80px / 16 */\n          fill: #04e4003a;\n        }\n        .icon-container {\n          width: 2.1875rem; /* 35px / 16 */\n          height: 2.1875rem; /* 35px / 16 */\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          background-color: #04e40048;\n          border-radius: 50%;\n          margin-left: 0.5rem; /* 8px / 16 */\n          display:").concat(iconDisplay, ";\n        }\n        .icon {\n          width: 1.0625rem; /* 17px / 16 */\n          height: 1.0625rem; /* 17px / 16 */\n          color: #269b24;\n        }\n        .message-text-container {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: flex-start;\n          flex-grow: 1;\n        }\n        .message-text,\n        .sub-text {\n          margin: 0;\n          cursor: default;\n        }\n        .message-text {\n          color: ").concat(MessageColor, ";\n          font-size: 1.0625rem; /* 17px / 16 */\n          font-weight: 700;\n        }\n        .sub-text {\n          font-size: 0.875rem; /* 14px / 16 */\n          color: ").concat(DesMessageColor, ";\n        }\n        .cross-icon {\n          width: ").concat(editCrossIconHeight, "rem;\n          height: ").concat(editCrossIconWidth, "rem;\n          color: ").concat(CrossIconColor, ";\n          cursor: pointer;\n        }\n      ")), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      display: valueState ? "none" : "flex"
    }, edit),
    id: RoseID,
    className: RoseName
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "wave",
    viewBox: "0 0 1440 320",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z",
    fillOpacity: 1
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "icon-container"
  }, icon), /*#__PURE__*/_react["default"].createElement("div", {
    className: "message-text-container"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "message-text"
  }, Message), /*#__PURE__*/_react["default"].createElement("p", {
    className: "sub-text"
  }, DesMessage)), /*#__PURE__*/_react["default"].createElement("svg", {
    onClick: removeNote,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 15 15",
    strokeWidth: 0,
    fill: "none",
    stroke: "currentColor",
    className: "cross-icon"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    clipRule: "evenodd",
    fillRule: "evenodd"
  })), children));
}
function Spring(_ref20) {
  var _ref20$rotate = _ref20.rotate,
    rotate = _ref20$rotate === void 0 ? 360 : _ref20$rotate,
    _ref20$scale = _ref20.scale,
    scale = _ref20$scale === void 0 ? 1 : _ref20$scale,
    _ref20$speed = _ref20.speed,
    speed = _ref20$speed === void 0 ? 0.8 : _ref20$speed,
    _ref20$x = _ref20.x,
    x = _ref20$x === void 0 ? "0" : _ref20$x,
    _ref20$y = _ref20.y,
    y = _ref20$y === void 0 ? "0" : _ref20$y,
    _ref20$z = _ref20.z,
    z = _ref20$z === void 0 ? "0" : _ref20$z,
    children = _ref20.children,
    RoseID = _ref20.RoseID,
    _ref20$RoseName = _ref20.RoseName,
    RoseName = _ref20$RoseName === void 0 ? "RotatingSpringComponentStyle" : _ref20$RoseName,
    edit = _ref20.edit,
    _ref20$drag = _ref20.drag,
    drag = _ref20$drag === void 0 ? false : _ref20$drag;
  var elementRef = (0, _react.useRef)(null);
  var _useState23 = (0, _react.useState)({
      x: 0,
      y: 0
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    position = _useState24[0],
    setPosition = _useState24[1];
  var _useState25 = (0, _react.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    isDragging = _useState26[0],
    setIsDragging = _useState26[1];
  var _useState27 = (0, _react.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    isDragged = _useState28[0],
    setIsDragged = _useState28[1];
  var _useState29 = (0, _react.useState)({
      x: 0,
      y: 0
    }),
    _useState30 = _slicedToArray(_useState29, 2),
    startOffset = _useState30[0],
    setStartOffset = _useState30[1];
  // UseEffect to set initial position based on the element's location
  (0, _react.useEffect)(function () {
    if (elementRef.current) {
      var rect = elementRef.current.getBoundingClientRect();
      setPosition({
        x: rect.left,
        y: rect.top
      });
    }
  }, []);
  var handleMouseDown = function handleMouseDown(e) {
    if (drag) {
      var rect = e.target.getBoundingClientRect();
      setStartOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
      setIsDragged(true);
    }
  };
  var handleMouseMove = function handleMouseMove(e) {
    if (isDragging && drag) {
      setPosition({
        x: e.clientX - startOffset.x,
        y: e.clientY - startOffset.y
      });
    }
  };
  var handleMouseUp = function handleMouseUp() {
    if (drag) {
      setIsDragging(false);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n              .".concat(RoseName, " {\n                  min-height: 7rem;\n                  width: 7rem;\n                  background: #ffffff;\n                  border-radius: 26px;\n                  display: flex;\n                  justify-content: center;\n                  align-items: center;\n                  animation: LaRoseRotatingAnimated ").concat(speed, "s ease-in-out forwards;\n                  transform: rotate(0deg) scale(0);\n                  opacity: 0;\n                  overflow: hidden;\n                  translate: ").concat(x, " ").concat(y, " ").concat(z, ";\n                  position: relative; /* Default position */\n                  cursor: ").concat(drag ? "grab" : "default", ";\n              }\n              .").concat(RoseName, ":active {\n                  cursor: ").concat(drag ? "grabbing" : "default", ";\n              }\n              @keyframes LaRoseRotatingAnimated {\n                  to {\n                                    translate: ").concat(x, " ").concat(y, " ").concat(z, ";\n                      transform: rotate(").concat(rotate, "deg) scale(").concat(scale, ");\n                      opacity: 1;\n                  }\n              }\n          ")), /*#__PURE__*/_react["default"].createElement("div", {
    ref: elementRef,
    style: _objectSpread(_objectSpread({}, edit), {}, {
      left: isDragged ? "".concat(position.x, "px") : "auto",
      top: isDragged ? "".concat(position.y, "px") : "auto",
      position: isDragged ? "absolute" : "relative"
    }),
    className: RoseName,
    id: RoseID,
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp
  }, children));
}
function Variants(_ref21) {
  var _ref21$rotate = _ref21.rotate,
    rotate = _ref21$rotate === void 0 ? 0 : _ref21$rotate,
    _ref21$scale = _ref21.scale,
    scale = _ref21$scale === void 0 ? 1 : _ref21$scale,
    _ref21$speed = _ref21.speed,
    speed = _ref21$speed === void 0 ? 0.8 : _ref21$speed,
    _ref21$x = _ref21.x,
    x = _ref21$x === void 0 ? "0" : _ref21$x,
    _ref21$y = _ref21.y,
    y = _ref21$y === void 0 ? "0" : _ref21$y,
    _ref21$z = _ref21.z,
    z = _ref21$z === void 0 ? "0" : _ref21$z,
    children = _ref21.children,
    RoseID = _ref21.RoseID,
    _ref21$RoseName = _ref21.RoseName,
    RoseName = _ref21$RoseName === void 0 ? "RotatingVariantsComponentStyle" : _ref21$RoseName,
    edit = _ref21.edit,
    _ref21$childDisplay = _ref21.childDisplay,
    childDisplay = _ref21$childDisplay === void 0 ? "grid" : _ref21$childDisplay,
    _ref21$drag = _ref21.drag,
    drag = _ref21$drag === void 0 ? false : _ref21$drag;
  var elementRef = (0, _react.useRef)(null);
  var _useState31 = (0, _react.useState)({
      x: 0,
      y: 0
    }),
    _useState32 = _slicedToArray(_useState31, 2),
    position = _useState32[0],
    setPosition = _useState32[1];
  var _useState33 = (0, _react.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    isDragging = _useState34[0],
    setIsDragging = _useState34[1];
  var _useState35 = (0, _react.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    isDragged = _useState36[0],
    setIsDragged = _useState36[1];
  var _useState37 = (0, _react.useState)({
      x: 0,
      y: 0
    }),
    _useState38 = _slicedToArray(_useState37, 2),
    startOffset = _useState38[0],
    setStartOffset = _useState38[1];
  // Set initial position based on the element's location
  (0, _react.useEffect)(function () {
    if (elementRef.current) {
      var rect = elementRef.current.getBoundingClientRect();
      setPosition({
        x: rect.left,
        y: rect.top
      });
    }
  }, []);
  var handleMouseDown = function handleMouseDown(e) {
    if (drag) {
      var rect = e.target.getBoundingClientRect();
      setStartOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
      setIsDragged(true);
    }
  };
  var handleMouseMove = function handleMouseMove(e) {
    if (isDragging && drag) {
      setPosition({
        x: e.clientX - startOffset.x,
        y: e.clientY - startOffset.y
      });
    }
  };
  var handleMouseUp = function handleMouseUp() {
    if (drag) {
      setIsDragging(false);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n              .".concat(RoseName, " {\n                  min-height: 7rem;\n                  width: 7rem;\n                  background: #380eff;\n                  border-radius: 26px;\n                  display:grid;\n                  grid-template-columns: auto auto;\n                  grid-gap: 1rem;\n                  justify-content: center;\n                  align-items: center;\n                  animation: ").concat(RoseName, "Animated ").concat(speed, "s ease-in-out forwards;\n                  transform: rotate(").concat(rotate, "deg) scale(").concat(scale, ");\n                  translate: ").concat(x, " ").concat(y, " ").concat(z, ";\n                  opacity: 0;\n                  overflow: hidden;\n                  position: relative; /* Default position */\n                  cursor: ").concat(drag ? "grab" : "default", ";\n              }\n              .").concat(RoseName, ":active {\n                  cursor: ").concat(drag ? "grabbing" : "default", ";\n              }\n              @keyframes ").concat(RoseName, "Animated {\n                  to {\n                      translate: ").concat(x, " ").concat(y, " ").concat(z, ";\n                      transform: rotate(").concat(rotate, "deg) scale(").concat(scale, ");\n                      opacity: 1;\n                  }\n              }\n          ")), /*#__PURE__*/_react["default"].createElement("div", {
    ref: elementRef,
    style: _objectSpread(_objectSpread({}, edit), {}, {
      left: isDragged ? "".concat(position.x, "px") : "auto",
      top: isDragged ? "".concat(position.y, "px") : "auto",
      position: isDragged ? "absolute" : "relative"
    }),
    className: RoseName,
    id: RoseID,
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp
  }, children, /*#__PURE__*/_react["default"].createElement(SideText, {
    direction: "left"
  }, " ", /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: "2rem",
      width: "2rem",
      background: "#EEE",
      borderRadius: "50%",
      display: childDisplay
    }
  })), /*#__PURE__*/_react["default"].createElement(SideText, {
    direction: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: "2rem",
      width: "2rem",
      background: "#EEE",
      borderRadius: "50%",
      display: childDisplay
    }
  })), /*#__PURE__*/_react["default"].createElement(SideText, {
    direction: "left"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: "2rem",
      width: "2rem",
      background: "#EEE",
      borderRadius: "50%",
      display: childDisplay
    }
  })), /*#__PURE__*/_react["default"].createElement(SideText, {
    direction: "right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: "2rem",
      width: "2rem",
      background: "#EEE",
      borderRadius: "50%",
      display: childDisplay
    }
  }))));
}
function RandomAnimate(_ref22) {
  var children = _ref22.children,
    RoseID = _ref22.RoseID,
    _ref22$RoseName = _ref22.RoseName,
    RoseName = _ref22$RoseName === void 0 ? "random-animate" : _ref22$RoseName,
    _ref22$edit = _ref22.edit,
    edit = _ref22$edit === void 0 ? {
      backgroundColor: "#EEE",
      height: "12rem",
      width: "12rem",
      borderRadius: "20px",
      padding: "1rem"
    } : _ref22$edit,
    AnimatedType = _ref22.AnimatedType;
  var _useState39 = (0, _react.useState)(""),
    _useState40 = _slicedToArray(_useState39, 2),
    animationClass = _useState40[0],
    setAnimationClass = _useState40[1];
  (0, _react.useEffect)(function () {
    // List of possible animations
    var animations = ["fadeIn", "slideInLeft", "zoomIn", "rotateIn", "bounceIn", "flipInX", "flipInY", "lightSpeedIn", "rollIn", "jackInTheBox"];
    if (AnimatedType) {
      // If AnimatedType is provided, use it as the animation class
      setAnimationClass(AnimatedType);
    } else {
      // Randomly pick an animation if AnimatedType is not provided
      var randomAnimation = animations[Math.floor(Math.random() * animations.length)];
      setAnimationClass(randomAnimation);
    }
  }, [AnimatedType]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n        .random-animate {\n          display: inline-block;\n        }\n        /* Add your keyframe animations here */\n        /* Fade In Animation */\n        @keyframes fadeIn {\n          from { opacity: 0; }\n          to { opacity: 1; }\n        }\n        .fadeIn {\n          animation: fadeIn 1s ease-in-out;\n        }\n        /* Slide In Left Animation */\n        @keyframes slideInLeft {\n          from { transform: translateX(-100%); opacity: 0; }\n          to { transform: translateX(0); opacity: 1; }\n        }\n        .slideInLeft {\n          animation: slideInLeft 1s ease-in-out;\n        }\n        /* Zoom In Animation */\n        @keyframes zoomIn {\n          from { transform: scale(0.5); opacity: 0; }\n          to { transform: scale(1); opacity: 1; }\n        }\n        .zoomIn {\n          animation: zoomIn 1s ease-in-out;\n        }\n        /* Rotate In Animation */\n        @keyframes rotateIn {\n          from { transform: rotate(-200deg); opacity: 0; }\n          to { transform: rotate(0); opacity: 1; }\n        }\n        .rotateIn {\n          animation: rotateIn 1s ease-in-out;\n        }\n        /* Bounce In Animation */\n        @keyframes bounceIn {\n          0%, 20%, 40%, 60%, 80%, 100% {\n            transform: translateY(0);\n          }\n          50% {\n            transform: translateY(-20px);\n          }\n        }\n        .bounceIn {\n          animation: bounceIn 1s ease-in-out;\n        }\n        /* Flip In X Animation */\n        @keyframes flipInX {\n          from {\n            transform: perspective(400px) rotateX(90deg);\n            opacity: 0;\n          }\n          to {\n            transform: perspective(400px) rotateX(0deg);\n            opacity: 1;\n          }\n        }\n        .flipInX {\n          animation: flipInX 1s ease-in-out;\n        }\n        /* Flip In Y Animation */\n        @keyframes flipInY {\n          from {\n            transform: perspective(400px) rotateY(90deg);\n            opacity: 0;\n          }\n          to {\n            transform: perspective(400px) rotateY(0deg);\n            opacity: 1;\n          }\n        }\n        .flipInY {\n          animation: flipInY 1s ease-in-out;\n        }\n        /* Light Speed In Animation */\n        @keyframes lightSpeedIn {\n          from { transform: translateX(100%) skewX(-30deg); opacity: 0; }\n          to { transform: translateX(0) skewX(0deg); opacity: 1; }\n        }\n        .lightSpeedIn {\n          animation: lightSpeedIn 1s ease-out;\n        }\n        /* Roll In Animation */\n        @keyframes rollIn {\n          from { transform: translateX(-100%) rotate(-120deg); opacity: 0; }\n          to { transform: translateX(0) rotate(0deg); opacity: 1; }\n        }\n        .rollIn {\n          animation: rollIn 1s ease-in-out;\n        }\n        /* Jack In The Box Animation */\n        @keyframes jackInTheBox {\n          from {\n            opacity: 0;\n            transform: scale(0.1) rotate(30deg);\n          }\n          50% {\n            transform: rotate(-10deg);\n          }\n          70% {\n            transform: rotate(3deg);\n          }\n          to {\n            opacity: 1;\n            transform: scale(1);\n          }\n        }\n        .jackInTheBox {\n          animation: jackInTheBox 1s ease-in-out;\n        }\n      "), /*#__PURE__*/_react["default"].createElement("div", {
    id: RoseID,
    style: edit,
    className: "".concat(RoseName, " ").concat(animationClass)
  }, children));
}
function SideText(_ref23) {
  var children = _ref23.children,
    RoseID = _ref23.RoseID,
    _ref23$RoseName = _ref23.RoseName,
    RoseName = _ref23$RoseName === void 0 ? "side-textAnimatedLarose" : _ref23$RoseName,
    _ref23$edit = _ref23.edit,
    edit = _ref23$edit === void 0 ? {} : _ref23$edit,
    _ref23$direction = _ref23.direction,
    direction = _ref23$direction === void 0 ? "left" : _ref23$direction;
  var animationDirection = direction === "right" ? "sideTextRight" : "sideTextLeft";
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n              .side-text {\n                  display: inline-block;\n              }\n              /* SideTextLeft Animation */\n              @keyframes sideTextLeft {\n                  from {\n                      transform: translateX(-100%);\n                      opacity: 0;\n                  }\n                  to {\n                      transform: translateX(0);\n                      opacity: 1;\n                  }\n              }\n              /* SideTextRight Animation */\n              @keyframes sideTextRight {\n                  from {\n                      transform: translateX(100%);\n                      opacity: 0;\n                  }\n                  to {\n                      transform: translateX(0);\n                      opacity: 1;\n                  }\n              }\n              .sideTextLeft {\n                  animation: sideTextLeft 1s ease-in-out;\n              }\n              .sideTextRight {\n                  animation: sideTextRight 1s ease-in-out;\n              }\n          "), /*#__PURE__*/_react["default"].createElement("div", {
    id: RoseID,
    style: edit,
    className: "".concat(RoseName, " ").concat(animationDirection)
  }, children));
}
function useClipboard() {
  var _useState41 = (0, _react.useState)(false),
    _useState42 = _slicedToArray(_useState41, 2),
    copied = _useState42[0],
    setCopied = _useState42[1];
  var copyToClipboard = function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function () {
      setCopied(true);
      setTimeout(function () {
        return setCopied(false);
      }, 2000);
    });
  };
  return [copied, copyToClipboard];
}
function useDocumentTitle(title) {
  (0, _react.useEffect)(function () {
    document.title = title;
  }, [title]);
}
function useLocalStorage(key, initialValue) {
  var _useState43 = (0, _react.useState)(function () {
      try {
        var item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.error(error);
        return initialValue;
      }
    }),
    _useState44 = _slicedToArray(_useState43, 2),
    storedValue = _useState44[0],
    setStoredValue = _useState44[1];
  var setValue = function setValue(value) {
    try {
      var valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValue];
}
function useOnlineStatus() {
  var _useState45 = (0, _react.useState)(navigator.onLine),
    _useState46 = _slicedToArray(_useState45, 2),
    isOnline = _useState46[0],
    setIsOnline = _useState46[1];
  (0, _react.useEffect)(function () {
    var handleOnline = function handleOnline() {
      return setIsOnline(true);
    };
    var handleOffline = function handleOffline() {
      return setIsOnline(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return function () {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
}
function useRand(from, to) {
  var getRandomValue = function getRandomValue() {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  };
  var _useState47 = (0, _react.useState)(getRandomValue()),
    _useState48 = _slicedToArray(_useState47, 2),
    RandValue = _useState48[0],
    setRandValue = _useState48[1];
  var refreshRandValue = function refreshRandValue() {
    setRandValue(getRandomValue());
  };
  return [RandValue, refreshRandValue];
}
function SeeMore(_ref24) {
  var _children$props;
  var children = _ref24.children,
    _ref24$maxCharacters = _ref24.maxCharacters,
    maxCharacters = _ref24$maxCharacters === void 0 ? 100 : _ref24$maxCharacters,
    _ref24$maxElements = _ref24.maxElements,
    maxElements = _ref24$maxElements === void 0 ? 3 : _ref24$maxElements,
    edit = _ref24.edit,
    RoseName = _ref24.RoseName,
    RoseId = _ref24.RoseId,
    _ref24$editButton = _ref24.editButton,
    editButton = _ref24$editButton === void 0 ? {} : _ref24$editButton;
  var _useState49 = (0, _react.useState)(false),
    _useState50 = _slicedToArray(_useState49, 2),
    isExpanded = _useState50[0],
    setIsExpanded = _useState50[1];
  var textRef = (0, _react.useRef)(null);
  // Convert children to string if it's plain text
  var text = typeof children === 'string' ? children : children === null || children === void 0 || (_children$props = children.props) === null || _children$props === void 0 ? void 0 : _children$props.children;
  // Handle the toggling of the content visibility
  var toggleExpand = function toggleExpand() {
    return setIsExpanded(!isExpanded);
  };
  // Split children into an array if they are not already
  var childrenArray = _react["default"].Children.toArray(children);
  // Handle truncation for text
  var truncatedText = text;
  if (text && text.length > maxCharacters && !isExpanded) {
    truncatedText = text.slice(0, maxCharacters) + '...';
  }
  // Handle element visibility
  var visibleChildren = isExpanded ? childrenArray : childrenArray.slice(0, maxElements);
  // Determine if there's more content to show
  var hasMoreContent = (text === null || text === void 0 ? void 0 : text.length) > maxCharacters || childrenArray.length > maxElements;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({}, edit), {}, {
      overflow: 'hidden',
      transition: 'height 0.5s ease'
    }),
    className: RoseName,
    id: RoseId
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: textRef,
    className: "content"
  }, typeof children === 'string' ? truncatedText : visibleChildren), hasMoreContent && /*#__PURE__*/_react["default"].createElement("button", {
    style: _objectSpread({
      background: 'none',
      border: 'none',
      fontWeight: 'bold',
      color: 'blue'
    }, editButton),
    onClick: toggleExpand
  }, isExpanded ? 'Show Less' : 'Show More'));
}
function SideBox(_ref25) {
  var children = _ref25.children,
    _ref25$direction = _ref25.direction,
    direction = _ref25$direction === void 0 ? 'left' : _ref25$direction,
    _ref25$edit = _ref25.edit,
    edit = _ref25$edit === void 0 ? {} : _ref25$edit,
    RoseID = _ref25.RoseID,
    RoseName = _ref25.RoseName;
  var _useState51 = (0, _react.useState)(false),
    _useState52 = _slicedToArray(_useState51, 2),
    isVisible = _useState52[0],
    setIsVisible = _useState52[1];
  var boxRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var handleScroll = function handleScroll() {
      if (boxRef.current) {
        var boxRect = boxRef.current.getBoundingClientRect();
        var viewportHeight = window.innerHeight;
        // Check if the element is within the viewport
        if (boxRect.top <= viewportHeight && boxRect.bottom >= 0 && boxRect.left <= window.innerWidth && boxRect.right >= 0) {
          setIsVisible(true); // Element is visible
        } else {
          setIsVisible(false); // Element is not visible
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n        .sideboxComponent {\n          transition: transform 0.5s ease, opacity 0.5s ease;\n          opacity: 0;\n          z-index: 1000;\n          position: fixed;\n        }\n        .sideboxComponent.visible {\n          opacity: 1;\n        }\n        .sideboxComponent.left {\n          left: 0;\n          top: 50%;\n          transform: translateX(-100%) translateY(-50%);\n        }\n        .sideboxComponent.right {\n          right: 0;\n          top: 50%;\n          transform: translateX(100%) translateY(-50%);\n        }\n        .sideboxComponent.top {\n          top: 0;\n          left: 50%;\n          transform: translateX(-50%) translateY(-100%);\n        }\n        .sideboxComponent.bottom {\n          bottom: 0;\n          left: 50%;\n          transform: translateX(-50%) translateY(100%);\n        }\n        .sideboxComponent.left.visible {\n          transform: translateX(0) translateY(-50%);\n        }\n        .sideboxComponent.right.visible {\n          transform: translateX(0) translateY(-50%);\n        }\n        .sideboxComponent.top.visible {\n          transform: translateX(-50%) translateY(0);\n        }\n        .sideboxComponent.bottom.visible {\n          transform: translateX(-50%) translateY(0);\n        }\n      "), /*#__PURE__*/_react["default"].createElement("div", {
    ref: boxRef,
    style: edit,
    id: RoseID,
    className: "sideboxComponent ".concat(direction, " ").concat(isVisible ? 'visible' : '')
  }, RoseName && /*#__PURE__*/_react["default"].createElement("h2", null, RoseName), children));
}
var useBatteryStatus = exports.useBatteryStatus = function useBatteryStatus() {
  var _useState53 = (0, _react.useState)({
      level: null,
      charging: null
    }),
    _useState54 = _slicedToArray(_useState53, 2),
    batteryInfo = _useState54[0],
    setBatteryInfo = _useState54[1];
  (0, _react.useEffect)(function () {
    // Check if the browser supports the Battery Status API
    if ('getBattery' in navigator) {
      navigator.getBattery().then(function (battery) {
        // Set the initial battery status
        setBatteryInfo({
          level: battery.level,
          charging: battery.charging
        });
        // Update the battery status when it changes
        var updateBatteryInfo = function updateBatteryInfo() {
          setBatteryInfo({
            level: battery.level,
            charging: battery.charging
          });
        };
        battery.addEventListener('levelchange', updateBatteryInfo);
        battery.addEventListener('chargingchange', updateBatteryInfo);
        // Cleanup the event listeners on unmount
        return function () {
          battery.removeEventListener('levelchange', updateBatteryInfo);
          battery.removeEventListener('chargingchange', updateBatteryInfo);
        };
      });
    } else {
      console.log('Battery Status API is not supported in this browser.');
    }
  }, []);
  return batteryInfo;
};
function usePreferredLanguage() {
  var _useState55 = (0, _react.useState)('en'),
    _useState56 = _slicedToArray(_useState55, 2),
    preferredLanguage = _useState56[0],
    setPreferredLanguage = _useState56[1];
  (0, _react.useEffect)(function () {
    var language = navigator.language || navigator.userLanguage;
    setPreferredLanguage(language);
  }, []);
  return preferredLanguage;
}
function useColorScheme() {
  var _useState57 = (0, _react.useState)('light'),
    _useState58 = _slicedToArray(_useState57, 2),
    colorScheme = _useState58[0],
    setColorScheme = _useState58[1];
  (0, _react.useEffect)(function () {
    var matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    var handleChange = function handleChange(e) {
      setColorScheme(e.matches ? 'dark' : 'light');
    };
    handleChange(matchMedia); // Set the initial value
    matchMedia.addEventListener('change', handleChange);
    return function () {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, []);
  return colorScheme;
}
function useHardwareConcurrency() {
  var _useState59 = (0, _react.useState)(1),
    _useState60 = _slicedToArray(_useState59, 2),
    coreCount = _useState60[0],
    setCoreCount = _useState60[1];
  (0, _react.useEffect)(function () {
    if (navigator.hardwareConcurrency) {
      setCoreCount(navigator.hardwareConcurrency);
    }
  }, []);
  return coreCount;
}
var getContinent = exports.getContinent = function getContinent(latitude, longitude) {
  if (latitude && longitude) {
    if (latitude >= -34 && latitude <= 37 && longitude >= -17 && longitude <= 51) {
      return 'Africa';
    } else if (latitude >= 10 && latitude <= 82 && longitude >= 25 && longitude <= 180) {
      return 'Asia';
    } else if (latitude >= 10 && latitude <= 83 && longitude >= -168 && longitude <= -52) {
      return 'North America';
    } else if (latitude >= -56 && latitude <= 13 && longitude >= -93 && longitude <= -32) {
      return 'South America';
    } else if (latitude >= -48 && latitude <= -12 && longitude >= 110 && longitude <= 180) {
      return 'Australia';
    } else if (latitude >= 35 && latitude <= 72 && longitude >= -25 && longitude <= 45) {
      return 'Europe';
    } else if (latitude >= -90 && latitude <= -60) {
      return 'Antarctica';
    }
  }
  return 'Unknown';
};
var useContinentContent = exports.useContinentContent = function useContinentContent() {
  var _useState61 = (0, _react.useState)(null),
    _useState62 = _slicedToArray(_useState61, 2),
    continent = _useState62[0],
    setContinent = _useState62[1];
  (0, _react.useEffect)(function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var _position$coords = position.coords,
          latitude = _position$coords.latitude,
          longitude = _position$coords.longitude;
        var userContinent = getContinent(latitude, longitude);
        setContinent(userContinent);
      }, function (error) {
        console.error("Error getting location:", error);
        setContinent('Unknown');
      });
    } else {
      setContinent('Unknown');
    }
  }, []);
  return {
    continent: continent
  };
};
var useUserCountry = exports.useUserCountry = function useUserCountry() {
  var _useState63 = (0, _react.useState)(null),
    _useState64 = _slicedToArray(_useState63, 2),
    country = _useState64[0],
    setCountry = _useState64[1];
  var _useState65 = (0, _react.useState)(true),
    _useState66 = _slicedToArray(_useState65, 2),
    loading = _useState66[0],
    setLoading = _useState66[1];
  var _useState67 = (0, _react.useState)(null),
    _useState68 = _slicedToArray(_useState67, 2),
    error = _useState68[0],
    setError = _useState68[1];
  (0, _react.useEffect)(function () {
    var fetchCountry = /*#__PURE__*/function () {
      var _ref26 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch('https://ipapi.co/json/');
            case 3:
              response = _context.sent;
              if (response.ok) {
                _context.next = 6;
                break;
              }
              throw new Error('Failed to fetch country data');
            case 6:
              _context.next = 8;
              return response.json();
            case 8:
              data = _context.sent;
              setCountry(data.country_name);
              _context.next = 16;
              break;
            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              console.error("Error fetching the user's country:", _context.t0);
              setError('Could not determine your country.');
            case 16:
              _context.prev = 16;
              setLoading(false);
              return _context.finish(16);
            case 19:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 12, 16, 19]]);
      }));
      return function fetchCountry() {
        return _ref26.apply(this, arguments);
      };
    }();
    fetchCountry();
  }, []);
  return {
    country: country,
    loading: loading,
    error: error
  };
};
var usePhotoCapture = exports.usePhotoCapture = function usePhotoCapture() {
  var _useState69 = (0, _react.useState)(null),
    _useState70 = _slicedToArray(_useState69, 2),
    photo = _useState70[0],
    setPhoto = _useState70[1];
  var _useState71 = (0, _react.useState)(null),
    _useState72 = _slicedToArray(_useState71, 2),
    cameraError = _useState72[0],
    setCameraError = _useState72[1];
  var videoRef = (0, _react.useRef)(null);
  var canvasRef = (0, _react.useRef)(null);
  // Start the camera when the hook is used
  (0, _react.useEffect)(function () {
    var startCamera = /*#__PURE__*/function () {
      var _ref27 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var stream;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return navigator.mediaDevices.getUserMedia({
                video: true
              });
            case 3:
              stream = _context2.sent;
              if (videoRef.current) {
                videoRef.current.srcObject = stream;
                // Play video after the stream metadata is loaded
                videoRef.current.onloadedmetadata = function () {
                  videoRef.current.play()["catch"](function (err) {
                    console.error('Error playing video:', err);
                  });
                };
              }
              _context2.next = 11;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.error('Error accessing the camera: ', _context2.t0);
              setCameraError('Unable to access the camera. Please check your device settings.');
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 7]]);
      }));
      return function startCamera() {
        return _ref27.apply(this, arguments);
      };
    }();
    startCamera();
    // Cleanup function to stop the camera when the component unmounts
    return function () {
      if (videoRef.current && videoRef.current.srcObject) {
        var stream = videoRef.current.srcObject;
        var tracks = stream.getTracks();
        tracks.forEach(function (track) {
          return track.stop();
        });
      }
    };
  }, []);
  // Capture a photo by drawing the video frame onto a canvas
  var takePhoto = function takePhoto() {
    var canvas = canvasRef.current;
    var video = videoRef.current;
    if (canvas && video) {
      var context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      setPhoto(canvas.toDataURL('image/png'));
    }
  };
  return {
    takePhoto: takePhoto,
    photo: photo,
    videoRef: videoRef,
    canvasRef: canvasRef,
    cameraError: cameraError
  };
};
var useGetContacts = exports.useGetContacts = function useGetContacts() {
  var _useState73 = (0, _react.useState)([]),
    _useState74 = _slicedToArray(_useState73, 2),
    contacts = _useState74[0],
    setContacts = _useState74[1];
  var _useState75 = (0, _react.useState)(null),
    _useState76 = _slicedToArray(_useState75, 2),
    error = _useState76[0],
    setError = _useState76[1];
  var _useState77 = (0, _react.useState)(false),
    _useState78 = _slicedToArray(_useState77, 2),
    isFetching = _useState78[0],
    setIsFetching = _useState78[1];
  // Function to get contacts
  var getContacts = /*#__PURE__*/function () {
    var _ref28 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var props, opts, contactList;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            if ('contacts' in navigator && 'ContactsManager' in window) {
              _context3.next = 3;
              break;
            }
            throw new Error("Contacts API not supported on this device.");
          case 3:
            // Define the properties and options for contact retrieval
            props = ['name', 'email', 'tel'];
            opts = {
              multiple: true
            }; // Fetch multiple contacts
            setIsFetching(true);
            _context3.next = 8;
            return navigator.contacts.select(props, opts);
          case 8:
            contactList = _context3.sent;
            setContacts(contactList);
            setIsFetching(false);
            _context3.next = 17;
            break;
          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            setError(_context3.t0.message);
            setIsFetching(false);
          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 13]]);
    }));
    return function getContacts() {
      return _ref28.apply(this, arguments);
    };
  }();
  return {
    contacts: contacts,
    error: error,
    isFetching: isFetching,
    getContacts: getContacts
  };
};
var SmoothParent = exports.SmoothParent = function SmoothParent(_ref29) {
  var children = _ref29.children;
  var parentRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var _parentRef$current;
    var childElements = (_parentRef$current = parentRef.current) === null || _parentRef$current === void 0 ? void 0 : _parentRef$current.children;
    if (childElements) {
      Array.from(childElements).forEach(function (child, index) {
        child.style.opacity = 0;
        child.style.transform = 'translateY(20px)';
        child.style.transition = "opacity 0.5s ease ".concat(index * 0.2, "s, transform 0.5s ease ").concat(index * 0.2, "s");
        setTimeout(function () {
          child.style.opacity = 1;
          child.style.transform = 'translateY(0)';
        }, 50);
      });
    }
  }, [children]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n        .smooth-parent {\n  display: flex;\n  flex-direction: column;\n  gap: 20px; /* space between child elements */\n}\n.smooth-parent > * {\n  opacity: 0;\n  transform: translateY(20px);\n  transition: opacity 0.5s ease, transform 0.5s ease;\n}\n"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "smooth-parent",
    ref: parentRef
  }, children));
};
var SnakeMouse = exports.SnakeMouse = function SnakeMouse(_ref30) {
  var _ref30$color = _ref30.color,
    color = _ref30$color === void 0 ? "rgba(0, 150, 255, 0.8)" : _ref30$color,
    _ref30$display = _ref30.display,
    display = _ref30$display === void 0 ? "block" : _ref30$display;
  var canvasRef = (0, _react.useRef)(null);
  var ctxRef = (0, _react.useRef)(null);
  var trailsRef = (0, _react.useRef)([]);
  var maxTrailLength = 30;
  var numOfTrails = 8;
  var speedFactor = 0.35;
  var animationFrameId = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    trailsRef.current = Array.from({
      length: numOfTrails
    }, function () {
      return [];
    });
  }, []);
  var handleMouseMove = function handleMouseMove(event) {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var rect = canvas.getBoundingClientRect();
    var mousePosition = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
    trailsRef.current.forEach(function (trail) {
      var lastPosition = trail[trail.length - 1] || mousePosition;
      var interpolatedPosition = {
        x: lastPosition.x + (mousePosition.x - lastPosition.x) * speedFactor,
        y: lastPosition.y + (mousePosition.y - lastPosition.y) * speedFactor
      };
      if (trail.length > maxTrailLength) {
        trail.shift();
      }
      trail.push(interpolatedPosition);
    });
  };
  var _draw = function draw() {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = ctxRef.current;
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw each trail
    trailsRef.current.forEach(function (trail, index) {
      ctx.strokeStyle = "rgba(0, 150, 255, ".concat(0.8 - index * 0.1, ")");
      ctx.lineWidth = 2.5 - index * 0.3;
      if (trail.length > 1) {
        ctx.beginPath();
        ctx.moveTo(trail[0].x, trail[0].y);
        for (var i = 1; i < trail.length; i++) {
          ctx.lineTo(trail[i].x, trail[i].y);
        }
        ctx.stroke();
      }
    });
    animationFrameId.current = requestAnimationFrame(_draw);
  };
  (0, _react.useEffect)(function () {
    var canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");
    ctxRef.current = ctx;
    // Start the drawing loop
    _draw();
    // Cleanup to cancel animation on unmount
    return function () {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement("canvas", {
    ref: canvasRef,
    onMouseMove: handleMouseMove,
    style: {
      display: display,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -1,
      backgroundColor: "transparent"
    }
  });
};
var ViewportContainer = exports.ViewportContainer = function ViewportContainer(_ref31) {
  var children = _ref31.children,
    _ref31$threshold = _ref31.threshold,
    threshold = _ref31$threshold === void 0 ? 0.1 : _ref31$threshold,
    _ref31$rootMargin = _ref31.rootMargin,
    rootMargin = _ref31$rootMargin === void 0 ? '0px' : _ref31$rootMargin,
    _ref31$lazyLoad = _ref31.lazyLoad,
    lazyLoad = _ref31$lazyLoad === void 0 ? false : _ref31$lazyLoad;
  var containerRef = (0, _react.useRef)(null);
  var _useState79 = (0, _react.useState)(!lazyLoad),
    _useState80 = _slicedToArray(_useState79, 2),
    isLoaded = _useState80[0],
    setIsLoaded = _useState80[1];
  (0, _react.useEffect)(function () {
    if (!lazyLoad) return;
    var observer = new IntersectionObserver(function (_ref32) {
      var _ref33 = _slicedToArray(_ref32, 1),
        entry = _ref33[0];
      if (entry.isIntersecting) {
        setIsLoaded(true);
        observer.disconnect();
      }
    }, {
      threshold: threshold,
      rootMargin: rootMargin
    });
    if (containerRef.current) {
      observer.observe(containerRef.current); // مراقبة العنصر
    }
    return function () {
      if (observer && containerRef.current) {
        observer.disconnect(); // التأكد من فصل المراقب عند إزالة المكون
      }
    };
  }, [threshold, rootMargin, lazyLoad]);
  if (!isLoaded) return null; // إذا لم يتم تحميل المحتوى بعد، إرجاع null (لا يتم عرض أي شيء)
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: containerRef
  }, children, " ");
};
var useViewportVisibility = exports.useViewportVisibility = function useViewportVisibility() {
  var loadContentOnView = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var _useState81 = (0, _react.useState)(false),
    _useState82 = _slicedToArray(_useState81, 2),
    isVisible = _useState82[0],
    setIsVisible = _useState82[1];
  var ref = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var handleScroll = function handleScroll() {
      if (ref.current) {
        var rect = ref.current.getBoundingClientRect();
        var isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInViewport);
      }
    };
    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ref.current]);
  return {
    ref: ref,
    isVisible: isVisible,
    loadContentOnView: loadContentOnView
  };
};
function TestManegar(_ref34) {
  var children = _ref34.children;
  var _useState83 = (0, _react.useState)(null),
    _useState84 = _slicedToArray(_useState83, 2),
    renderTime = _useState84[0],
    setRenderTime = _useState84[1];
  (0, _react.useEffect)(function () {
    var startTime = performance.now();
    // Perform the measurement after the next paint
    requestAnimationFrame(function () {
      var endTime = performance.now();
      setRenderTime(endTime - startTime); // Calculate render time in milliseconds
    });
  }, [children]); // Runs the effect when children change
  return /*#__PURE__*/_react["default"].createElement("div", null, children, renderTime !== null && /*#__PURE__*/_react["default"].createElement("p", null, "Render time: ", renderTime.toFixed(2), " ms"));
}
var useRenderTime = exports.useRenderTime = function useRenderTime() {
  var _useState85 = (0, _react.useState)(null),
    _useState86 = _slicedToArray(_useState85, 2),
    renderTime = _useState86[0],
    setRenderTime = _useState86[1];
  (0, _react.useEffect)(function () {
    var startTime = performance.now();
    // Perform the measurement after the next paint
    requestAnimationFrame(function () {
      var endTime = performance.now();
      setRenderTime(endTime - startTime); // Calculate render time in milliseconds
    });
  }, []); // Run only once on mount
  return renderTime;
};
var BlockUser = exports.BlockUser = function BlockUser(_ref35) {
  var blockUser = _ref35.blockUser,
    _ref35$edit = _ref35.edit,
    edit = _ref35$edit === void 0 ? {} : _ref35$edit,
    RoseId = _ref35.RoseId;
  var _useState87 = (0, _react.useState)(null),
    _useState88 = _slicedToArray(_useState87, 2),
    ip = _useState88[0],
    setIp = _useState88[1];
  var _useState89 = (0, _react.useState)(false),
    _useState90 = _slicedToArray(_useState89, 2),
    isBlocked = _useState90[0],
    setIsBlocked = _useState90[1];
  var fetchUserIP = /*#__PURE__*/function () {
    var _ref36 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return fetch('https://api.ipify.org?format=json');
          case 3:
            response = _context4.sent;
            _context4.next = 6;
            return response.json();
          case 6:
            data = _context4.sent;
            setIp(data.ip);
            _context4.next = 13;
            break;
          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            console.error('Error fetching IP:', _context4.t0);
          case 13:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 10]]);
    }));
    return function fetchUserIP() {
      return _ref36.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    fetchUserIP();
  }, []);
  (0, _react.useEffect)(function () {
    if (blockUser && ip) {
      setIsBlocked(true);
      var randomNum = Math.random();
      window.open("https://your-access-blocked/".concat(randomNum), "_self");
    }
  }, [blockUser, ip]);
  if (isBlocked) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
      jsx: true
    }, "\n                  .userBlockComponentActionEvent{\n                      display: flex;\n                      justify-content: center;\n                      align-items: center;\n                      position: absolute;\n                      user-select: none;\n                      z-index: 9999999;\n                      height: 100%;\n                      font-weight: bold;\n                      font-weight: 4rem;\n                      background: black;\n                      width: 100%;\n                      color:red;\n                      overflow:hidden;\n                  }\n                  .userBlockComponentActionEventChildrenDiv{\n                      color:white;\n                      background:red;\n                      height:4rem;\n                      display: flex;\n                      justify-content: center;\n                      align-items: center;\n                      width:40rem;\n                      border-radius:10px\n                  }\n                  "), /*#__PURE__*/_react["default"].createElement("div", {
      className: "userBlockComponentActionEvent"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      id: RoseId,
      style: edit,
      className: "userBlockComponentActionEventChildrenDiv"
    }, "Access Denied: You Are Blocked")));
  }
};