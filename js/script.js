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
          deleteMovi = document.querySelectorAll('.delete'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = inputForm.value;
        const favorite = checkbox.checked;
        if(newFilm) {
            if (newFilm.length > 21 ) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('добавлен любимый фильм!!!')
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
        
            createMoviList(movieDB.movies, movieList);
        }
    
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


    const  sortArr = (arr) => {
        arr.sort();
    }
    

        function createMoviList(films, parent) {
            parent.innerHTML = "";
            sortArr(films);

            films.forEach((film, i) => {
                parent.innerHTML += `
                    <li class="promo__interactive-item">${i + 1} ${film}
                        <div class="delete"></div>
                    </li>
                `;
            });

            deleteMovi.forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    btn.parentElement.remove();
                    films.splice(i, 1);


                    createMoviList(movieDB.movies, movieList);
                });
            });
        }

        deleteAdv(adv);
        makeChanges(genre, poster);
        sortArr(movieDB.movies);
        createMoviList(movieDB.movies, movieList);
});

