"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @author
 * @function SEO
 **/
var SEO = function SEO(_ref) {
  var lang = _ref.lang,
      title = _ref.title;
  return /*#__PURE__*/_react["default"].createElement(_reactHelmet["default"], {
    htmlAttributes: {
      lang: lang
    },
    title: title,
    titleTemplate: "%s"
  }, /*#__PURE__*/_react["default"].createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap",
    rel: "stylesheet"
  }));
};

var _default = SEO;
exports["default"] = _default;

//# sourceMappingURL=seo.js.map