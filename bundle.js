/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./alerter.js":
/*!********************!*\
  !*** ./alerter.js ***!
  \********************/
/***/ ((module) => {

eval("module.exports = function (message) {\n  alert(message);\n};\n\n//# sourceURL=webpack://irc-support-desk/./alerter.js?");

/***/ }),

/***/ "./bundle.js":
/*!*******************!*\
  !*** ./bundle.js ***!
  \*******************/
/***/ (() => {

eval("/*\n * ATTENTION: The \"eval\" devtool has been used (maybe by default in mode: \"development\").\n * This devtool is neither made for production nor for readable output files.\n * It uses \"eval()\" calls to create a separate source file in the browser devtools.\n * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)\n * or disable the default devtool with \"devtool: false\".\n * If you are looking for production-ready output files, see mode: \"production\" (https://webpack.js.org/configuration/mode/).\n */\n\n/******/\n(() => {\n  // webpackBootstrap\n\n  /******/\n  var __webpack_modules__ = {\n    /***/\n    \"./index.js\": () => {\n      eval(\"\\n\\n//# sourceURL=webpack://irc-support-desk/./index.js?\");\n      /***/\n    }\n    /******/\n\n  };\n  /************************************************************************/\n\n  /******/\n\n  /******/\n  // startup\n\n  /******/\n  // Load entry module and return exports\n\n  /******/\n  // This entry module can't be inlined because the eval devtool is used.\n\n  /******/\n\n  var __webpack_exports__ = {};\n  /******/\n\n  __webpack_modules__[\"./index.js\"]();\n  /******/\n\n  /******/\n\n})();\n\n//# sourceURL=webpack://irc-support-desk/./bundle.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var alerter = __webpack_require__(/*! ./alerter */ \"./alerter.js\");\n\nalerter(\"Here is an alert\");\n\n//# sourceURL=webpack://irc-support-desk/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./bundle.js");
/******/ 	
/******/ })()
;