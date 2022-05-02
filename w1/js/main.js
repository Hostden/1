"use strict";

const numberOfFilms = prompt("Сколько фильмов вы просмотрели", " ");

const personalMuvieDB = {
    count: numberOfFilms,
    muvies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("один из просмотренных фильмов", " "),
      b = prompt("На сколько оцените его?", " "),
      c = prompt("один из просмотренных фильмов", " "),
      d = prompt("На сколько оцените его?", " ");

personalMuvieDB.muvies[a] = b;
personalMuvieDB.muvies[c] = d;

console.log(personalMuvieDB);