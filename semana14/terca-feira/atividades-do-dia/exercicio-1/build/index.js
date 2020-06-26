"use strict";
function somar(a) {
    return a + 7;
}
const nome = String(process.argv[2]);
const age = Number(process.argv[3]);
const sevenAfterUs = Number(process.argv[3]);
const welcome = `Olá, ${nome}! Você tem ${age} anos. Em sete anos você terá ${somar(sevenAfterUs)}`;
console.log(welcome);
//# sourceMappingURL=index.js.map