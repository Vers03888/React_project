"use strict";
//13.ПРОСТОЕ ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ

//alert("hello");

//const result = confirm("Are you here?");
//console.log(result);

//const answer = +prompt("Вам есть 18?", "18");// "+" перед promt меняет строчный тип данных на числовой.
//console.log(typeof(answer));// typeof()-функиця определения типа данных. 
//Вся информация, которая приходит от пользователя будет в виде строк.
//console.log(answer + 5);

// const answers = [];//массив-это частный тип данных объектов

// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как вашa фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");

// //document.write(answers);
// console.log(typeof(answers));
// console.log(typeof(null));//официально признаная ошибка



//14.ИНТЕРПОЛЯЛЦИЯ(ES6)

// const category = 'toys';

// //console.log('https://someurl.com/' + category + '/' + '4'); чтобы упростить эту запись используется ИНТЕРПОЛЯЛЦИЯ
// console.log(`https://someurl.com/${category}/5`);//ИНТЕРПОЛЯЛЦИЯ работает только с обратными ковычками.

// const user = "Ivan";
// alert(`Привет, ${user}`);



//15.Операторы JS

// console.log('arr' + " - object");
// console.log(4 + " - object");
// console.log(4 + +"5");//унарный "+" ставится перед каким-либо значением, использует 1 аргумент для своей работы

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr, decr);