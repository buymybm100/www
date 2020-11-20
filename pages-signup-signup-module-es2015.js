(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [defaultHref]=\"defaultHref\">Cancel</ion-back-button>\n    </ion-buttons>\n    <!--\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">Cancel</ion-button>\n    </ion-buttons>\n    -->\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-chip class=\"help\" (click)=\"toggle()\">\n    <ion-label color=\"secondary\">This {{currType}} is for ...</ion-label>\n    <!--\n    <ion-label [color]=\"currType=='Promise' ? 'secondary':'warning'\">This {{currType}} is for ...</ion-label>\n    -->\n  </ion-chip>\n\n      <ion-slides #slides pager=\"true\">\n        <ion-slide  class=\"slide-background\">\n          <img src=\"assets/img/flaticons/man-5.png\" alt=\"speaker background\">\n          <h2>Jon</h2>\n        </ion-slide>\n        <ion-slide  class=\"slide-background\">\n          <img src=\"assets/img/flaticons/girl-4.png\" alt=\"speaker background\">\n          <h2>Rachel</h2>\n        </ion-slide>\n        <ion-slide  class=\"slide-background\">\n          <img src=\"assets/img/flaticons/girl-2.png\" alt=\"speaker background\">\n          <h2>Kate</h2>\n        </ion-slide>\n        <ion-slide  class=\"slide-background\">\n          <img src=\"assets/img/flaticons/boy-2.png\" alt=\"speaker background\">\n          <h2>Bob</h2>\n        </ion-slide>\n      </ion-slides>\n\n  <form #signupForm=\"ngForm\" novalidate>\n\n    <ion-list lines=\"full\" class=\"ion-no-margin\">\n      <ion-item lines=\"none\">\n        <ion-label position=\"floating\">Describe the {{currType}}...</ion-label>\n        <ion-textarea [(ngModel)]=\"signup.desc\" name=\"desc\" #desc=\"ngModel\" required></ion-textarea>\n      </ion-item>\n      <ion-text color=\"danger\">\n         <p [hidden]=\"desc.valid || submitted == false\" class=\"ion-padding-start\">\n           What's the {{currType}} ?\n         </p>\n       </ion-text>\n\n       <ion-item  lines=\"none\">\n         <ion-label position=\"floating\">By When</ion-label>\n         <ion-datetime displayFormat=\"DDDD MMM D, YYYY\"\n              [(ngModel)]=\"signup.bywhen\" name=\"bywhen\" #bywhen=\"ngModel\" required\n              min=\"2020\" max=\"2050\" value=\"2020-12-25\"></ion-datetime>\n\n       </ion-item>\n         <ion-text color=\"danger\">\n          <p [hidden]=\"bywhen.valid || submitted == false\" class=\"ion-padding-start\">\n            A deadline is required\n          </p>\n        </ion-text>\n<!--\n        <ion-item>\n          <ion-label>DDDD MMM D, YYYY</ion-label>\n          <ion-datetime displayFormat=\"DDDD MMM D, YYYY\" min=\"2005\" max=\"2016\" value=\"2008-09-02\"></ion-datetime>\n        </ion-item>\n        -->\n\n     </ion-list>\n\n    <div class=\"ion-padding\">\n      <ion-button (click)=\"onSignup(signupForm)\" type=\"submit\" expand=\"block\">Create</ion-button>\n    </div>\n  </form>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/signup/signup-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup */ "./src/app/pages/signup/signup.ts");




const routes = [
    {
        path: '',
        component: _signup__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignUpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpModule", function() { return SignUpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup */ "./src/app/pages/signup/signup.ts");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/signup/signup-routing.module.ts");







let SignUpModule = class SignUpModule {
};
SignUpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignupPageRoutingModule"]
        ],
        declarations: [
            _signup__WEBPACK_IMPORTED_MODULE_5__["SignupPage"],
        ]
    })
], SignUpModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.scss":
/*!******************************************!*\
  !*** ./src/app/pages/signup/signup.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".help {\n  position: absolute;\n  top: 40px;\n  left: 12px;\n  color: white;\n  font-size: 30px;\n  z-index: 10;\n}\n\nion-slides {\n  --bullet-background: red;\n  --bullet-background-active: var(--ion-color-dark);\n}\n\n.slide-background {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  padding-top: var(--ion-safe-area-top);\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: calc(250px + var(--ion-safe-area-top));\n  background: center/cover url(/assets/img/speaker-background.png) no-repeat;\n}\n\n.slide-background.green {\n  background: center/cover url(/assets/img/speaker-background-green.png) no-repeat;\n}\n\n.slide-background img {\n  border-radius: 50%;\n  width: 50px;\n  margin-top: calc(-1 * var(--ion-safe-area-top));\n}\n\n.slide-background h2 {\n  position: absolute;\n  bottom: 20px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2xlb25nL2Rldi90ZXN0L2lvbmljL3NyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDSSx3QkFBQTtFQUNBLGlEQUFBO0FDQ0o7O0FERUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUVBLHFDQUFBO0VBRUEseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFFQSw4Q0FBQTtFQUNBLDBFQUFBO0FDRkY7O0FESUU7RUFDRSxnRkFBQTtBQ0ZKOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsK0NBQUE7QUNIRjs7QURPQTtFQUNFLGtCQUFBO0VBRUEsWUFBQTtFQUVBLFlBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWxwe1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOjQwcHg7XG4gIGxlZnQ6MTJweDtcbiAgY29sb3I6d2hpdGU7XG4gIGZvbnQtc2l6ZTozMHB4O1xuICB6LWluZGV4OjEwO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiByZWQ7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1kYXJrKTs7XG59XG5cbi5zbGlkZS1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCk7XG5cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgaGVpZ2h0OiBjYWxjKDI1MHB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApKTtcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgdXJsKC9hc3NldHMvaW1nL3NwZWFrZXItYmFja2dyb3VuZC5wbmcpIG5vLXJlcGVhdDtcblxuICAmLmdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciB1cmwoL2Fzc2V0cy9pbWcvc3BlYWtlci1iYWNrZ3JvdW5kLWdyZWVuLnBuZykgbm8tcmVwZWF0O1xuICB9XG59XG5cbi5zbGlkZS1iYWNrZ3JvdW5kIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbi10b3A6IGNhbGMoLTEgKiB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCkpO1xufVxuXG5cbi5zbGlkZS1iYWNrZ3JvdW5kIGgyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGJvdHRvbTogMjBweDtcblxuICBjb2xvcjogd2hpdGU7XG59XG4iLCIuaGVscCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MHB4O1xuICBsZWZ0OiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgei1pbmRleDogMTA7XG59XG5cbmlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiByZWQ7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5zbGlkZS1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBjYWxjKDI1MHB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApKTtcbiAgYmFja2dyb3VuZDogY2VudGVyL2NvdmVyIHVybCgvYXNzZXRzL2ltZy9zcGVha2VyLWJhY2tncm91bmQucG5nKSBuby1yZXBlYXQ7XG59XG4uc2xpZGUtYmFja2dyb3VuZC5ncmVlbiB7XG4gIGJhY2tncm91bmQ6IGNlbnRlci9jb3ZlciB1cmwoL2Fzc2V0cy9pbWcvc3BlYWtlci1iYWNrZ3JvdW5kLWdyZWVuLnBuZykgbm8tcmVwZWF0O1xufVxuXG4uc2xpZGUtYmFja2dyb3VuZCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApKTtcbn1cblxuLnNsaWRlLWJhY2tncm91bmQgaDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/signup/signup.ts":
/*!****************************************!*\
  !*** ./src/app/pages/signup/signup.ts ***!
  \****************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");





let SignupPage = class SignupPage {
    constructor(route, router, userData) {
        this.route = route;
        this.router = router;
        this.userData = userData;
        this.signup = { username: '', password: '' };
        this.task = { desc: '', bywhen: '' };
        this.submitted = false;
        this.defaultHref = '/app/tabs/schedule';
        this.currType = 'Promise';
    }
    ionViewWillEnter() {
        this.tasktype = this.route.snapshot.paramMap.get('tasktype');
        console.log("tasktype=" + this.tasktype);
    }
    onSignup(form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.signup(this.signup.username);
            this.router.navigateByUrl('/app/tabs/schedule');
        }
    }
    toggle() {
        if (this.currType === 'Promise') {
            this.currType = 'Request';
        }
        else {
            this.currType = 'Promise';
        }
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.scss */ "./src/app/pages/signup/signup.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module-es2015.js.map