/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/toggleSubscriptionDuration.js":
/*!******************************************************!*\
  !*** ./src/js/modules/toggleSubscriptionDuration.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const toggleSubscriptionDuration = (triggerSelector, monthlyPriceSelector, yearlyPriceSelector) => {
  const trigger = document.querySelector(triggerSelector),
        monthlyPrice = document.querySelectorAll(monthlyPriceSelector),
        yearlyPrice = document.querySelectorAll(yearlyPriceSelector);
  trigger.addEventListener('click', event => {
    const monthlyBtn = document.querySelector('.content__button-monthly'),
          yearlyBtn = document.querySelector('.content__button-yearly');

    if (event.target.classList.contains('content__button-monthly')) {
      if (event.target.classList.contains('content__button-active')) {
        monthlyBtn.classList.add('fadeOutRight');
        yearlyBtn.classList.add('fadeInLeft');
        setTimeout(() => {
          monthlyBtn.classList.remove('fadeOutRight');
          yearlyBtn.classList.remove('fadeInLeft');
        }, 1000);
        monthlyPrice.forEach(el => {
          el.classList.add('fadeOut');
          el.style.display = 'none';
          setTimeout(() => {
            el.classList.remove('fadeOut');
          }, 500);
        });
        yearlyPrice.forEach(el => {
          el.classList.add('fadeIn');
          el.style.display = 'block';
          setTimeout(() => {
            el.classList.remove('fadeIn');
          }, 500);
        });
      } else {
        monthlyBtn.classList.add('fadeInRight');
        yearlyBtn.classList.add('fadeOutLeft');
        setTimeout(() => {
          monthlyBtn.classList.remove('fadeInRight');
          yearlyBtn.classList.remove('fadeOutLeft');
        }, 1000);
        monthlyPrice.forEach(el => {
          el.classList.add('fadeIn');
          el.style.display = 'block';
          setTimeout(() => {
            el.classList.remove('fadeIn');
          }, 500);
        });
        yearlyPrice.forEach(el => {
          el.classList.add('fadeOut');
          el.style.display = 'none';
          setTimeout(() => {
            el.classList.remove('fadeOut');
          }, 500);
        });
      }

      monthlyBtn.classList.toggle('content__button-active');
      yearlyBtn.classList.toggle('content__button-active');
    }

    if (event.target.classList.contains('content__button-yearly')) {
      if (event.target.classList.contains('content__button-active')) {
        yearlyBtn.classList.add('fadeOutLeft');
        monthlyBtn.classList.add('fadeInRight');
        setTimeout(() => {
          yearlyBtn.classList.remove('fadeOutLeft');
          monthlyBtn.classList.remove('fadeInRight');
        }, 1000);
        monthlyPrice.forEach(el => {
          el.classList.add('fadeIn');
          el.style.display = 'block';
          setTimeout(() => {
            el.classList.remove('fadeIn');
          }, 500);
        });
        yearlyPrice.forEach(el => {
          el.classList.add('fadeOut');
          el.style.display = 'none';
          setTimeout(() => {
            el.classList.remove('fadeOut');
          }, 500);
        });
      } else {
        yearlyBtn.classList.add('fadeInLeft');
        monthlyBtn.classList.add('fadeOutRight');
        setTimeout(() => {
          yearlyBtn.classList.remove('fadeInLeft');
          monthlyBtn.classList.remove('fadeOutRight');
        }, 1000);
        monthlyPrice.forEach(el => {
          el.classList.add('fadeOut');
          el.style.display = 'none';
          setTimeout(() => {
            el.classList.remove('fadeOut');
          }, 500);
        });
        yearlyPrice.forEach(el => {
          el.classList.add('fadeIn');
          el.style.display = 'block';
          setTimeout(() => {
            el.classList.remove('fadeIn');
          }, 500);
        });
      }

      monthlyBtn.classList.toggle('content__button-active');
      yearlyBtn.classList.toggle('content__button-active');
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (toggleSubscriptionDuration);

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_toggleSubscriptionDuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toggleSubscriptionDuration */ "./src/js/modules/toggleSubscriptionDuration.js");

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_toggleSubscriptionDuration__WEBPACK_IMPORTED_MODULE_0__["default"])('.content__toggle', '.monthly', '.yearly');
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map