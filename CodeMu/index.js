'use strict';





let func = (function () {
	let num = 1;


	return function () {
		console.log(num);
		num++;

		if (num == 5) {
			num = 0;
		}
	};

})();


func();
func();
func();
func();
func();
func();
func();
func();

// let b = 1;

// while (b > 0) {

// 	if (b <= 5) {
// 		console.log(b);
// 	} else {
// 		console.log('Больше 5');
// 		b = 0;
// 	}
// 	b++;	
// }






// func();
// func();
// func();
// func();

// console.log(result);