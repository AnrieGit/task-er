const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");

module.exports = {
	configureWebpack: {
		plugins: [
			new GoogleFontsPlugin({
				fonts: [
					{ family: "Quicksand", variants: ["400", "500", "700"] },
				],
			}),
		],
	},
	devServer: {
		proxy: {
			"^/api": {
				target: "https://herokujsonserver.herokuapp.com/",
				changeOrigin: true,
				logLevel: "debug",
				pathRewrite: { "^/api": "/" },
			},
		},
	},
};
