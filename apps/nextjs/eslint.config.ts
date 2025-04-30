import js from "@eslint/js";
import pluginNext from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

const config = tseslint.config(
	// Base JS and TypeScript recommendations
	js.configs.recommended,
	eslintConfigPrettier,
	...tseslint.configs.recommended,
	// React recommended config with service worker globals
	{
		...pluginReact.configs.flat.recommended,
		languageOptions: {
			...pluginReact.configs.flat.recommended?.languageOptions,
			globals: {
				...globals.serviceworker,
			},
		},
	},
	// Next.js plugin with recommended and core-web-vitals rules
	{
		plugins: {
			"@next/next": pluginNext,
		},
		rules: {
			...pluginNext.configs.recommended.rules,
			...pluginNext.configs["core-web-vitals"].rules,
		},
	},
	{
		plugins: {
			"react-hooks": pluginReactHooks,
		},
		settings: { react: { version: "detect" } },
		rules: {
			...pluginReactHooks.configs.recommended.rules,
			// React scope no longer necessary with new JSX transform.
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
		},
	},
	{
		ignores: ["dist/**"],
	},
);

export default config;
