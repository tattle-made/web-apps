"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlainExternalLink = exports.ExternalLink = exports.PlainLink = exports.Link = void 0;

var _gatsbyLink = _interopRequireDefault(require("gatsby-link"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  color: inherit;\n  :visited {\n    color: inherit;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  :visited {\n    color: inherit;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  color: inherit;\n  :visited {\n    color: inherit;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: inherit;\n  :visited {\n    color: inherit;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ThemedLink = (0, _styledComponents["default"])(_gatsbyLink["default"])(_templateObject());
exports.Link = ThemedLink;
var ThemedPlainLink = (0, _styledComponents["default"])(_gatsbyLink["default"])(_templateObject2());
exports.PlainLink = ThemedPlainLink;

var ThemedExternalLink = _styledComponents["default"].a(_templateObject3());

exports.ExternalLink = ThemedExternalLink;

var ThemedPlainExternalLink = _styledComponents["default"].a(_templateObject4());

exports.PlainExternalLink = ThemedPlainExternalLink;

//# sourceMappingURL=index.js.map