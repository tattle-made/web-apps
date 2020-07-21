"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _grommet = require("grommet");

var _reactFeather = require("react-feather");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _tattleTechCoreUi = require("@bit/tattle-tech.core-ui.links");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @author
 * @function SmallFooter widget
 **/
var SmallFooter = function SmallFooter(_ref) {
  var items = _ref.items;
  return /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    direction: "row",
    wrap: true
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    direction: "row",
    pad: "small",
    gap: "small",
    wrap: true
  }, items.primary.map(function (primaryItem) {
    return primaryItem.type === "internal" ? /*#__PURE__*/_react["default"].createElement(_tattleTechCoreUi.Link, {
      key: primaryItem.id,
      to: "/khoj/".concat(primaryItem.target)
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, " ", primaryItem.label, " ")) : /*#__PURE__*/_react["default"].createElement(_tattleTechCoreUi.ExternalLink, {
      key: primaryItem.id,
      href: primaryItem.target,
      target: "_blank"
    }, /*#__PURE__*/_react["default"].createElement(_grommet.Text, null, " ", primaryItem.label, " "));
  })), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    flex: "grow"
  }), /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    direction: "row",
    pad: "small",
    gap: "small",
    align: "center"
  }, /*#__PURE__*/_react["default"].createElement(_tattleTechCoreUi.ExternalLink, {
    href: "https://tarunima.typeform.com/to/BxZjfv",
    target: "_blank"
  }, /*#__PURE__*/_react["default"].createElement(_reactFeather.Slack, {
    size: 16
  })), /*#__PURE__*/_react["default"].createElement(_tattleTechCoreUi.ExternalLink, {
    href: "https://github.com/tattle-made",
    target: "_blank"
  }, /*#__PURE__*/_react["default"].createElement(_reactFeather.GitHub, {
    size: 16
  })), /*#__PURE__*/_react["default"].createElement(_tattleTechCoreUi.ExternalLink, {
    href: "https://twitter.com/tattlemade",
    target: "_blank"
  }, /*#__PURE__*/_react["default"].createElement(_reactFeather.Twitter, {
    size: 16
  }))));
};

var _default = SmallFooter;
exports["default"] = _default;

//# sourceMappingURL=SimpleFooter.js.map