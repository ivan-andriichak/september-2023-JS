
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

const currentNumber = localStorage.getItem('blockNumber');
const numberDisplay = document.getElementById('numberDisplay');

if (currentNumber) {
    numberDisplay.textContent = currentNumber;
} else {
    numberDisplay.textContent = '0';
}

const updatedNumber = parseInt(numberDisplay.textContent) + 1;
numberDisplay.textContent = updatedNumber.toString(); // Оновлення текстового вмісту в елементі

localStorage.setItem('blockNumber', updatedNumber.toString()); // Збереження оновленого значення в localStorage

