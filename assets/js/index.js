"use strict";

///////////////////////////////////////////////
// Text-transform capitalize
// text text text >>> Text Text Text
///////////////////////////////////////////////

let string =
  "Improve your skills by training with others on real code challenges.";

function capitalize(string) {
  return string
    .toLowerCase()
    .split(" ")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ");
}
console.log(capitalize(string));

///////////////////////////////////////////////
// Напишите функцию, которая возвращает все значения переданного свойства
// из массива объектов. getPropertyValues(array, "name")
///////////////////////////////////////////////

const array = [
  { name: "Katya", age: 15 },
  { name: "Vlad", age: 30 },
  { name: "Sonya", age: 84 },
];

function getPropertyValues(array, key) {
  return array.map((item) => item[key]);
}

console.log(getPropertyValues(array, "name"));

function getPropertyValues2(array, key) {
  const result = [];

  for (const cortege of array) {
    result.push(cortege[key]);
  }

  return result;
}

console.log(getPropertyValues2(array, "name"));

///////////////////////////////////////////////
// Напишите функцию, которая очищает массив от ложных (falsy) значений
///////////////////////////////////////////////

const arr1 = [123, 5, "Vlad", 0, undefined, NaN, null, true, false, "yes"];

function clearFalsy(array) {
  let arrNew = [];
  arrNew = array.filter((item) => Boolean(item));
  return arrNew;
}

console.log(arr1);
console.log(clearFalsy(arr1));

///////////////////////////////////////////////
// Напишите функцию removeItem(array, item), которая удаляет определенное значение из массива
// removeItem([3, 5, 7, 8, 5, 5, 5, 5, 5], 5) // [3, 7, 8]
///////////////////////////////////////////////

const arr2 = [3, 5, 7, 8, 5, 5, 5, 5, 5];

function removeItem(array, item) {
  return array.filter((number) => number !== 5);
}

console.log(arr2);
console.log(removeItem(arr2, 5));

///////////////////////////////////////////////
// Вернуть длину самого длинного слова в строке
///////////////////////////////////////////////

let strWords =
  "serious, tremendous, mouth, price, force, lend, acid, roll, glue, military";

function theLongestWord(string) {
  const wordLength = string.split(", ").map((word) => word.length);
  return Math.max(...wordLength);
}

console.log(theLongestWord(strWords));

///////////////////////////////////////////////
// Вернуть массив, состоящий из наибольших чисел из каждого подмассива
///////////////////////////////////////////////

const arraySubarrays = [
  [1, 2, 3, 9],
  [5, 18, 110, 12],
  [3, 5, 129, 5],
  [28, 99, 2, 34],
];

function getMaxSubitems(array) {
  return array.map((item) => Math.max(...item));
}

console.log(getMaxSubitems(arraySubarrays));
