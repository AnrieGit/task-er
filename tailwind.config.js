module.exports = {
	purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				tapa: {
					"50": "#f8f8f8",
					"100": "#f2f1f0",
					"200": "#dddcda",
					"300": "#c9c6c4",
					"400": "#a19c98",
					"500": "#78716c",
					"600": "#6c6661",
					"700": "#5a5551",
					"800": "#484441",
					"900": "#3b3735",
				},
			},
		},
		minWidth: {
			"0": "0",
			"1/4": "25%",
			"1/2": "50%",
			"3/4": "75%",
			full: "100%",
		},
	},
	variants: {
		extend: {},
		opacity: ["disabled"],
		borderWidth: ["hover", "active"],
	},
	plugins: [require("@tailwindcss/forms")],
};
