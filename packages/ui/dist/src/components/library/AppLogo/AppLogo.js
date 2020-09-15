"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _grommet = require("grommet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Logo = function Logo() {
  return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    height: "32px",
    width: "32px",
    round: "full",
    background: "url(//tattle-media.s3.amazonaws.com/monogram-dark.svg)"
  });
};
/**
 * @author denny
 * @function Logo
 **/


var AppLogo = function AppLogo(_ref) {
  var name = _ref.name;

  var size = _react["default"].useContext(_grommet.ResponsiveContext);

  return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    pad: "small",
    direction: "row",
    align: "center",
    gap: "small"
  }, /*#__PURE__*/_react["default"].createElement(Logo, null), size != "small" && /*#__PURE__*/_react["default"].createElement(_grommet.Heading, {
    level: 4,
    margin: "none"
  }, " ", name, " "));
};

var _default = AppLogo;
exports["default"] = _default;

//# sourceMappingURL=AppLogo.js.map