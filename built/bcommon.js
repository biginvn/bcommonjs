/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var BAction = {
    openPopupWindow : function (link, title,w,h){
            var left = (screen.width/2)-(w/2);
            var top = (screen.height/2)-(h/2);
        return window.open(link, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
    }
}

module.exports=BAction;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var BAnimate = {
	scrollToElement : function(selector, delay){
        if (delay == undefined || delay == null)
            delay = 1000;
        $('html, body').animate({
            scrollTop: $(selector).offset().top
        }, delay);
    }
}
module.exports=BAnimate;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var BArray = {
	inArray: function(item, array, key) {
		// var a = { 'code' : 9 , 'name' : 'YDUZ' } || var b = [ { 'code' : 9 , 'name' : 'YDUZ' }, { 'code' : 10 , 'name' : 'YDUZXSD' } ]
		// => inArray ( a , b , 'code' ) = true , inArray ( a , b , 'name' ) = false

		for (var i = 0; i < array.length; i++) {
			if (array[i][key] == item[key])
				return i;
		}
		return null;
	},
	inArrayMultiKey: function(item, array, keys) {
		// var a = { 'code' : 9 , 'name' : 'YDUZ' } || var b = [ { 'code' : 9 , 'name' : 'YDUZ' }, { 'code' : 10 , 'name' : 'YDUZXSD' } ]
		// => inArray ( a , b , ['code','name'] ) = 0 , inArray ( a , b , 'name' ) = false
		if (array == null || array.length == 0)
			return null;

		for (var i = 0; i < array.length; i++) {
			var totalEqual = 0;
			for (var keyIndex = 0; keyIndex < keys.length; keyIndex++) {
				if (
					array[i][keys[keyIndex]] && item[keys[keyIndex]] &&
					(array[i][keys[keyIndex]].toString() == item[keys[keyIndex]].toString())
				)
					totalEqual++;
			}

			if (totalEqual == keys.length)
				return i;
		}
		return null;
	}
}
module.exports=BArray;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var BString = {
	escapeHTML: function(str) {
		return str.toString().replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
	},
	
	getObjectItemInArray: function(list, key, value) { 
	// Get object item in array , define by key of item (example get item by id )
		for (var i = 0; i < list.length; i++) {
			if (list[i][key] == value) {
				var result = list[i];
				return result;
			}
		}
		return null;
	}
}
module.exports=BString;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var BUtil = {
    isEmpty : function (str){
        if (str == undefined || str == null)
            return true;
        if (typeof(str) === "boolean")
        	return !str;
        if (isNaN(str))
        	return str == 0;
        if (str.constructor === Array){
            return str.length == 0 ? true : false;
        }
        return str.length == 0; // for string
    },
    currencyFormat: function(str, currency, separator) {
    	if (this.isEmpty(currency))
    		currency = 'USD';
    	if (this.isEmpty(separator))
    		separator = ',';

		var num = Number(str).toFixed(0);
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1"+separator) + " " + currency;
	}
}

module.exports = BUtil;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var BAction = __webpack_require__(1);
var BAnimate = __webpack_require__(2);
var BArray = __webpack_require__(3);
var BString = __webpack_require__(4);
var BUtil = __webpack_require__(5);

$.extend(BUtil, BAction, BAnimate, BArray, BString);

window.BLib=BUtil;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ]);