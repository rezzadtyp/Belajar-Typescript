import { Queue } from "./day13";

const queue = new Queue();

queue.addOrder("cimol");
queue.addOrder("cihuy");
queue.addOrder("cimol");
queue.addOrder("cihuy");

queue.showOrder();

queue.processOrders();