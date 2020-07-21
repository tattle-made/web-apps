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

/**
 * @author
 * @function EditableRadioGroup
 **/
var EditableRadioGroupReadView = function EditableRadioGroupReadView(_ref) {
  var data = _ref.data,
      isEditable = _ref.isEditable,
      onEdit = _ref.onEdit;
  return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    pad: "medium",
    margin: "medium",
    background: {
      color: "light-2",
      opacity: "strong"
    },
    gap: "small",
    width: "medium",
    height: "150px"
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
  }, data.label)), isEditable && /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    gridArea: "main"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    size: "small",
    focusIndicator: false,
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Edit, null),
    onClick: onEdit
  }))), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, data.value));
};

var _default = EditableRadioGroupReadView;
exports["default"] = _default;

//# sourceMappingURL=EditableRadioGroupReadView.js.map