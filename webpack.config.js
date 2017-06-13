var webpack = require('webpack');
var path = require("path");

module.exports = {
	entry: path.join(__dirname, './src/index'),
	output: {
		filename: './built/bcommon.js'
	},
	module: {},
	externals: {
		jquery: "jQuery"
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jquery: "jquery",
			"windows.jQuery": "jquery"
		})
	]
}