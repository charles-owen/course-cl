const path = require('path');

module.exports = {
	entry: {
		Course: path.resolve(__dirname, './index.js'),
		Calendar: path.resolve(__dirname, './js/Calendar/Calendar.js'),
		CourseConsole: path.resolve(__dirname, './js/Console/index.js')
	}
}
