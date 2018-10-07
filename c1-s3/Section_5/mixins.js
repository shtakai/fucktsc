var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
;
var B = /** @class */ (function () {
    function B() {
    }
    return B;
}());
;
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return User;
}(A));
function PayPerClickAdvertisement(Base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.cost = 150;
            return _this;
        }
        return class_1;
    }(Base));
}
// a mixin that adds a property and methods
function AdActivator(Base) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isActivated = false;
            return _this;
        }
        class_2.prototype.activate = function () {
            this.isActivated = true;
        };
        class_2.prototype.deactivate = function () {
            this.isActivated = false;
        };
        return class_2;
    }(Base));
}
////////////////////
// Usage to compose classes
////////////////////
// Simple class
var UserThatClicked = /** @class */ (function () {
    function UserThatClicked() {
        this.name = 'Johnny Wick';
    }
    return UserThatClicked;
}());
// Ad that is PayPerClickAdvertisement
var PayPerClickAd = PayPerClickAdvertisement(UserThatClicked);
// User that is PayPerClickAdvertisement and AdActivator
var ActivatedPayPerClickAd = PayPerClickAdvertisement(AdActivator(UserThatClicked));
////////////////////
// Using the composed classes
////////////////////
var payPerClickAd = new PayPerClickAd();
console.log(payPerClickAd.name);
console.log(payPerClickAd.cost);
var adToActivate = new ActivatedPayPerClickAd();
console.log(adToActivate.cost);
console.log(adToActivate.isActivated);
adToActivate.activate();
console.log(adToActivate.isActivated);
//# sourceMappingURL=mixins.js.map