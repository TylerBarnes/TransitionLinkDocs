var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var _objectAssign = require("object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _compassVerticalRhythm = require("compass-vertical-rhythm");

var _compassVerticalRhythm2 = _interopRequireDefault(_compassVerticalRhythm);

var _modularscale = require("modularscale");

var _modularscale2 = _interopRequireDefault(_modularscale);

var _createStyles = require("./utils/createStyles");

var _createStyles2 = _interopRequireDefault(_createStyles);

var _compileStyles = require("./utils/compileStyles");

var _compileStyles2 = _interopRequireDefault(_compileStyles);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var typography = function typography(opts) {
  var defaults = {
    baseFontSize: "16px",
    baseLineHeight: 1.45,
    headerLineHeight: 1.1,
    scaleRatio: 2,
    googleFonts: [],
    headerFontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif"
    ],
    bodyFontFamily: ["georgia", "serif"],
    headerColor: "inherit",
    bodyColor: "hsla(0,0%,0%,0.8)",
    headerWeight: "bold",
    bodyWeight: "normal",
    boldWeight: "bold",
    includeNormalize: true,
    blockMarginBottom: 1
  };

  var options = (0, _objectAssign2.default)({}, defaults, opts);

  var vr = (0, _compassVerticalRhythm2.default)(options);

  // Add this function to the vertical rhythm object so it'll be passed around
  // as well and be available. Not related really but this is the easiest
  // way to pass around extra utility functions atm... :-\
  vr.scale = function(value) {
    // This doesn't pick the right scale ratio if a theme has more than one ratio.
    // Perhaps add optional parameter for a width and it'll get the ratio
    // for this width. Tricky part is maxWidth could be set in non-pixels.
    var baseFont = parseInt(options.baseFontSize, 10);
    var newFontSize =
      (0, _modularscale2.default)(value, options.scaleRatio) * baseFont + "px";
    return vr.adjustFontSizeTo(newFontSize);
  };

  return _extends(
    {
      options: options
    },
    vr,
    {
      createStyles: function createStyles() {
        return this.toString();
      },
      // TODO remove in next breaking release.
      toJSON: function toJSON() {
        return (0, _createStyles2.default)(vr, options);
      },
      toString: function toString() {
        return (0, _compileStyles2.default)(vr, options, this.toJSON());
      },
      injectStyles: function injectStyles() {
        if (typeof document !== "undefined") {
          // Replace existing
          if (document.getElementById("typography.js")) {
            var styleNode = document.getElementById("typography.js");
            styleNode.innerHTML = this.toString();
          } else {
            var node = document.createElement("style");
            node.id = "typography.js";
            node.innerHTML = this.toString();
            document.head.appendChild(node);
          }
        }
      }
    }
  );
};

module.exports = typography;

// const test = typography({
//   baseFontSize: "18px",
//   includeNormalize: false,
//   breakpoints: {
//     "@media screen and (min-width:800px)": {
//       // any valid media query.
//       baseFontSize: "20px",
//       bodyColor: "red",
//       scaleRatio: 2.5, // Override the default scale
//     },
//     "@media screen and (min-width:1200px)": {
//       // any valid media query.
//       scaleRatio: 4, // Override the default scale
//       headerWeight: 'normal',
//       headerColor: 'orange'
//     }
//   }
// });

// console.log(test.toJSON());
// console.log(test.toString());
