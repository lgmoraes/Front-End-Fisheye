var path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var dev = process.env.NODE_ENV === "dev";

module.exports = {
	entry: "./scripts/pages/index.js",
	output: {
		path: path.resolve(__dirname),
		filename: "index.js",
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Extract CSS in a separate file
					MiniCssExtractPlugin.loader,
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
		],
	},
	plugins: [new MiniCssExtractPlugin()],
    devtool: "source-map",
	mode: "production",
};
