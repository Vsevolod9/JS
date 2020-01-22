'use strict';

// let num = 20;

// function showFirstMessage(text) {                               
//     alert(text);
//     let num = 10;
//     console.log(num);                   //  будет искать сначала в функции, а только потом в глобальную область
// }     


// showFirstMessage('Hello world');
// console.log(num);

let calc = (a,b) => a+b
console.log(calc(3,4));
console.log(calc(8,4));



// let calc = function(a,b) {
//     return (a + b);
// }




function retVar() {
          let num = 50;
          return num;
}

let anotherVar = retVar();
console.log(anotherVar);



// ключевоеслово, имяИмяИмя (аргументы/параметры/данные(мы даем их для работы)) {то что будет выполнять наша функция те действие}

// ЛОКАЛЬНАЯ - переменная объявелнная внутри функции будет видна только там

// RETURN -  как только возвращает, то сразу умирает

// с помощью RETURN можем записать и вернуть переменную в глобальную область / во внешний мир)

// Function Declaration - функция которая объявлена в потоке кода. Они создаются до начала кода и их можно вызывать еще до объявления

// Function Expression - это когда мы функцию присваеваем в пременную. Мы не можем вызвать ее зарание 

// МЕТОДЫ - это всопогательные функции ()
// СВОЙСТВА - вспомогательные значения (не производим действия)

let str = 'test';
console.log(str.length);                //  свойство lengеth без ()

console.log(str.toUpperCase());                //  метод
console.log(str.toLowerCase());                //  метод

        // у чисел и у строк свои методы

let twelve = '12.2px';

// console.log(Math.round(twelve));

console.log(parseInt(twelve));
console.log(parseFloat(twelve));