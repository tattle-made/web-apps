"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _grommet = require("grommet");

var _grommetIcons = require("grommet-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var EditableDateRangeReadView = function EditableDateRangeReadView(_ref) {
  var data = _ref.data,
      onEdit = _ref.onEdit,
      isEditable = _ref.isEditable;
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
      'top': 'xsmall',
      'bottom': 'none'
    }
  }, data.label)), isEditable && /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    gridArea: "main"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Button, {
    size: "small",
    focusIndicator: false,
    icon: /*#__PURE__*/_react["default"].createElement(_grommetIcons.Edit, null),
    onClick: onEdit
  }))), Array.isArray(data.value) ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "From ", data.value[0].split("T")[0]), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "To ", data.value[1].split("T")[0])) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "From ", data.value.split("T")[0]), /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, "To ", data.value.split("T")[0])));
};

var _default = EditableDateRangeReadView;
exports["default"] = _default;

//# sourceMappingURL=EditableDateRangeReadView.js.map