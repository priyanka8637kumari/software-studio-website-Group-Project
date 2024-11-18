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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar contactPage = function contactPage() {\n  var contact = document.createElement(\"div\");\n  contact.classList.add(\"contact\");\n\n  /* Write your code below, inside `` */\n  contact.innerHTML = \"\\n           <div class=\\\"row\\\">\\n          <h2>CONTACT</h2>\\n          \\n          <p>me@gmail.com</p>\\n         \\n          <div class=\\\"social\\\">\\n            <a href=\\\"\\\" target=\\\"_blank\\\" alt=\\\"CodePen profile\\\"><span class=\\\"fa fa-codepen\\\" aria-hidden=\\\"true\\\"></span></a>\\n            <a href=\\\"\\\" target=\\\"_blank\\\" alt=\\\"LinkedIn profile\\\"><span class=\\\"fa fa-linkedin\\\" aria-hidden=\\\"true\\\"></i></a>\\n            <a href=\\\"\\\" target=\\\"_blank\\\" alt=\\\"GitHub profile\\\"><span class=\\\"fa fa-github\\\" aria-hidden=\\\"true\\\"></span></a>\\n          </div>\\n          <p id=\\\"copyright\\\">all rights reserved</p>\\n        </div>\\n        \";\n  return contact;\n};\nvar loadContact = function loadContact() {\n  var content = document.getElementById(\"content\");\n  content.classList.add(\"content--inner-page\");\n  content.textContent = \"\";\n  return content.appendChild(contactPage());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://webpack-final-project/./src/contact.js?");

/***/ }),

/***/ "./src/counter-stats.js":
/*!******************************!*\
  !*** ./src/counter-stats.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar counterStatsPage = function counterStatsPage() {\n  var counterStats = document.createElement('div');\n  counterStats.classList.add('counterStats');\n\n  /* Write your code below, inside `` */\n  counterStats.innerHTML = \"\\n<div class=\\\"container-fluid counterStats-ct\\\">\\n<h2>counterStats</h2>\\n      \\n</div>\\n\\n    \\n    \";\n  return counterStats;\n};\nvar loadCounterStats = function loadCounterStats() {\n  var content = document.getElementById('content');\n  content.classList.add('content--inner-page');\n  content.textContent = '';\n  return content.appendChild(counterStatsPage());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadCounterStats);\n\n//# sourceURL=webpack://webpack-final-project/./src/counter-stats.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar homePage = function homePage() {\n  var home = document.createElement('div');\n  home.classList.add('home-text');\n  home.innerHTML = \"  <div class=\\\"intro-body\\\">\\n        <div class=\\\"container\\\">\\n          <div class=\\\"row\\\">\\n            <div class=\\\"col-md-8 col-md-offset-2\\\">\\n              <div class=\\\"brand-heading\\\">\\n                <span class=\\\"txt-rotate\\\" data-period=\\\"100\\\" data-rotate='[ \\\"\\u0633\\u0644\\u0627\\u0645,\\\", \\\"Salut,\\\", \\\"Hola,\\\", \\\"Hej,\\\", \\\"\\u0928\\u092E\\u0938\\u094D\\u0924\\u0947,\\\" ]'></span>\\n              </div>\\n              <p class=\\\"intro-text\\\">we are Raana, Priyanka, Sergio and Profira,\\n             <span class=\\\"intro-text-hgl\\\"> front-end developers</span>\\n              based in beautiful Sweden.</p>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n        \";\n  return home;\n};\nvar loadHome = function loadHome() {\n  var content = document.getElementById('content');\n  content.textContent = '';\n  content.classList.remove('content--inner-page');\n  return content.appendChild(homePage());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://webpack-final-project/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://webpack-final-project/./src/index.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ \"./src/services.js\");\n/* harmony import */ var _counter_stats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter-stats */ \"./src/counter-stats.js\");\n/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team */ \"./src/team.js\");\n/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preloader */ \"./src/preloader.js\");\n/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio */ \"./src/portfolio.js\");\n\n\n\n\n\n\n\nvar pageLoad = function pageLoad() {\n  var navLinks = document.querySelectorAll('.main-nav__link');\n  navLinks.forEach(function (link) {\n    link.addEventListener('click', function () {\n      navLinks.forEach(function (link) {\n        link.classList.remove('active');\n      });\n      var linkId = link.getAttribute('id');\n      link.classList.add('active');\n      var content = document.querySelector('#content');\n      content.innerHTML = '';\n      if (linkId === 'home' || linkId === 'logo') (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();else if (linkId === 'preload') (0,_preloader__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();else if (linkId === 'contact') (0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();else if (linkId === 'portfolio') (0,_portfolio__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();else if (linkId === 'services') (0,_services__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();else if (linkId === 'counterStats') (0,_counter_stats__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();else if (linkId === 'team') (0,_team__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    });\n  });\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://webpack-final-project/./src/pageLoad.js?");

/***/ }),

/***/ "./src/portfolio.js":
/*!**************************!*\
  !*** ./src/portfolio.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar portfolioPage = function portfolioPage() {\n  var portfolio = document.createElement('div');\n  portfolio.classList.add('portfolio');\n\n  /* Write your code below, inside `` */\n  portfolio.innerHTML = \"\\n<div class=\\\"container-fluid portfolio-ct\\\">\\n<h2>PORTFOLIO</h2>\\n        <div class=\\\"row\\\">\\n          <div class=\\\"col-sm-6 col-md-4 grid-portfolio\\\">\\n            <div class=\\\"card\\\" style=\\\"width: 18rem;\\\">\\n              <img src=\\\"...\\\" class=\\\"card-img-top\\\" alt=\\\"...\\\">\\n              <div class=\\\"card-body\\\">\\n                <h5 class=\\\"card-title\\\">Card title</h5>\\n                <p class=\\\"card-text\\\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\\n                <a href=\\\"#\\\" class=\\\"btn btn-primary\\\">Go somewhere</a>\\n              </div>\\n            </div>\\n          </div>\\n\\n</div>\\n\\n    \\n    \";\n  return portfolio;\n};\nvar loadPortfolio = function loadPortfolio() {\n  var content = document.getElementById('content');\n  content.classList.add('content--inner-page');\n  content.textContent = '';\n  return content.appendChild(portfolioPage());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPortfolio);\n\n//# sourceURL=webpack://webpack-final-project/./src/portfolio.js?");

/***/ }),

/***/ "./src/preloader.js":
/*!**************************!*\
  !*** ./src/preloader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar preloaderPage = function preloaderPage() {\n  var preloader = document.createElement(\"div\");\n  preloader.classList.add(\"preloader\");\n\n  /* Write your code below, inside `` */\n  preloader.innerHTML = \"\\n           <div id=\\\"status\\\">\\xA0</div>\\n        \";\n  return preloader;\n};\nvar loadPreloader = function loadPreloader() {\n  var content = document.getElementById(\"content\");\n  content.classList.add(\"content--inner-page\");\n  content.textContent = \"\";\n  return content.appendChild(preloaderPage());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPreloader);\n\n//# sourceURL=webpack://webpack-final-project/./src/preloader.js?");

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar servicesPage = function servicesPage() {\n  var services = document.createElement(\"div\");\n  services.classList.add(\"services\");\n\n  /* Write your code below, inside `` */\n  services.innerHTML = \"\\n           <div class=\\\"container\\\">\\n        <h2>SERVICES</h2>\\n        <div class=\\\"row\\\">\\n          <div class=\\\"ct-services\\\">\\n            <div class=\\\"col-md-4 services-item\\\">\\n              <div class=\\\"rotate\\\">\\n                <span class=\\\"fa fa-code\\\" aria-hidden=\\\"true\\\"></span>\\n              </div>\\n              <h3>Front End Development</h3>\\n              <p>Development of responsive websites, cross-browser and cross-platform testing.</p>\\n            </div>\\n            <div class=\\\"col-md-4 services-item\\\">\\n              <div class=\\\"rotate\\\">\\n                <span class=\\\"fa fa-wordpress fa-wrapper\\\" aria-hidden=\\\"true\\\"></span>\\n              </div>\\n              <h3>Wordpress Development</h3>\\n              <p>Custom development (website, theme & plugin), hosting and maintenance.</p>\\n            </div>\\n            <div class=\\\"col-md-4 services-item\\\">\\n              <div class=\\\"rotate\\\">\\n                <span class=\\\"fa fa-line-chart\\\" aria-hidden=\\\"true\\\"></span>\\n              </div>\\n              <h3>Search Engine Optimization</h3>\\n              <p>Increase your visibility across all major search engines & local search with SEO techniques.</p>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n        \";\n  return services;\n};\nvar loadServices = function loadServices() {\n  var content = document.getElementById(\"content\");\n  content.classList.add(\"content--inner-page\");\n  content.textContent = \"\";\n  return content.appendChild(servicesPage());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadServices);\n\n//# sourceURL=webpack://webpack-final-project/./src/services.js?");

/***/ }),

/***/ "./src/team.js":
/*!*********************!*\
  !*** ./src/team.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar teamPage = function teamPage() {\n  var team = document.createElement('div');\n  team.classList.add('team');\n\n  /* Write your code below, inside `` */\n  team.innerHTML = \"\\n<div class=\\\"container-fluid team-ct\\\">\\n<h2>team</h2>\\n      \\n</div>\\n\\n    \\n    \";\n  return team;\n};\nvar loadTeam = function loadTeam() {\n  var content = document.getElementById('content');\n  content.classList.add('content--inner-page');\n  content.textContent = '';\n  return content.appendChild(teamPage());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadTeam);\n\n//# sourceURL=webpack://webpack-final-project/./src/team.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;







/* PERSONALIZED CODE */

/* PRELOADER */

jQuery.noConflict();
(function($) {
	$(window).on('load', function() { 
		$('#status').fadeOut(); 
		$('#preloader').delay(200).fadeOut('slow'); 
	});
})(jQuery);


jQuery.noConflict();
(function($) {
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 50) { 
			$('#return-to-top').fadeIn(200); 
		} else {
			$('#return-to-top').fadeOut(200); 
		}
	});
	$('#return-to-top').click(function() { 
		$('body,html').animate({
			scrollTop: 0 
		}, 500);
	});
})(jQuery);


jQuery.noConflict();
(function($) {
	$(function() {
		$('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
})(jQuery);

// typer for hello
window.onload = function() {
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-rotate');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtRotate(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".txt-rotate > .wrap { border-right: 10px solid #40E0D0 }";
	document.body.appendChild(css);
};

var TxtRotate = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 1) || 1000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) {
		delta /= 2;
	}

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 200;
	}

	setTimeout(function() {
		that.tick();
	}, delta);
};

// number count for stats
jQuery.noConflict();
(function($) {
	$('.counter').each(function() {
		var $this = $(this),
			countTo = $this.attr('data-count');

		$({
			countNum: $this.text()
		}).animate({
				countNum: countTo
			},

			{
				duration: 3000,
				easing: 'linear',
				step: function() {
					$this.text(Math.floor(this.countNum));
				},
				complete: function() {
					$this.text(this.countNum);
				}
			});
	});
})(jQuery);

//footer + copyright year
var today = new Date();
var year = today.getFullYear();

var copyright = document.getElementById("copyright");
copyright.innerHTML = '© Your Name '+ year;