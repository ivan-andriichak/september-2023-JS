// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// const calculateTheArea = (a, b) => a * b;
// let area = calculateTheArea(2, 2);

// console.log(area);

// ______________________________________________________________________________________
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// const circleOfArea = (r)=>  Math.floor(Math.PI * r * r*2);
// let area1 = circleOfArea(2);

// console.log(area1);

// ______________________________________________________________________________________
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// const cylinderOfArea = (r, h) => Math.floor(Math.PI*r*(r+h)*2);
//
// let cylinderAreaResult = cylinderOfArea(2, 4);

// console.log(cylinderAreaResult);

// ______________________________________________________________________________________
// - створити функцію яка приймає масив та виводить кожен його елемент

// const arr = [1, 2, 44, 5, 67, 99];
//
// const iterArr = (arr) => {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// };

// iterArr(arr);

// ______________________________________________________________________________________
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// const createParagraph = (text) => {
//     document.write(`<p> <h1>${text}</h1></p>`)
// }
//
// createParagraph('LOREM');

// ______________________________________________________________________________________
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const createList = (text1) => {
//     document.write(`<ul>
//         <li>${text1}</li>
//         <li>${text1}</li>
//         <li>${text1}</li>
//     </ul>`);
// }
//
// let listItemText = `This text`;
// createList(listItemText);

// ______________________________________________________________________________________
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// const createList=(text,count)=> {
//     document.write('<ul>')
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`)
//  }
// document.write('</ul>');
// }
//
// createList('LOREM', 3);

// ______________________________________________________________________________________
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// const mixedArray = [12, 22, 45, 'okten', 'asd', true, false, 33, 5, 9];
//
// const arrayPrimitive = (mixedArray) => {
//     document.write('<ul>')
//     for (let i = 0; i < mixedArray.length; i++) {
//         document.write(`<li>${mixedArray[i]}</li>`)
//     }
//     document.write('</ul>');
// }
// arrayPrimitive(mixedArray)
// ______________________________________________________________________________________
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let users = [
//     {id: 1223123, name: 'vasya', age: 31},
//     {id: 15356, name: 'petya', age: 30},
//     {id: 874335, name: 'kolya', age: 29},
// ];
//
// const creatDiv = (users) => {
//     for (const user of users) {
//         document.write(`
//             <div>
//                 <p>ID: ${user.id}</p>
//                 <p>Name: ${user.name}</p>
//                 <p>Age: ${user.age}</p>
//             </div>
//         `);
//     }
// }
//
// creatDiv(users)
// ______________________________________________________________________________________
// - створити функцію яка повертає найменше число з масиву
//
// const numbers = [2, 45, 33, 8, 1];
//
// const minNumber=(numbers)=> {
//     let min = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] < min)
//             min = numbers[i];
//     }
//     return min
// }
//
// console.log(minNumber(numbers));
/////////////////////////////////////////////////////////////////
// const minNumber = (numbers) => Math.min(...numbers);
//
// console.log(minNumber(numbers));

// ______________________________________________________________________________________
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// const arr = [2, 45, 33, 8, 1, 33, 98, 1];

// const sumNumbers = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
//
// const result = sumNumbers(arr);
// console.log(result);
//////////////////////////////////////////////////////////////////
// const sumNumbers = (arr) => {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// }
//
// let result = sumNumbers(arr);
// console.log(result);
// ______________________________________________________________________________________
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
//
// const swap=(arr, index1, index2)=> [arr[index2], arr[index1]] = [arr[index1], arr[index2]];
//
// const swappedArray = swap(arr, 0, 1);
// console.log(swappedArray);
//
// /////////////////////////////////////////////////////////////////////////////
// const swapAdjacent = (arr) => {
//     // Цикл for перебирає всі елементи масиву, починаючи з 1.
//     for (let i = 1; i < arr.length; i += 2) {
//         // Обмінюємо значеннями двох сусідніх елементів масиву.
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//     }
// }
//
// swapAdjacent(arr);
//
// console.log(arr);


// ______________________________________________________________________________________
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//     let exchangeRate;
//
//     for (const cv of currencyValues) {
//         if (cv.currency === exchangeCurrency) {
//             exchangeRate = cv.value;
//             break;
//         }
//     }
//
//     if (exchangeRate === undefined) {
//         console.log('Exchange rate is not available.');
//         return null;
//     }
//
//     const exchangedAmount =  (sumUAH / exchangeRate).toFixed(2);
//
//     return exchangedAmount;
// }
//
// const currencyValues = [
//     { currency: 'USD', value: 40},
//     { currency: 'EUR', value: 42 },
//     // add other currencies
//     { currency: 'GBP', value: 48 }
// ];
//
// const exchangedAmount = exchange(10000, currencyValues, 'USD');
// console.log(exchangedAmount);
// _________________________________________________________________________________________________
// const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//     // Перевіряємо, чи є валюта, яку потрібно обміняти, в масиві валютних курсів.
//     if (!currencyValues.find((currency) => currency.currency === exchangeCurrency)) {
//         throw new Error(`Не знайдено валюту ${exchangeCurrency} в масиві валютних курсів.`);
//     }
//
//     // Знаходимо курс валюти, яку потрібно обміняти.
//     const exchangeRate = currencyValues.find((currency) => currency.currency === exchangeCurrency).value;
//
//     // Обчислюємо суму валюти, яку отримаємо в результаті обміну.
//     const exchangeSum =(sumUAH / exchangeRate).toFixed(2);
//
//     // Повертаємо результат обміну.
//     return exchangeSum;
// }
//
// const sumUAH = 10000;
// const currencyValues = [
//     { currency: 'USD', value: 40 },
//     { currency: 'EUR', value: 42 },
//          // add other currencies
//     { currency: 'GBP', value: 48 }
// ];
// const exchangeCurrency = 'USD';
//
// const result = exchange(sumUAH, currencyValues, exchangeCurrency);
//
// console.log(result);

