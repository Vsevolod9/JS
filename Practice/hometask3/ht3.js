'use strict';

let money, time;


function start() {
    money = prompt ('Ваш буджет на месяц?', '');
    time = prompt ('Ведите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = prompt ('Ваш буджет на месяц?', '');
    }                                            

}

start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saveng: true
}
    
function chooseExpenses() {

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
}

chooseExpenses();

function detectDayBudget() {

    appData.moneyPerDay = (appData.budget / 30).toFixed(1);                     // возвращает строку
    alert ('Бюджет на 1 день составляет' + appData.moneyPerDay + 'руб.');
}

detectDayBudget();




function checkSaving() {
        if (appData.saveng == true) {
            let save = +prompt('Какова сумма накоплений?'), 
                percent = +prompt('Под какой процент');

            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);                                // Записываем в нашу главную базу данных. Создаем новое свойство
        }

}

checkSaving();

function chooseOptExpenses() {

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i] = questionOptExpenses;

        console.log(appData.optionalExpenses);
    }
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