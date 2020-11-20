(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-support-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Support</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <tinder-ui [cards]=\"cards\" (choiceMade)=\"logChoice($event)\"></tinder-ui>\n</ion-content>\n\n\n<ion-footer>\n\n  <ion-toolbar>\n    <ion-button expand=\"full\" (click)=\"loadTinderCards()\">Load Tinder Cards!</ion-button>\n  </ion-toolbar>\n\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tinder-ui-component/tinder-ui.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tinder-ui-component/tinder-ui.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tinder\" [hidden]=\"!cards.length\">\n\n  <div class=\"tinder--status\">\n      <div [style.opacity]=\"crossVisible? '1':'0'\">\n          <ion-icon color=\"medium\" name=\"close-outline\"></ion-icon>\n      </div>\n\n      <div [style.opacity]=\"heartVisible? '1':'0'\">\n        <ion-label>\n          <p>\n            <ion-icon name=\"heart-outline\"></ion-icon>\n          </p>\n          <ion-note>Acknowledged</ion-note>\n        </ion-label>\n      </div>\n </div>\n\n  <div class=\"tinder--cards\" (pan)=\"handlePan($event)\" (panend)=\"handlePanEnd($event)\">\n\n      <div #tinderCard class=\"tinder--card\" (transitionend)=\"handleShift()\"\n          *ngFor=\"let card of cards; let i = index\"\n          [ngStyle]=\"{ zIndex: cards.length - i, transform: 'scale(' + (20 - i) / 20 + ') translateY(-' + 20 * i + 'px)' }\">\n\n          <img #tinderCardImage [src]=\"card.img\" (load)=\"tinderCardImage.style.opacity = 1\">\n          <h3>{{ card.title }}</h3>\n          <p>{{ card.description }}</p>\n\n      </div>\n\n  </div>\n\n\n  <div class=\"tinder--buttons\">\n\n    <ion-button fill=\"clear\" (click)=\"userClickedButton($event, false)\">\n        <ion-icon  name=\"close-outline\"></ion-icon>\n    </ion-button>\n\n    <ion-button fill=\"clear\" (click)=\"userClickedButton($event, true)\">\n        <ion-icon color=\"warning\" name=\"heart-outline\"></ion-icon>\n    </ion-button>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./src/app/pages/support/support-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/support/support-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SupportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageRoutingModule", function() { return SupportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support */ "./src/app/pages/support/support.ts");




const routes = [
    {
        path: '',
        component: _support__WEBPACK_IMPORTED_MODULE_3__["SupportPage"]
    }
];
let SupportPageRoutingModule = class SupportPageRoutingModule {
};
SupportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SupportPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/support/support.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.module.ts ***!
  \*************************************************/
/*! exports provided: SupportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportModule", function() { return SupportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./support */ "./src/app/pages/support/support.ts");
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support-routing.module */ "./src/app/pages/support/support-routing.module.ts");
/* harmony import */ var _tinder_ui_component_tinder_ui_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tinder-ui-component/tinder-ui.component */ "./src/app/pages/tinder-ui-component/tinder-ui.component.ts");








let SupportModule = class SupportModule {
};
SupportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _support_routing_module__WEBPACK_IMPORTED_MODULE_6__["SupportPageRoutingModule"]
        ],
        declarations: [
            _support__WEBPACK_IMPORTED_MODULE_5__["SupportPage"],
            _tinder_ui_component_tinder_ui_component__WEBPACK_IMPORTED_MODULE_7__["TinderUIComponent"]
        ]
    })
], SupportModule);



/***/ }),

/***/ "./src/app/pages/support/support.scss":
/*!********************************************!*\
  !*** ./src/app/pages/support/support.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1cHBvcnQvc3VwcG9ydC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/support/support.ts":
/*!******************************************!*\
  !*** ./src/app/pages/support/support.ts ***!
  \******************************************/
/*! exports provided: SupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPage", function() { return SupportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");





let SupportPage = class SupportPage {
    constructor(confData, alertCtrl, toastCtrl, route) {
        this.confData = confData;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.submitted = false;
        this.cards = [];
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /*
            const toast = await this.toastCtrl.create({
              message: 'This does not actually send a support request.',
              duration: 3000
            });
            await toast.present();
            */
        });
    }
    loadTinderCards() {
        this.confData.getSpeakers().subscribe((speakers) => {
            this.speakers = speakers;
            this.speakers.forEach((speaker) => {
                this.cards.push({
                    img: speaker.profilePic,
                    title: speaker.name,
                    description: speaker.title
                });
            });
        });
        /*
            this.cards = [
              {
                img: "https://placeimg.com/300/300/people",
                title: "Demo card 1",
                description: "This is a demo for Tinder like swipe cards"
              },
              {
                img: "https://placeimg.com/300/300/animals",
                title: "Demo card 2",
                description: "This is a demo for Tinder like swipe cards"
              },
              {
                img: "https://placeimg.com/300/300/nature",
                title: "Demo card 3",
                description: "This is a demo for Tinder like swipe cards"
              },
              {
                img: "https://placeimg.com/300/300/tech",
                title: "Demo card 4",
                description: "This is a demo for Tinder like swipe cards"
              },
              {
                img: "https://placeimg.com/300/300/arch",
                title: "Demo card 5",
                description: "This is a demo for Tinder like swipe cards"
              }
            ]
            */
    }
    ;
    logChoice($event) {
        console.log("choice made");
        console.log($event);
    }
    submit(form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.submitted = true;
            if (form.valid) {
                this.supportMessage = '';
                this.submitted = false;
                const toast = yield this.toastCtrl.create({
                    message: 'Your support request has been sent.',
                    duration: 3000
                });
                yield toast.present();
            }
        });
    }
};
SupportPage.ctorParameters = () => [
    { type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_4__["ConferenceData"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SupportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-support',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./support.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./support.scss */ "./src/app/pages/support/support.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_4__["ConferenceData"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], SupportPage);



/***/ }),

/***/ "./src/app/pages/tinder-ui-component/tinder-ui.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/tinder-ui-component/tinder-ui.component.ts ***!
  \******************************************************************/
/*! exports provided: TinderUIComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinderUIComponent", function() { return TinderUIComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


//credit: https://medium.com/better-programming/tinder-like-swiper-ui-for-angular-ionic-4-50c401d6b9fb
let TinderUIComponent = class TinderUIComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.choiceMade = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    presshere() {
        console.log("press here..");
    }
    userClickedButton(event, heart) {
        event.preventDefault();
        if (!this.cards.length)
            return false;
        if (heart) {
            this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + this.moveOutWidth + 'px, -100px) rotate(-30deg)');
            this.toggleChoiceIndicator(false, true);
            this.emitChoice(heart, this.cards[0]);
        }
        else {
            this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(-' + this.moveOutWidth + 'px, -100px) rotate(30deg)');
            this.toggleChoiceIndicator(true, false);
            this.emitChoice(heart, this.cards[0]);
        }
        ;
        this.shiftRequired = true;
        this.transitionInProgress = true;
    }
    ;
    handlePan(event) {
        console.log("handle pan");
        if (event.deltaX === 0 || (event.center.x === 0 && event.center.y === 0) || !this.cards.length)
            return;
        if (this.transitionInProgress) {
            this.handleShift();
        }
        this.renderer.addClass(this.tinderCardsArray[0].nativeElement, 'moving');
        if (event.deltaX > 0) {
            this.toggleChoiceIndicator(false, true);
        }
        if (event.deltaX < 0) {
            this.toggleChoiceIndicator(true, false);
        }
        let xMulti = event.deltaX * 0.03;
        let yMulti = event.deltaY / 80;
        let rotate = xMulti * yMulti;
        this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)');
        this.shiftRequired = true;
    }
    ;
    handlePanEnd(event) {
        console.log("handle pan end");
        this.toggleChoiceIndicator(false, false);
        if (!this.cards.length)
            return;
        this.renderer.removeClass(this.tinderCardsArray[0].nativeElement, 'moving');
        //let keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;
        let keep = Math.abs(event.deltaX) < 80;
        //console.log(`deltaX(${Math.abs(event.deltaX)}) < 80`);
        //console.log(`keep(${keep})`);
        if (keep) {
            this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', '');
            this.shiftRequired = false;
        }
        else {
            let endX = Math.max(Math.abs(event.velocityX) * this.moveOutWidth, this.moveOutWidth);
            let toX = event.deltaX > 0 ? endX : -endX;
            let endY = Math.abs(event.velocityY) * this.moveOutWidth;
            let toY = event.deltaY > 0 ? endY : -endY;
            let xMulti = event.deltaX * 0.03;
            let yMulti = event.deltaY / 80;
            let rotate = xMulti * yMulti;
            this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)');
            this.shiftRequired = true;
            this.emitChoice(!!(event.deltaX > 0), this.cards[0]);
        }
        this.transitionInProgress = true;
    }
    ;
    toggleChoiceIndicator(cross, heart) {
        this.crossVisible = cross;
        this.heartVisible = heart;
    }
    ;
    handleShift() {
        this.transitionInProgress = false;
        this.toggleChoiceIndicator(false, false);
        if (this.shiftRequired) {
            this.shiftRequired = false;
            this.cards.shift();
        }
        ;
    }
    ;
    emitChoice(heart, card) {
        this.choiceMade.emit({
            choice: heart,
            payload: card
        });
    }
    ;
    logChoice($event) {
        console.log("log choice");
        console.log($event);
    }
    ngAfterViewInit() {
        this.moveOutWidth = document.documentElement.clientWidth * 1.5;
        this.tinderCardsArray = this.tinderCards.toArray();
        this.tinderCards.changes.subscribe(() => {
            this.tinderCardsArray = this.tinderCards.toArray();
        });
    }
    ;
};
TinderUIComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cards'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], TinderUIComponent.prototype, "cards", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('tinderCard'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], TinderUIComponent.prototype, "tinderCards", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TinderUIComponent.prototype, "choiceMade", void 0);
TinderUIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tinder-ui',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tinder-ui.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tinder-ui-component/tinder-ui.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tinder-ui.scss */ "./src/app/pages/tinder-ui-component/tinder-ui.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], TinderUIComponent);



/***/ }),

/***/ "./src/app/pages/tinder-ui-component/tinder-ui.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/tinder-ui-component/tinder-ui.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tinder {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.4);\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.tinder--status {\n  position: absolute;\n  top: 30%;\n  margin-top: -30px;\n  z-index: 2;\n  width: 100%;\n  text-align: center;\n  pointer-events: none;\n}\n\n.tinder--status ion-icon {\n  font-size: 160px;\n  color: pink;\n}\n\n.tinder--cards {\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  position: fixed;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.tinder--card {\n  display: inline-block;\n  width: 260px;\n  height: 70%;\n  background: #FFFFFF;\n  padding-bottom: 40px;\n  border-radius: 8px;\n  overflow: hidden;\n  position: absolute;\n  will-change: transform;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.moving.tinder--card {\n  -webkit-transition: none;\n  transition: none;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n.tinder--status > div {\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n\n.tinder--status svg {\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  position: absolute;\n  width: 100px;\n  margin-left: -50px;\n}\n\n.tinder--card img {\n  max-width: 100%;\n  max-height: 75%;\n  pointer-events: none;\n  opacity: 0;\n  -webkit-transition: opacity 0.3s ease-in-out;\n  transition: opacity 0.3s ease-in-out;\n}\n\n.tinder--card h3 {\n  margin-top: 16px;\n  font-size: 24px;\n  padding: 0 16px;\n  pointer-events: none;\n}\n\n.tinder--card p {\n  margin-top: 24px;\n  font-size: 16px;\n  padding: 0 16px;\n  pointer-events: none;\n}\n\n.tinder--buttons {\n  position: absolute;\n  -webkit-box-flex: 0;\n          flex: 0 0 100px;\n  text-align: center;\n  bottom: 20px;\n  left: 0;\n  right: 0;\n}\n\n.tinder--buttons ion-icon {\n  font-size: 30px;\n}\n\n.tinder--buttons button {\n  border-radius: 50%;\n  line-height: 50px;\n  width: 50px;\n  height: 50px;\n  border: 0;\n  background: #FFFFFF;\n  display: inline-block;\n  padding-top: 10px;\n  margin: 0 12px;\n}\n\n.tinder--buttons button:focus {\n  outline: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2xlb25nL2Rldi90ZXN0L2lvbmljL3NyYy9hcHAvcGFnZXMvdGluZGVyLXVpLWNvbXBvbmVudC90aW5kZXItdWkuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGluZGVyLXVpLWNvbXBvbmVudC90aW5kZXItdWkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FEQUU7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUNFTjs7QURFQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7RUFDQSxvQkFBQTtFQUVBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSx3QkFBQTtFQUVBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx3Q0FBQTtFQUFBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSx3Q0FBQTtFQUFBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsNENBQUE7RUFBQSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7VUFBQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNDRjs7QURBRTtFQUNFLGVBQUE7QUNFSjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90aW5kZXItdWktY29tcG9uZW50L3RpbmRlci11aS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbmRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbi50aW5kZXItLXN0YXR1cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxNjBweDtcbiAgICAgIGNvbG9yOnBpbms7XG4gIH1cbn1cblxuLnRpbmRlci0tY2FyZHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50aW5kZXItLWNhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiA3MCU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICBjdXJzb3I6IC1tb3otZ3JhYjtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG4ubW92aW5nLnRpbmRlci0tY2FyZCB7XG4gIHRyYW5zaXRpb246IG5vbmU7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbiAgY3Vyc29yOiAtbW96LWdyYWJiaW5nO1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuXG4udGluZGVyLS1zdGF0dXMgPiBkaXYge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnRpbmRlci0tc3RhdHVzIHN2ZyB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IC01MHB4O1xufVxuXG4udGluZGVyLS1jYXJkIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogNzUlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4udGluZGVyLS1jYXJkIGgzIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4udGluZGVyLS1jYXJkIHAge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi50aW5kZXItLWJ1dHRvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZsZXg6IDAgMCAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG59XG5cbi50aW5kZXItLWJ1dHRvbnMgYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtYXJnaW46IDAgMTJweDtcbn1cblxuLnRpbmRlci0tYnV0dG9ucyBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuIiwiLnRpbmRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbi50aW5kZXItLXN0YXR1cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi50aW5kZXItLXN0YXR1cyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTYwcHg7XG4gIGNvbG9yOiBwaW5rO1xufVxuXG4udGluZGVyLS1jYXJkcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRpbmRlci0tY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI2MHB4O1xuICBoZWlnaHQ6IDcwJTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XG4gIGN1cnNvcjogLW1vei1ncmFiO1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbi5tb3ZpbmcudGluZGVyLS1jYXJkIHtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xuICBjdXJzb3I6IC1tb3otZ3JhYmJpbmc7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG59XG5cbi50aW5kZXItLXN0YXR1cyA+IGRpdiB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4udGluZGVyLS1zdGF0dXMgc3ZnIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogLTUwcHg7XG59XG5cbi50aW5kZXItLWNhcmQgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA3NSU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi50aW5kZXItLWNhcmQgaDMge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi50aW5kZXItLWNhcmQgcCB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnRpbmRlci0tYnV0dG9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmxleDogMCAwIDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4udGluZGVyLS1idXR0b25zIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4udGluZGVyLS1idXR0b25zIGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbWFyZ2luOiAwIDEycHg7XG59XG5cbi50aW5kZXItLWJ1dHRvbnMgYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-support-support-module-es2015.js.map