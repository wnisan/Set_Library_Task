/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./set-library-test.ts":
/*!*****************************!*\
  !*** ./set-library-test.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("{\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst set_library_1 = __importDefault(__webpack_require__(/*! ./set-library */ \"./set-library.ts\"));\nconst people1 = new set_library_1.default(['Michael', 'Eve', 'Sasha', 'Ulyana']);\nconst people2 = new set_library_1.default(['Ulyana', 'Masha', 'Sasha', 'Nika', 'Victor']);\nconst setA = new set_library_1.default([1, 2, 3, 4]);\nconst setB = new set_library_1.default([6, 4, 3, 8]);\n// Пересечение множеств\nconst commonPeople = people1.intersectWith(people2);\nconsole.log(\"Common names: \", commonPeople.toArray());\nconst commonnumbers = setA.intersectWith(setB);\nconsole.log(\"Common numbers: \", commonnumbers.toArray());\n// Объединение множеств\nconst allPeople = people1.unionWith(people2);\nconsole.log(\"All names: \", allPeople.toArray());\nconst allnumbers = setA.unionWith(setB);\nconsole.log(\"All numbers: \", allnumbers.toArray());\n//\nconst setC = new set_library_1.default([1, 2, 8]);\nconst setD = new set_library_1.default([6, 2, 3, 8, 1]);\n// Проверка подмножества\nconsole.log(\"Set c in set d?: \", setC.isSubsetOf(setD));\nconsole.log(\"Set d in set c?: \", setD.isSubsetOf(setC));\n// Проверка надмножества\nconsole.log(\"Does the set c contain the set d?: \", setC.isSupersetOf(setD));\nconsole.log(\"Does the set d contain the set c?: \", setD.isSupersetOf(setC));\n// Разность множеств\nconst onlyPeople1 = people1.getDifference(people2);\nconsole.log(\"Only People in 1 group: \", onlyPeople1.toArray());\nconst onlyPeople2 = people2.getDifference(people1);\nconsole.log(\"Only People in 2 group: \", onlyPeople2.toArray());\n// Симметрическая разность\nconst uniquePeople = people1.symmetricDifferenceWith(people2);\nconsole.log(\"Unique People: \", uniquePeople.toArray());\n\n\n//# sourceURL=webpack://set_library_project/./set-library-test.ts?\n}");

/***/ }),

/***/ "./set-library.ts":
/*!************************!*\
  !*** ./set-library.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("{\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass setLibrary {\n    constructor(items = []) {\n        this.items = [...new Set(items)];\n    }\n    add(item) {\n        if (!this.has(item)) {\n            this.items.push(item);\n        }\n    }\n    has(item) {\n        return this.items.includes(item);\n    }\n    delete(item) {\n        const index = this.items.indexOf(item);\n        if (index > -1) {\n            this.items.splice(index, 1);\n            return true;\n        }\n        return false;\n    }\n    size() {\n        return this.items.length;\n    }\n    toArray() {\n        return [...this.items];\n    }\n    // Пересечение множеств\n    intersectWith(otherSet) {\n        const commonItems = [];\n        for (let i = 0; i < this.items.length; i++) {\n            const currentItem = this.items[i];\n            if (otherSet.has(currentItem)) {\n                commonItems.push(currentItem);\n            }\n        }\n        return new setLibrary(commonItems);\n    }\n    // Объединение множеств\n    unionWith(otherSet) {\n        const allItems = [...this.items];\n        const otherItems = otherSet.toArray();\n        for (let i = 0; i < otherItems.length; i++) {\n            const item = otherItems[i];\n            if (!this.has(item)) {\n                allItems.push(item);\n            }\n        }\n        return new setLibrary(allItems);\n    }\n    // Проверка подмножества\n    isSubsetOf(otherSet) {\n        for (let i = 0; i < this.items.length; i++) {\n            const item = this.items[i];\n            if (!otherSet.has(item)) {\n                return false;\n            }\n        }\n        return true;\n    }\n    // Проверка надмножества\n    isSupersetOf(otherSet) {\n        return otherSet.isSubsetOf(this);\n    }\n    // Разность множеств\n    getDifference(otherSet) {\n        const differentItems = [];\n        for (let i = 0; i < this.items.length; i++) {\n            const item = this.items[i];\n            if (!otherSet.has(item)) {\n                differentItems.push(item);\n            }\n        }\n        return new setLibrary(differentItems);\n    }\n    // Симметрическая разность\n    symmetricDifferenceWith(otherSet) {\n        const onlyInThis = this.getDifference(otherSet);\n        const onlyInOther = otherSet.getDifference(this);\n        return onlyInThis.unionWith(onlyInOther);\n    }\n}\nexports[\"default\"] = setLibrary;\n\n\n//# sourceURL=webpack://set_library_project/./set-library.ts?\n}");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./set-library-test.ts");
/******/ 	
/******/ })()
;