'use strict';

let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let day = arr[4];

for ( let i = 0; i < arr.length; i++) {

    if ( i < 4) {
        document.write(arr[i] + ' ');
    }
    
    if ( i > 4) {
        document.write(arr[i] + ' ');
    }
    
    if ( i == 5) {
        document.write('<i> ' + day + ' </i>');
    }


}










// for (let i = 0; i < arr.length; i++) {

//     document.write(arr[i] + '<p>');
// };



