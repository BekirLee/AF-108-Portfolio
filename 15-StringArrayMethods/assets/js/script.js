const sentence = "I am frontend DEVELOPER I LEARN Javascript";

const customers = [
    {
        name: "Tyrone",
        personal: {
            age: 33,
            hobbies: ["Bicycling", "Camping"],
        },
    },
    {
        name: "Elizabeth",
        personal: {
            age: 25,
            hobbies: ["Guitar", "Reading", "Gardening"],
        },
    },
    {
        name: "Penny",
        personal: {
            age: 36,
            hobbies: ["Comics", "Chess", "Legos"],
        },
    },
];

// Task1
function findVowels(str) {
    const vowels = "aeiouAEIOU";
    // turning to array from string
    // way1
    // return str.split("").filter(char => vowels.includes(char));

    // way2
    return [...str].filter(char => vowels.includes(char));

}

console.log(findVowels(sentence));




// Task2 

function wordCount(str) {
    let wordCount = 0;
    let inWord = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " " && !inWord) {
            wordCount++;
            inWord = true;
        } else if (str[i] === " ") {
            inWord = false;
        }
    }

    return wordCount;
}

console.log(wordCount(sentence));

// Task3

function longestWord(str) {
    const words = str.split(" ");
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
}

console.log(longestWord(sentence));


// Task4()

function findUppercaseWords(str) {
    const words = str.split(" ");
    let uppercaseWords = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i] === words[i].toUpperCase()) {
            // pushing finded result in object form
            uppercaseWords.push({ word: words[i], index: i });
        }
    }

    return uppercaseWords;
}

console.log(findUppercaseWords(sentence));


// Task5

function findWordsWithMoreThanTwoUppercase(str) {
    const words = str.split(" ");
    const result = [];

    for (let i = 0; i < words.length; i++) {
        let uppercaseCount = 0;
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === words[i][j].toUpperCase()) {
                uppercaseCount++;
            }
        }

        if (uppercaseCount > 2) {
            result.push(words[i]);
        }
    }

    return result;
}

console.log(findWordsWithMoreThanTwoUppercase(sentence));


// Task6

function getInitials(str) {
    let initials = "";

    for (let i = 0; i < str.length; i++) {
        // conditions of uppercased letter
        if (str[i] === str[i].toUpperCase() && str[i] !== " ") {
            initials += str[i];
        }
    }
    return initials;
}

const str = "Why What When";
console.log(getInitials(str));


// Task7()

// function shortenWords(str) {
//     const words = str.split(" ");
//     const shortened = [];

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length >= 4) {
//             // first first 
//             shortened.push(words[i][0] + (words[i].length - 2) + words[i][words[i].length - 1]);
//         } else {
//             shortened.push(words[i]);
//         }
//     }

//     return shortened.join(" ");
// }

// console.log(shortenWords(sentence));


// Arrays
// Task1

function removeDuplicatesAndCount(arr) {
    const counts = {};
    const unique = [];

    arr.forEach(num => {
        // when number's count is upper than 1 push to object
        counts[num] = (counts[num] || 0) + 1;
    });

    for (const num in counts) {
        if (counts[num] === 1) {
            unique.push(Number(num));
        }
    }

    return {
        uniqueElements: unique,
        repeatCounts: counts
    };
}

const arr = [1, 2, 3, 2, 4, 1, 5, 6, 3];
const result = removeDuplicatesAndCount(arr);

console.log("Unikal nums:", result.uniqueElements);
console.log("Every single nums in array:", result.repeatCounts);


// Task2

function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
}

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));


// Task3

function countSmallerThan(arr, num) {
    let count = 0;
    for (let val of arr) {
        if (val < num) count++;
    }
    return count;
}

const arr2 = [3, 7, 1, 9, 2];
console.log(countSmallerThan(arr2, 5));


// Task4

// with return
// function getAllHobbies(customers) {
//     return customers.reduce((acc, customer) => {
//         return acc.concat(customer.personal.hobbies);
//         // console.log(acc)
//     }, []);
// }

// without return
function getAllHobbies(customers) {
    return customers.reduce((acc, customer) =>
        acc.concat(customer.personal.hobbies), []
    );
}


console.log(getAllHobbies(customers));


// Task5()

function generateRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}

function getMinMax(arr) {
    //for getting arr's elements
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return { min, max };
}

function getAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

function getSquares(arr) {
    return arr.map(num => num ** 2);
}

const randomArray = generateRandomArray(10);

console.log("Generated Array:", randomArray);
console.log("Min and Max:", getMinMax(randomArray));
console.log("Average:", getAverage(randomArray));
console.log("Squares:", getSquares(randomArray));
