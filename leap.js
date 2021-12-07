//  classes and objects
var Leapyear = /** @class */ (function () {
    //constructor
    function Leapyear(year) {
        this.year = year;
    }
    Leapyear.prototype.display = function () {
        return this.year % 100 === 0 ? this.year % 400 === 0 : this.year % 4 === 0;
    };
    return Leapyear;
}()); // end
var z = new Leapyear(2020);
console.log(z.display());
