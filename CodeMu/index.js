'use strict';

let bigData = [{
        year: 2019,
        month: 11,
        day: 20,
        data: ['массив с данными']
    },
    {
        year: 2019,
        month: 11,
        day: 21,
        data: ['массив с данными']
    },
    {
        year: 2019,
        month: 12,
        day: 25,
        data: ['массив с данными']
    },
    {
        year: 2019,
        month: 12,
        day: 26,
        data: ['массив с данными']
    },
    {
        year: 2020,
        month: 10,
        day: 29,
        data: ['массив с данными']
    },
    {
        year: 2020,
        month: 10,
        day: 30,
        data: ['массив с данными']
    },
    {
        year: 2020,
        month: 11,
        day: 19,
        data: ['массив с данными']
    },
    {
        year: 2020,
        month: 11,
        day: 20,
        data: ['массив с данными']
    },
];

let result = {};

for (let card of bigData) {

    if (result[card.year] == undefined) {
        result[card.year] = {};

    }

    if (result[card.year][card.month] == undefined) {
        result[card.year][card.month] = {};

    }
   
    result[card.year][card.month][card.day] = card.data;
   
}

console.log(result);