"use strict";
const nome = String(process.argv[2]);
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
const resultado = (nome) => {
    switch (nome) {
        case "add":
            return (num1 + num2);
        case "sub":
            return (num1 - num2);
        case "mult":
            return (num1 * num2);
        case "div":
            return (num1 / num2);
        default:
            return (num1);
    }
};
console.log(`Resposta ${resultado(nome)}`);
//# sourceMappingURL=index.js.map