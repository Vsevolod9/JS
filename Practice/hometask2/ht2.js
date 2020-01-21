'use strict';

let money = prompt ('Ваш буджет на месяц?', ''),
    time = prompt ('Ведите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saveng: false
}
    
for (let i = 0; i < 2; i++) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt ("Во сколько обойдется?", "");

    if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        console.log('Done!');

        appData.expenses[a] = b;
    } else {
        console.log('Bad result');
        i--;
    }

};

appData.moneyPerDay = appData.budget / 30;

alert ('Бюджет на 1 день составляет' + appData.moneyPerDay + 'руб.');

if (appData.moneyPerDay < 100) {
    console.log ("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Средний уровень достатка!");
} else if (appData.moneyPerDay < 2000) {
    console.log ("Высокий уровень достатка!");
} else {
    console.log ("Произощла ошибка");
}

// Используем цикл WHILE

// let i = 0;
// while (i < 2) {

//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//         if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
//             console.log('Done!');

//             appData.expenses[a] = b;
               
//         } else {
//             console.log ("bad result");
//             i--;
//         }

//         i++;
// }

// Используем DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);