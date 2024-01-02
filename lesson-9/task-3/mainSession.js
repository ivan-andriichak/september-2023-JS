
// Функція для відображення інформації про сесії
function renderSessions() {
    // Отримуємо елемент з id 'sessionsList'
    const sessionsList = document.getElementById('sessionsList');

    // Отримуємо дані сесій з локального сховища або створюємо порожній масив, якщо даних немає
    const sessions = JSON.parse(localStorage.getItem('sessions')) || [];

    if (sessions.length === 0) {
        // Якщо сесій немає, встановлюємо текстовий контент елементу 'sessionsList'
        sessionsList.textContent = 'Інформація про сесії відсутня.';
    } else {
        // Якщо є сесії, будуємо структуру списку
        const ul = document.createElement('ul');

        // Проходимо по кожній сесії і додаємо елемент списку
        for (const session of sessions) {
            const li = document.createElement('li');
            li.textContent = session.date;

            ul.appendChild(li);
        }

        sessionsList.appendChild(ul);
    }
}

// Викликаємо функцію для відображення сесій при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() {
    renderSessions();
});



