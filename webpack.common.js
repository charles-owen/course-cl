const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
	entry: {
		Course: path.resolve(__dirname, './index.js'),
		Calendar: path.resolve(__dirname, './js/Calendar/Calendar.js'),
		CourseConsole: path.resolve(__dirname, './js/Console/index.js')
	},
	plugins: [
		new FileManagerPlugin({
			onEnd: {
				copy: [
					{source: path.resolve(__dirname, '../../../cl/dist/course.*'), destination: path.resolve(__dirname, 'dist') },
					{source: path.resolve(__dirname, '../../../cl/dist/calendar.*'), destination: path.resolve(__dirname, 'dist') },
					{source: path.resolve(__dirname, '../../../cl/dist/courseconsole.*'), destination: path.resolve(__dirname, 'dist') }
				]
			}
		})
	]
}
