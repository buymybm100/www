function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["privacy-privacy-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy/privacy.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy/privacy.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPrivacyPrivacyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [defaultHref]=\"defaultHref\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>{{textTitle}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item>\n    <ion-text [innerHtml]=\"textValue\">\n    </ion-text>\n  </ion-item>\n  <ion-item>\n    <ion-text [innerHtml]=\"textDate\">\n    </ion-text>\n  </ion-item>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/privacy/privacy-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/privacy/privacy-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: PrivacyRoutingModule */

  /***/
  function srcAppPagesPrivacyPrivacyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyRoutingModule", function () {
      return PrivacyRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _privacy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./privacy.component */
    "./src/app/pages/privacy/privacy.component.ts");

    var routes = [{
      path: '',
      component: _privacy_component__WEBPACK_IMPORTED_MODULE_3__["PrivacyComponent"]
    }];

    var PrivacyRoutingModule = function PrivacyRoutingModule() {
      _classCallCheck(this, PrivacyRoutingModule);
    };

    PrivacyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PrivacyRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/privacy/privacy.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/privacy/privacy.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPrivacyPrivacyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/privacy/privacy.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/privacy/privacy.component.ts ***!
    \****************************************************/

  /*! exports provided: PrivacyComponent */

  /***/
  function srcAppPagesPrivacyPrivacyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function () {
      return PrivacyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PrivacyComponent =
    /*#__PURE__*/
    function () {
      function PrivacyComponent(route) {
        _classCallCheck(this, PrivacyComponent);

        this.route = route;
        this.defaultHref = '/app/tabs/about';
      }

      _createClass(PrivacyComponent, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var page = this.route.snapshot.paramMap.get('page');
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
      }, {
        key: "textTitle",
        set: function set(val) {
          this.title = val;
        },
        get: function get() {
          return this.title;
        }
      }, {
        key: "textValue",
        set: function set(val) {
          this.paraText = val;
        },
        get: function get() {
          return this.paraText;
        }
      }, {
        key: "textDate",
        set: function set(val) {
          this.paraDate = val;
        },
        get: function get() {
          return this.paraDate;
        }
      }, {
        key: "privacyTitle",
        get: function get() {
          return 'Privacy Notice';
        }
      }, {
        key: "privacyText",
        get: function get() {
          return "\n    In this page, we explain when and how we collect user information, including Personally Identifiable Information (defined below), how we use such information, and the circumstances under which we may disclose such information to others.\n\n  User details\n  Integritometer requires new users to sign in with a phone number.\n  We do not sell our user database to any 3rd party organisations.\n  While we access your phone contacts to allow you to send Promises and Requests to friends, we do not store a copy of your Phone book.\n\n  The Personally Identifiable Information that we use are:\n  Name\n  Profile Photo\n  Phone number\n  Obscenity\n  Integritometer has a zero tolerance to obscenity and nudity\n\n  Privacy Concerns\n  If you have any questions regarding the safety and privacy of your information stored on Integritometer, please get in touch with us using the Contact Us link.\n\n  Terms of Use\n  Please read Integritometer\u2019s Terms of Use establishing the use, disclaimers, and limitations of liability\n  governing the use of Integritometer.\n  By using Integritometer, you consent to this privacy policy.\n  Integritometer may revise this privacy policy at any time without notice.\n  Any changes will be posted on this page.\n    ";
        }
      }, {
        key: "privacyDate",
        get: function get() {
          return "\n      Last modified on 4 March 2019\n      ";
        }
      }, {
        key: "termsTitle",
        get: function get() {
          return 'Terms & Conditions';
        }
      }, {
        key: "termsText",
        get: function get() {
          return "\n    The <b>Integritometer</b> App is developed and owned by Beautiful Day to the World Ltd (BDW), a UK-registered private company. BDW is currently a non-profit organisation that offers its products for free.\n\nThis Terms of Use relates to users of the Integritometer app. By downloading and using the app, you are agreeing to our Terms of Use along with all applicable laws and regulations.\n\nIf you do not agree with any of these terms, please do not download or use the App. If you have downloaded the App, please remove it from your device immediately.\n\nUse of the Integritometer App\nPermission is granted for non-commercial, personal use of the Integritometer App. This is the permission of use, of which you may not:\n\n\u2013 modify or copy the materials in the App\n\u2013 use the App for any commercial purpose\n\u2013 attempt to decompile or reverse engineer any software contained in the App\n\u2013 create materials on the App that have any of the following qualities:\nlibelous, defamatory, pornographic, harassing, hateful, an invasion of privacy, obscene, abusive, illegal,\nracist, offensive, harmful to a minor or an infringement of any intellectual property rights\nor a trade secret of a third party\nBDW reserves the right to remove your account and content, with or without prior notice, if you are deemed to have violated our terms of use or privacy policy.\n\nCopyright and Trademarks\nIntegritometer is a registered trademark of Beautiful Day to the World Ltd\n\nDisclaimer\nBDW makes no guarantees, expressed or implied concerning\nthe accuracy, likely results or reliability of the use of the software, materials and information found\non its App or website.\n\nLimitations\nBDW is not liable for any loss or damages suffered in connection with the use of the Integritometer App.\n\nIn no event is BDW liable for any damages for loss of data, profit or business interruption arising out of the inability to use the Integritometer app. You will be solely responsible for any damages or loss to any party resulting from it.\n\nPrivacy\nPlease read our Privacy Policy about the rules and guidelines we adhere by in relation\nto users\u2019 privacy concerns.\n    ";
        }
      }, {
        key: "termsDate",
        get: function get() {
          return "\n      Last modified on 3 July 2017\n      ";
        }
      }]);

      return PrivacyComponent;
    }();

    PrivacyComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    PrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-privacy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./privacy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy/privacy.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./privacy.component.scss */
      "./src/app/pages/privacy/privacy.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], PrivacyComponent);
    /***/
  },

  /***/
  "./src/app/pages/privacy/privacy.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/privacy/privacy.module.ts ***!
    \*************************************************/

  /*! exports provided: PrivacyModule */

  /***/
  function srcAppPagesPrivacyPrivacyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyModule", function () {
      return PrivacyModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _privacy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./privacy.component */
    "./src/app/pages/privacy/privacy.component.ts");
    /* harmony import */


    var _privacy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./privacy-routing.module */
    "./src/app/pages/privacy/privacy-routing.module.ts");

    var PrivacyModule = function PrivacyModule() {
      _classCallCheck(this, PrivacyModule);
    };

    PrivacyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _privacy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrivacyRoutingModule"]],
      declarations: [_privacy_component__WEBPACK_IMPORTED_MODULE_4__["PrivacyComponent"]]
    })], PrivacyModule);
    /***/
  }
}]);
//# sourceMappingURL=privacy-privacy-module-es5.js.map