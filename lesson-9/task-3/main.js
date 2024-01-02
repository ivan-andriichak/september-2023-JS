// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// Викликаємо функцію для відображення інформації про сесії при завантаженні сторінки sessions.html

// Функція для отримання поточної дати та часу у вигляді рядка
function getCurrentDateTimeAsString() {
    return new Date().toLocaleString();
}

// Функція для збереження даних сесії в локальному сховищі
function saveSessionData() {
    const sessions = JSON.parse(localStorage.getItem('sessions')) || [];
    sessions.push({ date: getCurrentDateTimeAsString() });
    localStorage.setItem('sessions', JSON.stringify(sessions));
}


saveSessionData();
