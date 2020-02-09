let users = [{
        name: 'name1',
        active: true,
    },
    {
        name: 'name2',
        active: false,
    },
    {
        name: 'name3',
        active: true,
    },
    {
        name: 'name4',
        active: false,
    },
    {
        name: 'name5',
        active: true,
    },
];


let newArr = [];

changeValue(true, 1, users);

function changeValue(value, userNumber, nameOfArr) {

    nameOfArr[userNumber].active = value;

    for (let person of users) {
        newArr.push(person);
    }
}

console.log('Это новый массив: ', newArr);


// for (let card of users) {



//     }

// console.log(users);



// if (card.active)  { 

//     card.active = false;

// } else {

//     card.active = true;
// }