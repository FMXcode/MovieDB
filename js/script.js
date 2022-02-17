/* 
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = document.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          inputForm = addForm.querySelector('.adding__input'),
          deleteMovi = document.querySelectorAll('delete'),
          checkbox = addForm.querySelector('[type="checkbox"]');

        addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newFilm = inputForm.value;
        const favorite = checkbox.checked;
        /* if (newFilm.leght > 21 ) {
            newFilm = newFilm.substring(0, 20) + '...';
        } */
        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
    
        createMoviList(movieDB.movies, movieList);
    
        event.target.reset();
    });
        
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    }
    deleteAdv(adv);
    
    const makeChanges = (genre, poster) => {
        genre.textContent = 'драма';
    
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    }

    makeChanges(genre, poster);

    const  sortArr = (arr) => {
        arr.sort();
    }
    



        function createMoviList(films, parent) {
            parent.innerHTML = "";

            films.forEach((film, i) => {
                parent.innerHTML += `
                    <li class="promo__interactive-item">${i + 1} ${film}
                        <div class="delete"></div>
                    </li>
                `;
            });
        }

        deleteAdv(adv);
        makeChanges(genre, poster);
        sortArr(movieDB.movies);
        createMoviList(movieDB.movies, movieList);
});

