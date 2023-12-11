// - Знайти та вивести довижину настипних стрінгових значень
// const array = ['hello world', 'lorem ipsum', 'javascript is cool'];
// console.log(array[0].length);
// console.log(array[1].length);
// console.log(array[2].length);
// ______________________________________________________________________
//
// for (const string of array) {
//     const length = string.length
//     console.log(`Довжина рядка "${string}" становить ${length} символів.`);
// }
// ______________________________________________________________________
// console.log(`__________________________________________________________`)
// array.forEach((string) => {
//     const length = string.length
//
//     console.log(`Довжина рядка "${string}" становить ${length} символів.`);
// });

// ______________________________________________________________________
// - Перевести до великого регістру наступні стрінгові значення
// const array = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (const string of array) {
//      const upper = string.toUpperCase();
//     console.log(upper);
// }
// console.log(`__________________________________________________________`)
// array.forEach((string) => {
//      const upper = string.toUpperCase();
//     console.log(upper);
// });

// ___________________________________________________________________________
// - Перевести до нижнього регістру настипні стрінгові значення
// const lover = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// lover.forEach((string) => {
//      const lov = string.toLowerCase();
//     console.log(lov);
// });
// ______________________________________________________________________________
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let strDirty = ' dirty string   ';
// let strClear = strDirty.trim();
// console.log(strClear);

// __________________________________________________________________________________
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//
// const stringToArray=(str)=> {
// let arrWords = str.split(' ');
//     return arrWords
// }
// const arr = stringToArray(str);
// console.log(arr);

// _________________________________________________________________________________________
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// const numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// const convertedToString =  numbers.map(num => num.toString());
//
// console.log(convertedToString);
// // ///////////////////////////////////////////////
// const converted = [];
// numbers.forEach(num => {
//     converted.push(num.toString());
// });
//
// console.log(converted);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11, 21, 3];
// const sortNums = (nums, direction) => {
//     if (direction === 'ascending') {
//         return nums.sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//         return nums.sort((a, b) => b - a);
//     } else {
//         console.log('Invalid direction. Returning the original array.');
//         return nums;
//     }
// };
//
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));
// console.log(sortNums(nums, 'invalid'));
//////////////////////////////////////////////////////////////////////////////////
// function sortNums(numbers, direction) {
//     const compare = (a, b) => {
//         if (direction === "ascending") {
//             return b - a;
//         } else {
//             return a - b;
//         }
//     };
//     return numbers.sort(compare);
// }
//
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));

// __________________________________________________________________________________________
// - є масив
// -- відсортувати його за спаданням за monthDuration
// const coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// const sortedByDuration = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sortedByDuration);
// _______________________________________________________________________________________________
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// const filteredCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);
// console.log(filteredCourses);

// __________________________________________________________________________________________________
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// const transformedCoursesWidthId = coursesAndDurationArray.map((course,index) => {
//     return {
//         id: index + 1,
//         title: course.title,
//         monthDuration: course.monthDuration
//     };
// });
//
// console.log(transformedCoursesWidthId);
// __________________________________________________________________________________________________
//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// Визначаємо масиви мастей та значень карт
// const suits = ['spade', 'diamond', 'heart', 'club'];
// const values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
//
// // Створюємо порожній масив для зберігання карт
// const deckOfCards = [];
//
// // Перебираємо всі масти карт
// for (const suit of suits) {
//     // Перебираємо всі значення карт
//     for (const value of values) {
//         // Визначаємо колір карти в залежності від її масті
//         let color = 'black';
//         if (suit === 'diamond' || suit === 'heart') {
//             color = 'red';
//         }
//
//         // Створюємо об'єкт з властивостями cardSuit, value та color
//         const card = {
//             cardSuit: suit,
//             value: value,
//             color: color,
//         };
//
//         // Додаємо об'єкт до масиву карт
//         deckOfCards.push(card);
//     }
// }
//
// // Виводимо масив карт у консоль
// console.log(deckOfCards);
// __________________________________________________________________________________________________

// - знайти піковий туз
// const pikAce = deckOfCards.find(card => card.cardSuit === 'spade' && card.value === 'ace');
//
// console.log(pikAce);
// __________________________________________________________________________________________________

// - всі шістки
// const sixes1 = deckOfCards.filter(card => card.value === '6');
// console.log(sixes1);
//
//
// const sixes2 = deckOfCards.reduce((acc, card) => {
//     if (card.value === '6') {
//         acc.push(card);
//     }
//     return acc;
// }, []);
//
// console.log(sixes1, sixes2);
// __________________________________________________________________________________________________

// - всі червоні карти
// const redCards = deckOfCards.filter(card => card.color === 'red');
//
// console.log(redCards);
// __________________________________________________________________________________________________

// - всі буби
// const diamondCards = deckOfCards.filter(card => card.cardSuit === 'diamond');
//
// console.log(diamondCards);

// - всі трефи від 9 та більше
// const clubs = deckOfCards.filter(card => card.cardSuit === 'clubs' &&  (card.value === 'ace' || card.value === 'jack' || card.value === 'queen' || card.value === 'king' || card.value >= 9) );
// console.log(clubs);

// ___________________________________________________________________________________________________
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// // }
// const classifySuit = deckOfCards.reduce((result, card) => {
//     const cardSuit = card.cardSuit;
//
//     if (result[cardSuit]) {
//         result[cardSuit].push(card);
//     } else {
//         result[cardSuit] = [card];
//     }
//
//     return result;
// } , {});
//
// console.log(classifySuit);

///     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js'
//         ]
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html',
//             'css', 'js',
//             'mysql',
//             'mongodb',
//             'git',
//             'QA/QC'
//         ]
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'sass'
//         ]
//     }
// ];
// --написати пошук всіх об'єктів, в який в modules є sass

// const objectsWithSass = coursesArray.filter(course => course.modules.includes('sass'));
// console.log(objectsWithSass);

// ___________________________________________________________________________________________________
// --написати пошук всіх об'єктів, в який в modules є docker
//
// const objectsWithDocker = coursesArray.filter(course => course.modules.includes('docker'));
// console.log(objectsWithDocker);