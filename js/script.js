'use strict';

// Данные о фильмах
const movieDB = {
    movies: ['Логан', 'Лига справедливости', 'Ла-ла лэнд', 'Одержимость', 'Скотт Пилигрим против...'],
};

// Получаем элементы со страницы
const adv = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    bg = document.querySelector('.promo__bg'),
    movieList = document.querySelector('.promo__interactive-list'); // Исправление названия переменной

// Удаление всех рекламных блоков
adv.forEach((item) => {
    item.remove();
});

// Изменение жанра фильма
genre.textContent = 'Драма';

// Изменение фона постера
bg.style.backgroundImage = 'url("img/bg.jpg")';

// Сортировка списка фильмов по алфавиту
movieDB.movies.sort();

// Очистка текущего списка фильмов
movieList.innerHTML = '';

// Формирование нового списка с нумерацией
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${film}
        <div class="delete"></div>
    </li>`;
});
