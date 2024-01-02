document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const submitBtn = document.getElementById('submitBtn');
    const clearBtn = document.getElementById('clearBtn');
    const resultBlock = document.getElementById('resultBlock');

    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();

        const nameInput = form.elements['name'];
        const surnameInput = form.elements['surname'];
        const ageInput = form.elements['age'];

        if (nameInput.value && surnameInput.value && ageInput.value) {
            const user = {
                name: nameInput.value,
                surname: surnameInput.value,
                age: ageInput.value,
            };

            resultBlock.innerHTML = '';

            resultBlock.innerHTML = `
                <h2> Ваші дані:</h2>
                <p>Ім'я: ${user.name}</p>
                <p>Прізвище: ${user.surname}</p>
                <p>Вік: ${user.age}</p>
            `;
        } else {
            alert('Please fill in all fields of the form.');
        }
    });

    clearBtn.addEventListener('click', function () {
        form.reset();
        resultBlock.innerHTML = '';
    });
});
