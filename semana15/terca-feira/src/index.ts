
import {User} from './User'
import {Customer} from './Customer'


const userInstance: User = new User ('2', 'isaac@isaac', 'isaac', '123456')

console.log(userInstance)

console.log('UserId: ', userInstance.getId());
console.log('UserName: ', userInstance.getName());
console.log('UserEmail: ', userInstance.getEmail());

const customerInstance: Customer = new Customer('3', 'augusto@isaac', 'augusto', '789101','13348983498')

console.log(customerInstance)





















// import { MainCourse, PORTION_SIZE } from "./MainCourse";
// import { Dessert } from "./Dessert";

// const bigMac: MainCourse = new MainCourse(20, 10, ['dois hamburgueres', 'alface', 'queijo', 'molho especial'], 10, PORTION_SIZE.BIG)

// const bigMacProfit = bigMac.getProfit()
// console.log(bigMacProfit)
// console.log(bigMac)

// const twix: Dessert = new Dessert(3, 1, ['caramenlo', 'biscoito','chocolate'], 2, 2);
// const twixprofit = twix.getProfit();
// const twixPiecePrice = twix.getPiecePrice();



