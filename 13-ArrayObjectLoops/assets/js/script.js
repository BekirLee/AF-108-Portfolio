// TASK1

function isArmstrong(number) {
    let numStr = number.toString();
    let sum = 0;
    let numLength = numStr.length;

    for (let i = 0; i < numLength; i++) {
        sum += Math.pow(parseInt(numStr[i]), numLength);
    }

    return sum === number;
}

for (let i = 100; i <= 999; i++) {
    if (isArmstrong(i)) {
        console.log(i);
    }
}


//TASK2

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

//TASK4

let numbers = [67, 54, 61, 35, 84, 42, 314, 42, 94, 5];
let sum = 0;
let index = 0;

while (index < numbers.length) {
    sum += numbers[index];
    index++;
}

let avarage = sum / numbers.length;
console.log(`Ədədi Orta: ${avarage}`);


//TASK3

let users = [
    { name: "Ali", age: 25 },
    { name: "Nihad", age: 32 },
    { name: "Vuqar", age: 28 },
    { name: "Aysun", age: 40 },
    { name: "Ayshe", age: 20 }
];

for (let user of users) {
    if (user.age > 30) {
        console.log(`${user.name} - Yaş: ${user.age} (Böyük)`);
    } else {
        console.log(`${user.name} - Yaş: ${user.age} (Kiçik)`);
    }
}


//TASK5

function findModulus(number, mod) {
    return number % mod;
}

let number = 209;
let mod = 3;

console.log(`Modulus: ${findModulus(number, mod)}`);


//TASK6

let arr = [19, 19, 2, 33, 14, 83, 320, 17];
let max = arr[0];

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(`Ən Böyük Ədəd: ${max}`);

//TASK7

//TASK8

//TASK9

let arraay1 = [203, 29, 12, 133, 1196, 8126, 335, 377];
let searchNumber = 35;

if (arraay1.includes(searchNumber)) {
    console.log(`${searchNumber} array-də mövcuddur.`);
} else {
    console.log(`${searchNumber} array-də mövcud deyil.`);
}


//TASK10
let array = [12, 213, 1345, 56, 709, 32, 94, 23];

let oneDigit = 0;
let twoDigit = 0;
let threeDigit = 0;

for (let num of array) {
    if (num < 10) {
        oneDigit++;
    } else if (num < 100) {
        twoDigit++;
    } else if (num < 1000) {
        threeDigit++;
    }
}

console.log(`Bir rəqəmli: ${oneDigit}`);
console.log(`İki rəqəmli: ${twoDigit}`);
console.log(`Üç rəqəmli: ${threeDigit}`);
