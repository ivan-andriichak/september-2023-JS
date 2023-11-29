// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// const  dataTypes= ['name', 'age', 'status', true, false, 25, 35, null, undefined, function () {
// }];
// console.log(dataTypes[0]);
// console.log(dataTypes[1]);
// console.log(dataTypes[2]);
// console.log(dataTypes[3]);
// console.log(dataTypes[4]);
// console.log(dataTypes[5]);
// console.log(dataTypes[6]);
// console.log(dataTypes[7]);
// console.log(dataTypes[8]);
// console.log(dataTypes[9]);
// _________________________________________________________________________________
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// const book1 = {
//  title: 'Learn English',
//  pageCount: 150,
//  genre: 'study'
// };
// const book2 = {
//  title: 'Romans',
//  pageCount: 300,
//  genre: 'roman'
// };
// const book3 = {
//  title: 'Evening embankment',
//  pageCount: 260,
//  genre: 'detective'
// };
// console.log(book1, book2, book3);
// ____________________________________________________________________________________
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// const book1 = {
//  title: 'Learn English',
//  pageCount: 150,
//  genre: 'study',
//  authors: [
//   {name: 'Luc Valter', age: 56}
//  ],
// };
// const book2 = {
//  title: 'Romans',
//  pageCount: 300,
//  genre: 'roman',
//  authors: [
//   {name: 'Scot Chapter', age: 40},
// ],
// };
// const book3 = {
//  title: 'Evening embankment',
//  pageCount: 260,
//  genre: 'detective',
//  authors: [
//   {name: 'Lui Suva', age: 60},
// ],
// };
// console.log(book1, book2, book3);
// _______________________________________________________________________________________
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// const  users = [
//  {name:'Ivan', username:'Gundolf',password: '1213123'},
//  {name:'Vasil', username:'Kraken',password: '4637846386'},
//  {name:'Oleg', username:'Megalodon',password: '1233333'},
//  {name:'Petro', username:'Crocodile',password: '33666'},
//  {name:'Maxim', username:'Elephant',password: '44970'},
//  {name:'Ola', username:'Fey',password: '36487'},
//  {name:'Sveta', username:'Sinderella',password: '236487'},
//  {name:'Oxana', username:'Mermaid',password: '12155523'},
//  {name:'Nazar', username:'Zigo',password: '121312300'},
//  {name:'Kristina', username:'Fish',password: '121312377'},
// ];
// console.log(users);
//________________________________________________________________________________________
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = 1;
// if (x!==0){
//  console.log('Вірно');
// }else {
//  console.log('Невірно');
// }
// _________________________________________________________________________________________
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = 60;
// if (time >= 0 && time <= 15) {
//  console.log('First quarter');
// }else if (time > 15 && time <= 30){
//  console.log('Second quarter');
// }else if (time > 30 && time <= 45){
//  console.log('Third quarter');
// }else if (time > 45 && time <= 59) {
//  console.log('Fourth quarter');
// }else {
//  console.log('Invalid time value');
// }
// ____________________________________________________________________________________________
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = 16;
// if (day >= 1 && day <= 10) {
//  console.log('First decade');
// }else if (day > 10 && day <= 20){
//  console.log('Second decade');
// }else if (day > 20 && day <= 31){
//  console.log('Third decade');
// }else {
//  console.log('Invalid day value');
// }
// ________________________________________________________________
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let dayOfSchedule = 5;
// switch (dayOfSchedule) {
//  case 1:
//   console.log('Monday');
//   break;
// case 2:
//   console.log('Tuesday');
//   break;
// case 3:
//   console.log('Wednesday');
//   break;
//  case 4:
//   console.log('Thursday');
//   break;
// case 5:
//   console.log('Friday');
//   break;
// case 6:
//   console.log('Saturday');
//   break;
// case 7:
//   console.log('Sunday');
//   break;
// }
// const week = [
//     { day: 'Monday!', schedule: 'Lectures on programming.' },
//     { day: 'Tuesday!', schedule: 'Meeting with friends.' },
//     { day: 'Wednesday!', schedule: 'Visiting the gym.' },
//     { day: 'Thursday!', schedule: 'Working on a project.' },
//     { day: 'Friday!', schedule: 'Preparing for the weekend.' },
//     { day: 'Saturday!', schedule: 'Rest and entertainment.' },
//     { day: 'Sunday!', schedule: 'Family evening.' }
// ];

// let dayNumber = parseInt(prompt('Enter the day of the week (1-7):'));
//
// switch (dayNumber) {
//     case 1:
//         console.log(`${week[0].day}`);
//         console.log(`Schedule for the day: ${week[0].schedule}`);
//         break;
//     case 2:
//         console.log(`${week[1].day}`);
//         console.log(`Schedule for the day: ${week[1].schedule}`);
//         break;
//     case 3:
//         console.log(`${week[2].day}`);
//         console.log(`Schedule for the day: ${week[2].schedule}`);
//         break;
//     case 4:
//         console.log(`${week[3].day}`);
//         console.log(`Schedule for the day: ${week[3].schedule}`);
//         break;
//     case 5:
//         console.log(`${week[4].day}`);
//         console.log(`Schedule for the day: ${week[4].schedule}`);
//         break;
//     case 6:
//         console.log(`${week[5].day}`);
//         console.log(`Schedule for the day: ${week[5].schedule}`);
//         break;
//     case 7:
//         console.log(`${week[6].day}`);
//         console.log(`Schedule for the day: ${week[6].schedule}`);
//         break;
//     default:
//         console.log("Invalid day of the week number.");
//         break;
// }
// ___________________________________________________________________
//  - Користувач вводить або має два числа.
//      Потрібно знайти та вивести максимальне число з тих двох .
//      Також потрібно врахувати коли введені рівні числа.
// let number1 = parseFloat(prompt('Введіть перше число'));
// let number2 = parseFloat(prompt('Введіть друге число'));
// if (!isNaN(number1 && !isNaN(number2))) {
//  if (number1 > number2) {
//   console.log(`Максимальне число ${number1}`);
//  } else if (number2 > number1) {
//   console.log(`Максимальне число ${number2}`);
//  } else {
//   console.log(`Числа рівні`)
//  }
// } else {
//  console.log('Введені значення не є числами');
// }
//____________________________________________________________________
//  - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//      за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
// let x = null;

// Використовуємо тернарний оператор для перевірки, чи x є falsy, і присвоюємо "default" в іншому випадку
// x = x ? x : "default";
// console.log(x);

//
//  - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// if (coursesAndDurationArray[0].monthDuration > 5) {
//     console.log(coursesAndDurationArray[0].title + ' Супер');
// }
//
// if (coursesAndDurationArray[1].monthDuration > 5) {
//     console.log(coursesAndDurationArray[1].title + ': Супер');
// }
//
// if (coursesAndDurationArray[2].monthDuration > 5) {
//     console.log(coursesAndDurationArray[2].title + ': Супер');
// }
//
// if (coursesAndDurationArray[3].monthDuration > 5) {
//     console.log(coursesAndDurationArray[3].title + ': Супер');
// }
//
// if (coursesAndDurationArray[4].monthDuration > 5) {
//     console.log(coursesAndDurationArray[4].title + ': Супер');
// }
//
// if (coursesAndDurationArray[5].monthDuration > 5) {
//     console.log(coursesAndDurationArray[5].title + ': Супер');
// }

// // Перевіряємо кожен елемент масиву
// for (let course of coursesAndDurationArray) {
//     // Перевіряємо, чи тривалість довша за 5 місяців
//     if (course.monthDuration > 5) {
//         console.log(`Курс "${course.title}" - Супер`);
//     }
// }
// ____________________________________________________________









// Additional tasks
//Видобути число зі змінних //  // вивести в консоль тип
// let a = "5";
// let num1 = parseInt(a);
// console.log(num1);
//
// let b = "13cvb";
// let num2 = parseInt(b);
// console.log(num2);
//
// let c = "12.9sxdcfgv";
// let num3 = parseInt(c);
// console.log(num3);
// ________________________________________________
//Зробіть, щоб 0.1 + 0.2 = 0.3
//
// let a = 0.1;
// let b = 0.2;
// let roundSum = parseFloat((a + b).toFixed(1));
//
// console.log(roundSum);
//
// __________________________________________________
//Поверніть найбільше число с набору 20, 10, 50, 40;
// let numbers = [20, 10, 50, 40];
// let maxNumber = Math.max(...numbers);
// console.log(maxNumber);

// let numbers = [20, 10, 50, 40];
// let maxNumber = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
// console.log(maxNumber);
// ____________________________________________________
//Поверніть випадкове число в діапазоні від 2 до 4;

// let randomValue = Math.round(Math.random() * (4 - 2) + 2);
// console.log(randomValue);

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// let randomValue = getRandomNumber(2, 4);
// console.log(randomValue);
// ________________________________________________________

//дізнатись довжину message //
// const message = "Welcome to Bahamas!";
// let lengthOfMessage = message.length;
// console.log(lengthOfMessage);

//вивести в консоль message великими літерами;
// console.log(message.toUpperCase());
// ____________________________________________________________

// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// const user = {
//     name: 'Ivan',
//     age: 23,
//     city: 'Lviv',
// };
// console.log(user);
//
// // видалити місто;
// let { city, ...newObject } = user;
// console.log(newObject);
// delete user.name;
// console.log(Object.values(user));
// // додати буль з ключем: like flowers
// //  вивести результат в консоль
//
// user.like = "flowers";
// console.log(user);
// ____________________________________________________
//  const numbers = [1, 2, 3, 8,[4,5,6]];
// const numbersFilter = numbers.filter((number) => number % 2 === 0);
// console.log(numbersFilter);
// ________________________________________________________
// За допомогою циклу “for…in” вивести в консоль ключі і значення об*єкта;
// for (let userKey in user) {
//  if (user.hasOwnProperty(userKey))
//   console.log(`${userKey} : ${user[userKey]}`);
// }
//




