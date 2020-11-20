(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["privacy-privacy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy/privacy.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy/privacy.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [defaultHref]=\"defaultHref\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>{{textTitle}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item>\n    <ion-text [innerHtml]=\"textValue\">\n    </ion-text>\n  </ion-item>\n  <ion-item>\n    <ion-text [innerHtml]=\"textDate\">\n    </ion-text>\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/privacy/privacy-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/privacy/privacy-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PrivacyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyRoutingModule", function() { return PrivacyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _privacy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privacy.component */ "./src/app/pages/privacy/privacy.component.ts");




const routes = [
    {
        path: '',
        component: _privacy_component__WEBPACK_IMPORTED_MODULE_3__["PrivacyComponent"]
    }
];
let PrivacyRoutingModule = class PrivacyRoutingModule {
};
PrivacyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PrivacyRoutingModule);



/***/ }),

/***/ "./src/app/pages/privacy/privacy.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/privacy/privacy.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/privacy/privacy.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/privacy/privacy.component.ts ***!
  \****************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PrivacyComponent = class PrivacyComponent {
    constructor(route) {
        this.route = route;
        this.defaultHref = '/app/tabs/about';
    }
    ionViewWillEnter() {
        const page = this.route.snapshot.paramMap.get('page');
        console.log("Page=" + page);
        if (page == 'privacy') {
            this.textTitle = this.privacyTitle;
            this.textValue = this.privacyText;
            this.textDate = this.privacyDate;
        }
        if (page == 'terms') {
            this.textTitle = this.termsTitle;
            this.textValue = this.termsText;
            this.textDate = this.termsDate;
        }
    }
    set textTitle(val) {
        this.title = val;
    }
    set textValue(val) {
        this.paraText = val;
    }
    set textDate(val) {
        this.paraDate = val;
    }
    get textTitle() {
        return this.title;
    }
    get textValue() {
        return this.paraText;
    }
    get textDate() {
        return this.paraDate;
    }
    get privacyTitle() {
        return 'Privacy Notice';
    }
    get privacyText() {
        return `
    In this page, we explain when and how we collect user information, including Personally Identifiable Information (defined below), how we use such information, and the circumstances under which we may disclose such information to others.

  User details
  Integritometer requires new users to sign in with a phone number.
  We do not sell our user database to any 3rd party organisations.
  While we access your phone contacts to allow you to send Promises and Requests to friends, we do not store a copy of your Phone book.

  The Personally Identifiable Information that we use are:
  Name
  Profile Photo
  Phone number
  Obscenity
  Integritometer has a zero tolerance to obscenity and nudity

  Privacy Concerns
  If you have any questions regarding the safety and privacy of your information stored on Integritometer, please get in touch with us using the Contact Us link.

  Terms of Use
  Please read Integritometer’s Terms of Use establishing the use, disclaimers, and limitations of liability
  governing the use of Integritometer.
  By using Integritometer, you consent to this privacy policy.
  Integritometer may revise this privacy policy at any time without notice.
  Any changes will be posted on this page.
    `;
    }
    get privacyDate() {
        return `
      Last modified on 4 March 2019
      `;
    }
    get termsTitle() {
        return 'Terms & Conditions';
    }
    get termsText() {
        return `
    The <b>Integritometer</b> App is developed and owned by Beautiful Day to the World Ltd (BDW), a UK-registered private company. BDW is currently a non-profit organisation that offers its products for free.

This Terms of Use relates to users of the Integritometer app. By downloading and using the app, you are agreeing to our Terms of Use along with all applicable laws and regulations.

If you do not agree with any of these terms, please do not download or use the App. If you have downloaded the App, please remove it from your device immediately.

Use of the Integritometer App
Permission is granted for non-commercial, personal use of the Integritometer App. This is the permission of use, of which you may not:

– modify or copy the materials in the App
– use the App for any commercial purpose
– attempt to decompile or reverse engineer any software contained in the App
– create materials on the App that have any of the following qualities:
libelous, defamatory, pornographic, harassing, hateful, an invasion of privacy, obscene, abusive, illegal,
racist, offensive, harmful to a minor or an infringement of any intellectual property rights
or a trade secret of a third party
BDW reserves the right to remove your account and content, with or without prior notice, if you are deemed to have violated our terms of use or privacy policy.

Copyright and Trademarks
Integritometer is a registered trademark of Beautiful Day to the World Ltd

Disclaimer
BDW makes no guarantees, expressed or implied concerning
the accuracy, likely results or reliability of the use of the software, materials and information found
on its App or website.

Limitations
BDW is not liable for any loss or damages suffered in connection with the use of the Integritometer App.

In no event is BDW liable for any damages for loss of data, profit or business interruption arising out of the inability to use the Integritometer app. You will be solely responsible for any damages or loss to any party resulting from it.

Privacy
Please read our Privacy Policy about the rules and guidelines we adhere by in relation
to users’ privacy concerns.
    `;
    }
    get termsDate() {
        return `
      Last modified on 3 July 2017
      `;
    }
};
PrivacyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
PrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-privacy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./privacy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy/privacy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./privacy.component.scss */ "./src/app/pages/privacy/privacy.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], PrivacyComponent);



/***/ }),

/***/ "./src/app/pages/privacy/privacy.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/privacy/privacy.module.ts ***!
  \*************************************************/
/*! exports provided: PrivacyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyModule", function() { return PrivacyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _privacy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./privacy.component */ "./src/app/pages/privacy/privacy.component.ts");
/* harmony import */ var _privacy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./privacy-routing.module */ "./src/app/pages/privacy/privacy-routing.module.ts");






let PrivacyModule = class PrivacyModule {
};
PrivacyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _privacy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrivacyRoutingModule"]
        ],
        declarations: [
            _privacy_component__WEBPACK_IMPORTED_MODULE_4__["PrivacyComponent"],
        ]
    })
], PrivacyModule);



/***/ })

}]);
//# sourceMappingURL=privacy-privacy-module-es2015.js.map