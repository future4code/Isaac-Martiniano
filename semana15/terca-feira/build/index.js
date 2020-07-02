"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Customer_1 = require("./Customer");
const userInstance = new User_1.User('2', 'isaac@isaac', 'isaac', '123456');
console.log(userInstance);
console.log('UserId: ', userInstance.getId());
console.log('UserName: ', userInstance.getName());
console.log('UserEmail: ', userInstance.getEmail());
const customerInstance = new Customer_1.Customer('3', 'augusto@isaac', 'augusto', '789101', '13348983498');
console.log(customerInstance);
//# sourceMappingURL=index.js.map