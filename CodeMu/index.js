"use strict";

let students = {
	'group1' : {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2' : {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3' : {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
};

addStudent('group3', 'subgroup31', 'Vasia' );
addStudent('group4');


console.log(students);

function addStudent(group, subgroup, newStudent) {

    if ( students[group] === undefined) {
        students[group] = {};
    }   
    students[group].push(group);

      students[group][subgroup].push(newStudent);
    
}







