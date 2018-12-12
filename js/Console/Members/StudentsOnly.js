const LOCAL_STORAGE_STUDENTS_ONLY = 'cl_students_only';

/**
 * Item in local storage that maintains the state of
 * "students only" in the console.
 * @constructor
 */
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