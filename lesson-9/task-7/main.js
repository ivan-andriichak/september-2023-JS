
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

function generateTable() {
    const rowCount = parseInt(document.getElementById('rowCount').value);
    const colCount = parseInt(document.getElementById('colCount').value);
    const cellContent = document.getElementById('cellContent').value;
    const tableContainer = document.getElementById('tableContainer');

    const table = document.createElement('table');
    for (let i = 0; i < rowCount; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < colCount; j++) {
            const cell = document.createElement('td');
            cell.textContent = cellContent;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    // Очищаємо вміст контейнера для таблиці.
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
}
