"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const length = 5;
const width = 3;
const area = length * width;
console.log(area);
//
const perimeter = length * 2 + width * 2;
console.log(perimeter);
//
const radius = 5;
const circleDiameter = 2 * radius;
console.log(circleDiameter);
const circumference = 22 / 7 * circleDiameter;
console.log(Math.floor(circumference));
const circleArea = 22 / 7 * 5 * 5;
console.log(Math.floor(circleArea));
//
const angle1 = 80;
const angle2 = 65;
const angle3 = 180 - (angle1 + angle2);
console.log(angle3);
//
const date1 = new Date("2022-01-20");
const date2 = new Date("2022-01-22");
const difference = date2.getTime() - date1.getTime();
console.log(difference / (24 * 3600 * 1000));
//
function convertDays(numberOfDays) {
    let years = Math.floor(numberOfDays / 365);
    let months = Math.floor((numberOfDays % 365) / 30);
    let days = numberOfDays % 365 % 30;
    return {
        years: years,
        months: months,
        days: days,
    };
}
const num = 490;
const result = convertDays(num);
console.log(`${result.years} years, ${result.months} months, ${result.days} days`);
