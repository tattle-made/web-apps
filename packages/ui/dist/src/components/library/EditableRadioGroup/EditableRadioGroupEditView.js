"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _grommet = require("grommet");

var _grommetIcons = require("grommet-icons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @author
 * @function EditableRadioGroupEditView
 **/
var EditableRadioGroupEditView = function EditableRadioGroupEditView(_ref) {
  var data = _ref.data,
      onUpdate = _ref.onUpdate;

  var _React$useState = _react["default"].useState("one"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = _react["default"].useState("one"),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      currentValue = _React$useState4[0],
      setCurrentValue = _React$useState4[1];

  var onUpdateClicked = function onUpdateClicked() {
    onUpdate(_objectSpread({}, data, {
      value: value
    }));
  };

  return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    pad: "medium",
    margin: "medium",
    background: {
      color: "light-2",
      opacity: "strong"
    },
    gap: "small",
    width: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Grid, {
    fill: true,
    areas: [{
      name: "nav",
      start: [0, 0],
      end: [2, 0]
    }, {
      name: "main",
      start: [2, 0],
      end: [2, 0]
    }],
    columns: ["small", "flex"],
    rows: ["flex"],
    gap: "small",
    margin: "none"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    gridArea: "nav"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Heading, {
    level: 3,
    margin: {
      top: "xsmall",
      bottom: "none"
    }
  }, data.label)), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    gridArea: "main"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    size: "small",
    focusIndicator: false,
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Checkmark, null),
    onClick: onUpdateClicked
  }))), /*#__PURE__*/_react["default"].createElement(_grommet.RadioButtonGroup, {
    name: "doc",
    options: data.options,
    value: value,
    onChange: function onChange(event) {
      return setValue(event.target.value);
    }
  }));
};

var _default = EditableRadioGroupEditView;
exports["default"] = _default;

//# sourceMappingURL=EditableRadioGroupEditView.js.map