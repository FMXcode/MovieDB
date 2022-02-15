/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const promoAdv = document.querySelectorAll('.promo__adv img'),
      promoGenre = document.querySelector('.promo__genre'),
      promoBg = document.querySelector('.promo__bg'),
      promoItem = document.querySelectorAll('.promo__interactive-item');


// 1)Первое задание, в котором мы изменяем текст
for(let i = 0; i < promoAdv.length; i++) {
    promoAdv[i].remove();
}

// 2)Втрое задание, в котором мы изменяем комедия - драма
promoGenre.innerHTML = 'драма'; 

// 3)Третье задание, в котором мы изменяем фон блока
promoBg.style.backgroundImage = 'url(../img/bg.jpg)';

// 4-5)Сортировка фильмов на странице  и добавлнение номирации к фильмам
movieDB.movies.sort();
for (let i = 0; i < movieDB.movies.length; i++) {
    promoItem[i].innerHTML = ( i+1 + ') ') + movieDB.movies[i];
}

