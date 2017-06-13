var BAction = require('./modules/action');
var BAnimate = require('./modules/animate');
var BArray = require('./modules/array');
var BString = require('./modules/string');
var BUtil = require('./modules/util');
var BUI = require('./modules/ui');

$.extend(BUtil, BAction, BAnimate, BArray, BString, BUI);

window.BLib=BUtil;
