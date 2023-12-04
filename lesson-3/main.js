// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 1; i <= 10; i++) {
//     document.write(`<div>block № ${i}</div>`);
// }
// _________________________________________________________________________________________________
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let block = 1;
// while (block <= 20) {
//     document.write(`<div>block № ${block}</div>`);
//     block += 1;
// }
// _________________________________________________________________________________________________
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//     document.write(`<ul>`);
// for (const listOfItem of listOfItems) {
//     document.write(`<li>${listOfItem}</li>`);
// }
//     document.write(`</ul>`);
// -----------------------------------------------
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// document.write(`<div class="product-card" style="width: 300px; height: 300px; margin: 0 auto">`);
//
// for (let i = 0; i < products.length; i++) {
//    document.write(`<h3 class="product-title">${products[i].title}. Price ${products[i].price}</h3>
//     <img src="${products[i].image}" alt="" class="product-image" style="width: 300px; height: 300px">
//        `);
//         }
//
//         document.write(`</div>`);

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
// --------------------
//     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
// let trueStatusUsers = [];
// let falseStatusUsers = [];
// let olderThan30Users = [];
//
// for (const user of users) {
//     if (user.status === true) {
//         trueStatusUsers.push(user);
//     } else {
//         falseStatusUsers.push(user);
//     }
//
//     if (user.age > 30) {
//         olderThan30Users.push(user);
//     }
// }
//
// console.log('Users with status true:', trueStatusUsers);
// console.log('Users with status false:', falseStatusUsers);
// console.log('Users older than 30:', olderThan30Users);
// ____________________________________________________________________
// Additional tasks
// _______________________________________________________________________
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let mixedArray = [];
// for (let i = 0; i < 5; i++) {
//     mixedArray.push(i);
//     mixedArray.push(`String ${i+1}`)
//     mixedArray.push(Math.random() > 0.5);
// }
// console.log(mixedArray);

//________________________________________________________________________
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let emptyArray = [];
// emptyArray[0] = 'hello';
// emptyArray[1] = 12;
// emptyArray[2] = null;
//
// for (const value of ["Hello", "World"]) {
//     emptyArray.push(value);
// }
// console.log(emptyArray);

//________________________________________________________________________

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
// let i = 0;
// while (i < arr.length) {
//     const value = arr[i];
//     console.log(value);
//     i +=1;
// }
//     2. перебрати його циклом for
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 1;
// while (i < arr.length) {
//     const value = arr[i];
//     i +=2;
//     console.log(value);
// }
// console.log(`______________________________________________________________________`)
// let index = 1;
// while (index < arr.length) {
//     if (index % 2 === 1) {
//         console.log(arr[index]);
//     }
//     index++;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (i % 2 === 1) {
//     console.log(arrElement);
//     }
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let index = 1;
//
// while (index < arr.length) {
//     if (arr[index] % 2 === 0) {
//         console.log(arr[index]);
//     }
//     index++;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (arr[i] % 2 === 0) {
//         console.log(arrElement);
//     }
//
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// let index = 0;
//
// while (index < arr.length) {
//     if (arr[index] % 3 === 0) {
//         arr[index] = "okten";
//     }
//     index++;
// }
// console.log(arr);
// arr.forEach((element, index) => {
//     if (element % 3 === 0) {
//         arr[index] = "okten";
//     }
// });
//
// console.log(arr);

// 8. вивести масив в зворотньому порядку.
// for (let i = arr.length-1; i >= 0; i--) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// let i = arr.length-1;
// while (i >= 0) {
//     const value = arr[i];
//     console.log(value);
//     i -=1;
// }
//__________________________
// let i = arr.length-1;
// while (i >= 0) {
//     const value = arr[i];
//     i -=2;
//     console.log(value);
// }
//___________________________
//  let index = arr.length-1;
// while (index >= 0) {
//     if (index % 2 === 1) {
//         console.log(arr[index]);
//     }
//     index--;
// }
//_____________________________
//  for (let i = arr.length-1; i >=0; i--) {
//     const arrElement = arr[i];
//     if (i % 2 === 1) {
//     console.log(arrElement);
//     }
// }
//_____________________________
// let index = arr.length-1;
//
// while (index >= 0) {
//     if (arr[index] % 2 === 0) {
//         console.log(arr[index]);
//     }
//     index--;
// }
//__________________________________
//  for (let i = arr.length-1; i >=0; i--) {
//     const arrElement = arr[i];
//     if (arr[i] % 2 === 0) {
//         console.log(arrElement);
//     }
//
// }
//__________________________________
// let index = arr.length-1;
//
// while (index >= 0) {
//     if (index % 3 === 0) {
//         arr[index] = "okten";
//     }
//     index--;
// }
// console.log(arr);

//____________________________________
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// const arrayNumber = [22, 45, 67, 55, 99, 12, 2, 4, 6, 44];
// for (let i = 0; i < arrayNumber.length; i++) {
//     const arrayElement = arrayNumber[i];
//     console.log(arrayElement);
// }
//______________________________________________________________________________

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// const arrayString = ['st1', 'st2', 'st3', 'st4', 'st5', 'st6', 'st7', 'st8', 'st9', 'st10'];
// for (const string of arrayString) {
//     console.log(string);
// }

// for (let i = 0; i < arrayString.length; i++) {
//     const arrayStringElement = arrayString[i];
//     console.log(arrayStringElement);
// }
//______________________________________________________________________________

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// const arrayVariousElem = [11, 'asd', null, undefined, true, false, 34, 'okten', [], {}];
// for (const arrayVariousElemElement of arrayVariousElem) {
//     console.log(arrayVariousElemElement);
// }

//______________________________________________________________________________
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// const  mixedArray = [12, 22, 45, 'okten', 'asd', true, false, 33, 5, 9];
// for (const element of  mixedArray) {
//     if (typeof element === 'boolean') {
//         console.log( `Boolean types: ${element}`);
//     }
// }

//______________________________________________________________________________
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// const  mixedArray = [12, 22, 45, 'okten', 'asd', true, false, 33, 5, 9];

// for (const [index, element] of mixedArray.entries()) {
//     if (typeof element === 'number') {
//         console.log(`Index: ${index}, Number types: ${element}`);
//     }
// }
//______________________________________________________________________________
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// const  mixedArray = [12, 22, 45, 'okten', 'asd', true, false, 33, 5, 9];

// for (const element of  mixedArray) {
//     if (typeof element === 'string') {
//         console.log( `String types: ${element}`);
//     }
// }
//______________________________________________________________________________
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// const array = [];
// array[0] = 'asd';
// array[1] = 'okten';
// array[2] = 1;
// array[3] = 33;
// array[4] = 44;
// array[5] = null;
// array[6] = true;
// array[7] = undefined;
// array[8] = false;
// array[9] = 'asdasd';
// for (const arrayElement of array) {
// }
// console.log(array);

//______________________________________________________________________________
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 10; i++) {
//     console.log(`Current value:  ${i}`);
//     document.write(`Current value: ${i} <br><br>`)
// }

//______________________________________________________________________________
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 100; i++) {
//     const arrayElement = i;
//     console.log(`Current value:  ${arrayElement}`);
//     document.write(`Current value: ${arrayElement} <br><br>`)
// }
//______________________________________________________________________________
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 100; i += 2) {
//     const arrayElement = i;
//     console.log(`Current value:  ${arrayElement}`);
//     document.write(`Current value: ${arrayElement} <br><br>`)
// }

//______________________________________________________________________________
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 1; i <= 100; i += 1) {
//     if (i % 2 === 0){
//         const arrayElement = i;
//         console.log(`Current value:  ${arrayElement}`);
//         document.write(`Current value: ${arrayElement} <br><br>`)
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i <= 100; i += 1) {
//     if (i % 2 === 1){
//         const arrayElement = i;
//         console.log(`Current value:  ${arrayElement}`);
//         document.write(`Current value: ${arrayElement} <br><br>`)
//     }
// }

//________________________________________________________________________
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
