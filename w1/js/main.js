"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

 const personalMuvieDB = {
    count: numberOfFilms,
    muvies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцениваете его?", "");
    
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMuvieDB.muvies[a] = b;
            console.log('done');
        } else {
            console.log('eror');
            i--;
        }
    }
}

rememberMyFilms ();

function detectPersonalLvl() {
    if (personalMuvieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMuvieDB.count >= 10 && personalMuvieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMuvieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLvl();

function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMuvieDB);
    }
}

showMyDB(personalMuvieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMuvieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();