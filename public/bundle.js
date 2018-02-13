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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person_js__ = __webpack_require__(2);



//
console.log("Here we go again!")

console.log(__WEBPACK_IMPORTED_MODULE_0__utils_js__["d" /* square */](4))
console.log(__WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* add */](4, 99))
console.log(__WEBPACK_IMPORTED_MODULE_0__utils_js__["c" /* minus */](4, 99))
console.log(__WEBPACK_IMPORTED_MODULE_0__utils_js__["b" /* default */](8, 4))

console.log("I am an Adult: " + __WEBPACK_IMPORTED_MODULE_1__person_js__["c" /* isAdult */](19))
console.log("I can drink: " + __WEBPACK_IMPORTED_MODULE_1__person_js__["a" /* canDrink */](19))
console.log("I am a Senior: " + __WEBPACK_IMPORTED_MODULE_1__person_js__["b" /* default */](65))


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return square; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return minus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return divide; });
console.log("this is sparta.js is running")

const square = (x) => x * x

const add = (a, b) => a + b

//named export
const minus = (a, b) => a - b

const divide = (a, b) => a / b

//export default divide (Do this if you want to export without {})
//export default (a, b) => a / b (Do this if you want to export without {} AND only having one line of code)

//named exports


// exports - default -named exports

//YOU CAN ONLY SET UP A SINGLE DEFAULT


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//named export
const isAdult = (age) => 18 <= age
/* harmony export (immutable) */ __webpack_exports__["c"] = isAdult;


//named export
const canDrink = (age) => 21 <= age
/* harmony export (immutable) */ __webpack_exports__["a"] = canDrink;


const isSenior = (age) => 65 <= age

/* harmony default export */ __webpack_exports__["b"] = (isSenior);


/***/ })
/******/ ]);