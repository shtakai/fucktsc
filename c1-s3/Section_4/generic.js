var Set = /** @class */ (function () {
    function Set() {
        var _this = this;
        this.data = [];
        this.add = function (item) {
            if (_this.data.indexOf(item) < 0) {
                _this.data.push(item);
            }
        };
        this.all = this.data;
    }
    return Set;
}());
var addsSeenByUser = new Set();
addsSeenByUser.add(0);
addsSeenByUser.add(1);
addsSeenByUser.add(1);
// addsSeenByUser.add("1"); // ERROR : cannot push a string. Only numbers allowed
console.log(addsSeenByUser.all);
var addsTextsSeenByUser = new Set();
addsTextsSeenByUser.add("super ad 1");
addsTextsSeenByUser.add("super ad 2");
addsTextsSeenByUser.add("super ad 2");
console.log(addsTextsSeenByUser.all);
//# sourceMappingURL=generic.js.map