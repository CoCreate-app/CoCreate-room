(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["room"] = factory();
	else
		root["CoCreate"] = root["CoCreate"] || {}, root["CoCreate"]["room"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../CoCreate-components/CoCreate-room/src/CoCreate-room.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../CoCreate-components/CoCreate-room/src/CoCreate-room.js":
/*!*****************************************************************!*\
  !*** ../CoCreate-components/CoCreate-room/src/CoCreate-room.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar CoCreateRoom = {\n  init: function init(container) {\n    var mainContainer = container || document;\n\n    if (!mainContainer.querySelectorAll) {\n      return;\n    }\n\n    var elements = mainContainer.querySelectorAll('[data-namespace], [data-room]');\n    var clients = {};\n    elements.forEach(function (el) {\n      if (el.isUsedForRoom) {\n        return;\n      }\n\n      var host = CoCreate.host;\n      var namespace = el.getAttribute('data-namespace');\n      var room = el.getAttribute('data-room') || '';\n\n      if (!namespace) {\n        namespace = config.organization_Id;\n      }\n\n      var key = \"\".concat(namespace);\n\n      if (room) {\n        key = \"\".concat(namespace, \"/\").concat(room);\n      }\n\n      if (!clients[key]) {\n        CoCreate.socket.create({\n          namespace: namespace,\n          room: room,\n          host: host\n        });\n        clients[key] = true;\n      }\n\n      el.isUsedForRoom = true;\n    });\n  }\n};\nCoCreateRoom.init();\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoCreateRoom);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5yb29tLy4uL0NvQ3JlYXRlLWNvbXBvbmVudHMvQ29DcmVhdGUtcm9vbS9zcmMvQ29DcmVhdGUtcm9vbS5qcz8zNTBhIl0sIm5hbWVzIjpbIkNvQ3JlYXRlUm9vbSIsImluaXQiLCJjb250YWluZXIiLCJtYWluQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudHMiLCJjbGllbnRzIiwiZm9yRWFjaCIsImVsIiwiaXNVc2VkRm9yUm9vbSIsImhvc3QiLCJDb0NyZWF0ZSIsIm5hbWVzcGFjZSIsImdldEF0dHJpYnV0ZSIsInJvb20iLCJjb25maWciLCJvcmdhbml6YXRpb25fSWQiLCJrZXkiLCJzb2NrZXQiLCJjcmVhdGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsSUFBTUEsWUFBWSxHQUFHO0FBRXBCQyxNQUFJLEVBQUUsY0FBU0MsU0FBVCxFQUFvQjtBQUN6QixRQUFJQyxhQUFhLEdBQUdELFNBQVMsSUFBSUUsUUFBakM7O0FBQ0EsUUFBSSxDQUFDRCxhQUFhLENBQUNFLGdCQUFuQixFQUFxQztBQUNwQztBQUNBOztBQUVELFFBQUlDLFFBQVEsR0FBR0gsYUFBYSxDQUFDRSxnQkFBZCxDQUErQiwrQkFBL0IsQ0FBZjtBQUVBLFFBQUlFLE9BQU8sR0FBRyxFQUFkO0FBQ0FELFlBQVEsQ0FBQ0UsT0FBVCxDQUFpQixVQUFDQyxFQUFELEVBQVE7QUFDeEIsVUFBSUEsRUFBRSxDQUFDQyxhQUFQLEVBQXNCO0FBQ3JCO0FBQ0E7O0FBQ0QsVUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNELElBQXRCO0FBQ0EsVUFBSUUsU0FBUyxHQUFHSixFQUFFLENBQUNLLFlBQUgsQ0FBZ0IsZ0JBQWhCLENBQWhCO0FBQ0EsVUFBSUMsSUFBSSxHQUFHTixFQUFFLENBQUNLLFlBQUgsQ0FBZ0IsV0FBaEIsS0FBZ0MsRUFBM0M7O0FBQ0EsVUFBSSxDQUFDRCxTQUFMLEVBQWdCO0FBQ2ZBLGlCQUFTLEdBQUdHLE1BQU0sQ0FBQ0MsZUFBbkI7QUFDQTs7QUFFRCxVQUFJQyxHQUFHLGFBQU1MLFNBQU4sQ0FBUDs7QUFDQSxVQUFJRSxJQUFKLEVBQVU7QUFDVEcsV0FBRyxhQUFNTCxTQUFOLGNBQW1CRSxJQUFuQixDQUFIO0FBQ0E7O0FBRUQsVUFBSSxDQUFDUixPQUFPLENBQUNXLEdBQUQsQ0FBWixFQUFtQjtBQUNsQk4sZ0JBQVEsQ0FBQ08sTUFBVCxDQUFnQkMsTUFBaEIsQ0FBdUI7QUFDdEJQLG1CQUFTLEVBQVRBLFNBRHNCO0FBRXRCRSxjQUFJLEVBQUpBLElBRnNCO0FBR3RCSixjQUFJLEVBQUpBO0FBSHNCLFNBQXZCO0FBTUFKLGVBQU8sQ0FBQ1csR0FBRCxDQUFQLEdBQWUsSUFBZjtBQUNBOztBQUVEVCxRQUFFLENBQUNDLGFBQUgsR0FBbUIsSUFBbkI7QUFDQSxLQTNCRDtBQTRCQTtBQXZDbUIsQ0FBckI7QUEwQ0FWLFlBQVksQ0FBQ0MsSUFBYjtBQUVlRCwyRUFBZiIsImZpbGUiOiIuLi9Db0NyZWF0ZS1jb21wb25lbnRzL0NvQ3JlYXRlLXJvb20vc3JjL0NvQ3JlYXRlLXJvb20uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb0NyZWF0ZVJvb20gPSB7XG4gIFxuXHRpbml0OiBmdW5jdGlvbihjb250YWluZXIpIHtcblx0XHRsZXQgbWFpbkNvbnRhaW5lciA9IGNvbnRhaW5lciB8fCBkb2N1bWVudDtcblx0XHRpZiAoIW1haW5Db250YWluZXIucXVlcnlTZWxlY3RvckFsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRsZXQgZWxlbWVudHMgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5hbWVzcGFjZV0sIFtkYXRhLXJvb21dJyk7XG5cdFx0XG5cdFx0bGV0IGNsaWVudHMgPSB7fTtcblx0XHRlbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdFx0aWYgKGVsLmlzVXNlZEZvclJvb20pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgaG9zdCA9IENvQ3JlYXRlLmhvc3Q7XG5cdFx0XHRsZXQgbmFtZXNwYWNlID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWVzcGFjZScpO1xuXHRcdFx0bGV0IHJvb20gPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm9vbScpIHx8ICcnXG5cdFx0XHRpZiAoIW5hbWVzcGFjZSkge1xuXHRcdFx0XHRuYW1lc3BhY2UgPSBjb25maWcub3JnYW5pemF0aW9uX0lkO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRsZXQga2V5ID0gYCR7bmFtZXNwYWNlfWA7XG5cdFx0XHRpZiAocm9vbSkge1xuXHRcdFx0XHRrZXkgPSBgJHtuYW1lc3BhY2V9LyR7cm9vbX1gXG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmICghY2xpZW50c1trZXldKSB7XG5cdFx0XHRcdENvQ3JlYXRlLnNvY2tldC5jcmVhdGUoe1xuXHRcdFx0XHRcdG5hbWVzcGFjZSxcblx0XHRcdFx0XHRyb29tLFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fSlcblx0XHRcdFx0XG5cdFx0XHRcdGNsaWVudHNba2V5XSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGVsLmlzVXNlZEZvclJvb20gPSB0cnVlO1xuXHRcdH0pO1xuXHR9XG59XG5cbkNvQ3JlYXRlUm9vbS5pbml0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvQ3JlYXRlUm9vbTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../CoCreate-components/CoCreate-room/src/CoCreate-room.js\n");

/***/ })

/******/ })["default"];
});