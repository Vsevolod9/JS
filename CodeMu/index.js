'use strict';

function func(arr) {
	console.log(arr.shift()); // выведет 1
	console.log(arr); // выведет [2, 3] - массив уменьшился
	
	console.log(arr.shift()); // выведет 2
	console.log(arr); // выведет [3] - массив уменьшился
	
	console.log(arr.shift()); // выведет 3
	console.log(arr); // выведет [] - массив пуст
}

func([1, 2, 3]);

// -----------------------------------

// function alternate(arr, callback1, callback2) {
// 	let result = [];
// 	let i = 0;

// 	for (let elem of arr) {

	
// 		result.push(callback1(elem));

// 	}

// 	return result;
// }


// let result = alternate(
// 	['a', 'b', 'c', 'd', 'e'],
// 	function (elem) {
// 		return elem + '!';
// 	},
// 	function (elem) {
// 		return elem + '?';
// 	}
// );

// console.log(result); // выведет ['a!', 'b?', 'c!', 'd?', 'e!']

