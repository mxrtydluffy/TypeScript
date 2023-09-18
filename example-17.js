// Giant Robot class
// Create class
var Kaiju = /** @class */ (function () {
    function Kaiju(name, power, type) {
        this.name = name;
        this.power = power;
        this.type = type;
    }
    // method
    Kaiju.prototype.describe = function () {
        console.log("name: ".concat(this.name, " type: ").concat(this.type, " power: ").concat(this.power));
    };
    return Kaiju;
}());
// Print
var kaiju = new Kaiju("Katsuyu", 50000, "Healer");
kaiju.describe();
