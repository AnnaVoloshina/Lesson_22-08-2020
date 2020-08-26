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

// =====================================================================

class SquirrelClass {
  constructor(name, age) {
    this._name = {
      value: name,
      motherName: "Sonya",
      fatherName: "Pasha",
    };
    this._age = age;
  }

  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("Name must be a string");
    }
    if (name === "" || name.length > 128) {
      throw new RangeError(
        "Name must have minimum one symbol and maximum 128 symbols"
      );
    }
    this._name.value = name;
  }

  get name() {
    return this._name.value;
  }

  set age(age) {
    if (typeof age !== "number") {
      throw new TypeError("Age must be a number");
    }
    if (age <= 0 || age > 50) {
      throw new RangeError("Age must be a positive value less than 50");
    }
    if (!Number.isInteger()) {
      throw new RangeError("Age must be integer");
    }

    this._age = age;
  }

  get age() {
    return this._age;
  }

  static isSquirrel(squirrel) {
    return this instanceof SquirrelClass;
  }

  sayHi() {
    return `Hi, my name is ${this.name}`;
  }
}

const sq = new SquirrelClass("Tanya", 5);

class FlyingSquirrel extends SquirrelClass {
  constructor(name, age, isMale) {
    super(name, age);
    this.isMale = isMale;
  }

  fly() {
    return `Squirrel with name ${this.name} is flying`;
  }
}

const flyingSq = new FlyingSquirrel("Max", 5, true);

class User {
  constructor(name, age, isMale, isBanned = false) {
    this._name = name;
    this._age = age;
    this._isMale = isMale;
    this._isBanned = isBanned;
  }

  sayHi() {}
  sendMessage(msg) {
    return `user wrote ${msg}`;
  }
}

class Admin extends User {
  constructor(name, age, isMale, isBanned = false) {
    super(name, age, isMale, isBanned);
  }

  sendMessage(msg) {
    const parentResult = super.sendMessage(msg);
    return `admin send ${msg}`;
  }
  banUser() {}
}

const user = new User("user", 19, true);
const admin = new Admin("admin", 22, false);

class MyString {
  constructor(string) {
    this.string = string;
  }

  reverse(string) {
    return this.string.split("").reverse().join("");
  }

  ucFirst(string) {
    return this.string.slice(0, 1).toUpperCase() + this.string.slice(1);
  }

  ucWords(string) {
    return this.string
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }
}

const str3 = new MyString("adghhjh llllll ttnjup lljggbn mnbvcx");
console.log(str3);
console.log(str3.reverse(str3));
console.log(str3.ucFirst(str3));
console.log(str3.ucWords(str3));

class User2 {
  constructor(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}
class Student extends User2 {
  constructor(name, surname, year) {
    super(name, surname, year);
  }

  getCourse() {
    let currentDate = new Date();
    return currentDate.getFullYear() - this.year;
  }
}

const student1 = new Student("Porfiriy", "Ivanov", 2017);
console.log(student1);
console.log(student1.getFullName());
console.log(student1.getCourse());

// Решение преподавателя:
// Не нужно создавать блок constructor и вызывать ненужный объект!
// Добавляя static, можно сразу применять методы класса на строках без создания объекта.

class MyString2 {
  static reverse(string) {
    return string.split("").reverse().join("");
  }

  static ucFirst(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
  }

  static ucWords(string) {
    return string
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }
}

const str4 = "Hihkxvl zkdgaytsd swgfcx fkjk.";
console.log(MyString2.reverse(str4));
console.log(MyString2.ucFirst(str4));
console.log(MyString2.ucWords(str4));
