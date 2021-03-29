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
/******/ 	return __webpack_require__(__webpack_require__.s = "../CoCreate-components/CoCreate-room/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../CoCreate-components/CoCreate-room/src/index.js":
/*!*********************************************************!*\
  !*** ../CoCreate-components/CoCreate-room/src/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nconst CoCreateRoom = {\n  init: function (container) {\n    let mainContainer = container || document;\n\n    if (!mainContainer.querySelectorAll) {\n      return;\n    }\n\n    let elements = mainContainer.querySelectorAll('[data-namespace], [data-room]');\n    let clients = {};\n    elements.forEach(el => {\n      if (el.isUsedForRoom) {\n        return;\n      }\n\n      const host = CoCreate.host;\n      let namespace = el.getAttribute('data-namespace');\n      let room = el.getAttribute('data-room') || '';\n\n      if (!namespace) {\n        namespace = config.organization_Id;\n      }\n\n      let key = `${namespace}`;\n\n      if (room) {\n        key = `${namespace}/${room}`;\n      }\n\n      if (!clients[key]) {\n        CoCreate.socket.create({\n          namespace,\n          room,\n          host\n        });\n        clients[key] = true;\n      }\n\n      el.isUsedForRoom = true;\n    });\n  }\n};\nCoCreateRoom.init();\nvar _default = CoCreateRoom;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5yb29tLy4uL0NvQ3JlYXRlLWNvbXBvbmVudHMvQ29DcmVhdGUtcm9vbS9zcmMvaW5kZXguanM/MGQ5YyJdLCJuYW1lcyI6WyJDb0NyZWF0ZVJvb20iLCJpbml0IiwiY29udGFpbmVyIiwibWFpbkNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnRzIiwiY2xpZW50cyIsImZvckVhY2giLCJlbCIsImlzVXNlZEZvclJvb20iLCJob3N0IiwiQ29DcmVhdGUiLCJuYW1lc3BhY2UiLCJnZXRBdHRyaWJ1dGUiLCJyb29tIiwiY29uZmlnIiwib3JnYW5pemF0aW9uX0lkIiwia2V5Iiwic29ja2V0IiwiY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxZQUFZLEdBQUc7QUFFcEJDLE1BQUksRUFBRSxVQUFTQyxTQUFULEVBQW9CO0FBQ3pCLFFBQUlDLGFBQWEsR0FBR0QsU0FBUyxJQUFJRSxRQUFqQzs7QUFDQSxRQUFJLENBQUNELGFBQWEsQ0FBQ0UsZ0JBQW5CLEVBQXFDO0FBQ3BDO0FBQ0E7O0FBRUQsUUFBSUMsUUFBUSxHQUFHSCxhQUFhLENBQUNFLGdCQUFkLENBQStCLCtCQUEvQixDQUFmO0FBRUEsUUFBSUUsT0FBTyxHQUFHLEVBQWQ7QUFDQUQsWUFBUSxDQUFDRSxPQUFULENBQWtCQyxFQUFELElBQVE7QUFDeEIsVUFBSUEsRUFBRSxDQUFDQyxhQUFQLEVBQXNCO0FBQ3JCO0FBQ0E7O0FBQ0QsWUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNELElBQXRCO0FBQ0EsVUFBSUUsU0FBUyxHQUFHSixFQUFFLENBQUNLLFlBQUgsQ0FBZ0IsZ0JBQWhCLENBQWhCO0FBQ0EsVUFBSUMsSUFBSSxHQUFHTixFQUFFLENBQUNLLFlBQUgsQ0FBZ0IsV0FBaEIsS0FBZ0MsRUFBM0M7O0FBQ0EsVUFBSSxDQUFDRCxTQUFMLEVBQWdCO0FBQ2ZBLGlCQUFTLEdBQUdHLE1BQU0sQ0FBQ0MsZUFBbkI7QUFDQTs7QUFFRCxVQUFJQyxHQUFHLEdBQUksR0FBRUwsU0FBVSxFQUF2Qjs7QUFDQSxVQUFJRSxJQUFKLEVBQVU7QUFDVEcsV0FBRyxHQUFJLEdBQUVMLFNBQVUsSUFBR0UsSUFBSyxFQUEzQjtBQUNBOztBQUVELFVBQUksQ0FBQ1IsT0FBTyxDQUFDVyxHQUFELENBQVosRUFBbUI7QUFDbEJOLGdCQUFRLENBQUNPLE1BQVQsQ0FBZ0JDLE1BQWhCLENBQXVCO0FBQ3RCUCxtQkFEc0I7QUFFdEJFLGNBRnNCO0FBR3RCSjtBQUhzQixTQUF2QjtBQU1BSixlQUFPLENBQUNXLEdBQUQsQ0FBUCxHQUFlLElBQWY7QUFDQTs7QUFFRFQsUUFBRSxDQUFDQyxhQUFILEdBQW1CLElBQW5CO0FBQ0EsS0EzQkQ7QUE0QkE7QUF2Q21CLENBQXJCO0FBMENBVixZQUFZLENBQUNDLElBQWI7ZUFFZUQsWSIsImZpbGUiOiIuLi9Db0NyZWF0ZS1jb21wb25lbnRzL0NvQ3JlYXRlLXJvb20vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ29DcmVhdGVSb29tID0ge1xuICBcblx0aW5pdDogZnVuY3Rpb24oY29udGFpbmVyKSB7XG5cdFx0bGV0IG1haW5Db250YWluZXIgPSBjb250YWluZXIgfHwgZG9jdW1lbnQ7XG5cdFx0aWYgKCFtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0bGV0IGVsZW1lbnRzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uYW1lc3BhY2VdLCBbZGF0YS1yb29tXScpO1xuXHRcdFxuXHRcdGxldCBjbGllbnRzID0ge307XG5cdFx0ZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcblx0XHRcdGlmIChlbC5pc1VzZWRGb3JSb29tKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGhvc3QgPSBDb0NyZWF0ZS5ob3N0O1xuXHRcdFx0bGV0IG5hbWVzcGFjZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lc3BhY2UnKTtcblx0XHRcdGxldCByb29tID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXJvb20nKSB8fCAnJ1xuXHRcdFx0aWYgKCFuYW1lc3BhY2UpIHtcblx0XHRcdFx0bmFtZXNwYWNlID0gY29uZmlnLm9yZ2FuaXphdGlvbl9JZDtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0bGV0IGtleSA9IGAke25hbWVzcGFjZX1gO1xuXHRcdFx0aWYgKHJvb20pIHtcblx0XHRcdFx0a2V5ID0gYCR7bmFtZXNwYWNlfS8ke3Jvb219YFxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZiAoIWNsaWVudHNba2V5XSkge1xuXHRcdFx0XHRDb0NyZWF0ZS5zb2NrZXQuY3JlYXRlKHtcblx0XHRcdFx0XHRuYW1lc3BhY2UsXG5cdFx0XHRcdFx0cm9vbSxcblx0XHRcdFx0XHRob3N0XG5cdFx0XHRcdH0pXG5cdFx0XHRcdFxuXHRcdFx0XHRjbGllbnRzW2tleV0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRlbC5pc1VzZWRGb3JSb29tID0gdHJ1ZTtcblx0XHR9KTtcblx0fVxufVxuXG5Db0NyZWF0ZVJvb20uaW5pdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBDb0NyZWF0ZVJvb207Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../CoCreate-components/CoCreate-room/src/index.js\n");

/***/ })

/******/ })["default"];
});