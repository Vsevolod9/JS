'use strict';








function func(prevPrevNum, prevNum)  {

	let sum = 0;	
	
	if (sum <= 10) {
		let current = prevPrevNum + prevNum;	// prevPrevNum + prevNum
	
		prevPrevNum = prevNum;				//prevPrevNum = prevNum
		prevNum = current;			// prevNum = current
		
		console.log(current);
	}

	return sum;
}
	
func(3, 4);
	







	function getSum(arr) {
		let sum = arr.shift();

		if (arr.length != 0) {
			sum = sum + getSum(arr);
		}

		return sum;
	}

	// console.log(getSum([1, 2, 3]));