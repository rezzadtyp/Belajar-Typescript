"use strict";
// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
Object.defineProperty(exports, "__esModule", { value: true });
// const arr: number[] = [12, 5, 23, 18, 4, 45, 32];
// function getData(numbers: number[]) {
//   const lowest: number = Math.min(...numbers);
//   const highest: number = Math.min(...numbers);
//   let sum: number = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   let average: number = sum / numbers.length;
//   average = parseFloat(average.toFixed(4));
//   return { lowest, highest, average };
// }
// console.log(getData(arr));
// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
// const arr:string[] = ["apple", "banana", "cherry", "date"];
// function concatenatingString(array: any) {
//   if(array.length === 0) {
//     return "";
//   }
//   const lastWords: string = array.slice(-1);
//   const otherWords: string[] = array.slice(0, -1);
//   const result: string = otherWords.join(",") + (otherWords.length > 0 ? ", and " : "") + lastWords;
//   return result;
// }
// console.log(concatenatingString(arr));
// 3. Write a function to split a string and convert it into an array of words
// a. Example : “Hello World” → [“Hello”, “World”]
// const str: string = "Hello World";
// function splitString(input: string) {
//   const arr: string[] = input.split(" ");
//   return arr;
// }
// console.log(splitString(str));
// 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
// const arr1: number[] = [1, 2, 3];
// const arr2: number[] = [3, 2, 1];
// function sumArr(data1: number[], data2: number[]) {
//   const result: number[] = [];
//   for (let i = 0; i < data1.length; i++) {
//     result.push(arr1[i] + arr2[i]);
//   }
//   return result;
// }
// console.log(sumArr(arr1, arr2));
// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
// const arr: number[] = [1, 2, 3, 4];
// function addArray (input: number) {
//   if(arr.includes(input) == false) {
//     arr.push(input);
//   }
//   return arr;
// }
// console.log(addArray(7));
////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]
// const arr: number[] = [1, 2, 3, 4, 5, 6];
// function removeOdd(data: number[]): number[] {
//   let newArr: number[] = [];
//   for(let i = 0; i < data.length; i++) {
//     if(data[i] % 2 === 0) {
//       newArr.push(data[i])
//     }
//   }
//   return newArr;
// }
// console.log(removeOdd(arr));
// 2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// a. Example :
//  maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
//  The function will return [5, 10, 24, 3, 6]
// const arr: number[] = [5, 10, 24, 3, 6, 7, 8];
// function maxSize(array: number[], input: number) {
//   for(let i = 0; i < arr.length; i++) {
//     if(array.length > input) {
//       array.pop();
//     }
//   }
//   return array;
// }
// console.log(maxSize(arr, 5));
// 3. Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
// const arr1: number[] = [1, 2, 3];
// const arr2: number[] = [4, 5, 6];
// const result: number[] = arr1.concat(arr2);
// console.log(result);
// 4. Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
// function findDupes(input: number[]) {
//   const duplicate: number[] = [];
//   const result: boolean[] = [];
//   for(let i = 0; i < input.length; i++) {
//     const value: number = input[i];
//     if(result[value]) {
//       if(!duplicate.includes(value)) {
//         duplicate.push(value);
//       }
//     } else {
//       result[value] = true;
//     }
//   }
//   return duplicate;
// }
// const arr: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];
// console.log(findDupes(arr));
// 5. Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7] 
// const arr1: number[] = [1, 2, 3, 4, 5];
// const arr2: number[] = [3, 4, 5, 6, 7];
// function findDiff(data1: number[], data2: number[]) {
//   let diff1: number[] = data1.filter(element => !data2.includes(element));
//   let diff2: number[] = data2.filter(element => !data1.includes(element));
//   return diff1.concat(diff2);
// }
// console.log(findDiff(arr1, arr2));
// 1. Based on the array below write a function that will return primitive data types only. let
// arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]
// const arr: unknown[] = [1, [], undefined, {}, "string", {}, []];
// function primitive(array: unknown[]) {
//   return array.filter(item => {
//     return typeof item !== "object";
//   });
// }
// console.log(primitive(arr));
// 2. Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
// const numbers: number[] = [5, 3, 1, 7, 2, 6];
// numbers.sort((a, b) => a - b);
// const second: number = numbers.slice(1, 2)[0];
// console.log(second);
// 3. Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
// const mixedArray: unknown[] = ["3", 1, "string", null, false, undefined, 2];
// function sumNum(arr: unknown[]) {
//   const numOnlyArr: number[] = arr.filter((item): item is number => {
//     return typeof item === "number";
//   })
//   let sum: number = 0;
//   for (let i = 0; i < numOnlyArr.length; i++) {
//     sum += numOnlyArr[i];
//   }
//   return sum;
// }
// console.log(sumNum(mixedArray));
// 4. Write a function from the below array of number that will return sum of duplicate values. let
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40
const arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
function sumDupes(data) {
    let result = 0;
    const dupeValues = data.filter((value, index, array) => {
        return array.indexOf(value) !== index;
    });
    for (let item of data) {
        if (dupeValues.includes(item)) {
            result += item;
        }
    }
    return result;
}
console.log(sumDupes(arr));
