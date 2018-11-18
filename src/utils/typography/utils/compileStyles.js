var _typographyNormalize = require("typography-normalize");

var _typographyNormalize2 = _interopRequireDefault(_typographyNormalize);

var _decamelize = require("decamelize");

var _decamelize2 = _interopRequireDefault(_decamelize);

var _forEach = require("lodash/forEach");

var _forEach2 = _interopRequireDefault(_forEach);

var _reduce = require("lodash/reduce");

var _reduce2 = _interopRequireDefault(_reduce);

var _isObject = require("lodash/isObject");

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var compileStyles = function compileStyles(styles) {
  return (0, _reduce2.default)(
    styles,
    function(stylesStr, ruleSet, selector) {
      stylesStr += selector + "{"; // eslint-disable-line
      (0, _forEach2.default)(ruleSet, function(value, property) {
        if ((0, _isObject2.default)(value)) {
          var newObject = {};
          newObject[property] = value;
          stylesStr += compileStyles(newObject); // eslint-disable-line
        } else {
          var newStyle =
            (0, _decamelize2.default)(property, "-") + ":" + value + ";"; // eslint-disable-line
          // If the property is prefixed, add an additional dash at the beginning.
          var prefixes = ["Webkit", "ms", "Moz", "O"];
          prefixes.forEach(function(prefix) {
            if (property.slice(0, prefix.length) === prefix) {
              newStyle = "-" + newStyle;
            }
          });
          stylesStr += newStyle;
        }
      });
      stylesStr += "}"; // eslint-disable-line
      return stylesStr;
    },
    ""
  );
};

module.exports = function(vr, options, styles) {
  // Compile styles to string.
  var stylesStr = compileStyles(styles);

  if (options.includeNormalize) {
    stylesStr = "" + _typographyNormalize2.default + stylesStr;
  }

  return stylesStr;
};
