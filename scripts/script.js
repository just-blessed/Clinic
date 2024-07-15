window.onload = function () {
    document.getElementById('about-us').onclick = function () {
        document.getElementsByClassName('about-item')[0].scrollIntoView({behavior: "smooth"});
    }
    document.getElementById('favors').onclick = function () {
        document.getElementsByClassName('serv')[0].scrollIntoView({behavior: "smooth"})
    }
    document.getElementById('doc').onclick = function () {
        document.getElementsByClassName('doc')[0].scrollIntoView({behavior: "smooth"})
    }
    document.getElementById('contacts').onclick = function () {
        document.getElementsByClassName('footer')[0].scrollIntoView({behavior: "smooth"})
    }
    document.getElementById('main-action').onclick = function () {
        document.getElementsByClassName('reserve')[0].scrollIntoView({behavior: "smooth"})
    }

    const form = document.getElementById('reserve-form');

    form.addEventListener('submit', function(event) {
        // Получение значений полей ввода
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();

        // Проверка на пустые значения
        if (!name || !phone) {
            event.preventDefault(); // Остановка отправки формы
            alert('Пожалуйста, заполните все поля.');
        } else {
            alert('Форма успешно отправлена!');
        }
    });










};