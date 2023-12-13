// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// let user1 = new User(23, 'Ihor', 'Petrovich', 'okten_web@gmail','+38062573243');
// console.log(user1);

// створити пустий масив, наповнити його 10 об'єктами new User(....)
// const newUsers = [];
// const user1 = new User(22, 'Petro', 'Snicarenko', 'user1@example.com', '+380974544231');
// const user2 = new User(77, 'Ivan', 'Kozub', 'user5@example.net', '+380974544231');
// const user3 = new User(99, 'Vasilina', 'Bodnar', 'vas.bodnar@hotmail.com', '+3809345991');
// const user4 = new User(5, 'Nadia', 'Ivashko', 'nadia.wilson@outlook.com', '+3809540031');
// const user5 = new User(45, 'Oleh', 'Durdinets', 'okten.school1_web@gmail.com', '+3809747731');
// const user6 = new User(56, 'Maksim', 'Plusch', 'maks.wilson@outlook.com', '+3809745631');
// const user7 = new User(12, 'Olga', 'Grishko', 'olga.grih@hotmail.com', '+3806645631');
// const user8 = new User(23, 'Diana', 'Emec', 'diana.emec@hotmail.com', '+3809745631');
// const user9 = new User(55, 'Orest', 'Mokin', 'orest.mokin@aol.com', '+3809533631');
// const user10 = new User(6, 'Ihor', 'Petrovich', 'okten_web@gmail.com', '+380925577777');
// newUsers.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(newUsers);

// ______________________________________________________________________________________________________
// - Взяти масив з  newUsers[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// const newUsersFilter = newUsers.filter((user) => (user.id % 2 === 0));
// console.log(newUsersFilter)


// ______________________________________________________________________________________________________
// - Взяти масив з  newUsers[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// const newUsersSort = newUsers.sort((u1, u2) => u1.id - u2.id);
// console.log(newUsersSort)

// ______________________________________________________________________________________________________
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname, email, phone, order = []) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// const client1 = new Client(1, 'John', 'Doe', 'john@example.com', '1234567890',['Product A', 'Product B']);
// console.log(client1);

    // const newClients = [];
    //
    // const client1 = new Client(22, 'Petro', 'Snicarenko', 'user1@example.com', '+380974544231', ['Product A', 'Product B', 'Product C', 'Product D']);
    // const client2 = new Client(77, 'Ivan', 'Kozub', 'user5@example.net', '+380974544231', ['Product A', 'Product B', 'Product C']);
    // const client3 = new Client(99, 'Vasilina', 'Bodnar', 'vas.bodnar@hotmail.com', '+3809345991', ['Product A', 'Product B']);
    // const client4 = new Client(5, 'Nadia', 'Ivashko', 'nadia.wilson@outlook.com', '+3809540031', ['Product A', 'Product B']);
    // const client5 = new Client(45, 'Oleh', 'Durdinets', 'okten.school1_web@gmail.com', '+3809747731', ['Product A', 'Product B', 'Product C',  'Product D',  'Product E']);
    // const client6 = new Client(56, 'Maksim', 'Plusch', 'maks.wilson@outlook.com', '+3809745631', ['Product A', 'Product B']);
    // const client7 = new Client(12, 'Olga', 'Grishko', 'olga.grih@hotmail.com', '+3806645631', ['Product A']);
    // const client8 = new Client(23, 'Diana', 'Emec', 'diana.emec@hotmail.com', '+3809745631', ['Product A', 'Product B',  'Product C']);
    // const client9 = new Client(55, 'Orest', 'Mokin', 'orest.mokin@aol.com', '+3809533631', ['Product A']);
    // const client10 = new Client(6, 'Ihor', 'Petrovich', 'okten_web@gmail.com', '+380925577777', ['Product A', 'Product B', 'Product C']);
    //
    // newClients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
    // console.log(newClients);
//
//     myMethod() {
//         // метод класу
//     }
// }


// ______________________________________________________________________________________________________

// - Взяти масив (newClients [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// const newClientsSort = newClients.sort((client1, client2) => client1.order.length - client2.order.length);
// console.log(newClientsSort)


// ______________________________________________________________________________________________________

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// Створюємо функцію-конструктор для об'єктів типу Car1
function Car1(model, maker, year, maxSpeed, volume) {
    // Ініціалізуємо властивості об'єкта
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    // Початково встановлюємо driver на null
    this.driver = null;

    // Додаємо методи до прототипу об'єкта
    this.drive = function () {
        console.log(`Our speed is ${this.maxSpeed} per hour`);
    }

    this.info = function () {
        console.log('model: ', this.model);
        console.log('maker: ', this.maker);
        console.log('year: ', this.year);
        console.log('maxSpeed: ', this.maxSpeed);
        console.log('volume: ', this.volume);
        // Перевіряємо, чи є призначений водій
        console.log('------------ INFO ------------')
        console.log('driver: ', this.driver ? `name: ${this.driver.name}, license: ${this.driver.license}` : 'No driver assigned');
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }

    this.changeYear = function (newYear) {
        this.year = newYear;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

// Створюємо об'єкт driverInfo для передачі як аргумент до addDriver
const driverInfo = {
    name: 'John',
    license: 'B'
}

// Створюємо новий об'єкт типу Car1 із заданими аргументами
const car1 = new Car1('Autlender', 'Mitsubishi', 2013, 180, 1.8);

// Викликаємо різні методи об'єкта для демонстрації їх роботи
car1.drive();
car1.info();
car1.increaseMaxSpeed(20);
car1.changeYear(2015);
car1.addDriver(driverInfo);
car1.info();

// ______________________________________________________________________________________________________
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     // Конструктор класу для ініціалізації властивостей об'єкта
//     constructor(model, maker, year, maxSpeed, volume) {
//         this.model = model;
//         this.maker = maker;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//         this.driver = null; // Початково встановлюємо driver на null
//     }
//
//     // Метод, який виводить повідомлення про їзду
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     // Метод, який виводить інформацію про автомобіль
//     info() {
//         console.log("Інформація про автомобіль:");
//         for (const key in this) {
//             if (typeof this[key] !== 'function') {
//                 console.log(`${key} - ${this[key]}`);
//             }
//         }
//     }
//
//     // Метод, який підвищує максимальну швидкість на задане значення
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(`Максимальна швидкість підвищена до ${this.maxSpeed}`);
//     }
//
//     // Метод, який змінює рік випуску автомобіля
//     changeYear(newValue) {
//         this.year = newValue;
//         console.log(`Рік випуску змінено на ${this.year}`);
//     }
//
//     // Метод, який додає водія до об'єкта car
//     addDriver(driver) {
//         this.driver = driver;
//         console.log(`Додано водія: ім'я - ${driver.name}, ліцензія - ${driver.license}`);
//     }
// }
//
// // Створюємо новий екземпляр класу Car
// const car1 = new Car('Autlender', 'Mitsubishi', 2013, 180, 1.8);
//
// // Викликаємо різні методи для демонстрації їх роботи
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(20);
// car1.changeYear(2015);
//
// // Об'єкт водія
// const driverInfo = {
//     name: 'John',
//     license: 'B'
// };
//
// // Додаємо водія до автомобіля
// car1.addDriver(driverInfo);

// ______________________________________________________________________________________________________
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Popelushka extends Human {
    constructor(name, age, shoeSize) {
        super(name, age);
        this.shoeSize = shoeSize;
    }
}

class Prince extends Human {
    constructor(name, age, foundShoeSize) {
        super(name, age);
        this.foundShoeSize = foundShoeSize;
    }

    findPrincess(arr) {
        // Знаходимо попелюшку за допомогою функції масиву find та відповідного колбеку
        return arr.find(popelushka => popelushka.shoeSize === this.foundShoeSize);
    }
}

const popelArr = [
    new Popelushka('Albina', 34, 15),
    new Popelushka('Tamara', 39, 18),
    new Popelushka('Anna', 20, 40),
    new Popelushka('Inna', 32, 35),
    new Popelushka('Oksana', 16, 36),
    new Popelushka('Irina', 66, 38),
    new Popelushka('Tania', 40, 35),
    new Popelushka('Sergey', 26, 45),
];

const prince = new Prince('Sergey', 30, 40);

// Виводимо результат без зайвої локальної змінної
console.log(prince.findPrincess(popelArr));

