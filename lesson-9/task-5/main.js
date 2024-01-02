// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

const textElement = document.createElement('div');
textElement.textContent = 'Цей елемент буде видалений при натисканні на кнопку.';
textElement.id = 'text';

const button = document.createElement('button');
button.textContent = 'Видалити елемент';
button.addEventListener('click', () => {
    document.getElementById('text').remove();
});
document.body.append(textElement, button);

