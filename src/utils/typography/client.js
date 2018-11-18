'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _compassVerticalRhythm = require('compass-vertical-rhythm');

var _compassVerticalRhythm2 = _interopRequireDefault(_compassVerticalRhythm);

var _modularscale = require('modularscale');

var _modularscale2 = _interopRequireDefault(_modularscale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typography = function typography(opts) {
  var defaults = {
    baseFontSize: '16px',
    baseLineHeight: 1.45,
    headerLineHeight: 1.1,
    scaleRatio: 2,
    googleFonts: [],
    headerFontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
    bodyFontFamily: ['georgia', 'serif'],
    headerColor: 'inherit',
    bodyColor: 'hsla(0,0%,0%,0.8)',
    headerWeight: 'bold',
    bodyWeight: 'normal',
    boldWeight: 'bold',
    includeNormalize: true,
    blockMarginBottom: 1
  };

  var options = (0, _objectAssign2.default)({}, defaults, opts);

  var vr = (0, _compassVerticalRhythm2.default)(options);

  // Add this function to the vertical rhythm object so it'll be passed around
  // as well and be available. Not related really but this is the easiest
  // way to pass around extra utility functions atm... :-\
  vr.scale = function (value) {
    // This doesn't pick the right scale ratio if a theme has more than one ratio.
    // Perhaps add optional parameter for a width and it'll get the ratio
    // for this width. Tricky part is maxWidth could be set in non-pixels.
    var baseFont = options.baseFontSize.slice(0, -2);
    var newFontSize = (0, _modularscale2.default)(value, options.scaleRatio) * baseFont + 'px';
    return vr.adjustFontSizeTo(newFontSize);
  };

  return _extends({
    options: options
  }, vr);
};

module.exports = typography;