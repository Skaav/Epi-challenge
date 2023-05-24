var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LavoratoreAutonomo = /** @class */ (function () {
    function LavoratoreAutonomo(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    LavoratoreAutonomo.prototype.getRedditoAnnuoNetto = function () {
        var tasseTotali = this.getUtileTasse();
        var redditoAnnuoNetto = this.redditoannuolordo - tasseTotali;
        return redditoAnnuoNetto;
    };
    return LavoratoreAutonomo;
}());
var LavoratoreAutonomo1 = /** @class */ (function (_super) {
    __extends(LavoratoreAutonomo1, _super);
    function LavoratoreAutonomo1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LavoratoreAutonomo1.prototype.getUtileTasse = function () {
        return this.tasseinps + this.tasseirpef;
    };
    LavoratoreAutonomo1.prototype.getTasseInps = function () {
        return this.tasseinps;
    };
    LavoratoreAutonomo1.prototype.getTasseIrpef = function () {
        return this.tasseirpef;
    };
    return LavoratoreAutonomo1;
}(LavoratoreAutonomo));
var LavoratoreAutonomo2 = /** @class */ (function (_super) {
    __extends(LavoratoreAutonomo2, _super);
    function LavoratoreAutonomo2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LavoratoreAutonomo2.prototype.getUtileTasse = function () {
        // Implementazione specifica per il lavoratore autonomo 2
        // Calcolo delle tasse in base a una formula personalizzata
        return this.redditoannuolordo * 0.3;
    };
    LavoratoreAutonomo2.prototype.getTasseInps = function () {
        return this.tasseinps;
    };
    LavoratoreAutonomo2.prototype.getTasseIrpef = function () {
        return this.redditoannuolordo * 0.1;
    };
    return LavoratoreAutonomo2;
}(LavoratoreAutonomo));
// Utilizzo del programma
// Creazione di un lavoratore autonomo di tipo 1
var lavoratore1 = new LavoratoreAutonomo1(1, 50000, 2000, 5000);
console.log("Reddito annuo netto lavoratore 1:", lavoratore1.getRedditoAnnuoNetto());
// Creazione di un lavoratore autonomo di tipo 2
var lavoratore2 = new LavoratoreAutonomo2(2, 75000, 3000, 0);
console.log("Reddito annuo netto lavoratore 2:", lavoratore2.getRedditoAnnuoNetto());
