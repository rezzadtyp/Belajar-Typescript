// Food ordering queue

export class Queue {
  public orders: string[];

  public constructor() {
    this.orders = [];
  }

  public showOrder() {
    console.log("Queue ", this.orders);
  }

  public randomSec() {
    return Math.floor(Math.random() * 10) + 1;
  }

  public addOrder(order: string): void {
    this.orders.push(order);
    console.log(`${order} added to queue`);
  }

  promise(data: string, sec: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve(`${data} Done in ${sec} seconds`);
      }, sec * 1000);
    });
  }

  public async processOrders(): Promise<void> {
    while (this.orders.length > 0) {
      const result: string = await this.promise(
        this.orders[0],
        this.randomSec()
      );
      this.orders.shift();
      console.log(result);
    }

    this.showOrder();
  }
}

