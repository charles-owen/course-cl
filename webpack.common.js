const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		Course: path.resolve(__dirname, './index.js'),
		Calendar: path.resolve(__dirname, './js/Calendar/Calendar.js'),
		CourseConsole: path.resolve(__dirname, './js/Console/index.js')
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'course.css'),
					to: path.resolve(__dirname, '../../../cl')
				}
			]
		})
	],
}
