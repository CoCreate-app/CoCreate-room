(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CoCreateRoom"] = factory();
	else
		root["CoCreateRoom"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/CoCreate-room.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CoCreate-room.js":
/*!******************************!*\
  !*** ./src/CoCreate-room.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar CoCreateRoom = {\n  init: function init(container) {\n    var mainContainer = container || document;\n\n    if (!mainContainer.querySelectorAll) {\n      return;\n    }\n\n    var elements = mainContainer.querySelectorAll('[data-namespace], [data-room]');\n    var clients = {};\n    elements.forEach(function (el) {\n      if (el.isUsedForRoom) {\n        return;\n      }\n\n      var host = CoCreate.host;\n      var namespace = el.getAttribute('data-namespace');\n      var room = el.getAttribute('data-room') || '';\n\n      if (!namespace) {\n        namespace = config.organization_Id;\n      }\n\n      var key = \"\".concat(namespace);\n\n      if (room) {\n        key = \"\".concat(namespace, \"/\").concat(room);\n      }\n\n      if (!clients[key]) {\n        CoCreateSocket.create({\n          namespace: namespace,\n          room: room,\n          host: host\n        });\n        clients[key] = true;\n      }\n\n      el.isUsedForRoom = true;\n    });\n  }\n};\nCoCreateRoom.init();\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoCreateRoom);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZVJvb20vLi9zcmMvQ29DcmVhdGUtcm9vbS5qcz85MGUwIl0sIm5hbWVzIjpbIkNvQ3JlYXRlUm9vbSIsImluaXQiLCJjb250YWluZXIiLCJtYWluQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudHMiLCJjbGllbnRzIiwiZm9yRWFjaCIsImVsIiwiaXNVc2VkRm9yUm9vbSIsImhvc3QiLCJDb0NyZWF0ZSIsIm5hbWVzcGFjZSIsImdldEF0dHJpYnV0ZSIsInJvb20iLCJjb25maWciLCJvcmdhbml6YXRpb25fSWQiLCJrZXkiLCJDb0NyZWF0ZVNvY2tldCIsImNyZWF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxJQUFNQSxZQUFZLEdBQUc7QUFFcEJDLE1BQUksRUFBRSxjQUFTQyxTQUFULEVBQW9CO0FBQ3pCLFFBQUlDLGFBQWEsR0FBR0QsU0FBUyxJQUFJRSxRQUFqQzs7QUFDQSxRQUFJLENBQUNELGFBQWEsQ0FBQ0UsZ0JBQW5CLEVBQXFDO0FBQ3BDO0FBQ0E7O0FBRUQsUUFBSUMsUUFBUSxHQUFHSCxhQUFhLENBQUNFLGdCQUFkLENBQStCLCtCQUEvQixDQUFmO0FBRUEsUUFBSUUsT0FBTyxHQUFHLEVBQWQ7QUFDQUQsWUFBUSxDQUFDRSxPQUFULENBQWlCLFVBQUNDLEVBQUQsRUFBUTtBQUN4QixVQUFJQSxFQUFFLENBQUNDLGFBQVAsRUFBc0I7QUFDckI7QUFDQTs7QUFDRCxVQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0QsSUFBdEI7QUFDQSxVQUFJRSxTQUFTLEdBQUdKLEVBQUUsQ0FBQ0ssWUFBSCxDQUFnQixnQkFBaEIsQ0FBaEI7QUFDQSxVQUFJQyxJQUFJLEdBQUdOLEVBQUUsQ0FBQ0ssWUFBSCxDQUFnQixXQUFoQixLQUFnQyxFQUEzQzs7QUFDQSxVQUFJLENBQUNELFNBQUwsRUFBZ0I7QUFDZkEsaUJBQVMsR0FBR0csTUFBTSxDQUFDQyxlQUFuQjtBQUNBOztBQUVELFVBQUlDLEdBQUcsYUFBTUwsU0FBTixDQUFQOztBQUNBLFVBQUlFLElBQUosRUFBVTtBQUNURyxXQUFHLGFBQU1MLFNBQU4sY0FBbUJFLElBQW5CLENBQUg7QUFDQTs7QUFFRCxVQUFJLENBQUNSLE9BQU8sQ0FBQ1csR0FBRCxDQUFaLEVBQW1CO0FBQ2xCQyxzQkFBYyxDQUFDQyxNQUFmLENBQXNCO0FBQ3JCUCxtQkFBUyxFQUFUQSxTQURxQjtBQUVyQkUsY0FBSSxFQUFKQSxJQUZxQjtBQUdyQkosY0FBSSxFQUFKQTtBQUhxQixTQUF0QjtBQU1BSixlQUFPLENBQUNXLEdBQUQsQ0FBUCxHQUFlLElBQWY7QUFDQTs7QUFFRFQsUUFBRSxDQUFDQyxhQUFILEdBQW1CLElBQW5CO0FBQ0EsS0EzQkQ7QUE0QkE7QUF2Q21CLENBQXJCO0FBMENBVixZQUFZLENBQUNDLElBQWI7QUFFZUQsMkVBQWYiLCJmaWxlIjoiLi9zcmMvQ29DcmVhdGUtcm9vbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENvQ3JlYXRlUm9vbSA9IHtcbiAgXG5cdGluaXQ6IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuXHRcdGxldCBtYWluQ29udGFpbmVyID0gY29udGFpbmVyIHx8IGRvY3VtZW50O1xuXHRcdGlmICghbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdGxldCBlbGVtZW50cyA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmFtZXNwYWNlXSwgW2RhdGEtcm9vbV0nKTtcblx0XHRcblx0XHRsZXQgY2xpZW50cyA9IHt9O1xuXHRcdGVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0XHRpZiAoZWwuaXNVc2VkRm9yUm9vbSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBob3N0ID0gQ29DcmVhdGUuaG9zdDtcblx0XHRcdGxldCBuYW1lc3BhY2UgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZXNwYWNlJyk7XG5cdFx0XHRsZXQgcm9vbSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1yb29tJykgfHwgJydcblx0XHRcdGlmICghbmFtZXNwYWNlKSB7XG5cdFx0XHRcdG5hbWVzcGFjZSA9IGNvbmZpZy5vcmdhbml6YXRpb25fSWQ7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGxldCBrZXkgPSBgJHtuYW1lc3BhY2V9YDtcblx0XHRcdGlmIChyb29tKSB7XG5cdFx0XHRcdGtleSA9IGAke25hbWVzcGFjZX0vJHtyb29tfWBcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYgKCFjbGllbnRzW2tleV0pIHtcblx0XHRcdFx0Q29DcmVhdGVTb2NrZXQuY3JlYXRlKHtcblx0XHRcdFx0XHRuYW1lc3BhY2UsXG5cdFx0XHRcdFx0cm9vbSxcblx0XHRcdFx0XHRob3N0XG5cdFx0XHRcdH0pXG5cdFx0XHRcdFxuXHRcdFx0XHRjbGllbnRzW2tleV0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRlbC5pc1VzZWRGb3JSb29tID0gdHJ1ZTtcblx0XHR9KTtcblx0fVxufVxuXG5Db0NyZWF0ZVJvb20uaW5pdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBDb0NyZWF0ZVJvb207Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/CoCreate-room.js\n");

/***/ })

/******/ })["default"];
});