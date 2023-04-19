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

/* калькулятор /*/

function calculator(string) {
  function calculate(){
    let letter = [];
  string = string.replace(/[^IVXLCDMZ\d-+*\/]/gi, (ch) => {
    if (ch !== " ") letter.push(ch);
    return "";
  });
  if (letter.length > 0)
    throw Error("Недопустимые символы, введено это:" + letter);
  let vars = string.split(/[+\-*\/]/g);
  if (vars.length !== 2) throw Error("Должно быть два операнда");
  const isRome = /[IVXLCDMZ]/i;
  const r = vars.reduce((s, v) => s + isRome.test(v), 0);
  if (r === 1) throw Error("должны быть арабские или римские цифры");
  else if (r === 2)

  vars = vars.map((v) => rome2arab(v));
  if (vars.some((v) => v < 1 || v > 10)) throw Error("Только числа от 1 до 10");
  let acr = string.match(/[+\-*\/]/)[0];
  let result = Math.floor(eval(vars.join(acr)));
  return r === 0 ? result.toLocaleString() : arab2rome(result);
  }

  const digits = {
    Z: 2000,
    M: 2000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  function rome2arab(string) {
    return string
      .toUpperCase()
      .split("")
      .reduce(function (s, v, i, arr) {
        const [a, b, c] = [
          digits[arr[i]],
          digits[arr[i + 1]],
          digits[arr[i + 2]],
        ];
        return b > a ? s - a : s + a;
      }, 0);
  }
  
  function arab2rome(num) {
    if (num < 1) return "";
    let result = "";
    for (key in digits)
      while (num >= digits[key]) {
        result += key;
        num -= digits[key];
      }
    return result;
  }
  return calculate();  
}
