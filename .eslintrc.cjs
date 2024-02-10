module.exports = {
	root: true,
	parser: '',
	extends: ['eslint:recommended', 'prettier', 'plugin:svelte/recommended'],
	plugins: [],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
