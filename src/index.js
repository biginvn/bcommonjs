var path = require("path");

var BAction = require('./modules/action');
var BAnimate = require('./modules/animate');
var BArray = require('./modules/array');
var BString = require('./modules/string');
var BLib = {
    isEmpty : function (str){
        if (str == undefined || str == null)
            return true;
        if (str.constructor === Array){
            return str.length == 0 ? true : false;
        }
        return str.length == 0; // for string
    }
}

$.extend(BLib, BAction, BAnimate, BArray, BString);

window.BLib=BLib;