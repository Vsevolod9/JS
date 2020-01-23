'use strict';



// arr.pop();                              //удаляем последний 
// arr.push('5');                              //добавляем последний

// arr.shift();                            //удаляет первый
// arr.unshift('1');                       //добавляет первый


// let arr = ['first', 2, 3, 'fourth', 5];
// arr.forEach(function(item, i, mass) {           // метод фори ич это перебор массива, 
//         console.log(i + ": " + item + " (массив: " + mass + ')'); // это колбэк ф-я, мы берем каждый элемент и применяем к нему эту функцю
// });

// console.log(arr);

// let mass = [1,3,4,6,7];

// for (let key of mass) {                         // in меняем на of и получаем мссив
//         console.log(key);                       // мы получили ключи, те порядковый намер массива
// }

// for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
// }

// console.log(arr);

//  ПОЛУЧАЕМ ДАННЫЕ В МАССИВ

// let ans = prompt('', ''),
//         arr = [];

// arr = ans.split(',');
//  console.log(arr);

// 

// let arr = ['aaa', 'ddd', 'vvv', 'nnn'],
//         i = arr.join(', ');

//         // console.log(arr);            // выводит массив
//         console.log(i);                 // выводит строку


// СОРТИРОВКА

let arr = ['1', '15', '4'],
        i = arr.sort(compareNum);

       function compareNum(a,b) {
               return a-b;
       }

        console.log(arr);                 