"use strict";
// Food ordering queue
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor() {
        this.orders = [];
    }
    showOrder() {
        console.log("Queue ", this.orders);
    }
    randomSec() {
        return Math.floor(Math.random() * 10) + 1;
    }
    addOrder(order) {
        this.orders.push(order);
        console.log(`${order} added to queue`);
    }
    promise(data, sec) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`${data} Done in ${sec} seconds`);
            }, sec * 1000);
        });
    }
    processOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            while (this.orders.length > 0) {
                const result = yield this.promise(this.orders[0], this.randomSec());
                this.orders.shift();
                console.log(result);
            }
            this.showOrder();
        });
    }
}
exports.Queue = Queue;
