var path = require("path");

var BAction = require('./modules/action');
var BAnimate = require('./modules/animate');
var BArray = require('./modules/array');
var BString = require('./modules/string');
var BUtil = require('./modules/util');

$.extend(BUtil, BAction, BAnimate, BArray, BString);

window.BLib=BUtil;