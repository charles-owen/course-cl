/**
 * Use of local storage to maintain the state of
 * "students only"
 */

const LOCAL_STORAGE_STUDENTS_ONLY = 'cl_students_only';

export const StudentsOnly = function() {
}

StudentsOnly.get = function() {
	const localStorage = window.localStorage;
	let s = localStorage.getItem(LOCAL_STORAGE_STUDENTS_ONLY);
	return s === 'yes';
}

StudentsOnly.set = function(students) {
	const localStorage = window.localStorage;
	localStorage.setItem(LOCAL_STORAGE_STUDENTS_ONLY, students ? 'yes' : 'no');

}