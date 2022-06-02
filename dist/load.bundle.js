"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["load"],{

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
function pageLoad () {

  var content = document.createElement('div');
  content.setAttribute('id','content');
  document.body.appendChild(content);


  var navigation = document.createElement('div');
  navigation.setAttribute('class','nav');
  var home = document.createElement('button');
  home.setAttribute('id', 'home');
  var menu = document.createElement('button');
  menu.setAttribute('id', 'menu');
  var contact = document.createElement('button');
  contact.setAttribute('id', 'contact');

  navigation.appendChild(home);
  navigation.appendChild(menu);
  navigation.appendChild(contact);

  var page = document.createElement('div');
  page.setAttribute('class', 'page');

  var image = document.createElement('img');
  var headline = document.createElement('div');
  var bio = document.createElement('div');
  var hours = document.createElement('div');
  var location = document.createElement('div');

  page.append(image, headline, bio, hours, location);

  home.innerHTML = 'Home';
  menu.innerHTML = 'Menu';
  contact.innerHTML = 'Contact';
  image.src = '../src/assets/Chick-fil-A-Logo.png';
  headline.innerHTML = 'Welcome to Chick-Fil-A';
  bio.innerHTML = 'Sample information about the restaurant';
  hours.innerHTML = 'Closed on Sunday';
  location.innerHTML = 'Vacaville, CA';

  content.appendChild(navigation);
  content.appendChild(page);
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/page-load.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlOztBQUVmO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCAoKSB7XG5cbiAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGVudCcpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5cbiAgdmFyIG5hdmlnYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2aWdhdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbmF2Jyk7XG4gIHZhciBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGhvbWUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XG4gIHZhciBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XG4gIHZhciBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XG5cbiAgbmF2aWdhdGlvbi5hcHBlbmRDaGlsZChob21lKTtcbiAgbmF2aWdhdGlvbi5hcHBlbmRDaGlsZChtZW51KTtcbiAgbmF2aWdhdGlvbi5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICB2YXIgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwYWdlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGFnZScpO1xuXG4gIHZhciBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICB2YXIgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIGJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YXIgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgcGFnZS5hcHBlbmQoaW1hZ2UsIGhlYWRsaW5lLCBiaW8sIGhvdXJzLCBsb2NhdGlvbik7XG5cbiAgaG9tZS5pbm5lckhUTUwgPSAnSG9tZSc7XG4gIG1lbnUuaW5uZXJIVE1MID0gJ01lbnUnO1xuICBjb250YWN0LmlubmVySFRNTCA9ICdDb250YWN0JztcbiAgaW1hZ2Uuc3JjID0gJy4uL3NyYy9hc3NldHMvQ2hpY2stZmlsLUEtTG9nby5wbmcnO1xuICBoZWFkbGluZS5pbm5lckhUTUwgPSAnV2VsY29tZSB0byBDaGljay1GaWwtQSc7XG4gIGJpby5pbm5lckhUTUwgPSAnU2FtcGxlIGluZm9ybWF0aW9uIGFib3V0IHRoZSByZXN0YXVyYW50JztcbiAgaG91cnMuaW5uZXJIVE1MID0gJ0Nsb3NlZCBvbiBTdW5kYXknO1xuICBsb2NhdGlvbi5pbm5lckhUTUwgPSAnVmFjYXZpbGxlLCBDQSc7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXZpZ2F0aW9uKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlKTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9