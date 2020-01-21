var MySharedClass = /** @class */ (function () {
    function MySharedClass() {
    }
    MySharedClass.prototype.getRandomNumber = function () {
        return Math.round(Math.random() * 10);
    };
    return MySharedClass;
}());

var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.add2 = function (x) {
        var randomNumber = new MySharedClass();
        return x + randomNumber.getRandomNumber() + 2;
    };
    return MyClass;
}());

export { MyClass };
