const length: number = 5;
const width: number = 3;

const area: number = length * width;
console.log(area);

//

const perimeter: number = length * 2 + width * 2;
console.log(perimeter);

//

const radius: number = 5;
const circleDiameter: number = 2 * radius;
console.log(circleDiameter);

const circumference: number = 22 / 7 * circleDiameter;
console.log(Math.floor(circumference));

const circleArea: number = 22 / 7 * 5 * 5;
console.log(Math.floor(circleArea));

//

const angle1: number = 80;
const angle2: number = 65;

const angle3: number = 180 - (angle1 + angle2);
console.log(angle3);

//

const date1: Date =  new Date("2022-01-20");
const date2: Date = new Date("2022-01-22");

const difference: number = date2.getTime() - date1.getTime();
console.log(difference / (24 * 3600 * 1000));

//

function convertDays(numberOfDays: number): { years: number; months: number; days: number; } {
  let years: number = Math.floor(numberOfDays / 365);
  let months: number = Math.floor((numberOfDays % 365) / 30);
  let days: number = numberOfDays % 365 % 30;

  return {
    years: years,
    months: months,
    days: days,
  };
}

const num: number = 490;
const result: { years: number; months: number; days: number; } = convertDays(num);

console.log(`${result.years} years, ${result.months} months, ${result.days} days`);
