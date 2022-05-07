"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", " ");
const personalMuvieDB = {
    count: numberOfFilms,
    muvies: {},
    actors: {},
    genres:[],
    privat: false
};

for (let i = 0; i < 2; i++ ) {
    const a = prompt("Один из последних просмотренных фильмов?", " "),
          b = prompt("На сколько оцениваете его?", " ");

          if (a != null && b != null && a != " " && b != " " && a.length < 50) {
            personalMuvieDB.muvies[a] = b;
            console.log('done');
        } else{
            console.log('eror');
            i--;
        }    
}

if (personalMuvieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMuvieDB.count >= 10 && personalMuvieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMuvieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMuvieDB); 