"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesional = void 0;
var Profesional = /** @class */ (function () {
    function Profesional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Profesional.prototype.showAll = function () {
        console.log(this.name + "\n" + this.age + "\n" + this.weight + "\n" + this.height + "\n" + this.isRetired + "\n" + this.nationality + "\n" + this.oscarsNumber + "\n" + this.profession);
    };
    return Profesional;
}());
exports.Profesional = Profesional;
