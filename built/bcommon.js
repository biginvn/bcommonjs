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
/******/ 	__webpack_require__.p = "./docs/js";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var BString = {
	escapeHTML: function(str) {
		return str.toString().replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
	},
	sprintf : function(str, replaces, delimiter){
		if (delimiter == undefined || delimiter == null)
			delimiter = '?';

		var texts = str.split(delimiter);
		var result = '';
		for (var i = 0; i < texts.length; i++){
			if (replaces[i]!=undefined)
				result += texts[i] + replaces[i];
			else
				result += texts[i];
		}

		return result;
	}
}
module.exports=BString;


/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports) {

var BArray = {
	objectInArray: function(item, array, key) {
		// var a = { 'code' : 9 , 'name' : 'name 1' } || var b = [ { 'code' : 9 , 'name' : 'name 2' }, { 'code' : 10 , 'name' : 'YDUZXSD' } ]
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
module.exports=BArray;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var BString = __webpack_require__(1);
var BUtil = __webpack_require__(2);
var modalMessageHTML =
'<div class="modal fade" tabindex="-1" role="dialog" id="b-alert" aria-labelledby="Message" aria-hidden="true"> \
  <div class="modal-dialog" role="document"> \
    <div class="modal-content"> \
      <div class="modal-header"> \
        <h5 class="modal-title" id="exampleModalLabel">?</h5> \
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"> \
          <span aria-hidden="true">&times;</span> \
        </button> \
      </div> \
      <div class="modal-body">?</div> \
      <div class="modal-footer"> \
        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button> \
      </div> \
    </div>  \
  </div> \
</div>';

var modalConfirmHTML =
'<div class="modal fade" tabindex="-1" role="dialog" id="b-alert" aria-labelledby="Message" aria-hidden="true"> \
  <div class="modal-dialog" role="document"> \
    <div class="modal-content"> \
      <div class="modal-header"> \
        <h5 class="modal-title">?</h5> \
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"> \
          <span aria-hidden="true">&times;</span> \
        </button> \
      </div> \
      <div class="modal-body">?</div> \
      <div class="modal-footer"> \
        <button type="button" class="btn btn-danger" data-dismiss="modal">No</button> \
        <button type="button" class="btn btn-success">Yes</button> \
      </div> \
    </div>  \
  </div> \
</div>';

var messageTipHTML = '<ul class="b-tip" id="b-tip"></ul>';
var BUI = {
  alert : function(message, title, type){
    title = BUtil.isEmpty(title) ? 'Message' : title;
    type = BUtil.isEmpty(type) ? 'message' : 'confirm';
    html = type == 'message' ? BString.sprintf(modalMessageHTML, [title, message]):BString.sprintf(modalConfirmHTML, [title, message]);
    $("#b-alert").detach();
    $('body').append(html);
    $("#b-alert").modal();
  },

  message : function(message, delay, className){
    delay = BUtil.isEmpty(delay) ? 2000 : delay;
    className = BUtil.isEmpty(className) ? 'bg-danger' : className;
    var bTipEl = $('#b-tip');
    if (bTipEl.length == 0 )
      $('body').append(messageTipHTML);

    bTipEl = $('#b-tip');

    var elMessage = '<li class="?" id="?">?</li>';
    var totalTip = $('#b-tip > li').length;
    var elID = 'b-tip-number-' + totalTip;
    elMessage = BString.sprintf(elMessage,[className,elID,message]);

    bTipEl.append(elMessage);
  }
}

module.exports = BUI;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var BAction = __webpack_require__(3);
var BAnimate = __webpack_require__(4);
var BArray = __webpack_require__(5);
var BString = __webpack_require__(1);
var BUtil = __webpack_require__(2);
var BUI = __webpack_require__(6);

$.extend(BUtil, BAction, BAnimate, BArray, BString, BUI);

window.BLib=BUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ]);