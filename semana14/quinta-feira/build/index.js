"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews/";
axios_1.default.get(`${baseUrl}subscribers/all`)
    .then(res => {
    console.log(res.data);
});
//# sourceMappingURL=index.js.map