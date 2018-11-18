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

var _grayPercentage = require("gray-percentage");

var _grayPercentage2 = _interopRequireDefault(_grayPercentage);

var _set = require("lodash/set");

var _set2 = _interopRequireDefault(_set);

var _forEach = require("lodash/forEach");

var _forEach2 = _interopRequireDefault(_forEach);

var _isNumber = require("lodash/isNumber");

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isString = require("lodash/isString");

var _isString2 = _interopRequireDefault(_isString);

var _isFunction = require("lodash/isFunction");

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isArray = require("lodash/isArray");

var _isArray2 = _interopRequireDefault(_isArray);

var _isObject = require("lodash/isObject");

var _isObject2 = _interopRequireDefault(_isObject);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _merge = require("lodash/merge");

var _merge2 = _interopRequireDefault(_merge);

var _reduce = require("lodash/reduce");

var _reduce2 = _interopRequireDefault(_reduce);

var _pickBy = require("lodash/pickBy");

var _pickBy2 = _interopRequireDefault(_pickBy);

var _compassVerticalRhythm = require("compass-vertical-rhythm");

var _compassVerticalRhythm2 = _interopRequireDefault(_compassVerticalRhythm);

var _objectAssign = require("object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _modularscale = require("modularscale");

var _modularscale2 = _interopRequireDefault(_modularscale);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var setStyles = function setStyles() {
  var styles =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var els = arguments[1];
  var rules = arguments[2];

  var elements = void 0;
  if (!(0, _isArray2.default)(els)) {
    elements = [els];
  } else {
    elements = els;
  }
  (0, _forEach2.default)(elements, function(element) {
    (0, _forEach2.default)(rules, function(value, prop) {
      (0, _set2.default)(styles, element + "." + prop, value);
    });
  });
  return styles;
};

// Wrap font names in quotes, unless the font name is actually a keyword.
// See https://stackoverflow.com/a/13752149 and https://www.w3.org/TR/CSS2/fonts.html#font-family-prop
var genericFontFamilies = [
  "inherit",
  "default",
  "serif",
  "sans-serif",
  "monospace",
  "fantasy",
  "cursive",
  "-apple-system"
];
var wrapFontFamily = function wrapFontFamily(fontFamily) {
  return genericFontFamilies.indexOf(fontFamily) !== -1
    ? fontFamily
    : "'" + fontFamily + "'";
};

module.exports = function(vr, options) {
  var setAllStyles = function setAllStyles(vr, options, masterStyles) {
    var styles = {};

    var _vr$establishBaseline = vr.establishBaseline(),
      fontSize = _vr$establishBaseline.fontSize,
      lineHeight = _vr$establishBaseline.lineHeight;

    // Base HTML styles.

    styles = setStyles(styles, "html", {
      font:
        fontSize +
        "/" +
        lineHeight +
        " " +
        options.bodyFontFamily.map(wrapFontFamily).join(","),
      boxSizing: "border-box",
      overflowY: "scroll"
    });

    // box-sizing reset.
    styles = setStyles(styles, ["*", "*:before", "*:after"], {
      boxSizing: "inherit"
    });

    // Base body styles.
    styles = setStyles(styles, "body", {
      color: options.bodyColor,
      fontFamily: options.bodyFontFamily.map(wrapFontFamily).join(","),
      fontWeight: options.bodyWeight,
      wordWrap: "break-word",
      fontKerning: "normal",
      MozFontFeatureSettings: '"kern", "liga", "clig", "calt"',
      msFontFeatureSettings: '"kern", "liga", "clig", "calt"',
      WebkitFontFeatureSettings: '"kern", "liga", "clig", "calt"',
      fontFeatureSettings: '"kern", "liga", "clig", "calt"'
    });

    // Make images responsive.
    styles = setStyles(styles, "img", {
      maxWidth: "100%"
    });

    // All block elements get one rhythm of bottom margin by default
    // or whatever is passed in as option.
    var blockMarginBottom = "";
    if ((0, _isNumber2.default)(options.blockMarginBottom)) {
      blockMarginBottom = vr.rhythm(options.blockMarginBottom);
    } else if ((0, _isString2.default)(options.blockMarginBottom)) {
      blockMarginBottom = options.blockMarginBottom;
    } else {
      blockMarginBottom = vr.rhythm(1);
    }
    styles = setStyles(
      styles,
      [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "hgroup",
        "ul",
        "ol",
        "dl",
        "dd",
        "p",
        "figure",
        "pre",
        "table",
        "fieldset",
        "blockquote",
        "form",
        "noscript",
        "iframe",
        "img",
        "hr",
        "address"
      ],
      {
        // Reset margin/padding to 0.
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        marginBottom: blockMarginBottom
      }
    );

    // Basic blockquote styles.
    styles = setStyles(styles, "blockquote", {
      marginRight: vr.rhythm(1),
      marginBottom: blockMarginBottom,
      marginLeft: vr.rhythm(1)
    });

    // b, strong.
    styles = setStyles(styles, ["b", "strong", "dt", "th"], {
      fontWeight: options.boldWeight
    });

    // hr.
    styles = setStyles(styles, "hr", {
      background: (0, _grayPercentage2.default)(80),
      border: "none",
      height: "1px",
      marginBottom: "calc(" + blockMarginBottom + " - 1px)"
    });

    // ol, ul.
    styles = setStyles(styles, ["ol", "ul"], {
      listStylePosition: "outside",
      listStyleImage: "none",
      marginLeft: vr.rhythm(1)
    });

    // li.
    styles = setStyles(styles, "li", {
      marginBottom: "calc(" + blockMarginBottom + " / 2)"
    });

    // Remove default padding on list items.
    styles = setStyles(styles, ["ol li", "ul li"], {
      paddingLeft: 0
    });

    // children ol, ul.
    styles = setStyles(styles, ["li > ol", "li > ul"], {
      marginLeft: vr.rhythm(1),
      marginBottom: "calc(" + blockMarginBottom + " / 2)",
      marginTop: "calc(" + blockMarginBottom + " / 2)"
    });

    // Remove margin-bottom on the last-child of a few block elements
    // The worst offender of this seems to be markdown => html compilers
    // as they put paragraphs within LIs amoung other oddities.
    styles = setStyles(
      styles,
      ["blockquote *:last-child", "li *:last-child", "p *:last-child"],
      {
        marginBottom: 0
      }
    );

    // Ensure li > p is 1/2 margin — this is another markdown => compiler oddity.
    styles = setStyles(styles, ["li > p"], {
      marginBottom: "calc(" + blockMarginBottom + " / 2)"
    });

    // Make generally smaller elements, smaller.
    styles = setStyles(
      styles,
      ["code", "kbd", "pre", "samp"],
      _extends({}, vr.adjustFontSizeTo("85%"))
    );

    // Abbr, Acronym.
    styles = setStyles(styles, ["abbr", "acronym"], {
      borderBottom: "1px dotted " + (0, _grayPercentage2.default)(50),
      cursor: "help"
    });
    styles["abbr[title]"] = {
      borderBottom: "1px dotted " + (0, _grayPercentage2.default)(50),
      cursor: "help",
      textDecoration: "none"

      // Table styles.
    };
    styles = setStyles(
      styles,
      ["table"],
      _extends({}, vr.adjustFontSizeTo(options.baseFontSize), {
        borderCollapse: "collapse",
        width: "100%"
      })
    );
    styles = setStyles(styles, ["thead"], {
      textAlign: "left"
    });
    styles = setStyles(styles, ["td,th"], {
      textAlign: "left",
      borderBottom: "1px solid " + (0, _grayPercentage2.default)(88),
      fontFeatureSettings: '"tnum"',
      MozFontFeatureSettings: '"tnum"',
      msFontFeatureSettings: '"tnum"',
      WebkitFontFeatureSettings: '"tnum"',
      paddingLeft: vr.rhythm(2 / 3),
      paddingRight: vr.rhythm(2 / 3),
      paddingTop: vr.rhythm(1 / 2),
      paddingBottom: "calc(" + vr.rhythm(1 / 2) + " - 1px)"
    });
    styles = setStyles(styles, "th:first-child,td:first-child", {
      paddingLeft: 0
    });
    styles = setStyles(styles, "th:last-child,td:last-child", {
      paddingRight: 0
    });

    // Create styles for headers.
    styles = setStyles(styles, ["h1", "h2", "h3", "h4", "h5", "h6"], {
      color: options.headerColor,
      fontFamily: options.headerFontFamily.map(wrapFontFamily).join(","),
      fontWeight: options.headerWeight,
      textRendering: "optimizeLegibility"
    });

    // Set header sizes.
    var h1 = vr.scale(5 / 5);
    var h2 = vr.scale(3 / 5);
    var h3 = vr.scale(2 / 5);
    var h4 = vr.scale(0 / 5);
    var h5 = vr.scale(-1 / 5);
    var h6 = vr.scale(-1.5 / 5);

    (0, _forEach2.default)([h1, h2, h3, h4, h5, h6], function(header, i) {
      styles = (0, _set2.default)(
        styles,
        "h" + (i + 1) + ".fontSize",
        header.fontSize
      );
      styles = (0, _set2.default)(
        styles,
        "h" + (i + 1) + ".lineHeight",
        options.headerLineHeight
      );
    });

    if (masterStyles && (0, _isObject2.default)(masterStyles)) {
      var trimmedStyles = {};

      (0, _forEach2.default)(styles, function(declarationBlock, selector, key) {
        var masterDeclarationBlock = masterStyles[selector];

        (0, _forEach2.default)(declarationBlock, function(value, property) {
          var newDeclarationBlock = (0, _pickBy2.default)(
            declarationBlock,
            function(value, key) {
              return value !== masterDeclarationBlock[key];
            }
          );

          if (!(0, _isEmpty2.default)(newDeclarationBlock)) {
            trimmedStyles[selector] = newDeclarationBlock;
          }
        });
      });

      styles = trimmedStyles;
    }

    return styles;
  };

  var styles = setAllStyles(vr, options);

  // Add breakpoints if they're set as an object
  if (options.breakpoints && (0, _isObject2.default)(options.breakpoints)) {
    (0, _forEach2.default)(options.breakpoints, function(breakpoint, key) {
      // new vertical rythm / combined options for breakpoint
      var bpOptions = (0, _objectAssign2.default)({}, options, breakpoint);
      var bpVr = (0, _compassVerticalRhythm2.default)(bpOptions);

      // helper function copied from the vr / vertical rythm object in index.js
      bpVr.scale = function(value) {
        var baseFont = parseInt(bpOptions.baseFontSize, 10);
        var newFontSize =
          (0, _modularscale2.default)(value, bpOptions.scaleRatio) * baseFont +
          "px";

        return bpVr.adjustFontSizeTo(newFontSize);
      };

      var bpStyles = setAllStyles(bpVr, bpOptions, styles);

      styles = (0, _set2.default)(styles, key, bpStyles);
    });
  }

  // Call plugins if any.
  if ((0, _isArray2.default)(options.plugins)) {
    styles = (0, _reduce2.default)(
      options.plugins,
      function(stylesObj, plugin) {
        return (0, _merge2.default)(stylesObj, plugin(vr, options, stylesObj));
      },
      styles
    );
  }

  // Call overrideStyles function on options (if set).
  if (
    options.overrideStyles &&
    (0, _isFunction2.default)(options.overrideStyles)
  ) {
    styles = (0, _merge2.default)(
      styles,
      options.overrideStyles(vr, options, styles)
    );
  }

  // Call overrideThemeStyles function on options (if set).
  if (
    options.overrideThemeStyles &&
    (0, _isFunction2.default)(options.overrideThemeStyles)
  ) {
    styles = (0, _merge2.default)(
      styles,
      options.overrideThemeStyles(vr, options, styles)
    );
  }

  return styles;
};
