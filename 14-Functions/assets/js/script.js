// task1

function func(num1, num2) {
    return 'task 1 result is: ' + num1 + num2;
}

console.log(func(8, 3))

// task2

let allnumbers = [];

function chooseNums(...nums) {
    let odds = [];
    let evens = [];

    for (let numbers of nums) {
        // console.log(numbers);
        if (numbers % 2 == 0) {
            evens.push(numbers);
        }
        else if (numbers % 2 == 1) {
            odds.push(numbers);
        }
    }
    console.log(evens)
    console.log(odds)
}

chooseNums(14, 20, 35, 40, 57, 60, 100)


// task3

let task3Nums = [14, 20, 35, 40, 57, 60, 100];

function numberChooser(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] % 4 == 0 && arr[i] % 5 == 0) {
            console.log('task3 numbers are :' + arr[i])
        }
    }
}

numberChooser(task3Nums)

// task4

let sentence = "hello world com'n in guys";
let letter = 'o';
let count = 0;

function letterBringer(sentence) {
    for (let i of sentence) {
        if (i == letter) {
            count++;
        }
    }
    console.log(count + ' times used ')
}

letterBringer(sentence)


// task5

let number = 12;
function numberChecker(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            console.log(i);
            sum += i;
        }
        else if (num % 2 == 1) {
            console.log(i);
            sum += i;
        }
    }
    if (num < sum) {
        console.log(`${num} is Aboundant`)
    }
    else {
        console.log(`${num} is Deficent`)
    }
}

numberChecker(number)

// task6


// task7

const people = [
    { name: "Alice", age: 25 },
    { name: "Sasha", age: 30 },
    { name: "Osiris", age: 35 },
    { name: "Eve", age: 28 },
    { name: "Nihad", age: 19 }
];


function checker(arr) {
    let result = [];
    let minAge = arr[0].age;
    let maxAge = arr[0].age;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i].age < minAge) {
            minAge = arr[i].age;
            // result.push(minAge);
        }
        else if (arr[i].age > maxAge) {
            maxAge = arr[i].age;
            // result.push(maxAge);
        }
        // console.log(arr[i])
    }
    let ageDifference = maxAge - minAge;
    result.push(minAge, maxAge, ageDifference);
    console.log(result)
}

checker(people);
// console.log(people)