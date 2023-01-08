const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		Course: {
			import: path.resolve(__dirname, './index.js'),
			dependOn: 'Site'
		},
		Calendar: {
			import: path.resolve(__dirname, './js/Calendar/Calendar.js'),
			dependOn: ['Course', 'Site']
		},
		CourseConsole: {
			import: path.resolve(__dirname, './js/Console/index.js'),
			dependOn: ['Course', 'Console', 'Site']
		}
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'course.css'),
					to: path.resolve(__dirname, 'cl')
				},
				{
					from: path.resolve(__dirname, 'course.css.map'),
					to: path.resolve(__dirname, 'cl')
				},
				{
					from: path.resolve(__dirname, 'course.css'),
					to: path.resolve(__dirname, '../../../cl')
				},
				{
					from: path.resolve(__dirname, 'course.css.map'),
					to: path.resolve(__dirname, '../../../cl')
				}
			]
		})
	],
}
