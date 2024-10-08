"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ak_Alert = Ak_Alert;
exports.AnimatedText = AnimatedText;
exports.BlockUser = exports.AreaChart = void 0;
exports.Button = Button;
exports.Chart = void 0;
exports.CounterDown = CounterDown;
exports.CounterUp = CounterUp;
exports.Image = void 0;
exports.LaRoseText = LaRoseText;
exports.LineChart = void 0;
exports.Loader = Loader;
exports.MenuPop = MenuPop;
exports.MetaDescription = void 0;
exports.ModernBtn = ModernBtn;
exports.Notification = Notification;
exports.Popup = exports.PieChart = void 0;
exports.RandomAnimate = RandomAnimate;
exports.RootRemover = exports.RobotDetection = void 0;
exports.RoseBox = RoseBox;
exports.Route = exports.RoseRouter = exports.RoseParent = void 0;
exports.Section = Section;
exports.SeeMore = SeeMore;
exports.ShinyButton = ShinyButton;
exports.ShinyText = ShinyText;
exports.SideBox = SideBox;
exports.SideText = SideText;
exports.SoundInteraction = exports.SnakeMouse = exports.SmoothParent = void 0;
exports.SplitText = SplitText;
exports.Spring = Spring;
exports.SwitchCase = SwitchCase;
exports.Table = void 0;
exports.Title = Title;
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
var _excluded = ["children", "RoseName", "RoseID", "edit", "ariaLabelledby"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
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
    role: "button",
    "aria-label": "button",
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
      }, time * 1000);
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
  }, "\n        .animated-button {\n          position: relative;\n          display: flex;\n          align-items: center;\n          gap: 0.2rem;\n          padding: 1rem 2rem;\n          border: 4px solid transparent;\n          font-size: ".concat(fontSize, "rem;\n          background-color: inherit;\n          border-radius: 100px;\n          font-weight: 600;\n          color: ").concat(color, ";\n          box-shadow: 0 0 0 2px ").concat(allColor, ";\n          cursor: pointer;\n          overflow: hidden;\n          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);\n          height: ").concat(h, "rem;\n          min-width: ").concat(w, "rem;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          font-size: 1.3rem;\n        }\n        .animated-button svg {\n          position: absolute;\n          width: 1.5rem;\n          fill: ").concat(allColor, ";\n          z-index: 9;\n          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);\n        }\n        .animated-button .arr-1 {\n          right: 16px;\n        }\n        .animated-button .arr-2 {\n          left: -25%;\n        }\n        .animated-button .circle {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          width: 1.1rem;\n          height: 1.1rem;\n          background-color: ").concat(allColor, ";\n          border-radius: 50%;\n          opacity: 0;\n          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);\n        }\n        .animated-button .text {\n          position: relative;\n          z-index: 1;\n          transform: translateX(-12px);\n          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);\n        }\n        .animated-button:hover {\n          box-shadow: 0 0 0 12px transparent;\n          color: ").concat(hoverColor, ";\n          border-radius: 12px;\n        }\n        .animated-button:hover .arr-1 {\n          right: -25%;\n        }\n        .animated-button:hover .arr-2 {\n          left: 1rem;\n        }\n        .animated-button:hover .text {\n          transform: translateX(12px);\n        }\n        .animated-button:hover svg {\n          fill: #212121;\n        }\n        .animated-button:active {\n          transform: scale(0.95);\n          box-shadow: 0 0 0 4px ").concat(allColor, ";\n        }\n        .animated-button:hover .circle {\n          width: 13.75rem;\n          height: 13.75rem;\n          opacity: 1;\n        }\n      ")), /*#__PURE__*/_react["default"].createElement("button", {
    role: "button",
    "aria-label": "button",
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
  }, "\n        .toggler {\n          width: 3rem;\n          margin: 40px auto;\n        }\n        .toggler input {\n          display: none;\n        }\n        .toggler label {\n          display: block;\n          position: relative;\n          width: ".concat(w, "rem;\n          height: ").concat(h, "rem;\n          border: 1px solid #d6d6d6;\n          border-radius: 36px;\n          background: #e4e8e8;\n          cursor: pointer;\n        }\n        .toggler label::after {\n          display: block;\n          border-radius: 100%;\n          background-color: #d7062a;\n          content: \"\";\n          animation-name: toggler-size;\n          animation-duration: 0.15s;\n          animation-timing-function: ease-out;\n          animation-direction: forwards;\n          animation-iteration-count: 1;\n          animation-play-state: running;\n        }\n        .toggler label::after,\n        .toggler label .toggler-on,\n        .toggler label .toggler-off {\n          position: absolute;\n          top: 50%;\n          left: 25%;\n          width: 26px;\n          height: 26px;\n          transform: translateY(-50%) translateX(-50%);\n          transition: left 0.15s ease-in-out, background-color 0.2s ease-out,\n            width 0.15s ease-in-out, height 0.15s ease-in-out,\n            opacity 0.15s ease-in-out;\n        }\n        .toggler input:checked + label::after,\n        .toggler input:checked + label .toggler-on,\n        .toggler input:checked + label .toggler-off {\n          left: 75%;\n        }\n        .toggler input:checked + label::after {\n          background-color: #50ac5d;\n          animation-name: toggler-size2;\n        }\n        .toggler .toggler-on,\n        .toggler .toggler-off {\n          opacity: 1;\n          z-index: 2;\n        }\n        .toggler input:checked + label .toggler-off,\n        .toggler input:not(:checked) + label .toggler-on {\n          width: 0;\n          height: 0;\n          opacity: 0;\n        }\n        .toggler .path {\n          fill: none;\n          stroke: #fefefe;\n          stroke-width: 7px;\n          stroke-linecap: round;\n          stroke-miterlimit: 10;\n        }\n        @keyframes toggler-size {\n          0%,\n          100% {\n            width: 1.5rem;\n            height: 1.5rem;\n          }\n          50% {\n            width: 0.75rem;\n            height: 0.75rem;\n          }\n        }\n        @keyframes toggler-size2 {\n          0%,\n          100% {\n            width: 1.5rem;\n            height: 1.5rme;\n          }\n          50% {\n            width: 0.75rem;\n            height: 0.75rem;\n          }\n        }\n      ")), /*#__PURE__*/_react["default"].createElement("div", {
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
  }, "\n        /* Assuming base font size of 16px, so 1rem = 16px */\n        .loading {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n        }\n        .loading-wide {\n          width: 17.375rem;\n          height: 17.375rem;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          position: relative;\n        }\n        .color {\n          background-color: #3395ff;\n        }\n        .l1 {\n          width: 0.9375rem; /* 15px / 16px */\n          height: 4.0625rem; /* 65px / 16px */\n          position: absolute;\n          animation: move-h 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n        }\n        .l2 {\n          width: 0.9375rem; /* 15px / 16px */\n          height: 3.75rem; /* 60px / 16px */\n          position: absolute;\n          transform: rotate(90deg);\n          animation: move-v 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n        }\n        @keyframes move-h {\n          0% {\n            top: 0;\n            opacity: 0;\n          }\n          25% {\n            opacity: 1;\n          }\n          50% {\n            top: 30%;\n            opacity: 1;\n          }\n          75% {\n            opacity: 1;\n          }\n          100% {\n            top: 100%;\n            opacity: 0;\n          }\n        }\n        @keyframes move-v {\n          0% {\n            left: 0;\n            opacity: 0;\n          }\n          25% {\n            opacity: 1;\n          }\n          50% {\n            left: 45%;\n            opacity: 1;\n          }\n          75% {\n            opacity: 1;\n          }\n          100% {\n            left: 100%;\n            opacity: 0;\n          }\n        }\n        .animation-effect-light {\n          animation: effect 0.2s 0.1s infinite linear;\n        }\n        .animation-effect-light-d {\n          animation: effect 0.3s 0.2s infinite linear;\n        }\n        .animation-effect-rot {\n          animation: rot 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n        }\n        .animation-effect-scale {\n          animation: scale 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n        }\n        @keyframes effect {\n          0% {\n            opacity: 0;\n          }\n          50% {\n            opacity: 1;\n          }\n          100% {\n            opacity: 0;\n          }\n        }\n        @keyframes rot {\n          0% {\n            transform: rotate(0deg);\n          }\n          50% {\n            transform: rotate(180deg);\n          }\n          100% {\n            transform: rotate(360deg);\n          }\n        }\n        @keyframes scale {\n          0% {\n            transform: scale(1);\n          }\n          50% {\n            transform: scale(1.9);\n          }\n          100% {\n            transform: scale(1);\n          }\n        }\n        .e1 {\n          width: 0.0625rem; /* 1px / 16px */\n          height: 2.5rem; /* 40px / 16px */\n          opacity: 0.3;\n          position: absolute;\n          top: 0;\n          left: 0.5rem; /* 8px / 16px */\n        }\n        .e2 {\n          width: 3.75rem; /* 60px / 16px */\n          height: 0.0625rem; /* 1px / 16px */\n          opacity: 0.8;\n          position: absolute;\n          top: 0.5rem; /* 8px / 16px */\n          left: 0;\n        }\n        .e3 {\n          position: absolute;\n          top: 0.625rem; /* 10px / 16px */\n          left: 0.75rem; /* 12px / 16px */\n          font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n          font-weight: 900;\n          font-size: 1.125rem; /* 18px / 16px */\n          color: #3395ff;\n        }\n        .e4 {\n          width: 0.0625rem; /* 1px / 16px */\n          height: 2.5rem; /* 40px / 16px */\n          opacity: 0.3;\n          position: absolute;\n          top: 5.625rem; /* 90px / 16px */\n          right: 0.625rem; /* 10px / 16px */\n        }\n        .e5 {\n          width: 2.5rem; /* 40px / 16px */\n          height: 0.0625rem; /* 1px / 16px */\n          opacity: 0.3;\n          position: absolute;\n          top: 6.25rem; /* 100px / 16px */\n          right: 0;\n        }\n        .e6 {\n          position: absolute;\n          top: 6.25rem; /* 100px / 16px */\n          right: 0;\n          font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n          font-size: 2rem; /* 32px / 16px */\n          color: #3395ff;\n        }\n        .e7 {\n          width: 0.0625rem; /* 1px / 16px */\n          height: 1.25rem; /* 20px / 16px */\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          transform: rotate(45deg);\n          animation: height 1s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n        }\n        @keyframes height {\n          0% {\n            bottom: 0%;\n            left: 0%;\n            height: 0;\n          }\n          25% {\n            height: 5.625rem; /* 90px / 16px */\n          }\n          50% {\n            bottom: 100%;\n            left: 100%;\n            height: 5.625rem; /* 90px / 16px */\n          }\n          75% {\n            height: 0;\n          }\n          100% {\n            bottom: 0%;\n            left: 0%;\n            height: 0;\n          }\n        }\n        .e8 {\n          width: 1.25rem; /* 20px / 16px */\n          height: 0.0625rem; /* 1px / 16px */\n          position: absolute;\n          bottom: 50%;\n          left: 0;\n          animation: width 1.5s infinite cubic-bezier(0.65, 0.05, 0.36, 1);\n        }\n        @keyframes width {\n          0% {\n            left: 0%;\n            width: 0;\n          }\n          50% {\n            left: 100%;\n            width: 5.625rem; /* 90px / 16px */\n          }\n          100% {\n            left: 0%;\n            width: 0;\n          }\n        }\n      "), /*#__PURE__*/_react["default"].createElement("div", {
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
function LaRoseText(_ref7) {
  var _ref7$edit = _ref7.edit,
    edit = _ref7$edit === void 0 ? {} : _ref7$edit,
    children = _ref7.children,
    _ref7$fontSize = _ref7.fontSize,
    fontSize = _ref7$fontSize === void 0 ? 2 : _ref7$fontSize,
    _ref7$fontWeight = _ref7.fontWeight,
    fontWeight = _ref7$fontWeight === void 0 ? 600 : _ref7$fontWeight,
    _ref7$gradientText = _ref7.gradientText,
    gradientText = _ref7$gradientText === void 0 ? "linear-gradient(45deg, #ff007f, #ff00ff, #ff1493, #ff69b4, #ff69b4, #ff1493, #ff00ff, #ff007f)" : _ref7$gradientText;
  var LaRoseText = _objectSpread({}, edit);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n        .title {\n          font-size: ".concat(fontSize, "rem;\n          font-weight: ").concat(fontWeight, ";\n          background: ").concat(gradientText, ";\n          -webkit-background-clip: text;\n          -webkit-text-fill-color: transparent;\n          background-clip: text;\n          text-fill-color: transparent;\n        }\n      ")), /*#__PURE__*/_react["default"].createElement("div", {
    style: LaRoseText,
    className: "title"
  }, children));
}
function RoseBox(_ref8) {
  var children = _ref8.children,
    _ref8$edit = _ref8.edit,
    edit = _ref8$edit === void 0 ? {} : _ref8$edit,
    _ref8$background = _ref8.background,
    background = _ref8$background === void 0 ? "" : _ref8$background,
    _ref8$RoseName = _ref8.RoseName,
    RoseName = _ref8$RoseName === void 0 ? "" : _ref8$RoseName,
    _ref8$RoseID = _ref8.RoseID,
    RoseID = _ref8$RoseID === void 0 ? "" : _ref8$RoseID,
    _ref8$autoLayout = _ref8.autoLayout,
    autoLayout = _ref8$autoLayout === void 0 ? false : _ref8$autoLayout,
    _ref8$shadow = _ref8.shadow,
    shadow = _ref8$shadow === void 0 ? false : _ref8$shadow,
    _ref8$shadowColor = _ref8.shadowColor,
    shadowColor = _ref8$shadowColor === void 0 ? "black" : _ref8$shadowColor,
    _ref8$aspectRatio = _ref8.aspectRatio,
    aspectRatio = _ref8$aspectRatio === void 0 ? null : _ref8$aspectRatio,
    _ref8$atHover = _ref8.atHover,
    atHover = _ref8$atHover === void 0 ? false : _ref8$atHover,
    _ref8$grid = _ref8.grid,
    grid = _ref8$grid === void 0 ? false : _ref8$grid,
    _ref8$flex = _ref8.flex,
    flex = _ref8$flex === void 0 ? false : _ref8$flex,
    _ref8$scaleAnimate = _ref8.scaleAnimate,
    scaleAnimate = _ref8$scaleAnimate === void 0 ? false : _ref8$scaleAnimate,
    _ref8$childrenVisible = _ref8.childrenVisible,
    childrenVisible = _ref8$childrenVisible === void 0 ? true : _ref8$childrenVisible,
    onClick = _ref8.onClick,
    ariaLabel = _ref8.ariaLabel,
    role = _ref8.role,
    _ref8$lazy = _ref8.lazy,
    lazy = _ref8$lazy === void 0 ? false : _ref8$lazy,
    _ref8$AutoHandling = _ref8.AutoHandling,
    AutoHandling = _ref8$AutoHandling === void 0 ? false : _ref8$AutoHandling,
    _ref8$outlineOffset = _ref8.outlineOffset,
    outlineOffset = _ref8$outlineOffset === void 0 ? 0 : _ref8$outlineOffset;
  var _useState9 = (0, _react.useState)(!lazy),
    _useState10 = _slicedToArray(_useState9, 2),
    isLoaded = _useState10[0],
    setIsLoaded = _useState10[1];
  (0, _react.useEffect)(function () {
    if (lazy) {
      var timer = setTimeout(function () {
        setIsLoaded(true);
      }, 200);
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
  var hoverClass = atHover ? "rosebox-hover" : "";
  var handleClick = function handleClick() {
    if (typeof onClick === "function") {
      onClick();
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n        .rosebox-hover {\n          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out,\n            background-color 0.3s ease-in-out;\n        }\n        .rosebox-hover:hover {\n          transform: scale(1.05);\n          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n          background-color: rgba(240, 240, 240, 0.8);\n        }\n        .rosebox-scale-animate {\n          animation: scale-down 0.6s ease-out forwards;\n        }\n        @keyframes scale-down {\n          0% {\n            transform: scale(2);\n          }\n          100% {\n            transform: scale(0.9);\n          }\n        }\n      "), childrenVisible && /*#__PURE__*/_react["default"].createElement("div", {
    "aria-label": ariaLabel,
    role: role,
    onClick: handleClick,
    id: RoseID,
    className: "".concat(RoseName, " ").concat(hoverClass, " ").concat(scaleAnimate ? "rosebox-scale-animate" : ""),
    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, edit), layoutStyle), shadowStyle), aspectStyle), displayLayoutStyle), backgroundStyle), autoHandleStyle)
  }, isLoaded ? children : /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")));
}
function SplitText(_ref9) {
  var children = _ref9.children,
    RoseName = _ref9.RoseName,
    RoseId = _ref9.RoseId,
    _ref9$initialAnimateT = _ref9.initialAnimateTypeStyle,
    initialAnimateTypeStyle = _ref9$initialAnimateT === void 0 ? "character" : _ref9$initialAnimateT,
    _ref9$edit = _ref9.edit,
    edit = _ref9$edit === void 0 ? {} : _ref9$edit,
    _ref9$speed = _ref9.speed,
    speed = _ref9$speed === void 0 ? 0.5 : _ref9$speed,
    _ref9$delay = _ref9.delay,
    delay = _ref9$delay === void 0 ? 0.05 : _ref9$delay;
  var _useState11 = (0, _react.useState)(initialAnimateTypeStyle),
    _useState12 = _slicedToArray(_useState11, 2),
    animateTypeStyle = _useState12[0],
    setAnimateTypeStyle = _useState12[1];
  (0, _react.useEffect)(function () {
    var fullAnimationDuration = speed + delay * (children.split("").length || 1);
    var timer = setTimeout(function () {
      setAnimateTypeStyle("word");
    }, fullAnimationDuration * 1000);
    return function () {
      return clearTimeout(timer);
    };
  }, [speed, delay, children]);
  var splitText = animateTypeStyle === "word" ? children.split(/(\s+)/) : children.split("");
  var animatedText = splitText.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: index,
      className: "SplitTextItem",
      style: {
        "--SplitTextItem-index": index
      }
    }, item === " " ? "\xA0" : item);
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n        .SplitTextItem {\n          display: inline-block;\n          opacity: 0;\n          transform: translateY(20px);\n          animation: splitAnimation ".concat(speed, "s forwards;\n          animation-delay: calc(var(--SplitTextItem-index) * ").concat(delay, "s);\n        }\n        @keyframes splitAnimation {\n          to {\n            opacity: 1;\n            transform: translateY(0);\n          }\n        }\n      ")), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({}, edit),
    id: RoseId,
    className: RoseName
  }, animatedText));
}
function ShinyText(_ref10) {
  var children = _ref10.children,
    RoseName = _ref10.RoseName,
    RoseId = _ref10.RoseId,
    _ref10$edit = _ref10.edit,
    edit = _ref10$edit === void 0 ? {} : _ref10$edit,
    _ref10$speed = _ref10.speed,
    speed = _ref10$speed === void 0 ? 2 : _ref10$speed,
    _ref10$color = _ref10.color,
    color = _ref10$color === void 0 ? "#fff" : _ref10$color,
    _ref10$backgroundColo = _ref10.backgroundColor,
    backgroundColor = _ref10$backgroundColo === void 0 ? "#000" : _ref10$backgroundColo,
    _ref10$shinyColor = _ref10.shinyColor,
    shinyColor = _ref10$shinyColor === void 0 ? "rgba(255, 255, 255, 0.7)" : _ref10$shinyColor,
    onClick = _ref10.onClick;
  var onClickFun = function onClickFun() {
    if (typeof onClick === "function") {
      onClick();
    }
  };
  var shinyTextStyle = {
    position: "relative",
    display: "inline-block",
    color: "".concat(color),
    backgroundColor: backgroundColor,
    fontWeight: "bold",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    overflow: "hidden"
  };
  var shinyEffectStyle = {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    height: "100%",
    width: "100%",
    background: "linear-gradient(120deg, transparent, ".concat(shinyColor, ", transparent)"),
    transform: "skewX(-15deg)",
    animation: "shiny-effect ".concat(speed, "s infinite")
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    onClick: onClickFun,
    style: _objectSpread(_objectSpread({}, shinyTextStyle), edit),
    id: RoseId,
    className: RoseName
  }, children, /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({}, shinyEffectStyle), {}, {
      position: "absolute"
    })
  }));
}
function ShinyButton(_ref11) {
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
    backgroundColor = _ref11$backgroundColo === void 0 ? "#111" : _ref11$backgroundColo,
    _ref11$padding = _ref11.padding,
    padding = _ref11$padding === void 0 ? "10px 20px" : _ref11$padding,
    _ref11$borderRadius = _ref11.borderRadius,
    borderRadius = _ref11$borderRadius === void 0 ? "5px" : _ref11$borderRadius,
    onClick = _ref11.onClick;
  var onClickFun = function onClickFun() {
    if (typeof onClick === "function") {
      onClick();
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n        .shiny-button {\n          position: relative;\n          display: inline-block;\n          padding: ".concat(padding, ";\n          background-color: ").concat(backgroundColor, ";\n          color: ").concat(color, ";\n          font-weight: bold;\n          text-transform: uppercase;\n          overflow: hidden;\n          border-radius: ").concat(borderRadius, ";\n          cursor: pointer;\n          transition: background-color 0.3s, color 0.3s;\n          ursor: pointer;\n          border: 1px solid #353535;\n          padding: 0.4em 1.2em;\n          border-radius: 50px;\n          transition: 0.3s ease;\n        }\n        .shiny-button::before {\n          content: \"\";\n          position: absolute;\n          top: -100%;\n          left: -100%;\n          height: 100%;\n          width: 100%;\n          background: linear-gradient(\n            120deg,\n            transparent,\n            rgba(255, 255, 255, 0.7),\n            transparent\n          );\n          transform: skewX(-15deg);\n          transition: opacity 0.3s;\n        }\n        .shiny-button:hover::before {\n          animation: shiny-effect ").concat(speed, "s infinite;\n          opacity: 1;\n        }\n        .shiny-button:hover {\n          background-color: ").concat(backgroundColor, ";\n          color: ").concat(color, ";\n        }\n        @keyframes shiny-effect {\n          0% {\n            left: -100%;\n          }\n          100% {\n            left: 100%;\n          }\n        }\n      ")), /*#__PURE__*/_react["default"].createElement("button", {
    role: "button",
    "aria-label": "button",
    onClick: onClickFun,
    style: _objectSpread({}, edit),
    id: RoseId,
    className: "shiny-button ".concat(RoseName)
  }, children));
}
function WaveText(_ref12) {
  var children = _ref12.children,
    RoseName = _ref12.RoseName,
    RoseId = _ref12.RoseId,
    _ref12$initialWaveTyp = _ref12.initialWaveType,
    initialWaveType = _ref12$initialWaveTyp === void 0 ? "character" : _ref12$initialWaveTyp,
    _ref12$edit = _ref12.edit,
    edit = _ref12$edit === void 0 ? {} : _ref12$edit,
    _ref12$speed = _ref12.speed,
    speed = _ref12$speed === void 0 ? 0.5 : _ref12$speed,
    _ref12$delay = _ref12.delay,
    delay = _ref12$delay === void 0 ? 0.05 : _ref12$delay,
    _ref12$amplitude = _ref12.amplitude,
    amplitude = _ref12$amplitude === void 0 ? 10 : _ref12$amplitude;
  var _useState13 = (0, _react.useState)(initialWaveType),
    _useState14 = _slicedToArray(_useState13, 2),
    waveType = _useState14[0],
    setWaveType = _useState14[1];
  (0, _react.useEffect)(function () {
    var totalAnimationDuration = speed + delay * (children.split("").length || 1);
    var timer = setTimeout(function () {
      setWaveType("word");
    }, totalAnimationDuration * 1000 + 200);
    return function () {
      return clearTimeout(timer);
    };
  }, [speed, delay, children]);
  var splitText = waveType === "word" ? children.split(/(\s+)/) : children.split("");
  var waveText = splitText.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: index,
      className: "WaveTextItem",
      style: {
        "--WaveTextItem-index": index
      }
    }, item === " " ? "\xA0" : item);
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n        .WaveTextItem {\n          display: inline-block;\n          opacity: 0;\n          transform: translateY(".concat(amplitude, "px);\n          animation: waveAnimation ").concat(speed, "s forwards;\n          animation-delay: calc(var(--WaveTextItem-index) * ").concat(delay, "s);\n        }\n        @keyframes waveAnimation {\n          0% {\n            opacity: 0;\n            transform: translateY(").concat(amplitude, "px);\n          }\n          50% {\n            opacity: 1;\n            transform: translateY(-").concat(amplitude, "px);\n          }\n          100% {\n            opacity: 1;\n            transform: translateY(0);\n          }\n        }\n      ")), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({}, edit),
    id: RoseId,
    className: RoseName
  }, waveText));
}
function AnimatedText(_ref13) {
  var children = _ref13.children,
    RoseName = _ref13.RoseName,
    RoseId = _ref13.RoseId,
    _ref13$edit = _ref13.edit,
    edit = _ref13$edit === void 0 ? {} : _ref13$edit,
    _ref13$speed = _ref13.speed,
    speed = _ref13$speed === void 0 ? 0.5 : _ref13$speed,
    _ref13$delay = _ref13.delay,
    delay = _ref13$delay === void 0 ? 0.05 : _ref13$delay,
    _ref13$animationType = _ref13.animationType,
    animationType = _ref13$animationType === void 0 ? "blur" : _ref13$animationType,
    _ref13$initialAnimate = _ref13.initialAnimateTypeStyle,
    initialAnimateTypeStyle = _ref13$initialAnimate === void 0 ? "character" : _ref13$initialAnimate;
  var _useState15 = (0, _react.useState)(initialAnimateTypeStyle),
    _useState16 = _slicedToArray(_useState15, 2),
    animateTypeStyle = _useState16[0],
    setAnimateTypeStyle = _useState16[1];
  (0, _react.useEffect)(function () {
    var totalAnimationDuration = speed + delay * (children.split("").length || 1);
    var timer = setTimeout(function () {
      setAnimateTypeStyle("word");
    }, totalAnimationDuration * 1000 + 600);
    return function () {
      return clearTimeout(timer);
    };
  }, [speed, delay, children]);
  var splitText = animateTypeStyle === "word" ? children.split(/(\s+)/) : children.split("");
  var animatedText = splitText.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: index,
      className: "AnimatedTextItem",
      style: {
        "--AnimatedTextItem-index": index
      }
    }, item === " " ? "\xA0" : item, animateTypeStyle === "word" && item === " " && " ");
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
  }, "\n        .AnimatedTextItem {\n          display: inline-block;\n          ".concat(selectedAnimation, "\n          animation-delay: calc(var(--AnimatedTextItem-index) * ").concat(delay, "s);\n        }\n        @keyframes blurAnimation {\n          to {\n            opacity: 1;\n            transform: translateY(0);\n            filter: blur(0);\n          }\n        }\n        @keyframes fadeInAnimation {\n          to {\n            opacity: 1;\n          }\n        }\n        @keyframes slideInAnimation {\n          to {\n            opacity: 1;\n            transform: translateX(0);\n          }\n        }\n        @keyframes zoomInAnimation {\n          to {\n            opacity: 1;\n            transform: scale(1);\n          }\n        }\n      ")), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({}, edit),
    id: RoseId,
    className: RoseName
  }, animatedText));
}
var RouterContext = /*#__PURE__*/(0, _react.createContext)();
var useRouter = exports.useRouter = function useRouter() {
  return (0, _react.useContext)(RouterContext);
};
var RoseRouter = exports.RoseRouter = function RoseRouter(_ref14) {
  var children = _ref14.children,
    _ref14$customStyles = _ref14.customStyles,
    customStyles = _ref14$customStyles === void 0 ? "" : _ref14$customStyles;
  var _useState17 = (0, _react.useState)(window.location.pathname),
    _useState18 = _slicedToArray(_useState17, 2),
    route = _useState18[0],
    setRoute = _useState18[1];
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
  }, "\n        .route {\n          opacity: 0;\n          transform: translateY(20px);\n          transition: opacity 0.5s ease, transform 0.5s ease;\n        }\n        .route-active {\n          opacity: 1;\n          transform: translateY(0);\n        }\n        ".concat(customStyles, "\n      ")), /*#__PURE__*/_react["default"].createElement(RouterContext.Provider, {
    value: {
      route: route,
      navigate: navigate
    }
  }, children));
};
var Route = exports.Route = function Route(_ref15) {
  var path = _ref15.path,
    element = _ref15.element;
  var _useRouter = useRouter(),
    route = _useRouter.route;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "route ".concat(route === path ? "route-active" : "")
  }, route === path ? element : null);
};
var RoseParent = exports.RoseParent = function RoseParent(_ref16) {
  var children = _ref16.children,
    edit = _ref16.edit,
    RoseID = _ref16.RoseID,
    RoseName = _ref16.RoseName,
    _ref16$display = _ref16.display,
    display = _ref16$display === void 0 ? "flex" : _ref16$display,
    _ref16$flexDirection = _ref16.flexDirection,
    flexDirection = _ref16$flexDirection === void 0 ? "row" : _ref16$flexDirection,
    _ref16$flexDirectionM = _ref16.flexDirectionMobile,
    flexDirectionMobile = _ref16$flexDirectionM === void 0 ? "column" : _ref16$flexDirectionM,
    _ref16$justifyContent = _ref16.justifyContent,
    justifyContent = _ref16$justifyContent === void 0 ? "space-around" : _ref16$justifyContent,
    _ref16$alignItems = _ref16.alignItems,
    alignItems = _ref16$alignItems === void 0 ? "center" : _ref16$alignItems,
    _ref16$alignContent = _ref16.alignContent,
    alignContent = _ref16$alignContent === void 0 ? "center" : _ref16$alignContent,
    _ref16$flexWrap = _ref16.flexWrap,
    flexWrap = _ref16$flexWrap === void 0 ? "wrap" : _ref16$flexWrap,
    _ref16$gap = _ref16.gap,
    gap = _ref16$gap === void 0 ? "1rem" : _ref16$gap,
    _ref16$padding = _ref16.padding,
    padding = _ref16$padding === void 0 ? "1rem" : _ref16$padding,
    _ref16$minHeight = _ref16.minHeight,
    minHeight = _ref16$minHeight === void 0 ? "100vh" : _ref16$minHeight,
    _ref16$width = _ref16.width,
    width = _ref16$width === void 0 ? "100%" : _ref16$width,
    _ref16$flexBasis = _ref16.flexBasis,
    flexBasis = _ref16$flexBasis === void 0 ? "auto" : _ref16$flexBasis,
    _ref16$flexGrow = _ref16.flexGrow,
    flexGrow = _ref16$flexGrow === void 0 ? "1" : _ref16$flexGrow,
    _ref16$flexShrink = _ref16.flexShrink,
    flexShrink = _ref16$flexShrink === void 0 ? "1" : _ref16$flexShrink,
    _ref16$gridTemplateCo = _ref16.gridTemplateColumns,
    gridTemplateColumns = _ref16$gridTemplateCo === void 0 ? "" : _ref16$gridTemplateCo,
    _ref16$gridTemplateRo = _ref16.gridTemplateRows,
    gridTemplateRows = _ref16$gridTemplateRo === void 0 ? "" : _ref16$gridTemplateRo,
    _ref16$gridColumnGap = _ref16.gridColumnGap,
    gridColumnGap = _ref16$gridColumnGap === void 0 ? "" : _ref16$gridColumnGap,
    _ref16$gridRowGap = _ref16.gridRowGap,
    gridRowGap = _ref16$gridRowGap === void 0 ? "" : _ref16$gridRowGap,
    _ref16$placeItems = _ref16.placeItems,
    placeItems = _ref16$placeItems === void 0 ? "center" : _ref16$placeItems,
    _ref16$alignContentGr = _ref16.alignContentGrid,
    alignContentGrid = _ref16$alignContentGr === void 0 ? "" : _ref16$alignContentGr,
    _ref16$justifyItems = _ref16.justifyItems,
    justifyItems = _ref16$justifyItems === void 0 ? "" : _ref16$justifyItems,
    _ref16$gridAutoFlow = _ref16.gridAutoFlow,
    gridAutoFlow = _ref16$gridAutoFlow === void 0 ? "" : _ref16$gridAutoFlow,
    _ref16$gridAutoColumn = _ref16.gridAutoColumns,
    gridAutoColumns = _ref16$gridAutoColumn === void 0 ? "" : _ref16$gridAutoColumn,
    _ref16$gridAutoRows = _ref16.gridAutoRows,
    gridAutoRows = _ref16$gridAutoRows === void 0 ? "" : _ref16$gridAutoRows,
    _ref16$gridTemplateAr = _ref16.gridTemplateAreas,
    gridTemplateAreas = _ref16$gridTemplateAr === void 0 ? "" : _ref16$gridTemplateAr,
    _ref16$alignSelf = _ref16.alignSelf,
    alignSelf = _ref16$alignSelf === void 0 ? "" : _ref16$alignSelf,
    _ref16$justifySelf = _ref16.justifySelf,
    justifySelf = _ref16$justifySelf === void 0 ? "" : _ref16$justifySelf,
    _ref16$gridArea = _ref16.gridArea,
    gridArea = _ref16$gridArea === void 0 ? "" : _ref16$gridArea;
  var isGrid = display === "grid";
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n        .rose-parent {\n          display: ".concat(display, ";\n          ").concat(isGrid ? "\n                        grid-template-columns: ".concat(gridTemplateColumns, ";\n                        grid-template-rows: ").concat(gridTemplateRows, ";\n                        grid-column-gap: ").concat(gridColumnGap, ";\n                        grid-row-gap: ").concat(gridRowGap, ";\n                        place-items: ").concat(placeItems, ";\n                        align-content: ").concat(alignContentGrid, ";\n                        justify-items: ").concat(justifyItems, ";\n                        grid-auto-flow: ").concat(gridAutoFlow, ";\n                        grid-auto-columns: ").concat(gridAutoColumns, ";\n                        grid-auto-rows: ").concat(gridAutoRows, ";\n                        grid-template-areas: ").concat(gridTemplateAreas, ";\n                    ") : "\n                        flex-direction: ".concat(flexDirection, ";\n                        justify-content: ").concat(justifyContent, ";\n                        align-items: ").concat(alignItems, ";\n                        align-content: ").concat(alignContent, ";\n                        flex-wrap: ").concat(flexWrap, ";\n                        gap: ").concat(gap, ";\n                    "), "\n          padding: ").concat(padding, ";\n          box-sizing: border-box;\n          width: ").concat(width, ";\n          min-height: ").concat(minHeight, ";\n        }\n        .rose-parent > * {\n          flex-basis: ").concat(flexBasis, ";\n          flex-grow: ").concat(flexGrow, ";\n          flex-shrink: ").concat(flexShrink, ";\n          align-self: ").concat(alignSelf, ";\n          justify-self: ").concat(justifySelf, ";\n          grid-area: ").concat(gridArea, ";\n        }\n        @media (min-width: 768px) {\n          .rose-parent {\n            flex-direction: row;\n            justify-content: space-between;\n          }\n        }\n        @media (max-width: 767px) {\n          .rose-parent {\n            flex-direction: ").concat(flexDirectionMobile, ";\n            align-items: center;\n          }\n        }\n      ")), /*#__PURE__*/_react["default"].createElement("div", {
    id: RoseID,
    className: "rose-parent ".concat(RoseName),
    style: edit
  }, children));
};
var Table = exports.Table = function Table(_ref17) {
  var data = _ref17.data,
    columns = _ref17.columns,
    edit = _ref17.edit,
    RoseID = _ref17.RoseID,
    RoseName = _ref17.RoseName;
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
function Notification(_ref18) {
  var children = _ref18.children,
    _ref18$edit = _ref18.edit,
    edit = _ref18$edit === void 0 ? {} : _ref18$edit,
    RoseID = _ref18.RoseID,
    _ref18$icon = _ref18.icon,
    icon = _ref18$icon === void 0 ? /*#__PURE__*/_react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      strokeWidth: 0,
      fill: "currentColor",
      stroke: "currentColor",
      className: "icon"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
    })) : _ref18$icon,
    _ref18$RoseName = _ref18.RoseName,
    RoseName = _ref18$RoseName === void 0 ? "card" : _ref18$RoseName,
    _ref18$Message = _ref18.Message,
    Message = _ref18$Message === void 0 ? "Hello LaRose Devs" : _ref18$Message,
    _ref18$MessageColor = _ref18.MessageColor,
    MessageColor = _ref18$MessageColor === void 0 ? "white" : _ref18$MessageColor,
    _ref18$DesMessage = _ref18.DesMessage,
    DesMessage = _ref18$DesMessage === void 0 ? "success" : _ref18$DesMessage,
    _ref18$DesMessageColo = _ref18.DesMessageColor,
    DesMessageColor = _ref18$DesMessageColo === void 0 ? "white" : _ref18$DesMessageColo,
    _ref18$editCrossIconH = _ref18.editCrossIconHeight,
    editCrossIconHeight = _ref18$editCrossIconH === void 0 ? 1.5 : _ref18$editCrossIconH,
    _ref18$editCrossIconW = _ref18.editCrossIconWidth,
    editCrossIconWidth = _ref18$editCrossIconW === void 0 ? 1.5 : _ref18$editCrossIconW,
    _ref18$iconDisplay = _ref18.iconDisplay,
    iconDisplay = _ref18$iconDisplay === void 0 ? "block" : _ref18$iconDisplay,
    _ref18$CrossIconColor = _ref18.CrossIconColor,
    CrossIconColor = _ref18$CrossIconColor === void 0 ? "black" : _ref18$CrossIconColor,
    _ref18$delay = _ref18.delay,
    delay = _ref18$delay === void 0 ? 5000 : _ref18$delay;
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    valueState = _useState20[0],
    setValueState = _useState20[1];
  var removeNote = function removeNote() {
    setValueState(true);
  };
  (0, _react.useEffect)(function () {
    if (delay !== Infinity) {
      var timer = setTimeout(function () {
        setValueState(true);
      }, delay);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [delay]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n        .".concat(RoseName, " {\n          width: 20.625rem;\n          height: 5rem;\n          border-radius: 0.5rem;\n          box-sizing: border-box;\n          padding: 0.625rem 0.9375rem;\n          background-color: #ffffff;\n          box-shadow: rgba(149, 157, 165, 0.2) 0 0.5rem 1.5rem;\n          position: relative;\n          overflow: hidden;\n          display: flex;\n          align-items: center;\n          justify-content: space-around;\n          gap: 0.9375rem;\n        }\n        .wave {\n          position: absolute;\n          transform: rotate(90deg);\n          left: -1.9375rem;\n          top: 2rem;\n          width: 5rem;\n          fill: #04e4003a;\n        }\n        .icon-container {\n          width: 2.1875rem;\n          height: 2.1875rem;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          background-color: #04e40048;\n          border-radius: 50%;\n          margin-left: 0.5rem;\n          display: ").concat(iconDisplay, ";\n        }\n        .icon {\n          width: 1.0625rem;\n          height: 1.0625rem;\n          color: #269b24;\n        }\n        .message-text-container {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: flex-start;\n          flex-grow: 1;\n        }\n        .message-text,\n        .sub-text {\n          margin: 0;\n          cursor: default;\n        }\n        .message-text {\n          color: ").concat(MessageColor, ";\n          font-size: 1.0625rem;\n          font-weight: 700;\n        }\n        .sub-text {\n          font-size: 0.875rem;\n          color: ").concat(DesMessageColor, ";\n        }\n        .cross-icon {\n          width: ").concat(editCrossIconHeight, "rem;\n          height: ").concat(editCrossIconWidth, "rem;\n          color: ").concat(CrossIconColor, ";\n          cursor: pointer;\n        }\n      ")), /*#__PURE__*/_react["default"].createElement("div", {
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
function Spring(_ref19) {
  var _ref19$rotate = _ref19.rotate,
    rotate = _ref19$rotate === void 0 ? 360 : _ref19$rotate,
    _ref19$scale = _ref19.scale,
    scale = _ref19$scale === void 0 ? 1 : _ref19$scale,
    _ref19$speed = _ref19.speed,
    speed = _ref19$speed === void 0 ? 0.8 : _ref19$speed,
    _ref19$x = _ref19.x,
    x = _ref19$x === void 0 ? "0" : _ref19$x,
    _ref19$y = _ref19.y,
    y = _ref19$y === void 0 ? "0" : _ref19$y,
    _ref19$z = _ref19.z,
    z = _ref19$z === void 0 ? "0" : _ref19$z,
    children = _ref19.children,
    RoseID = _ref19.RoseID,
    edit = _ref19.edit,
    _ref19$drag = _ref19.drag,
    drag = _ref19$drag === void 0 ? false : _ref19$drag;
  var elementRef = (0, _react.useRef)(null);
  var _useState21 = (0, _react.useState)({
      x: 0,
      y: 0
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    position = _useState22[0],
    setPosition = _useState22[1];
  var _useState23 = (0, _react.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    isDragging = _useState24[0],
    setIsDragging = _useState24[1];
  var _useState25 = (0, _react.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    isDragged = _useState26[0],
    setIsDragged = _useState26[1];
  var _useState27 = (0, _react.useState)({
      x: 0,
      y: 0
    }),
    _useState28 = _slicedToArray(_useState27, 2),
    startOffset = _useState28[0],
    setStartOffset = _useState28[1];
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
  }, "\n        .RotatingSpringComponentStyle {\n          min-height: 7rem;\n          width: 7rem;\n          background: #ffffff;\n          border-radius: 26px;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          animation: LaRoseRotatingAnimated ".concat(speed, "s ease-in-out forwards;\n          transform: rotate(0deg) scale(0);\n          opacity: 0;\n          overflow: hidden;\n          translate: ").concat(x, " ").concat(y, " ").concat(z, ";\n          position: relative; /* Default position */\n          cursor: ").concat(drag ? "grab" : "default", ";\n        }\n        .RotatingSpringComponentStyle:active {\n          cursor: ").concat(drag ? "grabbing" : "default", ";\n        }\n        @keyframes LaRoseRotatingAnimated {\n          to {\n            translate: ").concat(x, " ").concat(y, " ").concat(z, ";\n            transform: rotate(").concat(rotate, "deg) scale(").concat(scale, ");\n            opacity: 1;\n          }\n        }\n      ")), /*#__PURE__*/_react["default"].createElement("div", {
    ref: elementRef,
    style: _objectSpread(_objectSpread({}, edit), {}, {
      left: isDragged ? "".concat(position.x, "px") : "auto",
      top: isDragged ? "".concat(position.y, "px") : "auto",
      position: isDragged ? "absolute" : "relative"
    }),
    className: "RotatingSpringComponentStyle",
    id: RoseID,
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp
  }, children));
}
function RandomAnimate(_ref20) {
  var children = _ref20.children,
    RoseID = _ref20.RoseID,
    _ref20$RoseName = _ref20.RoseName,
    RoseName = _ref20$RoseName === void 0 ? "random-animate" : _ref20$RoseName,
    _ref20$edit = _ref20.edit,
    edit = _ref20$edit === void 0 ? {
      backgroundColor: "#EEE",
      height: "12rem",
      width: "12rem",
      borderRadius: "20px",
      padding: "1rem"
    } : _ref20$edit,
    AnimatedType = _ref20.AnimatedType;
  var _useState29 = (0, _react.useState)(""),
    _useState30 = _slicedToArray(_useState29, 2),
    animationClass = _useState30[0],
    setAnimationClass = _useState30[1];
  (0, _react.useEffect)(function () {
    var animations = ["fadeIn", "slideInLeft", "zoomIn", "rotateIn", "bounceIn", "flipInX", "flipInY", "lightSpeedIn", "rollIn", "jackInTheBox"];
    if (AnimatedType) {
      setAnimationClass(AnimatedType);
    } else {
      var randomAnimation = animations[Math.floor(Math.random() * animations.length)];
      setAnimationClass(randomAnimation);
    }
  }, [AnimatedType]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n        .random-animate {\n          display: inline-block;\n        }\n        /* Add your keyframe animations here */\n        /* Fade In Animation */\n        @keyframes fadeIn {\n          from {\n            opacity: 0;\n          }\n          to {\n            opacity: 1;\n          }\n        }\n        .fadeIn {\n          animation: fadeIn 1s ease-in-out;\n        }\n        /* Slide In Left Animation */\n        @keyframes slideInLeft {\n          from {\n            transform: translateX(-100%);\n            opacity: 0;\n          }\n          to {\n            transform: translateX(0);\n            opacity: 1;\n          }\n        }\n        .slideInLeft {\n          animation: slideInLeft 1s ease-in-out;\n        }\n        /* Zoom In Animation */\n        @keyframes zoomIn {\n          from {\n            transform: scale(0.5);\n            opacity: 0;\n          }\n          to {\n            transform: scale(1);\n            opacity: 1;\n          }\n        }\n        .zoomIn {\n          animation: zoomIn 1s ease-in-out;\n        }\n        /* Rotate In Animation */\n        @keyframes rotateIn {\n          from {\n            transform: rotate(-200deg);\n            opacity: 0;\n          }\n          to {\n            transform: rotate(0);\n            opacity: 1;\n          }\n        }\n        .rotateIn {\n          animation: rotateIn 1s ease-in-out;\n        }\n        /* Bounce In Animation */\n        @keyframes bounceIn {\n          0%,\n          20%,\n          40%,\n          60%,\n          80%,\n          100% {\n            transform: translateY(0);\n          }\n          50% {\n            transform: translateY(-20px);\n          }\n        }\n        .bounceIn {\n          animation: bounceIn 1s ease-in-out;\n        }\n        /* Flip In X Animation */\n        @keyframes flipInX {\n          from {\n            transform: perspective(400px) rotateX(90deg);\n            opacity: 0;\n          }\n          to {\n            transform: perspective(400px) rotateX(0deg);\n            opacity: 1;\n          }\n        }\n        .flipInX {\n          animation: flipInX 1s ease-in-out;\n        }\n        /* Flip In Y Animation */\n        @keyframes flipInY {\n          from {\n            transform: perspective(400px) rotateY(90deg);\n            opacity: 0;\n          }\n          to {\n            transform: perspective(400px) rotateY(0deg);\n            opacity: 1;\n          }\n        }\n        .flipInY {\n          animation: flipInY 1s ease-in-out;\n        }\n        /* Light Speed In Animation */\n        @keyframes lightSpeedIn {\n          from {\n            transform: translateX(100%) skewX(-30deg);\n            opacity: 0;\n          }\n          to {\n            transform: translateX(0) skewX(0deg);\n            opacity: 1;\n          }\n        }\n        .lightSpeedIn {\n          animation: lightSpeedIn 1s ease-out;\n        }\n        /* Roll In Animation */\n        @keyframes rollIn {\n          from {\n            transform: translateX(-100%) rotate(-120deg);\n            opacity: 0;\n          }\n          to {\n            transform: translateX(0) rotate(0deg);\n            opacity: 1;\n          }\n        }\n        .rollIn {\n          animation: rollIn 1s ease-in-out;\n        }\n        /* Jack In The Box Animation */\n        @keyframes jackInTheBox {\n          from {\n            opacity: 0;\n            transform: scale(0.1) rotate(30deg);\n          }\n          50% {\n            transform: rotate(-10deg);\n          }\n          70% {\n            transform: rotate(3deg);\n          }\n          to {\n            opacity: 1;\n            transform: scale(1);\n          }\n        }\n        .jackInTheBox {\n          animation: jackInTheBox 1s ease-in-out;\n        }\n      "), /*#__PURE__*/_react["default"].createElement("div", {
    id: RoseID,
    style: edit,
    className: "".concat(RoseName, " ").concat(animationClass)
  }, children));
}
function SideText(_ref21) {
  var children = _ref21.children,
    RoseID = _ref21.RoseID,
    _ref21$RoseName = _ref21.RoseName,
    RoseName = _ref21$RoseName === void 0 ? "side-textAnimatedLarose" : _ref21$RoseName,
    _ref21$edit = _ref21.edit,
    edit = _ref21$edit === void 0 ? {} : _ref21$edit,
    _ref21$direction = _ref21.direction,
    direction = _ref21$direction === void 0 ? "left" : _ref21$direction;
  var animationDirection = direction === "right" ? "sideTextRight" : "sideTextLeft";
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n        .side-text {\n          display: inline-block;\n        }\n        /* SideTextLeft Animation */\n        @keyframes sideTextLeft {\n          from {\n            transform: translateX(-100%);\n            opacity: 0;\n          }\n          to {\n            transform: translateX(0);\n            opacity: 1;\n          }\n        }\n        /* SideTextRight Animation */\n        @keyframes sideTextRight {\n          from {\n            transform: translateX(100%);\n            opacity: 0;\n          }\n          to {\n            transform: translateX(0);\n            opacity: 1;\n          }\n        }\n        .sideTextLeft {\n          animation: sideTextLeft 1s ease-in-out;\n        }\n        .sideTextRight {\n          animation: sideTextRight 1s ease-in-out;\n        }\n      "), /*#__PURE__*/_react["default"].createElement("div", {
    id: RoseID,
    style: edit,
    className: "".concat(RoseName, " ").concat(animationDirection)
  }, children));
}
function useClipboard() {
  var _useState31 = (0, _react.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    copied = _useState32[0],
    setCopied = _useState32[1];
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
  var _useState33 = (0, _react.useState)(function () {
      try {
        var item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.error(error);
        return initialValue;
      }
    }),
    _useState34 = _slicedToArray(_useState33, 2),
    storedValue = _useState34[0],
    setStoredValue = _useState34[1];
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
  var _useState35 = (0, _react.useState)(navigator.onLine),
    _useState36 = _slicedToArray(_useState35, 2),
    isOnline = _useState36[0],
    setIsOnline = _useState36[1];
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
  var _useState37 = (0, _react.useState)(getRandomValue()),
    _useState38 = _slicedToArray(_useState37, 2),
    RandValue = _useState38[0],
    setRandValue = _useState38[1];
  var refreshRandValue = function refreshRandValue() {
    setRandValue(getRandomValue());
  };
  return [RandValue, refreshRandValue];
}
function SeeMore(_ref22) {
  var _children$props;
  var children = _ref22.children,
    _ref22$maxCharacters = _ref22.maxCharacters,
    maxCharacters = _ref22$maxCharacters === void 0 ? 100 : _ref22$maxCharacters,
    _ref22$maxElements = _ref22.maxElements,
    maxElements = _ref22$maxElements === void 0 ? 3 : _ref22$maxElements,
    edit = _ref22.edit,
    RoseName = _ref22.RoseName,
    RoseId = _ref22.RoseId,
    _ref22$editButton = _ref22.editButton,
    editButton = _ref22$editButton === void 0 ? {} : _ref22$editButton;
  var _useState39 = (0, _react.useState)(false),
    _useState40 = _slicedToArray(_useState39, 2),
    isExpanded = _useState40[0],
    setIsExpanded = _useState40[1];
  var textRef = (0, _react.useRef)(null);
  var text = typeof children === "string" ? children : children === null || children === void 0 || (_children$props = children.props) === null || _children$props === void 0 ? void 0 : _children$props.children;
  var toggleExpand = function toggleExpand() {
    return setIsExpanded(!isExpanded);
  };
  var childrenArray = _react["default"].Children.toArray(children);
  var truncatedText = text;
  if (text && text.length > maxCharacters && !isExpanded) {
    truncatedText = text.slice(0, maxCharacters) + "...";
  }
  var visibleChildren = isExpanded ? childrenArray : childrenArray.slice(0, maxElements);
  var hasMoreContent = (text === null || text === void 0 ? void 0 : text.length) > maxCharacters || childrenArray.length > maxElements;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({}, edit), {}, {
      overflow: "hidden",
      transition: "height 0.5s ease"
    }),
    className: RoseName,
    id: RoseId
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: textRef,
    className: "content"
  }, typeof children === "string" ? truncatedText : visibleChildren), hasMoreContent && /*#__PURE__*/_react["default"].createElement("button", {
    role: "button",
    "aria-label": "button",
    style: _objectSpread({
      background: "none",
      border: "none",
      fontWeight: "bold",
      color: "blue"
    }, editButton),
    onClick: toggleExpand
  }, isExpanded ? "Show Less" : "Show More"));
}
function SideBox(_ref23) {
  var children = _ref23.children,
    _ref23$direction = _ref23.direction,
    direction = _ref23$direction === void 0 ? "left" : _ref23$direction,
    _ref23$edit = _ref23.edit,
    edit = _ref23$edit === void 0 ? {} : _ref23$edit,
    RoseID = _ref23.RoseID,
    RoseName = _ref23.RoseName;
  var _useState41 = (0, _react.useState)(false),
    _useState42 = _slicedToArray(_useState41, 2),
    isVisible = _useState42[0],
    setIsVisible = _useState42[1];
  var boxRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var handleScroll = function handleScroll() {
      if (boxRef.current) {
        var boxRect = boxRef.current.getBoundingClientRect();
        var viewportHeight = window.innerHeight;
        if (boxRect.top <= viewportHeight && boxRect.bottom >= 0 && boxRect.left <= window.innerWidth && boxRect.right >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n        .sideboxComponent {\n          transition: transform 0.5s ease, opacity 0.5s ease;\n          opacity: 0;\n          z-index: 1000;\n          position: fixed;\n        }\n        .sideboxComponent.visible {\n          opacity: 1;\n        }\n        .sideboxComponent.left {\n          left: 0;\n          top: 50%;\n          transform: translateX(-100%) translateY(-50%);\n        }\n        .sideboxComponent.right {\n          right: 0;\n          top: 50%;\n          transform: translateX(100%) translateY(-50%);\n        }\n        .sideboxComponent.top {\n          top: 0;\n          left: 50%;\n          transform: translateX(-50%) translateY(-100%);\n        }\n        .sideboxComponent.bottom {\n          bottom: 0;\n          left: 50%;\n          transform: translateX(-50%) translateY(100%);\n        }\n        .sideboxComponent.left.visible {\n          transform: translateX(0) translateY(-50%);\n        }\n        .sideboxComponent.right.visible {\n          transform: translateX(0) translateY(-50%);\n        }\n        .sideboxComponent.top.visible {\n          transform: translateX(-50%) translateY(0);\n        }\n        .sideboxComponent.bottom.visible {\n          transform: translateX(-50%) translateY(0);\n        }\n      "), /*#__PURE__*/_react["default"].createElement("div", {
    ref: boxRef,
    style: edit,
    id: RoseID,
    className: "sideboxComponent ".concat(direction, " ").concat(isVisible ? "visible" : "")
  }, RoseName && /*#__PURE__*/_react["default"].createElement("h2", null, RoseName), children));
}
var useBatteryStatus = exports.useBatteryStatus = function useBatteryStatus() {
  var _useState43 = (0, _react.useState)({
      level: null,
      charging: null
    }),
    _useState44 = _slicedToArray(_useState43, 2),
    batteryInfo = _useState44[0],
    setBatteryInfo = _useState44[1];
  (0, _react.useEffect)(function () {
    if ("getBattery" in navigator) {
      navigator.getBattery().then(function (battery) {
        setBatteryInfo({
          level: battery.level,
          charging: battery.charging
        });
        var updateBatteryInfo = function updateBatteryInfo() {
          setBatteryInfo({
            level: battery.level,
            charging: battery.charging
          });
        };
        battery.addEventListener("levelchange", updateBatteryInfo);
        battery.addEventListener("chargingchange", updateBatteryInfo);
        return function () {
          battery.removeEventListener("levelchange", updateBatteryInfo);
          battery.removeEventListener("chargingchange", updateBatteryInfo);
        };
      });
    } else {
      console.log("Battery Status API is not supported in this browser.");
    }
  }, []);
  return batteryInfo;
};
function usePreferredLanguage() {
  var _useState45 = (0, _react.useState)("en"),
    _useState46 = _slicedToArray(_useState45, 2),
    preferredLanguage = _useState46[0],
    setPreferredLanguage = _useState46[1];
  (0, _react.useEffect)(function () {
    var language = navigator.language || navigator.userLanguage;
    setPreferredLanguage(language);
  }, []);
  return preferredLanguage;
}
function useColorScheme() {
  var _useState47 = (0, _react.useState)("light"),
    _useState48 = _slicedToArray(_useState47, 2),
    colorScheme = _useState48[0],
    setColorScheme = _useState48[1];
  (0, _react.useEffect)(function () {
    var matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    var handleChange = function handleChange(e) {
      setColorScheme(e.matches ? "dark" : "light");
    };
    handleChange(matchMedia);
    matchMedia.addEventListener("change", handleChange);
    return function () {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, []);
  return colorScheme;
}
function useHardwareConcurrency() {
  var _useState49 = (0, _react.useState)(1),
    _useState50 = _slicedToArray(_useState49, 2),
    coreCount = _useState50[0],
    setCoreCount = _useState50[1];
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
      return "Africa";
    } else if (latitude >= 10 && latitude <= 82 && longitude >= 25 && longitude <= 180) {
      return "Asia";
    } else if (latitude >= 10 && latitude <= 83 && longitude >= -168 && longitude <= -52) {
      return "North America";
    } else if (latitude >= -56 && latitude <= 13 && longitude >= -93 && longitude <= -32) {
      return "South America";
    } else if (latitude >= -48 && latitude <= -12 && longitude >= 110 && longitude <= 180) {
      return "Australia";
    } else if (latitude >= 35 && latitude <= 72 && longitude >= -25 && longitude <= 45) {
      return "Europe";
    } else if (latitude >= -90 && latitude <= -60) {
      return "Antarctica";
    }
  }
  return "Unknown";
};
var useContinentContent = exports.useContinentContent = function useContinentContent() {
  var _useState51 = (0, _react.useState)(null),
    _useState52 = _slicedToArray(_useState51, 2),
    continent = _useState52[0],
    setContinent = _useState52[1];
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
        setContinent("Unknown");
      });
    } else {
      setContinent("Unknown");
    }
  }, []);
  return {
    continent: continent
  };
};
var useUserCountry = exports.useUserCountry = function useUserCountry() {
  var _useState53 = (0, _react.useState)(null),
    _useState54 = _slicedToArray(_useState53, 2),
    country = _useState54[0],
    setCountry = _useState54[1];
  var _useState55 = (0, _react.useState)(true),
    _useState56 = _slicedToArray(_useState55, 2),
    loading = _useState56[0],
    setLoading = _useState56[1];
  var _useState57 = (0, _react.useState)(null),
    _useState58 = _slicedToArray(_useState57, 2),
    error = _useState58[0],
    setError = _useState58[1];
  (0, _react.useEffect)(function () {
    var fetchCountry = /*#__PURE__*/function () {
      var _ref24 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("https://ipapi.co/json/");
            case 3:
              response = _context.sent;
              if (response.ok) {
                _context.next = 6;
                break;
              }
              throw new Error("Failed to fetch country data");
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
              setError("Could not determine your country.");
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
        return _ref24.apply(this, arguments);
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
  var _useState59 = (0, _react.useState)(null),
    _useState60 = _slicedToArray(_useState59, 2),
    photo = _useState60[0],
    setPhoto = _useState60[1];
  var _useState61 = (0, _react.useState)(null),
    _useState62 = _slicedToArray(_useState61, 2),
    cameraError = _useState62[0],
    setCameraError = _useState62[1];
  var videoRef = (0, _react.useRef)(null);
  var canvasRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var startCamera = /*#__PURE__*/function () {
      var _ref25 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
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
                videoRef.current.onloadedmetadata = function () {
                  videoRef.current.play()["catch"](function (err) {
                    console.error("Error playing video:", err);
                  });
                };
              }
              _context2.next = 11;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.error("Error accessing the camera: ", _context2.t0);
              setCameraError("Unable to access the camera. Please check your device settings.");
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 7]]);
      }));
      return function startCamera() {
        return _ref25.apply(this, arguments);
      };
    }();
    startCamera();
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
  var takePhoto = function takePhoto() {
    var canvas = canvasRef.current;
    var video = videoRef.current;
    if (canvas && video) {
      var context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      setPhoto(canvas.toDataURL("image/png"));
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
  var _useState63 = (0, _react.useState)([]),
    _useState64 = _slicedToArray(_useState63, 2),
    contacts = _useState64[0],
    setContacts = _useState64[1];
  var _useState65 = (0, _react.useState)(null),
    _useState66 = _slicedToArray(_useState65, 2),
    error = _useState66[0],
    setError = _useState66[1];
  var _useState67 = (0, _react.useState)(false),
    _useState68 = _slicedToArray(_useState67, 2),
    isFetching = _useState68[0],
    setIsFetching = _useState68[1];
  var getContacts = /*#__PURE__*/function () {
    var _ref26 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var props, opts, contactList;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            if ("contacts" in navigator && "ContactsManager" in window) {
              _context3.next = 3;
              break;
            }
            throw new Error("Contacts API not supported on this device.");
          case 3:
            props = ["name", "email", "tel"];
            opts = {
              multiple: true
            };
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
      return _ref26.apply(this, arguments);
    };
  }();
  return {
    contacts: contacts,
    error: error,
    isFetching: isFetching,
    getContacts: getContacts
  };
};
var SmoothParent = exports.SmoothParent = function SmoothParent(_ref27) {
  var children = _ref27.children;
  var parentRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var _parentRef$current;
    var childElements = (_parentRef$current = parentRef.current) === null || _parentRef$current === void 0 ? void 0 : _parentRef$current.children;
    if (childElements) {
      Array.from(childElements).forEach(function (child, index) {
        child.style.opacity = 0;
        child.style.transform = "translateY(20px)";
        child.style.transition = "opacity 0.5s ease ".concat(index * 0.2, "s, transform 0.5s ease ").concat(index * 0.2, "s");
        setTimeout(function () {
          child.style.opacity = 1;
          child.style.transform = "translateY(0)";
        }, 50);
      });
    }
  }, [children]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n        .smooth-parent {\n          display: flex;\n          flex-direction: column;\n          gap: 20px; /* space between child elements */\n        }\n        .smooth-parent > * {\n          opacity: 0;\n          transform: translateY(20px);\n          transition: opacity 0.5s ease, transform 0.5s ease;\n        }\n      "), /*#__PURE__*/_react["default"].createElement("div", {
    className: "smooth-parent",
    ref: parentRef
  }, children));
};
var SnakeMouse = exports.SnakeMouse = function SnakeMouse(_ref28) {
  var _ref28$color = _ref28.color,
    color = _ref28$color === void 0 ? "rgba(0, 150, 255, 0.8)" : _ref28$color,
    _ref28$display = _ref28.display,
    display = _ref28$display === void 0 ? "block" : _ref28$display;
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
    _draw();
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
var ViewportContainer = exports.ViewportContainer = function ViewportContainer(_ref29) {
  var children = _ref29.children,
    _ref29$threshold = _ref29.threshold,
    threshold = _ref29$threshold === void 0 ? 0.1 : _ref29$threshold,
    _ref29$rootMargin = _ref29.rootMargin,
    rootMargin = _ref29$rootMargin === void 0 ? "0px" : _ref29$rootMargin,
    _ref29$lazyLoad = _ref29.lazyLoad,
    lazyLoad = _ref29$lazyLoad === void 0 ? false : _ref29$lazyLoad;
  var containerRef = (0, _react.useRef)(null);
  var _useState69 = (0, _react.useState)(!lazyLoad),
    _useState70 = _slicedToArray(_useState69, 2),
    isLoaded = _useState70[0],
    setIsLoaded = _useState70[1];
  (0, _react.useEffect)(function () {
    if (!lazyLoad) return;
    var observer = new IntersectionObserver(function (_ref30) {
      var _ref31 = _slicedToArray(_ref30, 1),
        entry = _ref31[0];
      if (entry.isIntersecting) {
        setIsLoaded(true);
        observer.disconnect();
      }
    }, {
      threshold: threshold,
      rootMargin: rootMargin
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return function () {
      if (observer && containerRef.current) {
        observer.disconnect();
      }
    };
  }, [threshold, rootMargin, lazyLoad]);
  if (!isLoaded) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: containerRef
  }, children);
};
var useViewportVisibility = exports.useViewportVisibility = function useViewportVisibility() {
  var loadContentOnView = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var _useState71 = (0, _react.useState)(false),
    _useState72 = _slicedToArray(_useState71, 2),
    isVisible = _useState72[0],
    setIsVisible = _useState72[1];
  var ref = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var handleScroll = function handleScroll() {
      if (ref.current) {
        var rect = ref.current.getBoundingClientRect();
        var isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInViewport);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [ref.current]);
  return {
    ref: ref,
    isVisible: isVisible,
    loadContentOnView: loadContentOnView
  };
};
function TestManegar(_ref32) {
  var children = _ref32.children;
  var _useState73 = (0, _react.useState)(null),
    _useState74 = _slicedToArray(_useState73, 2),
    renderTime = _useState74[0],
    setRenderTime = _useState74[1];
  (0, _react.useEffect)(function () {
    var startTime = performance.now();
    requestAnimationFrame(function () {
      var endTime = performance.now();
      setRenderTime(endTime - startTime);
    });
  }, [children]);
  return /*#__PURE__*/_react["default"].createElement("div", null, children, renderTime !== null && /*#__PURE__*/_react["default"].createElement("p", null, "Render time: ", renderTime.toFixed(2), " ms"));
}
var useRenderTime = exports.useRenderTime = function useRenderTime() {
  var _useState75 = (0, _react.useState)(null),
    _useState76 = _slicedToArray(_useState75, 2),
    renderTime = _useState76[0],
    setRenderTime = _useState76[1];
  (0, _react.useEffect)(function () {
    var startTime = performance.now();
    requestAnimationFrame(function () {
      var endTime = performance.now();
      setRenderTime(endTime - startTime);
    });
  }, []);
  return renderTime;
};
var RootRemover = exports.RootRemover = function RootRemover() {
  (0, _react.useEffect)(function () {
    var rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.remove();
      console.log("Root element removed");
    } else {
      console.log("Root element not found");
    }
  }, []);
  return null;
};
var BlockUser = exports.BlockUser = function BlockUser(_ref33) {
  var blockUser = _ref33.blockUser,
    _ref33$edit = _ref33.edit,
    edit = _ref33$edit === void 0 ? {} : _ref33$edit,
    RoseId = _ref33.RoseId;
  var _useState77 = (0, _react.useState)(null),
    _useState78 = _slicedToArray(_useState77, 2),
    ip = _useState78[0],
    setIp = _useState78[1];
  var _useState79 = (0, _react.useState)(false),
    _useState80 = _slicedToArray(_useState79, 2),
    isBlocked = _useState80[0],
    setIsBlocked = _useState80[1];
  var fetchUserIP = /*#__PURE__*/function () {
    var _ref34 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return fetch("https://api.ipify.org?format=json");
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
            console.error("Error fetching IP:", _context4.t0);
          case 13:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 10]]);
    }));
    return function fetchUserIP() {
      return _ref34.apply(this, arguments);
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
      /*#__PURE__*/_react["default"].createElement(RootRemover, null);
    }
  }, [blockUser, ip]);
  if (isBlocked) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
      jsx: true
    }, "\n          .userBlockComponentActionEvent {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            position: absolute;\n            user-select: none;\n            z-index: 9999999;\n            height: 100%;\n            font-weight: bold;\n            font-weight: 4rem;\n            background: black;\n            width: 100%;\n            color: red;\n            overflow: hidden;\n          }\n          .userBlockComponentActionEventChildrenDiv {\n            color: white;\n            background: red;\n            height: 4rem;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            width: 40rem;\n            border-radius: 10px;\n          }\n        "), /*#__PURE__*/_react["default"].createElement("div", {
      className: "userBlockComponentActionEvent"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      id: RoseId,
      style: edit,
      className: "userBlockComponentActionEventChildrenDiv"
    }, "Access Denied: You Are Blocked")));
  }
};
var Image = exports.Image = function Image(_ref35) {
  var src = _ref35.src,
    _ref35$alt = _ref35.alt,
    alt = _ref35$alt === void 0 ? "Image Tag" : _ref35$alt,
    _ref35$quality = _ref35.quality,
    quality = _ref35$quality === void 0 ? 0.7 : _ref35$quality,
    _ref35$imageSize = _ref35.imageSize,
    imageSize = _ref35$imageSize === void 0 ? false : _ref35$imageSize,
    requireSrc = _ref35.requireSrc,
    _ref35$height = _ref35.height,
    height = _ref35$height === void 0 ? 30 : _ref35$height,
    _ref35$width = _ref35.width,
    width = _ref35$width === void 0 ? 30 : _ref35$width,
    _ref35$edit = _ref35.edit,
    edit = _ref35$edit === void 0 ? {} : _ref35$edit,
    _ref35$responsiveSrc = _ref35.responsiveSrc,
    responsiveSrc = _ref35$responsiveSrc === void 0 ? {} : _ref35$responsiveSrc,
    RoseName = _ref35.RoseName,
    RoseID = _ref35.RoseID,
    _ref35$loading = _ref35.loading,
    loading = _ref35$loading === void 0 ? false : _ref35$loading;
  var _useState81 = (0, _react.useState)(null),
    _useState82 = _slicedToArray(_useState81, 2),
    webpSrc = _useState82[0],
    setWebpSrc = _useState82[1];
  var _useState83 = (0, _react.useState)(null),
    _useState84 = _slicedToArray(_useState83, 2),
    compressedSize = _useState84[0],
    setCompressedSize = _useState84[1];
  var _useState85 = (0, _react.useState)(false),
    _useState86 = _slicedToArray(_useState85, 2),
    isLoaded = _useState86[0],
    setIsLoaded = _useState86[1];
  var _useState87 = (0, _react.useState)(false),
    _useState88 = _slicedToArray(_useState87, 2),
    error = _useState88[0],
    setError = _useState88[1];
  (0, _react.useEffect)(function () {
    var loadImage = /*#__PURE__*/function () {
      var _ref36 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(imageSrc) {
        var img;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              img = new window.Image();
              img.src = imageSrc;
              img.onload = function () {
                compressImage(img);
              };
              img.onerror = function () {
                setError(true);
              };
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function loadImage(_x) {
        return _ref36.apply(this, arguments);
      };
    }();
    var imageSource = requireSrc || src;
    if (imageSource) {
      loadImage(imageSource);
    }
  }, [src, requireSrc]);
  var compressImage = function compressImage(img) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = width || img.width;
    canvas.height = height || img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    var webpDataUrl = canvas.toDataURL("image/webp", quality);
    setWebpSrc(webpDataUrl);
    var webpSizeInBytes = Math.ceil(webpDataUrl.length * 3 / 4);
    var sizeInKB = (webpSizeInBytes / 1024).toFixed(2);
    setCompressedSize(sizeInKB);
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, !isLoaded && !error && loading && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: height,
      width: width,
      backgroundColor: "#f0f0f0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "14px",
      color: "#999"
    }
  }, "Loading..."), /*#__PURE__*/_react["default"].createElement("picture", null, webpSrc && /*#__PURE__*/_react["default"].createElement("source", {
    srcSet: webpSrc,
    type: "image/webp"
  }), responsiveSrc && /*#__PURE__*/_react["default"].createElement("source", {
    srcSet: responsiveSrc.srcSet,
    sizes: responsiveSrc.sizes,
    type: "image/jpeg"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    className: RoseName,
    id: RoseID,
    style: _objectSpread({
      filter: isLoaded ? "none" : "blur(10px)",
      transition: "filter 0.3s ease-in-out"
    }, edit),
    height: height,
    width: width,
    src: webpSrc || src,
    alt: alt,
    loading: "lazy",
    "aria-label": alt,
    onLoad: function onLoad() {
      return setIsLoaded(true);
    },
    onError: function onError() {
      setError(true);
    }
  })), imageSize && compressedSize && !error && /*#__PURE__*/_react["default"].createElement("p", null, "Image Size: ", /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: "blue"
    }
  }, compressedSize, " "), "KB"), error && /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      color: "red"
    }
  }, "Failed to load image"));
};
function Section(_ref37) {
  var children = _ref37.children,
    RoseName = _ref37.RoseName,
    RoseID = _ref37.RoseID,
    _ref37$edit = _ref37.edit,
    edit = _ref37$edit === void 0 ? {} : _ref37$edit,
    _ref37$ariaLabelledby = _ref37.ariaLabelledby,
    ariaLabelledby = _ref37$ariaLabelledby === void 0 ? "section" : _ref37$ariaLabelledby,
    props = _objectWithoutProperties(_ref37, _excluded);
  var styles = _objectSpread({
    minHeight: "100vh",
    margin: "3rem 3rem 0rem 3rem",
    transition: "0.2s",
    boxSizing: "border-box"
  }, edit);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: RoseName,
    id: RoseID,
    style: styles,
    "aria-labelledby": ariaLabelledby
  }, props), children);
}
var SidebarValues = function SidebarValues(_ref38) {
  var data = _ref38.data,
    lineColor = _ref38.lineColor;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginRight: "20px",
      textAlign: "center"
    }
  }, data.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      style: {
        marginBottom: "10px"
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        fontWeight: "bold",
        color: lineColor
      }
    }, item.label, ":"), " ", item.value);
  }));
};
var AreaChart = exports.AreaChart = function AreaChart(_ref39) {
  var data = _ref39.data,
    _ref39$edit = _ref39.edit,
    edit = _ref39$edit === void 0 ? {} : _ref39$edit,
    _ref39$fill = _ref39.fill,
    fill = _ref39$fill === void 0 ? "blue" : _ref39$fill,
    _ref39$lineColor = _ref39.lineColor,
    lineColor = _ref39$lineColor === void 0 ? "skyblue" : _ref39$lineColor,
    _ref39$childStyle = _ref39.childStyle,
    childStyle = _ref39$childStyle === void 0 ? {} : _ref39$childStyle;
  var _useState89 = (0, _react.useState)(data),
    _useState90 = _slicedToArray(_useState89, 2),
    prevData = _useState90[0],
    setPrevData = _useState90[1];
  var maxValue = Math.max.apply(Math, _toConsumableArray(data.map(function (item) {
    return item.value;
  })));
  var chartWidth = 300;
  var chartHeight = 150;
  var getPathData = function getPathData() {
    var points = data.map(function (item, index) {
      return "".concat(index / (data.length - 1) * chartWidth, ",").concat(chartHeight - item.value / maxValue * chartHeight);
    }).join(" ");
    return "M 0 ".concat(chartHeight, " L ").concat(points, " L ").concat(chartWidth, " ").concat(chartHeight, " Z");
  };
  var getLinePoints = function getLinePoints() {
    return data.map(function (item, index) {
      return "".concat(index / (data.length - 1) * chartWidth, ",").concat(chartHeight - item.value / maxValue * chartHeight);
    }).join(" ");
  };
  (0, _react.useEffect)(function () {
    setPrevData(data);
  }, [data]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      display: "flex"
    }, edit)
  }, /*#__PURE__*/_react["default"].createElement(SidebarValues, {
    data: data,
    lineColor: lineColor
  }), /*#__PURE__*/_react["default"].createElement("svg", {
    width: chartWidth,
    height: chartHeight,
    style: {
      border: "1px solid #ccc"
    }
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: getPathData(),
    fill: fill,
    style: _objectSpread({
      transition: "fill 0.5s ease, d 0.5s ease"
    }, childStyle)
  }), /*#__PURE__*/_react["default"].createElement("polyline", {
    fill: "none",
    stroke: lineColor,
    strokeWidth: "2",
    points: getLinePoints(),
    style: {
      transition: "stroke 0.5s ease, points 0.5s ease"
    }
  })));
};
var Chart = exports.Chart = function Chart(_ref40) {
  var data = _ref40.data,
    edit = _ref40.edit,
    _ref40$labelStyle = _ref40.labelStyle,
    labelStyle = _ref40$labelStyle === void 0 ? {
      background: "blue"
    } : _ref40$labelStyle,
    _ref40$height = _ref40.height,
    height = _ref40$height === void 0 ? 200 : _ref40$height,
    _ref40$width = _ref40.width,
    width = _ref40$width === void 0 ? 600 : _ref40$width,
    _ref40$barWidth = _ref40.barWidth,
    barWidth = _ref40$barWidth === void 0 ? 40 : _ref40$barWidth,
    _ref40$barMargin = _ref40.barMargin,
    barMargin = _ref40$barMargin === void 0 ? 5 : _ref40$barMargin,
    _ref40$tooltip = _ref40.tooltip,
    tooltip = _ref40$tooltip === void 0 ? true : _ref40$tooltip,
    _ref40$showLabels = _ref40.showLabels,
    showLabels = _ref40$showLabels === void 0 ? true : _ref40$showLabels,
    _ref40$labelColor = _ref40.labelColor,
    labelColor = _ref40$labelColor === void 0 ? "white" : _ref40$labelColor,
    _ref40$borderColor = _ref40.borderColor,
    borderColor = _ref40$borderColor === void 0 ? "#ccc" : _ref40$borderColor,
    _ref40$backgroundColo = _ref40.backgroundColor,
    backgroundColor = _ref40$backgroundColo === void 0 ? "#f5f5f5" : _ref40$backgroundColo;
  var _useState91 = (0, _react.useState)(data),
    _useState92 = _slicedToArray(_useState91, 2),
    chartData = _useState92[0],
    setChartData = _useState92[1];
  var maxValue = Math.max.apply(Math, _toConsumableArray(chartData.map(function (item) {
    return item.value;
  })));
  (0, _react.useEffect)(function () {
    setChartData(data);
  }, [data]);
  var styles = {
    chartContainer: _objectSpread({
      display: "flex",
      alignItems: "flex-end",
      height: "".concat(height, "px"),
      width: "".concat(width, "px"),
      border: "1px solid ".concat(borderColor),
      padding: "10px",
      background: backgroundColor
    }, edit),
    bar: {
      margin: "".concat(barMargin, "px"),
      transition: "height 0.5s ease",
      position: "relative"
    },
    label: {
      textAlign: "center",
      display: "block",
      fontSize: "12px",
      color: labelColor
    },
    tooltip: {
      position: "absolute",
      bottom: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      background: "black",
      color: "white",
      padding: "4px",
      borderRadius: "4px",
      whiteSpace: "nowrap",
      zIndex: "10"
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.chartContainer
  }, chartData.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      style: _objectSpread(_objectSpread({}, styles.bar), {}, {
        width: "".concat(barWidth, "px"),
        height: "".concat(item.value / maxValue * 100, "%"),
        background: labelStyle.background
      }),
      onMouseEnter: function onMouseEnter(e) {
        if (tooltip) {
          var tooltipElement = document.createElement("div");
          tooltipElement.innerText = "Value: ".concat(item.value);
          Object.assign(tooltipElement.style, styles.tooltip);
          e.currentTarget.appendChild(tooltipElement);
          e.currentTarget._tooltip = tooltipElement;
        }
      },
      onMouseLeave: function onMouseLeave(e) {
        var tooltipElement = e.currentTarget._tooltip;
        if (tooltipElement) {
          tooltipElement.remove();
          delete e.currentTarget._tooltip;
        }
      }
    }, showLabels && /*#__PURE__*/_react["default"].createElement("span", {
      style: styles.label
    }, item.label));
  }));
};
var PieChart = exports.PieChart = function PieChart(_ref41) {
  var data = _ref41.data,
    _ref41$edit = _ref41.edit,
    edit = _ref41$edit === void 0 ? {} : _ref41$edit,
    _ref41$childStyle = _ref41.childStyle,
    childStyle = _ref41$childStyle === void 0 ? {} : _ref41$childStyle,
    _ref41$linesColor = _ref41.linesColor,
    linesColor = _ref41$linesColor === void 0 ? "skyblue" : _ref41$linesColor,
    _ref41$fill = _ref41.fill,
    fill = _ref41$fill === void 0 ? "blue" : _ref41$fill,
    _ref41$radius = _ref41.radius,
    radius = _ref41$radius === void 0 ? 70 : _ref41$radius,
    _ref41$strokeWidth = _ref41.strokeWidth,
    strokeWidth = _ref41$strokeWidth === void 0 ? 1 : _ref41$strokeWidth,
    _ref41$tooltip = _ref41.tooltip,
    tooltip = _ref41$tooltip === void 0 ? false : _ref41$tooltip,
    _ref41$showLabels = _ref41.showLabels,
    showLabels = _ref41$showLabels === void 0 ? true : _ref41$showLabels,
    _ref41$labelColor = _ref41.labelColor,
    labelColor = _ref41$labelColor === void 0 ? "white" : _ref41$labelColor,
    _ref41$animationDurat = _ref41.animationDuration,
    animationDuration = _ref41$animationDurat === void 0 ? 0.5 : _ref41$animationDurat,
    _ref41$labelStyle = _ref41.labelStyle,
    labelStyle = _ref41$labelStyle === void 0 ? {} : _ref41$labelStyle;
  var total = data.reduce(function (sum, slice) {
    return sum + slice.value;
  }, 0);
  var centerX = radius + 20;
  var centerY = radius + 20;
  var renderSlices = function renderSlices() {
    var cumulativeValue = 0;
    return data.map(function (slice, index) {
      var angle = slice.value / total * 2 * Math.PI;
      var startX = centerX + radius * Math.cos(cumulativeValue);
      var startY = centerY + radius * Math.sin(cumulativeValue);
      cumulativeValue += angle;
      var endX = centerX + radius * Math.cos(cumulativeValue);
      var endY = centerY + radius * Math.sin(cumulativeValue);
      var largeArcFlag = angle > Math.PI ? 1 : 0;
      var pathData = "M ".concat(centerX, " ").concat(centerY, " L ").concat(startX, " ").concat(startY, " A ").concat(radius, " ").concat(radius, " 0 ").concat(largeArcFlag, " 1 ").concat(endX, " ").concat(endY, " Z");
      return /*#__PURE__*/_react["default"].createElement("g", {
        key: index
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: pathData,
        fill: slice.color || fill,
        stroke: linesColor,
        strokeWidth: strokeWidth,
        style: _objectSpread({
          transition: "d ".concat(animationDuration, "s ease")
        }, childStyle),
        onMouseEnter: function onMouseEnter(e) {
          if (tooltip) {
            var tooltipElement = document.createElement("div");
            tooltipElement.innerText = "".concat(slice.label, ": ").concat(slice.value);
            tooltipElement.style.position = "absolute";
            tooltipElement.style.background = "black";
            tooltipElement.style.color = "white";
            tooltipElement.style.padding = "4px";
            tooltipElement.style.borderRadius = "4px";
            tooltipElement.style.pointerEvents = "none";
            document.body.appendChild(tooltipElement);
            var mouseX = e.clientX,
              mouseY = e.clientY;
            tooltipElement.style.left = "".concat(mouseX, "px");
            tooltipElement.style.top = "".concat(mouseY - 30, "px");
            e.currentTarget._tooltip = tooltipElement;
          }
        },
        onMouseLeave: function onMouseLeave(e) {
          var tooltipElement = e.currentTarget._tooltip;
          if (tooltipElement) {
            tooltipElement.remove();
            delete e.currentTarget._tooltip;
          }
        }
      }), showLabels && /*#__PURE__*/_react["default"].createElement("text", {
        x: centerX + radius / 2 * Math.cos(cumulativeValue - angle / 2),
        y: centerY + radius / 2 * Math.sin(cumulativeValue - angle / 2),
        fill: labelColor,
        style: _objectSpread({}, labelStyle),
        textAnchor: "middle"
      }, slice.label));
    });
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      display: "flex"
    }, edit)
  }, /*#__PURE__*/_react["default"].createElement(SidebarValues, {
    data: data,
    lineColor: linesColor
  }), /*#__PURE__*/_react["default"].createElement("svg", {
    width: 2 * (radius + 20),
    height: 2 * (radius + 20),
    viewBox: "0 0 ".concat(2 * (radius + 20), " ").concat(2 * (radius + 20))
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(0, 0)"
  }, renderSlices())));
};
var LineChart = exports.LineChart = function LineChart(_ref42) {
  var xAxis = _ref42.xAxis,
    series = _ref42.series,
    height = _ref42.height,
    _ref42$width = _ref42.width,
    width = _ref42$width === void 0 ? '100%' : _ref42$width,
    margin = _ref42.margin,
    colors = _ref42.colors;
  var canvasRef = (0, _react.useRef)(null);
  var containerRef = (0, _react.useRef)(null);
  var drawChart = function drawChart(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var xData = xAxis.data || [];
    var seriesData = series.map(function (serie) {
      return serie.data;
    });
    var maxY = Math.max.apply(Math, _toConsumableArray(seriesData.flat().filter(function (value) {
      return value !== null;
    })).concat([0]));
    var minY = Math.min.apply(Math, _toConsumableArray(seriesData.flat().filter(function (value) {
      return value !== null;
    })));
    var padding = 20;
    var chartWidth = canvas.width - padding * 2;
    var chartHeight = height - padding * 2;

    // Draw X and Y axis
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(padding, padding);
    ctx.lineTo(canvas.width - padding, height - padding);
    ctx.strokeStyle = "#ccc";
    ctx.stroke();

    // Draw each series with respective colors
    seriesData.forEach(function (data, seriesIndex) {
      ctx.beginPath();
      data.forEach(function (value, index) {
        if (value !== null) {
          var x = padding + chartWidth / (xData.length - 1) * index;
          var y = height - padding - (value - minY) / (maxY - minY) * chartHeight;
          if (index === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
      });

      // Use the provided color or a default color if none is specified
      ctx.strokeStyle = (colors === null || colors === void 0 ? void 0 : colors[seriesIndex]) || "#1976d2";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw points
      ctx.fillStyle = ctx.strokeStyle;
      data.forEach(function (value, index) {
        if (value !== null) {
          var x = padding + chartWidth / (xData.length - 1) * index;
          var y = height - padding - (value - minY) / (maxY - minY) * chartHeight;
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    });

    // Draw X-axis labels
    ctx.fillStyle = "#000";
    ctx.font = "12px Arial";
    xData.forEach(function (label, index) {
      var x = padding + chartWidth / (xData.length - 1) * index;
      ctx.fillText(label.toString(), x - 10, height - padding + 15);
    });
  };
  (0, _react.useEffect)(function () {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext("2d");
    drawChart(canvas, ctx);
    var resizeCanvas = function resizeCanvas() {
      var container = containerRef.current;
      canvas.width = container.clientWidth;
      canvas.height = height;
      drawChart(canvas, ctx);
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    return function () {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [xAxis, series, height, colors]); // Added colors to dependencies

  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: containerRef,
    style: {
      position: 'relative',
      width: width,
      aspectRatio: '16 / 9'
    }
  }, /*#__PURE__*/_react["default"].createElement("canvas", {
    ref: canvasRef,
    style: {
      marginTop: margin.top,
      marginBottom: margin.bottom
    }
  }));
};
var RobotDetection = exports.RobotDetection = function RobotDetection(_ref43) {
  var onSuspiciousActivity = _ref43.onSuspiciousActivity;
  var _useState93 = (0, _react.useState)(false),
    _useState94 = _slicedToArray(_useState93, 2),
    isRobot = _useState94[0],
    setIsRobot = _useState94[1];
  var _useState95 = (0, _react.useState)([]),
    _useState96 = _slicedToArray(_useState95, 2),
    mousePositions = _useState96[0],
    setMousePositions = _useState96[1];
  var _useState97 = (0, _react.useState)(0),
    _useState98 = _slicedToArray(_useState97, 2),
    clicks = _useState98[0],
    setClicks = _useState98[1];
  var _useState99 = (0, _react.useState)([]),
    _useState100 = _slicedToArray(_useState99, 2),
    clickTimeStamps = _useState100[0],
    setClickTimeStamps = _useState100[1];
  (0, _react.useEffect)(function () {
    var handleMouseMove = function handleMouseMove(e) {
      setMousePositions(function (prev) {
        return [].concat(_toConsumableArray(prev), [{
          x: e.clientX,
          y: e.clientY,
          time: Date.now()
        }]);
      });
    };
    var handleClick = function handleClick() {
      var now = Date.now();
      setClicks(function (prev) {
        return prev + 1;
      });
      setClickTimeStamps(function (prev) {
        return [].concat(_toConsumableArray(prev), [now]);
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    return function () {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);
  (0, _react.useEffect)(function () {
    var analyzeMouseMovements = function analyzeMouseMovements() {
      if (mousePositions.length < 5) return;
      var erraticMovements = 0;
      for (var i = 1; i < mousePositions.length; i++) {
        var distance = Math.sqrt(Math.pow(mousePositions[i].x - mousePositions[i - 1].x, 2) + Math.pow(mousePositions[i].y - mousePositions[i - 1].y, 2));
        if (distance > 100) {
          erraticMovements++;
        }
      }
      if (erraticMovements > mousePositions.length / 2) {
        setIsRobot(true);
        onSuspiciousActivity();
      }
    };
    var analyzeClicks = function analyzeClicks() {
      var now = Date.now();
      var recentClicks = clickTimeStamps.filter(function (timestamp) {
        return now - timestamp < 2000;
      });
      if (recentClicks.length > 5) {
        setIsRobot(true);
        onSuspiciousActivity();
      }
    };
    analyzeMouseMovements();
    analyzeClicks();
  }, [mousePositions, clickTimeStamps, onSuspiciousActivity]);
  return;
};
var SoundInteraction = exports.SoundInteraction = function SoundInteraction(_ref44) {
  var audioPath = _ref44.audioPath,
    children = _ref44.children;
  var playAudio = function playAudio() {
    new Audio(audioPath).play();
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    onClick: playAudio
  }, children);
};
function Title(_ref45) {
  var _ref45$children = _ref45.children,
    children = _ref45$children === void 0 ? "larose" : _ref45$children;
  (0, _react.useEffect)(function () {
    document.title = children;
  }, []);
  return;
}
var MetaDescription = exports.MetaDescription = function MetaDescription(_ref46) {
  var children = _ref46.children;
  (0, _react.useEffect)(function () {
    var metaDescription = document.querySelector('meta[name="description"]');
    console.log(metaDescription);
    if (metaDescription) {
      metaDescription.setAttribute("content", "".concat(children));
    } else {
      var newMetaDescription = document.createElement("meta");
      newMetaDescription.name = "description";
      newMetaDescription.content = "".concat(children);
      document.head.appendChild(newMetaDescription);
    }
  }, []);
  return;
};
var Popup = exports.Popup = function Popup(_ref47) {
  var title = _ref47.title,
    onClose = _ref47.onClose,
    timeout = _ref47.timeout,
    _ref47$edit = _ref47.edit,
    edit = _ref47$edit === void 0 ? {} : _ref47$edit;
  (0, _react.useEffect)(function () {
    if (timeout) {
      var timer = setTimeout(function () {
        onClose();
      }, timeout);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [timeout, onClose]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: overlayStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({}, popupStyle), edit)
  }, /*#__PURE__*/_react["default"].createElement("h2", null, title), edit.content && /*#__PURE__*/_react["default"].createElement("div", null, edit.content), " ", /*#__PURE__*/_react["default"].createElement("button", {
    style: btn,
    onClick: onClose
  }, edit.buttonLabel || "Close", " ")));
};
var overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000
};
var popupStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "5px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
};
var btn = {
  width: "4rem",
  height: "2rem",
  borderRadius: "10px",
  border: "none",
  background: "blue",
  fontWeight: "bold",
  color: "white",
  boxShadow: "1px 1px 31px -6px blue",
  cursor: "pointer"
};
var buttonStyle = {
  padding: "8px 16px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};
var popoverStyle = {
  position: "absolute",
  backgroundColor: "white",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "4px",
  zIndex: 10,
  transition: "all 0.2s ease"
};
var contentStyle = {
  padding: "8px"
};
var itemStyle = {
  padding: "8px 12px",
  cursor: "pointer",
  borderBottom: "1px solid #ddd"
};
function MenuPop(_ref48) {
  var items = _ref48.items,
    children = _ref48.children,
    _ref48$edit = _ref48.edit,
    edit = _ref48$edit === void 0 ? {} : _ref48$edit,
    _ref48$closeOnClickOu = _ref48.closeOnClickOutside,
    closeOnClickOutside = _ref48$closeOnClickOu === void 0 ? false : _ref48$closeOnClickOu;
  var _useState101 = (0, _react.useState)(false),
    _useState102 = _slicedToArray(_useState101, 2),
    isOpen = _useState102[0],
    setIsOpen = _useState102[1];
  var _useState103 = (0, _react.useState)(null),
    _useState104 = _slicedToArray(_useState103, 2),
    anchorEl = _useState104[0],
    setAnchorEl = _useState104[1];
  var popoverRef = (0, _react.useRef)(null);
  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
    setIsOpen(function (prev) {
      return !prev;
    });
  };
  var handleClose = function handleClose() {
    setIsOpen(false);
  };
  (0, _react.useEffect)(function () {
    if (closeOnClickOutside && isOpen) {
      var handleOutsideClick = function handleOutsideClick(event) {
        if (popoverRef.current && !popoverRef.current.contains(event.target)) {
          handleClose();
        }
      };
      document.addEventListener("mousedown", handleOutsideClick);
      return function () {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }
  }, [isOpen, closeOnClickOutside]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children ? /*#__PURE__*/_react["default"].createElement("div", {
    onClick: handleClick,
    style: {
      cursor: "pointer"
    }
  }, children) : /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleClick,
    style: buttonStyle
  }, "Open Popover"), /*#__PURE__*/_react["default"].createElement("div", {
    ref: popoverRef,
    style: _objectSpread(_objectSpread({}, popoverStyle), {}, {
      top: anchorEl ? anchorEl.getBoundingClientRect().bottom : 0,
      left: anchorEl ? anchorEl.getBoundingClientRect().left : 0,
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? "translateY(0)" : "translateY(-10px)",
      visibility: isOpen ? "visible" : "hidden",
      pointerEvents: isOpen ? "auto" : "none"
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({}, contentStyle), edit)
  }, items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      style: itemStyle,
      onClick: function onClick() {
        if (item.onClick) item.onClick();
        handleClose();
      }
    }, item.content);
  }))));
}