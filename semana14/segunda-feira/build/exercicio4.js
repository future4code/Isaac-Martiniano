"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsa = exports.fiesta = exports.gol = exports.uno = void 0;
var Marcas;
(function (Marcas) {
    Marcas["VOLKSWAGEN"] = "Volkswagen";
    Marcas["FIAT"] = "Fiat";
    Marcas["FORD"] = "Ford";
    Marcas["CHEVROLET"] = "chevrolet";
})(Marcas || (Marcas = {}));
exports.uno = {
    marca: Marcas.FIAT,
    capacidadeDoTanque: 40,
    temMotorFlex: false
};
exports.gol = {
    marca: Marcas.VOLKSWAGEN,
    capacidadeDoTanque: 45,
    temMotorFlex: true
};
exports.fiesta = {
    marca: Marcas.FORD,
    capacidadeDoTanque: 40,
    temMotorFlex: true
};
exports.corsa = {
    marca: Marcas.CHEVROLET,
    capacidadeDoTanque: 45,
    temMotorFlex: true
};
//# sourceMappingURL=exercicio4.js.map