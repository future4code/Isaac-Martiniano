"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Commerce_1 = require("./Commerce");
const Residence_1 = require("./Residence");
const Industry_1 = require("./Industry");
const newCommerce = new Commerce_1.Commerce(3, "43434-234");
const newResidence = new Residence_1.Residence(6, "54235-685");
const newIndustry = new Industry_1.Industry(9, "22323-232");
console.log(newCommerce);
console.log(newResidence);
console.log(newIndustry);
const client = {
    name: "Isaac",
    registrationNumber: 7,
    consumedEnergy: 77,
    calculateBill: () => {
        return 34;
    }
};
console.log(client);
//# sourceMappingURL=index.js.map