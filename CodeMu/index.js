'use strict';


let arrWhile = [];
let arrFor = [];

let i = 1;

function getRandomInt(min, max) {
    
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

while ( i <= 10) {
    
    arrWhile.push(getRandomInt(10, 100));
    i++; 
}

for (let i = 1; i <=10; i++ ) {

    arrFor.push(getRandomInt(10, 100));
}



console.log(arrWhile);
console.log(arrFor);

    