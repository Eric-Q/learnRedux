var path = require('path');

var clientConfig = {
	entry: ['babel-polyfill', './src/client'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};

var serverConfig = {

};

module.exports = clientConfig;