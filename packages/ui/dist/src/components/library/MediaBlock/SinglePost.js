"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _grommet = require("grommet");

var _reactFeather = require("react-feather");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @author
 * @function Single
 **/
// const TagLabel = styled(Text)`
//     line-height: 2.2em
// `
var boxDimension = {
  medium: "12em",
  small: "18em"
};

var SinglePost = function SinglePost(_ref) {
  var type = _ref.type,
      src = _ref.src,
      text = _ref.text,
      heading = _ref.heading,
      body = _ref.body,
      timestamp = _ref.timestamp;
  var size = (0, _react.useContext)(_grommet.ResponsiveContext);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      fetching = _useState2[0],
      setFetching = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hover = _useState4[0],
      setHover = _useState4[1];

  (0, _react.useEffect)(function () {
    setFetching(true);
  });

  var onMouseEnter = function onMouseEnter() {
    return setHover(true);
  };

  var onMouseLeave = function onMouseLeave() {
    return setHover(false);
  };

  return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    width: boxDimension[size],
    border: {
      color: type == "error" ? "status-error" : "border"
    },
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    round: "xsmall",
    overflow: "hidden"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    width: boxDimension[size],
    height: boxDimension[size]
  }, type == "image" ? /*#__PURE__*/_react["default"].createElement(_grommet.Image, {
    fit: "cover",
    src: src
  }) : type == "video" ? /*#__PURE__*/_react["default"].createElement(_grommet.Video, {
    controls: "over",
    fit: "cover"
  }, /*#__PURE__*/_react["default"].createElement("source", {
    key: "video",
    src: src,
    type: "video/mp4"
  }), /*#__PURE__*/_react["default"].createElement("track", {
    key: "cc",
    label: "English",
    kind: "subtitles",
    srcLang: "en",
    src: "/assets/small-en.vtt",
    "default": true
  })) : type === "text" ? /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    width: boxDimension[size],
    height: boxDimension[size],
    overflow: "scroll"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, text)) : null), type != "error" && /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    pad: "small"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
    size: "medium"
  }, " ", heading, " "), /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
    size: "small"
  }, " ", body, " "), /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
    size: "xsmall"
  }, " ", (0, _moment["default"])(timestamp).format("lll"), " ")));
};

var _default = SinglePost;
exports["default"] = _default;

//# sourceMappingURL=SinglePost.js.map