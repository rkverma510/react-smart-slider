const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
		libraryTarget: 'commonjs2',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|bower_components|build)/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['env'],
					},
				},
				{
					loader: 'eslint-loader',
					options: {
						presets: ['env'],
					},
				},
				],
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {},
					},
				],
			},
		],
	},
	externals: {
		react: 'commonjs react', // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
	},
};
