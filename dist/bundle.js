/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Car.ts":
/*!****************!*\
  !*** ./Car.ts ***!
  \****************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Car = void 0;
class Car {
    constructor(brand, model, year, color, driveType, fuelSystem) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.driveType = driveType;
        this.fuelSystem = fuelSystem;
    }
    getColor() {
        return this.color;
    }
    changeColor(newColor) {
        this.color = newColor;
        console.log(`Цвет авто изменен на ${this.color}`);
    }
    getDriveType() {
        return this.driveType;
    }
    getFuelSystem() {
        return this.fuelSystem;
    }
}
exports.Car = Car;


/***/ }),

/***/ "./car_toyota.ts":
/*!***********************!*\
  !*** ./car_toyota.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Toyota = void 0;
const Car_1 = __webpack_require__(/*! ./Car */ "./Car.ts");
class Toyota extends Car_1.Car {
    constructor(model, year, color, driveType, fuelSystem) {
        super('Toyota', model, year, color, driveType || 'Передний', fuelSystem || 'Бензин');
    }
    displayInfo() {
        console.log(`Описание авто: \nМарка: ${this.brand}\nМодель: ${this.model}\nГод выпуска: ${this.year}\nЦвет: ${this.getColor()}\nПривод: ${this.getDriveType()}\nТопливная система: ${this.getFuelSystem()}`);
    }
}
exports.Toyota = Toyota;


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const car_toyota_1 = __webpack_require__(/*! ./car_toyota */ "./car_toyota.ts");
const myToyota = new car_toyota_1.Toyota('Prado', 2024, 'Черный', 'Полный');
myToyota.displayInfo();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map