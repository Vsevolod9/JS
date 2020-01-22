'use strict';

let options = {                         // создали переменную и в ней объект. В объекте (ключ значение). Например банан это овощ и это все свойства объекта
        width: 1024,
        height: 1024,
        name: 'test'
};

// console.log(options.width);

options.bool = false;                   // добавляем
options.colors = {                      // в свойства объекта можно записывать любой тип данных
        border: 'black',
        bg: 'red'
};

delete options.bool;

console.log(options);

for (let key in options) {

        console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}

console.log(Object.keys(options).length);

// в объект можно записывать и функции объекта, тогда они становятся и метадами