'use strict';

function first(){
        setTimeout( function(){
                console.log(1);
        },
        500 
        
        );

}

function second(){
        console.log(2);
}

first();
second();

function learnJS(lang, callback) {                       // принимает ланг и колбэк
         console.log('Я учу ' + lang);
         callback();                                    // так как мы передали колбэк в аргументы то можно вызвать внутри

}

function done() {
        console.log('Я прошел 3й урок')  
}

learnJS("JavaScript", done);



// если у функции в аргументе друная функция, то это колбэк функция