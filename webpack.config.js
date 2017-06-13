var webpack = require('webpack');
var path = require("path");

module.exports = {
	entry: path.join(__dirname, './src/main'),
	output: {
		filename: './built/bcommon.js',
		chunkFilename: 'bcommon.js',
    	publicPath: './docs/js'
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