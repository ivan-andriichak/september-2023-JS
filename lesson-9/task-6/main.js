//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const ageInput = document.getElementById('ageInput');
const checkAgeButton = document.getElementById('checkAgeButton');
const resultMessage = document.getElementById('resultMessage');

checkAgeButton.addEventListener('click', function () {
    const enterAge = parseInt(ageInput.value);

    if (enterAge < 18) {
        resultMessage.textContent = 'Your age is less than 18 years. Prohibited !!!';
        resultMessage.style.color = 'red';
    } else if (enterAge >= 18 && enterAge <= 100) {
        resultMessage.textContent = 'Your age is acceptable';
        resultMessage.style.color = 'green';
    } else {
        resultMessage.textContent = 'It is impossible!!!';
        resultMessage.style.color = 'darkred';
    }
});

