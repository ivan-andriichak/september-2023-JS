
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const data = [
        {
            "title": "м. Київ",
            "type": "city"
        },
        {
            "title": "Житомирська область",
            "type": "oblast"
        },
        {
            "title": "Харківська область",
            "type": "oblast"
        },
        {
            "title": "Вінницька область",
            "type": "oblast"
        },
        {
            "title": "Чернігівська область",
            "type": "oblast"
        },
        {
            "title": "Дніпропетровська область",
            "type": "oblast"
        },
        {
            "title": "Черкаська область",
            "type": "oblast"
        },
        {
            "title": "Волинська область",
            "type": "oblast"
        },
        {
            "title": "Київська область",
            "type": "oblast"
        },
        {
            "title": "Миколаївська область",
            "type": "oblast"
        },
        {
            "title": "Рівненська область",
            "type": "oblast"
        },
        {
            "title": "Сумська область",
            "type": "oblast"
        },
        {
            "title": "Тернопільська область",
            "type": "oblast"
        },
        {
            "title": "Краматорський район",
            "type": "raion"
        },
        {
            "title": "Кіровоградська область",
            "type": "oblast"
        },
        {
            "title": "Хмельницька область",
            "type": "oblast"
        },
        {
            "title": "Запорізька область",
            "type": "oblast"
        },
        {
            "title": "Одеська область",
            "type": "oblast"
        },
        {
            "title": "Полтавська область",
            "type": "oblast"
        },
        {
            "title": "Львівська область",
            "type": "oblast"
        },
        {
            "title": "м. Кривий Ріг",
            "type": "city"
        },
        {
            "title": "Криворізька територіальна громада",
            "type": "hromada"
        },
        {
            "title": "Івано-Франківська область",
            "type": "oblast"
        },
        {
            "title": "Чернівецька область",
            "type": "oblast"
        },
        {
            "title": "Ізюмський район",
            "type": "raion"
        },
        {
            "title": "Бахмутська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "м. Васильків",
            "type": "city"
        },
        {
            "title": "Васильківська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "Білоцерківська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "м. Біла Церква",
            "type": "city"
        },
        {
            "title": "Донецька область",
            "type": "oblast"
        },
        {
            "title": "Покровський район",
            "type": "raion"
        },
        {
            "title": "Уманська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "Бахмутський район",
            "type": "raion"
        },
        {
            "title": "Закарпатська область",
            "type": "oblast"
        },
        {
            "title": "Лубенська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "м. Лубни",
            "type": "city"
        },
        {
            "title": "Полтавська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "м. Полтава",
            "type": "city"
        },
        {
            "title": "м. Старокостянтинів",
            "type": "city"
        },
        {
            "title": "Старокостянтинівська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "м. Миколаїв",
            "type": "city"
        },
        {
            "title": "Миколаївська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "Торецька територіальна громада",
            "type": "hromada"
        },
        {
            "title": "Кропивницький район",
            "type": "raion"
        },
        {
            "title": "Першотравенська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "Нікопольська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "м. Нікополь",
            "type": "city"
        },
        {
            "title": "м. Першотравенськ",
            "type": "city"
        },
        {
            "title": "Одеський район",
            "type": "raion"
        },
        {
            "title": "м. Черкаси",
            "type": "city"
        },
        {
            "title": "Черкаська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "Добропільська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "Херсонська область",
            "type": "oblast"
        },
        {
            "title": "Сумська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "м. Суми",
            "type": "city"
        },
        {
            "title": "Первомайська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "Краматорська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "Макарівська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "м. Краматорськ",
            "type": "city"
        },
        {
            "title": "Миргородська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "м. Бориспіль",
            "type": "city"
        },
        {
            "title": "Броварська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "м. Миргород",
            "type": "city"
        },
        {
            "title": "Бориспільська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "м. Бровари",
            "type": "city"
        },
        {
            "title": "м. Вознесенськ",
            "type": "city"
        },
        {
            "title": "Коростенський район",
            "type": "raion"
        },
        {
            "title": "м. Первомайськ",
            "type": "city"
        },
        {
            "title": "Миронівська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "Вознесенський район",
            "type": "raion"
        },
        {
            "title": "Синельниківський район",
            "type": "raion"
        },
        {
            "title": "Фастівська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "Вознесенська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "Житомирський район",
            "type": "raion"
        },
        {
            "title": "Дружківська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "м. Фастів",
            "type": "city"
        },
        {
            "title": "Слов'янська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "Запорізький район",
            "type": "raion"
        },
        {
            "title": "м. Слов'янськ",
            "type": "city"
        },
        {
            "title": "м. Кременчук",
            "type": "city"
        },
        {
            "title": "Ніжинський район",
            "type": "raion"
        },
        {
            "title": "м. Ватутіне",
            "type": "city"
        },
        {
            "title": "Ватутінська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "Кременчуцька територіальна громада",
            "type": "hromada"
        },
        {
            "title": "Пологівський район",
            "type": "raion"
        },
        {
            "title": "Дніпровська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "м. Дніпро",
            "type": "city"
        },
        {
            "title": "Лозівський район",
            "type": "raion"
        },
        {
            "title": "Покровська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "м. Обухів",
            "type": "city"
        },
        {
            "title": "Узинська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "Шепетівський район",
            "type": "raion"
        },
        {
            "title": "Пирятинська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "Сумський район",
            "type": "raion"
        },
        {
            "title": "Харківський район",
            "type": "raion"
        },
        {
            "title": "Жашківська територіальна громада",
            "type": "hromada"
        },
        {
            "title": "м. Пирятин",
            "type": "city"
        },
        {
            "title": "Павлоградський район",
            "type": "raion"
        },
        {
            "title": "Голованівський район",
            "type": "raion"
        }
    ];

let currentPage = 0;
const itemsPerPage = 10;
const objectsContainer = document.getElementById('objectsContainer');

const displayObjects = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const objectsToDisplay = data.slice(startIndex, endIndex);

    objectsContainer.innerHTML = '';

    objectsToDisplay.forEach(object => {
        objectsContainer.innerHTML += `<div>Title: ${object.title},  Type: ${object.type}</div>`;
    });
};

const nextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage) - 1) {
        currentPage++;
        displayObjects();
    }
};

const prevPage = () => {
    if (currentPage > 0) {
        currentPage--;
        displayObjects();
    }
};

window.onload = displayObjects;

// ________________________________________________________________________________________________

// // Пагінація
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');
// let page = 1;  // Поточна сторінка
// const limit = 10;  // Кількість об'єктів на сторінці
//
// // Функція для обробки події та відображення об'єктів на сторінці
// const handler = (page, limit) => {
//     const wrapper = document.getElementById('wrapper');
//
//     // Обчислення початкового та кінцевого індексу об'єктів для відображення
//     const startIndex = (page - 1) * limit;
//     let endIndex = page * limit;
//
//     // Встановлення атрибутів disabled для кнопок prev та next залежно від обраної сторінки
//     if (startIndex > 0) {
//         prev.removeAttribute('disabled');
//     } else {
//         prev.setAttribute('disabled', 'disabled');
//     }
//     if (endIndex < locations.length) {
//         next.removeAttribute('disabled');
//     } else {
//         next.setAttribute('disabled', 'disabled');
//         endIndex = locations.length;
//     }
//
//     // Створення масиву DOM-елементів для відображення об'єктів
//     const state = [];
//     for (let i = startIndex; i < endIndex; i++) {
//         const obj = locations[i];
//
//         const item = document.createElement('div');
//         const title = document.createElement('div');
//         const type = document.createElement('div');
//
//         // Встановлення текстового вмісту для title та type
//         title.innerText = `Title: ${obj.title}`;
//         type.innerText = `Type: ${obj.type}`;
//
//         // Додавання класів до створених елементів
//         item.classList.add('item', 'wrapper');
//
//         // Додавання title та type до елементу item
//         item.append(title, type);
//         state.push(item);
//     }
//
//     // Оновлення контенту вузла wrapper
//     wrapper.replaceChildren(...state);
// }

// Ініціалізація відображення на сторінці та додавання обробників подій
// handler(page, limit);
// prev.addEventListener('click', () => handler(page -= 1, limit));
// next.addEventListener('click', () => handler(page += 1, limit));


